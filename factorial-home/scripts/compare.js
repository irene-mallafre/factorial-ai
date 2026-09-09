// Dev-only: canonicalise DOM subtrees so the clone can be diffed against captured originals.
(function () {
  const VOLATILE_ATTRS = new Set(['id', 'aria-describedby', 'aria-controls', 'aria-labelledby', 'for'])
  function canon(el, out, depth) {
    if (el.nodeType === 3) {
      let t = el.nodeValue.replace(/\s+/g, ' ')
      if (/^(Welcome back|Good morning|Hey there|Nice to see you|Let's get to it|Ready when you are), /.test(t)) t = 'GREETING'
      if (t.trim()) out.push('  '.repeat(depth) + JSON.stringify(t))
      return
    }
    if (el.nodeType !== 1) return
    const attrs = [...el.attributes]
      .filter((a) => !VOLATILE_ATTRS.has(a.name))
      .map((a) => {
        let v = a.value
        if (a.name === 'style') {
          v = v
            .split(';')
            .map((s) => s.trim())
            .filter((s) => s && !s.startsWith('animation') && !s.startsWith('clip-path') && !/^(top|right|left|bottom|transform):/.test(s))
            .join('; ')
        }
        if (a.name === 'class') v = v.trim().split(/\s+/).join(' ')
        if (/^url\(#/.test(v) || /^gradient-/.test(v)) v = '#gradient'
        return `${a.name}=${JSON.stringify(v)}`
      })
      .sort()
    out.push('  '.repeat(depth) + '<' + el.tagName.toLowerCase() + (attrs.length ? ' ' + attrs.join(' ') : '') + '>')
    for (const c of el.childNodes) canon(c, out, depth + 1)
  }
  window.__canon = function (el) {
    const out = []
    canon(el, out, 0)
    return out
  }
  window.__parse = function (html) {
    const doc = new DOMParser().parseFromString('<body>' + html + '</body>', 'text/html')
    return doc.body.firstElementChild
  }
  window.__diff = function (a, b) {
    const n = Math.max(a.length, b.length)
    for (let i = 0; i < n; i++) {
      if (a[i] !== b[i]) return { line: i, mine: a.slice(Math.max(0, i - 2), i + 4), original: b.slice(Math.max(0, i - 2), i + 4) }
    }
    return null
  }
  window.__compare = async function (liveEl, captureFile, selectorInCapture) {
    const html = await (await fetch('/__capture/' + captureFile)).text()
    let orig = window.__parse(html)
    if (selectorInCapture) orig = orig.matches(selectorInCapture) ? orig : orig.querySelector(selectorInCapture)
    if (!orig) return { error: 'selector not found in capture' }
    if (!liveEl) return { error: 'live element missing' }
    const a = window.__canon(liveEl)
    const b = window.__canon(orig)
    return { same: a.join('\n') === b.join('\n'), mineLines: a.length, origLines: b.length, diff: window.__diff(a, b) }
  }
})()
