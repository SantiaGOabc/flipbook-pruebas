const http = require('http');
const { execFile } = require('child_process');

const CHROME = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

async function main() {
  const chrome = execFile(CHROME, [
    '--headless', '--disable-gpu', '--no-sandbox',
    `--remote-debugging-port=${PORT}`,
    '--user-data-dir=C:\\Users\\usuario\\AppData\\Local\\Temp\\opencode\\cdp-profile',
    'about:blank'
  ]);
  chrome.stderr.on('data', () => {});
  await new Promise(r => setTimeout(r, 2500));

  const targets = await getJson(`http://localhost:${PORT}/json`);
  const page = targets.find(t => t.type === 'page');
  if (!page) throw new Error('no page target');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 0;
  const pending = {};
  const errors = [];

  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending[msg.id]) { pending[msg.id](msg); delete pending[msg.id]; }
    if (msg.method === 'Runtime.exceptionThrown' || msg.method === 'Runtime.consoleAPICalled') {
      const text = JSON.stringify(msg.params).slice(0, 400);
      errors.push(text);
    }
  };
  const send = (method, params = {}) => new Promise((resolve) => {
    const mid = ++id;
    pending[mid] = resolve;
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
  await new Promise(r => { ws.onopen = r; });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Page.navigate', { url: 'http://localhost:4321/book/' });
  await new Promise(r => setTimeout(r, 9000));

  const evaljs = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
    return r.result?.result?.value;
  };

  const initial = await evaljs(`JSON.stringify({
    phase: (document.querySelector('.experience')?.className || ''),
    hasBtn: !!document.querySelector('.btn-start'),
    bookChildren: document.querySelector('.dynamic-book')?.children.length,
    coverVisible: !!document.querySelector('.cover-dynamic'),
    bodyText: document.body.innerText.slice(0, 80)
  })`);
  console.log('INITIAL:', initial);

  const clicked = await evaljs(`(() => { const b = document.querySelector('.btn-start'); if (b) { b.click(); return true; } return false; })()`);
  console.log('CLICKED:', clicked);

  await new Promise(r => setTimeout(r, 4500));
  const after = await evaljs(`JSON.stringify({
    phase: document.querySelector('.experience')?.className || '',
    heroOpacity: getComputedStyle(document.querySelector('.experience-hero')).opacity,
    bookOpacity: getComputedStyle(document.querySelector('.experience-book')).opacity,
    bookPointer: getComputedStyle(document.querySelector('.experience-book')).pointerEvents,
    flipItems: document.querySelectorAll('.stf__item').length,
    visibleCover: !!document.querySelector('.cover-dynamic:not([style*="display: none"])'),
    visiblePage: !!document.querySelector('.page.stf__item:not([style*="display: none"])'),
    bodyText: document.body.innerText.slice(0, 120)
  })`);
  console.log('AFTER:', after);

  console.log('ERRLOG (first 8):');
  (errors.slice(0, 8)).forEach(e => console.log('  ', e));

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
