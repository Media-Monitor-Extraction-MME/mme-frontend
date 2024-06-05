const e = (e, t = e.tagName.toLowerCase()) => {
  const n = (e) => ('' === e && (e = 'generic'), t + ':' + e);
  return {
    dispatch: (t, s = { bubbles: !0, cancelable: !0, composed: !0 }) =>
      e.dispatchEvent(new CustomEvent(n(t), s)),
    eventId: n
  };
};
export { e as m };
//# sourceMappingURL=makeEventDispatcher-ddce7d90.js.map
