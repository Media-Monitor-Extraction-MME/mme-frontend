import {
  _ as e,
  s as t,
  n,
  a as r,
  b as o,
  c as a,
  i,
  x as s,
  l as d,
  e as l,
  d as c,
  t as p,
  T as m,
  g as u,
  f as h,
  h as g,
  o as b,
  j as x,
  k as v,
  F as w,
  m as f,
  p as y,
  q as _,
  A as E,
  S
} from './icon-f94fc1dd.js';
function k(e, t, n = !0) {
  return new CustomEvent(e, {
    composed: !0,
    bubbles: n,
    cancelable: !0,
    detail: t
  });
}
const T = (e, t) => new CustomEvent(e, t);
class I {
  constructor(e, t) {
    (this._events = new Map()),
      (this._isConnected = !1),
      e.addController(this),
      (this._host = e),
      (this._getTarget = t);
  }
  _getEventTarget() {
    return this._getTarget ? this._getTarget() : this._host;
  }
  hostConnected() {
    const e = this._getEventTarget();
    for (const [t, n] of this._events)
      Array.isArray(n)
        ? e.addEventListener(t, n[0], n[1])
        : e.addEventListener(t, n);
    this._isConnected = !0;
  }
  hostDisconnected() {
    const e = this._getEventTarget();
    for (const [t, n] of this._events)
      Array.isArray(n)
        ? e.removeEventListener(t, n[0], n[1])
        : e.removeEventListener(t, n);
    this._isConnected = !1;
  }
  define(e, t, n) {
    const r = e.toString();
    if (this._events.has(r)) throw new Error(`Event ${r} already defined.`);
    if (
      (n ? this._events.set(r, [t, n]) : this._events.set(r, t),
      this._isConnected)
    ) {
      const e = this._getEventTarget();
      e && e.addEventListener(r, t, n);
    }
    return t;
  }
}
let C = (e) => e;
function A() {
  const e = new WeakMap();
  let t = !1;
  return {
    get isDirty() {
      return t;
    },
    register(n, r) {
      const o = e.get(n);
      o && !o.has(r) ? o.add(r) : o || e.set(n, new Set([r])), (t = !0);
    },
    unregister(n, r) {
      const o = e.get(n);
      o && o.has(r) && (o.delete(r), (t = !0));
    },
    getRegisteredElements(n) {
      const r = e.get(n);
      return (t = !1), r;
    },
    unregisterAll(n) {
      e.delete(n), (t = !0);
    }
  };
}
function P() {
  const e = new Set(),
    t = (t) => e.has(t.constructor);
  return {
    registerAncestorClass(t) {
      e.add(t);
    },
    connectToAncestor: (e) =>
      (async function (e, t) {
        let n = e;
        for (; n.parentElement; ) {
          if (((n = n.parentElement), !n.tagName.includes('-'))) continue;
          const e = n.tagName.toLowerCase();
          if (
            (customElements.get(e) || (await customElements.whenDefined(e)),
            t(n))
          )
            return n;
        }
      })(e, t)
  };
}
function R(e, t) {
  var n;
  e.removeController(t),
    null === (n = t.hostDisconnected) || void 0 === n || n.call(t);
}
function O(e, t, n, r) {
  const o = new I(e, () => t);
  return (
    o.define('click', (e) => n(e), r),
    o.define(
      'mouseup',
      (e) => {
        1 === e.button && n(e);
      },
      r
    ),
    o.define(
      'keydown',
      (e) => {
        ('Enter' !== e.code && 'Space' !== e.code) || n(e);
      },
      r
    ),
    o
  );
}
function N(e, t, n, r) {
  const o = new I(e, () => t);
  let a;
  const i = () => (a = a && window.clearTimeout(a)),
    s = (e) => (a = i() || window.setTimeout(() => n(e), 300));
  return (
    o.define('focusin', s, r),
    o.define('mouseenter', s, r),
    o.define('touchstart', s, r),
    o.define('focusout', i, r),
    o.define('mouseleave', i, r),
    o.define('touchend', i, r),
    o.define('touchcancel', i, r),
    e.addController(o),
    o
  );
}
class D {
  constructor(e) {
    (this._isConnected = !1), (this._host = e), e.addController(this);
  }
  addController(e) {
    var t, n;
    (null !== (t = this._controllers) && void 0 !== t
      ? t
      : (this._controllers = [])
    ).push(e),
      this._isConnected &&
        (null === (n = e.hostConnected) || void 0 === n || n.call(e));
  }
  removeController(e) {
    var t;
    null === (t = this._controllers) ||
      void 0 === t ||
      t.splice(this._controllers.indexOf(e) >>> 0, 1);
  }
  requestUpdate() {
    this._host.requestUpdate();
  }
  get updateComplete() {
    return this._host.updateComplete;
  }
  hostConnected() {
    var e;
    null === (e = this._controllers) ||
      void 0 === e ||
      e.forEach((e) => e.hostConnected && e.hostConnected()),
      (this._isConnected = !0);
  }
  hostDisconnected() {
    var e;
    (this._isConnected = !1),
      null === (e = this._controllers) ||
        void 0 === e ||
        e.forEach((e) => e.hostDisconnected && e.hostDisconnected());
  }
  hostUpdate() {
    var e;
    null === (e = this._controllers) ||
      void 0 === e ||
      e.forEach((e) => e.hostUpdate && e.hostUpdate());
  }
  hostUpdated() {
    var e;
    null === (e = this._controllers) ||
      void 0 === e ||
      e.forEach((e) => e.hostUpdated && e.hostUpdated());
  }
}
const L = { rootMargin: '200px' },
  M = new Map();
function U(e, t) {
  return (
    !M.has(e) &&
      t &&
      M.set(
        e,
        (function (e) {
          return new IntersectionObserver((e) => {
            for (const t of e) {
              const e = t.target,
                n = t.isIntersecting
                  ? k('faceplate-enter', t, !1)
                  : k('faceplate-leave', t, !1);
              e.dispatchEvent(n);
            }
          }, e);
        })(t)
      ),
    M.get(e)
  );
}
class F {
  constructor(e = L) {
    this._observer = U(JSON.stringify(e), e);
  }
  observe(e) {
    this._observer.observe(e);
  }
  unobserve(e) {
    this._observer.unobserve(e);
  }
}
function V(e) {
  return !!e && 'object' == typeof e && !Array.isArray(e);
}
function B(e, t) {
  let n = null;
  try {
    const r = e.dataset[t];
    if (r) {
      const e = JSON.parse(r);
      V(e) && (n = e);
    }
  } catch (e) {}
  return n;
}
class W {
  constructor(e, t, n) {
    this._target = t;
    let r = n;
    const o = B(t, 'faceplateObserverConfig');
    o && (r = n ? Object.assign(Object.assign({}, n), o) : o),
      (this._observer = new F(r)),
      e.addController(this);
  }
  hostConnected() {
    this._observer.observe(this._target);
  }
  hostDisconnected() {
    this._observer.unobserve(this._target);
  }
}
function H(e, t, n, r) {
  const o = new D(e);
  new W(o, t, r);
  return new I(o, () => t).define('faceplate-enter', () => n()), o;
}
class G {
  constructor() {
    let e, t;
    (this.promise = new Promise((n, r) => {
      (e = n), (t = r);
    })),
      (this.resolve = e),
      (this.reject = t);
  }
}
class Y extends G {
  constructor() {
    super();
    const e = this.resolve;
    this.resolve = (t) => e((this.value = t));
  }
}
const z = new Map();
function j(e) {
  return z.has(e) || z.set(e, new G()), z.get(e);
}
function q(e) {
  return j(e).promise;
}
var $, X, K, Q, J;
!(function (e) {
  (e[(e.emergency = 0)] = 'emergency'),
    (e[(e.alert = 1)] = 'alert'),
    (e[(e.critical = 2)] = 'critical'),
    (e[(e.error = 3)] = 'error'),
    (e[(e.warning = 4)] = 'warning'),
    (e[(e.notice = 5)] = 'notice'),
    (e[(e.info = 6)] = 'info'),
    (e[(e.success = 7)] = 'success'),
    (e[(e.debug = 8)] = 'debug'),
    (e[(e.none = 9)] = 'none');
})($ || ($ = {})),
  (function (e) {
    (e.Programmatic = 'programmatic'),
      (e.Eager = 'eager'),
      (e.Action = 'action'),
      (e.Intent = 'intent'),
      (e.Lazy = 'lazy'),
      (e.Preload = 'preload');
  })(X || (X = {})),
  (function (e) {
    (e.Once = 'once'), (e.Always = 'always');
  })(K || (K = {})),
  (function (e) {
    (e.Get = 'get'), (e.Post = 'post'), (e.Dialog = 'dialog'), (e.Log = 'log');
  })(Q || (Q = {})),
  (function (e) {
    (e.Append = 'append'), (e.Replace = 'replace'), (e.Contents = 'contents');
  })(J || (J = {}));
const Z = new Map(),
  ee = () => {
    throw new Error('Class extending LoaderElement not configured!');
  };
function te(e, t) {
  Z.set(e, t);
}
class ne extends t {
  constructor() {
    super(...arguments),
      (this.readyMark = ''),
      (this.setMark = ''),
      (this.goMark = ''),
      (this.src = ''),
      (this.loading = X.Lazy),
      (this._isLoading = !1),
      (this._load = async () => {
        if (!this.isLoading)
          try {
            (this.isLoading = !0),
              this._ctrl && (this._ctrl = R(this, this._ctrl));
            const e = await (Z.get(this.constructor) || ee),
              t = e instanceof Function ? e : e.loader,
              n = e instanceof Function ? void 0 : e.runner,
              r = k('faceplate-load-start');
            let o, a;
            this.dispatchEvent(r),
              t && (o = await t(this, this.src)),
              this.setMark && j(this.setMark).resolve(),
              this.goMark && (await q(this.goMark)),
              n && (a = await n(this, o));
            const i = k('faceplate-load', {
              resource: (null == a ? void 0 : a.src) || this.src,
              src: this.src
            });
            this.dispatchEvent(i);
          } catch (e) {
            const t = k('faceplate-error', e);
            this.dispatchEvent(t);
          } finally {
            this.isLoading = !1;
          }
      });
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(e) {
    this._isLoading = !!e;
  }
  connectedCallback() {
    super.connectedCallback(), this._loaderInit();
  }
  async _loaderInit() {
    this.readyMark && (await q(this.readyMark));
    const { loading: e } = this;
    e === X.Action
      ? (this._ctrl = O(this, this, this._load))
      : e === X.Lazy
        ? (this._ctrl = H(this, this, this._load))
        : e === X.Intent
          ? (this._ctrl = N(this, this, this._load))
          : (e !== X.Eager && e !== X.Preload) || this._load();
  }
  load() {
    if (this.loading !== X.Programmatic)
      throw new Error(
        `Calling load only supported with loading=${X.Programmatic}`
      );
    return this._load();
  }
}
function re(e) {
  const t = e.headers.get('content-type');
  return null == t ? void 0 : t.split(';')[0];
}
function oe(e, t) {
  if (t.startsWith('/')) return !0;
  let n;
  try {
    n = new URL(t);
  } catch (e) {
    return !0;
  }
  const [r, o] = e.hostname.split('.').reverse(),
    [a, i] = n.hostname.split('.').reverse();
  return r === a && o === i;
}
var ae, ie;
e(
  [n({ type: String, attribute: 'readymark' })],
  ne.prototype,
  'readyMark',
  void 0
),
  e(
    [n({ type: String, attribute: 'setmark' })],
    ne.prototype,
    'setMark',
    void 0
  ),
  e([n({ type: String, attribute: 'gomark' })], ne.prototype, 'goMark', void 0),
  (function (e) {
    (e.Omit = 'omit'),
      (e.SameOrigin = 'same-origin'),
      (e.Include = 'include'),
      (e.SameDomain = 'same-domain');
  })(ae || (ae = {})),
  (function (e) {
    (e.UrlEncoded = 'application/x-www-form-urlencoded'),
      (e.FormData = 'multipart/form-data'),
      (e.JSON = 'application/json');
  })(ie || (ie = {}));
let se = () => new URL(window.location.href);
function de(e, t, n = {}) {
  return r(this, arguments, function* () {
    const r = k('faceplate-request', { resource: e, request: t });
    if ((yield yield o(r), r.defaultPrevented)) return yield o(void 0);
    const a = t,
      { enctype: i } = n;
    if (
      (i === ie.FormData
        ? delete a.headers['Content-Type']
        : i && (a.headers['Content-Type'] = i),
      i)
    ) {
      const e = n.encoders ? n.encoders[i] : void 0;
      if (!e) {
        const e = new Error(`No encoder supplied for enctype ${i}`);
        return yield yield o(k('faceplate-error', e)), yield o(void 0);
      }
      a.body = yield o(e(t.body));
    }
    a.method === Q.Get && delete a.body,
      n.credentials === ae.SameDomain
        ? oe(se(), e) && (a.credentials = ae.Include)
        : n.credentials && n.credentials !== ae.Include
          ? (a.credentials = n.credentials)
          : delete a.credentials;
    try {
      const t = yield o(fetch(e, a));
      yield yield o(k('faceplate-response', { response: t }));
    } catch (e) {
      const t =
        e instanceof Error ? e : new Error(null == e ? void 0 : e.toString());
      yield yield o(k('faceplate-error', t));
    }
  });
}
function le(e) {
  return new Error(
    `Unsupported type File given for field ${e}. Use encoding type ${ie.FormData} for file upload.`
  );
}
function ce(e) {
  const t = new URLSearchParams();
  for (const n of e) {
    if (n[1] instanceof File) throw le(n[0]);
    t.append(n[0], n[1]);
  }
  return t;
}
const pe = { enctype: ie.UrlEncoded, encoders: { [ie.UrlEncoded]: ce } },
  me = {};
class ue {
  constructor(e) {
    (this.isRequestInProgress = !1), (this.host = e);
  }
  buildRequest(e) {
    const t = {
        method: e.method || Q.Get,
        body: e.body || new FormData(),
        headers: {}
      },
      n = e.method || Q.Get;
    if (
      (e.loading !== X.Preload &&
        (t.headers.Accept = 'text/vnd.reddit.partial+html, text/html;q=0.9'),
      t.method === Q.Get)
    )
      return t;
    if (t.method !== Q.Post) throw new Error(`Unsupported method ${n}`);
    return (t.headers['Content-Type'] = ie.UrlEncoded), t;
  }
  _handleError(e) {
    const t = k('faceplate-alert', {
      level: $.error,
      message: 'Request failed',
      meta: null == e ? void 0 : e.toString()
    });
    this.host.dispatchEvent(t);
  }
  async request(e, t) {
    var n, r, o, i;
    this.isRequestInProgress = !0;
    const s = `${location.origin}${'/' === e[0] ? '' : '/'}${e}`,
      d = de(
        s,
        this.buildRequest(t || {}),
        t && t.loading === X.Preload ? me : pe
      );
    try {
      try {
        for (var l, c = !0, p = a(d); !(n = (l = await p.next()).done); ) {
          (i = l.value), (c = !1);
          try {
            const e = i;
            if ('faceplate-error' === e.type)
              return void this._handleError(e.detail);
            if ((this.host.dispatchEvent(e), e.defaultPrevented)) return;
            if ('faceplate-response' === e.type) {
              const t = e.detail.response,
                n = re(t);
              if ('text/vnd.reddit.partial+html' !== n)
                throw new Error(
                  `Unsupported content type "${n}" returned from ${s}`
                );
              return t;
            }
          } finally {
            c = !0;
          }
        }
      } catch (e) {
        r = { error: e };
      } finally {
        try {
          c || n || !(o = p.return) || (await o.call(p));
        } finally {
          if (r) throw r.error;
        }
      }
    } catch (e) {
      this._handleError(e);
    } finally {
      this.isRequestInProgress = !1;
    }
  }
}
const he = 'function' == typeof document.createRange;
var ge;
function be(e) {
  const t = e.cloneNode();
  return document.createRange().createContextualFragment(t.outerHTML)
    .children[0];
}
function xe(e, t, n) {
  const r = we(e),
    o = document.createDocumentFragment();
  for (let e = 0; e < r.length; e++) o.appendChild(r[e]);
  ve(o, t, n);
}
function ve(e, t, n) {
  switch (n) {
    case J.Append:
      return void t.appendChild(e);
    case J.Replace:
      if (!t.parentNode)
        throw new Error(
          'Attemping to use partial replace mode on target without a parent node!'
        );
      return t.parentNode.insertBefore(e, t), void t.remove();
    case J.Contents:
      return (t.textContent = ''), void t.appendChild(e);
    default:
      throw new Error(`Attempting to use unsupported partial mode '${n}'!`);
  }
}
function we(e) {
  const t = document.createElement('template');
  t.innerHTML = e;
  const n = Array.from(t.content.children);
  if (!he) return n;
  for (let e = 0; e < n.length; e++) {
    const t = n[e];
    if ('FACEPLATE-BATCH' === t.nodeName) {
      const r = be(t),
        o = customElements.get(t.nodeName.toLowerCase());
      if (!(o && r instanceof o)) continue;
      const a = r.getCurrentTarget(t),
        i = Array.from(a.children);
      if (((a.innerHTML = ''), a !== t))
        for (const e of Array.from(t.children)) r.appendChild(e);
      if (a !== t && a.nodeName.includes('-')) {
        const e = be(a);
        a.replaceWith(e);
      }
      r.batchInsert(i), (n[e] = r);
    }
  }
  return n;
}
!(function (e) {
  (e.Append = 'append'), (e.Replace = 'replace'), (e.Contents = 'contents');
})(ge || (ge = {}));
const fe = (e) => {
  var t;
  return null !== (t = null == e ? void 0 : e.toLowerCase()) && void 0 !== t
    ? t
    : '';
};
function ye(e) {
  throw 1;
}
class _e extends ne {
  constructor() {
    super(...arguments),
      (this.src = ''),
      (this.loading = X.Eager),
      (this.renderMode = J.Replace),
      (this.method = Q.Get),
      (this.alwaysShowSlot = !1),
      (this.partialRequest = new ue(this));
  }
  get isLoading() {
    return !!this.partialRequest && this.partialRequest.isRequestInProgress;
  }
  set isLoading(e) {}
  static get styles() {
    return i`:host{display:block}:host([loading=action]){cursor:pointer}`;
  }
  _shouldShowLoadingSlot() {
    var e;
    if (
      !(null === (e = this.partialRequest) || void 0 === e
        ? void 0
        : e.isRequestInProgress)
    )
      return !1;
    switch (this.loading) {
      case X.Action:
      case X.Intent:
      case X.Programmatic:
        return !0;
      case X.Eager:
      case X.Preload:
      case X.Lazy:
        return !1;
    }
    return ye(this.loading);
  }
  _shouldUsePlaceholder() {
    if (this.alwaysShowSlot || this.renderMode !== J.Replace) return !1;
    switch (this.loading) {
      case X.Lazy:
        return !0;
      case X.Action:
      case X.Eager:
      case X.Intent:
      case X.Preload:
      case X.Programmatic:
        return !1;
    }
    return ye(this.loading);
  }
  updated() {
    if (!this._shouldUsePlaceholder() || this._slotCapture) return;
    const e = this._shouldShowLoadingSlot(),
      t = Array.from(
        e ? this.querySelectorAll('[slot=loading]') : this.childNodes
      );
    (this._slotCapture = new DocumentFragment()),
      t.forEach((e) => {
        var t;
        'INPUT' !== e.nodeName &&
          (null === (t = this._slotCapture) ||
            void 0 === t ||
            t.appendChild(e));
      });
    const n = document.createElement('div');
    (n.style.minHeight = '1px'),
      (n.style.minWidth = '1px'),
      (n.style.marginBottom = '-1px'),
      e && n.setAttribute('slot', 'loading'),
      this.appendChild(n);
  }
  render() {
    var e;
    const t =
        this.loading === X.Action &&
        !(null === (e = this.partialRequest) || void 0 === e
          ? void 0
          : e.isRequestInProgress),
      n = this._shouldShowLoadingSlot();
    return s` <div tabindex="${d(t ? 0 : void 0)}"> <slot name="${d(n ? 'loading' : void 0)}"></slot> </div> `;
  }
  loadContent() {
    return this._load();
  }
  async _loadContent() {
    var e, t, n;
    if (!this.src)
      throw new Error(
        'No src attribute specified on faceplate-partial element.'
      );
    if (
      null === (e = this.partialRequest) || void 0 === e
        ? void 0
        : e.isRequestInProgress
    )
      throw new Error(
        'Request already in progress on faceplate-partial element.'
      );
    let r;
    if (
      this.method === Q.Post &&
      ((r = new FormData()), this.method === Q.Post)
    ) {
      const e = this.querySelectorAll('input[type=hidden]');
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        !n.disabled && n.name && r.append(n.name, n.value);
      }
    }
    this._slotCapture &&
      (this._shouldShowLoadingSlot()
        ? null === (t = this.querySelector('[slot=loading]')) ||
          void 0 === t ||
          t.remove()
        : (this.innerHTML = ''),
      this.appendChild(this._slotCapture));
    const o =
      null === (n = this.partialRequest) || void 0 === n
        ? void 0
        : n.request(this.src, {
            body: r,
            method: this.method,
            loading: this.loading
          });
    this.loading === X.Action && this.requestUpdate();
    const a = await o;
    return (
      a || this.loading !== X.Action || this.requestUpdate(),
      null == a ? void 0 : a.text()
    );
  }
  _renderContent(e) {
    e && this.parentElement && xe(e, this, this.renderMode);
  }
}
e([n({ type: String })], _e.prototype, 'src', void 0),
  e([n({ type: String })], _e.prototype, 'loading', void 0),
  e(
    [n({ type: String, attribute: 'render-mode' })],
    _e.prototype,
    'renderMode',
    void 0
  ),
  e([n({ converter: fe })], _e.prototype, 'method', void 0),
  e(
    [n({ type: Boolean, attribute: 'always-show-slot' })],
    _e.prototype,
    'alwaysShowSlot',
    void 0
  ),
  te(_e, {
    loader: (e) => e._loadContent(),
    runner: (e, t) => e._renderContent(t)
  });
!!window.customElements.get('faceplate-partial') ||
  window.customElements.define('faceplate-partial', _e);
const Ee = l(
  class extends c {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== p.ATTRIBUTE ||
          'class' !== e.name ||
          (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
      )
        throw Error(
          '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.'
        );
    }
    render(e) {
      return (
        ' ' +
        Object.keys(e)
          .filter((t) => e[t])
          .join(' ') +
        ' '
      );
    }
    update(e, [t]) {
      var n, r;
      if (void 0 === this.it) {
        (this.it = new Set()),
          void 0 !== e.strings &&
            (this.nt = new Set(
              e.strings
                .join(' ')
                .split(/\s/)
                .filter((e) => '' !== e)
            ));
        for (const e in t)
          t[e] &&
            !(null === (n = this.nt) || void 0 === n ? void 0 : n.has(e)) &&
            this.it.add(e);
        return this.render(t);
      }
      const o = e.element.classList;
      this.it.forEach((e) => {
        e in t || (o.remove(e), this.it.delete(e));
      });
      for (const e in t) {
        const n = !!t[e];
        n === this.it.has(e) ||
          (null === (r = this.nt) || void 0 === r ? void 0 : r.has(e)) ||
          (n ? (o.add(e), this.it.add(e)) : (o.remove(e), this.it.delete(e)));
      }
      return m;
    }
  }
);
var Se;
!(function (e) {
  (e.ExtraSmall = 'xs'), (e.Small = 'sm'), (e.Medium = 'md'), (e.Large = 'lg');
})(Se || (Se = {}));
const ke = {
    [Se.Small]: {
      label: 'pl-[var(--rem10)] pr-[var(--rem6)]',
      icon: 'pl-[var(--rem10)] pr-[var(--rem6)]',
      iconLabel: 'pl-[var(--rem10)] pr-[var(--rem6)]'
    },
    [Se.Medium]: {
      label: 'pl-[var(--rem14)] pr-[var(--rem10)]',
      icon: 'pl-[var(--rem10)] pr-[var(--rem6)]',
      iconLabel: 'px-[var(--rem10)]'
    },
    [Se.Large]: {
      label: 'pl-[var(--rem14)] pr-[var(--rem10)]',
      icon: 'px-[var(--rem14)]',
      iconLabel: 'pl-[var(--rem14)] pr-[var(--rem10)]'
    }
  },
  Te = {
    [Se.ExtraSmall]: {
      label: 'px-[var(--rem10)]',
      icon: 'px-[var(--rem6)]',
      iconLabel: 'px-[var(--rem10)]'
    },
    [Se.Small]: {
      label: 'px-[var(--rem10)]',
      icon: 'px-[var(--rem6)]',
      iconLabel: 'px-[var(--rem10)]'
    },
    [Se.Medium]: {
      label: 'px-[var(--rem14)]',
      icon: 'px-[var(--rem8)]',
      iconLabel: 'pl-[var(--rem10)] pr-[var(--rem14)]'
    },
    [Se.Large]: {
      label: 'px-[var(--rem14)]',
      icon: 'px-[var(--rem12)]',
      iconLabel: 'pl-[var(--rem10)] pr-[var(--rem14)]'
    }
  },
  Ie = {
    xs: 'button-x-small',
    sm: 'button-small',
    md: 'button-medium',
    lg: 'button-large'
  },
  Ce = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    tertiary: 'button-tertiary',
    plain: 'button-plain',
    bordered: 'button-bordered',
    destructive: 'button-destructive',
    media: 'button-media',
    brand: 'button-brand',
    success: 'button-success',
    plainInverted: 'button-plain-inverted',
    favorite: 'button-favorite',
    favoriteToggled: 'button-favorite-toggled',
    secondaryToggled: 'button-secondary-toggled',
    caution: 'button-caution',
    tab: 'button-tab'
  },
  Ae = { xs: 'text-12', sm: 'text-16', md: 'text-20', lg: 'text-20' },
  Pe = ({
    attributes: e,
    size: t = Se.Medium,
    appearance: n,
    shape: r,
    leadingIcon: o,
    trailingIcon: a,
    children: i,
    selected: s
  }) => {
    var d;
    let l = 'label';
    o && i ? (l = 'iconLabel') : i || (l = 'icon');
    const c = a ? ke : Te;
    return `${(null == e ? void 0 : e.className) || ''}\n${t ? `${Ie[t]} ${null === (d = c[t]) || void 0 === d ? void 0 : d[l]}` : ''}\n${n ? Ce[n] : ''}\n${s ? 'button-activated' : ''}\n${'square' === r ? 'rounded-[.5rem]' : ''}\n${'icon' === l ? 'icon' : ''}\n${'tab' === n ? 'flex-col' : 'items-center justify-center'}\nbutton inline-flex`;
  },
  Re = (e) => {
    const { createElement: t } = u(),
      { attributes: n, selected: r, role: o } = e,
      a = null == n ? void 0 : n.href,
      i = null == n ? void 0 : n.disabled,
      s = (({
        hideChildrenOverflow: e,
        children: t,
        screenReaderContent: n,
        trailingIcon: r,
        leadingIcon: o,
        dropdown: a,
        appearance: i,
        selected: s,
        size: d
      }) => {
        let l = 'flex';
        (t || a) && (l += ' mr-xs');
        const { html: c } = u(),
          p = c`<span class="flex items-center justify-center${e ? ' overflow-hidden' : ''}"> ${o ? c`<span class="${l}">${o}</span>` : void 0} ${t ? c`<span class="${'flex items-center gap-xs' + (e ? ' overflow-hidden' : '')}">${t}</span>` : void 0} </span> ${r}`;
        return [
          'tab' === i
            ? c` <span class="inline-flex items-center justify-center gap-xs">${p}</span> ${s ? c` <span class="w-100 ${d === Se.Small || d === Se.ExtraSmall ? 'h-[2px] -mt-[2px]' : 'h-2xs -mt-2xs'} pointer-events-none bg-primary rounded-full"></span>` : ''} `
            : p,
          n
            ? c`<faceplate-screen-reader-content>${n}</faceplate-screen-reader-content>`
            : ''
        ];
      })(Object.assign({}, e)),
      d = null != a;
    return t(
      d ? 'a' : 'button',
      Object.assign(Object.assign({ rpl: !0, role: o }, n), {
        className: `${Pe(e)} ${i && d ? 'anchor-disabled' : ''}`,
        rplSelected: r
      }),
      s
    );
  },
  Oe = (e) => {
    var { size: t = Se.Medium } = e,
      n = h(e, ['size']);
    return Re(Object.assign(Object.assign({}, n), { size: t }));
  };
function Ne(e) {
  const t = [e];
  return (t.raw = t), i(t);
}
const De = Ne(
  'faceplate-expandable-section-helper {\n  display: contents;\n  /* [rpl] just to boost the selector */\n  /*\n  Target the [open] attribute on either the root element OR the details\n  element to rotate the chevron. This is to handle rotating chevrons both\n  before and after the faceplate-expandable-section-helper component is defined.\n  \n  Before the component is defined, the [open] attribute on the component will not\n  toggle if the user clicks on details, but the [open] attribute will toggle on\n  the details element, so we need to target details too.\n\n  The reason we can\'t target only the details element is because once the web\n  component is defined, we delay toggling the [open] attribute on the details\n  element until AFTER the animation finishes. So if we only targeted the details\n  element for the chevron rotation the chevron wouldn\'t rotate until after the\n  collapse animation finished and we finally toggle the [open] attriubte on the\n  details element.\n  */\n  /*\n    Specific handling for nested menus. We only need to handle collapse menus inside of\n    expanded menus, not expanded menus inside collapsed menus because you can\'t see those!\n  */\n}\nfaceplate-expandable-section-helper > details > summary {\n  list-style-type: none;\n  /* For Safari */\n}\nfaceplate-expandable-section-helper > details > summary::marker,\nfaceplate-expandable-section-helper > details > summary::-webkit-details-marker {\n  display: none;\n}\nfaceplate-expandable-section-helper[rpl] > details > summary {\n  /* override details.less */\n  margin: 0;\n}\nfaceplate-expandable-section-helper > details > summary [icon-name=\'caret-down-outline\'] {\n  transition: transform 0.22s ease-in-out;\n}\nfaceplate-expandable-section-helper[open] summary [icon-name=\'caret-down-outline\'],\nfaceplate-expandable-section-helper:not(:defined) > details[open] summary [icon-name=\'caret-down-outline\'] {\n  transform: rotate(180deg);\n}\nfaceplate-expandable-section-helper:not([open]) summary [icon-name=\'caret-down-outline\'],\nfaceplate-expandable-section-helper:not(:defined) > details:not([open]) summary [icon-name=\'caret-down-outline\'] {\n  transform: rotate(0deg);\n}\nfaceplate-hovercard:not(:defined) > [slot=\'content\'] {\n  display: none;\n}\nfaceplate-hovercard[trigger=\'mouse\'] a,\nfaceplate-hovercard[trigger=\'mouse\'] button,\nfaceplate-hovercard[trigger=\'mouse\'] [faceplate-focusable],\nfaceplate-hovercard[trigger=\'mouse\'] [tabindex=\'0\'] {\n  outline: none;\n}\n/*\n * This is a Tailwind CSS file, it must be run through the PostCSS compiler\n * with the Tailwind plugin, not Less. The `postcss-import` plugin is also\n * needed, if you have other additions to your Tailwind entry point CSS.\n *\n * @example\n * // tailwind.css\n * @import \'@reddit/faceplate/styles/tailwind-components.css\'\n * @tailwind components;\n * @tailwind utilities;\n *\n * // styles.less\n * @import (less) \'@reddit/faceplate/faceplate.css\';\n * @import (less) \'./tailwind-build.css\';\n */\n/** Custom grid behavior for zstacks */\n.dx-zstack > * {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\n/** Text outline classes */\n.text-outline-thin-bright {\n  text-shadow: #000 1px 0 0.5px, #000 -1px 0 0.5px, #000 0 1px 0.5px, #000 0 -1px 0.5px;\n}\n.text-outline-thick-bright {\n  text-shadow: #000 1px 0 2px, #000 -1px 0 2px, #000 0 1px 1px, #000 0 -1px 1px, #000 1px 0 2px,\n    #000 -1px 0 2px, #000 0 1px 1px, #000 0 -1px 1px;\n}\n.text-outline-thin-dark {\n  text-shadow: #fff 1px 0 0.5px, #fff -1px 0 0.5px, #fff 0 1px 0.5px, #fff 0 -1px 0.5px;\n}\n.text-outline-thick-dark {\n  text-shadow: #fff 1px 0 2px, #fff -1px 0 2px, #fff 0 1px 1px, #fff 0 -1px 1px, #fff 1px 0 2px,\n    #fff -1px 0 2px, #fff 0 1px 1px, #fff 0 -1px 1px;\n}\n/** Custom border sizes */\n.border-dx-thick {\n  border-width: 2px;\n}\n.border-dx-thin {\n  border-width: 1px;\n}\n/** Custom border radius sizes */\n.rounded-dx-lg {\n  border-radius: 1.5rem;\n}\n.rounded-dx-md {\n  border-radius: 1rem;\n}\n.rounded-dx-sm {\n  border-radius: 0.5rem;\n}\n/** Custom z-index for form dialogs */\n.z-dialog {\n  z-index: 100;\n}\n/** Variables for app-defined colors */\n:root {\n  --dx-text-color-light: inherit;\n  --dx-text-color-dark: inherit;\n  --dx-bg-color-light: initial;\n  --dx-bg-color-dark: initial;\n  --dx-border-color-light: initial;\n  --dx-border-color-dark: initial;\n}\n/** App-defined background color */\n.dx-bg-color,\n.light .dx-bg-color {\n  background-color: var(--dx-bg-color-light);\n}\n/** App-defined border color */\n.dx-border-color,\n.light .dx-border-color {\n  border-color: var(--dx-border-color-light);\n}\n/** App-defined text color */\n.dx-text-color,\n.light .dx-text-color {\n  color: var(--dx-text-color-light);\n}\n/** Theme override dark mode */\n.dark .dx-bg-color {\n  background-color: var(--dx-bg-color-dark);\n}\n.dark .dx-border-color {\n  border-color: var(--dx-border-color-dark);\n}\n.dark .dx-text-color {\n  color: var(--dx-text-color-dark);\n}\n/** System specified dark mode */\n@media (prefers-color-scheme: dark) {\n  .dx-bg-color {\n    background-color: var(--dx-bg-color-dark);\n  }\n\n  .dx-text-color {\n    color: var(--dx-text-color-dark);\n  }\n\n  .dx-border-color {\n    border-color: var(--dx-border-color-dark);\n  }\n}\n.-translate-x-1\\/2, .-translate-x-2\\/4, .-translate-x-4xl, .-translate-x-\\[4px\\], .-translate-y-1\\/2, .-translate-y-2\\/4, .translate-x-0, .translate-x-1\\/2, .translate-x-4xl, .translate-y-0, .translate-y-1\\/2, .translate-y-1\\/4, .translate-y-4xl, .translate-y-px, .-rotate-12, .rotate-180, .rotate-45, .rotate-90, .scale-0, .scale-100, .scale-150, .scale-50, .scale-75, .scale-90, .scale-\\[\\.68\\], .scale-\\[1\\.2\\], .scale-\\[2\\], .scale-\\[4\\], .-scale-x-100, .scale-x-100, .scale-x-\\[-1\\], .transform, .before\\:scale-\\[--emote-scale\\]::before, .first\\:rotate-\\[-8deg\\], .last\\:rotate-\\[8deg\\], .hover\\:scale-110, .hover\\:scale-\\[2\\], .enabled\\:hover\\:scale-\\[1\\.2\\], .group-hover\\:scale-\\[1\\.4\\], .group-aria-pressed\\:scale-\\[1\\.4\\] {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n.group-hover\\:-translate-y-\\[10px\\] {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n.group-aria-pressed\\:-translate-y-\\[10px\\] {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n}\n.snap-x {\n  --tw-scroll-snap-strictness: proximity;\n}\n.from-\\[color\\:\\#FFD63670\\], .from-\\[color\\:var\\(--color-neutral-background\\)\\], .from-\\[color\\:var\\(--color-neutral-background-weak\\)\\], .from-berrypurple-900, .to-lightblue-500, .to-transparent, .group-hover\\:from-\\[color\\:var\\(--color-neutral-background-hover\\)\\] {\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n}\n.shadow-\\[0_0_0_4px_var\\(--color-primary-background\\)\\], .shadow-\\[0_2px_0_0_var\\(--color-secondary-background-selected\\)\\], .shadow-\\[0px_-40px_21px_var\\(--color-neutral-background\\)\\], .shadow-md, .shadow-none, .shadow-sm, .shadow-xs, .hover\\:shadow-\\[0_0_0_2px_var\\(--color-primary-background\\)\\], .xs\\:shadow-none, .s\\:shadow-none, .m\\:shadow-md {\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n}\n.ring {\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n}\n.backdrop-filter {\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 960px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1200px;\n  }\n}\n@media (min-width: 1416px) {\n  .container {\n    max-width: 1416px;\n  }\n}\n@media (min-width: 1472px) {\n  .container {\n    max-width: 1472px;\n  }\n}\n@media (min-width: 1920px) {\n  .container {\n    max-width: 1920px;\n  }\n}\n/* Anchor component */\n.a {\n    border: var(--line-a-focus) solid transparent;\n    border-radius: 2px;\n    color: var(--color-a-default);\n    font-size: 1em;\n    padding: 0 var(--spacer-a-px);\n    margin: calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus)));\n    text-decoration: none;\n    display: inline-block;\n  }\n.a:hover {\n    color: var(--color-a-hover);\n  }\n.a:visited:not(.no-visited),\n  .a.visited:not(.no-visited) {\n    color: var(--color-a-visited);\n  }\n/* Button component */\n.\\!button {\n    background: var(--button-color-background) !important;\n    border-radius: 999px !important;\n    border: none !important;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent) !important;\n    box-shadow: var(--button-shadow) !important;\n    box-sizing: border-box !important;\n    color: var(--button-color-text) !important;\n    cursor: pointer !important;\n    display: inline-block !important;\n    font: var(--button-font) !important;\n    height: var(--button-height) !important;\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px))) !important;\n    overflow: hidden !important;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px)) !important;\n    text-align: center !important;\n    text-decoration: none !important;\n    text-overflow: ellipsis !important;\n    white-space: nowrap !important;\n    outline-offset: 0 !important;\n    --button-border-color: var(--button-border-color-default) !important;\n    --button-border-width: var(--button-border-width-default) !important;\n    --button-color-background: var(--button-color-background-default) !important;\n    --button-color-text: var(--button-color-text-default) !important;\n    /* Media query prevents sticky :hover states on mobile */\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.button {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    outline-offset: 0;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n    /* Media query prevents sticky :hover states on mobile */\n    /* This is :active, AKA Pressed */\n    /* This is Selected */\n  }\n.\\!button.icon {\n    width: var(--button-height) !important;\n  }\n.button.icon {\n    width: var(--button-height);\n  }\n.button.\\!icon {\n    width: var(--button-height) !important;\n  }\n.\\!button .button-icon {\n    margin-right: var(--spacer-xs) !important;\n  }\n.button .button-icon {\n    margin-right: var(--spacer-xs);\n  }\n.\\!button .dropdown-icon {\n    transform: rotate(0deg) !important;\n    transition: transform 0.2s ease-in-out !important;\n  }\n.button .dropdown-icon {\n    transform: rotate(0deg);\n    transition: transform 0.2s ease-in-out;\n  }\n.\\!button:focus {\n    --button-color-overlay: var(--color-button-overlay-focus) !important;\n  }\n.button:focus {\n    --button-color-overlay: var(--color-button-overlay-focus);\n  }\n.\\!button.hover {\n    --button-color-overlay: var(--color-button-overlay-focus) !important;\n    --button-border-color: var(--button-border-color-hover) !important;\n    --button-color-background: var(--button-color-background-hover) !important;\n    --button-color-text: var(--button-color-text-hover, var(--button-color-text-default)) !important;\n  }\n.button.hover {\n    --button-color-overlay: var(--color-button-overlay-focus);\n    --button-border-color: var(--button-border-color-hover);\n    --button-color-background: var(--button-color-background-hover);\n    --button-color-text: var(--button-color-text-hover, var(--button-color-text-default));\n  }\n@media (hover: hover) {\n    .\\!button:hover {\n      --button-color-overlay: var(--color-button-overlay-focus) !important;\n      --button-border-color: var(--button-border-color-hover) !important;\n      --button-color-background: var(--button-color-background-hover) !important;\n      --button-color-text: var(--button-color-text-hover, var(--button-color-text-default)) !important;\n    }\n    .button:hover {\n      --button-color-overlay: var(--color-button-overlay-focus);\n      --button-border-color: var(--button-border-color-hover);\n      --button-color-background: var(--button-color-background-hover);\n      --button-color-text: var(--button-color-text-hover, var(--button-color-text-default));\n    }\n  }\n.\\!button:active,\n  .\\!button.active {\n    --button-color-overlay: var(--color-button-overlay-active) !important;\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active) !important;\n  }\n.button:active,\n  .button.active {\n    --button-color-overlay: var(--color-button-overlay-active);\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active);\n  }\n.\\!button:active,\n  .\\!button.active {\n    --button-color-overlay: var(--color-button-overlay-active) !important;\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active) !important;\n  }\n\n  .button.\\!active {\n    --button-color-overlay: var(--color-button-overlay-active) !important;\n    --button-color-background: linear-gradient(var(--color-interactive-pressed), var(--color-interactive-pressed)),\n      var(--button-color-background-active) !important;\n  }\n.\\!button:disabled,\n  .\\!button.anchor-disabled {\n    --button-border-color-hover: var(--button-border-color-default) !important;\n    --button-color-background: var(--button-color-background-disabled) !important;\n    --button-color-text: var(--button-color-text-disabled) !important;\n    cursor: not-allowed !important;\n    pointer-events: none !important;\n  }\n.button:disabled,\n  .button.anchor-disabled {\n    --button-border-color-hover: var(--button-border-color-default);\n    --button-color-background: var(--button-color-background-disabled);\n    --button-color-text: var(--button-color-text-disabled);\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n.\\!button:disabled,\n  .\\!button.anchor-disabled {\n    --button-border-color-hover: var(--button-border-color-default) !important;\n    --button-color-background: var(--button-color-background-disabled) !important;\n    --button-color-text: var(--button-color-text-disabled) !important;\n    cursor: not-allowed !important;\n    pointer-events: none !important;\n  }\n.\\!button.button-activated {\n    --button-border-color: var(--button-border-color-activated) !important;\n    --button-color-background: var(--button-color-background-activated) !important;\n    --button-color-text: var(--button-color-text-activated) !important;\n  }\n.button.button-activated {\n    --button-border-color: var(--button-border-color-activated);\n    --button-color-background: var(--button-color-background-activated);\n    --button-color-text: var(--button-color-text-activated);\n  }\n.button-shell {\n    background: var(--button-color-background);\n    border-radius: 999px;\n    border: none;\n    border: var(--button-border-width, 0) solid var(--button-border-color, transparent);\n    box-shadow: var(--button-shadow);\n    box-sizing: border-box;\n    color: var(--button-color-text);\n    cursor: pointer;\n    display: inline-block;\n    font: var(--button-font);\n    height: var(--button-height);\n    line-height: calc(var(--button-height) - (2 * var(--button-border-width, 0px)));\n    overflow: hidden;\n    padding: 0 calc(var(--button-padding) - var(--button-border-width, 0px));\n    text-align: center;\n    text-decoration: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    outline-offset: 0;\n    --button-border-color: var(--button-border-color-default);\n    --button-border-width: var(--button-border-width-default);\n    --button-color-background: var(--button-color-background-default);\n    --button-color-text: var(--button-color-text-default);\n  }\n.button-shell.icon {\n    width: var(--button-height);\n  }\n.button-shell.\\!icon {\n    width: var(--button-height) !important;\n  }\n.button-large {\n    --button-height: var(--size-button-lg-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-lg);\n    --button-border-width-default: var(--line-button-lg-border);\n  }\n.button-medium {\n    --button-height: var(--size-button-md-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-md);\n    --button-border-width-default: var(--line-button-md-border);\n  }\n.button-small {\n    --button-height: var(--size-button-sm-h);\n    --button-padding: var(--spacer-2xs);\n    --button-font: var(--font-button-sm);\n    --button-border-width-default: var(--line-button-sm-border);\n  }\n.button-x-small {\n    --button-height: var(--size-button-xs-h);\n    --button-padding: var(--spacer-sm);\n    --button-font: var(--font-button-xs);\n    --button-border-width-default: var(--line-button-xs-border);\n  }\n.button-primary {\n    --button-color-background-default: var(--color-primary-background);\n    --button-color-background-focus: var(--color-primary-background);\n    --button-color-background-hover: var(--color-button-primary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-primary-background-hover), var(--color-button-primary-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-background-activated: var(--color-button-primary-background-activated);\n    --button-color-text-default: var(--color-global-white);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-color-text-activated: var(--color-button-primary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-secondary {\n    --button-color-background-default: var(--color-button-secondary-background);\n    --button-color-background-focus: var(--color-button-secondary-background-focus);\n    --button-color-background-hover: var(--color-button-secondary-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-background-disabled: var(--color-button-secondary-background-disabled);\n    --button-color-background-activated: var(--color-button-secondary-background-activated);\n    --button-color-text-default: var(--color-button-secondary-text);\n    --button-color-text-disabled: var(--color-button-secondary-text-disabled);\n    --button-color-text-activated: var(--color-button-secondary-text-activated);\n    --button-border-color-default: var(--color-button-secondary-border);\n  }\n.button-tertiary {\n    --button-color-background-default: var(--color-button-tertiary-background);\n    --button-color-background-focus: var(--color-button-tertiary-background-focus);\n    --button-color-background-hover: var(--color-button-tertiary-background-hover);\n    --button-color-background-disabled: var(--color-button-tertiary-background-disabled);\n    --button-color-background-activated: var(--color-button-tertiary-background-activated);\n    --button-color-text-default: var(--color-button-tertiary-text);\n    --button-color-text-disabled: var(--color-button-tertiary-text-disabled);\n    --button-color-text-activated: var(--color-button-tertiary-text-activated);\n    --button-border-color-default: transparent;\n  }\n.button-plain {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: var(--color-button-plain-background-hover);\n    --button-color-background-disabled: var(--color-button-plain-background-disabled);\n    --button-color-background-activated: var(--color-button-plain-background-activated);\n    --button-color-background-active: linear-gradient(var(--color-button-secondary-background-hover), var(--color-button-secondary-background-hover));\n    --button-color-text-default: var(--color-button-plain-text);\n    --button-color-text-disabled: var(--color-button-plain-text-disabled);\n    --button-color-text-activated: var(--color-button-plain-text-activated);\n    --button-color-text-hover: var(--color-button-plain-text-hover);\n    --button-border-color-default: transparent;\n  }\n.button-bordered {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: transparent;\n    --button-color-background-active: linear-gradient(transparent, transparent);\n    --button-color-background-disabled: transparent;\n    --button-color-background-activated: var(--color-button-secondary-background-activated);\n    --button-color-text-default: var(--color-secondary-plain);\n    --button-color-text-disabled: var(--color-interactive-content-disabled);\n    --button-color-text-activated: var(--color-neutral-content-strong);\n    --button-color-text-hover: var(--color-secondary-plain-hover);\n    --button-border-color-default: var(--color-neutral-border-medium);\n    --button-border-color-hover: var(--color-neutral-border-strong);\n    --button-border-color-active: var(--color-neutral-border-strong);\n    --button-border-color-activated: var(--color-neutral-border-strong);\n    --button-border-color-disabled: var(--color-neutral-content-disabled);\n    --button-border-width-default: var(--line-sm);\n    --button-border-width-activated: var(--line-sm);\n  }\n.button-bordered-opaque {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: transparent;\n    --button-color-background-hover: transparent;\n    --button-color-background-active: linear-gradient(transparent, transparent);\n    --button-color-background-disabled: transparent;\n    --button-color-background-activated: var(--color-button-secondary-background-activated);\n    --button-color-text-default: var(--color-secondary-plain);\n    --button-color-text-disabled: var(--color-interactive-content-disabled);\n    --button-color-text-activated: var(--color-neutral-content-strong);\n    --button-color-text-hover: var(--color-secondary-plain-hover);\n    --button-border-color-default: var(--color-neutral-border-medium);\n    --button-border-color-hover: var(--color-neutral-border-strong);\n    --button-border-color-active: var(--color-neutral-border-strong);\n    --button-border-color-activated: var(--color-neutral-border-strong);\n    --button-border-color-disabled: var(--color-neutral-content-disabled);\n    --button-border-width-default: var(--line-sm);\n    --button-border-width-activated: var(--line-sm);\n    --button-color-background-default: var(--color-neutral-background);\n    --button-color-background-focus: var(--color-button-secondary-background-focus);\n    --button-color-background-hover: var(--color-button-secondary-background-hover);\n    --button-border-color-default: var(--color-neutral-border-weak);\n    --button-border-color-hover: var(--color-neutral-border-weak);\n    --button-border-color-active: var(--color-neutral-border-weak);\n    --button-border-color-activated: var(--color-neutral-border-weak);\n  }\n.button-destructive {\n    --button-color-background-default: var(--color-danger-background);\n    --button-color-background-focus: var(--color-danger-background-hover);\n    --button-color-background-hover: var(--color-danger-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-danger-background-hover), var(--color-danger-background-hover));\n    --button-color-background-disabled: var(--color-button-secondary-background-disabled);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-button-secondary-text-disabled);\n    --button-border-color-default: transparent;\n    --button-border-color-hover: transparent;\n    --button-border-color-active: transparent;\n  }\n.button-media {\n    --button-color-background-default: var(--color-media-background);\n    --button-color-background-focus: var(--color-media-background-hover);\n    --button-color-background-hover: var(--color-media-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-media-background-hover), var(--color-media-background-hover));\n    --button-border-color-activated: var(--color-neutral-content-strong);\n    --button-color-text-default: white;\n    --button-color-text-disabled: var(--color-media-onbackground-disabled);\n    --button-color-background-disabled: var(--color-media-background);\n  }\n.button-brand {\n    --button-color-background-default: var(--color-brand-background);\n    --button-color-background-hover: var(--color-brand-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-brand-background-hover), var(--color-brand-background-hover));\n    --button-color-background-disabled: var(--color-interactive-background-disabled);\n    --button-color-text-default: var(--color-danger-content-default);\n    --button-color-text-disabled: var(--color-interactive-content-disabled);\n    --button-border-color-default: transparent;\n  }\n.button-success {\n    --button-color-background-default: var(--color-success-background);\n    --button-color-background-focus: var(--color-success-background-hover);\n    --button-color-background-hover: var(--color-success-background-hover);\n    --button-color-background-active: linear-gradient(var(--color-success-background-hover), var(--color-success-background-hover));\n    --button-color-background-disabled: var(--color-button-primary-background-disabled);\n    --button-color-text-default: var(--color-success-onBackground);\n    --button-color-text-disabled: var(--color-button-primary-text-disabled);\n    --button-border-color-default: transparent;\n  }\n.button-plain-inverted {\n    --button-color-background-default: transparent;\n    --button-color-background-focus: var(--color-neutral-content);\n    --button-color-background-hover: var(--color-neutral-content);\n    --button-color-background-active: var(--color-interactive-pressed);\n    --button-color-background-disabled: transparent;\n    --button-color-text-default: var(--color-neutral-background-weak);\n    --button-color-text-disabled: var(--color-neutral-content);\n    --button-border-color-default: transparent;\n    --button-color-background-activated: var(--color-button-plain-inverted-background-activated);\n    --button-color-text-activated: var(--color-button-plain-inverted-text-activated);\n  }\n/* Featured avatar */\n.full-snoo-xs {\n    --full-snoo-xs-size: var(--rem48);\n    height: var(--full-snoo-xs-size);\n    width: var(--full-snoo-xs-size);\n    margin-top: 0.125rem;\n  }\n.full-snoo-xs > img {\n    width: var(--rem36);\n    bottom: calc(-1 * 0.1875rem);\n  }\n.full-snoo-sm {\n    --full-snoo-sm-size: var(--rem64);\n    height: var(--full-snoo-sm-size);\n    width: var(--full-snoo-sm-size);\n    margin-top: 0.125rem;\n  }\n.full-snoo-sm > img {\n    width: var(--rem48);\n    bottom: calc(-1 * var(--rem4));\n  }\n.full-snoo-md {\n    --full-snoo-md-size: var(--rem88);\n    height: var(--full-snoo-md-size);\n    width: var(--full-snoo-md-size);\n    margin-top: var(--spacer-2xs);\n  }\n.full-snoo-md > img {\n    width: var(--rem64);\n    bottom: calc(-1 * var(--rem6));\n  }\n.full-snoo-lg {\n    --full-snoo-lg-size: var(--rem144);\n    height: var(--full-snoo-lg-size);\n    width: var(--full-snoo-lg-size);\n    margin-top: 0.375rem;\n  }\n.full-snoo-lg > img {\n    width: 6.625rem;\n    bottom: calc(-1 * var(--rem10));\n  }\n.full-snoo-xl {\n    --full-snoo-xl-size: var(--rem192);\n    height: var(--full-snoo-xl-size);\n    width: var(--full-snoo-xl-size);\n    margin-top: var(--spacer-xs);\n  }\n.full-snoo-xl > img {\n    width: 8.8125rem;\n    bottom: calc(-1 * var(--rem14));\n  }\n.full-snoo-2xl {\n    --full-snoo-2xl-size: var(--rem320);\n    height: var(--full-snoo-2xl-size);\n    width: var(--full-snoo-2xl-size);\n    margin-top: var(--spacer-sm);\n  }\n.full-snoo-2xl > img {\n    width: 14.75rem;\n    bottom: calc(-1 * var(--rem22));\n  }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.\\!visible {\n  visibility: visible !important;\n}\n.visible {\n  visibility: visible;\n}\n.invisible {\n  visibility: hidden;\n}\n.collapse {\n  visibility: collapse;\n}\n.static {\n  position: static;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.sticky {\n  position: sticky;\n}\n.inset-0 {\n  inset: 0px;\n}\n.inset-1\\/2 {\n  inset: 50%;\n}\n.-bottom-1\\/2 {\n  bottom: -50%;\n}\n.-bottom-100 {\n  bottom: -100%;\n}\n.-bottom-md {\n  bottom: -1rem;\n}\n.-bottom-xl {\n  bottom: -2rem;\n}\n.-left-1\\/2 {\n  left: -50%;\n}\n.-left-100 {\n  left: -100%;\n}\n.-left-\\[1rem\\] {\n  left: -1rem;\n}\n.-left-\\[99999px\\] {\n  left: -99999px;\n}\n.-right-2xs {\n  right: -0.25rem;\n}\n.-right-\\[\\.65rem\\] {\n  right: -.65rem;\n}\n.-right-\\[\\.75rem\\] {\n  right: -.75rem;\n}\n.-right-\\[0\\.0625rem\\] {\n  right: -0.0625rem;\n}\n.-right-\\[0\\.0825rem\\] {\n  right: -0.0825rem;\n}\n.-right-\\[0\\.125rem\\] {\n  right: -0.125rem;\n}\n.-right-px {\n  right: -1px;\n}\n.-top-\\[35px\\] {\n  top: -35px;\n}\n.-top-\\[9rem\\] {\n  top: -9rem;\n}\n.-top-xs {\n  top: -0.5rem;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-100 {\n  bottom: 100%;\n}\n.bottom-2xl {\n  bottom: 3rem;\n}\n.bottom-\\[-42px\\] {\n  bottom: -42px;\n}\n.bottom-\\[-50px\\] {\n  bottom: -50px;\n}\n.bottom-\\[-70px\\] {\n  bottom: -70px;\n}\n.bottom-\\[0px\\] {\n  bottom: 0px;\n}\n.bottom-\\[13px\\] {\n  bottom: 13px;\n}\n.bottom-\\[29px\\] {\n  bottom: 29px;\n}\n.bottom-\\[38px\\] {\n  bottom: 38px;\n}\n.bottom-\\[40px\\] {\n  bottom: 40px;\n}\n.bottom-\\[42px\\] {\n  bottom: 42px;\n}\n.bottom-\\[44px\\] {\n  bottom: 44px;\n}\n.bottom-\\[4px\\] {\n  bottom: 4px;\n}\n.bottom-\\[52px\\] {\n  bottom: 52px;\n}\n.bottom-\\[60px\\] {\n  bottom: 60px;\n}\n.bottom-\\[6px\\] {\n  bottom: 6px;\n}\n.bottom-\\[9\\%\\] {\n  bottom: 9%;\n}\n.bottom-\\[96px\\] {\n  bottom: 96px;\n}\n.bottom-\\[var\\(--rem20\\)\\] {\n  bottom: var(--rem20);\n}\n.bottom-lg {\n  bottom: 1.5rem;\n}\n.bottom-md {\n  bottom: 1rem;\n}\n.bottom-xl {\n  bottom: 2rem;\n}\n.bottom-xs {\n  bottom: 0.5rem;\n}\n.left-0 {\n  left: 0px;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-2\\/4 {\n  left: 50%;\n}\n.left-2xs {\n  left: 0.25rem;\n}\n.left-\\[-12\\.5px\\] {\n  left: -12.5px;\n}\n.left-\\[\\.25rem\\] {\n  left: .25rem;\n}\n.left-\\[\\.425rem\\] {\n  left: .425rem;\n}\n.left-\\[16px\\] {\n  left: 16px;\n}\n.left-\\[28px\\] {\n  left: 28px;\n}\n.left-\\[2rem\\] {\n  left: 2rem;\n}\n.left-\\[4px\\] {\n  left: 4px;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.left-\\[70px\\] {\n  left: 70px;\n}\n.left-\\[8px\\] {\n  left: 8px;\n}\n.left-\\[unset\\] {\n  left: unset;\n}\n.left-\\[var\\(--rem20\\)\\] {\n  left: var(--rem20);\n}\n.left-md {\n  left: 1rem;\n}\n.left-sm {\n  left: 0.75rem;\n}\n.left-xl {\n  left: 2rem;\n}\n.left-xs {\n  left: 0.5rem;\n}\n.right-0 {\n  right: 0px;\n}\n.right-1\\/2 {\n  right: 50%;\n}\n.right-2xs {\n  right: 0.25rem;\n}\n.right-\\[-18px\\] {\n  right: -18px;\n}\n.right-\\[-8px\\] {\n  right: -8px;\n}\n.right-\\[\\.25rem\\] {\n  right: .25rem;\n}\n.right-\\[\\.425rem\\] {\n  right: .425rem;\n}\n.right-\\[17px\\] {\n  right: 17px;\n}\n.right-\\[19px\\] {\n  right: 19px;\n}\n.right-\\[24px\\] {\n  right: 24px;\n}\n.right-\\[29px\\] {\n  right: 29px;\n}\n.right-\\[2rem\\] {\n  right: 2rem;\n}\n.right-\\[40px\\] {\n  right: 40px;\n}\n.right-\\[58px\\] {\n  right: 58px;\n}\n.right-\\[5px\\] {\n  right: 5px;\n}\n.right-\\[70px\\] {\n  right: 70px;\n}\n.right-\\[74px\\] {\n  right: 74px;\n}\n.right-\\[8px\\] {\n  right: 8px;\n}\n.right-lg {\n  right: 1.5rem;\n}\n.right-md {\n  right: 1rem;\n}\n.right-sm {\n  right: 0.75rem;\n}\n.right-xl {\n  right: 2rem;\n}\n.right-xs {\n  right: 0.5rem;\n}\n.top-0 {\n  top: 0px;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-100 {\n  top: 100%;\n}\n.top-2\\/4 {\n  top: 50%;\n}\n.top-2xs {\n  top: 0.25rem;\n}\n.top-3xl {\n  top: 4rem;\n}\n.top-\\[-0\\.25rem\\] {\n  top: -0.25rem;\n}\n.top-\\[-1px\\] {\n  top: -1px;\n}\n.top-\\[-8px\\] {\n  top: -8px;\n}\n.top-\\[128px\\] {\n  top: 128px;\n}\n.top-\\[24px\\] {\n  top: 24px;\n}\n.top-\\[2px\\] {\n  top: 2px;\n}\n.top-\\[2rem\\] {\n  top: 2rem;\n}\n.top-\\[37px\\] {\n  top: 37px;\n}\n.top-\\[50\\%\\] {\n  top: 50%;\n}\n.top-\\[56px\\] {\n  top: 56px;\n}\n.top-\\[58px\\] {\n  top: 58px;\n}\n.top-\\[5px\\] {\n  top: 5px;\n}\n.top-\\[72px\\] {\n  top: 72px;\n}\n.top-\\[8px\\] {\n  top: 8px;\n}\n.top-\\[calc\\(var\\(--shreddit-header-height\\)\\+1px\\)\\] {\n  top: calc(var(--shreddit-header-height) + 1px);\n}\n.top-\\[unset\\] {\n  top: unset;\n}\n.top-lg {\n  top: 1.5rem;\n}\n.top-md {\n  top: 1rem;\n}\n.top-px {\n  top: 1px;\n}\n.top-sm {\n  top: 0.75rem;\n}\n.top-xl {\n  top: 2rem;\n}\n.top-xs {\n  top: 0.5rem;\n}\n.isolate {\n  isolation: isolate;\n}\n.-z-10 {\n  z-index: -10;\n}\n.z-0 {\n  z-index: 0;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-30 {\n  z-index: 30;\n}\n.z-40 {\n  z-index: 40;\n}\n.z-50 {\n  z-index: 50;\n}\n.z-\\[-1\\] {\n  z-index: -1;\n}\n.z-\\[1001\\] {\n  z-index: 1001;\n}\n.z-\\[100\\] {\n  z-index: 100;\n}\n.z-\\[101\\] {\n  z-index: 101;\n}\n.z-\\[1\\] {\n  z-index: 1;\n}\n.z-\\[2\\] {\n  z-index: 2;\n}\n.z-\\[3\\] {\n  z-index: 3;\n}\n.z-\\[4\\] {\n  z-index: 4;\n}\n.z-\\[5\\] {\n  z-index: 5;\n}\n.z-\\[9999\\] {\n  z-index: 9999;\n}\n.z-\\[unset\\] {\n  z-index: unset;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.order-3 {\n  order: 3;\n}\n.order-first {\n  order: -9999;\n}\n.order-last {\n  order: 9999;\n}\n.col-\\[2_\\/_-1\\] {\n  grid-column: 2 / -1;\n}\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.col-span-full {\n  grid-column: 1 / -1;\n}\n.col-start-1 {\n  grid-column-start: 1;\n}\n.col-start-2 {\n  grid-column-start: 2;\n}\n.col-start-3 {\n  grid-column-start: 3;\n}\n.col-end-1 {\n  grid-column-end: 1;\n}\n.col-end-13 {\n  grid-column-end: 13;\n}\n.col-end-2 {\n  grid-column-end: 2;\n}\n.col-end-3 {\n  grid-column-end: 3;\n}\n.col-end-4 {\n  grid-column-end: 4;\n}\n.col-end-\\[-1\\] {\n  grid-column-end: -1;\n}\n.row-\\[1_\\/_2\\] {\n  grid-row: 1 / 2;\n}\n.row-span-1 {\n  grid-row: span 1 / span 1;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.row-span-full {\n  grid-row: 1 / -1;\n}\n.row-start-1 {\n  grid-row-start: 1;\n}\n.row-start-2 {\n  grid-row-start: 2;\n}\n.row-start-3 {\n  grid-row-start: 3;\n}\n.row-start-4 {\n  grid-row-start: 4;\n}\n.row-start-5 {\n  grid-row-start: 5;\n}\n.row-end-2 {\n  grid-row-end: 2;\n}\n.row-end-3 {\n  grid-row-end: 3;\n}\n.row-end-4 {\n  grid-row-end: 4;\n}\n.row-end-5 {\n  grid-row-end: 5;\n}\n.row-end-6 {\n  grid-row-end: 6;\n}\n.row-end-auto {\n  grid-row-end: auto;\n}\n.float-right {\n  float: right;\n}\n.float-left {\n  float: left;\n}\n.\\!m-0 {\n  margin: 0px !important;\n}\n.-m-\\[0\\.5rem\\] {\n  margin: -0.5rem;\n}\n.-m-\\[4px\\] {\n  margin: -4px;\n}\n.-m-xs {\n  margin: -0.5rem;\n}\n.m-0 {\n  margin: 0px;\n}\n.m-2xs {\n  margin: 0.25rem;\n}\n.m-\\[16px\\] {\n  margin: 16px;\n}\n.m-\\[2px\\] {\n  margin: 2px;\n}\n.m-\\[4px\\] {\n  margin: 4px;\n}\n.m-\\[6px\\] {\n  margin: 6px;\n}\n.m-\\[8px\\] {\n  margin: 8px;\n}\n.m-auto {\n  margin: auto;\n}\n.m-lg {\n  margin: 1.5rem;\n}\n.m-md {\n  margin: 1rem;\n}\n.m-xl {\n  margin: 2rem;\n}\n.m-xs {\n  margin: 0.5rem;\n}\n.-mx-md {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n.-mx-sm {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n.-mx-xs {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.mx-2xs {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.mx-\\[-16px\\] {\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.mx-\\[12px\\] {\n  margin-left: 12px;\n  margin-right: 12px;\n}\n.mx-\\[4px\\] {\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.mx-\\[6px\\] {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mx-lg {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n.mx-md {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mx-sm {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.mx-xs {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.my-0 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.my-2xs {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.my-\\[-10px\\] {\n  margin-top: -10px;\n  margin-bottom: -10px;\n}\n.my-\\[10px\\] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.my-\\[16px\\] {\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n.my-\\[18px\\] {\n  margin-top: 18px;\n  margin-bottom: 18px;\n}\n.my-\\[1px\\] {\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n.my-\\[20px\\] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.my-\\[6px\\] {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.my-lg {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.my-md {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-px {\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n.my-sm {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.my-xl {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.my-xs {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.-mb-2xs {\n  margin-bottom: -0.25rem;\n}\n.-mb-\\[35px\\] {\n  margin-bottom: -35px;\n}\n.-mb-\\[4px\\] {\n  margin-bottom: -4px;\n}\n.-mb-\\[80px\\] {\n  margin-bottom: -80px;\n}\n.-mb-md {\n  margin-bottom: -1rem;\n}\n.-mb-xs {\n  margin-bottom: -0.5rem;\n}\n.-ml-2xs {\n  margin-left: -0.25rem;\n}\n.-ml-\\[var\\(--rem10\\)\\] {\n  margin-left: calc(var(--rem10) * -1);\n}\n.-ml-\\[var\\(--rem12\\)\\] {\n  margin-left: calc(var(--rem12) * -1);\n}\n.-ml-\\[var\\(--rem14\\)\\] {\n  margin-left: calc(var(--rem14) * -1);\n}\n.-ml-\\[var\\(--rem16\\)\\] {\n  margin-left: calc(var(--rem16) * -1);\n}\n.-ml-\\[var\\(--rem18\\)\\] {\n  margin-left: calc(var(--rem18) * -1);\n}\n.-ml-\\[var\\(--rem20\\)\\] {\n  margin-left: calc(var(--rem20) * -1);\n}\n.-ml-\\[var\\(--rem4\\)\\] {\n  margin-left: calc(var(--rem4) * -1);\n}\n.-ml-\\[var\\(--rem6\\)\\] {\n  margin-left: calc(var(--rem6) * -1);\n}\n.-ml-\\[var\\(--rem8\\)\\] {\n  margin-left: calc(var(--rem8) * -1);\n}\n.-ml-md {\n  margin-left: -1rem;\n}\n.-ml-px {\n  margin-left: -1px;\n}\n.-ml-xs {\n  margin-left: -0.5rem;\n}\n.-mr-2xs {\n  margin-right: -0.25rem;\n}\n.-mr-\\[7px\\] {\n  margin-right: -7px;\n}\n.-mr-xs {\n  margin-right: -0.5rem;\n}\n.-mt-2xs {\n  margin-top: -0.25rem;\n}\n.-mt-3xl {\n  margin-top: -4rem;\n}\n.-mt-\\[20px\\] {\n  margin-top: -20px;\n}\n.-mt-\\[2px\\] {\n  margin-top: -2px;\n}\n.-mt-\\[var\\(--page-y-padding\\)\\] {\n  margin-top: calc(var(--page-y-padding) * -1);\n}\n.-mt-lg {\n  margin-top: -1.5rem;\n}\n.-mt-md {\n  margin-top: -1rem;\n}\n.-mt-xl {\n  margin-top: -2rem;\n}\n.-mt-xs {\n  margin-top: -0.5rem;\n}\n.mb-0 {\n  margin-bottom: 0px;\n}\n.mb-2xl {\n  margin-bottom: 3rem;\n}\n.mb-2xs {\n  margin-bottom: 0.25rem;\n}\n.mb-3xl {\n  margin-bottom: 4rem;\n}\n.mb-4xl {\n  margin-bottom: 6rem;\n}\n.mb-\\[-10\\%\\] {\n  margin-bottom: -10%;\n}\n.mb-\\[-2px\\] {\n  margin-bottom: -2px;\n}\n.mb-\\[-32px\\] {\n  margin-bottom: -32px;\n}\n.mb-\\[-40px\\] {\n  margin-bottom: -40px;\n}\n.mb-\\[0\\.25rem\\] {\n  margin-bottom: 0.25rem;\n}\n.mb-\\[0\\.5rem\\] {\n  margin-bottom: 0.5rem;\n}\n.mb-\\[1\\.25rem\\] {\n  margin-bottom: 1.25rem;\n}\n.mb-\\[10px\\] {\n  margin-bottom: 10px;\n}\n.mb-\\[12px\\] {\n  margin-bottom: 12px;\n}\n.mb-\\[14px\\] {\n  margin-bottom: 14px;\n}\n.mb-\\[16px\\] {\n  margin-bottom: 16px;\n}\n.mb-\\[1px\\] {\n  margin-bottom: 1px;\n}\n.mb-\\[2\\.5rem\\] {\n  margin-bottom: 2.5rem;\n}\n.mb-\\[20px\\] {\n  margin-bottom: 20px;\n}\n.mb-\\[2px\\] {\n  margin-bottom: 2px;\n}\n.mb-\\[2rem\\] {\n  margin-bottom: 2rem;\n}\n.mb-\\[3px\\] {\n  margin-bottom: 3px;\n}\n.mb-\\[4px\\] {\n  margin-bottom: 4px;\n}\n.mb-\\[52px\\] {\n  margin-bottom: 52px;\n}\n.mb-\\[8px\\] {\n  margin-bottom: 8px;\n}\n.mb-\\[calc\\(var\\(--page-y-padding\\)_\\*_-1\\)\\] {\n  margin-bottom: calc(var(--page-y-padding) * -1);\n}\n.mb-lg {\n  margin-bottom: 1.5rem;\n}\n.mb-md {\n  margin-bottom: 1rem;\n}\n.mb-px {\n  margin-bottom: 1px;\n}\n.mb-sm {\n  margin-bottom: 0.75rem;\n}\n.mb-xl {\n  margin-bottom: 2rem;\n}\n.mb-xs {\n  margin-bottom: 0.5rem;\n}\n.ml-0 {\n  margin-left: 0px;\n}\n.ml-2xl {\n  margin-left: 3rem;\n}\n.ml-2xs {\n  margin-left: 0.25rem;\n}\n.ml-\\[-\\.25rem\\] {\n  margin-left: -.25rem;\n}\n.ml-\\[-14px\\] {\n  margin-left: -14px;\n}\n.ml-\\[-16px\\] {\n  margin-left: -16px;\n}\n.ml-\\[-1px\\] {\n  margin-left: -1px;\n}\n.ml-\\[-1rem\\] {\n  margin-left: -1rem;\n}\n.ml-\\[0\\.125rem\\] {\n  margin-left: 0.125rem;\n}\n.ml-\\[11px\\] {\n  margin-left: 11px;\n}\n.ml-\\[12px\\] {\n  margin-left: 12px;\n}\n.ml-\\[15px\\] {\n  margin-left: 15px;\n}\n.ml-\\[2\\.5rem\\] {\n  margin-left: 2.5rem;\n}\n.ml-\\[2\\.75rem\\] {\n  margin-left: 2.75rem;\n}\n.ml-\\[22px\\] {\n  margin-left: 22px;\n}\n.ml-\\[28px\\] {\n  margin-left: 28px;\n}\n.ml-\\[2px\\] {\n  margin-left: 2px;\n}\n.ml-\\[2rem\\] {\n  margin-left: 2rem;\n}\n.ml-\\[3px\\] {\n  margin-left: 3px;\n}\n.ml-\\[4px\\] {\n  margin-left: 4px;\n}\n.ml-\\[6px\\] {\n  margin-left: 6px;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.ml-lg {\n  margin-left: 1.5rem;\n}\n.ml-md {\n  margin-left: 1rem;\n}\n.ml-px {\n  margin-left: 1px;\n}\n.ml-sm {\n  margin-left: 0.75rem;\n}\n.ml-xl {\n  margin-left: 2rem;\n}\n.ml-xs {\n  margin-left: 0.5rem;\n}\n.mr-0 {\n  margin-right: 0px;\n}\n.mr-2xs {\n  margin-right: 0.25rem;\n}\n.mr-\\[-1px\\] {\n  margin-right: -1px;\n}\n.mr-\\[-4px\\] {\n  margin-right: -4px;\n}\n.mr-\\[-8px\\] {\n  margin-right: -8px;\n}\n.mr-\\[0\\.75rem\\] {\n  margin-right: 0.75rem;\n}\n.mr-\\[10px\\] {\n  margin-right: 10px;\n}\n.mr-\\[12px\\] {\n  margin-right: 12px;\n}\n.mr-\\[15px\\] {\n  margin-right: 15px;\n}\n.mr-\\[2px\\] {\n  margin-right: 2px;\n}\n.mr-\\[3px\\] {\n  margin-right: 3px;\n}\n.mr-\\[4px\\] {\n  margin-right: 4px;\n}\n.mr-\\[6px\\] {\n  margin-right: 6px;\n}\n.mr-\\[8px\\] {\n  margin-right: 8px;\n}\n.mr-\\[calc\\(var\\(--size-button-sm-h\\)-var\\(--rem10\\)-var\\(--button-border-width-default\\)\\)\\] {\n  margin-right: calc(var(--size-button-sm-h) - var(--rem10) - var(--button-border-width-default));\n}\n.mr-\\[var\\(--rem6\\)\\] {\n  margin-right: var(--rem6);\n}\n.mr-auto {\n  margin-right: auto;\n}\n.mr-lg {\n  margin-right: 1.5rem;\n}\n.mr-md {\n  margin-right: 1rem;\n}\n.mr-sm {\n  margin-right: 0.75rem;\n}\n.mr-xl {\n  margin-right: 2rem;\n}\n.mr-xs {\n  margin-right: 0.5rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-2xl {\n  margin-top: 3rem;\n}\n.mt-2xs {\n  margin-top: 0.25rem;\n}\n.mt-3xl {\n  margin-top: 4rem;\n}\n.mt-4xl {\n  margin-top: 6rem;\n}\n.mt-5xl {\n  margin-top: 8rem;\n}\n.mt-\\[-0\\.125rem\\] {\n  margin-top: -0.125rem;\n}\n.mt-\\[-0\\.25rem\\] {\n  margin-top: -0.25rem;\n}\n.mt-\\[-14px\\] {\n  margin-top: -14px;\n}\n.mt-\\[-21px\\] {\n  margin-top: -21px;\n}\n.mt-\\[-2px\\] {\n  margin-top: -2px;\n}\n.mt-\\[-4px\\] {\n  margin-top: -4px;\n}\n.mt-\\[-66px\\] {\n  margin-top: -66px;\n}\n.mt-\\[0\\.375rem\\] {\n  margin-top: 0.375rem;\n}\n.mt-\\[0\\.4375rem\\] {\n  margin-top: 0.4375rem;\n}\n.mt-\\[1\\.5rem\\] {\n  margin-top: 1.5rem;\n}\n.mt-\\[100px\\] {\n  margin-top: 100px;\n}\n.mt-\\[10px\\] {\n  margin-top: 10px;\n}\n.mt-\\[12px\\] {\n  margin-top: 12px;\n}\n.mt-\\[14px\\] {\n  margin-top: 14px;\n}\n.mt-\\[150px\\] {\n  margin-top: 150px;\n}\n.mt-\\[16px\\] {\n  margin-top: 16px;\n}\n.mt-\\[1px\\] {\n  margin-top: 1px;\n}\n.mt-\\[2\\.5rem\\] {\n  margin-top: 2.5rem;\n}\n.mt-\\[20px\\] {\n  margin-top: 20px;\n}\n.mt-\\[24px\\] {\n  margin-top: 24px;\n}\n.mt-\\[28px\\] {\n  margin-top: 28px;\n}\n.mt-\\[2px\\] {\n  margin-top: 2px;\n}\n.mt-\\[42px\\] {\n  margin-top: 42px;\n}\n.mt-\\[4px\\] {\n  margin-top: 4px;\n}\n.mt-\\[5px\\] {\n  margin-top: 5px;\n}\n.mt-\\[60px\\] {\n  margin-top: 60px;\n}\n.mt-\\[68px\\] {\n  margin-top: 68px;\n}\n.mt-\\[6px\\] {\n  margin-top: 6px;\n}\n.mt-\\[8px\\] {\n  margin-top: 8px;\n}\n.mt-\\[var\\(--rem20\\)\\] {\n  margin-top: var(--rem20);\n}\n.mt-auto {\n  margin-top: auto;\n}\n.mt-lg {\n  margin-top: 1.5rem;\n}\n.mt-md {\n  margin-top: 1rem;\n}\n.mt-sm {\n  margin-top: 0.75rem;\n}\n.mt-xl {\n  margin-top: 2rem;\n}\n.mt-xs {\n  margin-top: 0.5rem;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.box-content {\n  box-sizing: content-box;\n}\n.line-clamp-1 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.line-clamp-12 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 12;\n}\n.line-clamp-2 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.line-clamp-3 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.line-clamp-4 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n.line-clamp-5 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5;\n}\n.line-clamp-6 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 6;\n}\n.line-clamp-8 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 8;\n}\n.\\!block {\n  display: block !important;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.\\!flex {\n  display: flex !important;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.inline-table {\n  display: inline-table;\n}\n.grid {\n  display: grid;\n}\n.inline-grid {\n  display: inline-grid;\n}\n.contents {\n  display: contents;\n}\n.list-item {\n  display: list-item;\n}\n.\\!hidden {\n  display: none !important;\n}\n.hidden {\n  display: none;\n}\n.aspect-\\[3\\/4\\] {\n  aspect-ratio: 3/4;\n}\n.aspect-\\[4\\/3\\] {\n  aspect-ratio: 4/3;\n}\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n.\\!h-auto {\n  height: auto !important;\n}\n.h-0 {\n  height: 0px;\n}\n.h-100 {\n  height: 100%;\n}\n.h-2xl {\n  height: 3rem;\n}\n.h-2xs {\n  height: 0.25rem;\n}\n.h-3xl {\n  height: 4rem;\n}\n.h-4xl {\n  height: 6rem;\n}\n.h-5xl {\n  height: 8rem;\n}\n.h-\\[\\.25rem\\] {\n  height: .25rem;\n}\n.h-\\[\\.375rem\\] {\n  height: .375rem;\n}\n.h-\\[\\.625rem\\] {\n  height: .625rem;\n}\n.h-\\[1\\.25rem\\] {\n  height: 1.25rem;\n}\n.h-\\[1\\.5rem\\] {\n  height: 1.5rem;\n}\n.h-\\[1\\.7rem\\] {\n  height: 1.7rem;\n}\n.h-\\[100px\\] {\n  height: 100px;\n}\n.h-\\[100vh\\] {\n  height: 100vh;\n}\n.h-\\[1024px\\] {\n  height: 1024px;\n}\n.h-\\[104px\\] {\n  height: 104px;\n}\n.h-\\[10px\\] {\n  height: 10px;\n}\n.h-\\[111px\\] {\n  height: 111px;\n}\n.h-\\[1120px\\] {\n  height: 1120px;\n}\n.h-\\[112px\\] {\n  height: 112px;\n}\n.h-\\[114px\\] {\n  height: 114px;\n}\n.h-\\[115px\\] {\n  height: 115px;\n}\n.h-\\[120px\\] {\n  height: 120px;\n}\n.h-\\[126px\\] {\n  height: 126px;\n}\n.h-\\[12px\\] {\n  height: 12px;\n}\n.h-\\[12rem\\] {\n  height: 12rem;\n}\n.h-\\[135\\%\\] {\n  height: 135%;\n}\n.h-\\[148px\\] {\n  height: 148px;\n}\n.h-\\[14px\\] {\n  height: 14px;\n}\n.h-\\[160px\\] {\n  height: 160px;\n}\n.h-\\[16px\\] {\n  height: 16px;\n}\n.h-\\[170px\\] {\n  height: 170px;\n}\n.h-\\[180px\\] {\n  height: 180px;\n}\n.h-\\[185px\\] {\n  height: 185px;\n}\n.h-\\[192px\\] {\n  height: 192px;\n}\n.h-\\[195px\\] {\n  height: 195px;\n}\n.h-\\[1px\\] {\n  height: 1px;\n}\n.h-\\[1rem\\] {\n  height: 1rem;\n}\n.h-\\[2\\.25rem\\] {\n  height: 2.25rem;\n}\n.h-\\[2\\.5rem\\] {\n  height: 2.5rem;\n}\n.h-\\[2\\.87rem\\] {\n  height: 2.87rem;\n}\n.h-\\[200px\\] {\n  height: 200px;\n}\n.h-\\[20px\\] {\n  height: 20px;\n}\n.h-\\[210px\\] {\n  height: 210px;\n}\n.h-\\[213px\\] {\n  height: 213px;\n}\n.h-\\[21px\\] {\n  height: 21px;\n}\n.h-\\[22px\\] {\n  height: 22px;\n}\n.h-\\[232px\\] {\n  height: 232px;\n}\n.h-\\[240px\\] {\n  height: 240px;\n}\n.h-\\[24px\\] {\n  height: 24px;\n}\n.h-\\[250px\\] {\n  height: 250px;\n}\n.h-\\[260px\\] {\n  height: 260px;\n}\n.h-\\[280px\\] {\n  height: 280px;\n}\n.h-\\[28px\\] {\n  height: 28px;\n}\n.h-\\[298px\\] {\n  height: 298px;\n}\n.h-\\[2px\\] {\n  height: 2px;\n}\n.h-\\[2rem\\] {\n  height: 2rem;\n}\n.h-\\[3\\.25rem\\] {\n  height: 3.25rem;\n}\n.h-\\[3\\.2rem\\] {\n  height: 3.2rem;\n}\n.h-\\[3\\.5rem\\] {\n  height: 3.5rem;\n}\n.h-\\[300px\\] {\n  height: 300px;\n}\n.h-\\[305px\\] {\n  height: 305px;\n}\n.h-\\[30px\\] {\n  height: 30px;\n}\n.h-\\[316px\\] {\n  height: 316px;\n}\n.h-\\[320px\\] {\n  height: 320px;\n}\n.h-\\[324px\\] {\n  height: 324px;\n}\n.h-\\[32px\\] {\n  height: 32px;\n}\n.h-\\[350px\\] {\n  height: 350px;\n}\n.h-\\[360px\\] {\n  height: 360px;\n}\n.h-\\[36px\\] {\n  height: 36px;\n}\n.h-\\[374px\\] {\n  height: 374px;\n}\n.h-\\[376px\\] {\n  height: 376px;\n}\n.h-\\[38px\\] {\n  height: 38px;\n}\n.h-\\[391px\\] {\n  height: 391px;\n}\n.h-\\[396px\\] {\n  height: 396px;\n}\n.h-\\[3rem\\] {\n  height: 3rem;\n}\n.h-\\[4\\.5rem\\] {\n  height: 4.5rem;\n}\n.h-\\[400px\\] {\n  height: 400px;\n}\n.h-\\[40px\\] {\n  height: 40px;\n}\n.h-\\[42px\\] {\n  height: 42px;\n}\n.h-\\[432px\\] {\n  height: 432px;\n}\n.h-\\[434px\\] {\n  height: 434px;\n}\n.h-\\[438px\\] {\n  height: 438px;\n}\n.h-\\[472px\\] {\n  height: 472px;\n}\n.h-\\[48px\\] {\n  height: 48px;\n}\n.h-\\[494px\\] {\n  height: 494px;\n}\n.h-\\[4px\\] {\n  height: 4px;\n}\n.h-\\[4rem\\] {\n  height: 4rem;\n}\n.h-\\[5\\.5rem\\] {\n  height: 5.5rem;\n}\n.h-\\[500px\\] {\n  height: 500px;\n}\n.h-\\[506px\\] {\n  height: 506px;\n}\n.h-\\[50px\\] {\n  height: 50px;\n}\n.h-\\[518px\\] {\n  height: 518px;\n}\n.h-\\[51px\\] {\n  height: 51px;\n}\n.h-\\[520px\\] {\n  height: 520px;\n}\n.h-\\[52px\\] {\n  height: 52px;\n}\n.h-\\[550px\\] {\n  height: 550px;\n}\n.h-\\[56px\\] {\n  height: 56px;\n}\n.h-\\[580px\\] {\n  height: 580px;\n}\n.h-\\[584px\\] {\n  height: 584px;\n}\n.h-\\[58px\\] {\n  height: 58px;\n}\n.h-\\[5rem\\] {\n  height: 5rem;\n}\n.h-\\[60px\\] {\n  height: 60px;\n}\n.h-\\[62px\\] {\n  height: 62px;\n}\n.h-\\[630px\\] {\n  height: 630px;\n}\n.h-\\[63px\\] {\n  height: 63px;\n}\n.h-\\[66px\\] {\n  height: 66px;\n}\n.h-\\[68px\\] {\n  height: 68px;\n}\n.h-\\[6px\\] {\n  height: 6px;\n}\n.h-\\[6rem\\] {\n  height: 6rem;\n}\n.h-\\[700px\\] {\n  height: 700px;\n}\n.h-\\[70vh\\] {\n  height: 70vh;\n}\n.h-\\[72px\\] {\n  height: 72px;\n}\n.h-\\[74px\\] {\n  height: 74px;\n}\n.h-\\[768px\\] {\n  height: 768px;\n}\n.h-\\[76px\\] {\n  height: 76px;\n}\n.h-\\[78px\\] {\n  height: 78px;\n}\n.h-\\[80px\\] {\n  height: 80px;\n}\n.h-\\[80vh\\] {\n  height: 80vh;\n}\n.h-\\[82px\\] {\n  height: 82px;\n}\n.h-\\[84px\\] {\n  height: 84px;\n}\n.h-\\[88px\\] {\n  height: 88px;\n}\n.h-\\[8rem\\] {\n  height: 8rem;\n}\n.h-\\[90vh\\] {\n  height: 90vh;\n}\n.h-\\[91px\\] {\n  height: 91px;\n}\n.h-\\[93px\\] {\n  height: 93px;\n}\n.h-\\[96px\\] {\n  height: 96px;\n}\n.h-\\[98px\\] {\n  height: 98px;\n}\n.h-\\[calc\\(100vh-4rem\\)\\] {\n  height: calc(100vh - 4rem);\n}\n.h-\\[calc\\(100vh-8rem\\)\\] {\n  height: calc(100vh - 8rem);\n}\n.h-\\[var\\(--accessory-container-height\\)\\] {\n  height: var(--accessory-container-height);\n}\n.h-\\[var\\(--emote-btn-size\\)\\] {\n  height: var(--emote-btn-size);\n}\n.h-\\[var\\(--icon-badge-container-height\\)\\] {\n  height: var(--icon-badge-container-height);\n}\n.h-\\[var\\(--list-height\\)\\] {\n  height: var(--list-height);\n}\n.h-\\[var\\(--marketplace-modal-height\\)\\] {\n  height: var(--marketplace-modal-height);\n}\n.h-\\[var\\(--modal-height\\)\\] {\n  height: var(--modal-height);\n}\n.h-auto {\n  height: auto;\n}\n.h-fit {\n  height: fit-content;\n}\n.h-full {\n  height: 100%;\n}\n.h-header-large {\n  height: var(--shreddit-header-large-height);\n}\n.h-header-small {\n  height: var(--shreddit-header-height);\n}\n.h-lg {\n  height: 1.5rem;\n}\n.h-md {\n  height: 1rem;\n}\n.h-min {\n  height: min-content;\n}\n.h-px {\n  height: 1px;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-screen-without-header {\n  height: calc(var(--viewport-height,100vh) - var(--shreddit-header-height) - 1px);\n}\n.h-screen-without-header-large {\n  height: calc(var(--viewport-height,100vh) - var(--shreddit-header-large-height) - 1px);\n}\n.h-sm {\n  height: 0.75rem;\n}\n.h-xl {\n  height: 2rem;\n}\n.h-xs {\n  height: 0.5rem;\n}\n.max-h-0 {\n  max-height: 0px;\n}\n.max-h-2xl {\n  max-height: 3rem;\n}\n.max-h-5xl {\n  max-height: 8rem;\n}\n.max-h-\\[1\\.5rem\\] {\n  max-height: 1.5rem;\n}\n.max-h-\\[1000px\\] {\n  max-height: 1000px;\n}\n.max-h-\\[100vh\\] {\n  max-height: 100vh;\n}\n.max-h-\\[100vw\\] {\n  max-height: 100vw;\n}\n.max-h-\\[1120px\\] {\n  max-height: 1120px;\n}\n.max-h-\\[12rem\\] {\n  max-height: 12rem;\n}\n.max-h-\\[150px\\] {\n  max-height: 150px;\n}\n.max-h-\\[18rem\\] {\n  max-height: 18rem;\n}\n.max-h-\\[1920px\\] {\n  max-height: 1920px;\n}\n.max-h-\\[192px\\] {\n  max-height: 192px;\n}\n.max-h-\\[19rem\\] {\n  max-height: 19rem;\n}\n.max-h-\\[228px\\] {\n  max-height: 228px;\n}\n.max-h-\\[232px\\] {\n  max-height: 232px;\n}\n.max-h-\\[24rem\\] {\n  max-height: 24rem;\n}\n.max-h-\\[25\\.5rem\\] {\n  max-height: 25.5rem;\n}\n.max-h-\\[250px\\] {\n  max-height: 250px;\n}\n.max-h-\\[253px\\] {\n  max-height: 253px;\n}\n.max-h-\\[25vh\\] {\n  max-height: 25vh;\n}\n.max-h-\\[260px\\] {\n  max-height: 260px;\n}\n.max-h-\\[276px\\] {\n  max-height: 276px;\n}\n.max-h-\\[294px\\] {\n  max-height: 294px;\n}\n.max-h-\\[2rem\\] {\n  max-height: 2rem;\n}\n.max-h-\\[300px\\] {\n  max-height: 300px;\n}\n.max-h-\\[30vh\\] {\n  max-height: 30vh;\n}\n.max-h-\\[320px\\] {\n  max-height: 320px;\n}\n.max-h-\\[336px\\] {\n  max-height: 336px;\n}\n.max-h-\\[350px\\] {\n  max-height: 350px;\n}\n.max-h-\\[370px\\] {\n  max-height: 370px;\n}\n.max-h-\\[400px\\] {\n  max-height: 400px;\n}\n.max-h-\\[40px\\] {\n  max-height: 40px;\n}\n.max-h-\\[40vh\\] {\n  max-height: 40vh;\n}\n.max-h-\\[432px\\] {\n  max-height: 432px;\n}\n.max-h-\\[472px\\] {\n  max-height: 472px;\n}\n.max-h-\\[500px\\] {\n  max-height: 500px;\n}\n.max-h-\\[50vh\\] {\n  max-height: 50vh;\n}\n.max-h-\\[520px\\] {\n  max-height: 520px;\n}\n.max-h-\\[540px\\] {\n  max-height: 540px;\n}\n.max-h-\\[590px\\] {\n  max-height: 590px;\n}\n.max-h-\\[600px\\] {\n  max-height: 600px;\n}\n.max-h-\\[6rem\\] {\n  max-height: 6rem;\n}\n.max-h-\\[711px\\] {\n  max-height: 711px;\n}\n.max-h-\\[740px\\] {\n  max-height: 740px;\n}\n.max-h-\\[768px\\] {\n  max-height: 768px;\n}\n.max-h-\\[80vh\\] {\n  max-height: 80vh;\n}\n.max-h-\\[90vh\\] {\n  max-height: 90vh;\n}\n.max-h-\\[95vh\\] {\n  max-height: 95vh;\n}\n.max-h-\\[calc\\(100vh-128px\\)\\] {\n  max-height: calc(100vh - 128px);\n}\n.max-h-\\[calc\\(100vh-var\\(--shreddit-header-height\\)-15px-10px\\)\\] {\n  max-height: calc(100vh - var(--shreddit-header-height) - 15px - 10px);\n}\n.max-h-\\[calc\\(var\\(--dvh-unit\\)\\*100-var\\(--shreddit-header-height\\)-1px\\)\\] {\n  max-height: calc(var(--dvh-unit) * 100 - var(--shreddit-header-height) - 1px);\n}\n.max-h-\\[max\\(23vw\\2c 250px\\)\\] {\n  max-height: max(23vw,250px);\n}\n.max-h-\\[unset\\] {\n  max-height: unset;\n}\n.max-h-\\[var\\(--modal-height\\)\\] {\n  max-height: var(--modal-height);\n}\n.max-h-\\[var\\(--rem20\\)\\] {\n  max-height: var(--rem20);\n}\n.max-h-dvh {\n  max-height: 100dvh;\n}\n.max-h-full {\n  max-height: 100%;\n}\n.max-h-none {\n  max-height: none;\n}\n.max-h-screen {\n  max-height: 100vh;\n}\n.max-h-xl {\n  max-height: 2rem;\n}\n.min-h-4xl {\n  min-height: 6rem;\n}\n.min-h-5xl {\n  min-height: 8rem;\n}\n.min-h-\\[100px\\] {\n  min-height: 100px;\n}\n.min-h-\\[10px\\] {\n  min-height: 10px;\n}\n.min-h-\\[10rem\\] {\n  min-height: 10rem;\n}\n.min-h-\\[128px\\] {\n  min-height: 128px;\n}\n.min-h-\\[160px\\] {\n  min-height: 160px;\n}\n.min-h-\\[1rem\\] {\n  min-height: 1rem;\n}\n.min-h-\\[20px\\] {\n  min-height: 20px;\n}\n.min-h-\\[24px\\] {\n  min-height: 24px;\n}\n.min-h-\\[2rem\\] {\n  min-height: 2rem;\n}\n.min-h-\\[32px\\] {\n  min-height: 32px;\n}\n.min-h-\\[34px\\] {\n  min-height: 34px;\n}\n.min-h-\\[36px\\] {\n  min-height: 36px;\n}\n.min-h-\\[400px\\] {\n  min-height: 400px;\n}\n.min-h-\\[40px\\] {\n  min-height: 40px;\n}\n.min-h-\\[42px\\] {\n  min-height: 42px;\n}\n.min-h-\\[44px\\] {\n  min-height: 44px;\n}\n.min-h-\\[56px\\] {\n  min-height: 56px;\n}\n.min-h-\\[584px\\] {\n  min-height: 584px;\n}\n.min-h-\\[600px\\] {\n  min-height: 600px;\n}\n.min-h-\\[640px\\] {\n  min-height: 640px;\n}\n.min-h-\\[64px\\] {\n  min-height: 64px;\n}\n.min-h-\\[7rem\\] {\n  min-height: 7rem;\n}\n.min-h-\\[80px\\] {\n  min-height: 80px;\n}\n.min-h-\\[84px\\] {\n  min-height: 84px;\n}\n.min-h-\\[93px\\] {\n  min-height: 93px;\n}\n.min-h-\\[auto\\] {\n  min-height: auto;\n}\n.min-h-\\[calc\\(100vh-60px\\)\\] {\n  min-height: calc(100vh - 60px);\n}\n.min-h-\\[calc\\(100vh-var\\(--shreddit-header-height\\)-var\\(--page-y-padding\\)\\)\\] {\n  min-height: calc(100vh - var(--shreddit-header-height) - var(--page-y-padding));\n}\n.min-h-\\[min\\(20vw\\2c 150px\\)\\] {\n  min-height: min(20vw,150px);\n}\n.min-h-full {\n  min-height: 100%;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.min-h-screen-without-header {\n  min-height: calc(var(--viewport-height,100vh) - var(--shreddit-header-height) - 1px);\n}\n.\\!w-md {\n  width: 1rem !important;\n}\n.w-0 {\n  width: 0px;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-1\\/3 {\n  width: 33.333333%;\n}\n.w-1\\/6 {\n  width: 16.666667%;\n}\n.w-100 {\n  width: 100%;\n}\n.w-11\\/12 {\n  width: 91.666667%;\n}\n.w-2\\/12 {\n  width: 16.666667%;\n}\n.w-2\\/3 {\n  width: 66.666667%;\n}\n.w-2xl {\n  width: 3rem;\n}\n.w-2xs {\n  width: 0.25rem;\n}\n.w-3\\/5 {\n  width: 60%;\n}\n.w-3\\/6 {\n  width: 50%;\n}\n.w-3xl {\n  width: 4rem;\n}\n.w-4\\/5 {\n  width: 80%;\n}\n.w-4xl {\n  width: 6rem;\n}\n.w-5\\/6 {\n  width: 83.333333%;\n}\n.w-5xl {\n  width: 8rem;\n}\n.w-\\[\\.25rem\\] {\n  width: .25rem;\n}\n.w-\\[\\.375rem\\] {\n  width: .375rem;\n}\n.w-\\[\\.625rem\\] {\n  width: .625rem;\n}\n.w-\\[1\\.25rem\\] {\n  width: 1.25rem;\n}\n.w-\\[1\\.5rem\\] {\n  width: 1.5rem;\n}\n.w-\\[10\\%\\] {\n  width: 10%;\n}\n.w-\\[100px\\] {\n  width: 100px;\n}\n.w-\\[100vw\\] {\n  width: 100vw;\n}\n.w-\\[1024px\\] {\n  width: 1024px;\n}\n.w-\\[104px\\] {\n  width: 104px;\n}\n.w-\\[1080px\\] {\n  width: 1080px;\n}\n.w-\\[10px\\] {\n  width: 10px;\n}\n.w-\\[11\\.5px\\] {\n  width: 11.5px;\n}\n.w-\\[1120px\\] {\n  width: 1120px;\n}\n.w-\\[112px\\] {\n  width: 112px;\n}\n.w-\\[114px\\] {\n  width: 114px;\n}\n.w-\\[1164px\\] {\n  width: 1164px;\n}\n.w-\\[11rem\\] {\n  width: 11rem;\n}\n.w-\\[1200px\\] {\n  width: 1200px;\n}\n.w-\\[120px\\] {\n  width: 120px;\n}\n.w-\\[124px\\] {\n  width: 124px;\n}\n.w-\\[128px\\] {\n  width: 128px;\n}\n.w-\\[12px\\] {\n  width: 12px;\n}\n.w-\\[12rem\\] {\n  width: 12rem;\n}\n.w-\\[130px\\] {\n  width: 130px;\n}\n.w-\\[138px\\] {\n  width: 138px;\n}\n.w-\\[144px\\] {\n  width: 144px;\n}\n.w-\\[146px\\] {\n  width: 146px;\n}\n.w-\\[148px\\] {\n  width: 148px;\n}\n.w-\\[14px\\] {\n  width: 14px;\n}\n.w-\\[150px\\] {\n  width: 150px;\n}\n.w-\\[15rem\\] {\n  width: 15rem;\n}\n.w-\\[160px\\] {\n  width: 160px;\n}\n.w-\\[164px\\] {\n  width: 164px;\n}\n.w-\\[16px\\] {\n  width: 16px;\n}\n.w-\\[170px\\] {\n  width: 170px;\n}\n.w-\\[174px\\] {\n  width: 174px;\n}\n.w-\\[184px\\] {\n  width: 184px;\n}\n.w-\\[190px\\] {\n  width: 190px;\n}\n.w-\\[1px\\] {\n  width: 1px;\n}\n.w-\\[1rem\\] {\n  width: 1rem;\n}\n.w-\\[2\\.25rem\\] {\n  width: 2.25rem;\n}\n.w-\\[2\\.5rem\\] {\n  width: 2.5rem;\n}\n.w-\\[2\\.87rem\\] {\n  width: 2.87rem;\n}\n.w-\\[200\\%\\] {\n  width: 200%;\n}\n.w-\\[200px\\] {\n  width: 200px;\n}\n.w-\\[204px\\] {\n  width: 204px;\n}\n.w-\\[20px\\] {\n  width: 20px;\n}\n.w-\\[20rem\\] {\n  width: 20rem;\n}\n.w-\\[210px\\] {\n  width: 210px;\n}\n.w-\\[220px\\] {\n  width: 220px;\n}\n.w-\\[228px\\] {\n  width: 228px;\n}\n.w-\\[22px\\] {\n  width: 22px;\n}\n.w-\\[230px\\] {\n  width: 230px;\n}\n.w-\\[232px\\] {\n  width: 232px;\n}\n.w-\\[236px\\] {\n  width: 236px;\n}\n.w-\\[247px\\] {\n  width: 247px;\n}\n.w-\\[24px\\] {\n  width: 24px;\n}\n.w-\\[25\\%\\] {\n  width: 25%;\n}\n.w-\\[250px\\] {\n  width: 250px;\n}\n.w-\\[252px\\] {\n  width: 252px;\n}\n.w-\\[260px\\] {\n  width: 260px;\n}\n.w-\\[26px\\] {\n  width: 26px;\n}\n.w-\\[272px\\] {\n  width: 272px;\n}\n.w-\\[274px\\] {\n  width: 274px;\n}\n.w-\\[280px\\] {\n  width: 280px;\n}\n.w-\\[28px\\] {\n  width: 28px;\n}\n.w-\\[293px\\] {\n  width: 293px;\n}\n.w-\\[2px\\] {\n  width: 2px;\n}\n.w-\\[2rem\\] {\n  width: 2rem;\n}\n.w-\\[3\\.25rem\\] {\n  width: 3.25rem;\n}\n.w-\\[3\\.5rem\\] {\n  width: 3.5rem;\n}\n.w-\\[300px\\] {\n  width: 300px;\n}\n.w-\\[306px\\] {\n  width: 306px;\n}\n.w-\\[316px\\] {\n  width: 316px;\n}\n.w-\\[320px\\] {\n  width: 320px;\n}\n.w-\\[322px\\] {\n  width: 322px;\n}\n.w-\\[324px\\] {\n  width: 324px;\n}\n.w-\\[32px\\] {\n  width: 32px;\n}\n.w-\\[330px\\] {\n  width: 330px;\n}\n.w-\\[336px\\] {\n  width: 336px;\n}\n.w-\\[338px\\] {\n  width: 338px;\n}\n.w-\\[342px\\] {\n  width: 342px;\n}\n.w-\\[343px\\] {\n  width: 343px;\n}\n.w-\\[346px\\] {\n  width: 346px;\n}\n.w-\\[348px\\] {\n  width: 348px;\n}\n.w-\\[350px\\] {\n  width: 350px;\n}\n.w-\\[360px\\] {\n  width: 360px;\n}\n.w-\\[368px\\] {\n  width: 368px;\n}\n.w-\\[36px\\] {\n  width: 36px;\n}\n.w-\\[370px\\] {\n  width: 370px;\n}\n.w-\\[375px\\] {\n  width: 375px;\n}\n.w-\\[380px\\] {\n  width: 380px;\n}\n.w-\\[388px\\] {\n  width: 388px;\n}\n.w-\\[398px\\] {\n  width: 398px;\n}\n.w-\\[3rem\\] {\n  width: 3rem;\n}\n.w-\\[4\\.5rem\\] {\n  width: 4.5rem;\n}\n.w-\\[400px\\] {\n  width: 400px;\n}\n.w-\\[40px\\] {\n  width: 40px;\n}\n.w-\\[430px\\] {\n  width: 430px;\n}\n.w-\\[432px\\] {\n  width: 432px;\n}\n.w-\\[448px\\] {\n  width: 448px;\n}\n.w-\\[45\\%\\] {\n  width: 45%;\n}\n.w-\\[456px\\] {\n  width: 456px;\n}\n.w-\\[48px\\] {\n  width: 48px;\n}\n.w-\\[4rem\\] {\n  width: 4rem;\n}\n.w-\\[5\\.5rem\\] {\n  width: 5.5rem;\n}\n.w-\\[50\\%\\] {\n  width: 50%;\n}\n.w-\\[500px\\] {\n  width: 500px;\n}\n.w-\\[50px\\] {\n  width: 50px;\n}\n.w-\\[516px\\] {\n  width: 516px;\n}\n.w-\\[52px\\] {\n  width: 52px;\n}\n.w-\\[532px\\] {\n  width: 532px;\n}\n.w-\\[53px\\] {\n  width: 53px;\n}\n.w-\\[562px\\] {\n  width: 562px;\n}\n.w-\\[56px\\] {\n  width: 56px;\n}\n.w-\\[576px\\] {\n  width: 576px;\n}\n.w-\\[600px\\] {\n  width: 600px;\n}\n.w-\\[60px\\] {\n  width: 60px;\n}\n.w-\\[62px\\] {\n  width: 62px;\n}\n.w-\\[632px\\] {\n  width: 632px;\n}\n.w-\\[640px\\] {\n  width: 640px;\n}\n.w-\\[64px\\] {\n  width: 64px;\n}\n.w-\\[69\\%\\] {\n  width: 69%;\n}\n.w-\\[692px\\] {\n  width: 692px;\n}\n.w-\\[6px\\] {\n  width: 6px;\n}\n.w-\\[6rem\\] {\n  width: 6rem;\n}\n.w-\\[70px\\] {\n  width: 70px;\n}\n.w-\\[720px\\] {\n  width: 720px;\n}\n.w-\\[728px\\] {\n  width: 728px;\n}\n.w-\\[72px\\] {\n  width: 72px;\n}\n.w-\\[730px\\] {\n  width: 730px;\n}\n.w-\\[74px\\] {\n  width: 74px;\n}\n.w-\\[768px\\] {\n  width: 768px;\n}\n.w-\\[8\\%\\] {\n  width: 8%;\n}\n.w-\\[80\\%\\] {\n  width: 80%;\n}\n.w-\\[80px\\] {\n  width: 80px;\n}\n.w-\\[84px\\] {\n  width: 84px;\n}\n.w-\\[88px\\] {\n  width: 88px;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-\\[90px\\] {\n  width: 90px;\n}\n.w-\\[90vw\\] {\n  width: 90vw;\n}\n.w-\\[94px\\] {\n  width: 94px;\n}\n.w-\\[96\\%\\] {\n  width: 96%;\n}\n.w-\\[96px\\] {\n  width: 96px;\n}\n.w-\\[990px\\] {\n  width: 990px;\n}\n.w-\\[9rem\\] {\n  width: 9rem;\n}\n.w-\\[calc\\(100\\%\\+4px\\)\\] {\n  width: calc(100% + 4px);\n}\n.w-\\[calc\\(100\\%-110px\\)\\] {\n  width: calc(100% - 110px);\n}\n.w-\\[calc\\(100\\%-16px\\)\\] {\n  width: calc(100% - 16px);\n}\n.w-\\[calc\\(100\\%-1rem\\)\\] {\n  width: calc(100% - 1rem);\n}\n.w-\\[calc\\(100\\%-20px\\)\\] {\n  width: calc(100% - 20px);\n}\n.w-\\[calc\\(100\\%-24px\\)\\] {\n  width: calc(100% - 24px);\n}\n.w-\\[calc\\(100\\%-2rem\\)\\] {\n  width: calc(100% - 2rem);\n}\n.w-\\[calc\\(100\\%-32px\\)\\] {\n  width: calc(100% - 32px);\n}\n.w-\\[calc\\(100\\%-3rem\\)\\] {\n  width: calc(100% - 3rem);\n}\n.w-\\[calc\\(100\\%-70px\\)\\] {\n  width: calc(100% - 70px);\n}\n.w-\\[calc\\(100\\%-84px\\)\\] {\n  width: calc(100% - 84px);\n}\n.w-\\[calc\\(100vw-2rem\\)\\] {\n  width: calc(100vw - 2rem);\n}\n.w-\\[calc\\(100vw-32px\\)\\] {\n  width: calc(100vw - 32px);\n}\n.w-\\[calc\\(100vw-80px\\)\\] {\n  width: calc(100vw - 80px);\n}\n.w-\\[calc\\(100vw-var\\(--size-2xl\\)\\)\\] {\n  width: calc(100vw - var(--size-2xl));\n}\n.w-\\[calc\\(50\\%\\+0\\.5px\\)\\] {\n  width: calc(50% + 0.5px);\n}\n.w-\\[inherit\\] {\n  width: inherit;\n}\n.w-\\[var\\(--accessory-container-width\\)\\] {\n  width: var(--accessory-container-width);\n}\n.w-\\[var\\(--confirmation-modal-width\\)\\] {\n  width: var(--confirmation-modal-width);\n}\n.w-\\[var\\(--content-width\\)\\] {\n  width: var(--content-width);\n}\n.w-\\[var\\(--emote-btn-size\\)\\] {\n  width: var(--emote-btn-size);\n}\n.w-\\[var\\(--emote-size\\)\\] {\n  width: var(--emote-size);\n}\n.w-\\[var\\(--icon-badge-container-width\\)\\] {\n  width: var(--icon-badge-container-width);\n}\n.w-auto {\n  width: auto;\n}\n.w-fit {\n  width: fit-content;\n}\n.w-full {\n  width: 100%;\n}\n.w-lg {\n  width: 1.5rem;\n}\n.w-max {\n  width: max-content;\n}\n.w-md {\n  width: 1rem;\n}\n.w-min {\n  width: min-content;\n}\n.w-px {\n  width: 1px;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-sm {\n  width: 0.75rem;\n}\n.w-xl {\n  width: 2rem;\n}\n.w-xs {\n  width: 0.5rem;\n}\n.\\!min-w-\\[40px\\] {\n  min-width: 40px !important;\n}\n.\\!min-w-\\[43px\\] {\n  min-width: 43px !important;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.min-w-100 {\n  min-width: 100%;\n}\n.min-w-2xs {\n  min-width: 0.25rem;\n}\n.min-w-4xl {\n  min-width: 6rem;\n}\n.min-w-\\[0\\.5rem\\] {\n  min-width: 0.5rem;\n}\n.min-w-\\[100px\\] {\n  min-width: 100px;\n}\n.min-w-\\[120px\\] {\n  min-width: 120px;\n}\n.min-w-\\[128px\\] {\n  min-width: 128px;\n}\n.min-w-\\[150px\\] {\n  min-width: 150px;\n}\n.min-w-\\[16px\\] {\n  min-width: 16px;\n}\n.min-w-\\[170px\\] {\n  min-width: 170px;\n}\n.min-w-\\[174px\\] {\n  min-width: 174px;\n}\n.min-w-\\[175px\\] {\n  min-width: 175px;\n}\n.min-w-\\[183px\\] {\n  min-width: 183px;\n}\n.min-w-\\[18rem\\] {\n  min-width: 18rem;\n}\n.min-w-\\[20px\\] {\n  min-width: 20px;\n}\n.min-w-\\[20rem\\] {\n  min-width: 20rem;\n}\n.min-w-\\[256px\\] {\n  min-width: 256px;\n}\n.min-w-\\[272px\\] {\n  min-width: 272px;\n}\n.min-w-\\[280px\\] {\n  min-width: 280px;\n}\n.min-w-\\[28px\\] {\n  min-width: 28px;\n}\n.min-w-\\[2rem\\] {\n  min-width: 2rem;\n}\n.min-w-\\[300px\\] {\n  min-width: 300px;\n}\n.min-w-\\[316px\\] {\n  min-width: 316px;\n}\n.min-w-\\[320px\\] {\n  min-width: 320px;\n}\n.min-w-\\[32px\\] {\n  min-width: 32px;\n}\n.min-w-\\[338px\\] {\n  min-width: 338px;\n}\n.min-w-\\[346px\\] {\n  min-width: 346px;\n}\n.min-w-\\[34px\\] {\n  min-width: 34px;\n}\n.min-w-\\[350px\\] {\n  min-width: 350px;\n}\n.min-w-\\[358px\\] {\n  min-width: 358px;\n}\n.min-w-\\[36px\\] {\n  min-width: 36px;\n}\n.min-w-\\[384px\\] {\n  min-width: 384px;\n}\n.min-w-\\[40px\\] {\n  min-width: 40px;\n}\n.min-w-\\[42px\\] {\n  min-width: 42px;\n}\n.min-w-\\[430px\\] {\n  min-width: 430px;\n}\n.min-w-\\[432px\\] {\n  min-width: 432px;\n}\n.min-w-\\[500px\\] {\n  min-width: 500px;\n}\n.min-w-\\[50px\\] {\n  min-width: 50px;\n}\n.min-w-\\[52px\\] {\n  min-width: 52px;\n}\n.min-w-\\[55\\%\\] {\n  min-width: 55%;\n}\n.min-w-\\[5rem\\] {\n  min-width: 5rem;\n}\n.min-w-\\[69px\\] {\n  min-width: 69px;\n}\n.min-w-\\[70px\\] {\n  min-width: 70px;\n}\n.min-w-\\[75px\\] {\n  min-width: 75px;\n}\n.min-w-\\[85px\\] {\n  min-width: 85px;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.min-w-max {\n  min-width: max-content;\n}\n.max-w-0 {\n  max-width: 0px;\n}\n.max-w-100 {\n  max-width: 100%;\n}\n.max-w-2xl {\n  max-width: 42rem;\n}\n.max-w-3xl {\n  max-width: 48rem;\n}\n.max-w-4xl {\n  max-width: 56rem;\n}\n.max-w-7xl {\n  max-width: 80rem;\n}\n.max-w-\\[100\\%\\] {\n  max-width: 100%;\n}\n.max-w-\\[100px\\] {\n  max-width: 100px;\n}\n.max-w-\\[1080px\\] {\n  max-width: 1080px;\n}\n.max-w-\\[10rem\\] {\n  max-width: 10rem;\n}\n.max-w-\\[11rem\\] {\n  max-width: 11rem;\n}\n.max-w-\\[120px\\] {\n  max-width: 120px;\n}\n.max-w-\\[12rem\\] {\n  max-width: 12rem;\n}\n.max-w-\\[140px\\] {\n  max-width: 140px;\n}\n.max-w-\\[150px\\] {\n  max-width: 150px;\n}\n.max-w-\\[164px\\] {\n  max-width: 164px;\n}\n.max-w-\\[200px\\] {\n  max-width: 200px;\n}\n.max-w-\\[236px\\] {\n  max-width: 236px;\n}\n.max-w-\\[240px\\] {\n  max-width: 240px;\n}\n.max-w-\\[268px\\] {\n  max-width: 268px;\n}\n.max-w-\\[300px\\] {\n  max-width: 300px;\n}\n.max-w-\\[320px\\] {\n  max-width: 320px;\n}\n.max-w-\\[336px\\] {\n  max-width: 336px;\n}\n.max-w-\\[343px\\] {\n  max-width: 343px;\n}\n.max-w-\\[346px\\] {\n  max-width: 346px;\n}\n.max-w-\\[350px\\] {\n  max-width: 350px;\n}\n.max-w-\\[352px\\] {\n  max-width: 352px;\n}\n.max-w-\\[360px\\] {\n  max-width: 360px;\n}\n.max-w-\\[370px\\] {\n  max-width: 370px;\n}\n.max-w-\\[375px\\] {\n  max-width: 375px;\n}\n.max-w-\\[380px\\] {\n  max-width: 380px;\n}\n.max-w-\\[392px\\] {\n  max-width: 392px;\n}\n.max-w-\\[400px\\] {\n  max-width: 400px;\n}\n.max-w-\\[40px\\] {\n  max-width: 40px;\n}\n.max-w-\\[432px\\] {\n  max-width: 432px;\n}\n.max-w-\\[480px\\] {\n  max-width: 480px;\n}\n.max-w-\\[500px\\] {\n  max-width: 500px;\n}\n.max-w-\\[512px\\] {\n  max-width: 512px;\n}\n.max-w-\\[540px\\] {\n  max-width: 540px;\n}\n.max-w-\\[550px\\] {\n  max-width: 550px;\n}\n.max-w-\\[562px\\] {\n  max-width: 562px;\n}\n.max-w-\\[570px\\] {\n  max-width: 570px;\n}\n.max-w-\\[584px\\] {\n  max-width: 584px;\n}\n.max-w-\\[61vw\\] {\n  max-width: 61vw;\n}\n.max-w-\\[640px\\] {\n  max-width: 640px;\n}\n.max-w-\\[700px\\] {\n  max-width: 700px;\n}\n.max-w-\\[720px\\] {\n  max-width: 720px;\n}\n.max-w-\\[72px\\] {\n  max-width: 72px;\n}\n.max-w-\\[750px\\] {\n  max-width: 750px;\n}\n.max-w-\\[752px\\] {\n  max-width: 752px;\n}\n.max-w-\\[756px\\] {\n  max-width: 756px;\n}\n.max-w-\\[768px\\] {\n  max-width: 768px;\n}\n.max-w-\\[800px\\] {\n  max-width: 800px;\n}\n.max-w-\\[80vw\\] {\n  max-width: 80vw;\n}\n.max-w-\\[90\\%\\] {\n  max-width: 90%;\n}\n.max-w-\\[950px\\] {\n  max-width: 950px;\n}\n.max-w-\\[96\\%\\] {\n  max-width: 96%;\n}\n.max-w-\\[990px\\] {\n  max-width: 990px;\n}\n.max-w-\\[calc\\(100\\%-16px\\)\\] {\n  max-width: calc(100% - 16px);\n}\n.max-w-\\[calc\\(100\\%-60px\\)\\] {\n  max-width: calc(100% - 60px);\n}\n.max-w-\\[calc\\(100vw-var\\(--size-2xl\\)\\)\\] {\n  max-width: calc(100vw - var(--size-2xl));\n}\n.max-w-\\[calc\\(100vw-var\\(--size-xl\\)\\)\\] {\n  max-width: calc(100vw - var(--size-xl));\n}\n.max-w-\\[min\\(90\\%\\2c 656px\\)\\] {\n  max-width: min(90%,656px);\n}\n.max-w-\\[unset\\] {\n  max-width: unset;\n}\n.max-w-\\[var\\(--flair-max-width\\)\\] {\n  max-width: var(--flair-max-width);\n}\n.max-w-container-m {\n  max-width: 1132px;\n}\n.max-w-container-s {\n  max-width: 994px;\n}\n.max-w-container-xl {\n  max-width: 1524px;\n}\n.max-w-fit {\n  max-width: fit-content;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.max-w-none {\n  max-width: none;\n}\n.max-w-screen-m {\n  max-width: 1200px;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.max-w-xl {\n  max-width: 36rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-\\[4\\] {\n  flex: 4;\n}\n.flex-auto {\n  flex: 1 1 auto;\n}\n.flex-initial {\n  flex: 0 1 auto;\n}\n.flex-none {\n  flex: none;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-shrink-\\[9999\\] {\n  flex-shrink: 9999;\n}\n.shrink {\n  flex-shrink: 1;\n}\n.shrink-0 {\n  flex-shrink: 0;\n}\n.shrink-\\[1000\\] {\n  flex-shrink: 1000;\n}\n.shrink-\\[9999\\] {\n  flex-shrink: 9999;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.grow {\n  flex-grow: 1;\n}\n.grow-0 {\n  flex-grow: 0;\n}\n.basis-0 {\n  flex-basis: 0px;\n}\n.basis-1\\/2 {\n  flex-basis: 50%;\n}\n.basis-100 {\n  flex-basis: 100%;\n}\n.basis-2xl {\n  flex-basis: 3rem;\n}\n.basis-\\[20px\\] {\n  flex-basis: 20px;\n}\n.basis-\\[232px\\] {\n  flex-basis: 232px;\n}\n.basis-\\[28px\\] {\n  flex-basis: 28px;\n}\n.basis-\\[400px\\] {\n  flex-basis: 400px;\n}\n.basis-\\[40px\\] {\n  flex-basis: 40px;\n}\n.basis-\\[80px\\] {\n  flex-basis: 80px;\n}\n.basis-\\[calc\\(50\\%\\+44px\\)\\] {\n  flex-basis: calc(50% + 44px);\n}\n.basis-auto {\n  flex-basis: auto;\n}\n.basis-full {\n  flex-basis: 100%;\n}\n.table-auto {\n  table-layout: auto;\n}\n.table-fixed {\n  table-layout: fixed;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.border-separate {\n  border-collapse: separate;\n}\n.origin-bottom {\n  transform-origin: bottom;\n}\n.origin-bottom-right {\n  transform-origin: bottom right;\n}\n.origin-center {\n  transform-origin: center;\n}\n.origin-left {\n  transform-origin: left;\n}\n.origin-top-left {\n  transform-origin: top left;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-2\\/4 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-4xl {\n  --tw-translate-x: -6rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-\\[4px\\] {\n  --tw-translate-x: -4px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-2\\/4 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-1\\/2 {\n  --tw-translate-x: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-4xl {\n  --tw-translate-x: 6rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1\\/2 {\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1\\/4 {\n  --tw-translate-y: 25%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-4xl {\n  --tw-translate-y: 6rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-px {\n  --tw-translate-y: 1px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-rotate-12 {\n  --tw-rotate: -12deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-45 {\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-90 {\n  --tw-rotate: 90deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-0 {\n  --tw-scale-x: 0;\n  --tw-scale-y: 0;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-100 {\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-150 {\n  --tw-scale-x: 1.5;\n  --tw-scale-y: 1.5;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-50 {\n  --tw-scale-x: .5;\n  --tw-scale-y: .5;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-75 {\n  --tw-scale-x: .75;\n  --tw-scale-y: .75;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-90 {\n  --tw-scale-x: .9;\n  --tw-scale-y: .9;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-\\[\\.68\\] {\n  --tw-scale-x: .68;\n  --tw-scale-y: .68;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-\\[1\\.2\\] {\n  --tw-scale-x: 1.2;\n  --tw-scale-y: 1.2;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-\\[2\\] {\n  --tw-scale-x: 2;\n  --tw-scale-y: 2;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-\\[4\\] {\n  --tw-scale-x: 4;\n  --tw-scale-y: 4;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-scale-x-100 {\n  --tw-scale-x: -1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-x-100 {\n  --tw-scale-x: 1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.scale-x-\\[-1\\] {\n  --tw-scale-x: -1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform-none {\n  transform: none;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-\\[spin_2s_linear_infinite\\] {\n  animation: spin 2s linear infinite;\n}\n@keyframes typing-indicator-bounce {\n  0% {\n    transform: translate(0, 0);\n  }\n  20% {\n    transform: translate(0, -3px);\n  }\n  40% {\n    transform: translate(0, 0px);\n  }\n}\n.animate-\\[typing-indicator-bounce_2s_0\\.0s_ease-in_infinite\\] {\n  animation: typing-indicator-bounce 2s 0.0s ease-in infinite;\n}\n@keyframes typing-indicator-bounce {\n  0% {\n    transform: translate(0, 0);\n  }\n  20% {\n    transform: translate(0, -3px);\n  }\n  40% {\n    transform: translate(0, 0px);\n  }\n}\n.animate-\\[typing-indicator-bounce_2s_0\\.2s_ease-in_infinite\\] {\n  animation: typing-indicator-bounce 2s 0.2s ease-in infinite;\n}\n@keyframes typing-indicator-bounce {\n  0% {\n    transform: translate(0, 0);\n  }\n  20% {\n    transform: translate(0, -3px);\n  }\n  40% {\n    transform: translate(0, 0px);\n  }\n}\n.animate-\\[typing-indicator-bounce_2s_0\\.4s_ease-in_infinite\\] {\n  animation: typing-indicator-bounce 2s 0.4s ease-in infinite;\n}\n@keyframes blink {\n  50% {\n    border-color: var(--color-neutral-border-strong);\n  }\n}\n.animate-blink {\n  animation: blink 0.9s step-end infinite;\n}\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.\\!cursor-auto {\n  cursor: auto !important;\n}\n.cursor-auto {\n  cursor: auto;\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-grab {\n  cursor: grab;\n}\n.cursor-help {\n  cursor: help;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.cursor-text {\n  cursor: text;\n}\n.cursor-wait {\n  cursor: wait;\n}\n.cursor-zoom-in {\n  cursor: zoom-in;\n}\n.cursor-zoom-out {\n  cursor: zoom-out;\n}\n.select-none {\n  user-select: none;\n}\n.select-text {\n  user-select: text;\n}\n.select-auto {\n  user-select: auto;\n}\n.resize-none {\n  resize: none;\n}\n.resize-y {\n  resize: vertical;\n}\n.resize {\n  resize: both;\n}\n.snap-x {\n  scroll-snap-type: x var(--tw-scroll-snap-strictness);\n}\n.snap-mandatory {\n  --tw-scroll-snap-strictness: mandatory;\n}\n.scroll-m-\\[60px\\] {\n  scroll-margin: 60px;\n}\n.list-none {\n  list-style-type: none;\n}\n.appearance-none {\n  appearance: none;\n}\n.auto-cols-fr {\n  grid-auto-columns: minmax(0, 1fr);\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.auto-rows-\\[minmax\\(106px\\2c _auto\\)\\] {\n  grid-auto-rows: minmax(106px, auto);\n}\n.auto-rows-\\[minmax\\(140px\\2c _auto\\)\\] {\n  grid-auto-rows: minmax(140px, auto);\n}\n.auto-rows-fr {\n  grid-auto-rows: minmax(0, 1fr);\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-16 {\n  grid-template-columns: repeat(16, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n.grid-cols-7 {\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n}\n.grid-cols-\\[1fr_110px\\] {\n  grid-template-columns: 1fr 110px;\n}\n.grid-cols-\\[1fr_2rem\\] {\n  grid-template-columns: 1fr 2rem;\n}\n.grid-cols-\\[1fr_auto\\] {\n  grid-template-columns: 1fr auto;\n}\n.grid-cols-\\[1fr_min-content\\] {\n  grid-template-columns: 1fr min-content;\n}\n.grid-cols-\\[24px_1fr\\] {\n  grid-template-columns: 24px 1fr;\n}\n.grid-cols-\\[24px_minmax\\(0\\2c 1fr\\)\\] {\n  grid-template-columns: 24px minmax(0,1fr);\n}\n.grid-cols-\\[259px_1fr\\] {\n  grid-template-columns: 259px 1fr;\n}\n.grid-cols-\\[2rem_1fr_2rem\\] {\n  grid-template-columns: 2rem 1fr 2rem;\n}\n.grid-cols-\\[auto_auto_1fr\\] {\n  grid-template-columns: auto auto 1fr;\n}\n.grid-cols-\\[repeat\\(auto-fill\\2c _100px\\)\\] {\n  grid-template-columns: repeat(auto-fill, 100px);\n}\n.grid-cols-\\[repeat\\(auto-fill\\2c _106px\\)\\] {\n  grid-template-columns: repeat(auto-fill, 106px);\n}\n.grid-cols-\\[repeat\\(auto-fill\\2c _110px\\)\\] {\n  grid-template-columns: repeat(auto-fill, 110px);\n}\n.grid-cols-\\[repeat\\(auto-fit\\2c _minmax\\(106px\\2c _auto\\)\\)\\] {\n  grid-template-columns: repeat(auto-fit, minmax(106px, auto));\n}\n.grid-cols-\\[repeat\\(auto-fit\\2c _minmax\\(7rem\\2c _1fr\\)\\)\\] {\n  grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));\n}\n.grid-cols-left-nav {\n  grid-template-columns: 1rem 2.875rem 1fr 3.875rem;\n}\n.grid-rows-\\[1fr_auto\\] {\n  grid-template-rows: 1fr auto;\n}\n.grid-rows-\\[2fr\\2c 1fr\\] {\n  grid-template-rows: 2fr 1fr;\n}\n.grid-rows-\\[32px\\] {\n  grid-template-rows: 32px;\n}\n.grid-rows-\\[auto_auto\\] {\n  grid-template-rows: auto auto;\n}\n.grid-rows-\\[auto_auto_auto\\] {\n  grid-template-rows: auto auto auto;\n}\n.grid-rows-\\[auto_auto_auto_auto_auto\\] {\n  grid-template-rows: auto auto auto auto auto;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n.place-content-evenly {\n  place-content: space-evenly;\n}\n.place-items-center {\n  place-items: center;\n}\n.content-center {\n  align-content: center;\n}\n.content-start {\n  align-content: flex-start;\n}\n.content-end {\n  align-content: flex-end;\n}\n.content-stretch {\n  align-content: stretch;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.items-baseline {\n  align-items: baseline;\n}\n.items-stretch {\n  align-items: stretch;\n}\n.\\!justify-start {\n  justify-content: flex-start !important;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n.justify-stretch {\n  justify-content: stretch;\n}\n.justify-items-start {\n  justify-items: start;\n}\n.justify-items-end {\n  justify-items: end;\n}\n.justify-items-center {\n  justify-items: center;\n}\n.gap-0 {\n  gap: 0px;\n}\n.gap-2xl {\n  gap: 3rem;\n}\n.gap-2xs {\n  gap: 0.25rem;\n}\n.gap-3xl {\n  gap: 4rem;\n}\n.gap-\\[0\\.5rem\\] {\n  gap: 0.5rem;\n}\n.gap-\\[0\\.75rem\\] {\n  gap: 0.75rem;\n}\n.gap-\\[10px\\] {\n  gap: 10px;\n}\n.gap-\\[16px\\] {\n  gap: 16px;\n}\n.gap-\\[17px\\] {\n  gap: 17px;\n}\n.gap-\\[1rem\\] {\n  gap: 1rem;\n}\n.gap-\\[20px\\] {\n  gap: 20px;\n}\n.gap-\\[24px\\] {\n  gap: 24px;\n}\n.gap-\\[2px\\] {\n  gap: 2px;\n}\n.gap-\\[40px\\] {\n  gap: 40px;\n}\n.gap-\\[4px\\] {\n  gap: 4px;\n}\n.gap-\\[6px\\] {\n  gap: 6px;\n}\n.gap-\\[6rem\\] {\n  gap: 6rem;\n}\n.gap-\\[8px\\] {\n  gap: 8px;\n}\n.gap-\\[var\\(--rem4\\)\\] {\n  gap: var(--rem4);\n}\n.gap-lg {\n  gap: 1.5rem;\n}\n.gap-md {\n  gap: 1rem;\n}\n.gap-sm {\n  gap: 0.75rem;\n}\n.gap-xl {\n  gap: 2rem;\n}\n.gap-xs {\n  gap: 0.5rem;\n}\n.gap-x-2xl {\n  column-gap: 3rem;\n}\n.gap-x-2xs {\n  column-gap: 0.25rem;\n}\n.gap-x-\\[12px\\] {\n  column-gap: 12px;\n}\n.gap-x-\\[2px\\] {\n  column-gap: 2px;\n}\n.gap-x-lg {\n  column-gap: 1.5rem;\n}\n.gap-x-md {\n  column-gap: 1rem;\n}\n.gap-x-sm {\n  column-gap: 0.75rem;\n}\n.gap-x-xl {\n  column-gap: 2rem;\n}\n.gap-x-xs {\n  column-gap: 0.5rem;\n}\n.gap-y-\\[20px\\] {\n  row-gap: 20px;\n}\n.gap-y-lg {\n  row-gap: 1.5rem;\n}\n.gap-y-md {\n  row-gap: 1rem;\n}\n.gap-y-sm {\n  row-gap: 0.75rem;\n}\n.gap-y-xl {\n  row-gap: 2rem;\n}\n.gap-y-xs {\n  row-gap: 0.5rem;\n}\n.space-x-md > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-md > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-y-sm > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-center {\n  align-self: center;\n}\n.self-stretch {\n  align-self: stretch;\n}\n.self-baseline {\n  align-self: baseline;\n}\n.justify-self-start {\n  justify-self: start;\n}\n.justify-self-end {\n  justify-self: end;\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-clip {\n  overflow: clip;\n}\n.overflow-visible {\n  overflow: visible;\n}\n.overflow-scroll {\n  overflow: scroll;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.overflow-x-hidden {\n  overflow-x: hidden;\n}\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\n.overflow-x-visible {\n  overflow-x: visible;\n}\n.overflow-x-scroll {\n  overflow-x: scroll;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.overscroll-none {\n  overscroll-behavior: none;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n.text-clip {\n  text-overflow: clip;\n}\n.whitespace-normal {\n  white-space: normal;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre {\n  white-space: pre;\n}\n.whitespace-pre-line {\n  white-space: pre-line;\n}\n.text-wrap {\n  text-wrap: wrap;\n}\n.text-nowrap {\n  text-wrap: nowrap;\n}\n.text-pretty {\n  text-wrap: pretty;\n}\n.break-normal {\n  overflow-wrap: normal;\n  word-break: normal;\n}\n.break-all {\n  word-break: break-all;\n}\n.\\!rounded-full {\n  border-radius: 624.9375rem !important;\n}\n.\\!rounded-none {\n  border-radius: 0rem !important;\n}\n.rounded-\\[\\.5rem\\] {\n  border-radius: .5rem;\n}\n.rounded-\\[0\\.5rem\\] {\n  border-radius: 0.5rem;\n}\n.rounded-\\[1\\.25rem\\] {\n  border-radius: 1.25rem;\n}\n.rounded-\\[1\\.6px\\] {\n  border-radius: 1.6px;\n}\n.rounded-\\[100px\\] {\n  border-radius: 100px;\n}\n.rounded-\\[128px\\] {\n  border-radius: 128px;\n}\n.rounded-\\[12px\\] {\n  border-radius: 12px;\n}\n.rounded-\\[13\\.4px\\] {\n  border-radius: 13.4px;\n}\n.rounded-\\[14px\\] {\n  border-radius: 14px;\n}\n.rounded-\\[15px\\] {\n  border-radius: 15px;\n}\n.rounded-\\[16px\\] {\n  border-radius: 16px;\n}\n.rounded-\\[1rem\\] {\n  border-radius: 1rem;\n}\n.rounded-\\[20px\\] {\n  border-radius: 20px;\n}\n.rounded-\\[22px\\] {\n  border-radius: 22px;\n}\n.rounded-\\[2px\\] {\n  border-radius: 2px;\n}\n.rounded-\\[3\\.25rem\\] {\n  border-radius: 3.25rem;\n}\n.rounded-\\[40px\\] {\n  border-radius: 40px;\n}\n.rounded-\\[4px\\] {\n  border-radius: 4px;\n}\n.rounded-\\[50\\%\\] {\n  border-radius: 50%;\n}\n.rounded-\\[52px\\] {\n  border-radius: 52px;\n}\n.rounded-\\[8px\\] {\n  border-radius: 8px;\n}\n.rounded-\\[9\\%\\/6\\.8\\%\\] {\n  border-radius: 9%/6.8%;\n}\n.rounded-\\[var\\(--rem20\\)\\] {\n  border-radius: var(--rem20);\n}\n.rounded-full {\n  border-radius: 624.9375rem;\n}\n.rounded-lg {\n  border-radius: 2rem;\n}\n.rounded-md {\n  border-radius: 1.25rem;\n}\n.rounded-none {\n  border-radius: 0rem;\n}\n.rounded-sm {\n  border-radius: 0.25rem;\n}\n.rounded-b-\\[0\\.5rem\\] {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.rounded-b-none {\n  border-bottom-right-radius: 0rem;\n  border-bottom-left-radius: 0rem;\n}\n.rounded-b-sm {\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.rounded-r-sm {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.rounded-t-\\[0\\.5rem\\] {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.rounded-t-\\[12px\\] {\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n.rounded-t-\\[16px\\] {\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\n.rounded-t-\\[1rem\\] {\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n.rounded-t-\\[20px\\] {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.rounded-t-\\[8px\\] {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.rounded-t-lg {\n  border-top-left-radius: 2rem;\n  border-top-right-radius: 2rem;\n}\n.rounded-t-none {\n  border-top-left-radius: 0rem;\n  border-top-right-radius: 0rem;\n}\n.rounded-t-sm {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n.rounded-bl-\\[12px\\] {\n  border-bottom-left-radius: 12px;\n}\n.rounded-br-\\[0\\.5rem\\] {\n  border-bottom-right-radius: 0.5rem;\n}\n.rounded-tl-\\[1\\.25rem\\] {\n  border-top-left-radius: 1.25rem;\n}\n.rounded-tr-\\[0\\.5rem\\] {\n  border-top-right-radius: 0.5rem;\n}\n.rounded-tr-\\[1\\.25rem\\] {\n  border-top-right-radius: 1.25rem;\n}\n.\\!border-0 {\n  border-width: 0rem !important;\n}\n.border {\n  border-width: 0.0625rem;\n}\n.border-0 {\n  border-width: 0rem;\n}\n.border-\\[0\\.125rem\\] {\n  border-width: 0.125rem;\n}\n.border-\\[0\\.5px\\] {\n  border-width: 0.5px;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-\\[3px\\] {\n  border-width: 3px;\n}\n.border-\\[5px\\] {\n  border-width: 5px;\n}\n.border-lg {\n  border-width: 0.25rem;\n}\n.border-md {\n  border-width: 0.125rem;\n}\n.border-sm {\n  border-width: 0.0625rem;\n}\n.border-x-0 {\n  border-left-width: 0rem;\n  border-right-width: 0rem;\n}\n.border-y-0 {\n  border-top-width: 0rem;\n  border-bottom-width: 0rem;\n}\n.border-y-sm {\n  border-top-width: 0.0625rem;\n  border-bottom-width: 0.0625rem;\n}\n.border-b {\n  border-bottom-width: 0.0625rem;\n}\n.border-b-0 {\n  border-bottom-width: 0rem;\n}\n.border-b-\\[1px\\] {\n  border-bottom-width: 1px;\n}\n.border-b-sm {\n  border-bottom-width: 0.0625rem;\n}\n.border-l {\n  border-left-width: 0.0625rem;\n}\n.border-l-0 {\n  border-left-width: 0rem;\n}\n.border-l-\\[1px\\] {\n  border-left-width: 1px;\n}\n.border-l-lg {\n  border-left-width: 0.25rem;\n}\n.border-l-md {\n  border-left-width: 0.125rem;\n}\n.border-l-sm {\n  border-left-width: 0.0625rem;\n}\n.border-r {\n  border-right-width: 0.0625rem;\n}\n.border-r-0 {\n  border-right-width: 0rem;\n}\n.border-r-md {\n  border-right-width: 0.125rem;\n}\n.border-r-sm {\n  border-right-width: 0.0625rem;\n}\n.border-t {\n  border-top-width: 0.0625rem;\n}\n.border-t-0 {\n  border-top-width: 0rem;\n}\n.border-t-\\[1px\\] {\n  border-top-width: 1px;\n}\n.border-t-sm {\n  border-top-width: 0.0625rem;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-double {\n  border-style: double;\n}\n.border-hidden {\n  border-style: hidden;\n}\n.border-none {\n  border-style: none;\n}\n.border-\\[\\#dadce0\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(218 220 224 / var(--tw-border-opacity));\n}\n.border-\\[var\\(--color-divider-default\\)\\] {\n  border-color: var(--color-divider-default);\n}\n.border-\\[var\\(--color-neutral-border-weak\\)\\] {\n  border-color: var(--color-neutral-border-weak);\n}\n.border-action-downvote {\n  border-color: var(--color-action-downvote);\n}\n.border-action-secondary {\n  border-color: var(--color-action-secondary);\n}\n.border-action-upvote {\n  border-color: var(--color-action-upvote);\n}\n.border-alert-negative {\n  border-color: var(--color-alert-negative);\n}\n.border-alienblue-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(144 169 253 / var(--tw-border-opacity));\n}\n.border-alienblue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 91 202 / var(--tw-border-opacity));\n}\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.border-coolgray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(219 228 233 / var(--tw-border-opacity));\n}\n.border-coolgray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(151 175 188 / var(--tw-border-opacity));\n}\n.border-coolgray-350 {\n  --tw-border-opacity: 1;\n  border-color: rgb(139 162 173 / var(--tw-border-opacity));\n}\n.border-coolgray-450 {\n  --tw-border-opacity: 1;\n  border-color: rgb(116 135 145 / var(--tw-border-opacity));\n}\n.border-danger-background {\n  border-color: var(--color-danger-background);\n}\n.border-danger-content {\n  border-color: var(--color-danger-content);\n}\n.border-global-brand-orangered {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 69 0 / var(--tw-border-opacity));\n}\n.border-global-orangered {\n  border-color: var(--color-global-orangered);\n}\n.border-global-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-neutral-background {\n  border-color: var(--color-neutral-background);\n}\n.border-neutral-background-weak {\n  border-color: var(--color-neutral-background-weak);\n}\n.border-neutral-border {\n  border-color: var(--color-neutral-border);\n}\n.border-neutral-border-medium {\n  border-color: var(--color-neutral-border-medium);\n}\n.border-neutral-border-weak {\n  border-color: var(--color-neutral-border-weak);\n}\n.border-neutral-content {\n  border-color: var(--color-neutral-content);\n}\n.border-neutral-content-disabled {\n  border-color: var(--color-neutral-content-disabled);\n}\n.border-neutral-content-weak {\n  border-color: var(--color-neutral-content-weak);\n}\n.border-orangered-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 69 0 / var(--tw-border-opacity));\n}\n.border-primary {\n  border-color: var(--color-primary);\n}\n.border-puregray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(48 48 48 / var(--tw-border-opacity));\n}\n.border-puregray-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(19 19 19 / var(--tw-border-opacity));\n}\n.border-secondary-background {\n  border-color: var(--color-secondary-background);\n}\n.border-secondary-background-selected {\n  border-color: var(--color-secondary-background-selected);\n}\n.border-tone-2 {\n  border-color: var(--color-tone-2);\n}\n.border-tone-3 {\n  border-color: var(--color-tone-3);\n}\n.border-tone-4 {\n  border-color: var(--color-tone-4);\n}\n.border-tone-5 {\n  border-color: var(--color-tone-5);\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-ui-modalbackground {\n  border-color: var(--color-ui-modalbackground);\n}\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-b-neutral-border {\n  border-bottom-color: var(--color-neutral-border);\n}\n.border-b-neutral-border-weak {\n  border-bottom-color: var(--color-neutral-border-weak);\n}\n.border-l-neutral-border {\n  border-left-color: var(--color-neutral-border);\n}\n.border-l-tone-3 {\n  border-left-color: var(--color-tone-3);\n}\n.border-r-neutral-border {\n  border-right-color: var(--color-neutral-border);\n}\n.border-r-neutral-border-weak {\n  border-right-color: var(--color-neutral-border-weak);\n}\n.border-t-coolgray-100 {\n  --tw-border-opacity: 1;\n  border-top-color: rgb(219 228 233 / var(--tw-border-opacity));\n}\n.border-t-neutral-border-weak {\n  border-top-color: var(--color-neutral-border-weak);\n}\n.border-opacity-20 {\n  --tw-border-opacity: 0.2;\n}\n.border-opacity-30 {\n  --tw-border-opacity: 0.3;\n}\n.\\!bg-danger-background-weaker {\n  background-color: var(--color-danger-background-weaker) !important;\n}\n.\\!bg-transparent {\n  background-color: transparent !important;\n}\n.\\!bg-yellow-75 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(252 230 193 / var(--tw-bg-opacity)) !important;\n}\n.bg-\\[\\#82959b\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(130 149 155 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#B6E9FF\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(182 233 255 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#BFEEB8\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(191 238 184 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#C5C5C5\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(197 197 197 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#C6DCFF\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(198 220 255 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#D2DADD\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(210 218 221 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#D8D4FF\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(216 212 255 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#F2C8FF\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(242 200 255 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#FF9C1A\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 156 26 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#FFC5EC\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 197 236 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#FFCCD2\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 204 210 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#FFCF24\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 207 36 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#FFD5C6\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 213 198 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#FFD635\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 214 53 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#FFE88F\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 232 143 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#d7dfe2\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(215 223 226 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#ffffff\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-\\[--slider-bg\\] {\n  background-color: var(--slider-bg);\n}\n.bg-\\[--slider-fill\\] {\n  background-color: var(--slider-fill);\n}\n.bg-\\[color\\:var\\(--button-color-background-default\\)\\] {\n  background-color: var(--button-color-background-default);\n}\n.bg-\\[color\\:var\\(--color-button-plain-background-disabled\\)\\] {\n  background-color: var(--color-button-plain-background-disabled);\n}\n.bg-\\[color\\:var\\(--color-tone-6\\)\\] {\n  background-color: var(--color-tone-6);\n}\n.bg-\\[color\\:var\\(--shreddit-content-background\\)\\] {\n  background-color: var(--shreddit-content-background);\n}\n.bg-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.6\\)\\] {\n  background-color: rgba(0,0,0,0.6);\n}\n.bg-action-downvote {\n  background-color: var(--color-action-downvote);\n}\n.bg-action-upvote {\n  background-color: var(--color-action-upvote);\n}\n.bg-alert-caution {\n  background-color: var(--color-alert-caution);\n}\n.bg-alienblue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 226 251 / var(--tw-bg-opacity));\n}\n.bg-alienblue-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(184 197 252 / var(--tw-bg-opacity));\n}\n.bg-alienblue-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(100 142 252 / var(--tw-bg-opacity));\n}\n.bg-alienblue-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 240 251 / var(--tw-bg-opacity));\n}\n.bg-alienblue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 91 202 / var(--tw-bg-opacity));\n}\n.bg-alienblue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 68 155 / var(--tw-bg-opacity));\n}\n.bg-alienblue-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 47 108 / var(--tw-bg-opacity));\n}\n.bg-berrypurple-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 218 251 / var(--tw-bg-opacity));\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-black\\/20 {\n  background-color: rgb(0 0 0 / 0.2);\n}\n.bg-black\\/30 {\n  background-color: rgb(0 0 0 / 0.3);\n}\n.bg-black\\/40 {\n  background-color: rgb(0 0 0 / 0.4);\n}\n.bg-black\\/50 {\n  background-color: rgb(0 0 0 / 0.5);\n}\n.bg-black\\/60 {\n  background-color: rgb(0 0 0 / 0.6);\n}\n.bg-brand-background {\n  background-color: var(--color-brand-background);\n}\n.bg-category-spoiler {\n  background-color: var(--color-category-spoiler);\n}\n.bg-coolgray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 228 233 / var(--tw-bg-opacity));\n}\n.bg-coolgray-150 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(201 215 222 / var(--tw-bg-opacity));\n}\n.bg-coolgray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 202 212 / var(--tw-bg-opacity));\n}\n.bg-coolgray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(127 148 159 / var(--tw-bg-opacity));\n}\n.bg-coolgray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(102 119 128 / var(--tw-bg-opacity));\n}\n.bg-danger-background {\n  background-color: var(--color-danger-background);\n}\n.bg-global-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-global-brand-orangered {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 69 0 / var(--tw-bg-opacity));\n}\n.bg-global-orangered {\n  background-color: var(--color-global-orangered);\n}\n.bg-global-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-interactive-background-disabled {\n  background-color: var(--color-interactive-background-disabled);\n}\n.bg-interactive-content-disabled {\n  background-color: var(--color-interactive-content-disabled);\n}\n.bg-kiwigreen-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 245 160 / var(--tw-bg-opacity));\n}\n.bg-kiwigreen-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(88 225 91 / var(--tw-bg-opacity));\n}\n.bg-kiwigreen-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 168 22 / var(--tw-bg-opacity));\n}\n.bg-kiwigreen-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(221 248 215 / var(--tw-bg-opacity));\n}\n.bg-kiwigreen-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 110 11 / var(--tw-bg-opacity));\n}\n.bg-lightblue-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(3 53 75 / var(--tw-bg-opacity));\n}\n.bg-media-background {\n  background-color: var(--color-media-background);\n}\n.bg-mintgreen-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(1 135 109 / var(--tw-bg-opacity));\n}\n.bg-mods-filtered-background {\n  background-color: var(--shreddit-color-mods-filtered-background);\n}\n.bg-mods-reported-background {\n  background-color: var(--shreddit-color-mods-reported-background);\n}\n.bg-neutral-background {\n  background-color: var(--color-neutral-background);\n}\n.bg-neutral-background-container {\n  background-color: var(--color-neutral-background-container);\n}\n.bg-neutral-background-hover {\n  background-color: var(--color-neutral-background-hover);\n}\n.bg-neutral-background-medium {\n  background-color: var(--color-neutral-background-medium);\n}\n.bg-neutral-background-selected {\n  background-color: var(--color-neutral-background-selected);\n}\n.bg-neutral-background-strong {\n  background-color: var(--color-neutral-background-strong);\n}\n.bg-neutral-background-weak {\n  background-color: var(--color-neutral-background-weak);\n}\n.bg-neutral-border {\n  background-color: var(--color-neutral-border);\n}\n.bg-neutral-border-weak {\n  background-color: var(--color-neutral-border-weak);\n}\n.bg-neutral-content {\n  background-color: var(--color-neutral-content);\n}\n.bg-neutral-content-disabled {\n  background-color: var(--color-neutral-content-disabled);\n}\n.bg-neutral-content-strong {\n  background-color: var(--color-neutral-content-strong);\n}\n.bg-online {\n  background-color: var(--color-online);\n}\n.bg-opacity-50 {\n  background-color: var(--color-opacity-50);\n}\n.bg-orangered-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 219 207 / var(--tw-bg-opacity));\n}\n.bg-orangered-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 180 152 / var(--tw-bg-opacity));\n}\n.bg-orangered-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 137 93 / var(--tw-bg-opacity));\n}\n.bg-orangered-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 238 232 / var(--tw-bg-opacity));\n}\n.bg-orangered-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(217 57 0 / var(--tw-bg-opacity));\n}\n.bg-periwinkle-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(230 223 251 / var(--tw-bg-opacity));\n}\n.bg-periwinkle-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(64 1 234 / var(--tw-bg-opacity));\n}\n.bg-poopbrown-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 238 221 / var(--tw-bg-opacity));\n}\n.bg-primary {\n  background-color: var(--color-primary);\n}\n.bg-primary-background {\n  background-color: var(--color-primary-background);\n}\n.bg-puregray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(19 19 19 / var(--tw-bg-opacity));\n}\n.bg-red-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 219 212 / var(--tw-bg-opacity));\n}\n.bg-red-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 179 164 / var(--tw-bg-opacity));\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(235 0 31 / var(--tw-bg-opacity));\n}\n.bg-sakurapink-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(251 217 235 / var(--tw-bg-opacity));\n}\n.bg-scrim {\n  background-color: var(--color-scrim);\n}\n.bg-secondary-background {\n  background-color: var(--color-secondary-background);\n}\n.bg-secondary-background-selected {\n  background-color: var(--color-secondary-background-selected);\n}\n.bg-secondary-plain-weak {\n  background-color: var(--color-secondary-plain-weak);\n}\n.bg-streak-not-reached-background {\n  background-color: var(--shreddit-color-streak-not-reached-background);\n}\n.bg-streak-progress {\n  background-color: var(--shreddit-color-streak-progress);\n}\n.bg-success-background {\n  background-color: var(--color-success-background);\n}\n.bg-tone-1 {\n  background-color: var(--color-tone-1);\n}\n.bg-tone-2 {\n  background-color: var(--color-tone-2);\n}\n.bg-tone-3 {\n  background-color: var(--color-tone-3);\n}\n.bg-tone-4 {\n  background-color: var(--color-tone-4);\n}\n.bg-tone-5 {\n  background-color: var(--color-tone-5);\n}\n.bg-tone-6 {\n  background-color: var(--color-tone-6);\n}\n.bg-tone-7 {\n  background-color: var(--color-tone-7);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-ui-modalbackground {\n  background-color: var(--color-ui-modalbackground);\n}\n.bg-warning-background {\n  background-color: var(--color-warning-background);\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-yellow-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(253 222 167 / var(--tw-bg-opacity));\n}\n.bg-yellow-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(216 161 0 / var(--tw-bg-opacity));\n}\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 136 0 / var(--tw-bg-opacity));\n}\n.bg-yellow-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 239 217 / var(--tw-bg-opacity));\n}\n.bg-yelloworange-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 220 200 / var(--tw-bg-opacity));\n}\n.bg-yelloworange-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(228 108 0 / var(--tw-bg-opacity));\n}\n.bg-opacity-0 {\n  --tw-bg-opacity: 0;\n}\n.bg-opacity-20 {\n  --tw-bg-opacity: 0.2;\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.bg-opacity-55 {\n  --tw-bg-opacity: 0.55;\n}\n.bg-opacity-60 {\n  --tw-bg-opacity: 0.6;\n}\n.bg-opacity-\\[0\\.07\\] {\n  --tw-bg-opacity: 0.07;\n}\n.bg-\\[image\\:var\\(--color-avatar-gradient\\)\\] {\n  background-image: var(--color-avatar-gradient);\n}\n.bg-gradient-to-b {\n  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));\n}\n.bg-gradient-to-bl {\n  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));\n}\n.bg-gradient-to-t {\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\n.bg-none {\n  background-image: none;\n}\n.from-\\[color\\:\\#FFD63670\\] {\n  --tw-gradient-from: #FFD63670 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 214 54 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-\\[color\\:var\\(--color-neutral-background\\)\\] {\n  --tw-gradient-from: var(--color-neutral-background) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-\\[color\\:var\\(--color-neutral-background-weak\\)\\] {\n  --tw-gradient-from: var(--color-neutral-background-weak) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-berrypurple-900 {\n  --tw-gradient-from: #300643 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(48 6 67 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.to-lightblue-500 {\n  --tw-gradient-to: #007FAE var(--tw-gradient-to-position);\n}\n.to-transparent {\n  --tw-gradient-to: transparent var(--tw-gradient-to-position);\n}\n.to-100\\% {\n  --tw-gradient-to-position: 100%;\n}\n.to-70\\% {\n  --tw-gradient-to-position: 70%;\n}\n.bg-contain {\n  background-size: contain;\n}\n.bg-cover {\n  background-size: cover;\n}\n.bg-clip-content {\n  background-clip: content-box;\n}\n.bg-center {\n  background-position: center;\n}\n.bg-left {\n  background-position: left;\n}\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n.fill-\\[color\\:var\\(--color-danger-content\\)\\] {\n  fill: var(--color-danger-content);\n}\n.fill-\\[color\\:var\\(--color-identity-coins\\)\\] {\n  fill: var(--color-identity-coins);\n}\n.fill-\\[color\\:var\\(--color-identity-moderator\\)\\] {\n  fill: var(--color-identity-moderator);\n}\n.fill-\\[color\\:var\\(--color-online\\)\\] {\n  fill: var(--color-online);\n}\n.fill-action-primary {\n  fill: var(--color-action-primary);\n}\n.fill-current {\n  fill: currentColor;\n}\n.fill-global-brand-orangered {\n  fill: #FF4500;\n}\n.fill-neutral-border-medium {\n  fill: var(--color-neutral-border-medium);\n}\n.fill-primary-background {\n  fill: var(--color-primary-background);\n}\n.stroke-current {\n  stroke: currentColor;\n}\n.object-contain {\n  object-fit: contain;\n}\n.object-cover {\n  object-fit: cover;\n}\n.object-center {\n  object-position: center;\n}\n.\\!p-0 {\n  padding: 0px !important;\n}\n.\\!p-2xs {\n  padding: 0.25rem !important;\n}\n.\\!p-lg {\n  padding: 1.5rem !important;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-2xl {\n  padding: 3rem;\n}\n.p-2xs {\n  padding: 0.25rem;\n}\n.p-\\[10px\\] {\n  padding: 10px;\n}\n.p-\\[12px\\] {\n  padding: 12px;\n}\n.p-\\[16px\\] {\n  padding: 16px;\n}\n.p-\\[1px\\] {\n  padding: 1px;\n}\n.p-\\[1rem\\] {\n  padding: 1rem;\n}\n.p-\\[2\\.5rem\\] {\n  padding: 2.5rem;\n}\n.p-\\[2\\.75rem\\] {\n  padding: 2.75rem;\n}\n.p-\\[20px\\] {\n  padding: 20px;\n}\n.p-\\[4px\\] {\n  padding: 4px;\n}\n.p-\\[56px\\] {\n  padding: 56px;\n}\n.p-\\[5px\\] {\n  padding: 5px;\n}\n.p-\\[6px\\] {\n  padding: 6px;\n}\n.p-\\[72px\\] {\n  padding: 72px;\n}\n.p-\\[8px\\] {\n  padding: 8px;\n}\n.p-lg {\n  padding: 1.5rem;\n}\n.p-md {\n  padding: 1rem;\n}\n.p-px {\n  padding: 1px;\n}\n.p-sm {\n  padding: 0.75rem;\n}\n.p-xl {\n  padding: 2rem;\n}\n.p-xs {\n  padding: 0.5rem;\n}\n.\\!px-0 {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n.\\!px-2xs {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n.\\!px-sm {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-2xl {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n.px-2xs {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-\\[0\\.375rem\\] {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n.px-\\[10px\\] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.px-\\[11px\\] {\n  padding-left: 11px;\n  padding-right: 11px;\n}\n.px-\\[12px\\] {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n.px-\\[16px\\] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.px-\\[2px\\] {\n  padding-left: 2px;\n  padding-right: 2px;\n}\n.px-\\[2rem\\] {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.px-\\[30\\.5px\\] {\n  padding-left: 30.5px;\n  padding-right: 30.5px;\n}\n.px-\\[4px\\] {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.px-\\[50px\\] {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n.px-\\[5px\\] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.px-\\[6px\\] {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n.px-\\[8px\\] {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.px-\\[var\\(--horizontal-padding\\)\\] {\n  padding-left: var(--horizontal-padding);\n  padding-right: var(--horizontal-padding);\n}\n.px-\\[var\\(--list-padding\\)\\] {\n  padding-left: var(--list-padding);\n  padding-right: var(--list-padding);\n}\n.px-\\[var\\(--rem10\\)\\] {\n  padding-left: var(--rem10);\n  padding-right: var(--rem10);\n}\n.px-\\[var\\(--rem12\\)\\] {\n  padding-left: var(--rem12);\n  padding-right: var(--rem12);\n}\n.px-\\[var\\(--rem14\\)\\] {\n  padding-left: var(--rem14);\n  padding-right: var(--rem14);\n}\n.px-\\[var\\(--rem6\\)\\] {\n  padding-left: var(--rem6);\n  padding-right: var(--rem6);\n}\n.px-\\[var\\(--rem8\\)\\] {\n  padding-left: var(--rem8);\n  padding-right: var(--rem8);\n}\n.px-\\[var\\(--topbar-horizontal-padding\\)\\] {\n  padding-left: var(--topbar-horizontal-padding);\n  padding-right: var(--topbar-horizontal-padding);\n}\n.px-lg {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.px-md {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-sm {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-xl {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.px-xs {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.py-2xl {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n.py-2xs {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-3xl {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-\\[0\\.125rem\\] {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-\\[0\\.75rem\\] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-\\[10px\\] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.py-\\[12px\\] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.py-\\[19px\\] {\n  padding-top: 19px;\n  padding-bottom: 19px;\n}\n.py-\\[27px\\] {\n  padding-top: 27px;\n  padding-bottom: 27px;\n}\n.py-\\[2px\\] {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.py-\\[36px\\] {\n  padding-top: 36px;\n  padding-bottom: 36px;\n}\n.py-\\[3px\\] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n}\n.py-\\[5px\\] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.py-\\[6px\\] {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.py-\\[8px\\] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.py-\\[var\\(--rem10\\)\\] {\n  padding-top: var(--rem10);\n  padding-bottom: var(--rem10);\n}\n.py-\\[var\\(--rem14\\)\\] {\n  padding-top: var(--rem14);\n  padding-bottom: var(--rem14);\n}\n.py-\\[var\\(--rem2\\)\\] {\n  padding-top: var(--rem2);\n  padding-bottom: var(--rem2);\n}\n.py-\\[var\\(--rem6\\)\\] {\n  padding-top: var(--rem6);\n  padding-bottom: var(--rem6);\n}\n.py-\\[var\\(--rem8\\)\\] {\n  padding-top: var(--rem8);\n  padding-bottom: var(--rem8);\n}\n.py-lg {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.py-md {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-px {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.py-sm {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-xl {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.py-xs {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.\\!pb-0 {\n  padding-bottom: 0px !important;\n}\n.pb-0 {\n  padding-bottom: 0px;\n}\n.pb-2xl {\n  padding-bottom: 3rem;\n}\n.pb-2xs {\n  padding-bottom: 0.25rem;\n}\n.pb-3xl {\n  padding-bottom: 4rem;\n}\n.pb-4xl {\n  padding-bottom: 6rem;\n}\n.pb-\\[\\.5rem\\] {\n  padding-bottom: .5rem;\n}\n.pb-\\[0\\.4rem\\] {\n  padding-bottom: 0.4rem;\n}\n.pb-\\[100px\\] {\n  padding-bottom: 100px;\n}\n.pb-\\[16px\\] {\n  padding-bottom: 16px;\n}\n.pb-\\[2px\\] {\n  padding-bottom: 2px;\n}\n.pb-\\[30px\\] {\n  padding-bottom: 30px;\n}\n.pb-\\[36px\\] {\n  padding-bottom: 36px;\n}\n.pb-\\[40px\\] {\n  padding-bottom: 40px;\n}\n.pb-\\[4px\\] {\n  padding-bottom: 4px;\n}\n.pb-\\[64px\\] {\n  padding-bottom: 64px;\n}\n.pb-\\[6px\\] {\n  padding-bottom: 6px;\n}\n.pb-\\[8px\\] {\n  padding-bottom: 8px;\n}\n.pb-\\[calc\\(var\\(--spacer-xl\\)\\+env\\(safe-area-inset-bottom\\)\\)\\] {\n  padding-bottom: calc(var(--spacer-xl) + env(safe-area-inset-bottom));\n}\n.pb-\\[env\\(safe-area-inset-bottom\\)\\] {\n  padding-bottom: env(safe-area-inset-bottom);\n}\n.pb-lg {\n  padding-bottom: 1.5rem;\n}\n.pb-md {\n  padding-bottom: 1rem;\n}\n.pb-sm {\n  padding-bottom: 0.75rem;\n}\n.pb-xl {\n  padding-bottom: 2rem;\n}\n.pb-xs {\n  padding-bottom: 0.5rem;\n}\n.pl-0 {\n  padding-left: 0px;\n}\n.pl-2xl {\n  padding-left: 3rem;\n}\n.pl-2xs {\n  padding-left: 0.25rem;\n}\n.pl-\\[10px\\] {\n  padding-left: 10px;\n}\n.pl-\\[110px\\] {\n  padding-left: 110px;\n}\n.pl-\\[20px\\] {\n  padding-left: 20px;\n}\n.pl-\\[26px\\] {\n  padding-left: 26px;\n}\n.pl-\\[32px\\] {\n  padding-left: 32px;\n}\n.pl-\\[3px\\] {\n  padding-left: 3px;\n}\n.pl-\\[6px\\] {\n  padding-left: 6px;\n}\n.pl-\\[8px\\] {\n  padding-left: 8px;\n}\n.pl-\\[calc\\(50\\%-87px\\)\\] {\n  padding-left: calc(50% - 87px);\n}\n.pl-\\[var\\(--rem10\\)\\] {\n  padding-left: var(--rem10);\n}\n.pl-\\[var\\(--rem12\\)\\] {\n  padding-left: var(--rem12);\n}\n.pl-\\[var\\(--rem14\\)\\] {\n  padding-left: var(--rem14);\n}\n.pl-\\[var\\(--rem16\\)\\] {\n  padding-left: var(--rem16);\n}\n.pl-lg {\n  padding-left: 1.5rem;\n}\n.pl-md {\n  padding-left: 1rem;\n}\n.pl-sm {\n  padding-left: 0.75rem;\n}\n.pl-xs {\n  padding-left: 0.5rem;\n}\n.pr-0 {\n  padding-right: 0px;\n}\n.pr-2xl {\n  padding-right: 3rem;\n}\n.pr-2xs {\n  padding-right: 0.25rem;\n}\n.pr-3xl {\n  padding-right: 4rem;\n}\n.pr-\\[12px\\] {\n  padding-right: 12px;\n}\n.pr-\\[15px\\] {\n  padding-right: 15px;\n}\n.pr-\\[40px\\] {\n  padding-right: 40px;\n}\n.pr-\\[42px\\] {\n  padding-right: 42px;\n}\n.pr-\\[6px\\] {\n  padding-right: 6px;\n}\n.pr-\\[var\\(--rem10\\)\\] {\n  padding-right: var(--rem10);\n}\n.pr-\\[var\\(--rem12\\)\\] {\n  padding-right: var(--rem12);\n}\n.pr-\\[var\\(--rem14\\)\\] {\n  padding-right: var(--rem14);\n}\n.pr-\\[var\\(--rem16\\)\\] {\n  padding-right: var(--rem16);\n}\n.pr-\\[var\\(--rem6\\)\\] {\n  padding-right: var(--rem6);\n}\n.pr-\\[var\\(--rem8\\)\\] {\n  padding-right: var(--rem8);\n}\n.pr-lg {\n  padding-right: 1.5rem;\n}\n.pr-md {\n  padding-right: 1rem;\n}\n.pr-sm {\n  padding-right: 0.75rem;\n}\n.pr-xl {\n  padding-right: 2rem;\n}\n.pr-xs {\n  padding-right: 0.5rem;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-2xl {\n  padding-top: 3rem;\n}\n.pt-2xs {\n  padding-top: 0.25rem;\n}\n.pt-3xl {\n  padding-top: 4rem;\n}\n.pt-\\[0\\.6rem\\] {\n  padding-top: 0.6rem;\n}\n.pt-\\[10px\\] {\n  padding-top: 10px;\n}\n.pt-\\[12px\\] {\n  padding-top: 12px;\n}\n.pt-\\[13px\\] {\n  padding-top: 13px;\n}\n.pt-\\[16px\\] {\n  padding-top: 16px;\n}\n.pt-\\[200px\\] {\n  padding-top: 200px;\n}\n.pt-\\[20px\\] {\n  padding-top: 20px;\n}\n.pt-\\[2px\\] {\n  padding-top: 2px;\n}\n.pt-\\[36px\\] {\n  padding-top: 36px;\n}\n.pt-\\[40px\\] {\n  padding-top: 40px;\n}\n.pt-\\[42px\\] {\n  padding-top: 42px;\n}\n.pt-\\[64px\\] {\n  padding-top: 64px;\n}\n.pt-\\[80px\\] {\n  padding-top: 80px;\n}\n.pt-\\[8px\\] {\n  padding-top: 8px;\n}\n.pt-\\[var\\(--page-y-padding\\)\\] {\n  padding-top: var(--page-y-padding);\n}\n.pt-lg {\n  padding-top: 1.5rem;\n}\n.pt-md {\n  padding-top: 1rem;\n}\n.pt-sm {\n  padding-top: 0.75rem;\n}\n.pt-xl {\n  padding-top: 2rem;\n}\n.pt-xs {\n  padding-top: 0.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-start {\n  text-align: start;\n}\n.text-end {\n  text-align: end;\n}\n.indent-0 {\n  text-indent: 0px;\n}\n.align-baseline {\n  vertical-align: baseline;\n}\n.align-top {\n  vertical-align: top;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.align-bottom {\n  vertical-align: bottom;\n}\n.align-text-bottom {\n  vertical-align: text-bottom;\n}\n.font-mono {\n  font-family: var(--font-mono);\n}\n.font-sans {\n  font-family: var(--font-sans);\n}\n.text-10 {\n  font-size: 0.625rem;\n  line-height: 1rem;\n}\n.text-12 {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-14 {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-16 {\n  font-size: 1rem;\n  line-height: 1.25rem;\n}\n.text-18 {\n  font-size: 1.125rem;\n  line-height: 1.5rem;\n}\n.text-20 {\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n.text-24 {\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n}\n.text-32 {\n  font-size: 2rem;\n  line-height: 2.25rem;\n}\n.text-48 {\n  font-size: 3rem;\n  line-height: 3rem;\n}\n.text-64 {\n  font-size: 4rem;\n  line-height: 4rem;\n}\n.text-\\[1\\.25rem\\] {\n  font-size: 1.25rem;\n}\n.text-\\[1\\.4rem\\] {\n  font-size: 1.4rem;\n}\n.text-\\[11px\\] {\n  font-size: 11px;\n}\n.text-\\[12px\\] {\n  font-size: 12px;\n}\n.text-\\[13px\\] {\n  font-size: 13px;\n}\n.text-\\[14px\\] {\n  font-size: 14px;\n}\n.text-\\[16px\\] {\n  font-size: 16px;\n}\n.text-\\[17px\\] {\n  font-size: 17px;\n}\n.text-\\[1rem\\] {\n  font-size: 1rem;\n}\n.text-\\[2\\.25rem\\] {\n  font-size: 2.25rem;\n}\n.text-\\[2\\.5rem\\] {\n  font-size: 2.5rem;\n}\n.text-\\[2\\.625rem\\] {\n  font-size: 2.625rem;\n}\n.text-\\[24px\\] {\n  font-size: 24px;\n}\n.text-\\[2rem\\] {\n  font-size: 2rem;\n}\n.text-\\[3\\.5rem\\] {\n  font-size: 3.5rem;\n}\n.text-\\[32px\\] {\n  font-size: 32px;\n}\n.text-\\[32px\\]\\/\\[44\\.52px\\] {\n  font-size: 32px;\n  line-height: 44.52px;\n}\n.text-\\[34px\\] {\n  font-size: 34px;\n}\n.text-\\[40px\\] {\n  font-size: 40px;\n}\n.text-\\[4rem\\] {\n  font-size: 4rem;\n}\n.text-\\[56px\\] {\n  font-size: 56px;\n}\n.text-\\[5rem\\] {\n  font-size: 5rem;\n}\n.text-\\[60px\\] {\n  font-size: 60px;\n}\n.text-\\[72px\\]\\/\\[80px\\] {\n  font-size: 72px;\n  line-height: 80px;\n}\n.text-inherit {\n  font-size: inherit;\n  line-height: inherit;\n}\n.font-\\[600\\] {\n  font-weight: 600;\n}\n.font-\\[800\\] {\n  font-weight: 800;\n}\n.font-\\[900\\] {\n  font-weight: 900;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.capitalize {\n  text-transform: capitalize;\n}\n.normal-case {\n  text-transform: none;\n}\n.italic {\n  font-style: italic;\n}\n.not-italic {\n  font-style: normal;\n}\n.leading-3 {\n  line-height: .75rem;\n}\n.leading-4 {\n  line-height: 1rem;\n}\n.leading-5 {\n  line-height: 1.25rem;\n}\n.leading-6 {\n  line-height: 1.5rem;\n}\n.leading-7 {\n  line-height: 1.75rem;\n}\n.leading-8 {\n  line-height: 2rem;\n}\n.leading-9 {\n  line-height: 2.25rem;\n}\n.leading-\\[--emote-line-height\\] {\n  line-height: var(--emote-line-height);\n}\n.leading-\\[0\\.85rem\\] {\n  line-height: 0.85rem;\n}\n.leading-\\[0\\] {\n  line-height: 0;\n}\n.leading-\\[14px\\] {\n  line-height: 14px;\n}\n.leading-\\[17px\\] {\n  line-height: 17px;\n}\n.leading-\\[20px\\] {\n  line-height: 20px;\n}\n.leading-\\[28px\\] {\n  line-height: 28px;\n}\n.leading-\\[38px\\] {\n  line-height: 38px;\n}\n.leading-\\[52px\\] {\n  line-height: 52px;\n}\n.leading-\\[58px\\] {\n  line-height: 58px;\n}\n.leading-\\[64px\\] {\n  line-height: 64px;\n}\n.leading-\\[68px\\] {\n  line-height: 68px;\n}\n.leading-\\[96px\\] {\n  line-height: 96px;\n}\n.leading-none {\n  line-height: 1;\n}\n.leading-normal {\n  line-height: 1.5;\n}\n.leading-tight {\n  line-height: 1.25;\n}\n.tracking-\\[1\\.2px\\] {\n  letter-spacing: 1.2px;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.tracking-tighter {\n  letter-spacing: -0.05em;\n}\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n.\\!text-danger-content {\n  color: var(--color-danger-content) !important;\n}\n.\\!text-neutral-content-strong {\n  color: var(--color-neutral-content-strong) !important;\n}\n.\\!text-neutral-content-weak {\n  color: var(--color-neutral-content-weak) !important;\n}\n.\\!text-tone-1 {\n  color: var(--color-tone-1) !important;\n}\n.text-\\[\\#131313\\] {\n  --tw-text-opacity: 1;\n  color: rgb(19 19 19 / var(--tw-text-opacity));\n}\n.text-\\[\\#B06400\\] {\n  --tw-text-opacity: 1;\n  color: rgb(176 100 0 / var(--tw-text-opacity));\n}\n.text-\\[\\\\w\\\\W\\] {\n  color: \\w\\W;\n}\n.text-\\[color\\:inherit\\] {\n  color: inherit;\n}\n.text-\\[color\\:var\\(--button-color-text-default\\)\\] {\n  color: var(--button-color-text-default);\n}\n.text-\\[color\\:var\\(--color-a-default\\)\\] {\n  color: var(--color-a-default);\n}\n.text-\\[color\\:var\\(--color-action-primary\\)\\] {\n  color: var(--color-action-primary);\n}\n.text-\\[color\\:var\\(--color-button-plain-text-disabled\\)\\] {\n  color: var(--color-button-plain-text-disabled);\n}\n.text-\\[color\\:var\\(--color-button-secondary-text-disabled\\)\\] {\n  color: var(--color-button-secondary-text-disabled);\n}\n.text-\\[color\\:var\\(--color-global-brand-orangered\\)\\] {\n  color: var(--color-global-brand-orangered);\n}\n.text-\\[color\\:var\\(--color-tone-2\\)\\] {\n  color: var(--color-tone-2);\n}\n.text-\\[color\\:var\\(--secondary-plain-weak\\)\\] {\n  color: var(--secondary-plain-weak);\n}\n.text-action-downvote {\n  color: var(--color-action-downvote);\n}\n.text-action-secondary {\n  color: var(--color-action-secondary);\n}\n.text-action-upvote {\n  color: var(--color-action-upvote);\n}\n.text-alert-caution {\n  color: var(--color-alert-caution);\n}\n.text-alert-negative {\n  color: var(--color-alert-negative);\n}\n.text-alienblue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(17 91 202 / var(--tw-text-opacity));\n}\n.text-alienblue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(10 68 155 / var(--tw-text-opacity));\n}\n.text-berrypurple-700 {\n  --tw-text-opacity: 1;\n  color: rgb(118 0 163 / var(--tw-text-opacity));\n}\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-brand-background {\n  color: var(--color-brand-background);\n}\n.text-brand-onBackground {\n  color: var(--color-brand-onBackground);\n}\n.text-category-nsfw {\n  color: var(--color-category-nsfw);\n}\n.text-category-spoiler {\n  color: var(--color-category-spoiler);\n}\n.text-coolgray-350 {\n  --tw-text-opacity: 1;\n  color: rgb(139 162 173 / var(--tw-text-opacity));\n}\n.text-coolgray-450 {\n  --tw-text-opacity: 1;\n  color: rgb(116 135 145 / var(--tw-text-opacity));\n}\n.text-coolgray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(102 119 128 / var(--tw-text-opacity));\n}\n.text-coolgray-525 {\n  --tw-text-opacity: 1;\n  color: rgb(87 111 118 / var(--tw-text-opacity));\n}\n.text-coolgray-550 {\n  --tw-text-opacity: 1;\n  color: rgb(92 108 116 / var(--tw-text-opacity));\n}\n.text-coolgray-650 {\n  --tw-text-opacity: 1;\n  color: rgb(72 84 91 / var(--tw-text-opacity));\n}\n.text-coolgray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(61 73 78 / var(--tw-text-opacity));\n}\n.text-coolgray-850 {\n  --tw-text-opacity: 1;\n  color: rgb(33 39 42 / var(--tw-text-opacity));\n}\n.text-coolgray-950 {\n  --tw-text-opacity: 1;\n  color: rgb(14 17 19 / var(--tw-text-opacity));\n}\n.text-current {\n  color: currentColor;\n}\n.text-danger-background {\n  color: var(--color-danger-background);\n}\n.text-danger-content {\n  color: var(--color-danger-content);\n}\n.text-downvote-background {\n  color: var(--color-downvote-background);\n}\n.text-downvote-disabled {\n  color: var(--color-downvote-disabled);\n}\n.text-global-alienblue {\n  color: var(--color-global-alienblue);\n}\n.text-global-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-global-brand-orangered {\n  --tw-text-opacity: 1;\n  color: rgb(255 69 0 / var(--tw-text-opacity));\n}\n.text-global-orangered {\n  color: var(--color-global-orangered);\n}\n.text-global-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-identity-admin {\n  color: var(--color-identity-admin);\n}\n.text-identity-moderator {\n  color: var(--color-identity-moderator);\n}\n.text-interactive-content-disabled {\n  color: var(--color-interactive-content-disabled);\n}\n.text-kiwigreen-500 {\n  --tw-text-opacity: 1;\n  color: rgb(0 138 16 / var(--tw-text-opacity));\n}\n.text-kiwigreen-700 {\n  --tw-text-opacity: 1;\n  color: rgb(0 83 6 / var(--tw-text-opacity));\n}\n.text-media-onbackground {\n  color: var(--color-media-onbackground);\n}\n.text-media-onbackground-weak {\n  color: var(--color-media-onbackground-weak);\n}\n.text-mintgreen-500 {\n  --tw-text-opacity: 1;\n  color: rgb(1 135 109 / var(--tw-text-opacity));\n}\n.text-mods-filtered-onBackground {\n  color: var(--shreddit-color-mods-filtered-onBackground);\n}\n.text-mods-reported-onBackground {\n  color: var(--shreddit-color-mods-reported-onBackground);\n}\n.text-neutral-background {\n  color: var(--color-neutral-background);\n}\n.text-neutral-background-weak {\n  color: var(--color-neutral-background-weak);\n}\n.text-neutral-border-medium {\n  color: var(--color-neutral-border-medium);\n}\n.text-neutral-content {\n  color: var(--color-neutral-content);\n}\n.text-neutral-content-disabled {\n  color: var(--color-neutral-content-disabled);\n}\n.text-neutral-content-strong {\n  color: var(--color-neutral-content-strong);\n}\n.text-neutral-content-weak {\n  color: var(--color-neutral-content-weak);\n}\n.text-orangered-700 {\n  --tw-text-opacity: 1;\n  color: rgb(132 33 0 / var(--tw-text-opacity));\n}\n.text-periwinkle-500 {\n  --tw-text-opacity: 1;\n  color: rgb(106 92 255 / var(--tw-text-opacity));\n}\n.text-periwinkle-700 {\n  --tw-text-opacity: 1;\n  color: rgb(64 1 234 / var(--tw-text-opacity));\n}\n.text-primary {\n  color: var(--color-primary);\n}\n.text-primary-onBackground {\n  color: var(--color-primary-onBackground);\n}\n.text-primary-plain {\n  color: var(--color-primary-plain);\n}\n.text-primary-visited {\n  color: var(--color-primary-visited);\n}\n.text-puregray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(118 118 118 / var(--tw-text-opacity));\n}\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(255 79 64 / var(--tw-text-opacity));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(235 0 31 / var(--tw-text-opacity));\n}\n.text-red-700 {\n  --tw-text-opacity: 1;\n  color: rgb(144 0 15 / var(--tw-text-opacity));\n}\n.text-sakurapink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(222 1 159 / var(--tw-text-opacity));\n}\n.text-secondary {\n  color: var(--color-secondary);\n}\n.text-secondary-onBackground {\n  color: var(--color-secondary-onBackground);\n}\n.text-secondary-plain {\n  color: var(--color-secondary-plain);\n}\n.text-secondary-plain-weak {\n  color: var(--color-secondary-plain-weak);\n}\n.text-secondary-weak {\n  color: var(--color-secondary-weak);\n}\n.text-streak-not-reached-text {\n  color: var(--shreddit-color-streak-not-reached-text);\n}\n.text-success-content {\n  color: var(--color-success-content);\n}\n.text-tone-1 {\n  color: var(--color-tone-1);\n}\n.text-tone-2 {\n  color: var(--color-tone-2);\n}\n.text-tone-3 {\n  color: var(--color-tone-3);\n}\n.text-tone-7 {\n  color: var(--color-tone-7);\n}\n.text-upvote-content {\n  color: var(--color-upvote-content);\n}\n.text-upvote-content-weak {\n  color: var(--color-upvote-content-weak);\n}\n.text-upvote-disabled {\n  color: var(--color-upvote-disabled);\n}\n.text-warning-content {\n  color: var(--color-warning-content);\n}\n.text-warning-onBackground {\n  color: var(--color-warning-onBackground);\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-white\\/70 {\n  color: rgb(255 255 255 / 0.7);\n}\n.text-yellow-700 {\n  --tw-text-opacity: 1;\n  color: rgb(91 66 0 / var(--tw-text-opacity));\n}\n.text-yelloworange-500 {\n  --tw-text-opacity: 1;\n  color: rgb(189 88 0 / var(--tw-text-opacity));\n}\n.text-yelloworange-700 {\n  --tw-text-opacity: 1;\n  color: rgb(115 51 0 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.\\!no-underline {\n  text-decoration-line: none !important;\n}\n.no-underline {\n  text-decoration-line: none;\n}\n.caret-transparent {\n  caret-color: transparent;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-20 {\n  opacity: 0.2;\n}\n.opacity-25 {\n  opacity: 0.25;\n}\n.opacity-30 {\n  opacity: 0.3;\n}\n.opacity-35 {\n  opacity: 0.35;\n}\n.opacity-40 {\n  opacity: 0.4;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.opacity-60 {\n  opacity: 0.6;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.opacity-80 {\n  opacity: 0.8;\n}\n.opacity-90 {\n  opacity: 0.9;\n}\n.opacity-\\[--slider-opacity\\] {\n  opacity: var(--slider-opacity);\n}\n.shadow-\\[0_0_0_4px_var\\(--color-primary-background\\)\\] {\n  --tw-shadow: 0 0 0 4px var(--color-primary-background);\n  --tw-shadow-colored: 0 0 0 4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[0_2px_0_0_var\\(--color-secondary-background-selected\\)\\] {\n  --tw-shadow: 0 2px 0 0 var(--color-secondary-background-selected);\n  --tw-shadow-colored: 0 2px 0 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[0px_-40px_21px_var\\(--color-neutral-background\\)\\] {\n  --tw-shadow: 0px -40px 21px var(--color-neutral-background);\n  --tw-shadow-colored: 0px -40px 21px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: var(--elevation-md);\n  --tw-shadow-colored: var(--elevation-md);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-none {\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: var(--elevation-sm);\n  --tw-shadow-colored: var(--elevation-sm);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xs {\n  --tw-shadow: var(--elevation-xs);\n  --tw-shadow-colored: var(--elevation-xs);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.outline {\n  outline-style: solid;\n}\n.outline-1 {\n  outline-width: 1px;\n}\n.outline-2 {\n  outline-width: 2px;\n}\n.outline-\\[3px\\] {\n  outline-width: 3px;\n}\n.-outline-offset-1 {\n  outline-offset: -1px;\n}\n.outline-offset-0 {\n  outline-offset: 0px;\n}\n.outline-offset-2 {\n  outline-offset: 2px;\n}\n.outline-offset-\\[2px\\] {\n  outline-offset: 2px;\n}\n.outline-\\[\\#FF9C1A\\] {\n  outline-color: #FF9C1A;\n}\n.outline-\\[var\\(--color-brand-background\\)\\] {\n  outline-color: var(--color-brand-background);\n}\n.outline-danger-content {\n  outline-color: var(--color-danger-content);\n}\n.outline-global-brand-orangered {\n  outline-color: #FF4500;\n}\n.outline-neutral-border-weak {\n  outline-color: var(--color-neutral-border-weak);\n}\n.outline-transparent {\n  outline-color: transparent;\n}\n.ring {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.drop-shadow {\n  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.invert {\n  --tw-invert: invert(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-filter {\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[max-width\\] {\n  transition-property: max-width;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-\\[transform\\] {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.delay-100 {\n  transition-delay: 100ms;\n}\n.delay-200 {\n  transition-delay: 200ms;\n}\n.delay-300 {\n  transition-delay: 300ms;\n}\n.duration-100 {\n  transition-duration: 100ms;\n}\n.duration-150 {\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.duration-75 {\n  transition-duration: 75ms;\n}\n.duration-\\[1500ms\\] {\n  transition-duration: 1500ms;\n}\n.ease-in {\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-linear {\n  transition-timing-function: linear;\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.will-change-transform {\n  will-change: transform;\n}\n.\\@container {\n  container-type: inline-size;\n}\n.scrollbar-hide {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.scrollbar-hide::-webkit-scrollbar {\n  display: none;\n  width: 0 !important;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-2\\/4 {\n  --tw-translate-x: -50%;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-4xl {\n  --tw-translate-x: -6rem;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-\\[4px\\] {\n  --tw-translate-x: -4px;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-2\\/4 {\n  --tw-translate-y: -50%;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-1\\/2 {\n  --tw-translate-x: 50%;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-x-4xl {\n  --tw-translate-x: 6rem;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-0 {\n  --tw-translate-y: 0px;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1\\/2 {\n  --tw-translate-y: 50%;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-1\\/4 {\n  --tw-translate-y: 25%;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-4xl {\n  --tw-translate-y: 6rem;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-px {\n  --tw-translate-y: 1px;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.\\[--marketplace-tile-grid-content-columns\\:1\\] {\n  --marketplace-tile-grid-content-columns: 1;\n}\n.\\[--marketplace-tile-grid-content-columns\\:4\\] {\n  --marketplace-tile-grid-content-columns: 4;\n}\n.\\[--marketplace-tile-grid-content-gap\\:var\\(--rem16\\)\\] {\n  --marketplace-tile-grid-content-gap: var(--rem16);\n}\n.\\[--marketplace-tile-grid-content-gap\\:var\\(--rem8\\)\\] {\n  --marketplace-tile-grid-content-gap: var(--rem8);\n}\n.\\[backface-visibility\\:hidden\\] {\n  backface-visibility: hidden;\n}\n.\\[box-shadow\\:0_-6px_8px_var\\(--color-tone-5\\)\\] {\n  box-shadow: 0 -6px 8px var(--color-tone-5);\n}\n.\\[caret-color\\:var\\(--color-tone-1\\)\\] {\n  caret-color: var(--color-tone-1);\n}\n.\\[color\\:transparent\\] {\n  color: transparent;\n}\n.\\[font-size\\:var\\(--emote-size\\)\\] {\n  font-size: var(--emote-size);\n}\n.\\[perspective\\:1000px\\] {\n  perspective: 1000px;\n}\n.\\[text-shadow\\:1px_0_0_var\\(--color-media-background\\)\\2c -1px_0_0_var\\(--color-media-background\\)\\2c 0_1px_0_var\\(--color-media-background\\)\\2c 0_-1px_0_var\\(--color-media-background\\)\\] {\n  text-shadow: 1px 0 0 var(--color-media-background),-1px 0 0 var(--color-media-background),0 1px 0 var(--color-media-background),0 -1px 0 var(--color-media-background);\n}\n.\\[transform-style\\:preserve-3d\\] {\n  transform-style: preserve-3d;\n}\n.\\[transform\\:rotateY\\(180deg\\)\\] {\n  transform: rotateY(180deg);\n}\n.\\[transform\\:translate3d\\(0\\2c 0\\2c 0\\)\\] {\n  transform: translate3d(0,0,0);\n}\n@media (min-width: 960px) {\n  .s\\:button-medium {\n    --button-height: var(--size-button-md-h);\n    --button-padding: var(--spacer-xs);\n    --button-font: var(--font-button-md);\n    --button-border-width-default: var(--line-button-md-border);\n  }\n}\n.selection\\:text-transparent *::selection {\n  color: transparent;\n}\n.selection\\:text-transparent::selection {\n  color: transparent;\n}\n.placeholder\\:text-neutral-content-weak::placeholder {\n  color: var(--color-neutral-content-weak);\n}\n.before\\:absolute::before {\n  content: var(--tw-content);\n  position: absolute;\n}\n.before\\:left-\\[-1rem\\]::before {\n  content: var(--tw-content);\n  left: -1rem;\n}\n.before\\:top-\\[0\\]::before {\n  content: var(--tw-content);\n  top: 0;\n}\n.before\\:top-lg::before {\n  content: var(--tw-content);\n  top: 1.5rem;\n}\n.before\\:ml-sm::before {\n  content: var(--tw-content);\n  margin-left: 0.75rem;\n}\n.before\\:h-\\[--emote-size\\]::before {\n  content: var(--tw-content);\n  height: var(--emote-size);\n}\n.before\\:h-full::before {\n  content: var(--tw-content);\n  height: 100%;\n}\n.before\\:w-\\[--emote-size\\]::before {\n  content: var(--tw-content);\n  width: var(--emote-size);\n}\n.before\\:origin-top-left::before {\n  content: var(--tw-content);\n  transform-origin: top left;\n}\n.before\\:scale-\\[--emote-scale\\]::before {\n  content: var(--tw-content);\n  --tw-scale-x: var(--emote-scale);\n  --tw-scale-y: var(--emote-scale);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.before\\:border-y-0::before {\n  content: var(--tw-content);\n  border-top-width: 0rem;\n  border-bottom-width: 0rem;\n}\n.before\\:border-l-\\[1px\\]::before {\n  content: var(--tw-content);\n  border-left-width: 1px;\n}\n.before\\:border-r-\\[0px\\]::before {\n  content: var(--tw-content);\n  border-right-width: 0px;\n}\n.before\\:border-solid::before {\n  content: var(--tw-content);\n  border-style: solid;\n}\n.before\\:border-tone-4::before {\n  content: var(--tw-content);\n  border-color: var(--color-tone-4);\n}\n.before\\:bg-\\[size\\:--emote-size\\]::before {\n  content: var(--tw-content);\n  background-size: var(--emote-size);\n}\n.before\\:text-12::before {\n  content: var(--tw-content);\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.before\\:content-\\[\\\'\\\'\\]::before {\n  --tw-content: \'\';\n  content: var(--tw-content);\n}\n.before\\:content-\\[\\\'\\2022\\\'\\]::before {\n  --tw-content: \'•\';\n  content: var(--tw-content);\n}\n.before\\:content-\\[attr\\(priority\\)\\]::before {\n  --tw-content: attr(priority);\n  content: var(--tw-content);\n}\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n.after\\:left-\\[-1rem\\]::after {\n  content: var(--tw-content);\n  left: -1rem;\n}\n.after\\:top-\\[0\\]::after {\n  content: var(--tw-content);\n  top: 0;\n}\n.after\\:clear-both::after {\n  content: var(--tw-content);\n  clear: both;\n}\n.after\\:ml-\\[0\\.375rem\\]::after {\n  content: var(--tw-content);\n  margin-left: 0.375rem;\n}\n.after\\:table::after {\n  content: var(--tw-content);\n  display: table;\n}\n.after\\:h-\\[20px\\]::after {\n  content: var(--tw-content);\n  height: 20px;\n}\n.after\\:w-\\[24px\\]::after {\n  content: var(--tw-content);\n  width: 24px;\n}\n.after\\:rounded-bl-\\[12px\\]::after {\n  content: var(--tw-content);\n  border-bottom-left-radius: 12px;\n}\n.after\\:border-y-0::after {\n  content: var(--tw-content);\n  border-top-width: 0rem;\n  border-bottom-width: 0rem;\n}\n.after\\:border-b-\\[1px\\]::after {\n  content: var(--tw-content);\n  border-bottom-width: 1px;\n}\n.after\\:border-l-\\[1px\\]::after {\n  content: var(--tw-content);\n  border-left-width: 1px;\n}\n.after\\:border-r-\\[0px\\]::after {\n  content: var(--tw-content);\n  border-right-width: 0px;\n}\n.after\\:border-solid::after {\n  content: var(--tw-content);\n  border-style: solid;\n}\n.after\\:border-tone-4::after {\n  content: var(--tw-content);\n  border-color: var(--color-tone-4);\n}\n.after\\:content-\\[\\\'\\\'\\]::after {\n  --tw-content: \'\';\n  content: var(--tw-content);\n}\n.after\\:content-\\[\\\'\\2c \\\'\\]::after {\n  --tw-content: \',\';\n  content: var(--tw-content);\n}\n.first\\:left-\\[21px\\]:first-child {\n  left: 21px;\n}\n.first\\:left-\\[34px\\]:first-child {\n  left: 34px;\n}\n.first\\:ml-0:first-child {\n  margin-left: 0px;\n}\n.first\\:mt-0:first-child {\n  margin-top: 0px;\n}\n.first\\:rotate-\\[-8deg\\]:first-child {\n  --tw-rotate: -8deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.first\\:pl-md:first-child {\n  padding-left: 1rem;\n}\n.last\\:right-\\[21px\\]:last-child {\n  right: 21px;\n}\n.last\\:right-\\[34px\\]:last-child {\n  right: 34px;\n}\n.last\\:mb-0:last-child {\n  margin-bottom: 0px;\n}\n.last\\:mr-0:last-child {\n  margin-right: 0px;\n}\n.last\\:hidden:last-child {\n  display: none;\n}\n.last\\:rotate-\\[8deg\\]:last-child {\n  --tw-rotate: 8deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.last\\:border-0:last-child {\n  border-width: 0rem;\n}\n.last\\:border-b-0:last-child {\n  border-bottom-width: 0rem;\n}\n.last\\:border-none:last-child {\n  border-style: none;\n}\n.last\\:pr-md:last-child {\n  padding-right: 1rem;\n}\n.last\\:after\\:content-\\[\\\'\\\'\\]:last-child::after {\n  --tw-content: \'\';\n  content: var(--tw-content);\n}\n.odd\\:top-\\[26\\%\\]:nth-child(odd) {\n  top: 26%;\n}\n.odd\\:top-\\[48px\\]:nth-child(odd) {\n  top: 48px;\n}\n.odd\\:top-\\[77px\\]:nth-child(odd) {\n  top: 77px;\n}\n.odd\\:aspect-\\[78\\/105\\]:nth-child(odd) {\n  aspect-ratio: 78/105;\n}\n.odd\\:h-\\[105px\\]:nth-child(odd) {\n  height: 105px;\n}\n.odd\\:h-\\[168px\\]:nth-child(odd) {\n  height: 168px;\n}\n.odd\\:w-\\[125px\\]:nth-child(odd) {\n  width: 125px;\n}\n.odd\\:w-\\[32\\%\\]:nth-child(odd) {\n  width: 32%;\n}\n.odd\\:w-\\[78px\\]:nth-child(odd) {\n  width: 78px;\n}\n.even\\:z-\\[1\\]:nth-child(even) {\n  z-index: 1;\n}\n.even\\:aspect-\\[86\\/115\\]:nth-child(even) {\n  aspect-ratio: 86/115;\n}\n.even\\:h-\\[115px\\]:nth-child(even) {\n  height: 115px;\n}\n.even\\:h-\\[184px\\]:nth-child(even) {\n  height: 184px;\n}\n.even\\:w-\\[137px\\]:nth-child(even) {\n  width: 137px;\n}\n.even\\:w-\\[35\\%\\]:nth-child(even) {\n  width: 35%;\n}\n.even\\:w-\\[86px\\]:nth-child(even) {\n  width: 86px;\n}\n.last-of-type\\:mb-0:last-of-type {\n  margin-bottom: 0px;\n}\n.visited\\:bg-transparent:visited {\n  background-color: transparent;\n}\n.visited\\:text-inherit:visited {\n  font-size: inherit;\n  line-height: inherit;\n}\n.visited\\:text-media-onbackground:visited {\n  color: var(--color-media-onbackground);\n}\n.visited\\:text-neutral-background-weak:visited {\n  color: var(--color-neutral-background-weak);\n}\n.visited\\:text-neutral-content-weak:visited {\n  color: var(--color-neutral-content-weak);\n}\n.visited\\:text-secondary-plain:visited {\n  color: var(--color-secondary-plain);\n}\n.visited\\:text-secondary-plain-weak:visited {\n  color: var(--color-secondary-plain-weak);\n}\n.visited\\:no-underline:visited {\n  text-decoration-line: none;\n}\n.empty\\:pr-0:empty {\n  padding-right: 0px;\n}\n.focus-within\\:border-neutral-border-medium:focus-within {\n  border-color: var(--color-neutral-border-medium);\n}\n.focus-within\\:border-neutral-border-strong:focus-within {\n  border-color: var(--color-neutral-border-strong);\n}\n.focus-within\\:bg-neutral-background-hover:focus-within {\n  background-color: var(--color-neutral-background-hover);\n}\n.focus-within\\:outline:focus-within {\n  outline-style: solid;\n}\n.focus-within\\:outline-1:focus-within {\n  outline-width: 1px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .hover\\:scale-110:hover {\n    --tw-scale-x: 1.1;\n    --tw-scale-y: 1.1;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .hover\\:scale-\\[2\\]:hover {\n    --tw-scale-x: 2;\n    --tw-scale-y: 2;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .hover\\:cursor-pointer:hover {\n    cursor: pointer;\n  }\n  .hover\\:border-global-brand-orangered:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(255 69 0 / var(--tw-border-opacity));\n  }\n  .hover\\:border-global-orangered:hover {\n    border-color: var(--color-global-orangered);\n  }\n  .hover\\:border-neutral-content-weak:hover {\n    border-color: var(--color-neutral-content-weak);\n  }\n  .hover\\:border-primary-hover:hover {\n    border-color: var(--color-primary-hover);\n  }\n  .hover\\:border-secondary-background-hover:hover {\n    border-color: var(--color-secondary-background-hover);\n  }\n  .hover\\:border-secondary-background-selected:hover {\n    border-color: var(--color-secondary-background-selected);\n  }\n  .hover\\:border-tone-3:hover {\n    border-color: var(--color-tone-3);\n  }\n  .hover\\:border-l-neutral-border:hover {\n    border-left-color: var(--color-neutral-border);\n  }\n  .hover\\:\\!bg-\\[var\\(--notification-banner-prim-hover\\)\\]:hover {\n    background-color: var(--notification-banner-prim-hover) !important;\n  }\n  .hover\\:\\!bg-\\[var\\(--notification-banner-sec-hover\\)\\]:hover {\n    background-color: var(--notification-banner-sec-hover) !important;\n  }\n  .hover\\:\\!bg-transparent:hover {\n    background-color: transparent !important;\n  }\n  .hover\\:bg-downvote-background-hover:hover {\n    background-color: var(--color-downvote-background-hover);\n  }\n  .hover\\:bg-global-brand-orangered:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 69 0 / var(--tw-bg-opacity));\n  }\n  .hover\\:bg-interactive-pressed:hover {\n    background-color: var(--color-interactive-pressed);\n  }\n  .hover\\:bg-mintgreen-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 108 86 / var(--tw-bg-opacity));\n  }\n  .hover\\:bg-mods-filtered-background-hover:hover {\n    background-color: var(--shreddit-color-mods-filtered-background-hover);\n  }\n  .hover\\:bg-mods-reported-background-hover:hover {\n    background-color: var(--shreddit-color-mods-reported-background-hover);\n  }\n  .hover\\:bg-neutral-background-hover:hover {\n    background-color: var(--color-neutral-background-hover);\n  }\n  .hover\\:bg-neutral-background-selected:hover {\n    background-color: var(--color-neutral-background-selected);\n  }\n  .hover\\:bg-secondary-background-hover:hover {\n    background-color: var(--color-secondary-background-hover);\n  }\n  .hover\\:bg-secondary-background-selected:hover {\n    background-color: var(--color-secondary-background-selected);\n  }\n  .hover\\:bg-transparent:hover {\n    background-color: transparent;\n  }\n  .hover\\:bg-transparent-background-hover:hover {\n    background-color: var(--color-transparent-background-hover);\n  }\n  .hover\\:bg-upvote-background-hover:hover {\n    background-color: var(--color-upvote-background-hover);\n  }\n  .hover\\:text-action-downvote:hover {\n    color: var(--color-action-downvote);\n  }\n  .hover\\:text-action-upvote:hover {\n    color: var(--color-action-upvote);\n  }\n  .hover\\:text-brand-background-hover:hover {\n    color: var(--color-brand-background-hover);\n  }\n  .hover\\:text-danger-content-hover:hover {\n    color: var(--color-danger-content-hover);\n  }\n  .hover\\:text-global-focus:hover {\n    color: var(--color-global-focus);\n  }\n  .hover\\:text-global-white:hover {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n  .hover\\:text-neutral-background-weak-hover:hover {\n    color: var(--color-neutral-background-weak-hover);\n  }\n  .hover\\:text-neutral-content:hover {\n    color: var(--color-neutral-content);\n  }\n  .hover\\:text-neutral-content-strong:hover {\n    color: var(--color-neutral-content-strong);\n  }\n  .hover\\:text-neutral-content-weak:hover {\n    color: var(--color-neutral-content-weak);\n  }\n  .hover\\:text-primary-hover:hover {\n    color: var(--color-primary-hover);\n  }\n  .hover\\:text-secondary:hover {\n    color: var(--color-secondary);\n  }\n  .hover\\:text-secondary-hover:hover {\n    color: var(--color-secondary-hover);\n  }\n  .hover\\:text-secondary-onBackground:hover {\n    color: var(--color-secondary-onBackground);\n  }\n  .hover\\:text-secondary-plain:hover {\n    color: var(--color-secondary-plain);\n  }\n  .hover\\:text-secondary-weak:hover {\n    color: var(--color-secondary-weak);\n  }\n  .hover\\:text-success-content:hover {\n    color: var(--color-success-content);\n  }\n  .hover\\:text-success-hover:hover {\n    color: var(--color-success-hover);\n  }\n  .hover\\:underline:hover {\n    text-decoration-line: underline;\n  }\n  .hover\\:no-underline:hover {\n    text-decoration-line: none;\n  }\n  .hover\\:shadow-\\[0_0_0_2px_var\\(--color-primary-background\\)\\]:hover {\n    --tw-shadow: 0 0 0 2px var(--color-primary-background);\n    --tw-shadow-colored: 0 0 0 2px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n}\n.focus\\:not-sr-only:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n.focus\\:rounded-sm:focus {\n  border-radius: 0.25rem;\n}\n.focus\\:border-global-brand-orangered:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 69 0 / var(--tw-border-opacity));\n}\n.focus\\:border-global-focus:focus {\n  border-color: var(--color-global-focus);\n}\n.focus\\:bg-interactive-pressed:focus {\n  background-color: var(--color-interactive-pressed);\n}\n.focus\\:bg-neutral-background-hover:focus {\n  background-color: var(--color-neutral-background-hover);\n}\n.focus\\:bg-transparent:focus {\n  background-color: transparent;\n}\n.focus\\:text-white:focus {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.focus\\:opacity-100:focus {\n  opacity: 1;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:outline-neutral-content-weak:focus {\n  outline-color: var(--color-neutral-content-weak);\n}\n.focus-visible\\:text-action-downvote:focus-visible {\n  color: var(--color-action-downvote);\n}\n.focus-visible\\:text-action-upvote:focus-visible {\n  color: var(--color-action-upvote);\n}\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.active\\:cursor-grabbing:active {\n  cursor: grabbing;\n}\n.active\\:\\!bg-\\[var\\(--notification-banner-prim-active\\)\\]:active {\n  background-color: var(--notification-banner-prim-active) !important;\n}\n.active\\:\\!bg-\\[var\\(--notification-banner-sec-active\\)\\]:active {\n  background-color: var(--notification-banner-sec-active) !important;\n}\n.active\\:\\!bg-transparent:active {\n  background-color: transparent !important;\n}\n.active\\:bg-interactive-pressed:active {\n  background-color: var(--color-interactive-pressed);\n}\n.active\\:bg-neutral-background-selected:active {\n  background-color: var(--color-neutral-background-selected);\n}\n.active\\:bg-orangered-50:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 238 232 / var(--tw-bg-opacity));\n}\n.active\\:bg-secondary-background:active {\n  background-color: var(--color-secondary-background);\n}\n.active\\:bg-transparent:active {\n  background-color: transparent;\n}\n.active\\:bg-none:active {\n  background-image: none;\n}\n.active\\:text-neutral-content-strong:active {\n  color: var(--color-neutral-content-strong);\n}\n.active\\:underline:active {\n  text-decoration-line: underline;\n}\n.active\\:no-underline:active {\n  text-decoration-line: none;\n}\n.enabled\\:cursor-pointer:enabled {\n  cursor: pointer;\n}\n@media (hover: hover) and (pointer: fine) {\n  .enabled\\:hover\\:scale-\\[1\\.2\\]:hover:enabled {\n    --tw-scale-x: 1.2;\n    --tw-scale-y: 1.2;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n.disabled\\:bg-interactive-background-disabled:disabled {\n  background-color: var(--color-interactive-background-disabled);\n}\n.disabled\\:bg-primary-background:disabled {\n  background-color: var(--color-primary-background);\n}\n.disabled\\:text-global-white:disabled {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.disabled\\:text-interactive-content-disabled:disabled {\n  color: var(--color-interactive-content-disabled);\n}\n.disabled\\:text-opacity-25:disabled {\n  --tw-text-opacity: 0.25;\n}\n.disabled\\:no-underline:disabled {\n  text-decoration-line: none;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n.group:focus-within .group-focus-within\\:bg-neutral-background-hover {\n  background-color: var(--color-neutral-background-hover);\n}\n@media (hover: hover) and (pointer: fine) {\n  .group:hover .group-hover\\:visible {\n    visibility: visible;\n  }\n  .group:hover .group-hover\\:z-\\[1\\] {\n    z-index: 1;\n  }\n  .group:hover .group-hover\\:block {\n    display: block;\n  }\n  .group:hover .group-hover\\:hidden {\n    display: none;\n  }\n  .group:hover .group-hover\\:-translate-y-\\[10px\\] {\n    --tw-translate-y: -10px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .group:hover .group-hover\\:scale-\\[1\\.4\\] {\n    --tw-scale-x: 1.4;\n    --tw-scale-y: 1.4;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .group:hover .group-hover\\:border-global-orangered {\n    border-color: var(--color-global-orangered);\n  }\n  .group:hover .group-hover\\:bg-neutral-background-hover {\n    background-color: var(--color-neutral-background-hover);\n  }\n  .group:hover .group-hover\\:bg-tone-2 {\n    background-color: var(--color-tone-2);\n  }\n  .group:hover .group-hover\\:from-\\[color\\:var\\(--color-neutral-background-hover\\)\\] {\n    --tw-gradient-from: var(--color-neutral-background-hover) var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .group:hover .group-hover\\:underline {\n    text-decoration-line: underline;\n  }\n  .group:hover .group-hover\\:opacity-100 {\n    opacity: 1;\n  }\n  .group:hover .group-hover\\:-translate-y-\\[10px\\] {\n    --tw-translate-y: -10px;\n    transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n}\n.group\\/verdict[show-removal-reason-cta] .group-\\[\\[show-removal-reason-cta\\]\\]\\/verdict\\:hidden {\n  display: none;\n}\n.peer:checked ~ .peer-checked\\:visible {\n  visibility: visible;\n}\n.peer:checked ~ .peer-checked\\:border-alienblue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 91 202 / var(--tw-border-opacity));\n}\n.peer:checked ~ .peer-checked\\:bg-\\[\\#D2DADD\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(210 218 221 / var(--tw-bg-opacity));\n}\n.peer:checked ~ .peer-checked\\:text-alienblue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(17 91 202 / var(--tw-text-opacity));\n}\n.peer:checked ~ .group .peer-checked\\:group-\\[\\]\\:border-global-brand-orangered {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 69 0 / var(--tw-border-opacity));\n}\n.peer:checked ~ .group .peer-checked\\:group-\\[\\]\\:bg-orangered-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 219 207 / var(--tw-bg-opacity));\n}\n.aria-pressed\\:border-caution-background[aria-pressed="true"] {\n  border-color: var(--color-caution-background);\n}\n.aria-pressed\\:bg-neutral-background-gilded[aria-pressed="true"] {\n  background-color: var(--color-neutral-background-gilded);\n}\n.aria-pressed\\:bg-neutral-background-selected[aria-pressed="true"] {\n  background-color: var(--color-neutral-background-selected);\n}\n.aria-pressed\\:outline[aria-pressed="true"] {\n  outline-style: solid;\n}\n.group[aria-pressed="true"] .group-aria-pressed\\:-translate-y-\\[10px\\] {\n  --tw-translate-y: -10px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group[aria-pressed="true"] .group-aria-pressed\\:scale-\\[1\\.4\\] {\n  --tw-scale-x: 1.4;\n  --tw-scale-y: 1.4;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group[aria-pressed="true"] .group-aria-pressed\\:-translate-y-\\[10px\\] {\n  --tw-translate-y: -10px;\n  transform:  translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.nd\\:visible:not(:defined) {\n  visibility: visible;\n}\n.nd\\:invisible:not(:defined) {\n  visibility: hidden;\n}\n.nd\\:mb-md:not(:defined) {\n  margin-bottom: 1rem;\n}\n.nd\\:mt-lg:not(:defined) {\n  margin-top: 1.5rem;\n}\n.nd\\:block:not(:defined) {\n  display: block;\n}\n.nd\\:flex:not(:defined) {\n  display: flex;\n}\n.nd\\:hidden:not(:defined) {\n  display: none;\n}\n.nd\\:h-2xl:not(:defined) {\n  height: 3rem;\n}\n.nd\\:h-\\[120px\\]:not(:defined) {\n  height: 120px;\n}\n.nd\\:h-\\[32px\\]:not(:defined) {\n  height: 32px;\n}\n.nd\\:h-\\[95px\\]:not(:defined) {\n  height: 95px;\n}\n.nd\\:h-\\[var\\(--gallery-initial-height\\)\\]:not(:defined) {\n  height: var(--gallery-initial-height);\n}\n.nd\\:h-lg:not(:defined) {\n  height: 1.5rem;\n}\n.nd\\:h-sm:not(:defined) {\n  height: 0.75rem;\n}\n.nd\\:h-xl:not(:defined) {\n  height: 2rem;\n}\n.nd\\:max-h-\\[32px\\]:not(:defined) {\n  max-height: 32px;\n}\n.nd\\:max-h-xl:not(:defined) {\n  max-height: 2rem;\n}\n.nd\\:w-\\[54px\\]:not(:defined) {\n  width: 54px;\n}\n.nd\\:w-lg:not(:defined) {\n  width: 1.5rem;\n}\n.nd\\:w-sm:not(:defined) {\n  width: 0.75rem;\n}\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n.nd\\:animate-pulse:not(:defined) {\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n.nd\\:overflow-hidden:not(:defined) {\n  overflow: hidden;\n}\n.nd\\:bg-neutral-background-selected:not(:defined) {\n  background-color: var(--color-neutral-background-selected);\n}\n.nd\\:bg-secondary-background:not(:defined) {\n  background-color: var(--color-secondary-background);\n}\n.nd\\:pb-2xl:not(:defined) {\n  padding-bottom: 3rem;\n}\n.nd\\:pt-xs:not(:defined) {\n  padding-top: 0.5rem;\n}\n@media (prefers-reduced-motion: no-preference) {\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  .motion-safe\\:animate-\\[spin_13s_linear_infinite\\] {\n    animation: spin 13s linear infinite;\n  }\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  .motion-safe\\:animate-\\[spin_7s_linear_infinite\\] {\n    animation: spin 7s linear infinite;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .motion-reduce\\:transition-none {\n    transition-property: none;\n  }\n}\n:is([class~="theme-dark"] .dark\\:\\!bg-yellow-700) {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(91 66 0 / var(--tw-bg-opacity)) !important;\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#090F11\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(9 15 17 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#95DCFB\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(149 220 251 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#A0B0B5\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(160 176 181 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#A3E398\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(163 227 152 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#A7CCFF\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(167 204 255 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#A8A8A8\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(168 168 168 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#C3BDFF\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(195 189 255 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#EEA7FF\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 167 255 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#FADB61\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 219 97 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#FFA5E3\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 165 227 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#FFADB8\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 173 184 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-\\[\\#FFBEA6\\]) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 190 166 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-alienblue-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(10 26 63 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-berrypurple-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(48 6 67 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-coolgray-600) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(83 97 104 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-coolgray-750) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 61 66 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-coolgray-800) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(42 50 54 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-global-black) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-kiwigreen-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(13 32 5 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-orangered-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(47 20 5 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-periwinkle-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 14 91 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-red-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(52 15 5 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-red-950) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 11 4 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-success-background) {\n  background-color: var(--color-success-background);\n}\n:is([class~="theme-dark"] .dark\\:bg-yellow-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(35 26 3 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:bg-yelloworange-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(42 23 5 / var(--tw-bg-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-alienblue-300) {\n  --tw-text-opacity: 1;\n  color: rgb(144 169 253 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-alienblue-400) {\n  --tw-text-opacity: 1;\n  color: rgb(100 142 252 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-berrypurple-200) {\n  --tw-text-opacity: 1;\n  color: rgb(234 179 253 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-coolgray-300) {\n  --tw-text-opacity: 1;\n  color: rgb(151 175 188 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-kiwigreen-300) {\n  --tw-text-opacity: 1;\n  color: rgb(0 198 28 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-neutral-content-strong) {\n  color: var(--color-neutral-content-strong);\n}\n:is([class~="theme-dark"] .dark\\:text-orangered-300) {\n  --tw-text-opacity: 1;\n  color: rgb(255 137 93 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-periwinkle-200) {\n  --tw-text-opacity: 1;\n  color: rgb(205 190 253 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-puregray-400) {\n  --tw-text-opacity: 1;\n  color: rgb(172 172 172 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-red-200) {\n  --tw-text-opacity: 1;\n  color: rgb(253 179 164 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-yellow-300) {\n  --tw-text-opacity: 1;\n  color: rgb(216 161 0 / var(--tw-text-opacity));\n}\n:is([class~="theme-dark"] .dark\\:text-yelloworange-300) {\n  --tw-text-opacity: 1;\n  color: rgb(255 138 53 / var(--tw-text-opacity));\n}\n@media (hover: hover) and (pointer: fine) {\n  :is([class~="theme-dark"] .dark\\:hover\\:text-neutral-content-strong:hover) {\n    color: var(--color-neutral-content-strong);\n  }\n}\n:is([class~="theme-dark"] .peer:checked ~ .group .dark\\:peer-checked\\:group-\\[\\]\\:bg-orangered-900) {\n  --tw-bg-opacity: 1;\n  background-color: rgb(47 20 5 / var(--tw-bg-opacity));\n}\n@media (min-width: 1024px) {\n  .lg\\:absolute {\n    position: absolute;\n  }\n  .lg\\:col-start-3 {\n    grid-column-start: 3;\n  }\n  .lg\\:col-end-3 {\n    grid-column-end: 3;\n  }\n  .lg\\:row-start-1 {\n    grid-row-start: 1;\n  }\n  .lg\\:row-end-auto {\n    grid-row-end: auto;\n  }\n  .lg\\:mb-lg {\n    margin-bottom: 1.5rem;\n  }\n  .lg\\:mr-2xs {\n    margin-right: 0.25rem;\n  }\n  .lg\\:mt-sm {\n    margin-top: 0.75rem;\n  }\n  .lg\\:mt-xs {\n    margin-top: 0.5rem;\n  }\n  .lg\\:block {\n    display: block;\n  }\n  .lg\\:inline-block {\n    display: inline-block;\n  }\n  .lg\\:flex {\n    display: flex;\n  }\n  .lg\\:hidden {\n    display: none;\n  }\n  .lg\\:w-5\\/12 {\n    width: 41.666667%;\n  }\n  .lg\\:w-7\\/12 {\n    width: 58.333333%;\n  }\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n  .lg\\:gap-\\[30px\\] {\n    gap: 30px;\n  }\n  .lg\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n  .lg\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .lg\\:px-lg {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 768px) {\n  .xs\\:visible {\n    visibility: visible;\n  }\n  .xs\\:sticky {\n    position: sticky;\n  }\n  .xs\\:-left-\\[2rem\\] {\n    left: -2rem;\n  }\n  .xs\\:-top-\\[2\\.25rem\\] {\n    top: -2.25rem;\n  }\n  .xs\\:left-\\[-16\\.5px\\] {\n    left: -16.5px;\n  }\n  .xs\\:top-\\[-2px\\] {\n    top: -2px;\n  }\n  .xs\\:top-\\[56px\\] {\n    top: 56px;\n  }\n  .xs\\:top-md {\n    top: 1rem;\n  }\n  .xs\\:z-10 {\n    z-index: 10;\n  }\n  .xs\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n  .xs\\:col-start-1 {\n    grid-column-start: 1;\n  }\n  .xs\\:col-start-2 {\n    grid-column-start: 2;\n  }\n  .xs\\:col-start-3 {\n    grid-column-start: 3;\n  }\n  .xs\\:col-start-9 {\n    grid-column-start: 9;\n  }\n  .xs\\:col-end-13 {\n    grid-column-end: 13;\n  }\n  .xs\\:col-end-15 {\n    grid-column-end: 15;\n  }\n  .xs\\:col-end-2 {\n    grid-column-end: 2;\n  }\n  .xs\\:col-end-3 {\n    grid-column-end: 3;\n  }\n  .xs\\:col-end-6 {\n    grid-column-end: 6;\n  }\n  .xs\\:col-end-9 {\n    grid-column-end: 9;\n  }\n  .xs\\:row-start-1 {\n    grid-row-start: 1;\n  }\n  .xs\\:row-start-2 {\n    grid-row-start: 2;\n  }\n  .xs\\:row-start-3 {\n    grid-row-start: 3;\n  }\n  .xs\\:row-start-4 {\n    grid-row-start: 4;\n  }\n  .xs\\:row-end-2 {\n    grid-row-end: 2;\n  }\n  .xs\\:row-end-3 {\n    grid-row-end: 3;\n  }\n  .xs\\:row-end-4 {\n    grid-row-end: 4;\n  }\n  .xs\\:row-end-5 {\n    grid-row-end: 5;\n  }\n  .xs\\:row-end-auto {\n    grid-row-end: auto;\n  }\n  .xs\\:-mx-xs {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n  .xs\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .xs\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .xs\\:mx-md {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .xs\\:mx-xs {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n  .xs\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n  .xs\\:my-2xs {\n    margin-top: 0.25rem;\n    margin-bottom: 0.25rem;\n  }\n  .xs\\:my-md {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n  .xs\\:my-xs {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n  }\n  .xs\\:-mb-\\[2\\.25rem\\] {\n    margin-bottom: -2.25rem;\n  }\n  .xs\\:mb-0 {\n    margin-bottom: 0px;\n  }\n  .xs\\:mb-5xl {\n    margin-bottom: 8rem;\n  }\n  .xs\\:mb-\\[12px\\] {\n    margin-bottom: 12px;\n  }\n  .xs\\:mb-md {\n    margin-bottom: 1rem;\n  }\n  .xs\\:mb-sm {\n    margin-bottom: 0.75rem;\n  }\n  .xs\\:mb-xl {\n    margin-bottom: 2rem;\n  }\n  .xs\\:mb-xs {\n    margin-bottom: 0.5rem;\n  }\n  .xs\\:ml-0 {\n    margin-left: 0px;\n  }\n  .xs\\:ml-md {\n    margin-left: 1rem;\n  }\n  .xs\\:ml-sm {\n    margin-left: 0.75rem;\n  }\n  .xs\\:ml-xl {\n    margin-left: 2rem;\n  }\n  .xs\\:mr-0 {\n    margin-right: 0px;\n  }\n  .xs\\:mr-lg {\n    margin-right: 1.5rem;\n  }\n  .xs\\:mr-md {\n    margin-right: 1rem;\n  }\n  .xs\\:mr-sm {\n    margin-right: 0.75rem;\n  }\n  .xs\\:mt-0 {\n    margin-top: 0px;\n  }\n  .xs\\:mt-2xs {\n    margin-top: 0.25rem;\n  }\n  .xs\\:mt-\\[2px\\] {\n    margin-top: 2px;\n  }\n  .xs\\:mt-\\[36px\\] {\n    margin-top: 36px;\n  }\n  .xs\\:mt-\\[4\\.7rem\\] {\n    margin-top: 4.7rem;\n  }\n  .xs\\:mt-\\[80px\\] {\n    margin-top: 80px;\n  }\n  .xs\\:mt-lg {\n    margin-top: 1.5rem;\n  }\n  .xs\\:mt-md {\n    margin-top: 1rem;\n  }\n  .xs\\:mt-xl {\n    margin-top: 2rem;\n  }\n  .xs\\:mt-xs {\n    margin-top: 0.5rem;\n  }\n  .xs\\:line-clamp-6 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 6;\n  }\n  .xs\\:line-clamp-none {\n    overflow: visible;\n    display: block;\n    -webkit-box-orient: horizontal;\n    -webkit-line-clamp: none;\n  }\n  .xs\\:block {\n    display: block;\n  }\n  .xs\\:inline-block {\n    display: inline-block;\n  }\n  .xs\\:inline {\n    display: inline;\n  }\n  .xs\\:flex {\n    display: flex;\n  }\n  .xs\\:grid {\n    display: grid;\n  }\n  .xs\\:hidden {\n    display: none;\n  }\n  .xs\\:h-2xl {\n    height: 3rem;\n  }\n  .xs\\:h-3xl {\n    height: 4rem;\n  }\n  .xs\\:h-4xl {\n    height: 6rem;\n  }\n  .xs\\:h-\\[100px\\] {\n    height: 100px;\n  }\n  .xs\\:h-\\[20px\\] {\n    height: 20px;\n  }\n  .xs\\:h-\\[22px\\] {\n    height: 22px;\n  }\n  .xs\\:h-\\[330px\\] {\n    height: 330px;\n  }\n  .xs\\:h-\\[40px\\] {\n    height: 40px;\n  }\n  .xs\\:h-\\[48px\\] {\n    height: 48px;\n  }\n  .xs\\:h-\\[56px\\] {\n    height: 56px;\n  }\n  .xs\\:h-\\[78px\\] {\n    height: 78px;\n  }\n  .xs\\:h-\\[80px\\] {\n    height: 80px;\n  }\n  .xs\\:h-\\[88px\\] {\n    height: 88px;\n  }\n  .xs\\:h-\\[90px\\] {\n    height: 90px;\n  }\n  .xs\\:h-\\[calc\\(100vh-var\\(--shreddit-header-height\\)-1px\\)\\] {\n    height: calc(100vh - var(--shreddit-header-height) - 1px);\n  }\n  .xs\\:h-xl {\n    height: 2rem;\n  }\n  .xs\\:max-h-\\[282px\\] {\n    max-height: 282px;\n  }\n  .xs\\:max-h-\\[calc\\(100vh-var\\(--shreddit-header-height\\)-1px\\)\\] {\n    max-height: calc(100vh - var(--shreddit-header-height) - 1px);\n  }\n  .xs\\:min-h-\\[120px\\] {\n    min-height: 120px;\n  }\n  .xs\\:min-h-\\[20rem\\] {\n    min-height: 20rem;\n  }\n  .xs\\:min-h-\\[calc\\(100vh-75px\\)\\] {\n    min-height: calc(100vh - 75px);\n  }\n  .xs\\:w-100 {\n    width: 100%;\n  }\n  .xs\\:w-2xl {\n    width: 3rem;\n  }\n  .xs\\:w-\\[104px\\] {\n    width: 104px;\n  }\n  .xs\\:w-\\[120px\\] {\n    width: 120px;\n  }\n  .xs\\:w-\\[130px\\] {\n    width: 130px;\n  }\n  .xs\\:w-\\[15\\.5px\\] {\n    width: 15.5px;\n  }\n  .xs\\:w-\\[180px\\] {\n    width: 180px;\n  }\n  .xs\\:w-\\[182px\\] {\n    width: 182px;\n  }\n  .xs\\:w-\\[20px\\] {\n    width: 20px;\n  }\n  .xs\\:w-\\[316px\\] {\n    width: 316px;\n  }\n  .xs\\:w-\\[440px\\] {\n    width: 440px;\n  }\n  .xs\\:w-\\[470px\\] {\n    width: 470px;\n  }\n  .xs\\:w-\\[48px\\] {\n    width: 48px;\n  }\n  .xs\\:w-\\[532px\\] {\n    width: 532px;\n  }\n  .xs\\:w-\\[56px\\] {\n    width: 56px;\n  }\n  .xs\\:w-\\[68px\\] {\n    width: 68px;\n  }\n  .xs\\:w-\\[70px\\] {\n    width: 70px;\n  }\n  .xs\\:w-\\[715px\\] {\n    width: 715px;\n  }\n  .xs\\:w-\\[768px\\] {\n    width: 768px;\n  }\n  .xs\\:w-\\[80px\\] {\n    width: 80px;\n  }\n  .xs\\:w-\\[88px\\] {\n    width: 88px;\n  }\n  .xs\\:w-\\[96\\%\\] {\n    width: 96%;\n  }\n  .xs\\:w-auto {\n    width: auto;\n  }\n  .xs\\:w-fit {\n    width: fit-content;\n  }\n  .xs\\:w-full {\n    width: 100%;\n  }\n  .xs\\:w-xl {\n    width: 2rem;\n  }\n  .xs\\:min-w-\\[316px\\] {\n    min-width: 316px;\n  }\n  .xs\\:min-w-\\[400px\\] {\n    min-width: 400px;\n  }\n  .xs\\:min-w-\\[500px\\] {\n    min-width: 500px;\n  }\n  .xs\\:min-w-\\[513px\\] {\n    min-width: 513px;\n  }\n  .xs\\:max-w-\\[492px\\] {\n    max-width: 492px;\n  }\n  .xs\\:max-w-\\[500px\\] {\n    max-width: 500px;\n  }\n  .xs\\:max-w-\\[513px\\] {\n    max-width: 513px;\n  }\n  .xs\\:max-w-\\[620px\\] {\n    max-width: 620px;\n  }\n  .xs\\:max-w-\\[625px\\] {\n    max-width: 625px;\n  }\n  .xs\\:max-w-\\[800px\\] {\n    max-width: 800px;\n  }\n  .xs\\:max-w-\\[min\\(756px\\2c calc\\(100\\%-\\(16px\\+316px\\)\\)\\)\\] {\n    max-width: min(756px,calc(100% - (16px + 316px)));\n  }\n  .xs\\:max-w-none {\n    max-width: none;\n  }\n  .xs\\:shrink-0 {\n    flex-shrink: 0;\n  }\n  .xs\\:grow-0 {\n    flex-grow: 0;\n  }\n  .xs\\:basis-\\[calc\\(50\\%-6px\\)\\] {\n    flex-basis: calc(50% - 6px);\n  }\n  .xs\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .xs\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xs\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .xs\\:grid-cols-\\[15rem_1fr\\] {\n    grid-template-columns: 15rem 1fr;\n  }\n  .xs\\:grid-cols-\\[2fr_1fr\\] {\n    grid-template-columns: 2fr 1fr;\n  }\n  .xs\\:grid-cols-\\[32px_1fr\\] {\n    grid-template-columns: 32px 1fr;\n  }\n  .xs\\:grid-cols-\\[32px_minmax\\(0\\2c 1fr\\)\\] {\n    grid-template-columns: 32px minmax(0,1fr);\n  }\n  .xs\\:grid-cols-\\[min-content_1fr\\] {\n    grid-template-columns: min-content 1fr;\n  }\n  .xs\\:grid-cols-\\[repeat\\(8\\2c _1fr\\)_repeat\\(4\\2c minmax\\(61px\\2c _1fr\\)\\)\\] {\n    grid-template-columns: repeat(8, 1fr) repeat(4,minmax(61px, 1fr));\n  }\n  .xs\\:grid-rows-\\[auto_auto\\] {\n    grid-template-rows: auto auto;\n  }\n  .xs\\:grid-rows-\\[auto_auto_auto_auto\\] {\n    grid-template-rows: auto auto auto auto;\n  }\n  .xs\\:flex-row {\n    flex-direction: row;\n  }\n  .xs\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .xs\\:items-start {\n    align-items: flex-start;\n  }\n  .xs\\:items-end {\n    align-items: flex-end;\n  }\n  .xs\\:items-center {\n    align-items: center;\n  }\n  .xs\\:justify-start {\n    justify-content: flex-start;\n  }\n  .xs\\:justify-center {\n    justify-content: center;\n  }\n  .xs\\:justify-around {\n    justify-content: space-around;\n  }\n  .xs\\:gap-0 {\n    gap: 0px;\n  }\n  .xs\\:gap-\\[24px\\] {\n    gap: 24px;\n  }\n  .xs\\:gap-md {\n    gap: 1rem;\n  }\n  .xs\\:gap-sm {\n    gap: 0.75rem;\n  }\n  .xs\\:gap-xl {\n    gap: 2rem;\n  }\n  .xs\\:gap-xs {\n    gap: 0.5rem;\n  }\n  .xs\\:gap-x-3xl {\n    column-gap: 4rem;\n  }\n  .xs\\:gap-x-lg {\n    column-gap: 1.5rem;\n  }\n  .xs\\:gap-x-xs {\n    column-gap: 0.5rem;\n  }\n  .xs\\:gap-y-xl {\n    row-gap: 2rem;\n  }\n  .xs\\:overflow-y-auto {\n    overflow-y: auto;\n  }\n  .xs\\:overflow-x-hidden {\n    overflow-x: hidden;\n  }\n  .xs\\:whitespace-nowrap {\n    white-space: nowrap;\n  }\n  .xs\\:rounded-\\[16px\\] {\n    border-radius: 16px;\n  }\n  .xs\\:rounded-\\[34px\\] {\n    border-radius: 34px;\n  }\n  .xs\\:rounded-\\[36px\\] {\n    border-radius: 36px;\n  }\n  .xs\\:rounded-\\[8px\\] {\n    border-radius: 8px;\n  }\n  .xs\\:rounded-b-\\[16px\\] {\n    border-bottom-right-radius: 16px;\n    border-bottom-left-radius: 16px;\n  }\n  .xs\\:rounded-t-\\[16px\\] {\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n  }\n  .xs\\:border-x-sm {\n    border-left-width: 0.0625rem;\n    border-right-width: 0.0625rem;\n  }\n  .xs\\:border-l-sm {\n    border-left-width: 0.0625rem;\n  }\n  .xs\\:border-t-0 {\n    border-top-width: 0rem;\n  }\n  .xs\\:bg-neutral-background-weak {\n    background-color: var(--color-neutral-background-weak);\n  }\n  .xs\\:p-2xs {\n    padding: 0.25rem;\n  }\n  .xs\\:p-\\[16px\\] {\n    padding: 16px;\n  }\n  .xs\\:p-\\[2px\\] {\n    padding: 2px;\n  }\n  .xs\\:p-lg {\n    padding: 1.5rem;\n  }\n  .xs\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .xs\\:px-2xs {\n    padding-left: 0.25rem;\n    padding-right: 0.25rem;\n  }\n  .xs\\:px-3xl {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n  .xs\\:px-\\[8px\\] {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n  .xs\\:px-lg {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .xs\\:px-md {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .xs\\:px-xl {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n  .xs\\:px-xs {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .xs\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  .xs\\:py-2xl {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n  .xs\\:py-\\[64px\\] {\n    padding-top: 64px;\n    padding-bottom: 64px;\n  }\n  .xs\\:py-\\[96px\\] {\n    padding-top: 96px;\n    padding-bottom: 96px;\n  }\n  .xs\\:py-lg {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n  .xs\\:py-md {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n  .xs\\:pb-0 {\n    padding-bottom: 0px;\n  }\n  .xs\\:pb-4xl {\n    padding-bottom: 6rem;\n  }\n  .xs\\:pb-\\[10px\\] {\n    padding-bottom: 10px;\n  }\n  .xs\\:pb-\\[36px\\] {\n    padding-bottom: 36px;\n  }\n  .xs\\:pb-lg {\n    padding-bottom: 1.5rem;\n  }\n  .xs\\:pb-md {\n    padding-bottom: 1rem;\n  }\n  .xs\\:pb-xs {\n    padding-bottom: 0.5rem;\n  }\n  .xs\\:pl-md {\n    padding-left: 1rem;\n  }\n  .xs\\:pl-xl {\n    padding-left: 2rem;\n  }\n  .xs\\:pr-md {\n    padding-right: 1rem;\n  }\n  .xs\\:pt-0 {\n    padding-top: 0px;\n  }\n  .xs\\:pt-2xl {\n    padding-top: 3rem;\n  }\n  .xs\\:pt-4xl {\n    padding-top: 6rem;\n  }\n  .xs\\:pt-5xl {\n    padding-top: 8rem;\n  }\n  .xs\\:pt-lg {\n    padding-top: 1.5rem;\n  }\n  .xs\\:pt-md {\n    padding-top: 1rem;\n  }\n  .xs\\:pt-xs {\n    padding-top: 0.5rem;\n  }\n  .xs\\:text-left {\n    text-align: left;\n  }\n  .xs\\:text-12 {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n  .xs\\:text-14 {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n  .xs\\:text-16 {\n    font-size: 1rem;\n    line-height: 1.25rem;\n  }\n  .xs\\:text-18 {\n    font-size: 1.125rem;\n    line-height: 1.5rem;\n  }\n  .xs\\:text-20 {\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n  }\n  .xs\\:text-24 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n  }\n  .xs\\:text-32 {\n    font-size: 2rem;\n    line-height: 2.25rem;\n  }\n  .xs\\:text-48 {\n    font-size: 3rem;\n    line-height: 3rem;\n  }\n  .xs\\:text-\\[14px\\] {\n    font-size: 14px;\n  }\n  .xs\\:font-semibold {\n    font-weight: 600;\n  }\n  .xs\\:uppercase {\n    text-transform: uppercase;\n  }\n  .xs\\:leading-9 {\n    line-height: 2.25rem;\n  }\n  .xs\\:text-neutral-content {\n    color: var(--color-neutral-content);\n  }\n  .xs\\:text-neutral-content-weak {\n    color: var(--color-neutral-content-weak);\n  }\n  .xs\\:shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .xs\\:\\[--marketplace-tile-grid-content-columns\\:2\\] {\n    --marketplace-tile-grid-content-columns: 2;\n  }\n  .xs\\:\\[--marketplace-tile-grid-content-columns\\:4\\] {\n    --marketplace-tile-grid-content-columns: 4;\n  }\n  .xs\\:\\[--marketplace-tile-grid-content-columns\\:6\\] {\n    --marketplace-tile-grid-content-columns: 6;\n  }\n  .xs\\:\\[--marketplace-tile-grid-content-gap\\:var\\(--rem16\\)\\] {\n    --marketplace-tile-grid-content-gap: var(--rem16);\n  }\n  .xs\\:\\[--marketplace-tile-grid-content-gap\\:var\\(--rem24\\)\\] {\n    --marketplace-tile-grid-content-gap: var(--rem24);\n  }\n  .first\\:xs\\:pl-2xs:first-child {\n    padding-left: 0.25rem;\n  }\n  .last\\:xs\\:block:last-child {\n    display: block;\n  }\n  .last\\:xs\\:pr-2xs:last-child {\n    padding-right: 0.25rem;\n  }\n  :is([class~="theme-dark"] .xs\\:dark\\:text-neutral-content-weak) {\n    color: var(--color-neutral-content-weak);\n  }\n  @media (hover: hover) and (pointer: fine) {\n    :is([class~="theme-dark"] .xs\\:dark\\:hover\\:text-neutral-content-weak:hover) {\n      color: var(--color-neutral-content-weak);\n    }\n  }\n}\n@media (min-width: 960px) {\n  .s\\:visible {\n    visibility: visible;\n  }\n  .s\\:invisible {\n    visibility: hidden;\n  }\n  .s\\:static {\n    position: static;\n  }\n  .s\\:fixed {\n    position: fixed;\n  }\n  .s\\:relative {\n    position: relative;\n  }\n  .s\\:bottom-auto {\n    bottom: auto;\n  }\n  .s\\:left-auto {\n    left: auto;\n  }\n  .s\\:right-auto {\n    right: auto;\n  }\n  .s\\:top-auto {\n    top: auto;\n  }\n  .s\\:z-10 {\n    z-index: 10;\n  }\n  .s\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .s\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n  .s\\:col-start-1 {\n    grid-column-start: 1;\n  }\n  .s\\:col-start-4 {\n    grid-column-start: 4;\n  }\n  .s\\:col-end-10 {\n    grid-column-end: 10;\n  }\n  .s\\:col-end-13 {\n    grid-column-end: 13;\n  }\n  .s\\:col-end-15 {\n    grid-column-end: 15;\n  }\n  .s\\:col-end-4 {\n    grid-column-end: 4;\n  }\n  .s\\:m-0 {\n    margin: 0px;\n  }\n  .s\\:mb-0 {\n    margin-bottom: 0px;\n  }\n  .s\\:mb-md {\n    margin-bottom: 1rem;\n  }\n  .s\\:ml-0 {\n    margin-left: 0px;\n  }\n  .s\\:ml-\\[381px\\] {\n    margin-left: 381px;\n  }\n  .s\\:mr-0 {\n    margin-right: 0px;\n  }\n  .s\\:mr-md {\n    margin-right: 1rem;\n  }\n  .s\\:mt-md {\n    margin-top: 1rem;\n  }\n  .s\\:mt-xl {\n    margin-top: 2rem;\n  }\n  .s\\:block {\n    display: block;\n  }\n  .s\\:flex {\n    display: flex;\n  }\n  .s\\:contents {\n    display: contents;\n  }\n  .s\\:hidden {\n    display: none;\n  }\n  .s\\:h-100 {\n    height: 100%;\n  }\n  .s\\:h-5xl {\n    height: 8rem;\n  }\n  .s\\:h-\\[24px\\] {\n    height: 24px;\n  }\n  .s\\:h-\\[408px\\] {\n    height: 408px;\n  }\n  .s\\:h-\\[478px\\] {\n    height: 478px;\n  }\n  .s\\:h-\\[75px\\] {\n    height: 75px;\n  }\n  .s\\:h-\\[785px\\] {\n    height: 785px;\n  }\n  .s\\:h-\\[88px\\] {\n    height: 88px;\n  }\n  .s\\:h-\\[calc\\(100vh-var\\(--shreddit-header-height\\)-240px\\)\\] {\n    height: calc(100vh - var(--shreddit-header-height) - 240px);\n  }\n  .s\\:h-full {\n    height: 100%;\n  }\n  .s\\:h-lg {\n    height: 1.5rem;\n  }\n  .s\\:max-h-\\[318px\\] {\n    max-height: 318px;\n  }\n  .s\\:max-h-\\[432px\\] {\n    max-height: 432px;\n  }\n  .s\\:max-h-\\[48px\\] {\n    max-height: 48px;\n  }\n  .s\\:max-h-\\[492px\\] {\n    max-height: 492px;\n  }\n  .s\\:min-h-\\[48px\\] {\n    min-height: 48px;\n  }\n  .s\\:w-4\\/5 {\n    width: 80%;\n  }\n  .s\\:w-\\[144px\\] {\n    width: 144px;\n  }\n  .s\\:w-\\[24px\\] {\n    width: 24px;\n  }\n  .s\\:w-\\[343px\\] {\n    width: 343px;\n  }\n  .s\\:w-\\[454px\\] {\n    width: 454px;\n  }\n  .s\\:w-\\[530px\\] {\n    width: 530px;\n  }\n  .s\\:w-\\[558px\\] {\n    width: 558px;\n  }\n  .s\\:w-\\[730px\\] {\n    width: 730px;\n  }\n  .s\\:w-\\[768px\\] {\n    width: 768px;\n  }\n  .s\\:w-\\[88px\\] {\n    width: 88px;\n  }\n  .s\\:w-auto {\n    width: auto;\n  }\n  .s\\:w-full {\n    width: 100%;\n  }\n  .s\\:w-lg {\n    width: 1.5rem;\n  }\n  .s\\:min-w-\\[400px\\] {\n    min-width: 400px;\n  }\n  .s\\:min-w-\\[48px\\] {\n    min-width: 48px;\n  }\n  .s\\:max-w-\\[100\\%\\] {\n    max-width: 100%;\n  }\n  .s\\:max-w-\\[360px\\] {\n    max-width: 360px;\n  }\n  .s\\:max-w-\\[48px\\] {\n    max-width: 48px;\n  }\n  .s\\:max-w-\\[800px\\] {\n    max-width: 800px;\n  }\n  .s\\:max-w-container-s {\n    max-width: 994px;\n  }\n  .s\\:shrink {\n    flex-shrink: 1;\n  }\n  .s\\:auto-rows-\\[minmax\\(144px\\2c _auto\\)\\] {\n    grid-auto-rows: minmax(144px, auto);\n  }\n  .s\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n  .s\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .s\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .s\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .s\\:grid-cols-\\[repeat\\(auto-fit\\2c _144px\\)\\] {\n    grid-template-columns: repeat(auto-fit, 144px);\n  }\n  .s\\:flex-row {\n    flex-direction: row;\n  }\n  .s\\:flex-row-reverse {\n    flex-direction: row-reverse;\n  }\n  .s\\:flex-col {\n    flex-direction: column;\n  }\n  .s\\:items-end {\n    align-items: flex-end;\n  }\n  .s\\:items-center {\n    align-items: center;\n  }\n  .s\\:items-stretch {\n    align-items: stretch;\n  }\n  .s\\:justify-start {\n    justify-content: flex-start;\n  }\n  .s\\:justify-end {\n    justify-content: flex-end;\n  }\n  .s\\:justify-between {\n    justify-content: space-between;\n  }\n  .s\\:gap-lg {\n    gap: 1.5rem;\n  }\n  .s\\:gap-md {\n    gap: 1rem;\n  }\n  .s\\:gap-xl {\n    gap: 2rem;\n  }\n  .s\\:gap-x-\\[20px\\] {\n    column-gap: 20px;\n  }\n  .s\\:gap-x-md {\n    column-gap: 1rem;\n  }\n  .s\\:gap-y-lg {\n    row-gap: 1.5rem;\n  }\n  .s\\:overflow-auto {\n    overflow: auto;\n  }\n  .s\\:rounded-\\[16px\\] {\n    border-radius: 16px;\n  }\n  .s\\:rounded-\\[8px\\] {\n    border-radius: 8px;\n  }\n  .s\\:rounded-l-sm {\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n  .s\\:rounded-r-\\[8px\\] {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  .s\\:border-r-sm {\n    border-right-width: 0.0625rem;\n  }\n  .s\\:bg-transparent {\n    background-color: transparent;\n  }\n  .s\\:bg-center {\n    background-position: center;\n  }\n  .s\\:p-0 {\n    padding: 0px;\n  }\n  .s\\:p-lg {\n    padding: 1.5rem;\n  }\n  .s\\:p-md {\n    padding: 1rem;\n  }\n  .s\\:p-xl {\n    padding: 2rem;\n  }\n  .s\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .s\\:px-\\[144px\\] {\n    padding-left: 144px;\n    padding-right: 144px;\n  }\n  .s\\:px-lg {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .s\\:px-sm {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n  .s\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  .s\\:py-lg {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n  .s\\:pb-0 {\n    padding-bottom: 0px;\n  }\n  .s\\:pb-3xl {\n    padding-bottom: 4rem;\n  }\n  .s\\:pb-\\[4xl\\] {\n    padding-bottom: 4xl;\n  }\n  .s\\:pb-lg {\n    padding-bottom: 1.5rem;\n  }\n  .s\\:pb-md {\n    padding-bottom: 1rem;\n  }\n  .s\\:pb-sm {\n    padding-bottom: 0.75rem;\n  }\n  .s\\:pl-0 {\n    padding-left: 0px;\n  }\n  .s\\:pl-xs {\n    padding-left: 0.5rem;\n  }\n  .s\\:pr-0 {\n    padding-right: 0px;\n  }\n  .s\\:pr-xs {\n    padding-right: 0.5rem;\n  }\n  .s\\:pt-2xl {\n    padding-top: 3rem;\n  }\n  .s\\:pt-\\[56px\\] {\n    padding-top: 56px;\n  }\n  .s\\:pt-lg {\n    padding-top: 1.5rem;\n  }\n  .s\\:pt-sm {\n    padding-top: 0.75rem;\n  }\n  .s\\:text-center {\n    text-align: center;\n  }\n  .s\\:text-14 {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n  .s\\:text-16 {\n    font-size: 1rem;\n    line-height: 1.25rem;\n  }\n  .s\\:text-20 {\n    font-size: 1.25rem;\n    line-height: 1.25rem;\n  }\n  .s\\:text-24 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n  }\n  .s\\:text-32 {\n    font-size: 2rem;\n    line-height: 2.25rem;\n  }\n  .s\\:shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .s\\:\\[--marketplace-tile-grid-content-columns\\:4\\] {\n    --marketplace-tile-grid-content-columns: 4;\n  }\n  .s\\:\\[--marketplace-tile-grid-content-columns\\:5\\] {\n    --marketplace-tile-grid-content-columns: 5;\n  }\n  .s\\:\\[--marketplace-tile-grid-content-columns\\:7\\] {\n    --marketplace-tile-grid-content-columns: 7;\n  }\n  @container (min-width: 80rem) {\n    .s\\:\\@7xl\\:h-\\[12rem\\] {\n      height: 12rem;\n    }\n  }\n}\n@media (min-width: 1200px) {\n  .m\\:pointer-events-auto {\n    pointer-events: auto;\n  }\n  .m\\:visible {\n    visibility: visible;\n  }\n  .m\\:col-start-11 {\n    grid-column-start: 11;\n  }\n  .m\\:col-start-2 {\n    grid-column-start: 2;\n  }\n  .m\\:col-start-3 {\n    grid-column-start: 3;\n  }\n  .m\\:col-start-4 {\n    grid-column-start: 4;\n  }\n  .m\\:col-end-11 {\n    grid-column-end: 11;\n  }\n  .m\\:col-end-15 {\n    grid-column-end: 15;\n  }\n  .m\\:col-end-4 {\n    grid-column-end: 4;\n  }\n  .m\\:col-end-5 {\n    grid-column-end: 5;\n  }\n  .m\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .m\\:mx-lg {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .m\\:ml-sm {\n    margin-left: 0.75rem;\n  }\n  .m\\:mt-3xl {\n    margin-top: 4rem;\n  }\n  .m\\:mt-xl {\n    margin-top: 2rem;\n  }\n  .m\\:block {\n    display: block;\n  }\n  .m\\:inline-block {\n    display: inline-block;\n  }\n  .m\\:flex {\n    display: flex;\n  }\n  .m\\:grid {\n    display: grid;\n  }\n  .m\\:hidden {\n    display: none;\n  }\n  .m\\:h-\\[600px\\] {\n    height: 600px;\n  }\n  .m\\:h-\\[fit-content\\] {\n    height: fit-content;\n  }\n  .m\\:max-h-\\[337px\\] {\n    max-height: 337px;\n  }\n  .m\\:max-h-\\[60vh\\] {\n    max-height: 60vh;\n  }\n  .m\\:w-\\[1120px\\] {\n    width: 1120px;\n  }\n  .m\\:w-\\[200px\\] {\n    width: 200px;\n  }\n  .m\\:w-\\[288px\\] {\n    width: 288px;\n  }\n  .m\\:w-\\[400px\\] {\n    width: 400px;\n  }\n  .m\\:w-\\[455px\\] {\n    width: 455px;\n  }\n  .m\\:w-\\[560px\\] {\n    width: 560px;\n  }\n  .m\\:w-\\[640px\\] {\n    width: 640px;\n  }\n  .m\\:w-fit {\n    width: fit-content;\n  }\n  .m\\:max-w-\\[768px\\] {\n    max-width: 768px;\n  }\n  .m\\:max-w-\\[calc\\(100vw-272px\\)\\] {\n    max-width: calc(100vw - 272px);\n  }\n  .m\\:max-w-container-m {\n    max-width: 1132px;\n  }\n  .m\\:max-w-none {\n    max-width: none;\n  }\n  .m\\:basis-\\[calc\\(33\\.33\\%-8px\\)\\] {\n    flex-basis: calc(33.33% - 8px);\n  }\n  .m\\:grid-cols-14 {\n    grid-template-columns: repeat(14, minmax(0, 1fr));\n  }\n  .m\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .m\\:grid-cols-\\[272px_1fr\\] {\n    grid-template-columns: 272px 1fr;\n  }\n  .m\\:grid-cols-\\[repeat\\(10\\2c _1fr\\)_repeat\\(4\\2c minmax\\(61px\\2c _1fr\\)\\)\\] {\n    grid-template-columns: repeat(10, 1fr) repeat(4,minmax(61px, 1fr));\n  }\n  .m\\:items-end {\n    align-items: flex-end;\n  }\n  .m\\:justify-center {\n    justify-content: center;\n  }\n  .m\\:gap-x-4xl {\n    column-gap: 6rem;\n  }\n  .m\\:gap-x-\\[16px\\] {\n    column-gap: 16px;\n  }\n  .m\\:rounded-lg {\n    border-radius: 2rem;\n  }\n  .m\\:bg-\\[\\#FFCF24\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 207 36 / var(--tw-bg-opacity));\n  }\n  .m\\:bg-neutral-background {\n    background-color: var(--color-neutral-background);\n  }\n  .m\\:p-xl {\n    padding: 2rem;\n  }\n  .m\\:px-4xl {\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n  .m\\:px-\\[144px\\] {\n    padding-left: 144px;\n    padding-right: 144px;\n  }\n  .m\\:px-\\[24px\\] {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n  .m\\:px-\\[83px\\] {\n    padding-left: 83px;\n    padding-right: 83px;\n  }\n  .m\\:px-lg {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .m\\:px-xs {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .m\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  .m\\:py-\\[36px\\] {\n    padding-top: 36px;\n    padding-bottom: 36px;\n  }\n  .m\\:py-\\[64px\\] {\n    padding-top: 64px;\n    padding-bottom: 64px;\n  }\n  .m\\:\\!pl-0 {\n    padding-left: 0px !important;\n  }\n  .m\\:pb-0 {\n    padding-bottom: 0px;\n  }\n  .m\\:pb-5xl {\n    padding-bottom: 8rem;\n  }\n  .m\\:pl-0 {\n    padding-left: 0px;\n  }\n  .m\\:pt-4xl {\n    padding-top: 6rem;\n  }\n  .m\\:pt-\\[120px\\] {\n    padding-top: 120px;\n  }\n  .m\\:text-left {\n    text-align: left;\n  }\n  .m\\:text-18 {\n    font-size: 1.125rem;\n    line-height: 1.5rem;\n  }\n  .m\\:text-24 {\n    font-size: 1.5rem;\n    line-height: 1.75rem;\n  }\n  .m\\:text-32 {\n    font-size: 2rem;\n    line-height: 2.25rem;\n  }\n  .m\\:font-bold {\n    font-weight: 700;\n  }\n  .m\\:text-neutral-content {\n    color: var(--color-neutral-content);\n  }\n  .m\\:text-neutral-content-strong {\n    color: var(--color-neutral-content-strong);\n  }\n  .m\\:shadow-md {\n    --tw-shadow: var(--elevation-md);\n    --tw-shadow-colored: var(--elevation-md);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .m\\:\\[--marketplace-tile-grid-content-columns\\:4\\] {\n    --marketplace-tile-grid-content-columns: 4;\n  }\n  .m\\:\\[--marketplace-tile-grid-content-columns\\:6\\] {\n    --marketplace-tile-grid-content-columns: 6;\n  }\n  .m\\:\\[--marketplace-tile-grid-content-columns\\:8\\] {\n    --marketplace-tile-grid-content-columns: 8;\n  }\n}\n@media (min-width: 1416px) {\n  .l\\:pointer-events-none {\n    pointer-events: none;\n  }\n  .l\\:absolute {\n    position: absolute;\n  }\n  .l\\:left-0 {\n    left: 0px;\n  }\n  .l\\:right-0 {\n    right: 0px;\n  }\n  .l\\:top-xs {\n    top: 0.5rem;\n  }\n  .l\\:col-start-13 {\n    grid-column-start: 13;\n  }\n  .l\\:col-start-4 {\n    grid-column-start: 4;\n  }\n  .l\\:col-end-13 {\n    grid-column-end: 13;\n  }\n  .l\\:col-end-15 {\n    grid-column-end: 15;\n  }\n  .l\\:col-end-17 {\n    grid-column-end: 17;\n  }\n  .l\\:col-end-4 {\n    grid-column-end: 4;\n  }\n  .l\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .l\\:mb-\\[-136px\\] {\n    margin-bottom: -136px;\n  }\n  .l\\:mt-md {\n    margin-top: 1rem;\n  }\n  .l\\:block {\n    display: block;\n  }\n  .l\\:flex {\n    display: flex;\n  }\n  .l\\:hidden {\n    display: none;\n  }\n  .l\\:h-\\[40px\\] {\n    height: 40px;\n  }\n  .l\\:max-h-\\[352px\\] {\n    max-height: 352px;\n  }\n  .l\\:w-\\[144px\\] {\n    width: 144px;\n  }\n  .l\\:max-w-\\[1352px\\] {\n    max-width: 1352px;\n  }\n  .l\\:max-w-\\[590px\\] {\n    max-width: 590px;\n  }\n  .l\\:max-w-container-l {\n    max-width: 1352px;\n  }\n  .l\\:grid-cols-16 {\n    grid-template-columns: repeat(16, minmax(0, 1fr));\n  }\n  .l\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .l\\:gap-2xl {\n    gap: 3rem;\n  }\n  .l\\:gap-x-lg {\n    column-gap: 1.5rem;\n  }\n  .l\\:rounded-\\[0\\.75rem\\] {\n    border-radius: 0.75rem;\n  }\n  .l\\:p-4xl {\n    padding: 6rem;\n  }\n  .l\\:p-lg {\n    padding: 1.5rem;\n  }\n  .l\\:px-lg {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .l\\:pt-5xl {\n    padding-top: 8rem;\n  }\n  .l\\:text-left {\n    text-align: left;\n  }\n}\n@media (min-width: 1920px) {\n  .xl\\:col-start-15 {\n    grid-column-start: 15;\n  }\n  .xl\\:col-start-4 {\n    grid-column-start: 4;\n  }\n  .xl\\:col-start-5 {\n    grid-column-start: 5;\n  }\n  .xl\\:col-end-14 {\n    grid-column-end: 14;\n  }\n  .xl\\:col-end-19 {\n    grid-column-end: 19;\n  }\n  .xl\\:mt-4xl {\n    margin-top: 6rem;\n  }\n  .xl\\:block {\n    display: block;\n  }\n  .xl\\:flex {\n    display: flex;\n  }\n  .xl\\:hidden {\n    display: none;\n  }\n  .xl\\:max-h-\\[452px\\] {\n    max-height: 452px;\n  }\n  .xl\\:max-w-\\[1524px\\] {\n    max-width: 1524px;\n  }\n  .xl\\:max-w-container-xl {\n    max-width: 1524px;\n  }\n  .xl\\:grid-cols-18 {\n    grid-template-columns: repeat(18, minmax(0, 1fr));\n  }\n  .xl\\:gap-y-2xl {\n    row-gap: 3rem;\n  }\n  .xl\\:gap-y-xl {\n    row-gap: 2rem;\n  }\n  .xl\\:rounded-\\[0\\.75rem\\] {\n    border-radius: 0.75rem;\n  }\n  .xl\\:text-left {\n    text-align: left;\n  }\n}\n@media (max-width: 500px) {\n  .embed-m\\:right-xs {\n    right: 0.5rem;\n  }\n  .embed-m\\:top-xs {\n    top: 0.5rem;\n  }\n  .embed-m\\:mb-md {\n    margin-bottom: 1rem;\n  }\n  .embed-m\\:mr-0 {\n    margin-right: 0px;\n  }\n  .embed-m\\:mt-md {\n    margin-top: 1rem;\n  }\n  .embed-m\\:w-\\[180px\\] {\n    width: 180px;\n  }\n  .embed-m\\:flex-1 {\n    flex: 1 1 0%;\n  }\n  .embed-m\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 325px) {\n  .embed-s\\:absolute {\n    position: absolute;\n  }\n  .embed-s\\:right-md {\n    right: 1rem;\n  }\n  .embed-s\\:top-\\[10px\\] {\n    top: 10px;\n  }\n  .embed-s\\:ml-0 {\n    margin-left: 0px;\n  }\n  .embed-s\\:mt-xs {\n    margin-top: 0.5rem;\n  }\n  .embed-s\\:block {\n    display: block;\n  }\n  .embed-s\\:hidden {\n    display: none;\n  }\n  .embed-s\\:flex-col {\n    flex-direction: column;\n  }\n  .embed-s\\:items-start {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 260px) {\n  .embed-xs\\:absolute {\n    position: absolute;\n  }\n  .embed-xs\\:right-\\[54px\\] {\n    right: 54px;\n  }\n  .embed-xs\\:z-10 {\n    z-index: 10;\n  }\n  .embed-xs\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .embed-xs\\:ml-md {\n    margin-left: 1rem;\n  }\n  .embed-xs\\:mt-2xs {\n    margin-top: 0.25rem;\n  }\n  .embed-xs\\:hidden {\n    display: none;\n  }\n  .embed-xs\\:h-\\[2px\\] {\n    height: 2px;\n  }\n  .embed-xs\\:h-\\[40px\\] {\n    height: 40px;\n  }\n  .embed-xs\\:h-\\[80px\\] {\n    height: 80px;\n  }\n  .embed-xs\\:h-lg {\n    height: 1.5rem;\n  }\n  .embed-xs\\:max-h-\\[540px\\] {\n    max-height: 540px;\n  }\n  .embed-xs\\:w-\\[80px\\] {\n    width: 80px;\n  }\n  .embed-xs\\:w-lg {\n    width: 1.5rem;\n  }\n  .embed-xs\\:\\!min-w-\\[40px\\] {\n    min-width: 40px !important;\n  }\n  .embed-xs\\:\\!min-w-\\[43px\\] {\n    min-width: 43px !important;\n  }\n  .embed-xs\\:gap-lg {\n    gap: 1.5rem;\n  }\n  .embed-xs\\:px-\\[5px\\] {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n  .embed-xs\\:text-12 {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n  .embed-xs\\:leading-4 {\n    line-height: 1rem;\n  }\n}\n@media (min-width: 1472px) {\n  .pdp-float-back-btn\\:absolute {\n    position: absolute;\n  }\n  .pdp-float-back-btn\\:-left-\\[2\\.5rem\\] {\n    left: -2.5rem;\n  }\n  .pdp-float-back-btn\\:top-md {\n    top: 1rem;\n  }\n}\n.\\[\\&\\.hidden\\~\\*\\]\\:block.hidden~* {\n  display: block;\n}\n.\\[\\&\\:not\\(\\:defined\\)\\>\\[slot\\]\\]\\:hidden:not(:defined)>[slot] {\n  display: none;\n}\n.\\[\\&\\:not\\(\\:defined\\)_\\.directory-link\\]\\:hidden:not(:defined) .directory-link {\n  display: none;\n}\n.\\[\\&\\>\\.threadline\\>\\*\\]\\:border-tone-2>.threadline>* {\n  border-color: var(--color-tone-2);\n}\n.\\[\\&\\>\\.threadline\\>\\*\\]\\:border-tone-4>.threadline>* {\n  border-color: var(--color-tone-4);\n}\n.\\[\\&\\>\\:first-child\\]\\:mb-0>:first-child {\n  margin-bottom: 0px;\n}\n.\\[\\&\\>\\:first-child\\]\\:rounded-full>:first-child {\n  border-radius: 624.9375rem;\n}\n.\\[\\&\\>\\:not\\(\\.pointer-events-none\\)\\]\\:pointer-events-auto>:not(.pointer-events-none) {\n  pointer-events: auto;\n}\n.\\[\\&\\>li\\>div\\]\\:px-0>li>div {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.\\[\\&\\>p\\]\\:my-0>p {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n.\\[\\&\\>svg\\]\\:block>svg {\n  display: block;\n}\n.\\[\\&\\>svg\\]\\:aspect-square>svg {\n  aspect-ratio: 1 / 1;\n}\n.\\[\\&\\>svg\\]\\:h-\\[1\\.25rem\\]>svg {\n  height: 1.25rem;\n}\n.\\[\\&\\>svg\\]\\:h-lg>svg {\n  height: 1.5rem;\n}\n.\\[\\&\\>svg\\]\\:h-md>svg {\n  height: 1rem;\n}\n.\\[\\&\\>svg\\]\\:h-sm>svg {\n  height: 0.75rem;\n}\n.\\[\\&\\>svg\\]\\:w-\\[1\\.25rem\\]>svg {\n  width: 1.25rem;\n}\n.\\[\\&\\>svg\\]\\:w-lg>svg {\n  width: 1.5rem;\n}\n.\\[\\&\\>svg\\]\\:w-md>svg {\n  width: 1rem;\n}\n.\\[\\&\\>svg\\]\\:w-sm>svg {\n  width: 0.75rem;\n}\n.\\[\\&\\>svg\\]\\:text-center>svg {\n  text-align: center;\n}\n.\\[\\&\\>svg\\]\\:align-middle>svg {\n  vertical-align: middle;\n}\n.\\[\\&\\[faceplate-validity\\=invalid\\]\\[faceplate-dirty\\]\\]\\:mb-0[faceplate-validity=invalid][faceplate-dirty] {\n  margin-bottom: 0px;\n}\n.\\[\\&_\\.emote\\]\\:whitespace-pre .emote {\n  white-space: pre;\n}\n.\\[\\&_\\.emote\\]\\:leading-\\[1\\.25rem\\] .emote {\n  line-height: 1.25rem;\n}\n.\\[\\&_\\.flair-image\\]\\:align-bottom .flair-image {\n  vertical-align: bottom;\n}\n.\\[\\&_\\.flair-image\\]\\:align-text-bottom .flair-image {\n  vertical-align: text-bottom;\n}\n.\\[\\&_a\\]\\:\\!text-current a {\n  color: currentColor !important;\n}\n.\\[\\&_a\\]\\:underline a {\n  text-decoration-line: underline;\n}\n.\\[\\&_div\\]\\:inline-flex div {\n  display: inline-flex;\n}\n.\\[\\&_div\\]\\:items-center div {\n  align-items: center;\n}\n.\\[\\&_faceplate-img\\.flair-image\\]\\:align-bottom faceplate-img.flair-image {\n  vertical-align: bottom;\n}\n.\\[\\&_faceplate-img\\]\\:leading-normal faceplate-img {\n  line-height: 1.5;\n}\n.\\[\\&_strong\\]\\:font-\\[800\\] strong {\n  font-weight: 800;\n}\n.\\[\\&\\~\\*\\]\\:hidden~* {\n  display: none;\n}\n'
);
function Le(e, t) {
  const n = k('faceplate-track', t),
    r = Me(t);
  (n.SAN = r), e.dispatchEvent(n);
}
function Me(e) {
  return `${e.source}/${e.action}/${e.noun}`.toLowerCase();
}
function Ue(e, t) {
  for (const n in t) {
    if ('source' === n || 'action' === n || 'noun' === n) continue;
    const r = t[n],
      o = e[n];
    null == o ? (e[n] = r) : V(o) && V(r) && Ue(o, r);
  }
}
const Fe = 'report',
  Ve = 'shreddit-composer-mode-toggle';
var Be, We;
!(function (e) {
  (e.RichText = 'richText'), (e.Markdown = 'markdown');
})(Be || (Be = {})),
  (function (e) {
    (e.Small = 'small'), (e.Large = 'large');
  })(We || (We = {}));
const He = 'input-focus',
  Ge = 'submit-post-button',
  Ye = 'save-draft-button',
  ze = 'date-picker-button',
  je = 'save-draft-failed-modal',
  qe = 'media-loss-draft-save-modal',
  $e = 'draft-load-failure-modal',
  Xe = 'post_composer';
var Ke, Qe;
!(function (e) {
  (e.Type = 'type'), (e.DraftId = 'draft');
})(Ke || (Ke = {})),
  (function (e) {
    (e.Draft = 'draft'),
      (e.Schedule = 'schedule'),
      (e.Submit = 'submit'),
      (e.UpdateDraft = 'updateDraft');
  })(Qe || (Qe = {}));
const Je = 'mod-overlay-display';
var Ze, et, tt, nt;
!(function (e) {
  (e.Upvote = 'upvote'),
    (e.Downvote = 'downvote'),
    (e.Reply = 'reply'),
    (e.Follow = 'follow'),
    (e.Awards = 'awards'),
    (e.Join = 'join'),
    (e.Report = 'report'),
    (e.Unknown = 'unknown');
})(Ze || (Ze = {})),
  (function (e) {
    (e.UpvoteComment = 'upvote_comment'),
      (e.DownvoteComment = 'downvote_comment'),
      (e.ReplyComment = 'reply_comment'),
      (e.Report = 'report');
  })(et || (et = {})),
  (function (e) {
    (e.Follow = 'follow'),
      (e.Unfollow = 'unfollow'),
      (e.Chat = 'chat'),
      (e.Share = 'share'),
      (e.Message = 'send_message'),
      (e.GivePremium = 'give_premium'),
      (e.BlockUser = 'block_user'),
      (e.UnblockUser = 'unblock_user'),
      (e.GetHelp = 'get_help'),
      (e.Report = 'report'),
      (e.AddToCustomFeed = 'add_to_custom_feed');
  })(tt || (tt = {})),
  (function (e) {
    (e.Post = 'post'), (e.Comment = 'comment');
  })(nt || (nt = {}));
const rt = 'track-event',
  ot = 'devvit-action',
  at = {
    upvote: 'upvote',
    downvote: 'downvote',
    upvoteTry: 'upvote_try',
    downvoteTry: 'downvote_try',
    reply: 'reply',
    join: 'join',
    signup: 'signup',
    save: 'save',
    follow: 'follow',
    awards: 'awards',
    buy: 'buy',
    report: 'report',
    'faceplate-track': 'faceplate-track',
    'track-event': 'track-event',
    'devvit-action': 'devvit-action'
  },
  it = [
    'nav/click/login',
    'user_drawer/click/login',
    'reddit_pro_onboarding/click/login'
  ],
  st = [
    'premium_marketing/click/price',
    'community_hovercard/click/join_signup_cta',
    'community/click/subscribe',
    'community/click/unsubscribe',
    `post_detail/click/${et.UpvoteComment}`,
    `post_detail/click/${et.DownvoteComment}`,
    `post_detail/click/${et.ReplyComment}`,
    'post_composer/click/create_post',
    'comment_composer/click/login_to_comment',
    `user_hovercard/click/${tt.Follow}`,
    `user_hovercard/click/${tt.Chat}`,
    'post/click/vote',
    `post/click/${Ze.Report}`,
    `profile/click/${et.DownvoteComment}`,
    `comment/click/${et.Report}`,
    'comment/click/reply',
    `profile/click/${et.UpvoteComment}`,
    `profile/click/${tt.Follow}`,
    `profile/click/${tt.Chat}`,
    `profile/click/${tt.Message}`,
    `profile/click/${tt.GivePremium}`,
    `profile/click/${tt.BlockUser}`,
    `profile/click/${tt.GetHelp}`,
    `profile/click/${tt.Report}`,
    `profile/click/${tt.AddToCustomFeed}`,
    'nav/click/recap_logged_out',
    'subreddit/click/recap_logged_out',
    'recap/click/recap_logged_out',
    'xpromo/click/nsfw_blur:login',
    'reddit_pro_onboarding/click/signup',
    'new_awards/click/report',
    ...it
  ];
let dt = class extends t {
  render() {
    return s`\n <slot @click="${this.interactionHandler}" @keydown="${this.interactionHandler}"></slot>\n `;
  }
  interactionHandler(e) {
    (e instanceof KeyboardEvent && 'Enter' !== e.key) ||
      this.dispatchEvent(new Event('interactionEvent'));
  }
};
var lt;
(dt = e([g('shreddit-interactable-element')], dt)),
  (function (e) {
    (e.AwardContent = 'award_content'),
      (e.AwardDialogClose = 'award_dialog_close'),
      (e.AwardDialogNavigateTo = 'award_dialog_navigate_to'),
      (e.AwardDialogGoldTopUpRequest = 'award_dialog_gold_top_up_request'),
      (e.CommentComposerBlurred = 'comment_composer_blurred'),
      (e.CommentComposerFocused = 'comment_composer_focused'),
      (e.CommentCreated = 'comment_created'),
      (e.CommentDeleted = 'comment_deleted'),
      (e.CommentUpdated = 'comment_updated'),
      (e.CommunityAuthorFlairUpdated = 'community_author_flair_updated'),
      (e.CustomFeedSourcesUpdated = 'custom_feed_sources_updated'),
      (e.CustomFeedCreated = 'custom_feed_created'),
      (e.CustomFeedDeleted = 'custom_feed_deleted'),
      (e.CustomFeedUpdated = 'custom_feed_updated'),
      (e.GoldPurchased = 'gold_purchased'),
      (e.PageDataRequested = 'page_data_requested'),
      (e.TriggerEducationalDeeplinkPrompt =
        'trigger_educational_deeplink_prompt'),
      (e.TriggerNsfwBlockingExperience = 'trigger_nsfw_blocking_experience'),
      (e.TriggerUntaggedContentBlockingExperience =
        'trigger_untagged_content_blocking_experience'),
      (e.ScreenViewDataLoaded = 'screenview_data_loaded'),
      (e.PageDataLoaded = 'page_data_loaded'),
      (e.LoidLoaded = 'loid_loaded'),
      (e.TopicPageTabChanged = 'topic_page_tab_changed'),
      (e.TopicPageSeeAllClicked = 'topic_page_see_all_clicked'),
      (e.ResizeEmbed = 'resize_embed'),
      (e.MultiredditFavoriteStatusChange =
        'multireddit_favorite_status_change'),
      (e.SubredditFavoriteStatusChange = 'subreddit_favorite_status_change'),
      (e.SubredditSubscriptionChange = 'subreddit_subscription_change'),
      (e.SubredditMuteStatusChange = 'subreddit_mute_status_change'),
      (e.PostUpdated = 'post_updated'),
      (e.ReloadHighlights = 'reload_highlights'),
      (e.PostFlairUpdated = 'post_flair_updated'),
      (e.TranslationToggled = 'translation_toggled'),
      (e.TriggerRecapXpromoBlockingExperience =
        'trigger_recap_xpromo_blocking_experience'),
      (e.TriggerFeedErrorBanner = 'trigger_feed_error_banner'),
      (e.TriggerCommunityAppearanceMenu = 'trigger_community_appearance_menu'),
      (e.TriggerAmaRemindMeModal = 'trigger_ama_remind_me_modal'),
      (e.UserModActionsBan = 'user_mod_actions_ban'),
      (e.UserModActionsBanCancel = 'user_mod_actions_ban_cancel'),
      (e.UserModActionsUnban = 'user_mod_actions_unban'),
      (e.UserModActionsMute = 'user_mod_actions_mute'),
      (e.UserModActionsMuteCancel = 'user_mod_actions_mute_cancel'),
      (e.UserModActionsUnmute = 'user_mod_actions_unmute'),
      (e.UserModActionsBanFailure = 'user_mod_actions_ban_failure'),
      (e.UserModActionsMuteFailure = 'user_mod_actions_mute_failure'),
      (e.InboxCountChanged = 'inbox_count_changed'),
      (e.InboxReadAllEvent = 'notification_inbox_notification_read_all_event'),
      (e.NotificationInboxNotificationHideEvent =
        'notification_inbox_notification_hide_event'),
      (e.ModNotesLogFilter = 'mod_notes_log_filter'),
      (e.ModNotesRailOpen = 'mod_notes_rail_open'),
      (e.ModNotesRailClose = 'mod_notes_rail_close'),
      (e.ModNotesRailForceClose = 'mod_notes_rail_force_close'),
      (e.ModNotesDeleted = 'mod_notes_deleted'),
      (e.ModNotesCreated = 'mod_notes_created'),
      (e.ModNotesOpenLog = 'mod_notes_open_log'),
      (e.ModNotesOpenLogFocus = 'mod_notes_open_log_focus'),
      (e.ModReportsToggle = 'mod_reports_toggle'),
      (e.ModQueuePdpPanelOpened = 'mod_queue_pdp_panel_opened'),
      (e.ModQueuePdpPanelClosed = 'mod_queue_pdp_panel_closed'),
      (e.ModQueueThingSelected = 'mod_queue_thing_selected'),
      (e.ModQueueBulkSelection = 'mod_queue_bulk_selection'),
      (e.ModNotesOpenUserFlairEdditor = 'mod_notes_open_user_flair_editor'),
      (e.TriggerLightboxOpen = 'trigger_lightbox_open'),
      (e.LightboxOpen = 'lightbox_open'),
      (e.LightboxClose = 'lightbox_close'),
      (e.LightboxOpened = 'lightbox_opened'),
      (e.LightboxClosed = 'lightbox_closed'),
      (e.AvatarStateUpdated = 'avatar_state_updated'),
      (e.RedoAvatarAction = 'redo_avatar_action'),
      (e.RequestAvatarState = 'request_avatar_state'),
      (e.UndoAvatarAction = 'undo_avatar_action'),
      (e.UpdateAvatarState = 'update_avatar_state'),
      (e.ModRealtimeUpdate = 'mod_realtime_update'),
      (e.PromotePostSuccess = 'promote_post_success'),
      (e.ModQueuePdpLinkClick = 'mod_queue_pdp_link_click'),
      (e.AMAStarted = 'ama_started'),
      (e.AMAEnded = 'ama_ended'),
      (e.AMATryStartEarly = 'ama_try_start_early'),
      (e.AMATryEnd = 'ama_try_end'),
      (e.AwardOnContentUpdated = 'award_on_content_updated'),
      (e.ModQueueTutorialOpen = 'mod_queue_tutorial_open'),
      (e.AMAOpenExamplesModal = 'ama_open_examples_modal'),
      (e.AMAOpenSelfieTooltip = 'ama_open_selfie_tooltip'),
      (e.ModRulesOpenRuleDetails = 'mod_rules_open_rule_details'),
      (e.ModRulesCloseRuleDetails = 'mod_rules_close_rule_details'),
      (e.ModRulesRuleDeleted = 'mod_rules_rule_deleted'),
      (e.ModRulesRuleDetailsClosed = 'mod_rules_rule_details_closed'),
      (e.ModRulesSaveRuleDetails = 'mod_rules_save_rule_details'),
      (e.ModRulesCreateRule = 'mod_rules_create_rule'),
      (e.ModRulesShowRuleReasonModal = 'mod_rules_show_rule_reason_modal'),
      (e.ModRulesShowRuleDeleteModal = 'mod_rules_show_rule_delete_modal');
  })(lt || (lt = {})),
  window._pubsubControllerInstances ??
    (window._pubsubControllerInstances = new Set());
const ct = new Map();
class pt {
  constructor(e) {
    (this.handlers = {}), (this.host = e), this.host.addController(this);
  }
  hostConnected() {
    window._pubsubControllerInstances.add(this);
  }
  hostDisconnected() {
    window._pubsubControllerInstances.delete(this);
  }
  subscribe(e, t, n = !0, r = !1) {
    this.handlers[e] || (this.handlers[e] = new Set()),
      this.handlers[e].add(t),
      n && ct.has(e) && (t(ct.get(e)), r && ct.delete(e));
  }
  unsubscribe(e, t) {
    this.handlers[e] && this.handlers[e].delete(t);
  }
  publish(e, t) {
    return mt(e, t);
  }
}
function mt(e, t) {
  ct.set(e, t);
  for (const n of window._pubsubControllerInstances)
    if (n.handlers[e]?.size) for (const r of n.handlers[e]) r(t);
}
const ut = Symbol('mixins/with-pubsub-manager');
const ht = Symbol('mixins/with-pubsub');
function gt(e) {
  if (ht in e) return e;
  class t extends e {
    constructor() {
      super(...arguments), (this.pubsub = new pt(this));
    }
    subscribe(e, t, n = !0, r = !1) {
      this.pubsub.subscribe(e, t, n, r);
    }
    unsubscribe(e, t) {
      this.pubsub.unsubscribe(e, t);
    }
    publish(e, t) {
      mt(e, t);
    }
  }
  return (t[ht] = !0), t;
}
function bt(e) {
  return e?.toLowerCase() || '';
}
function xt(e) {
  return (e = bt(e)).includes('chrome') || e.includes('crios');
}
function vt(e) {
  return (e = bt(e)).includes('firefox') || e.includes('fxios');
}
function wt(e, t) {
  return (
    (function (e, t) {
      return /(iPad)/i.test(bt(e)) || (/(Mac)/i.test(bt(e)) && t && t > 1);
    })(e, t) || /(iPhone|iPod)/i.test(bt(e))
  );
}
function ft(e) {
  return (
    !xt(e) &&
    !(function (e) {
      return bt(e).includes('edg');
    })(e) &&
    !vt(e) &&
    (bt(e).includes('safari') || wt(e))
  );
}
function yt(e, t) {
  return wt(e, t) || ft(e);
}
const _t = Symbol('mixins/with-tracking');
function Et(e) {
  if (_t in e) return e;
  class t extends e {
    constructor() {
      super(...arguments),
        (this.trackEvent = (e) => {
          const t = k('track-event', { details: e });
          this.dispatchEvent(t);
        });
    }
  }
  return (t[_t] = !0), t;
}
var St;
!(function (e) {
  (e.CardView = 'cardView'),
    (e.ModQueueCompactView = 'modQueueCompactView'),
    (e.CompactView = 'compactView');
})(St || (St = {}));
const kt = (e = '', t = '') => {
    const n = ((e) => {
      if (!e) return;
      let t;
      try {
        const { searchParams: n } = new URL(e),
          r = n.get('embed_host_url'),
          o = r && decodeURIComponent(r);
        if (!o) return;
        t = { url: o, domain: new URL(o).hostname };
      } catch (e) {}
      return t;
    })(t);
    if (n) return n;
    let r = '';
    try {
      r = (e && new URL(e)?.hostname) || '';
    } catch (e) {}
    return { url: e, domain: r };
  },
  Tt = (e) => {
    let t = {};
    try {
      t = JSON.parse(
        document
          .getElementsByTagName('shreddit-screenview-data')?.[0]
          ?.getAttribute('data') ?? '{}'
      );
    } catch (e) {
      throw new Error('Unable to parse screenview data');
    }
    return e ? t[e] : t;
  },
  It = (e, t, n = Tt) => {
    if (t?.[e]) return {};
    const r = n(e);
    return r ? { [e]: r } : {};
  };
function Ct(e) {
  if (e)
    switch (e) {
      case St.CompactView:
        return 'classic';
      case St.CardView:
        return 'card';
      default:
        return;
    }
}
const At = ({ source: e, action: t, noun: n, ...r }, o = {}) => ({
  ...o,
  source: e,
  action: t,
  noun: n,
  referrer: kt(
    document
      .getElementsByTagName('shreddit-app')?.[0]
      ?.getAttribute('referrer') || document.referrer,
    window.location.href
  ),
  client_timestamp: Date.now(),
  ...It('post', o),
  ...r
});
let Pt = window.location;
const Rt = (e) => new Date(e).getTime() || void 0,
  Ot = () =>
    (window.navigator && window.navigator.userAgent.toLowerCase()) || '';
function Nt(e) {
  return (
    e instanceof PointerEvent ||
    e instanceof MouseEvent ||
    'Enter' === e.key ||
    'Space' === e.key
  );
}
const Dt = Symbol('mixins/observer');
function Lt(e) {
  if (Dt in e) return e;
  class t extends e {
    constructor() {
      super(...arguments),
        (this._observer = null),
        (this._handleEnter = (e) => {
          this.observerIsIntersectingCallback(e.detail);
        }),
        (this._handleLeave = (e) => {
          this.observerIsNotIntersectingCallback(e.detail);
        });
    }
    get isObserved() {
      return !!this._observer;
    }
    enableObserver(e) {
      this._observer ||
        ((this._observer = new F(e)),
        this._observer.observe(this),
        this.addEventListener('faceplate-enter', this._handleEnter),
        this.addEventListener('faceplate-leave', this._handleLeave));
    }
    disableObserver() {
      this._observer &&
        (this._observer.unobserve(this),
        (this._observer = null),
        this.removeEventListener('faceplate-enter', this._handleEnter),
        this.removeEventListener('faceplate-leave', this._handleLeave));
    }
    observerIsIntersectingCallback(e) {}
    observerIsNotIntersectingCallback(e) {}
  }
  return (t[Dt] = !0), t;
}
var Mt;
!(function (e) {
  (e.Normal = 'normal'), (e.Slow = 'slow');
})(Mt || (Mt = {}));
const Ut = Mt.Slow;
let Ft = !1,
  Vt = Ut;
const Bt = () => Vt === Mt.Slow,
  Wt = l(
    class extends c {
      constructor(e) {
        if ((super(e), e.type !== p.CHILD))
          throw Error('templateContent can only be used in child bindings');
      }
      render(e) {
        return this.vt === e
          ? m
          : ((this.vt = e), document.importNode(e.content, !0));
      }
    }
  ),
  Ht = Symbol('mixins/user-action');
let Gt = class extends (function (e) {
  if (Ht in e) return e;
  class t extends e {
    constructor() {
      super(...arguments),
        (this._userActionEnabled = !1),
        (this._loadingHandleClick = () => {
          this._userActionEnabled && this.userActionCallback();
        }),
        (this._loadingHandleKeyDown = (e) => {
          this._userActionEnabled &&
            (('Enter' !== e.code && 'Space' !== e.code) ||
              (e.preventDefault(),
              e.stopPropagation(),
              this.userActionCallback()));
        });
    }
    get isActionable() {
      return this._userActionEnabled;
    }
    enableUserActions() {
      this._userActionEnabled ||
        ((this._userActionEnabled = !0),
        this.addEventListener('click', this._loadingHandleClick),
        this.addEventListener('keydown', this._loadingHandleKeyDown));
    }
    disableUserActions() {
      this._userActionEnabled &&
        ((this._userActionEnabled = !1),
        this.removeEventListener('click', this._loadingHandleClick),
        this.removeEventListener('keydown', this._loadingHandleKeyDown));
    }
    userActionCallback() {}
  }
  return (t[Ht] = !0), t;
})(Lt(t)) {
  constructor() {
    super(...arguments),
      (this.src = ''),
      (this.srcset = ''),
      (this.sizes = ''),
      (this.loading = X.Lazy),
      (this.width = 0),
      (this.height = 0),
      (this.perfmark = ''),
      (this.isRequestInProgress = !1);
  }
  static get styles() {
    return i`:host{display:inline-block}:host([loading=action]) div.placeholder{cursor:pointer}div{display:flex;align-items:center;justify-content:center;text-align:center;height:inherit;width:inherit;margin:auto;position:relative;overflow:hidden;border-radius:inherit}img{width:100%;height:100%}*{max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;object-fit:inherit}`;
  }
  connectedCallback() {
    super.connectedCallback(), this.img || this.executeLoadingStrategy();
  }
  update(e) {
    e.has('src') &&
      ((this.img = void 0),
      (this.isRequestInProgress = !1),
      this.executeLoadingStrategy()),
      super.update(e);
  }
  executeLoadingStrategy() {
    this.loading === X.Lazy
      ? this.enableObserver()
      : this.loading === X.Action
        ? this.enableUserActions()
        : this.loading === X.Eager && this.loadContent();
  }
  observerIsIntersectingCallback() {
    this.isObserved && this.disableObserver(),
      this.isRequestInProgress || this.loadContent();
  }
  userActionCallback() {
    this.isActionable && this.disableUserActions(),
      this.isRequestInProgress || this.loadContent();
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.isObserved && this.disableObserver(),
      this.isActionable && this.disableUserActions();
  }
  async loadContent() {
    const { src: e } = this,
      t = new Image();
    (t.onload = () => {
      if (t.src !== new URL(this.src, location.origin).href) return;
      (this.isRequestInProgress = !1),
        (this.img = t),
        this.requestUpdate(),
        this.perfmark &&
          this.updateComplete.then(() => {
            performance.mark(this.perfmark);
          });
      const e = k('faceplate-load', { resource: t.src, src: this.src });
      this.dispatchEvent(e);
    }),
      (t.onerror = () => {
        const e = k('faceplate-error', new Error('Image failed to load'));
        this.dispatchEvent(e);
      }),
      (this.isRequestInProgress = !0),
      (t.src = e);
  }
  render() {
    const e = this.isRequestInProgress && this.loading === X.Action;
    let t = s` <slot name="${d(e ? 'loading' : void 0)}"></slot> `;
    return (
      this.img &&
        (t = s` <img src="${this.img.src}" srcset="${d(this.srcset)}" sizes="${d(this.sizes)}" alt="${d(this.alt)}"> `),
      s` <div class="${this.img ? 'loaded' : 'placeholder'}" style="${b({ width: this.width ? this.width + 'px' : 'inherit', height: this.height ? this.height + 'px' : 'inherit' })}" tabindex="${d(this.isActionable ? 0 : void 0)}"> ${t} </div> `
    );
  }
};
e([n({ type: String })], Gt.prototype, 'src', void 0),
  e([n({ type: String })], Gt.prototype, 'srcset', void 0),
  e([n({ type: String })], Gt.prototype, 'sizes', void 0),
  e([n({ type: String })], Gt.prototype, 'loading', void 0),
  e([n({ type: Number })], Gt.prototype, 'width', void 0),
  e([n({ type: Number })], Gt.prototype, 'height', void 0),
  e([n({ type: String })], Gt.prototype, 'perfmark', void 0),
  e([n({ type: String })], Gt.prototype, 'alt', void 0),
  (Gt = e([g('faceplate-img')], Gt));
let Yt = class extends Gt {
  constructor() {
    super(...arguments), (this.shouldRenderImageLink = !1);
  }
  render() {
    const { img: e } = this,
      t = {
        width: this.width ? this.width + 'px' : 'inherit',
        height: this.height ? this.height + 'px' : 'inherit'
      };
    return s`\n <div \n class="${e ? 'loaded' : 'placeholder'}" \n style="${b(t)}" \n tabindex="${d(this.isActionable ? 0 : void 0)}" \n>\n ${this.content}\n </div>\n `;
  }
  static get styles() {
    return [
      super.styles,
      i`.shreddit-img__image{height:100%;max-height:inherit}`
    ];
  }
  get content() {
    const { img: e } = this;
    return e ? this.image : this.placeholder;
  }
  get imageStyle() {
    const e = {};
    return (
      this.objectfit && (e.objectFit = encodeURIComponent(this.objectfit)), e
    );
  }
  get image() {
    let e = s`\n <img \n class="shreddit-img__image" \n alt="${d(this.alt)}" \n src="${this.src}" \n style="${b(this.imageStyle)}" \n>\n `;
    return (
      this.shouldRenderImageLink &&
        (e = s`\n <a \n href="${this.linkHref || this.src}" \n title="${d(this.linkTitle)}" \n rel="${d(this.linkRel)}" \n target="_blank" \n>\n ${e}\n </a>\n `),
      e
    );
  }
  get placeholder() {
    const { isRequestInProgress: e } = this;
    return e && this.loading === X.Action ? this.loadingSlot : this.defaultSlot;
  }
  get loadingSlot() {
    return s`<slot name="loading"></slot>`;
  }
  get defaultSlot() {
    return s`<slot></slot>`;
  }
};
var zt;
e([n({ type: String })], Yt.prototype, 'alt', void 0),
  e(
    [n({ type: Boolean, attribute: 'should-render-image-link' })],
    Yt.prototype,
    'shouldRenderImageLink',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'link-title' })],
    Yt.prototype,
    'linkTitle',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'link-href' })],
    Yt.prototype,
    'linkHref',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'link-rel' })],
    Yt.prototype,
    'linkRel',
    void 0
  ),
  (Yt = e([g('shreddit-img')], Yt));
var jt = new Uint8Array(16);
function qt() {
  if (
    !zt &&
    !(zt =
      ('undefined' != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ('undefined' != typeof msCrypto &&
        'function' == typeof msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto)))
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    );
  return zt(jt);
}
var $t =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Xt(e) {
  return 'string' == typeof e && $t.test(e);
}
for (var Kt = [], Qt = 0; Qt < 256; ++Qt)
  Kt.push((Qt + 256).toString(16).substr(1));
function Jt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (
      Kt[e[t + 0]] +
      Kt[e[t + 1]] +
      Kt[e[t + 2]] +
      Kt[e[t + 3]] +
      '-' +
      Kt[e[t + 4]] +
      Kt[e[t + 5]] +
      '-' +
      Kt[e[t + 6]] +
      Kt[e[t + 7]] +
      '-' +
      Kt[e[t + 8]] +
      Kt[e[t + 9]] +
      '-' +
      Kt[e[t + 10]] +
      Kt[e[t + 11]] +
      Kt[e[t + 12]] +
      Kt[e[t + 13]] +
      Kt[e[t + 14]] +
      Kt[e[t + 15]]
    ).toLowerCase();
  if (!Xt(n)) throw TypeError('Stringified UUID is invalid');
  return n;
}
var Zt;
function en(e, t, n) {
  function r(e, r, o, a) {
    if (
      ('string' == typeof e &&
        (e = (function (e) {
          e = unescape(encodeURIComponent(e));
          for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
          return t;
        })(e)),
      'string' == typeof r &&
        (r = (function (e) {
          if (!Xt(e)) throw TypeError('Invalid UUID');
          var t,
            n = new Uint8Array(16);
          return (
            (n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24),
            (n[1] = (t >>> 16) & 255),
            (n[2] = (t >>> 8) & 255),
            (n[3] = 255 & t),
            (n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8),
            (n[5] = 255 & t),
            (n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8),
            (n[7] = 255 & t),
            (n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8),
            (n[9] = 255 & t),
            (n[10] =
              ((t = parseInt(e.slice(24, 36), 16)) / 1099511627776) & 255),
            (n[11] = (t / 4294967296) & 255),
            (n[12] = (t >>> 24) & 255),
            (n[13] = (t >>> 16) & 255),
            (n[14] = (t >>> 8) & 255),
            (n[15] = 255 & t),
            n
          );
        })(r)),
      16 !== r.length)
    )
      throw TypeError(
        'Namespace must be array-like (16 iterable integer values, 0-255)'
      );
    var i = new Uint8Array(16 + e.length);
    if (
      (i.set(r),
      i.set(e, r.length),
      ((i = n(i))[6] = (15 & i[6]) | t),
      (i[8] = (63 & i[8]) | 128),
      o)
    ) {
      a = a || 0;
      for (var s = 0; s < 16; ++s) o[a + s] = i[s];
      return o;
    }
    return Jt(i);
  }
  try {
    r.name = e;
  } catch (e) {}
  return (
    (r.DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'),
    (r.URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8'),
    r
  );
}
function tn(e) {
  return 14 + (((e + 64) >>> 9) << 4) + 1;
}
function nn(e, t) {
  var n = (65535 & e) + (65535 & t);
  return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
}
function rn(e, t, n, r, o, a) {
  return nn(((i = nn(nn(t, e), nn(r, a))) << (s = o)) | (i >>> (32 - s)), n);
  var i, s;
}
function on(e, t, n, r, o, a, i) {
  return rn((t & n) | (~t & r), e, t, o, a, i);
}
function an(e, t, n, r, o, a, i) {
  return rn((t & r) | (n & ~r), e, t, o, a, i);
}
function sn(e, t, n, r, o, a, i) {
  return rn(t ^ n ^ r, e, t, o, a, i);
}
function dn(e, t, n, r, o, a, i) {
  return rn(n ^ (t | ~r), e, t, o, a, i);
}
function ln(e, t, n) {
  var r = (e = e || {}).random || (e.rng || qt)();
  if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
    n = n || 0;
    for (var o = 0; o < 16; ++o) t[n + o] = r[o];
    return t;
  }
  return Jt(r);
}
function cn(e, t, n, r) {
  switch (e) {
    case 0:
      return (t & n) ^ (~t & r);
    case 1:
      return t ^ n ^ r;
    case 2:
      return (t & n) ^ (t & r) ^ (n & r);
    case 3:
      return t ^ n ^ r;
  }
}
function pn(e, t) {
  return (e << t) | (e >>> (32 - t));
}
en('v3', 48, function (e) {
  if ('string' == typeof e) {
    var t = unescape(encodeURIComponent(e));
    e = new Uint8Array(t.length);
    for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n);
  }
  return (function (e) {
    for (
      var t = [], n = 32 * e.length, r = '0123456789abcdef', o = 0;
      o < n;
      o += 8
    ) {
      var a = (e[o >> 5] >>> o % 32) & 255,
        i = parseInt(r.charAt((a >>> 4) & 15) + r.charAt(15 & a), 16);
      t.push(i);
    }
    return t;
  })(
    (function (e, t) {
      (e[t >> 5] |= 128 << t % 32), (e[tn(t) - 1] = t);
      for (
        var n = 1732584193,
          r = -271733879,
          o = -1732584194,
          a = 271733878,
          i = 0;
        i < e.length;
        i += 16
      ) {
        var s = n,
          d = r,
          l = o,
          c = a;
        (n = on(n, r, o, a, e[i], 7, -680876936)),
          (a = on(a, n, r, o, e[i + 1], 12, -389564586)),
          (o = on(o, a, n, r, e[i + 2], 17, 606105819)),
          (r = on(r, o, a, n, e[i + 3], 22, -1044525330)),
          (n = on(n, r, o, a, e[i + 4], 7, -176418897)),
          (a = on(a, n, r, o, e[i + 5], 12, 1200080426)),
          (o = on(o, a, n, r, e[i + 6], 17, -1473231341)),
          (r = on(r, o, a, n, e[i + 7], 22, -45705983)),
          (n = on(n, r, o, a, e[i + 8], 7, 1770035416)),
          (a = on(a, n, r, o, e[i + 9], 12, -1958414417)),
          (o = on(o, a, n, r, e[i + 10], 17, -42063)),
          (r = on(r, o, a, n, e[i + 11], 22, -1990404162)),
          (n = on(n, r, o, a, e[i + 12], 7, 1804603682)),
          (a = on(a, n, r, o, e[i + 13], 12, -40341101)),
          (o = on(o, a, n, r, e[i + 14], 17, -1502002290)),
          (n = an(
            n,
            (r = on(r, o, a, n, e[i + 15], 22, 1236535329)),
            o,
            a,
            e[i + 1],
            5,
            -165796510
          )),
          (a = an(a, n, r, o, e[i + 6], 9, -1069501632)),
          (o = an(o, a, n, r, e[i + 11], 14, 643717713)),
          (r = an(r, o, a, n, e[i], 20, -373897302)),
          (n = an(n, r, o, a, e[i + 5], 5, -701558691)),
          (a = an(a, n, r, o, e[i + 10], 9, 38016083)),
          (o = an(o, a, n, r, e[i + 15], 14, -660478335)),
          (r = an(r, o, a, n, e[i + 4], 20, -405537848)),
          (n = an(n, r, o, a, e[i + 9], 5, 568446438)),
          (a = an(a, n, r, o, e[i + 14], 9, -1019803690)),
          (o = an(o, a, n, r, e[i + 3], 14, -187363961)),
          (r = an(r, o, a, n, e[i + 8], 20, 1163531501)),
          (n = an(n, r, o, a, e[i + 13], 5, -1444681467)),
          (a = an(a, n, r, o, e[i + 2], 9, -51403784)),
          (o = an(o, a, n, r, e[i + 7], 14, 1735328473)),
          (n = sn(
            n,
            (r = an(r, o, a, n, e[i + 12], 20, -1926607734)),
            o,
            a,
            e[i + 5],
            4,
            -378558
          )),
          (a = sn(a, n, r, o, e[i + 8], 11, -2022574463)),
          (o = sn(o, a, n, r, e[i + 11], 16, 1839030562)),
          (r = sn(r, o, a, n, e[i + 14], 23, -35309556)),
          (n = sn(n, r, o, a, e[i + 1], 4, -1530992060)),
          (a = sn(a, n, r, o, e[i + 4], 11, 1272893353)),
          (o = sn(o, a, n, r, e[i + 7], 16, -155497632)),
          (r = sn(r, o, a, n, e[i + 10], 23, -1094730640)),
          (n = sn(n, r, o, a, e[i + 13], 4, 681279174)),
          (a = sn(a, n, r, o, e[i], 11, -358537222)),
          (o = sn(o, a, n, r, e[i + 3], 16, -722521979)),
          (r = sn(r, o, a, n, e[i + 6], 23, 76029189)),
          (n = sn(n, r, o, a, e[i + 9], 4, -640364487)),
          (a = sn(a, n, r, o, e[i + 12], 11, -421815835)),
          (o = sn(o, a, n, r, e[i + 15], 16, 530742520)),
          (n = dn(
            n,
            (r = sn(r, o, a, n, e[i + 2], 23, -995338651)),
            o,
            a,
            e[i],
            6,
            -198630844
          )),
          (a = dn(a, n, r, o, e[i + 7], 10, 1126891415)),
          (o = dn(o, a, n, r, e[i + 14], 15, -1416354905)),
          (r = dn(r, o, a, n, e[i + 5], 21, -57434055)),
          (n = dn(n, r, o, a, e[i + 12], 6, 1700485571)),
          (a = dn(a, n, r, o, e[i + 3], 10, -1894986606)),
          (o = dn(o, a, n, r, e[i + 10], 15, -1051523)),
          (r = dn(r, o, a, n, e[i + 1], 21, -2054922799)),
          (n = dn(n, r, o, a, e[i + 8], 6, 1873313359)),
          (a = dn(a, n, r, o, e[i + 15], 10, -30611744)),
          (o = dn(o, a, n, r, e[i + 6], 15, -1560198380)),
          (r = dn(r, o, a, n, e[i + 13], 21, 1309151649)),
          (n = dn(n, r, o, a, e[i + 4], 6, -145523070)),
          (a = dn(a, n, r, o, e[i + 11], 10, -1120210379)),
          (o = dn(o, a, n, r, e[i + 2], 15, 718787259)),
          (r = dn(r, o, a, n, e[i + 9], 21, -343485551)),
          (n = nn(n, s)),
          (r = nn(r, d)),
          (o = nn(o, l)),
          (a = nn(a, c));
      }
      return [n, r, o, a];
    })(
      (function (e) {
        if (0 === e.length) return [];
        for (
          var t = 8 * e.length, n = new Uint32Array(tn(t)), r = 0;
          r < t;
          r += 8
        )
          n[r >> 5] |= (255 & e[r / 8]) << r % 32;
        return n;
      })(e),
      8 * e.length
    )
  );
}),
  en('v5', 80, function (e) {
    var t = [1518500249, 1859775393, 2400959708, 3395469782],
      n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if ('string' == typeof e) {
      var r = unescape(encodeURIComponent(e));
      e = [];
      for (var o = 0; o < r.length; ++o) e.push(r.charCodeAt(o));
    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128);
    for (
      var a = e.length / 4 + 2, i = Math.ceil(a / 16), s = new Array(i), d = 0;
      d < i;
      ++d
    ) {
      for (var l = new Uint32Array(16), c = 0; c < 16; ++c)
        l[c] =
          (e[64 * d + 4 * c] << 24) |
          (e[64 * d + 4 * c + 1] << 16) |
          (e[64 * d + 4 * c + 2] << 8) |
          e[64 * d + 4 * c + 3];
      s[d] = l;
    }
    (s[i - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
      (s[i - 1][14] = Math.floor(s[i - 1][14])),
      (s[i - 1][15] = (8 * (e.length - 1)) & 4294967295);
    for (var p = 0; p < i; ++p) {
      for (var m = new Uint32Array(80), u = 0; u < 16; ++u) m[u] = s[p][u];
      for (var h = 16; h < 80; ++h)
        m[h] = pn(m[h - 3] ^ m[h - 8] ^ m[h - 14] ^ m[h - 16], 1);
      for (
        var g = n[0], b = n[1], x = n[2], v = n[3], w = n[4], f = 0;
        f < 80;
        ++f
      ) {
        var y = Math.floor(f / 20),
          _ = (pn(g, 5) + cn(y, b, x, v) + w + t[y] + m[f]) >>> 0;
        (w = v), (v = x), (x = pn(b, 30) >>> 0), (b = g), (g = _);
      }
      (n[0] = (n[0] + g) >>> 0),
        (n[1] = (n[1] + b) >>> 0),
        (n[2] = (n[2] + x) >>> 0),
        (n[3] = (n[3] + v) >>> 0),
        (n[4] = (n[4] + w) >>> 0);
    }
    return [
      (n[0] >> 24) & 255,
      (n[0] >> 16) & 255,
      (n[0] >> 8) & 255,
      255 & n[0],
      (n[1] >> 24) & 255,
      (n[1] >> 16) & 255,
      (n[1] >> 8) & 255,
      255 & n[1],
      (n[2] >> 24) & 255,
      (n[2] >> 16) & 255,
      (n[2] >> 8) & 255,
      255 & n[2],
      (n[3] >> 24) & 255,
      (n[3] >> 16) & 255,
      (n[3] >> 8) & 255,
      255 & n[3],
      (n[4] >> 24) & 255,
      (n[4] >> 16) & 255,
      (n[4] >> 8) & 255,
      255 & n[4]
    ];
  }),
  (function (e) {
    (e.All = 'all'),
      (e.AllChats = 'all_chats'),
      (e.AchievementsMain = 'achievements_main'),
      (e.AchievementDetail = 'achievement_detail'),
      (e.AchievementsCategory = 'achievement_category'),
      (e.AchievementsCategoryPreview = 'achievements_category_preview'),
      (e.AchievementPreview = 'achievement_preview'),
      (e.Community = 'community'),
      (e.CommunityWiki = 'community_wiki'),
      (e.CustomFeed = 'custom_feed'),
      (e.Home = 'home'),
      (e.Inbox = 'inbox'),
      (e.InventoryDetail = 'inventory_detail'),
      (e.Multireddit = 'multireddit'),
      (e.Popular = 'popular'),
      (e.PostCreation = 'post_submit'),
      (e.PostDetail = 'post_detail'),
      (e.ProfileAccountStats = 'profile_account_stats'),
      (e.ProfileComments = 'profile_comments'),
      (e.ProfileCommunityFinder = 'profile_community_finder'),
      (e.ProfileDashboard = 'profile_dashboard'),
      (e.ProfileDashboardPerformanceOverview =
        'profile_dashboard_performance_overview'),
      (e.ProfileDashboardTrendingConvos = 'profile_dashboard_trending_convos'),
      (e.ProfileDownvoted = 'profile_downvoted'),
      (e.ProfileHidden = 'profile_hidden'),
      (e.ProfileOverview = 'profile_overview'),
      (e.ProfilePerformance = 'profile_performance'),
      (e.ProfilePosts = 'profile_posts'),
      (e.ProfileSaved = 'profile_saved'),
      (e.ProfileSubmitted = 'profile_submitted'),
      (e.ProfileTrendingConvos = 'profile_trending_convos'),
      (e.ProfileTrendingConvoDetails = 'profile_trending_convo_details'),
      (e.ProfileTrends = 'profile_trends'),
      (e.ProfileUpvoted = 'profile_upvoted'),
      (e.EmailVerificationError = 'email_verification_error'),
      (e.BrandMention = 'brand_mention'),
      (e.SeoCommunityDirectory = 'seo_community_directory'),
      (e.SingleCommentThread = 'single_comment_thread'),
      (e.Unknown = 'unknown'),
      (e.UserPosts = 'user_posts'),
      (e.AdsRblSurvey = 'ads_rbl_survey_iframe'),
      (e.Policies = 'policies'),
      (e.MiniInbox = 'mini_inbox'),
      (e.ModAchievements = 'achievement_mod_tools'),
      (e.ModInsightsGrowth = 'mod_insights_growth'),
      (e.ModInsightsReportsAndRemovals = 'reports_and_removals_page'),
      (e.ModInsightsTeamHealth = 'mod_insights_team_health'),
      (e.ModAutomations = 'moderation_pages_postguidance'),
      (e.ModLog = 'moderation_pages_log'),
      (e.ModQueue = 'moderation_pages_modqueue'),
      (e.ModQueueAll = 'moderation_pages_modqueue_all'),
      (e.RedditProOnboardingPage = 'reddit_pro_onboarding'),
      (e.SearchDropdown = 'search_dropdown'),
      (e.SearchResults = 'search_results'),
      (e.SearchResultsTrending = 'search_results_trending'),
      (e.SocialPreviewPage = 'social_preview'),
      (e.TopicPage = 'topic'),
      (e.ExplorePage = 'explore'),
      (e.Embed = 'embed'),
      (e.Vault = 'vault'),
      (e.CDNMediaPage = 'cdn_media_page'),
      (e.MFeed = 'mfeed'),
      (e.SafetySubredditSettings = 'safety_subreddit_settings'),
      (e.Avatar = 'avatar'),
      (e.AvatarTabs = 'avatar_tabs'),
      (e.DisplayCollectibles = 'display_collectibles'),
      (e.UserRecap = 'user_recap'),
      (e.SubredditRecap = 'subreddit_recap'),
      (e.PremiumMarketing = 'premium_marketing'),
      (e.ProductDetailPage = 'product_detail_page'),
      (e.GoldPage = 'gold_page'),
      (e.EarnedGoldPage = 'earned_gold_page'),
      (e.Login = 'login'),
      (e.Register = 'register'),
      (e.Password = 'password'),
      (e.PasswordRecovery = 'passwordrecovery'),
      (e.Username = 'username'),
      (e.Klp = 'klp'),
      (e.FlairsModal = 'flairs_modal'),
      (e.FlairsList = 'flairs_list'),
      (e.SettingsAccount = 'settings_account'),
      (e.SettingsPrivacy = 'settings_privacy'),
      (e.SettingsPreferences = 'settings_preferences'),
      (e.SettingsProfile = 'settings_profile'),
      (e.SettingsEmails = 'settings_emails'),
      (e.Guides = 'guides'),
      (e.SettingsNotifications = 'settings_notifications'),
      (e.UserFlairSettings = 'moderation_pages_userflair');
  })(Zt || (Zt = {}));
const mn = [
    'source',
    'action',
    'noun',
    'action_info',
    'page_type',
    'success',
    'client_timestamp',
    'referrer',
    'url',
    'domain',
    'server_render_id',
    'canonical_url',
    'screenview_id',
    'adblock',
    'enabled'
  ],
  un = (e = '') => {
    let t = '',
      n = '';
    const r = e.split('.');
    if (r.length >= 3) {
      (t = `t2_${r[0].replace(/\b0+/g, '')}`), (n = r[2]);
    }
    return { id: t, cookie_created_timestamp: parseInt(n, 10) };
  },
  hn = (e) => (
    e.post?.subreddit_name &&
      (e.post.subreddit_name = e.post.subreddit_name.toLowerCase()),
    e.subreddit?.name && (e.subreddit.name = e.subreddit.name.toLowerCase()),
    e
  );
function gn(e, t) {
  const n = xn(e);
  n ||
    (t.user_preferences?.language,
    t.platform?.language_list,
    t.platform?.primary_language,
    t.platform?.browser_name,
    t.platform?.browser_version),
    n || vn(e) || t.request?.edgebucket;
  const r = {
    ...e,
    app: { ...t.app },
    user_preferences: { ...e.user_preferences, ...t.user_preferences },
    user: { ...e.user, ...t.user },
    request: { ...e.request, ...t.request },
    platform: { ...e.platform, ...t.platform },
    session: { ...e.session, ...t.session },
    uuid: ln()
  };
  return (
    r.user_preferences &&
      !Object.keys(r.user_preferences).length &&
      (r.user_preferences = {}),
    r.platform && !Object.keys(r.platform).length && (r.platform = {}),
    n && e.pwa?.installed && (r.platform.browser_name = 'pwa'),
    r
  );
}
const bn = (e) => ({ correlation_id: e.getCorrelationId() }),
  xn = (e) =>
    'global' === e?.source && 'view' === e.action && 'screen' === e.noun,
  vn = (e) => 'experiment' === e?.source && 'expose' === e.action,
  wn = [Zt.Embed];
var fn =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
          ? self
          : {};
function yn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function _n(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if ('function' == typeof t) {
    var n = function e() {
      if (this instanceof e) {
        var n = [null];
        n.push.apply(n, arguments);
        var r = Function.bind.apply(t, n);
        return new r();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (t) {
      var r = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(
        n,
        t,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[t];
              }
            }
      );
    }),
    n
  );
}
var En,
  Sn = {};
(En = function () {
  function e() {
    for (var e = 0, t = {}; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) t[r] = n[r];
    }
    return t;
  }
  function t(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return (function n(r) {
    function o() {}
    function a(t, n, a) {
      if ('undefined' != typeof document) {
        'number' == typeof (a = e({ path: '/' }, o.defaults, a)).expires &&
          (a.expires = new Date(1 * new Date() + 864e5 * a.expires)),
          (a.expires = a.expires ? a.expires.toUTCString() : '');
        try {
          var i = JSON.stringify(n);
          /^[\{\[]/.test(i) && (n = i);
        } catch (e) {}
        (n = r.write
          ? r.write(n, t)
          : encodeURIComponent(String(n)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
          (t = encodeURIComponent(String(t))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var s = '';
        for (var d in a)
          a[d] &&
            ((s += '; ' + d), !0 !== a[d] && (s += '=' + a[d].split(';')[0]));
        return (document.cookie = t + '=' + n + s);
      }
    }
    function i(e, n) {
      if ('undefined' != typeof document) {
        for (
          var o = {},
            a = document.cookie ? document.cookie.split('; ') : [],
            i = 0;
          i < a.length;
          i++
        ) {
          var s = a[i].split('='),
            d = s.slice(1).join('=');
          n || '"' !== d.charAt(0) || (d = d.slice(1, -1));
          try {
            var l = t(s[0]);
            if (((d = (r.read || r)(d, l) || t(d)), n))
              try {
                d = JSON.parse(d);
              } catch (e) {}
            if (((o[l] = d), e === l)) break;
          } catch (e) {}
        }
        return e ? o[e] : o;
      }
    }
    return (
      (o.set = a),
      (o.get = function (e) {
        return i(e, !1);
      }),
      (o.getJSON = function (e) {
        return i(e, !0);
      }),
      (o.remove = function (t, n) {
        a(t, '', e(n, { expires: -1 }));
      }),
      (o.defaults = {}),
      (o.withConverter = n),
      o
    );
  })(function () {});
}),
  ({
    get exports() {
      return Sn;
    },
    set exports(e) {
      Sn = e;
    }
  }.exports = En());
var kn,
  Tn,
  In = Sn;
!(function (e) {
  e.XPromo = 'xpromo';
})(kn || (kn = {}));
const Cn = new Set();
let An = (Tn = class extends Lt(t) {
  constructor() {
    super(...arguments), (this.content = null), (this.slotState = 'pending');
  }
  connectedCallback() {
    switch (
      (super.connectedCallback(),
      (this.shouldRenderWithPaintGroup =
        this.paintGroup && (!this.loading || this.loading === X.Eager)),
      this.loading)
    ) {
      case X.Programmatic:
        break;
      case X.Lazy:
        this.enableObserver();
        break;
      case X.Eager:
      default:
        this.load();
    }
  }
  disconnectedCallback() {
    this.disableObserver(), super.disconnectedCallback();
  }
  renderAsSlot() {
    switch (this.slotState) {
      case 'pending':
        return s`<slot></slot>`;
      case 'ready':
        return s`<slot name="${Tn.READY_SLOT}"></slot>`;
      case 'error':
        return s`<slot name="${Tn.ERROR_SLOT}"></slot>`;
    }
  }
  render() {
    return this.shouldRenderAsSlot
      ? this.renderAsSlot()
      : null != this.content
        ? this.content
        : s`\n <slot></slot>\n <slot name="${Tn.READY_SLOT}"></slot>\n <slot name="${Tn.ERROR_SLOT}"></slot>\n `;
  }
  observerIsIntersectingCallback() {
    this.disableObserver(), this.load();
  }
  async load() {
    try {
      if (!this.bundleName) throw new Error('Unspecified bundle.');
      Cn.add(this);
      const e = Tn.Loaders;
      if (0 === e.size) return;
      const t = e.get(this.bundleName);
      if (!t) throw new Error(`Invalid bundle: ${this.bundleName}.`);
      if (this.shouldRenderWithPaintGroup && this.paintGroup) {
        Tn.paintGroupLoaders.get(this.paintGroup)?.push(t());
      } else await t();
      this.handleLoad();
    } catch (e) {
      this.handleLoadError(e);
    }
  }
  async waitForPaintGroup() {
    if (!this.paintGroup || !this.shouldRenderWithPaintGroup) return;
    const e = Tn.paintGroupLoaders.get(this.paintGroup);
    var t;
    e &&
      (await Promise.race([
        Promise.all(e),
        ((t = 2e3),
        new Promise((e) => {
          window.setTimeout(e, t);
        }))
      ]));
  }
  async handleLoad() {
    Cn.delete(this),
      this.shouldRenderWithPaintGroup && (await this.waitForPaintGroup()),
      this.shouldRenderAsSlot
        ? (this.slotState = 'ready')
        : this.renderTemplate(Tn.READY_SLOT);
  }
  handleLoadError(e) {
    console.error('Error loading async bundle', e?.stack),
      this.shouldRenderAsSlot
        ? (this.slotState = 'error')
        : this.renderTemplate(Tn.ERROR_SLOT),
      window.Sentry?.withScope((e) => {
        e?.setTag?.('bundleName', this.bundleName),
          window.Sentry?.captureMessage?.('Failed to load async bundle');
      });
  }
  renderTemplate(e) {
    const t = this.findTemplate(e);
    t && (this.content = Wt(t));
  }
  findTemplate(e) {
    const t = this.shadowRoot?.querySelector(`slot[name=${e}]`);
    if (!(t instanceof HTMLSlotElement)) return null;
    const n = t?.assignedElements()[0];
    return n instanceof HTMLTemplateElement ? n : null;
  }
});
(An.styles = [De]),
  (An.Loaders = new Map()),
  (An.addLoaders = (e) => {
    for (const [t, n] of Object.entries(e)) Tn.Loaders.set(t, n);
    for (const e of Cn) e.load();
  }),
  (An.paintGroupLoaders = ((e = kn) =>
    new Map(Object.values(e).map((e) => [e, []])))()),
  (An.READY_SLOT = 'ready'),
  (An.ERROR_SLOT = 'error'),
  e([n({ type: String })], An.prototype, 'bundleName', void 0),
  e([n({ type: String })], An.prototype, 'loading', void 0),
  e(
    [n({ type: String, attribute: 'paint-group', converter: (e) => e })],
    An.prototype,
    'paintGroup',
    void 0
  ),
  e([n({ type: Boolean })], An.prototype, 'shouldRenderAsSlot', void 0),
  e([x()], An.prototype, 'content', void 0),
  e([x()], An.prototype, 'shouldRenderWithPaintGroup', void 0),
  e([x()], An.prototype, 'slotState', void 0),
  (An = Tn = e([g('shreddit-async-loader')], An));
const Pn = {
    fromAttribute: (e) => e.trim().split(/ +/),
    toAttribute: (e) => e.join(' ')
  },
  Rn = {
    fromAttribute: (e) => e.trim().split(','),
    toAttribute: (e) => e.join(',')
  },
  On = { rootMargin: '0px' };
let Nn = class extends t {
  constructor() {
    super(...arguments),
      (this.source = ''),
      (this.action = ''),
      (this.noun = ''),
      (this.loadingModifier = []),
      (this._fireMode = K.Always),
      (this._trackEvent = () => {
        this._ctrl &&
          this._fireMode === K.Once &&
          (this._ctrl = R(this, this._ctrl));
        const { source: e, action: t, noun: n } = this;
        e && t && n && Le(this, { source: e, action: t, noun: n });
      });
  }
  get loading() {
    return 'click' === this.action
      ? X.Action
      : 'view' === this.action
        ? X.Lazy
        : X.Programmatic;
  }
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback();
    const { loading: e } = this;
    e === X.Action
      ? (this._ctrl = O(this, this, this._trackEvent))
      : e === X.Lazy &&
        ((this._ctrl = H(this, this, this._trackEvent, On)),
        (this._fireMode = K.Once));
    for (const e of this.loadingModifier)
      switch (e) {
        case K.Once:
        case K.Always:
          this._fireMode = e;
      }
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this._ctrl && (this._ctrl = R(this, this._ctrl));
  }
  trackEvent() {
    if (this.loading !== X.Programmatic)
      throw new Error(
        `Calling trackEvent only supported with loading=${X.Programmatic}`
      );
    return this._trackEvent();
  }
};
e([n({ type: String })], Nn.prototype, 'source', void 0),
  e([n({ type: String })], Nn.prototype, 'action', void 0),
  e([n({ type: String })], Nn.prototype, 'noun', void 0),
  e(
    [n({ converter: Pn, attribute: 'loading-modifier' })],
    Nn.prototype,
    'loadingModifier',
    void 0
  ),
  (Nn = e([g('faceplate-tracker')], Nn));
class Dn extends Event {
  constructor(e, t, n) {
    super('context-request', { bubbles: !0, composed: !0 }),
      (this.context = e),
      (this.callback = t),
      (this.subscribe = n);
  }
}
function Ln(e) {
  return e;
}
class Mn {
  constructor(e, t, n, r) {
    var o;
    if (
      ((this.subscribe = !1),
      (this.provided = !1),
      (this.value = void 0),
      (this.t = (e, t) => {
        this.unsubscribe &&
          (this.unsubscribe !== t && ((this.provided = !1), this.unsubscribe()),
          this.subscribe || this.unsubscribe()),
          (this.value = e),
          this.host.requestUpdate(),
          (this.provided && !this.subscribe) ||
            ((this.provided = !0), this.callback && this.callback(e, t)),
          (this.unsubscribe = t);
      }),
      (this.host = e),
      void 0 !== t.context)
    ) {
      const e = t;
      (this.context = e.context),
        (this.callback = e.callback),
        (this.subscribe = null !== (o = e.subscribe) && void 0 !== o && o);
    } else
      (this.context = t),
        (this.callback = n),
        (this.subscribe = null != r && r);
    this.host.addController(this);
  }
  hostConnected() {
    this.dispatchRequest();
  }
  hostDisconnected() {
    this.unsubscribe && (this.unsubscribe(), (this.unsubscribe = void 0));
  }
  dispatchRequest() {
    this.host.dispatchEvent(new Dn(this.context, this.t, this.subscribe));
  }
}
class Un extends Event {
  constructor(e) {
    super('context-provider', { bubbles: !0, composed: !0 }),
      (this.context = e);
  }
}
class Fn extends class {
  constructor(e) {
    (this.disposers = new Map()),
      (this.updateObservers = () => {
        for (const [e, t] of this.disposers) e(this.o, t);
      }),
      void 0 !== e && (this.value = e);
  }
  get value() {
    return this.o;
  }
  set value(e) {
    this.setValue(e);
  }
  setValue(e, t = !1) {
    const n = t || !Object.is(e, this.o);
    (this.o = e), n && this.updateObservers();
  }
  addCallback(e, t) {
    if (t) {
      this.disposers.has(e) ||
        this.disposers.set(e, () => {
          this.disposers.delete(e);
        });
      const t = this.disposers.get(e);
      e(this.value, t);
    } else e(this.value);
  }
  clearCallbacks() {
    this.disposers.clear();
  }
} {
  constructor(e, t, n) {
    super(void 0 !== t.context ? t.initialValue : n),
      (this.onContextRequest = (e) => {
        e.context === this.context &&
          e.composedPath()[0] !== this.host &&
          (e.stopPropagation(), this.addCallback(e.callback, e.subscribe));
      }),
      (this.host = e),
      void 0 !== t.context ? (this.context = t.context) : (this.context = t),
      this.attachListeners(),
      this.host.addController(this);
  }
  attachListeners() {
    this.host.addEventListener('context-request', this.onContextRequest);
  }
  hostConnected() {
    this.host.dispatchEvent(new Un(this.context));
  }
}
function Vn({ context: e }) {
  return v({
    finisher: (t, n) => {
      const r = new WeakMap();
      t.addInitializer((t) => {
        r.set(t, new Fn(t, { context: e }));
      });
      const o = Object.getOwnPropertyDescriptor(t.prototype, n),
        a = null == o ? void 0 : o.set,
        i = {
          ...o,
          set: function (e) {
            var t;
            null === (t = r.get(this)) || void 0 === t || t.setValue(e),
              a && a.call(this, e);
          }
        };
      Object.defineProperty(t.prototype, n, i);
    }
  });
}
function Bn({ context: e, subscribe: t }) {
  return v({
    finisher: (n, r) => {
      n.addInitializer((n) => {
        new Mn(n, {
          context: e,
          callback: (e) => {
            n[r] = e;
          },
          subscribe: t
        });
      });
    }
  });
}
class Wn extends D {
  constructor(e, t) {
    super(e),
      (this._events = new I(this, () => this._host)),
      (this.trackEvent = t),
      this._events.define('faceplate-track', (e) => {
        const t = e.detail,
          n = e.SAN || Me(t),
          r = e.composedPath();
        for (const e of r)
          if (e instanceof HTMLElement) {
            const n = B(e, 'faceplateTrackingContext');
            n && Ue(t, n);
          }
        this.trackEvent(t, n);
      });
  }
}
function Hn(e, t, n) {
  return e.some((e) => {
    const [r, o] = e.split(':');
    return t === r && (!o || n === o);
  });
}
const Gn = Symbol('mixins/with-overlays');
let Yn = window.location;
const zn = A(),
  jn = P(),
  qn = jn.registerAncestorClass,
  $n = jn.connectToAncestor,
  Xn = {
    fromAttribute(e) {
      if (e in $) return $[e];
    },
    toAttribute(e) {
      if (e in $) return $[e];
    }
  };
function Kn(e, t, n, r) {
  return {
    level: e,
    message: t,
    meta: n[0] && 'string' == typeof n[0] ? n.join('\n') : void 0,
    count: r
  };
}
function Qn(e, t = Kn) {
  const n = [];
  if (!e.length) return n;
  e.sort(
    (e, t) =>
      (void 0 === e.level ? $.none : e.level) -
      (void 0 === t.level ? $.none : t.level)
  );
  let r = {},
    o = e[0].level,
    a = 0;
  function i() {
    for (const e in r) {
      const a = r[e];
      if (1 === a.length) n.push(a[0]);
      else {
        const r = [];
        let i = 0;
        for (const e of a)
          e.meta && r.push(e.meta), (i += void 0 === e.count ? 1 : e.count);
        n.push(t(o, e, r, i));
      }
    }
  }
  for (const t of e) {
    t.level !== o && (i(), (r = {}), (o = t.level), (a = 0));
    const e = t.message || '';
    Object.prototype.hasOwnProperty.call(r, e) ? r[e].push(t) : (r[e] = [t]),
      (a += t.count || 1);
  }
  return a > 0 && i(), n;
}
class Jn {
  constructor(e) {
    (this._handleAlertEvent = (e) => {
      const t = e.detail;
      this.report(t) && e.stopImmediatePropagation();
    }),
      e.addController(this),
      qn(e.constructor),
      (this.host = e);
  }
  hostConnected() {
    this.host.addEventListener('faceplate-alert', this._handleAlertEvent);
  }
  hostDisconnected() {
    this.host.removeEventListener('faceplate-alert', this._handleAlertEvent);
  }
  report(e) {
    const t = zn.getRegisteredElements(this.host);
    if (t)
      for (const n of t)
        if (n.shouldDisplayAlert(e)) return n.displayAlert(e), !0;
    return !1;
  }
}
var Zn, er, tr, nr, rr;
!(function (e) {
  (e.MOBILE = 'mobile'), (e.TABLET = 'tablet'), (e.DESKTOP = 'desktop');
})(Zn || (Zn = {})),
  (function (e) {
    (e.Seo = 'seo'),
      (e.Reddit = 'reddit'),
      (e.RedditSearch = 'reddit_search'),
      (e.Other = 'other'),
      (e.Invalid = 'invalid');
  })(er || (er = {})),
  (function (e) {
    (e.App = 'app'),
      (e.Embed = 'embed'),
      (e.EmbedHeartbeat = 'embed-heartbeat'),
      (e.Event = 'event'),
      (e.EventBatch = 'event_batch'),
      (e.Heartbeat = 'heartbeat'),
      (e.HighlightMenu = 'highlight_menu'),
      (e.Screen = 'screen'),
      (e.SnippetEmbed = 'snippet_embed');
  })(tr || (tr = {})),
  (function (e) {
    (e.Global = 'global'), (e.Share = 'share');
  })(nr || (nr = {})),
  (function (e) {
    (e.Click = 'click'),
      (e.Drop = 'drop'),
      (e.Leave = 'leave'),
      (e.Load = 'load'),
      (e.View = 'view');
  })(rr || (rr = {}));
var or, ar, ir;
!(function (e) {
  (e.Link = 'link'),
    (e.Text = 'text'),
    (e.Image = 'image'),
    (e.Gif = 'gif'),
    (e.Video = 'video'),
    (e.Crosspost = 'crosspost'),
    (e.MultiMedia = 'multi_media'),
    (e.RTJSON = 'rtjson'),
    (e.Poll = 'poll'),
    (e.LiveAudio = 'liveaudio'),
    (e.RPAN = 'rpan'),
    (e.Gallery = 'gallery'),
    (e.Tournament = 'tournament');
})(or || (or = {})),
  (function (e) {
    (e.GoodVisit = 'good_visit'),
      (e.GoodVisitFeed = 'good_visit_feed'),
      (e.GoodVisitSearch = 'good_visit_search');
  })(ar || (ar = {})),
  (function (e) {
    (e.Initial = 'initial'),
      (e.NavigationControllerRestore = 'navigation_controller_restore'),
      (e.BFCache = 'bf_cache'),
      (e.ForegroundingAction = 'foregrounding_action'),
      (e.Unknown = 'unknown');
  })(ir || (ir = {}));
function sr(e) {
  if (!document.body.contains(e)) {
    document.body.prepend(e);
    const n = t(e);
    return e.remove(), n;
  }
  return t(e);
  function t(e) {
    if (['BODY', 'HTML'].includes(e.tagName)) return !1;
    if (e.hidden || !document.body.contains(e)) return !0;
    const n = window.getComputedStyle(e);
    return (
      'none' === n.display ||
      'hidden' === n.visibility ||
      (!!e.parentElement && t(e.parentElement))
    );
  }
}
async function dr(e) {
  return new Promise((t) => {
    const n = new Image();
    (n.onerror = () => {
      t(!0);
    }),
      (n.onload = () => {
        t(!1);
      }),
      (n.src = e);
  });
}
function lr(e) {
  'enabled' ===
    new URLSearchParams(window.location.search).get(
      'adblock_detection_debug_mode'
    ) && console.debug('[adblock-detection] ', e);
}
function cr() {
  const e = document.createElement('div');
  return (
    (e.style.width = '1px'),
    (e.style.position = 'absolute'),
    (e.style.top = '0'),
    (e.style.left = '-1000px'),
    (e.style.display = 'block'),
    e
  );
}
let pr, mr;
async function ur() {
  return (
    mr ||
    (async function () {
      return (
        (mr = (async function () {
          await new Promise((e) => requestAnimationFrame(e));
          const e = performance.now(),
            t = () => {
              lr(
                `The detection logic ran in ${(performance.now() - e).toFixed(3)}ms`
              );
            },
            n = sr(
              (function () {
                const e = cr();
                return (
                  (e.id = 'adblock-eyeo-element'),
                  e.classList.add('jag8CityBio212023'),
                  e
                );
              })()
            );
          lr(
            n
              ? '❌ Eyeo bait element was blocked'
              : '✅ Eyeo bait element was not blocked'
          );
          const r = async () => {
            const e = await dr('https://ad-delivery.net/px.gif?ch=2');
            return (
              lr(
                e
                  ? '❌ Eyeo bait asset was blocked'
                  : '✅ Eyeo bait asset was not blocked'
              ),
              e
            );
          };
          if (n || (await r())) {
            const e = sr(
              (function () {
                const e = cr();
                return (e.className = 'promotedlink'), e;
              })()
            );
            lr(
              e
                ? '❌ Eyeo acceptable ads element was blocked'
                : '✅ Eyeo acceptable ads element was not blocked'
            ),
              t();
            const n = { isAdblockEnabled: !0, isAcceptableAdsEnabled: !e };
            return lr(`ℹ️ Final result: ${JSON.stringify(n)}`), n;
          }
          const o = sr(
            (function () {
              const e = cr();
              return (
                (e.id = 'adblock-element'),
                e.classList.add('promoted'),
                (e.dataset.beforeContent = 'advertisement'),
                e
              );
            })()
          );
          lr(
            o
              ? '❌ Easylist bait element was blocked'
              : '✅ Easylist bait element was not blocked'
          );
          const a = async () => {
              const e = await dr(
                (function () {
                  const e = new URLSearchParams(window.location.search).get(
                    'adblock_bait_asset_domain'
                  );
                  if (e) {
                    const t = new URL(e);
                    return (t.pathname = '/assets/pix/ads/1.png'), t.toString();
                  }
                  return 'https://www.redditstatic.com/shreddit/assets/pix/ads/1.png';
                })()
              );
              return (
                lr(
                  e
                    ? '❌ Easylist bait asset was blocked'
                    : '✅ Easylist bait asset was not blocked'
                ),
                e
              );
            },
            i = o || (await a());
          t();
          const s = {
            isAdblockEnabled: i,
            isAcceptableAdsEnabled: !i && void 0
          };
          return lr(`ℹ️ Final result: ${JSON.stringify(s)}`), s;
        })()),
        (pr = await mr),
        window.dispatchEvent(new Event('adblock_detection_complete')),
        pr
      );
    })()
  );
}
var hr;
!(function (e) {
  (e.GoodVisit = 'good_visit'),
    (e.GoodVisitFeed = 'good_visit_feed'),
    (e.GoodVisitSearch = 'good_visit_search');
})(hr || (hr = {}));
const gr = ({ noun: e, pageType: t }) =>
    ((e) => e === Zt.Embed)(t) ? br(e) : e,
  br = (e) => {
    switch (e) {
      case tr.Screen:
      case tr.App:
        return tr.Embed;
      case tr.Heartbeat:
        return tr.EmbedHeartbeat;
      default:
        return e;
    }
  },
  xr = { height: window?.screen.height, width: window?.screen.width },
  vr = ({
    success: e = !0,
    data: t,
    screenviewId: n,
    serverRenderId: r,
    triggerType: o = ir.Initial
  }) => {
    const { isAcceptableAdsEnabled: a, isAdblockEnabled: i } = pr || {
        isAdblockEnabled: !1,
        isAcceptableAdsEnabled: void 0
      },
      s = !!window.matchMedia?.(
        '(display-mode: standalone), (display-mode: minimal-ui)'
      ).matches;
    return At(
      {
        source: nr.Global,
        action: rr.View,
        noun: gr({ noun: tr.Screen, pageType: t.action_info?.page_type })
      },
      {
        ...t,
        action_info: { ...t.action_info, success: e, trigger_type: o },
        request: { ...t.request, server_render_id: r },
        screenview_id: n,
        screen: xr,
        adblock: { enabled: i, acceptable_ads: a },
        ...(s ? { pwa: { installed: !0 } } : {})
      }
    );
  },
  wr = ({ reason: e, screenViewData: t, screenviewId: n }) =>
    At(
      {
        source: nr.Global,
        action: rr.Leave,
        noun: gr({ noun: tr.App, pageType: t.action_info?.page_type })
      },
      { ...t, action_info: { ...t.action_info, reason: e }, screenview_id: n }
    ),
  fr = (e, t, n) =>
    At(
      { source: nr.Global, action: rr.Drop, noun: tr.EventBatch },
      {
        ...e,
        dropped_data: { event_batch_size: n },
        action_info: { ...e.action_info, reason: t.toLowerCase() }
      }
    );
var yr, _r;
!(function (e) {
  (e.Comments = 'comments'),
    (e.CopyLink = 'copy_link'),
    (e.HighlightTextComponent = 'highlight_text_component'),
    (e.Replies = 'replies'),
    (e.ProfileName = 'profile_name'),
    (e.ProfileIcon = 'profile_icon'),
    (e.PostTitle = 'post_title'),
    (e.ReadMore = 'read_more'),
    (e.RedditLogo = 'reddit_logo'),
    (e.SubredditIcon = 'subreddit_icon'),
    (e.SubredditName = 'subreddit_name'),
    (e.Upvote = 'upvote'),
    (e.ViewMore = 'view_more'),
    (e.Whitespace = 'whitespace'),
    (e.Members = 'members_count'),
    (e.Online = 'online_count'),
    (e.Media = 'media'),
    (e.JoinCommunity = 'join_community'),
    (e.ViewMoreMedia = 'view_more_media'),
    (e.FullscreenMedia = 'fullscreen_media');
})(yr || (yr = {})),
  (function (e) {
    (e.Post = 'Post'),
      (e.Comment = 'Comment'),
      (e.Feed = 'Feed'),
      (e.Snippet_Post = 'Snippet_Post'),
      (e.Snippet_Comment = 'Snippet_Comment');
  })(_r || (_r = {}));
const Er = 'embed-container',
  Sr = '-embed-wrapper',
  kr = 'blurred-overlay',
  Tr = 'embed-feed-post-',
  Ir = 'embed-read-mode-overlay',
  Cr = 'embed-read-mode-overlay-hover';
var Ar;
!(function (e) {
  (e.Mobile = 'mweb3x'), (e.Desktop = 'web3x');
})(Ar || (Ar = {}));
const Pr = Ar.Mobile,
  Rr = Object.values(Ar);
let Or, Nr;
const Dr = () => {
    if (void 0 !== Or) return Or;
    const e = document.querySelector('shreddit-app');
    var t;
    return (
      void 0 !== (t = e?.getAttribute('app-name') ?? void 0) && Rr.includes(t)
        ? (Or = t)
        : ((Or = Pr),
          window.Sentry?.captureMessage?.(
            '`app-name`: Default app_name value was used'
          )),
      Or
    );
  },
  Lr = () => {
    return (
      void 0 !== Nr ||
        ((e = document.querySelector('shreddit-app')?.microAppName ?? void 0),
        (Nr = void 0 !== e ? e : 'unknown')),
      Nr
    );
    var e;
  };
let Mr;
const Ur = async ({ eventsBuffer: e, errorText: t, v2EventsRoute: n }) => {
    if (!e.length) return !0;
    const r = {
        v2EventsRoute: n,
        options: { nowSendingDropEvent: !0, shouldNotRetryIfFail: !0 }
      },
      o = t ?? 'other_error';
    return 1 === e.length
      ? await qr({
          ...r,
          eventsBuffer: [
            ((a = e[0]),
            (i = o),
            At(
              { source: nr.Global, action: rr.Drop, noun: tr.Event },
              {
                ...a,
                dropped_data: {
                  event_source: a.source,
                  event_action: a.action,
                  event_noun: a.noun,
                  event_batch_size: 1
                },
                action_info: { ...a.action_info, reason: i.toLowerCase() }
              }
            ))
          ]
        })
      : await qr({ ...r, eventsBuffer: [fr(e[0], o, e.length)] });
    var a, i;
  },
  Fr = async ({ url: e, eventsBuffer: t }) => {
    const n = In.get('csrf_token') ?? '',
      r = !Wr() ? t : { csrf_token: n, info: t },
      o = JSON.stringify(r);
    return navigator.sendBeacon(e, o), !0;
  },
  Vr = async ({ url: e, eventsBuffer: t, microapp: n, options: r }) => {
    const o = In.get('csrf_token') ?? '',
      a = !Wr() ? t : { csrf_token: o, info: t },
      i = JSON.stringify(a);
    let s;
    try {
      s = await fetch(e, {
        body: i,
        headers: {
          'Content-Type': 'text/PLAIN',
          'x-sh-microapp-route': n || 'monolith'
        },
        keepalive: !0,
        method: 'post',
        credentials: 'same-origin'
      });
    } catch (n) {
      return (
        !r?.underCachingExperiment &&
        (r?.shouldNotRetryIfFail
          ? r?.nowSendingDropEvent ||
            (await Ur({
              eventsBuffer: t,
              errorText: `An error: ${n}`,
              v2EventsRoute: e
            }))
          : await qr({
              eventsBuffer: t,
              v2EventsRoute: e,
              options: { shouldNotRetryIfFail: !0 }
            }),
        !0)
      );
    }
    if (s?.ok) {
      'basic' === s.type &&
        s.headers.has('x-verified-res') &&
        ((e, t = mn) => {
          if (
            e.includes('global') &&
            e.includes('view') &&
            e.includes('screen')
          ) {
            for (let n = 0; n < t.length; n++) if (!e.includes(t[n])) return !1;
            return !0;
          }
          return null;
        })(i) &&
        (Mr || (Mr = document.querySelector('shreddit-app')),
        Mr)?.resolvePendingRequests();
      const e = s.headers.get('x-set-loid') || void 0,
        t = s.headers.get('x-set-session') || void 0;
      window.dispatchEvent(
        new CustomEvent('v2-events-sent', {
          detail: { loid: e, session_tracker: t }
        })
      );
    } else if (!r?.nowSendingDropEvent)
      return await Ur({
        eventsBuffer: t,
        errorText: `HTTP Response Code: ${s?.status}`,
        v2EventsRoute: e
      });
    return !0;
  };
let Br;
const Wr = () => (
    'boolean' == typeof Br ||
      ((e) => {
        Br = e;
      })(
        document
          .querySelector('shreddit-app')
          ?.hasAttribute('disable-send-beacon') ?? !1
      ),
    Br
  ),
  Hr = (e, t) => Math.floor(Math.random() * (t - e) + e),
  Gr = (e, t, n) => `${e.slice(0, n)}${t}${e.slice(n)}`,
  Yr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  zr = () => Yr[Math.floor(Math.random() * Yr.length)],
  jr = `/svc/shreddit/${((e) => {
    if (e <= '/!'.length)
      throw new Error(
        `Invalid len argument supplied. Must be greater than ${'/!'.length}`
      );
    let t = [...Array(e - '/!'.length)].map(zr).join('');
    return (
      (t = Gr(t, '/!'[0], Math.floor(t.length / 2))),
      (t = Gr(t, '/!'[1], Hr(0, t.length - 1))),
      t
    );
  })(Hr(15, 25))}`,
  qr = async ({ eventsBuffer: e, v2EventsRoute: t, options: n }) => {
    const r =
      'function' != typeof navigator.sendBeacon || Wr()
        ? 'function' == typeof fetch
          ? Vr
          : void 0
        : Fr;
    return (
      void 0 === r ||
      (await r({ url: t || jr, eventsBuffer: e, microapp: Lr(), options: n }))
    );
  };
var $r;
!(function (e) {
  (e.AdRefocusStart = 'time-before-unfocus'),
    (e.LastClickedAdId = 'last-clicked-ad-id'),
    (e.ImpressionId = 'last-clicked-impression-id'),
    (e.RecentPages = 'recent-subreddits-store'),
    (e.FeatureTestLocalStorageKey = '🤘shreddit_local_storage_feature_test🤘'),
    (e.DisclaimerStore = 'disclaimer_store'),
    (e.AmaPostCreationModalDismissed = 'ama-post-creation-modal-dismissed'),
    (e.AmaReminderTooltipShown = 'ama-reminder-tooltip-shown'),
    (e.GoodVisit = 'good-visit-status'),
    (e.GoodVisitFS = 'good-visit-feeds-search'),
    (e.GoodVisitKLP = 'good-visit-klp'),
    (e.ModalBlocking = 'modal-blocking-status'),
    (e.XpromoConsolidation = 'xpromo-consolidation'),
    (e.XpromoEducationalDeeplinkPrompt = 'xpromo-educational-deeplink-prompt'),
    (e.AdEvents = 'ad-events'),
    (e.AdUserTargeting = 'ad-user-targeting'),
    (e.Follow = 'follow_store'),
    (e.RecentSearches = 'recent-searches-store'),
    (e.NsfwTypeaheadExpanded = 'nsfw_typeahead_expanded'),
    (e.EventsBuffer = 'events-buffer'),
    (e.LoginTime = 'login-time'),
    (e.ModQueuePreferencesExpandReports =
      'mod-queue-preferences-expand-reports'),
    (e.AchievementsStore = 'achievements-store'),
    (e.ModActivityCardsCollapseState = 'activity-cards-collapse-state'),
    (e.ModInsightsCardCollapseState = 'insights-card-collapse-state'),
    (e.TeamFlairSelectionIsShown = 'team-flair-selection-is-shown'),
    (e.ModNavState = 'mod-nav-state'),
    (e.ModActivityPanelState = 'mod-activity-panel-state'),
    (e.ModQueueTutorial = 'mod-queue-tutorial');
})($r || ($r = {}));
const Xr = new (class {
  getStorage() {
    try {
      return window.localStorage;
    } catch (e) {
      return;
    }
  }
  clear() {
    this.getStorage()?.clear();
  }
  getItem(e) {
    return this.getStorage()?.getItem(e) || null;
  }
  removeItem(e) {
    this.getStorage()?.removeItem(e);
  }
  setItem(e, t) {
    this.getStorage()?.setItem(e, t);
  }
  isAvailable() {
    try {
      this.setItem($r.FeatureTestLocalStorageKey, 'yes');
      const e = 'yes' === this.getItem($r.FeatureTestLocalStorageKey);
      return this.removeItem($r.FeatureTestLocalStorageKey), e;
    } catch {
      return !1;
    }
  }
})();
let Kr,
  Qr,
  Jr = [];
const Zr = new Set([
  'global__view__screen',
  'global__view__embed',
  'global__leave__app',
  'post_detail__click__comments',
  'post_detail__click__post',
  'global__view__heartbeat',
  'post__view__comments',
  'post__consume__comments'
]);
function eo(e, t) {
  if (
    (Jr.push(e),
    ((e) => {
      if (!e) return !1;
      const { source: t, action: n, noun: r } = e,
        o = `${t}__${n}__${r}`;
      return Zr.has(o);
    })(e))
  ) {
    const e = Jr.slice();
    (Jr = []), to(e, t);
  } else if (Jr.length >= 40) {
    const e = Jr.slice();
    (Jr = []), to(e, t);
  } else
    Kr ||
      (Kr = setTimeout(() => {
        const e = Jr.slice();
        (Jr = []), to(e, t);
      }, 3e3));
}
function to(e, t) {
  !(function () {
    Kr && clearTimeout(Kr);
    Kr = void 0;
  })(),
    ao()
      ? (async function (e, t) {
          const n = await qr({
            eventsBuffer: e,
            v2EventsRoute: t,
            options: { underCachingExperiment: !0 }
          });
          if (!Xr.isAvailable()) return;
          const r = JSON.parse(Xr.getItem($r.EventsBuffer) ?? '[]');
          if (n) r.length && ro(t);
          else {
            r.push(e);
            try {
              Xr.setItem($r.EventsBuffer, JSON.stringify(r));
            } catch (e) {
              return;
            }
            ro(t);
          }
        })(e, t)
      : qr({ eventsBuffer: e, v2EventsRoute: t });
}
function no(e) {
  const t = Jr.slice();
  (Jr = []), t.length > 0 && to(t, e);
}
function ro(e) {
  Qr ||
    (Qr = setTimeout(() => {
      !(async function (e) {
        if (
          ((function () {
            Qr && clearTimeout(Qr);
            Qr = void 0;
          })(),
          !Xr.isAvailable())
        )
          return;
        const t = JSON.parse(Xr.getItem($r.EventsBuffer) ?? '[]');
        for (; t.length > 0; ) {
          if (
            !(await qr({
              eventsBuffer: t[0],
              v2EventsRoute: e,
              options: { underCachingExperiment: !0 }
            }))
          )
            return void ro(e);
          t.shift();
          try {
            Xr.setItem($r.EventsBuffer, JSON.stringify(t));
          } catch (e) {
            continue;
          }
        }
      })(e);
    }, 3e3));
}
let oo;
const ao = () => {
    return (
      'boolean' == typeof oo ||
        ((e =
          document
            .querySelector('shreddit-app')
            ?.hasAttribute('use-local-storage-events-caching') ?? !1),
        (oo = e)),
      oo
    );
    var e;
  },
  io = (e) => () => At({ source: 'nav', action: 'click', noun: e }),
  so = (e, t) => () =>
    At({
      source: 'nav',
      action: 'click',
      noun: e,
      subreddit: t ? { name: t } : void 0
    }),
  lo = io('wordmark'),
  co = io('breadcrumbs'),
  po = io('user'),
  mo = io('search_opened'),
  uo = io('search_closed'),
  ho = () => At({ source: 'nav', action: 'open', noun: 'hamburger_menu' }),
  go = () => At({ source: 'nav', action: 'close', noun: 'hamburger_menu' }),
  bo = () => At({ source: 'nav', action: 'open', noun: 'user_drawer' }),
  xo = () => At({ source: 'nav', action: 'close', noun: 'user_drawer' }),
  vo = (e) => so('recent_page_name_menu', e)();
class wo extends D {
  constructor(e, t) {
    super(e),
      (this.events = new I(this, () => window)),
      (this.getCommonLabels = t),
      this.events.define('w3-report', (e) => {
        this.sendReport(e.detail);
      }),
      this.events.define('track-event', (e) => {
        this.handleEvent(e.detail.details);
      }),
      this.events.define('faceplate-track', (e) => {
        this.handleEvent(e.detail);
      });
  }
  async getW3ReportSender() {
    return (
      await Promise.resolve().then(function () {
        return oa;
      })
    ).w3Report;
  }
  async sendReport(e) {
    (await this.getW3ReportSender())({
      ...e,
      labels: { ...this.getCommonLabels?.(), ...e.labels }
    });
  }
  async getV2EventConverter() {
    return (await import('./w3-report-from-v2-event-0ab29a1f.js'))
      .getW3ReportsFromV2Event;
  }
  async handleEvent(e) {
    const t = (await this.getV2EventConverter())(e);
    t && t.forEach((e) => this.sendReport(e));
  }
}
const fo = new (class {
  setCorrelationId(e) {
    this.correlationId = e;
  }
  getCorrelationId() {
    return this.correlationId;
  }
})();
var yo, _o;
!(function (e) {
  (e.Standard = 'hidden'), (e.Webkit = 'webkitHidden');
})(yo || (yo = {})),
  (function (e) {
    (e.hidden = 'visibilitychange'),
      (e.webkitHidden = 'webkitvisibilitychange'),
      (e.mozHidden = 'mozvisibilitychange'),
      (e.msHidden = 'msvisibilitychange');
  })(_o || (_o = {}));
const Eo = Object.keys(_o),
  So = { initialized: !1, visibilityCallbacks: new Array() },
  ko = () => {},
  To = Eo.find((e) => void 0 !== document[e]);
var Io = (e = ko, t = { immediate: !1 }) => {
  const n = So.visibilityCallbacks.length;
  return (
    So.visibilityCallbacks.includes(e) ||
      (t.shouldBeCalledFirst
        ? So.visibilityCallbacks.unshift(e)
        : So.visibilityCallbacks.push(e)),
    !So.initialized &&
      To &&
      ((So.initialized = !0),
      document.addEventListener(_o[To], () => {
        const e = !document[To];
        So.visibilityCallbacks.forEach((t) => t(e));
      }),
      t.immediate && e(!document[To])),
    t.resetInit && (So.initialized = !1),
    n < So.visibilityCallbacks.length
  );
};
const Co = (e) => {
  const t = So.visibilityCallbacks.length,
    n = So.visibilityCallbacks.indexOf(e);
  return (
    -1 !== n && So.visibilityCallbacks.splice(n, 1),
    t > So.visibilityCallbacks.length
  );
};
let Ao = !1;
const Po = (e) => {
  const t = Xr.getItem($r.AdRefocusStart),
    n = Xr.getItem($r.LastClickedAdId),
    r = Xr.getItem($r.ImpressionId);
  if (t && n && r) {
    e(
      ((e, t, n) =>
        At(
          { source: 'post', action: 'refocus', noun: 'ad' },
          {
            post: e,
            ad_click: { landing_page_duration: Math.min(t, 2 ** 31 - 1) },
            ad_metadata: { impression_id: n }
          }
        ))({ id: n }, Date.now() - parseInt(t, 10), r)
    );
  }
  (t || n || r) &&
    (Xr.removeItem($r.AdRefocusStart),
    Xr.removeItem($r.LastClickedAdId),
    Xr.removeItem($r.ImpressionId));
};
let Ro = !1;
const Oo = [],
  No = [],
  Do = wt(Ot(), window.navigator?.maxTouchPoints) ? 'pagehide' : 'beforeunload',
  Lo = (e, t) => {
    const n = e.length,
      r = e.indexOf(t);
    return -1 !== r && e.splice(r, 1), n > e.length;
  },
  Mo = {
    unsubscribe(e) {
      const t = Lo(Oo, e),
        n = Lo(No, e);
      return t || n;
    },
    subscribe(e = () => {}, t = {}) {
      const n = Oo.length,
        r = No.length,
        o = t.shouldBeCalledFirst ? 'unshift' : 'push';
      return (
        Oo.includes(e) || Oo[o](e),
        t.unloadOnly || No.includes(e) || No[o](e),
        Ro ||
          ((Ro = !0),
          window.addEventListener(Do, () => {
            Oo.forEach((e) => e());
          }),
          window.addEventListener('beforeRoute', () => {
            No.forEach((e) => e());
          })),
        n < Oo.length || r < No.length
      );
    },
    eventType: Do
  },
  Uo = (e, t) =>
    e.isNavigationControllerRestore
      ? ir.NavigationControllerRestore
      : e.isBfCacheRestore
        ? ir.BFCache
        : t
          ? ir.ForegroundingAction
          : ir.Initial,
  Fo = async ({
    pageType: e,
    triggerType: t,
    serverRenderId: n = '',
    shouldUpdateRecaptcha: r = !1
  }) => {
    if (!r || wn.includes(e)) return;
    const o = window.btoa(`${e}|${t}|${n}`).replace(/=/g, '');
    return fetch(`/svc/shreddit/update-recaptcha?k=${o}`);
  };
class Vo {
  constructor(e) {
    (this.hasSentScreenview = !1),
      (this._pageUnloaded = !1),
      (this._visibilityHandlerAdded = !1),
      (this._initialVisibilityChangeToVisibleHappened = !1),
      (this._visibilityChangeGVSEventWasFired = !1),
      (this._screenviewId = ''),
      (this.onBeforeUnloadCallback = () => {
        (this._pageUnloaded = !0),
          this._host.trackEvent(
            wr({
              screenviewId: this._screenviewId,
              screenViewData: this._host.screenViewData
            })
          );
      }),
      (this.sendScreenview = () => {
        const e = Uo(this._host);
        (this._screenviewId = ln()),
          this._host.trackEvent(
            vr({
              success: this._host.success,
              data: this._host.screenViewData,
              screenviewId: this._screenviewId,
              serverRenderId: this._host.serverRenderId,
              triggerType: Uo(this._host)
            })
          ),
          Fo({
            pageType: this._host.pageType,
            triggerType: e,
            serverRenderId: this._host.serverRenderId,
            shouldUpdateRecaptcha: this._host.shouldUpdateRecaptcha
          });
      }),
      (this._host = e),
      this._host.addController(this);
  }
  trackScreenview() {
    const e = this.hasSentScreenview ? '' : this._host.serverRenderId;
    if (!this._visibilityChangeGVSEventWasFired) {
      const t = Uo(this._host);
      this._screenviewId = ln();
      const n = k('track-event', {
        details: vr({
          success: this._host.success,
          data: this._host.screenViewData,
          screenviewId: this._screenviewId,
          serverRenderId: e,
          triggerType: t
        })
      });
      this._host.dispatchEvent(n),
        Fo({
          pageType: this._host.pageType,
          triggerType: t,
          serverRenderId: e,
          shouldUpdateRecaptcha: this._host.shouldUpdateRecaptcha
        }),
        (this.hasSentScreenview = !0),
        (this._pageUnloaded = !1);
    }
  }
  _bindShredditVisibilityChange() {
    this._visibilityHandlerAdded ||
      ((this._visibilityHandlerAdded = !0),
      Io(
        (e) => {
          if (e) {
            if (this._initialVisibilityChangeToVisibleHappened) {
              const e = Uo(this._host, !0);
              (this._screenviewId = ln()),
                this._host.trackEvent(
                  vr({
                    success: this._host.success,
                    data: this._host.screenViewData,
                    screenviewId: this._screenviewId,
                    serverRenderId: this._host.serverRenderId,
                    triggerType: e
                  })
                ),
                Fo({
                  pageType: this._host.pageType,
                  triggerType: e,
                  serverRenderId: this._host.serverRenderId,
                  shouldUpdateRecaptcha: this._host.shouldUpdateRecaptcha
                }),
                (this._visibilityChangeGVSEventWasFired = !0),
                (this._pageUnloaded = !1);
            }
            this._initialVisibilityChangeToVisibleHappened = !0;
          } else
            this._pageUnloaded ||
              this._host.trackEvent(
                wr({
                  reason: 'tab_backgrounded',
                  screenviewId: this._screenviewId,
                  screenViewData: this._host.screenViewData
                })
              );
        },
        { immediate: !0 }
      ));
  }
  hostConnected() {
    Mo.subscribe(this.onBeforeUnloadCallback, { unloadOnly: !0 }),
      this._bindShredditVisibilityChange(),
      ((e) => {
        Ao ||
          !Xr.isAvailable() ||
          ((Ao = !0),
          Io(
            (t) => {
              try {
                t ? Po(e) : Xr.setItem($r.AdRefocusStart, String(Date.now()));
              } catch (e) {
                return;
              }
            },
            { immediate: !0 }
          ));
      })(this._host.trackEvent),
      window.addEventListener('afterRoute', this.sendScreenview);
  }
  hostDisconnected() {
    Mo.unsubscribe(this.onBeforeUnloadCallback),
      window.removeEventListener('afterRoute', this.sendScreenview);
  }
}
var Bo;
function Wo(e) {
  return { ...e, createdAt: Date.now(), attempt: 0, statusCodes: [] };
}
function Ho(e, t) {
  const { name: n, value: r, type: o, labels: a, createdAt: i } = e;
  return {
    age: Date.now() - i,
    type: 'reddit-w3reporting',
    url: '',
    user_agent: navigator.userAgent,
    body: {
      sampling_fraction: Go(e, t),
      type: o,
      name: n,
      value: r,
      labels: a ?? {}
    }
  };
}
function Go(e, t) {
  return e.isFailure ? t.sampling.failureFraction : t.sampling.successFraction;
}
function Yo(e, t) {
  e.attempt = Math.min(t, e.attempt + 1);
}
function zo({ batch: e, reportQueue: t, maxReportAge: n, lastStatusCode: r }) {
  for (const t of e) (t.attempt += 1), t.statusCodes.push(r);
  const { maxReportAttempts: o } = jo(n);
  t.unshift(...e.filter((e) => e.attempt < o));
}
function jo(e) {
  const t = Math.floor(Math.log(e / 1e3));
  return { maxAttempts: t, maxReportAttempts: Math.min(3, t) };
}
async function qo({
  config: e,
  batch: t,
  maxReportAge: n,
  isTimeSensitive: r,
  reportQueue: o,
  onError: a
}) {
  const i = (function (e) {
    return (
      (e.urlIndex = (e.urlIndex + 1) % e.reportingUrls.length),
      e.reportingUrls[e.urlIndex]
    );
  })(e);
  if (!i) return;
  const s = t.map((t) => Ho(t, e)).filter((e) => e.age < n);
  if (0 === s.length) return;
  !(async function ({
    batch: e,
    reportQueue: t,
    resp: n,
    isTimeSensitive: r,
    config: o,
    maxReportAge: a,
    onError: i
  }) {
    const { maxAttempts: s } = jo(a);
    switch (n.status) {
      case 200:
        r ||
          (function (e) {
            e.attempt = 0;
          })(o),
          (function (e) {
            e.batchSizeMultiplier = 1;
          })(o);
        break;
      case 207:
      case 400:
        await i(e, n);
        break;
      case 413:
        zo({
          batch: e,
          reportQueue: t,
          maxReportAge: a,
          lastStatusCode: n.status
        }),
          (function (e) {
            e.batchSizeMultiplier = e.batchSizeMultiplier / 2;
          })(o);
        break;
      default:
        zo({
          batch: e,
          reportQueue: t,
          maxReportAge: a,
          lastStatusCode: n.status
        }),
          r || Yo(o, s);
    }
  })({
    batch: t,
    resp: await fetch(i, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(s),
      keepalive: !0
    }),
    isTimeSensitive: r,
    maxReportAge: n,
    config: e,
    reportQueue: o,
    onError: a
  });
}
function $o({ disabled: e, qItem: t, config: n }) {
  return (
    !e &&
    (function (e, t) {
      const n = Go(e, t);
      return Math.random() < n;
    })(t, n)
  );
}
!(function (e) {
  (e.Counter = 'counter'), (e.Gauge = 'gauge'), (e.Histogram = 'histogram');
})(Bo || (Bo = {}));
function Xo({
  policyUrl: e,
  onError: t,
  disabled: n,
  maxReportAge: r = 3e5,
  flushInterval: o = 3e3
}) {
  const a = {
      w3IncludeSubdomains: !1,
      reportingUrls: [],
      policyUrl: e ?? 'https://w3-reporting.reddit.com/policy',
      sampling: { successFraction: 1, failureFraction: 1 },
      attempt: 0,
      batchSizeMultiplier: 1,
      urlIndex: -1
    },
    i = Boolean(n);
  let s = null;
  async function d() {
    return (
      s ||
        (s = (async function (e) {
          try {
            const t = await fetch(e.policyUrl, { method: 'GET' }),
              n = t.headers.get('report-to');
            if (n) {
              const t = JSON.parse(`[${n}]`)?.find(
                ({ group: e }) => 'w3-reporting' === e
              );
              e.w3IncludeSubdomains = Boolean(t?.include_subdomains);
              const r = t?.endpoints?.map?.((e) => e.url) || [];
              r.length > 0 && (e.reportingUrls = r);
            }
            const r = t.headers.get('x-reddit-w3reporting');
            if (r) {
              const t = JSON.parse(r);
              'number' == typeof t.success_fraction &&
                (e.sampling.successFraction = t.success_fraction),
                'number' == typeof t.failure_fraction &&
                  (e.sampling.failureFraction = t.failure_fraction);
            }
          } catch (e) {
            window.Sentry?.captureException?.(e);
          }
        })(a)),
      s
    );
  }
  let l = [];
  const { maxAttempts: c } = jo(r);
  async function p() {
    if (0 === l.length) return;
    const e = Math.max(1, Math.floor(l.length * a.batchSizeMultiplier)),
      n = l.slice(0, e);
    l = l.slice(e);
    try {
      await qo({
        batch: n,
        isTimeSensitive: !1,
        config: a,
        maxReportAge: r,
        reportQueue: l,
        onError: t
      });
    } catch (e) {
      window.Sentry?.captureException?.(e),
        Yo(a, c),
        zo({ batch: n, reportQueue: l, maxReportAge: r, lastStatusCode: 666 });
    }
  }
  let m = [];
  async function u() {
    if (0 === m.length) return;
    const e = [...m];
    m = [];
    try {
      await qo({
        batch: e,
        isTimeSensitive: !0,
        config: a,
        maxReportAge: r,
        reportQueue: l,
        onError: t
      });
    } catch (t) {
      window.Sentry?.captureException?.(t),
        Yo(a, c),
        zo({ batch: e, reportQueue: l, lastStatusCode: 420, maxReportAge: r });
    }
  }
  return (
    window.setTimeout(async function e() {
      await p(), window.setTimeout(e, o * Math.exp(a.attempt));
    }, o),
    document.addEventListener('visibilitychange', () => {
      'hidden' === document.visibilityState && p();
    }),
    {
      w3Report: async function (e) {
        await d();
        const t = Wo(e);
        $o({ qItem: t, config: a, disabled: i }) && l.push(t);
      },
      w3ReportNow: async function (e) {
        await d();
        const t = Wo(e);
        $o({ qItem: t, config: a, disabled: i }) &&
          (0 === m.length && setTimeout(u, 0), m.push(t));
      },
      printReportQueue: function (e = !1) {
        const t = e ? m : l;
        return JSON.stringify(
          t.map((e) => Ho(e, a)),
          null,
          2
        );
      }
    }
  );
}
async function Ko(e, t) {
  const n = (await t.json())?.invalid.map(
    (function (e, t) {
      return (n) => {
        const r = 'number' == typeof n ? e[n] : n,
          { labels: o = {} } = r,
          a = {};
        for (const e in o) a[e.replace(/auth/, 'a_u_t_h')] = o[e];
        const i = t ? r.statusCodes.concat(t) : r.statusCodes;
        return { name: r.name, labels: a, attempt: r.attempt, statusCodes: i };
      };
    })(e, t.status)
  );
  window.Sentry?.withScope((e) => {
    e.setExtra('statusCode', t.status),
      e.setExtra('reports', JSON.stringify(n)),
      window.Sentry?.captureMessage('Failed to send W3 reports');
  });
}
const Qo = (e, t) => {
  'function' == typeof navigator.sendBeacon
    ? navigator.sendBeacon(e, t)
    : ((e, t) => {
        fetch(e, {
          body: t,
          headers: { 'Content-Type': 'text/plain' },
          keepalive: !0,
          method: 'POST'
        });
      })(e, t);
};
async function Jo(e) {
  try {
    const n = Zo();
    if (((t = n), !Boolean(!ea && 'string' == typeof t && t?.length))) return;
    const r = (function (e) {
      const { name: t, value: n, type: r, labels: o } = e,
        a = {
          age: 1,
          type: 'reddit-w3reporting',
          url: '',
          user_agent: navigator.userAgent,
          body: {
            sampling_fraction: 0.99,
            type: r,
            name: t,
            value: n,
            labels: o ?? {}
          }
        };
      return JSON.stringify([a]);
    })(e);
    Qo(n, r);
  } catch (t) {
    !(function (e, t) {
      if (!(e instanceof Error)) return;
      window.Sentry?.withScope((n) => {
        n?.setTag('w3', 'reportWebVital'),
          n?.setTag('w3Url', Zo()),
          n?.setTag('w3Params', JSON.stringify([t])),
          n?.setTag('errorMessage', e.message?.slice?.(0, 200)),
          n?.setTag('errorName', e.name?.slice?.(0, 200)),
          n?.setTag(
            'errorStack',
            e.stack?.slice?.(0, 200)?.replaceAll?.('\n', '')
          ),
          window.Sentry?.captureMessage?.('Failed to report w3 web vital');
      });
    })(t, e);
  }
  var t;
}
function Zo() {
  return window.CLIENT_CONFIG.W3_REPORTING_WEB_VITAL_REPORTS_URL;
}
let ea = !1;
const {
  w3Report: ta,
  w3ReportNow: na,
  printReportQueue: ra
} = Xo({ onError: Ko, disabled: Boolean(CLIENT_CONFIG.DISABLE_W3_REPORTING) });
var oa = Object.freeze({
  __proto__: null,
  w3Report: ta,
  w3ReportNow: na,
  printReportQueue: ra,
  w3Reporting: Xo,
  defaultOnError: Ko,
  get W3ReportType() {
    return Bo;
  },
  w3ReportWebVital: Jo,
  _disableW3WebVitalReports: function () {
    ea = !0;
  }
});
const aa = (e) => {
    try {
      return new URL(e).hostname.endsWith('reddit.com');
    } catch (e) {
      return !1;
    }
  },
  ia = (e) => e.startsWith('https://alb.reddit.com/cr');
var sa, da, la, ca, pa;
!(function (e) {
  (e[(e.IMPRESSION = 1)] = 'IMPRESSION'),
    (e[(e.CLICK = 2)] = 'CLICK'),
    (e[(e.COMMENTS_VIEW = 3)] = 'COMMENTS_VIEW'),
    (e[(e.UPVOTE = 4)] = 'UPVOTE'),
    (e[(e.DOWNVOTE = 5)] = 'DOWNVOTE'),
    (e[(e.COMMENT = 6)] = 'COMMENT'),
    (e[(e.VIEWABLE_IMPRESSION = 7)] = 'VIEWABLE_IMPRESSION'),
    (e[(e.COMMENT_UPVOTE = 8)] = 'COMMENT_UPVOTE'),
    (e[(e.COMMENT_DOWNVOTE = 9)] = 'COMMENT_DOWNVOTE'),
    (e[(e.VENDOR_FULLY_IN_VIEW = 10)] = 'VENDOR_FULLY_IN_VIEW'),
    (e[(e.VENDOR_FULLY_IN_VIEW_5_SECS = 11)] = 'VENDOR_FULLY_IN_VIEW_5_SECS'),
    (e[(e.VENDOR_FULLY_IN_VIEW_15_SECS = 12)] = 'VENDOR_FULLY_IN_VIEW_15_SECS'),
    (e[(e.GROUP_M_VIEWABLE = 13)] = 'GROUP_M_VIEWABLE'),
    (e[(e.UNLOAD = 14)] = 'UNLOAD'),
    (e[(e.LEAD_GENERATION = 200)] = 'LEAD_GENERATION');
})(sa || (sa = {})),
  (function (e) {
    e[(e.GALLERY_ITEM_IMPRESSION = 15)] = 'GALLERY_ITEM_IMPRESSION';
  })(da || (da = {})),
  (function (e) {
    (e[(e.VIDEO_VIEWABLE_IMPRESSION = 100)] = 'VIDEO_VIEWABLE_IMPRESSION'),
      (e[(e.VIDEO_FULLY_VIEWABLE_IMPRESSION = 101)] =
        'VIDEO_FULLY_VIEWABLE_IMPRESSION'),
      (e[(e.VIDEO_PLAYED_WITH_SOUND = 102)] = 'VIDEO_PLAYED_WITH_SOUND'),
      (e[(e.VIDEO_PLAYED_EXPANDED = 103)] = 'VIDEO_PLAYED_EXPANDED'),
      (e[(e.VIDEO_WATCHED_25 = 104)] = 'VIDEO_WATCHED_25'),
      (e[(e.VIDEO_WATCHED_50 = 105)] = 'VIDEO_WATCHED_50'),
      (e[(e.VIDEO_WATCHED_75 = 106)] = 'VIDEO_WATCHED_75'),
      (e[(e.VIDEO_WATCHED_95 = 107)] = 'VIDEO_WATCHED_95'),
      (e[(e.VIDEO_WATCHED_100 = 108)] = 'VIDEO_WATCHED_100'),
      (e[(e.VIDEO_STARTED = 109)] = 'VIDEO_STARTED'),
      (e[(e.VIDEO_WATCHED_3_SECS = 110)] = 'VIDEO_WATCHED_3_SECS'),
      (e[(e.VIDEO_WATCHED_5_SECS = 111)] = 'VIDEO_WATCHED_5_SECS'),
      (e[(e.VIDEO_WATCHED_10_SECS = 112)] = 'VIDEO_WATCHED_10_SECS'),
      (e[(e.VIDEO_GROUP_M_VIEWABLE = 113)] = 'VIDEO_GROUP_M_VIEWABLE'),
      (e[(e.VIDEO_VENDOR_FULLY_VIEWABLE_50 = 114)] =
        'VIDEO_VENDOR_FULLY_VIEWABLE_50'),
      (e[(e.MRC_VIDEO_VIEWABLE_IMPRESSION = 115)] =
        'MRC_VIDEO_VIEWABLE_IMPRESSION');
  })(la || (la = {})),
  (function (e) {
    (e[(e.IMPRESSION = 1)] = 'IMPRESSION'),
      (e[(e.CLICK = 2)] = 'CLICK'),
      (e[(e.COMMENTS_VIEW = 3)] = 'COMMENTS_VIEW'),
      (e[(e.UPVOTE = 4)] = 'UPVOTE'),
      (e[(e.DOWNVOTE = 5)] = 'DOWNVOTE'),
      (e[(e.COMMENT = 6)] = 'COMMENT'),
      (e[(e.VIEWABLE_IMPRESSION = 7)] = 'VIEWABLE_IMPRESSION'),
      (e[(e.COMMENT_UPVOTE = 8)] = 'COMMENT_UPVOTE'),
      (e[(e.COMMENT_DOWNVOTE = 9)] = 'COMMENT_DOWNVOTE'),
      (e[(e.VENDOR_FULLY_IN_VIEW = 10)] = 'VENDOR_FULLY_IN_VIEW'),
      (e[(e.VENDOR_FULLY_IN_VIEW_5_SECS = 11)] = 'VENDOR_FULLY_IN_VIEW_5_SECS'),
      (e[(e.VENDOR_FULLY_IN_VIEW_15_SECS = 12)] =
        'VENDOR_FULLY_IN_VIEW_15_SECS'),
      (e[(e.GROUP_M_VIEWABLE = 13)] = 'GROUP_M_VIEWABLE'),
      (e[(e.UNLOAD = 14)] = 'UNLOAD'),
      (e[(e.GALLERY_ITEM_IMPRESSION = 15)] = 'GALLERY_ITEM_IMPRESSION'),
      (e[(e.VIDEO_VIEWABLE_IMPRESSION = 100)] = 'VIDEO_VIEWABLE_IMPRESSION'),
      (e[(e.VIDEO_FULLY_VIEWABLE_IMPRESSION = 101)] =
        'VIDEO_FULLY_VIEWABLE_IMPRESSION'),
      (e[(e.VIDEO_PLAYED_WITH_SOUND = 102)] = 'VIDEO_PLAYED_WITH_SOUND'),
      (e[(e.VIDEO_PLAYED_EXPANDED = 103)] = 'VIDEO_PLAYED_EXPANDED'),
      (e[(e.VIDEO_WATCHED_25 = 104)] = 'VIDEO_WATCHED_25'),
      (e[(e.VIDEO_WATCHED_50 = 105)] = 'VIDEO_WATCHED_50'),
      (e[(e.VIDEO_WATCHED_75 = 106)] = 'VIDEO_WATCHED_75'),
      (e[(e.VIDEO_WATCHED_95 = 107)] = 'VIDEO_WATCHED_95'),
      (e[(e.VIDEO_WATCHED_100 = 108)] = 'VIDEO_WATCHED_100'),
      (e[(e.VIDEO_STARTED = 109)] = 'VIDEO_STARTED'),
      (e[(e.VIDEO_WATCHED_3_SECS = 110)] = 'VIDEO_WATCHED_3_SECS'),
      (e[(e.VIDEO_WATCHED_5_SECS = 111)] = 'VIDEO_WATCHED_5_SECS'),
      (e[(e.VIDEO_WATCHED_10_SECS = 112)] = 'VIDEO_WATCHED_10_SECS'),
      (e[(e.VIDEO_GROUP_M_VIEWABLE = 113)] = 'VIDEO_GROUP_M_VIEWABLE'),
      (e[(e.VIDEO_VENDOR_FULLY_VIEWABLE_50 = 114)] =
        'VIDEO_VENDOR_FULLY_VIEWABLE_50'),
      (e[(e.MRC_VIDEO_VIEWABLE_IMPRESSION = 115)] =
        'MRC_VIDEO_VIEWABLE_IMPRESSION'),
      (e[(e.LEAD_GENERATION = 200)] = 'LEAD_GENERATION');
  })(ca || (ca = {})),
  (function (e) {
    (e[(e.IMPRESSION_THRESHOLD = 0)] = 'IMPRESSION_THRESHOLD'),
      (e[(e.LARGE_AD_FULL_VIEW_THRESHOLD = 0.3)] =
        'LARGE_AD_FULL_VIEW_THRESHOLD'),
      (e[(e.VIEWABILITY_THRESHOLD = 0.5)] = 'VIEWABILITY_THRESHOLD'),
      (e[(e.EIGHTY_VIEWABILITY_THRESHOLD = 0.8)] =
        'EIGHTY_VIEWABILITY_THRESHOLD'),
      (e[(e.FULL_VIEWABILITY_THRESHOLD = 0.999)] =
        'FULL_VIEWABILITY_THRESHOLD'),
      (e[(e.VISIBILITY_THRESHOLD = 0.01)] = 'VISIBILITY_THRESHOLD');
  })(pa || (pa = {}));
const ma = [
  pa.IMPRESSION_THRESHOLD,
  pa.LARGE_AD_FULL_VIEW_THRESHOLD,
  pa.VIEWABILITY_THRESHOLD,
  pa.EIGHTY_VIEWABILITY_THRESHOLD,
  pa.FULL_VIEWABILITY_THRESHOLD
];
var ua, ha;
!(function (e) {
  (e[(e.IMPRESSION_TIME = 0)] = 'IMPRESSION_TIME'),
    (e[(e.VIEWABILITY_TIME = 1e3)] = 'VIEWABILITY_TIME'),
    (e[(e.VENDOR_VIEWABILITY_TIME = 100)] = 'VENDOR_VIEWABILITY_TIME'),
    (e[(e.VIDEO_VIEWABILITY_TIME = 2e3)] = 'VIDEO_VIEWABILITY_TIME'),
    (e[(e.VIDEO_FULL_VIEWABILITY_TIME = 3e3)] = 'VIDEO_FULL_VIEWABILITY_TIME'),
    (e[(e.VENDOR_VIEWABILITY_TIME_5 = 5e3)] = 'VENDOR_VIEWABILITY_TIME_5'),
    (e[(e.VENDOR_VIEWABILITY_TIME_15 = 15e3)] = 'VENDOR_VIEWABILITY_TIME_15');
})(ua || (ua = {})),
  (function (e) {
    (e[(e.VIDEO_WATCHED_SECONDS_3 = 3e3)] = 'VIDEO_WATCHED_SECONDS_3'),
      (e[(e.VIDEO_WATCHED_SECONDS_5 = 5e3)] = 'VIDEO_WATCHED_SECONDS_5'),
      (e[(e.VIDEO_WATCHED_SECONDS_10 = 1e4)] = 'VIDEO_WATCHED_SECONDS_10');
  })(ha || (ha = {}));
const ga = [
  {
    pixelEvent: ca.VIDEO_VIEWABLE_IMPRESSION,
    threshold: pa.VIEWABILITY_THRESHOLD,
    time: ua.VIDEO_VIEWABILITY_TIME
  },
  {
    pixelEvent: ca.VIDEO_FULLY_VIEWABLE_IMPRESSION,
    threshold: pa.FULL_VIEWABILITY_THRESHOLD,
    time: ua.VIDEO_FULL_VIEWABILITY_TIME
  }
];
var ba;
function xa(e) {
  return void 0 !== e.pixelEvent;
}
!(function (e) {
  (e.VIDEO_STATE_Q0 = 'VIDEO_STATE_Q0'),
    (e.VIDEO_STATE_Q1 = 'VIDEO_STATE_Q1'),
    (e.VIDEO_STATE_Q2 = 'VIDEO_STATE_Q2'),
    (e.VIDEO_STATE_Q3 = 'VIDEO_STATE_Q3'),
    (e.VIDEO_STATE_Q4 = 'VIDEO_STATE_Q4');
})(ba || (ba = {}));
const va = [
    { timePercent: 0, quartileKey: ba.VIDEO_STATE_Q0 },
    {
      pixelEvent: ca.VIDEO_WATCHED_25,
      timePercent: 0.25,
      quartileKey: ba.VIDEO_STATE_Q1
    },
    {
      pixelEvent: ca.VIDEO_WATCHED_50,
      timePercent: 0.5,
      quartileKey: ba.VIDEO_STATE_Q2
    },
    {
      pixelEvent: ca.VIDEO_WATCHED_75,
      timePercent: 0.75,
      quartileKey: ba.VIDEO_STATE_Q3
    },
    { pixelEvent: ca.VIDEO_WATCHED_95, timePercent: 0.95 },
    {
      pixelEvent: ca.VIDEO_WATCHED_100,
      timePercent: 1,
      quartileKey: ba.VIDEO_STATE_Q4
    }
  ],
  wa = [
    {
      pixelEvent: ca.VIDEO_WATCHED_3_SECS,
      time: ha.VIDEO_WATCHED_SECONDS_3,
      timePercent: 0.95
    },
    {
      pixelEvent: ca.VIDEO_WATCHED_5_SECS,
      time: ha.VIDEO_WATCHED_SECONDS_5,
      timePercent: 0.95
    },
    {
      pixelEvent: ca.VIDEO_WATCHED_10_SECS,
      time: ha.VIDEO_WATCHED_SECONDS_10,
      timePercent: 0.95
    }
  ];
var fa, ya;
!(function (e) {
  (e.DISPLAY = 'display'), (e.VIDEO = 'video');
})(fa || (fa = {})),
  (function (e) {
    (e[(e.NO_EVENT = 0)] = 'NO_EVENT'),
      (e[(e.NOT_VISIBLE_NOT_AUDIBLE = 1)] = 'NOT_VISIBLE_NOT_AUDIBLE'),
      (e[(e.VISIBLE_NOT_AUDIBLE = 2)] = 'VISIBLE_NOT_AUDIBLE'),
      (e[(e.AUDIBLE_NOT_VISIBLE = 3)] = 'AUDIBLE_NOT_VISIBLE'),
      (e[(e.VISIBLE_AND_AUDIBLE = 4)] = 'VISIBLE_AND_AUDIBLE');
  })(ya || (ya = {}));
var _a, Ea, Sa, ka, Ta;
!(function (e) {
  (e.ANY_TOTAL_VIEW_TIME = 'a'),
    (e.FIFTY_TOTAL_VIEW_TIME = 'b'),
    (e.EIGHTY_TOTAL_VIEW_TIME = 'be'),
    (e.FULL_TOTAL_VIEW_TIME = 'c'),
    (e.ANY_CONTINUOUS_VIEW_TIME = 'd'),
    (e.FIFTY_CONTINUOUS_VIEW_TIME = 'e'),
    (e.THIRTY_CONTINUOUS_VIEW_TIME = 'ea'),
    (e.EIGHTY_CONTINUOUS_VIEW_TIME = 'eb'),
    (e.FULL_CONTINUOUS_VIEW_TIME = 'f'),
    (e.GLOBAL_COUNT = 'r'),
    (e.GROUP_M_VIEWABLE = 'g'),
    (e.AD_LOAD_TIME = 'i'),
    (e.TIMESTAMP = 't'),
    (e.WAS_EVER_VIEWABLE = 'o'),
    (e.PRODUCT_ID = 'p'),
    (e.LARGE_AD_FULL_VIEW = 'q'),
    (e.HEIGHT = 'h'),
    (e.WIDTH = 'w'),
    (e.SCREEN_HEIGHT = 'sh'),
    (e.SCREEN_WIDTH = 'sw'),
    (e.TEST_ID = 'ti');
})(_a || (_a = {})),
  (function (e) {
    (e.IMAGE = 'image'),
      (e.VIDEO = 'video'),
      (e.GALLERY = 'gallery'),
      (e.TEXT = 'text'),
      (e.BLANK = 'blank'),
      (e.SHOPPING_SINGLE_PRODUCT = 'shopping_single_product'),
      (e.SHOPPING_MULTI_PRODUCT = 'shopping_multi_product'),
      (e.PROMOTED_COMMUNITY_POST = 'promoted_community_post'),
      (e.PROMOTED_USER_POST = 'promoted_user_post'),
      (e.RBL_SURVEY = 'rbl_survey'),
      (e.LEAD_GENERATION = 'lead_generation'),
      (e.UNSUPPORTED = 'unsupported');
  })(Ea || (Ea = {})),
  (function (e) {
    (e[(e.IMAGE = 0)] = 'IMAGE'),
      (e[(e.TEXT = 1)] = 'TEXT'),
      (e[(e.VIDEO = 2)] = 'VIDEO'),
      (e[(e.PRODUCT = 3)] = 'PRODUCT'),
      (e[(e.ORGANIC_CONTENT = 4)] = 'ORGANIC_CONTENT');
  })(Sa || (Sa = {})),
  (function (e) {
    (e.LEAD_GEN = 'lead-gen'), (e.STANDARD = 'standard');
  })(ka || (ka = {})),
  (function (e) {
    (e.UNKNOWN = 'unknown'),
      (e.TITLE = 'title'),
      (e.USERNAME = 'username'),
      (e.MEDIA = 'media'),
      (e.TEXT_BODY = 'text_body'),
      (e.BACKGROUND = 'background'),
      (e.CTA_DESTINATION_URL = 'cta_destination_url'),
      (e.CTA_BUTTON = 'cta_button'),
      (e.CTA_WHITESPACE = 'cta_whitespace'),
      (e.CTA_CAPTION = 'cta_caption'),
      (e.VIDEO_CTA = 'video_cta'),
      (e.PRODUCT_NAME = 'product_name'),
      (e.PRODUCT_INFO = 'product_info'),
      (e.PRODUCT_INFO_STRIKETHROUGH = 'product_info_strikethrough');
  })(Ta || (Ta = {}));
const Ia = 'lead-gen-dialog',
  Ca = 'promote-post-modal',
  Aa = '/svc/shreddit/promote-post-modal-estimated-views',
  Pa = '/svc/shreddit/promote-post-modal-preview',
  Ra = '/svc/shreddit/promote-post-payment-authorization',
  Oa = 'promote-post-insights-panel',
  Na = '';
var Da;
!(function (e) {
  (e.IS_VIDEO_AD = 'va'),
    (e.TOTAL_MRC_VIEWABLE_TIME = 'vb'),
    (e.VIDEO_AD_DURATION = 'vc'),
    (e.TOTAL_PLAY_TIME = 'vd'),
    (e.VOLUME = 've'),
    (e.IS_VISIBLE = 'vg'),
    (e.VIDEO_HEIGHT = 'vh'),
    (e.TOTAL_AUDIBLE_TIME = 'vi'),
    (e.VIDEO_WIDTH = 'vw'),
    (e.WAS_FULL_SCREEN = 'vq'),
    (e.HALF_DURATION_80_IN_VIEW_AUDIBLE = 'vr'),
    (e.VIDEO_STATE_Q0 = 'vs'),
    (e.VIDEO_STATE_Q1 = 'vt'),
    (e.VIDEO_STATE_Q2 = 'vu'),
    (e.VIDEO_STATE_Q3 = 'vv'),
    (e.VIDEO_STATE_Q4 = 'vx'),
    (e.FULL_IN_VIEW_AUDIBLE_TIME = 'vy'),
    (e.FULL_IN_VIEW_TIME = 'vz'),
    (e.WAS_FULL_IN_VIEW_1SEC = 'xa'),
    (e.ANY_CONTINUOUS_VIDEO_VIEW_TIME = 'xf'),
    (e.FIFTY_CONTINUOUS_VIDEO_VIEW_TIME = 'xb'),
    (e.FULL_CONTINUOUS_VIDEO_VIEW_TIME = 'vf'),
    (e.EIGHTY_TOTAL_VIDEO_VIEW_TIME = 'xe'),
    (e.HAS_SEEKED = 'xc');
})(Da || (Da = {}));
const La = (e) =>
    e.reduce(
      (e, t) => (
        (e[t] = {
          maxContinuousTime: 0,
          currentContinuousTime: 0,
          totalTime: 0
        }),
        e
      ),
      {}
    ),
  Ma = [
    {
      key: 'TOTAL_MRC_VIEWABLE_TIME',
      playing: !0,
      threshold: pa.VIEWABILITY_THRESHOLD
    },
    { key: 'TOTAL_AUDIBLE_TIME', playing: !0, threshold: 0, withSound: !0 },
    {
      key: 'HALF_DURATION_80_IN_VIEW_AUDIBLE',
      playing: !0,
      withSound: !0,
      threshold: pa.EIGHTY_VIEWABILITY_THRESHOLD
    },
    {
      key: 'FULL_IN_VIEW_AUDIBLE_TIME',
      playing: !0,
      threshold: pa.FULL_VIEWABILITY_THRESHOLD,
      withSound: !0
    },
    {
      key: 'FULL_IN_VIEW_TIME',
      playing: !0,
      threshold: pa.FULL_VIEWABILITY_THRESHOLD
    },
    {
      key: 'ANY_IN_VIEW_TIME',
      playing: !0,
      threshold: pa.VISIBILITY_THRESHOLD
    },
    {
      key: 'FIFTY_IN_VIEW_TIME',
      playing: !0,
      threshold: pa.VIEWABILITY_THRESHOLD
    },
    {
      key: 'EIGHTY_IN_VIEW_TIME',
      playing: !0,
      threshold: pa.EIGHTY_VIEWABILITY_THRESHOLD
    }
  ];
function Ua(e, t) {
  const n = new URL(e);
  return (
    Object.entries(t).forEach(([e, t]) => {
      n.searchParams.set(e, String(t));
    }),
    n.toString()
  );
}
const Fa = Ma.map((e) => e.key);
function Va(e) {
  const t = new Map();
  return (
    e.forEach((e) => {
      const n = t.get(e.type) || [];
      n.push(e.url), t.set(e.type, n);
    }),
    t
  );
}
const Ba = new (class {
  constructor() {
    (this.postUnloadQueue = []),
      (this.postUnloadQueueData = new Map()),
      (this.deviceType = Zn.MOBILE),
      (this.removeFromUnloadQueue = (e, t) => {
        const n = t || this.postUnloadQueueData.get(e);
        clearTimeout(n?.timer), this.postUnloadQueueData.delete(e);
        this.postUnloadQueue.indexOf(e) > -1 &&
          this.postUnloadQueue.splice(this.postUnloadQueue.indexOf(e), 1);
      }),
      (this.queuePostForUnload = (e, t) => {
        if (
          !this.postUnloadQueue.some((t) => t === e) &&
          this.postEvents.get(e)?.get(ca.UNLOAD) &&
          (this.postUnloadQueueData.set(e, {
            getMetadata: t,
            timer: setTimeout(() => {
              this.firePixel({
                postId: e,
                pixelEventType: ca.UNLOAD,
                metadata: t()
              }),
                this.removeFromUnloadQueue(e);
            }, 6e5)
          }),
          this.postUnloadQueue.push(e),
          this.postUnloadQueue.length > 5)
        ) {
          const e = this.postUnloadQueue.shift();
          if (e) {
            const t = this.postUnloadQueueData.get(e);
            this.firePixel({
              postId: e,
              pixelEventType: ca.UNLOAD,
              metadata: t?.getMetadata()
            }),
              this.removeFromUnloadQueue(e, t);
          }
        }
      }),
      (this.postPixels = new Map()),
      (this.firedPixels = new Set()),
      (this.postEvents = new Map()),
      (this.galleryData = new Map());
  }
  _resetFiredPixels() {
    (this.firedPixels = new Set()),
      (this.postPixels = new Map()),
      (this.postUnloadQueue = []);
  }
  updateEvents(e, t, n) {
    this.postEvents.set(e, Va(t)),
      n &&
        this.galleryData.set(
          e,
          n.map((e) => Va(e.adEvents))
        );
  }
  observeImpressionTracker() {
    const e =
      this.deviceType === Zn.DESKTOP ? 'shreddit_desktop' : 'shreddit_mobile';
    ta({
      type: Bo.Counter,
      name: 'ads_third_party_impression_tracker_total',
      value: 1,
      labels: { client_platform: e }
    });
  }
  getGalleryUrls(e, t, n) {
    const r = void 0 === n && t === ca.IMPRESSION,
      o = r ? 0 : n;
    if (void 0 === o) return;
    const a = r ? ca.GALLERY_ITEM_IMPRESSION : t,
      i = this.galleryData.get(e) || [];
    return (i[o] && i[o].get(a)?.map((e) => ({ url: e, type: a }))) || [];
  }
  firePixelsFromEvents(e, t, n) {
    const r = [];
    return (
      e.forEach((e) => {
        const { url: o, type: a } = e;
        if (!o || this.firedPixels.has(o)) return;
        const i = !aa(o);
        this.firedPixels.add(o),
          i ||
            this.postPixels.set(t, {
              ...(this.postPixels.get(t) || {}),
              [o]: { pixelType: ca[a], metadata: n }
            });
        const s = new Image();
        let d = o;
        n && !i && (d = Ua(d, n)),
          (s.src = d),
          r.push(d),
          this.fireDebugPixel({
            pixel: d,
            pixelEvent: { url: o, type: a, metadata: i ? void 0 : n },
            postId: t
          }),
          i && a === ca.IMPRESSION && this.observeImpressionTracker();
      }),
      r
    );
  }
  fireDebugPixel(e) {
    const t = k('pixelFired', e);
    window.dispatchEvent(t);
  }
  firePixel({ pixelEventType: e, postId: t, galleryIndex: n, metadata: r }) {
    const o =
      this.postEvents
        .get(t)
        ?.get(e)
        ?.map((t) => ({ url: t, type: e })) || [];
    if (this.galleryData.has(t)) {
      const r = this.getGalleryUrls(t, e, n) || [];
      o.push(...r);
    }
    return this.firePixelsFromEvents(o, t, r);
  }
  fireQueuedUnloadPixels() {
    this.postUnloadQueue.forEach((e) => {
      const t = this.postUnloadQueueData.get(e);
      this.firePixel({
        postId: e,
        pixelEventType: ca.UNLOAD,
        metadata: t?.getMetadata()
      }),
        this.removeFromUnloadQueue(e, t);
    });
  }
})();
class Wa {
  constructor(e) {
    (this.sendPageVisitEvent = async () => {
      const { isAcceptableAdsEnabled: e, isAdblockEnabled: t } = await ur(),
        n = this.getQueryParamVal(t, e);
      fetch(`/svc/shreddit/styling-overrides/${`?context=${n}`}`);
    }),
      (this.host = e),
      this.host.addController(this),
      requestAnimationFrame(this.sendPageVisitEvent);
  }
  getQueryParamVal(e, t) {
    return e && t ? 'scoped' : e && !t ? 'local' : 'namespaced';
  }
  hostConnected() {
    window.addEventListener('afterRoute', this.sendPageVisitEvent);
  }
  hostDisconnected() {
    window.removeEventListener('afterRoute', this.sendPageVisitEvent);
  }
}
async function Ha(e, t) {
  const { isAcceptableAdsEnabled: n, isAdblockEnabled: r } = await ur();
  return {
    adblock: r ? 'adblock_enabled' : 'adblock_disabled',
    acceptable_ads: n ? 'acceptable_ads_allowed' : 'acceptable_ads_not_allowed',
    auth_state: e ? 'logged_in' : 'logged_out',
    client_platform: t === Zn.DESKTOP ? 'shredtop' : 'mweb3x'
  };
}
class Ga {
  constructor(e) {
    (this.firstPageLandEventSent = !1),
      (this.host = e),
      this.host.addController(this),
      (this.sendW3Report = this.sendW3Report.bind(this));
  }
  async sendW3Report() {
    const e = await this.host._w3Reporter.getW3ReportSender();
    await e({
      name: 'ads_adblock_detection',
      type: Bo.Counter,
      value: 1,
      labels: await Ha(this.host.isUserLoggedIn, this.host.deviceType)
    });
  }
  hostConnected() {
    this.firstPageLandEventSent ||
      (this.sendW3Report(), (this.firstPageLandEventSent = !0)),
      window.addEventListener('afterRoute', this.sendW3Report);
  }
  hostDisconnected() {
    window.removeEventListener('afterRoute', this.sendW3Report);
  }
}
const Ya = 'over18',
  za = 'search_over18',
  ja = 'pref_gated_sr_optin',
  qa = 'pref_quarantine_optin',
  $a = 'theme',
  Xa = { expires: 365, httpOnly: !1 },
  Ka = { expires: 730, httpOnly: !1 },
  Qa = 'compact',
  Ja = 'mod_mode_enabled',
  Za = (e) => `${e}_recentclicks3`,
  ei = 'reddit_translation_status',
  ti = 'reddit_chat_view',
  ni = 'reddit_chat_path';
let ri,
  oi,
  ai,
  ii = !1,
  si = Promise.resolve();
function di(e) {
  let t = e;
  for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
    t = t.shadowRoot.activeElement;
  return t;
}
function li() {
  const e = document.activeElement;
  return e ? di(e) : null;
}
function ci() {
  const e = li();
  return e instanceof HTMLElement ? e : null;
}
function pi() {
  return si;
}
function mi(e) {
  const t = e.hasAttribute('tabindex');
  e.blur(),
    t || e.setAttribute('tabindex', '0'),
    e.focus(),
    t || e.removeAttribute('tabindex');
}
function ui(e) {
  ii ||
    ((ii = !0),
    mi(e),
    (si = new Promise((t) => {
      setTimeout(() => {
        const n = li();
        e !== n && mi(e), (ii = !1), t();
      });
    })));
}
function hi(e) {
  return (
    e.hasAttribute('hidden') ||
    (e.hasAttribute('aria-hidden') &&
      'false' !== e.getAttribute('aria-hidden')) ||
    'none' === e.style.display ||
    '0' === e.style.opacity ||
    'hidden' === e.style.visibility ||
    'collapse' === e.style.visibility
  );
}
function gi(e) {
  return (
    '-1' !== e.getAttribute('tabindex') &&
    !hi(e) &&
    !(function (e) {
      return (
        e.hasAttribute('disabled') ||
        (e.hasAttribute('aria-disabled') &&
          'false' !== e.getAttribute('aria-disabled'))
      );
    })(e) &&
    (e.hasAttribute('tabindex') ||
      ((e instanceof HTMLAnchorElement || e instanceof HTMLAreaElement) &&
        e.hasAttribute('href')) ||
      e instanceof HTMLButtonElement ||
      e instanceof HTMLInputElement ||
      e instanceof HTMLTextAreaElement ||
      e instanceof HTMLSelectElement ||
      e instanceof HTMLIFrameElement)
  );
}
class bi extends class {
  constructor(e) {
    (this._focusableElements = null),
      (this._firstFocusable = null),
      (this._lastFocusable = null),
      (this._savedFocusable = null),
      (this._target = e);
  }
  get size() {
    var e;
    return (
      (null === (e = this._focusableElements) || void 0 === e
        ? void 0
        : e.size) || 0
    );
  }
  get first() {
    return this._firstFocusable;
  }
  get last() {
    return this._lastFocusable;
  }
  _focusTarget(e) {
    var t;
    return e
      ? (ui(e), !0)
      : (null === (t = ci()) || void 0 === t || t.blur(), !1);
  }
  _getActiveInternalElement() {
    if (!this._focusableElements) return null;
    const e = ci();
    return e && this._focusableElements.has(e) ? e : null;
  }
  has(e) {
    var t;
    return (
      (null === (t = this._focusableElements) || void 0 === t
        ? void 0
        : t.has(e)) || !1
    );
  }
  refresh() {
    const e = xi({ root: this._target, skipNode: hi, isMatch: gi });
    (this._firstFocusable = e[0]),
      (this._lastFocusable = e[e.length - 1]),
      (this._focusableElements = new Set(e));
  }
  focus() {
    if (this._focusableElements)
      for (const e of this._focusableElements)
        if (e.autofocus) return this._focusTarget(e);
    return this._focusTarget(this._firstFocusable);
  }
  blur() {
    var e;
    null === (e = this._savedFocusable) || void 0 === e || e.blur();
  }
  focusFirst() {
    return this._focusTarget(this._firstFocusable);
  }
  focusLast() {
    return this._focusTarget(this._lastFocusable);
  }
  saveFocus() {
    this._savedFocusable = this._getActiveInternalElement();
  }
  restoreFocus() {
    this._focusTarget(this._savedFocusable);
  }
} {
  constructor(e, t) {
    super(t), e.addController(this);
  }
  hostConnected() {
    this.refresh();
  }
}
function xi({
  root: e,
  skipNode: t,
  isMatch: n,
  maxDepth: r = 20,
  depth: o = 0
}) {
  const a = [];
  if (o >= r) return a;
  const i = (e) => {
      const a = e.assignedNodes().filter((e) => 1 === e.nodeType);
      if (a.length > 0) {
        return xi({
          root: a[0].parentElement,
          skipNode: t,
          isMatch: n,
          maxDepth: r,
          depth: o + 1
        });
      }
      return [];
    },
    s = Array.from(e.children || []);
  for (const e of s)
    t(e) ||
      (n(e) && a.push(e),
      null != e.shadowRoot
        ? a.push(
            ...xi({
              root: e.shadowRoot,
              skipNode: t,
              isMatch: n,
              maxDepth: r,
              depth: o + 1
            })
          )
        : 'SLOT' === e.tagName
          ? a.push(...i(e))
          : a.push(
              ...xi({
                root: e,
                skipNode: t,
                isMatch: n,
                maxDepth: r,
                depth: o + 1
              })
            ));
  return a;
}
class vi {
  constructor(e) {
    (this._opts = e), (this._frames = []);
  }
  get top() {
    return this._frames[this._frames.length - 1];
  }
  add(e) {
    const t = this.top;
    this._frames.push(e),
      t
        ? this._opts.framePaused && this._opts.framePaused(t)
        : this._opts.stackEntered && this._opts.stackEntered(e),
      this._opts.frameAdded && this._opts.frameAdded(e);
  }
  _pop() {
    const e = this._frames.pop();
    if (!e) return;
    const t = this.top;
    this._opts.frameRemoved && this._opts.frameRemoved(e),
      t
        ? this._opts.frameResumed && this._opts.frameResumed(t)
        : this._opts.stackExited && this._opts.stackExited(e);
  }
  remove(e) {
    const t = this._frames.indexOf(e);
    t < 0 ||
      (t === this._frames.length - 1
        ? this._pop()
        : (this._frames.splice(t, 1),
          this._opts.frameRemoved && this._opts.frameRemoved(e)));
  }
}
const wi = new vi({
    stackEntered() {
      document.body.style.pointerEvents &&
        (ri = document.body.style.pointerEvents),
        (document.body.style.pointerEvents = 'none'),
        document.body.style.overflow && (oi = document.body.style.overflow),
        (document.body.style.overflow = 'hidden');
    },
    stackExited() {
      ri
        ? (document.body.style.pointerEvents = ri)
        : document.body.style.removeProperty('pointer-events'),
        oi
          ? (document.body.style.overflow = oi)
          : document.body.style.removeProperty('overflow');
    }
  }),
  fi = new vi({
    stackEntered() {
      (ai = ci()),
        window.addEventListener('keydown', yi),
        window.addEventListener('focusin', _i);
    },
    stackExited(e) {
      ai ? ui(ai) : e.blur(),
        window.removeEventListener('keydown', yi),
        window.removeEventListener('focusin', _i);
    },
    frameAdded(e) {
      (e.inFocusTrap = !0), e.focusManager.refresh(), e.focusManager.focus();
    },
    frameRemoved(e) {
      e.inFocusTrap = !1;
    },
    framePaused(e) {
      e.focusManager.saveFocus();
    },
    frameResumed(e) {
      e.focusManager.restoreFocus();
    }
  });
function yi(e) {
  const t = fi.top;
  t &&
    ('Escape' === e.key
      ? t.blocking || (e.stopPropagation(), t.close())
      : (function (e, t) {
          if ('Tab' !== e.key) return;
          if (t.focusManager.size < 1) return e.preventDefault();
          const n = ci();
          if (!n) return;
          if (1 === t.focusManager.size && n === t.focusManager.first)
            return e.preventDefault();
          if (e.shiftKey) {
            if (n === t.focusManager.first)
              t.focusManager.focusLast(), e.preventDefault();
          } else if (n === t.focusManager.last)
            t.focusManager.focusFirst(), e.preventDefault();
        })(e, t));
}
function _i(e) {
  const t = fi.top;
  t &&
    (function (e, t) {
      const n = ci();
      if (!n || n === t) return;
      if (t.focusManager.has(n)) return;
      t.focusManager.focusFirst() && e.preventDefault();
    })(e, t);
}
const Ei = s` <style>:host{top:50%;transform:translateY(-50%);position:fixed}</style> `,
  Si = s` <style>:host{position:absolute}</style> `;
let ki = class extends w {
  constructor() {
    super(...arguments),
      (this.focusManager = new bi(this, this)),
      (this.open = !1),
      (this.blocking = !1),
      (this.returnValue = ''),
      (this.modal = !1),
      (this._inFocusTrap = !1);
  }
  get inFocusTrap() {
    return this._inFocusTrap;
  }
  set inFocusTrap(e) {
    if (this._inFocusTrap !== e)
      if (((this._inFocusTrap = e), e)) {
        const e = window.getComputedStyle(this).boxShadow;
        e &&
          ((this.dataset.faceplateDialogPreviousShadow = e),
          (this.style.boxShadow = `${e}, 0 0 0 max(100vw, 100vh) var(--color-scrim)`));
      } else
        this.dataset.faceplateDialogPreviousShadow
          ? (this.style.boxShadow = this.dataset.faceplateDialogPreviousShadow)
          : this.style.removeProperty('boxShadow');
  }
  get isFocusEnabled() {
    return this === fi.top;
  }
  disconnectedCallback() {
    this.modal && fi.remove(this);
  }
  close(e) {
    void 0 !== e && (this.returnValue = e);
    const t = k('faceplate-close');
    this.dispatchEvent(t),
      t.defaultPrevented || ((this.open = !1), this.modal && fi.remove(this));
  }
  show() {
    (this.modal = !1), (this.open = !0), this.focusManager.focus();
  }
  showModal() {
    if (this.open)
      throw new Error(
        'The element already has an "open" attribute, and therefore cannot be opened modally'
      );
    (this.modal = !0), (this.open = !0), fi.add(this);
  }
  static get styles() {
    return i`:host{display:none;left:0;right:0;width:-moz-fit-content;width:fit-content;background:var(--color-ui-modalbackground);border-radius:4px;margin:auto;padding:1rem;box-shadow:var(--boxshadow-modal);pointer-events:all;max-width:95vw;max-height:95vh;overflow:auto}:host([open]){display:block;z-index:1}.backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1}`;
  }
  render() {
    return s` ${this.modal ? Ei : Si} <div class="${this.modal ? 'backdrop' : ''}" role="${d(this.open ? 'dialog' : void 0)}" aria-modal="${d(this.open && this.modal ? 'true' : void 0)}"></div> <slot></slot> `;
  }
};
e([n({ type: Boolean, reflect: !0 })], ki.prototype, 'open', void 0),
  e([n({ type: Boolean })], ki.prototype, 'blocking', void 0),
  e([n({ type: Boolean, attribute: !1 })], ki.prototype, 'modal', void 0),
  e([x()], ki.prototype, 'inFocusTrap', null),
  (ki = e([g('faceplate-dialog')], ki));
let Ti = class extends w {
  static get styles() {
    return i`:host{clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}`;
  }
  render() {
    return s` <slot></slot> `;
  }
};
Ti = e([g('faceplate-screen-reader-content')], Ti);
const Ii = 'first-comment-updated';
var Ci;
!(function (e) {
  (e.VALID = 'valid'),
    (e.INVALID = 'invalid'),
    (e.NO_SCHEMA = 'no-schema'),
    (e.UNKNOWN = 'unknown');
})(Ci || (Ci = {}));
let Ai = () => [Ci.UNKNOWN, null];
const Pi = (e) => {
    Ai = e;
  },
  Ri = 'on-load-embed',
  Oi = 'on-embed-clicked',
  Ni = 'on-embed-entrypoint-clicked',
  Di = 'on-embed-entrypoint-viewed',
  Li = 'resize.embed';
function Mi(e, t = 0, n = { leading: !1, trailing: !0 }) {
  let r,
    o = !1;
  return function (...a) {
    r && clearTimeout(r),
      n.leading && !r ? (e.apply(this, a), (o = !0)) : (o = !1),
      (r = setTimeout(() => {
        n.trailing && !o && e.apply(this, a), (r = null);
      }, t));
  };
}
const Ui = Symbol.for('mixins/with-viewport-height');
const Fi = 'logged-in',
  Vi = 'translation-context',
  Bi = {
    shouldDisplayCoachmark: !0,
    coachmarkDisplayCount: 0,
    showCommentTranslationModal: !0,
    showPostTranslationModal: !0
  },
  Wi = (e) => {
    const t = e;
    return !(
      !t ||
      'object' != typeof t ||
      (void 0 !== t.isTranslationActive &&
        'boolean' != typeof t.isTranslationActive) ||
      'boolean' != typeof t.shouldDisplayCoachmark ||
      'number' != typeof t.coachmarkDisplayCount ||
      (void 0 !== t.isSearchTranslationsEnabled &&
        'boolean' != typeof t.isSearchTranslationsEnabled) ||
      (void 0 !== t.showCommentTranslationModal &&
        'boolean' != typeof t.showCommentTranslationModal) ||
      (void 0 !== t.showPostTranslationModal &&
        'boolean' != typeof t.showPostTranslationModal)
    );
  };
var Hi;
!(function (e) {
  (e.Control1 = 'control_1'), (e.Control2 = 'control_2');
})(Hi || (Hi = {}));
const Gi = (e) =>
  !!((e) => {
    if (e !== Hi.Control1 && e !== Hi.Control2) return e || void 0;
  })(e);
function Yi(e) {
  if (window?.CLIENT_EXPERIMENTS) return window?.CLIENT_EXPERIMENTS?.[e];
}
function zi(e) {
  const t = Yi(e);
  return Gi(t);
}
const ji = 'shreddit_recaptcha_comment_create',
  qi = 'shreddit_uxts_integration_actions';
var $i;
!(function (e) {
  (e.shreddit_on_mount = 'shreddit_on_mount'),
    (e.shreddit_on_load = 'shreddit_on_load'),
    (e.control = 'control_1');
})($i || ($i = {}));
const Xi = ['enabled', 'control_1', 'control_2'],
  Ki = (e, t) => {
    const n = new URL(e),
      r = new URLSearchParams(n.search),
      o = t.filter(([e]) => !r.has(e));
    if (o.length)
      return o.forEach((e) => r.set(...e)), (n.search = r.toString()), n.href;
  };
let Qi = window.fetch,
  Ji = null,
  Zi = [],
  es = new Map();
const ts = 'time-to-first-byte',
  ns = 'first-contentful-paint';
function rs() {
  const e = Date.now();
  for (const [t, n] of es.entries()) e - n.lastAccessed > 864e5 && es.delete(t);
  if (es.size <= 25) return;
  const t = [...es.entries()].sort(
    (e, t) => e[1].lastAccessed - t[1].lastAccessed
  );
  es.delete(t[0][0]);
}
let os;
const as = [
    /^\/api\/v1\/.+/,
    /^\/svc\/shreddit\/oauth-grant.*/,
    /^\/(login|register|password|username|passwordreset|passwordrecovery)\/?/,
    /^\/avatar\/(claim|shop)/,
    /^\/partner\/(persona|stripe)\/.+/,
    /insights/,
    /^\/settings\/premium/
  ],
  is = [/^\/user\/(?<username>[^/]+)\/display-collectibles\//];
let ss;
class ds {
  constructor(e) {
    var t;
    (this.overrideQueryParams = null),
      (this.navigationIndicator = document.querySelector(
        'navigation-indicator'
      )),
      (this.ignoreNavigations = !1),
      (this.handleNavigate = (e) => {
        console.log(e);
        const { url: t } = e.destination,
          n = new URL(t),
          r = ss.currentEntry?.key ? es.get(ss.currentEntry.key) : void 0;
        let o = !1;
        if (this.ignoreNavigations) return void (this.currentUrl = t);
        if (!e.canIntercept) return;
        if ('reload' === e.navigationType) return;
        if (
          ['push', 'traverse'].includes(e.navigationType) &&
          r?.callbackNavigations
        ) {
          const n = ss.currentEntry.index,
            o = ss.entries().find((t) => t.key === e.destination.key),
            a = o ? ss.entries().indexOf(o) : -1,
            i = -1 !== a,
            s = i && a === n - 1,
            d = i && a === n + 1,
            { onForwardNav: l, onBackNav: c } = r.callbackNavigations;
          if (d && l) return l(), void (this.currentUrl = t);
          if (s && c) return c(), void (this.currentUrl = t);
        }
        if ('replace' === e.navigationType) {
          if (t === this.pendingUrl) return void e.intercept();
          if (t !== this.currentUrl || n.hash || t.endsWith('#')) {
            if (
              this._getLocation() === this.currentUrl ||
              this._getLocation() !== t
            )
              return void (this.currentUrl = t);
            o = !0;
          } else o = !0;
        }
        if (is.some((e) => e.test(n.pathname))) return void e.intercept();
        if (!this.isRoutable(t)) return;
        if (e.hashChange) return;
        if (
          '_blank' ===
          (function (e) {
            const t = e.originalEvent?.composedPath() || [];
            for (const e of t) if ('A' === e.nodeName) return e;
            return;
          })(e)?.target
        )
          return;
        const a = new URL(this.currentUrl || ''),
          i = new URL(t);
        if (((a.hash = ''), (i.hash = ''), !o && i.toString() === a.toString()))
          return void e.intercept();
        if (!ss.currentEntry)
          throw new Error('navigation.currentEntry is null');
        const s = this.lastCompletedNavigationKey || ss.currentEntry.key;
        ss.updateCurrentEntry({ state: { scrollOffset: window.scrollY } }),
          e.intercept({
            handler: async () => {
              let n;
              window.dispatchEvent(new Event('beforeRoute'));
              try {
                n = await this.hybridNavigate(e, s);
              } catch (e) {
                console.log(e?.stack);
              }
              n &&
                (window.dispatchEvent(new Event('afterRoute')),
                (this.lastCompletedNavigationKey = ss.currentEntry?.key),
                (this.currentUrl = t));
            }
          });
      }),
      (this._host = e),
      this._host.addController(this),
      (os = document.querySelector('script[nonce]')?.nonce ?? ''),
      (this.overrideQueryParams =
        ((t = new URL(this._getLocation()).search),
        Array.from(new URLSearchParams(t).entries()).filter(([e, t]) =>
          Xi.includes(t)
        ))),
      (this.currentUrl = this._getLocation());
  }
  replace(e) {
    (this.ignoreNavigations = !0),
      this._replaceState(null, e),
      (this.ignoreNavigations = !1);
  }
  push(e, t = {}) {
    const { onBackNav: n, onForwardNav: r } = t;
    if (ss.currentEntry?.key) {
      const e = es.get(ss.currentEntry.key);
      es.set(ss.currentEntry.key, {
        scrollOffsets: hs(),
        lastAccessed: Date.now(),
        callbackNavigations: { ...e?.callbackNavigations, onForwardNav: r }
      });
    }
    if (
      (r?.(),
      (this.ignoreNavigations = !0),
      this._pushState(null, e),
      (this.ignoreNavigations = !1),
      ss.currentEntry?.key)
    ) {
      const e = es.get(ss.currentEntry.key);
      es.set(ss.currentEntry.key, {
        scrollOffsets: hs(),
        lastAccessed: Date.now(),
        callbackNavigations: { ...e?.callbackNavigations, onBackNav: n }
      });
    }
  }
  async enableHybridNavigation() {
    if (window.navigation) ss = window.navigation;
    else {
      console.log('Navigation API not supported, loading polyfill');
      try {
        const { applyPolyfill: e } = await import(
          './apply-polyfill-e8c061ec.js'
        );
        ss = e();
      } catch {
        console.log('Navigation polyfill failed to initialize.');
      }
    }
    ss.addEventListener('navigate', this.handleNavigate),
      console.log('Navigation listeners online'),
      (this.lastCompletedNavigationKey = ss.currentEntry?.key);
  }
  disableHybridNavigation() {
    window.navigation &&
      ((ss = window.navigation),
      ss.removeEventListener('navigate', this.handleNavigate),
      console.log('Navigation listeners offline'));
  }
  isRoutable(e) {
    const t = new URL(e);
    if (t.host !== window.location.host) return !1;
    if (as.some((e) => e.test(t.pathname))) return !1;
    return !new RegExp('#main-content$').test(e);
  }
  async hybridNavigate(e, t) {
    let n,
      r,
      { url: o } = e.destination;
    const a = performance.now();
    if (o === this.pendingUrl) return;
    this.overrideQueryParams && (o = Ki(o, this.overrideQueryParams) ?? o);
    const i = (this.pendingUrl = o);
    let s;
    for (; (s = fi.top); ) fi.remove(s);
    const d = e.destination.key,
      l = es.get(d);
    if (l) {
      if (!l.fragment)
        return (
          console.log('No DOM for history entry, performing full navigation'),
          (this.pendingUrl = void 0),
          void this.fullNavigateTo(o)
        );
      n = performance.now() - a;
      const e = hs(),
        i = this.replaceDOM(l.fragment, !0),
        s = es.get(t) || {};
      return (
        es.set(t, {
          ...s,
          fragment: i,
          scrollOffsets: e,
          lastAccessed: Date.now()
        }),
        rs(),
        bs(l.scrollOffsets),
        (r = performance.now() - a),
        (this.pendingUrl = void 0),
        this._host.handleWebVitalW3Reporting({ [ts]: n || 1, [ns]: r }, !0),
        !0
      );
    }
    let c;
    this.navigationIndicator?.show?.();
    try {
      c = await this.performRequest(e, a);
    } catch (e) {
      console.error(e),
        'AbortError' !== e?.name && this.navigationIndicator?.hide?.();
    }
    if (e.signal.aborted)
      return (this.pendingUrl = void 0), this.navigationIndicator?.hide?.(), !1;
    if (!c) return (this.pendingUrl = void 0), !1;
    if (i !== this.pendingUrl) return !1;
    (this.pendingUrl = void 0), this.navigationIndicator?.hide?.();
    const p = document.createRange().createContextualFragment(c),
      m = hs();
    window.scroll({ top: 0 });
    const u = this.replaceDOM(p);
    return (
      es.set(t, { fragment: u, scrollOffsets: m, lastAccessed: Date.now() }),
      rs(),
      (r = performance.now() - a),
      this._host.handleWebVitalW3Reporting({ [ns]: r }, !0),
      !0
    );
  }
  async performRequest(e, t) {
    let { url: n } = e.destination;
    this.overrideQueryParams && (n = Ki(n, this.overrideQueryParams) ?? n);
    const r = new AbortController();
    this.currentAbort && this.currentAbort.abort(), (this.currentAbort = r);
    const o = () => r.abort();
    e.signal.addEventListener('abort', o, { once: !0 });
    const a = new URL(n),
      i = setTimeout(() => {
        this.pendingUrl === n && r.abort();
      }, 3e4),
      s = {
        headers: {
          nonce: os,
          clienthash: this._host.clientHash,
          accept: 'text/vnd.reddit.hybrid+html, text/html;q=0.9'
        },
        signal: r.signal
      };
    e.formData && ((s.method = 'POST'), (s.body = e.formData));
    const d = await Qi(a, s);
    if (
      (d.url !== n &&
        window.addEventListener(
          'afterRoute',
          () => {
            (this.pendingUrl = d.url),
              history.replaceState({}, '', d.url),
              (this.pendingUrl = void 0);
          },
          { once: !0 }
        ),
      !d.headers?.has('hybrid-route'))
    )
      return (
        console.log('Not a hybrid response, performing full navigation'),
        this.fullNavigateTo(n),
        clearTimeout(i),
        void this.currentAbort.abort()
      );
    const l = performance.now() - t;
    this._host.handleWebVitalW3Reporting({ [ts]: l }, !0),
      (this.currentAbort = void 0);
    const c = await d.text();
    return clearTimeout(i), e.signal.removeEventListener('abort', o), c;
  }
  replaceDOM(e, t = !1) {
    const n = new DocumentFragment();
    let r, o;
    const a = this.findPersistentElements(this._host),
      i = this.findPersistentElements(e),
      s = new Map([...a.entries()].filter(([e]) => i.has(e))),
      d = gs(s.values());
    this.extractPersistentElements(s), this.insertPersistentElements(e, s);
    const l = [];
    if (
      (this._host.childNodes.forEach((e) => {
        us(e) && ' routable page start ' === e.data
          ? (r = e)
          : us(e) && ' routable page end ' === e.data
            ? (o = e)
            : o || (r && l.push(e));
      }),
      !r || !o)
    )
      throw new Error('Missing boundary comments for DOM replacement');
    for (const e of l) e.remove(), n.appendChild(e);
    return (
      (this._host.screenViewData = {}),
      (this._host.isNavigationControllerRestore = t),
      this._host.insertBefore(e, o),
      bs(d),
      n
    );
  }
  findPersistentElements(e) {
    const t = Array.from(
        e.querySelectorAll(
          '[id][data-persistent], meta[id][data-persistent-placeholder]'
        )
      ),
      n = new Map();
    for (const e of t) n.set(e.id, e);
    return n;
  }
  extractPersistentElements(e) {
    e.forEach((e) => {
      const t = document.createElement('meta');
      (t.id = e.id),
        t.setAttribute('data-persistent-placeholder', ''),
        e.replaceWith(t);
    });
  }
  insertPersistentElements(e, t) {
    const n = this.findPersistentElements(e);
    t.forEach((e) => {
      const t = n.get(e.id);
      t
        ? t.replaceWith(e)
        : console.error(
            `Placeholder or target element missing for <${e.nodeName.toLowerCase()} id="${e.id} data-persistent>`
          );
    }),
      t.clear();
  }
  navigateTo(e) {
    const t = document.createElement('a');
    t.setAttribute('href', e),
      (t.style.display = 'none'),
      document.body.appendChild(t),
      t.click(),
      t.remove();
  }
  fullNavigateTo(e) {
    let t = e.startsWith('/')
      ? `${new URL(window.location.href).origin}${e}`
      : e;
    this.disableHybridNavigation(),
      window.addEventListener('pageshow', this.enableHybridNavigation),
      (t = Ki(t, this.overrideQueryParams ?? []) ?? t),
      this._assignLocation(t);
  }
  _getLocation() {
    return window.location.toString();
  }
  _assignLocation(e) {
    return window.location.assign(e);
  }
  _replaceState(e, t) {
    return history.replaceState(e, '', t);
  }
  _pushState(e, t) {
    return history.pushState(e, '', t);
  }
  _getCurrentURL() {
    return this.currentUrl;
  }
  _getHistoryStateMap() {
    return es;
  }
  hostConnected() {
    if (Ji)
      throw new Error('Only one NavigationController may be active at a time.');
    (Ji = this),
      this.enableHybridNavigation().then(() => this._processActionQueue());
  }
  hostDisconnected() {
    (Ji = null), this.disableHybridNavigation();
  }
  _processActionQueue() {
    for (const e of Zi) {
      const [t, ...n] = e;
      this[t](...n);
    }
    Zi = [];
  }
}
function ls(e) {
  if (Ji) return Ji.replace(e);
  Zi.push(['replace', e]);
}
function cs(e, t = {}) {
  if (Ji) return Ji.push(e, t);
  Zi.push(['push', e, t]);
}
function ps(e) {
  if (Ji) return Ji.fullNavigateTo(e);
  Zi.push(['fullNavigateTo', e]);
}
function ms(e) {
  if (Ji) return Ji.navigateTo(e);
  Zi.push(['navigateTo', e]);
}
function us(e) {
  return e.nodeType === Node.COMMENT_NODE;
}
function hs() {
  const e = gs(Array.from(document.querySelectorAll('[data-scroll-restore]')));
  return e.set(window, { top: window.scrollY, left: window.scrollX }), e;
}
function gs(e) {
  const t = new Map();
  for (const n of e) t.set(n, { top: n.scrollTop, left: n.scrollLeft });
  return t;
}
function bs(e) {
  for (const [t, n] of e) t.scrollTo(n);
}
const xs = Symbol('mixins/with-patched-fetch');
function vs() {
  return (
    !!document.querySelector('.theme-dark') ||
    (!document.querySelector('.theme-light') &&
      matchMedia('(prefers-color-scheme: dark)').matches)
  );
}
var ws;
!(function (e) {
  (e.TIME_TO_FIRST_BYTE = 'time-to-first-byte'),
    (e.FIRST_CONTENTFUL_PAINT = 'first-contentful-paint'),
    (e.LARGEST_CONTENTFUL_PAINT = 'largest-contentful-paint'),
    (e.CUMULATIVE_LAYOUT_SHIFT = 'cumulative-layout-shift'),
    (e.FIRST_POST_MEANINGFUL_PAINT = 'first-post-meaningful-paint'),
    (e.FIRST_COMMENT_MEANINGFUL_PAINT = 'first-comment-meaningful-paint');
})(ws || (ws = {}));
const fs = [ws.FIRST_POST_MEANINGFUL_PAINT, ws.FIRST_COMMENT_MEANINGFUL_PAINT];
var ys;
!(function (e) {
  (e.polite = 'polite'), (e.assertive = 'assertive');
})(ys || (ys = {}));
const _s = (e, t) => {
  e.dispatchEvent(
    new CustomEvent('screen-reader-only-alert', {
      detail: { ...t },
      bubbles: !0
    })
  );
};
class Es extends D {
  constructor(e) {
    super(e),
      (this.alertOutletElement = null),
      (this.events = new I(this, () => window)),
      (this._handleEvent = async (e) => {
        e.stopPropagation();
        const t = this._getAlertOutletElement();
        if (!t) throw Error('No screen-reader-alert-outlet element found.');
        await window.customElements.whenDefined('screen-reader-alert-outlet'),
          t.announce(e.detail);
      }),
      e.addController(this),
      this.events.define('screen-reader-only-alert', this._handleEvent);
  }
  _getAlertOutletElement() {
    return (
      this.alertOutletElement ||
        (this.alertOutletElement = document.querySelector(
          'screen-reader-alert-outlet'
        )),
      this.alertOutletElement
    );
  }
}
var Ss;
async function ks(e = window) {
  const t = new URLSearchParams(e.location.search).get('app_installed');
  if (Object.values(Ss).includes(t)) return t;
  if (
    void 0 === e.navigator ||
    'function' != typeof e.navigator.getInstalledRelatedApps ||
    e !== e.top
  )
    return Ss.Unsupported;
  return void 0 !==
    (await e.navigator.getInstalledRelatedApps()).find(
      (e) => 'com.reddit.frontpage' === e.id
    )
    ? Ss.Installed
    : Ss.NotInstalled;
}
!(function (e) {
  (e.Installed = 'installed'),
    (e.NotInstalled = 'not_installed'),
    (e.Unsupported = 'unsupported');
})(Ss || (Ss = {}));
function Ts() {
  const e = document.querySelector('shreddit-app')?.pageType;
  return e || void 0;
}
var Is;
!(function (e) {
  (e.AchievementCategoryById = 'AchievementCategoryById'),
    (e.AchievementCategoryByIdIdentity = 'AchievementCategoryByIdIdentity'),
    (e.AchievementTrophyById = 'AchievementTrophyById'),
    (e.AdAccounts = 'AdAccounts'),
    (e.AddSubredditWidget = 'AddSubredditWidget'),
    (e.All = 'All'),
    (e.AllChatsPageRecommendations = 'AllChatsPageRecommendations'),
    (e.AllFeedRightRail = 'AllFeedRightRail'),
    (e.AllowlistedRedditorInfo = 'AllowlistedRedditorInfo'),
    (e.ApplyRemovalReason = 'ApplyRemovalReason'),
    (e.ArtistDetails = 'ArtistDetails'),
    (e.AssignFlairUserTypeahead = 'AssignFlairUserTypeahead'),
    (e.AssignUserFlairModal = 'AssignUserFlairModal'),
    (e.AudioRoomById = 'AudioRoomById'),
    (e.AvatarCatalog = 'AvatarCatalog'),
    (e.AvatarPastLooks = 'AvatarPastLooks'),
    (e.AwardGoldPurchaseFromComment = 'AwardGoldPurchaseFromComment'),
    (e.AwardGoldPurchaseFromPost = 'AwardGoldPurchaseFromPost'),
    (e.AwardLeaderboardComment = 'AwardLeaderboardComment'),
    (e.AwardLeaderboardPost = 'AwardLeaderboardPost'),
    (e.AwardOnContentModerationInfo = 'AwardOnContentModerationInfo'),
    (e.AwardSelectionSheetFromComment = 'AwardSelectionSheetFromComment'),
    (e.AwardSelectionSheetFromPost = 'AwardSelectionSheetFromPost'),
    (e.BackupVault = 'BackupVault'),
    (e.BanEvasionSubredditSettings = 'BanEvasionSubredditSettings'),
    (e.BannedUserIdentity = 'BannedUserIdentity'),
    (e.BanSubredditUser = 'BanSubredditUser'),
    (e.BlockedAccounts = 'BlockedAccounts'),
    (e.BoostedPostAdInsights = 'BoostedPostAdInsights'),
    (e.BrandLiftSurveyConfig = 'BrandLiftSurveyConfig'),
    (e.CancelEconRecurringPayment = 'CancelEconRecurringPayment'),
    (e.ChangeStripePaymentMethod = 'ChangeStripePaymentMethod'),
    (e.ChatBadgeIndicator = 'ChatBadgeIndicator'),
    (e.ChatChannelRecommendations = 'ChatChannelRecommendations'),
    (e.ClaimFreeNft = 'ClaimFreeNft'),
    (e.ClearPostFlair = 'ClearPostFlair'),
    (e.ClearUserFlair = 'ClearUserFlair'),
    (e.Comment = 'Comment'),
    (e.CommentForEdit = 'CommentForEdit'),
    (e.CommentForSocialPreview = 'CommentForSocialPreview'),
    (e.CommentModerationInfo = 'CommentModerationInfo'),
    (e.CommentPermalink = 'CommentPermalink'),
    (e.Comments = 'Comments'),
    (e.CommunityName = 'CommunityName'),
    (e.CommunitySearch = 'CommunitySearch'),
    (e.CommunityStatus = 'CommunityStatus'),
    (e.CommunityStatusForEdit = 'CommunityStatusForEdit'),
    (e.CommunitySuggestions = 'CommunitySuggestions'),
    (e.ComposeMessage = 'ComposeMessage'),
    (e.ContextualSignupPrompt = 'ContextualSignupPrompt'),
    (e.ContributorProgramMarketingPage = 'ContributorProgramMarketingPage'),
    (e.ContributorProgramProfilePage = 'ContributorProgramProfilePage'),
    (e.ContributorProgramVerificationModal =
      'ContributorProgramVerificationModal'),
    (e.ConvertMarkdownToRTJSON = 'ConvertMarkdownToRTJSON'),
    (e.ConvertRTJSONToMarkdown = 'ConvertRTJSONToMarkdown'),
    (e.CreateAdAccount = 'CreateAdAccount'),
    (e.CreateAutomation = 'CreateAutomation'),
    (e.CreateAvatar = 'CreateAvatar'),
    (e.CreateAwardOrder = 'CreateAwardOrder'),
    (e.CreateBrandToolsRequest = 'CreateBrandToolsRequest'),
    (e.CreateCaptchaToken = 'CreateCaptchaToken'),
    (e.CreateComment = 'CreateComment'),
    (e.CreateCustomPostSnapshot = 'CreateCustomPostSnapshot'),
    (e.CreateDraft = 'CreateDraft'),
    (e.CreateEconOrder = 'CreateEconOrder'),
    (e.CreateMediaUploadLease = 'CreateMediaUploadLease'),
    (e.CreateModUserNote = 'CreateModUserNote'),
    (e.CreatePaymentIntent = 'CreatePaymentIntent'),
    (e.CreatePayoutAccountOnboardingUrl = 'CreatePayoutAccountOnboardingUrl'),
    (e.CreatePost = 'CreatePost'),
    (e.CreateProfilePost = 'CreateProfilePost'),
    (e.CreateProfileStructuredStylesUploadLease =
      'CreateProfileStructuredStylesUploadLease'),
    (e.CreateScheduledPost = 'CreateScheduledPost'),
    (e.CreateStorefrontOrder = 'CreateStorefrontOrder'),
    (e.CreateSubreddit = 'CreateSubreddit'),
    (e.CreateSubredditRule = 'CreateSubredditRule'),
    (e.CreateSubredditStructuredStylesUploadLease =
      'CreateSubredditStructuredStylesUploadLease'),
    (e.CreateTemporaryEventConfig = 'CreateTemporaryEventConfig'),
    (e.CreateUserFlair = 'CreateUserFlair'),
    (e.CustomFeed = 'CustomFeed'),
    (e.CustomFeedAddSubreddits = 'CustomFeedAddSubreddits'),
    (e.CustomFeedCommunities = 'CustomFeedCommunities'),
    (e.CustomFeedCreate = 'CustomFeedCreate'),
    (e.CustomFeedCurator = 'CustomFeedCurator'),
    (e.CustomFeedDelete = 'CustomFeedDelete'),
    (e.CustomFeedDescription = 'CustomFeedDescription'),
    (e.CustomFeedDetailsForm = 'CustomFeedDetailsForm'),
    (e.CustomFeedPosts = 'CustomFeedPosts'),
    (e.CustomFeedRecommendations = 'CustomFeedRecommendations'),
    (e.CustomFeedRemoveSubreddits = 'CustomFeedRemoveSubreddits'),
    (e.CustomFeedsForUser = 'CustomFeedsForUser'),
    (e.CustomFeedUpdateDetails = 'CustomFeedUpdateDetails'),
    (e.CustomFeedUpdateSubscriptionState = 'CustomFeedUpdateSubscriptionState'),
    (e.DeleteAutomation = 'DeleteAutomation'),
    (e.DeleteComment = 'DeleteComment'),
    (e.DeleteInboxNotifications = 'DeleteInboxNotifications'),
    (e.DeleteModUserNote = 'DeleteModUserNote'),
    (e.DeletePost = 'DeletePost'),
    (e.DeletePostDraft = 'DeletePostDraft'),
    (e.DeleteProfileSocialLinks = 'DeleteProfileSocialLinks'),
    (e.DeleteScheduledPost = 'DeleteScheduledPost'),
    (e.DeleteSubredditFlairTemplate = 'DeleteSubredditFlairTemplate'),
    (e.DeleteSubredditMuteSettings = 'DeleteSubredditMuteSettings'),
    (e.DeleteSubredditRule = 'DeleteSubredditRule'),
    (e.DeleteSubredditWidget = 'DeleteSubredditWidget'),
    (e.DisplayCollectiblesForModal = 'DisplayCollectiblesForModal'),
    (e.DraftAndScheduled = 'DraftAndScheduled'),
    (e.EditAvatar = 'EditAvatar'),
    (e.Embed = 'Embed'),
    (e.EmbedComment = 'EmbedComment'),
    (e.EmbedFeed = 'EmbedFeed'),
    (e.EndPostEvent = 'EndPostEvent'),
    (e.EnrollInStreaks = 'EnrollInStreaks'),
    (e.EstimatedViews = 'EstimatedViews'),
    (e.Experiences = 'Experiences'),
    (e.ExploreFeed = 'ExploreFeed'),
    (e.FeedPost = 'FeedPost'),
    (e.FetchTitle = 'FetchTitle'),
    (e.FlairedRedditorByName = 'FlairedRedditorByName'),
    (e.FlairedRedditors = 'FlairedRedditors'),
    (e.Frontpage = 'Frontpage'),
    (e.GeneralSearch = 'GeneralSearch'),
    (e.GeneratedUsernames = 'GeneratedUsernames'),
    (e.GetAccessoriesBySection = 'GetAccessoriesBySection'),
    (e.GetActiveVaultDetails = 'GetActiveVaultDetails'),
    (e.GetAdBusinessNameById = 'GetAdBusinessNameById'),
    (e.GetArtistNameById = 'GetArtistNameById'),
    (e.GetFreeNftClaimDrops = 'GetFreeNftClaimDrops'),
    (e.GetFundingInstrumentsByAdAccountId =
      'GetFundingInstrumentsByAdAccountId'),
    (e.GetFundingInstrumentSecret = 'GetFundingInstrumentSecret'),
    (e.GetListingById = 'GetListingById'),
    (e.GetNftDetails = 'GetNftDetails'),
    (e.GetPreviousActions = 'GetPreviousActions'),
    (e.GetSingleDynamicConfig = 'GetSingleDynamicConfig'),
    (e.GetVaultRegistrationChallenge = 'GetVaultRegistrationChallenge'),
    (e.HarassingContentSubredditSettings = 'HarassingContentSubredditSettings'),
    (e.HighlightedPosts = 'HighlightedPosts'),
    (e.HomeFeedRightRail = 'HomeFeedRightRail'),
    (e.Identity = 'Identity'),
    (e.IdentityImmersiveTranslationSetting =
      'IdentityImmersiveTranslationSetting'),
    (e.IdentityUserEmail = 'IdentityUserEmail'),
    (e.IdentityUserIcon = 'IdentityUserIcon'),
    (e.IdentityUserName = 'IdentityUserName'),
    (e.IdentityUserPreferences = 'IdentityUserPreferences'),
    (e.IgnoreReports = 'IgnoreReports'),
    (e.InboxBadgeIndicator = 'InboxBadgeIndicator'),
    (e.InterestTopics = 'InterestTopics'),
    (e.IsEmailValidForRegistration = 'IsEmailValidForRegistration'),
    (e.IsUsernameValidForRegistration = 'IsUsernameValidForRegistration'),
    (e.KeywordLandingPage = 'KeywordLandingPage'),
    (e.LeftNavBusinessToolsSection = 'LeftNavBusinessToolsSection'),
    (e.LeftNavCommunitiesSection = 'LeftNavCommunitiesSection'),
    (e.LeftNavModerationSection = 'LeftNavModerationSection'),
    (e.LeftNavMultiredditsSection = 'LeftNavMultiredditsSection'),
    (e.MarkNotificationRead = 'MarkNotificationRead'),
    (e.MarkPrivateMessageAsRead = 'MarkPrivateMessageAsRead'),
    (e.MediaAuthInfo = 'MediaAuthInfo'),
    (e.MediaLinks = 'MediaLinks'),
    (e.ModAchievementsPage = 'ModAchievementsPage'),
    (e.ModActivityPanel = 'ModActivityPanel'),
    (e.ModActivityPreview = 'ModActivityPreview'),
    (e.ModActivityPreviewHovercard = 'ModActivityPreviewHovercard'),
    (e.ModAllSubredditPermissions = 'ModAllSubredditPermissions'),
    (e.ModAuthorFlair = 'ModAuthorFlair'),
    (e.ModAutomationsPage = 'ModAutomationsPage'),
    (e.ModBanInfoForUser = 'ModBanInfoForUser'),
    (e.ModBulkApprove = 'ModBulkApprove'),
    (e.ModBulkIgnore = 'ModBulkIgnore'),
    (e.ModBulkLock = 'ModBulkLock'),
    (e.ModBulkMarkNSFW = 'ModBulkMarkNSFW'),
    (e.ModBulkMarkSpoiler = 'ModBulkMarkSpoiler'),
    (e.ModBulkRemove = 'ModBulkRemove'),
    (e.ModBulkUnignore = 'ModBulkUnignore'),
    (e.ModBulkUnlock = 'ModBulkUnlock'),
    (e.ModBulkUnmarkNSFW = 'ModBulkUnmarkNSFW'),
    (e.ModBulkUnmarkSpoiler = 'ModBulkUnmarkSpoiler'),
    (e.ModBulkUpdatePostFlair = 'ModBulkUpdatePostFlair'),
    (e.ModCommunityChatContentControlPage =
      'ModCommunityChatContentControlPage'),
    (e.ModCommunityChatRequirementsPage = 'ModCommunityChatRequirementsPage'),
    (e.ModGrowthInsightsPage = 'ModGrowthInsightsPage'),
    (e.ModHierarchyPage = 'ModHierarchyPage'),
    (e.ModInsightsModQueueEntrypoint = 'ModInsightsModQueueEntrypoint'),
    (e.ModLogInsightsSummary = 'ModLogInsightsSummary'),
    (e.ModLogItems = 'ModLogItems'),
    (e.ModLogPage = 'ModLogPage'),
    (e.ModMuteInfoForUser = 'ModMuteInfoForUser'),
    (e.ModNotesModActions = 'ModNotesModActions'),
    (e.ModNotesOverview = 'ModNotesOverview'),
    (e.ModNotesRail = 'ModNotesRail'),
    (e.ModPermissions = 'ModPermissions'),
    (e.ModQueue = 'ModQueue'),
    (e.ModQueueItems = 'ModQueueItems'),
    (e.ModQueueMiddleware = 'ModQueueMiddleware'),
    (e.ModRemovalReasons = 'ModRemovalReasons'),
    (e.ModReportsAndRemovalsInsightsPage = 'ModReportsAndRemovalsInsightsPage'),
    (e.ModRulesItems = 'ModRulesItems'),
    (e.ModRulesPage = 'ModRulesPage'),
    (e.ModSafetySubredditSettings = 'ModSafetySubredditSettings'),
    (e.ModSubredditLookAndFeelSettings = 'ModSubredditLookAndFeelSettings'),
    (e.ModTeamHealthInsightsPage = 'ModTeamHealthInsightsPage'),
    (e.ModUserNotes = 'ModUserNotes'),
    (e.ModUserPosts = 'ModUserPosts'),
    (e.ModUserProfileComments = 'ModUserProfileComments'),
    (e.MultiContentReportingSearch = 'MultiContentReportingSearch'),
    (e.MutedSubreddits = 'MutedSubreddits'),
    (e.MuteMember = 'MuteMember'),
    (e.MyModeratedSubreddits = 'MyModeratedSubreddits'),
    (e.NotificationInboxFeed = 'NotificationInboxFeed'),
    (e.NsfwSubreddits = 'NsfwSubreddits'),
    (e.OptInToGatedSubreddit = 'OptInToGatedSubreddit'),
    (e.PDPRightRailRelatedPosts = 'PDPRightRailRelatedPosts'),
    (e.PDPRightRailTopicPosts = 'PDPRightRailTopicPosts'),
    (e.PersonalizedYearInReview = 'PersonalizedYearInReview'),
    (e.Popular = 'Popular'),
    (e.PopularCommunities = 'PopularCommunities'),
    (e.PopularFeedRightRail = 'PopularFeedRightRail'),
    (e.Post = 'Post'),
    (e.PostCollaborators = 'PostCollaborators'),
    (e.PostCreationCrosspost = 'PostCreationCrosspost'),
    (e.PostCreationPage = 'PostCreationPage'),
    (e.PostDirectoriesAvailable = 'PostDirectoriesAvailable'),
    (e.PostDirectoryPage = 'PostDirectoryPage'),
    (e.PostFlair = 'PostFlair'),
    (e.PostFlairSettings = 'PostFlairSettings'),
    (e.PostForBot = 'PostForBot'),
    (e.PostForEdit = 'PostForEdit'),
    (e.PostForHighlights = 'PostForHighlights'),
    (e.PostForInstagramStories = 'PostForInstagramStories'),
    (e.PostForSocialPreview = 'PostForSocialPreview'),
    (e.PostForWatermarking = 'PostForWatermarking'),
    (e.PostGuidanceValidation = 'PostGuidanceValidation'),
    (e.PostLevelCrowdControlSettings = 'PostLevelCrowdControlSettings'),
    (e.PostModerationInfo = 'PostModerationInfo'),
    (e.PostWithoutSubreddit = 'PostWithoutSubreddit'),
    (e.PremiumMarketingPage = 'PremiumMarketingPage'),
    (e.PreviewPostAutomation = 'PreviewPostAutomation'),
    (e.ProfileAccountPerformance = 'ProfileAccountPerformance'),
    (e.ProfileBrandMentions = 'ProfileBrandMentions'),
    (e.ProfileBusinessToolsPage = 'ProfileBusinessToolsPage'),
    (e.ProfileCommunityFinderPage = 'ProfileCommunityFinderPage'),
    (e.ProfileDashboardOverview = 'ProfileDashboardOverview'),
    (e.ProfileDashboardPage = 'ProfileDashboardPage'),
    (e.ProfileDashboardTrendingConvos = 'ProfileDashboardTrendingConvos'),
    (e.ProfileForSocialPreview = 'ProfileForSocialPreview'),
    (e.ProfileHeader = 'ProfileHeader'),
    (e.ProfileLeftNav = 'ProfileLeftNav'),
    (e.ProfileModeratedSubreddits = 'ProfileModeratedSubreddits'),
    (e.ProfilePerformance = 'ProfilePerformance'),
    (e.ProfileSettings = 'ProfileSettings'),
    (e.ProfileTrendingConvoDetails = 'ProfileTrendingConvoDetails'),
    (e.ProfileTrendingConvoMentions = 'ProfileTrendingConvoMentions'),
    (e.ProfileTrendingConvos = 'ProfileTrendingConvos'),
    (e.ProfileTrendsCommunityAffinityTable =
      'ProfileTrendsCommunityAffinityTable'),
    (e.ProfileTrendsMentionsChart = 'ProfileTrendsMentionsChart'),
    (e.ProfileTrendsOverviewChart = 'ProfileTrendsOverviewChart'),
    (e.ProfileTrendsSentimentChart = 'ProfileTrendsSentimentChart'),
    (e.ProfileTypeahead = 'ProfileTypeahead'),
    (e.PromotedFloatingCTA = 'PromotedFloatingCTA'),
    (e.PromotePost = 'PromotePost'),
    (e.RecentPosts = 'RecentPosts'),
    (e.RecoverUsername = 'RecoverUsername'),
    (e.RedditChat = 'RedditChat'),
    (e.RedditorByName = 'RedditorByName'),
    (e.RedditorIdByName = 'RedditorIdByName'),
    (e.RedditProBrandCategories = 'RedditProBrandCategories'),
    (e.RedditProOnboardingPage = 'RedditProOnboardingPage'),
    (e.RegisterPushToken = 'RegisterPushToken'),
    (e.RegisterVaultAddress = 'RegisterVaultAddress'),
    (e.RemoveHighlightedPost = 'RemoveHighlightedPost'),
    (e.ReorderFlairs = 'ReorderFlairs'),
    (e.ReorderHighlightedPosts = 'ReorderHighlightedPosts'),
    (e.ReorderSubredditRules = 'ReorderSubredditRules'),
    (e.ReorderSubredditWidgets = 'ReorderSubredditWidgets'),
    (e.ReportAward = 'ReportAward'),
    (e.ReportComment = 'ReportComment'),
    (e.ReportForm = 'ReportForm'),
    (e.ReportPost = 'ReportPost'),
    (e.ReportUserDetails = 'ReportUserDetails'),
    (e.ReputationSubredditSettings = 'ReputationSubredditSettings'),
    (e.RequestPasswordReset = 'RequestPasswordReset'),
    (e.SafetyFilterEvaluationsAsModerator =
      'SafetyFilterEvaluationsAsModerator'),
    (e.SafetyFiltersModInsightsChart = 'SafetyFiltersModInsightsChart'),
    (e.ScheduleTemporaryEventRun = 'ScheduleTemporaryEventRun'),
    (e.SearchTypeahead = 'SearchTypeahead'),
    (e.SetProfileSocialLinks = 'SetProfileSocialLinks'),
    (e.SettingsAccountPage = 'SettingsAccountPage'),
    (e.SettingsEmailPage = 'SettingsEmailPage'),
    (e.SettingsModNotificationModal = 'SettingsModNotificationModal'),
    (e.SettingsNotificationsPage = 'SettingsNotificationsPage'),
    (e.SettingsPreferencesPage = 'SettingsPreferencesPage'),
    (e.SettingsPrivacyPage = 'SettingsPrivacyPage'),
    (e.SettingsProfilePage = 'SettingsProfilePage'),
    (e.ShopArtistsData = 'ShopArtistsData'),
    (e.ShopGalleryData = 'ShopGalleryData'),
    (e.ShopGallerySetup = 'ShopGallerySetup'),
    (e.StorefrontLayout = 'StorefrontLayout'),
    (e.StorefrontLayoutData = 'StorefrontLayoutData'),
    (e.StoreUxtargetingAction = 'StoreUxtargetingAction'),
    (e.SubmitMedia = 'SubmitMedia'),
    (e.SubmitScheduledPostNow = 'SubmitScheduledPostNow'),
    (e.SubmitUserContactForAd = 'SubmitUserContactForAd'),
    (e.Subreddit = 'Subreddit'),
    (e.SubredditByName = 'SubredditByName'),
    (e.SubredditDirectoryPage = 'SubredditDirectoryPage'),
    (e.SubredditEmojis = 'SubredditEmojis'),
    (e.SubredditEmotes = 'SubredditEmotes'),
    (e.SubredditFeed = 'SubredditFeed'),
    (e.SubredditPostFlairTemplates = 'SubredditPostFlairTemplates'),
    (e.SubredditRightRail = 'SubredditRightRail'),
    (e.SubredditStyles = 'SubredditStyles'),
    (e.SubredditTypeahead = 'SubredditTypeahead'),
    (e.SubredditWidgets = 'SubredditWidgets'),
    (e.SubredditYearInReview = 'SubredditYearInReview'),
    (e.TaxonomyTopicsInfo = 'TaxonomyTopicsInfo'),
    (e.TemporaryEventConfigs = 'TemporaryEventConfigs'),
    (e.TemporaryEventRuns = 'TemporaryEventRuns'),
    (e.TemporaryEventsPage = 'TemporaryEventsPage'),
    (e.TemporaryEventsView = 'TemporaryEventsView'),
    (e.TopicBySlug = 'TopicBySlug'),
    (e.TopicFeedBySlug = 'TopicFeedBySlug'),
    (e.TranslatedComment = 'TranslatedComment'),
    (e.TranslatedPost = 'TranslatedPost'),
    (e.TranslatedPosts = 'TranslatedPosts'),
    (e.TranslatedStrings = 'TranslatedStrings'),
    (e.TrendingCarousel = 'TrendingCarousel'),
    (e.TrendingSearches = 'TrendingSearches'),
    (e.TrophyCategories = 'TrophyCategories'),
    (e.TrophyCategoriesIdentity = 'TrophyCategoriesIdentity'),
    (e.UnbanSubredditUser = 'UnbanSubredditUser'),
    (e.UnignoreReports = 'UnignoreReports'),
    (e.UnmuteMember = 'UnmuteMember'),
    (e.UpdateAccountGender = 'UpdateAccountGender'),
    (e.UpdateAccountPreferences = 'UpdateAccountPreferences'),
    (e.UpdateAchievementTrophyIsNew = 'UpdateAchievementTrophyIsNew'),
    (e.UpdateAchievementTrophyIsPinned = 'UpdateAchievementTrophyIsPinned'),
    (e.UpdateAdsPaymentMethod = 'UpdateAdsPaymentMethod'),
    (e.UpdateAutomation = 'UpdateAutomation'),
    (e.UpdateAutomationRank = 'UpdateAutomationRank'),
    (e.UpdateBrandOnboarding = 'UpdateBrandOnboarding'),
    (e.UpdateComment = 'UpdateComment'),
    (e.UpdateCommentDistinguishedState = 'UpdateCommentDistinguishedState'),
    (e.UpdateCommentFollowState = 'UpdateCommentFollowState'),
    (e.UpdateCommentLockedState = 'UpdateCommentLockedState'),
    (e.UpdateCommentSaveState = 'UpdateCommentSaveState'),
    (e.UpdateCommentSendRepliesState = 'UpdateCommentSendRepliesState'),
    (e.UpdateCommentStickyState = 'UpdateCommentStickyState'),
    (e.UpdateCommentVoteState = 'UpdateCommentVoteState'),
    (e.UpdateCommercialCommunicationState =
      'UpdateCommercialCommunicationState'),
    (e.UpdateCommunityStatus = 'UpdateCommunityStatus'),
    (e.UpdateContributorRequestTimestamp = 'UpdateContributorRequestTimestamp'),
    (e.UpdateDraft = 'UpdateDraft'),
    (e.UpdateEventTime = 'UpdateEventTime'),
    (e.UpdateHatefulContentFilters = 'UpdateHatefulContentFilters'),
    (e.UpdateHighlightedPost = 'UpdateHighlightedPost'),
    (e.UpdateInboxActivitySeenState = 'UpdateInboxActivitySeenState'),
    (e.UpdateMessageDistinguishedState = 'UpdateMessageDistinguishedState'),
    (e.UpdateModeratorHierarchy = 'UpdateModeratorHierarchy'),
    (e.UpdateModPnSettingStatus = 'UpdateModPnSettingStatus'),
    (e.UpdateModPnSettingThreshold = 'UpdateModPnSettingThreshold'),
    (e.UpdateMultiredditFavoriteState = 'UpdateMultiredditFavoriteState'),
    (e.UpdateNotificationPreferences = 'UpdateNotificationPreferences'),
    (e.UpdatePost = 'UpdatePost'),
    (e.UpdatePostCollaborators = 'UpdatePostCollaborators'),
    (e.UpdatePostDistinguishedState = 'UpdatePostDistinguishedState'),
    (e.UpdatePostFlair = 'UpdatePostFlair'),
    (e.UpdatePostFollowState = 'UpdatePostFollowState'),
    (e.UpdatePostHideState = 'UpdatePostHideState'),
    (e.UpdatePostLevelCrowdControlSettings =
      'UpdatePostLevelCrowdControlSettings'),
    (e.UpdatePostLockedState = 'UpdatePostLockedState'),
    (e.UpdatePostNsfwState = 'UpdatePostNsfwState'),
    (e.UpdatePostPollVoteState = 'UpdatePostPollVoteState'),
    (e.UpdatePostReminderState = 'UpdatePostReminderState'),
    (e.UpdatePostSaveState = 'UpdatePostSaveState'),
    (e.UpdatePostSendRepliesState = 'UpdatePostSendRepliesState'),
    (e.UpdatePostSpoilerState = 'UpdatePostSpoilerState'),
    (e.UpdatePostStickyState = 'UpdatePostStickyState'),
    (e.UpdatePostVoteState = 'UpdatePostVoteState'),
    (e.UpdateProfileFollowState = 'UpdateProfileFollowState'),
    (e.UpdateProfileSettings = 'UpdateProfileSettings'),
    (e.UpdateProfileSocialLinks = 'UpdateProfileSocialLinks'),
    (e.UpdateProfileStyles = 'UpdateProfileStyles'),
    (e.UpdateRecommendationPreferences = 'UpdateRecommendationPreferences'),
    (e.UpdateRedditorAllowlistState = 'UpdateRedditorAllowlistState'),
    (e.UpdateRedditorBlockState = 'UpdateRedditorBlockState'),
    (e.UpdateReportState = 'UpdateReportState'),
    (e.UpdateScheduledPost = 'UpdateScheduledPost'),
    (e.UpdateSensitiveAdsPreferences = 'UpdateSensitiveAdsPreferences'),
    (e.UpdateSpokenLanguagesPreference = 'UpdateSpokenLanguagesPreference'),
    (e.UpdateSubredditAchievementsSettings =
      'UpdateSubredditAchievementsSettings'),
    (e.UpdateSubredditBanner = 'UpdateSubredditBanner'),
    (e.UpdateSubredditChannelsSettings = 'UpdateSubredditChannelsSettings'),
    (e.UpdateSubredditColors = 'UpdateSubredditColors'),
    (e.UpdateSubredditFavoriteState = 'UpdateSubredditFavoriteState'),
    (e.UpdateSubredditIcon = 'UpdateSubredditIcon'),
    (e.UpdateSubredditMuteAndNotificationLevelSettings =
      'UpdateSubredditMuteAndNotificationLevelSettings'),
    (e.UpdateSubredditMuteSettings = 'UpdateSubredditMuteSettings'),
    (e.UpdateSubredditNotificationSettings =
      'UpdateSubredditNotificationSettings'),
    (e.UpdateSubredditPostFlairSettings = 'UpdateSubredditPostFlairSettings'),
    (e.UpdateSubredditQuarantineOptInState =
      'UpdateSubredditQuarantineOptInState'),
    (e.UpdateSubredditRule = 'UpdateSubredditRule'),
    (e.UpdateSubredditSettings = 'UpdateSubredditSettings'),
    (e.UpdateSubredditSubscriptions = 'UpdateSubredditSubscriptions'),
    (e.UpdateSubredditUserFlairSettings = 'UpdateSubredditUserFlairSettings'),
    (e.UpdateSubredditWidget = 'UpdateSubredditWidget'),
    (e.UpdateTemporaryEventConfig = 'UpdateTemporaryEventConfig'),
    (e.UpdateTopicPreferences = 'UpdateTopicPreferences'),
    (e.UpdateUserFlair = 'UpdateUserFlair'),
    (e.UpdateUserFlairAndEnabledStatus = 'UpdateUserFlairAndEnabledStatus'),
    (e.UpsertBanEvasionSubredditSettings = 'UpsertBanEvasionSubredditSettings'),
    (e.UpsertModSafetySubredditSettings = 'UpsertModSafetySubredditSettings'),
    (e.UserAvatarBackgrounds = 'UserAvatarBackgrounds'),
    (e.UserAvatarOutfits = 'UserAvatarOutfits'),
    (e.UserDrawer = 'UserDrawer'),
    (e.UserFlairSettings = 'UserFlairSettings'),
    (e.UserFlairTemplates = 'UserFlairTemplates'),
    (e.UserHoverCard = 'UserHoverCard'),
    (e.UserProfile = 'UserProfile'),
    (e.ValidateCreatePostInput = 'ValidateCreatePostInput'),
    (e.ValidateCreateSubredditInput = 'ValidateCreateSubredditInput'),
    (e.VerifyUserIdentity = 'VerifyUserIdentity'),
    (e.XFeed = 'XFeed');
})(Is || (Is = {})),
  Is.AddSubredditWidget,
  Is.BackupVault,
  Is.BanSubredditUser,
  Is.CancelEconRecurringPayment,
  Is.ChangeStripePaymentMethod,
  Is.ClaimFreeNft,
  Is.ClearPostFlair,
  Is.ClearUserFlair,
  Is.ComposeMessage,
  Is.CreateAdAccount,
  Is.CreateAutomation,
  Is.CreateAvatar,
  Is.CreateAwardOrder,
  Is.CreateCaptchaToken,
  Is.CreateCustomPostSnapshot,
  Is.CreateEconOrder,
  Is.CreateMediaUploadLease,
  Is.CreateModUserNote,
  Is.CreatePaymentIntent,
  Is.CreateProfileStructuredStylesUploadLease,
  Is.CreateStorefrontOrder,
  Is.CreateSubreddit,
  Is.CreateSubredditRule,
  Is.CreateSubredditStructuredStylesUploadLease,
  Is.CreateUserFlair,
  Is.CustomFeedAddSubreddits,
  Is.CustomFeedCreate,
  Is.CustomFeedDelete,
  Is.CustomFeedRemoveSubreddits,
  Is.CustomFeedUpdateSubscriptionState,
  Is.DeleteAutomation,
  Is.DeleteComment,
  Is.DeleteInboxNotifications,
  Is.DeleteModUserNote,
  Is.DeletePost,
  Is.DeletePostDraft,
  Is.DeleteProfileSocialLinks,
  Is.DeleteScheduledPost,
  Is.DeleteSubredditFlairTemplate,
  Is.DeleteSubredditMuteSettings,
  Is.DeleteSubredditRule,
  Is.DeleteSubredditWidget,
  Is.EnrollInStreaks,
  Is.IdentityUserPreferences,
  Is.IgnoreReports,
  Is.MarkNotificationRead,
  Is.MarkPrivateMessageAsRead,
  Is.ModBulkApprove,
  Is.ModBulkIgnore,
  Is.ModBulkLock,
  Is.ModBulkMarkNSFW,
  Is.ModBulkMarkSpoiler,
  Is.ModBulkRemove,
  Is.ModBulkUnignore,
  Is.ModBulkUnlock,
  Is.ModBulkUnmarkNSFW,
  Is.ModBulkUnmarkSpoiler,
  Is.ModBulkUpdatePostFlair,
  Is.MuteMember,
  Is.OptInToGatedSubreddit,
  Is.PostGuidanceValidation,
  Is.PromotePost,
  Is.RegisterPushToken,
  Is.RegisterVaultAddress,
  Is.RemoveHighlightedPost,
  Is.ReorderFlairs,
  Is.ReorderHighlightedPosts,
  Is.ReorderSubredditRules,
  Is.ReorderSubredditWidgets,
  Is.ReportAward,
  Is.ReportComment,
  Is.ReportPost,
  Is.ReportUserDetails,
  Is.SetProfileSocialLinks,
  Is.StoreUxtargetingAction,
  Is.SubmitMedia,
  Is.SubmitScheduledPostNow,
  Is.SubredditWidgets,
  Is.UnbanSubredditUser,
  Is.UnignoreReports,
  Is.UnmuteMember,
  Is.UpdateAccountGender,
  Is.UpdateAccountPreferences,
  Is.UpdateAchievementTrophyIsNew,
  Is.UpdateAchievementTrophyIsPinned,
  Is.UpdateAdsPaymentMethod,
  Is.UpdateAutomation,
  Is.UpdateAutomationRank,
  Is.UpdateBrandOnboarding,
  Is.UpdateComment,
  Is.UpdateCommentDistinguishedState,
  Is.UpdateCommentFollowState,
  Is.UpdateCommentLockedState,
  Is.UpdateCommentSaveState,
  Is.UpdateCommentSendRepliesState,
  Is.UpdateCommentStickyState,
  Is.UpdateCommentVoteState,
  Is.UpdateCommercialCommunicationState,
  Is.UpdateCommunityStatus,
  Is.UpdateContributorRequestTimestamp,
  Is.UpdateEventTime,
  Is.UpdateHighlightedPost,
  Is.UpdateInboxActivitySeenState,
  Is.UpdateMessageDistinguishedState,
  Is.UpdateModPnSettingStatus,
  Is.UpdateModPnSettingThreshold,
  Is.UpdateMultiredditFavoriteState,
  Is.UpdateNotificationPreferences,
  Is.UpdatePostCollaborators,
  Is.UpdatePostDistinguishedState,
  Is.UpdatePostFlair,
  Is.UpdatePostFollowState,
  Is.UpdatePostHideState,
  Is.UpdatePostLevelCrowdControlSettings,
  Is.UpdatePostLockedState,
  Is.UpdatePostNsfwState,
  Is.UpdatePostPollVoteState,
  Is.UpdatePostReminderState,
  Is.UpdatePostSaveState,
  Is.UpdatePostSendRepliesState,
  Is.UpdatePostSpoilerState,
  Is.UpdatePostStickyState,
  Is.UpdatePostVoteState,
  Is.UpdateProfileFollowState,
  Is.UpdateProfileSettings,
  Is.UpdateProfileSocialLinks,
  Is.UpdateProfileStyles,
  Is.UpdateRecommendationPreferences,
  Is.UpdateRedditorAllowlistState,
  Is.UpdateRedditorBlockState,
  Is.UpdateReportState,
  Is.UpdateScheduledPost,
  Is.UpdateSensitiveAdsPreferences,
  Is.UpdateSpokenLanguagesPreference,
  Is.UpdateSubredditAchievementsSettings,
  Is.UpdateSubredditBanner,
  Is.UpdateSubredditColors,
  Is.UpdateSubredditFavoriteState,
  Is.UpdateSubredditIcon,
  Is.UpdateSubredditMuteAndNotificationLevelSettings,
  Is.UpdateSubredditMuteSettings,
  Is.UpdateSubredditNotificationSettings,
  Is.UpdateSubredditPostFlairSettings,
  Is.UpdateSubredditQuarantineOptInState,
  Is.UpdateSubredditRule,
  Is.UpdateSubredditSettings,
  Is.UpdateSubredditSubscriptions,
  Is.UpdateSubredditUserFlairSettings,
  Is.UpdateSubredditWidget,
  Is.UpdateUserFlair,
  Is.UpdateUserFlairAndEnabledStatus,
  Is.UpsertModSafetySubredditSettings,
  Is.AchievementTrophyById,
  Is.AddSubredditWidget,
  Is.AllowlistedRedditorInfo,
  Is.BackupVault,
  Is.BlockedAccounts,
  Is.BoostedPostAdInsights,
  Is.ClaimFreeNft,
  Is.CommunityName,
  Is.CommunitySearch,
  Is.CommunitySuggestions,
  Is.ConvertMarkdownToRTJSON,
  Is.ConvertRTJSONToMarkdown,
  Is.CreateAvatar,
  Is.CreateCustomPostSnapshot,
  Is.CreateTemporaryEventConfig,
  Is.DeleteSubredditWidget,
  Is.EndPostEvent,
  Is.EnrollInStreaks,
  Is.FetchTitle,
  Is.GeneratedUsernames,
  Is.GetFundingInstrumentSecret,
  Is.GetVaultRegistrationChallenge,
  Is.IdentityImmersiveTranslationSetting,
  Is.IsEmailValidForRegistration,
  Is.IsUsernameValidForRegistration,
  Is.MediaAuthInfo,
  Is.MutedSubreddits,
  Is.PreviewPostAutomation,
  Is.RedditorByName,
  Is.RedditorIdByName,
  Is.RegisterVaultAddress,
  Is.ReorderSubredditWidgets,
  Is.ReportUserDetails,
  Is.SafetyFilterEvaluationsAsModerator,
  Is.ScheduleTemporaryEventRun,
  Is.SettingsModNotificationModal,
  Is.SubredditByName,
  Is.SubredditStyles,
  Is.SubredditTypeahead,
  Is.SubredditWidgets,
  Is.TaxonomyTopicsInfo,
  Is.UpdateEventTime,
  Is.UpdateSubredditAchievementsSettings,
  Is.UpdateSubredditWidget,
  Is.UpdateTemporaryEventConfig,
  Is.ValidateCreatePostInput,
  Is.ValidateCreateSubredditInput;
const Cs = ['https://ads.reddit.com', 'https://reddit-service-ads-ui'];
function As(e) {
  window.Sentry?.captureMessage?.(e);
}
async function Ps({ operation: e, variables: t = {}, init: n = {} }) {
  try {
    const r = await fetch(
      (Cs.some((e) => Pt.origin.startsWith(e))
        ? 'https://www.reddit.com'
        : '') + '/svc/shreddit/graphql',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          operation: e,
          variables: t,
          csrf_token: In.get('csrf_token')
        }),
        ...n
      }
    );
    if (r.ok) return r.json();
    const o = await r.text();
    throw (
      (As(`Client GQL Request failed with status ${r.status}: ${o}`),
      new Error(o))
    );
  } catch (t) {
    throw (
      (As(`Unable to complete the request for GQL operation "${e}": ${t}`), t)
    );
  }
}
async function Rs(e, t, n, r) {
  const o = {
      input: {
        action: e,
        eligibleExperience: { experience: t, uxVariant: n },
        source: r
      }
    },
    { data: a } = await Ps({
      operation: Is.StoreUxtargetingAction,
      variables: o
    });
  a.storeUxTargetingAction?.ok ||
    window.Sentry?.captureMessage?.('Uxtargeting action could not be stored');
}
function Os(e) {
  return null === e ? 'null' : Array.isArray(e) ? 'array' : typeof e;
}
function Ns(e) {
  return 'object' === Os(e);
}
function Ds(e, t) {
  return e.length < 124 ? e : t;
}
var Ls, Ms;
function Us(e) {
  if (!Ns(e))
    throw new Error(`Message is expected to be an object, but got ${Os(e)}`);
  if (!e.type) throw new Error("Message is missing the 'type' property");
  if ('string' != typeof e.type)
    throw new Error(
      `Message is expects the 'type' property to be a string, but got ${Os(e.type)}`
    );
  switch (e.type) {
    case Ms.ConnectionInit:
    case Ms.ConnectionAck:
    case Ms.Ping:
    case Ms.Pong:
      if (null != e.payload && !Ns(e.payload))
        throw new Error(
          `"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`
        );
      break;
    case Ms.Subscribe:
      if ('string' != typeof e.id)
        throw new Error(
          `"${e.type}" message expects the 'id' property to be a string, but got ${Os(e.id)}`
        );
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        );
      if (!Ns(e.payload))
        throw new Error(
          `"${e.type}" message expects the 'payload' property to be an object, but got ${Os(e.payload)}`
        );
      if ('string' != typeof e.payload.query)
        throw new Error(
          `"${e.type}" message payload expects the 'query' property to be a string, but got ${Os(e.payload.query)}`
        );
      if (null != e.payload.variables && !Ns(e.payload.variables))
        throw new Error(
          `"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Os(e.payload.variables)}`
        );
      if (
        null != e.payload.operationName &&
        'string' !== Os(e.payload.operationName)
      )
        throw new Error(
          `"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Os(e.payload.operationName)}`
        );
      if (null != e.payload.extensions && !Ns(e.payload.extensions))
        throw new Error(
          `"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Os(e.payload.extensions)}`
        );
      break;
    case Ms.Next:
      if ('string' != typeof e.id)
        throw new Error(
          `"${e.type}" message expects the 'id' property to be a string, but got ${Os(e.id)}`
        );
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        );
      if (!Ns(e.payload))
        throw new Error(
          `"${e.type}" message expects the 'payload' property to be an object, but got ${Os(e.payload)}`
        );
      break;
    case Ms.Error:
      if ('string' != typeof e.id)
        throw new Error(
          `"${e.type}" message expects the 'id' property to be a string, but got ${Os(e.id)}`
        );
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        );
      if (
        ((t = e.payload),
        !(Array.isArray(t) && t.length > 0 && t.every((e) => 'message' in e)))
      )
        throw new Error(
          `"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`
        );
      break;
    case Ms.Complete:
      if ('string' != typeof e.id)
        throw new Error(
          `"${e.type}" message expects the 'id' property to be a string, but got ${Os(e.id)}`
        );
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        );
      break;
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`);
  }
  var t;
  return e;
}
function Fs(e, t) {
  return Us(e), JSON.stringify(e, t);
}
function Vs(e) {
  const {
    url: t,
    connectionParams: n,
    lazy: r = !0,
    onNonLazyError: o = console.error,
    lazyCloseTimeout: a = 0,
    keepAlive: i = 0,
    disablePong: s,
    connectionAckWaitTimeout: d = 0,
    retryAttempts: l = 5,
    retryWait: c = async function (e) {
      let t = 1e3;
      for (let n = 0; n < e; n++) t *= 2;
      await new Promise((e) =>
        setTimeout(e, t + Math.floor(2700 * Math.random() + 300))
      );
    },
    shouldRetry: p = Bs,
    isFatalConnectionProblem: m,
    on: u,
    webSocketImpl: h,
    generateID: g = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (e) => {
        const t = (16 * Math.random()) | 0;
        return ('x' == e ? t : (3 & t) | 8).toString(16);
      });
    },
    jsonMessageReplacer: b,
    jsonMessageReviver: x
  } = e;
  let v;
  if (h) {
    if (
      !(
        'function' == typeof (w = h) &&
        'constructor' in w &&
        'CLOSED' in w &&
        'CLOSING' in w &&
        'CONNECTING' in w &&
        'OPEN' in w
      )
    )
      throw new Error('Invalid WebSocket implementation provided');
    v = h;
  } else
    'undefined' != typeof WebSocket
      ? (v = WebSocket)
      : 'undefined' != typeof global
        ? (v = global.WebSocket || global.MozWebSocket)
        : 'undefined' != typeof window &&
          (v = window.WebSocket || window.MozWebSocket);
  var w;
  if (!v)
    throw new Error(
      "WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`"
    );
  const f = v,
    y = (() => {
      const e = (() => {
          const e = {};
          return {
            on: (t, n) => (
              (e[t] = n),
              () => {
                delete e[t];
              }
            ),
            emit(t) {
              var n;
              'id' in t &&
                (null === (n = e[t.id]) || void 0 === n || n.call(e, t));
            }
          };
        })(),
        t = {
          connecting: (null == u ? void 0 : u.connecting) ? [u.connecting] : [],
          opened: (null == u ? void 0 : u.opened) ? [u.opened] : [],
          connected: (null == u ? void 0 : u.connected) ? [u.connected] : [],
          ping: (null == u ? void 0 : u.ping) ? [u.ping] : [],
          pong: (null == u ? void 0 : u.pong) ? [u.pong] : [],
          message: (null == u ? void 0 : u.message)
            ? [e.emit, u.message]
            : [e.emit],
          closed: (null == u ? void 0 : u.closed) ? [u.closed] : [],
          error: (null == u ? void 0 : u.error) ? [u.error] : []
        };
      return {
        onMessage: e.on,
        on(e, n) {
          const r = t[e];
          return (
            r.push(n),
            () => {
              r.splice(r.indexOf(n), 1);
            }
          );
        },
        emit(e, ...n) {
          for (const r of [...t[e]]) r(...n);
        }
      };
    })();
  function _(e) {
    const t = [
      y.on('error', (n) => {
        t.forEach((e) => e()), e(n);
      }),
      y.on('closed', (n) => {
        t.forEach((e) => e()), e(n);
      })
    ];
  }
  let E,
    S,
    k = 0,
    T = !1,
    I = 0,
    C = !1;
  async function A() {
    clearTimeout(S);
    const [e, r] = await (null != E
      ? E
      : (E = new Promise((e, r) =>
          (async () => {
            if (T) {
              if ((await c(I), !k))
                return (
                  (E = void 0),
                  r({ code: 1e3, reason: 'All Subscriptions Gone' })
                );
              I++;
            }
            y.emit('connecting');
            const o = new f(
              'function' == typeof t ? await t() : t,
              'graphql-transport-ws'
            );
            let a, l;
            function p() {
              isFinite(i) &&
                i > 0 &&
                (clearTimeout(l),
                (l = setTimeout(() => {
                  o.readyState === f.OPEN &&
                    (o.send(Fs({ type: Ms.Ping })), y.emit('ping', !1, void 0));
                }, i)));
            }
            _((e) => {
              (E = void 0),
                clearTimeout(a),
                clearTimeout(l),
                r(e),
                Bs(e) &&
                  4499 === e.code &&
                  (o.close(4499, 'Terminated'),
                  (o.onerror = null),
                  (o.onclose = null));
            }),
              (o.onerror = (e) => y.emit('error', e)),
              (o.onclose = (e) => y.emit('closed', e)),
              (o.onopen = async () => {
                try {
                  y.emit('opened', o);
                  const e = 'function' == typeof n ? await n() : n;
                  if (o.readyState !== f.OPEN) return;
                  o.send(
                    Fs(
                      e
                        ? { type: Ms.ConnectionInit, payload: e }
                        : { type: Ms.ConnectionInit },
                      b
                    )
                  ),
                    isFinite(d) &&
                      d > 0 &&
                      (a = setTimeout(() => {
                        o.close(
                          Ls.ConnectionAcknowledgementTimeout,
                          'Connection acknowledgement timeout'
                        );
                      }, d)),
                    p();
                } catch (e) {
                  y.emit('error', e),
                    o.close(
                      Ls.InternalClientError,
                      Ds(
                        e instanceof Error ? e.message : new Error(e).message,
                        'Internal client error'
                      )
                    );
                }
              });
            let m = !1;
            o.onmessage = ({ data: t }) => {
              try {
                const n = (function (e, t) {
                  return Us('string' == typeof e ? JSON.parse(e, t) : e);
                })(t, x);
                if (
                  (y.emit('message', n), 'ping' === n.type || 'pong' === n.type)
                )
                  return (
                    y.emit(n.type, !0, n.payload),
                    void ('pong' === n.type
                      ? p()
                      : s ||
                        (o.send(
                          Fs(
                            n.payload
                              ? { type: Ms.Pong, payload: n.payload }
                              : { type: Ms.Pong }
                          )
                        ),
                        y.emit('pong', !1, n.payload)))
                  );
                if (m) return;
                if (n.type !== Ms.ConnectionAck)
                  throw new Error(`First message cannot be of type ${n.type}`);
                clearTimeout(a),
                  (m = !0),
                  y.emit('connected', o, n.payload),
                  (T = !1),
                  (I = 0),
                  e([o, new Promise((e, t) => _(t))]);
              } catch (e) {
                (o.onmessage = null),
                  y.emit('error', e),
                  o.close(
                    Ls.BadResponse,
                    Ds(
                      e instanceof Error ? e.message : new Error(e).message,
                      'Bad response'
                    )
                  );
              }
            };
          })()
        )));
    e.readyState === f.CLOSING && (await r);
    let o = () => {};
    const l = new Promise((e) => (o = e));
    return [
      e,
      o,
      Promise.race([
        l.then(() => {
          if (!k) {
            const t = () => e.close(1e3, 'Normal Closure');
            isFinite(a) && a > 0
              ? (S = setTimeout(() => {
                  e.readyState === f.OPEN && t();
                }, a))
              : t();
          }
        }),
        r
      ])
    ];
  }
  function P(e) {
    if (
      Bs(e) &&
      ((t = e.code),
      (![1e3, 1001, 1006, 1005, 1012, 1013, 1013].includes(t) &&
        t >= 1e3 &&
        t <= 1999) ||
        [
          Ls.InternalServerError,
          Ls.InternalClientError,
          Ls.BadRequest,
          Ls.BadResponse,
          Ls.Unauthorized,
          Ls.SubprotocolNotAcceptable,
          Ls.SubscriberAlreadyExists,
          Ls.TooManyInitialisationRequests
        ].includes(e.code))
    )
      throw e;
    var t;
    if (C) return !1;
    if (Bs(e) && 1e3 === e.code) return k > 0;
    if (!l || I >= l) throw e;
    if (!p(e)) throw e;
    if (null == m ? void 0 : m(e)) throw e;
    return (T = !0);
  }
  return (
    r ||
      (async () => {
        for (k++; ; )
          try {
            const [, , e] = await A();
            await e;
          } catch (e) {
            try {
              if (!P(e)) return;
            } catch (e) {
              return null == o ? void 0 : o(e);
            }
          }
      })(),
    {
      on: y.on,
      subscribe(e, t) {
        const n = g(e);
        let r = !1,
          o = !1,
          a = () => {
            k--, (r = !0);
          };
        return (
          (async () => {
            for (k++; ; )
              try {
                const [i, s, d] = await A();
                if (r) return s();
                const l = y.onMessage(n, (e) => {
                  switch (e.type) {
                    case Ms.Next:
                      return void t.next(e.payload);
                    case Ms.Error:
                      return (o = !0), (r = !0), t.error(e.payload), void a();
                    case Ms.Complete:
                      return (r = !0), void a();
                  }
                });
                return (
                  i.send(Fs({ id: n, type: Ms.Subscribe, payload: e }, b)),
                  (a = () => {
                    r ||
                      i.readyState !== f.OPEN ||
                      i.send(Fs({ id: n, type: Ms.Complete }, b)),
                      k--,
                      (r = !0),
                      s();
                  }),
                  void (await d.finally(l))
                );
              } catch (e) {
                if (!P(e)) return;
              }
          })()
            .then(() => {
              o || t.complete();
            })
            .catch((e) => {
              t.error(e);
            }),
          () => {
            r || a();
          }
        );
      },
      async dispose() {
        if (((C = !0), E)) {
          const [e] = await E;
          e.close(1e3, 'Normal Closure');
        }
      },
      terminate() {
        E &&
          y.emit('closed', { code: 4499, reason: 'Terminated', wasClean: !1 });
      }
    }
  );
}
function Bs(e) {
  return Ns(e) && 'code' in e && 'reason' in e;
}
async function Ws() {
  const e = In.get('csrf_token') ?? '',
    t = await fetch('/svc/shreddit/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ csrf_token: e })
    });
  return t.ok ? t.json() : null;
}
!(function (e) {
  (e[(e.InternalServerError = 4500)] = 'InternalServerError'),
    (e[(e.InternalClientError = 4005)] = 'InternalClientError'),
    (e[(e.BadRequest = 4400)] = 'BadRequest'),
    (e[(e.BadResponse = 4004)] = 'BadResponse'),
    (e[(e.Unauthorized = 4401)] = 'Unauthorized'),
    (e[(e.Forbidden = 4403)] = 'Forbidden'),
    (e[(e.SubprotocolNotAcceptable = 4406)] = 'SubprotocolNotAcceptable'),
    (e[(e.ConnectionInitialisationTimeout = 4408)] =
      'ConnectionInitialisationTimeout'),
    (e[(e.ConnectionAcknowledgementTimeout = 4504)] =
      'ConnectionAcknowledgementTimeout'),
    (e[(e.SubscriberAlreadyExists = 4409)] = 'SubscriberAlreadyExists'),
    (e[(e.TooManyInitialisationRequests = 4429)] =
      'TooManyInitialisationRequests');
})(Ls || (Ls = {})),
  (function (e) {
    (e.ConnectionInit = 'connection_init'),
      (e.ConnectionAck = 'connection_ack'),
      (e.Ping = 'ping'),
      (e.Pong = 'pong'),
      (e.Subscribe = 'subscribe'),
      (e.Next = 'next'),
      (e.Error = 'error'),
      (e.Complete = 'complete');
  })(Ms || (Ms = {}));
const Hs = (() => {
  let e;
  function t() {
    return (
      e ||
        (e = (function () {
          let e = !1;
          return Vs({
            url: 'wss://gql-realtime.reddit.com/query',
            connectionAckWaitTimeout: 5e3,
            lazyCloseTimeout: 5e3,
            retryAttempts: 1,
            shouldRetry: () => e,
            on: {
              connecting: () => {
                e = !1;
              },
              closed: (e) => {
                if (1e3 === e.code)
                  throw new Error('Connection has been terminated.');
              },
              message: (t) => {
                t.type === Ms.ConnectionAck && (e = !0);
              }
            },
            lazy: !0,
            connectionParams: async () => {
              const e = await Ws();
              return e ? { Authorization: `Bearer ${e.token}` } : {};
            }
          });
        })()),
      e
    );
  }
  return ({ query: e, onData: n, onClose: r }) =>
    t().subscribe(e, { next: n, error: (e) => r?.(e), complete: () => r?.() });
})();
class Gs {
  constructor(e) {
    (this.unsubscribeFn = null),
      (this.lastSubscribeParams = null),
      (this.unsubscribe = () => {
        this.unsubscribeFn?.(),
          (this.unsubscribeFn = null),
          (this.lastSubscribeParams = null),
          window.removeEventListener('pageshow', this.onPageShow),
          window.removeEventListener('pagehide', this.onPageHide);
      }),
      (this.subscribe = (e) => {
        this.unsubscribe(),
          (this.unsubscribeFn = Hs(e)),
          (this.lastSubscribeParams = e),
          window.addEventListener('pageshow', this.onPageShow),
          window.addEventListener('pagehide', this.onPageHide);
      }),
      (this.onPageShow = (e) => {
        e.persisted &&
          this.lastSubscribeParams &&
          this.subscribe(this.lastSubscribeParams);
      }),
      (this.onPageHide = (e) => {
        e.persisted && this.suspend();
      }),
      e.addController(this);
  }
  suspend() {
    this.unsubscribeFn?.(), (this.unsubscribeFn = null);
  }
  hostDisconnected() {
    this.unsubscribe();
  }
}
const Ys = [
    'de-DE',
    'en-US',
    'es-ES',
    'es-MX',
    'fr-FR',
    'it-IT',
    'pseudo',
    'pt-BR',
    'pt-PT'
  ],
  zs = 'i18n-translation-error',
  js = Object.fromEntries(Ys.map((e) => [e, e]));
var qs, $s, Xs;
!(function (e) {
  (e.GetOriginal = 'get-original'), (e.GetTranslation = 'get-translation');
})(qs || (qs = {})),
  (function (e) {
    (e.Title = 'title'), (e.TitleBody = 'title-body');
  })($s || ($s = {})),
  (function (e) {
    (e[(e.Posts = 0)] = 'Posts'),
      (e[(e.Comments = 1)] = 'Comments'),
      (e[(e.Communities = 2)] = 'Communities');
  })(Xs || (Xs = {}));
const Ks = 'i18n-post-media-img',
  Qs = 'i18n-give-post-feedback',
  Js = 'i18n-give-comment-feedback',
  Zs = 'i18n-component-ready',
  ed = {
    ID: {
      FEED_POST_FEEDBACK_MODAL: 'feed-post-translator-feedback-modal',
      PDP_POST_FEEDBACK_MODAL: 'pdp-post-translator-feedback-modal',
      PDP_COMMENT_FEEDBACK_MODAL: 'pdp-comment-feedback-modal'
    },
    CLASS: {}
  };
var td;
!(function (e) {
  (e.Enabled = 'Enabled'),
    (e.Pending = 'Pending'),
    (e.NoServiceWorker = 'NoServiceWorker'),
    (e.NoPushManager = 'NoPushManager'),
    (e.NoSubscription = 'NoSubscription'),
    (e.NoNotificationAPI = 'NoNotificationAPI'),
    (e.Blocked = 'Blocked'),
    (e.Error = 'Error');
})(td || (td = {}));
let nd = !1;
function rd(...e) {
  document.querySelector('shreddit-app')?.trackEvent(At(...e));
}
async function od(e = !1, t = navigator.serviceWorker) {
  const n = await t?.getRegistration();
  if (!n) return !1;
  let r = await n.pushManager.getSubscription();
  if (r && !e) return !0;
  const o = {
    userVisibleOnly: !0,
    applicationServerKey:
      'BJ2nJR9HeBwCWe4s7bKfKgWZkx2Q8Q59yBdSVLxWIhPaWuzHDUxQ2YJnhLvbAVujWBZYuQv60V6a6oipSw09FT0'
  };
  nd = !0;
  try {
    return (
      rd({ source: 'notification', action: 'request', noun: 'pushToken' }),
      (r = await n.pushManager.subscribe(o)),
      r
        ? (await (async function (e) {
            if (
              !(
                await Ps({
                  operation: Is.RegisterPushToken,
                  variables: {
                    pushToken: e,
                    language: document.documentElement.lang || js['en-US'],
                    timezoneName:
                      Intl.DateTimeFormat().resolvedOptions().timeZone ||
                      'America/Los_Angeles',
                    timestamp: new Date().toISOString()
                  }
                })
              ).data.registerWebPushToken?.ok
            )
              throw new Error('Error registering push token');
            Xr.setItem('push-token-last-refresh-ms', Date.now().toString());
          })(JSON.stringify(r)),
          rd({ source: 'notification', action: 'register', noun: 'pushToken' }),
          !0)
        : !1
    );
  } catch {
    return (
      rd({ source: 'notification', action: 'bail', noun: 'pushToken' }), !1
    );
  } finally {
    nd = !1;
  }
}
const ad = () =>
  'Notification' in globalThis && void 0 !== globalThis.Notification
    ? Notification
    : null;
async function id(e = navigator.serviceWorker) {
  const t = await e.getRegistration();
  return (await t?.pushManager.getSubscription())?.unsubscribe();
}
async function sd(e = navigator.serviceWorker, t = ad()) {
  if (!t) return td.NoNotificationAPI;
  try {
    await ld.promise;
    const n = await e?.getRegistration();
    if (!n) return td.NoServiceWorker;
    if (!n.pushManager) return td.NoPushManager;
    if ('denied' === t.permission) return td.Blocked;
    if ('default' === t.permission) return td.Pending;
    return (await n.pushManager.getSubscription())
      ? td.Enabled
      : nd
        ? td.Pending
        : td.NoSubscription;
  } catch {
    return td.Error;
  }
}
let dd = !1;
const ld = new G(),
  cd = (e = navigator.serviceWorker) => {
    if (!e) return;
    const t = document.getElementsByTagName('shreddit-app')?.[0],
      n = {
        action_info: { page_type: Ts() },
        screen: { height: window?.screen.height, width: window?.screen.width },
        referrer: kt(
          t?.getAttribute('referrer') || document.referrer,
          window.location.href
        )
      };
    e.controller?.postMessage({
      command: 'registerClient',
      v2EventBoilerPlate: n,
      disablePNs: 'true' === t?.getAttribute('disable-pns')
    });
  },
  pd = (e = navigator.serviceWorker) => {
    e?.addEventListener('message', (t) => {
      const { data: n } = t;
      switch (n.command || n.type) {
        case 'registerWithServiceWorker':
          return cd(e);
      }
    });
  };
window.addEventListener('beforeinstallprompt', (e) => {});
const md = (function (t) {
    if (xs in t) return t;
    class r extends t {
      constructor(...e) {
        super(...e),
          (this.canLoadRequests = !1),
          (this._canLoadRequests = !1),
          (this.resolvePendingRequests = () => {
            (this._canLoadRequests = !0), this._pendingRequestsResolver?.();
          });
        const t = [];
        new Promise((e) => {
          this._pendingRequestsResolver = e;
        }).then(() => {
          t.forEach(([e, t]) => {
            e(t);
          });
        }),
          (window.fetch = new Proxy(window.fetch, {
            apply: (e, n, [r, o]) => {
              const a =
                o?.headers?.Accept?.includes('text/vnd.reddit.partial+html') ||
                ('string' == typeof r && r.includes('render-mode=partial')) ||
                (r instanceof URL && r.search.includes('render-mode=partial'));
              return this._canLoadRequests || !a
                ? e(r, o)
                : new Promise((n) => {
                    t.push([n, e(r, o)]);
                  });
            }
          })),
          (window.Response = new Proxy(window.Response, {
            construct(e, [t, n]) {
              const r = Reflect.construct(e, [t, n]);
              return (
                ((n?.headers instanceof Headers &&
                  n?.headers?.has('x-verified-res')) ||
                  n?.headers?.['x-verified-res']) &&
                  r.headers.delete('x-verified-res'),
                r
              );
            }
          })),
          (window.Headers.prototype.set = new Proxy(
            window.Headers.prototype.set,
            {
              apply(e, t, [n, r]) {
                if ('x-verified-res' !== n) return Reflect.apply(e, t, [n, r]);
              }
            }
          ));
      }
      connectedCallback() {
        super.connectedCallback(),
          (this._canLoadRequests = this.canLoadRequests);
      }
    }
    return (
      (r[xs] = !0),
      e(
        [n({ type: Boolean, attribute: 'can-load-requests' })],
        r.prototype,
        'canLoadRequests',
        void 0
      ),
      r
    );
  })(
    (function (e) {
      var t;
      return Ui in e
        ? e
        : (((t = class extends e {
            constructor() {
              super(...arguments),
                (this.supportsDvh = !1),
                (this._cleanupDvhPolyfill = () => {}),
                (this._updateHeight = () => {
                  this._setDynamicViewportUnit(
                    (document.documentElement.clientHeight / 100).toFixed(1) +
                      'px'
                  );
                }),
                (this._updateHeightDebounced = Mi(this._updateHeight, 50));
            }
            connectedCallback() {
              super.connectedCallback(),
                (this.supportsDvh = CSS.supports('height: 100dvh')),
                this._polyfillDvh();
            }
            disconnectedCallback() {
              super.disconnectedCallback(), this._cleanupDvhPolyfill();
            }
            _polyfillDvh() {
              if (this.supportsDvh) this._setDynamicViewportUnit('1dvh');
              else {
                const e = window.matchMedia?.('(orientation: landscape)');
                e?.addEventListener?.('change', this._updateHeightDebounced),
                  window.addEventListener(
                    'resize',
                    this._updateHeightDebounced
                  ),
                  this._updateHeight(),
                  (this._cleanupDvhPolyfill = () => {
                    window.removeEventListener(
                      'resize',
                      this._updateHeightDebounced
                    ),
                      e?.removeEventListener?.(
                        'change',
                        this._updateHeightDebounced
                      );
                  });
              }
            }
            _setDynamicViewportUnit(e) {
              document.documentElement.style?.setProperty?.('--dvh-unit', e),
                document.documentElement.style?.setProperty?.(
                  '--viewport-height',
                  'calc(calc(var(--dvh-unit) * 100))'
                );
            }
          })[Ui] = !0),
          t);
    })(
      (function (e) {
        if (ut in e) return e;
        class t extends e {
          constructor() {
            super(...arguments),
              (this._windowEvents = new I(this, () => window)),
              (this._cache = new Map()),
              (this.subscribers = new Map()),
              (this.registerSubscriber = this._windowEvents.define(
                'pubsub-subscribe',
                (e) => {
                  const {
                    topic: t,
                    subscriber: n,
                    readCache: r,
                    readCacheOnce: o
                  } = e.detail;
                  this.getOrCreateTopicSubs(t)?.add(n),
                    r &&
                      this._cache.has(t) &&
                      (n(this._cache.get(t)), o && this._cache.delete(t));
                }
              )),
              (this.unregisterSubscriber = this._windowEvents.define(
                'pubsub-unsubscribe',
                (e) => {
                  const { topic: t, subscriber: n } = e.detail;
                  this.getOrCreateTopicSubs(t)?.delete(n);
                }
              )),
              (this.publish = this._windowEvents.define(
                'pubsub-publish',
                (e) => {
                  const { topic: t, data: n } = e.detail;
                  this.getOrCreateTopicSubs(t).forEach((e) => e(n)),
                    this._cache.set(t, n);
                }
              ));
          }
          getOrCreateTopicSubs(e) {
            return (
              this.subscribers.has(e) || this.subscribers.set(e, new Set()),
              this.subscribers.get(e)
            );
          }
        }
        return (t[ut] = !0), t;
      })(
        Et(
          (function (e) {
            if (Gn in e) return e;
            class t extends e {
              constructor(...e) {
                super(...e),
                  (this.isUserLoggedIn = !1),
                  (this._overlayEvents = new I(this)),
                  (this.displays = []),
                  (this.handleLoggedInAction = (e, t) => {
                    if (!this.isUserLoggedIn)
                      if (window.navigator.onLine) {
                        this.displayOverlay('auth-flow', {
                          ...e.detail,
                          ...t
                        }) || this.goToMweb();
                      } else this.showBrowserOfflineToast();
                  }),
                  (this.onLoggedInAction = (e, t) => {
                    const n = this.getActionSourceFromEvent(e),
                      r = e.detail?.thingType,
                      o = e.detail?.username,
                      a = e.detail?.subreddit_name;
                    this.handleLoggedInAction(e, {
                      ...t,
                      ...(r ? { thingType: r } : {}),
                      ...(o ? { username: o } : {}),
                      ...(a ? { subredditName: a } : {}),
                      actionSource: n
                    });
                  }),
                  (this.handleFaceplateTrack = (e, t) => {
                    const n = Me(e.detail);
                    Hn(st, n) &&
                      this.handleLoggedInAction(e, {
                        ...t,
                        actionSource: this.getActionSource(
                          e.detail?.action,
                          e.detail?.noun
                        ),
                        san: n
                      });
                  }),
                  (this.handleEventTrack = (e) => {
                    const t = Me(e.detail.details),
                      n = e.detail.details?.popup?.button_text;
                    Hn(st, t, n) &&
                      this.handleLoggedInAction(e, {
                        actionSource: this.getActionSource(
                          e.detail?.details?.action,
                          e.detail?.details?.noun
                        ),
                        san: t
                      });
                  }),
                  (this.registerDisplay = this._overlayEvents.define(
                    'register-overlay-display',
                    (e) => {
                      const t = e.detail.display;
                      -1 === this.displays.indexOf(t) && this.displays.push(t);
                    }
                  )),
                  (this.unregisterDisplay = this._overlayEvents.define(
                    'unregister-overlay-display',
                    (e) => {
                      const t = e.detail.display,
                        n = this.displays.indexOf(t);
                      -1 !== n && this.displays.splice(n, 1);
                    }
                  )),
                  (this.dismissOverlay = this._overlayEvents.define(
                    'dismiss-overlay',
                    () => {
                      for (const e of this.displays) e.dismissOverlay();
                    }
                  )),
                  this._overlayEvents.define(at.upvote, this.onLoggedInAction),
                  this._overlayEvents.define(
                    at.upvoteTry,
                    this.onLoggedInAction
                  ),
                  this._overlayEvents.define(
                    at.downvote,
                    this.onLoggedInAction
                  ),
                  this._overlayEvents.define(
                    at.downvoteTry,
                    this.onLoggedInAction
                  ),
                  this._overlayEvents.define(at.reply, this.onLoggedInAction),
                  this._overlayEvents.define(at.join, this.onLoggedInAction),
                  this._overlayEvents.define(at.signup, this.onLoggedInAction),
                  this._overlayEvents.define(at.save, this.onLoggedInAction),
                  this._overlayEvents.define(at.follow, this.onLoggedInAction),
                  this._overlayEvents.define(at.awards, this.onLoggedInAction),
                  this._overlayEvents.define(at.buy, this.onLoggedInAction),
                  this._overlayEvents.define(at.report, this.onLoggedInAction),
                  this._overlayEvents.define(
                    at['devvit-action'],
                    this.onLoggedInAction
                  ),
                  this._overlayEvents.define(
                    at['faceplate-track'],
                    this.handleFaceplateTrack
                  ),
                  this._overlayEvents.define(
                    at['track-event'],
                    this.handleEventTrack
                  );
              }
              goToMweb() {
                Yn.href = `${CLIENT_CONFIG.ORIGIN}/register/`;
              }
              displayOverlay(e, t) {
                let n = !1;
                for (const r of this.displays) r.displayOverlay(e, t), (n = !0);
                return n;
              }
              showBrowserOfflineToast() {
                const e = k('faceplate-alert', {
                  level: $.warning,
                  message: 'No internet connection. Please try again.'
                });
                this.dispatchEvent(e);
              }
              getActionSource(e, t) {
                if ('click' === e)
                  switch (t) {
                    case et.UpvoteComment:
                      return Ze.Upvote;
                    case et.DownvoteComment:
                      return Ze.Downvote;
                    case et.ReplyComment:
                      return Ze.Reply;
                    case et.Report:
                      return Ze.Report;
                  }
              }
              getActionSourceFromEvent(e) {
                return e.type === at.upvoteTry
                  ? Ze.Upvote
                  : e.type === at.downvoteTry
                    ? Ze.Downvote
                    : e.type;
              }
            }
            return (t[Gn] = !0), t;
          })(t)
        )
      )
    )
  ),
  ud = () => {},
  hd = [ws.FIRST_CONTENTFUL_PAINT, ...fs];
let gd = class extends md {
  constructor() {
    super(),
      (this.isUserLoggedIn = !1),
      (this.isBfCacheRestore = !1),
      (this.isNavigationControllerRestore = !1),
      (this.translationContextValue = Bi),
      (this.prefetch = !1),
      (this.debug = !1),
      (this.isBlank = !1),
      (this.routeName = ''),
      (this.actionInfoHydration = {}),
      (this.serverRenderId = ''),
      (this.correlationId = ''),
      (this.loid = ''),
      (this.canonicalUrl = ''),
      (this.deviceType = Zn.MOBILE),
      (this.referrer = document.referrer),
      (this.referrerType = er.Reddit),
      (this.browser = 'unknown'),
      (this.isCanary = !1),
      (this.shouldDisableSendBeacon = !1),
      (this.shouldUpdateRecaptcha = !1),
      (this.useLocalStorageEventsCaching = !1),
      (this.shouldTrackAppInstalled = !1),
      (this.appName = Pr),
      (this.moreCommentsRoute = ''),
      (this._moreCommentsRoute = ''),
      (this.microAppName = 'unknown'),
      (this.microAppPool = 'unknown'),
      (this.microAppDeployment = 'unknown'),
      (this.clientHash = ''),
      (this.skipStylingOverrideFetch = !1),
      (this.commentsPartialSSR = ''),
      (this.devvitAllowNavigation = !1),
      (this.disablePNs = !1),
      (this.perfMetrics = {}),
      (this.ttfb_fcp_sent = !1),
      (this.lcp_sent = !1),
      (this.cls_sent = !1),
      (this.success = !0),
      (this.screenViewData = {}),
      (this._events = new I(this)),
      (this._v2Events = new Wn(this, () => {})),
      (this._alertReporter = new Jn(this)),
      (this._screenReaderAlertReceiver = new Es(this)),
      (this._w3Reporter = new wo(this, () => ({
        auth_state: this.isUserLoggedIn ? 'logged_in' : 'logged_out',
        browser: this.browser,
        deployment_type: this.isCanary ? 'canary' : 'main',
        device_type: this.deviceType,
        page_type: (this.pageType ?? '').toLowerCase(),
        referrer_type: this.referrerType
      }))),
      (this._visibilityChange = new Vo(this)),
      (this._navigationController = new ds(this)),
      (this.adblockW3ReportController = new Ga(this)),
      (this._alertsBuffer = []),
      (this._connectBufferTimeMs = 2500),
      (this._isAlertBuffering = !0),
      (this.updateTranslationContextCookie = () => {
        In.set(
          'reddit_translation_status',
          JSON.stringify(this.translationContextValue),
          Xa
        );
      }),
      (this.handleOnline = () => {
        window.removeEventListener('faceplate-alert', ud);
        Array.from(document.querySelectorAll('faceplate-toast')).forEach((e) =>
          e.remove()
        );
      }),
      (this.handleOffline = () => {
        this._alertReporter.report({
          level: $.error,
          message: 'You seem to be offline. Connect to the internet to reload.'
        }),
          window.addEventListener('faceplate-alert', ud);
      }),
      (this.handleFaceplateTrack = (e) => {
        const t = e.detail,
          n = {
            ...At(t),
            action_info: {
              ...t.action_info,
              page_type: t.action_info?.page_type || this._getPageType()
            }
          };
        this._handleEvent(n);
      }),
      (this.handleUpdateTranslationContext = (e) => {
        const t = e?.detail;
        t &&
          'object' == typeof t &&
          ((this.translationContextValue = {
            ...this.translationContextValue,
            ...t
          }),
          this.updateTranslationContextCookie());
      }),
      (this.toggleSidebar = this._events.define('logo-click', () => {
        this.classList.toggle('sidebar-open');
      })),
      (this.onPageHide = () => {
        no(this._moreCommentsRoute);
      }),
      (this.onPageShow = async (e) => {
        const t =
            performance
              .getEntriesByType('navigation')
              .some((e) => 'back_forward' === e.type) ||
            performance.navigation.type ===
              PerformanceNavigation.TYPE_BACK_FORWARD,
          n = e.persisted,
          r = await this._w3Reporter.getW3ReportSender();
        t &&
          ((this.isBfCacheRestore = n),
          r({
            name: 'shreddit_page_shows_total',
            type: Bo.Counter,
            value: 1,
            labels: {
              browser: this.browser,
              cached: `${n}`,
              auth_state: this.isUserLoggedIn ? 'logged_in' : 'logged_out',
              page_type: this._getPageType()
            }
          }));
      }),
      (this.onFaceplateRequest = (e) => {
        this.addCSRFToken(e);
        const { body: t } = e.detail.request;
        if (
          (t?.meta && (t.meta.page_not_found = ''),
          '/svc/shreddit/perfMetrics' === e.detail.resource)
        ) {
          t.meta = {
            ...t.meta,
            route_name: this.routeName,
            page_type: this.pageType || '',
            prefetch: this.prefetch.toString(),
            microapp_name: this.microAppName,
            device_type: this.deviceType,
            is_ssr: this.commentsPartialSSR
              ? this.commentsPartialSSR
              : 'unknown'
          };
          const n = !!document.querySelector('shreddit-forbidden[not_found]'),
            r = !!(
              document.querySelector('shreddit-forbidden') ||
              document.querySelector('guard-community-modal') ||
              document.querySelector('.subreddit-content-error')
            );
          n && (t.meta.page_not_found = 1),
            (n || r) && (this.success = !1),
            this.handleWebVitalW3Reporting(t.metrics),
            this.batchPerfV2Event(t.metrics),
            t.metrics['first-contentful-paint'] &&
              !zi('shreddit_gvs_timing') &&
              this._visibilityChange.trackScreenview(),
            Object.keys(t.metrics).every((e) => !hd.includes(e)) &&
              e.preventDefault();
        }
      }),
      (this.onPixelFired = (e) => {
        const t = { level: $.debug, name: 'pixel', meta: e.detail };
        !this._alertReporter.report(t) &&
          this._isAlertBuffering &&
          this._alertsBuffer.push(t);
      }),
      (this._enrichScreenView = this._events.define(
        'screenview-data-loaded',
        (e) => {
          this.screenViewData = e.detail;
        }
      )),
      (this._updateCanonicalUrl = this._events.define(
        'canonical-url-updated',
        (e) => {
          this.canonicalUrl = e.detail;
        }
      )),
      (this._firstCommentUpdate = this._events.define(
        'first-comment-updated',
        () => {
          const e = this.querySelector('faceplate-partial.lb-lazy-preload');
          e && e.classList.remove('hidden');
        }
      )),
      (this._pageviewUnsuccessful = this._events.define(
        'unsuccessful-pageview',
        () => {
          this.success = !1;
        }
      )),
      (this._handleEvent = (e) => {
        eo(e, this._moreCommentsRoute);
        let t = {};
        if (this.debug)
          try {
            t = JSON.parse(
              document.getElementById('debug-event-data')?.value ?? '{}'
            );
          } catch (e) {
            console.error('Unable to parse JSON from `debug-event-data`.');
          }
        const [n, r] = Ai(e),
          o = {
            level: $.debug,
            name: 'v2event',
            message: n,
            meta: JSON.stringify({ ...gn(e, t), error: r })
          };
        !this._alertReporter.report(o) &&
          this._isAlertBuffering &&
          this._alertsBuffer.push(o);
      }),
      (this._trackEvent = this._events.define('track-event', async (e) => {
        const t = this._addEventDetails(e.detail.details);
        this._handleEvent(t);
      })),
      (this._getPageType = () => (this.pageType ?? '').toLowerCase()),
      (this._onLoadEmbed = this._events.define('on-load-embed', () => {
        var e;
        this.trackEvent(
          ((e = this.screenViewData),
          At({ source: nr.Global, action: rr.Load, noun: tr.Embed }, e))
        );
      })),
      (this._onEmbedClicked = this._events.define('on-embed-clicked', (e) => {
        this.trackEvent(
          ((e, t) => {
            const n = {
              ...e,
              action_info: { ...e?.action_info, type: yr.Whitespace }
            };
            return (
              t?.post && (n.post = t.post),
              t?.action_info?.position &&
                (n.action_info.position = t.action_info.position),
              At({ source: nr.Global, action: rr.Click, noun: tr.Embed }, n)
            );
          })(this.screenViewData, e.detail.details)
        );
      })),
      (this._onEmbedEntrypointClicked = this._events.define(
        'on-embed-entrypoint-clicked',
        (e) => {
          this.trackEvent(
            ((e, t) => {
              const n = { ...e };
              return (
                t?.comment && (n.comment = t?.comment),
                At(
                  { source: nr.Share, action: rr.Click, noun: tr.SnippetEmbed },
                  n
                )
              );
            })(this.screenViewData, e.detail.details)
          );
        }
      )),
      (this._onEmbedEntrypointViewed = this._events.define(
        'on-embed-entrypoint-viewed',
        (e) => {
          this.trackEvent(
            ((e, t) => {
              const n = {
                ...e,
                action_info: {
                  ...e?.action_info,
                  type: yr.HighlightTextComponent
                }
              };
              return (
                t?.comment && (n.comment = t?.comment),
                At(
                  { source: nr.Share, action: rr.View, noun: tr.HighlightMenu },
                  n
                )
              );
            })(this.screenViewData, e.detail.details)
          );
        }
      )),
      this.addEventListener(
        'update-translation-context',
        this.handleUpdateTranslationContext
      ),
      this.addEventListener('faceplate-request', this.onFaceplateRequest),
      window.addEventListener('pixelFired', this.onPixelFired),
      window.addEventListener('faceplate-track', this.handleFaceplateTrack),
      window.addEventListener('offline', this.handleOffline),
      window.addEventListener('online', this.handleOnline),
      window.addEventListener('beforeRoute', () => no(this._moreCommentsRoute));
    try {
      const e =
        this.querySelector('shreddit-screenview-data')?.getAttribute('data') ||
        '{}';
      this.screenViewData = JSON.parse(e);
    } catch (e) {
      console.error('invalid screenview data');
    }
    const e = this.querySelector('shreddit-canonical-url-updater');
    (this.canonicalUrl = e?.getAttribute('value') ?? ''),
      this._setTimeoutForAlertBuffer();
  }
  get csrfProviderToken() {
    return In.get('csrf_token') ?? '';
  }
  static get styles() {
    return [De, Ne(':host {\n  display: block;\n}\n')];
  }
  render() {
    return this.isBlank
      ? s`<devvit-effect-wrapper \n loid="${this.loid}" \n ?devvitAllowNavigation="${this.devvitAllowNavigation}" \n>\n <slot></slot>\n </devvit-effect-wrapper>`
      : s`\n <devvit-effect-wrapper \n loid="${this.loid}" \n ?devvitAllowNavigation="${this.devvitAllowNavigation}" \n>\n <slot></slot>\n </devvit-effect-wrapper>\n `;
  }
  connectedCallback() {
    super.connectedCallback(),
      window.addEventListener('pageshow', this.onPageShow),
      window.addEventListener('pagehide', this.onPageHide),
      (this._moreCommentsRoute = this.moreCommentsRoute),
      this.removeAttribute('more-comments-route'),
      fo.setCorrelationId(this.correlationId),
      (Ba.deviceType = this.deviceType);
    Yi('shreddit_gvs_timing') === $i.shreddit_on_mount &&
      this._visibilityChange.trackScreenview(),
      vs() &&
        !document.documentElement.classList.contains('theme-dark') &&
        document.documentElement.classList.add('theme-dark'),
      this.skipStylingOverrideFetch ||
        (this.styleOverrideController = new Wa(this)),
      this.shouldTrackAppInstalled &&
        (async (e = window) =>
          At(
            { source: 'onboarding', action: 'check', noun: 'app_install' },
            { action_info: { type: await ks(e) } }
          ))().then((e) => this.trackEvent(e)),
      this.pageType !== Zt.Embed &&
        (async (e = navigator.serviceWorker) => {
          const t = window.CLIENT_EXPERIMENTS ?? {},
            n = 'enabled' === t.shreddit_service_worker_registration;
          if ('enabled' === t.shreddit_service_worker_killswitch) {
            const t = await e?.getRegistrations();
            for (const e of t) e.unregister();
          } else if (n) {
            try {
              const t = await e?.register('/sw.js', {
                type: 'module',
                updateViaCache: 'all'
              });
              ld.resolve(t);
            } catch (e) {
              return void ld.reject(e);
            }
            cd(e),
              pd(e),
              dd ||
                (window.addEventListener('afterRoute', () => cd(e)), (dd = !0));
          }
        })().then(() => {
          !(async function (e = navigator.serviceWorker, t = ad()) {
            if ((await sd(e, t)) !== td.Enabled) return !1;
            const n = Number(Xr.getItem('push-token-last-refresh-ms') ?? '0');
            !(Date.now() - n < 144e5) && od(!0, e);
          })();
        });
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      window.removeEventListener('pageshow', this.onPageShow),
      window.removeEventListener('pagehide', this.onPageHide),
      window.removeEventListener('pixelFired', this.onPixelFired),
      window.removeEventListener('faceplate-track', this.handleFaceplateTrack),
      window.removeEventListener('offline', this.handleOffline),
      window.removeEventListener('online', this.handleOnline);
  }
  addCSRFToken(e) {
    const t = e.detail.request.body;
    t &&
      ('function' != typeof t.append
        ? Object.getPrototypeOf(t) === Object.getPrototypeOf({}) &&
          (t.csrf_token = this.csrfProviderToken)
        : t.append('csrf_token', this.csrfProviderToken));
  }
  trackClickWordmark() {
    this.trackEvent(lo());
  }
  buildPerfEvent(e, t) {
    return {
      source: 'client',
      action: 'record',
      noun: e,
      perf_metrics: t,
      action_info: { page_type: this.pageType }
    };
  }
  batchPerfV2Event(e) {
    const t = { ...this.perfMetrics, ...e };
    if (
      ((this.perfMetrics = t),
      this.debug && (window.perfMetrics = this.perfMetrics),
      !this.ttfb_fcp_sent &&
        void 0 !== t['first-contentful-paint'] &&
        void 0 !== t['time-to-first-byte'])
    ) {
      const e = {
          time_to_first_byte: t['time-to-first-byte'],
          first_contentful_paint: t['first-contentful-paint']
        },
        n = this.buildPerfEvent('ttfb_fcp', e);
      this._visibilityChange._screenviewId &&
        (n.screenview_id = this._visibilityChange._screenviewId),
        this._handleEvent(At(n)),
        (this.ttfb_fcp_sent = !0);
    }
    if (!this.cls_sent && void 0 !== t[ws.CUMULATIVE_LAYOUT_SHIFT]) {
      const e = { cumulative_layout_shift: t[ws.CUMULATIVE_LAYOUT_SHIFT] },
        n = this.buildPerfEvent('cls', e);
      this._handleEvent(At(n)), (this.cls_sent = !0);
    }
    if (!this.lcp_sent && void 0 !== t[ws.LARGEST_CONTENTFUL_PAINT]) {
      const e = { largest_contentful_paint: t[ws.LARGEST_CONTENTFUL_PAINT] },
        n = this.buildPerfEvent('lcp', e);
      this._handleEvent(At(n)), (this.lcp_sent = !0);
    }
  }
  handleWebVitalW3Reporting(e, t = !1) {
    Object.entries(e).forEach(async ([e, n]) => {
      if (!(isFinite(n) && n > 0)) return;
      const r = {
        device_type: this.deviceType,
        is_logged_in: this.isUserLoggedIn ? 'true' : 'false',
        microapp_deployment: this.microAppDeployment,
        microapp_name: this.microAppName,
        microapp_pool: this.microAppPool,
        page_type: this.pageType || '',
        route_name: this.routeName,
        hybrid_nav: t ? 'true' : 'false',
        comments_lit_ssr: this.commentsPartialSSR
          ? this.commentsPartialSSR
          : 'unknown'
      };
      switch (e) {
        case 'first-contentful-paint':
          this._w3ReportWebVital({
            name: 'shreddit_first_contentful_paint_seconds',
            type: Bo.Histogram,
            value: n / 1e3,
            labels: r
          });
          break;
        case 'largest-contentful-paint':
          this._w3ReportWebVital({
            name: 'shreddit_largest_contentful_paint_seconds',
            type: Bo.Histogram,
            value: n / 1e3,
            labels: r
          });
          break;
        case 'time-to-first-byte':
          this._w3ReportWebVital({
            name: 'shreddit_time_to_first_byte_seconds',
            type: Bo.Histogram,
            value: n / 1e3,
            labels: r
          });
          break;
        case 'cumulative-layout-shift':
          this._w3ReportWebVital({
            name: 'shreddit_cumulative_layout_shift',
            type: Bo.Histogram,
            value: n,
            labels: r
          });
          break;
        case 'interaction-to-next-paint':
          this._w3ReportWebVital({
            name: 'shreddit_interaction_to_next_paint_seconds',
            type: Bo.Histogram,
            value: n / 1e3,
            labels: r
          });
      }
    });
  }
  _w3ReportWebVital(...e) {
    return Jo(...e);
  }
  _isScreenview(e) {
    return 'global' === e.source && 'view' === e.action && 'screen' === e.noun;
  }
  _addEventDetails(e) {
    return {
      ...e,
      action_info: {
        page_type: this._getPageType(),
        ...e.action_info,
        ...this.actionInfoHydration
      },
      user: e.user,
      request: { ...e.request, canonical_url: this.canonicalUrl }
    };
  }
  _setTimeoutForAlertBuffer() {
    const e = (e) => {
        this._isAlertBuffering &&
          (e.stopImmediatePropagation(), this._alertsBuffer.push(e.detail));
      },
      t = () => {
        this._alertsBuffer = this._alertsBuffer.filter(
          (e) => !this._alertReporter.report(e)
        );
      };
    this.addEventListener('faceplate-alert', e);
    const n = setInterval(t, 250);
    setTimeout(() => {
      clearInterval(n),
        t(),
        this.removeEventListener('faceplate-alert', e),
        (this._isAlertBuffering = !1),
        (this._alertsBuffer = []);
    }, this._connectBufferTimeMs);
  }
};
e(
  [
    Vn({ context: 'logged-in' }),
    n({ type: Boolean, attribute: 'user-logged-in' })
  ],
  gd.prototype,
  'isUserLoggedIn',
  void 0
),
  e(
    [Vn({ context: 'translation-context' }), x()],
    gd.prototype,
    'translationContextValue',
    void 0
  ),
  e([n({ type: Boolean })], gd.prototype, 'prefetch', void 0),
  e([n({ type: Boolean })], gd.prototype, 'debug', void 0),
  e([n({ type: Boolean })], gd.prototype, 'isBlank', void 0),
  e([n({ type: String })], gd.prototype, 'routeName', void 0),
  e([n({ type: String })], gd.prototype, 'pageType', void 0),
  e([n({ type: Object })], gd.prototype, 'actionInfoHydration', void 0),
  e([n({ type: String })], gd.prototype, 'serverRenderId', void 0),
  e([n({ type: String })], gd.prototype, 'correlationId', void 0),
  e([n({ type: String })], gd.prototype, 'loid', void 0),
  e([n({ type: String })], gd.prototype, 'canonicalUrl', void 0),
  e([n({ type: String })], gd.prototype, 'deviceType', void 0),
  e(
    [n({ type: String, attribute: 'referrer' })],
    gd.prototype,
    'referrer',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'referrer-type' })],
    gd.prototype,
    'referrerType',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'browser' })],
    gd.prototype,
    'browser',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'is-canary' })],
    gd.prototype,
    'isCanary',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'disable-send-beacon' })],
    gd.prototype,
    'shouldDisableSendBeacon',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'update-recaptcha' })],
    gd.prototype,
    'shouldUpdateRecaptcha',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'use-local-storage-events-caching' })],
    gd.prototype,
    'useLocalStorageEventsCaching',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'should-track-app-installed' })],
    gd.prototype,
    'shouldTrackAppInstalled',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'app-name' })],
    gd.prototype,
    'appName',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'more-comments-route' })],
    gd.prototype,
    'moreCommentsRoute',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'microapp-name' })],
    gd.prototype,
    'microAppName',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'microapp-pool' })],
    gd.prototype,
    'microAppPool',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'microapp-deployment' })],
    gd.prototype,
    'microAppDeployment',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'clienthash' })],
    gd.prototype,
    'clientHash',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'skip-styling-override-fetch' })],
    gd.prototype,
    'skipStylingOverrideFetch',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'comments-partial-ssr' })],
    gd.prototype,
    'commentsPartialSSR',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'devvit-allow-navigation' })],
    gd.prototype,
    'devvitAllowNavigation',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'disable-pns' })],
    gd.prototype,
    'disablePNs',
    void 0
  ),
  e([x()], gd.prototype, 'perfMetrics', void 0),
  (gd = e([g('shreddit-app')], gd));
y(
  'shreddit-logo',
  f` <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 216 216" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <defs> <linearGradient id="orangeredGradient" gradientTransform="rotate(90)"> <stop offset="0%" stop-color="#FE7B0E"></stop> <stop offset="100%" stop-color="#EF0A22"></stop> </linearGradient> </defs> ${f`<defs> <style>.snoo-cls-1{fill:url(#snoo-radial-gragient)}.snoo-cls-1,.snoo-cls-10,.snoo-cls-11,.snoo-cls-2,.snoo-cls-3,.snoo-cls-4,.snoo-cls-5,.snoo-cls-6,.snoo-cls-7,.snoo-cls-8,.snoo-cls-9{stroke-width:0}.snoo-cls-2{fill:url(#snoo-radial-gragient-2)}.snoo-cls-3{fill:url(#snoo-radial-gragient-3)}.snoo-cls-4{fill:url(#snoo-radial-gragient-4)}.snoo-cls-5{fill:url(#snoo-radial-gragient-6)}.snoo-cls-6{fill:url(#snoo-radial-gragient-8)}.snoo-cls-7{fill:url(#snoo-radial-gragient-5)}.snoo-cls-8{fill:url(#snoo-radial-gragient-7)}.snoo-cls-9{fill:#842123}.snoo-cls-10{fill:#ff4500}.snoo-cls-11{fill:#ffc49c}</style> <radialGradient id="snoo-radial-gragient" cx="169.75" cy="92.19" fx="169.75" fy="92.19" r="50.98" gradientTransform="translate(0 11.64) scale(1 .87)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#feffff"></stop> <stop offset=".4" stop-color="#feffff"></stop> <stop offset=".51" stop-color="#f9fcfc"></stop> <stop offset=".62" stop-color="#edf3f5"></stop> <stop offset=".7" stop-color="#dee9ec"></stop> <stop offset=".72" stop-color="#d8e4e8"></stop> <stop offset=".76" stop-color="#ccd8df"></stop> <stop offset=".8" stop-color="#c8d5dd"></stop> <stop offset=".83" stop-color="#ccd6de"></stop> <stop offset=".85" stop-color="#d8dbe2"></stop> <stop offset=".88" stop-color="#ede3e9"></stop> <stop offset=".9" stop-color="#ffebef"></stop> </radialGradient> <radialGradient id="snoo-radial-gragient-2" cx="47.31" fx="47.31" r="50.98" xlink:href="#snoo-radial-gragient"></radialGradient> <radialGradient id="snoo-radial-gragient-3" cx="109.61" cy="85.59" fx="109.61" fy="85.59" r="153.78" gradientTransform="translate(0 25.56) scale(1 .7)" xlink:href="#snoo-radial-gragient"></radialGradient> <radialGradient id="snoo-radial-gragient-4" cx="-6.01" cy="64.68" fx="-6.01" fy="64.68" r="12.85" gradientTransform="translate(81.08 27.26) scale(1.07 1.55)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#f60"></stop> <stop offset=".5" stop-color="#ff4500"></stop> <stop offset=".7" stop-color="#fc4301"></stop> <stop offset=".82" stop-color="#f43f07"></stop> <stop offset=".92" stop-color="#e53812"></stop> <stop offset="1" stop-color="#d4301f"></stop> </radialGradient> <radialGradient id="snoo-radial-gragient-5" cx="-73.55" cy="64.68" fx="-73.55" fy="64.68" r="12.85" gradientTransform="translate(62.87 27.26) rotate(-180) scale(1.07 -1.55)" xlink:href="#snoo-radial-gragient-4"></radialGradient> <radialGradient id="snoo-radial-gragient-6" cx="107.93" cy="166.96" fx="107.93" fy="166.96" r="45.3" gradientTransform="translate(0 57.4) scale(1 .66)" gradientUnits="userSpaceOnUse"> <stop offset="0" stop-color="#172e35"></stop> <stop offset=".29" stop-color="#0e1c21"></stop> <stop offset=".73" stop-color="#030708"></stop> <stop offset="1" stop-color="#000"></stop> </radialGradient> <radialGradient id="snoo-radial-gragient-7" cx="147.88" cy="32.94" fx="147.88" fy="32.94" r="39.77" gradientTransform="translate(0 .54) scale(1 .98)" xlink:href="#snoo-radial-gragient"></radialGradient> <radialGradient id="snoo-radial-gragient-8" cx="131.31" cy="73.08" fx="131.31" fy="73.08" r="32.6" gradientUnits="userSpaceOnUse"> <stop offset=".48" stop-color="#7a9299"></stop> <stop offset=".67" stop-color="#172e35"></stop> <stop offset=".75" stop-color="#000"></stop> <stop offset=".82" stop-color="#172e35"></stop> </radialGradient> </defs> <path class="snoo-cls-10" d="m108,0h0C48.35,0,0,48.35,0,108h0c0,29.82,12.09,56.82,31.63,76.37l-20.57,20.57c-4.08,4.08-1.19,11.06,4.58,11.06h92.36s0,0,0,0c59.65,0,108-48.35,108-108h0C216,48.35,167.65,0,108,0Z"></path> <circle class="snoo-cls-1" cx="169.22" cy="106.98" r="25.22"></circle> <circle class="snoo-cls-2" cx="46.78" cy="106.98" r="25.22"></circle> <ellipse class="snoo-cls-3" cx="108.06" cy="128.64" rx="72" ry="54"></ellipse> <path class="snoo-cls-4" d="m86.78,123.48c-.42,9.08-6.49,12.38-13.56,12.38s-12.46-4.93-12.04-14.01c.42-9.08,6.49-15.02,13.56-15.02s12.46,7.58,12.04,16.66Z"></path> <path class="snoo-cls-7" d="m129.35,123.48c.42,9.08,6.49,12.38,13.56,12.38s12.46-4.93,12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46,7.58-12.04,16.66Z"></path> <ellipse class="snoo-cls-11" cx="79.63" cy="116.37" rx="2.8" ry="3.05"></ellipse> <ellipse class="snoo-cls-11" cx="146.21" cy="116.37" rx="2.8" ry="3.05"></ellipse> <path class="snoo-cls-5" d="m108.06,142.92c-8.76,0-17.16.43-24.92,1.22-1.33.13-2.17,1.51-1.65,2.74,4.35,10.39,14.61,17.69,26.57,17.69s22.23-7.3,26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z"></path> <circle class="snoo-cls-8" cx="147.49" cy="49.43" r="17.87"></circle> <path class="snoo-cls-6" d="m107.8,76.92c-2.14,0-3.87-.89-3.87-2.27,0-16.01,13.03-29.04,29.04-29.04,2.14,0,3.87,1.73,3.87,3.87s-1.73,3.87-3.87,3.87c-11.74,0-21.29,9.55-21.29,21.29,0,1.38-1.73,2.27-3.87,2.27Z"></path> <path class="snoo-cls-9" d="m62.82,122.65c.39-8.56,6.08-14.16,12.69-14.16,6.26,0,11.1,6.39,11.28,14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14,6.05-13.56,15.2c-.42,9.15,4.97,13.83,12.04,13.83.17,0,.35,0,.52,0-6.44-.16-11.3-4.79-10.91-13.2Z"></path> <path class="snoo-cls-9" d="m153.3,122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26,0-11.1,6.39-11.28,14.33-.17-8.88,5.13-15.99,12.05-15.99,7.07,0,13.14,6.05,13.56,15.2.42,9.15-4.97,13.83-12.04,13.83-.17,0-.35,0-.52,0,6.44-.16,11.3-4.79,10.91-13.2Z"></path>`} </svg> `
);
let bd = class extends t {
  static get styles() {
    return Ne(
      ":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 192px;\n  isolation: isolate;\n}\n:host:before {\n  content: '';\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  background-color: var(--color-global-orangered);\n  opacity: 0.75;\n  border-radius: 100%;\n  animation: scaleout 1.5s infinite ease-in-out;\n}\n:host shreddit-logo {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n  z-index: 1;\n}\n@keyframes scaleout {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n"
    );
  }
  render() {
    return s` <shreddit-logo></shreddit-logo> `;
  }
};
bd = e([g('shreddit-loading')], bd);
let xd = class extends t {
  static get styles() {
    return i``;
  }
  render() {
    return s` <shreddit-loading></shreddit-loading> `;
  }
};
xd = e([g('shreddit-post-loading')], xd);
class vd extends t {
  render() {
    return s` <slot></slot> `;
  }
}
vd.styles = i`:host{display:block}`;
let wd = class extends vd {
  constructor() {
    super(...arguments), (this.pageTitle = '');
  }
  update(e) {
    super.update(e), this.setPageTitle(this.pageTitle);
  }
  setPageTitle(e) {
    (document.title = e),
      _s(this, { message: e, options: { priority: ys.assertive } });
  }
  connectedCallback() {
    super.connectedCallback(), this.setPageTitle(this.pageTitle);
  }
};
var fd;
e([n({ type: String, attribute: 'title' })], wd.prototype, 'pageTitle', void 0),
  (wd = e([g('shreddit-title')], wd)),
  (function (e) {
    e.HeaderHamburgerMenu = 'HeaderHamburgerMenu';
  })(fd || (fd = {}));
const yd = { [fd.HeaderHamburgerMenu]: !0 };
function _d(e) {
  if (!Xr.isAvailable()) return null;
  const t = Xr.getItem('optOuts');
  if (!t) return !0 === yd[e];
  const n =
    (function (e) {
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    })(t) ?? {};
  return Object.prototype.hasOwnProperty.call(n, e)
    ? n[e]
    : !!Object.prototype.hasOwnProperty.call(yd, e) && yd[e];
}
const Ed = 24,
  Sd = 1e3;
var kd;
!(function (e) {
  (e.Click = 'Click'),
    (e.View = 'View'),
    (e.SmartThrottlingCompletion = 'SmartThrottlingCompletion'),
    (e.SmartThrottlingImplicitDismiss = 'SmartThrottlingImplicitDismiss'),
    (e.SmartThrottlingExplicitDismiss = 'SmartThrottlingExplicitDismiss'),
    (e.ThrottleDay = 'ThrottleDay'),
    (e.ThrottleWeek = 'ThrottleWeek');
})(kd || (kd = {}));
const Td = (e) => {
  if (!Xr.isAvailable()) return null;
  const t = Xr.getItem('xpromo_data');
  try {
    const n = t && JSON.parse(t);
    return n && n[e];
  } catch (e) {
    return Xr.removeItem('xpromo_data'), null;
  }
};
function Id() {
  return new Date().setUTCHours(0, 0, 0, 0);
}
function Cd(e = 6048e5) {
  return Id() - e;
}
function Ad(e) {
  const t = Cd(),
    n = e.filter((e) => e >= t),
    r = new Date().getTime();
  return n.push(r), n;
}
const Pd = (e, t) => {
    if (!Xr.isAvailable()) return;
    const n = Xr.getItem('xpromo_data'),
      r = n && JSON.parse(n),
      o = ((e, t) => {
        const n = {
            clicks: e?.clicks || 0,
            views: e?.views || 0,
            smartThrottlingCompletion: e?.smartThrottlingCompletion ?? [],
            smartThrottlingImplicitDismiss:
              e?.smartThrottlingImplicitDismiss ?? [],
            smartThrottlingExplicitDismiss:
              e?.smartThrottlingExplicitDismiss ?? [],
            throttledUntil: e?.throttledUntil ?? null
          },
          r = Id();
        switch (t) {
          case kd.Click:
            n.clicks++;
            break;
          case kd.View:
            n.views++;
            break;
          case kd.SmartThrottlingCompletion:
            n.smartThrottlingCompletion = Ad(n.smartThrottlingCompletion);
            break;
          case kd.SmartThrottlingExplicitDismiss:
            n.smartThrottlingExplicitDismiss = Ad(
              n.smartThrottlingExplicitDismiss
            );
            break;
          case kd.SmartThrottlingImplicitDismiss:
            n.smartThrottlingImplicitDismiss = Ad(
              n.smartThrottlingImplicitDismiss
            );
            break;
          case kd.ThrottleDay:
            n.throttledUntil = r + 864e5;
            break;
          case kd.ThrottleWeek:
            n.throttledUntil = r + 6048e5;
        }
        return n;
      })(r && r[e], t),
      a = JSON.stringify({ ...r, [e]: { ...o } });
    Xr.setItem('xpromo_data', a);
  },
  Rd = (e) => {
    Pd(e, kd.SmartThrottlingCompletion);
  },
  Od = (e) => {
    Pd(e, kd.SmartThrottlingExplicitDismiss);
  },
  Nd = (e) => {
    Pd(e, kd.SmartThrottlingImplicitDismiss);
  };
function Dd(e, t, n) {
  let r = [];
  t === kd.SmartThrottlingCompletion
    ? (r = ((e) => Td(e)?.smartThrottlingCompletion)(e))
    : t === kd.SmartThrottlingImplicitDismiss
      ? (r = ((e) => Td(e)?.smartThrottlingImplicitDismiss)(e))
      : t === kd.SmartThrottlingExplicitDismiss &&
        (r = ((e) => Td(e)?.smartThrottlingExplicitDismiss)(e));
  const o = Id(),
    a = Cd(n);
  return (r?.filter((e) => e >= a && e < o) || []).length;
}
function Ld(e, t, n = 3) {
  if (!Xr.isAvailable()) return !1;
  const r = (function (e) {
    return Td(e)?.throttledUntil;
  })(e);
  if (r && r >= new Date().getTime()) return !0;
  if ((864e5 === t || 6048e5 === t) && Number.isFinite(n)) {
    const r =
      (function (e, t) {
        return Dd(e, kd.SmartThrottlingExplicitDismiss, t);
      })(e) +
        (function (e, t) {
          return Dd(e, kd.SmartThrottlingImplicitDismiss, t);
        })(e) >=
      n;
    return (
      r &&
        (864e5 === t
          ? ((e) => {
              Pd(e, kd.ThrottleDay);
            })(e)
          : ((e) => {
              Pd(e, kd.ThrottleWeek);
            })(e)),
      r
    );
  }
  return !1;
}
var Md;
function Ud(e) {
  return (t = e), !!Object.values(fd).includes(t) && (_d(e) ?? !1);
  var t;
}
!(function (e) {
  (e.AppSelector = 'app_selector'),
    (e.CommunityPreview = 'community_preview'),
    (e.GeoBlocking = 'geo_blocking'),
    (e.NsfwBlocking = 'nsfw_blocking'),
    (e.SignUpDrawer = 'sign_up_drawer'),
    (e.UnreviewedCommunityBlocking = 'unreviewed_community_blocking');
})(Md || (Md = {}));
let Fd = class extends t {
  constructor() {
    super(...arguments),
      (this.activeExperiences = []),
      (this._experiencePartialSrc = []),
      (this.handleToggleXPromoOptout = () => {
        this.processTree();
      });
  }
  static get styles() {
    return [De];
  }
  render() {
    const e = s` <slot hidden></slot> `,
      t = this._experiencePartialSrc.map((e) => {
        if (this.appInstalledStatus)
          try {
            const t = new URL(e, CLIENT_CONFIG.ORIGIN);
            return (
              t.searchParams.set('appInstalledStatus', this.appInstalledStatus),
              s` <faceplate-partial src="${t.pathname}${t.search}"></faceplate-partial> `
            );
          } catch (t) {
            console.error(
              `Failed to include "relatedAppStatus" in "${e}" partial url`,
              t
            );
          }
        return s` <faceplate-partial src="${e}"></faceplate-partial> `;
      });
    return s`\n <div>${t}</div>\n ${e}\n `;
  }
  firstUpdated() {
    this.processTree();
  }
  async processTree() {
    (this.appInstalledStatus = await ks()),
      this.children.length &&
        ((this._experiencePartialSrc = []),
        this.processNode(this.children[0]),
        this.requestUpdate());
  }
  getInterval(e) {
    const t = e.getAttribute('data-interval');
    if (!t) return null;
    const n = Number.parseInt(t);
    return Number.isFinite(n) ? n : null;
  }
  getActiveExperienceNames() {
    const e = [];
    for (const t of this._experiencePartialSrc) {
      const n = new URL(t, window.location.href),
        r = n.searchParams.get('names');
      r && r.split(',').forEach((t) => e.push(t));
      const o = n.searchParams.get('uxtsNames');
      o && o.split(',').forEach((t) => e.push(t));
    }
    return e;
  }
  addExperiencePartial(e) {
    this._experiencePartialSrc.push(e),
      (this.activeExperiences = this.getActiveExperienceNames());
  }
  processNode(e) {
    if ('branch' === e.getAttribute('data-node-type')) {
      const t = e.getAttribute('data-key') || '',
        n = this.getInterval(e),
        r = e.getAttribute('data-threshold'),
        o = e.getAttribute('data-xpromo-ls-tracking-key'),
        a = e.getAttribute('data-app-installed-status');
      let i;
      if (
        ((i =
          t && n
            ? (function (e, t) {
                if (!Xr.isAvailable()) return !1;
                const n = new Date().getTime(),
                  r = Xr.getItem(e);
                return !r || n - new Date(r).getTime() >= t;
              })(t, n)
            : o && Object.values(Md).includes(o) && n && r
              ? Ld(o, n, parseInt(r, 10))
              : a
                ? a === this.appInstalledStatus
                : Ud(t)),
        !e.children)
      )
        return;
      const s = e.children[0],
        d = e.children[1];
      i && s ? this.processNode(s) : d && this.processNode(d);
    } else
      for (let t = 0; t < e.children.length; t++) {
        const n = e.children[t].value;
        n && this.addExperiencePartial(n);
      }
  }
  connectedCallback() {
    super.connectedCallback(),
      document.addEventListener(
        'toggle-xpromo-optout',
        this.handleToggleXPromoOptout
      );
  }
  disconnectedCallback() {
    document.removeEventListener(
      'toggle-xpromo-optout',
      this.handleToggleXPromoOptout
    ),
      super.disconnectedCallback();
  }
};
e(
  [n({ type: Array, reflect: !0, attribute: 'active-experiences' })],
  Fd.prototype,
  'activeExperiences',
  void 0
),
  (Fd = e([g('shreddit-experience-tree')], Fd));
let Vd = class extends vd {
  constructor() {
    super(...arguments),
      (this.href = ''),
      (this.delay = 0),
      (this._timeout = void 0);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.delay > 0
        ? (this._timeout = window.setTimeout(() => this.redirect(), this.delay))
        : this.redirect();
  }
  disconnectedCallback() {
    window.clearTimeout(this._timeout);
  }
  redirect() {
    window.location.href !== this.href && window.location.replace(this.href);
  }
};
e([n({ type: String, attribute: 'href' })], Vd.prototype, 'href', void 0),
  e([n({ type: Number, attribute: 'delay' })], Vd.prototype, 'delay', void 0),
  (Vd = e([g('shreddit-redirect')], Vd));
const Bd = (() => {
    const e = 'test';
    try {
      return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
    } catch (e) {
      return !1;
    }
  })(),
  Wd = () => {
    if (window.serverTimestamp && Bd) {
      const { serverTimestamp: e } = window;
      try {
        const t = sessionStorage.getItem('serverTimestamps');
        if (t) {
          return JSON.parse(t)[`${e}`];
        }
      } catch (e) {}
    }
    const e = window.performance.getEntriesByType('navigation')[0];
    return e && e.responseEnd - e.responseStart < 8;
  };
let Hd = class extends t {
  connectedCallback() {
    super.connectedCallback(), (window.serverTimestamp = this.timestamp);
    const e = `${this.timestamp}`;
    if (Bd) {
      const t = sessionStorage.getItem('serverTimestamps') || '{}';
      let n = {};
      try {
        n = JSON.parse(t);
      } catch (e) {
        sessionStorage.setItem('serverTimestamps', '{}');
      }
      sessionStorage.setItem(
        'serverTimestamps',
        JSON.stringify(
          Object.assign(Object.assign({}, n), { [e]: void 0 !== n[e] })
        )
      );
    }
  }
};
e([n({ type: Number })], Hd.prototype, 'timestamp', void 0),
  (Hd = e([g('faceplate-server-session')], Hd));
const Gd = Symbol('mixins/connect-event');
let Yd = class extends (function (e) {
  if (Gd in e) return e;
  class t extends e {
    connectedCallback() {
      super.connectedCallback && super.connectedCallback(),
        window.queueMicrotask(() => this.dispatchConnectEvent());
    }
    dispatchConnectEvent() {
      if (!this.isConnected) return;
      const e = this.makeConnectEvent();
      return this.dispatchEvent(e), e;
    }
    makeConnectEvent() {
      throw new Error(
        'FaceplateEvent makeConnectEvent() method not implemented!'
      );
    }
  }
  return (t[Gd] = !0), t;
})(HTMLElement) {
  makeConnectEvent() {
    const e = this.getAttribute('level');
    let t;
    if (e) {
      const n = e.toLowerCase();
      if (!Object.hasOwnProperty.call($, n))
        return k(
          'faceplate-error',
          new Error(
            `Unknown level value "${e}" specified on <faceplate-alert> element`
          )
        );
      const r = parseInt(n, 10);
      t = isNaN(r) ? $[n] : r;
    }
    const n = this.getAttribute('message'),
      r = this.getAttribute('name'),
      o = this.getAttribute('meta'),
      a = this.getAttribute('count');
    return k('faceplate-alert', {
      level: t,
      name: r || void 0,
      message: n || void 0,
      meta: o || void 0,
      count: null === a ? 1 : parseInt(a),
      originalAlert: this,
      emitTime: window.performance.now()
    });
  }
  dispatchConnectEvent() {
    super.dispatchConnectEvent(),
      this.hasAttribute('auto-remove') &&
        'false' !== this.getAttribute('auto-remove') &&
        this.remove();
  }
};
Yd = e([g('faceplate-alert')], Yd);
const zd = 'force_seo',
  jd = 'p',
  qd = 'impressionid',
  $d = 'campaignId',
  Xd = 'forceAutoplay',
  Kd = 'unloadPixelTimeout',
  Qd = 'ti';
var Jd;
!(function (e) {
  (e.Posts = 'link'),
    (e.Subreddits = 'sr'),
    (e.Users = 'user'),
    (e.Comments = 'comment'),
    (e.Media = 'media');
})(Jd || (Jd = {})),
  new Set([Jd.Posts, Jd.Subreddits, Jd.Users, Jd.Comments, Jd.Media]);
const Zd = {
  DAY: 'day',
  HOUR: 'hour',
  WEEK: 'week',
  MONTH: 'month',
  YEAR: 'year',
  ALL: 'all'
};
var el;
new Set(Object.values(Zd)),
  (function (e) {
    (e.Comments = 'comments'),
      (e.Hot = 'hot'),
      (e.New = 'new'),
      (e.Relevance = 'relevance'),
      (e.Top = 'top');
  })(el || (el = {}));
const tl = el.Relevance;
new Set([el.Comments, el.Hot, el.New, el.Relevance, el.Top]),
  new Set([el.Hot, el.New]);
const nl = 5;
var rl, ol, al, il, sl, dl, ll, cl;
!(function (e) {
  (e.Trending = 'trending'),
    (e.PromotedTrend = 'promoted_trend'),
    (e.Recent = 'recent'),
    (e.TrendingApproval = 'trending_approval_tool');
})(rl || (rl = {})),
  (function (e) {
    (e.PromotedTrend = 'promoted_trend'),
      (e.Search = 'search'),
      (e.SearchBar = 'search_bar'),
      (e.Trending = 'trending');
  })(ol || (ol = {})),
  (function (e) {
    e.Spellcheck = 'spellcheck';
  })(al || (al = {})),
  (function (e) {
    (e.PostCommunity = 'post_community'),
      (e.PostProfile = 'post_profile'),
      (e.PostTitle = 'post_title'),
      (e.PostBody = 'post'),
      (e.PostThumbnail = 'post_thumbnail');
  })(il || (il = {})),
  (function (e) {
    (e.Comment = 'comment'),
      (e.CommentAuthor = 'comment_author'),
      (e.CommentSearchBar = 'comment_search_bar'),
      (e.GoToThreadLink = 'go_to_comment_link');
  })(sl || (sl = {})),
  (function (e) {
    (e.Posts = 'posts'),
      (e.Communities = 'communities'),
      (e.People = 'people'),
      (e.Comments = 'comments'),
      (e.Media = 'media');
  })(dl || (dl = {})),
  (function (e) {
    (e.PdpCommentSearchInput = 'pdp-comment-search-input'),
      (e.HeaderSmall = 'reddit-header-small'),
      (e.HeaderLarge = 'reddit-header-large');
  })(ll || (ll = {})),
  (function (e) {
    (e.commentComposerHost =
      'shreddit-async-loader[bundleName=comment_composer]'),
      (e.addCommentButton =
        'faceplate-tracker[source=shreddit_comment_count_button]'),
      (e.pdpCommentsTreeSortContainer = '.pdp-comments-tree-sort-container'),
      (e.pdpCommentSearchInput = 'pdp-comment-search-input'),
      (e.pdpAmaCommentTabWrapper = '.pdp-ama-comment-tab-wrapper'),
      (e.shredditCommentsSortDropdown = 'shreddit-comments-sort-dropdown');
  })(cl || (cl = {})),
  dl.Posts,
  Jd.Posts,
  dl.Communities,
  Jd.Subreddits,
  dl.People,
  Jd.Users,
  dl.Comments,
  Jd.Comments,
  dl.Media,
  Jd.Media;
const pl = {
  [Jd.Posts]: dl.Posts,
  [Jd.Subreddits]: dl.Communities,
  [Jd.Users]: dl.People,
  [Jd.Comments]: dl.Comments,
  [Jd.Media]: dl.Media
};
var ml, ul, hl, gl;
!(function (e) {
  (e.Covid = 'covid'),
    (e.Election = 'election'),
    (e.NsfwSetting = 'nsfw_setting');
})(ml || (ml = {})),
  (function (e) {
    (e.Serp = 'serp'),
      (e.Qf = 'qf'),
      (e.PopularCarousel = 'popular_carousel'),
      (e.PdpCommentSearch = 'pdp_comment_search'),
      (e.PdpCommentSearchBar = 'pdp_comment_search_bar');
  })(ul || (ul = {})),
  (function (e) {
    (e.IsBlank = 'data-is-blank'), (e.IsPromoted = 'data-is-promoted');
  })(hl || (hl = {})),
  (function (e) {
    (e.GLOBAL = 'global'),
      (e.COMMUNITY = 'community'),
      (e.PDP = 'pdp'),
      (e.PROFILE = 'profile'),
      (e.CUSTOM_FEED = 'custom_feed');
  })(gl || (gl = {}));
const bl = { type: gl.GLOBAL, path: '/' },
  xl = new Set([Zt.Home, Zt.Popular, Zt.Community, Zt.MFeed]),
  vl = new Set([
    Zt.SearchResults,
    Zt.SearchDropdown,
    Zt.PostDetail,
    'search_results_trending',
    'typeahead',
    'search_dropdown',
    'search_authors_tab',
    'search_comments_tab',
    'search_communities_tab',
    'search_posts_tab'
  ]),
  wl = new Set([...xl, ...vl]),
  fl = new Set([
    Zt.PostDetail,
    Zt.SingleCommentThread,
    Zt.Community,
    Zt.ProfileOverview,
    Zt.MFeed
  ]);
function yl() {
  const e = Xr.getItem($r.GoodVisitFS);
  return e ? JSON.parse(e) : null;
}
function _l(e) {
  let t = !1,
    n = !1;
  e === Zt.Klp && (t = !0);
  const r = (function () {
    const e = Xr.getItem($r.GoodVisitKLP);
    if (e) return JSON.parse(e);
    return null;
  })();
  if (r) {
    const e = new Date(r.expires) <= new Date(),
      t = r.source === Zt.Klp;
    !e && t && (n = !0);
  }
  return { isKLPSession: t, isKLPLocalStorageSession: n };
}
const El = () => Xr.setItem('seen-nsfw-seo-block', Date.now().toString()),
  Sl = () => Xr.setItem('seen-unrated-seo-block', Date.now().toString());
const kl = gt(Et(t)),
  Tl = Math.max(3e4, 3e4, 3e4, 3e4);
let Il = class extends kl {
  constructor() {
    super(),
      (this.referrerType = er.Reddit),
      (this.isInInstantNsfwXpromoExperiment = !1),
      (this.isInNsfwSeoTimingTreatment = !1),
      (this.nsfwSeoDelayFirstVisit = 3e4),
      (this.nsfwSeoDelaySubsequentVisit = 3e4),
      (this.pageType = Zt.Unknown),
      (this.screenViewDataAttr = void 0),
      (this.isInUnratedSeoTimingTreatment = !1),
      (this.unratedSeoDelayFirstVisit = 3e4),
      (this.unratedSeoDelaySubsequentVisit = 3e4),
      (this.localStorageAvailable = !1),
      (this.timeoutId = null),
      (this.count = null),
      (this.goodVisitQueue = []),
      (this.hasSeoSession = null),
      (this.updatedAt = null),
      (this.initialized = !1),
      (this.screenViewData = {}),
      (this.timerCompletedSet = new Set()),
      (this.isFeedSearchSession = null),
      (this.isFeedSearchLocalStorageSession = null),
      (this.isKLPSession = null),
      (this.isKLPLocalStorageSession = null),
      (this.leaveEventType = 'beforeunload'),
      (this._windowEvents = new I(this, () => window)),
      (this.pageHideListener = () => {
        this.clearTimeout(), this.saveState();
      }),
      (this.pageShowListener = () => {
        this.boot();
      }),
      (this.screenViewDataLoadedListener = (e) => {
        this.screenViewData = e;
      }),
      (this.isFirstVisitOrBlockEnded = (e) => {
        const t =
          ((n = e.key), Number(Xr.getItem(n || 'seen-nsfw-seo-block') || 0));
        var n;
        return (
          0 === t ||
          (t > 0 &&
            void 0 !== e.unblockAfterDelay &&
            Date.now() > t + e.unblockAfterDelay)
        );
      }),
      (this.isFirstVisitOrNSFWBlockEnded = () =>
        this.isFirstVisitOrBlockEnded(this.nsfwTiming)),
      (this.storePlatformGoodVisit = () => {
        !(function (e, t, n) {
          let r = e,
            o = {};
          if (!wl.has(e)) return;
          if (vl.has(e)) {
            if (((o = n ? JSON.parse(n) : { search: t.search }), !o.search))
              return;
            o?.search?.structure_type &&
              [ol.Trending, ol.PromotedTrend].includes(
                o?.search?.structure_type
              ) &&
              (r = Zt.SearchResultsTrending);
          }
          xl.has(e) &&
            (o = { timer: { referrer_correlation_id: fo.getCorrelationId() } });
          const a = JSON.stringify({
            key: ln(),
            source: r,
            expires: new Date(new Date().getTime() + 5e3),
            eventPayload: o
          });
          Xr.setItem($r.GoodVisitFS, a);
        })(this.pageType, this.screenViewData, this.screenViewDataAttr);
      }),
      (this.storePlatformKLPGoodVisit = () => {
        !(function (e, t) {
          if (e !== Zt.Klp) return;
          const n = JSON.stringify({
            key: ln(),
            source: Zt.Klp,
            expires: new Date(new Date().getTime() + 5e3),
            eventPayload: t
          });
          Xr.setItem($r.GoodVisitKLP, n);
        })(this.pageType, this.screenViewData);
      }),
      (this._onPageLeave = () => {
        this.isKLPSession
          ? this.storePlatformKLPGoodVisit()
          : this.storePlatformGoodVisit(),
          (this.screenViewData = {});
      }),
      (this._onPagehide = this._windowEvents.define(
        'pagehide',
        this.pageHideListener
      )),
      (this._onPageshow = this._windowEvents.define(
        'pageshow',
        this.pageShowListener
      )),
      (this._onBeforeRoute = this._windowEvents.define(
        'beforeRoute',
        this._onPageLeave
      )),
      (this.shouldMarkSeoBlockAsSeen = (e) =>
        this.isSeoSession && this.isFirstVisitOrBlockEnded(e)),
      (this.shouldMarkNsfwSeoBlockAsSeen = () =>
        this.shouldMarkSeoBlockAsSeen(this.nsfwTiming)),
      (this.shouldMarkUnratedSeoBlockAsSeen = () =>
        this.shouldMarkSeoBlockAsSeen(this.unratedTiming)),
      (this.tick = () => {
        null !== this.count &&
          ((this.count += 1e3),
          (this.updatedAt = new Date().getTime()),
          this.count >= this.getDelay(this.nsfwTiming) &&
            this.publishNSFWBlockingSignal(),
          this.count >= this.getDelay(this.unratedTiming) &&
            this.publishUntaggedBlockingSignal(),
          this.count >= 0 && this.publishRecapXpromoBlockingSignal(),
          this.goodVisitQueue.length > 0 &&
            this.count >= this.goodVisitQueue[0] &&
            this.trackGoodVisit(),
          this.count >= Tl
            ? this.clearState()
            : (this.timeoutId = window.setTimeout(this.tick, 1e3)));
      }),
      (this.isKLPReferredPage = () =>
        this.isPostPage() ||
        this.isTopicPage() ||
        this.isCommunityPage() ||
        this.isReferredKLPPage()),
      (this.isKLPGoodVisitSession = () =>
        this.isKLPSession ||
        (this.isKLPLocalStorageSession && this.isKLPReferredPage())),
      (this.isPostPage = () =>
        this.pageType === Zt.PostDetail ||
        this.pageType === Zt.SingleCommentThread),
      (this.isTopicPage = () => this.pageType === Zt.TopicPage),
      (this.isReferredKLPPage = () =>
        this.pageType === Zt.Klp && this.referrerType === er.Reddit),
      (this.isCommunityPage = () => this.pageType === Zt.Community),
      (this.clearTimeout = () => {
        null !== this.timeoutId && window.clearTimeout(this.timeoutId),
          (this.timeoutId = null);
      }),
      (this.trackGoodVisit = () => {
        if (this.goodVisitQueue.length > 0) {
          const e = (({ screenViewData: e, timer: t }) =>
            At(
              {
                source: nr.Global,
                action: rr.View,
                noun: gr({
                  noun: tr.Heartbeat,
                  pageType: e.action_info?.page_type
                })
              },
              { ...e, timer: t }
            ))(
            this.isKLPGoodVisitSession()
              ? (({
                  isGoodVisitFeedTimer: e,
                  millis: t,
                  screenViewData: n
                }) => ({
                  screenViewData: n,
                  timer: {
                    type: e ? ar.GoodVisitFeed : ar.GoodVisit,
                    millis: t
                  }
                }))({
                  isGoodVisitFeedTimer: this.isKLPReferredPage(),
                  millis: this.goodVisitQueue[0],
                  screenViewData: this.screenViewData
                })
              : (function ({
                  millis: e,
                  screenViewData: t,
                  isFeedSearchSession: n,
                  isFeedSearchLocalStorageSession: r
                }) {
                  let o,
                    a,
                    i = ar.GoodVisit;
                  if (n)
                    if (r) {
                      const e = yl();
                      o = e?.source;
                      const n = xl.has(e?.source),
                        r = vl.has(e?.source);
                      if (n) {
                        const { timer: t } = e?.eventPayload || {};
                        (i = ar.GoodVisitFeed),
                          (a = t?.referrer_correlation_id);
                      }
                      if (r) {
                        i = ar.GoodVisitSearch;
                        const { search: n } = e?.eventPayload || {};
                        t.search = {
                          ...(t?.search || {}),
                          ...(n || {}),
                          conversation_id: n?.conversation_id ?? '',
                          impression_id: n?.impression_id ?? '',
                          origin_page_type: n?.origin_page_type ?? '',
                          query: n?.query ?? '',
                          query_id: n?.query_id ?? ''
                        };
                      }
                    } else i = ar.GoodVisitSearch;
                  return {
                    screenViewData: t,
                    timer: {
                      type: i,
                      millis: e,
                      ...(o && { referrer: o }),
                      ...(a && { referrer_correlation_id: a })
                    }
                  };
                })({
                  millis: this.goodVisitQueue[0],
                  screenViewData: this.screenViewData,
                  isFeedSearchSession: this.isFeedSearchSession,
                  isFeedSearchLocalStorageSession:
                    this.isFeedSearchLocalStorageSession
                })
          );
          this.trackEvent(e), this.goodVisitQueue.shift();
        }
      }),
      (this.localStorageAvailable = Xr.isAvailable()),
      (this.leaveEventType = Mo.eventType);
  }
  getState() {
    return { count: this.count, updatedAt: this.updatedAt };
  }
  attributeChangedCallback(e, t, n) {
    super.attributeChangedCallback(e, t, n),
      'pagetype' === e && t !== n && (this.clearTimeout(), this.boot());
  }
  get isSeoSession() {
    return this.referrerType === er.Seo || !!this.hasSeoSession;
  }
  getDelay(e) {
    return this.isSeoSession
      ? this.isInInstantNsfwXpromoExperiment && this.isSeoSession
        ? 0
        : this.isFirstVisitOrBlockEnded(e)
          ? e.firstDelay
          : e.subsequentDelay
      : 0;
  }
  get nsfwBlockingDelay() {
    return this.getDelay(this.nsfwTiming);
  }
  get nsfwTiming() {
    return this.isInNsfwSeoTimingTreatment
      ? {
          firstDelay: this.nsfwSeoDelayFirstVisit,
          key: 'seen-nsfw-seo-block',
          subsequentDelay: this.nsfwSeoDelaySubsequentVisit,
          unblockAfterDelay: this.nsfwSeoUnblockAfter
        }
      : {
          firstDelay: 3e4,
          key: 'seen-nsfw-seo-block',
          subsequentDelay: 0,
          unblockAfterDelay: void 0
        };
  }
  get unratedTiming() {
    return this.isInUnratedSeoTimingTreatment
      ? {
          firstDelay: this.unratedSeoDelayFirstVisit,
          key: 'seen-unrated-seo-block',
          subsequentDelay: this.unratedSeoDelaySubsequentVisit,
          unblockAfterDelay: this.unratedSeoUnblockAfter
        }
      : {
          firstDelay: 3e4,
          key: 'seen-unrated-seo-block',
          subsequentDelay: 3e4,
          unblockAfterDelay: void 0
        };
  }
  connectedCallback() {
    if ((super.connectedCallback(), !this.initialized)) {
      if (
        ((this.initialized = !0),
        this.boot(),
        window.addEventListener(this.leaveEventType, this._onPageLeave),
        this.subscribe(
          lt.ScreenViewDataLoaded,
          this.screenViewDataLoadedListener
        ),
        window.location.search.includes('force_seo'))
      ) {
        const e = new URL(window.location.href);
        e.searchParams.delete('force_seo'),
          history.replaceState({}, '', e.toString());
      }
      this.subscribe(lt.ScreenViewDataLoaded, (e) => (this.screenViewData = e));
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      window.removeEventListener(
        this.leaveEventType,
        this.storePlatformGoodVisit
      ),
      this.unsubscribe(
        lt.ScreenViewDataLoaded,
        this.screenViewDataLoadedListener
      ),
      this.clearTimeout();
  }
  boot() {
    if (this.timeoutId) return;
    const { isFeedSearchSession: e, isFeedSearchLocalStorageSession: t } =
      (function (e, t) {
        let n = !1,
          r = !1;
        if (!fl.has(e))
          return { isFeedSearchSession: n, isFeedSearchLocalStorageSession: r };
        t === er.RedditSearch && (n = !0);
        const o = yl();
        if (o) {
          const e = new Date(o.expires) <= new Date(),
            t = wl.has(o.source);
          !e && t && ((n = !0), (r = !0));
        }
        return { isFeedSearchSession: n, isFeedSearchLocalStorageSession: r };
      })(this.pageType, this.referrerType);
    (this.isFeedSearchSession = e), (this.isFeedSearchLocalStorageSession = t);
    const { isKLPSession: n, isKLPLocalStorageSession: r } = _l(this.pageType);
    (this.isKLPSession = n),
      (this.isKLPLocalStorageSession = r),
      this.referrerType === er.Seo ||
      this.isFeedSearchSession ||
      this.isKLPGoodVisitSession()
        ? this.initState()
        : this.referrerType === er.Other
          ? (this.publishAllBlockingSignals(), this.clearState())
          : this.loadState(),
      this.tick();
  }
  publishBlockingSignal(e, t) {
    this.timerCompletedSet.has(e) ||
      (t ? this.publish(e, t) : this.publish(e), this.timerCompletedSet.add(e));
  }
  publishNSFWBlockingSignal() {
    this.publishBlockingSignal(lt.TriggerNsfwBlockingExperience, {
      shouldMarkNsfwSeoBlockAsSeen: this.shouldMarkNsfwSeoBlockAsSeen()
    });
  }
  publishUntaggedBlockingSignal() {
    this.publishBlockingSignal(lt.TriggerUntaggedContentBlockingExperience, {
      shouldMarkUnratedSeoBlockAsSeen: this.shouldMarkUnratedSeoBlockAsSeen()
    });
  }
  publishRecapXpromoBlockingSignal() {
    this.timerCompletedSet.has(lt.TriggerRecapXpromoBlockingExperience) ||
      (this.publish(lt.TriggerRecapXpromoBlockingExperience),
      this.timerCompletedSet.add(lt.TriggerRecapXpromoBlockingExperience));
  }
  publishAllBlockingSignals() {
    this.publishNSFWBlockingSignal(),
      this.publishUntaggedBlockingSignal(),
      this.publishRecapXpromoBlockingSignal();
  }
  initState() {
    (this.count = 0),
      (this.updatedAt = new Date().getTime()),
      this.isKLPGoodVisitSession() || this.isFeedSearchSession
        ? (this.goodVisitQueue = [15e3, 3e4])
        : this.referrerType === er.Seo && (this.goodVisitQueue = [3e4]);
  }
  clearState() {
    (this.hasSeoSession = !1),
      (this.count = null),
      (this.updatedAt = null),
      this.localStorageAvailable && Xr.removeItem($r.GoodVisit);
  }
  loadState() {
    if (!this.localStorageAvailable)
      return void this.publishAllBlockingSignals();
    const e = Xr.getItem($r.GoodVisit);
    var t;
    if (e)
      try {
        const n = JSON.parse(e);
        if (
          !(
            null !== (t = n) &&
            'number' == typeof t.count &&
            'number' == typeof t.updatedAt &&
            Array.isArray(t.goodVisitQueue) &&
            t.goodVisitQueue.every((e) => 'number' == typeof e)
          )
        )
          throw new Error('Invalid SEO session object');
        (this.hasSeoSession = !0),
          (this.count = n.count),
          (this.updatedAt = n.updatedAt),
          (this.goodVisitQueue = n.goodVisitQueue);
        const r = new Date().getTime();
        r - this.updatedAt > 5e3 &&
          (this.clearState(), this.publishAllBlockingSignals());
      } catch (e) {
        this.clearState(), this.publishAllBlockingSignals();
      }
    else this.publishAllBlockingSignals();
  }
  saveState() {
    if (!this.localStorageAvailable) return;
    if (null === this.count) return;
    const e = JSON.stringify({
      count: this.count,
      updatedAt: this.updatedAt,
      goodVisitQueue: this.goodVisitQueue
    });
    Xr.setItem($r.GoodVisit, e);
  }
};
e([n({ type: String })], Il.prototype, 'referrerType', void 0),
  e(
    [n({ type: Boolean })],
    Il.prototype,
    'isInInstantNsfwXpromoExperiment',
    void 0
  ),
  e([n({ type: Boolean })], Il.prototype, 'isInNsfwSeoTimingTreatment', void 0),
  e([n({ type: Number })], Il.prototype, 'nsfwSeoUnblockAfter', void 0),
  e([n({ type: Number })], Il.prototype, 'nsfwSeoDelayFirstVisit', void 0),
  e([n({ type: Number })], Il.prototype, 'nsfwSeoDelaySubsequentVisit', void 0),
  e([n({ type: Zt })], Il.prototype, 'pageType', void 0),
  e(
    [n({ type: String, attribute: 'screenview-data-attr' })],
    Il.prototype,
    'screenViewDataAttr',
    void 0
  ),
  e(
    [n({ type: Boolean })],
    Il.prototype,
    'isInUnratedSeoTimingTreatment',
    void 0
  ),
  e([n({ type: Number })], Il.prototype, 'unratedSeoUnblockAfter', void 0),
  e([n({ type: Number })], Il.prototype, 'unratedSeoDelayFirstVisit', void 0),
  e(
    [n({ type: Number })],
    Il.prototype,
    'unratedSeoDelaySubsequentVisit',
    void 0
  ),
  (Il = e([g('shreddit-good-visit-tracker')], Il));
let Cl = class extends t {
  constructor() {
    super(...arguments), (this.value = '');
  }
  connectedCallback() {
    super.connectedCallback(),
      this.dispatchEvent(k('canonical-url-updated', this.value));
  }
};
e([n({ type: String })], Cl.prototype, 'value', void 0),
  (Cl = e([g('shreddit-canonical-url-updater')], Cl));
const Al = gt(t);
let Pl = class extends Al {
  constructor() {
    super(...arguments),
      (this.isNsfwBlocked = !1),
      (this.nsfw = !1),
      (this.isEmbed = !1),
      (this.isEmbedFlexible = !1),
      (this.setNsfwIsBlocked = () => {
        this.nsfw = !0;
      });
  }
  static get styles() {
    return i`:host{--default-aspect-ratio:2;--configured-aspect-ratio:var(--aspect-ratio, var(--default-aspect-ratio));--computed-aspect-ratio:calc(100% / var(--configured-aspect-ratio));--default-min-height:150px;--configured-min-height:var(--min-height, var(--default-min-height));--default-max-height:100vh;--configured-max-height:var(--max-height, var(--default-max-height));--aspect-ratio-padding:min(
          max(var(--configured-min-height), var(--computed-aspect-ratio)),
          var(--configured-max-height)
        );display:block;height:0;padding-bottom:var(--aspect-ratio-padding);position:relative}:host([nsfw]){--configured-min-height:300px}slot{display:block;height:100%;position:absolute;width:100%}`;
  }
  connectedCallback() {
    super.connectedCallback(),
      this.isEmbed &&
        requestAnimationFrame(() => {
          const e = document.getElementById('embed-title')?.clientHeight;
          e &&
            (this.shadowRoot?.host.style.setProperty(
              '--max-height',
              (this.isEmbedFlexible
                ? innerWidth > 260
                  ? 530 - e + 20
                  : 330 - e + 20
                : 292 - e + 20) + 'px'
            ),
            this.isEmbedFlexible &&
              this.shadowRoot?.host.style.setProperty(
                '--configured-min-height',
                '100px'
              ));
        }),
      this.isNsfwBlocked &&
        this.subscribe(lt.TriggerNsfwBlockingExperience, this.setNsfwIsBlocked);
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.isNsfwBlocked &&
        this.unsubscribe(
          lt.TriggerNsfwBlockingExperience,
          this.setNsfwIsBlocked
        );
  }
  render() {
    return s`<slot></slot>`;
  }
};
e(
  [n({ type: Boolean, attribute: 'is-nsfw-blocked' })],
  Pl.prototype,
  'isNsfwBlocked',
  void 0
),
  e([n({ type: Boolean, reflect: !0 })], Pl.prototype, 'nsfw', void 0),
  e(
    [n({ type: Boolean, attribute: 'is-embed' })],
    Pl.prototype,
    'isEmbed',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'is-embed-flexible' })],
    Pl.prototype,
    'isEmbedFlexible',
    void 0
  ),
  (Pl = e([g('shreddit-aspect-ratio')], Pl));
const Rl = new Set([
    'eu_cookie',
    'compact',
    'loid',
    'over18',
    'search_over18',
    'fastly-request-id',
    'csrf_token',
    'session_tracker',
    ...['_options', 'correlation_id']
  ]),
  Ol = new Set([
    'AT',
    'BE',
    'BG',
    'BL',
    'CH',
    'CY',
    'CZ',
    'DE',
    'DK',
    'EE',
    'ES',
    'FI',
    'FR',
    'GB',
    'GF',
    'GG',
    'GI',
    'GP',
    'GR',
    'HR',
    'HU',
    'IE',
    'IM',
    'IS',
    'IT',
    'JE',
    'LI',
    'LT',
    'LU',
    'LV',
    'MF',
    'MQ',
    'MT',
    'NL',
    'NO',
    'PL',
    'PM',
    'PT',
    'RE',
    'RO',
    'SE',
    'SI',
    'SK',
    'UK',
    'YT'
  ]),
  Nl = (e) => Ol.has(e),
  Dl = ({ country: e, name: t, options: n, value: r }) => {
    var o;
    (o = t), (Rl.has(o) || !Nl(e) || Ll()) && In.set(t, r, n);
  },
  Ll = () => !!Ml()?.nonessential,
  Ml = () => {
    const e = In.get('eu_cookie');
    return void 0 !== e
      ? ((e) => {
          try {
            const n = JSON.parse(decodeURIComponent(e));
            return !0 === (t = n).opted && 'boolean' == typeof t.nonessential
              ? n
              : void 0;
          } catch {
            return;
          }
          var t;
        })(e)
      : void 0;
  },
  Ul = (e) => {
    In.set('eu_cookie', JSON.stringify(e), Ka);
  };
var Fl;
!(function (e) {
  (e.Unknown = 'UNKNOWN'),
    (e.Private = 'PRIVATE'),
    (e.GoldOnly = 'GOLD_ONLY'),
    (e.Banned = 'BANNED'),
    (e.Quarantined = 'QUARANTINED');
})(Fl || (Fl = {}));
let Vl = class extends t {
  constructor() {
    super(...arguments),
      (this.country = ''),
      (this.name = ''),
      (this.nsfw = !1),
      (this.logged = !1),
      (this.reason = Fl.Unknown),
      (this.hasCustomButtons = !1),
      (this.not_found = !1),
      (this.server_error = !1);
  }
  static get styles() {
    return [
      De,
      Ne(
        ':host {\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  height: calc(var(--viewport-height) - var(--shreddit-header-height) - var(--shreddit-bottom-padding));\n  padding: 1.5rem;\n  overflow: hidden;\n}\n.text {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 0.5rem;\n}\n.text.server-error-text {\n  width: 80%;\n}\n.text.server-error-text > h1 {\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1rem;\n}\nh1 {\n  margin-top: 1rem;\n  font-weight: 600;\n  line-height: 2rem;\n}\np {\n  margin: 1rem 0 1.5rem;\n}\n.icon {\n  box-sizing: border-box;\n  background: var(--color-tone-6);\n  font-size: 2rem;\n  line-height: 0;\n  padding: 1rem;\n  overflow: hidden;\n  border-radius: 50%;\n}\nicon-quarantined.icon {\n  color: var(--color-global-white);\n  background: #f8d758;\n}\n.icon.server-error-icon {\n  background: none;\n}\n.buttons {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.buttons-vertical {\n  flex-direction: column;\n}\n'
      )
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    const e = k('unsuccessful-pageview');
    this.dispatchEvent(e);
  }
  handleAcceptNsfwClick() {
    Dl({ country: this.country, name: 'over18', value: 'true', options: Xa });
    const e = new URL(window.location.href);
    e.searchParams.set('force_seo', '1'), (window.location.href = e.toString());
  }
  handleAcceptQuarantinedClick() {
    const e = In.get('_options');
    if (e) {
      const t = JSON.parse(decodeURIComponent(e));
      (t.pref_quarantine_optin = !0),
        Dl({
          country: this.country,
          name: '_options',
          value: JSON.stringify(t),
          options: Xa
        });
    } else {
      const e = JSON.stringify({ pref_quarantine_optin: !0 });
      Dl({ country: this.country, name: '_options', value: e, options: Xa });
    }
    window.location.reload();
  }
  render() {
    const e = 'flex-auto max-w-full mb-lg',
      t = this.nsfw
        ? s` <icon-nsfw class="icon" fill></icon-nsfw> `
        : this.reason === Fl.Private || this.reason === Fl.GoldOnly
          ? s` <icon-privacy class="icon" fill></icon-privacy> `
          : this.reason === Fl.Banned
            ? s` <icon-ban class="icon" fill></icon-ban> `
            : this.reason === Fl.Quarantined
              ? s` <icon-quarantined class="icon" fill></icon-quarantined> `
              : this.not_found
                ? s` <icon-meme class="icon" fill></icon-meme> `
                : this.server_error
                  ? s` <icon-spoiler class="icon server-error-icon"></icon-spoiler> `
                  : null,
      n = !(
        this.logged ||
        this.not_found ||
        this.server_error ||
        this.nsfw ||
        this.reason === Fl.Quarantined ||
        this.reason === Fl.Banned
      ),
      r =
        this.reason === Fl.Private ||
        this.reason === Fl.GoldOnly ||
        this.reason === Fl.Banned ||
        this.not_found
          ? s`\n ${Oe({ appearance: 'primary', size: Se.Small, attributes: { href: '/', className: e }, children: 'View Other Communities' })}\n `
          : n
            ? s`\n ${Oe({ appearance: 'primary', size: Se.Small, attributes: { href: '/login/', className: e }, children: 'Log In' })}\n <span \n>New to reddit?\n <a href="https://www.reddit.com/register/">\n Sign up\n </a></span>\n `
            : this.nsfw
              ? s`\n ${Oe({ appearance: 'primary', size: Se.Small, attributes: { href: '/', className: e }, children: 'No, go home' })}\n <button \n class="button button-small button-primary ml-xs ${e} ml-xs" \n @click="${this.handleAcceptNsfwClick}" \n>\n Yes, show post\n </button>\n `
              : this.reason === Fl.Quarantined
                ? s`\n ${Oe({ appearance: 'primary', size: Se.Small, attributes: { href: '/', className: e }, children: 'No, thank you' })}\n <button \n class="ml-xs button button-small button-primary ${e}" \n @click="${this.handleAcceptQuarantinedClick}" \n>\n Continue\n </button>\n `
                : null;
    return s`\n ${t}\n <div class="text${this.server_error ? ' server-error-text' : ''}">\n <h1><slot name="title"></slot></h1>\n <p><slot name="message"></slot></p>\n </div>\n\n <nav class="${n ? 'buttons buttons-vertical' : 'buttons'}">\n ${this.hasCustomButtons ? s`<slot name="custom-buttons"></slot>` : r}\n </nav>\n `;
  }
};
e([n({ type: String })], Vl.prototype, 'country', void 0),
  e([n({ type: String })], Vl.prototype, 'name', void 0),
  e([n({ type: Boolean })], Vl.prototype, 'nsfw', void 0),
  e([n({ type: Boolean })], Vl.prototype, 'logged', void 0),
  e([n({ type: String })], Vl.prototype, 'reason', void 0),
  e(
    [n({ type: Boolean, attribute: 'has-custom-buttons' })],
    Vl.prototype,
    'hasCustomButtons',
    void 0
  ),
  e([n({ type: Boolean })], Vl.prototype, 'not_found', void 0),
  e([n({ type: Boolean })], Vl.prototype, 'server_error', void 0),
  (Vl = e([g('shreddit-forbidden')], Vl));
const Bl = gt(t);
let Wl = class extends Bl {
  constructor() {
    super(...arguments), (this.data = {});
  }
  connectedCallback() {
    super.connectedCallback(),
      this.dispatchEvent(k('screenview-data-loaded', this.data)),
      this.publish(lt.ScreenViewDataLoaded, this.data);
  }
};
function Hl(e) {
  return e === St.CardView;
}
function Gl(e) {
  return e === St.CompactView;
}
function Yl(e) {
  return e === St.ModQueueCompactView;
}
e([n({ type: Object })], Wl.prototype, 'data', void 0),
  (Wl = e([g('shreddit-screenview-data')], Wl));
let zl = class extends t {
  constructor() {
    super(...arguments),
      (this.country = ''),
      (this.cookieDomain = ''),
      (this._events = new I(this)),
      (this._onLayoutViewChange = this._events.define(
        'layout-view-change',
        (e) => {
          const { selected: t } = e.detail;
          Dl({
            country: this.country,
            name: 'compact',
            value: Gl(t) ? 'true' : 'false',
            options: { ...Xa, domain: this.cookieDomain || void 0 }
          });
        }
      ));
  }
  static get styles() {
    return i`:host{display:flex;align-items:center}`;
  }
  render() {
    return s` <slot></slot>`;
  }
};
e([n({ type: String })], zl.prototype, 'country', void 0),
  e(
    [n({ type: String, attribute: 'cookie-domain' })],
    zl.prototype,
    'cookieDomain',
    void 0
  ),
  (zl = e([g('shreddit-layout-event-setter')], zl));
const jl = new WeakMap();
function ql(e, t = document) {
  let n = jl.get(t);
  n || ((n = new Map()), jl.set(t, n));
  let r = n.get(e);
  return r || ((r = { key: e }), n.set(e, r)), r;
}
const $l = Symbol('mixins/pagination'),
  Xl = (function (e) {
    const t = new WeakMap(),
      n = A();
    return {
      getContextKey: (e, t) => ql(e, t),
      appointLeader(r, o) {
        if (t.has(o)) {
          if (t.get(o).isConnected)
            throw new Error(
              `Cannot appoint leader for key "${o.key}" in the same context twice.`
            );
        }
        t.set(o, r);
        const a = n.getRegisteredElements(o);
        if (a) for (const t of a) e(r, t);
      },
      dismissLeader(e, n) {
        const r = t.get(n);
        r && r === e && t.delete(n);
      },
      getLeader: (e) => t.get(e),
      registerFollower(r, o) {
        n.register(o, r);
        const a = t.get(o);
        a && e(a, r);
      },
      unregisterFollower(e, t) {
        n.unregister(t, e);
      },
      getFollowers: (e) => n.getRegisteredElements(e)
    };
  })((e, t) => {
    t.syncPagination(e);
  });
function Kl(e) {
  if ($l in e) return e;
  class t extends e {
    constructor() {
      super(...arguments),
        (this.pages = 1),
        (this._pageIndex = 1),
        (this._pageNames = void 0);
    }
    get pageIndex() {
      return this._pageIndex;
    }
    set pageIndex(e) {
      if (e === this._pageIndex) return;
      const t = this._pageIndex;
      (this._pageIndex = e), this.pageIndexChangedCallback(t);
    }
    get pageNames() {
      return this._pageNames;
    }
    set pageNames(e) {
      e && (this.pages = e.length), (this._pageNames = e);
    }
    syncLinkedPageables() {
      if (this._paginationLeaderContext) {
        const e = Xl.getFollowers(this._paginationLeaderContext);
        if (!e || !e.size) return;
        for (const t of e) t.syncPagination(this);
      }
      if (this._paginationFollowerContext) {
        const e = Xl.getLeader(this._paginationFollowerContext);
        e && (e.pageIndex = this._pageIndex);
      }
    }
    syncPagination(e) {
      (this.pageIndex = e.pageIndex),
        (this.pages = e.pages),
        (this.pageNames = e.pageNames);
    }
    getPaginationContext() {
      const e = this.getRootNode();
      if (e !== this && (e instanceof Document || e instanceof ShadowRoot))
        return e;
    }
    connectedCallback() {
      super.connectedCallback && super.connectedCallback();
      const e = this.getPaginationContext();
      if (!e) return;
      const t = this.getAttribute('for');
      t &&
        ((this._paginationFollowerContext = Xl.getContextKey(t, e)),
        Xl.registerFollower(this, this._paginationFollowerContext)),
        this.id &&
          !t &&
          ((this._paginationLeaderContext = Xl.getContextKey(this.id, e)),
          Xl.appointLeader(this, this._paginationLeaderContext));
    }
    disconnectedCallback() {
      super.connectedCallback && super.connectedCallback(),
        this._paginationLeaderContext &&
          (Xl.dismissLeader(this, this._paginationLeaderContext),
          (this._paginationLeaderContext = void 0)),
        this._paginationFollowerContext &&
          (Xl.unregisterFollower(this, this._paginationFollowerContext),
          (this._paginationFollowerContext = void 0));
    }
    nextPage() {
      this.pageIndex = Math.min(this.pages, this.pageIndex + 1);
    }
    previousPage() {
      this.pageIndex = Math.max(1, this.pageIndex - 1);
    }
    pageIndexChangedCallback(e) {
      this.syncLinkedPageables();
    }
  }
  return (t[$l] = !0), t;
}
function Ql(e, t) {
  const n = e.composedPath();
  for (const e of n) {
    const n = e.dataset,
      r = n && n[t];
    if (null != r) return r;
  }
  return null;
}
const Jl = (e, t) => {
  const n = e.composedPath(),
    r = Array.isArray(t) ? t.map((e) => e.toUpperCase()) : [t.toUpperCase()];
  for (const e of n) if (r.includes(e.tagName)) return !0;
  return !1;
};
var Zl;
!(function (e) {
  (e.VIDEO_PLAYER = 'video-player'),
    (e.SUBREDDIT_LINK = 'subreddit-link'),
    (e.COMMENTS_BUTTON = 'comments-button'),
    (e.OVERFLOW_BUTTON = 'overflow-button'),
    (e.VOTE = 'vote'),
    (e.JOIN = 'join'),
    (e.SHARE = 'share'),
    (e.PROMOTE_POST_BUTTON = 'promote-post-button'),
    (e.TEXT_BODY = 'text-body'),
    (e.SUMMARY_DROPDOWN_MENU = 'summary-dropdown-menu');
})(Zl || (Zl = {}));
const ec = (e) => (tc(e, or) ? e : void 0),
  tc = (e, t) => Object.values(t).includes(e),
  nc = (e, t) => (void 0 === e ? void 0 : t(e)),
  rc = ({
    archived: e,
    authorId: t,
    createdTimestamp: n,
    domain: r,
    id: o,
    feedIndex: a,
    nsfw: i,
    isStickied: s,
    isHighlighted: d,
    postTitle: l,
    postType: c,
    promoted: p,
    recommendationSource: m,
    recommendationSubredditId: u,
    recommendationSubredditName: h,
    score: g,
    spoiler: b,
    subredditId: x,
    subredditPrefixedName: v,
    viewType: w,
    commentCount: f,
    permalink: y,
    awardId: _
  }) => {
    const E = nc(c, ec),
      S = nc(n, Rt),
      k = { name: v?.toLowerCase(), id: x };
    return {
      ...(_ ? { id: _ } : void 0),
      post: {
        archived: e,
        author_id: t,
        created_timestamp: S,
        domain: r,
        id: o,
        nsfw: i,
        pinned: s,
        highlighted: d,
        promoted: p,
        score: g,
        spoiler: b,
        subreddit_id: x,
        subreddit_name: k.name,
        title: l,
        type: E,
        recommendation_source: m?.toLowerCase(),
        recommendation_source_subreddit_id: u,
        recommendation_source_subreddit_name: h,
        number_comments: f,
        url: y
      },
      screen: { view_type: Ct(w) },
      subreddit: k,
      action_info: { position: a }
    };
  },
  oc = (e) => ({ ...rc(e), feed: bn(fo) }),
  ac = (e, t, n, r) => {
    const { postLanguage: o, translationLanguage: a } = t;
    return (e = {
      ...e,
      post: {
        ...e.post,
        language: o,
        translation_language: a,
        translation_state: n
      },
      ...(r && { action_info: { ...e.action_info, reason: r } })
    });
  },
  ic = (e, t) =>
    At(
      { source: 'post', action: 'view', noun: 'post' },
      t ? ac(oc(e), e, e.isTranslationOn || !1) : oc(e)
    ),
  sc = (e, t = {}) =>
    At({ source: 'post', action: 'click', noun: e }, { ...t, feed: bn(fo) }),
  dc = (e) => sc('share', rc(e)),
  lc = (e) => sc('share_copy', rc(e)),
  cc = (e) => sc('comments', rc(e)),
  pc = (e) => sc('view_all_comments', rc(e)),
  mc = (e) =>
    At({ source: 'event_post', action: 'click', noun: 'rsvp' }, { ...rc(e) }),
  uc = (e) =>
    At(
      { source: 'event_post', action: 'click', noun: 'un_rsvp' },
      { ...rc(e) }
    ),
  hc = 2e3,
  gc = (e, t) =>
    At(
      { source: 'post', action: 'consume', noun: 'post' },
      t ? ac(oc(e), e, e.isTranslationOn || !1) : oc(e)
    ),
  bc = (e, t) =>
    At(
      { source: 'translate_button', action: 'view', noun: 'post' },
      ac(oc(e), e, t, t ? 'on' : 'off')
    ),
  xc = (e) => At({ source: 'post', action: 'click', noun: 'upvote' }, oc(e)),
  vc = (e) => At({ source: 'post', action: 'click', noun: 'downvote' }, oc(e)),
  wc = (e) => At({ source: 'post', action: 'click', noun: 'clearvote' }, oc(e)),
  fc = (e = {}) =>
    At({ source: 'post_detail', action: 'view', noun: 'post' }, e),
  yc = (e, t = {}) =>
    At({ source: 'post_detail', action: 'click', noun: e }, t),
  _c = (e) => At({ source: 'post', action: 'click', noun: 'vote_try' }, rc(e)),
  Ec = (e) => At({ source: 'post', action: 'click', noun: 'read_more' }, oc(e)),
  Sc = (e) =>
    At(
      {
        source: 'subreddit_hovercard',
        action: 'view',
        noun: 'hover_subreddit_hovercard'
      },
      oc(e)
    ),
  kc = (e) =>
    At(
      {
        source: 'user_hovercard',
        action: 'view',
        noun: 'hover_user_hovercard'
      },
      oc(e)
    ),
  Tc = (e, t) => {
    switch (Ql(e, 'postClickLocation')) {
      case Zl.SUBREDDIT_LINK:
        return ((e) => sc('subreddit', rc(e)))(t);
      case Zl.JOIN:
        return ((e) => sc('subscribe', rc(e)))(t);
      case Zl.OVERFLOW_BUTTON:
      case Zl.COMMENTS_BUTTON:
      case Zl.VOTE:
      case Zl.SHARE:
      case Zl.VIDEO_PLAYER:
        return null;
      case Zl.TEXT_BODY:
        return ((e) => sc('text', rc(e)))(t);
      default:
        return ((e) => sc('post', rc(e)))(t);
    }
  },
  Ic = (e) =>
    At(
      {
        source: 'post',
        action: 'leave',
        noun: 'post',
        visibility: {
          on_screen_timestamp: e.becameVisibleOnScreenTimestamp,
          off_screen_timestamp: Date.now()
        }
      },
      oc(e)
    ),
  Cc = () =>
    At({ source: 'post', action: 'click', noun: 'post_overflow_menu' }),
  Ac = () => At({ source: 'post', action: 'click', noun: 'save' }),
  Pc = () => At({ source: 'post', action: 'click', noun: 'pin' }),
  Rc = () => At({ source: 'post', action: 'click', noun: 'unpin' }),
  Oc = () => At({ source: 'post', action: 'click', noun: 'hide' }),
  Nc = () => At({ source: 'post', action: 'click', noun: 'report' }),
  Dc = () =>
    At({ source: 'post', action: 'click', noun: 'overflow_show_less' }),
  Lc = () => At({ source: 'post', action: 'click', noun: 'edit' }),
  Mc = () => At({ source: 'post', action: 'click', noun: 'delete' }),
  Uc = ({ markedAsSpoiler: e }) =>
    At({
      source: 'post',
      action: 'click',
      noun: e ? 'mark_spoiler' : 'unmark_spoiler'
    }),
  Fc = ({ markedAsNsfw: e }) =>
    At({
      source: 'post',
      action: 'click',
      noun: e ? 'mark_nsfw' : 'unmark_nsfw'
    }),
  Vc = ({ markedAsBrandAffiliate: e }) =>
    At({
      source: 'post',
      action: 'click',
      noun: e ? 'mark_brand_affiliate' : 'unmark_brand_affiliate'
    }),
  Bc = ({ turnNotificationsOn: e }) =>
    At({
      source: 'post',
      action: 'click',
      noun: e ? 'turn_notifications' : 'unsend_reply_notifications'
    }),
  Wc = () => At({ source: 'post', action: 'click', noun: 'update_post_flair' }),
  Hc = (e) =>
    At({ source: 'post', action: e ? 'undo' : 'click', noun: 'follow' });
var Gc;
!(function (e) {
  (e.Forward = 'forward'), (e.Backward = 'backward');
})(Gc || (Gc = {}));
const Yc = (e, t, n) =>
    At(
      { source: 'gallery', action: 'view', noun: 'media' },
      { ...rc(e), gallery: { num_items: n, position: t } }
    ),
  zc = (e, t, n, r) =>
    At(
      { source: 'gallery', action: 'click', noun: t },
      { ...rc(e), gallery: { num_items: r, position: n } }
    ),
  jc = Et(Kl(t));
let qc = class extends jc {
  constructor() {
    super(...arguments), (this.id = ''), (this.subreddit = '');
  }
  pageIndexChangedCallback(e) {
    super.pageIndexChangedCallback(e);
    const t = this.pageIndex > e ? Gc.Forward : Gc.Backward;
    this.trackEvent(zc(this, t));
  }
};
e([n({ type: String })], qc.prototype, 'id', void 0),
  e([n({ type: String })], qc.prototype, 'subreddit', void 0),
  (qc = e([g('shreddit-gallery-listener')], qc));
var $c,
  Xc,
  Kc,
  Qc,
  Jc,
  Zc = -1,
  ep = function (e) {
    addEventListener(
      'pageshow',
      function (t) {
        t.persisted && ((Zc = t.timeStamp), e(t));
      },
      !0
    );
  },
  tp = function () {
    return (
      window.performance &&
      performance.getEntriesByType &&
      performance.getEntriesByType('navigation')[0]
    );
  },
  np = function () {
    var e = tp();
    return (e && e.activationStart) || 0;
  },
  rp = function (e, t) {
    var n = tp(),
      r = 'navigate';
    return (
      Zc >= 0
        ? (r = 'back-forward-cache')
        : n &&
          (document.prerendering || np() > 0
            ? (r = 'prerender')
            : document.wasDiscarded
              ? (r = 'restore')
              : n.type && (r = n.type.replace(/_/g, '-'))),
      {
        name: e,
        value: void 0 === t ? -1 : t,
        rating: 'good',
        delta: 0,
        entries: [],
        id: 'v3-'
          .concat(Date.now(), '-')
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: r
      }
    );
  },
  op = function (e, t, n) {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var r = new PerformanceObserver(function (e) {
          Promise.resolve().then(function () {
            t(e.getEntries());
          });
        });
        return r.observe(Object.assign({ type: e, buffered: !0 }, n || {})), r;
      }
    } catch (e) {}
  },
  ap = function (e, t, n, r) {
    var o, a;
    return function (i) {
      t.value >= 0 &&
        (i || r) &&
        ((a = t.value - (o || 0)) || void 0 === o) &&
        ((o = t.value),
        (t.delta = a),
        (t.rating = (function (e, t) {
          return e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good';
        })(t.value, n)),
        e(t));
    };
  },
  ip = function (e) {
    requestAnimationFrame(function () {
      return requestAnimationFrame(function () {
        return e();
      });
    });
  },
  sp = function (e) {
    var t = function (t) {
      ('pagehide' !== t.type && 'hidden' !== document.visibilityState) || e(t);
    };
    addEventListener('visibilitychange', t, !0),
      addEventListener('pagehide', t, !0);
  },
  dp = function (e) {
    var t = !1;
    return function (n) {
      t || (e(n), (t = !0));
    };
  },
  lp = -1,
  cp = function () {
    return 'hidden' !== document.visibilityState || document.prerendering
      ? 1 / 0
      : 0;
  },
  pp = function (e) {
    'hidden' === document.visibilityState &&
      lp > -1 &&
      ((lp = 'visibilitychange' === e.type ? e.timeStamp : 0), up());
  },
  mp = function () {
    addEventListener('visibilitychange', pp, !0),
      addEventListener('prerenderingchange', pp, !0);
  },
  up = function () {
    removeEventListener('visibilitychange', pp, !0),
      removeEventListener('prerenderingchange', pp, !0);
  },
  hp = function () {
    return (
      lp < 0 &&
        ((lp = cp()),
        mp(),
        ep(function () {
          setTimeout(function () {
            (lp = cp()), mp();
          }, 0);
        })),
      {
        get firstHiddenTime() {
          return lp;
        }
      }
    );
  },
  gp = function (e) {
    document.prerendering
      ? addEventListener(
          'prerenderingchange',
          function () {
            return e();
          },
          !0
        )
      : e();
  },
  bp = [1800, 3e3],
  xp = [0.1, 0.25],
  vp = function (e, t) {
    (t = t || {}),
      (function (e, t) {
        (t = t || {}),
          gp(function () {
            var n,
              r = hp(),
              o = rp('FCP'),
              a = op('paint', function (e) {
                e.forEach(function (e) {
                  'first-contentful-paint' === e.name &&
                    (a.disconnect(),
                    e.startTime < r.firstHiddenTime &&
                      ((o.value = Math.max(e.startTime - np(), 0)),
                      o.entries.push(e),
                      n(!0)));
                });
              });
            a &&
              ((n = ap(e, o, bp, t.reportAllChanges)),
              ep(function (r) {
                (o = rp('FCP')),
                  (n = ap(e, o, bp, t.reportAllChanges)),
                  ip(function () {
                    (o.value = performance.now() - r.timeStamp), n(!0);
                  });
              }));
          });
      })(
        dp(function () {
          var n,
            r = rp('CLS', 0),
            o = 0,
            a = [],
            i = function (e) {
              e.forEach(function (e) {
                if (!e.hadRecentInput) {
                  var t = a[0],
                    n = a[a.length - 1];
                  o &&
                  e.startTime - n.startTime < 1e3 &&
                  e.startTime - t.startTime < 5e3
                    ? ((o += e.value), a.push(e))
                    : ((o = e.value), (a = [e]));
                }
              }),
                o > r.value && ((r.value = o), (r.entries = a), n());
            },
            s = op('layout-shift', i);
          s &&
            ((n = ap(e, r, xp, t.reportAllChanges)),
            sp(function () {
              i(s.takeRecords()), n(!0);
            }),
            ep(function () {
              (o = 0),
                (r = rp('CLS', 0)),
                (n = ap(e, r, xp, t.reportAllChanges)),
                ip(function () {
                  return n();
                });
            }),
            setTimeout(n, 0));
        })
      );
  },
  wp = { passive: !0, capture: !0 },
  fp = new Date(),
  yp = function (e, t) {
    $c ||
      (($c = t), (Xc = e), (Kc = new Date()), Sp(removeEventListener), _p());
  },
  _p = function () {
    if (Xc >= 0 && Xc < Kc - fp) {
      var e = {
        entryType: 'first-input',
        name: $c.type,
        target: $c.target,
        cancelable: $c.cancelable,
        startTime: $c.timeStamp,
        processingStart: $c.timeStamp + Xc
      };
      Qc.forEach(function (t) {
        t(e);
      }),
        (Qc = []);
    }
  },
  Ep = function (e) {
    if (e.cancelable) {
      var t =
        (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp;
      'pointerdown' == e.type
        ? (function (e, t) {
            var n = function () {
                yp(e, t), o();
              },
              r = function () {
                o();
              },
              o = function () {
                removeEventListener('pointerup', n, wp),
                  removeEventListener('pointercancel', r, wp);
              };
            addEventListener('pointerup', n, wp),
              addEventListener('pointercancel', r, wp);
          })(t, e)
        : yp(t, e);
    }
  },
  Sp = function (e) {
    ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(function (t) {
      return e(t, Ep, wp);
    });
  },
  kp = [100, 300],
  Tp = 0,
  Ip = 1 / 0,
  Cp = 0,
  Ap = function (e) {
    e.forEach(function (e) {
      e.interactionId &&
        ((Ip = Math.min(Ip, e.interactionId)),
        (Cp = Math.max(Cp, e.interactionId)),
        (Tp = Cp ? (Cp - Ip) / 7 + 1 : 0));
    });
  },
  Pp = function () {
    return Jc ? Tp : performance.interactionCount || 0;
  },
  Rp = function () {
    'interactionCount' in performance ||
      Jc ||
      (Jc = op('event', Ap, {
        type: 'event',
        buffered: !0,
        durationThreshold: 0
      }));
  },
  Op = [200, 500],
  Np = 0,
  Dp = function () {
    return Pp() - Np;
  },
  Lp = [],
  Mp = {},
  Up = function (e) {
    var t = Lp[Lp.length - 1],
      n = Mp[e.interactionId];
    if (n || Lp.length < 10 || e.duration > t.latency) {
      if (n) n.entries.push(e), (n.latency = Math.max(n.latency, e.duration));
      else {
        var r = { id: e.interactionId, latency: e.duration, entries: [e] };
        (Mp[r.id] = r), Lp.push(r);
      }
      Lp.sort(function (e, t) {
        return t.latency - e.latency;
      }),
        Lp.splice(10).forEach(function (e) {
          delete Mp[e.id];
        });
    }
  },
  Fp = [2500, 4e3],
  Vp = {},
  Bp = [800, 1800],
  Wp = function e(t) {
    document.prerendering
      ? gp(function () {
          return e(t);
        })
      : 'complete' !== document.readyState
        ? addEventListener(
            'load',
            function () {
              return e(t);
            },
            !0
          )
        : setTimeout(t, 0);
  },
  Hp = function (e, t) {
    t = t || {};
    var n = rp('TTFB'),
      r = ap(e, n, Bp, t.reportAllChanges);
    Wp(function () {
      var o = tp();
      if (o) {
        var a = o.responseStart;
        if (a <= 0 || a > performance.now()) return;
        (n.value = Math.max(a - np(), 0)),
          (n.entries = [o]),
          r(!0),
          ep(function () {
            (n = rp('TTFB', 0)), (r = ap(e, n, Bp, t.reportAllChanges))(!0);
          });
      }
    });
  };
const Gp = [
  {
    dpi: 3,
    height: 926,
    width: 428,
    version: 'iphone 12 Pro Max',
    yearClass: 2020
  },
  {
    dpi: 3,
    height: 896,
    width: 414,
    version: 'iphone 11 Pro Max',
    yearClass: 2019
  },
  { dpi: 3, height: 844, width: 390, version: 'iphone 12', yearClass: 2020 },
  { dpi: 3, height: 812, width: 375, version: 'iphone 7', yearClass: 2016 },
  {
    dpi: 3,
    height: 736,
    width: 414,
    version: 'iphone 8 Plus',
    yearClass: 2017
  },
  { dpi: 2, height: 896, width: 414, version: 'iphone 11', yearClass: 2019 },
  {
    dpi: 2,
    height: 667,
    width: 375,
    version: 'iphone SE 2nd Gen',
    yearClass: 2020
  },
  { dpi: 2, height: 568, width: 320, version: 'iphone 5S', yearClass: 2013 },
  { dpi: 2, height: 480, width: 320, version: 'iphone 4S', yearClass: 2011 }
];
function Yp() {
  const e = (function (e) {
    if (!window.screen || !window.devicePixelRatio) return;
    const { height: t, width: n } = window.screen,
      r = window.devicePixelRatio;
    return n && t && r
      ? e.find((e) => r === e.dpi && t === e.height && n === e.width)
      : void 0;
  })(Gp);
  if (e)
    return {
      deviceName: e.version.toLowerCase().replace(' ', '-'),
      yearClass: e.yearClass
    };
}
class zp {
  constructor(e) {
    (this._custom = {}),
      (this._metrics = {}),
      (this._isCached = !1),
      (this.remeasureForBFCacheRestore = (e) => {
        const t = { metrics: {}, meta: {}, cache_restore: !0 };
        Object.keys(this._metrics).forEach((e) => {
          this.isKeyCustomMetric(e) || (this._metrics[e] && (t.metrics[e] = 0));
        }),
          Object.keys(t.metrics).length &&
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const n = performance.now() - e.timeStamp;
                Object.keys(t.metrics).forEach((e) => {
                  t.metrics[e] = n;
                }),
                  this.notifyAndSendMetrics(t);
              });
            });
      }),
      (this._callback = e);
  }
  async connect() {
    const { isCached: e, unsubscribe: t } = await ((e) => {
      const t = (t) => {
        t.persisted && e(t);
      };
      window.addEventListener('pageshow', t, !0);
      const n = new G();
      return (
        n.resolve({
          isCached: Wd(),
          unsubscribe: () => {
            window.removeEventListener('pageshow', t);
          }
        }),
        n.promise
      );
    })(this.remeasureForBFCacheRestore);
    (this._unsubscribeFromCacheRestore = t),
      (this._isCached = e),
      this.gatherThenSendMetrics();
    Object.keys(this._metrics).some(
      (e) => !this.isKeyCustomMetric(e) && !this._metrics[e]
    ) && this.registerPerfObserver();
  }
  disconnect() {
    var e, t;
    null === (e = this._observer) || void 0 === e || e.disconnect(),
      null === (t = this._unsubscribeFromCacheRestore) ||
        void 0 === t ||
        t.call(this);
  }
  gatherThenSendMetrics() {
    const e = this.gatherMetrics();
    this.notifyAndSendMetrics(e);
  }
  notifyAndSendMetrics(e) {
    Object.keys(e.metrics).length && this._callback(e);
  }
  isKeyCustomMetric(e) {
    return Object.prototype.hasOwnProperty.call(this._custom, e);
  }
  gatherMetrics() {
    const e = { metrics: {}, meta: {} };
    return (
      this._isCached && (e.cache_restore = !0),
      Object.keys(this._metrics).forEach((t) => {
        if (this._metrics[t]) return;
        if (this.isKeyCustomMetric(t)) {
          const n = this._custom[t];
          n > -1 && ((e.metrics[t] = n), (this._metrics[t] = !0));
        }
        performance.getEntriesByName(t, 'mark').length &&
          performance.measure(t, 'fetchStart', t);
        const n = performance.getEntriesByName(t, 'measure');
        if (n.length) {
          const { duration: r } = n[0];
          (e.metrics[t] = Math.ceil(r)), (this._metrics[t] = !0);
        }
      }),
      e
    );
  }
  registerPerfObserver() {
    (this._observer = new PerformanceObserver((e) => {
      e.getEntries().some((e) => !!e.name && !this._metrics[e.name]) &&
        this.gatherThenSendMetrics();
    })),
      this._observer.observe({ entryTypes: ['mark'] });
  }
  registerPerfMetric(e) {
    this._metrics[e] = !1;
  }
  registerCustomMetric(e) {
    return (
      (this._custom[e] = -1),
      this.registerPerfMetric(e),
      (t) => {
        (this._custom[e] = t), this.gatherThenSendMetrics();
      }
    );
  }
  getCustomMetricValue(e) {
    return this._custom[e];
  }
}
var jp;
!(function (e) {
  (e.CLS = 'cumulative-layout-shift'),
    (e.FID = 'first-input-delay'),
    (e.LCP = 'largest-contentful-paint'),
    (e.TTFB = 'time-to-first-byte'),
    (e.INP = 'interaction-to-next-paint');
})(jp || (jp = {}));
let qp = class extends t {
  constructor() {
    super(...arguments),
      (this._perfMetrics = new zp((e) => {
        var t;
        const n = null === (t = Yp()) || void 0 === t ? void 0 : t.yearClass,
          r = Object.assign(Object.assign({}, e), {
            meta: Object.assign(
              Object.assign({}, e.meta),
              n && { yearClass: n }
            )
          }),
          o = k('faceplate-request', {
            resource: this.endpoint,
            request: { body: r }
          });
        if ((this.dispatchEvent(o), o.defaultPrevented)) return;
        const a = JSON.stringify(o.detail.request.body);
        Qo(this.endpoint, a);
      })),
      (this.endpoint = '');
  }
  render() {
    return s` <slot hidden></slot> `;
  }
  firstUpdated() {
    if (this.endpoint) {
      if (this._slottedContent)
        for (const e of this._slottedContent)
          e instanceof HTMLDataElement && this.parseDataElement(e);
      vp(this.onWebVitalMeasured(jp.CLS, (e) => e)),
        (function (e, t) {
          (t = t || {}),
            gp(function () {
              var n,
                r = hp(),
                o = rp('FID'),
                a = function (e) {
                  e.startTime < r.firstHiddenTime &&
                    ((o.value = e.processingStart - e.startTime),
                    o.entries.push(e),
                    n(!0));
                },
                i = function (e) {
                  e.forEach(a);
                },
                s = op('first-input', i);
              (n = ap(e, o, kp, t.reportAllChanges)),
                s &&
                  sp(
                    dp(function () {
                      i(s.takeRecords()), s.disconnect();
                    })
                  ),
                s &&
                  ep(function () {
                    var r;
                    (o = rp('FID')),
                      (n = ap(e, o, kp, t.reportAllChanges)),
                      (Qc = []),
                      (Xc = -1),
                      ($c = null),
                      Sp(addEventListener),
                      (r = a),
                      Qc.push(r),
                      _p();
                  });
            });
        })(this.onWebVitalMeasured(jp.FID, Math.ceil)),
        Hp(this.onWebVitalMeasured(jp.TTFB, Math.ceil)),
        this.onLCP(this.onWebVitalMeasured(jp.LCP, Math.ceil)),
        this.onLCP(
          this.onWebVitalMeasured('longest-contentful-paint', Math.ceil)
        ),
        this.onINP(this.onWebVitalMeasured(jp.INP, Math.ceil)),
        this._perfMetrics.connect();
    } else
      console.error('faceplate-perfmetric-collector: no endpoint specified');
  }
  onINP(...e) {
    return (function (e, t) {
      (t = t || {}),
        gp(function () {
          var n;
          Rp();
          var r,
            o = rp('INP'),
            a = function (e) {
              e.forEach(function (e) {
                e.interactionId && Up(e),
                  'first-input' === e.entryType &&
                    !Lp.some(function (t) {
                      return t.entries.some(function (t) {
                        return (
                          e.duration === t.duration &&
                          e.startTime === t.startTime
                        );
                      });
                    }) &&
                    Up(e);
              });
              var t,
                n =
                  ((t = Math.min(Lp.length - 1, Math.floor(Dp() / 50))), Lp[t]);
              n &&
                n.latency !== o.value &&
                ((o.value = n.latency), (o.entries = n.entries), r());
            },
            i = op('event', a, {
              durationThreshold:
                null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
            });
          (r = ap(e, o, Op, t.reportAllChanges)),
            i &&
              ('interactionId' in PerformanceEventTiming.prototype &&
                i.observe({ type: 'first-input', buffered: !0 }),
              sp(function () {
                a(i.takeRecords()),
                  o.value < 0 && Dp() > 0 && ((o.value = 0), (o.entries = [])),
                  r(!0);
              }),
              ep(function () {
                (Lp = []),
                  (Np = Pp()),
                  (o = rp('INP')),
                  (r = ap(e, o, Op, t.reportAllChanges));
              }));
        });
    })(...e);
  }
  onLCP(...e) {
    return (function (e, t) {
      (t = t || {}),
        gp(function () {
          var n,
            r = hp(),
            o = rp('LCP'),
            a = function (e) {
              var t = e[e.length - 1];
              t &&
                t.startTime < r.firstHiddenTime &&
                ((o.value = Math.max(t.startTime - np(), 0)),
                (o.entries = [t]),
                n());
            },
            i = op('largest-contentful-paint', a);
          if (i) {
            n = ap(e, o, Fp, t.reportAllChanges);
            var s = dp(function () {
              Vp[o.id] ||
                (a(i.takeRecords()), i.disconnect(), (Vp[o.id] = !0), n(!0));
            });
            ['keydown', 'click'].forEach(function (e) {
              addEventListener(
                e,
                function () {
                  return setTimeout(s, 0);
                },
                !0
              );
            }),
              sp(s),
              ep(function (r) {
                (o = rp('LCP')),
                  (n = ap(e, o, Fp, t.reportAllChanges)),
                  ip(function () {
                    (o.value = performance.now() - r.timeStamp),
                      (Vp[o.id] = !0),
                      n(!0);
                  });
              });
          }
        });
    })(...e);
  }
  onWebVitalMeasured(e, t) {
    const n = this._perfMetrics.registerCustomMetric(e);
    return (r) => {
      -1 === r.value ||
        this._perfMetrics.getCustomMetricValue(e) > -1 ||
        n(t(r.value));
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._perfMetrics.disconnect();
  }
  parseDataElement(e) {
    const t = e.value;
    this._perfMetrics.registerPerfMetric(t);
  }
};
e([_()], qp.prototype, '_slottedContent', void 0),
  e([n({ type: String })], qp.prototype, 'endpoint', void 0),
  (qp = e([g('faceplate-perfmetric-collector')], qp));
const $p = [
    'navigationStart',
    'unloadEventStart',
    'unloadEventEnd',
    'redirectStart',
    'redirectEnd',
    'fetchStart',
    'domainLookupStart',
    'domainLookupEnd',
    'connectStart',
    'connectEnd',
    'secureConnectionStart',
    'requestStart',
    'responseStart',
    'responseEnd',
    'domLoading',
    'domInteractive',
    'domContentLoadedEventStart',
    'domContentLoadedEventEnd',
    'domComplete',
    'loadEventStart',
    'loadEventEnd'
  ],
  Xp = (e) => {
    document.prerendering
      ? addEventListener('prerenderingchange', () => Xp(e), !0)
      : 'complete' !== document.readyState
        ? addEventListener('load', () => Xp(e), !0)
        : setTimeout(() => e(), 0);
  };
let Kp = class extends t {
  constructor() {
    super(...arguments), (this.endpoint = '');
  }
  render() {
    return s`<slot hidden></slot>`;
  }
  firstUpdated() {
    this.endpoint && Xp(this.recordNavigationTimings.bind(this));
  }
  recordNavigationTimings() {
    const e = performance.getEntriesByType('navigation')[0];
    if (void 0 === e) return;
    const t = e.toJSON(),
      n = {};
    for (const r of $p) r in e && (n[r] = Math.ceil(t[r]));
    const r = k('faceplate-request', {
      resource: this.endpoint,
      request: { body: { metrics: n } }
    });
    if ((this.dispatchEvent(r), r.defaultPrevented)) return;
    const o = JSON.stringify(r.detail.request.body);
    Qo(this.endpoint, o);
  }
};
e([n({ type: String })], Kp.prototype, 'endpoint', void 0),
  (Kp = e([g('shreddit-navtimings-collector')], Kp));
const Qp = new Set();
window.addEventListener('beforeRoute', () => {
  Qp.clear();
});
const Jp = async ({
  name: e,
  queryParams: t,
  routeParams: n,
  renderMode: r,
  root: o = document
}) => {
  const a = o.querySelector(`faceplate-loader[name=${e}]`),
    i = o.querySelector(
      `faceplate-iframe[name=${e}], faceplate-partial[name=${e}]`
    ),
    s = i instanceof _e,
    d = s && r && r !== J.Replace;
  if (Qp.has(e) && !d) return;
  if (!i) throw new Error(`${e} not found`);
  if (a && i && a.nextElementSibling !== i)
    throw new Error(
      `Both loader and loader element for ${e} was found, but they are not siblings`
    );
  if ((a && a?.loading !== X.Programmatic) || i?.loading !== X.Programmatic)
    throw new Error(`${e} cannot be activated`);
  const l = i.src,
    c = s ? i.renderMode : void 0,
    p = new URLSearchParams(t).toString();
  if (p) {
    const e = i.src.includes('?');
    i.src = `${i.src}${e ? '&' : '?'}${p}`;
  }
  if (n)
    for (const e in n) {
      const t = n[e];
      i.src = i.src.replace(`/:${e}`, t ? `/${t}` : '');
    }
  r && s && (i.renderMode = r), d || Qp.add(e);
  const m = await Promise.allSettled([a?.load(), i.load()]);
  return d && ((i.src = l), c && (i.renderMode = c)), m;
};
let Zp = Jp,
  em = class extends t {
    constructor() {
      super(...arguments),
        (this.name = ''),
        (this.activation = X.Action),
        (this.queryParams = {}),
        (this.routeParams = {}),
        (this.isReactivatable = !1),
        (this.isScoped = !1),
        (this._reactiveControllers = []),
        (this.handleActivate = async (e) => {
          e._featureActivationHandled ||
            (e.stopPropagation(),
            await this._activateFeature(),
            this.isReactivatable || this._cleanupControllers(),
            (e._featureActivationHandled = !0),
            e.target?.dispatchEvent(e));
        });
    }
    async _activateFeature() {
      await Zp({
        name: this.name,
        renderMode: this.renderMode,
        queryParams: this.queryParams,
        routeParams: this.routeParams,
        root: this.isScoped ? this : void 0
      });
    }
    _cleanupControllers() {
      this._reactiveControllers.forEach((e) => R(this, e)),
        (this._reactiveControllers = []);
    }
    connectedCallback() {
      super.connectedCallback(),
        this.activation === X.Action
          ? this._reactiveControllers.push(
              O(this, this, this.handleActivate, { capture: !0 })
            )
          : this.activation === X.Intent &&
            (this._reactiveControllers.push(
              N(this, this, this.handleActivate, { capture: !0 })
            ),
            this._reactiveControllers.push(
              O(this, this, this.handleActivate, { capture: !0 })
            ));
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._cleanupControllers();
    }
    createRenderRoot() {
      return this;
    }
  };
e([n({ type: String })], em.prototype, 'name', void 0),
  e(
    [n({ type: String, attribute: 'activation' })],
    em.prototype,
    'activation',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'render-mode' })],
    em.prototype,
    'renderMode',
    void 0
  ),
  e(
    [n({ type: Object, attribute: 'query-params' })],
    em.prototype,
    'queryParams',
    void 0
  ),
  e(
    [n({ type: Object, attribute: 'route-params' })],
    em.prototype,
    'routeParams',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'reactivatable' })],
    em.prototype,
    'isReactivatable',
    void 0
  ),
  e(
    [n({ type: Boolean, attribute: 'scoped' })],
    em.prototype,
    'isScoped',
    void 0
  ),
  (em = e([g('activate-feature')], em));
const tm = {
    Anybody: 'ANYBODY',
    Nobody: 'NOBODY',
    AccountAge_30Days: 'ACCOUNT_AGE_30_DAYS'
  },
  nm = { Everyone: 'EVERYONE', Whitelisted: 'WHITELISTED' },
  rm = {
    Female: 'FEMALE',
    Male: 'MALE',
    NonBinary: 'NON_BINARY',
    OptOut: 'OPT_OUT',
    UserDefined: 'USER_DEFINED'
  },
  om = {
    Unknown: 'UNKNOWN',
    Community: 'COMMUNITY',
    Post: 'POST',
    Comment: 'COMMENT',
    Day: 'DAY',
    SearchResult: 'SEARCH_RESULT',
    Year: 'YEAR'
  },
  am = {
    Unknown: 'UNKNOWN',
    Common: 'COMMON',
    Rare: 'RARE',
    Epic: 'EPIC',
    Legendary: 'LEGENDARY'
  },
  im = { Dismiss: 'DISMISS', View: 'VIEW', Click: 'CLICK' },
  sm = {
    Pending: 'PENDING',
    Running: 'RUNNING',
    Rejected: 'REJECTED',
    Paused: 'PAUSED',
    Deleted: 'DELETED',
    CampaignPaused: 'CAMPAIGN_PAUSED',
    FlightPaused: 'FLIGHT_PAUSED',
    Completed: 'COMPLETED',
    Archived: 'ARCHIVED',
    PendingIdVerification: 'PENDING_ID_VERIFICATION',
    Processing: 'PROCESSING'
  },
  dm = { None: 'NONE', Allowlisted: 'ALLOWLISTED' },
  lm = { Enabled: 'ENABLED', Disabled: 'DISABLED' },
  cm = { PostTitle: 'POST_TITLE', PostBody: 'POST_BODY' },
  pm = { Post: 'POST' },
  mm = {
    Enabled: 'ENABLED',
    ClosetOnly: 'CLOSET_ONLY',
    Disabled: 'DISABLED',
    PendingDelete: 'PENDING_DELETE',
    Deleted: 'DELETED',
    InternalOnly: 'INTERNAL_ONLY',
    Restricted: 'RESTRICTED'
  },
  um = {
    Background: 'BACKGROUND',
    Shadow: 'SHADOW',
    HairBack: 'HAIR_BACK',
    BodyBottom: 'BODY_BOTTOM',
    Body: 'BODY',
    FaceLower: 'FACE_LOWER',
    FaceUpper: 'FACE_UPPER',
    Hair: 'HAIR',
    HeadAccessory: 'HEAD_ACCESSORY',
    Accessory: 'ACCESSORY',
    AccessoryBack: 'ACCESSORY_BACK'
  },
  hm = { Off: 'OFF', Lenient: 'LENIENT', Strict: 'STRICT' },
  gm = { None: 'NONE', Blocked: 'BLOCKED' },
  bm = { Negative: 'NEGATIVE', Neutral: 'NEUTRAL', Positive: 'POSITIVE' },
  xm = {
    Mentions: 'MENTIONS',
    SentimentScore: 'SENTIMENT_SCORE',
    Affinity: 'AFFINITY'
  },
  vm = { Text: 'TEXT', Image: 'IMAGE' },
  wm = {
    Email: 'EMAIL',
    FirstName: 'FIRST_NAME',
    LastName: 'LAST_NAME',
    PhoneNumber: 'PHONE_NUMBER',
    PostalCode: 'POSTAL_CODE',
    JobTitle: 'JOB_TITLE',
    Company: 'COMPANY',
    CompanyEmail: 'COMPANY_EMAIL'
  },
  fm = {
    None: 'NONE',
    Distinguished: 'DISTINGUISHED',
    DistinguishedAndStickied: 'DISTINGUISHED_AND_STICKIED'
  },
  ym = { Unfollowed: 'UNFOLLOWED', Followed: 'FOLLOWED' },
  _m = { None: 'NONE', Saved: 'SAVED' },
  Em = {
    Blank: 'BLANK',
    Confidence: 'CONFIDENCE',
    Controversial: 'CONTROVERSIAL',
    Live: 'LIVE',
    New: 'NEW',
    Old: 'OLD',
    Qa: 'QA',
    Random: 'RANDOM',
    Top: 'TOP'
  },
  Sm = { DoNotSend: 'DO_NOT_SEND', Send: 'SEND' },
  km = {
    NoLevel: 'NO_LEVEL',
    Lowest: 'LOWEST',
    Low: 'LOW',
    Medium: 'MEDIUM',
    High: 'HIGH',
    Highest: 'HIGHEST'
  },
  Tm = {
    Usd: 'USD',
    Coins: 'COINS',
    SubredditPoints: 'SUBREDDIT_POINTS',
    Ethereum: 'ETHEREUM',
    Aed: 'AED',
    Aud: 'AUD',
    Bgn: 'BGN',
    Bob: 'BOB',
    Brl: 'BRL',
    Cad: 'CAD',
    Chf: 'CHF',
    Clp: 'CLP',
    Cny: 'CNY',
    Cop: 'COP',
    Crc: 'CRC',
    Czk: 'CZK',
    Dkk: 'DKK',
    Dzd: 'DZD',
    Egp: 'EGP',
    Eur: 'EUR',
    Gbp: 'GBP',
    Gel: 'GEL',
    Ghs: 'GHS',
    Hkd: 'HKD',
    Hrk: 'HRK',
    Huf: 'HUF',
    Idr: 'IDR',
    Ils: 'ILS',
    Inr: 'INR',
    Iqd: 'IQD',
    Isk: 'ISK',
    Jod: 'JOD',
    Jpy: 'JPY',
    Kes: 'KES',
    Krw: 'KRW',
    Kzt: 'KZT',
    Mad: 'MAD',
    Mxn: 'MXN',
    Myr: 'MYR',
    Ngn: 'NGN',
    Nok: 'NOK',
    Nzd: 'NZD',
    Pen: 'PEN',
    Php: 'PHP',
    Pkr: 'PKR',
    Pln: 'PLN',
    Pyg: 'PYG',
    Qar: 'QAR',
    Ron: 'RON',
    Rsd: 'RSD',
    Rub: 'RUB',
    Sar: 'SAR',
    Sek: 'SEK',
    Sgd: 'SGD',
    Thb: 'THB',
    Try: 'TRY',
    Twd: 'TWD',
    Tzs: 'TZS',
    Uah: 'UAH',
    Vnd: 'VND',
    Zar: 'ZAR',
    RedditGold: 'REDDIT_GOLD',
    Gold: 'GOLD',
    All: 'ALL',
    Amd: 'AMD',
    Awg: 'AWG',
    Bhd: 'BHD',
    Bnd: 'BND',
    Bwp: 'BWP',
    Fjd: 'FJD',
    Mdl: 'MDL',
    Mkd: 'MKD',
    Mur: 'MUR',
    Tnd: 'TND',
    Ttd: 'TTD',
    Uyu: 'UYU',
    Wst: 'WST',
    Xcd: 'XCD'
  },
  Im = {
    Monday: 'MONDAY',
    Tuesday: 'TUESDAY',
    Wednesday: 'WEDNESDAY',
    Thursday: 'THURSDAY',
    Friday: 'FRIDAY',
    Saturday: 'SATURDAY',
    Sunday: 'SUNDAY'
  },
  Cm = {
    None: 'NONE',
    ModDistinguished: 'MOD_DISTINGUISHED',
    AdminDistinguished: 'ADMIN_DISTINGUISHED',
    AlumniDistinguished: 'ALUMNI_DISTINGUISHED'
  },
  Am = {
    Admin: 'ADMIN',
    Moderator: 'MODERATOR',
    Gold: 'GOLD',
    GoldAuto: 'GOLD_AUTO',
    Special: 'SPECIAL'
  },
  Pm = {
    AllowAll: 'ALLOW_ALL',
    AllowSome: 'ALLOW_SOME',
    BlockAll: 'BLOCK_ALL',
    BlockSome: 'BLOCK_SOME'
  },
  Rm = {
    All: 'ALL',
    LinkFlair: 'LINK_FLAIR',
    UserFlair: 'USER_FLAIR',
    None: 'NONE'
  },
  Om = { None: 'NONE', Favorited: 'FAVORITED' },
  Nm = {
    Media: 'MEDIA',
    Text: 'TEXT',
    All: 'ALL',
    Image: 'IMAGE',
    Video: 'VIDEO',
    Gif: 'GIF'
  },
  Dm = { Off: 'OFF', MediaOnly: 'MEDIA_ONLY' },
  Lm = { All: 'ALL', Emoji: 'EMOJI', Text: 'TEXT' },
  Mm = { Dark: 'DARK', Light: 'LIGHT' },
  Um = { Author: 'AUTHOR', Post: 'POST' },
  Fm = { None: 'NONE', Followed: 'FOLLOWED' },
  Vm = {
    Hourly: 'HOURLY',
    Daily: 'DAILY',
    Weekly: 'WEEKLY',
    Monthly: 'MONTHLY'
  },
  Bm = { Unknown: 'UNKNOWN', Enrolled: 'ENROLLED', OptOut: 'OPT_OUT' },
  Wm = {
    Lenient: 'LENIENT',
    Moderate: 'MODERATE',
    Off: 'OFF',
    Strict: 'STRICT'
  },
  Hm = { None: 'NONE', Hidden: 'HIDDEN' },
  Gm = {
    Event: 'EVENT',
    Megathread: 'MEGATHREAD',
    Announcement: 'ANNOUNCEMENT',
    ShowPostFlair: 'SHOW_POST_FLAIR'
  },
  Ym = { Google: 'GOOGLE', Apple: 'APPLE' },
  zm = { Rare: 'RARE', Epic: 'EPIC', Legendary: 'LEGENDARY', Test: 'TEST' },
  jm = { None: 'NONE', Locked: 'LOCKED' },
  qm = { Unset: 'UNSET', Enabled: 'ENABLED', Disabled: 'DISABLED' },
  $m = {
    UsernameMention: 'USERNAME_MENTION',
    PrivateMessage: 'PRIVATE_MESSAGE',
    CommentReply: 'COMMENT_REPLY',
    PostReply: 'POST_REPLY',
    LifecyclePostSuggestions: 'LIFECYCLE_POST_SUGGESTIONS',
    Subreddit: 'SUBREDDIT',
    ChatMessage: 'CHAT_MESSAGE',
    ChatRequest: 'CHAT_REQUEST',
    SubredditUpdatesInterestingPost: 'SUBREDDIT_UPDATES_INTERESTING_POST',
    News: 'NEWS',
    ScheduledEvent: 'SCHEDULED_EVENT',
    AddToCollection: 'ADD_TO_COLLECTION',
    SubredditRecommendation: 'SUBREDDIT_RECOMMENDATION',
    OneOff: 'ONE_OFF',
    UpvotePost: 'UPVOTE_POST',
    UpvoteComment: 'UPVOTE_COMMENT',
    PasswordReset: 'PASSWORD_RESET',
    EmailDigest: 'EMAIL_DIGEST',
    Escalation: 'ESCALATION',
    VerifyEmail: 'VERIFY_EMAIL',
    Ato: 'ATO',
    Security: 'SECURITY',
    ForgotUsername: 'FORGOT_USERNAME',
    LiveEvent: 'LIVE_EVENT',
    CakeDay: 'CAKE_DAY',
    NewPostActivity: 'NEW_POST_ACTIVITY',
    AdsCampaignApproved: 'ADS_CAMPAIGN_APPROVED',
    UserNewFollower: 'USER_NEW_FOLLOWER',
    AdsCampaignRejected: 'ADS_CAMPAIGN_REJECTED',
    ThreadReplies: 'THREAD_REPLIES',
    TopLevelComment: 'TOP_LEVEL_COMMENT',
    ChatAcceptInvite: 'CHAT_ACCEPT_INVITE',
    EmailExternalVerification: 'EMAIL_EXTERNAL_VERIFICATION',
    EconPromotion: 'ECON_PROMOTION',
    AdsAutomatedReport: 'ADS_AUTOMATED_REPORT',
    AdminAnnouncementEmail: 'ADMIN_ANNOUNCEMENT_EMAIL',
    PostFlairAdded: 'POST_FLAIR_ADDED',
    BroadcastFollower: 'BROADCAST_FOLLOWER',
    BroadcastRecommendation: 'BROADCAST_RECOMMENDATION',
    UserFlairAdded: 'USER_FLAIR_ADDED',
    ModeratedSrEngagement: 'MODERATED_SR_ENGAGEMENT',
    ModeratedSrMilestone: 'MODERATED_SR_MILESTONE',
    ModeratedSrContentFoundation: 'MODERATED_SR_CONTENT_FOUNDATION',
    CryptoTransactionApproval: 'CRYPTO_TRANSACTION_APPROVAL',
    AdsRoleInvitation: 'ADS_ROLE_INVITATION',
    NewPinnedPost: 'NEW_PINNED_POST',
    EmailUpvotePost: 'EMAIL_UPVOTE_POST',
    EmailUpvoteComment: 'EMAIL_UPVOTE_COMMENT',
    EmailCommunityDiscovery: 'EMAIL_COMMUNITY_DISCOVERY',
    EmailNewUserEducation: 'EMAIL_NEW_USER_EDUCATION',
    EmailUserNewFollower: 'EMAIL_USER_NEW_FOLLOWER',
    EmailChatRequest: 'EMAIL_CHAT_REQUEST',
    PushTokenHealthCheck: 'PUSH_TOKEN_HEALTH_CHECK',
    EmailPostReply: 'EMAIL_POST_REPLY',
    EmailCommentReply: 'EMAIL_COMMENT_REPLY',
    EmailPrivateMessage: 'EMAIL_PRIVATE_MESSAGE',
    EmailUsernameMention: 'EMAIL_USERNAME_MENTION',
    Oauth2AppAdd: 'OAUTH2_APP_ADD',
    Oauth2AppApprove: 'OAUTH2_APP_APPROVE',
    AeDmcaNotifySubmitter: 'AE_DMCA_NOTIFY_SUBMITTER',
    PostFollow: 'POST_FOLLOW',
    CommentFollow: 'COMMENT_FOLLOW',
    MorePostActivity: 'MORE_POST_ACTIVITY',
    EmailMagicLinkRegister: 'EMAIL_MAGIC_LINK_REGISTER',
    EmailMagicLinkLogin: 'EMAIL_MAGIC_LINK_LOGIN',
    ExportCompleteNotifyUserEmail: 'EXPORT_COMPLETE_NOTIFY_USER_EMAIL',
    UsernameTakeoverCompleted: 'USERNAME_TAKEOVER_COMPLETED',
    EmailChangeEmail: 'EMAIL_CHANGE_EMAIL',
    AwardReceived: 'AWARD_RECEIVED',
    ModeratedSrNewPost: 'MODERATED_SR_NEW_POST',
    ModeratedSrViralCommentPost: 'MODERATED_SR_VIRAL_COMMENT_POST',
    ModeratedSrViralUpvotePost: 'MODERATED_SR_VIRAL_UPVOTE_POST',
    ModeratedSrReportedPost: 'MODERATED_SR_REPORTED_POST',
    ModeratedSrReportedComment: 'MODERATED_SR_REPORTED_COMMENT',
    ModeratedSrNewModmail: 'MODERATED_SR_NEW_MODMAIL',
    IncentivizedPromotion: 'INCENTIVIZED_PROMOTION',
    TrendingGeo: 'TRENDING_GEO',
    RedditLore: 'REDDIT_LORE',
    TalkLive: 'TALK_LIVE',
    ChatMessageReaction: 'CHAT_MESSAGE_REACTION',
    EmailWeeklyRecap: 'EMAIL_WEEKLY_RECAP',
    Rereddit: 'REREDDIT',
    HotPotatoOverwritten: 'HOT_POTATO_OVERWRITTEN',
    RedditMomentUpdate: 'REDDIT_MOMENT_UPDATE',
    GamificationReminder: 'GAMIFICATION_REMINDER',
    CuratedOneOff: 'CURATED_ONE_OFF',
    PnPostGivenRedditGold: 'PN_POST_GIVEN_REDDIT_GOLD',
    PnCommentGivenRedditGold: 'PN_COMMENT_GIVEN_REDDIT_GOLD',
    ModeratedOneOff: 'MODERATED_ONE_OFF',
    GamificationAchievementUnlocked: 'GAMIFICATION_ACHIEVEMENT_UNLOCKED',
    AmaReminder: 'AMA_REMINDER'
  },
  Xm = {
    Gif: 'GIF',
    Jpeg: 'JPEG',
    Png: 'PNG',
    Webp: 'WEBP',
    Mp4: 'MP4',
    Quicktime: 'QUICKTIME'
  },
  Km = {
    AcceptModeratorInvite: 'ACCEPT_MODERATOR_INVITE',
    AddCommunityTopics: 'ADD_COMMUNITY_TOPICS',
    AddContributor: 'ADD_CONTRIBUTOR',
    AddModerator: 'ADD_MODERATOR',
    AddNote: 'ADD_NOTE',
    AddRemovalReason: 'ADD_REMOVAL_REASON',
    AdjustPostCrowdControlLevel: 'ADJUST_POST_CROWD_CONTROL_LEVEL',
    EnablePostCrowdControlFilter: 'ENABLE_POST_CROWD_CONTROL_FILTER',
    DisablePostCrowdControlFilter: 'DISABLE_POST_CROWD_CONTROL_FILTER',
    ApproveComment: 'APPROVE_COMMENT',
    ApproveLink: 'APPROVE_LINK',
    BanUser: 'BAN_USER',
    CreateAward: 'CREATE_AWARD',
    CreateScheduledPost: 'CREATE_SCHEDULED_POST',
    CreateRemovalReason: 'CREATE_REMOVAL_REASON',
    Collections: 'COLLECTIONS',
    CommunityStatus: 'COMMUNITY_STATUS',
    CommunityStyling: 'COMMUNITY_STYLING',
    CommunityWelcomePage: 'COMMUNITY_WELCOME_PAGE',
    CommunityWidgets: 'COMMUNITY_WIDGETS',
    CreateRule: 'CREATE_RULE',
    DeleteAward: 'DELETE_AWARD',
    DeleteRule: 'DELETE_RULE',
    DeleteScheduledPost: 'DELETE_SCHEDULED_POST',
    DevPlatformAppChanged: 'DEV_PLATFORM_APP_CHANGED',
    DevPlatformAppDisabled: 'DEV_PLATFORM_APP_DISABLED',
    DevPlatformAppEnabled: 'DEV_PLATFORM_APP_ENABLED',
    DevPlatformAppInstalled: 'DEV_PLATFORM_APP_INSTALLED',
    DevPlatformAppUninstalled: 'DEV_PLATFORM_APP_UNINSTALLED',
    DeleteOverriddenClassification: 'DELETE_OVERRIDDEN_CLASSIFICATION',
    DeleteNote: 'DELETE_NOTE',
    DeleteRemovalReason: 'DELETE_REMOVAL_REASON',
    DisableAward: 'DISABLE_AWARD',
    Distinguish: 'DISTINGUISH',
    EditCommentRequirements: 'EDIT_COMMENT_REQUIREMENTS',
    EditFlair: 'EDIT_FLAIR',
    EditPostRequirements: 'EDIT_POST_REQUIREMENTS',
    EditRule: 'EDIT_RULE',
    EditSavedResponse: 'EDIT_SAVED_RESPONSE',
    EditScheduledPost: 'EDIT_SCHEDULED_POST',
    EditSettings: 'EDIT_SETTINGS',
    EnableAward: 'ENABLE_AWARD',
    Events: 'EVENTS',
    HiddenAward: 'HIDDEN_AWARD',
    IgnoreReports: 'IGNORE_REPORTS',
    InviteModerator: 'INVITE_MODERATOR',
    InviteSubscriber: 'INVITE_SUBSCRIBER',
    Lock: 'LOCK',
    MarkNsfw: 'MARK_NSFW',
    MarkOriginalContent: 'MARK_ORIGINAL_CONTENT',
    ModAwardGiven: 'MOD_AWARD_GIVEN',
    ModmailEnrollment: 'MODMAIL_ENROLLMENT',
    MuteUser: 'MUTE_USER',
    OverrideClassification: 'OVERRIDE_CLASSIFICATION',
    RemoveComment: 'REMOVE_COMMENT',
    RemoveCommunityTopics: 'REMOVE_COMMUNITY_TOPICS',
    RemoveContributor: 'REMOVE_CONTRIBUTOR',
    RemoveLink: 'REMOVE_LINK',
    RemoveModerator: 'REMOVE_MODERATOR',
    RemoveWikiContributor: 'REMOVE_WIKI_CONTRIBUTOR',
    ReorderModerators: 'REORDER_MODERATORS',
    ReorderRemovalReason: 'REORDER_REMOVAL_REASON',
    ReorderRules: 'REORDER_RULES',
    SetContestMode: 'SET_CONTEST_MODE',
    SetPermissions: 'SET_PERMISSIONS',
    SetSuggestedsort: 'SET_SUGGESTEDSORT',
    ShowComment: 'SHOW_COMMENT',
    SnoozeReports: 'SNOOZE_REPORTS',
    SpamComment: 'SPAM_COMMENT',
    SpamLink: 'SPAM_LINK',
    Spoiler: 'SPOILER',
    Sticky: 'STICKY',
    SubmitContentRatingSurvey: 'SUBMIT_CONTENT_RATING_SURVEY',
    SubmitScheduledPost: 'SUBMIT_SCHEDULED_POST',
    UnbanUser: 'UNBAN_USER',
    UnignoreReports: 'UNIGNORE_REPORTS',
    UninviteModerator: 'UNINVITE_MODERATOR',
    Unlock: 'UNLOCK',
    UnmuteUser: 'UNMUTE_USER',
    UnsetContestMode: 'UNSET_CONTEST_MODE',
    UnsnoozeReports: 'UNSNOOZE_REPORTS',
    Unspoiler: 'UNSPOILER',
    Unsticky: 'UNSTICKY',
    UpdateRemovalReason: 'UPDATE_REMOVAL_REASON',
    WikiBanned: 'WIKI_BANNED',
    WikiContributor: 'WIKI_CONTRIBUTOR',
    WikiPageListed: 'WIKI_PAGE_LISTED',
    WikiPermLevel: 'WIKI_PERM_LEVEL',
    WikiRevise: 'WIKI_REVISE',
    WikiUnbanned: 'WIKI_UNBANNED'
  },
  Qm = {
    Note: 'NOTE',
    Approval: 'APPROVAL',
    Removal: 'REMOVAL',
    Ban: 'BAN',
    Mute: 'MUTE',
    Invite: 'INVITE',
    Spam: 'SPAM',
    ContentChange: 'CONTENT_CHANGE',
    ModAction: 'MOD_ACTION',
    All: 'ALL'
  },
  Jm = {
    Note: 'NOTE',
    Approval: 'APPROVAL',
    Removal: 'REMOVAL',
    Ban: 'BAN',
    Mute: 'MUTE',
    Invite: 'INVITE',
    Spam: 'SPAM',
    ContentChange: 'CONTENT_CHANGE'
  },
  Zm = {
    ModPnsStatus: 'MOD_PNS_STATUS',
    ModPnMilestoneStatus: 'MOD_PN_MILESTONE_STATUS',
    ModPnContentFoundationStatus: 'MOD_PN_CONTENT_FOUNDATION_STATUS',
    ModPnNewPostStatus: 'MOD_PN_NEW_POST_STATUS',
    ModPnNewModmailStatus: 'MOD_PN_NEW_MODMAIL_STATUS',
    ModPnNewCrosspostStatus: 'MOD_PN_NEW_CROSSPOST_STATUS',
    ModPnNewSrMentionStatus: 'MOD_PN_NEW_SR_MENTION_STATUS',
    ModPnViralCommentPostStatus: 'MOD_PN_VIRAL_COMMENT_POST_STATUS',
    ModPnViralUpvotePostStatus: 'MOD_PN_VIRAL_UPVOTE_POST_STATUS',
    ModPnReportedPostStatus: 'MOD_PN_REPORTED_POST_STATUS',
    ModPnReportedCommentStatus: 'MOD_PN_REPORTED_COMMENT_STATUS',
    ModPnPostInPopularFeedStatus: 'MOD_PN_POST_IN_POPULAR_FEED_STATUS'
  },
  eu = {
    ModPnViralCommentPostThreshold: 'MOD_PN_VIRAL_COMMENT_POST_THRESHOLD',
    ModPnViralUpvotePostThreshold: 'MOD_PN_VIRAL_UPVOTE_POST_THRESHOLD',
    ModPnReportedPostThreshold: 'MOD_PN_REPORTED_POST_THRESHOLD',
    ModPnReportedCommentThreshold: 'MOD_PN_REPORTED_COMMENT_THRESHOLD',
    ModPnPostInPopularFeedThreshold: 'MOD_PN_POST_IN_POPULAR_FEED_THRESHOLD'
  },
  tu = { Auto: 'AUTO', Enabled: 'ENABLED', Disabled: 'DISABLED' },
  nu = {
    Post: 'POST',
    Comment: 'COMMENT',
    ChatComment: 'CHAT_COMMENT',
    MatrixChatEvent: 'MATRIX_CHAT_EVENT',
    Award: 'AWARD'
  },
  ru = {
    SortDate: 'SORT_DATE',
    SortReports: 'SORT_REPORTS',
    SortDateReverse: 'SORT_DATE_REVERSE',
    SortReportsReverse: 'SORT_REPORTS_REVERSE'
  },
  ou = {
    Mod: 'MOD',
    Reported: 'REPORTED',
    Removed: 'REMOVED',
    Edited: 'EDITED',
    Unmoderated: 'UNMODERATED',
    CommunityChat: 'COMMUNITY_CHAT'
  },
  au = {
    BotBan: 'BOT_BAN',
    PermaBan: 'PERMA_BAN',
    Ban: 'BAN',
    AbuseWarning: 'ABUSE_WARNING',
    SpamWarning: 'SPAM_WARNING',
    SpamWatch: 'SPAM_WATCH',
    SolidContributor: 'SOLID_CONTRIBUTOR',
    HelpfulUser: 'HELPFUL_USER'
  },
  iu = {
    ModApproved: 'MOD_APPROVED',
    ModRemoved: 'MOD_REMOVED',
    ModSpammed: 'MOD_SPAMMED',
    AdminRemoved: 'ADMIN_REMOVED',
    AdminApproved: 'ADMIN_APPROVED',
    AdminSpammed: 'ADMIN_SPAMMED'
  },
  su = { Public: 'PUBLIC', Private: 'PRIVATE', Hidden: 'HIDDEN' },
  du = { None: 'NONE', Nsfw: 'NSFW' },
  lu = {
    Undefined: 'UNDEFINED',
    NotEligibleToClaim: 'NOT_ELIGIBLE_TO_CLAIM',
    NoNftLeft: 'NO_NFT_LEFT',
    AvailableToClaim: 'AVAILABLE_TO_CLAIM',
    InProgress: 'IN_PROGRESS',
    ClaimedSuccessfully: 'CLAIMED_SUCCESSFULLY',
    ClaimFailed: 'CLAIM_FAILED',
    CompletelyClaimed: 'COMPLETELY_CLAIMED'
  },
  cu = {
    Business: 'BUSINESS',
    Organization: 'ORGANIZATION',
    PublicFigure: 'PUBLIC_FIGURE',
    Individual: 'INDIVIDUAL'
  },
  pu = { OptedIn: 'OPTED_IN', OptedOut: 'OPTED_OUT' },
  mu = {
    Internal: 'INTERNAL',
    Stripe: 'STRIPE',
    Braintree: 'BRAINTREE',
    Paypal: 'PAYPAL',
    RedditCoins: 'REDDIT_COINS',
    Meta: 'META',
    GoogleInapp: 'GOOGLE_INAPP',
    AppleInapp: 'APPLE_INAPP',
    Ledger: 'LEDGER',
    RedditGold: 'REDDIT_GOLD'
  },
  uu = { None: 'NONE', Distinguished: 'DISTINGUISHED' },
  hu = { Link: 'LINK', Richtext: 'RICHTEXT', Markdown: 'MARKDOWN' },
  gu = {
    All: 'ALL',
    Hour: 'HOUR',
    Day: 'DAY',
    Week: 'WEEK',
    Month: 'MONTH',
    Year: 'YEAR'
  },
  bu = {
    Hot: 'HOT',
    New: 'NEW',
    Top: 'TOP',
    Controversial: 'CONTROVERSIAL',
    Rising: 'RISING',
    Best: 'BEST'
  },
  xu = { Unfollowed: 'UNFOLLOWED', Followed: 'FOLLOWED' },
  vu = { Block: 'BLOCK', Report: 'REPORT', Inform: 'INFORM' },
  wu = { Include: 'INCLUDE', Exclude: 'EXCLUDE' },
  fu = { Title: 'TITLE', Body: 'BODY', All: 'ALL' },
  yu = { Enabled: 'ENABLED', Disabled: 'DISABLED' },
  _u = { Reminder: 'REMINDER', NoReminder: 'NO_REMINDER' },
  Eu = { None: 'NONE', Saved: 'SAVED' },
  Su = {
    Link: 'LINK',
    Image: 'IMAGE',
    Video: 'VIDEO',
    Text: 'TEXT',
    Spoiler: 'SPOILER',
    Poll: 'POLL',
    Gallery: 'GALLERY',
    Talk: 'TALK',
    Prediction: 'PREDICTION',
    Videogif: 'VIDEOGIF',
    Streaming: 'STREAMING',
    Crosspost: 'CROSSPOST'
  },
  ku = {
    CommentAsSubreddit: 'COMMENT_AS_SUBREDDIT',
    CommentAsMod: 'COMMENT_AS_MOD',
    MessageAsSubreddit: 'MESSAGE_AS_SUBREDDIT',
    MessageAsMod: 'MESSAGE_AS_MOD'
  },
  Tu = {
    InlineContent: 'INLINE_CONTENT',
    Modmail: 'MODMAIL',
    UserDetails: 'USER_DETAILS',
    Ads: 'ADS'
  },
  Iu = { Low: 'LOW', High: 'HIGH' },
  Cu = { DoNotSend: 'DO_NOT_SEND', Send: 'SEND' },
  Au = { Username: 'USERNAME', DisplayText: 'DISPLAY_TEXT', Url: 'URL' },
  Pu = {
    Custom: 'CUSTOM',
    Reddit: 'REDDIT',
    Instagram: 'INSTAGRAM',
    Twitter: 'TWITTER',
    Tiktok: 'TIKTOK',
    Twitch: 'TWITCH',
    Facebook: 'FACEBOOK',
    Youtube: 'YOUTUBE',
    Tumblr: 'TUMBLR',
    Spotify: 'SPOTIFY',
    Soundcloud: 'SOUNDCLOUD',
    Beacons: 'BEACONS',
    Linktree: 'LINKTREE',
    Discord: 'DISCORD',
    Venmo: 'VENMO',
    CashApp: 'CASH_APP',
    Patreon: 'PATREON',
    Kofi: 'KOFI',
    Paypal: 'PAYPAL',
    Cameo: 'CAMEO',
    Onlyfans: 'ONLYFANS',
    Substack: 'SUBSTACK',
    Kickstarter: 'KICKSTARTER',
    Indiegogo: 'INDIEGOGO',
    BuyMeACoffee: 'BUY_ME_A_COFFEE',
    Shopify: 'SHOPIFY'
  },
  Ru = { None: 'NONE', Spoiler: 'SPOILER' },
  Ou = { None: 'NONE', First: 'FIRST', Second: 'SECOND' },
  Nu = {
    Id: 'ID',
    IdReverse: 'ID_REVERSE',
    Name: 'NAME',
    NameReverse: 'NAME_REVERSE'
  },
  Du = {
    Available: 'AVAILABLE',
    SoldOut: 'SOLD_OUT',
    Expired: 'EXPIRED',
    Pending: 'PENDING'
  },
  Lu = {
    Price: 'PRICE',
    PriceReverse: 'PRICE_REVERSE',
    TotalInventory: 'TOTAL_INVENTORY',
    TotalInventoryReverse: 'TOTAL_INVENTORY_REVERSE',
    CreationTime: 'CREATION_TIME',
    CreationTimeReverse: 'CREATION_TIME_REVERSE',
    ReleaseTime: 'RELEASE_TIME',
    ReleaseTimeReverse: 'RELEASE_TIME_REVERSE'
  },
  Mu = { Off: 'OFF', Frequent: 'FREQUENT', Low: 'LOW' },
  Uu = { Post: 'POST', Comment: 'COMMENT' },
  Fu = { LinkAndComment: 'LINK_AND_COMMENT', Link: 'LINK', Comment: 'COMMENT' },
  Vu = {
    BackgroundImage: 'BACKGROUND_IMAGE',
    BannerBackgroundImage: 'BANNER_BACKGROUND_IMAGE',
    BannerPositionedImage: 'BANNER_POSITIONED_IMAGE',
    CommunityIcon: 'COMMUNITY_ICON',
    MenuBackgroundImage: 'MENU_BACKGROUND_IMAGE',
    MobileBannerImage: 'MOBILE_BANNER_IMAGE',
    SecondaryBannerPositionedImage: 'SECONDARY_BANNER_POSITIONED_IMAGE',
    WidgetImage: 'WIDGET_IMAGE'
  },
  Bu = {
    Public: 'PUBLIC',
    Private: 'PRIVATE',
    Restricted: 'RESTRICTED',
    Archived: 'ARCHIVED',
    EmployeesOnly: 'EMPLOYEES_ONLY',
    GoldOnly: 'GOLD_ONLY',
    GoldRestricted: 'GOLD_RESTRICTED',
    User: 'USER'
  },
  Wu = { Cloud: 'CLOUD', List: 'LIST' },
  Hu = { Full: 'FULL', Compact: 'COMPACT' },
  Gu = {
    TextArea: 'TEXT_AREA',
    Button: 'BUTTON',
    SubredditRules: 'SUBREDDIT_RULES',
    Image: 'IMAGE',
    CommunityList: 'COMMUNITY_LIST',
    Calendar: 'CALENDAR',
    Custom: 'CUSTOM',
    IdCard: 'ID_CARD',
    PostFlair: 'POST_FLAIR',
    Menu: 'MENU'
  },
  Yu = { None: 'NONE', Subscribed: 'SUBSCRIBED' },
  zu = {
    Unknown: 'UNKNOWN',
    NotStarted: 'NOT_STARTED',
    InLine: 'IN_LINE',
    ApprovedToStart: 'APPROVED_TO_START',
    InProgress: 'IN_PROGRESS',
    Complete: 'COMPLETE',
    NotEligible: 'NOT_ELIGIBLE',
    NotApprovedToStart: 'NOT_APPROVED_TO_START'
  },
  ju = {
    Sensitive: 'SENSITIVE',
    NonSensitive: 'NON_SENSITIVE',
    Unknown: 'UNKNOWN'
  },
  qu = { Set: 'SET', Add: 'ADD' },
  $u = {
    ReonboardingInFeed: 'REONBOARDING_IN_FEED',
    ReonboardingBottomSheet: 'REONBOARDING_BOTTOM_SHEET',
    ViralCommunityXpromo: 'VIRAL_COMMUNITY_XPROMO',
    AnnouncementInFeed: 'ANNOUNCEMENT_IN_FEED',
    LiveChatVideoEdu: 'LIVE_CHAT_VIDEO_EDU',
    LiveChatReactionEdu: 'LIVE_CHAT_REACTION_EDU',
    BlockingXpromo: 'BLOCKING_XPROMO',
    BypassableXpromo: 'BYPASSABLE_XPROMO',
    Auth: 'AUTH',
    LanguagePreferenceBottomSheet: 'LANGUAGE_PREFERENCE_BOTTOM_SHEET',
    GoogleOneTap: 'GOOGLE_ONE_TAP',
    LoggedInOnboarding: 'LOGGED_IN_ONBOARDING',
    NewUserEducation: 'NEW_USER_EDUCATION',
    ReonboardingBottomSheetInPlace: 'REONBOARDING_BOTTOM_SHEET_IN_PLACE',
    PersonalizedCommunityRecommendationsInHomeFeed:
      'PERSONALIZED_COMMUNITY_RECOMMENDATIONS_IN_HOME_FEED',
    PersonalizedCommunityRecommendationsInDiscoverFeed:
      'PERSONALIZED_COMMUNITY_RECOMMENDATIONS_IN_DISCOVER_FEED',
    ScreenshotSharingBanner: 'SCREENSHOT_SHARING_BANNER',
    ChatChannelUnitInHomeFeed: 'CHAT_CHANNEL_UNIT_IN_HOME_FEED',
    OnboardingInFeed: 'ONBOARDING_IN_FEED',
    NewVisitorFeedNav: 'NEW_VISITOR_FEED_NAV',
    ChatChannelsOnPdp: 'CHAT_CHANNELS_ON_PDP',
    ExclusiveCommunitiesValidationTest: 'EXCLUSIVE_COMMUNITIES_VALIDATION_TEST',
    ExclusiveCommunitiesGrowthTest: 'EXCLUSIVE_COMMUNITIES_GROWTH_TEST',
    AmaCarouselInFeed: 'AMA_CAROUSEL_IN_FEED',
    ChatOnboardingCta: 'CHAT_ONBOARDING_CTA',
    InlineAuthUpsell: 'INLINE_AUTH_UPSELL',
    EducationalDeeplinkPrompt: 'EDUCATIONAL_DEEPLINK_PROMPT'
  },
  Xu = { None: 'NONE', Up: 'UP', Down: 'DOWN' },
  Ku = gt(t);
var Qu, Ju;
!(function (e) {
  (e.Small = 'small'), (e.XSmall = 'x-small'), (e.Medium = 'medium');
})(Qu || (Qu = {})),
  (function (e) {
    (e.Primary = 'primary'),
      (e.Secondary = 'secondary'),
      (e.Plain = 'plain'),
      (e.Bordered = 'bordered');
  })(Ju || (Ju = {}));
let Zu = class extends Ku {
  constructor() {
    super(...arguments),
      (this.isUserLoggedIn = !1),
      (this.name = ''),
      (this.prefixedName = ''),
      (this.subredditId = ''),
      (this.subscribed = !1),
      (this.subscribeLabel = 'Join'),
      (this.unsubscribeLabel = 'Leave'),
      (this.buttonsize = Qu.Small),
      (this.buttonClasses = ''),
      (this.isDisabled = !1),
      (this.onSubscriptionChange = (e) => {
        this.name === e.name && (this.subscribed = e.subscribed);
      });
  }
  static get styles() {
    return De;
  }
  firstUpdated() {
    this.subscribe(lt.SubredditSubscriptionChange, this.onSubscriptionChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.unsubscribe(
        lt.SubredditSubscriptionChange,
        this.onSubscriptionChange
      );
  }
  async handleClick(e, t) {
    if (
      (e.preventDefault(),
      this.dispatchEvent(
        k('join', { subreddit_name: this.name, subreddit_id: this.subredditId })
      ),
      this.isUserLoggedIn)
    ) {
      this.isDisabled = !0;
      try {
        if (
          (await this.makeSubscriptionRequest(t ? Yu.Subscribed : Yu.None))
            ?.data?.updateSubredditSubscriptions?.ok
        ) {
          this.subscribed = t;
          const e = { name: this.name, subscribed: t };
          this.publish(lt.SubredditSubscriptionChange, e);
        } else this.handleSubscriptionChangeError();
      } catch (e) {
        this.handleSubscriptionChangeError();
      }
      this.isDisabled = !1;
    }
  }
  async makeSubscriptionRequest(e) {
    return Ps({
      operation: Is.UpdateSubredditSubscriptions,
      variables: {
        input: {
          inputs: [{ subredditId: this.subredditId, subscribeState: e }]
        }
      }
    });
  }
  handleSubscriptionChangeError() {
    this.dispatchEvent(
      k('faceplate-alert', { level: $.error, message: 'Something went wrong' })
    );
  }
  render() {
    const { subscribed: e } = this,
      t = (e) => ({
        'button-primary': e ? e === Ju.Primary : !this.subscribed,
        'button-secondary': e ? e === Ju.Secondary : this.subscribed,
        'button-plain': e === Ju.Plain,
        'button-bordered': e === Ju.Bordered,
        'button-x-small': this.buttonsize === Qu.XSmall,
        'button-small': this.buttonsize === Qu.Small,
        'button-medium': this.buttonsize === Qu.Medium,
        button: !0,
        'join-btn': !0,
        'leading-none': !0,
        [this.buttonClasses]: !0
      });
    return e
      ? s`\n <button \n class="${Ee(t(this.unsubscribeButtonTypeOverride || this.buttonType))}" \n @click="${(e) => this.handleClick(e, !1)}" \n data-post-click-location="${Zl.JOIN}" \n ?disabled="${this.isDisabled}" \n>\n ${this.unsubscribeLabel}\n </button>\n `
      : s`\n <button \n class="${Ee(t(this.subscribeButtonTypeOverride || this.buttonType))}" \n @click="${(e) => this.handleClick(e, !0)}" \n data-post-click-location="${Zl.JOIN}" \n ?disabled="${this.isDisabled}" \n>\n ${this.subscribeLabel}\n </button>\n `;
  }
};
e(
  [Bn({ context: 'logged-in' }), n({ attribute: !1 })],
  Zu.prototype,
  'isUserLoggedIn',
  void 0
),
  e([n({ type: String })], Zu.prototype, 'name', void 0),
  e(
    [n({ type: String, attribute: 'prefixed-name' })],
    Zu.prototype,
    'prefixedName',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'subreddit-id' })],
    Zu.prototype,
    'subredditId',
    void 0
  ),
  e([n({ type: Boolean })], Zu.prototype, 'subscribed', void 0),
  e(
    [n({ type: String, attribute: 'subscribe-label' })],
    Zu.prototype,
    'subscribeLabel',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'unsubscribe-label' })],
    Zu.prototype,
    'unsubscribeLabel',
    void 0
  ),
  e([n({ type: String })], Zu.prototype, 'buttonsize', void 0),
  e(
    [n({ type: String, attribute: 'button-type' })],
    Zu.prototype,
    'buttonType',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'subscribe-button-type-override' })],
    Zu.prototype,
    'subscribeButtonTypeOverride',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'unsubscribe-button-type-override' })],
    Zu.prototype,
    'unsubscribeButtonTypeOverride',
    void 0
  ),
  e(
    [n({ type: String, attribute: 'button-classes' })],
    Zu.prototype,
    'buttonClasses',
    void 0
  ),
  e([x()], Zu.prototype, 'isDisabled', void 0),
  (Zu = e([g('shreddit-join-button')], Zu));
let eh = class extends t {
  connectedCallback() {
    super.connectedCallback();
    const e = this.firstElementChild;
    if ('TEMPLATE' !== e?.nodeName)
      throw new Error(
        'The first child of a <shreddit-page-meta> element must be a <template>'
      );
    document
      .createRange()
      .createContextualFragment(e.innerHTML)
      .childNodes.forEach((e) => {
        if (
          (function (e) {
            return !!e.attributes;
          })(e)
        ) {
          if ('SHREDDIT-APP-ATTRS' === e.nodeName) {
            th(e, document.querySelector('shreddit-app'));
          }
          if ('SHREDDIT-GOOD-VISIT-TRACKER-ATTRS' === e.nodeName) {
            th(e, document.querySelector('shreddit-good-visit-tracker'));
          }
        }
      });
  }
  render() {
    return s`<slot></slot>`;
  }
};
function th(e, t) {
  for (let n = 0; n < e.attributes.length; n++) {
    const r = e.attributes[n];
    t?.setAttribute(r.name, r.value);
  }
}
var nh;
(eh = e([g('shreddit-page-meta')], eh)),
  (function (e) {
    (e[(e.hidden = 0)] = 'hidden'),
      (e[(e.animating = 1)] = 'animating'),
      (e[(e.stalled = 2)] = 'stalled'),
      (e[(e.hiding = 3)] = 'hiding');
  })(nh || (nh = {}));
let rh = class extends t {
  constructor() {
    super(...arguments),
      (this.state = nh.hidden),
      (this.currentStartTime = null);
  }
  render() {
    const e = 'bar bg-global-orangered transition-transform';
    switch (this.state) {
      case nh.animating:
        return s`<div \n class="${e} animating-in" \n @animationend="${() => {
          this.state = nh.stalled;
        }}" \n></div>`;
      case nh.hiding:
        return s`<div \n class="${e} hiding" \n @animationend="${() => {
          this.state = nh.hidden;
        }}" \n></div>`;
      case nh.stalled:
        return s`<div class="${e} stalled"></div>`;
      case nh.hidden:
      default:
        return E;
    }
  }
  show() {
    (this.currentStartTime = Date.now()), (this.state = nh.animating);
  }
  hide() {
    null === this.currentStartTime ||
    Date.now() - this.currentStartTime < 150 ||
    this.state === nh.hidden
      ? (this.state = nh.hidden)
      : (this.state = nh.hiding);
  }
};
(rh.styles = [
  i`.bar{height:2px}.animating-in{transform:scaleX(0);transform-origin:0 50%;animation-duration:15s;animation-iteration-count:1;animation-name:expand;animation-timing-function:cubic-bezier(.21,.62,.15,.99);animation-delay:150ms}.hiding{animation-duration:250ms;animation-iteration-count:1;animation-name:hide;animation-timing-function:ease-out;transform:scaleX(100%)}.stalled{transform:scaleX(99%)}@keyframes expand{from{transform:scaleX(0)}to{transform:scaleX(99%)}}@keyframes hide{from{transform:translateY(0)}to{transform:translateY(-100%)}}`,
  De
]),
  e([x()], rh.prototype, 'state', void 0),
  (rh = e([g('navigation-indicator')], rh));
const oh = new G();
class ah extends ne {
  constructor() {
    super(...arguments), (this.src = ''), (this.loading = X.Lazy);
  }
  static configureLoader(e) {
    oh.resolve(e);
  }
  createRenderRoot() {
    return this;
  }
}
e([n({ type: String })], ah.prototype, 'src', void 0),
  e([n({ type: String })], ah.prototype, 'loading', void 0),
  te(ah, oh.promise),
  window.customElements.define('faceplate-loader', ah);
const ih = (e, t) => {
    const n = e;
    if (!t) return void (n.loadingPromises = [Promise.resolve()]);
    let r = n.getRootNode();
    r instanceof Document && (r = r.body);
    const o = t
      .split(',')
      .map((e) => e.trim())
      .filter(Boolean);
    n.loadingPromises = o.map(
      (e) =>
        new Promise((t, n) => {
          if (e.endsWith('.js') || e.endsWith('.ts')) {
            const o = document.createElement('script');
            r.appendChild(o),
              (o.type = 'module'),
              (o.async = !0),
              (o.src = e),
              (o.onload = () => t()),
              (o.onerror = () => n());
          } else {
            if (!e.endsWith('.css') && !e.endsWith('.less'))
              throw new Error(
                'Only JS and CSS files can be loaded with faceplate-loader'
              );
            {
              const o = document.createElement('link');
              r.appendChild(o),
                (o.rel = 'stylesheet'),
                (o.href = e),
                (o.onload = () => t()),
                (o.onerror = () => n());
            }
          }
        })
    );
  },
  sh = async (e) => {
    const t = e;
    await Promise.allSettled(t.loadingPromises);
    const n = t.nextElementSibling;
    if (
      !n ||
      'TEMPLATE' !== n.tagName ||
      n.getAttribute('name') !== t.getAttribute('name')
    )
      return;
    const r = n.content.cloneNode(!0);
    t.after(r);
  };
const dh = Symbol('mixins/with-portal');
let lh = document.body;
function ch(e) {
  if (dh in e) return e;
  class t extends e {
    connectedCallback() {
      super.connectedCallback(), (this.style.display = 'none');
    }
    attachPortal() {
      lh.appendChild(this.portalContainer);
    }
    removePortal() {
      this.portalContainer.parentElement &&
        this.portalContainer.parentElement.removeChild(this.portalContainer);
    }
    createRenderRoot() {
      return (
        (this.portalContainer = document.createElement('div')),
        (this.portalShadowRoot = this.portalContainer.attachShadow(
          this.constructor.shadowRootOptions
        )),
        S(this.portalShadowRoot, this.constructor.elementStyles),
        this.portalShadowRoot
      );
    }
  }
  return (t[dh] = !0), t;
}
var ph;
An.addLoaders({
  app_selector: () => import('./xpromo-app-selector-3f73980f.js'),
  auth_flow_google_one_tap: () => import('./google-one-tap-7a7ad679.js'),
  auth_flow_login: () => import('./auth-flow-login-01282f74.js'),
  auth_flow_register: () => import('./auth-flow-register-9c86db12.js'),
  auth_flow_signup_drawer: () => import('./signup-drawer-54fd67ba.js'),
  auth_flow_sso_linking: () =>
    import('./auth-flow-sso-linking-cb2aa615.js').then(function (e) {
      return e.b;
    }),
  auth_flow_password_recovery: () =>
    import('./auth-flow-password-recovery-f607cf76.js'),
  auth_flow_password_reset: () =>
    import('./auth-flow-password-reset-4f8cf22e.js'),
  auth_flow_phone_auth: () => import('./auth-flow-phone-1b23dcc1.js'),
  bottom_bar_xpromo: () => import('./xpromo-bottom-bar-07a2a581.js'),
  faceplate_hovercard: () =>
    import('./faceplate-hovercard-11cfd761.js').then(function (e) {
      return e.f;
    }),
  media_player_loader: () => import('./media-player-cc4e411d.js'),
  top_button: () => import('./top-button-e6f4b3d7.js'),
  untagged_content_blocking: () =>
    import('./xpromo-untagged-content-blocking-modal-da6bb97b.js'),
  signup_upsell_untagged_content_blocking: () =>
    import(
      './xpromo-signup-upsell-untagged-content-blocking-modal-fdfa2112.js'
    ),
  devvit_context_actions: () => import('./devvit-context-actions-3deded93.js'),
  debug: () => import('./debug-83f4194d.js'),
  reddit_cookie_banner: () => import('./reddit-cookie-banner-73039608.js'),
  reddit_search_large: () => import('./large-5b9b434b.js'),
  reddit_search_small: () => import('./small-c4dad144.js'),
  faceplate_alerts: () => import('./faceplate-alerts-7a9a44cf.js'),
  shreddit_post_overflow_menu: () =>
    Promise.all([
      import('./shreddit-post-overflow-menu-25f61f14.js'),
      import('./recommendation-context-overflow-menu-757a58c9.js'),
      import('./unpacking-overflow-menu-2c513651.js')
    ]),
  shreddit_post_poll: () => import('./shreddit-post-poll-21f759e4.js'),
  shreddit_sort_dropdown: () => import('./shreddit-sort-dropdown-d7497ae2.js'),
  nsfw_blocking_modal: () => import('./xpromo-nsfw-blocking-modal-013181fc.js'),
  desktop_rpl_nsfw_blocking_modal: () =>
    import('./xpromo-nsfw-blocking-modal-desktop-fd9c1abe.js'),
  desktop_nsfw_bypassable_modal: () =>
    import('./xpromo-nsfw-bypassable-modal-desktop-65427520.js'),
  embed: () => import('./shreddit-embed-a1a4d4fb.js'),
  faceplate_tabs: () =>
    Promise.all([
      import('./faceplate-tabpanel-70dadd0c.js'),
      import('./faceplate-tablist-63af529a.js')
    ]),
  faceplate_expandable_section: () =>
    Promise.all([
      import('./faceplate-expandable-section-helper-e3a05e97.js'),
      import('./faceplate-auto-height-animator-47056d1d.js')
    ]),
  viral_community_bypassable: () =>
    import('./xpromo-viral-community-d153d3c3.js'),
  xpromo_login_drawer: () =>
    Promise.all([
      import('./xpromo-login-drawer-9da757a5.js'),
      import('./auth-flow-sso-buttons-9d8fb2a1.js'),
      import('./auth-landing-experience-xpromo-shell-25c5a4dc.js')
    ]),
  ads_rbl_survey: () => import('./ads-survey-iframe-c2937140.js'),
  educational_deeplink_prompt_for_ios: () =>
    import('./xpromo-educational-deeplink-prompt-1699d1c7.js'),
  recap_blocking_modal: () =>
    import('./xpromo-recap-blocking-modal-a59c9b98.js'),
  gallery_carousel: () =>
    Promise.all([
      import('./gallery-carousel-d7a45a6f.js'),
      import('./gallery-caption-01056598.js')
    ]),
  faceplate_bottom_sheet: () => import('./faceplate-bottom-sheet-8897847c.js'),
  faceplate_iframe: () => import('./faceplate-iframe-ee5039c3.js'),
  auth_flow_open_app: () => import('./auth-flow-open-app-ffff92b1.js'),
  comment_body_header: () => import('./comment-body-header-7e493809.js'),
  tweet_embed: () => import('./shreddit-tweet-embed-c74d0a95.js'),
  hamburger_menu: () => import('./hamburger-menu-client-js-03060dd9.js'),
  translation_feedback: () => import('./translation-feedback-ffb3e46a.js'),
  translation_row: () => import('./translation-row-068da191.js'),
  lead_generation_ad_dialog: () =>
    import('./shreddit-lead-generation-ad-dialog-66ca4929.js'),
  sidebar_ad: () => import('./shreddit-sidebar-ad-f4fbd86f.js'),
  reddit_recent_pages: () => import('./reddit-recent-pages-23f946cc.js'),
  report_flow: () => import('./report-flow-5bfe1fed.js'),
  report_flow_provider: () => import('./report-flow-provider-ec998c09.js'),
  shreddit_fps_counter: () => import('./shreddit-fps-counter-0fc3802d.js'),
  hui_left_nav_see_more: () => import('./hui-left-nav-see-more-ed8a84fb.js'),
  feed_announcement: () => import('./feed-announcement-1b14dac1.js'),
  recent_posts_tracker: () => import('./recent-posts-tracker-bd9b24ba.js'),
  reddit_header_action_items: () =>
    import('./reddit-header-action-items-e0b783b2.js'),
  faceplate_dropdown_menu: () =>
    import('./faceplate-dropdown-menu-e582a736.js'),
  faceplate_tooltip: () => import('./faceplate-tooltip-017d3daf.js'),
  community_creation_modal: () =>
    import('./community-creation-modal-6437ddd1.js'),
  comment_composer: () =>
    Promise.all([
      import('./comment-composer-host-5dbb6abe.js'),
      import('./shreddit-composer-4b69b46d.js')
    ]),
  distinguished_post_tags: () =>
    import('./shreddit-distinguished-post-tags-3b37345e.js'),
  status_icons: () => import('./shreddit-status-icons-893ae45b.js'),
  shreddit_overflow_bottom_sheet: () =>
    import('./shreddit-overflow-bottom-sheet-011a8be6.js'),
  user_blocking: () =>
    Promise.all([
      import('./user-blocking-39fb37d9.js'),
      import('./user-block-wrapper-60fbb36b.js')
    ]),
  navigation_links: () => import('./reddit-skip-to-sidebar-ededc078.js'),
  simple_comment_composer: () =>
    Promise.all([
      import('./comment-composer-host-5dbb6abe.js'),
      import('./shreddit-simple-composer-853adfb6.js')
    ]),
  community_colors: () => import('./community-colors-381cc626.js'),
  edit_post: () => import('./edit-post-client-js-23a5777f.js'),
  pdp_rules_handler: () => import('./shreddit-pdp-rules-handler-29d9bec0.js'),
  user_mod_actions: () => import('./user-mod-actions-58c1c1c3.js'),
  mod_ban_modal_form: () => import('./mod-ban-modal-form-4335f08e.js'),
  mod_mute_modal_form: () => import('./mod-mute-modal-form-8c454f72.js'),
  onboarding_flow: () => import('./onboarding-flow-f7e8a749.js'),
  ob_gender_selection: () => import('./ob-gender-selection-feba1d0e.js'),
  ob_interest_picker: () => import('./ob-interest-picker-c91eedae.js'),
  user_details_reporting: () => import('./user-details-reporting-945867f7.js'),
  screen_reader_alerts: () =>
    import('./screen-reader-alert-outlet-8fd75d29.js'),
  reputation_recaptcha: () => import('./reputation-recaptcha-07fbcea2.js'),
  mod_log_note: () => import('./mod-notes-log-247278e7.js'),
  mod_notes_rail: () => import('./mod-notes-rail-client-js-48caa57b.js'),
  logged_in_upsell: () => import('./xpromo-logged-in-upsell-0e212dd3.js'),
  subreddit_right_rail_translator: () =>
    import('./subreddit-right-rail-translator-ed663fbd.js'),
  pdp_right_rail_post_translator: () =>
    import('./pdp-right-rail-post-translator-8bca000b.js'),
  pdp_comment_search: () =>
    Promise.all([
      import('./search-dynamic-id-cache-controller-914e8ecd.js'),
      import('./search-load-tracker-1a2fc629.js')
    ])
}),
  (function () {
    const e = customElements.define;
    '_patched' in e ||
      ((customElements.define = (t, n) => {
        customElements.get(t) || e.call(customElements, t, n);
      }),
      Object.defineProperty(customElements.define, '_patched', {
        configurable: !1,
        writable: !1,
        value: !0
      }));
  })(),
  te(ah, { loader: ih, runner: sh }),
  te(_e, {
    loader: (e) => e._loadContent(),
    runner: (e, t) => {
      const n = e.parentElement;
      if ((e._renderContent(t), e.hasAttribute('debug') && n)) {
        const t = {
          featureName: e.getAttribute('name') || 'Unknown',
          loadingStrategy: e.getAttribute('loading') || 'Unknown',
          htmlMode: 'partial'
        };
        xe(
          `<faceplate-alert\n          name="feature-render"\n          level="${$.debug}"\n          meta="${JSON.stringify(t).replaceAll('"', '&quot;')}"\n        ></faceplate-alert>`,
          n,
          J.Append
        );
      }
    }
  }),
  (() => {
    if (
      Ft ||
      'function' != typeof window.performance?.measure ||
      'function' != typeof window.performance?.getEntriesByName
    )
      return;
    window.performance.measure('experience-tier');
    const e =
      window.performance.getEntriesByName('experience-tier')?.[0]?.duration;
    e < 2e3 && (Vt = Mt.Normal), (Ft = !0);
  })(),
  (ph = document.querySelector('shreddit-app')),
  (lh = ph);
export {
  Ps as $,
  pi as A,
  fi as B,
  D as C,
  Zn as D,
  I as E,
  bi as F,
  Xr as G,
  $r as H,
  le as I,
  di as J,
  ie as K,
  X as L,
  ce as M,
  Q as N,
  W as O,
  it as P,
  J as Q,
  de as R,
  $ as S,
  rt as T,
  T as U,
  fe as V,
  gt as W,
  re as X,
  xe as Y,
  Zt as Z,
  Se as _,
  lt as a,
  ic as a$,
  Is as a0,
  am as a1,
  om as a2,
  Xu as a3,
  Bm as a4,
  vd as a5,
  Le as a6,
  wm as a7,
  wi as a8,
  ki as a9,
  te as aA,
  ne as aB,
  Rs as aC,
  $u as aD,
  im as aE,
  Sd as aF,
  zi as aG,
  qi as aH,
  Rt as aI,
  be as aJ,
  fn as aK,
  yt as aL,
  Bi as aM,
  Ve as aN,
  Be as aO,
  _s as aP,
  ys as aQ,
  Yi as aR,
  Bn as aS,
  ji as aT,
  Vi as aU,
  rm as aV,
  Km as aW,
  Xm as aX,
  Bu as aY,
  Vu as aZ,
  Gm as a_,
  Dr as aa,
  sm as ab,
  Ca as ac,
  Jp as ad,
  Oa as ae,
  ln as af,
  Pa as ag,
  Aa as ah,
  Ra as ai,
  Ta as aj,
  ch as ak,
  Ts as al,
  mt as am,
  mu as an,
  we as ao,
  Ae as ap,
  go as aq,
  ho as ar,
  po as as,
  uo as at,
  mo as au,
  bo as av,
  xo as aw,
  q as ax,
  lo as ay,
  co as az,
  Oe as b,
  H as b$,
  Re as b0,
  Ar as b1,
  We as b2,
  He as b3,
  ur as b4,
  Xd as b5,
  Li as b6,
  Ri as b7,
  Sr as b8,
  Tr as b9,
  Ec as bA,
  Ic as bB,
  Oc as bC,
  Hl as bD,
  Gl as bE,
  Zl as bF,
  yc as bG,
  fc as bH,
  hn as bI,
  Yc as bJ,
  hc as bK,
  gc as bL,
  dc as bM,
  lc as bN,
  cc as bO,
  Tc as bP,
  zc as bQ,
  wc as bR,
  xc as bS,
  at as bT,
  _c as bU,
  vc as bV,
  Sc as bW,
  kc as bX,
  Mo as bY,
  Io as bZ,
  R as b_,
  Oi as ba,
  Ir as bb,
  Cr as bc,
  Gc as bd,
  kr as be,
  Er as bf,
  Gt as bg,
  yn as bh,
  ed as bi,
  St as bj,
  zs as bk,
  ue as bl,
  Qs as bm,
  or as bn,
  _e as bo,
  ps as bp,
  ja as bq,
  pu as br,
  qa as bs,
  Ya as bt,
  Dl as bu,
  Xa as bv,
  su as bw,
  Nt as bx,
  mc as by,
  uc as bz,
  Et as c,
  Jm as c$,
  _u as c0,
  nu as c1,
  Cm as c2,
  jm as c3,
  uu as c4,
  fm as c5,
  Hm as c6,
  Ru as c7,
  du as c8,
  Cu as c9,
  km as cA,
  Gu as cB,
  Hu as cC,
  vm as cD,
  Ln as cE,
  Mm as cF,
  Vn as cG,
  Wu as cH,
  Um as cI,
  yu as cJ,
  lm as cK,
  vu as cL,
  wu as cM,
  fu as cN,
  pm as cO,
  cm as cP,
  au as cQ,
  cs as cR,
  Fm as cS,
  Ed as cT,
  Qm as cU,
  ge as cV,
  ym as cW,
  Js as cX,
  Sm as cY,
  _m as cZ,
  Am as c_,
  Eu as ca,
  xu as cb,
  Fe as cc,
  iu as cd,
  ku as ce,
  zd as cf,
  Je as cg,
  Nm as ch,
  bn as ci,
  fo as cj,
  ql as ck,
  vo as cl,
  ju as cm,
  so as cn,
  Om as co,
  zm as cp,
  lu as cq,
  Tm as cr,
  zu as cs,
  mm as ct,
  um as cu,
  ls as cv,
  Nu as cw,
  Lu as cx,
  Du as cy,
  Pm as cz,
  Ne as d,
  Ba as d$,
  Cc as d0,
  Nc as d1,
  Dc as d2,
  Lc as d3,
  Wc as d4,
  Ac as d5,
  Hc as d6,
  Rc as d7,
  Pc as d8,
  Mc as d9,
  pc as dA,
  Tt as dB,
  cl as dC,
  ul as dD,
  gl as dE,
  Jd as dF,
  sl as dG,
  ve as dH,
  ll as dI,
  Wn as dJ,
  Wi as dK,
  ac as dL,
  oc as dM,
  pl as dN,
  bc as dO,
  Di as dP,
  Ni as dQ,
  Na as dR,
  qd as dS,
  jd as dT,
  $d as dU,
  ma as dV,
  fa as dW,
  Ii as dX,
  Ct as dY,
  aa as dZ,
  Ua as d_,
  Uc as da,
  Fc as db,
  Vc as dc,
  Bc as dd,
  ou as de,
  ru as df,
  Gs as dg,
  Yl as dh,
  Jl as di,
  Ql as dj,
  Lm as dk,
  Fu as dl,
  Uu as dm,
  hm as dn,
  Dm as dp,
  Iu as dq,
  Wm as dr,
  Rm as ds,
  $m as dt,
  Mu as du,
  gm as dv,
  td as dw,
  sd as dx,
  od as dy,
  id as dz,
  k as e,
  ot as e$,
  Kd as e0,
  _a as e1,
  ca as e2,
  Qd as e3,
  pa as e4,
  La as e5,
  ya as e6,
  ga as e7,
  va as e8,
  wa as e9,
  $e as eA,
  xm as eB,
  bm as eC,
  cu as eD,
  Za as eE,
  ti as eF,
  ni as eG,
  Zs as eH,
  Ym as eI,
  Zm as eJ,
  eu as eK,
  tu as eL,
  gu as eM,
  Qa as eN,
  tm as eO,
  nm as eP,
  dm as eQ,
  Pu as eR,
  Au as eS,
  Co as eT,
  Xn as eU,
  Qn as eV,
  $n as eW,
  zn as eX,
  Jn as eY,
  Hs as eZ,
  Ws as e_,
  ba as ea,
  xa as eb,
  Ma as ec,
  Da as ed,
  Fa as ee,
  ia as ef,
  yo as eg,
  _o as eh,
  Ia as ei,
  Xe as ej,
  Ke as ek,
  Su as el,
  Ge as em,
  Qe as en,
  Ye as eo,
  ze as ep,
  je as eq,
  hu as er,
  bu as es,
  qe as et,
  Im as eu,
  Vm as ev,
  Em as ew,
  Ou as ex,
  K as ey,
  ms as ez,
  Wt as f,
  _n as f0,
  Yu as f1,
  ei as f2,
  qm as f3,
  Ja as f4,
  $a as f5,
  Nl as f6,
  Ll as f7,
  ta as f8,
  Bo as f9,
  qu as fA,
  ir as fB,
  G as fC,
  qs as fa,
  Ks as fb,
  Tu as fc,
  za as fd,
  ml as fe,
  O as ff,
  Y as fg,
  oe as fh,
  xt as fi,
  vt as fj,
  Md as fk,
  Sl as fl,
  Nd as fm,
  Rd as fn,
  Od as fo,
  Pi as fp,
  Ci as fq,
  Ul as fr,
  hl as fs,
  bl as ft,
  nl as fu,
  el as fv,
  Zd as fw,
  tl as fx,
  Fi as fy,
  El as fz,
  Ot as g,
  C as h,
  ft as i,
  At as j,
  In as k,
  pt as l,
  Me as m,
  Pt as n,
  Ee as o,
  un as p,
  Lt as q,
  Bt as r,
  A as s,
  De as t,
  P as u,
  vs as v,
  Kl as w,
  Rn as x,
  Mi as y,
  Nn as z
};
//# sourceMappingURL=shell-c7aa92cc.js.map
