import {
  _ as t,
  x as e,
  n as i,
  h as s,
  l as n,
  j as a,
  s as o
} from './icon-f94fc1dd.js';
import {
  I as l,
  N as r,
  P as h,
  A as c,
  C as d,
  F as u
} from './faceplate-carousel-a40b8781.js';
import {
  D as p,
  o as g,
  c as b,
  q as m,
  l as v,
  a as f,
  bd as x,
  am as I,
  t as y
} from './shell-c7aa92cc.js';
import { P as w } from './faceplate-pagination-indicator-ad9dc651.js';
import { n as $ } from './ref-21a8397d.js';
import { F as C } from './faceplate-carousel-clone-c394c4c0.js';
let A = class extends C {
  constructor() {
    super(...arguments),
      (this.initializeCarousel = async () => {
        if (this._isCarouselInitialized) return;
        const { children: t } = this.carouselSlot;
        (this._childCount = t.length),
          (this._pageCount = Math.ceil(this._childCount / this.numVisible)),
          this.handleAutoPlay(),
          (this._isInsetBothAllowed =
            this._childCount >= 2 && this.inset === l.BOTH),
          this.infinite
            ? this.cloneBoundElements({ children: t })
            : this._childCount <= this.numVisible
              ? (this._hideProgressButtons = !0)
              : this.setNavButtonVisibility({ type: 'previous', hidden: !0 });
        if (
          (this.navPlacement === r.INSIDE &&
            this.paginationPlacement === h.INSIDE) ||
          !this.firstRender
        ) {
          const {
            width: t,
            startIndex: e,
            height: i
          } = await this.getCarouselDimensions();
          this.showFirstChild({ width: t, height: i, startIndex: e });
        }
        (this.firstRender = !1), (this._isCarouselInitialized = !0);
      }),
      (this.calcChildWidth = (t) => {
        const e = t - 32;
        return this.deviceType === p.MOBILE ? 0.9 * e : 0.75 * e;
      }),
      (this.initialTranslate = async ({ startIndex: t }) => {
        await this.handleTranslateXWithOffset(this.carouselSlot.children[t], t);
      }),
      (this.initializeResize = () => {
        new ResizeObserver(async () => {
          if (!this.firstRender) {
            (this.cachedDimensions = null),
              await new Promise((t) => requestAnimationFrame(t));
            const { width: t, height: e } = this.getCarouselDimensions();
            this.showFirstChild({
              width: t,
              height: e,
              startIndex: this._carouselStartIndex
            });
          }
        }).observe(this);
      }),
      (this.handleTranslateXWithOffset = async (t, e = -1) => {
        let i = '';
        if (this._isInsetBothAllowed && this.exceedMarginAllowed)
          switch (e) {
            case 0:
              i = `calc(-1 * ${t.offsetLeft}px + 1rem)`;
              break;
            case this._pageCount - 1:
              i = `calc(\n              -1 * (${t.offsetLeft}px - ${2 * this.insetWidth}px - ${2 * this._gap}px)\n              - 1rem)`;
              break;
            default:
              i = `calc(-1 * (${t.offsetLeft}px - ${this.insetWidth}px - ${this._gap}px))`;
          }
        else if (this._isInsetBothAllowed && !this.exceedMarginAllowed)
          switch (e) {
            case 0:
              i = `calc(-1 * ${t.offsetLeft}px)`;
              break;
            case this._pageCount - 1:
              i = `calc(\n            -1 * (${t.offsetLeft}px - ${2 * this.insetWidth}px - ${2 * this._gap}px))`;
              break;
            default:
              i = `calc(-1 * (${t.offsetLeft}px - ${this.insetWidth}px - ${this._gap}px))`;
          }
        else i = -1 * t.offsetLeft + 'px';
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
        direction: e,
        requestedIndex: i,
        onSuccessfulSlide: s
      }) => {
        const { children: n } = this.carouselSlot;
        let a = !1;
        if (
          (this.firstRender ||
            this.carouselSlot.style.transitionDuration ||
            (this.carouselSlot.style.transitionDuration = `${this.advanceAnimation ? c : 0}ms`),
          t)
        ) {
          const t =
              (0 === i && e === d.BACKWARDS) ||
              (i === this._pageCount - 1 && e === d.FORWARDS),
            s = i * this.numVisible,
            o =
              s + this.numVisible - 1 > this._childCount
                ? this._carouselStartIndex + (this._childCount - s)
                : s + this._lowerBoundOffset;
          await this.handleTranslateXWithOffset(n[o], o),
            (this._carouselStartIndex = o),
            (this._atBoundLimit = t),
            this.toggleDisabledProgressButtons({ direction: e }),
            this.setTabIndex({ start: o, end: o + this.numVisible - 1 }),
            (a = !0);
        } else
          this.infinite &&
            (await this.handleInfiniteSlide({ children: n, direction: e }),
            (a = !0));
        a && s && s();
        const o = new CustomEvent('__TEST-ONLY_carousel-slide');
        this.dispatchEvent(o);
        const l = new CustomEvent('faceplate-carousel-click', {
          detail: {
            direction: e,
            prevPositionIndex: this._pageIndex,
            currPositionIndex: i,
            num_items: this._childCount
          },
          bubbles: !0,
          composed: !0
        });
        this.dispatchEvent(l);
      }),
      (this.render = () =>
        e`\n <div class="carousel-container">\n <span \n class="${g({ 'content-nav-buttons-container': !0, hide: this._hideProgressButtons || this.navPlacement === r.OFF, outside: this.navPlacement === r.OUTSIDE, inside: this.navPlacement === r.INSIDE, left: !0 })}">\n <slot \n class="content-nav-buttons" \n name="prevButton" \n @click="${this.slideBackwards}" \n @keydown="${(t) => this.onKeyDown(t, this.slideBackwards)}"></slot>\n </span>\n <div id="carousel-window">\n <div id="carousel-list">\n <slot @keydown="${this.onListItemKeydown}"></slot>\n <span class="carousel-actions top">\n ${this.paginationCounter ? e`<span class="pagination-counter">\n <span>${this._pageIndex + 1}</span>\n <span>/</span>\n <span>${this._pageCount}</span>\n </span>` : null}\n <slot name="closeButton"></slot>\n </span>\n <span class="carousel-actions bottom">\n <slot name="addButton"></slot>\n </span>\n </div>\n <div id="pagination-container" class="${g({ inside: this.paginationPlacement === h.INSIDE })}">\n ${this.paginationPlacement === h.OFF ? null : this._autoplaySpeed ? e`<faceplate-carousel-pagination \n ${$(this._autoplayPaginationRef)}\n pages="${this._pageCount}" \n page-index="${this._pageIndex}" \n autoplay="${this._autoplaySpeed}" \n appearance="${this.paginationPlacement === h.INSIDE ? w.MEDIA : w.PLAIN}" \n>\n </faceplate-carousel-pagination>` : e`<faceplate-pagination-indicator \n ${$(this._paginationRef)}\n numbered\n appearance="${this.paginationPlacement === h.INSIDE ? w.MEDIA : w.PLAIN}" \n animation-duration="${this.advanceAnimation ? c : 0}" \n pages="${this._pageCount}" \n page-index="${this._pageIndex}" \n></faceplate-pagination-indicator>`}\n </div>\n </div>\n <span \n class="${g({ 'content-nav-buttons-container': !0, hide: this._hideProgressButtons || this.navPlacement === r.OFF, outside: this.navPlacement === r.OUTSIDE, inside: this.navPlacement === r.INSIDE, right: !0 })}">\n <slot \n class="content-nav-buttons" \n name="nextButton" \n @click="${this.slideForwards}" \n @keydown="${(t) => this.onKeyDown(t, this.slideForwards)}">\n </slot>\n </span>\n </div>\n \n `);
  }
  get carouselSlot() {
    return this._children.reduce(
      (t, e) => (e.assignedSlot && 'UL' === e.nodeName ? e : t),
      document.createElement('ul')
    );
  }
  get numInsets() {
    switch (this.inset) {
      case l.BOTH:
        return 2;
      case l.NEXT:
        return 1;
      default:
        return 0;
    }
  }
  get numGaps() {
    return this.numVisible + this.numInsets - 1;
  }
  get insetWidth() {
    const { width: t } = this.getCarouselDimensions();
    return (
      (t - this.calcChildWidth(t) - this._gap * this.numGaps) / this.numInsets
    );
  }
};
t(
  [i({ type: p, attribute: 'device-type' })],
  A.prototype,
  'deviceType',
  void 0
),
  t(
    [i({ type: Boolean, attribute: 'exceed-margin-allowed' })],
    A.prototype,
    'exceedMarginAllowed',
    void 0
  ),
  (A = t([s('faceplate-carousel-evolved')], A));
const k = b(m(o));
let S = class extends k {
  constructor() {
    super(...arguments),
      (this.postId = ''),
      (this.carouselStyle = ''),
      (this.advanceAnimation = !1),
      (this.fetchAheadCount = 2),
      (this.useMediaLightbox = !1),
      (this.useCarouselEvolution = !1),
      (this.isInsideLightbox = !1),
      (this.pubsub = new v(this)),
      (this.currentPageNumber = 1),
      (this.observerIsIntersectingCallback = () => {
        this.fetchAhead(), this.disableObserver();
      }),
      (this.fetchAhead = () => {
        const t = this.currentPageNumber,
          e = t + this.fetchAheadCount;
        this.pagesElms.slice(t, e).forEach((t) => {
          t.querySelectorAll('[data-lazy-src]').forEach((t) => {
            const e = t.getAttribute('data-lazy-src'),
              i = t.getAttribute('data-lazy-srcset');
            e && (t.setAttribute('src', e), t.removeAttribute('data-lazy-src')),
              i &&
                (t.setAttribute('srcset', i),
                t.removeAttribute('data-lazy-srcset'));
          });
        });
      }),
      (this.handleTriggerLightbox = ({ postId: t }) => {
        t === this.postId && this.handleImageClick();
      }),
      (this.lightboxClosedHandler = () => {
        this.isInsideLightbox && (this.isInsideLightbox = !1);
      }),
      (this.lightboxOpenedHandler = () => {
        this.isInsideLightbox || (this.isInsideLightbox = !0);
      }),
      (this.generateAriaLiveMsg = ({
        pageIndex: t,
        numVisible: e,
        pageCount: i
      }) => `Item ${t * e + 1} of ${i}`);
  }
  get pagesElms() {
    const t = this?.querySelectorAll('li[slot^="page"]');
    return Array.from(t || []);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.enableObserver({ rootMargin: '800px' }),
      this.pubsub.subscribe(f.LightboxClosed, this.lightboxClosedHandler, !1),
      this.pubsub.subscribe(f.LightboxOpened, this.lightboxOpenedHandler, !1),
      this.useMediaLightbox &&
        this.pubsub.subscribe(
          f.TriggerLightboxOpen,
          this.handleTriggerLightbox,
          !1
        );
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.disableObserver(),
      this.pubsub.unsubscribe(f.LightboxClosed, this.lightboxClosedHandler),
      this.pubsub.unsubscribe(f.LightboxOpened, this.lightboxOpenedHandler),
      this.useMediaLightbox &&
        this.pubsub.unsubscribe(
          f.TriggerLightboxOpen,
          this.handleTriggerLightbox
        );
  }
  handlePaginationClick(t) {
    this.currentPageNumber = t.detail.pageIndex + 1;
  }
  handleArrowClick(t, e) {
    if (
      (e === x.Forward
        ? (this.currentPageNumber++, this.fetchAhead())
        : this.currentPageNumber--,
      !this.useCarouselEvolution)
    ) {
      const t = e === x.Forward ? d.FORWARDS : d.BACKWARDS;
      this.dispatchEvent(
        new CustomEvent('faceplate-carousel-click', {
          detail: { direction: t },
          bubbles: !0
        })
      );
    }
  }
  handleImageClick() {
    this.useMediaLightbox &&
      (I(f.LightboxOpen, {
        element: this.parentElement,
        attributes: { permalink: this.permalink }
      }),
      (this.isInsideLightbox = !0));
  }
  handleKeyDown(t, e) {
    'Enter' === t.code && this.handleArrowClick(t, e);
  }
  handleKeyDownCarousel(t) {
    const e = t;
    'ArrowLeft' === e.code
      ? this.handleArrowClick(t, x.Backward)
      : 'ArrowRight' === e.code
        ? this.handleArrowClick(t, x.Forward)
        : !this.useMediaLightbox ||
          ('Enter' !== e.code && 'Space' !== e.code) ||
          this.handleImageClick();
  }
  render() {
    const t =
      this.carouselStyle +
      (this.isInsideLightbox ? ' max-height: 100%; height: 100%;' : '');
    if (this.useCarouselEvolution)
      return e`\n <div \n class="relative" \n style="${n(this.isInsideLightbox ? 'height: 100%' : void 0)}" \n>\n <faceplate-carousel-evolved \n id="post-gallery-${this.postId}" \n nav-placement="${r.INSIDE}" \n num-visible="1" \n autoplay="off" \n style="${t}" \n inset="${l.BOTH}" \n pagination-placement="${h.OFF}" \n device-type="${this.deviceType}" \n ?advance-animation="${this.advanceAnimation}" \n ?exceed-margin-allowed="${this.exceedMarginAllowed}" \n>\n <span \n slot="prevButton" \n @click="${(t) => this.handleArrowClick(t, x.Backward)}" \n @keydown="${(t) => this.handleKeyDown(t, x.Backward)}" \n>\n ${A.navButton({ placement: r.INSIDE, progress: d.BACKWARDS })}\n </span>\n <slot \n class="${this.useMediaLightbox && !this.isInsideLightbox ? 'cursor-pointer' : ''}" \n @click="${this.handleImageClick}" \n @keydown="${this.handleKeyDownCarousel}" \n></slot>\n <span \n slot="nextButton" \n @click="${(t) => this.handleArrowClick(t, x.Forward)}" \n @keydown="${(t) => this.handleKeyDown(t, x.Forward)}" \n>\n ${A.navButton({ placement: r.INSIDE, progress: d.FORWARDS })}\n </span>\n </faceplate-carousel-evolved>\n </div>\n `;
    return e`\n <div \n class="relative" \n style="${n(this.isInsideLightbox ? 'height: 100%' : void 0)}" \n>\n <faceplate-carousel \n id="post-gallery-${this.postId}" \n nav-placement="${r.INSIDE}" \n num-visible="1" \n autoplay="off" \n style="${t}" \n inset="${l.OFF}" \n pagination-placement="${h.INSIDE}" \n ?advance-animation="${this.advanceAnimation}" \n current-page-label="Current page" \n .getPageLabels="${(t) => `Page ${t + 1}`}" \n current-aria-live-msg="${this.generateAriaLiveMsg({ pageIndex: this.currentPageNumber - 1, pageCount: this.pagesElms.length, numVisible: 1 })}" \n @pagination-click="${this.handlePaginationClick}" \n>\n <span \n slot="prevButton" \n @click="${(t) => this.handleArrowClick(t, x.Backward)}" \n @keydown="${(t) => this.handleKeyDown(t, x.Backward)}" \n>\n ${u.navButton({ placement: r.INSIDE, progress: d.BACKWARDS, ariaLabel: 'Previous page' })}\n </span>\n <slot \n class="${this.useMediaLightbox && !this.isInsideLightbox ? 'cursor-pointer' : ''}" \n @click="${this.handleImageClick}" \n @keydown="${this.handleKeyDownCarousel}" \n></slot>\n <span \n slot="nextButton" \n @click="${(t) => this.handleArrowClick(t, x.Forward)}" \n @keydown="${(t) => this.handleKeyDown(t, x.Forward)}" \n>\n ${u.navButton({ placement: r.INSIDE, progress: d.FORWARDS, ariaLabel: 'Next page' })}\n </span>\n </faceplate-carousel>\n </div>\n `;
  }
};
(S.styles = [y]),
  t([i({ type: String, attribute: 'post-id' })], S.prototype, 'postId', void 0),
  t(
    [i({ type: String, attribute: 'carousel-style' })],
    S.prototype,
    'carouselStyle',
    void 0
  ),
  t(
    [i({ type: Boolean, attribute: 'advance-animation' })],
    S.prototype,
    'advanceAnimation',
    void 0
  ),
  t(
    [i({ type: Number, attribute: 'fetch-ahead-count' })],
    S.prototype,
    'fetchAheadCount',
    void 0
  ),
  t(
    [i({ type: Boolean, attribute: 'use-media-lightbox' })],
    S.prototype,
    'useMediaLightbox',
    void 0
  ),
  t(
    [i({ type: String, attribute: 'permalink' })],
    S.prototype,
    'permalink',
    void 0
  ),
  t(
    [i({ type: Boolean, attribute: 'use-carousel-evolution' })],
    S.prototype,
    'useCarouselEvolution',
    void 0
  ),
  t(
    [i({ type: p, attribute: 'device-type' })],
    S.prototype,
    'deviceType',
    void 0
  ),
  t(
    [i({ type: Boolean, attribute: 'exceed-margin-allowed' })],
    S.prototype,
    'exceedMarginAllowed',
    void 0
  ),
  t([a()], S.prototype, 'isInsideLightbox', void 0),
  t([a()], S.prototype, 'currentPageNumber', void 0),
  (S = t([s('gallery-carousel')], S));
export { S as G };
//# sourceMappingURL=gallery-carousel-a6664271.js.map
