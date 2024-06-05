import {
  _ as t,
  n as e,
  h as o,
  s,
  x as i,
  r as n,
  j as r
} from './icon-f94fc1dd.js';
import { b8 as d, b6 as a, W as h, a as l, t as c } from './shell-c7aa92cc.js';
import { C as p, a as u, M as v, T as g } from './post-041257f4.js';
import { e as f, n as m } from './ref-21a8397d.js';
let C = class extends s {
  constructor() {
    super(...arguments),
      (this.id = ''),
      (this.isForPost = !1),
      (this.shouldForceRender = !1),
      (this.readMoreButton = void 0),
      (this.overflowCover = void 0),
      (this.textPostContent = void 0),
      (this.embedWrapper = void 0),
      (this.handleClickReadMore = (t) => {
        t.preventDefault(),
          this.toggleOverFlowCover(!1),
          this.toggleReadMoreButton(!1),
          this.showTextPostContent();
      });
  }
  connectedCallback() {
    super.connectedCallback(), this.initOverflowSettings();
  }
  getReadMoreButton() {
    return this.getTagByIdPrefix('-read-more-button');
  }
  getOverflowCover() {
    return this.getTagByIdPrefix('-overflow-cover');
  }
  getPostRTJSONContent() {
    return this.getTagByIdPrefix('-post-rtjson-content');
  }
  getEmbedWrapper() {
    return this.getTagByIdPrefix(d);
  }
  getTagByIdPrefix(t) {
    return document.querySelector(`#${this.id}${t}`);
  }
  initAndMapElements() {
    this.initReadMoreButton(),
      this.initOverflowCover(),
      this.initTextPostContent(),
      this.initEmbedWrapper();
  }
  initReadMoreButton() {
    const t = this.getReadMoreButton();
    t &&
      ((this.readMoreButton = t),
      this.readMoreButton.addEventListener('click', this.handleClickReadMore));
  }
  initOverflowCover() {
    const t = this.getOverflowCover();
    t && (this.overflowCover = t);
  }
  initTextPostContent() {
    const t = this.getPostRTJSONContent();
    t && (this.textPostContent = t);
  }
  initEmbedWrapper() {
    const t = this.getEmbedWrapper();
    t && (this.embedWrapper = t);
  }
  initOverflowSettings() {
    this.initAndMapElements(),
      this.isContentOverflown() &&
        (this.toggleOverFlowCover(!0), this.toggleReadMoreButton(!0));
  }
  toggleOverFlowCover(t = !1) {
    t
      ? this.overflowCover?.classList?.remove(p)
      : this.overflowCover?.classList?.add(p);
  }
  toggleReadMoreButton(t = !1) {
    t
      ? (this.readMoreButton?.classList?.remove(p),
        this.readMoreButton?.classList?.add(u))
      : (this.readMoreButton?.classList?.remove(u),
        this.readMoreButton?.classList?.add(p));
  }
  showTextPostContent() {
    this.textPostContent?.classList?.remove(...v.split(' ')),
      this.embedWrapper && this.embedWrapper?.classList?.remove(g),
      setTimeout(() => {
        parent.postMessage(
          JSON.stringify({ type: a, data: document.body.clientHeight }),
          '*'
        );
      }, 100);
  }
  isContentOverflown() {
    return (
      this.shouldForceRender ||
      (this.textPostContent &&
        this.textPostContent.scrollHeight >
          Math.max(
            this.textPostContent.clientHeight,
            this.isForPost ? 60 : 253
          ))
    );
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.readMoreButton &&
        this.readMoreButton.removeEventListener(
          'click',
          this.handleClickReadMore
        );
  }
  render() {
    return i``;
  }
};
t([e({ type: String })], C.prototype, 'id', void 0),
  t([e({ type: Boolean })], C.prototype, 'isForPost', void 0),
  t([e({ type: Boolean })], C.prototype, 'shouldForceRender', void 0),
  (C = t([o('read-more-button')], C));
var M;
!(function (t) {
  (t.LARGE = 'LARGE'), (t.BIG = 'BIG'), (t.SMALL = 'SMALL');
})(M || (M = {}));
const B = {
  [M.LARGE]: 'text-[32px] leading-[38px]',
  [M.BIG]: 'text-[24px] leading-[28px]',
  [M.SMALL]: 'text-[16px] leading-[20px]'
};
let x = class extends h(s) {
  constructor() {
    super(...arguments),
      (this.shouldSendResizeEvent = !1),
      (this._fontSize = M.LARGE),
      (this._overflowActionsMenuRef = f());
  }
  updated(t) {
    super.updated(t), t.has('_fontSize') && this.updateFontSizeAndLineHeight();
  }
  updateFontSizeAndLineHeight() {
    if (this._container) {
      const { clientHeight: t } = this._container;
      this._fontSize !== M.SMALL &&
        t >= 60 &&
        (this._fontSize = this._fontSize === M.LARGE ? M.BIG : M.SMALL);
    }
  }
  firstUpdated() {
    this.shouldSendResizeEvent && this.publish(l.ResizeEmbed);
  }
  render() {
    const t = `embed-title-container ${B[this._fontSize]} line-clamp-3 m-0`;
    return i` <h1 class="${t}" ${m(this._overflowActionsMenuRef)}><slot></slot></h1> `;
  }
};
(x.styles = [c]),
  t(
    [e({ type: Boolean, attribute: 'should-send-resize-event' })],
    x.prototype,
    'shouldSendResizeEvent',
    void 0
  ),
  t([n('.embed-title-container')], x.prototype, '_container', void 0),
  t([r()], x.prototype, '_fontSize', void 0),
  (x = t([o('shreddit-embed-title')], x));
//# sourceMappingURL=shreddit-embed-title-8b87ca07.js.map
