import {
  _ as t,
  n as e,
  r as a,
  aJ as i,
  h as r,
  F as n,
  x as s,
  i as o
} from './icon-f94fc1dd.js';
import { o as d } from './shell-c7aa92cc.js';
var c;
!(function (t) {
  (t.PLAIN = 'plain'), (t.MEDIA = 'media');
})(c || (c = {}));
let h = class extends n {
  constructor() {
    super(...arguments),
      (this.pages = 0),
      (this.pageIndex = 0),
      (this.appearance = c.PLAIN),
      (this.animationDuration = 0),
      (this.currentPageLabel = ''),
      (this.numVisible = 2),
      (this.centerIndexPosition = 3),
      (this.setTransitionDuration = async () => {
        this._dotsContainer &&
          (await this.updateComplete,
          this._dotsContainer.style.setProperty(
            '--pagination-transition-duration',
            `${this.animationDuration}ms`
          ));
      }),
      (this.animateInfiniteCurrentPage = () => {
        if (this._currentPageIndicator) {
          const t = this.pageIndex === this.pages - 1,
            e = [
              {
                transform: t
                  ? `translate3d(${12 * this.pages}px, 0,0)`
                  : 'translate3d(-12px, 0,0)'
              },
              {
                transform: t
                  ? `translate3d(${12 * (this.pages - 1)}px, 0,0)`
                  : 'translate3d(0px, 0,0)'
              }
            ],
            a = { duration: this.animationDuration, iterations: 1 };
          (this._currentPageIndicator.style.transform = `translate3d(${t ? 12 * this.pageIndex : 0}px, 0,0)`),
            this.setDotsTrackTransform(!t),
            this._currentPageIndicator.animate(e, a);
        }
      }),
      (this.animateCurrentPage = async () => {
        this.setDotsTrackTransform(), this.animateCurrentPageNumber();
      }),
      (this.animateCurrentPageNumber = () => {
        if (this._currentPageIndicator) {
          const t = [
              { width: 'var(--rem6)' },
              { width: 'var(--rem18)', borderRadius: '4px' },
              {
                width: 'var(--rem6)',
                transform: `translate3d(${12 * this.pageIndex}px, 0,0)`
              }
            ],
            e = {
              duration: this.animationDuration,
              fill: 'forwards',
              iterations: 1
            };
          this._currentPageIndicator.animate(t, e);
        }
      }),
      (this.onSelect = (t) => {
        const e = new CustomEvent('pagination-click', {
          detail: { pageIndex: t },
          bubbles: !0,
          composed: !0
        });
        this.dispatchEvent(e);
      }),
      (this.isEdgeDot = (t) => {
        if (this.pages >= 6) {
          const e = t === this.pageIndex - 3,
            a = t === this.pageIndex + 3;
          return e || a;
        }
        return !1;
      }),
      (this.getDotButton = (t) => {
        const e = Math.abs(t - this.pageIndex),
          a = (t) => {
            var e;
            return t === this.pageIndex
              ? `(${null !== (e = this.currentPageLabel) && void 0 !== e ? e : 'Current Page'})`
              : '';
          },
          i = this.getPageLabels
            ? `${this.getPageLabels(t)} ${a(t)}`
            : `Page ${t + 1} ${a(t)}`;
        return s`<button class="${d({ dot: !0, edge: this.isEdgeDot(t) })}" tabindex="${0 === e || 1 === e ? 0 : -1}" @click="${(
          e
        ) => {
          0 === e.target.tabIndex && this.onSelect(t);
        }}" @keydown="${(e) => {
          ('Enter' !== e.key && 'Space' !== e.key) || this.onSelect(t);
        }}"> <faceplate-screen-reader-content>${i}</faceplate-screen-reader-content> </button>`;
      }),
      (this.render = () => {
        if (0 !== this.pages)
          return s` <div id="dots-container"> <div class="dots-track-container"> <div id="dots-track"> ${this.currentPageIndicator} ${[...Array(this.pages).keys()].map((t, e) => this.getDotButton(e))} </div> </div> </div> `;
      });
  }
  static get styles() {
    return o`:host{display:inline-flex;height:var(--rem16,1rem);width:100%;justify-content:center}:host #dots-container{display:inline-flex;position:relative;height:100%;overflow:hidden;align-items:center;border-radius:var(--rem8,.5rem);padding:0 var(--rem2,.125rem);transition:width ease-in-out var(--pagination-transition-duration)}:host .dots-track-container{position:relative;height:100%;width:100%;display:flex;align-items:center}:host #dots-track{display:flex;position:absolute;left:0;height:var(--rem12,.75rem);overflow:hidden;box-sizing:border-box;font-size:var(--rem10,.625rem);align-items:center;transition:transform ease-in-out var(--pagination-transition-duration)}:host([appearance=media]) #dots-container{background-color:var(--color-media-background)}:host([appearance=media]) .dot{background-color:var(--color-media-onbackground-disabled)}:host .dot:focus-visible{outline:solid 1px var(--color-global-focus)}:host([appearance=media]) #current-page-indicator.number{color:var(--color-media-onbackground)}:host([appearance=media]) #current-page-indicator.dot{background-color:var(--color-media-onbackground)}:host #current-page-indicator{z-index:2;position:absolute}:host #current-page-indicator.number{color:var(--color-neutral-content);display:flex;align-items:center;justify-content:center;transition:transform ease-in-out var(--pagination-transition-duration)}:host #current-page-indicator.dot{background-color:var(--color-neutral-content)}:host .dot{height:var(--rem6);width:var(--rem6);border-radius:50%;box-sizing:content-box;display:inline-block;margin:calc(var(--rem2) + var(--rem1));padding:0;border:none}:host #current-page-indicator.number{height:var(--rem15,.9375rem);width:var(--rem16,1rem);margin:0}:host .dot{background-color:var(--color-neutral-border);background-clip:content-box;transition:all ease-in-out var(--pagination-transition-duration)}:host .dot[tabindex='0']{cursor:pointer}:host .dot:focus{transition:none}:host .dot.edge{height:calc(var(--rem2) + var(--rem1));width:calc(var(--rem2) + var(--rem1));margin:.28125rem;flex-shrink:0}`;
  }
  willUpdate(t) {
    t.has('pageIndex') &&
      (this.pageIndex < 0 || this.pageIndex > this.pages - 1) &&
      (this.pageIndex = 0);
  }
  async updated(t) {
    await this.updateComplete,
      (t.has('pageIndex') || t.has('pages')) && this.shrinkOrStretch();
    const e = t.get('pageIndex') === this.pages - 1 && 0 === this.pageIndex,
      a = 0 === t.get('pageIndex') && this.pageIndex === this.pages - 1;
    e || a
      ? this.animateInfiniteCurrentPage()
      : t.has('pageIndex') && (await this.animateCurrentPage()),
      t.has('animationDuration') && this.setTransitionDuration();
  }
  shrinkOrStretch() {
    this.pages >= 6
      ? 0 === this.pageIndex || this.pageIndex === this.pages - 1
        ? (this.numVisible = 4)
        : 1 === this.pageIndex || this.pageIndex === this.pages - 2
          ? (this.numVisible = 5)
          : 2 === this.pageIndex || this.pageIndex === this.pages - 3
            ? (this.numVisible = 6)
            : this.pageIndex >= 3 &&
              this.pageIndex <= this.pages - 4 &&
              (this.numVisible = 7)
      : (this.numVisible = this.pages),
      this._dotsContainer &&
        (this._dotsContainer.style.width = `calc(var(--rem12, 0.75rem) * ${this.numVisible})`);
  }
  setDotsTrackTransform(t) {
    const e = this.pageIndex - this.centerIndexPosition,
      a = e > 0 ? e : 0;
    if (this._dotsTrack) {
      const e = `translate3d(${12 * a * -1}px, 0,0)`;
      e !== this._dotsTrack.style.transform
        ? (this._dotsTrack.style.transform = e)
        : t && (this._dotsTrack.style.transform = 'translate3d(0px, 0,0)');
    }
  }
  get currentPageIndicator() {
    return s`<span id="current-page-indicator" class="dot" aria-hidden="true"></span>`;
  }
};
t([e({ type: Number })], h.prototype, 'pages', void 0),
  t(
    [e({ type: Number, attribute: 'page-index' })],
    h.prototype,
    'pageIndex',
    void 0
  ),
  t([e({ type: String })], h.prototype, 'appearance', void 0),
  t(
    [e({ type: Number, attribute: 'animation-duration' })],
    h.prototype,
    'animationDuration',
    void 0
  ),
  t(
    [e({ type: String, attribute: 'current-page-label' })],
    h.prototype,
    'currentPageLabel',
    void 0
  ),
  t([e()], h.prototype, 'getPageLabels', void 0),
  t([a('#dots-container')], h.prototype, '_dotsContainer', void 0),
  t([a('#dots-track')], h.prototype, '_dotsTrack', void 0),
  t(
    [a('#current-page-indicator')],
    h.prototype,
    '_currentPageIndicator',
    void 0
  ),
  t([i('.dot')], h.prototype, '_dots', void 0),
  (h = t([r('faceplate-pagination-indicator')], h));
export { c as P };
//# sourceMappingURL=faceplate-pagination-indicator-ad9dc651.js.map
