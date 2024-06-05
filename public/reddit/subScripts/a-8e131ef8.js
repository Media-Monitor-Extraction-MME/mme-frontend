import { g as e } from './icon-f94fc1dd.js';
var t, n;
!(function (e) {
  (e.Regular = 'regular'), (e.Semibold = 'semibold');
})(t || (t = {})),
  (function (e) {
    (e.Small = 'sm'), (e.Medium = 'md'), (e.Large = 'lg');
  })(n || (n = {}));
const i = { sm: 'text-12', md: 'text-14', lg: 'text-16' },
  a = { sm: 'text-12', md: 'text-16', lg: 'text-20' },
  r = {
    always: 'underline',
    hover: 'hover:underline',
    none: 'no-underline hover:no-underline'
  },
  o = {
    primary: '',
    secondary:
      'text-secondary-plain hover:text-secondary-plain no-visited visited:text-secondary-plain',
    'plain-weak':
      'text-secondary-plain-weak hover:text-secondary-plain no-visited visited:text-secondary-plain-weak',
    media: 'text-media-onbackground no-visited visited:text-media-onbackground',
    inverted:
      'text-neutral-background-weak hover:text-neutral-background-weak-hover no-visited visited:text-neutral-background-weak'
  },
  s = ({
    attributes: t,
    children: n,
    fontWeight: s = 'regular',
    external: d,
    size: l,
    suppressVisitedStyle: c = !1,
    underline: m = 'hover',
    visited: u,
    appearance: v = 'primary'
  }) => {
    const { html: x, ifDefined: g, createElement: p } = e(),
      b = x`${n}${d ? x`<icon-external fill="${g('regular' === s ? void 0 : '')}" class="ml-2xs align-text-bottom ${l ? a[l] : ''}"></icon-external>` : ''}`,
      h = `${(null == t ? void 0 : t.className) || ''} a\n  ${v ? o[v] : ''}\n  ${l ? i[l] : ''}\n  ${'semibold' === s ? 'font-semibold' : ''}\n  ${c ? 'no-visited' : ''}\n  ${m ? r[m] : ''}\n  ${u ? 'visited' : ''}`;
    return p(
      'a',
      Object.assign(Object.assign({}, t), { rpl: !0, className: h }),
      b
    );
  };
export { n as A, s as a, t as b };
//# sourceMappingURL=a-8e131ef8.js.map
