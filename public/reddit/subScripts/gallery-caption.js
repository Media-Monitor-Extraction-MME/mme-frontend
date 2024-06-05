import {
  i as t,
  s as e,
  x as n,
  _ as o,
  n as i,
  h as a
} from './icon-f94fc1dd.js';
import { t as s, b as r, _ as l } from './shell-c7aa92cc.js';
import { C as c, a as d } from './post-041257f4.js';
var p = t`.image-caption-container-collapsed{background:rgba(0,0,0,.6)}.image-caption-container-expanded{background:rgba(0,0,0,.8)}.text-primary-blue{color:#629fff}`;
let u = class extends e {
  constructor() {
    super(...arguments),
      (this.imageCaption = ''),
      (this.outboundUrl = ''),
      (this.shortenedUrl = ''),
      (this.imageIndex = ''),
      (this.isMore = !0),
      (this.shouldShowMoreLessButton = () => {
        const t = this.shadowRoot
          ?.querySelector('figCaption')
          ?.querySelector(`#gallery-image-caption-text-${this.imageIndex}`);
        if (
          (t?.scrollWidth || 0) > (t?.clientWidth || 0) ||
          (t?.scrollHeight || 0) > (t?.clientHeight || 0)
        ) {
          const t = this.shadowRoot
            ?.querySelector('figCaption')
            ?.querySelector(`#caption-more-button-${this.imageIndex}`);
          t?.classList?.remove(c), t?.classList?.add(d);
        }
      });
  }
  static get styles() {
    return [s, p];
  }
  getTruncateTextOverFlow() {
    return this.outboundUrl ? 'truncate' : 'line-clamp-2';
  }
  showMoreLessButtonText() {
    return this.isMore ? 'more' : 'less';
  }
  updateCaptionContainer() {
    const t = this.shadowRoot?.querySelector('figCaption'),
      e = t?.querySelector(
        `#gallery-image-caption-container-${this.imageIndex}`
      ),
      n = t?.querySelector(
        `#gallery-image-caption-text-container-${this.imageIndex}`
      ),
      o = t?.querySelector(`#gallery-image-caption-text-${this.imageIndex}`);
    this.isMore
      ? (n?.classList?.remove('overflow-auto'),
        o?.classList?.add(this.getTruncateTextOverFlow()),
        e?.classList?.remove('image-caption-container-expanded'),
        e?.classList?.add('image-caption-container-collapsed'))
      : (n?.classList?.add('overflow-auto'),
        o?.classList?.remove(this.getTruncateTextOverFlow()),
        e?.classList?.remove('image-caption-container-collapsed'),
        e?.classList?.add('image-caption-container-expanded'));
  }
  handleMoreLessButtonClicked(t) {
    t.stopPropagation(),
      t.preventDefault(),
      (this.isMore = !this.isMore),
      this.updateCaptionContainer();
    const e = this.shadowRoot
        ?.querySelector('figCaption')
        ?.querySelector(`#caption-more-button-${this.imageIndex}`),
      n = e?.querySelector(`#caption-more-button-text-${this.imageIndex}`);
    n && (n.textContent = this.showMoreLessButtonText());
  }
  showMoreLessButton() {
    return n`${r({ appearance: 'primary', size: l.Small, attributes: { className: 'text-primary-blue not-italic font-bold text-12 flex items-end bg-transparent\n            hover:bg-transparent focus:bg-transparent active:bg-transparent visited:bg-transparent\n            hidden rounded-none', onclick: this.handleMoreLessButtonClicked, id: `caption-more-button-${this.imageIndex}` }, children: n` <div class="w-full">\n <span id="caption-more-button-text-${this.imageIndex}" \n>${this.showMoreLessButtonText()}\n </span>\n </div>` })}`;
  }
  firstUpdated() {
    this.shouldShowMoreLessButton();
  }
  render() {
    return n` <figcaption class="p-xs absolute h-auto left-0 right-0 bottom-0 mb-md">\n <div \n id="gallery-image-caption-container-${this.imageIndex}" \n class="box-border flex flex-col items-start h-auto border-[0.5px] border-solid border-neutral-border-weak shadow-[0px_4px_4px_rgba(0, 0, 0, 0.15)_0px_1px_4px_rgba(0, 0, 0, 0.15)] rounded-[8px] py-2xs px-xs image-caption-container-collapsed flex-1" \n>\n ${this.imageCaption && n`\n <div \n id="gallery-image-caption-text-container-${this.imageIndex}" \n class="${'flex flex-row items-center w-full gap-2xs'}" \n>\n <span \n id="gallery-image-caption-text-${this.imageIndex}" \n class="text-media-onbackground font-normal text-12 ${this.getTruncateTextOverFlow()}" \n title="${this.imageCaption}" \n>${this.imageCaption}\n </span>\n ${this.outboundUrl ? '' : n`${this.showMoreLessButton()}`}\n </div>\n `}\n ${this.outboundUrl && n`\n <div \n id="gallery-image-caption-url-container-${this.imageIndex}" \n class="flex flex-row items-center w-full h-md gap-2xs" \n>\n <a \n class="flex flex-row items-center p-0 gap-2xs w-full" \n href="${this.outboundUrl}" \n rel="noopener nofollow ugc" \n target="_blank" \n>\n <span class="font-bold text-12 truncate text-primary-blue">\n ${this.shortenedUrl || this.outboundUrl}\n </span>\n <icon-external \n class="h-sm w-sm flex-none order-1 flex-grow-0 text-primary-blue" \n></icon-external>\n </a>\n ${this.showMoreLessButton()}\n </div>\n `}\n </div>\n </figcaption>`;
  }
};
o(
  [i({ type: String, attribute: 'image-caption' })],
  u.prototype,
  'imageCaption',
  void 0
),
  o(
    [i({ type: String, attribute: 'outbound-url' })],
    u.prototype,
    'outboundUrl',
    void 0
  ),
  o(
    [i({ type: String, attribute: 'shortened-url' })],
    u.prototype,
    'shortenedUrl',
    void 0
  ),
  o(
    [i({ type: String, attribute: 'image-index' })],
    u.prototype,
    'imageIndex',
    void 0
  ),
  (u = o([a('gallery-caption')], u));
export { u as G };
//# sourceMappingURL=gallery-caption-8307d054.js.map
