import { i as t, f as e } from './icon-f94fc1dd.js';
const i = {
    variantFlipOrder: { start: 'sme', middle: 'mse', end: 'ems' },
    positionFlipOrder: {
      top: 'tbrl',
      right: 'rltb',
      bottom: 'btrl',
      left: 'lrbt'
    },
    position: 'bottom',
    margin: 8,
    padding: 0
  },
  n = (t, e, n) => {
    const {
        container: o,
        margin: s,
        padding: l,
        position: r,
        variantFlipOrder: p,
        positionFlipOrder: a
      } = {
        container: document.documentElement.getBoundingClientRect(),
        ...i,
        ...n
      },
      { left: h, top: c } = e.style;
    (e.style.left = '0'), (e.style.top = '0');
    const u = t.getBoundingClientRect(),
      d = e.getBoundingClientRect(),
      m = {
        t: u.top - d.height - s,
        b: u.bottom + s,
        r: u.right + s,
        l: u.left - d.width - s
      },
      v = {
        vs: u.left,
        vm: u.left + u.width / 2 + -d.width / 2,
        ve: u.left + u.width - d.width,
        hs: u.top,
        hm: u.bottom - u.height / 2 - d.height / 2,
        he: u.bottom - d.height
      },
      [g, f = 'middle'] = r.split('-'),
      b = a[g],
      E = p[f],
      { top: y, left: w, bottom: _, right: C } = o;
    for (const t of b) {
      const i = 't' === t || 'b' === t,
        n = m[t],
        [o, s] = i ? ['top', 'left'] : ['left', 'top'],
        [r, p] = i ? [d.height, d.width] : [d.width, d.height],
        [a, h] = i ? [_, C] : [C, _],
        [c, u] = i ? [y, w] : [w, y];
      if (!(n < c || n + r + l > a))
        for (const r of E) {
          const a = v[(i ? 'v' : 'h') + r];
          if (!(a < u || a + p + l > h))
            return (
              (e.style[s] = a - d[s] + 'px'),
              (e.style[o] = n - d[o] + 'px'),
              t + r
            );
        }
    }
    return (e.style.left = h), (e.style.top = c), null;
  };
function o(t, e = 50, i = { leading: !0, trailing: !0 }) {
  i = Object.assign({ leading: !0, trailing: !0 }, i);
  let n,
    o,
    s,
    l = null,
    r = 0;
  const p = function () {
    (r = i.leading ? Date.now() : 0),
      (l = null),
      (s = t.apply(n, o)),
      l || (n = o = null);
  };
  return function (...a) {
    const h = Date.now();
    r || !1 !== i.leading || (r = h);
    const c = e - (h - r);
    return (
      (n = this),
      (o = a),
      c <= 0 || c > e
        ? (l && (clearTimeout(l), (l = null)),
          (r = h),
          (s = t.apply(n, a)),
          l || (n = o = null))
        : l || !1 === i.trailing || (l = setTimeout(p, c)),
      s
    );
  };
}
const s = [
  'button',
  'link',
  'menuitem',
  'tab',
  'checkbox',
  'combobox',
  'gridcell',
  'application',
  'treeitem'
];
class l {
  constructor(t, i) {
    var {
        containerElement: n = document.documentElement,
        scrollContainerElement: s = window,
        allowCloseByEvent: l = !0
      } = i,
      r = e(i, [
        'containerElement',
        'scrollContainerElement',
        'allowCloseByEvent'
      ]);
    (this.status = 'closed'),
      (this._containerSize = null),
      (this.containerSizeChanged = (t) => {
        if (!this._containerSize) return !0;
        const e = this._containerSize;
        return !!Object.keys(t).some((i) => e[i] !== t[i]);
      }),
      (this.updateAriaStates = async (t = !1) => {
        var e, i, n, o, s, l;
        const r = 'open' === this.currentState.state,
          p =
            'tooltip' ===
            (null ===
              (i =
                null === (e = this.host.shadowRoot) || void 0 === e
                  ? void 0
                  : e.querySelector('[faceplate-popper-content]')) ||
            void 0 === i
              ? void 0
              : i.getAttribute('role')),
          a =
            'dialog' ===
            (null ===
              (o =
                null === (n = this.host.shadowRoot) || void 0 === n
                  ? void 0
                  : n.querySelector('[faceplate-popper-content]')) ||
            void 0 === o
              ? void 0
              : o.getAttribute('role')),
          h = this.popperTrigger,
          c = this.popperContent,
          u = !t && !a && 'function' == typeof (null == h ? void 0 : h.focus);
        p ||
          (t &&
            (null == h ||
              h.setAttribute('aria-haspopup', a ? 'dialog' : 'true'),
            null == c || c.setAttribute('hidden', '')),
          r
            ? (null == c || c.removeAttribute('hidden'),
              this.currentState.animationFinished &&
                (await this.currentState.animationFinished),
              null === (s = null == c ? void 0 : c.openMenu) ||
                void 0 === s ||
                s.call(c))
            : (null == c || c.setAttribute('hidden', ''),
              null === (l = null == c ? void 0 : c.closeMenu) ||
                void 0 === l ||
                l.call(c),
              u && (null == h || h.focus())),
          null == h || h.setAttribute('aria-expanded', `${r}`));
      }),
      (this.referenceInViewport = o(() => {
        const {
          reference: t = null,
          containerElement: e = document.documentElement
        } = this._options;
        if ('open' !== this.status) return !1;
        if (!t) return !1;
        const i = t.getBoundingClientRect();
        return (
          i.top >= 0 &&
          i.left >= 0 &&
          i.bottom <= (window.innerHeight || e.clientHeight) &&
          i.right <= (window.innerWidth || e.clientWidth)
        );
      }, 80)),
      (this.isOffscreenBottom = o((t) => {
        var e, i;
        const n =
            null === (e = t.popper) || void 0 === e
              ? void 0
              : e.getBoundingClientRect(),
          o =
            null === (i = this._options.reference) || void 0 === i
              ? void 0
              : i.getBoundingClientRect();
        return !!n && window.innerHeight - (o.bottom + n.height) < 16;
      }, 80)),
      (this.getPosition = (t) => {
        var e;
        const i = null !== (e = t.position) && void 0 !== e ? e : 'bottom';
        return 'open' === this.status
          ? i
          : this.popper &&
              this.isOffscreenBottom(t) &&
              (null == i ? void 0 : i.includes('bottom'))
            ? i.replace('bottom', 'top')
            : t.position;
      }),
      (this.reposition = () => {
        this.referenceInViewport() ? this.updatePopper() : this.close();
      }),
      (this.open = async () => {
        var t, e;
        if (this.popper) {
          if ('open' === this.status) return Promise.resolve(null);
        } else this.initialize();
        null === (t = this.popperContent) ||
          void 0 === t ||
          t.removeAttribute('hidden'),
          this.updateOptions({});
        const i = this.showElement(this._options.popper, !0);
        return (
          this.setStatus('open', i),
          null !== (e = null == i ? void 0 : i.finished) && void 0 !== e
            ? e
            : Promise.resolve(null)
        );
      }),
      (this.close = async (t) => {
        var e;
        if (t && !this._options.allowCloseByEvent) return Promise.resolve(null);
        if (
          (t && (t.preventDefault(), t.stopPropagation()),
          'open' !== this.status)
        )
          return Promise.resolve(null);
        const i = this.hideElement(this._options.popper, !0);
        return (
          this.setStatus('closed', i),
          null !== (e = null == i ? void 0 : i.finished) && void 0 !== e
            ? e
            : Promise.resolve(null)
        );
      }),
      (this.toggle = async (t) =>
        'open' !== this.status ? this.open() : this.close(t)),
      (this.updatePopper = (t) => {
        if (!this.popper) return null;
        const e = this.actualPosition;
        let i = null;
        try {
          i = this.popper.update(t);
        } catch (t) {
          return null;
        }
        const n = p(i);
        return (
          n !== e && (this.setActualPosition(n), this.host.requestUpdate()), i
        );
      }),
      (this.setStatus = (t, e) => {
        (this.status = t), (this.statusAnimation = e), this.updateAriaStates();
      }),
      (this.setActualPosition = (t) => {
        this.actualPosition = t;
      }),
      (this.handleContainerResize = o(() => {
        var t;
        if ('open' !== this.status) return;
        const e = (
          null !== (t = this._options.containerElement) && void 0 !== t
            ? t
            : document.documentElement
        ).getBoundingClientRect();
        this.containerSizeChanged(e) &&
          ((this._containerSize = e),
          this.updatePopper(
            Object.assign(Object.assign({}, this._options), { container: e })
          ));
      }, 80)),
      (this.getKeyframes = (t, e = 'show', i) => {
        try {
          return new KeyframeEffect(
            t,
            [
              { visibility: 'hidden', opacity: '0' },
              { visibility: 'visible', opacity: '1' }
            ],
            {
              fill: 'both',
              direction: 'show' === e ? 'normal' : 'reverse',
              duration: i,
              easing: 'ease-in-out'
            }
          );
        } catch (i) {
          return () => {
            'show' === e
              ? ((t.style.visibility = 'visible'), (t.style.opacity = '1'))
              : ((t.style.visibility = 'hidden'), (t.style.opacity = '0'));
          };
        }
      }),
      (this.host = t).addController(this),
      (this._options = Object.assign(Object.assign({}, r), {
        containerElement: n,
        scrollContainerElement: s,
        allowCloseByEvent: l
      })),
      (this.actualPosition = this._options.position || null);
  }
  set popperTrigger(t) {
    this._popperTrigger = t;
  }
  get popperTrigger() {
    var t, e, i, n, o, l, r;
    if (this._popperTrigger) return this._popperTrigger;
    let p =
      null !==
        (n =
          null ===
            (i =
              null ===
                (e =
                  null === (t = this.host.shadowRoot) || void 0 === t
                    ? void 0
                    : t.querySelector('slot[faceplate-popper-trigger]')) ||
              void 0 === e
                ? void 0
                : e.assignedElements()) || void 0 === i
            ? void 0
            : i[0]) && void 0 !== n
        ? n
        : null;
    let a = 0;
    const h = (t) => {
      var e;
      return (
        t instanceof HTMLButtonElement ||
        t instanceof HTMLAnchorElement ||
        s.includes(
          null !== (e = null == t ? void 0 : t.getAttribute('role')) &&
            void 0 !== e
            ? e
            : ''
        )
      );
    };
    if (h(p)) return p;
    for (; p && a < 5; ) {
      if (
        ((p = (null == p ? void 0 : p.assignedElements)
          ? null !==
              (l =
                null === (o = null == p ? void 0 : p.assignedElements()) ||
                void 0 === o
                  ? void 0
                  : o[0]) && void 0 !== l
            ? l
            : null
          : null !== (r = null == p ? void 0 : p.children[0]) && void 0 !== r
            ? r
            : null),
        h(p))
      )
        return p;
      a++;
    }
    return null;
  }
  get popperContent() {
    var t, e, i, n, o;
    return null !==
      (o =
        null ===
          (n =
            null ===
              (i =
                null ===
                  (e =
                    null === (t = this.host.shadowRoot) || void 0 === t
                      ? void 0
                      : t.querySelector('[faceplate-popper-content]')) ||
                void 0 === e
                  ? void 0
                  : e.querySelector('slot')) || void 0 === i
              ? void 0
              : i.assignedElements()) || void 0 === n
          ? void 0
          : n[0]) && void 0 !== o
      ? o
      : null;
  }
  async hostConnected() {
    await this.host.updateComplete, this.updateAriaStates(!0);
  }
  initialize() {
    var t, e;
    (this._containerSize = (
      null !== (t = this._options.containerElement) && void 0 !== t
        ? t
        : document.documentElement
    ).getBoundingClientRect()),
      (this.popper = ((t, e, i) => {
        const o =
          'object' != typeof t || t instanceof HTMLElement
            ? { reference: t, popper: e, ...i }
            : t;
        return {
          update(t = o) {
            const { reference: e, popper: i } = Object.assign(o, t);
            if (!i || !e)
              throw new Error('Popper- or reference-element missing.');
            return n(e, i, o);
          }
        };
      })(
        Object.assign(Object.assign({}, this._options), {
          container: this._containerSize
        })
      )),
      (this.resizeObserver = new ResizeObserver(this.handleContainerResize)),
      this._options.containerElement &&
        this.resizeObserver.observe(this._options.containerElement);
    (null !== (e = this._options.scrollContainerElement) && void 0 !== e
      ? e
      : window
    ).addEventListener('scroll', this.reposition),
      this.replaceElement(void 0, this._options.popper);
  }
  hostDisconnected() {
    var t, e;
    this._options.containerElement &&
      (null === (t = this.resizeObserver) ||
        void 0 === t ||
        t.unobserve(this._options.containerElement));
    (null !== (e = this._options.scrollContainerElement) && void 0 !== e
      ? e
      : window
    ).removeEventListener('scroll', this.reposition);
  }
  getOptions() {
    return this._options;
  }
  updateOptions(t) {
    var i,
      n,
      o,
      s = e(t, []);
    const l = Object.assign(Object.assign({}, this._options), s),
      r = Object.assign({}, l);
    this.popper &&
      ((this._containerSize = (
        null !== (i = l.containerElement) && void 0 !== i
          ? i
          : document.documentElement
      ).getBoundingClientRect()),
      (r.container = this._containerSize));
    const p = r.popperElementKey || 'popperElement';
    !r.popper && p in this.host && (r.popper = this.host[p]);
    const a = r.referenceElementKey || 'popperReferenceElement';
    !r.reference && a in this.host && (r.reference = this.host[a]),
      r.popper !== this._options.popper &&
        this.replaceElement(this._options.popper, r.popper),
      r.containerElement !== this._options.containerElement &&
        (this._options.containerElement &&
          (null === (n = this.resizeObserver) ||
            void 0 === n ||
            n.unobserve(this._options.containerElement),
          this._options.containerElement.removeEventListener(
            'faceplate-close',
            this.close
          )),
        r.containerElement &&
          (null === (o = this.resizeObserver) ||
            void 0 === o ||
            o.observe(r.containerElement),
          r.containerElement.addEventListener('faceplate-close', this.close))),
      (this._options = r),
      this.updatePopper(
        Object.assign(Object.assign({}, this._options), {
          position: this.getPosition(r)
        })
      );
  }
  get currentState() {
    var t, e;
    return {
      state: this.status,
      animationFinished:
        null !==
          (e =
            null === (t = this.statusAnimation) || void 0 === t
              ? void 0
              : t.finished.then(() => {})) && void 0 !== e
          ? e
          : Promise.resolve()
    };
  }
  showElement(t, e = !0) {
    if (!t) return;
    (t.style.display = ''), this.updatePopper();
    return r(this.getKeyframes(t, 'show', e ? 150 : 0));
  }
  hideElement(t, e = 'open' === this.status) {
    if (!t) return;
    if ('closed' === this.status) return void (t.style.display = 'none');
    const i = r(this.getKeyframes(t, 'hide', e ? 150 : 0));
    return (
      null == i ||
        i.finished
          .catch(() => {})
          .then(() => {
            'closed' === this.status && (t.style.display = 'none'),
              null == i || i.cancel();
          }),
      i
    );
  }
  replaceElement(t, e) {
    t &&
      (this.hideElement(t, !1),
      t.removeEventListener('faceplate-close', this.close)),
      e &&
        ('open' === this.status
          ? this.showElement(e, !1)
          : this.hideElement(e, !1),
        e.addEventListener('faceplate-close', this.close));
  }
}
l.defaultPopperContentStyles = t`[faceplate-popper-content]{position:fixed;visibility:hidden;opacity:0}`;
const r = (t) => {
    if ('function' == typeof t) return t();
    if (!t.target) return;
    t.target.getAnimations().forEach((t) => t.cancel());
    const e = new Animation(t);
    return e.play(), e;
  },
  p = (t) => {
    if (!t) return null;
    const [e, i] = t,
      n = e ? { t: 'top', b: 'bottom', l: 'left', r: 'right' }[e] : null,
      o = i ? { s: 'start', m: 'middle', e: 'end' }[i] : null;
    return n && o ? `${n}-${o}` : null;
  };
export { l as P };
//# sourceMappingURL=popper-controller-35e0828d.js.map
