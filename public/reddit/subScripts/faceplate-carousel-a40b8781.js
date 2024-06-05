import {
  aS as t,
  I as e,
  aT as i,
  aU as s,
  aV as n,
  _ as a,
  n as o,
  j as r,
  q as l,
  F as h,
  x as d,
  l as u,
  i as c,
  h as p
} from './icon-f94fc1dd.js';
import { b as g, _ as m, o as v } from './shell-c7aa92cc.js';
import { e as f, n as y } from './ref-21a8397d.js';
import { T as b } from './TinyGesture-32f2fddd.js';
import { m as I } from './makeEventDispatcher-ddce7d90.js';
import { P as _ } from './faceplate-pagination-indicator-ad9dc651.js';
var w, x, C, B;
!(function (t) {
  (t.OUTSIDE = 'outside'), (t.INSIDE = 'inside'), (t.OFF = 'off');
})(w || (w = {})),
  (function (t) {
    (t.NEXT = 'next'), (t.BOTH = 'both'), (t.OFF = 'off');
  })(x || (x = {})),
  (function (t) {
    (t.INSIDE = 'inside'), (t.OUTSIDE = 'outside'), (t.OFF = 'off');
  })(C || (C = {})),
  (function (t) {
    (t.FORWARDS = 'forwards'), (t.BACKWARDS = 'backwards');
  })(B || (B = {}));
const S = 250;
let P = class extends h {
  constructor() {
    super(...arguments),
      (this.navPlacement = C.OUTSIDE),
      (this.paginationPlacement = w.OUTSIDE),
      (this.autoplay = 'default'),
      (this.advanceAnimation = !1),
      (this.numVisible = 1),
      (this.infinite = !1),
      (this.inset = x.OFF),
      (this.paginationCounter = !1),
      (this.startIndex = 0),
      (this._pageIndex = 0),
      (this.pageCount = 0),
      (this.isCarouselInitialized = !1),
      (this.hideProgressButtons = !1),
      (this.hasBeenInteractedWith = !1),
      (this._childCount = 0),
      (this._firstViewableIndex = 0),
      (this._carouselMarkersAdded = !1),
      (this._autoplayTimeoutId = null),
      (this._isInsetBothAllowed = !1),
      (this._lowerBoundOffset = 0),
      (this._upperBoundOffset = 0),
      (this._prevButtonHidden = !1),
      (this._isNextButtonHidden = !1),
      (this._gap = 0),
      (this._autoplayPaginationRef = f()),
      (this._paginationRef = f()),
      (this._gesture = null),
      (this.firstRender = !0),
      (this.autoplayInProgress = !1),
      (this.emitter = I(this)),
      (this.generateAriaLiveMsg = ({
        pageIndex: t,
        numVisible: e,
        pageCount: i
      }) => {
        const s = t * e + 1;
        return e > 1
          ? `Items ${s} through ${s + e - 1} of ${i}`
          : `Item ${s} of ${i}`;
      }),
      (this.updated = async (t) => {
        (t.has('numVisible') ||
          t.has('infinite') ||
          t.has('inset') ||
          t.has('autoplay') ||
          t.has('navPlacement') ||
          t.has('paginationPlacement')) &&
          ((t.has('inset') || t.has('navPlacement')) &&
            (this.cachedDimensions = null),
          this.firstRender || this.resetAndInitialize()),
          (t.has('_pageIndex') || t.has('infinite')) &&
            this.toggleDisabledProgressButtons();
      }),
      (this.resetAndInitialize = () => {
        this.resetCarousel(), this.initializeCarousel();
      }),
      (this.initializeResize = () => {
        this.resizeObserver && this.resizeObserver.disconnect(),
          (this.resizeObserver = new ResizeObserver(async () => {
            if (!this.firstRender) {
              (this.cachedDimensions = null),
                await new Promise((t) => requestAnimationFrame(t));
              const { width: t } = this.getCarouselDimensions();
              await this.showFirstChild({
                width: t,
                startIndex: this._firstViewableIndex
              });
            }
          })),
          this.resizeObserver.observe(this);
      }),
      (this.onPaginationClick = (t) => {
        this.goToPage(t.detail.pageIndex, !0);
      }),
      (this.initializeCarousel = async () => {
        if (this.isCarouselInitialized) return;
        const { children: t } = this.carouselSlot;
        this.setChildAndPageCount(t),
          this.handleAutoPlay(),
          this.infinite &&
            ((this._isInsetBothAllowed =
              this._childCount >= 3 && this.inset === x.BOTH),
            this.cloneBoundElements({ children: t }));
        if (
          (this.navPlacement === C.INSIDE &&
            this.paginationPlacement === w.INSIDE) ||
          !this.firstRender
        ) {
          const { width: t, startIndex: e } =
            await this.getCarouselDimensions();
          this.showFirstChild({ width: t, startIndex: e });
        }
        (this.firstRender = !1),
          (this.isCarouselInitialized = !0),
          this.initListMutationObserver();
      }),
      (this.showFirstChild = async ({ width: t, startIndex: e }) => {
        let i = e;
        !this.hasBeenInteractedWith &&
          this.startIndex &&
          ((i = this.startIndex * this.numVisible),
          (this._pageIndex = this.startIndex)),
          await this.setChildDimensions(t),
          this.goToPage(this.pageIndex, !1),
          await this.setTabIndex({ start: i, end: i + this.numVisible - 1 });
        const s = new CustomEvent('__TEST-ONLY_carousel-children-ready');
        this.dispatchEvent(s);
      }),
      (this.handleAutoPlay = async () => {
        var t, e;
        if ('off' === this.autoplay || isNaN(this._autoplaySpeed)) return;
        this.autoplayInProgress && this.clearTimeout(),
          (this.autoplayInProgress = !0);
        const i = this._pageIndex;
        (this.infinite || i < this.pageCount - 1) &&
          (null ===
            (e =
              null === (t = this._autoplayPaginationRef) || void 0 === t
                ? void 0
                : t.value) ||
            void 0 === e ||
            e.animatePill(),
          (this._autoplayTimeoutId = setTimeout(async () => {
            await this.slideForwards(), this.handleAutoPlay();
          }, this._autoplaySpeed)));
      }),
      (this.cachedDimensions = null),
      (this.getCarouselDimensions = () => {
        var t;
        if (this.cachedDimensions) return this.cachedDimensions;
        this.inset !== x.OFF &&
          ((this.carouselSlot.style.gap = 'var(--spacer-xs, .5rem)'),
          (this._gap =
            parseInt(
              getComputedStyle(this.carouselSlot).getPropertyValue('gap')
            ) || 0));
        let e = 0;
        this.infinite && (e = this._lowerBoundOffset);
        const i =
          null === (t = this.shadowRoot) || void 0 === t
            ? void 0
            : t.host.getBoundingClientRect();
        let { width: s } = i;
        if (this.navPlacement === C.OUTSIDE) {
          const { width: t } = this.shadowRoot
            .querySelector('.content-nav-buttons-container')
            .getBoundingClientRect();
          s -= 2 * t;
        }
        return (
          (this.cachedDimensions = {
            startIndex: e,
            width: s,
            height: i.height
          }),
          this.cachedDimensions
        );
      }),
      (this.calcChildWidth = (t) => {
        let e = 0,
          i = this._gap * (this.numVisible - 1) || 0;
        this.inset !== x.OFF &&
          ((e = 48 * (this.inset === x.NEXT ? 1 : 2)),
          (i =
            this._gap *
            (this.inset === x.NEXT ? this.numVisible : this.numVisible + 1)));
        return (t - i - e) / this.numVisible;
      }),
      (this.setChildDimensions = async (t) => {
        for (const e of this.carouselSlot.children) {
          const { width: i } = e.getBoundingClientRect(),
            s = e;
          if (t) {
            const e = this.calcChildWidth(t);
            e != i && (s.style.width = `${e}px`);
          }
          '100%' !== s.style.height && (s.style.height = '100%'),
            'hidden' !== s.style.overflow && (s.style.overflow = 'hidden');
        }
      }),
      (this.handleTranslateXWithOffset = async (t) => {
        const e = this._isInsetBothAllowed
          ? `calc(-1 * (${t.offsetLeft}px - 48px - ${this._gap}px))`
          : -1 * t.offsetLeft + 'px';
        return (
          (this.carouselSlot.style.transform = `translate3d(${e}, 0,0)`),
          await Promise.all(
            this.carouselSlot.getAnimations().map((t) => t.finished)
          ).catch((t) => {
            (t instanceof DOMException && 'AbortError' == t.name) ||
              console.error(t);
          })
        );
      }),
      (this.slideCarousel = async ({
        isWithinBounds: t,
        direction: e,
        requestedIndex: i,
        allowAnimations: s,
        onSuccessfulSlide: n
      }) => {
        const { children: a } = this.carouselSlot;
        let o = !1;
        if (
          (this.firstRender ||
            (this.carouselSlot.style.transitionDuration = `${s ? this.animationDuration : 0}ms`),
          t)
        ) {
          const t = i * this.numVisible,
            e =
              t + this.numVisible - 1 > this._childCount
                ? this._firstViewableIndex + (this._childCount - t)
                : t + this._lowerBoundOffset;
          await this.handleTranslateXWithOffset(a[e]),
            (this._firstViewableIndex = e),
            this.setTabIndex({ start: e, end: e + this.numVisible - 1 }),
            (o = !0);
        } else
          this.infinite &&
            (await this.handleInfiniteSlide({ children: a, direction: e }),
            (o = !0));
        o &&
          n &&
          (this.hasBeenInteractedWith || (this.hasBeenInteractedWith = !0),
          n(),
          this.emitter.dispatch(e === B.FORWARDS ? 'forwards' : 'backwards'));
        const r = new CustomEvent('__TEST-ONLY_carousel-slide');
        this.dispatchEvent(r);
      }),
      (this.cloneBoundElements = ({ children: t }) => {
        var e, i;
        let s = 0;
        const n = this._childCount - 1,
          a = this.inset !== x.OFF ? 1 : 0;
        for (let i = 0; i < this.numVisible + a; i++) {
          const n =
            null === (e = t[i + s]) || void 0 === e ? void 0 : e.cloneNode(!0);
          n instanceof HTMLElement &&
            ((n.dataset.fpUiCarouselMarker = 'true'),
            (n.id = Math.random().toString(16).slice(2)),
            this.carouselSlot.append(n),
            ++this._upperBoundOffset);
        }
        s = 0;
        const o = this._isInsetBothAllowed ? 1 : 0;
        for (let e = 0; e < this.numVisible + o; e++) {
          const a =
            null === (i = t[n - e + s++]) || void 0 === i
              ? void 0
              : i.cloneNode(!0);
          a instanceof HTMLElement &&
            ((a.dataset.fpUiCarouselMarker = 'true'),
            (a.id = Math.random().toString(16).slice(2)),
            this.carouselSlot.prepend(a),
            ++this._lowerBoundOffset);
        }
        (this._firstViewableIndex = this._lowerBoundOffset),
          (this._carouselMarkersAdded = !0);
      }),
      (this.handleInfiniteSlide = async ({ children: t, direction: e }) => {
        (this.carouselSlot.style.transitionDuration = '0s'),
          e === B.BACKWARDS
            ? (this._firstViewableIndex = t.length - this._upperBoundOffset)
            : (this._firstViewableIndex = this._isInsetBothAllowed ? 1 : 0),
          await this.handleTranslateXWithOffset(t[this._firstViewableIndex]),
          (this.carouselSlot.style.transitionDuration = `${this.animationDuration}ms`),
          (this._firstViewableIndex =
            e === B.BACKWARDS
              ? this._firstViewableIndex - this.numVisible
              : this._firstViewableIndex + this.numVisible),
          await this.handleTranslateXWithOffset(t[this._firstViewableIndex]),
          this.setTabIndex({
            start: this._firstViewableIndex,
            end: this._firstViewableIndex + this.numVisible - 1
          });
      }),
      (this.setNavButtonVisibility = ({ type: t, hidden: e }) => {
        var i, s;
        if (this.navPlacement === C.OFF) return;
        const n = e ? 'hidden' : 'visible',
          a =
            this._nextButton &&
            (null === (i = this._nextButton[0]) || void 0 === i
              ? void 0
              : i.firstElementChild),
          o =
            this._prevButton &&
            (null === (s = this._prevButton[0]) || void 0 === s
              ? void 0
              : s.firstElementChild);
        'next' === t && a
          ? ((a.style.visibility = n), (this._isNextButtonHidden = e))
          : o && ((o.style.visibility = n), (this._prevButtonHidden = e));
      }),
      (this.toggleDisabledProgressButtons = () => {
        if (!this.infinite) {
          const t = 0 === this.pageIndex,
            e =
              this.pageIndex ===
              Math.ceil(this._childCount / this.numVisible) - 1,
            i = 0 === this._childCount;
          this.setNavButtonVisibility({ type: 'previous', hidden: i || t }),
            this.setNavButtonVisibility({ type: 'next', hidden: i || e });
        }
      }),
      (this.resetCarousel = () => {
        const { children: t } = this.carouselSlot;
        if (this._carouselMarkersAdded) {
          let e = 0;
          const i = t.length;
          for (let s = 0; s < i; s++) {
            const i = t[e];
            i instanceof HTMLElement && i.dataset.fpUiCarouselMarker
              ? i.remove()
              : e++;
          }
        }
        this.cancelAutoPlay(),
          this.resetDisabledProgressButtons(),
          (this._firstViewableIndex = 0),
          (this._pageIndex = 0),
          (this.pageCount = 0),
          (this.isCarouselInitialized = !1),
          (this._carouselMarkersAdded = !1),
          (this.hideProgressButtons = !1),
          (this._isInsetBothAllowed = !1),
          (this._lowerBoundOffset = 0),
          (this._upperBoundOffset = 0);
        const e = new CustomEvent('__TEST-ONLY_carousel-reset');
        this.dispatchEvent(e);
      }),
      (this.clearTimeout = (t) => {
        'number' == typeof this._autoplayTimeoutId &&
          (window.clearTimeout(this._autoplayTimeoutId),
          (this.autoplayInProgress = !1),
          t && t());
      }),
      (this.cancelAutoPlay = () => {
        var t, e;
        this.clearTimeout(
          null ===
            (e =
              null === (t = this._autoplayPaginationRef) || void 0 === t
                ? void 0
                : t.value) || void 0 === e
            ? void 0
            : e.resetAnimations
        );
      }),
      (this.onListItemKeydown = (t) => {
        'ArrowLeft' === t.key
          ? this.slideBackwards(t)
          : 'ArrowRight' === t.key && this.slideForwards(t);
      }),
      (this.setTabIndex = async ({ start: t, end: e }) => {
        const { children: i } = this.carouselSlot;
        for (let s = 0; s < this._childCount; s++) {
          const n = s >= t && s <= e;
          (i[s].tabIndex = n ? 0 : -1),
            (i[s].ariaHidden = n ? 'false' : 'true');
        }
      }),
      (this.goToPage = (t, e) => {
        if (t < 0 || t >= this.pageCount) return;
        let i = B.BACKWARDS;
        t > this._pageIndex && (i = B.FORWARDS),
          this.slideCarousel({
            isWithinBounds: !0,
            direction: i,
            requestedIndex: t,
            onSuccessfulSlide: () => {
              this._pageIndex = t;
            },
            allowAnimations: e
          });
      }),
      (this.onInterruptedAutoplay = async (t) => {
        await t(), this.handleAutoPlay();
      }),
      (this.slideHelper = async ({ navButtonDisabled: t, slide: e, e: i }) => {
        t ||
          (this._autoplayTimeoutId && i
            ? this.onInterruptedAutoplay(e)
            : await e());
      }),
      (this.slideForwards = async (t) => {
        const e = this._pageIndex + 1,
          i = e < this.pageCount;
        await this.slideHelper({
          navButtonDisabled: this._isNextButtonHidden,
          slide: async () =>
            this.slideCarousel({
              isWithinBounds: i,
              direction: B.FORWARDS,
              requestedIndex: e,
              onSuccessfulSlide: () => {
                this._pageIndex = i ? e : 0;
              },
              allowAnimations: !0
            }),
          e: t
        });
      }),
      (this.onKeyDown = (t, e) => {
        ('Enter' !== t.key && 'Space' !== t.key) || e(t);
      }),
      (this.slideBackwards = async (t) => {
        const e = this._pageIndex - 1,
          i = e >= 0;
        await this.slideHelper({
          navButtonDisabled: this._prevButtonHidden,
          slide: async () =>
            this.slideCarousel({
              isWithinBounds: i,
              direction: B.BACKWARDS,
              requestedIndex: e,
              onSuccessfulSlide: () => {
                this._pageIndex = i ? e : this.pageCount - 1;
              },
              allowAnimations: !0
            }),
          e: t
        });
      }),
      (this.render = () => {
        var t;
        return d` <div class="carousel-container"> <span class="${v({ 'content-nav-buttons-container': !0, hide: this.hideProgressButtons || this.navPlacement === C.OFF, outside: this.navPlacement === C.OUTSIDE, inside: this.navPlacement === C.INSIDE, left: !0 })}"> <slot class="content-nav-buttons" name="prevButton" @click="${this.slideBackwards}" @keydown="${(t) => this.onKeyDown(t, this.slideBackwards)}"></slot> </span> <div id="carousel-window"> <div id="carousel-list"> <slot @keydown="${this.onListItemKeydown}"></slot> <span class="carousel-actions top"> ${this.paginationCounter ? d`<span class="pagination-counter"> <span>${this._pageIndex + 1}</span> <span>/</span> <span>${this.pageCount}</span> </span>` : null} <slot name="closeButton"></slot> </span> <span class="carousel-actions bottom"> <slot name="addButton"></slot> </span> </div> <div id="pagination-container" class="${v({ inside: this.paginationPlacement === w.INSIDE })}"> ${this.paginationPlacement === w.OFF ? null : this._autoplaySpeed ? d`<faceplate-carousel-pagination ${y(this._autoplayPaginationRef)} pages="${this.pageCount}" page-index="${this._pageIndex}" autoplay="${this._autoplaySpeed}" appearance="${this.paginationPlacement === w.INSIDE ? _.MEDIA : _.PLAIN}"> </faceplate-carousel-pagination>` : d`<faceplate-pagination-indicator ${y(this._paginationRef)} .getPageLabels="${this.getPageLabels}" numbered current-page-label="${u(this.currentPageLabel)}" appearance="${this.paginationPlacement === w.INSIDE ? _.MEDIA : _.PLAIN}" animation-duration="${this.animationDuration}" pages="${this.pageCount}" page-index="${this._pageIndex}"></faceplate-pagination-indicator>`} </div> </div> <span class="${v({ 'content-nav-buttons-container': !0, hide: this.hideProgressButtons || this.navPlacement === C.OFF, outside: this.navPlacement === C.OUTSIDE, inside: this.navPlacement === C.INSIDE, right: !0 })}"> <slot class="content-nav-buttons" name="nextButton" @click="${this.slideForwards}" @keydown="${(t) => this.onKeyDown(t, this.slideForwards)}"> </slot> </span> </div> <faceplate-screen-reader-content aria-live="polite" aria-atomic="true"> ${null !== (t = this.currentAriaLiveMsg) && void 0 !== t ? t : this.generateAriaLiveMsg({ pageIndex: this.pageIndex, pageCount: this.pageCount, numVisible: this.numVisible })} </faceplate-screen-reader-content> `;
      });
  }
  static get styles() {
    return c`:host{display:flex;position:relative;width:inherit;isolation:isolate}.carousel-container{display:flex;height:auto;align-items:center;position:relative;width:100%}::slotted(:not([slot])){height:100%;display:grid;grid-auto-flow:column;transition:transform;transition-timing-function:ease-out;margin:0!important;padding:0!important;list-style:none;position:relative}::slotted([slot=nextButton]),::slotted([slot=prevButton]){display:inline-block}.content-nav-buttons{display:inline-block}.content-nav-buttons-container{position:relative;z-index:2}.content-nav-buttons-container.hide{display:none}.content-nav-buttons-container.outside.left{padding-right:var(--spacer-md)}.content-nav-buttons-container.outside.right{padding-left:var(--spacer-md)}.content-nav-buttons-container.inside{position:absolute;top:50%;transform:translateY(-50%)}.content-nav-buttons-container.inside.left{left:var(--spacer-xs)}.content-nav-buttons-container.inside.right{right:var(--spacer-xs)}#carousel-window{position:relative;overflow:hidden;contain:content;display:flex;flex-direction:column;height:100%}#carousel-list{height:100%;overflow:hidden;position:relative}:host([pagination-placement=outside]) #pagination-container{padding-top:var(--spacer-sm,.5rem)}:host([pagination-placement=inside]) #pagination-container{position:absolute;bottom:var(--rem16);left:0;right:0;margin:0 auto;width:fit-content}.carousel-actions{position:absolute;right:var(--rem8);display:inline-flex;align-items:center;gap:var(--rem12)}.carousel-actions.top{top:var(--rem8)}.carousel-actions.bottom{bottom:var(--rem16)}.pagination-counter{background:var(--color-media-background);height:var(--size-lg);display:inline-block;border-radius:var(--rem16);padding:var(--spacer-2xs) var(--spacer-xs);font:var(--font-12-16-semibold);box-sizing:border-box;gap:var(--rem2)}`;
  }
  get pageIndex() {
    return this._pageIndex;
  }
  get carouselSlot() {
    return this._children.reduce(
      (t, e) => (e.assignedSlot && 'UL' === e.nodeName ? e : t),
      document.createElement('ul')
    );
  }
  connectedCallback() {
    super.connectedCallback(),
      (this._gesture = new b(this, { mouseSupport: !1 })),
      this._gesture.on('swipeleft', this.slideForwards),
      this._gesture.on('swiperight', this.slideBackwards),
      this.initializeResize();
  }
  disconnectedCallback() {
    var t, e, i;
    super.disconnectedCallback(),
      null === (t = this._gesture) || void 0 === t || t.destroy(),
      null === (e = this.resizeObserver) || void 0 === e || e.disconnect(),
      null === (i = this._listMutationObserver) ||
        void 0 === i ||
        i.disconnect();
  }
  firstUpdated() {
    var t;
    null === (t = this._paginationRef.value) ||
      void 0 === t ||
      t.addEventListener('pagination-click', (t) => {
        this.onPaginationClick(t);
      }),
      this.initializeCarousel();
  }
  async handleChildRemoval() {
    const { children: t } = this.carouselSlot;
    this.setChildAndPageCount(t),
      this._firstViewableIndex > this._childCount - 1 && this.slideBackwards(),
      this._childCount || this.toggleDisabledProgressButtons();
    const e = new CustomEvent('__TEST-ONLY_carousel-children-reset');
    this.dispatchEvent(e);
  }
  initListMutationObserver() {
    this._listMutationObserver ||
      ((this._listMutationObserver = new MutationObserver((t) => {
        for (const e of t)
          'childList' === e.type &&
            this.isCarouselInitialized &&
            (e.removedNodes.length > 0
              ? this.handleChildRemoval()
              : e.addedNodes.length > 0 && this.handleChildrenAddition());
      })),
      this.carouselSlot &&
        this._listMutationObserver.observe(this.carouselSlot, {
          childList: !0
        }));
  }
  setChildAndPageCount(t) {
    (this._childCount = t.length),
      (this.pageCount = Math.ceil(this._childCount / this.numVisible));
  }
  async handleChildrenAddition() {
    const t = this._childCount,
      { children: e } = this.carouselSlot;
    this.setChildAndPageCount(e);
    const { width: i } = this.getCarouselDimensions();
    await this.setChildDimensions(i),
      this._childCount > t && this.toggleDisabledProgressButtons();
  }
  get _autoplaySpeed() {
    switch (this.autoplay) {
      case 'off':
        return 0;
      case 'default':
        return 5e3;
      default:
        return parseInt(this.autoplay);
    }
  }
  get animationDuration() {
    return this.advanceAnimation &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 250
      : 0;
  }
  resetDisabledProgressButtons() {
    this.setNavButtonVisibility({ type: 'next', hidden: !1 }),
      this.setNavButtonVisibility({ type: 'previous', hidden: !1 });
  }
};
(P.navButton = ({ placement: s, progress: n, ariaLabel: a }) => {
  const o = n === B.FORWARDS ? 'Next Page' : 'Previous Page';
  return g({
    appearance: s === C.INSIDE ? 'media' : 'secondary',
    size: m.Small,
    leadingIcon: n === B.FORWARDS ? t({ size: e.Small }) : i({ size: e.Small }),
    attributes: { 'aria-label': null != a ? a : o }
  });
}),
  (P.closeButton = ({ attributes: t }) =>
    g({
      appearance: 'media',
      size: m.Small,
      leadingIcon: s({ size: e.Small }),
      attributes: t
    })),
  (P.addButton = ({ children: t, attributes: i }) =>
    g({
      appearance: 'media',
      size: m.Small,
      leadingIcon: n({ size: e.Small }),
      attributes: i,
      children: t
    })),
  a(
    [o({ type: String, attribute: 'nav-placement' })],
    P.prototype,
    'navPlacement',
    void 0
  ),
  a(
    [o({ type: String, attribute: 'pagination-placement' })],
    P.prototype,
    'paginationPlacement',
    void 0
  ),
  a([o({ type: String })], P.prototype, 'autoplay', void 0),
  a(
    [o({ type: Boolean, attribute: 'advance-animation' })],
    P.prototype,
    'advanceAnimation',
    void 0
  ),
  a(
    [o({ type: Number, attribute: 'num-visible' })],
    P.prototype,
    'numVisible',
    void 0
  ),
  a([o({ type: Boolean })], P.prototype, 'infinite', void 0),
  a([o({ type: String })], P.prototype, 'inset', void 0),
  a(
    [o({ type: Boolean, attribute: 'pagination-counter' })],
    P.prototype,
    'paginationCounter',
    void 0
  ),
  a(
    [o({ type: Number, attribute: 'start-index' })],
    P.prototype,
    'startIndex',
    void 0
  ),
  a([o()], P.prototype, 'getPageLabels', void 0),
  a(
    [o({ type: String, attribute: 'current-page-label' })],
    P.prototype,
    'currentPageLabel',
    void 0
  ),
  a(
    [o({ type: String, attribute: 'current-aria-live-msg' })],
    P.prototype,
    'currentAriaLiveMsg',
    void 0
  ),
  a([r()], P.prototype, '_pageIndex', void 0),
  a([r()], P.prototype, 'pageCount', void 0),
  a([r()], P.prototype, 'isCarouselInitialized', void 0),
  a([r()], P.prototype, 'hideProgressButtons', void 0),
  a([r()], P.prototype, 'hasBeenInteractedWith', void 0),
  a([l({ flatten: !0 })], P.prototype, '_children', void 0),
  a(
    [l({ slot: 'prevButton', flatten: !0 })],
    P.prototype,
    '_prevButton',
    void 0
  ),
  a(
    [l({ slot: 'nextButton', flatten: !0 })],
    P.prototype,
    '_nextButton',
    void 0
  ),
  a([r()], P.prototype, 'firstRender', void 0),
  a([r()], P.prototype, 'autoplayInProgress', void 0),
  (P = a([p('faceplate-carousel')], P));
export { S as A, B as C, P as F, x as I, C as N, w as P };
//# sourceMappingURL=faceplate-carousel-a40b8781.js.map
