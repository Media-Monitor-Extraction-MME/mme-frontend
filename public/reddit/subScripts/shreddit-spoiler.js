import {
  _ as e,
  j as r,
  n,
  h as t,
  s as a,
  i as s,
  x as i
} from './icon-f94fc1dd.js';
let o = class extends a {
  constructor() {
    super(...arguments), (this.revealed = !1), (this.blockRevealOnClick = !1);
  }
  static get styles() {
    return s`.outer{background:var(--color-category-spoiler);border-radius:2px;cursor:pointer;line-height:21px;transition:background ease-out 1s;border:none;padding:0;font:inherit;color:inherit;margin-right:.25rem}.inner{opacity:0;transition:opacity ease-out 1s;margin-right:-.25rem}.revealed.outer{background:0 0}.revealed .inner{opacity:1}`;
  }
  revealSpoiler(e) {
    this.revealed || e.preventDefault(), (this.revealed = !0);
  }
  handleKeyPress(e) {
    ('Enter' !== e.key && ' ' !== e.key) || this.revealSpoiler(e);
  }
  render() {
    return this.blockRevealOnClick
      ? i`\n <span class="outer">\n <span class="inner" aria-hidden="true">\n <slot></slot>\n </span>\n </span>\n `
      : i`\n <span \n class="outer${this.revealed ? ' revealed' : ''}" \n title="Reveal Spoiler" \n role="button" \n @click="${this.revealSpoiler}" \n @keypress="${this.handleKeyPress}" \n tabindex="0" \n>\n <span class="inner" aria-hidden="${!this.revealed}">\n <slot></slot>\n </span>\n </span>\n `;
  }
};
e([r()], o.prototype, 'revealed', void 0),
  e(
    [n({ type: Boolean, attribute: 'block-reveal-on-click' })],
    o.prototype,
    'blockRevealOnClick',
    void 0
  ),
  (o = e([t('shreddit-spoiler')], o));
//# sourceMappingURL=shreddit-spoiler-7f1ff399.js.map
