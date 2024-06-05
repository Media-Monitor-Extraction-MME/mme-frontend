import {
  aS as t,
  I as i,
  aT as e,
  aU as s,
  aV as n,
  _ as a,
  n as o,
  j as l,
  q as r,
  F as h,
  x as d,
  i as c,
  h as u
} from './icon-f94fc1dd.js';
import { P as p } from './faceplate-pagination-indicator-ad9dc651.js';
import { b as g, _ as m, o as f } from './shell-c7aa92cc.js';
import { e as y, n as _ } from './ref-21a8397d.js';
import { T as v } from './TinyGesture-6f7cc1aa.js';
var I, S, b, B;
!(function (t) {
  (t.OUTSIDE = 'outside'), (t.INSIDE = 'inside'), (t.OFF = 'off');
})(I || (I = {})),
  (function (t) {
    (t.NEXT = 'next'), (t.BOTH = 'both'), (t.OFF = 'off');
  })(S || (S = {})),
  (function (t) {
    (t.INSIDE = 'inside'), (t.OUTSIDE = 'outside'), (t.OFF = 'off');
  })(b || (b = {})),
  (function (t) {
    (t.FORWARDS = 'forwards'), (t.BACKWARDS = 'backwards');
  })(B || (B = {}));
let w = class extends h {
  constructor() {
    super(...arguments),
      (this.navPlacement = b.OUTSIDE),
      (this.paginationPlacement = I.OUTSIDE),
      (this.autoplay = 'default'),
      (this.advanceAnimation = !1),
      (this.numVisible = 1),
      (this.infinite = !1),
      (this.inset = S.OFF),
      (this.paginationCounter = !1),
      (this._pageIndex = 0),
      (this._pageCount = 0),
      (this._isCarouselInitialized = !1),
      (this._hideProgressButtons = !1),
      (this._childCount = 0),
      (this._carouselStartIndex = 0),
      (this._carouselMarkersAdded = !1),
      (this._atBoundLimit = !1),
      (this._autoplayTimeoutId = null),
      (this._isInsetBothAllowed = !1),
      (this._lowerBoundOffset = 0),
      (this._upperBoundOffset = 0),
      (this._prevButtonHidden = !1),
      (this._isNextButtonHidden = !1),
      (this._gap = 16),
      (this._autoplayPaginationRef = y()),
      (this._paginationRef = y()),
      (this._gesture = new v(this, { mouseSupport: !1 })),
      (this.firstRender = !0),
      (this.autoplayInProgress = !1),
      (this.updated = async (t) => {
        (t.has('numVisible') ||
          t.has('infinite') ||
          t.has('inset') ||
          t.has('autoplay') ||
          t.has('advanceAnimation') ||
          t.has('navPlacement') ||
          t.has('paginationPlacement')) &&
          ((t.has('inset') || t.has('navPlacement')) &&
            (this.cachedDimensions = null),
          this.firstRender ||
            (this.resetCarousel(), this.initializeCarousel()));
      }),
      (this.initializeResize = () => {
        new ResizeObserver(async () => {
          if (!this.firstRender) {
            (this.cachedDimensions = null),
              await new Promise((t) => requestAnimationFrame(t));
            const { width: t, height: i } = this.getCarouselDimensions();
            this.showFirstChild({
              width: t,
              height: i,
              startIndex: this._carouselStartIndex
            });
          }
        }).observe(this);
      }),
      (this.onPaginationClick = (t) => {
        this.goToPage(t.detail.pageIndex);
      }),
      (this.initializeCarousel = async () => {
        if (this._isCarouselInitialized) return;
        const { children: t } = this.carouselSlot;
        (this._childCount = t.length),
          (this._pageCount = Math.ceil(this._childCount / this.numVisible)),
          this.handleAutoPlay(),
          this.infinite
            ? ((this._isInsetBothAllowed =
                this._childCount >= 3 && this.inset === S.BOTH),
              this.cloneBoundElements({ children: t }))
            : this._childCount <= this.numVisible
              ? (this._hideProgressButtons = !0)
              : this.setNavButtonVisibility({ type: 'previous', hidden: !0 });
        if (
          (this.navPlacement === b.INSIDE &&
            this.paginationPlacement === I.INSIDE) ||
          !this.firstRender
        ) {
          const {
            width: t,
            startIndex: i,
            height: e
          } = await this.getCarouselDimensions();
          this.showFirstChild({ width: t, height: e, startIndex: i });
        }
        (this.firstRender = !1), (this._isCarouselInitialized = !0);
      }),
      (this.showFirstChild = async ({ width: t, startIndex: i }) => {
        await this.setChildDimensions({ width: t }),
          await this.initialTranslate({ startIndex: i }),
          await this.setTabIndex({ start: i, end: i + this.numVisible - 1 });
        const e = new CustomEvent('__TEST-ONLY_carousel-children-ready');
        this.dispatchEvent(e);
      }),
      (this.handleAutoPlay = async () => {
        if ('off' === this.autoplay || isNaN(this._autoplaySpeed)) return;
        this.autoplayInProgress && this.clearTimeout(),
          (this.autoplayInProgress = !0);
        const t = this._pageIndex;
        (this.infinite || t < this._pageCount - 1) &&
          (this._autoplayPaginationRef?.value?.animatePill(),
          (this._autoplayTimeoutId = setTimeout(async () => {
            await this.slideForwards(), this.handleAutoPlay();
          }, this._autoplaySpeed)));
      }),
      (this.cachedDimensions = null),
      (this.getCarouselDimensions = () => {
        if (this.cachedDimensions) return this.cachedDimensions;
        this.inset !== S.OFF &&
          ((this.carouselSlot.style.gap = 'var(--spacer-xs, .5rem)'),
          (this._gap =
            parseInt(
              getComputedStyle(this.carouselSlot).getPropertyValue('gap')
            ) || 0));
        let t = 0;
        this.infinite && (t = this._lowerBoundOffset);
        const i = this.shadowRoot?.host.getBoundingClientRect();
        let { width: e } = i;
        if (this.navPlacement === b.OUTSIDE) {
          const { width: t } = this.shadowRoot
            .querySelector('.content-nav-buttons-container')
            .getBoundingClientRect();
          e -= 2 * t;
        }
        return (
          (this.cachedDimensions = {
            startIndex: t,
            width: e,
            height: i.height
          }),
          this.cachedDimensions
        );
      }),
      (this.calcChildWidth = (t) => {
        let i = 0,
          e = this._gap * (this.numVisible - 1) || 0;
        this.inset !== S.OFF &&
          ((i = 48 * (this.inset === S.NEXT ? 1 : 2)),
          (e =
            this._gap *
            (this.inset === S.NEXT ? this.numVisible : this.numVisible + 1)));
        return (t - e - i) / this.numVisible;
      }),
      (this.setChildDimensions = async ({ width: t }) => {
        for (const i of this.carouselSlot.children) {
          const e = i;
          t && (e.style.width = `${this.calcChildWidth(t)}px`),
            '100%' !== e.style.height && (e.style.height = '100%'),
            'hidden' !== e.style.overflow && (e.style.overflow = 'hidden');
        }
      }),
      (this.initialTranslate = async ({ startIndex: t }) => {
        await this.handleTranslateXWithOffset(this.carouselSlot.children[t]);
      }),
      (this.handleTranslateXWithOffset = async (t) => {
        const i = this._isInsetBothAllowed
          ? `calc(-1 * (${t.offsetLeft}px - 48px - ${this._gap}px))`
          : -1 * t.offsetLeft + 'px';
        return (
          (this.carouselSlot.style.transform = `translate3d(${i}, 0,0)`),
          await Promise.all(
            this.carouselSlot.getAnimations().map((t) => t.finished)
          ).catch((t) => {
            (t instanceof DOMException && 'AbortError' === t.name) ||
              console.error(t);
          })
        );
      }),
      (this.slideCarousel = async ({
        isWithinBounds: t,
        direction: i,
        requestedIndex: e,
        onSuccessfulSlide: s
      }) => {
        const { children: n } = this.carouselSlot;
        let a = !1;
        if (
          (this.firstRender ||
            this.carouselSlot.style.transitionDuration ||
            (this.carouselSlot.style.transitionDuration =
              (this.advanceAnimation ? 250 : 0) + 'ms'),
          t)
        ) {
          const t =
              (0 === e && i === B.BACKWARDS) ||
              (e === this._pageCount - 1 && i === B.FORWARDS),
            s = e * this.numVisible,
            o =
              s + this.numVisible - 1 > this._childCount
                ? this._carouselStartIndex + (this._childCount - s)
                : s + this._lowerBoundOffset;
          await this.handleTranslateXWithOffset(n[o]),
            (this._carouselStartIndex = o),
            (this._atBoundLimit = t),
            this.toggleDisabledProgressButtons({ direction: i }),
            this.setTabIndex({ start: o, end: o + this.numVisible - 1 }),
            (a = !0);
        } else
          this.infinite &&
            (await this.handleInfiniteSlide({ children: n, direction: i }),
            (a = !0));
        a && s && s();
        const o = new CustomEvent('__TEST-ONLY_carousel-slide');
        this.dispatchEvent(o);
      }),
      (this.cloneBoundElements = ({ children: t }) => {
        let i = 0;
        const e = this._childCount - 1,
          s = this.inset !== S.OFF ? 1 : 0;
        for (let e = 0; e < this.numVisible + s; e++) {
          const s = t[e + i]?.cloneNode(!0);
          s instanceof HTMLElement &&
            ((s.dataset.fpUiCarouselMarker = 'true'),
            (s.id = Math.random().toString(16).slice(2)),
            this.carouselSlot.append(s),
            ++this._upperBoundOffset);
        }
        i = 0;
        const n = this._isInsetBothAllowed ? 1 : 0;
        for (let s = 0; s < this.numVisible + n; s++) {
          const n = t[e - s + i++]?.cloneNode(!0);
          n instanceof HTMLElement &&
            ((n.dataset.fpUiCarouselMarker = 'true'),
            (n.id = Math.random().toString(16).slice(2)),
            this.carouselSlot.prepend(n),
            ++this._lowerBoundOffset);
        }
        (this._carouselStartIndex = this._lowerBoundOffset),
          (this._carouselMarkersAdded = !0);
      }),
      (this.handleInfiniteSlide = async ({ children: t, direction: i }) => {
        (this.carouselSlot.style.transitionDuration = '0s'),
          i === B.BACKWARDS
            ? (this._carouselStartIndex = t.length - this._upperBoundOffset)
            : (this._carouselStartIndex = this._isInsetBothAllowed ? 1 : 0),
          await this.handleTranslateXWithOffset(t[this._carouselStartIndex]),
          this.advanceAnimation &&
            (this.carouselSlot.style.transitionDuration = '250ms'),
          (this._carouselStartIndex =
            i === B.BACKWARDS
              ? this._carouselStartIndex - this.numVisible
              : this._carouselStartIndex + this.numVisible),
          await this.handleTranslateXWithOffset(t[this._carouselStartIndex]),
          this.setTabIndex({
            start: this._carouselStartIndex,
            end: this._carouselStartIndex + this.numVisible - 1
          });
      }),
      (this.setNavButtonVisibility = ({ type: t, hidden: i }) => {
        if (this.navPlacement === b.OFF) return;
        const e = i ? '0' : '1',
          s = i ? 'none' : 'auto',
          n = i ? 'none' : 'auto',
          a = this._nextButton && this._nextButton[0]?.firstElementChild,
          o = this._prevButton && this._prevButton[0]?.firstElementChild;
        'next' === t && a
          ? ((a.style.opacity = e),
            (a.style.pointerEvents = s),
            (a.style.touchAction = n),
            (this._isNextButtonHidden = i))
          : o &&
            ((o.style.opacity = e),
            (o.style.pointerEvents = s),
            (o.style.touchAction = n),
            (this._prevButtonHidden = i));
      }),
      (this.toggleDisabledProgressButtons = ({ direction: t }) => {
        this.infinite ||
          (t === B.FORWARDS
            ? (this._atBoundLimit &&
                this.setNavButtonVisibility({ type: 'next', hidden: !0 }),
              this.setNavButtonVisibility({ type: 'previous', hidden: !1 }))
            : t === B.BACKWARDS &&
              (this._atBoundLimit &&
                this.setNavButtonVisibility({ type: 'previous', hidden: !0 }),
              this.setNavButtonVisibility({ type: 'next', hidden: !1 })));
      }),
      (this.resetCarousel = () => {
        const { children: t } = this.carouselSlot;
        if (this._carouselMarkersAdded) {
          let i = 0;
          const e = t.length;
          for (let s = 0; s < e; s++) {
            const e = t[i];
            e instanceof HTMLElement && e.dataset.fpUiCarouselMarker
              ? e.remove()
              : i++;
          }
        }
        this.cancelAutoPlay(),
          this.resetDisabledProgressButtons(),
          (this._carouselStartIndex = 0),
          (this._pageIndex = 0),
          (this._pageCount = 0),
          (this._isCarouselInitialized = !1),
          (this._carouselMarkersAdded = !1),
          (this._hideProgressButtons = !1),
          (this._isInsetBothAllowed = !1),
          (this._lowerBoundOffset = 0),
          (this._upperBoundOffset = 0);
      }),
      (this.clearTimeout = (t) => {
        'number' == typeof this._autoplayTimeoutId &&
          (window.clearTimeout(this._autoplayTimeoutId),
          (this.autoplayInProgress = !1),
          t && t());
      }),
      (this.cancelAutoPlay = () => {
        this.clearTimeout(() =>
          this._autoplayPaginationRef?.value?.resetAnimations()
        );
      }),
      (this.onListItemKeydown = (t) => {
        'ArrowLeft' === t.key
          ? this.slideBackwards(t)
          : 'ArrowRight' === t.key && this.slideForwards(t);
      }),
      (this.setTabIndex = async ({ start: t, end: i }) => {
        const { children: e } = this.carouselSlot;
        for (let s = 0; s < this._childCount; s++)
          e[s].tabIndex = s >= t && s <= i ? 0 : -1;
      }),
      (this.goToPage = (t) => {
        if (t < 0 || t >= this._pageCount) return;
        let i = B.BACKWARDS;
        t > this._pageIndex && (i = B.FORWARDS),
          this.slideCarousel({
            isWithinBounds: !0,
            direction: i,
            requestedIndex: t,
            onSuccessfulSlide: () => (this._pageIndex = t)
          });
      }),
      (this.onInterruptedAutoplay = async (t) => {
        await t(), this.handleAutoPlay();
      }),
      (this.slideHelper = async ({ navButtonDisabled: t, slide: i, e }) => {
        t ||
          (this._autoplayTimeoutId && e
            ? this.onInterruptedAutoplay(i)
            : await i());
      }),
      (this.slideForwards = async (t) => {
        const i = this._pageIndex + 1,
          e = i < this._pageCount;
        await this.slideHelper({
          navButtonDisabled: this._isNextButtonHidden,
          slide: async () =>
            this.slideCarousel({
              isWithinBounds: e,
              direction: B.FORWARDS,
              requestedIndex: i,
              onSuccessfulSlide: () => {
                this._pageIndex = e ? i : 0;
              }
            }),
          e: t
        });
      }),
      (this.onKeyDown = (t, i) => {
        ('Enter' !== t.key && 'Space' !== t.key) || i(t);
      }),
      (this.slideBackwards = async (t) => {
        const i = this._pageIndex - 1,
          e = i >= 0;
        await this.slideHelper({
          navButtonDisabled: this._prevButtonHidden,
          slide: async () =>
            this.slideCarousel({
              isWithinBounds: e,
              direction: B.BACKWARDS,
              requestedIndex: i,
              onSuccessfulSlide: () => {
                this._pageIndex = e ? i : this._pageCount - 1;
              }
            }),
          e: t
        });
      }),
      (this.render = () =>
        d`\n <div class="carousel-container">\n <span \n class="${f({ 'content-nav-buttons-container': !0, hide: this._hideProgressButtons || this.navPlacement === b.OFF, outside: this.navPlacement === b.OUTSIDE, inside: this.navPlacement === b.INSIDE, left: !0 })}">\n <slot \n class="content-nav-buttons" \n name="prevButton" \n @click="${this.slideBackwards}" \n @keydown="${(t) => this.onKeyDown(t, this.slideBackwards)}"></slot>\n </span>\n <div id="carousel-window">\n <div id="carousel-list">\n <slot @keydown="${this.onListItemKeydown}"></slot>\n <span class="carousel-actions top">\n ${this.paginationCounter ? d`<span class="pagination-counter">\n <span>${this._pageIndex + 1}</span>\n <span>/</span>\n <span>${this._pageCount}</span>\n </span>` : null}\n <slot name="closeButton"></slot>\n </span>\n <span class="carousel-actions bottom">\n <slot name="addButton"></slot>\n </span>\n </div>\n <div id="pagination-container" class="${f({ inside: this.paginationPlacement === I.INSIDE })}">\n ${this.paginationPlacement === I.OFF ? null : this._autoplaySpeed ? d`<faceplate-carousel-pagination \n ${_(this._autoplayPaginationRef)}\n pages="${this._pageCount}" \n page-index="${this._pageIndex}" \n autoplay="${this._autoplaySpeed}" \n appearance="${this.paginationPlacement === I.INSIDE ? p.MEDIA : p.PLAIN}" \n>\n </faceplate-carousel-pagination>` : d`<faceplate-pagination-indicator \n ${_(this._paginationRef)}\n numbered\n appearance="${this.paginationPlacement === I.INSIDE ? p.MEDIA : p.PLAIN}" \n animation-duration="${this.advanceAnimation ? 250 : 0}" \n pages="${this._pageCount}" \n page-index="${this._pageIndex}" \n></faceplate-pagination-indicator>`}\n </div>\n </div>\n <span \n class="${f({ 'content-nav-buttons-container': !0, hide: this._hideProgressButtons || this.navPlacement === b.OFF, outside: this.navPlacement === b.OUTSIDE, inside: this.navPlacement === b.INSIDE, right: !0 })}">\n <slot \n class="content-nav-buttons" \n name="nextButton" \n @click="${this.slideForwards}" \n @keydown="${(t) => this.onKeyDown(t, this.slideForwards)}">\n </slot>\n </span>\n </div>\n \n `);
  }
  static get styles() {
    return c`:host{display:flex;position:relative;width:inherit;isolation:isolate}.carousel-container{display:flex;height:auto;align-items:center;position:relative;width:100%}::slotted(:not([slot])){height:100%;display:grid;grid-auto-flow:column;transition:transform;transition-timing-function:ease-out;margin:0!important;padding:0!important;list-style:none;position:relative}::slotted([slot=nextButton]),::slotted([slot=prevButton]){display:inline-block}.content-nav-buttons{display:inline-block}.content-nav-buttons-container{position:relative;z-index:2}.content-nav-buttons-container.hide{display:none}.content-nav-buttons-container.outside.left{padding-right:var(--spacer-md)}.content-nav-buttons-container.outside.right{padding-left:var(--spacer-md)}.content-nav-buttons-container.inside{position:absolute;top:50%;transform:translateY(-50%)}.content-nav-buttons-container.inside.left{left:var(--spacer-xs)}.content-nav-buttons-container.inside.right{right:var(--spacer-xs)}#carousel-window{position:relative;overflow:hidden;contain:content;display:flex;flex-direction:column;height:100%}#carousel-list{height:100%;overflow:hidden;position:relative}:host([pagination-placement=outside]) #pagination-container{padding-top:var(--spacer-sm,.5rem)}:host([pagination-placement=inside]) #pagination-container{position:absolute;bottom:var(--rem16);left:0;right:0;margin:0 auto}.carousel-actions{position:absolute;right:var(--rem8);display:inline-flex;align-items:center;gap:var(--rem12)}.carousel-actions.top{top:var(--rem8)}.carousel-actions.bottom{bottom:var(--rem16)}.pagination-counter{background:var(--color-media-background);height:var(--size-lg);display:inline-block;border-radius:var(--rem16);padding:var(--spacer-2xs) var(--spacer-xs);font:var(--font-12-16-semibold);box-sizing:border-box;gap:var(--rem2)}`;
  }
  get carouselSlot() {
    return this._children.reduce(
      (t, i) => (i.assignedSlot && 'UL' === i.nodeName ? i : t),
      document.createElement('ul')
    );
  }
  connectedCallback() {
    super.connectedCallback(),
      this._gesture.on('swipeleft', this.slideForwards),
      this._gesture.on('swiperight', this.slideBackwards),
      this.initializeResize();
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this._gesture.destroy(),
      this.resizeObserver?.disconnect();
  }
  firstUpdated() {
    this._paginationRef.value?.addEventListener('pagination-click', (t) => {
      this.onPaginationClick(t);
    }),
      this.initializeCarousel();
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
  resetDisabledProgressButtons() {
    this.setNavButtonVisibility({ type: 'next', hidden: !1 }),
      this.setNavButtonVisibility({ type: 'previous', hidden: !1 });
  }
};
(w.navButton = ({ placement: s, progress: n, ariaLabel: a }) =>
  g({
    appearance: s === b.INSIDE ? 'media' : 'secondary',
    size: m.Small,
    leadingIcon: n === B.FORWARDS ? t({ size: i.Small }) : e({ size: i.Small }),
    attributes: {
      'aria-label': a || '' + (B.FORWARDS ? 'Next Page' : 'Previous Page')
    }
  })),
  (w.closeButton = ({ attributes: t }) =>
    g({
      appearance: 'media',
      size: m.Small,
      leadingIcon: s({ size: i.Small }),
      attributes: t
    })),
  (w.addButton = ({ children: t, attributes: e }) =>
    g({
      appearance: 'media',
      size: m.Small,
      leadingIcon: n({ size: i.Small }),
      attributes: e,
      children: t
    })),
  a(
    [o({ type: String, attribute: 'nav-placement' })],
    w.prototype,
    'navPlacement',
    void 0
  ),
  a(
    [o({ type: String, attribute: 'pagination-placement' })],
    w.prototype,
    'paginationPlacement',
    void 0
  ),
  a([o({ type: String })], w.prototype, 'autoplay', void 0),
  a(
    [o({ type: Boolean, attribute: 'advance-animation' })],
    w.prototype,
    'advanceAnimation',
    void 0
  ),
  a(
    [o({ type: Number, attribute: 'num-visible' })],
    w.prototype,
    'numVisible',
    void 0
  ),
  a([o({ type: Boolean })], w.prototype, 'infinite', void 0),
  a([o({ type: String })], w.prototype, 'inset', void 0),
  a(
    [o({ type: Boolean, attribute: 'pagination-counter' })],
    w.prototype,
    'paginationCounter',
    void 0
  ),
  a([l()], w.prototype, '_pageIndex', void 0),
  a([l()], w.prototype, '_pageCount', void 0),
  a([l()], w.prototype, '_isCarouselInitialized', void 0),
  a([l()], w.prototype, '_hideProgressButtons', void 0),
  a([r({ flatten: !0 })], w.prototype, '_children', void 0),
  a(
    [r({ slot: 'prevButton', flatten: !0 })],
    w.prototype,
    '_prevButton',
    void 0
  ),
  a(
    [r({ slot: 'nextButton', flatten: !0 })],
    w.prototype,
    '_nextButton',
    void 0
  ),
  a([l()], w.prototype, 'firstRender', void 0),
  a([l()], w.prototype, 'autoplayInProgress', void 0),
  (w = a([u('faceplate-carousel-clone')], w));
export { B as C, w as F };
//# sourceMappingURL=faceplate-carousel-clone-c394c4c0.js.map
