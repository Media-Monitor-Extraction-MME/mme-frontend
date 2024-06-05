import { P as e } from './post-02b31072.js';
import './shell-c7aa92cc.js';
const a =
    'max-h-[253px] overflow-hidden s:max-h-[318px] m:max-h-[337px] l:max-h-[352px] xl:max-h-[452px]',
  s = 'hidden',
  t = 'flex',
  d = 'overflow-hidden h-[60px] embed-xs:h-[80px]',
  o = 'h-[316px]',
  i = 'partial-update',
  r = (e) => e.startsWith('t3_'),
  c = (e) => (`${e}`.startsWith('t3_') ? `${e}` : `t3_${e}`);
function n(e) {
  return `https://www.redditmedia.com/mediaembed/${e.replace('t3_', '')}/`;
}
function u(a) {
  switch (a) {
    case e.AggregateFeed:
    case e.SubredditFeed:
    case e.CustomFeed:
    case e.ListingBelowLinkedPosts:
    case e.ListingBelowSubredditPosts:
    case e.MatureFeed:
    case e.PopularFeed:
    case e.ProfileFeed:
    case e.ProfileFeed2:
    case e.BrandMentionFeed:
    case e.ModQueue:
    case e.ModQueueAll:
    case e.ModLog:
    case e.ModNotesRail:
      return !0;
    case e.CommentsPage:
    default:
      return !1;
  }
}
function m(a) {
  return a === e.CommentsPage;
}
function l(a) {
  return a === e.PostMiniViewer;
}
export {
  s as C,
  d as M,
  i as P,
  o as T,
  t as a,
  a as b,
  m as c,
  l as d,
  r as e,
  c as f,
  n as g,
  u as i
};
//# sourceMappingURL=post-041257f4.js.map
