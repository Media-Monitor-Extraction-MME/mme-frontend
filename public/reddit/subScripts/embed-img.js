import {
  _ as e,
  n as t,
  s as i,
  x as s,
  h as n,
  j as o,
  D as a,
  aR as r,
  I as c
} from './icon-f94fc1dd.js';
import {
  t as l,
  be as d,
  bf as h,
  _ as u,
  b as p,
  e as m,
  S as v,
  aa as y,
  W as b,
  a as k,
  bg as g
} from './shell-c7aa92cc.js';
import { a as C, A as f } from './a-8e131ef8.js';
import { s as A, S as x } from './index-6b6f75e3.js';
let w = class extends i {
  constructor() {
    super(...arguments),
      (this.overlay = void 0),
      (this.embedContainer = void 0),
      (this.overlayId = d),
      (this.containerId = h),
      (this.buttonSize = u.Medium);
  }
  connectedCallback() {
    super.connectedCallback();
    const e = document.getElementById(this.overlayId),
      t = document.getElementById(this.containerId);
    e && t && ((this.overlay = e), (this.embedContainer = t));
  }
  onClickHandler() {
    this.overlay &&
      this.embedContainer &&
      (this.overlay.classList.add('hidden'),
      this.embedContainer.removeAttribute('style'));
  }
  render() {
    return p({
      size: this.buttonSize,
      attributes: {
        className: 'hover:no-underline button-media font-semibold',
        onclick: this.onClickHandler
      },
      appearance: 'plain',
      children: s`<span>View</span>`
    });
  }
};
(w.styles = [l]),
  e([t({ type: String })], w.prototype, 'overlayId', void 0),
  e([t({ type: String })], w.prototype, 'containerId', void 0),
  e([t({ type: u })], w.prototype, 'buttonSize', void 0),
  (w = e([n('shreddit-embed-spoiler-button')], w));
let B = class extends i {
  constructor() {
    super(...arguments),
      (this.permalink = ''),
      (this.utmName = ''),
      (this.isDesktopViewport = !1),
      (this.isActive = !1),
      (this.isClipboardAccessGranted = async () =>
        'denied' !==
        (await navigator.permissions.query({ name: 'clipboard-read' })).state),
      (this.showCopyLinkButton = () => {
        document
          .querySelector('faceplate-tracker > shreddit-embed-copy-link-button')
          ?.parentElement?.classList.remove('hidden');
      }),
      (this.activateButton = () => {
        this.isActive = !0;
      }),
      (this.deActivateButton = () => {
        this.isActive = !1;
      }),
      (this.onCopyLinkClick = async (e) => {
        if ((e.preventDefault(), this.isActive)) return !1;
        if (!this.isAllowedEvent(e) || !this.permalink) return !1;
        return (
          !!(await this.copyLink()) &&
          (this.dispatchSuccessAlert(),
          this.activateButton(),
          this.removeTimeout(),
          (this.timeout = setTimeout(this.deActivateButton, 4e3)),
          !0)
        );
      }),
      (this.dispatchSuccessAlert = () => {
        const e = m('faceplate-alert', {
          level: v.none,
          message: 'Permalink copied to clipboard!'
        });
        this.dispatchEvent(e);
      }),
      (this.isAllowedEvent = (e) =>
        e instanceof PointerEvent ||
        e instanceof MouseEvent ||
        ['Enter', ' '].includes(e.key)),
      (this.copyLink = async () => {
        const e = { url: this.getFullUTMLink() };
        return (await A(e, this.isDesktopViewport)) === x.Clipboard;
      }),
      (this.getFullUTMLink = () => {
        if (!this.permalink)
          return (
            console.log(
              'No permalink was provided for shreddit-embed-copy-link-button'
            ),
            ''
          );
        const e = new URL(this.permalink);
        return (
          [
            { name: 'utm_source', value: 'share' },
            { name: 'utm_medium', value: y() },
            { name: 'utm_name', value: this.utmName },
            { name: 'utm_term', value: '1' },
            { name: 'utm_content', value: '1' }
          ].forEach(({ name: t, value: i }) => {
            e.searchParams.append(t, i);
          }),
          e.toString()
        );
      }),
      (this.removeTimeout = () => {
        this.timeout && clearTimeout(this.timeout);
      }),
      (this.getButtonIcon = () => (this.isActive ? a : r)),
      (this.getButtonText = () => (this.isActive ? 'Copied!' : 'Copy link')),
      (this.getButtonColor = () =>
        this.isActive
          ? 'text-success-content hover:text-success-hover'
          : 'text-neutral-content-weak hover:text-neutral-content-weak'),
      (this.getTextColor = () =>
        this.isActive
          ? 'hover:text-success-content'
          : 'hover:text-secondary-onBackground');
  }
  static get styles() {
    return [l];
  }
  async connectedCallback() {
    super.connectedCallback(),
      (await this.isClipboardAccessGranted()) && this.showCopyLinkButton();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeTimeout();
  }
  render() {
    const e = this.getButtonIcon(),
      t = this.getButtonText(),
      i = this.getButtonColor(),
      n = this.getTextColor();
    return C({
      size: f.Small,
      attributes: {
        href: this.permalink,
        onclick: this.onCopyLinkClick,
        className: `hover:no-underline ${i}`
      },
      suppressVisitedStyle: !0,
      children: s`\n <span class="flex items-center gap-x-2xs">\n ${e({ size: c.Small })}\n <span class="${n} hover:underline embed-xs:hidden"> ${t} </span>\n </span>\n `
    });
  }
};
e([t({ type: String })], B.prototype, 'permalink', void 0),
  e([t({ type: String })], B.prototype, 'utmName', void 0),
  e(
    [t({ type: Boolean, attribute: 'is-desktop-viewport' })],
    B.prototype,
    'isDesktopViewport',
    void 0
  ),
  e([o()], B.prototype, 'isActive', void 0),
  e([o()], B.prototype, 'timeout', void 0),
  (B = e([n('shreddit-embed-copy-link-button')], B));
let S = class extends b(g) {
  updated() {
    this.img && this.sendEmbedResizeEvent();
  }
  sendEmbedResizeEvent() {
    this.publish(k.ResizeEmbed);
  }
  render() {
    return s`${this.img}`;
  }
};
S = e([n('embed-img')], S);
//# sourceMappingURL=embed-img-e2679928.js.map
