var a = function (t, l) {
  return (a =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (a, t) {
        a.__proto__ = t;
      }) ||
    function (a, t) {
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (a[l] = t[l]);
    })(t, l);
};
function t(t, l) {
  if ('function' != typeof l && null !== l)
    throw new TypeError(
      'Class extends value ' + String(l) + ' is not a constructor or null'
    );
  function e() {
    this.constructor = t;
  }
  a(t, l),
    (t.prototype =
      null === l ? Object.create(l) : ((e.prototype = l.prototype), new e()));
}
function l(a, t) {
  var l = {};
  for (var e in a)
    Object.prototype.hasOwnProperty.call(a, e) &&
      t.indexOf(e) < 0 &&
      (l[e] = a[e]);
  if (null != a && 'function' == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (e = Object.getOwnPropertySymbols(a); o < e.length; o++)
      t.indexOf(e[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(a, e[o]) &&
        (l[e[o]] = a[e[o]]);
  }
  return l;
}
function e(a, t, l, e) {
  var o,
    n = arguments.length,
    i =
      n < 3 ? t : null === e ? (e = Object.getOwnPropertyDescriptor(t, l)) : e;
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    i = Reflect.decorate(a, t, l, e);
  else
    for (var s = a.length - 1; s >= 0; s--)
      (o = a[s]) && (i = (n < 3 ? o(i) : n > 3 ? o(t, l, i) : o(t, l)) || i);
  return n > 3 && i && Object.defineProperty(t, l, i), i;
}
function o(a) {
  var t = 'function' == typeof Symbol && Symbol.iterator,
    l = t && a[t],
    e = 0;
  if (l) return l.call(a);
  if (a && 'number' == typeof a.length)
    return {
      next: function () {
        return (
          a && e >= a.length && (a = void 0), { value: a && a[e++], done: !a }
        );
      }
    };
  throw new TypeError(
    t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
  );
}
function n(a, t) {
  var l = 'function' == typeof Symbol && a[Symbol.iterator];
  if (!l) return a;
  var e,
    o,
    n = l.call(a),
    i = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(e = n.next()).done; ) i.push(e.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      e && !e.done && (l = n.return) && l.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return i;
}
function i(a, t, l) {
  if (l || 2 === arguments.length)
    for (var e, o = 0, n = t.length; o < n; o++)
      (!e && o in t) ||
        (e || (e = Array.prototype.slice.call(t, 0, o)), (e[o] = t[o]));
  return a.concat(e || Array.prototype.slice.call(t));
}
function s(a) {
  return this instanceof s ? ((this.v = a), this) : new s(a);
}
function r(a, t, l) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var e,
    o = l.apply(a, t || []),
    n = [];
  return (
    (e = {}),
    i('next'),
    i('throw'),
    i('return'),
    (e[Symbol.asyncIterator] = function () {
      return this;
    }),
    e
  );
  function i(a) {
    o[a] &&
      (e[a] = function (t) {
        return new Promise(function (l, e) {
          n.push([a, t, l, e]) > 1 || r(a, t);
        });
      });
  }
  function r(a, t) {
    try {
      !(function (a) {
        a.value instanceof s
          ? Promise.resolve(a.value.v).then(v, d)
          : h(n[0][2], a);
      })(o[a](t));
    } catch (a) {
      h(n[0][3], a);
    }
  }
  function v(a) {
    r('next', a);
  }
  function d(a) {
    r('throw', a);
  }
  function h(a, t) {
    a(t), n.shift(), n.length && r(n[0][0], n[0][1]);
  }
}
function v(a) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var t,
    l = a[Symbol.asyncIterator];
  return l
    ? l.call(a)
    : ((a = o(a)),
      (t = {}),
      e('next'),
      e('throw'),
      e('return'),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function e(l) {
    t[l] =
      a[l] &&
      function (t) {
        return new Promise(function (e, o) {
          (function (a, t, l, e) {
            Promise.resolve(e).then(function (t) {
              a({ value: t, done: l });
            }, t);
          })(e, o, (t = a[l](t)).done, t.value);
        });
      };
  }
}
function d(a, t, l, e) {
  if ('a' === l && !e)
    throw new TypeError('Private accessor was defined without a getter');
  if ('function' == typeof t ? a !== t || !e : !t.has(a))
    throw new TypeError(
      'Cannot read private member from an object whose class did not declare it'
    );
  return 'm' === l ? e : 'a' === l ? e.call(a) : e ? e.value : t.get(a);
}
function h(a, t, l, e, o) {
  if ('m' === e) throw new TypeError('Private method is not writable');
  if ('a' === e && !o)
    throw new TypeError('Private accessor was defined without a setter');
  if ('function' == typeof t ? a !== t || !o : !t.has(a))
    throw new TypeError(
      'Cannot write private member to an object whose class did not declare it'
    );
  return 'a' === e ? o.call(a, l) : o ? (o.value = l) : t.set(a, l), l;
}
const c = window,
  u =
    c.ShadowRoot &&
    (void 0 === c.ShadyCSS || c.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  p = Symbol(),
  m = new WeakMap();
class g {
  constructor(a, t, l) {
    if (((this._$cssResult$ = !0), l !== p))
      throw Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.'
      );
    (this.cssText = a), (this.t = t);
  }
  get styleSheet() {
    let a = this.o;
    const t = this.t;
    if (u && void 0 === a) {
      const l = void 0 !== t && 1 === t.length;
      l && (a = m.get(t)),
        void 0 === a &&
          ((this.o = a = new CSSStyleSheet()).replaceSync(this.cssText),
          l && m.set(t, a));
    }
    return a;
  }
  toString() {
    return this.cssText;
  }
}
const $ = (a, ...t) => {
    const l =
      1 === a.length
        ? a[0]
        : t.reduce(
            (t, l, e) =>
              t +
              ((a) => {
                if (!0 === a._$cssResult$) return a.cssText;
                if ('number' == typeof a) return a;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    a +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(l) +
              a[e + 1],
            a[0]
          );
    return new g(l, a, p);
  },
  Z = (a, t) => {
    u
      ? (a.adoptedStyleSheets = t.map((a) =>
          a instanceof CSSStyleSheet ? a : a.styleSheet
        ))
      : t.forEach((t) => {
          const l = document.createElement('style'),
            e = c.litNonce;
          void 0 !== e && l.setAttribute('nonce', e),
            (l.textContent = t.cssText),
            a.appendChild(l);
        });
  },
  A = u
    ? (a) => a
    : (a) =>
        a instanceof CSSStyleSheet
          ? ((a) => {
              let t = '';
              for (const l of a.cssRules) t += l.cssText;
              return ((a) =>
                new g('string' == typeof a ? a : a + '', void 0, p))(t);
            })(a)
          : a;
var w;
const f = window,
  b = f.trustedTypes,
  M = b ? b.emptyScript : '',
  H = f.reactiveElementPolyfillSupport,
  x = {
    toAttribute(a, t) {
      switch (t) {
        case Boolean:
          a = a ? M : null;
          break;
        case Object:
        case Array:
          a = null == a ? a : JSON.stringify(a);
      }
      return a;
    },
    fromAttribute(a, t) {
      let l = a;
      switch (t) {
        case Boolean:
          l = null !== a;
          break;
        case Number:
          l = null === a ? null : Number(a);
          break;
        case Object:
        case Array:
          try {
            l = JSON.parse(a);
          } catch (a) {
            l = null;
          }
      }
      return l;
    }
  },
  y = (a, t) => t !== a && (t == t || a == a),
  L = { attribute: !0, type: String, converter: x, reflect: !1, hasChanged: y },
  V = 'finalized';
class _ extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this.u();
  }
  static addInitializer(a) {
    var t;
    this.finalize(),
      (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(a);
  }
  static get observedAttributes() {
    this.finalize();
    const a = [];
    return (
      this.elementProperties.forEach((t, l) => {
        const e = this._$Ep(l, t);
        void 0 !== e && (this._$Ev.set(e, l), a.push(e));
      }),
      a
    );
  }
  static createProperty(a, t = L) {
    if (
      (t.state && (t.attribute = !1),
      this.finalize(),
      this.elementProperties.set(a, t),
      !t.noAccessor && !this.prototype.hasOwnProperty(a))
    ) {
      const l = 'symbol' == typeof a ? Symbol() : '__' + a,
        e = this.getPropertyDescriptor(a, l, t);
      void 0 !== e && Object.defineProperty(this.prototype, a, e);
    }
  }
  static getPropertyDescriptor(a, t, l) {
    return {
      get() {
        return this[t];
      },
      set(e) {
        const o = this[a];
        (this[t] = e), this.requestUpdate(a, o, l);
      },
      configurable: !0,
      enumerable: !0
    };
  }
  static getPropertyOptions(a) {
    return this.elementProperties.get(a) || L;
  }
  static finalize() {
    if (this.hasOwnProperty(V)) return !1;
    this[V] = !0;
    const a = Object.getPrototypeOf(this);
    if (
      (a.finalize(),
      void 0 !== a.h && (this.h = [...a.h]),
      (this.elementProperties = new Map(a.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty('properties'))
    ) {
      const a = this.properties,
        t = [
          ...Object.getOwnPropertyNames(a),
          ...Object.getOwnPropertySymbols(a)
        ];
      for (const l of t) this.createProperty(l, a[l]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(a) {
    const t = [];
    if (Array.isArray(a)) {
      const l = new Set(a.flat(1 / 0).reverse());
      for (const a of l) t.unshift(A(a));
    } else void 0 !== a && t.push(A(a));
    return t;
  }
  static _$Ep(a, t) {
    const l = t.attribute;
    return !1 === l
      ? void 0
      : 'string' == typeof l
        ? l
        : 'string' == typeof a
          ? a.toLowerCase()
          : void 0;
  }
  u() {
    var a;
    (this._$E_ = new Promise((a) => (this.enableUpdating = a))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      null === (a = this.constructor.h) ||
        void 0 === a ||
        a.forEach((a) => a(this));
  }
  addController(a) {
    var t, l;
    (null !== (t = this._$ES) && void 0 !== t ? t : (this._$ES = [])).push(a),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (l = a.hostConnected) || void 0 === l || l.call(a));
  }
  removeController(a) {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.splice(this._$ES.indexOf(a) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((a, t) => {
      this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var a;
    const t =
      null !== (a = this.shadowRoot) && void 0 !== a
        ? a
        : this.attachShadow(this.constructor.shadowRootOptions);
    return Z(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var a;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (a = this._$ES) ||
        void 0 === a ||
        a.forEach((a) => {
          var t;
          return null === (t = a.hostConnected) || void 0 === t
            ? void 0
            : t.call(a);
        });
  }
  enableUpdating(a) {}
  disconnectedCallback() {
    var a;
    null === (a = this._$ES) ||
      void 0 === a ||
      a.forEach((a) => {
        var t;
        return null === (t = a.hostDisconnected) || void 0 === t
          ? void 0
          : t.call(a);
      });
  }
  attributeChangedCallback(a, t, l) {
    this._$AK(a, l);
  }
  _$EO(a, t, l = L) {
    var e;
    const o = this.constructor._$Ep(a, l);
    if (void 0 !== o && !0 === l.reflect) {
      const n = (
        void 0 !==
        (null === (e = l.converter) || void 0 === e ? void 0 : e.toAttribute)
          ? l.converter
          : x
      ).toAttribute(t, l.type);
      (this._$El = a),
        null == n ? this.removeAttribute(o) : this.setAttribute(o, n),
        (this._$El = null);
    }
  }
  _$AK(a, t) {
    var l;
    const e = this.constructor,
      o = e._$Ev.get(a);
    if (void 0 !== o && this._$El !== o) {
      const a = e.getPropertyOptions(o),
        n =
          'function' == typeof a.converter
            ? { fromAttribute: a.converter }
            : void 0 !==
                (null === (l = a.converter) || void 0 === l
                  ? void 0
                  : l.fromAttribute)
              ? a.converter
              : x;
      (this._$El = o),
        (this[o] = n.fromAttribute(t, a.type)),
        (this._$El = null);
    }
  }
  requestUpdate(a, t, l) {
    let e = !0;
    void 0 !== a &&
      (((l = l || this.constructor.getPropertyOptions(a)).hasChanged || y)(
        this[a],
        t
      )
        ? (this._$AL.has(a) || this._$AL.set(a, t),
          !0 === l.reflect &&
            this._$El !== a &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(a, l)))
        : (e = !1)),
      !this.isUpdatePending && e && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (a) {
      Promise.reject(a);
    }
    const a = this.scheduleUpdate();
    return null != a && (await a), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var a;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((a, t) => (this[t] = a)), (this._$Ei = void 0));
    let t = !1;
    const l = this._$AL;
    try {
      (t = this.shouldUpdate(l)),
        t
          ? (this.willUpdate(l),
            null === (a = this._$ES) ||
              void 0 === a ||
              a.forEach((a) => {
                var t;
                return null === (t = a.hostUpdate) || void 0 === t
                  ? void 0
                  : t.call(a);
              }),
            this.update(l))
          : this._$Ek();
    } catch (a) {
      throw ((t = !1), this._$Ek(), a);
    }
    t && this._$AE(l);
  }
  willUpdate(a) {}
  _$AE(a) {
    var t;
    null === (t = this._$ES) ||
      void 0 === t ||
      t.forEach((a) => {
        var t;
        return null === (t = a.hostUpdated) || void 0 === t
          ? void 0
          : t.call(a);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(a)),
      this.updated(a);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(a) {
    return !0;
  }
  update(a) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((a, t) => this._$EO(t, this[t], a)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(a) {}
  firstUpdated(a) {}
}
var C;
(_[V] = !0),
  (_.elementProperties = new Map()),
  (_.elementStyles = []),
  (_.shadowRootOptions = { mode: 'open' }),
  null == H || H({ ReactiveElement: _ }),
  (null !== (w = f.reactiveElementVersions) && void 0 !== w
    ? w
    : (f.reactiveElementVersions = [])
  ).push('1.6.2');
const k = window,
  E = k.trustedTypes,
  S = E ? E.createPolicy('lit-html', { createHTML: (a) => a }) : void 0,
  B = '$lit$',
  O = `lit$${(Math.random() + '').slice(9)}$`,
  P = '?' + O,
  T = `<${P}>`,
  z = document,
  N = () => z.createComment(''),
  R = (a) => null === a || ('object' != typeof a && 'function' != typeof a),
  U = Array.isArray,
  I = (a) =>
    U(a) || 'function' == typeof (null == a ? void 0 : a[Symbol.iterator]),
  j = '[ \t\n\f\r]',
  D = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  q = /-->/g,
  G = />/g,
  W = RegExp(
    `>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
    'g'
  ),
  F = /'/g,
  K = /"/g,
  X = /^(?:script|style|textarea|title)$/i,
  J =
    (a) =>
    (t, ...l) => ({ _$litType$: a, strings: t, values: l }),
  Y = J(1),
  Q = J(2),
  aa = Symbol.for('lit-noChange'),
  ta = Symbol.for('lit-nothing'),
  la = new WeakMap(),
  ea = z.createTreeWalker(z, 129, null, !1),
  oa = (a, t) => {
    const l = a.length - 1,
      e = [];
    let o,
      n = 2 === t ? '<svg>' : '',
      i = D;
    for (let t = 0; t < l; t++) {
      const l = a[t];
      let s,
        r,
        v = -1,
        d = 0;
      for (; d < l.length && ((i.lastIndex = d), (r = i.exec(l)), null !== r); )
        (d = i.lastIndex),
          i === D
            ? '!--' === r[1]
              ? (i = q)
              : void 0 !== r[1]
                ? (i = G)
                : void 0 !== r[2]
                  ? (X.test(r[2]) && (o = RegExp('</' + r[2], 'g')), (i = W))
                  : void 0 !== r[3] && (i = W)
            : i === W
              ? '>' === r[0]
                ? ((i = null != o ? o : D), (v = -1))
                : void 0 === r[1]
                  ? (v = -2)
                  : ((v = i.lastIndex - r[2].length),
                    (s = r[1]),
                    (i = void 0 === r[3] ? W : '"' === r[3] ? K : F))
              : i === K || i === F
                ? (i = W)
                : i === q || i === G
                  ? (i = D)
                  : ((i = W), (o = void 0));
      const h = i === W && a[t + 1].startsWith('/>') ? ' ' : '';
      n +=
        i === D
          ? l + T
          : v >= 0
            ? (e.push(s), l.slice(0, v) + B + l.slice(v) + O + h)
            : l + O + (-2 === v ? (e.push(void 0), t) : h);
    }
    const s = n + (a[l] || '<?>') + (2 === t ? '</svg>' : '');
    if (!Array.isArray(a) || !a.hasOwnProperty('raw'))
      throw Error('invalid template strings array');
    return [void 0 !== S ? S.createHTML(s) : s, e];
  };
class na {
  constructor({ strings: a, _$litType$: t }, l) {
    let e;
    this.parts = [];
    let o = 0,
      n = 0;
    const i = a.length - 1,
      s = this.parts,
      [r, v] = oa(a, t);
    if (
      ((this.el = na.createElement(r, l)),
      (ea.currentNode = this.el.content),
      2 === t)
    ) {
      const a = this.el.content,
        t = a.firstChild;
      t.remove(), a.append(...t.childNodes);
    }
    for (; null !== (e = ea.nextNode()) && s.length < i; ) {
      if (1 === e.nodeType) {
        if (e.hasAttributes()) {
          const a = [];
          for (const t of e.getAttributeNames())
            if (t.endsWith(B) || t.startsWith(O)) {
              const l = v[n++];
              if ((a.push(t), void 0 !== l)) {
                const a = e.getAttribute(l.toLowerCase() + B).split(O),
                  t = /([.?@])?(.*)/.exec(l);
                s.push({
                  type: 1,
                  index: o,
                  name: t[2],
                  strings: a,
                  ctor:
                    '.' === t[1]
                      ? da
                      : '?' === t[1]
                        ? ca
                        : '@' === t[1]
                          ? ua
                          : va
                });
              } else s.push({ type: 6, index: o });
            }
          for (const t of a) e.removeAttribute(t);
        }
        if (X.test(e.tagName)) {
          const a = e.textContent.split(O),
            t = a.length - 1;
          if (t > 0) {
            e.textContent = E ? E.emptyScript : '';
            for (let l = 0; l < t; l++)
              e.append(a[l], N()),
                ea.nextNode(),
                s.push({ type: 2, index: ++o });
            e.append(a[t], N());
          }
        }
      } else if (8 === e.nodeType)
        if (e.data === P) s.push({ type: 2, index: o });
        else {
          let a = -1;
          for (; -1 !== (a = e.data.indexOf(O, a + 1)); )
            s.push({ type: 7, index: o }), (a += O.length - 1);
        }
      o++;
    }
  }
  static createElement(a, t) {
    const l = z.createElement('template');
    return (l.innerHTML = a), l;
  }
}
function ia(a, t, l = a, e) {
  var o, n, i, s;
  if (t === aa) return t;
  let r =
    void 0 !== e
      ? null === (o = l._$Co) || void 0 === o
        ? void 0
        : o[e]
      : l._$Cl;
  const v = R(t) ? void 0 : t._$litDirective$;
  return (
    (null == r ? void 0 : r.constructor) !== v &&
      (null === (n = null == r ? void 0 : r._$AO) ||
        void 0 === n ||
        n.call(r, !1),
      void 0 === v ? (r = void 0) : ((r = new v(a)), r._$AT(a, l, e)),
      void 0 !== e
        ? ((null !== (i = (s = l)._$Co) && void 0 !== i ? i : (s._$Co = []))[
            e
          ] = r)
        : (l._$Cl = r)),
    void 0 !== r && (t = ia(a, r._$AS(a, t.values), r, e)),
    t
  );
}
class sa {
  constructor(a, t) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = a), (this._$AM = t);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(a) {
    var t;
    const {
        el: { content: l },
        parts: e
      } = this._$AD,
      o = (
        null !== (t = null == a ? void 0 : a.creationScope) && void 0 !== t
          ? t
          : z
      ).importNode(l, !0);
    ea.currentNode = o;
    let n = ea.nextNode(),
      i = 0,
      s = 0,
      r = e[0];
    for (; void 0 !== r; ) {
      if (i === r.index) {
        let t;
        2 === r.type
          ? (t = new ra(n, n.nextSibling, this, a))
          : 1 === r.type
            ? (t = new r.ctor(n, r.name, r.strings, this, a))
            : 6 === r.type && (t = new pa(n, this, a)),
          this._$AV.push(t),
          (r = e[++s]);
      }
      i !== (null == r ? void 0 : r.index) && ((n = ea.nextNode()), i++);
    }
    return (ea.currentNode = z), o;
  }
  v(a) {
    let t = 0;
    for (const l of this._$AV)
      void 0 !== l &&
        (void 0 !== l.strings
          ? (l._$AI(a, l, t), (t += l.strings.length - 2))
          : l._$AI(a[t])),
        t++;
  }
}
class ra {
  constructor(a, t, l, e) {
    var o;
    (this.type = 2),
      (this._$AH = ta),
      (this._$AN = void 0),
      (this._$AA = a),
      (this._$AB = t),
      (this._$AM = l),
      (this.options = e),
      (this._$Cp =
        null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o);
  }
  get _$AU() {
    var a, t;
    return null !==
      (t = null === (a = this._$AM) || void 0 === a ? void 0 : a._$AU) &&
      void 0 !== t
      ? t
      : this._$Cp;
  }
  get parentNode() {
    let a = this._$AA.parentNode;
    const t = this._$AM;
    return (
      void 0 !== t &&
        11 === (null == a ? void 0 : a.nodeType) &&
        (a = t.parentNode),
      a
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(a, t = this) {
    (a = ia(this, a, t)),
      R(a)
        ? a === ta || null == a || '' === a
          ? (this._$AH !== ta && this._$AR(), (this._$AH = ta))
          : a !== this._$AH && a !== aa && this._(a)
        : void 0 !== a._$litType$
          ? this.g(a)
          : void 0 !== a.nodeType
            ? this.$(a)
            : I(a)
              ? this.T(a)
              : this._(a);
  }
  k(a) {
    return this._$AA.parentNode.insertBefore(a, this._$AB);
  }
  $(a) {
    this._$AH !== a && (this._$AR(), (this._$AH = this.k(a)));
  }
  _(a) {
    this._$AH !== ta && R(this._$AH)
      ? (this._$AA.nextSibling.data = a)
      : this.$(z.createTextNode(a)),
      (this._$AH = a);
  }
  g(a) {
    var t;
    const { values: l, _$litType$: e } = a,
      o =
        'number' == typeof e
          ? this._$AC(a)
          : (void 0 === e.el && (e.el = na.createElement(e.h, this.options)),
            e);
    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === o)
      this._$AH.v(l);
    else {
      const a = new sa(o, this),
        t = a.u(this.options);
      a.v(l), this.$(t), (this._$AH = a);
    }
  }
  _$AC(a) {
    let t = la.get(a.strings);
    return void 0 === t && la.set(a.strings, (t = new na(a))), t;
  }
  T(a) {
    U(this._$AH) || ((this._$AH = []), this._$AR());
    const t = this._$AH;
    let l,
      e = 0;
    for (const o of a)
      e === t.length
        ? t.push((l = new ra(this.k(N()), this.k(N()), this, this.options)))
        : (l = t[e]),
        l._$AI(o),
        e++;
    e < t.length && (this._$AR(l && l._$AB.nextSibling, e), (t.length = e));
  }
  _$AR(a = this._$AA.nextSibling, t) {
    var l;
    for (
      null === (l = this._$AP) || void 0 === l || l.call(this, !1, !0, t);
      a && a !== this._$AB;

    ) {
      const t = a.nextSibling;
      a.remove(), (a = t);
    }
  }
  setConnected(a) {
    var t;
    void 0 === this._$AM &&
      ((this._$Cp = a),
      null === (t = this._$AP) || void 0 === t || t.call(this, a));
  }
}
class va {
  constructor(a, t, l, e, o) {
    (this.type = 1),
      (this._$AH = ta),
      (this._$AN = void 0),
      (this.element = a),
      (this.name = t),
      (this._$AM = e),
      (this.options = o),
      l.length > 2 || '' !== l[0] || '' !== l[1]
        ? ((this._$AH = Array(l.length - 1).fill(new String())),
          (this.strings = l))
        : (this._$AH = ta);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(a, t = this, l, e) {
    const o = this.strings;
    let n = !1;
    if (void 0 === o)
      (a = ia(this, a, t, 0)),
        (n = !R(a) || (a !== this._$AH && a !== aa)),
        n && (this._$AH = a);
    else {
      const e = a;
      let i, s;
      for (a = o[0], i = 0; i < o.length - 1; i++)
        (s = ia(this, e[l + i], t, i)),
          s === aa && (s = this._$AH[i]),
          n || (n = !R(s) || s !== this._$AH[i]),
          s === ta
            ? (a = ta)
            : a !== ta && (a += (null != s ? s : '') + o[i + 1]),
          (this._$AH[i] = s);
    }
    n && !e && this.j(a);
  }
  j(a) {
    a === ta
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != a ? a : '');
  }
}
class da extends va {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(a) {
    this.element[this.name] = a === ta ? void 0 : a;
  }
}
const ha = E ? E.emptyScript : '';
class ca extends va {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(a) {
    a && a !== ta
      ? this.element.setAttribute(this.name, ha)
      : this.element.removeAttribute(this.name);
  }
}
class ua extends va {
  constructor(a, t, l, e, o) {
    super(a, t, l, e, o), (this.type = 5);
  }
  _$AI(a, t = this) {
    var l;
    if ((a = null !== (l = ia(this, a, t, 0)) && void 0 !== l ? l : ta) === aa)
      return;
    const e = this._$AH,
      o =
        (a === ta && e !== ta) ||
        a.capture !== e.capture ||
        a.once !== e.once ||
        a.passive !== e.passive,
      n = a !== ta && (e === ta || o);
    o && this.element.removeEventListener(this.name, this, e),
      n && this.element.addEventListener(this.name, this, a),
      (this._$AH = a);
  }
  handleEvent(a) {
    var t, l;
    'function' == typeof this._$AH
      ? this._$AH.call(
          null !==
            (l =
              null === (t = this.options) || void 0 === t ? void 0 : t.host) &&
            void 0 !== l
            ? l
            : this.element,
          a
        )
      : this._$AH.handleEvent(a);
  }
}
class pa {
  constructor(a, t, l) {
    (this.element = a),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = t),
      (this.options = l);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(a) {
    ia(this, a);
  }
}
const ma = {
    O: B,
    P: O,
    A: P,
    C: 1,
    M: oa,
    L: sa,
    D: I,
    R: ia,
    I: ra,
    V: va,
    H: ca,
    N: ua,
    U: da,
    F: pa
  },
  ga = k.litHtmlPolyfillSupport;
null == ga || ga(na, ra),
  (null !== (C = k.litHtmlVersions) && void 0 !== C
    ? C
    : (k.litHtmlVersions = [])
  ).push('2.7.4');
const $a = (a, t, l) => {
  var e, o;
  const n =
    null !== (e = null == l ? void 0 : l.renderBefore) && void 0 !== e ? e : t;
  let i = n._$litPart$;
  if (void 0 === i) {
    const a =
      null !== (o = null == l ? void 0 : l.renderBefore) && void 0 !== o
        ? o
        : null;
    n._$litPart$ = i = new ra(
      t.insertBefore(N(), a),
      a,
      void 0,
      null != l ? l : {}
    );
  }
  return i._$AI(a), i;
};
var Za, Aa;
class wa extends _ {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var a, t;
    const l = super.createRenderRoot();
    return (
      (null !== (a = (t = this.renderOptions).renderBefore) && void 0 !== a) ||
        (t.renderBefore = l.firstChild),
      l
    );
  }
  update(a) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(a),
      (this._$Do = $a(t, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var a;
    super.connectedCallback(),
      null === (a = this._$Do) || void 0 === a || a.setConnected(!0);
  }
  disconnectedCallback() {
    var a;
    super.disconnectedCallback(),
      null === (a = this._$Do) || void 0 === a || a.setConnected(!1);
  }
  render() {
    return aa;
  }
}
(wa.finalized = !0),
  (wa._$litElement$ = !0),
  null === (Za = globalThis.litElementHydrateSupport) ||
    void 0 === Za ||
    Za.call(globalThis, { LitElement: wa });
const fa = globalThis.litElementPolyfillSupport;
null == fa || fa({ LitElement: wa }),
  (null !== (Aa = globalThis.litElementVersions) && void 0 !== Aa
    ? Aa
    : (globalThis.litElementVersions = [])
  ).push('3.3.1');
const ba = (a) => (t) =>
    'function' == typeof t
      ? ((a, t) => (customElements.define(a, t), t))(a, t)
      : ((a, t) => {
          const { kind: l, elements: e } = t;
          return {
            kind: l,
            elements: e,
            finisher(t) {
              customElements.define(a, t);
            }
          };
        })(a, t),
  Ma = (a, t) =>
    'method' === t.kind && t.descriptor && !('value' in t.descriptor)
      ? {
          ...t,
          finisher(l) {
            l.createProperty(t.key, a);
          }
        }
      : {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          originalKey: t.key,
          initializer() {
            'function' == typeof t.initializer &&
              (this[t.key] = t.initializer.call(this));
          },
          finisher(l) {
            l.createProperty(t.key, a);
          }
        };
function Ha(a) {
  return (t, l) =>
    void 0 !== l
      ? ((a, t, l) => {
          t.constructor.createProperty(l, a);
        })(a, t, l)
      : Ma(a, t);
}
function xa(a) {
  return Ha({ ...a, state: !0 });
}
const ya =
  ({ finisher: a, descriptor: t }) =>
  (l, e) => {
    var o;
    if (void 0 === e) {
      const e = null !== (o = l.originalKey) && void 0 !== o ? o : l.key,
        n =
          null != t
            ? {
                kind: 'method',
                placement: 'prototype',
                key: e,
                descriptor: t(l.key)
              }
            : { ...l, key: e };
      return (
        null != a &&
          (n.finisher = function (t) {
            a(t, e);
          }),
        n
      );
    }
    {
      const o = l.constructor;
      void 0 !== t && Object.defineProperty(l, e, t(e)), null == a || a(o, e);
    }
  };
function La(a, t) {
  return ya({
    descriptor: (l) => {
      const e = {
        get() {
          var t, l;
          return null !==
            (l =
              null === (t = this.renderRoot) || void 0 === t
                ? void 0
                : t.querySelector(a)) && void 0 !== l
            ? l
            : null;
        },
        enumerable: !0,
        configurable: !0
      };
      if (t) {
        const t = 'symbol' == typeof l ? Symbol() : '__' + l;
        e.get = function () {
          var l, e;
          return (
            void 0 === this[t] &&
              (this[t] =
                null !==
                  (e =
                    null === (l = this.renderRoot) || void 0 === l
                      ? void 0
                      : l.querySelector(a)) && void 0 !== e
                  ? e
                  : null),
            this[t]
          );
        };
      }
      return e;
    }
  });
}
function Va(a) {
  return ya({
    descriptor: (t) => ({
      get() {
        var t, l;
        return null !==
          (l =
            null === (t = this.renderRoot) || void 0 === t
              ? void 0
              : t.querySelectorAll(a)) && void 0 !== l
          ? l
          : [];
      },
      enumerable: !0,
      configurable: !0
    })
  });
}
function _a(a) {
  return ya({
    descriptor: (t) => ({
      async get() {
        var t;
        return (
          await this.updateComplete,
          null === (t = this.renderRoot) || void 0 === t
            ? void 0
            : t.querySelector(a)
        );
      },
      enumerable: !0,
      configurable: !0
    })
  });
}
var Ca;
const ka =
  null !=
  (null === (Ca = window.HTMLSlotElement) || void 0 === Ca
    ? void 0
    : Ca.prototype.assignedElements)
    ? (a, t) => a.assignedElements(t)
    : (a, t) =>
        a.assignedNodes(t).filter((a) => a.nodeType === Node.ELEMENT_NODE);
function Ea(a) {
  const { slot: t, selector: l } = null != a ? a : {};
  return ya({
    descriptor: (e) => ({
      get() {
        var e;
        const o = 'slot' + (t ? `[name=${t}]` : ':not([name])'),
          n =
            null === (e = this.renderRoot) || void 0 === e
              ? void 0
              : e.querySelector(o),
          i = null != n ? ka(n, a) : [];
        return l ? i.filter((a) => a.matches(l)) : i;
      },
      enumerable: !0,
      configurable: !0
    })
  });
}
function Sa(a, t, l) {
  let e,
    o = a;
  return (
    'object' == typeof a ? ((o = a.slot), (e = a)) : (e = { flatten: t }),
    l
      ? Ea({ slot: o, flatten: t, selector: l })
      : ya({
          descriptor: (a) => ({
            get() {
              var a, t;
              const l = 'slot' + (o ? `[name=${o}]` : ':not([name])'),
                n =
                  null === (a = this.renderRoot) || void 0 === a
                    ? void 0
                    : a.querySelector(l);
              return null !== (t = null == n ? void 0 : n.assignedNodes(e)) &&
                void 0 !== t
                ? t
                : [];
            },
            enumerable: !0,
            configurable: !0
          })
        })
  );
}
function Ba(a) {
  var t;
  return ((t = class extends a {}).VERSION = '15.4.1'), t;
}
const Oa = (a) => (null != a ? a : ta),
  Pa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
  },
  Ta =
    (a) =>
    (...t) => ({ _$litDirective$: a, values: t });
class za {
  constructor(a) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(a, t, l) {
    (this._$Ct = a), (this._$AM = t), (this._$Ci = l);
  }
  _$AS(a, t) {
    return this.update(a, t);
  }
  update(a, t) {
    return this.render(...t);
  }
}
class Na extends za {
  constructor(a) {
    if ((super(a), (this.et = ta), a.type !== Pa.CHILD))
      throw Error(
        this.constructor.directiveName + '() can only be used in child bindings'
      );
  }
  render(a) {
    if (a === ta || null == a) return (this.ft = void 0), (this.et = a);
    if (a === aa) return a;
    if ('string' != typeof a)
      throw Error(
        this.constructor.directiveName + '() called with a non-string value'
      );
    if (a === this.et) return this.ft;
    this.et = a;
    const t = [a];
    return (
      (t.raw = t),
      (this.ft = {
        _$litType$: this.constructor.resultType,
        strings: t,
        values: []
      })
    );
  }
}
(Na.directiveName = 'unsafeHTML'), (Na.resultType = 1);
const Ra = Ta(Na);
class Ua extends Na {}
(Ua.directiveName = 'unsafeSVG'), (Ua.resultType = 2);
const Ia = Ta(Ua);
var ja;
!(function (a) {
  (a.ExtraSmall = 'xs'),
    (a.Small = 'sm'),
    (a.Medium = 'md'),
    (a.Large = 'lg'),
    (a.ExtraLarge = 'xl'),
    (a.XXLarge = '2xl');
})(ja || (ja = {}));
const Da = {
  [ja.ExtraSmall]: 12,
  [ja.Small]: 16,
  [ja.Medium]: 20,
  [ja.Large]: 24,
  [ja.ExtraLarge]: 32,
  [ja.XXLarge]: 48
};
class qa extends Ba(wa) {}
const Ga = $`:host{display:inline-block;fill:currentColor;vertical-align:middle;line-height:1em}svg{fill:currentColor;width:auto}:host([size=sm])>svg{height:1em}:host([size=md])>svg{height:1.25em}:host([size=lg])>svg{height:1.5em}:host([size=xl])>svg{height:2em}`;
function Wa(a, t, l, o = Ga) {
  if (l) {
    class n extends qa {
      constructor() {
        super(...arguments), (this.size = ja.Small), (this.fill = !1);
      }
      static get styles() {
        return o;
      }
      render() {
        return this.fill ? l : t;
      }
    }
    e([Ha({ type: String, reflect: !0 })], n.prototype, 'size', void 0),
      e([Ha({ type: Boolean })], n.prototype, 'fill', void 0),
      window.customElements.define(a, n);
  } else {
    class l extends qa {
      constructor() {
        super(...arguments), (this.size = ja.Small);
      }
      static get styles() {
        return o;
      }
      render() {
        return t;
      }
    }
    e([Ha({ type: String, reflect: !0 })], l.prototype, 'size', void 0),
      window.customElements.define(a, l);
  }
}
Wa(
  'icon-admin',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.938 9.211a3.25 3.25 0 0 0-3.177-2.642c-.45 0-.895.102-1.3.3a10.812 10.812 0 0 0-4.838-1.379l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.13 1.13 0 0 0-1.333.862L9.343 5.5a10.77 10.77 0 0 0-4.791 1.357 3.214 3.214 0 0 0-1.315-.289A3.248 3.248 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.567l.006-.138.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.062-.81-.015-1.208Zm-1.221 1c-.075.42-.282.805-.59 1.1l-.392.407-.024.625c-.061 3-3.45 5.354-7.716 5.354-4.267 0-7.66-2.353-7.717-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.571-1.087a2.138 2.138 0 0 1 .012-.765 2 2 0 0 1 1.942-1.623c.353.003.698.102 1 .286l.337.216.334-.22a9.435 9.435 0 0 1 4.758-1.381h.719a9.427 9.427 0 0 1 4.726 1.4l.347.225.343-.232a1.7 1.7 0 0 1 .96-.3 2 2 0 0 1 1.949 1.629c.049.253.051.512.007.766v.004Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"/></svg>')}`
);
Wa(
  'icon-close',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m18.707 2.707-1.414-1.414L10 8.586 2.707 1.293 1.293 2.707 8.586 10l-7.293 7.293 1.414 1.414L10 11.414l7.293 7.293 1.414-1.414L11.414 10l7.293-7.293Z"/></svg>')}`
);
Wa(
  'icon-comments',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3.625 12.069v1.25A2.98 2.98 0 0 1 1 10.349V4a2.985 2.985 0 0 1 2.958-3h8.084a2.969 2.969 0 0 1 2.92 2.625h-1.255a1.72 1.72 0 0 0-1.665-1.375H3.958A1.734 1.734 0 0 0 2.25 4v6.345a1.746 1.746 0 0 0 1.375 1.724Zm10.4 4.89h2.021A2.962 2.962 0 0 0 19 14V7.959A2.962 2.962 0 0 0 16.042 5H7.958A2.962 2.962 0 0 0 5 7.959V14a2.962 2.962 0 0 0 2.958 2.959h2.494l-.028 1.478a.719.719 0 0 0 .41.661l.46.158 2.731-2.297ZM10.8 18.04h-.005.005Zm5.242-11.79a1.711 1.711 0 0 1 1.708 1.709V14a1.711 1.711 0 0 1-1.708 1.709h-2.478L11.7 17.283l.031-1.574H7.958A1.71 1.71 0 0 1 6.25 14V7.959A1.711 1.711 0 0 1 7.958 6.25h8.084Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3.625 7.959v5.36A2.98 2.98 0 0 1 1 10.349V4a2.985 2.985 0 0 1 2.958-3h8.084a2.969 2.969 0 0 1 2.92 2.625h-7a4.338 4.338 0 0 0-4.337 4.334ZM16.042 5H7.958A2.962 2.962 0 0 0 5 7.959V14a2.962 2.962 0 0 0 2.958 2.959h2.494l-.028 1.478a.719.719 0 0 0 .41.661l.46.158 2.727-2.3h2.021A2.963 2.963 0 0 0 19 14V7.959A2.962 2.962 0 0 0 16.042 5Z"/></svg>')}`
);
Wa(
  'icon-history',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m13.558 14.442-4.183-4.183V4h1.25v5.741l3.817 3.817-.884.884ZM20 10a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-1.25 0A8.75 8.75 0 1 1 10 1.25 8.76 8.76 0 0 1 18.75 10Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm3.47 14.53-4.22-4.219V4h1.5v5.689l3.78 3.781-1.06 1.06Z"/></svg>')}`
);
Wa(
  'icon-left',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m13.058 19.442-9-9a.624.624 0 0 1 0-.884l9-9 .884.884L5.384 10l8.558 8.558-.884.884Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m12.793 19.707-9-9a1 1 0 0 1 0-1.414l9-9 1.414 1.414L5.914 10l8.293 8.293-1.414 1.414Z"/></svg>')}`
);
Wa(
  'icon-mod',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 20c-.101 0-.202-.014-.3-.04C8.249 19.554 1 17.277 1 12V3.187A1.122 1.122 0 0 1 1.846 2.1L9.73.108c.177-.044.363-.044.54 0L18.154 2.1A1.122 1.122 0 0 1 19 3.187V12c0 5.277-7.249 7.554-8.7 7.957A1.162 1.162 0 0 1 10 20ZM2.25 3.283V12c0 4.465 6.989 6.531 7.786 6.751.725-.22 7.714-2.286 7.714-6.751V3.283L10 1.33 2.25 3.283Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.154 2.1 10.27.108a1.121 1.121 0 0 0-.54 0L1.846 2.1A1.122 1.122 0 0 0 1 3.187V12c0 5.277 7.249 7.554 8.7 7.957.098.027.199.042.3.043.101 0 .202-.014.3-.04 1.453-.4 8.7-2.68 8.7-7.957V3.187a1.122 1.122 0 0 0-.846-1.087Z"/></svg>')}`
);
Wa(
  'icon-nsfw',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m4.47 7.123 2.653-1.26h.47V14.5H6.15V7.668l-1.68.8V7.123Zm9.9 3.69a2.288 2.288 0 0 1-.02 2.54 2.7 2.7 0 0 1-1.085.91 3.699 3.699 0 0 1-3.068 0A2.774 2.774 0 0 1 9.1 13.35a2.253 2.253 0 0 1-.019-2.532c.257-.383.61-.69 1.025-.893A2.372 2.372 0 0 1 9.4 9.11a2.21 2.21 0 0 1-.257-1.048 2.1 2.1 0 0 1 .342-1.175c.233-.353.557-.637.938-.82.409-.202.86-.305 1.315-.3.451-.005.897.098 1.3.3.377.185.697.468.926.82.227.352.345.762.34 1.18a2.2 2.2 0 0 1-.255 1.05 2.3 2.3 0 0 1-.706.8c.415.202.77.512 1.026.896ZM12.54 13.2c.235-.11.437-.28.583-.495.142-.207.216-.454.214-.705a1.267 1.267 0 0 0-.205-.7 1.468 1.468 0 0 0-.57-.51 1.776 1.776 0 0 0-.83-.19c-.29-.004-.577.061-.836.19a1.5 1.5 0 0 0-.583.513 1.262 1.262 0 0 0 .003 1.4c.147.216.348.388.583.5.256.124.537.186.821.182a1.86 1.86 0 0 0 .82-.185Zm-1.474-6.083a1.194 1.194 0 0 0-.468.422 1.11 1.11 0 0 0-.173.615c-.002.224.058.444.173.636.113.192.275.35.468.46.201.114.429.173.66.17.23.002.456-.055.656-.167a1.233 1.233 0 0 0 .638-1.099 1.132 1.132 0 0 0-.635-1.037 1.507 1.507 0 0 0-1.319 0ZM10 19.988a4.616 4.616 0 0 1-3.27-1.352l-5.366-5.365a4.627 4.627 0 0 1 0-6.542L6.73 1.364a4.634 4.634 0 0 1 6.542 0l5.366 5.365a4.634 4.634 0 0 1 0 6.542l-5.366 5.365a4.615 4.615 0 0 1-3.27 1.352Zm0-18.726a3.362 3.362 0 0 0-2.386.987L2.25 7.614a3.374 3.374 0 0 0 0 4.772l5.366 5.365a3.38 3.38 0 0 0 4.773 0l5.365-5.365a3.375 3.375 0 0 0 0-4.772L12.387 2.25A3.364 3.364 0 0 0 10 1.262Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13 10.967a1.593 1.593 0 0 0-1.363 0 1.2 1.2 0 0 0-.475.414 1.02 1.02 0 0 0-.173.576.967.967 0 0 0 .18.574c.122.172.29.307.482.393.21.095.438.143.668.14a1.51 1.51 0 0 0 .671-.146 1.2 1.2 0 0 0 .475-.4.985.985 0 0 0 .173-.569 1.024 1.024 0 0 0-.17-.57 1.2 1.2 0 0 0-.469-.412Z"/><path d="M11.747 9.227c.177.095.374.143.574.14.2.003.396-.045.572-.14a1.057 1.057 0 0 0 .402-1.462.984.984 0 0 0-.406-.37 1.317 1.317 0 0 0-1.137 0 1 1 0 0 0-.557.902 1.047 1.047 0 0 0 .551.932l.001-.002Z"/><path d="M18.636 6.73 13.27 1.363a4.634 4.634 0 0 0-6.542 0L1.364 6.73a4.627 4.627 0 0 0 0 6.542l5.365 5.365a4.633 4.633 0 0 0 6.542 0l5.366-5.365a4.634 4.634 0 0 0 0-6.542ZM8.204 14.5H6.288V8.277L4.648 9V7.23l2.988-1.367h.568V14.5Zm6.862-1.148c-.29.4-.683.714-1.136.912a4.11 4.11 0 0 1-3.24-.006 2.8 2.8 0 0 1-1.134-.918 2.172 2.172 0 0 1-.41-1.283c0-.42.12-.83.345-1.184a2.6 2.6 0 0 1 .944-.879 2.488 2.488 0 0 1-.636-.832c-.152-.32-.23-.67-.229-1.025a2.117 2.117 0 0 1 .378-1.248c.256-.362.604-.65 1.008-.832.43-.198.9-.298 1.374-.293.474-.004.942.099 1.371.3.403.182.749.47 1 .834.249.368.378.804.37 1.248a2.371 2.371 0 0 1-.868 1.851c.383.21.708.51.944.877a2.24 2.24 0 0 1-.074 2.481l-.007-.003Z"/></svg>')}`
);
Wa(
  'icon-pin',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.6 6.876 13.125.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.084 2.084 0 0 0-.378 2.435L6.68 7.292a2.086 2.086 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.8 2.8-5.82 5.82.884.884 5.82-5.82 2.8 2.8a1.132 1.132 0 0 0 1.607 0l.665-.665a2.084 2.084 0 0 0 .374-2.432L16.5 9.528a2.129 2.129 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .002-1.611Zm-1.55 1.393a.849.849 0 0 1-1.174 0l-.442-.442-5.426 5.426.443.442a.832.832 0 0 1 0 1.174l-.588.587-6.319-6.319.587-.587a.833.833 0 0 1 1.175 0l.442.442 5.426-5.426-.442-.441a.832.832 0 0 1 0-1.175l.565-.609 6.34 6.341-.587.587Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"/></svg>')}`
);
Wa(
  'icon-profile',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM4.866 17.07a3.99 3.99 0 0 1 3.991-2.77h2.286a3.99 3.99 0 0 1 3.991 2.766 8.685 8.685 0 0 1-10.268 0v.004Zm11.3-.87a5.354 5.354 0 0 0-5.024-3.146H8.857A5.354 5.354 0 0 0 3.833 16.2a8.75 8.75 0 1 1 12.334 0h-.001ZM10.059 5a3.229 3.229 0 1 0 0 6.458 3.229 3.229 0 0 0 0-6.458Zm0 5.208a1.98 1.98 0 1 1 0-3.959 1.98 1.98 0 0 1 0 3.959Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm.059 5a3.229 3.229 0 1 1 0 6.458 3.229 3.229 0 0 1 0-6.458ZM3.85 16.216a5.32 5.32 0 0 1 5.007-3.162h2.286a5.324 5.324 0 0 1 5.008 3.161 8.73 8.73 0 0 1-12.3 0l-.001.001Z"/></svg>')}`
);
Wa(
  'icon-report',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.25 19.775H1V2.193l.353-.171a10.293 10.293 0 0 1 8.919 0 9.054 9.054 0 0 0 7.7.061l.309-.144.385.188a.715.715 0 0 1 .334.606V14.79l-.353.17a10.286 10.286 0 0 1-8.919 0 9.033 9.033 0 0 0-7.478-.16v4.975Zm3.562-6.956a10.23 10.23 0 0 1 4.46 1.016A9.04 9.04 0 0 0 17.75 14V3.531a10.17 10.17 0 0 1-8.022-.384 9.037 9.037 0 0 0-7.478-.162v10.468c1.14-.42 2.347-.635 3.562-.634Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m18.668 2.127-.385-.188-.309.144a9.054 9.054 0 0 1-7.7-.061 10.293 10.293 0 0 0-8.919 0L1 2.193v17.582h2v-5.252a9.03 9.03 0 0 1 6.728.437 10.286 10.286 0 0 0 8.919 0l.353-.17V2.733a.715.715 0 0 0-.332-.606Z"/></svg>')}`
);
Wa(
  'icon-right',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m6.942 19.442-.884-.884L14.616 10 6.058 1.442l.884-.884 9 9a.624.624 0 0 1 0 .884l-9 9Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m7.207 19.707-1.414-1.414L14.086 10 5.793 1.707 7.207.293l9 9a1 1 0 0 1 0 1.414l-9 9Z"/></svg>')}`
);
Wa(
  'icon-rising',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3.554 17.826a1.124 1.124 0 0 1-.8-.33L.435 15.175a1.131 1.131 0 0 1 0-1.6l6.008-6.008a1.643 1.643 0 0 1 2.315 0l1.878 1.879 2.8-2.8-1.412-1.406A.726.726 0 0 1 12.54 4h6.736a.727.727 0 0 1 .726.727v6.735a.727.727 0 0 1-1.239.516l-1.41-1.411-5.56 5.56a1.64 1.64 0 0 1-2.313 0L7.6 14.248 4.354 17.5c-.213.21-.5.328-.8.326ZM1.4 14.376l2.151 2.151 4.05-4.047 2.76 2.763a.389.389 0 0 0 .547 0L17.352 8.8l1.4 1.4V5.25h-4.951l1.4 1.4-4.567 4.566-2.76-2.765a.391.391 0 0 0-.547 0L1.4 14.376Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.273 4h-6.736a.726.726 0 0 0-.514 1.24l1.41 1.408-2.8 2.8-1.876-1.881a1.643 1.643 0 0 0-2.315 0L.435 13.576a1.131 1.131 0 0 0 0 1.6l2.32 2.324a1.133 1.133 0 0 0 1.6 0l3.244-3.252 1.877 1.878a1.679 1.679 0 0 0 2.314 0l5.56-5.559 1.41 1.411a.725.725 0 0 0 1.24-.516V4.727A.727.727 0 0 0 19.273 4Z"/></svg>')}`
);
const Fa = 'important',
  Ka = Ta(
    class extends za {
      constructor(a) {
        var t;
        if (
          (super(a),
          a.type !== Pa.ATTRIBUTE ||
            'style' !== a.name ||
            (null === (t = a.strings) || void 0 === t ? void 0 : t.length) > 2)
        )
          throw Error(
            'The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.'
          );
      }
      render(a) {
        return Object.keys(a).reduce((t, l) => {
          const e = a[l];
          return null == e
            ? t
            : t +
                `${(l = l.includes('-') ? l : l.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase())}:${e};`;
        }, '');
      }
      update(a, [t]) {
        const { style: l } = a.element;
        if (void 0 === this.ut) {
          this.ut = new Set();
          for (const a in t) this.ut.add(a);
          return this.render(t);
        }
        this.ut.forEach((a) => {
          null == t[a] &&
            (this.ut.delete(a),
            a.includes('-') ? l.removeProperty(a) : (l[a] = ''));
        });
        for (const a in t) {
          const e = t[a];
          if (null != e) {
            this.ut.add(a);
            const t = 'string' == typeof e && e.endsWith(' !important');
            a.includes('-') || t
              ? l.setProperty(a, t ? e.slice(0, -11) : e, t ? Fa : '')
              : (l[a] = e);
          }
        }
        return aa;
      }
    }
  ),
  { I: Xa } = ma,
  Ja = (a) => null === a || ('object' != typeof a && 'function' != typeof a),
  Ya = (a, t) =>
    void 0 === t
      ? void 0 !== (null == a ? void 0 : a._$litType$)
      : (null == a ? void 0 : a._$litType$) === t,
  Qa = (a) => void 0 === a.strings,
  at = () => document.createComment(''),
  tt = (a, t, l) => {
    var e;
    const o = a._$AA.parentNode,
      n = void 0 === t ? a._$AB : t._$AA;
    if (void 0 === l) {
      const t = o.insertBefore(at(), n),
        e = o.insertBefore(at(), n);
      l = new Xa(t, e, a, a.options);
    } else {
      const t = l._$AB.nextSibling,
        i = l._$AM,
        s = i !== a;
      if (s) {
        let t;
        null === (e = l._$AQ) || void 0 === e || e.call(l, a),
          (l._$AM = a),
          void 0 !== l._$AP && (t = a._$AU) !== i._$AU && l._$AP(t);
      }
      if (t !== n || s) {
        let a = l._$AA;
        for (; a !== t; ) {
          const t = a.nextSibling;
          o.insertBefore(a, n), (a = t);
        }
      }
    }
    return l;
  },
  lt = (a, t, l = a) => (a._$AI(t, l), a),
  et = {},
  ot = (a, t = et) => (a._$AH = t),
  nt = (a) => a._$AH,
  it = (a) => {
    var t;
    null === (t = a._$AP) || void 0 === t || t.call(a, !1, !0);
    let l = a._$AA;
    const e = a._$AB.nextSibling;
    for (; l !== e; ) {
      const a = l.nextSibling;
      l.remove(), (l = a);
    }
  },
  st = (a) => {
    a._$AR();
  },
  rt = (a, t, l) => {
    const e = new Map();
    for (let o = t; o <= l; o++) e.set(a[o], o);
    return e;
  },
  vt = Ta(
    class extends za {
      constructor(a) {
        if ((super(a), a.type !== Pa.CHILD))
          throw Error('repeat() can only be used in text expressions');
      }
      dt(a, t, l) {
        let e;
        void 0 === l ? (l = t) : void 0 !== t && (e = t);
        const o = [],
          n = [];
        let i = 0;
        for (const t of a) (o[i] = e ? e(t, i) : i), (n[i] = l(t, i)), i++;
        return { values: n, keys: o };
      }
      render(a, t, l) {
        return this.dt(a, t, l).values;
      }
      update(a, [t, l, e]) {
        var o;
        const n = nt(a),
          { values: i, keys: s } = this.dt(t, l, e);
        if (!Array.isArray(n)) return (this.ht = s), i;
        const r = null !== (o = this.ht) && void 0 !== o ? o : (this.ht = []),
          v = [];
        let d,
          h,
          c = 0,
          u = n.length - 1,
          p = 0,
          m = i.length - 1;
        for (; c <= u && p <= m; )
          if (null === n[c]) c++;
          else if (null === n[u]) u--;
          else if (r[c] === s[p]) (v[p] = lt(n[c], i[p])), c++, p++;
          else if (r[u] === s[m]) (v[m] = lt(n[u], i[m])), u--, m--;
          else if (r[c] === s[m])
            (v[m] = lt(n[c], i[m])), tt(a, v[m + 1], n[c]), c++, m--;
          else if (r[u] === s[p])
            (v[p] = lt(n[u], i[p])), tt(a, n[c], n[u]), u--, p++;
          else if (
            (void 0 === d && ((d = rt(s, p, m)), (h = rt(r, c, u))),
            d.has(r[c]))
          )
            if (d.has(r[u])) {
              const t = h.get(s[p]),
                l = void 0 !== t ? n[t] : null;
              if (null === l) {
                const t = tt(a, n[c]);
                lt(t, i[p]), (v[p] = t);
              } else (v[p] = lt(l, i[p])), tt(a, n[c], l), (n[t] = null);
              p++;
            } else it(n[u]), u--;
          else it(n[c]), c++;
        for (; p <= m; ) {
          const t = tt(a, v[m + 1]);
          lt(t, i[p]), (v[p++] = t);
        }
        for (; c <= u; ) {
          const a = n[c++];
          null !== a && it(a);
        }
        return (this.ht = s), ot(a, v), aa;
      }
    }
  );
const dt = Ta(
  class extends za {
    constructor(a) {
      if ((super(a), (this._previousAttrs = new Set()), a.type !== Pa.ELEMENT))
        throw new Error('attrs directive must be used on element');
    }
    render(a) {
      return aa;
    }
    update(a, [t]) {
      const l = a.element;
      this._previousAttrs.forEach((a) => {
        (a in t && t[a]) || l.removeAttribute(a);
      }),
        this._previousAttrs.clear();
      for (const a in t) {
        const e = t[a];
        if (!e) continue;
        const o = 'boolean' == typeof e ? '' : e.toString();
        l.setAttribute(a, o), this._previousAttrs.add(a);
      }
      return aa;
    }
  }
);
let ht = Object.assign({}, { templateRenderingStrategy: null });
const ct = () => Object.assign({}, ht),
  ut = () => {
    const { templateRenderingStrategy: a = null } = ct();
    if (null == a)
      throw new Error(
        "Faceplate-ui templateRenderingStrategy is undefined.\n\n      Please import a templateRenderingStrategy so that faceplate-ui can render\n      template components properly for your environment. For example:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/clientStrategy.js'\n\n      or, for a server environment:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/serverStrategy.js'\n      "
      );
    return a;
  };
var pt =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<a ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?rpl-selected="${Boolean(null == l ? void 0 : l.rplSelected)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" title="${t(null == l ? void 0 : l.title)}" type="${t(null == l ? void 0 : l.type)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}">${e}</a>`,
  mt =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<button ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?rpl-selected="${Boolean(null == l ? void 0 : l.rplSelected)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-haspopup="${t(null == l ? void 0 : l['aria-haspopup'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" title="${t(null == l ? void 0 : l.title)}" type="${t(null == l ? void 0 : l.type)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}" ?upvote="${null == l ? void 0 : l.upvote}" ?downvote="${null == l ? void 0 : l.downvote}"> ${e} </button>`,
  gt =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<div ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" title="${t(null == l ? void 0 : l.title)}" type="${t(null == l ? void 0 : l.type)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}"> ${e} </div>`,
  $t =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<faceplate-expandable-section-helper ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" type="${t(null == l ? void 0 : l.type)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}"> ${e} </faceplate-expandable-section-helper>`,
  Zt =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<li ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?rpl-selected="${Boolean(null == l ? void 0 : l.rplSelected)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" type="${t(null == l ? void 0 : l.type)}" title="${t(null == l ? void 0 : l.title)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}"> ${e} </li>`,
  At =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<span ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" title="${t(null == l ? void 0 : l.title)}" type="${t(null == l ? void 0 : l.type)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}"> ${e} </span>`,
  wt =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<svg ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" title="${t(null == l ? void 0 : l.title)}" type="${t(null == l ? void 0 : l.type)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}"> ${e} </svg>`,
  ft =
    ({ html: a, ifDefined: t }) =>
    (l, e = a``) =>
      a`<ul ?list-item-group="${null == l ? void 0 : l.booleanListItemGroup}" ?list-item-header="${null == l ? void 0 : l.booleanListItemHeader}" ?open="${null == l ? void 0 : l.booleanOpen}" ?rpl="${Boolean(null == l ? void 0 : l.rpl)}" ?disabled="${null == l ? void 0 : l.disabled}" ?hidden="${null == l ? void 0 : l.hidden}" @click="${null == l ? void 0 : l.onclick}" @contextmenu="${null == l ? void 0 : l.oncontextmenu}" @keydown="${null == l ? void 0 : l.onkeydown}" @mousedown="${null == l ? void 0 : l.onmousedown}" @pointerdown="${null == l ? void 0 : l.onpointerdown}" @touchstart="${null == l ? void 0 : l.ontouchstart}" alt="${t(null == l ? void 0 : l.alt)}" aria-controls="${t(null == l ? void 0 : l['aria-controls'])}" aria-disabled="${t(null == l ? void 0 : l['aria-disabled'])}" aria-expanded="${t(null == l ? void 0 : l['aria-expanded'])}" aria-hidden="${t(null == l ? void 0 : l['aria-hidden'])}" aria-label="${t(null == l ? void 0 : l['aria-label'])}" aria-labelledby="${t(null == l ? void 0 : l['aria-labelledby'])}" aria-pressed="${t(null == l ? void 0 : l['aria-pressed'])}" aria-selected="${t(null == l ? void 0 : l['aria-selected'])}" class="${t(null == l ? void 0 : l.className)}" data-announcement-dismiss="${t(null == l ? void 0 : l['data-announcement-dismiss'])}" data-description="${t(null == l ? void 0 : l['data-description'])}" data-faceplate-tracking-context="${t(null == l ? void 0 : l['data-faceplate-tracking-context'])}" data-label="${t(null == l ? void 0 : l['data-label'])}" data-mod-action="${t(null == l ? void 0 : l['data-mod-action'])}" data-nextAction="${t(null == l ? void 0 : l['data-nextAction'])}" data-post-click-location="${t(null == l ? void 0 : l['data-post-click-location'])}" data-ref="${t(null == l ? void 0 : l['data-ref'])}" data-see-less-label="${t(null == l ? void 0 : l['data-see-less-label'])}" data-see-more-label="${t(null == l ? void 0 : l['data-see-more-label'])}" data-select-label="${t(null == l ? void 0 : l['data-select-label'])}" data-select-value="${t(null == l ? void 0 : l['data-select-value'])}" data-test-id="${t(null == l ? void 0 : l['data-test-id'])}" data-testid="${t(null == l ? void 0 : l['data-testid'])}" fill="${t(null == l ? void 0 : l.fill)}" height="${t(null == l ? void 0 : l.height)}" href="${t(null == l ? void 0 : l.href)}" icon-name="${t(null == l ? void 0 : l['icon-name'])}" id="${t(null == l ? void 0 : l.id)}" name="${t(null == l ? void 0 : l.name)}" perfmark="${t(null == l ? void 0 : l.perfmark)}" rel="${t(null == l ? void 0 : l.rel)}" role="${t(null == l ? void 0 : l.role)}" slot="${t(null == l ? void 0 : l.slot)}" src="${t(null == l ? void 0 : l.src)}" srcset="${t(null == l ? void 0 : l.srcset)}" style="${t(null == l ? void 0 : l.style)}" tabindex="${t(null == l ? void 0 : l.tabindex)}" target="${t(null == l ? void 0 : l.target)}" type="${t(null == l ? void 0 : l.type)}" title="${t(null == l ? void 0 : l.title)}" value="${t(null == l ? void 0 : l.value)}" viewBox="${t(null == l ? void 0 : l.viewBox)}" width="${t(null == l ? void 0 : l.width)}" xmlns="${t(null == l ? void 0 : l.xmlns)}"> ${e} </ul>`;
const bt = (({ html: a, ifDefined: t }) => {
  const l = {
    a: pt({ html: a, ifDefined: t }),
    button: mt({ html: a, ifDefined: t }),
    div: gt({ html: a, ifDefined: t }),
    'faceplate-expandable-section-helper': $t({ html: a, ifDefined: t }),
    li: Zt({ html: a, ifDefined: t }),
    span: At({ html: a, ifDefined: t }),
    svg: wt({ html: a, ifDefined: t }),
    ul: ft({ html: a, ifDefined: t })
  };
  return (a, t, e) => l[a](t, e);
})({ html: Y, ifDefined: Oa });
function Mt(a, t, l = !1) {
  return (
    !('className' === a && !l) &&
    (null == t ||
      'string' == typeof t ||
      'number' == typeof t ||
      'boolean' == typeof t)
  );
}
!(function (a) {
  var t;
  const l =
    null === (t = ct().templateRenderingStrategy) || void 0 === t
      ? void 0
      : t.getType();
  if (null != l && l !== a)
    throw new Error(
      `\nFaceplate UI templateRenderingStrategy is being set to ${a}, but it has already been set to ${l}.\ntemplateRenderingStrategy cannot be changed once it has been set because it is not possible to switch from the client to the server.\n  \nThis usually happens when mixing imports from faceplate-ui/templates/client and faceplate-ui/templates/server, since these imports\nautomatically set templateRenderingStrategy, but can also happen if multiple calls to setConfig try to set conflicting strategies.\n  `
    );
})('client');
const Ht = Y,
  xt = Oa,
  yt = vt,
  Lt = Ka,
  Vt = (a) => {
    const t = {};
    for (const l in a) {
      const e = a[l];
      Object.prototype.hasOwnProperty.call(a, l) && Mt(l, e) && (t[l] = e);
    }
    return t;
  };
((a) => {
  ht = Object.assign(Object.assign({}, ht), a);
})({
  templateRenderingStrategy: {
    _toHtml_TEST_ONLY: (a) => {
      const t = document.createElement('div');
      return $a(a, t), t.children[0];
    },
    attrs: (a) => (null == a ? ta : dt(Vt(a))),
    getType: () => 'client',
    html: Ht,
    ifDefined: xt,
    repeat: yt,
    styleMap: Lt,
    svg: Q,
    createElement: bt
  }
});
Wa(
  'icon-menu',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 10.625H1v-1.25h18v1.25Zm0-7.875H1V4h18V2.75ZM19 16H1v1.25h18V16Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 11H1V9h18v2Zm0-9H1v2h18V2Zm0 14H1v2h18v-2Z"/></svg>')}`
);
Wa(
  'icon-privacy',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13.083 0a6.862 6.862 0 0 0-6.854 6.854c0 .825.149 1.643.442 2.414L0 15.939v4h5V17h3v-3h5.083a7.1 7.1 0 0 0 6.854-7.146A6.862 6.862 0 0 0 13.083 0Zm0 12.75H6.75v3h-3v2.938h-2.5v-2.231l6.906-6.906-.178-.395a5.554 5.554 0 0 1-.5-2.3 5.604 5.604 0 0 1 11.208 0 5.833 5.833 0 0 1-5.603 5.894Zm2.7-6.934a1.664 1.664 0 1 1-3.332 0 1.664 1.664 0 0 1 3.334 0h-.002Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13.083 0a6.862 6.862 0 0 0-6.854 6.854c0 .825.149 1.643.442 2.414L0 15.939v4h5V17h3v-3h5.083a7.1 7.1 0 0 0 6.854-7.146A6.862 6.862 0 0 0 13.083 0Zm1.039 7.654a1.838 1.838 0 1 1 0-3.676 1.838 1.838 0 0 1 0 3.676Z"/></svg>')}`
);
Wa(
  'icon-ban',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m19.59 9.705-1.062-1.061a2.606 2.606 0 0 0-1.856-.769h-.913l-3.634-3.634v-.912a2.597 2.597 0 0 0-.769-1.856L10.3.411a1.128 1.128 0 0 0-1.6.001L3.411 5.705a1.125 1.125 0 0 0 0 1.59l1.061 1.061a2.607 2.607 0 0 0 1.856.769h.913l.375.375-6.557 6.558a2.04 2.04 0 0 0 2.883 2.884l6.558-6.558.375.375v.913a2.608 2.608 0 0 0 .77 1.856l1.06 1.06a1.127 1.127 0 0 0 1.591 0l5.292-5.288a1.124 1.124 0 0 0 0-1.591l.001-.004ZM3.06 18.058a.79.79 0 1 1-1.118-1.116L8.5 10.384 9.616 11.5 3.06 18.058Zm10.44-2.442-.972-.972a1.38 1.38 0 0 1-.4-.972v-1.431L7.76 7.875H6.33a1.367 1.367 0 0 1-.973-.4L4.384 6.5 9.5 1.384l.972.972c.257.259.4.609.4.973v1.43l4.366 4.366h1.431c.364 0 .713.144.972.4l.972.972-5.113 5.119Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.918 10.5a1.114 1.114 0 0 1-.33.8L14.3 16.588a1.127 1.127 0 0 1-1.592 0l-1.06-1.06a2.608 2.608 0 0 1-.769-1.856v-.913L7.241 9.125h-.913a2.607 2.607 0 0 1-1.856-.769L3.412 7.3a1.125 1.125 0 0 1 0-1.59L8.7.412a1.128 1.128 0 0 1 1.591 0l1.061 1.062a2.601 2.601 0 0 1 .77 1.856v.912l3.633 3.634h.913a2.607 2.607 0 0 1 1.856.769l1.061 1.061a1.12 1.12 0 0 1 .333.794ZM8.834 12.834l-1.392-1.392-.884-.884-5.5 5.5a2.04 2.04 0 0 0 2.883 2.884l5.5-5.5-.607-.608Z"/></svg>')}`
);
Wa(
  'icon-quarantined',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11.375 10a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm-3.188 1.89-1.539 2.666.541.312a5.6 5.6 0 0 0 5.622 0l.541-.312-1.539-2.666a2.6 2.6 0 0 1-3.626 0Zm1.086-4.4L7.73 4.818l-.542.314A5.646 5.646 0 0 0 4.375 10v.625h3.083A2.577 2.577 0 0 1 9.273 7.49ZM12.625 10c-.002.211-.03.42-.083.625h3.083V10a5.646 5.646 0 0 0-2.813-4.868l-.542-.314-1.543 2.672A2.622 2.622 0 0 1 12.625 10ZM10 19.99a4.6 4.6 0 0 1-3.27-1.354l-5.366-5.365a4.627 4.627 0 0 1 0-6.542L6.73 1.364a4.627 4.627 0 0 1 6.542 0l5.365 5.364a4.627 4.627 0 0 1 0 6.542l-5.364 5.365A4.601 4.601 0 0 1 10 19.99Zm0-18.73a3.353 3.353 0 0 0-2.386.988L2.25 7.614a3.374 3.374 0 0 0 0 4.772l5.366 5.366a3.46 3.46 0 0 0 4.772 0l5.365-5.366a3.374 3.374 0 0 0 0-4.772L12.386 2.25A3.35 3.35 0 0 0 10 1.26Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.635 6.73 13.27 1.364a4.627 4.627 0 0 0-6.542 0L1.364 6.73a4.627 4.627 0 0 0 0 6.542l5.365 5.365a4.628 4.628 0 0 0 6.542 0l5.364-5.365a4.627 4.627 0 0 0 0-6.542ZM11.375 10a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm-7 0a5.646 5.646 0 0 1 2.812-4.868l.542-.314L9.272 7.49a2.577 2.577 0 0 0-1.815 3.135H4.374V10Zm8.435 4.868a5.6 5.6 0 0 1-5.622 0l-.54-.312 1.538-2.666a2.6 2.6 0 0 0 3.626 0l1.54 2.666-.542.312Zm2.814-4.243h-3.083a2.577 2.577 0 0 0-1.815-3.135l1.543-2.672.542.314A5.645 5.645 0 0 1 15.624 10v.625Z"/></svg>')}`
);
Wa(
  'icon-meme',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M20 7h-1.016V1.271A1.127 1.127 0 0 0 17.833.147c-.198.006-.391.064-.559.17l-3.9 2.458a11.016 11.016 0 0 0-6.7 0L2.771.317a1.107 1.107 0 0 0-1.55.381 1.128 1.128 0 0 0-.156.573v7.013a7.09 7.09 0 0 0-.489 2.591 7.545 7.545 0 0 0 2.804 5.779A10.231 10.231 0 0 0 10.025 19c2.423.03 4.778-.802 6.645-2.346A7.7 7.7 0 0 0 19.375 12H20V7ZM6.518 4.154l.286-.1a9.711 9.711 0 0 1 6.442 0l.286.1 4.2-2.648V7H13v1h-2V7H4v1H2.272l.043-6.493 4.203 2.647ZM15.861 15.7a8.99 8.99 0 0 1-5.836 2.048A8.987 8.987 0 0 1 4.19 15.7a6.32 6.32 0 0 1-2.364-4.827 5.82 5.82 0 0 1 .26-1.623H4V12h7V9.25h2V12h5.107a6.516 6.516 0 0 1-2.246 3.7Zm-4.522-1.125.322 1.208a6.46 6.46 0 0 1-1.66.217 6.127 6.127 0 0 1-4.27-1.678l.873-.893a5.1 5.1 0 0 0 4.735 1.148v-.002Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13 9.25h-2V12H4V9.25H.771a7.09 7.09 0 0 0-.2 1.625 7.545 7.545 0 0 0 2.81 5.779A10.231 10.231 0 0 0 10.024 19c2.423.03 4.778-.802 6.645-2.346A7.7 7.7 0 0 0 19.375 12H13V9.25Zm-3 7a6.26 6.26 0 0 1-4.357-1.713l1.048-1.073a4.977 4.977 0 0 0 4.616 1.117l.386 1.449a6.569 6.569 0 0 1-1.693.22ZM4 8H1.064V1.271a1.128 1.128 0 0 1 .582-.987 1.107 1.107 0 0 1 1.125.033l3.9 2.458c2.18-.696 4.521-.696 6.7 0l3.9-2.458a1.11 1.11 0 0 1 1.554.381c.102.174.156.372.155.573V7H13v1h-2V7H4v1Z"/></svg>')}`
);
Wa(
  'icon-spoiler',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.463 15.384A1.092 1.092 0 0 1 9.076 15a1.033 1.033 0 0 1-.143-.537c-.002-.186.047-.369.143-.529.093-.16.227-.293.387-.387.16-.097.345-.148.533-.147a1.05 1.05 0 0 1 .537.141 1.076 1.076 0 0 1 .537.921c0 .188-.051.373-.148.535-.096.159-.23.292-.39.386a1.042 1.042 0 0 1-.536.143 1.026 1.026 0 0 1-.533-.142Zm-.141-3.329L9.13 5.342h1.73l-.192 6.713H9.322Zm.667 7.935a4.6 4.6 0 0 1-3.27-1.354l-5.367-5.365a4.634 4.634 0 0 1 0-6.542l5.367-5.365a4.626 4.626 0 0 1 6.54 0l5.366 5.364a4.627 4.627 0 0 1 0 6.542l-5.364 5.365a4.6 4.6 0 0 1-3.272 1.355Zm0-18.73a3.353 3.353 0 0 0-2.386.988L2.237 7.614a3.375 3.375 0 0 0 0 4.772l5.366 5.366a3.46 3.46 0 0 0 4.771 0l5.365-5.366a3.374 3.374 0 0 0 0-4.772L12.374 2.25A3.349 3.349 0 0 0 9.99 1.26Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m18.628 6.73-5.364-5.365a4.626 4.626 0 0 0-6.542 0L1.355 6.73a4.634 4.634 0 0 0 0 6.542l5.367 5.365a4.627 4.627 0 0 0 6.542 0l5.364-5.365a4.627 4.627 0 0 0 0-6.542ZM11.162 5l-.28 6.747H9.117L8.837 5h2.325Zm-.038 9.536a1.29 1.29 0 0 1-.462.472 1.24 1.24 0 0 1-.655.178 1.286 1.286 0 1 1 1.117-.65Z"/></svg>')}`
);
Wa(
  'icon-community',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.875 7.614a2.055 2.055 0 0 0-.974.222 1.62 1.62 0 0 0-.879 1.46v4.2H6.409V6.2h1.552v.93H8c.275-.32.616-.575 1-.748.453-.207.947-.31 1.445-.3.243-.003.487.02.725.071.158.03.31.084.451.161l-.649 1.559a1.731 1.731 0 0 0-.523-.2 2.755 2.755 0 0 0-.574-.059ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0a8.722 8.722 0 0 0-2.841-6.435l-4.974 11.986H9.581l5.3-12.809A8.748 8.748 0 1 0 18.75 10Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"/></svg>')}`
);
Wa(
  'icon-popular',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm0 18.75a8.7 8.7 0 0 1-5.721-2.145l8.471-8.471v4.148H14V6.638A.647.647 0 0 0 13.362 6H7.718v1.25h4.148L3.4 15.721A8.739 8.739 0 1 1 10 18.75Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm4 13.791L10.812 10.6l-6.245 6.247a8.92 8.92 0 0 1-1.414-1.414L9.4 9.188 6.209 6h7.778l.013.638v7.153Z"/></svg>')}`
);
const _t = (a, t, l) => (e) => {
    var o, n, i;
    const { html: s, createElement: r } = ut(),
      v =
        null !== (o = null == e ? void 0 : e.attributes) && void 0 !== o
          ? o
          : {},
      d =
        null !== (n = null == e ? void 0 : e.size) && void 0 !== n
          ? n
          : ja.Medium;
    (v.xmlns = 'http://www.w3.org/2000/svg'),
      (v.viewBox = t),
      (v.width = v.height = Da[d]),
      (v['icon-name'] = l),
      (v.fill =
        null !== (i = null == v ? void 0 : v.fill) && void 0 !== i
          ? i
          : 'currentColor');
    const h = s`${a}`;
    return r('svg', Object.assign(Object.assign({}, v), { rpl: !0 }), h);
  },
  { svg: Ct } = ut();
var kt = _t(
  Ct`<path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm-.543 5.705a1.058 1.058 0 0 1-.39-.393 1.11 1.11 0 0 1 0-1.09c.093-.161.228-.295.39-.386a1.1 1.1 0 0 1 1.484.39c.098.163.149.35.147.54a1.08 1.08 0 0 1-.54.936A1.05 1.05 0 0 1 10 7.1a1.062 1.062 0 0 1-.543-.145Zm1.354 8.463H9.2V8.124h1.614l-.003 7.294Z"></path>`,
  '0 0 20 20',
  'info-outline'
);
const { svg: Et } = ut();
var St = _t(
  Et`<path d="M7.5 15.958a1.102 1.102 0 0 1-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 0 1-.778.322Z"></path>`,
  '0 0 20 20',
  'checkmark-fill'
);
const { svg: Bt } = ut();
var Ot = _t(
  Bt`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z"></path>`,
  '0 0 20 20',
  'clear-outline'
);
const { svg: Pt } = ut();
var Tt = _t(
  Pt`<path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm-.533 13.716a1.077 1.077 0 0 1-.53-.92 1.058 1.058 0 0 1 .53-.919c.16-.096.343-.146.53-.144a1.056 1.056 0 0 1 .926.527 1.045 1.045 0 0 1 0 1.069c-.096.16-.23.293-.39.387a1.03 1.03 0 0 1-.536.143 1.016 1.016 0 0 1-.53-.143Zm-.14-3.329-.192-6.613h1.73l-.192 6.613H9.327Z"></path>`,
  '0 0 20 20',
  'error-outline'
);
const { svg: zt } = ut();
var Nt = _t(
  zt`<path d="m18.442 2.442-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558Z"></path>`,
  '0 0 20 20',
  'close-outline'
);
const { svg: Rt } = ut();
var Ut = _t(
  Rt`<path d="M4.444 10.625H0v-1.25h4.444v1.25zM20 9.375h-4.444v1.25H20v-1.25zM10.625 0h-1.25v4.444h1.25V0zm0 15.556h-1.25V20h1.25v-4.444zM5.5 13.319l-.625-1.083-3.848 2.223.625 1.082L5.5 13.319zm13.473-7.778l-.625-1.082L14.5 6.681l.625 1.083 3.848-2.223zm-11.21-.665L5.541 1.027l-1.082.625L6.681 5.5l1.082-.624zm7.778 13.472L13.318 14.5l-1.082.625 2.223 3.849 1.082-.626zm3.432-3.889l-3.849-2.223-.624 1.083 3.849 2.222.624-1.082zM5.5 6.681L1.652 4.459l-.625 1.082 3.849 2.223.624-1.083zm2.263 8.443L6.682 14.5l-2.223 3.848 1.082.625 2.222-3.849zm7.778-13.472l-1.082-.625-2.223 3.849 1.082.625 2.223-3.849z"></path>`,
  '0 0 20 20',
  'load-outline'
);
const { svg: It } = ut();
var jt = _t(
  It`<path d="M19.6 6.876 13.125.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.084 2.084 0 0 0-.378 2.435L6.68 7.292a2.086 2.086 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.8 2.8-5.82 5.82.884.884 5.82-5.82 2.8 2.8a1.132 1.132 0 0 0 1.607 0l.665-.665a2.084 2.084 0 0 0 .374-2.432L16.5 9.528a2.129 2.129 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .002-1.611Zm-1.55 1.393a.849.849 0 0 1-1.174 0l-.442-.442-5.426 5.426.443.442a.832.832 0 0 1 0 1.174l-.588.587-6.319-6.319.587-.587a.833.833 0 0 1 1.175 0l.442.442 5.426-5.426-.442-.441a.832.832 0 0 1 0-1.175l.565-.609 6.34 6.341-.587.587Z"></path>`,
  '0 0 20 20',
  'pin-outline'
);
const { svg: Dt } = ut();
var qt = _t(
  Dt`<path d="M19.933 7.681a1.139 1.139 0 0 1-.334.807l-.666.665a2.126 2.126 0 0 1-2.433.374l-2.03 2.03-.883-.883 2.846-2.847.442.443a.851.851 0 0 0 1.174 0l.588-.587-6.32-6.32-.587.588a.831.831 0 0 0 0 1.174l.442.442-2.845 2.846-.884-.884 2.03-2.03a2.087 2.087 0 0 1 .373-2.434L11.512.4a1.143 1.143 0 0 1 1.613 0l6.475 6.476a1.138 1.138 0 0 1 .334.805ZM2.486 1.6l15.913 15.913-.883.884-4.67-4.67a2.06 2.06 0 0 1-.51 2.025l-.665.666a1.129 1.129 0 0 1-1.237.247 1.134 1.134 0 0 1-.37-.247l-2.8-2.8-5.818 5.82-.884-.884 5.819-5.82-2.798-2.791a1.141 1.141 0 0 1 0-1.613l.665-.664a2.112 2.112 0 0 1 2.028-.506L1.6 2.487l.886-.887Zm8.521 11.65.681-.68-4.261-4.258-.68.68-.442-.442a.849.849 0 0 0-1.174 0l-.587.587 6.319 6.317.587-.587a.832.832 0 0 0 0-1.174l-.442-.443Z"></path>`,
  '0 0 20 20',
  'unpin-outline'
);
const { svg: Gt } = ut();
var Wt = _t(
  Gt`<path d="M9.875 7.614a2.055 2.055 0 0 0-.974.222 1.62 1.62 0 0 0-.879 1.46v4.2H6.409V6.2h1.552v.93H8c.275-.32.616-.575 1-.748.453-.207.947-.31 1.445-.3.243-.003.487.02.725.071.158.03.31.084.451.161l-.649 1.559a1.731 1.731 0 0 0-.523-.2 2.755 2.755 0 0 0-.574-.059ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0a8.722 8.722 0 0 0-2.841-6.435l-4.974 11.986H9.581l5.3-12.809A8.748 8.748 0 1 0 18.75 10Z"></path>`,
  '0 0 20 20',
  'community-outline'
);
const { svg: Ft } = ut();
var Kt = _t(
  Ft`<path d="m17.71 8.549 1.244.832v8.523a1.05 1.05 0 0 1-1.052 1.046H12.73a.707.707 0 0 1-.708-.707v-4.507c0-.76-1.142-1.474-2.026-1.474-.884 0-2.026.714-2.026 1.474v4.507a.71.71 0 0 1-.703.707H2.098a1.046 1.046 0 0 1-1.052-1.043V9.381l1.244-.835v9.158h4.44v-3.968c0-1.533 1.758-2.72 3.27-2.72s3.27 1.187 3.27 2.72v3.968h4.44V8.549Zm2.04-1.784L10.646.655a1.12 1.12 0 0 0-1.28-.008L.25 6.765l.696 1.036L10 1.721l9.054 6.08.696-1.036Z"></path>`,
  '0 0 20 20',
  'home-outline'
);
const { svg: Xt } = ut();
var Jt = _t(
  Xt`<path d="M11 18h1a2 2 0 0 1-4 0h3Zm8-3.792v.673A1.12 1.12 0 0 1 17.883 16H2.117A1.12 1.12 0 0 1 1 14.881v-.673a3.947 3.947 0 0 1 1.738-3.277A2.706 2.706 0 0 0 3.926 8.7V7.087a6.07 6.07 0 0 1 12.138 0l.01 1.613a2.7 2.7 0 0 0 1.189 2.235A3.949 3.949 0 0 1 19 14.208Zm-1.25 0a2.7 2.7 0 0 0-1.188-2.242A3.956 3.956 0 0 1 14.824 8.7V7.088a4.819 4.819 0 1 0-9.638 0v1.615a3.956 3.956 0 0 1-1.738 3.266 2.7 2.7 0 0 0-1.198 2.239v.542h15.5v-.542Z"></path>`,
  '0 0 20 20',
  'notification-outline'
);
const { svg: Yt } = ut();
var Qt = _t(
  Yt`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM4.866 17.07a3.99 3.99 0 0 1 3.991-2.77h2.286a3.99 3.99 0 0 1 3.991 2.766 8.685 8.685 0 0 1-10.268 0v.004Zm11.3-.87a5.354 5.354 0 0 0-5.024-3.146H8.857A5.354 5.354 0 0 0 3.833 16.2a8.75 8.75 0 1 1 12.334 0h-.001ZM10.059 5a3.229 3.229 0 1 0 0 6.458 3.229 3.229 0 0 0 0-6.458Zm0 5.208a1.98 1.98 0 1 1 0-3.959 1.98 1.98 0 0 1 0 3.959Z"></path>`,
  '0 0 20 20',
  'profile-outline'
);
const { svg: al } = ut();
var tl = _t(
  al`<path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 0 1-.992-1.137v-1.073a.97.97 0 0 0-.627-.878A.98.98 0 0 0 6.1 17l-.755.753a1.149 1.149 0 0 1-1.521.1 10.16 10.16 0 0 1-1.671-1.671 1.149 1.149 0 0 1 .1-1.523L3 13.906a.97.97 0 0 0 .176-1.069.98.98 0 0 0-.887-.649H1.216A1.145 1.145 0 0 1 .079 11.2a9.1 9.1 0 0 1 0-2.393 1.145 1.145 0 0 1 1.137-.992h1.073a.97.97 0 0 0 .878-.627A.979.979 0 0 0 3 6.1l-.754-.754a1.15 1.15 0 0 1-.1-1.522 10.16 10.16 0 0 1 1.673-1.676 1.155 1.155 0 0 1 1.522.1L6.1 3a.966.966 0 0 0 1.068.176.98.98 0 0 0 .649-.887V1.216A1.145 1.145 0 0 1 8.8.079a9.129 9.129 0 0 1 2.393 0 1.144 1.144 0 0 1 .991 1.137v1.073a.972.972 0 0 0 .628.878A.977.977 0 0 0 13.905 3l.754-.754a1.152 1.152 0 0 1 1.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 0 1-.1 1.522L17 6.1a.967.967 0 0 0-.176 1.068.98.98 0 0 0 .887.649h1.073a1.145 1.145 0 0 1 1.137.991 9.096 9.096 0 0 1 0 2.392 1.145 1.145 0 0 1-1.137.992h-1.073A1.041 1.041 0 0 0 17 13.905l.753.755a1.149 1.149 0 0 1 .1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 0 1-1.522-.1L13.906 17a.97.97 0 0 0-1.069-.176.981.981 0 0 0-.65.887v1.073a1.144 1.144 0 0 1-.99 1.137A9.431 9.431 0 0 1 10 20Zm-.938-1.307a7.638 7.638 0 0 0 1.875 0v-.982a2.292 2.292 0 0 1 3.853-1.6l.693.694a8.796 8.796 0 0 0 1.326-1.326l-.694-.694a2.29 2.29 0 0 1 1.6-3.851h.982a7.746 7.746 0 0 0 0-1.876h-.982a2.213 2.213 0 0 1-2.034-1.4 2.223 2.223 0 0 1 .438-2.451l.694-.693a8.76 8.76 0 0 0-1.327-1.326l-.692.694a2.22 2.22 0 0 1-2.434.445 2.221 2.221 0 0 1-1.419-2.041v-.979a7.638 7.638 0 0 0-1.875 0v.982a2.213 2.213 0 0 1-1.4 2.034 2.23 2.23 0 0 1-2.456-.438l-.693-.694a8.757 8.757 0 0 0-1.326 1.327l.694.692a2.216 2.216 0 0 1 .445 2.434 2.22 2.22 0 0 1-2.041 1.418h-.982a7.746 7.746 0 0 0 0 1.876h.982a2.213 2.213 0 0 1 2.034 1.4 2.223 2.223 0 0 1-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 0 1 2.433-.445 2.22 2.22 0 0 1 1.418 2.041v.983ZM10 13.229a3.23 3.23 0 1 1 0-6.458 3.23 3.23 0 0 1 0 6.458Zm0-5.208a1.979 1.979 0 1 0 0 3.958 1.979 1.979 0 0 0 0-3.958Z"></path>`,
  '0 0 20 20',
  'settings-outline'
);
const { svg: ll } = ut();
var el = _t(
  ll`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.016 8.633a1.616 1.616 0 0 0-.2.806V13.5H5.931V6.172h1.8v.9h.039a3.009 3.009 0 0 1 1.018-.732 3.45 3.45 0 0 1 1.449-.284c.246-.003.491.02.732.068.158.024.309.08.444.164l-.759 1.832a2.09 2.09 0 0 0-1.093-.26c-.33-.01-.658.062-.954.208a1.422 1.422 0 0 0-.591.565Zm2.9 6.918H9.355L14.7 2.633c.426.272.828.58 1.2.922l-4.984 11.996Z"></path>`,
  '0 0 20 20',
  'community-fill'
);
const { svg: ol } = ut();
var nl = _t(
  ol`<path d="M13 10.967a1.593 1.593 0 0 0-1.363 0 1.2 1.2 0 0 0-.475.414 1.02 1.02 0 0 0-.173.576.967.967 0 0 0 .18.574c.122.172.29.307.482.393.21.095.438.143.668.14a1.51 1.51 0 0 0 .671-.146 1.2 1.2 0 0 0 .475-.4.985.985 0 0 0 .173-.569 1.024 1.024 0 0 0-.17-.57 1.2 1.2 0 0 0-.469-.412Z"></path><path d="M11.747 9.227c.177.095.374.143.574.14.2.003.396-.045.572-.14a1.057 1.057 0 0 0 .402-1.462.984.984 0 0 0-.406-.37 1.317 1.317 0 0 0-1.137 0 1 1 0 0 0-.557.902 1.047 1.047 0 0 0 .551.932l.001-.002Z"></path><path d="M18.636 6.73 13.27 1.363a4.634 4.634 0 0 0-6.542 0L1.364 6.73a4.627 4.627 0 0 0 0 6.542l5.365 5.365a4.633 4.633 0 0 0 6.542 0l5.366-5.365a4.634 4.634 0 0 0 0-6.542ZM8.204 14.5H6.288V8.277L4.648 9V7.23l2.988-1.367h.568V14.5Zm6.862-1.148c-.29.4-.683.714-1.136.912a4.11 4.11 0 0 1-3.24-.006 2.8 2.8 0 0 1-1.134-.918 2.172 2.172 0 0 1-.41-1.283c0-.42.12-.83.345-1.184a2.6 2.6 0 0 1 .944-.879 2.488 2.488 0 0 1-.636-.832c-.152-.32-.23-.67-.229-1.025a2.117 2.117 0 0 1 .378-1.248c.256-.362.604-.65 1.008-.832.43-.198.9-.298 1.374-.293.474-.004.942.099 1.371.3.403.182.749.47 1 .834.249.368.378.804.37 1.248a2.371 2.371 0 0 1-.868 1.851c.383.21.708.51.944.877a2.24 2.24 0 0 1-.074 2.481l-.007-.003Z"></path>`,
  '0 0 20 20',
  'nsfw-fill'
);
const { svg: il } = ut();
var sl = _t(
  il`<path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM10 17a10.735 10.735 0 0 1-7.475-2.989 10.385 10.385 0 0 1-2.441-3.583 1.142 1.142 0 0 1 0-.856A10.629 10.629 0 0 1 10 3a10.631 10.631 0 0 1 9.916 6.57c.11.275.11.583 0 .858a10.536 10.536 0 0 1-2.864 3.972A10.8 10.8 0 0 1 10 17Zm0-12.75a9.387 9.387 0 0 0-8.76 5.8 9.75 9.75 0 0 0 2.151 3.06 9.6 9.6 0 0 0 12.844.34 9.285 9.285 0 0 0 2.525-3.494A9.445 9.445 0 0 0 10 4.25Z"></path>`,
  '0 0 20 20',
  'show-outline'
);
const { svg: rl } = ut();
var vl = _t(
  rl`<path d="m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z"></path>`,
  '0 0 20 20',
  'caret-right-outline'
);
const { svg: dl } = ut();
var hl = _t(
  dl`<path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>`,
  '0 0 20 20',
  'caret-down-outline'
);
const { svg: cl } = ut();
var ul = _t(
  cl`<path d="M3.625 12.069v1.25A2.98 2.98 0 0 1 1 10.349V4a2.985 2.985 0 0 1 2.958-3h8.084a2.969 2.969 0 0 1 2.92 2.625h-1.255a1.72 1.72 0 0 0-1.665-1.375H3.958A1.734 1.734 0 0 0 2.25 4v6.345a1.746 1.746 0 0 0 1.375 1.724Zm10.4 4.89h2.021A2.962 2.962 0 0 0 19 14V7.959A2.962 2.962 0 0 0 16.042 5H7.958A2.962 2.962 0 0 0 5 7.959V14a2.962 2.962 0 0 0 2.958 2.959h2.494l-.028 1.478a.719.719 0 0 0 .41.661l.46.158 2.731-2.297ZM10.8 18.04h-.005.005Zm5.242-11.79a1.711 1.711 0 0 1 1.708 1.709V14a1.711 1.711 0 0 1-1.708 1.709h-2.478L11.7 17.283l.031-1.574H7.958A1.71 1.71 0 0 1 6.25 14V7.959A1.711 1.711 0 0 1 7.958 6.25h8.084Z"></path>`,
  '0 0 20 20',
  'comments-outline'
);
const { svg: pl } = ut();
var ml = _t(
  pl`<path d="M15.75 13H17v3.375A2.63 2.63 0 0 1 14.375 19H3.625A2.63 2.63 0 0 1 1 16.375V5.625A2.629 2.629 0 0 1 3.625 3H7v1.25H3.625A1.377 1.377 0 0 0 2.25 5.625v10.75a1.377 1.377 0 0 0 1.375 1.375h10.75a1.377 1.377 0 0 0 1.375-1.375V13Zm2.625-12h-5v1.25h3.491l-8.433 8.433.884.884 8.433-8.433v3.491H19v-5A.625.625 0 0 0 18.375 1Z"></path>`,
  '0 0 20 20',
  'external-outline'
);
const { svg: gl } = ut();
var $l = _t(
  gl`<path d="M16.89 8.1c-.367 0-.727.096-1.044.279a2.113 2.113 0 0 0-1.926-1.258c-.358 0-.71.09-1.021.265a2.111 2.111 0 0 0-1.948-1.31 1.943 1.943 0 0 0-.7.127V2.245A2.258 2.258 0 0 0 7.98.121a1.906 1.906 0 0 0-1.457.653A2.235 2.235 0 0 0 6 2.246v8.77L4.848 9.471a2.124 2.124 0 0 0-2.812-.552 2.163 2.163 0 0 0-.725 2.965L4.219 16.7A6.659 6.659 0 0 0 9.825 20h2.63A6.674 6.674 0 0 0 19 13.246v-3.023A2.119 2.119 0 0 0 16.89 8.1Zm.86 5.148a5.487 5.487 0 0 1-5.3 5.5H9.827a5.4 5.4 0 0 1-4.537-2.693l-2.91-4.818a.911.911 0 0 1 .3-1.249.876.876 0 0 1 1.163.23l1.972 2.644a.816.816 0 0 0 .914.244.72.72 0 0 0 .518-.677V2.245a.981.981 0 0 1 .22-.645.649.649 0 0 1 .514-.225A1.021 1.021 0 0 1 9 2.246V8.2h1.25a1.02 1.02 0 0 1 .208-.657.616.616 0 0 1 .493-.217.88.88 0 0 1 .86.92v1h1.25a.861.861 0 1 1 1.719 0v.977h1.25a.86.86 0 0 1 1.72 0v3.025ZM3.243 4.7a5.14 5.14 0 0 1 0-4.4l1.129.539a3.892 3.892 0 0 0 0 3.321l-1.13.54Zm8.384-.536a3.883 3.883 0 0 0 0-3.321L12.756.3a5.13 5.13 0 0 1 0 4.393l-1.13-.529Z"></path>`,
  '0 0 20 20',
  'tap-outline'
);
const { svg: Zl } = ut();
var Al = _t(
  Zl`<path d="M6 13h8v1.25H6V13Zm0-2.75h8V9H6v1.25Zm13-7.625v14.75A1.627 1.627 0 0 1 17.375 19H2.625A1.627 1.627 0 0 1 1 17.375V2.625A1.627 1.627 0 0 1 2.625 1h14.75A1.627 1.627 0 0 1 19 2.625Zm-1.25 0a.375.375 0 0 0-.375-.375H2.625a.375.375 0 0 0-.375.375v14.75a.375.375 0 0 0 .375.375h14.75a.375.375 0 0 0 .375-.375V2.625ZM6 6.25h8V5H6v1.25Z"></path>`,
  '0 0 20 20',
  'text-post-outline'
);
const { svg: wl } = ut();
var fl = _t(
  wl`<path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>`,
  '0 0 20 20',
  'upvote-outline'
);
const { svg: bl } = ut();
var Ml = _t(
  bl`<path d="M4.078 9.691a9.85 9.85 0 0 0-.774 1A8.613 8.613 0 0 1 1.97 9.683 8.192 8.192 0 0 1 .211 7.377a1.94 1.94 0 0 1 0-1.753A8.757 8.757 0 0 1 8.014 1a8.679 8.679 0 0 1 7.735 4.5c.227.43.3.924.205 1.4-.391-.157-.792-.29-1.2-.4a.885.885 0 0 0-.106-.412A7.43 7.43 0 0 0 8.014 2.25a7.5 7.5 0 0 0-6.689 3.941.7.7 0 0 0 0 .619 6.938 6.938 0 0 0 1.49 1.953c.388.353.81.664 1.263.928Zm1.635-2.6a2.217 2.217 0 0 1 .222-1.71A2.352 2.352 0 0 1 7.4 4.278c.202-.051.408-.078.616-.078a2.372 2.372 0 0 1 2.3 1.709c.029.113.048.228.06.344.411-.062.826-.1 1.242-.113a3.513 3.513 0 0 0-.1-.563A3.648 3.648 0 0 0 7.08 3.069a3.592 3.592 0 0 0-2.227 1.686 3.442 3.442 0 0 0 .286 3.893c.314-.27.644-.52.988-.75a2.268 2.268 0 0 1-.413-.808v.001Zm11.893 9.889a8.198 8.198 0 0 0 2-2.488A2.142 2.142 0 0 0 19.6 12.5 8.499 8.499 0 0 0 12 8a8.586 8.586 0 0 0-7.67 4.628 1.968 1.968 0 0 0 0 1.745 8.176 8.176 0 0 0 1.726 2.306 8.78 8.78 0 0 0 11.551.3v.001Zm.89-3.9a.899.899 0 0 1 0 .833c-.422.808-1 1.524-1.7 2.108a7.527 7.527 0 0 1-9.89-.254 6.926 6.926 0 0 1-1.464-1.954.716.716 0 0 1 0-.626A7.328 7.328 0 0 1 12 9.25a7.262 7.262 0 0 1 6.5 3.83h-.003Zm-5.572 3.849a3.546 3.546 0 0 0 2.175-1.663 3.508 3.508 0 0 0 .352-2.687 3.588 3.588 0 0 0-5.632-1.897 3.543 3.543 0 0 0-.92 1.051 3.506 3.506 0 0 0-.352 2.686 3.582 3.582 0 0 0 4.377 2.51Zm1.322-4.024a2.265 2.265 0 0 1-.227 1.735 2.306 2.306 0 0 1-1.42 1.081 2.334 2.334 0 0 1-2.849-1.628 2.265 2.265 0 0 1 .227-1.735 2.298 2.298 0 0 1 1.416-1.08 2.357 2.357 0 0 1 2.018.395c.406.308.7.74.835 1.232Z"></path>`,
  '0 0 20 20',
  'views-outline'
);
const { svg: Hl } = ut();
var xl = _t(
  Hl`<path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8ZM6.25 5.312A3.92 3.92 0 0 1 10 1.25a3.92 3.92 0 0 1 3.75 4.062V8h-7.5V5.312Zm10.5 12.058a.378.378 0 0 1-.375.38H3.625a.378.378 0 0 1-.375-.38V9.63a.383.383 0 0 1 .375-.38h12.75a.378.378 0 0 1 .375.38v7.74Z"></path>`,
  '0 0 20 20',
  'lock-outline'
);
const { svg: yl } = ut();
var Ll = _t(
  yl`<path d="M17.386 2H2.614A2.617 2.617 0 0 0 0 4.614v10.772A2.617 2.617 0 0 0 2.614 18h14.772A2.617 2.617 0 0 0 20 15.386V4.614A2.617 2.617 0 0 0 17.386 2Zm1.364 13.386a1.366 1.366 0 0 1-1.364 1.364H2.614a1.366 1.366 0 0 1-1.364-1.364V4.614A1.366 1.366 0 0 1 2.614 3.25h14.772a1.366 1.366 0 0 1 1.364 1.364v10.772ZM8 6H3v5h5V6ZM6.75 9.75h-2.5v-2.5h2.5v2.5ZM3 13h4v1.25H3V13Zm5 0h4v1.25H8V13Zm5 0h4v1.25h-4V13Z"></path>`,
  '0 0 20 20',
  'payment-outline'
);
const { svg: Vl } = ut();
var _l = _t(
  Vl`<path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm1.611 4.058a2.4 2.4 0 0 1 .994.861c.241.375.366.812.359 1.258a2.04 2.04 0 0 1-.167.854c-.1.229-.238.439-.407.622-.2.208-.413.404-.636.588-.223.188-.4.348-.533.483a1.754 1.754 0 0 0-.328.464 1.326 1.326 0 0 0-.13.591v.78H9.328v-.759a2.216 2.216 0 0 1 .601-1.572c.204-.21.421-.406.65-.588.209-.173.373-.316.492-.431a1.52 1.52 0 0 0 .3-.4 1.154 1.154 0 0 0-.058-1.128 1.192 1.192 0 0 0-.485-.421 1.525 1.525 0 0 0-.677-.151 1.545 1.545 0 0 0-.721.168 1.3 1.3 0 0 0-.713 1.131H7.256a2.628 2.628 0 0 1 1.381-2.293A3.132 3.132 0 0 1 10.175 5c.496-.008.987.097 1.436.308Zm-2.164 9.843a1.088 1.088 0 0 1-.386-.385 1.034 1.034 0 0 1-.144-.537c-.002-.186.048-.37.144-.53.094-.16.227-.293.386-.387a1.03 1.03 0 0 1 .53-.143 1.062 1.062 0 0 1 .926 1.597c-.096.159-.23.291-.389.385a1.034 1.034 0 0 1-.537.144 1.021 1.021 0 0 1-.53-.144Z"></path>`,
  '0 0 20 20',
  'help-outline'
);
const { svg: Cl } = ut();
var kl = _t(
  Cl`<path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z"></path><path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z"></path>`,
  '0 0 20 20',
  'link-post-outline'
);
const { svg: El } = ut();
var Sl = _t(
  El`<path d="M19 9h-8V1H9v8H1v2h8v8h2v-8h8V9Z"></path>`,
  '0 0 20 20',
  'add-fill'
);
const { svg: Bl } = ut();
var Ol = _t(
  Bl`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.832 12.418-1.414 1.414L10 11.414l-2.418 2.418-1.414-1.414L8.586 10 6.168 7.582l1.414-1.414L10 8.586l2.418-2.418 1.414 1.414L11.414 10l2.418 2.418Z"></path>`,
  '0 0 20 20',
  'clear-fill'
);
const { svg: Pl } = ut();
var Tl = _t(
  Pl`<path d="M9.95 1.92c.85 0 1.67.27 2.35.77l4.35 3.16a4 4 0 0 1 1.46 4.48l-1.66 5.11a3.986 3.986 0 0 1-3.81 2.76H7.27c-1.74 0-3.27-1.11-3.81-2.76L1.8 10.33a3.99 3.99 0 0 1 1.46-4.48L7.6 2.69c.69-.5 1.5-.77 2.35-.77Zm0-1.3c-1.1 0-2.18.34-3.12 1.01L2.48 4.79a5.332 5.332 0 0 0-1.93 5.93l1.66 5.11a5.308 5.308 0 0 0 5.04 3.67h5.37c2.3 0 4.33-1.48 5.04-3.67l1.66-5.11c.71-2.18-.07-4.58-1.93-5.92l-4.34-3.16A5.326 5.326 0 0 0 9.93.63l.02-.01Z"></path><path d="M9.95 5.77c.08 0 .19.03.26.14l1.08 1.85.29.5.56.12 2.1.46c.14.03.2.12.23.2.02.07.03.19-.06.29l-1.82 2.01.06.57.22 2.13s.01.13-.07.23c-.06.06-.14.1-.23.1-.04 0-.08 0-.12-.03l-1.97-.87-.53-.23-.53.23-1.97.87s-.08.03-.12.03c-.08 0-.17-.04-.23-.1-.08-.09-.07-.2-.07-.23l.22-2.13.06-.57-1.82-2.01a.302.302 0 0 1-.06-.29.27.27 0 0 1 .23-.2l2.1-.46.56-.12.29-.5 1.08-1.85a.29.29 0 0 1 .26-.14Zm0-1.3c-.54 0-1.08.27-1.38.8L7.49 7.12l-2.1.46c-1.2.26-1.67 1.71-.85 2.63l1.44 1.59-.22 2.13c-.1.98.68 1.76 1.58 1.76.22 0 .43-.04.65-.13l1.97-.87 1.97.87c.22.09.43.13.65.13.9 0 1.69-.78 1.58-1.76l-.22-2.13 1.44-1.59c.82-.91.34-2.37-.85-2.63l-2.1-.46-1.08-1.85c-.31-.53-.84-.8-1.38-.8h-.04.02Z"></path>`,
  '0 0 20 20',
  'gold-outline'
);
Wa(
  'icon-overflow-vertical',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1.5 4.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm0 6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm2 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm0 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/></svg>')}`
);
const { svg: zl } = ut();
var Nl = _t(
  zl`<path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>`,
  '0 0 20 20',
  'comment-outline'
);
const { svg: Rl } = ut();
var Ul = _t(
  Rl`<path d="M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.75 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z"></path>`,
  '0 0 20 20',
  'join-outline'
);
const { svg: Il } = ut();
var jl = _t(
  Il`<path d="M14 10.625H6v-1.25h8v1.25ZM20 10a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-1.25 0A8.75 8.75 0 1 1 10 1.25 8.76 8.76 0 0 1 18.75 10Z"></path>`,
  '0 0 20 20',
  'leave-outline'
);
const { svg: Dl } = ut();
var ql = _t(
  Dl`<path d="M18.41 7.61a8.793 8.793 0 1 1-6.124-6.047V.274A9.995 9.995 0 1 0 20 10a9.923 9.923 0 0 0-.3-2.39h-1.29Z"></path><path d="M10 13.829a3.042 3.042 0 0 1-2.488-1.188l-1.024.718A4.255 4.255 0 0 0 10 15.079a4.255 4.255 0 0 0 3.512-1.72l-1.024-.718A3.041 3.041 0 0 1 10 13.829Z"></path><path d="M6 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M17.625 2.375V0h-1.25v2.375H14v1.25h2.375V6h1.25V3.625H20v-1.25h-2.375Z"></path><path d="M14 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>`,
  '0 0 20 20',
  'add-emoji-outline'
);
const { svg: Gl } = ut();
var Wl = _t(
  Gl`<path d="M15.751 6.023 17 6.106l-.761 11.368a2.554 2.554 0 0 1-.718 1.741A2.586 2.586 0 0 1 13.8 20H6.2a2.585 2.585 0 0 1-1.718-.783 2.553 2.553 0 0 1-.719-1.737L3 6.106l1.248-.083.761 11.369c-.005.333.114.656.333.908.22.252.525.415.858.458h7.6c.333-.043.64-.207.859-.46.22-.254.338-.578.332-.912l.76-11.363ZM18 2.983v1.243H2V2.983h4v-.372A2.737 2.737 0 0 1 6.896.718 2.772 2.772 0 0 1 8.875.002h2.25c.729-.03 1.44.227 1.979.716.538.488.86 1.169.896 1.893v.372h4Zm-10.75 0h5.5v-.372a1.505 1.505 0 0 0-.531-1.014 1.524 1.524 0 0 0-1.094-.352h-2.25c-.397-.03-.79.097-1.094.352-.304.256-.495.62-.531 1.014v.372Z"></path>`,
  '0 0 20 20',
  'delete-outline'
);
const { svg: Fl } = ut();
var Kl = _t(
  Fl`<path d="m18.236 3.158-1.4-1.4a2.615 2.615 0 0 0-3.667-.021L1.336 13.318a1.129 1.129 0 0 0-.336.8v3.757A1.122 1.122 0 0 0 2.121 19h3.757a1.131 1.131 0 0 0 .8-.337L18.256 6.826a2.616 2.616 0 0 0-.02-3.668ZM5.824 17.747H2.25v-3.574l9.644-9.435L15.259 8.1l-9.435 9.647ZM17.363 5.952l-1.23 1.257-3.345-3.345 1.257-1.23a1.362 1.362 0 0 1 1.91.01l1.4 1.4a1.364 1.364 0 0 1 .008 1.908Z"></path>`,
  '0 0 20 20',
  'edit-outline'
);
Wa(
  'icon-load',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.444 10.625H0v-1.25h4.444v1.25zM20 9.375h-4.444v1.25H20v-1.25zM10.625 0h-1.25v4.444h1.25V0zm0 15.556h-1.25V20h1.25v-4.444zM5.5 13.319l-.625-1.083-3.848 2.223.625 1.082L5.5 13.319zm13.473-7.778l-.625-1.082L14.5 6.681l.625 1.083 3.848-2.223zm-11.21-.665L5.541 1.027l-1.082.625L6.681 5.5l1.082-.624zm7.778 13.472L13.318 14.5l-1.082.625 2.223 3.849 1.082-.626zm3.432-3.889l-3.849-2.223-.624 1.083 3.849 2.222.624-1.082zM5.5 6.681L1.652 4.459l-.625 1.082 3.849 2.223.624-1.083zm2.263 8.443L6.682 14.5l-2.223 3.848 1.082.625 2.222-3.849zm7.778-13.472l-1.082-.625-2.223 3.849 1.082.625 2.223-3.849z"/></svg>')}`
);
const { svg: Xl } = ut();
var Jl = _t(
  Xl`<path d="M17.374 2H16V.25h-1.25V2h-9.5V.251H4V2H2.626A1.627 1.627 0 0 0 1 3.626v13.748A1.627 1.627 0 0 0 2.626 19h14.748A1.627 1.627 0 0 0 19 17.374V3.626A1.627 1.627 0 0 0 17.374 2ZM2.626 3.25H4v1h1.25v-1h9.5v1H16v-1h1.374a.377.377 0 0 1 .376.376V7H2.25V3.626a.377.377 0 0 1 .376-.376Zm14.748 14.5H2.626a.377.377 0 0 1-.376-.376V8.25h15.5v9.124a.378.378 0 0 1-.376.376Z"></path>`,
  '0 0 20 20',
  'calendar-outline'
);
const { svg: Yl } = ut();
var Ql = _t(
  Yl`<path d="M7.973 19.844a1.624 1.624 0 0 1-1.15-.472L.629 13.177A1.632 1.632 0 0 1 .61 10.9l9.107-9.4a1.631 1.631 0 0 1 1.168-.5h6.49A1.627 1.627 0 0 1 19 2.625v6.491a1.633 1.633 0 0 1-.5 1.168l-9.4 9.1c-.301.294-.706.46-1.127.46ZM10.885 2.25a.38.38 0 0 0-.271.114l-9.1 9.4a.375.375 0 0 0 0 .525l6.194 6.195a.377.377 0 0 0 .526 0l9.4-9.106a.374.374 0 0 0 .114-.269V2.625a.375.375 0 0 0-.375-.375h-6.488ZM14.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>`,
  '0 0 20 20',
  'tag-outline'
);
const { svg: ae } = ut();
var te = _t(
  ae`<path d="M15.175 13.11c-.237.462-.428.6-.514.627l-.133-.035c-.439-.238-1.278-2.03-1.278-5.2 0-2.95.729-4.718 1.184-5.144l.245-.087c.095.042.276.192.5.62l.284.556 1.113-.57-.285-.556c-.541-1.057-1.17-1.3-1.618-1.316h-.044a1.4 1.4 0 0 0-.754.23L3.7 5.852c-.915-.552-1.847-.991-2.61-.58C.237 5.735.044 6.98 0 9c.047 2 .24 3.245 1.093 3.7.783.423 1.754-.06 2.7-.637.288.1.685.218 1.224.37v4.347a1.122 1.122 0 0 0 1.121 1.12h2.75a1.123 1.123 0 0 0 1.122-1.12v-3l4.028 1.075c.183.088.384.134.587.135.45 0 1.1-.23 1.661-1.32l.285-.555-1.113-.57-.283.566Zm-11.882-2.2c-1.247.782-1.546.734-1.607.7C1.6 11.56 1.3 11.229 1.25 9c.049-2.25.345-2.582.434-2.63.064-.033.361-.081 1.61.7a.624.624 0 0 0 .54.058l8.838-3.146A13.9 13.9 0 0 0 12 8.5c-.034 1.608.221 3.21.754 4.728L3.79 10.834a.622.622 0 0 0-.497.073v.004Zm2.97 5.753v-3.877c.678.184 1.507.405 2.5.67v3.2l-2.5.007ZM19.25 8v1.25H16V8h3.25Zm-3.477-2.674 2.82-1.594.615 1.088-2.819 1.594-.616-1.088Zm.616 5.26 2.819 1.594-.615 1.088-2.82-1.594.616-1.088Z"></path>`,
  '0 0 20 20',
  'topic-activism-outline'
);
const { svg: le } = ut();
var ee = _t(
  le`<path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z"></path>`,
  '0 0 20 20',
  'search-outline'
);
const { svg: oe } = ut();
var ne = _t(
  oe`<path d="M4.73 2.109h10.541V3.9h-4.3v14.093H9.007V3.9H4.73V2.109Z"></path>`,
  '0 0 20 20',
  'format-outline'
);
const { svg: ie } = ut();
var se = _t(
  ie`<path d="M5.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>`,
  '0 0 20 20',
  'overflow-horizontal-outline'
);
const { svg: re } = ut();
var ve = _t(
  re`<path d="m13.074 16.478-.826-.891c.3-.313.615-.628.935-.947 1.82-1.817 3.7-3.695 3.639-6.337a3.893 3.893 0 0 0-.341-1.727 2.262 2.262 0 0 0-3.251-1.015 2.3 2.3 0 0 0-.873.856 2.348 2.348 0 0 0-.318 1.227 2.414 2.414 0 0 0 1.155 2.117c.32.202.691.31 1.07.311v1.25a3.165 3.165 0 0 1-1.652-.475 3.62 3.62 0 0 1-1.261-1.3 3.739 3.739 0 0 1-.488-1.9 3.671 3.671 0 0 1 .5-1.891A3.45 3.45 0 0 1 17.522 6c.332.716.496 1.498.478 2.287.078 3.186-2.094 5.353-4.01 7.264-.315.313-.624.62-.916.927Zm-8.863 0-.826-.891c.3-.313.615-.628.935-.947 1.82-1.817 3.7-3.695 3.639-6.337a3.883 3.883 0 0 0-.342-1.727 2.329 2.329 0 0 0-.857-1 2.357 2.357 0 0 0-2.392-.019c-.363.2-.665.497-.873.856a2.349 2.349 0 0 0-.32 1.227 2.417 2.417 0 0 0 1.156 2.121c.32.202.691.31 1.07.311v1.25a3.159 3.159 0 0 1-1.652-.475 3.616 3.616 0 0 1-1.261-1.3A3.741 3.741 0 0 1 2 7.644a3.666 3.666 0 0 1 .5-1.892A3.53 3.53 0 0 1 7.354 4.5 3.554 3.554 0 0 1 8.659 6c.332.717.495 1.5.476 2.291.078 3.186-2.093 5.352-4.01 7.264a34.4 34.4 0 0 0-.914.923Z"></path>`,
  '0 0 20 20',
  'quote-outline'
);
const { svg: de } = ut();
var he = _t(
  de`<path d="M5.713 18.656.114 10.687a.622.622 0 0 1 0-.718L5.714 2l1.022.719-5.344 7.609 5.344 7.609-1.023.719Zm7.417-5.528-1.016-1.016a2.581 2.581 0 0 1-3.564 0 2.523 2.523 0 0 1 0-3.566 2.581 2.581 0 0 1 3.564 0l1.016-1.018a3.957 3.957 0 1 0 0 5.6Zm6.756-2.44a.622.622 0 0 0 0-.718l-5.6-7.969-1.021.719 5.346 7.608-5.343 7.609 1.022.719 5.596-7.968Z"></path>`,
  '0 0 20 20',
  'code-inline-outline'
);
const { svg: ce } = ut();
var ue = _t(
  ce`<path d="M17.371 19H2.629A1.63 1.63 0 0 1 1 17.371v-7.343h1.25v7.343a.378.378 0 0 0 .379.379h14.742a.377.377 0 0 0 .379-.379V2.629a.379.379 0 0 0-.379-.379h-7.329V1h7.329A1.631 1.631 0 0 1 19 2.629v14.742A1.63 1.63 0 0 1 17.371 19ZM7.563 7.563l-.884-.884a2.431 2.431 0 0 1-3.359 0 2.379 2.379 0 0 1 0-3.358 2.431 2.431 0 0 1 3.359 0l.884-.884a3.71 3.71 0 0 0-5.126 0 3.625 3.625 0 1 0 5.126 5.126Z"></path>`,
  '0 0 20 20',
  'code-block-outline'
);
const { svg: pe } = ut();
var me = _t(
  pe`<path d="M13 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"></path><path d="M17.375 1H2.625A1.627 1.627 0 0 0 1 2.625v14.75A1.627 1.627 0 0 0 2.625 19h14.75A1.627 1.627 0 0 0 19 17.375V2.625A1.627 1.627 0 0 0 17.375 1ZM2.25 17.375v-2.683L4.9 12.04a2.332 2.332 0 0 1 3.3 0l5.71 5.71H2.625a.375.375 0 0 1-.375-.375Zm15.5 0a.375.375 0 0 1-.375.375h-1.7l-6.6-6.594a3.582 3.582 0 0 0-5.063 0L2.25 12.925v-10.3a.375.375 0 0 1 .375-.375h14.75a.375.375 0 0 1 .375.375v14.75Z"></path>`,
  '0 0 20 20',
  'image-post-outline'
);
const { svg: ge } = ut();
var $e = _t(
  ge`<path d="M18.838 3.631a4.228 4.228 0 0 0-2.469-2.469 18.116 18.116 0 0 0-12.738 0 4.228 4.228 0 0 0-2.469 2.469 18.033 18.033 0 0 0 0 12.737 4.226 4.226 0 0 0 2.469 2.47 18.036 18.036 0 0 0 12.738 0 4.225 4.225 0 0 0 2.469-2.469 18.036 18.036 0 0 0 0-12.738Zm-1.17 12.3a2.98 2.98 0 0 1-1.739 1.739 16.858 16.858 0 0 1-11.858 0 2.98 2.98 0 0 1-1.739-1.74 16.783 16.783 0 0 1 0-11.857 2.978 2.978 0 0 1 1.739-1.741 16.785 16.785 0 0 1 11.858 0 2.98 2.98 0 0 1 1.739 1.739 16.785 16.785 0 0 1 0 11.858v.002Z"></path><path d="M14 9.392 8.119 5.6A.725.725 0 0 0 7 6.2v7.6a.725.725 0 0 0 1.118.609L14 10.608a.827.827 0 0 0 .333-.608.827.827 0 0 0-.333-.608Zm-5.75 3.441V7.167L12.64 10l-4.39 2.833Z"></path>`,
  '0 0 20 20',
  'video-post-outline'
);
const { svg: Ze } = ut();
var Ae = _t(
  Ze`<path d="M4.711 12.664A2.8 2.8 0 0 1 3.6 11.583 3.108 3.108 0 0 1 3.2 10a3.052 3.052 0 0 1 .411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 0 1 1.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 0 0-.563-.357 2.3 2.3 0 0 0-.754-.124 1.733 1.733 0 0 0-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 0 0 1.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.928a2.4 2.4 0 0 1-1.293 2.193 2.955 2.955 0 0 1-1.417.328 3.247 3.247 0 0 1-1.579-.385Zm5.471-5.648H11.5v5.968h-1.318V7.016Zm2.862 0H16.5v1.169h-2.138v1.392h1.79v1.169h-1.79v2.238h-1.318V7.016ZM10 20a18.04 18.04 0 0 1-6.369-1.162 4.226 4.226 0 0 1-2.469-2.47 18.033 18.033 0 0 1 0-12.737 4.228 4.228 0 0 1 2.469-2.469 18.116 18.116 0 0 1 12.738 0 4.228 4.228 0 0 1 2.469 2.469 18.035 18.035 0 0 1 0 12.738 4.225 4.225 0 0 1-2.469 2.469A18.04 18.04 0 0 1 10 20Zm0-18.75a16.8 16.8 0 0 0-5.929 1.082 2.978 2.978 0 0 0-1.739 1.739 16.783 16.783 0 0 0 0 11.857 2.98 2.98 0 0 0 1.739 1.74 16.858 16.858 0 0 0 11.858 0 2.978 2.978 0 0 0 1.739-1.739 16.785 16.785 0 0 0 0-11.858 2.978 2.978 0 0 0-1.739-1.739A16.8 16.8 0 0 0 10 1.25Z"></path>`,
  '0 0 20 20',
  'gif-post-outline'
);
const { svg: we } = ut();
var fe = _t(
  we`<path d="M4.125 19.543A1.126 1.126 0 0 1 3 18.418V1.582A1.125 1.125 0 0 1 4.735.636l13.048 8.418a1.126 1.126 0 0 1 0 1.891L4.735 19.363a1.13 1.13 0 0 1-.61.18Z"></path>`,
  '0 0 20 20',
  'play-fill'
);
const { svg: be } = ut();
var Me = _t(
  be`<path d="M16.75 11.5A7.25 7.25 0 1 1 9.5 4.25h4.069L11.31 6.133l.8.96 3.59-2.988a.626.626 0 0 0 0-.96L12.109.157l-.8.96L13.569 3H9.5a8.5 8.5 0 1 0 8.5 8.5h-1.25Z"></path>`,
  '0 0 20 20',
  'refresh-outline'
);
const { svg: He } = ut();
var xe = _t(
  He`<path d="M2 8.075h6v1.45H5.625v6.447h-1.25V9.525H2v-1.45Zm5.029-5.966V3.9h4.977v14.093h1.964V3.9h5V2.109H7.029Z"></path>`,
  '0 0 20 20',
  'text-size-outline'
);
const { svg: ye } = ut();
var Le = _t(
  ye`<path d="M9.463 15.384A1.092 1.092 0 0 1 9.076 15a1.033 1.033 0 0 1-.143-.537c-.002-.186.047-.369.143-.529.093-.16.227-.293.387-.387.16-.097.345-.148.533-.147a1.05 1.05 0 0 1 .537.141 1.076 1.076 0 0 1 .537.921c0 .188-.051.373-.148.535-.096.159-.23.292-.39.386a1.042 1.042 0 0 1-.536.143 1.026 1.026 0 0 1-.533-.142Zm-.141-3.329L9.13 5.342h1.73l-.192 6.713H9.322Zm.667 7.935a4.6 4.6 0 0 1-3.27-1.354l-5.367-5.365a4.634 4.634 0 0 1 0-6.542l5.367-5.365a4.626 4.626 0 0 1 6.54 0l5.366 5.364a4.627 4.627 0 0 1 0 6.542l-5.364 5.365a4.6 4.6 0 0 1-3.272 1.355Zm0-18.73a3.353 3.353 0 0 0-2.386.988L2.237 7.614a3.375 3.375 0 0 0 0 4.772l5.366 5.366a3.46 3.46 0 0 0 4.771 0l5.365-5.366a3.374 3.374 0 0 0 0-4.772L12.374 2.25A3.349 3.349 0 0 0 9.99 1.26Z"></path>`,
  '0 0 20 20',
  'spoiler-outline'
);
const { svg: Ve } = ut();
var _e = _t(
  Ve`<path d="M17.377 1H2.623A1.625 1.625 0 0 0 1 2.623v14.754A1.625 1.625 0 0 0 2.623 19h14.754A1.624 1.624 0 0 0 19 17.377V2.623A1.625 1.625 0 0 0 17.377 1Zm.373 1.623V6.75h-7.125v-4.5h6.752a.373.373 0 0 1 .373.373ZM10.625 8h7.125v4h-7.125V8Zm-1.25 4H2.25V8h7.125v4ZM2.623 2.25h6.752v4.5H2.25V2.623a.373.373 0 0 1 .373-.373ZM2.25 17.377V13.25h7.125v4.5H2.623a.373.373 0 0 1-.373-.373Zm15.127.373h-6.752v-4.5h7.125v4.127a.373.373 0 0 1-.373.373Z"></path>`,
  '0 0 20 20',
  'table-outline'
);
const { svg: Ce } = ut();
var ke = _t(
  Ce`<path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"></path>`,
  '0 0 20 20',
  'add-outline'
);
const { svg: Ee } = ut();
var Se = _t(
  Ee`<path d="M18 3.25H2V2h16v1.25ZM14.5 7h-9v1.25h9V7Zm3.5 4.75H2V13h16v-1.25Zm-3.5 5h-9V18h9v-1.25Z"></path>`,
  '0 0 20 20',
  'align-center-outline'
);
const { svg: Be } = ut();
var Oe = _t(
  Be`<path d="M18 3.25H2V2h16v1.25ZM11 7H2v1.25h9V7Zm7 4.75H2V13h16v-1.25Zm-7 5H2V18h9v-1.25Z"></path>`,
  '0 0 20 20',
  'align-left-outline'
);
const { svg: Pe } = ut();
var Te = _t(
  Pe`<path d="M18 3.25H2V2h16v1.25ZM18 7H9v1.25h9V7Zm0 4.75H2V13h16v-1.25Zm0 5H9V18h9v-1.25Z"></path>`,
  '0 0 20 20',
  'align-right-outline'
);
const { svg: ze } = ut();
var Ne = _t(
  ze`<path d="M19 9.375H1v1.25h18v-1.25Z"></path>`,
  '0 0 20 20',
  'subtract-outline'
);
const { svg: Re } = ut();
var Ue = _t(
  Re`<path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z"></path><path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z"></path>`,
  '0 0 20 20',
  'link-outline'
);
const { svg: Ie } = ut();
var je = _t(
  Ie`<path d="M19 10.625H7v-1.25h12v1.25Zm0-7.25H7v1.25h12v-1.25Zm0 12H7v1.25h12v-1.25ZM3 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>`,
  '0 0 20 20',
  'list-bulleted-outline'
);
const { svg: De } = ut();
var qe = _t(
  De`<path d="M1.348 5.155h.72v-2.31c-.22.101-.458.158-.7.167v-.761c.265.013.525-.077.726-.251h1.054v3.155h.628V6H1.348v-.845Zm-.263 6.631c0-.569.107-1.145 1.153-1.778.6-.37.773-.453.773-.783 0-.222-.141-.346-.387-.346a1.066 1.066 0 0 0-.831.593l-.716-.518A1.758 1.758 0 0 1 2.649 8c.929 0 1.374.469 1.374 1.2 0 .445-.181.882-.988 1.316-.5.282-.666.478-.724.636h1.736V12H1.085v-.214ZM1 17.206l.631-.551a1.055 1.055 0 0 0 .849.5c.43 0 .575-.176.575-.419 0-.332-.227-.461-.761-.461h-.307v-.723h.323c.518 0 .673-.145.673-.38 0-.2-.145-.316-.413-.316a1.241 1.241 0 0 0-.882.39l-.551-.641c.406-.392.949-.61 1.513-.605.884 0 1.35.4 1.35 1.052a.815.815 0 0 1-.575.817.873.873 0 0 1 .7.892C4.124 17.57 3.509 18 2.57 18A1.832 1.832 0 0 1 1 17.206Zm18-7.831H7v1.25h12v-1.25Zm0 6H7v1.25h12v-1.25Zm0-12H7v1.25h12v-1.25Z"></path>`,
  '0 0 20 20',
  'list-numbered-outline'
);
const { svg: Ge } = ut();
var We = _t(
  Ge`<path d="M15.209 10.95c.545.7.825 1.571.791 2.458a4.36 4.36 0 0 1-.668 2.394 4.448 4.448 0 0 1-1.855 1.623 6.155 6.155 0 0 1-2.715.575H5V2h4.511a6.981 6.981 0 0 1 2.817.521 4.183 4.183 0 0 1 1.828 1.443c.425.617.647 1.35.636 2.1a4.243 4.243 0 0 1-.476 1.96 4.33 4.33 0 0 1-1.256 1.509 4.5 4.5 0 0 1 2.149 1.417Zm-7.59-6.215v3.951h2.127a2.016 2.016 0 0 0 1.513-.564 2.04 2.04 0 0 0 .551-1.487 1.7 1.7 0 0 0-.61-1.422 2.619 2.619 0 0 0-1.657-.478H7.619Zm3.057 10.53a2.372 2.372 0 0 0 1.657-.571 1.95 1.95 0 0 0 .631-1.524 1.852 1.852 0 0 0-.674-1.531 2.792 2.792 0 0 0-1.806-.543H7.619v4.169h3.057Z"></path>`,
  '0 0 20 20',
  'bold-outline'
);
const { svg: Fe } = ut();
var Ke = _t(
  Fe`<path d="M9.989 18a3.117 3.117 0 0 1-1.833-.765 2.1 2.1 0 0 1-.546-1.509c.007-.328.043-.655.109-.977l1.659-8.181h1.909l-1.735 8.563a1.03 1.03 0 0 0-.021.245.7.7 0 0 0 .3.626c.26.156.55.258.851.3L9.989 18Zm.267-13.424a1.364 1.364 0 0 1 0-2.392 1.44 1.44 0 0 1 1.943.5 1.35 1.35 0 0 1 0 1.381 1.447 1.447 0 0 1-1.943.5v.011Z"></path>`,
  '0 0 20 20',
  'italic-outline'
);
const { svg: Xe } = ut();
var Je = _t(
  Xe`<path d="M8.308 8h-2.4a4.048 4.048 0 0 1-.5-2.006 3.916 3.916 0 0 1 .557-2.1A3.722 3.722 0 0 1 7.529 2.5 5.212 5.212 0 0 1 9.858 2a5.083 5.083 0 0 1 2.914.8c.76.5 1.369 1.2 1.756 2.024l-1.745.691a3.7 3.7 0 0 0-1.13-1.22A2.993 2.993 0 0 0 9.88 3.77a3.036 3.036 0 0 0-1.28.265 2.208 2.208 0 0 0-.928.777c-.239.363-.36.79-.349 1.225-.012.521.156 1.03.477 1.441.152.19.322.365.508.522ZM19 9.007H1v1.25h8.467l.042.017.219.077c.53.184 1.05.4 1.554.649.475.24.898.572 1.244.976.376.43.577.984.562 1.555.006.49-.137.972-.409 1.38-.273.41-.65.742-1.091.961a3.218 3.218 0 0 1-1.468.343 3.174 3.174 0 0 1-1.495-.36 3.643 3.643 0 0 1-1.167-.96 4.227 4.227 0 0 1-.72-1.32l-1.838.758c.235.668.605 1.28 1.086 1.8a5.777 5.777 0 0 0 1.844 1.353 5.336 5.336 0 0 0 2.312.514 5.2 5.2 0 0 0 2.406-.573 4.563 4.563 0 0 0 1.789-1.615 4.283 4.283 0 0 0 .672-2.373A3.72 3.72 0 0 0 14.217 11a6.283 6.283 0 0 0-.716-.743H19v-1.25Z"></path>`,
  '0 0 20 20',
  'strikethrough-outline'
);
const { svg: Ye } = ut();
var Qe = _t(
  Ye`<path d="m12.691 7 2.5-5h.618l2.5 5h-1.118l-1.69-3.382L13.808 7h-1.118ZM8.808 2H7.192L.537 18h2.051l1.745-4.19h7.333L13.412 18h2.051L8.808 2Zm2.16 10.03H5.032l2.924-7.36h.087l2.925 7.36Z"></path>`,
  '0 0 20 20',
  'superscript-outline'
);
const { svg: ao } = ut();
var to = _t(
  ao`<path d="m13.558 14.442-4.183-4.183V4h1.25v5.741l3.817 3.817-.884.884ZM20 10a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-1.25 0A8.75 8.75 0 1 1 10 1.25 8.76 8.76 0 0 1 18.75 10Z"></path>`,
  '0 0 20 20',
  'history-outline'
);
const { svg: lo } = ut();
var eo = _t(
  lo`<path d="m18.707 2.707-1.414-1.414L10 8.586 2.707 1.293 1.293 2.707 8.586 10l-7.293 7.293 1.414 1.414L10 11.414l7.293 7.293 1.414-1.414L11.414 10l7.293-7.293Z"></path>`,
  '0 0 20 20',
  'close-fill'
);
const { svg: oo } = ut();
var no = _t(
  oo`<path d="m12.793 19.707-9-9a1 1 0 0 1 0-1.414l9-9 1.414 1.414L5.914 10l8.293 8.293-1.414 1.414Z"></path>`,
  '0 0 20 20',
  'left-fill'
);
const { svg: io } = ut();
var so = _t(
  io`<path d="M2.625 15.374V16A1.627 1.627 0 0 1 1 14.375V2.625A1.627 1.627 0 0 1 2.625 1h11.75A1.627 1.627 0 0 1 16 2.625H5.629a3.008 3.008 0 0 0-3 3l-.004 9.749ZM7.562 13.3 4 16.865v.513A1.624 1.624 0 0 0 5.622 19h10l-5.7-5.7a1.708 1.708 0 0 0-2.36 0ZM19 5.622v11.756a1.618 1.618 0 0 1-1.184 1.554l-6.761-6.76a3.275 3.275 0 0 0-4.624 0L4 14.6V5.622A1.624 1.624 0 0 1 5.622 4h11.756A1.624 1.624 0 0 1 19 5.622Zm-2.331 3.31a2.574 2.574 0 1 0-5.149 0 2.574 2.574 0 0 0 5.149 0Z"></path>`,
  '0 0 20 20',
  'media-gallery-fill'
);
const { svg: ro } = ut();
var vo = _t(
  ro`<path d="m7.207 19.707-1.414-1.414L14.086 10 5.793 1.707 7.207.293l9 9a1 1 0 0 1 0 1.414l-9 9Z"></path>`,
  '0 0 20 20',
  'right-fill'
);
const { svg: ho } = ut();
var co = _t(
  ho`<path d="M17.5 5.239a5.23 5.23 0 0 1-1.525 3.704c-.44.441-.853.866-1.267 1.29-.435.446-.87.892-1.333 1.358a5.115 5.115 0 0 1-5.944.993l1.56-1.57a3.254 3.254 0 0 0 2.981-.838c.459-.46.895-.9 1.321-1.344.427-.444.835-.857 1.28-1.3a3.236 3.236 0 0 0 .942-2.29 3.253 3.253 0 0 0-.943-2.29 3.216 3.216 0 0 0-2.276-.948 3.2 3.2 0 0 0-2.275.949c-.454.454-.878.89-1.303 1.326-.426.436-.851.865-1.302 1.32-.028.03-.047.064-.075.093l.038-.136L4.541 8.43a5.238 5.238 0 0 1 1.47-4.248c.448-.45.866-.88 1.285-1.31.42-.43.86-.88 1.316-1.34A5.19 5.19 0 0 1 12.293 0a5.19 5.19 0 0 1 3.682 1.534A5.203 5.203 0 0 1 17.5 5.239Zm-4.735 8.941c-.061.074-.114.155-.182.224-.445.447-.863.876-1.28 1.3-.416.424-.862.883-1.32 1.344a3.286 3.286 0 0 1-4.553 0 3.254 3.254 0 0 1 0-4.58c.45-.453.875-.888 1.298-1.322.423-.434.85-.872 1.303-1.326a3.157 3.157 0 0 1 3-.859l1.526-1.555a5.113 5.113 0 0 0-5.931 1c-.456.46-.887.9-1.316 1.34-.43.44-.838.86-1.285 1.31A5.256 5.256 0 0 0 2.5 14.76c0 1.39.55 2.722 1.526 3.705A5.192 5.192 0 0 0 7.709 20a5.192 5.192 0 0 0 3.682-1.535c.463-.466.894-.912 1.334-1.36.413-.422.827-.847 1.266-1.288a5.203 5.203 0 0 0 1.525-3.7 5.306 5.306 0 0 0-.063-.655l-2.688 2.718Z"></path>`,
  '0 0 20 20',
  'link-post-fill'
);
Wa(
  'icon-clear',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.75A8.75 8.75 0 1 1 18.75 10 8.76 8.76 0 0 1 10 18.75Zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.832 12.418-1.414 1.414L10 11.414l-2.418 2.418-1.414-1.414L8.586 10 6.168 7.582l1.414-1.414L10 8.586l2.418-2.418 1.414 1.414L11.414 10l2.418 2.418Z"/></svg>')}`
);
Wa(
  'icon-topic-activism',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M15.175 13.11c-.237.462-.428.6-.514.627l-.133-.035c-.439-.238-1.278-2.03-1.278-5.2 0-2.95.729-4.718 1.184-5.144l.245-.087c.095.042.276.192.5.62l.284.556 1.113-.57-.285-.556c-.541-1.057-1.17-1.3-1.618-1.316h-.044a1.4 1.4 0 0 0-.754.23L3.7 5.852c-.915-.552-1.847-.991-2.61-.58C.237 5.735.044 6.98 0 9c.047 2 .24 3.245 1.093 3.7.783.423 1.754-.06 2.7-.637.288.1.685.218 1.224.37v4.347a1.122 1.122 0 0 0 1.121 1.12h2.75a1.123 1.123 0 0 0 1.122-1.12v-3l4.028 1.075c.183.088.384.134.587.135.45 0 1.1-.23 1.661-1.32l.285-.555-1.113-.57-.283.566Zm-11.882-2.2c-1.247.782-1.546.734-1.607.7C1.6 11.56 1.3 11.229 1.25 9c.049-2.25.345-2.582.434-2.63.064-.033.361-.081 1.61.7a.624.624 0 0 0 .54.058l8.838-3.146A13.9 13.9 0 0 0 12 8.5c-.034 1.608.221 3.21.754 4.728L3.79 10.834a.622.622 0 0 0-.497.073v.004Zm2.97 5.753v-3.877c.678.184 1.507.405 2.5.67v3.2l-2.5.007ZM19.25 8v1.25H16V8h3.25Zm-3.477-2.674 2.82-1.594.615 1.088-2.819 1.594-.616-1.088Zm.616 5.26 2.819 1.594-.615 1.088-2.82-1.594.616-1.088Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m5.013 13.878 4.9 1.334v1.575a1.123 1.123 0 0 1-1.122 1.122H6.134a1.123 1.123 0 0 1-1.121-1.122v-2.91Zm10.162-.767c-.269.524-.488.639-.55.639-.4 0-1.375-1.84-1.375-5.25s.976-5.25 1.375-5.25c.062 0 .281.115.55.639l.284.556 1.113-.57-.285-.556c-.541-1.056-1.169-1.3-1.618-1.316h-.044a1.4 1.4 0 0 0-.754.23L3.7 5.852c-.913-.552-1.845-.99-2.608-.58C.237 5.735.044 6.98 0 9c.047 2 .24 3.245 1.093 3.7.783.423 1.754-.06 2.7-.637.758.26 2.249.658 5.175 1.439l5.074 1.355c.183.088.384.134.587.135.45 0 1.1-.23 1.661-1.32l.285-.555-1.113-.57-.287.564ZM16 8v1.25h3.25V8H16Zm.389-1.586 2.819-1.594-.615-1.088-2.82 1.594.616 1.088Zm-.616 5.26 2.82 1.594.615-1.088-2.819-1.594-.616 1.088Z"/></svg>')}`
);
const { svg: uo } = ut();
var po = _t(
  uo`<path d="M17.875 13h-9.75A1.126 1.126 0 0 1 7 11.875v-9.75A1.127 1.127 0 0 1 8.125 1h9.75A1.127 1.127 0 0 1 19 2.125v9.75A1.126 1.126 0 0 1 17.875 13ZM8.25 11.75h9.5v-9.5h-9.5v9.5ZM13 17.875v-3.409h-1.25v3.284h-9.5v-9.5h3.284V7H2.125A1.127 1.127 0 0 0 1 8.125v9.75A1.127 1.127 0 0 0 2.125 19h9.75A1.127 1.127 0 0 0 13 17.875Z"></path>`,
  '0 0 20 20',
  'duplicate-outline'
);
const { svg: mo } = ut();
var go = _t(
  mo`<path d="M19 11v5.378A2.625 2.625 0 0 1 16.378 19H3.622A2.625 2.625 0 0 1 1 16.378V11h1.25v5.378a1.373 1.373 0 0 0 1.372 1.372h12.756a1.373 1.373 0 0 0 1.372-1.372V11H19ZM9.375 3.009V14h1.25V3.009l2.933 2.933.884-.884-4-4a.624.624 0 0 0-.884 0l-4 4 .884.884 2.933-2.933Z"></path>`,
  '0 0 20 20',
  'share-ios-outline'
);
const { svg: $o } = ut();
var Zo = _t(
  $o`<path d="M19.987 3.636a1.627 1.627 0 0 0-1.624-1.623L1.626 2A1.627 1.627 0 0 0 0 3.625v12.75A1.627 1.627 0 0 0 1.625 18h16.749A1.629 1.629 0 0 0 20 16.373l-.013-12.737ZM1.625 3.25l16.738.013a.375.375 0 0 1 .374.375v1L14 8.767V6.454l-4-1.037-4 1.037v2.318L1.25 4.579v-.954a.375.375 0 0 1 .375-.375ZM12.75 7.421v3.454c0 1.423-2.144 2.215-2.75 2.41-.606-.2-2.75-.987-2.75-2.41V7.421L10 6.708l2.75.713Zm5.889 9.219a.376.376 0 0 1-.265.11H1.625a.375.375 0 0 1-.375-.375V6.246L6 10.438v.437c0 2.641 3.686 3.627 3.843 3.668l.157.04.157-.04C10.314 14.5 14 13.516 14 10.875v-.451L18.739 6.3l.01 10.078a.376.376 0 0 1-.11.262Z"></path>`,
  '0 0 20 20',
  'mod-mail-outline'
);
const { svg: Ao } = ut();
var wo = _t(
  Ao`<path d="M13.083 0a6.862 6.862 0 0 0-6.854 6.854c0 .825.149 1.643.442 2.414L0 15.939v4h5V17h3v-3h5.083a7.1 7.1 0 0 0 6.854-7.146A6.862 6.862 0 0 0 13.083 0Zm0 12.75H6.75v3h-3v2.938h-2.5v-2.231l6.906-6.906-.178-.395a5.554 5.554 0 0 1-.5-2.3 5.604 5.604 0 0 1 11.208 0 5.833 5.833 0 0 1-5.603 5.894Zm2.7-6.934a1.664 1.664 0 1 1-3.332 0 1.664 1.664 0 0 1 3.334 0h-.002Z"></path>`,
  '0 0 20 20',
  'privacy-outline'
);
const { svg: fo } = ut();
var bo = _t(
  fo`<path d="M12.73 10.127c.004-.069.02-.135.02-.205 0-.721-.29-1.413-.806-1.922A2.768 2.768 0 0 0 10 7.203c-.071 0-.138.015-.208.02l-1.05-1.037c.405-.14.83-.214 1.258-.22 1.06 0 2.078.417 2.829 1.159A3.932 3.932 0 0 1 14 9.922c-.005.423-.08.843-.222 1.242l-1.049-1.037Zm7.187-.63a10.538 10.538 0 0 0-3.954-4.748A10.72 10.72 0 0 0 10 3c-1.297 0-2.584.227-3.8.673l.985.973A9.819 9.819 0 0 1 10 4.236a9.525 9.525 0 0 1 5.242 1.514 9.368 9.368 0 0 1 3.519 4.128 9.186 9.186 0 0 1-2.526 3.455c-.047.04-.1.075-.148.114l.89.88c.024-.02.051-.037.075-.058a10.421 10.421 0 0 0 2.866-3.924c.11-.273.11-.576-.001-.849ZM3.724 3.541l12.73 12.584-.886.874-1.13-1.117a10.923 10.923 0 0 1-4.438.96 10.804 10.804 0 0 1-7.476-2.956 10.265 10.265 0 0 1-2.44-3.542 1.117 1.117 0 0 1 0-.847 10.35 10.35 0 0 1 3.453-4.392l-.7-.692.887-.872Zm9.766 11.403-1.59-1.57a3.936 3.936 0 0 1-1.9.502 4.024 4.024 0 0 1-2.829-1.159A3.932 3.932 0 0 1 6 9.922c.004-.66.179-1.306.508-1.879L4.447 6.005a9.065 9.065 0 0 0-3.208 3.961 9.64 9.64 0 0 0 2.151 3.03 9.552 9.552 0 0 0 6.61 2.61 9.669 9.669 0 0 0 3.49-.66ZM7.25 9.922c0 .72.29 1.412.806 1.922.515.51 1.215.796 1.944.797.333 0 .664-.063.974-.183L7.434 8.96a2.609 2.609 0 0 0-.184.962Z"></path>`,
  '0 0 20 20',
  'hide-outline'
);
const { svg: Mo } = ut();
var Ho = _t(
  Mo`<path d="m19.742 15.32-3.52-5.09c.46-.93.73-1.97.73-3.07 0-3.83-3.12-6.95-6.95-6.95s-6.95 3.12-6.95 6.95c0 1.1.27 2.14.73 3.07l-3.53 5.09c-.13.19-.15.43-.04.64.1.2.31.34.54.34l3.24.09 1.2 3.01c.09.22.29.37.52.39h.06c.21 0 .41-.1.52-.28l3.56-5.42.15-.23.15.23 3.56 5.42c.12.18.31.28.52.28h.06c.23-.02.43-.17.52-.39l1.2-3.01 3.24-.09c.23 0 .44-.14.54-.34.1-.21.09-.45-.04-.64h-.01Zm-13.84 2.51-.91-2.28a.607.607 0 0 0-.56-.39l-2.5-.07 2.56-3.7a7.017 7.017 0 0 0 3.97 2.55l-2.56 3.9v-.01Zm4.1-4.97c-.24 0-.47-.02-.7-.05-.03 0-.06 0-.09-.01a5.702 5.702 0 0 1-3.96-2.5c-.26-.4-.47-.83-.63-1.28a5.72 5.72 0 0 1-.32-1.86c0-3.14 2.56-5.7 5.7-5.7s5.7 2.56 5.7 5.7c0 .65-.12 1.27-.32 1.86a5.702 5.702 0 0 1-4.59 3.78c-.03 0-.06.01-.09.01-.23.03-.46.05-.7.05Zm5.56 2.3c-.25 0-.47.16-.56.39l-.91 2.28-2.56-3.9c1.61-.36 3-1.28 3.97-2.55l2.56 3.7-2.5.07v.01Z"></path>`,
  '0 0 20 20',
  'award-outline'
);
const { svg: xo } = ut();
var yo = _t(
  xo`<path d="M18.88 9.7a1.114 1.114 0 0 0-1.006-.7H14V2.123A1.125 1.125 0 0 0 12.877 1H7.123A1.125 1.125 0 0 0 6 2.123V9H2.123a1.114 1.114 0 0 0-1.005.7 1.25 1.25 0 0 0 .176 1.348l7.872 8.581a1.124 1.124 0 0 0 1.667.003l7.876-8.589A1.248 1.248 0 0 0 18.88 9.7Z"></path>`,
  '0 0 20 20',
  'downvote-fill'
);
const { svg: Lo } = ut();
var Vo = _t(
  Lo`<path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>`,
  '0 0 20 20',
  'downvote-outline'
);
const { svg: _o } = ut();
var Co = _t(
  _o`<path d="M18.706 8.953 10.834.372A1.123 1.123 0 0 0 10 0a1.128 1.128 0 0 0-.833.368L1.29 8.957a1.249 1.249 0 0 0-.171 1.343 1.114 1.114 0 0 0 1.007.7H6v6.877A1.125 1.125 0 0 0 7.123 19h5.754A1.125 1.125 0 0 0 14 17.877V11h3.877a1.114 1.114 0 0 0 1.005-.7 1.251 1.251 0 0 0-.176-1.347Z"></path>`,
  '0 0 20 20',
  'upvote-fill'
);
const { svg: ko } = ut();
var Eo = _t(
  ko`<path d="m18.628 6.73-5.364-5.365a4.626 4.626 0 0 0-6.542 0L1.355 6.73a4.634 4.634 0 0 0 0 6.542l5.367 5.365a4.627 4.627 0 0 0 6.542 0l5.364-5.365a4.627 4.627 0 0 0 0-6.542ZM11.162 5l-.28 6.747H9.117L8.837 5h2.325Zm-.038 9.536a1.29 1.29 0 0 1-.462.472 1.24 1.24 0 0 1-.655.178 1.286 1.286 0 1 1 1.117-.65Z"></path>`,
  '0 0 20 20',
  'spoiler-fill'
);
const { svg: So } = ut();
var Bo = _t(
  So`<path d="M2.25 19.775H1V2.193l.353-.171a10.293 10.293 0 0 1 8.919 0 9.054 9.054 0 0 0 7.7.061l.309-.144.385.188a.715.715 0 0 1 .334.606V14.79l-.353.17a10.286 10.286 0 0 1-8.919 0 9.033 9.033 0 0 0-7.478-.16v4.975Zm3.562-6.956a10.23 10.23 0 0 1 4.46 1.016A9.04 9.04 0 0 0 17.75 14V3.531a10.17 10.17 0 0 1-8.022-.384 9.037 9.037 0 0 0-7.478-.162v10.468c1.14-.42 2.347-.635 3.562-.634Z"></path>`,
  '0 0 20 20',
  'report-outline'
);
const { svg: Oo } = ut();
var Po = _t(
  Oo`<path d="M14.558 12.942 10 8.384l-4.558 4.558-.884-.884 5-5a.623.623 0 0 1 .884 0l5 5-.884.884Z"></path>`,
  '0 0 20 20',
  'caret-up-outline'
);
const { svg: To } = ut();
var zo = _t(
  To`<path d="M7.5 15.583a.72.72 0 0 1-.513-.212L1.558 9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884-10.93 10.929a.723.723 0 0 1-.512.212Z"></path>`,
  '0 0 20 20',
  'checkmark-outline'
);
const { svg: No } = ut();
var Ro = _t(
  No`<g clip-path="url(#a)"><path d="M19.773 8.518a3.1 3.1 0 0 1-.93 1.711l-.034.034-.005.115a5.548 5.548 0 0 1-2.285 4.2l.008-1.709a4 4 0 0 0 1.028-2.531l.025-.613.393-.4a1.856 1.856 0 0 0 .534-1.857 1.894 1.894 0 0 0-1.872-1.401c-.335 0-.663.097-.943.281l-.335.219-.339-.212a9.46 9.46 0 0 0-4.639-1.332h-.706A9.46 9.46 0 0 0 5 6.338l-.329.205-.33-.206a1.959 1.959 0 0 0-.979-.271 1.926 1.926 0 0 0-1.9 1.521 1.829 1.829 0 0 0 .543 1.723l.407.423.025.588a4.643 4.643 0 0 0 2.488 3.767L4.056 15a5.782 5.782 0 0 1-2.869-4.64v-.1l-.06-.06a3.058 3.058 0 0 1-.9-1.687 3.146 3.146 0 0 1 .015-1.174 3.179 3.179 0 0 1 3.123-2.523c.444.002.884.096 1.29.276A10.875 10.875 0 0 1 9.5 3.784l.593-2.54a1.037 1.037 0 0 1 1.229-.785l2.043.434a1.3 1.3 0 0 1 1.022-.517 1.325 1.325 0 1 1 0 2.65 1.313 1.313 0 0 1-1.238-.9l-1.885-.4-.485 2.082A10.8 10.8 0 0 1 15.36 5.1a2.975 2.975 0 0 1 1.275-.287 3.18 3.18 0 0 1 3.127 2.535c.077.386.08.783.011 1.17Zm-9.22 3.557v1.25h2.353l-2.855 3-1.524-1.6a1.468 1.468 0 0 0-2.125 0l-3.651 3.841.906.863 3.651-3.845a.214.214 0 0 1 .313 0L9.6 17.658a.628.628 0 0 0 .907 0l3.171-3.328v2.27h1.25v-3.768a.757.757 0 0 0-.756-.757h-3.619Z"></path></g><defs><clipPath id="a"><path d="M0 0H20V20H0z"></path></clipPath></defs>`,
  '0 0 20 20',
  'boost-outline'
);
const { svg: Uo } = ut();
var Io = _t(
  Uo`<path d="m4.134 3.25 4.933 4.933-.884.884L3.25 4.134v3.491H2v-5A.625.625 0 0 1 2.625 2h5v1.25H4.134Zm12.616 9.125v3.491l-4.933-4.933-.884.884 4.933 4.933h-3.491V18h5a.624.624 0 0 0 .625-.625v-5h-1.25Z"></path>`,
  '0 0 20 20',
  'expand-left-outline'
);
const { svg: jo } = ut();
var Do = _t(
  jo`<path d="M10 13.5a1 1 0 0 1-.707-.293l-5-5 1.414-1.414L10 11.086l4.293-4.293 1.414 1.414-5 5A1 1 0 0 1 10 13.5Z"></path>`,
  '0 0 20 20',
  'caret-down-fill'
);
const { svg: qo } = ut();
var Go = _t(
  qo`<path d="M14.293 13.207 10 8.914l-4.293 4.293-1.414-1.414 5-5a1 1 0 0 1 1.414 0l5 5-1.414 1.414Z"></path>`,
  '0 0 20 20',
  'caret-up-fill'
);
const Wo = Wa(
  'icon-radio-button',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 19a8.99 8.99 0 1 1 .017-17.982A8.99 8.99 0 0 1 10 19Zm0-16.746a7.748 7.748 0 1 0 7.601 9.258A7.745 7.745 0 0 0 10 2.254Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 19a8.99 8.99 0 1 1 .017-17.982A8.99 8.99 0 0 1 10 19Zm0-16.746a7.748 7.748 0 1 0 7.601 9.258A7.745 7.745 0 0 0 10 2.254Zm3.536 4.21a5 5 0 1 0-7.07 7.072 5 5 0 0 0 7.07-7.072Z"/></svg>')}`
);
var Fo = Object.freeze({ __proto__: null, IconRadioButton: Wo });
Wa(
  'icon-caret-down',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.5a1 1 0 0 1-.707-.293l-5-5 1.414-1.414L10 11.086l4.293-4.293 1.414 1.414-5 5A1 1 0 0 1 10 13.5Z"/></svg>')}`
);
const { svg: Ko } = ut();
var Xo = _t(
  Ko`<path d="M19.75 18.337 15.213 13.8a8.522 8.522 0 1 0-1.413 1.413l4.537 4.537 1.413-1.413Zm-11.2-3.291a6.497 6.497 0 1 1 6.496-6.497 6.504 6.504 0 0 1-6.497 6.497Z"></path>`,
  '0 0 20 20',
  'search-fill'
);
Wa(
  'icon-search',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.5 18.616 14.985 14.1a8.528 8.528 0 1 0-.884.884l4.515 4.515.884-.884ZM1.301 8.553a7.253 7.253 0 1 1 7.252 7.253 7.261 7.261 0 0 1-7.252-7.253Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.75 18.337 15.213 13.8a8.522 8.522 0 1 0-1.413 1.413l4.537 4.537 1.413-1.413Zm-11.2-3.291a6.497 6.497 0 1 1 6.496-6.497 6.504 6.504 0 0 1-6.497 6.497Z"/></svg>')}`
);
const { svg: Jo } = ut();
var Yo = _t(
  Jo`<path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0ZM7 18.209a8.664 8.664 0 0 1-1.5-.719V14H7v4.209Zm4 .479c-.332.04-.666.06-1 .062-.169 0-.334-.016-.5-.025V10H11v8.688Zm4-1.517c-.471.33-.973.612-1.5.843V6H15v11.171Z"></path>`,
  '0 0 20 20',
  'all-fill'
);
const { svg: Qo } = ut();
var an = _t(
  Qo`<path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm5 17.171V6h-1.25v11.894a8.66 8.66 0 0 1-2.75.794V10H9.75v8.737A8.684 8.684 0 0 1 6.47 18H7v-4H5.75v3.642a8.753 8.753 0 1 1 9.25-.471Z"></path>`,
  '0 0 20 20',
  'all-outline'
);
const { svg: tn } = ut();
var ln = _t(
  tn`<path d="m19.724 6.765-9.08-6.11A1.115 1.115 0 0 0 9.368.647L.276 6.765a.623.623 0 0 0 .35 1.141h.444v10.001c.001.278.113.544.31.74.196.195.462.304.739.303h5.16a.704.704 0 0 0 .706-.707v-4.507c0-.76 1.138-1.475 2.02-1.475.882 0 2.02.715 2.02 1.475v4.507a.71.71 0 0 0 .707.707h5.16c.274-.001.538-.112.732-.307.195-.195.305-.46.306-.736v-10h.445a.618.618 0 0 0 .598-.44.625.625 0 0 0-.25-.702Z"></path>`,
  '0 0 20 20',
  'home-fill'
);
const { svg: en } = ut();
var on = _t(
  en`<path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm4 13.791L10.812 10.6l-6.245 6.247a8.92 8.92 0 0 1-1.414-1.414L9.4 9.188 6.209 6h7.778l.013.638v7.153Z"></path>`,
  '0 0 20 20',
  'popular-fill'
);
const { svg: nn } = ut();
var sn = _t(
  nn`<path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm0 18.75a8.7 8.7 0 0 1-5.721-2.145l8.471-8.471v4.148H14V6.638A.647.647 0 0 0 13.362 6H7.718v1.25h4.148L3.4 15.721A8.739 8.739 0 1 1 10 18.75Z"></path>`,
  '0 0 20 20',
  'popular-outline'
);
const { svg: rn } = ut();
var vn = _t(
  rn`<path d="m10.513 5.63 3.929 3.928-.884.884-2.933-2.933V19h-1.25V7.51l-2.933 2.932-.884-.884L9.67 5.446l.589-.029.254.212Zm5.859-1.482A6.876 6.876 0 0 0 10 0a6.876 6.876 0 0 0-6.372 4.148A4.639 4.639 0 0 0 0 8.625a4.716 4.716 0 0 0 4.792 4.625V12A3.465 3.465 0 0 1 1.25 8.625 3.412 3.412 0 0 1 4.189 5.31l.364-.06.123-.35A5.607 5.607 0 0 1 10 1.25a5.607 5.607 0 0 1 5.324 3.65l.123.348.364.06a3.412 3.412 0 0 1 2.939 3.317A3.465 3.465 0 0 1 15.208 12v1.25A4.716 4.716 0 0 0 20 8.625a4.639 4.639 0 0 0-3.628-4.477Z"></path>`,
  '0 0 20 20',
  'upload-outline'
);
const { svg: dn } = ut();
var hn = _t(
  dn`<path d="m4.47 7.123 2.653-1.26h.47V14.5H6.15V7.668l-1.68.8V7.123Zm9.9 3.69a2.288 2.288 0 0 1-.02 2.54 2.7 2.7 0 0 1-1.085.91 3.699 3.699 0 0 1-3.068 0A2.774 2.774 0 0 1 9.1 13.35a2.253 2.253 0 0 1-.019-2.532c.257-.383.61-.69 1.025-.893A2.372 2.372 0 0 1 9.4 9.11a2.21 2.21 0 0 1-.257-1.048 2.1 2.1 0 0 1 .342-1.175c.233-.353.557-.637.938-.82.409-.202.86-.305 1.315-.3.451-.005.897.098 1.3.3.377.185.697.468.926.82.227.352.345.762.34 1.18a2.2 2.2 0 0 1-.255 1.05 2.3 2.3 0 0 1-.706.8c.415.202.77.512 1.026.896ZM12.54 13.2c.235-.11.437-.28.583-.495.142-.207.216-.454.214-.705a1.267 1.267 0 0 0-.205-.7 1.468 1.468 0 0 0-.57-.51 1.776 1.776 0 0 0-.83-.19c-.29-.004-.577.061-.836.19a1.5 1.5 0 0 0-.583.513 1.262 1.262 0 0 0 .003 1.4c.147.216.348.388.583.5.256.124.537.186.821.182a1.86 1.86 0 0 0 .82-.185Zm-1.474-6.083a1.194 1.194 0 0 0-.468.422 1.11 1.11 0 0 0-.173.615c-.002.224.058.444.173.636.113.192.275.35.468.46.201.114.429.173.66.17.23.002.456-.055.656-.167a1.233 1.233 0 0 0 .638-1.099 1.132 1.132 0 0 0-.635-1.037 1.507 1.507 0 0 0-1.319 0ZM10 19.988a4.616 4.616 0 0 1-3.27-1.352l-5.366-5.365a4.627 4.627 0 0 1 0-6.542L6.73 1.364a4.634 4.634 0 0 1 6.542 0l5.366 5.365a4.634 4.634 0 0 1 0 6.542l-5.366 5.365a4.615 4.615 0 0 1-3.27 1.352Zm0-18.726a3.362 3.362 0 0 0-2.386.987L2.25 7.614a3.374 3.374 0 0 0 0 4.772l5.366 5.365a3.38 3.38 0 0 0 4.773 0l5.365-5.365a3.375 3.375 0 0 0 0-4.772L12.387 2.25A3.364 3.364 0 0 0 10 1.262Z"></path>`,
  '0 0 20 20',
  'nsfw-outline'
);
const { svg: cn } = ut();
var un = _t(
  cn`<path d="M19.938 9.212a3.251 3.251 0 0 0-3.177-2.643 2.935 2.935 0 0 0-1.3.3 10.806 10.806 0 0 0-4.838-1.38l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.128 1.128 0 0 0-1.333.862L9.343 5.5A10.779 10.779 0 0 0 4.55 6.857a3.206 3.206 0 0 0-1.314-.289A3.25 3.25 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.566l.006-.139.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.063-.809-.015-1.207Z"></path>`,
  '0 0 20 20',
  'admin-fill'
);
const { svg: pn } = ut();
var mn = _t(
  pn`<path d="M19.938 9.211a3.25 3.25 0 0 0-3.177-2.642c-.45 0-.895.102-1.3.3a10.812 10.812 0 0 0-4.838-1.379l.81-3.741 2.444.519a1.492 1.492 0 1 0 .2-1.235L11.572.5a1.13 1.13 0 0 0-1.333.862L9.343 5.5a10.77 10.77 0 0 0-4.791 1.357 3.214 3.214 0 0 0-1.315-.289A3.248 3.248 0 0 0 .064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 0 0 .912 1.754l.066.071v.127c.076 3.69 4.013 6.582 8.975 6.582 4.961 0 8.89-2.889 8.965-6.567l.006-.138.044-.046a3.252 3.252 0 0 0 .939-1.778c.067-.4.062-.81-.015-1.208Zm-1.221 1c-.075.42-.282.805-.59 1.1l-.392.407-.024.625c-.061 3-3.45 5.354-7.716 5.354-4.267 0-7.66-2.353-7.717-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.571-1.087a2.138 2.138 0 0 1 .012-.765 2 2 0 0 1 1.942-1.623c.353.003.698.102 1 .286l.337.216.334-.22a9.435 9.435 0 0 1 4.758-1.381h.719a9.427 9.427 0 0 1 4.726 1.4l.347.225.343-.232a1.7 1.7 0 0 1 .96-.3 2 2 0 0 1 1.949 1.629c.049.253.051.512.007.766v.004Z"></path>`,
  '0 0 20 20',
  'admin-outline'
);
const { svg: gn } = ut();
var $n = _t(
  gn`<path d="M16.375 8H15V5.312A5.17 5.17 0 0 0 10 0a5.169 5.169 0 0 0-5 5.312V8H3.625A1.629 1.629 0 0 0 2 9.63v7.74A1.629 1.629 0 0 0 3.625 19h12.75A1.629 1.629 0 0 0 18 17.37V9.63A1.629 1.629 0 0 0 16.375 8Zm-3.25 0h-6.25V5.313A3.3 3.3 0 0 1 10 1.875a3.3 3.3 0 0 1 3.125 3.438V8Z"></path>`,
  '0 0 20 20',
  'lock-fill'
);
const { svg: Zn } = ut();
var An = _t(
  Zn`<path d="M15.954 6.894A10.6 10.6 0 0 0 12 6.125c-.339 0-.673.031-1.007.063-.013-.15-.037-.3-.074-.446a3.016 3.016 0 0 0-3.682-2.068 2.917 2.917 0 0 0-2.125 3.582c.103.37.278.716.516 1.018a10.226 10.226 0 0 0-2.323 2.415A8.615 8.615 0 0 1 1.97 9.683 8.192 8.192 0 0 1 .211 7.377a1.94 1.94 0 0 1 0-1.753A8.757 8.757 0 0 1 8.014 1a8.679 8.679 0 0 1 7.735 4.5c.226.428.298.92.205 1.394Zm3.654 7.6a8.198 8.198 0 0 1-2 2.488 8.78 8.78 0 0 1-11.55-.3 8.174 8.174 0 0 1-1.729-2.309 1.968 1.968 0 0 1 0-1.745A8.586 8.586 0 0 1 12 8a8.5 8.5 0 0 1 7.6 4.5 2.143 2.143 0 0 1 .01 1.991v.003Zm-4.759-1.752a2.947 2.947 0 1 0-2.086 3.583 2.923 2.923 0 0 0 2.086-3.583Z"></path>`,
  '0 0 20 20',
  'views-fill'
);
const { svg: wn } = ut();
var fn = _t(
  wn`<path d="M5.8 9.25H.038A10 10 0 0 1 9.22.039C7.114.879 5.93 5.068 5.8 9.25Zm8.393 0h5.766A10 10 0 0 0 10.78.039c2.106.84 3.29 5.029 3.421 9.211h-.007ZM10 1.375c-1.052 0-2.553 3.045-2.7 7.875h5.4c-.148-4.83-1.649-7.875-2.7-7.875Zm0 17.25c1.051 0 2.552-3.045 2.7-7.875H7.3c.147 4.83 1.648 7.875 2.7 7.875ZM5.8 10.75H.038a10 10 0 0 0 9.182 9.211c-2.106-.84-3.29-5.029-3.42-9.211Zm4.976 9.211a10 10 0 0 0 9.183-9.211H14.2c-.13 4.182-1.315 8.371-3.42 9.211h-.004Z"></path>`,
  '0 0 20 20',
  'world-fill'
);
const { svg: bn } = ut();
var Mn = _t(
  bn`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm8.718 9.375h-4.645c-.075-3.017-.7-6.051-1.819-7.82a8.755 8.755 0 0 1 6.464 7.82ZM10 18.75c-1.138 0-2.7-3.077-2.824-8.125h5.647C12.7 15.673 11.137 18.75 10 18.75ZM7.176 9.375C7.3 4.327 8.862 1.25 10 1.25s2.7 3.077 2.823 8.125H7.176Zm.569-7.82C6.625 3.324 6 6.359 5.926 9.375H1.282a8.756 8.756 0 0 1 6.463-7.82Zm-6.463 9.07h4.644c.075 3.016.7 6.051 1.819 7.82a8.756 8.756 0 0 1-6.463-7.82Zm10.972 7.82c1.12-1.769 1.744-4.8 1.819-7.82h4.645a8.754 8.754 0 0 1-6.464 7.82Z"></path>`,
  '0 0 20 20',
  'world-outline'
);
const { svg: Hn } = ut();
var xn = _t(
  Hn`<path d="M19.943 7.659a1.142 1.142 0 0 0-.871-.771l-5.4-1.046L11 1.024a1.191 1.191 0 0 0-2 0L6.333 5.842.928 6.888a1.145 1.145 0 0 0-.619 1.9l3.757 4.024-.674 5.468a1.144 1.144 0 0 0 1.62 1.178L10 17.127l4.988 2.331a1.145 1.145 0 0 0 1.62-1.177l-.674-5.464 3.757-4.024a1.14 1.14 0 0 0 .252-1.134Z"></path>`,
  '0 0 20 20',
  'star-fill'
);
const { svg: yn } = ut();
var Ln = _t(
  yn`<path d="M15.473 19.566c-.168 0-.333-.036-.485-.107L10 17.127l-4.988 2.332a1.145 1.145 0 0 1-1.62-1.179l.674-5.463L.309 8.793a1.145 1.145 0 0 1 .619-1.9l5.405-1.051L9 1.024a1.192 1.192 0 0 1 2 0l2.665 4.818 5.4 1.046a1.145 1.145 0 0 1 .619 1.9l-3.757 4.024.674 5.464a1.143 1.143 0 0 1-1.135 1.285l.007.005ZM10 15.748l5.345 2.5-.724-5.855 4.026-4.313-5.791-1.122L10 1.8 7.144 6.958 1.353 8.08l4.026 4.311-.724 5.855L10 15.748Z"></path>`,
  '0 0 20 20',
  'star-outline'
);
const { svg: Vn } = ut();
var _n = _t(
  Vn`<path d="M18.178 4.406 10.8.21a1.637 1.637 0 0 0-1.6.001L1.82 4.406A1.628 1.628 0 0 0 1 5.818v8.364a1.627 1.627 0 0 0 .82 1.412L9.2 19.79a1.64 1.64 0 0 0 1.607 0l7.374-4.2A1.628 1.628 0 0 0 19 14.182V5.818a1.627 1.627 0 0 0-.82-1.412ZM11 10.578v5.29H9v-5.29L4.213 7.814l.187-.325.812-1.407L10 8.845l4.787-2.763.811 1.407.188.325L11 10.578Z"></path>`,
  '0 0 20 20',
  'blockchain-fill'
);
const { svg: Cn } = ut();
var kn = _t(
  Cn`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm1.081 15.418H8.92V8.062h2.161v7.356Zm.065-8.859a1.307 1.307 0 0 1-1.139.656 1.29 1.29 0 0 1-.67-.178 1.343 1.343 0 0 1-.475-1.811c.113-.197.277-.36.475-.472a1.344 1.344 0 0 1 1.326.008 1.321 1.321 0 0 1 .483 1.797Z"></path>`,
  '0 0 20 20',
  'info-fill'
);
const { svg: En } = ut();
var Sn = _t(
  En`<path d="M11 15h2v2.875A1.127 1.127 0 0 1 11.875 19h-9.75A1.127 1.127 0 0 1 1 17.875v-9.75A1.127 1.127 0 0 1 2.125 7H5v2H3v8h8v-2Zm8-12.875v9.75A1.126 1.126 0 0 1 17.875 13h-9.75A1.126 1.126 0 0 1 7 11.875v-9.75A1.127 1.127 0 0 1 8.125 1h9.75A1.127 1.127 0 0 1 19 2.125ZM9 3v8h8V3H9Z"></path>`,
  '0 0 20 20',
  'duplicate-fill'
);
const { svg: Bn } = ut();
var On = _t(
  Bn`<path d="m11.793 15.707-5-5a1 1 0 0 1 0-1.414l5-5 1.414 1.414L8.914 10l4.293 4.293-1.414 1.414Z"></path>`,
  '0 0 20 20',
  'caret-left-fill'
);
const { svg: Pn } = ut();
var Tn = _t(
  Pn`<path d="m8.207 15.707-1.414-1.414L11.086 10 6.793 5.707l1.414-1.414 5 5a1 1 0 0 1 0 1.414l-5 5Z"></path>`,
  '0 0 20 20',
  'caret-right-fill'
);
const { svg: zn } = ut();
var Nn = _t(
  zn`<path d="M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625 0 0 0 0 .884l9 9 .884-.884-7.933-7.933H19v-1.25Z"></path>`,
  '0 0 20 20',
  'back-outline'
);
const { svg: Rn } = ut();
var Un = _t(
  Rn`<path d="m19.442 9.558-9-9-.884.884 7.933 7.933H1v1.25h16.491l-7.933 7.933.884.884 9-9a.623.623 0 0 0 0-.884Z"></path>`,
  '0 0 20 20',
  'forward-outline'
);
const { svg: In } = ut();
var jn = _t(
  In`<path d="m12.058 15.442-5-5a.624.624 0 0 1 0-.884l5-5 .884.884L8.384 10l4.558 4.558-.884.884Z"></path>`,
  '0 0 20 20',
  'caret-left-outline'
);
const { svg: Dn } = ut();
var qn = _t(
  Dn`<path d="m5.993 6.76 7.136 7.14-1.645 1.646a2.141 2.141 0 0 1-2.962 0l-.551-.55-3.1 3.873a2.737 2.737 0 1 1-3.846-3.846l3.873-3.1-.551-.552a2.1 2.1 0 0 1 0-2.962L5.993 6.76Zm13.76-.64A14.555 14.555 0 0 0 13.77.133a1.16 1.16 0 0 0-1.357.205L6.877 5.876l7.136 7.136 5.536-5.535a1.159 1.159 0 0 0 .205-1.358Z"></path>`,
  '0 0 20 20',
  'appearance-fill'
);
const { svg: Gn } = ut();
var Wn = _t(
  Gn`<path d="M19.493 1.615a.629.629 0 0 0-.493-.24h-.877c-2.688 0-5.365-.33-7.972-.98a.594.594 0 0 0-.3 0c-2.608.65-5.285.98-7.972.98h-.88a.624.624 0 0 0-.605.776 32.91 32.91 0 0 1 .98 7.972v3.851a4.089 4.089 0 0 0 4.085 4.084 6.764 6.764 0 0 1 4.155 1.434.627.627 0 0 0 .772 0 6.764 6.764 0 0 1 4.155-1.434 4.09 4.09 0 0 0 4.084-4.084v-3.85c0-2.688.33-5.365.98-7.973a.625.625 0 0 0-.112-.536Zm-2.118 12.36a2.837 2.837 0 0 1-2.834 2.833A8.022 8.022 0 0 0 10 18.225V9.5H2.608a34.2 34.2 0 0 0-.817-6.875h.086c2.737 0 5.464-.33 8.123-.98V9.5h7.392c0 .208-.017.415-.017.623v3.851Z"></path>`,
  '0 0 20 20',
  'premium-fill'
);
const { svg: Fn } = ut();
var Kn = _t(
  Fn`<path d="M15.875 8H2.125A1.127 1.127 0 0 1 1 6.875v-4.75A1.127 1.127 0 0 1 2.125 1h13.75A1.127 1.127 0 0 1 17 2.125v4.75A1.127 1.127 0 0 1 15.875 8ZM18 3.5v4.4a1.078 1.078 0 0 1-.937.972l-6.519 1.3A3.074 3.074 0 0 0 8 13.1v.022a1.625 1.625 0 0 0-1 1.5v2.75A1.627 1.627 0 0 0 8.625 19h.75A1.627 1.627 0 0 0 11 17.375v-2.75a1.625 1.625 0 0 0-1-1.5V13.1a1.078 1.078 0 0 1 .937-.972l6.519-1.3A3.074 3.074 0 0 0 20 7.9V3.5h-2Z"></path>`,
  '0 0 20 20',
  'topic-diy-fill'
);
const { svg: Xn } = ut();
var Jn = _t(
  Xn`<path d="m19.683 5.252-3.87-3.92a1.128 1.128 0 0 0-.8-.332h-1.55a1.093 1.093 0 0 0-1.1.91 1.9 1.9 0 0 1-3.744 0A1.094 1.094 0 0 0 7.533 1h-1.55c-.3 0-.588.12-.8.332L1.317 5.253a1.1 1.1 0 0 0 .014 1.557l1.87 1.829a1.121 1.121 0 0 0 1.48.076l.32-.24v1.936c.344-.31.786-.49 1.25-.511V5.977L3.993 7.668l-1.68-1.646L6.036 2.25H7.42a3.156 3.156 0 0 0 6.16 0h1.383l3.723 3.772-1.7 1.668-2.236-1.749v8.138c.501.337.927.774 1.25 1.284V8.509l.338.264a1.117 1.117 0 0 0 1.436-.109l1.894-1.853a1.101 1.101 0 0 0 .015-1.559ZM13.691 20H1.31A1.325 1.325 0 0 1 0 18.663v-4.916a1.03 1.03 0 0 1 .5-.884.988.988 0 0 1 .98-.014 3 3 0 0 0 3.3-.266c.334-.342.649-.702.944-1.078a.624.624 0 0 1 .775-.163l6.75 3.5A2.945 2.945 0 0 1 15 17.584v1.079A1.325 1.325 0 0 1 13.691 20Zm-12.44-5.873v4.536c0 .054.033.087.058.087h12.382c.025 0 .06-.033.06-.087v-1.079a1.72 1.72 0 0 0-1.035-1.609l-6.349-3.29a9.24 9.24 0 0 1-.76.831 4.235 4.235 0 0 1-4.357.611Zm4.022 4.042-.9-.862 3.138-3.3.9.862-3.138 3.3Zm3.04 0-.913-.857 2.09-2.219.91.857-2.088 2.219Z"></path>`,
  '0 0 20 20',
  'avatar-style-outline'
);
const { svg: Yn } = ut();
var Qn = _t(
  Yn`<path d="M11.875 4h-8.15l1.86-1.549-.8-.96L1.6 4.145a.625.625 0 0 0 0 .96l3.185 2.654.8-.96-1.86-1.549h8.15A5.821 5.821 0 0 1 17.75 11a5.82 5.82 0 0 1-5.875 5.75h-9.8V18h9.8A7.07 7.07 0 0 0 19 11a7.07 7.07 0 0 0-7.125-7Z"></path>`,
  '0 0 20 20',
  'reverse-outline'
);
Wa(
  'icon-caret-left',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m12.058 15.442-5-5a.624.624 0 0 1 0-.884l5-5 .884.884L8.384 10l4.558 4.558-.884.884Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m11.793 15.707-5-5a1 1 0 0 1 0-1.414l5-5 1.414 1.414L8.914 10l4.293 4.293-1.414 1.414Z"/></svg>')}`
);
Wa(
  'icon-caret-right',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m7.942 15.442-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 0 1 0 .884l-5 5Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m8.207 15.707-1.414-1.414L11.086 10 6.793 5.707l1.414-1.414 5 5a1 1 0 0 1 0 1.414l-5 5Z"/></svg>')}`
);
const { svg: ai } = ut();
var ti = _t(
  ai`<path d="M18.386 19H1.614A1.616 1.616 0 0 1 0 17.387V8.614A1.616 1.616 0 0 1 1.614 7h16.772A1.616 1.616 0 0 1 20 8.614v8.773A1.616 1.616 0 0 1 18.386 19ZM1.614 8.25a.364.364 0 0 0-.364.364v8.773a.364.364 0 0 0 .364.363h16.772a.364.364 0 0 0 .364-.363V8.614a.364.364 0 0 0-.364-.364H1.614ZM17 4H3v1.25h14V4Zm-3-3H6v1.25h8V1Z"></path>`,
  '0 0 20 20',
  'collection-outline'
);
const { svg: li } = ut();
var ei = _t(
  li`<path d="m5.27.733-3.5 8.45h1.216L3.9 7.017h3.62l.917 2.166h1.3l-3.5-8.45H5.27Zm1.837 5.25H4.319L5.75 2.518l1.356 3.465Zm11.08 11.91v1.092h-6.534v-.38l.018-.026 4.415-6.472h-4.15v-1.092h6.155v.38l-.018.026-4.415 6.472h4.528ZM12.93 4.579l-.94-.824L14.41 1a.625.625 0 0 1 .463-.213.562.562 0 0 1 .469.2l2.5 2.75-.925.842-2.03-2.234-1.954 2.234ZM7.744 15.254l.938.826-2.5 2.833a.626.626 0 0 1-.47.212.625.625 0 0 1-.47-.22l-2.422-2.833.952-.81 1.949 2.284 2.023-2.292Z"></path>`,
  '0 0 20 20',
  'sort-az-outline'
);
const { svg: oi } = ut();
var ni = _t(
  oi`<path d="M15.4 10.733h-.967l-3.5 8.45h1.216l.917-2.166h3.617l.917 2.166h1.3l-3.5-8.45Zm.87 5.25h-2.784l1.431-3.465 1.352 3.465ZM4.493 7.861H9.02v1.085H2.487v-.378l.02-.027 4.411-6.409H2.771V1.048h6.154v.377l-.019.027-4.412 6.409Zm12.422-3.273-2.03-2.234-1.954 2.225-.94-.824L14.41 1a.625.625 0 0 1 .464-.213.534.534 0 0 1 .468.2l2.5 2.75-.925.851ZM5.712 19.125a.629.629 0 0 1-.47-.22l-2.423-2.833.952-.81 1.95 2.284 2.022-2.292.938.826-2.5 2.833a.626.626 0 0 1-.469.212Z"></path>`,
  '0 0 20 20',
  'sort-za-outline'
);
const { svg: ii } = ut();
var si = _t(
  ii`<path d="m13.058 19.442-9-9a.624.624 0 0 1 0-.884l9-9 .884.884L5.384 10l8.558 8.558-.884.884Z"></path>`,
  '0 0 20 20',
  'left-outline'
);
const { svg: ri } = ut();
var vi = _t(
  ri`<path d="M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0ZM1.25 10A8.7 8.7 0 0 1 3.4 4.279l12.321 12.326A8.737 8.737 0 0 1 1.25 10Zm15.355 5.721L4.279 3.4a8.737 8.737 0 0 1 12.326 12.321Z"></path>`,
  '0 0 20 20',
  'remove-outline'
);
Wa(
  'icon-back',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625 0 0 0 0 .884l9 9 .884-.884-7.933-7.933H19v-1.25Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 9H3.914l7.293-7.293L9.793.293l-9 9a1 1 0 0 0 0 1.414l9 9 1.414-1.414L3.914 11H19V9Z"/></svg>')}`
);
Wa(
  'icon-forward',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m19.442 9.558-9-9-.884.884 7.933 7.933H1v1.25h16.491l-7.933 7.933.884.884 9-9a.623.623 0 0 0 0-.884Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m19.207 9.293-9-9-1.414 1.414L16.086 9H1v2h15.086l-7.293 7.293 1.414 1.414 9-9a1 1 0 0 0 0-1.414Z"/></svg>')}`
);
Wa(
  'icon-tag',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.973 19.844a1.624 1.624 0 0 1-1.15-.472L.629 13.177A1.632 1.632 0 0 1 .61 10.9l9.107-9.4a1.631 1.631 0 0 1 1.168-.5h6.49A1.627 1.627 0 0 1 19 2.625v6.491a1.633 1.633 0 0 1-.5 1.168l-9.4 9.1c-.301.294-.706.46-1.127.46ZM10.885 2.25a.38.38 0 0 0-.271.114l-9.1 9.4a.375.375 0 0 0 0 .525l6.194 6.195a.377.377 0 0 0 .526 0l9.4-9.106a.374.374 0 0 0 .114-.269V2.625a.375.375 0 0 0-.375-.375h-6.488ZM14.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.375 1h-6.49a1.632 1.632 0 0 0-1.168.5L.61 10.9a1.632 1.632 0 0 0 .019 2.28l6.194 6.2a1.634 1.634 0 0 0 2.28.017l9.4-9.1A1.633 1.633 0 0 0 19 9.116V2.625A1.627 1.627 0 0 0 17.375 1Zm-3.289 6.914a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>')}`
);
const { svg: di } = ut();
var hi = _t(
  di`<path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>`,
  '0 0 20 20',
  'overflow-horizontal-fill'
);
const { svg: ci } = ut();
var ui = _t(
  ci`<path d="M7.391 12.832a5.465 5.465 0 0 0-1.633.6 6.14 6.14 0 1 1 8.484 0 5.465 5.465 0 0 0-1.633-.6 4.64 4.64 0 1 0-5.218 0ZM4.7 14.192a7.424 7.424 0 1 1 10.594 0c.373.339.702.724.978 1.145a8.924 8.924 0 1 0-12.55 0c.276-.421.605-.806.978-1.145ZM11.581 14H8.419A4.569 4.569 0 0 0 4 18.7v.34a.953.953 0 0 0 .941.96h10.118a.953.953 0 0 0 .941-.963V18.7a4.57 4.57 0 0 0-4.419-4.7ZM10 5.583a3.417 3.417 0 1 0 0 6.834 3.417 3.417 0 0 0 0-6.834Z"></path>`,
  '0 0 20 20',
  'brand-awareness-fill'
);
const { svg: pi } = ut();
var mi = _t(
  pi`<path d="M14.249 13.434a5.464 5.464 0 0 0-1.325-.525A4.897 4.897 0 0 0 10 4.08 4.902 4.902 0 0 0 5.348 7.44a4.895 4.895 0 0 0 1.728 5.469 5.464 5.464 0 0 0-1.325.525 6.143 6.143 0 0 1 4.25-10.582 6.149 6.149 0 0 1 5.705 3.855 6.14 6.14 0 0 1-1.455 6.728h-.002Zm-9.782.986A7.744 7.744 0 0 1 10 1.25a7.753 7.753 0 0 1 7.146 4.747 7.742 7.742 0 0 1-1.613 8.423c.295.3.557.629.783.983A8.993 8.993 0 0 0 10 0a9.003 9.003 0 0 0-8.328 5.584 8.99 8.99 0 0 0 2.012 9.82c.226-.355.488-.685.783-.984Zm7.114-.417H8.419A4.57 4.57 0 0 0 4 18.701v.34a.952.952 0 0 0 .941.959h10.118a.954.954 0 0 0 .941-.962V18.7a4.565 4.565 0 0 0-4.419-4.698Zm3.169 4.752h-9.5V18.7a3.32 3.32 0 0 1 3.169-3.45h3.162a3.323 3.323 0 0 1 3.169 3.45v.054ZM10 5.59a3.418 3.418 0 0 0-3.351 4.081 3.414 3.414 0 0 0 4.659 2.489 3.416 3.416 0 0 0 2.109-3.155A3.418 3.418 0 0 0 10 5.59Zm0 5.58a2.168 2.168 0 0 1-2.125-2.588 2.166 2.166 0 0 1 2.954-1.578 2.167 2.167 0 0 1 1.338 2A2.167 2.167 0 0 1 10 11.173Z"></path>`,
  '0 0 20 20',
  'brand-awareness-outline'
);
const { svg: gi } = ut();
var $i = _t(
  gi`<path d="M11 18h1a2 2 0 1 1-4 0h3ZM10 2.25a4.832 4.832 0 0 1 4.819 4.837v1.612a3.956 3.956 0 0 0 1.738 3.266 2.7 2.7 0 0 1 1.192 2.235l1.143 1.143A1.1 1.1 0 0 0 19 14.88v-.672a3.95 3.95 0 0 0-1.737-3.278 2.7 2.7 0 0 1-1.189-2.23l-.005-1.61a6.057 6.057 0 0 0-10.034-4.6l.9.9A4.763 4.763 0 0 1 10 2.25Zm8.558 17.192L15.115 16h-13A1.119 1.119 0 0 1 1 14.88v-.672a3.95 3.95 0 0 1 1.738-3.278A2.7 2.7 0 0 0 3.926 8.7V7.087a6 6 0 0 1 .332-1.936l-3.7-3.7.884-.893 18 18-.884.884Zm-4.693-4.692L5.282 6.166c-.064.302-.098.61-.1.919v1.614a3.956 3.956 0 0 1-1.738 3.266 2.7 2.7 0 0 0-1.194 2.243v.542h11.615Z"></path>`,
  '0 0 20 20',
  'notification-off-outline'
);
const { svg: Zi } = ut();
var Ai = _t(
  Zi`<path d="M7.35 7.333H5.733V6.77h.48V5.23a1.232 1.232 0 0 1-.47.111v-.507c.178.01.353-.05.487-.167h.7v2.1h.419l.003.566Zm-.767 1.92c.164 0 .258.082.258.23 0 .22-.115.276-.516.522-.7.422-.768.806-.768 1.185v.143h1.975v-.564H6.374c.039-.106.149-.236.483-.424.538-.29.659-.581.659-.878 0-.488-.3-.8-.916-.8a1.171 1.171 0 0 0-1.05.633l.479.345a.708.708 0 0 1 .554-.392Zm.536 4.66a.544.544 0 0 0 .383-.545c0-.438-.313-.7-.9-.7a1.435 1.435 0 0 0-1.01.4l.369.427a.824.824 0 0 1 .588-.26c.178 0 .275.081.275.211 0 .156-.1.253-.448.253h-.218v.482h.205c.356 0 .507.086.507.307 0 .162-.1.28-.383.28a.7.7 0 0 1-.566-.334L5.5 14.8a1.22 1.22 0 0 0 1.047.529c.626 0 1.036-.286 1.036-.826a.581.581 0 0 0-.464-.59Zm1.88-3.288h6v-1.25H9v1.25Zm0 4h6v-1.25H9v1.25Zm0-8h6v-1.25H9v1.25Zm9-5.014v17.271A1.123 1.123 0 0 1 16.876 20h-12.7a1.123 1.123 0 0 1-1.125-1.118V4.25h-.875A1.127 1.127 0 0 1 1.05 3.125v-1.5A1.627 1.627 0 0 1 2.675 0h13.7A1.62 1.62 0 0 1 18 1.611ZM2.3 3h.75V1.625a.375.375 0 0 0-.75 0V3Zm14.45-1.389a.369.369 0 0 0-.374-.361H4.252a1.6 1.6 0 0 1 .048.375V18.75h12.45V1.611Z"></path>`,
  '0 0 20 20',
  'rules-outline'
);
const { svg: wi } = ut();
var fi = _t(
  wi`<path d="M15.372 1H4.628A1.629 1.629 0 0 0 3 2.628v16.256a1.113 1.113 0 0 0 1.709.941L10 16.479l5.282 3.34A1.12 1.12 0 0 0 17 18.873V2.628A1.63 1.63 0 0 0 15.372 1Z"></path>`,
  '0 0 20 20',
  'save-fill'
);
const { svg: bi } = ut();
var Mi = _t(
  bi`<path d="M4.114 20A1.117 1.117 0 0 1 3 18.884V2.628A1.629 1.629 0 0 1 4.628 1h10.744A1.63 1.63 0 0 1 17 2.628v16.245a1.12 1.12 0 0 1-1.718.946L10 16.479l-5.291 3.346a1.11 1.11 0 0 1-.595.175Zm.514-17.75a.378.378 0 0 0-.378.378v16.009L10 15l5.75 3.636V2.628a.378.378 0 0 0-.378-.378H4.628Z"></path>`,
  '0 0 20 20',
  'save-outline'
);
const { svg: Hi } = ut();
var xi = _t(
  Hi`<path d="m15.944 11.926-.888.879 1.925 1.945H12A4.873 4.873 0 0 1 7.138 10 4.873 4.873 0 0 1 12 5.25h4.971l-1.915 1.936.888.878L18.875 5.1a.727.727 0 0 0-.007-1.025l-2.929-2.9-.878.888L17.011 4H12a6.128 6.128 0 0 0-6.056 5.25H1v1.625h4.981A6.117 6.117 0 0 0 12 16h5l-1.94 1.92.878.89 2.929-2.9a.726.726 0 0 0 .006-1.025l-2.929-2.96Z"></path>`,
  '0 0 20 20',
  'crosspost-outline'
);
const { svg: yi } = ut();
var Li = _t(
  yi`<path d="M17.882 14h-1.926L11.9 1.386a2 2 0 0 0-3.8 0L4.044 14H2.118A1.099 1.099 0 0 0 1 15.083v2.834A1.1 1.1 0 0 0 2.118 19h15.764A1.101 1.101 0 0 0 19 17.917v-2.834A1.1 1.1 0 0 0 17.882 14Zm-5.168-6H7.286l.562-1.75h4.3L12.714 8Zm.4 1.25.564 1.75H6.322l.562-1.75h6.23ZM9.289 1.769a.747.747 0 0 1 1.422 0L11.75 5h-3.5l1.039-3.231ZM5.92 12.25h8.16l.562 1.75H5.358l.562-1.75Zm11.83 5.5H2.25v-2.5h15.5v2.5Z"></path>`,
  '0 0 20 20',
  'crowd-control-outline'
);
const { svg: Vi } = ut();
var _i = _t(
  Vi`<path d="M10 20a.724.724 0 0 1-.7-.532A12.693 12.693 0 0 0 .53 10.7a.73.73 0 0 1 0-1.4A12.7 12.7 0 0 0 9.3.529a.729.729 0 0 1 1.4 0A12.692 12.692 0 0 0 19.471 9.3a.73.73 0 0 1 0 1.4 12.7 12.7 0 0 0-8.769 8.77A.723.723 0 0 1 10 20Z"></path>`,
  '0 0 20 20',
  'distinguish-fill'
);
const { svg: Ci } = ut();
var ki = _t(
  Ci`<path d="M10 20a.724.724 0 0 1-.7-.532A12.693 12.693 0 0 0 .53 10.7a.73.73 0 0 1 0-1.4A12.7 12.7 0 0 0 9.3.529a.729.729 0 0 1 1.4 0A12.692 12.692 0 0 0 19.471 9.3a.73.73 0 0 1 0 1.4 12.7 12.7 0 0 0-8.769 8.77A.723.723 0 0 1 10 20ZM2.31 10A13.9 13.9 0 0 1 10 17.691 13.9 13.9 0 0 1 17.691 10a13.9 13.9 0 0 1-7.69-7.691A13.9 13.9 0 0 1 2.308 10Z"></path>`,
  '0 0 20 20',
  'distinguish-outline'
);
const { svg: Ei } = ut();
var Si = _t(
  Ei`<path d="M17.375 2H2.625A2.629 2.629 0 0 0 0 4.625v10.75A2.63 2.63 0 0 0 2.625 18h14.75A2.63 2.63 0 0 0 20 15.375V4.625A2.63 2.63 0 0 0 17.375 2Zm1.375 13.375a1.377 1.377 0 0 1-1.375 1.375H2.625a1.377 1.377 0 0 1-1.375-1.375V4.625A1.377 1.377 0 0 1 2.625 3.25h14.75a1.377 1.377 0 0 1 1.375 1.375v10.75Zm-2.2-5.7.029.589-.212.254-2.929 2.929-.884-.884L15.116 10l-2.558-2.558.884-.884 3.108 3.117ZM7.442 7.442 4.884 10l2.558 2.558-.884.884-3.112-3.112-.029-.589.212-.254 2.929-2.929.884.884ZM9.375 6h1.25v8h-1.25V6Z"></path>`,
  '0 0 20 20',
  'embed-outline'
);
const { svg: Bi } = ut();
var Oi = _t(
  Bi`<path d="M19.914 10.349a10.405 10.405 0 0 1-2.862 3.923c-.024.02-.05.038-.075.058l-3.2-3.164c.142-.4.218-.82.223-1.244a3.932 3.932 0 0 0-1.172-2.797A4.024 4.024 0 0 0 10 5.967c-.428.005-.853.079-1.257.22L6.2 3.672A11.038 11.038 0 0 1 10 3c2.12-.018 4.196.591 5.963 1.749a10.536 10.536 0 0 1 3.952 4.748c.114.273.113.58 0 .852ZM3.724 3.542l12.728 12.584-.885.874-1.13-1.117a10.918 10.918 0 0 1-4.437.96 10.798 10.798 0 0 1-7.476-2.956 10.264 10.264 0 0 1-2.44-3.542 1.117 1.117 0 0 1 0-.847 10.35 10.35 0 0 1 3.453-4.392l-.7-.692.887-.872Zm8.176 9.832L6.508 8.043A3.823 3.823 0 0 0 6 9.922c0 1.048.421 2.054 1.171 2.796A4.024 4.024 0 0 0 10 13.877a3.936 3.936 0 0 0 1.9-.503Z"></path>`,
  '0 0 20 20',
  'hide-fill'
);
const { svg: Pi } = ut();
var Ti = _t(
  Pi`<path d="M7.25 8.5A2.752 2.752 0 0 0 10 11.25a2.72 2.72 0 0 0 1.33-.358L7.609 7.169A2.721 2.721 0 0 0 7.25 8.5Z"></path><path d="M10 5.75a2.721 2.721 0 0 0-1.331.358l3.723 3.723A2.72 2.72 0 0 0 12.75 8.5 2.752 2.752 0 0 0 10 5.75Z"></path><path d="M18.67 2.13a.819.819 0 0 0-.7-.047 8.832 8.832 0 0 1-7.6-.062 10.3 10.3 0 0 0-8.92 0 .626.626 0 0 0-.351.563v17.191h.24V20H3v-5.442a9.033 9.033 0 0 1 6.826.4 10.084 10.084 0 0 0 8.822 0A.626.626 0 0 0 19 14.4V2.732a.712.712 0 0 0-.33-.602ZM10 12.75a4.25 4.25 0 1 1 0-8.5 4.25 4.25 0 0 1 0 8.5Z"></path>`,
  '0 0 20 20',
  'ignore-reports-fill'
);
const { svg: zi } = ut();
var Ni = _t(
  zi`<path d="M10 4.326a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM7.125 8.451a2.845 2.845 0 0 1 .454-1.536l3.958 3.957a2.865 2.865 0 0 1-4.412-2.421Zm5.3 1.537L8.462 6.031a2.864 2.864 0 0 1 3.959 3.957h.004Zm6.25-7.858a.819.819 0 0 0-.7-.047 8.839 8.839 0 0 1-7.6-.062 10.3 10.3 0 0 0-8.92 0 .626.626 0 0 0-.352.563v17.191h1.25V14.8a9.04 9.04 0 0 1 7.477.162 10.084 10.084 0 0 0 8.821 0A.626.626 0 0 0 19 14.4V2.732a.712.712 0 0 0-.33-.602h.004ZM17.75 14a8.817 8.817 0 0 1-7.38-.162 10.308 10.308 0 0 0-8.022-.382V2.985a9.035 9.035 0 0 1 7.477.161 9.938 9.938 0 0 0 7.925.385V14Z"></path>`,
  '0 0 20 20',
  'ignore-reports-outline'
);
const { svg: Ri } = ut();
var Ui = _t(
  Ri`<path d="M17.884 19H2.118A1.113 1.113 0 0 1 1 17.893v-.482A6.483 6.483 0 0 1 7.538 11h4.926A6.483 6.483 0 0 1 19 17.411v.482A1.113 1.113 0 0 1 17.884 19ZM2.251 17.75h15.5v-.339a5.231 5.231 0 0 0-5.287-5.161H7.538a5.231 5.231 0 0 0-5.287 5.161v.339ZM13.522 6.243a3.75 3.75 0 1 1-1.365-4.3h1.43v-.412a5 5 0 1 0 0 6.938V6.243h-.065Zm6.345-2.493H16.25V0H15v3.75h-3.617V5H15v4h1.25V5h3.617V3.75Z"></path>`,
  '0 0 20 20',
  'invite-outline'
);
const { svg: Ii } = ut();
var ji = _t(
  Ii`<path d="M11 18h1a2 2 0 0 1-4 0h3Zm6.263-7.07a2.699 2.699 0 0 1-1.189-2.23l-.005-1.61a6.069 6.069 0 1 0-12.138 0v1.613a2.7 2.7 0 0 1-1.193 2.227A3.949 3.949 0 0 0 1 14.208v.672A1.119 1.119 0 0 0 2.117 16h15.766A1.119 1.119 0 0 0 19 14.88v-.672a3.952 3.952 0 0 0-1.737-3.278Z"></path>`,
  '0 0 20 20',
  'notification-fill'
);
const { svg: Di } = ut();
var qi = _t(
  Di`<path d="M19.6 6.876 13.124.4a1.132 1.132 0 0 0-1.606 0l-.665.665a2.083 2.083 0 0 0-.379 2.435L6.68 7.292a2.085 2.085 0 0 0-2.432.374l-.665.665a1.14 1.14 0 0 0 0 1.612l2.53 2.53-5.82 5.82 1.414 1.414 5.82-5.82 2.53 2.53a1.132 1.132 0 0 0 1.606 0l.665-.665a2.084 2.084 0 0 0 .375-2.432L16.5 9.528a2.126 2.126 0 0 0 2.433-.375l.666-.666a1.142 1.142 0 0 0 .001-1.611Z"></path>`,
  '0 0 20 20',
  'pin-fill'
);
const { svg: Gi } = ut();
var Wi = _t(
  Gi`<path d="M12.942 10.942 10.884 13l2.058 2.058-.884.884L10 13.884l-2.058 2.058-.884-.884L9.116 13l-2.058-2.058.884-.884L10 12.116l2.058-2.058.884.884ZM19 3.625v12.78A2.6 2.6 0 0 1 16.4 19H3.6A2.6 2.6 0 0 1 1 16.405V3.625A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625Zm-1.25 12.78V7.851a2.6 2.6 0 0 1-1.375.4H3.625a2.6 2.6 0 0 1-1.375-.4v8.554A1.348 1.348 0 0 0 3.6 17.75h12.8a1.348 1.348 0 0 0 1.35-1.345Zm0-11.331V3.625a1.377 1.377 0 0 0-1.375-1.375H3.625A1.377 1.377 0 0 0 2.25 3.625v2A1.377 1.377 0 0 0 3.625 7h12.75a1.377 1.377 0 0 0 1.375-1.375v-.551Z"></path>`,
  '0 0 20 20',
  'spam-outline'
);
const { svg: Fi } = ut();
var Ki = _t(
  Fi`<path d="M9.45 13.95a1.033 1.033 0 0 1-.71-.29 1.014 1.014 0 0 1 0-1.42 1.033 1.033 0 0 1 1.409 0 1 1 0 0 1-.699 1.71Zm.689-9.9A4.987 4.987 0 0 0 7.111 5a.853.853 0 0 0-.1 1.313l.065.061a.832.832 0 0 0 1.085.026 2.987 2.987 0 0 1 1.752-.658c.8 0 1.245.371 1.245.9 0 .649-.331.94-1.059 1.351a2.772 2.772 0 0 0-1.333 1.481c-.058.14-.089.288-.093.439 0 .252.099.494.276.673a.89.89 0 0 0 .665.266.913.913 0 0 0 .661-.265.925.925 0 0 0 .227-.422c0-.006.046-.261.046-.267.095-.479.365-.733 1.141-1.134a2.452 2.452 0 0 0 1.562-2.29c-.001-1.405-1.1-2.424-3.112-2.424ZM13.376 16h2A4.626 4.626 0 0 0 20 11.379V5.621A4.626 4.626 0 0 0 15.379 1H4.621A4.626 4.626 0 0 0 0 5.621v5.758A4.626 4.626 0 0 0 4.621 16H7.5v-1.25H4.621a3.375 3.375 0 0 1-3.371-3.371V5.621A3.375 3.375 0 0 1 4.621 2.25h10.758a3.375 3.375 0 0 1 3.371 3.371v5.758a3.376 3.376 0 0 1-3.371 3.371h-2.5l-3.763 3.607.866.9L13.376 16Z"></path>`,
  '0 0 20 20',
  'topic-help-outline'
);
const { svg: Xi } = ut();
var Ji = _t(
  Xi`<path d="M10 20c-.101 0-.202-.014-.3-.04C8.249 19.554 1 17.277 1 12V3.187A1.122 1.122 0 0 1 1.846 2.1L9.73.108c.177-.044.363-.044.54 0L18.154 2.1A1.122 1.122 0 0 1 19 3.187V12c0 5.277-7.249 7.554-8.7 7.957A1.162 1.162 0 0 1 10 20ZM2.25 3.283V12c0 4.465 6.989 6.531 7.786 6.751.725-.22 7.714-2.286 7.714-6.751V3.283L10 1.33 2.25 3.283Z"></path>`,
  '0 0 20 20',
  'mod-outline'
);
const { svg: Yi } = ut();
var Qi = _t(
  Yi`<path d="M19.752 16 11.686 1.7A1.911 1.911 0 0 0 10 .727a1.91 1.91 0 0 0-1.686.978L.25 16a1.873 1.873 0 0 0 .02 1.9 1.92 1.92 0 0 0 1.665.943h16.132a1.917 1.917 0 0 0 1.665-.943 1.875 1.875 0 0 0 .02-1.9Zm-8.6-10.08-.28 6.847h-1.76l-.281-6.844 2.322-.003Zm-.01 9.682A1.317 1.317 0 0 1 10 16.27a1.298 1.298 0 0 1-1.316-1.316 1.3 1.3 0 0 1 1.309-1.316 1.313 1.313 0 0 1 1.152 1.967l-.002-.003Z"></path>`,
  '0 0 20 20',
  'warning-fill'
);
const { svg: as } = ut();
var ts = _t(
  as`<path d="M19 9H1V2.119A1.119 1.119 0 0 1 2.118 1h15.764A1.119 1.119 0 0 1 19 2.119V9ZM1 17.881A1.119 1.119 0 0 0 2.118 19h15.764A1.12 1.12 0 0 0 19 17.881V11H1v6.881Z"></path>`,
  '0 0 20 20',
  'view-card-fill'
);
const { svg: ls } = ut();
var es = _t(
  ls`<path d="M17.882 1H2.118A1.12 1.12 0 0 0 1 2.119v15.762A1.119 1.119 0 0 0 2.118 19h15.764A1.12 1.12 0 0 0 19 17.881V2.119A1.12 1.12 0 0 0 17.882 1Zm-.132 16.75H2.25v-7.138h15.5v7.138ZM2.25 9.362V2.25h15.5v7.112H2.25Z"></path>`,
  '0 0 20 20',
  'view-card-outline'
);
const { svg: os } = ut();
var ns = _t(
  os`<path d="m6.942 19.442-.884-.884L14.616 10 6.058 1.442l.884-.884 9 9a.624.624 0 0 1 0 .884l-9 9Z"></path>`,
  '0 0 20 20',
  'right-outline'
);
const { svg: is } = ut();
var ss = _t(
  is`<path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm3.511 12.109-1.022-.718A3.046 3.046 0 0 1 10 13.829a3.045 3.045 0 0 1-2.489-1.188l-1.022.718A4.252 4.252 0 0 0 10 15.079a4.252 4.252 0 0 0 3.511-1.72ZM6 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>`,
  '0 0 20 20',
  'emoji-outline'
);
const { svg: rs } = ut();
var vs = _t(
  rs`<path d="M10 16a1 1 0 0 1-.707-.293l-9-9 1.414-1.414L10 13.586l8.293-8.293 1.414 1.414-9 9A1 1 0 0 1 10 16Z"></path>`,
  '0 0 20 20',
  'down-fill'
);
Wa(
  'icon-emoji',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm3.511 12.109-1.022-.718A3.046 3.046 0 0 1 10 13.829a3.045 3.045 0 0 1-2.489-1.188l-1.022.718A4.252 4.252 0 0 0 10 15.079a4.252 4.252 0 0 0 3.511-1.72ZM6 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM4.5 9a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm5.5 6.454a4.63 4.63 0 0 1-3.818-1.878l1.635-1.151A2.669 2.669 0 0 0 10 13.454a2.666 2.666 0 0 0 2.182-1.029l1.636 1.15A4.626 4.626 0 0 1 10 15.454Zm4-4.954a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>')}`
);
Wa(
  'icon-text-size',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 8.075h6v1.45H5.625v6.447h-1.25V9.525H2v-1.45Zm5.029-5.966V3.9h4.977v14.093h1.964V3.9h5V2.109H7.029Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 8h6v2H6v6H4v-6H2V8Zm5.015-5.891V5.9h4.2V18h3.568V5.9h4.207V2.109H7.015Z"/></svg>')}`
);
Wa(
  'icon-link-post',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M14.111 12.5a3.701 3.701 0 0 1-1.09 2.41c-.479.47-.928.922-1.378 1.373-.45.45-.894.9-1.368 1.366a3.852 3.852 0 0 1-2.698 1.099 3.852 3.852 0 0 1-2.698-1.099 3.738 3.738 0 0 1-1.116-2.659c0-.997.402-1.953 1.116-2.658.479-.472.928-.923 1.378-1.375.45-.45.893-.9 1.368-1.365A3.936 3.936 0 0 1 9.638 8.59a3.968 3.968 0 0 1 2.24.258c.27-.269.546-.54.812-.806l.131-.13a5.086 5.086 0 0 0-3.182-.624A5.052 5.052 0 0 0 6.732 8.71c-.48.471-.929.922-1.377 1.373-.449.451-.894.9-1.37 1.366A4.982 4.982 0 0 0 2.5 14.992c0 1.328.534 2.602 1.486 3.543A5.13 5.13 0 0 0 7.58 20a5.13 5.13 0 0 0 3.595-1.465c.478-.471.927-.923 1.377-1.374.451-.451.894-.9 1.368-1.366a4.993 4.993 0 0 0 1.263-2.071c.243-.781.288-1.61.132-2.412L14.11 12.5Z"/><path d="M16.017 1.467A5.123 5.123 0 0 0 12.422 0a5.123 5.123 0 0 0-3.595 1.467c-.478.471-.926.923-1.377 1.374-.45.451-.894.9-1.367 1.366a4.966 4.966 0 0 0-1.106 1.624 4.907 4.907 0 0 0-.291 2.86l1.2-1.19a3.699 3.699 0 0 1 1.092-2.41c.478-.472.928-.923 1.377-1.374.45-.45.894-.9 1.368-1.366a3.844 3.844 0 0 1 2.698-1.101c1.012 0 1.982.396 2.698 1.101a3.736 3.736 0 0 1 1.116 2.66c0 .996-.401 1.953-1.116 2.658-.478.471-.927.922-1.377 1.373-.45.451-.893.9-1.368 1.367a3.933 3.933 0 0 1-2.014 1.003 3.966 3.966 0 0 1-2.24-.26c-.273.274-.551.549-.818.818l-.123.12a5.087 5.087 0 0 0 3.183.624 5.053 5.053 0 0 0 2.906-1.423c.477-.472.926-.923 1.376-1.375.45-.452.894-.9 1.368-1.365A4.977 4.977 0 0 0 17.5 5.008a4.977 4.977 0 0 0-1.488-3.543l.005.002Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.5 5.239a5.23 5.23 0 0 1-1.525 3.704c-.44.441-.853.866-1.267 1.29-.435.446-.87.892-1.333 1.358a5.115 5.115 0 0 1-5.944.993l1.56-1.57a3.254 3.254 0 0 0 2.981-.838c.459-.46.895-.9 1.321-1.344.427-.444.835-.857 1.28-1.3a3.236 3.236 0 0 0 .942-2.29 3.253 3.253 0 0 0-.943-2.29 3.216 3.216 0 0 0-2.276-.948 3.2 3.2 0 0 0-2.275.949c-.454.454-.878.89-1.303 1.326-.426.436-.851.865-1.302 1.32-.028.03-.047.064-.075.093l.038-.136L4.541 8.43a5.238 5.238 0 0 1 1.47-4.248c.448-.45.866-.88 1.285-1.31.42-.43.86-.88 1.316-1.34A5.19 5.19 0 0 1 12.293 0a5.19 5.19 0 0 1 3.682 1.534A5.203 5.203 0 0 1 17.5 5.239Zm-4.735 8.941c-.061.074-.114.155-.182.224-.445.447-.863.876-1.28 1.3-.416.424-.862.883-1.32 1.344a3.286 3.286 0 0 1-4.553 0 3.254 3.254 0 0 1 0-4.58c.45-.453.875-.888 1.298-1.322.423-.434.85-.872 1.303-1.326a3.157 3.157 0 0 1 3-.859l1.526-1.555a5.113 5.113 0 0 0-5.931 1c-.456.46-.887.9-1.316 1.34-.43.44-.838.86-1.285 1.31A5.256 5.256 0 0 0 2.5 14.76c0 1.39.55 2.722 1.526 3.705A5.192 5.192 0 0 0 7.709 20a5.192 5.192 0 0 0 3.682-1.535c.463-.466.894-.912 1.334-1.36.413-.422.827-.847 1.266-1.288a5.203 5.203 0 0 0 1.525-3.7 5.306 5.306 0 0 0-.063-.655l-2.688 2.718Z"/></svg>')}`
);
Wa(
  'icon-user',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M12.465 11H7.538A6.482 6.482 0 0 0 1 17.411v.482A1.113 1.113 0 0 0 2.119 19h15.765A1.114 1.114 0 0 0 19 17.893v-.482A6.484 6.484 0 0 0 12.465 11Zm5.287 6.75h-15.5v-.339a5.23 5.23 0 0 1 5.286-5.161h4.927a5.231 5.231 0 0 1 5.287 5.161v.339ZM10 10a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Zm0-8.75a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 17.411v.482A1.114 1.114 0 0 1 17.884 19H2.119A1.113 1.113 0 0 1 1 17.893v-.482A6.482 6.482 0 0 1 7.538 11h4.927A6.483 6.483 0 0 1 19 17.411ZM10 10a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5Z"/></svg>')}`
);
const { svg: ds } = ut();
var hs = _t(
  ds`<path d="m18.384 18.81.013-.014L2.486 2.883l-.886.885 7.244 7.241H7.538A6.482 6.482 0 0 0 1 17.42v.482a1.114 1.114 0 0 0 1.119 1.107h14.725l.67.67.761-.762c.052-.02.102-.043.151-.068l-.042-.04ZM2.251 17.76v-.34a5.231 5.231 0 0 1 5.287-5.16h2.556l5.5 5.5H2.251ZM13.5 11.097a6.477 6.477 0 0 1 5.427 5.427l-2.6-2.6a4.795 4.795 0 0 0-.247-.247l-2.58-2.58Zm-7.1-7.1-.98-.983a5 5 0 1 1 6.574 6.574l-.985-.98a3.74 3.74 0 1 0-4.6-4.6L6.4 4Z"></path>`,
  '0 0 20 20',
  'block-outline'
);
const { svg: cs } = ut();
var us = _t(
  cs`<path d="M2.625 16A1.627 1.627 0 0 1 1 14.375V2.625A1.627 1.627 0 0 1 2.625 1h11.75A1.627 1.627 0 0 1 16 2.625h-1.25a.375.375 0 0 0-.375-.375H2.625a.375.375 0 0 0-.375.375v11.75a.375.375 0 0 0 .375.375V16Zm14.044-7.068a2.573 2.573 0 1 1-5.147.002 2.573 2.573 0 0 1 5.147-.002Zm-1.029 0a1.544 1.544 0 1 0-3.087.002 1.544 1.544 0 0 0 3.087-.002ZM19 5.622v11.756A1.624 1.624 0 0 1 17.378 19H5.622A1.624 1.624 0 0 1 4 17.378V5.622A1.624 1.624 0 0 1 5.622 4h11.756A1.624 1.624 0 0 1 19 5.622ZM5.622 17.75h9.151l-4.648-4.65a1.958 1.958 0 0 0-2.765 0l-2.11 2.11v2.166a.373.373 0 0 0 .372.374ZM17.75 5.622a.373.373 0 0 0-.372-.372H5.622a.373.373 0 0 0-.372.372v8.134l1.382-1.381a2.988 2.988 0 0 1 4.222 0l5.375 5.375h1.149a.373.373 0 0 0 .372-.372V5.622Z"></path>`,
  '0 0 20 20',
  'media-gallery-outline'
);
const { svg: ps } = ut();
var ms = _t(
  ps`<path d="M1.482 19.575a1.128 1.128 0 0 1-1.034-1.563L3.821 10 .448 1.988A1.125 1.125 0 0 1 1.988.545l16.9 8.449a1.125 1.125 0 0 1 0 2.012l-16.9 8.449a1.13 1.13 0 0 1-.506.12Zm3.511-9.137-3.262 7.748L18.1 10 1.731 1.814l3.263 7.749a1.13 1.13 0 0 1 0 .875h-.001Z"></path>`,
  '0 0 20 20',
  'send-outline'
);
Wa(
  'icon-add',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 9h-8V1H9v8H1v2h8v8h2v-8h8V9Z"/></svg>')}`
);
const { svg: gs } = ut();
var $s = _t(
  gs`<path d="M3 16H1.75v-6H3v6Zm5-9H6.75v9H8V7Zm5-3h-1.25v12H13V4Zm5-3h-1.25v15H18V1ZM1.01 17.75V19h17.9v-1.25H1.01Z"></path>`,
  '0 0 20 20',
  'statistics-outline'
);
Wa(
  'icon-topic',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m19.567 18.683-2.194-2.194a3.508 3.508 0 1 0-.884.885l2.194 2.193.884-.884ZM14.5 16.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM5.5 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM12.125 9h4.75A1.127 1.127 0 0 0 18 7.875v-4.75A1.127 1.127 0 0 0 16.875 2h-4.75A1.127 1.127 0 0 0 11 3.125v4.75A1.127 1.127 0 0 0 12.125 9Zm.125-5.75h4.5v4.5h-4.5v-4.5ZM7.875 11h-4.75A1.127 1.127 0 0 0 2 12.125v4.75A1.127 1.127 0 0 0 3.125 18h4.75A1.127 1.127 0 0 0 9 16.875v-4.75A1.127 1.127 0 0 0 7.875 11Zm-.125 5.75h-4.5v-4.5h4.5v4.5Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m19.832 18.418-2.266-2.266A3.45 3.45 0 0 0 18 14.5a3.5 3.5 0 1 0-3.5 3.5 3.45 3.45 0 0 0 1.652-.434l2.266 2.266 1.414-1.414ZM14.5 12.725a1.775 1.775 0 1 1 0 3.55 1.775 1.775 0 0 1 0-3.55ZM9 5.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm2 2.375v-4.75A1.127 1.127 0 0 1 12.125 2h4.75A1.127 1.127 0 0 1 18 3.125v4.75A1.127 1.127 0 0 1 16.875 9h-4.75A1.127 1.127 0 0 1 11 7.875Zm-2 4.25v4.75A1.127 1.127 0 0 1 7.875 18h-4.75A1.127 1.127 0 0 1 2 16.875v-4.75A1.127 1.127 0 0 1 3.125 11h4.75A1.127 1.127 0 0 1 9 12.125Z"/></svg>')}`
);
const { svg: Zs } = ut();
var As = _t(
  Zs`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0ZM8.925 13.53l-.487.031a1.113 1.113 0 0 1-.79-.332l-2-2 1.414-1.415 1.376 1.375 4.5-4.5L14.353 8.1l-5.428 5.43Z"></path>`,
  '0 0 20 20',
  'joined-fill'
);
const { svg: ws } = ut();
var fs = _t(
  ws`<path d="M19 9H3.914l7.293-7.293L9.793.293l-9 9a1 1 0 0 0 0 1.414l9 9 1.414-1.414L3.914 11H19V9Z"></path>`,
  '0 0 20 20',
  'back-fill'
);
const { svg: bs } = ut();
var Ms = _t(
  bs`<path d="M1 14.5h18v3.381A1.12 1.12 0 0 1 17.882 19H2.118A1.12 1.12 0 0 1 1 17.881V14.5ZM19 2.119A1.12 1.12 0 0 0 17.882 1H2.118A1.12 1.12 0 0 0 1 2.119V5.5h18V2.119Zm0 7.243V7.5H1v5h18V9.362Z"></path>`,
  '0 0 20 20',
  'view-classic-fill'
);
const { svg: Hs } = ut();
var xs = _t(
  Hs`<path d="M17.882 2H2.118A1.118 1.118 0 0 0 1 3.116v13.768A1.118 1.118 0 0 0 2.118 18h15.764A1.118 1.118 0 0 0 19 16.884V3.116A1.118 1.118 0 0 0 17.882 2ZM2.25 3.25h15.5V7H2.25V3.25Zm15.5 13.5H2.25v-3.5h15.5v3.5Zm0-4.75H2.25V8.25h15.5V12Z"></path>`,
  '0 0 20 20',
  'view-classic-outline'
);
Wa(
  'icon-caret-up',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M14.558 12.942 10 8.384l-4.558 4.558-.884-.884 5-5a.623.623 0 0 1 .884 0l5 5-.884.884Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M14.293 13.207 10 8.914l-4.293 4.293-1.414-1.414 5-5a1 1 0 0 1 1.414 0l5 5-1.414 1.414Z"/></svg>')}`
);
Wa(
  'icon-info',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 20a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm0-18.75A8.75 8.75 0 1 0 18.75 10 8.76 8.76 0 0 0 10 1.25Zm-.543 5.705a1.058 1.058 0 0 1-.39-.393 1.11 1.11 0 0 1 0-1.09c.093-.161.228-.295.39-.386a1.1 1.1 0 0 1 1.484.39c.098.163.149.35.147.54a1.08 1.08 0 0 1-.54.936A1.05 1.05 0 0 1 10 7.1a1.062 1.062 0 0 1-.543-.145Zm1.354 8.463H9.2V8.124h1.614l-.003 7.294Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm1.081 15.418H8.92V8.062h2.161v7.356Zm.065-8.859a1.307 1.307 0 0 1-1.139.656 1.29 1.29 0 0 1-.67-.178 1.343 1.343 0 0 1-.475-1.811c.113-.197.277-.36.475-.472a1.344 1.344 0 0 1 1.326.008 1.321 1.321 0 0 1 .483 1.797Z"/></svg>')}`
);
const { svg: ys } = ut();
var Ls = _t(
  ys`<path d="m2.263 9.465-1.936.5A9.925 9.925 0 0 1 2.929.4l1.414 1.416a7.922 7.922 0 0 0-2.08 7.649ZM17.071.4l-1.414 1.416a7.921 7.921 0 0 1 2.08 7.649l1.936.5A9.925 9.925 0 0 0 17.071.4ZM9 18H8a2 2 0 0 0 4 0H9Zm8.263-7.07a2.7 2.7 0 0 1-1.189-2.23l-.005-1.61a6.07 6.07 0 0 0-12.138 0v1.613a2.7 2.7 0 0 1-1.193 2.227A3.949 3.949 0 0 0 1 14.208v.672A1.119 1.119 0 0 0 2.117 16h15.766A1.119 1.119 0 0 0 19 14.88v-.672a3.952 3.952 0 0 0-1.737-3.278Z"></path>`,
  '0 0 20 20',
  'notification-frequent-fill'
);
const { svg: Vs } = ut();
var _s = _t(
  Vs`<path d="M11 18h1a2 2 0 0 1-4 0h3Zm8-3.792v.673A1.119 1.119 0 0 1 17.883 16H2.117A1.119 1.119 0 0 1 1 14.881v-.673a3.947 3.947 0 0 1 1.738-3.277A2.706 2.706 0 0 0 3.926 8.7V7.087a6.069 6.069 0 1 1 12.138 0l.01 1.613a2.702 2.702 0 0 0 1.189 2.235A3.949 3.949 0 0 1 19 14.208Zm-1.25 0a2.7 2.7 0 0 0-1.188-2.242A3.956 3.956 0 0 1 14.824 8.7V7.088a4.819 4.819 0 1 0-9.638 0v1.615a3.956 3.956 0 0 1-1.738 3.266 2.7 2.7 0 0 0-1.198 2.239v.542h15.5v-.542ZM1.625 7.473a8.32 8.32 0 0 1 2.453-5.922L3.193.667A9.553 9.553 0 0 0 .69 9.875L1.9 9.56a8.364 8.364 0 0 1-.275-2.087ZM16.807.667l-.885.884A8.305 8.305 0 0 1 18.1 9.56l1.209.315a9.552 9.552 0 0 0-2.5-9.208h-.002Z"></path>`,
  '0 0 20 20',
  'notification-frequent-outline'
);
const { svg: Cs } = ut();
var ks = _t(
  Cs`<path d="M11 18h1a2 2 0 1 1-4 0h3Zm8-3.12v-.672a3.95 3.95 0 0 0-1.737-3.278 2.7 2.7 0 0 1-1.189-2.23l-.005-1.61a6.057 6.057 0 0 0-10.034-4.6l12.857 12.855A1.1 1.1 0 0 0 19 14.88Zm.442 3.678-18-18-.884.884 3.705 3.705a6 6 0 0 0-.332 1.936v1.613a2.7 2.7 0 0 1-1.193 2.234A3.949 3.949 0 0 0 1 14.208v.672A1.119 1.119 0 0 0 2.117 16h13l3.443 3.442.882-.884Z"></path>`,
  '0 0 20 20',
  'notification-off-fill'
);
const { svg: Es } = ut();
var Ss = _t(
  Es`<path d="m6.1 10.352-.13-.117.1-.14a10.45 10.45 0 0 0 2.012-4.62l.025-.16h2.131V4.036H5.762V2.264H4.484v1.772H0v1.279h2.186l.026.161A10.24 10.24 0 0 0 4.168 10.1l.106.14-.13.117A8.081 8.081 0 0 1 0 12.367v1.281a9.076 9.076 0 0 0 4.993-2.361l.13-.12.13.12a9.1 9.1 0 0 0 3.991 2.143l.456-1.206a8.243 8.243 0 0 1-3.6-1.872Zm-.983-1.147-.149-.213A9.46 9.46 0 0 1 3.5 5.546l-.051-.231h3.339l-.038.224A7.95 7.95 0 0 1 5.274 9l-.157.205Zm10.765-3.172h-1.92L9.844 16.945h1.3l1.066-2.717h5.427l1.063 2.717H20L15.882 6.033Zm-3.232 6.979 2.243-6.062 2.3 6.062H12.65Z"></path>`,
  '0 0 20 20',
  'translate-outline'
);
const { svg: Bs } = ut();
var Os = _t(
  Bs`<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm.059 5a3.229 3.229 0 1 1 0 6.458 3.229 3.229 0 0 1 0-6.458ZM3.85 16.216a5.32 5.32 0 0 1 5.007-3.162h2.286a5.324 5.324 0 0 1 5.008 3.161 8.73 8.73 0 0 1-12.3 0l-.001.001Z"></path>`,
  '0 0 20 20',
  'profile-fill'
);
const { svg: Ps } = ut();
var Ts = _t(
  Ps`<path d="M18.376 4H1.624A1.618 1.618 0 0 0 0 5.607v11.786A1.618 1.618 0 0 0 1.624 19h16.752A1.618 1.618 0 0 0 20 17.393V5.607A1.618 1.618 0 0 0 18.376 4Zm.374 13.393a.366.366 0 0 1-.374.357H1.624a.366.366 0 0 1-.374-.357V5.607a.366.366 0 0 1 .374-.357h16.752a.366.366 0 0 1 .374.357v11.786ZM6 14.529h.014A2.049 2.049 0 0 0 8.07 16.3h3.858A1.854 1.854 0 0 0 14 14.529V12H6v2.529Zm1.249-1.279h5.5v1.279c0 .47-.574.521-.821.521H8.07a.79.79 0 0 1-.821-.75v-1.05ZM8.624 3h-1.25a2.625 2.625 0 0 1 5.25 0h-1.25a1.375 1.375 0 0 0-2.75 0ZM7 10H5V8h2v2Zm6-2h2v2h-2V8Z"></path>`,
  '0 0 20 20',
  'bot-outline'
);
Wa(
  'icon-filter',
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M15.5 9a3.5 3.5 0 1 0-3.437-4.125H1v1.25h11.063A3.5 3.5 0 0 0 15.5 9Zm0-5.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5ZM4.5 11a3.5 3.5 0 1 0 3.437 4.125H18.96v-1.25H7.937A3.5 3.5 0 0 0 4.5 11Zm0 5.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"/></svg>')}`,
  Q`${Ia('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M12.162 6.5H1v-2h11.162a3.5 3.5 0 1 1 0 2ZM4.5 11a3.5 3.5 0 1 0 3.337 4.5h11.122v-2H7.837A3.494 3.494 0 0 0 4.5 11Z"/></svg>')}`
);
const { svg: zs } = ut();
var Ns = _t(
  zs`<path d="M18.066 18.843H1.934A1.919 1.919 0 0 1 .269 17.9a1.873 1.873 0 0 1-.02-1.9L8.314 1.7A1.91 1.91 0 0 1 10 .727a1.912 1.912 0 0 1 1.685.978L19.752 16a1.874 1.874 0 0 1-.021 1.9 1.918 1.918 0 0 1-1.665.943ZM9.418 2.314l-8.066 14.3a.644.644 0 0 0 .007.656.66.66 0 0 0 .575.325h16.132a.657.657 0 0 0 .575-.325.641.641 0 0 0 .007-.656l-8.066-14.3A.655.655 0 0 0 10 1.977a.654.654 0 0 0-.582.337ZM9.5 15.865a1.083 1.083 0 0 1-.386-.386 1.036 1.036 0 0 1-.144-.537 1.065 1.065 0 0 1 1.986-.533 1.047 1.047 0 0 1 0 1.07c-.096.16-.23.292-.39.386a1.039 1.039 0 0 1-.536.143 1.025 1.025 0 0 1-.53-.143Zm-.14-3.329-.194-6.513H10.9l-.2 6.513H9.36Z"></path>`,
  '0 0 20 20',
  'warning-outline'
);
const { svg: Rs } = ut();
var Us = _t(
  Rs`<path d="M2.625 15.375V16A1.627 1.627 0 0 1 1 14.375V2.624A1.627 1.627 0 0 1 2.625 1h11.75A1.627 1.627 0 0 1 16 2.624H5.629a3.008 3.008 0 0 0-3 3l-.004 9.751ZM19 5.625v11.75A1.627 1.627 0 0 1 17.375 19H5.625A1.627 1.627 0 0 1 4 17.375V5.625A1.627 1.627 0 0 1 5.625 4h11.75A1.627 1.627 0 0 1 19 5.625Zm-3 4.855a2.7 2.7 0 0 0-2.664-2.73 2.629 2.629 0 0 0-1.836.761 2.629 2.629 0 0 0-1.836-.761A2.7 2.7 0 0 0 7 10.48c0 3.056 4.009 5.488 4.18 5.589l.32.193.32-.193c.171-.101 4.18-2.533 4.18-5.589Z"></path>`,
  '0 0 20 20',
  'custom-feed-fill'
);
const { svg: Is } = ut();
var js = _t(
  Is`<path d="M3.554 17.826a1.124 1.124 0 0 1-.8-.33L.435 15.175a1.131 1.131 0 0 1 0-1.6l6.008-6.008a1.643 1.643 0 0 1 2.315 0l1.878 1.879 2.8-2.8-1.412-1.406A.726.726 0 0 1 12.54 4h6.736a.727.727 0 0 1 .726.727v6.735a.727.727 0 0 1-1.239.516l-1.41-1.411-5.56 5.56a1.64 1.64 0 0 1-2.313 0L7.6 14.248 4.354 17.5c-.213.21-.5.328-.8.326ZM1.4 14.376l2.151 2.151 4.05-4.047 2.76 2.763a.389.389 0 0 0 .547 0L17.352 8.8l1.4 1.4V5.25h-4.951l1.4 1.4-4.567 4.566-2.76-2.765a.391.391 0 0 0-.547 0L1.4 14.376Z"></path>`,
  '0 0 20 20',
  'rising-outline'
);
export {
  Al as $,
  ta as A,
  $a as B,
  Tt as C,
  St as D,
  Jt as E,
  qa as F,
  tl as G,
  Wt as H,
  ja as I,
  Qt as J,
  Kt as K,
  Ut as L,
  Nt as M,
  el as N,
  sl as O,
  vl as P,
  _t as Q,
  nl as R,
  Z as S,
  aa as T,
  hl as U,
  Ml as V,
  Ba as W,
  jt as X,
  $l as Y,
  qt as Z,
  e as _,
  r as a,
  Ia as a$,
  fl as a0,
  ul as a1,
  ml as a2,
  xl as a3,
  Ll as a4,
  _l as a5,
  kl as a6,
  Ol as a7,
  Sl as a8,
  Tl as a9,
  Se as aA,
  Te as aB,
  Ue as aC,
  je as aD,
  qe as aE,
  We as aF,
  Ke as aG,
  Je as aH,
  Qe as aI,
  Va as aJ,
  ne as aK,
  fe as aL,
  Ya as aM,
  nt as aN,
  tt as aO,
  st as aP,
  to as aQ,
  co as aR,
  vo as aS,
  no as aT,
  eo as aU,
  so as aV,
  o as aW,
  i as aX,
  n as aY,
  t as aZ,
  Ra as a_,
  Nl as aa,
  Ul as ab,
  jl as ac,
  Kl as ad,
  Wl as ae,
  ql as af,
  Jl as ag,
  te as ah,
  Ql as ai,
  se as aj,
  ve as ak,
  he as al,
  ue as am,
  _a as an,
  me as ao,
  $e as ap,
  Ae as aq,
  Me as ar,
  vt as as,
  ee as at,
  xe as au,
  Le as av,
  _e as aw,
  Ne as ax,
  ke as ay,
  Oe as az,
  s as b,
  Ki as b$,
  go as b0,
  po as b1,
  bo as b2,
  Zo as b3,
  wo as b4,
  Co as b5,
  yo as b6,
  Vo as b7,
  Io as b8,
  Bo as b9,
  _n as bA,
  kn as bB,
  Sn as bC,
  On as bD,
  Tn as bE,
  Nn as bF,
  Un as bG,
  jn as bH,
  qn as bI,
  Kn as bJ,
  Wn as bK,
  Jn as bL,
  Qn as bM,
  ti as bN,
  ei as bO,
  ni as bP,
  si as bQ,
  vi as bR,
  yt as bS,
  xt as bT,
  mi as bU,
  ui as bV,
  $i as bW,
  Ai as bX,
  Mi as bY,
  fi as bZ,
  hi as b_,
  Da as ba,
  Ho as bb,
  Po as bc,
  Eo as bd,
  zo as be,
  Ro as bf,
  Do as bg,
  Go as bh,
  d as bi,
  h as bj,
  Xo as bk,
  ln as bl,
  on as bm,
  sn as bn,
  Yo as bo,
  an as bp,
  hn as bq,
  Mn as br,
  fn as bs,
  An as bt,
  $n as bu,
  mn as bv,
  un as bw,
  vn as bx,
  xn as by,
  Ln as bz,
  v as c,
  xi as c0,
  Si as c1,
  Ui as c2,
  qi as c3,
  Oi as c4,
  ji as c5,
  Wi as c6,
  Ti as c7,
  Ni as c8,
  Li as c9,
  Us as cA,
  js as cB,
  Ja as cC,
  Fo as cD,
  _i as ca,
  ki as cb,
  Ji as cc,
  Qi as cd,
  es as ce,
  ts as cf,
  ns as cg,
  ss as ch,
  vs as ci,
  hs as cj,
  us as ck,
  ms as cl,
  $s as cm,
  As as cn,
  fs as co,
  Ms as cp,
  xs as cq,
  Lt as cr,
  Ht as cs,
  ks as ct,
  Ls as cu,
  _s as cv,
  Ss as cw,
  Os as cx,
  Ts as cy,
  Ns as cz,
  za as d,
  Ta as e,
  l as f,
  ut as g,
  ba as h,
  $ as i,
  xa as j,
  ya as k,
  Oa as l,
  Q as m,
  Ha as n,
  Ka as o,
  Wa as p,
  Sa as q,
  La as r,
  wa as s,
  Pa as t,
  Ea as u,
  kt as v,
  Qa as w,
  Y as x,
  ot as y,
  Ot as z
};
//# sourceMappingURL=icon-f94fc1dd.js.map
