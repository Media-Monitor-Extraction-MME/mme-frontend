import {
  _ as e,
  j as t,
  s as i,
  n as s,
  h as o,
  x as n
} from './icon-f94fc1dd.js';
import {
  W as d,
  b6 as a,
  e as r,
  b7 as h,
  b8 as c,
  b9 as l,
  ba as m,
  bb as b,
  bc as p,
  a as v
} from './shell-c7aa92cc.js';
const E = new Set([
    'A',
    'BUTTON',
    'FACEPLATE-TRACKER',
    'GALLERY-CAROUSEL',
    'SHREDDIT-PLAYER',
    'SHREDDIT-EMBED-SPOILER-BUTTON'
  ]),
  u = d(i);
let C = class extends u {
  constructor() {
    super(...arguments),
      (this.embedContainer = void 0),
      (this.link = ''),
      (this.utm = ''),
      (this.id = ''),
      (this.feedPostData = null),
      (this.postPosition = 0),
      (this.handleResize = () => {
        setTimeout(() => {
          parent.postMessage(
            JSON.stringify({ type: a, data: document.body.clientHeight }),
            '*'
          );
        }, 100);
      }),
      (this.onEmbedLoaded = () => {
        this.dispatchEvent(r(h));
      }),
      (this.initHandlers = () => {
        const e = document.getElementById(this.id + c);
        e &&
          ((this.embedContainer = e),
          this.embedContainer.addEventListener('click', this.onEmbedClicked),
          this.embedContainer.addEventListener(
            'mouseover',
            this.onEmbedMouseOver
          ),
          this.embedContainer.addEventListener(
            'mouseleave',
            this.onEmbedMouseLeave
          ));
      }),
      (this.isWhitespaceClickHandled = (e) => {
        let t = e.target,
          i = !1;
        for (
          ;
          !i && t && !E.has(t.tagName) && t.id !== this.id + '-overflow-cover';

        ) {
          if (t.id && t.id.includes(l)) {
            (this.feedPostData = t.dataset.postdata
              ? JSON.parse(t.dataset.postdata)
              : {}),
              (this.postPosition = parseInt(t.dataset.position || '0')),
              (i = !0);
            break;
          }
          if (t.id === this.id + c) {
            i = !0;
            break;
          }
          t = t.parentElement;
        }
        return i;
      }),
      (this.removeHandlers = () => {
        this.embedContainer &&
          (this.embedContainer.removeEventListener(
            'click',
            this.onEmbedClicked
          ),
          this.embedContainer.removeEventListener(
            'mouseover',
            this.onEmbedMouseOver
          ),
          this.embedContainer.removeEventListener(
            'mouseleave',
            this.onEmbedMouseLeave
          ));
      }),
      (this.isEmbedContainerClicked = (e) =>
        'Range' !== document.getSelection()?.type &&
        this.embedContainer &&
        this.isWhitespaceClickHandled(e)),
      (this.removeFeedPostData = () => {
        (this.feedPostData = null), (this.postPosition = 0);
      }),
      (this.getClickEventDetails = () => {
        const e = {};
        return (
          this.postPosition &&
            (e.action_info = { position: this.postPosition }),
          this.feedPostData?.id && (e.post = { ...this.feedPostData }),
          e
        );
      }),
      (this.onEmbedClicked = (e) => {
        if (this.isEmbedContainerClicked(e)) {
          const e = this.getClickEventDetails();
          this.dispatchEvent(r(m, { details: e })), this.redirectToLink();
        }
      }),
      (this.onEmbedMouseOver = () => {
        const e = document.getElementById(`${this.id}-overflow-cover`);
        e?.classList.remove(b), e?.classList.add(p);
      }),
      (this.onEmbedMouseLeave = () => {
        const e = document.getElementById(`${this.id}-overflow-cover`);
        e?.classList.remove(p), e?.classList.add(b);
      }),
      (this.getRedirectLink = () =>
        (this.feedPostData?.url ? this.feedPostData.url : this.link) +
        this.utm),
      (this.redirectToLink = () => {
        const e = this.getRedirectLink();
        if (e) {
          const t = new URL(e, window.location.href);
          window.open(t.href, '_blank');
        }
        (this.postPosition || this.feedPostData?.id) &&
          this.removeFeedPostData();
      });
  }
  connectedCallback() {
    super.connectedCallback(),
      this.initHandlers(),
      this.onEmbedLoaded(),
      this.subscribe(v.ResizeEmbed, this.handleResize);
  }
  firstUpdated() {
    this.handleResize();
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.unsubscribe(v.ResizeEmbed, this.handleResize),
      this.removeHandlers();
  }
  render() {
    return n``;
  }
};
e([s({ type: String })], C.prototype, 'link', void 0),
  e([s({ type: String })], C.prototype, 'utm', void 0),
  e([s({ type: String })], C.prototype, 'id', void 0),
  e([t()], C.prototype, 'feedPostData', void 0),
  e([t()], C.prototype, 'postPosition', void 0),
  (C = e([o('embed-event-handler')], C));
//# sourceMappingURL=embed-event-handler-5d6e00aa.js.map
