class t {
  constructor(i, s) {
    (this.element = i),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.touchEndX = null),
      (this.touchEndY = null),
      (this.touchMoveX = null),
      (this.touchMoveY = null),
      (this.velocityX = null),
      (this.velocityY = null),
      (this.longPressTimer = null),
      (this.doubleTapTimer = null),
      (this.doubleTapWaiting = !1),
      (this.thresholdX = 0),
      (this.thresholdY = 0),
      (this.disregardVelocityThresholdX = 0),
      (this.disregardVelocityThresholdY = 0),
      (this.swipingHorizontal = !1),
      (this.swipingVertical = !1),
      (this.swipingDirection = null),
      (this.swipedHorizontal = !1),
      (this.swipedVertical = !1),
      (this.handlers = {
        panstart: [],
        panmove: [],
        panend: [],
        swipeleft: [],
        swiperight: [],
        swipeup: [],
        swipedown: [],
        tap: [],
        doubletap: [],
        longpress: []
      }),
      (this._onTouchStart = this.onTouchStart.bind(this)),
      (this._onTouchMove = this.onTouchMove.bind(this)),
      (this._onTouchEnd = this.onTouchEnd.bind(this)),
      (this.opts = Object.assign({}, t.defaults, s)),
      this.element.addEventListener('touchstart', this._onTouchStart, e),
      this.element.addEventListener('touchmove', this._onTouchMove, e),
      this.element.addEventListener('touchend', this._onTouchEnd, e),
      this.opts.mouseSupport &&
        !('ontouchstart' in window) &&
        (this.element.addEventListener('mousedown', this._onTouchStart, e),
        document.addEventListener('mousemove', this._onTouchMove, e),
        document.addEventListener('mouseup', this._onTouchEnd, e));
  }
  destroy() {
    var t, e;
    this.element.removeEventListener('touchstart', this._onTouchStart),
      this.element.removeEventListener('touchmove', this._onTouchMove),
      this.element.removeEventListener('touchend', this._onTouchEnd),
      this.element.removeEventListener('mousedown', this._onTouchStart),
      document.removeEventListener('mousemove', this._onTouchMove),
      document.removeEventListener('mouseup', this._onTouchEnd),
      clearTimeout(
        null !== (t = this.longPressTimer) && void 0 !== t ? t : void 0
      ),
      clearTimeout(
        null !== (e = this.doubleTapTimer) && void 0 !== e ? e : void 0
      );
  }
  on(t, e) {
    if (this.handlers[t])
      return (
        this.handlers[t].push(e),
        { type: t, fn: e, cancel: () => this.off(t, e) }
      );
  }
  off(t, e) {
    if (this.handlers[t]) {
      const i = this.handlers[t].indexOf(e);
      -1 !== i && this.handlers[t].splice(i, 1);
    }
  }
  fire(t, e) {
    for (let i = 0; i < this.handlers[t].length; i++) this.handlers[t][i](e);
  }
  onTouchStart(t) {
    (this.thresholdX = this.opts.threshold('x', this)),
      (this.thresholdY = this.opts.threshold('y', this)),
      (this.disregardVelocityThresholdX = this.opts.disregardVelocityThreshold(
        'x',
        this
      )),
      (this.disregardVelocityThresholdY = this.opts.disregardVelocityThreshold(
        'y',
        this
      )),
      (this.touchStartX =
        'mousedown' === t.type ? t.screenX : t.changedTouches[0].screenX),
      (this.touchStartY =
        'mousedown' === t.type ? t.screenY : t.changedTouches[0].screenY),
      (this.touchMoveX = null),
      (this.touchMoveY = null),
      (this.touchEndX = null),
      (this.touchEndY = null),
      (this.swipingDirection = null),
      (this.longPressTimer = setTimeout(
        () => this.fire('longpress', t),
        this.opts.longPressTime
      )),
      this.fire('panstart', t);
  }
  onTouchMove(t) {
    var e, i, s, h, o;
    if (
      'mousemove' === t.type &&
      (!this.touchStartX || null !== this.touchEndX)
    )
      return;
    const n =
      ('mousemove' === t.type ? t.screenX : t.changedTouches[0].screenX) -
      (null !== (e = this.touchStartX) && void 0 !== e ? e : 0);
    (this.velocityX =
      n - (null !== (i = this.touchMoveX) && void 0 !== i ? i : 0)),
      (this.touchMoveX = n);
    const l =
      ('mousemove' === t.type ? t.screenY : t.changedTouches[0].screenY) -
      (null !== (s = this.touchStartY) && void 0 !== s ? s : 0);
    (this.velocityY =
      l - (null !== (h = this.touchMoveY) && void 0 !== h ? h : 0)),
      (this.touchMoveY = l);
    const r = Math.abs(this.touchMoveX),
      d = Math.abs(this.touchMoveY);
    (this.swipingHorizontal = r > this.thresholdX),
      (this.swipingVertical = d > this.thresholdY),
      (this.swipingDirection =
        r > d
          ? this.swipingHorizontal
            ? 'horizontal'
            : 'pre-horizontal'
          : this.swipingVertical
            ? 'vertical'
            : 'pre-vertical'),
      Math.max(r, d) > this.opts.pressThreshold &&
        clearTimeout(
          null !== (o = this.longPressTimer) && void 0 !== o ? o : void 0
        ),
      this.fire('panmove', t);
  }
  onTouchEnd(t) {
    var e, i, s, h, o, n, l, r;
    if ('mouseup' === t.type && (!this.touchStartX || null !== this.touchEndX))
      return;
    (this.touchEndX =
      'mouseup' === t.type ? t.screenX : t.changedTouches[0].screenX),
      (this.touchEndY =
        'mouseup' === t.type ? t.screenY : t.changedTouches[0].screenY),
      this.fire('panend', t),
      clearTimeout(
        null !== (e = this.longPressTimer) && void 0 !== e ? e : void 0
      );
    const d =
        this.touchEndX -
        (null !== (i = this.touchStartX) && void 0 !== i ? i : 0),
      u = Math.abs(d),
      c =
        this.touchEndY -
        (null !== (s = this.touchStartY) && void 0 !== s ? s : 0),
      a = Math.abs(c);
    u > this.thresholdX || a > this.thresholdY
      ? ((this.swipedHorizontal = this.opts.diagonalSwipes
          ? Math.abs(d / c) <= this.opts.diagonalLimit
          : u >= a && u > this.thresholdX),
        (this.swipedVertical = this.opts.diagonalSwipes
          ? Math.abs(c / d) <= this.opts.diagonalLimit
          : a > u && a > this.thresholdY),
        this.swipedHorizontal &&
          (d < 0
            ? ((null !== (h = this.velocityX) && void 0 !== h ? h : 0) <
                -this.opts.velocityThreshold ||
                d < -this.disregardVelocityThresholdX) &&
              this.fire('swipeleft', t)
            : ((null !== (o = this.velocityX) && void 0 !== o ? o : 0) >
                this.opts.velocityThreshold ||
                d > this.disregardVelocityThresholdX) &&
              this.fire('swiperight', t)),
        this.swipedVertical &&
          (c < 0
            ? ((null !== (n = this.velocityY) && void 0 !== n ? n : 0) <
                -this.opts.velocityThreshold ||
                c < -this.disregardVelocityThresholdY) &&
              this.fire('swipeup', t)
            : ((null !== (l = this.velocityY) && void 0 !== l ? l : 0) >
                this.opts.velocityThreshold ||
                c > this.disregardVelocityThresholdY) &&
              this.fire('swipedown', t)))
      : u < this.opts.pressThreshold &&
        a < this.opts.pressThreshold &&
        (this.doubleTapWaiting
          ? ((this.doubleTapWaiting = !1),
            clearTimeout(
              null !== (r = this.doubleTapTimer) && void 0 !== r ? r : void 0
            ),
            this.fire('doubletap', t))
          : ((this.doubleTapWaiting = !0),
            (this.doubleTapTimer = setTimeout(
              () => (this.doubleTapWaiting = !1),
              this.opts.doubleTapTime
            )),
            this.fire('tap', t)));
  }
}
t.defaults = {
  threshold: (t, e) =>
    Math.max(
      25,
      Math.floor(
        0.15 *
          ('x' === t
            ? window.innerWidth || document.body.clientWidth
            : window.innerHeight || document.body.clientHeight)
      )
    ),
  velocityThreshold: 10,
  disregardVelocityThreshold: (t, e) =>
    Math.floor(
      0.5 * ('x' === t ? e.element.clientWidth : e.element.clientHeight)
    ),
  pressThreshold: 8,
  diagonalSwipes: !1,
  diagonalLimit: Math.tan(0.375 * Math.PI),
  longPressTime: 500,
  doubleTapTime: 300,
  mouseSupport: !0
};
let e = !1;
try {
  window.addEventListener(
    'test',
    null,
    Object.defineProperty({}, 'passive', {
      get: function () {
        e = { passive: !0 };
      }
    })
  );
} catch (t) {}
export { t as T };
//# sourceMappingURL=TinyGesture-32f2fddd.js.map
