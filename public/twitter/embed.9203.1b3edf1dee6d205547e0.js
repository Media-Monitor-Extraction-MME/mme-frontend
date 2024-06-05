/*! For license information please see embed.9203.1b3edf1dee6d205547e0.js.LICENSE.txt */
(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
  [9203],
  {
    38190: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => s });
      var r = n(15671),
        i = n(43144),
        o = n(4942),
        a = n(16508);
      const s = new ((function () {
        function e() {
          (0, r.Z)(this, e), (0, o.Z)(this, '_reducedMotionEnabled', !1);
        }
        return (
          (0, i.Z)(e, [
            {
              key: 'reducedMotionEnabled',
              get: function () {
                return (
                  a.canUseDOM &&
                    void 0 === this._reducedMotionEnabled &&
                    (this._reducedMotionEnabled =
                      window.matchMedia &&
                      window.matchMedia('(prefers-reduced-motion)').matches),
                  this._reducedMotionEnabled
                );
              }
            },
            {
              key: 'setReducedMotion',
              value: function (e) {
                this._reducedMotionEnabled = e;
              }
            }
          ]),
          e
        );
      })())();
    },
    5509: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => Ae });
      var r = n(1413),
        i = n(71002),
        o = n(93433),
        a = n(97326),
        s = n(4942),
        l = n(87462),
        c = n(15671),
        u = n(43144),
        d = n(60136),
        h = n(98557),
        p = (n(60228), n(73964), n(34338), n(70560), n(67294)),
        f = n(16508),
        m = n(19303),
        v = n.n(m),
        g = n(8679),
        y = n.n(g),
        b = (n(45697), n(95998)),
        w = n(67177),
        E = n(74387),
        Z = n.n(E),
        _ = n(68646),
        C = n(45227),
        x = n(48778),
        S = n(68896),
        k = n(12011),
        T = n(49333),
        I = n(76488),
        L = n(64123),
        P = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, h.Z)(n);
          function n() {
            var e;
            (0, c.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, s.Z)((0, a.Z)(e), '_calcPercentageProgress', function () {
                return Math.min(100 * e.props.progress, 100);
              }),
              e
            );
          }
          return (
            (0, u.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    n = e.accessibilityLabel,
                    r = e.accessibilityValueMax,
                    i = e.ariaValueText,
                    o = e.colorValue,
                    a = e.indeterminate,
                    s = e.progressStyle,
                    l = e.style,
                    c = a
                      ? '25%'
                      : ''.concat(this._calcPercentageProgress(), '%');
                  return p.createElement(
                    w.Z,
                    {
                      accessibilityLabel: n,
                      accessibilityLabelledBy: t,
                      accessibilityRole: 'progressbar',
                      accessibilityValueMax: r,
                      accessibilityValueNow: a
                        ? void 0
                        : this._calcPercentageProgress(),
                      accessibilityValueText: i,
                      style: [R.track, l]
                    },
                    p.createElement(w.Z, {
                      style: [
                        R.progress,
                        a && R.animation,
                        {
                          width: c,
                          backgroundColor: o || L.Z.theme.colors.primary
                        },
                        s
                      ],
                      testID: 'progressBar-bar'
                    })
                  );
                }
              }
            ]),
            n
          );
        })(p.Component);
      (0, s.Z)(P, 'defaultProps', {
        indeterminate: !1,
        progress: 0,
        accessibilityValueMax: 100
      }),
        (P.propTypes = {});
      var R = L.Z.create(function (e) {
        return {
          track: {
            height: '0.2rem',
            overflow: 'hidden',
            userSelect: 'none',
            zIndex: 1,
            width: '100%'
          },
          progress: {
            height: '100%',
            transitionProperty: 'width',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'linear',
            zIndex: -1
          },
          animation: {
            animationDuration: '1s',
            animationKeyframes: [
              {
                '0%': { transform: [{ translateX: '-100%' }] },
                '100%': { transform: [{ translateX: '400%' }] }
              }
            ],
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }
        };
      });
      const O = P;
      n(39772),
        n(89730),
        n(38077),
        n(34284),
        n(25728),
        n(50886),
        n(69358),
        n(63250);
      var M = n(21302),
        D = n(31072);
      const A = function (e) {
        return e && e.length ? e[e.length - 1] : void 0;
      };
      var N = n(55793),
        z = n(29439);
      n(65137), n(36585);
      const B = function (e) {
        return Object.entries(e);
      };
      var F = n(25815);
      const H = new ((function () {
        function e() {
          (0, c.Z)(this, e),
            (0, s.Z)(this, '_isEnabled', !1),
            (0, s.Z)(this, '_subscriptionSet', new F.Z()),
            (0, s.Z)(this, '_changeListeners', []);
        }
        return (
          (0, u.Z)(e, [
            {
              key: 'isEnabled',
              get: function () {
                return this._isEnabled;
              }
            },
            {
              key: 'set',
              value: function (e) {
                this._isEnabled !== e &&
                  ((this._isEnabled = e), this._subscriptionSet.notify(e));
              }
            },
            {
              key: 'onChange',
              value: function (e) {
                return this._subscriptionSet.subscribe(e);
              }
            }
          ]),
          e
        );
      })())();
      n(64043), n(57267), n(21057), n(68932), n(97195);
      var W = n(83677),
        U = n.n(W),
        V = n(17673),
        G = n(66799),
        j = /^(https:\/\/.+\/[^/]+?)(\.[a-zA-Z_0-9]+)?(\?.*)?$/i,
        K = (function () {
          function e(t, n, r, i) {
            (0, c.Z)(this, e),
              (this.imageId = t),
              (this.originalSize = n),
              (this.variant = r),
              (this.hasLegacyUri = i);
          }
          return (
            (0, u.Z)(e, [
              {
                key: 'width',
                get: function () {
                  return this._getSize().width;
                }
              },
              {
                key: 'height',
                get: function () {
                  return this._getSize().height;
                }
              },
              {
                key: 'uri',
                get: function () {
                  if (!this._uri) {
                    var e = this.imageId,
                      t = e.baseUrl,
                      n = e.format,
                      r = this.variant,
                      i = r.format,
                      o = r.name,
                      a = i || n;
                    !H.isEnabled ||
                      ('tiny' !== o && 'small' !== o) ||
                      (a = 'png' === a ? 'jpg' : a),
                      (this._uri = this.hasLegacyUri
                        ? (function (e) {
                            var t = e.baseUrl,
                              n = e.variantName,
                              r = e.format,
                              i = n;
                            r ||
                              (G.Z.report(
                                new Error(
                                  'uivImageId.legacyUrl: format is missing'
                                )
                              ),
                              (r = 'jpg')),
                              i ||
                                (G.Z.report(
                                  new Error(
                                    'uivImageId.legacyUrl: variantName is missing'
                                  )
                                ),
                                (i = 'small'));
                            var o = t.indexOf('?'),
                              a = o >= 0 ? t.substring(0, o) : t,
                              s = 'orig' === n ? '' : ':'.concat(i);
                            return ''.concat(a, '.').concat(r).concat(s);
                          })({ baseUrl: t, format: a, variantName: o })
                        : (function (e) {
                            var t = e.baseUrl,
                              n = e.format,
                              r = e.variantName;
                            n ||
                              (G.Z.report(
                                new Error(
                                  'uivImageId.canonicalUrl: format is missing'
                                )
                              ),
                              (n = 'jpg')),
                              r ||
                                (G.Z.report(
                                  new Error(
                                    'uivImageId.canonicalUrl: variantName is missing'
                                  )
                                ),
                                (r = 'small'));
                            var i = t.indexOf('?') >= 0 ? '&' : '?';
                            return ''
                              .concat(t)
                              .concat(i, 'format=')
                              .concat(n, '&name=')
                              .concat(r);
                          })({ baseUrl: t, format: a, variantName: o }));
                  }
                  return this._uri;
                }
              },
              {
                key: '_getSize',
                value: function () {
                  if (!this._size) {
                    var e = this.originalSize,
                      t = e.height,
                      n = e.width,
                      r = this.variant.dimension,
                      i = n >= t;
                    this._size = i
                      ? { width: r, height: (r * t) / n }
                      : { width: (r * n) / t, height: r };
                  }
                  return this._size;
                }
              }
            ]),
            e
          );
        })(),
        Y = (function () {
          function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n.hasLegacyUri;
            (0, c.Z)(this, e),
              (this._variants = B(t).map(function (e) {
                var t = (0, z.Z)(e, 2),
                  n = t[0],
                  r = t[1];
                return { name: n, dimension: r.dimension, format: r.format };
              })),
              this._variants.sort(function (e, t) {
                return e.dimension - t.dimension;
              }),
              (this._hasLegacyUri = r || !1);
          }
          return (
            (0, u.Z)(e, [
              {
                key: 'enumerateVersions',
                value: function (e) {
                  for (
                    var t = Math.max(e.width, e.height),
                      n = (function (e) {
                        var t,
                          n = j.exec(e);
                        if (n) {
                          var r = (0, z.Z)(n, 4),
                            i = r[1],
                            o = r[2],
                            a = r[3],
                            s = a
                              ? V.parse('?' === (t = a)[0] ? t.substring(1) : t)
                              : U(),
                            l = o && o.replace('.', '');
                          return {
                            baseUrl: i,
                            format: s.format || l,
                            variantName: s.name
                          };
                        }
                        return {
                          baseUrl: e,
                          format: void 0,
                          variantName: void 0
                        };
                      })(e.url),
                      i = { width: e.width, height: e.height },
                      o = [],
                      a = 0;
                    a < this._variants.length;
                    a++
                  ) {
                    var s = this._variants[a];
                    if (!(s.dimension <= t)) {
                      o.push(
                        new K(
                          n,
                          i,
                          (0, r.Z)((0, r.Z)({}, s), {}, { dimension: t }),
                          this._hasLegacyUri
                        )
                      );
                      break;
                    }
                    o.push(new K(n, i, s, this._hasLegacyUri));
                  }
                  return o;
                }
              },
              {
                key: 'getLargestDimension',
                value: function () {
                  return this._variants[this._variants.length - 1].dimension;
                }
              }
            ]),
            e
          );
        })(),
        $ = new Y(
          {
            thumb: { dimension: 150 },
            small: { dimension: 680 },
            medium: { dimension: 1200 },
            large: { dimension: 2048 }
          },
          { hasLegacyUri: !0 }
        ),
        q = [
          { name: '300x100', width: 300, height: 100 },
          { name: '600x200', width: 600, height: 200 },
          { name: '1080x360', width: 1080, height: 360 },
          { name: '1500x500', width: 1500, height: 500 }
        ],
        X =
          (n(52003),
          n(68518),
          n(13440),
          n(12826),
          n(6203),
          n(22462),
          n(72410),
          n(23896));
      n(7409);
      var Q = function (e) {
          var t = e.width || 1e3,
            n = e.height || 1e3;
          return [{ uri: e.url, width: t, height: n }];
        },
        J = /https:\/\/([^/]+)\/(1\.1\/ton\/data\/)?([^/]+)\/.+/,
        ee = function (e, t) {
          var n = J.exec(t);
          if (n) {
            var r = (0, z.Z)(n, 4),
              i = r[1],
              o = r[3];
            return e.indexOf(i) < 0
              ? te.test(i)
                ? 'periscope'
                : void G.Z.report(
                    new Error(
                      'Unexpected CDN domain for image: ['.concat(i, ']')
                    )
                  )
              : o;
          }
        },
        te =
          /(?:pscp\.tv|periscope\.tv|prod-periscope-profile.[a-z0-9-]+.amazonaws.com|platform-lookaside\.fbsbx\.com|scontent\.xx\.fbcdn\.net|scontent-sea1-1\.xx\.fbcdn\.net|googleusercontent\.com)/,
        ne = [
          { name: '_normal', width: 48, height: 48 },
          { name: '_bigger', width: 73, height: 73 },
          { name: '_x96', width: 96, height: 96 },
          { name: '_reasonably_small', width: 128, height: 128 }
        ],
        re = [{ name: '_mini', width: 24, height: 24 }].concat(ne, [
          { name: '_200x200', width: 200, height: 200 },
          { name: '_400x400', width: 400, height: 400 }
        ]),
        ie = new RegExp(
          '('.concat(
            re
              .map(function (e) {
                return e.name;
              })
              .join('|'),
            ')'
          )
        );
      function oe(e) {
        var t = e.url,
          n = t.match(ie);
        if (null === n)
          return (
            G.Z.report(new Error('Avatar URL does not have expected format'), {
              extra: { url: t }
            }),
            Q(e)
          );
        var r,
          i,
          o,
          a,
          s,
          l,
          c = (0, z.Z)(n, 2)[1];
        function u(e) {
          return e.map(function (e) {
            var n = e.height,
              r = e.name,
              i = e.width;
            return { uri: t.replace(c, r), width: i, height: n };
          });
        }
        return (
          (r = t),
          (i = '.gif'),
          (s = (a = (0, X.Z)(o) ? Math.min(o, r.length) : r.length) - i.length),
          (l = r.lastIndexOf(i, s)) >= 0 && l + i.length === a ? u(ne) : u(re)
        );
      }
      var ae,
        se =
          'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png',
        le = (0, s.Z)({}, se, oe({ url: se }));
      function ce() {
        return (
          void 0 === ae &&
            (ae = (function () {
              if (!f.canUseDOM) return !1;
              var e = document.createElement('b');
              (e.innerHTML =
                '<object type=image/webp width=0><object type=image/webp data=data:i width=0>!</object>!</object>'),
                document.body.appendChild(e);
              var t = !e.offsetWidth;
              return document.body.removeChild(e), t;
            })()),
          ae
        );
      }
      var ue = {
          tiny: { dimension: 64 },
          '120x120': { dimension: 120 },
          '240x240': { dimension: 240 },
          '360x360': { dimension: 360 },
          small: { dimension: 680 },
          '900x900': { dimension: 900 },
          medium: { dimension: 1200 },
          large: { dimension: 2048 },
          '4096x4096': { dimension: 4096 }
        },
        de = new Y(ue),
        he = new Y(
          (0, r.Z)(
            (0, r.Z)({}, ue),
            {},
            { tiny: { dimension: 64, format: 'webp' } }
          )
        ),
        pe = new Y(
          (0, r.Z)(
            (0, r.Z)({}, ue),
            {},
            {
              tiny: { dimension: 64, format: 'webp' },
              '120x120': { dimension: 120, format: 'webp' },
              '240x240': { dimension: 240, format: 'webp' },
              '360x360': { dimension: 360, format: 'webp' },
              small: { dimension: 680, format: 'webp' },
              '900x900': { dimension: 900, format: 'webp' },
              medium: { dimension: 1200, format: 'webp' },
              large: { dimension: 2048, format: 'webp' },
              '4096x4096': { dimension: 4096, format: 'webp' }
            }
          )
        );
      const fe = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = de;
        return ce() && (n = t ? pe : he), n.enumerateVersions(me(e));
      };
      var me = function (e) {
          if (!e.width || !e.height)
            return (
              G.Z.report(
                new Error(
                  'UIV original image does not specify width or height'
                ),
                { extra: { imageUrl: e.url } }
              ),
              (0, r.Z)((0, r.Z)({}, e), ve(1))
            );
          var t = e.height,
            n = e.width;
          return Math.min(n, t) < 24 ? (0, r.Z)((0, r.Z)({}, e), ve(n / t)) : e;
        },
        ve = function (e) {
          var t = de.getLargestDimension();
          return e >= 1
            ? { width: t, height: t / e }
            : { width: t * e, height: t };
        };
      const ge =
        ((be = (ye = {
          variantMapping: {
            ad_img: fe,
            amplify_video_thumb: fe,
            blob: Q,
            card_img: fe,
            cards: Q,
            commerce_product_img: Q,
            'developer-card-service': Q,
            dm: function (e) {
              return $.enumerateVersions(
                (function (e) {
                  return (0, r.Z)(
                    (0, r.Z)({}, e),
                    {},
                    { width: e.width || 1e3, height: e.height || 1e3 }
                  );
                })(e)
              );
            },
            dm_gif_preview: fe,
            dm_group_img: fe,
            dm_video_preview: fe,
            ext_tw_video_thumb: fe,
            focused_timeline_actions: Q,
            'gryphon-client': Q,
            lex: Q,
            live_event_img: fe,
            list_banner_img: fe,
            community_banner_img: fe,
            media: fe,
            news_img: Q,
            onboarding: Q,
            profile_banners: function (e) {
              var t = (function (e) {
                return '/' === e[e.length - 1] ? e : ''.concat(e, '/');
              })(e.url);
              return q.map(function (e) {
                var n = e.height,
                  r = e.name,
                  i = e.width;
                return { uri: ''.concat(t).concat(r), width: i, height: n };
              });
            },
            profile_images: oe,
            semantic_core_img: fe,
            sticky: function (e) {
              var t = e.url;
              return le[t] || [{ uri: t, width: 48, height: 48 }];
            },
            topics: Q,
            tweet_video_thumb: fe,
            'responsive-web': Q,
            periscope: Q
          },
          cdnDomains: [
            'pbs.twimg.com',
            'pbs-0.twimg.com',
            'pbs-o.twimg.com',
            'abs.twimg.com',
            'abs-0.twimg.com',
            'ton.twitter.com',
            'ton.twimg.com'
          ]
        }).cdnDomains),
        (we = ye.variantMapping),
        function (e, t) {
          var n,
            r = (function (e, t) {
              return 0 === (null == t ? void 0 : t.indexOf('blob:')) ||
                0 === (null == t ? void 0 : t.indexOf('data:'))
                ? 'blob'
                : ee(e, t);
            })(be, e.url);
          return (
            r &&
              'function' != typeof (n = we[r]) &&
              G.Z.report(
                new Error(
                  'No variant generator is specified for category ['.concat(
                    r || '<unknown>',
                    ']'
                  )
                )
              ),
            (n || Q)(e, t)
          );
        });
      var ye,
        be,
        we,
        Ee = function (e, t) {
          return e.width >= t.width && e.height >= t.height;
        };
      const Ze = function (e) {
        var t = e.containerSize,
          n = e.pixelRatio,
          r = e.versions;
        if (0 !== r.length) {
          var i = H.isEnabled ? Math.min(n, 1.5) : n;
          return (function (e, t) {
            return (
              e.find(function (e) {
                return Ee(e, t);
              }) || A(e)
            );
          })(r, { width: t.width * i, height: t.height * i });
        }
      };
      var _e = (0, D.Z)(function (e, t, n, r) {
          var i = t || ge('string' == typeof e ? { url: e } : e, r),
            o = !t && n ? Ce(i) : i,
            a = -1;
          'string' != typeof e &&
            (a = o.findIndex(function (t) {
              return t.width >= e.width && t.height >= e.height;
            }));
          var s = -1 === a ? o.length : a + 1;
          return o.slice(0, s);
        }),
        Ce = function (e) {
          return e.filter(function (e) {
            return !(e && e.variant && 'tiny' === e.variant.name);
          });
        };
      const xe = function (e, t, n, r) {
          var i = _e(t, n, !0, r),
            o = Ze({
              versions: i,
              containerSize: e,
              pixelRatio: Math.min(M.Z.get(), 2)
            });
          return o ? o.uri : void 0;
        },
        Se = function (e, t, n) {
          var r = _e(e, t, void 0, n);
          return N.ZP.isDesktopOS()
            ? A(r)
            : r.find(function (e) {
                return Math.max(e.width, e.height) >= 2048;
              }) || A(r);
        };
      var ke = function (e, t) {
        return Math.min(t, Math.max(-t, e));
      };
      var Te = (function () {
          function e() {
            (0, c.Z)(this, e);
          }
          return (
            (0, u.Z)(e, [
              {
                key: 'get',
                value: function (e) {
                  return this._state && this._state.aspectRatio === e
                    ? this._state.layout
                    : void 0;
                }
              },
              {
                key: 'getCoverSize',
                value: function () {
                  return this._stateCover;
                }
              },
              {
                key: 'set',
                value: function (e, t) {
                  this._state = { aspectRatio: e, layout: t };
                }
              },
              {
                key: 'setCover',
                value: function (e) {
                  this._stateCover = e;
                }
              }
            ]),
            e
          );
        })(),
        Ie = Z().a620fcf0,
        Le = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, h.Z)(n);
          function n() {
            return (0, c.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, u.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return p.createElement(k.ZP.UseProps, null, function (t) {
                    var n = t.webImageLargeWebpVariants;
                    return p.createElement(
                      Pe,
                      (0, l.Z)({}, e.props, { featureUseLargeWebp: n() })
                    );
                  });
                }
              }
            ]),
            n
          );
        })(p.Component),
        Pe = (function (e) {
          (0, d.Z)(n, e);
          var t = (0, h.Z)(n);
          function n(e) {
            var r;
            (0, c.Z)(this, n),
              (r = t.call(this, e)),
              (0, s.Z)((0, a.Z)(r), '_unmounted', !1),
              (0, s.Z)((0, a.Z)(r), '_skipLayout', !1),
              (0, s.Z)((0, a.Z)(r), 'state', {
                url: void 0,
                crop: void 0,
                previewUrl: void 0,
                showBackground: !0
              }),
              (0, s.Z)((0, a.Z)(r), '_handleLayout', function (e) {
                if (!r._unmounted) {
                  var t = e.nativeEvent.layout,
                    n = r.props,
                    i = n.aspectMode,
                    o = n.layoutCache;
                  if (t.width && t.height)
                    if (o && 'ratioRange' === i.type) {
                      var a = r._deriveAspectRatio(i);
                      o.set(a, { width: t.width, height: t.height });
                    } else
                      o &&
                        'cover' === i.type &&
                        o.setCover({ width: t.width, height: t.height });
                  r._updateVersion(r.props, t, !1);
                }
              }),
              (0, s.Z)((0, a.Z)(r), '_handleLoad', function () {
                var e = r.props.onLoad;
                r._unmounted ||
                  (r.setState({ showBackground: !1, previewUrl: void 0 }),
                  e && e());
              });
            var i = e.aspectMode,
              o = e.layoutCache,
              l =
                o &&
                (('ratioRange' === i.type && o.get(r._deriveAspectRatio(i))) ||
                  ('cover' === i.type && o.getCoverSize()));
            if (l) {
              r._skipLayout = !0;
              var u = n.getComputedVersion(l, e, r.state, !1);
              u && (r.state = u);
            }
            return r;
          }
          return (
            (0, u.Z)(
              n,
              [
                {
                  key: 'shouldComponentUpdate',
                  value: function (e, t) {
                    var n = this.props;
                    return (
                      !v()(this.state, t) ||
                      n.accessibilityLabel !== e.accessibilityLabel ||
                      !v()(n.aspectMode, e.aspectMode) ||
                      n.rounded !== e.rounded ||
                      n.backgroundColor !== e.backgroundColor
                    );
                  }
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    n.notifySelection(this.props, void 0, this.state.url, !1),
                      (this._unmounted = !0);
                  }
                },
                {
                  key: 'url',
                  get: function () {
                    var e = f.canUseDOM
                        ? null
                        : xe(b.Z.get('window'), this.props.image),
                      t = this.state.url || e;
                    return 'string' == typeof t
                      ? t
                      : null == t
                        ? void 0
                        : t.url;
                  }
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.aspectMode,
                      n = e.withLoadingIndicator,
                      r = this.state,
                      i = r.crop,
                      o = r.previewUrl,
                      a = i && Oe(i),
                      s = !!o && this._renderPreview(o, a),
                      l =
                        this.url &&
                        this._renderImage(this.url, this._handleLoad, a),
                      c = n && s && l ? De : null,
                      u = p.Children.toArray([l, s, c]);
                    return 'ratioRange' === t.type
                      ? this._renderInRatioRangeMode(t, u)
                      : this._renderInCoverMode(u);
                  }
                },
                {
                  key: '_renderInCoverMode',
                  value: function (e) {
                    return p.createElement(
                      w.Z,
                      {
                        onLayout: this._skipLayout
                          ? void 0
                          : this._handleLayout,
                        style: [Me.root].concat(
                          (0, o.Z)(this._getBackgroundStyle())
                        )
                      },
                      e
                    );
                  }
                },
                {
                  key: '_renderInRatioRangeMode',
                  value: function (e, t) {
                    var n = this.props.mediaMaxHeight,
                      r = this._deriveAspectRatio(e);
                    return p.createElement(
                      S.Z,
                      {
                        onLayout:
                          this._skipLayout &&
                          (r > e.minAspectRatio ||
                            e.minAspectRatio === e.maxAspectRatio)
                            ? void 0
                            : this._handleLayout,
                        ratio: r,
                        style: [].concat((0, o.Z)(this._getBackgroundStyle()), [
                          !!n && r < 1 && { width: r * n, height: n }
                        ])
                      },
                      t
                    );
                  }
                },
                {
                  key: '_renderImage',
                  value: function (e, t, n) {
                    var r = this.props,
                      i = r.accessibilityLabel,
                      o = r.draggable,
                      a = r.onError,
                      s = r.rounded,
                      l = r.testID;
                    return p.createElement(T.Z, {
                      accessibilityLabel: i,
                      draggable: o,
                      onError: a,
                      onLoad: t,
                      source: e,
                      style: [L.Z.absoluteFill, s && Me.rounded, n],
                      testID: l
                    });
                  }
                },
                {
                  key: '_renderPreview',
                  value: function (e, t) {
                    return p.createElement(
                      w.Z,
                      { style: [Me.blur, Me.root] },
                      this._renderImage(e, _.Z, t)
                    );
                  }
                },
                {
                  key: '_updateVersion',
                  value: function (e, t, r) {
                    t &&
                      !this._unmounted &&
                      this.setState(n.getComputedVersion(t, e, this.state, r));
                  }
                },
                {
                  key: '_deriveAspectRatio',
                  value: function (e) {
                    var t = e.maxAspectRatio,
                      n = e.minAspectRatio,
                      r = this.props,
                      i = r.customVariants,
                      o = r.image,
                      a = ('string' == typeof o ? Se(o, i) : o) || {},
                      s = a.height,
                      l = a.width;
                    return (0, I.q)(n, t, { width: l, height: s });
                  }
                },
                {
                  key: '_getBackgroundStyle',
                  value: function () {
                    var e = this.props,
                      t = e.backgroundColor,
                      n = e.rounded,
                      r =
                        this.state.showBackground && t
                          ? [{ backgroundColor: Re(t) }]
                          : [];
                    return n && r.push(Me.rounded), r;
                  }
                }
              ],
              [
                {
                  key: 'createLayoutCache',
                  value: function () {
                    return new Te();
                  }
                },
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var r, i, o;
                    if (!t.layout) return null;
                    var a =
                      !(0, C.Z)(
                        null === (r = t.prevProps) || void 0 === r
                          ? void 0
                          : r.image,
                        e.image
                      ) ||
                      !(0, C.Z)(
                        null === (i = t.prevProps) || void 0 === i
                          ? void 0
                          : i.cropCandidates,
                        e.cropCandidates
                      );
                    if (
                      a ||
                      (null === (o = t.prevProps) || void 0 === o
                        ? void 0
                        : o.previewMode) !== e.previewMode
                    ) {
                      var s = n.getComputedVersion(
                        t.layout || { width: 0, height: 0 },
                        e,
                        t,
                        a
                      );
                      if (s) return s;
                    }
                    return null;
                  }
                },
                {
                  key: 'getComputedVersion',
                  value: function (e, t, r, o) {
                    if (e) {
                      var a,
                        s = t.cropCandidates,
                        l = t.customVariants,
                        c = t.featureUseLargeWebp,
                        u = t.image,
                        d = t.previewMode,
                        h = t.withCenterCrop,
                        p = r.previewUrl,
                        f = r.showBackground,
                        m = r.url,
                        v = xe(e, u, l, c),
                        g = d ? void 0 : v;
                      d
                        ? (a =
                            o || !p
                              ? (function (e, t, n) {
                                  var r = _e(e, t, void 0, n)[0];
                                  return r && r.width <= 160 && r.height <= 160
                                    ? r.uri
                                    : void 0;
                                })(u, l, c)
                              : p)
                        : !g || m || o || (a = p);
                      var y =
                        'object' === (0, i.Z)(u)
                          ? (function (e) {
                              var t = e.cropCandidates,
                                n = e.image,
                                r = e.layout,
                                i = r.width / r.height,
                                o = I.Z.selectBestCropCandidate(i, t);
                              return o
                                ? (function (e, t, n) {
                                    if (e.width / e.height < t) {
                                      var r = n.y + n.h / 2,
                                        i = e.width / t,
                                        o = (e.height - i) / 2;
                                      return {
                                        displacementX: 0,
                                        displacementY:
                                          (2 * ke(e.height / 2 - r, o)) /
                                          e.width
                                      };
                                    }
                                    var a = n.x + n.w / 2,
                                      s = t * e.height,
                                      l = (e.width - s) / 2;
                                    return {
                                      displacementX:
                                        (2 * ke(e.width / 2 - a, l)) / s,
                                      displacementY: 0
                                    };
                                  })(n, i, o)
                                : { displacementX: 0, displacementY: 0 };
                            })(
                              h
                                ? { image: u, layout: e, cropCandidates: [] }
                                : { image: u, layout: e, cropCandidates: s }
                            )
                          : void 0;
                      return (
                        n.notifySelection(t, v, m, v !== g),
                        {
                          url: g,
                          crop: y,
                          previewUrl: a,
                          layout: e,
                          prevProps: t,
                          showBackground: f
                        }
                      );
                    }
                  }
                },
                {
                  key: 'notifySelection',
                  value: function (e, t, n, r) {
                    var i = e.onVariantSelection;
                    i &&
                      (t || n) &&
                      t &&
                      t !== n &&
                      i({ previous: n, selected: t, wasPrevented: r });
                  }
                }
              ]
            ),
            n
          );
        })(p.Component);
      (0, s.Z)(Pe, 'defaultProps', {
        aspectMode: x.Z.SQUARE,
        cropCandidates: [],
        draggable: !0,
        previewMode: !1,
        rounded: !1,
        withCenterCrop: !1,
        withLoadingIndicator: !1
      }),
        (Pe.propTypes = {});
      var Re = function (e) {
          return 'object' === (0, i.Z)(e)
            ? 'rgb('
                .concat(e.red, ', ')
                .concat(e.green, ', ')
                .concat(e.blue, ')')
            : e;
        },
        Oe = function (e) {
          var t = e.displacementX,
            n = e.displacementY;
          return {
            marginStart: t < 0 ? ''.concat(Math.floor(100 * t), '%') : 0,
            marginEnd: t > 0 ? ''.concat(Math.ceil(100 * -t), '%') : 0,
            marginTop: n < 0 ? ''.concat(Math.floor(100 * n), '%') : 0,
            marginBottom: n > 0 ? ''.concat(Math.ceil(100 * -n), '%') : 0
          };
        },
        Me = L.Z.create(function (e) {
          return {
            root: (0, r.Z)(
              (0, r.Z)({}, L.Z.absoluteFillObject),
              {},
              { overflow: 'hidden' }
            ),
            rounded: { borderRadius: e.borderRadii.infinite },
            blur: { filter: 'blur(4px)', transform: [{ scale: 1.1 }] },
            progressBar: { position: 'absolute', top: 0 }
          };
        }),
        De = f.canUseDOM
          ? p.createElement(O, {
              ariaValueText: Ie,
              indeterminate: !0,
              style: Me.progressBar
            })
          : null;
      const Ae = y()(Le, Pe);
    },
    48778: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => r });
      const r = {
        withinRange: function (e, t) {
          return { type: 'ratioRange', minAspectRatio: e, maxAspectRatio: t };
        },
        exact: function (e) {
          return { type: 'ratioRange', minAspectRatio: e, maxAspectRatio: e };
        },
        SQUARE: { type: 'ratioRange', minAspectRatio: 1, maxAspectRatio: 1 },
        COVER: { type: 'cover' }
      };
    },
    68896: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(37353),
        s = n(20773),
        l = n(67177),
        c = ['children', 'onLayout', 'ratio', 'style'],
        u = s.Z.create({
          root: { display: 'block', overflow: 'hidden' },
          ratio: { display: 'block', width: '100%' },
          content: {
            bottom: 0,
            height: '100%',
            start: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
          }
        });
      const d = function (e) {
        var t = e.children,
          n = e.onLayout,
          s = e.ratio,
          d = e.style,
          h = (0, i.Z)(e, c),
          p = 100 / s;
        return o.createElement(
          l.Z,
          (0, r.Z)({}, h, { onLayout: n, style: [u.root, d] }),
          (0, a.Z)('div', {
            style: [u.ratio, { paddingBottom: ''.concat(p, '%') }]
          }),
          (0, a.Z)('div', { children: t, style: u.content })
        );
      };
    },
    56378: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => b });
      var r = n(71002),
        i = n(15671),
        o = n(43144),
        a = n(97326),
        s = n(60136),
        l = n(98557),
        c = n(4942),
        u = (n(34338), n(67294)),
        d = n(67177),
        h = n(64123),
        p = n(64122);
      const f = u.createContext({ avatarSize: p.default.defaultSize });
      var m = (function (e) {
        (0, s.Z)(n, e);
        var t = (0, l.Z)(n);
        function n() {
          var e;
          (0, i.Z)(this, n);
          for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
            o[s] = arguments[s];
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (0, c.Z)((0, a.Z)(e), '_renderCells', function () {
              var t = e.props,
                n = t.avatarCell,
                r = t.avatarCellStyle,
                i = t.avatarSize,
                o = t.cellStyle,
                a = t.children,
                s = t.rightControl;
              return u.createElement(
                u.Fragment,
                null,
                u.createElement(
                  f.Provider,
                  { value: { avatarSize: i } },
                  void 0 === n
                    ? null
                    : u.createElement(d.Z, { style: [y.avatar, v(i), r] }, n),
                  u.createElement(d.Z, { style: [y.cell, o] }, a),
                  s || null
                )
              );
            }),
            e
          );
        }
        return (
          (0, o.Z)(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.style,
                  n = e.testID;
                return u.createElement(
                  d.Z,
                  { style: [y.root, t], testID: n },
                  this._renderCells()
                );
              }
            }
          ]),
          n
        );
      })(u.Component);
      (0, c.Z)(m, 'defaultProps', { avatarSize: p.default.defaultSize });
      var v = function (e) {
          return 'object' === (0, r.Z)(e) ? e : 'custom' === e ? {} : g[e];
        },
        g = h.Z.create(function (e) {
          return {
            small: { flexBasis: e.spaces.space16 },
            medium: { flexBasis: e.spaces.space20 },
            large: { flexBasis: e.spaces.space32 },
            xLarge: { flexBasis: e.spaces.space40 },
            xxLarge: { flexBasis: e.spaces.space48 },
            xxxLarge: { flexBasis: e.spaces.space56 },
            jumbo: { flexBasis: e.spaces.space64 }
          };
        }),
        y = h.Z.create(function (e) {
          return {
            root: { flexDirection: 'row' },
            cell: { flexBasis: 0, flexGrow: 1 },
            avatar: { flexGrow: 0, marginEnd: e.spaces.space12 }
          };
        });
      const b = m;
    },
    79862: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => L });
      var r = n(1413),
        i = (n(470), n(67294)),
        o = n(67177),
        a = n(37353),
        s = n(7960),
        l = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, a.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M20.579 3.098c-3.035 1.41-5.521.931-8.154.422C10.1 3.072 7.704 2.624 5 3.515V2.001H3V22h2v-4.346c2.466-1.033 4.603-.641 7.047-.17 1.354.261 2.798.539 4.359.539 1.548 0 3.212-.273 5.015-1.11l.579-.269V2.438l-1.421.659zm-2.501 8.672c-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496h.001c.182.372.025.82-.348 1z'
                  })
                )
              }
            )
          );
        };
      l.metadata = { width: 24, height: 24 };
      const c = l;
      var u = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.Z)(
          'svg',
          (0, r.Z)(
            (0, r.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [s.Z.root, e.style],
              viewBox: '0 0 24 24',
              children: i.createElement(
                'g',
                null,
                i.createElement('path', {
                  d: 'M18.425 10.77h.001c.182.372.025.82-.348 1-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496zM22 2.439v14.205l-.579.269c-1.803.837-3.466 1.11-5.015 1.11-1.561 0-3.005-.278-4.359-.539-2.443-.471-4.581-.863-7.047.17V22H3V2h2v1.514c2.705-.89 5.1-.443 7.425.005 2.633.509 5.12.988 8.154-.422L22 2.438zM20 5.47c-3.009.967-5.616.464-7.953.014-2.443-.471-4.581-.863-7.047.17v9.86c2.705-.891 5.1-.442 7.425.005 2.462.475 4.798.925 7.575-.173V5.47z'
                })
              )
            }
          )
        );
      };
      u.metadata = { width: 24, height: 24 };
      const d = u;
      var h = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.Z)(
          'svg',
          (0, r.Z)(
            (0, r.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [s.Z.root, e.style],
              viewBox: '0 0 24 24',
              children: i.createElement(
                'g',
                null,
                i.createElement('path', {
                  d: 'M5.5 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18.25 13.91c-.18-2.01-.78-3.72-1.81-4.96C20.89 10.7 19.45 10 17.75 10c-.35 0-.68.03-1.01.09-.18.54-.45 1.05-.8 1.49.74.46 1.41 1.05 1.99 1.76 1.05 1.3 1.71 2.91 2.06 4.66h3.85l-.09-1.09zM18.5 9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM6.07 13.34c.58-.71 1.25-1.3 1.99-1.76-.35-.44-.62-.95-.8-1.49-.33-.06-.66-.09-1.01-.09-1.7 0-3.14.7-4.19 1.95C1.032 13.19.433 14.9.254 16.91L.157 18H4.01c.35-1.75 1.01-3.36 2.06-4.66zM15 8.5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-7.37 6.1c-1.07 1.32-1.69 3.15-1.88 5.31L5.66 21h12.68l-.09-1.09c-.19-2.16-.81-3.99-1.88-5.31-1.08-1.35-2.59-2.1-4.37-2.1s-3.28.75-4.37 2.1z'
                })
              )
            }
          )
        );
      };
      h.metadata = { width: 24, height: 24 };
      const p = h;
      var f = n(47794),
        m = n(86034),
        v = n(81443),
        g = n(24174),
        y = n(12011),
        b = n(43463),
        w = n(76290),
        E = n(27e3),
        Z = n(67797),
        _ = (n(41830), n(64123)),
        C = _.Z.create(function (e) {
          return { container: { display: 'inline-block' } };
        }),
        x = function (e) {
          return (0, a.Z)('span', e);
        },
        S = Object.freeze({ x: 'x', y: 'y' });
      const k = function (e) {
        var t = _.Z.theme.spacesPx.space1,
          n = _.Z.theme.spacesPx[e.size],
          r = { minWidth: n, minHeight: n };
        return (
          e.axis === S.x
            ? (r.minHeight = t)
            : e.axis === S.y && (r.minWidth = t),
          i.createElement(x, { style: [C.container, r] })
        );
      };
      var T = { element: 'birdwatch_pivot' },
        I = function (e, t, n) {
          return {
            items: [
              {
                id: n,
                birdwatch_pivot_details: { note_id: t, destination_url: e }
              }
            ]
          };
        };
      function L(e) {
        var t = e.callToAction,
          n = e.destinationUrl,
          a = e.footer,
          s = e.iconType,
          l = e.isForQuoteTweet,
          u = e.noteId,
          h = e.onEntityClick,
          C = e.onPivotClick,
          x = e.shorttitle,
          S = e.subtitle,
          L = e.title,
          R = e.tweetId,
          O = Z.Z.useAnalytics(),
          M = (0, w.F)().containerWidth,
          D =
            '#' === n
              ? void 0
              : { pathname: n, anchorless: !0, state: { tweetId: R } },
          A = i.useCallback(
            function (e) {
              R &&
                O.scribe(
                  (0, r.Z)(
                    (0, r.Z)({}, T),
                    {},
                    { action: 'click', data: I(n, u, R) }
                  )
                ),
                C && C(e);
            },
            [O, n, u, R, C]
          ),
          N = D ? A : void 0,
          z = (M <= _.Z.theme.breakpoints.medium || l) && x ? x : L,
          B = (null == t ? void 0 : t.destinationUrl) || '#',
          F =
            '#' === B
              ? void 0
              : { pathname: B, state: { tweetId: R }, anchorless: !0 },
          H = y.ZP.useProps();
        return (
          i.useEffect(function () {
            H.birdwatchPivotsEnabled() &&
              R &&
              O.scribe(
                (0, r.Z)(
                  (0, r.Z)({}, T),
                  {},
                  { action: 'impression', data: I(n, u, R) }
                )
              );
          }, []),
          H.birdwatchPivotsEnabled()
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  b.Z,
                  {
                    link: D,
                    onPress: N,
                    style: [P.pivotContainer, l && P.pivotQuoteTweetContainer],
                    testID: 'birdwatch-pivot',
                    withInteractiveStyling: !!D
                  },
                  i.createElement(
                    o.Z,
                    {
                      style: [
                        P.headerContainer,
                        l && P.headerQuoteTweetContainer
                      ]
                    },
                    (function (e) {
                      switch (e) {
                        case 'BirdwatchFlagFill':
                          return i.createElement(c, {
                            style: P.birdwatchIcon,
                            testID: 'icon-birdwatch-flag'
                          });
                        case 'BirdwatchFlagStroke':
                          return i.createElement(d, {
                            style: P.birdwatchIcon,
                            testID: 'icon-birdwatch-flag-stroke'
                          });
                        default:
                          return i.createElement(p, {
                            style: P.birdwatchIcon,
                            testID: 'icon-birdwatch-fill'
                          });
                      }
                    })(s),
                    i.createElement(
                      m.ZP,
                      {
                        size: 'subtext1',
                        style: P.headerAppText,
                        weight: 'bold'
                      },
                      z
                    ),
                    t
                      ? null
                      : i.createElement(f.Z, {
                          style: P.arrowIcon,
                          testID: 'icon-arrow-right'
                        })
                  ),
                  S
                    ? i.createElement(
                        i.Fragment,
                        null,
                        !l && i.createElement(k, { size: 'space12' }),
                        i.createElement(E.Z, {
                          entities: S.entities,
                          onEntityClick: h,
                          size: 'body',
                          style: P.subtitle,
                          text: S.text
                        }),
                        !l && i.createElement(k, { size: 'space12' })
                      )
                    : null,
                  t
                    ? i.createElement(
                        i.Fragment,
                        null,
                        l ? null : i.createElement(g.Z, { spacing: 'space2' }),
                        i.createElement(
                          o.Z,
                          { style: P.callToActionContainer },
                          i.createElement(m.ZP, { size: 'subtext1' }, t.prompt),
                          i.createElement(
                            v.ZP,
                            {
                              link: F,
                              onPress: A,
                              size: 'small',
                              type: 'primaryOutlined'
                            },
                            t.title
                          )
                        )
                      )
                    : l && S && i.createElement(k, { size: 'space12' })
                ),
                a && !l
                  ? i.createElement(E.Z, {
                      color: 'gray700',
                      entities: a.entities,
                      onEntityClick: h,
                      size: 'subtext2',
                      style: P.footer,
                      text: a.text
                    })
                  : null
              )
            : null
        );
      }
      var P = _.Z.create(function (e) {
        return {
          footer: { paddingVertical: e.spaces.space12 },
          pivotContainer: {
            borderColor: e.colors.nestedBorderColor,
            overflow: 'hidden',
            borderWidth: e.borderWidths.small,
            borderRadius: e.borderRadii.xLarge,
            marginTop: e.spaces.space12
          },
          pivotQuoteTweetContainer: {
            marginTop: 0,
            borderWidth: 'none',
            backgroundColor: e.colors.gray0,
            borderRadius: 'none',
            borderTopWidth: e.borderWidths.small
          },
          headerContainer: {
            paddingVertical: e.spaces.space12,
            paddingHorizontal: e.spaces.space12,
            alignItems: 'start',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: e.colors.hoverBlack
          },
          headerAppText: {
            display: 'flex',
            width: '100%',
            paddingVertical: e.spaces.space2,
            alignItems: 'center'
          },
          headerQuoteTweetContainer: { backgroundColor: e.colors.transparent },
          callToActionContainer: {
            paddingVertical: e.spaces.space12,
            paddingHorizontal: e.spaces.space12,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1
          },
          arrowIcon: {
            color: e.colors.text,
            paddingStart: e.spaces.space8,
            flexShrink: 0
          },
          birdwatchIcon: {
            marginEnd: e.spacesPx.space8,
            color: e.colors.primary,
            flexShrink: 0
          },
          subtitle: { paddingHorizontal: e.spaces.space12 }
        };
      });
    },
    76724: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(15671),
        i = n(43144),
        o = n(4942),
        a = (n(32320), n(16508)),
        s = n(55793);
      const l = new ((function () {
        function e() {
          (0, r.Z)(this, e), (0, o.Z)(this, '_isScrollingEnabled', !0);
          var t = this.documentElement;
          t &&
            ((t.style.overflowY = 'scroll'),
            s.ZP.isSafari() || (t.style.overscrollBehaviorY = 'none'));
        }
        return (
          (0, i.Z)(e, [
            {
              key: 'documentElement',
              get: function () {
                return (
                  !this._documentElement &&
                    a.canUseDOM &&
                    (this._documentElement = window.document.documentElement),
                  this._documentElement
                );
              }
            },
            {
              key: 'hasScrollbars',
              value: function () {
                return this._isScrollingEnabled;
              }
            },
            {
              key: 'getScrollbarWidth',
              value: function () {
                return (
                  void 0 === this._scrollbarWidth &&
                    this._calculateScrollbarWidth(),
                  this._scrollbarWidth
                );
              }
            },
            {
              key: 'disable',
              value: function (e) {
                var t = (e || {}).withScrollBarSpace,
                  n = void 0 === t || t,
                  r = this.documentElement;
                if (r && this._isScrollingEnabled) {
                  if (
                    ((r.style.overflow = 'hidden'),
                    (r.style.marginRight = n
                      ? ''.concat(this.getScrollbarWidth(), 'px')
                      : ''),
                    s.ZP.isIOS())
                  ) {
                    var i,
                      o =
                        (null === (i = this.documentElement) || void 0 === i
                          ? void 0
                          : i.scrollTop) || 0;
                    (r.style.position = 'fixed'),
                      (r.style.top = '-'.concat(o, 'px')),
                      (r.style.left = '0px'),
                      (r.style.right = '0px');
                  }
                  this._isScrollingEnabled = !1;
                }
              }
            },
            {
              key: 'enable',
              value: function () {
                var e = this.documentElement;
                if (e) {
                  if (
                    ((e.style.overflowY = 'scroll'),
                    (e.style.overflowX = 'auto'),
                    (e.style.marginRight = ''),
                    s.ZP.isIOS())
                  ) {
                    var t = -1 * parseInt(e.style.top, 10);
                    (e.style.top = ''),
                      (e.style.position = ''),
                      (e.style.left = ''),
                      (e.style.right = ''),
                      window.scrollTo(0, t);
                  }
                  this._isScrollingEnabled = !0;
                }
              }
            },
            {
              key: '_calculateScrollbarWidth',
              value: function () {
                var e = this.documentElement;
                if (e) {
                  var t = document.createElement('div');
                  t.setAttribute(
                    'style',
                    'width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;'
                  ),
                    e.appendChild(t);
                  var n = t.offsetWidth - t.clientWidth;
                  e.removeChild(t), (this._scrollbarWidth = n);
                }
              }
            }
          ]),
          e
        );
      })())();
    },
    46873: (e, t, n) => {
      'use strict';
      n.d(t, {
        $H: () => u,
        Fw: () => i,
        P2: () => h,
        Qe: () => c,
        SN: () => d,
        TW: () => l,
        _5: () => a,
        _g: () => s,
        sj: () => r,
        uW: () => o
      }),
        n(41830);
      var r = {
          AMPLIFY: 'amplify',
          APP: 'app',
          AUDIOSPACE: '3691233323:audiospace',
          BROADCAST: '745291183405076480:broadcast',
          DIRECT_STORE_LINK_APP: 'direct_store_link_app',
          DEVELOPER_BUILT_CARD: 'DeveloperCard',
          DEVELOPER_BUILT_CARD_DEPRECATED: 'DeveloperCardDeprecated',
          FOLLOWER_CARD: 'FollowerCard',
          IMAGE_DIRECT_MESSAGE: '2586390716:image_direct_message',
          LIVE_EVENT: '745291183405076480:live_event',
          MESSAGE_ME: '2586390716:message_me',
          MOMENT: '3260518932:moment',
          NEWSLETTER_ISSUE: '3337203208:newsletter_issue',
          NEWSLETTER_PUBLICATION: '3337203208:newsletter_publication',
          NOTE: '1493954797359222784:note',
          PERISCOPE_BROADCAST: '3691233323:periscope_broadcast',
          PLAYER: 'player',
          POLL_2_CHOICE_TEXT: 'poll2choice_text_only',
          POLL_3_CHOICE_TEXT: 'poll3choice_text_only',
          POLL_4_CHOICE_TEXT: 'poll4choice_text_only',
          POLL_2_CHOICE_IMAGE: 'poll2choice_image',
          POLL_3_CHOICE_IMAGE: 'poll3choice_image',
          POLL_4_CHOICE_IMAGE: 'poll4choice_image',
          POLL_2_CHOICE_VIDEO: 'poll2choice_video',
          POLL_3_CHOICE_VIDEO: 'poll3choice_video',
          POLL_4_CHOICE_VIDEO: 'poll4choice_video',
          PROMO_IMAGE_CONVO: 'promo_image_convo',
          PROMO_VIDEO_CONVO: 'promo_video_convo',
          SUMMARY: 'summary',
          SUMMARY_LARGE_IMAGE: 'summary_large_image',
          UNIFIED_CARD: 'unified_card',
          VIDEO_DIRECT_MESSAGE: '2586390716:video_direct_message'
        },
        i = {
          ATTRIBUTION: 'attribution',
          BACKGROUND_COLOR: 'background_color',
          BUTTON_GROUP: 'button_group',
          BUTTON_GROUP_STATIC: 'button_group_static',
          DESTINATION: 'destination_default',
          DESTINATION_SECONDARY: 'destination_secondary',
          DESTINATION_EMBEDDED_MEDIA: 'destination_embedded_media',
          DESTINATION_STATIC: 'destination_static',
          DETAILS: 'details_default',
          DETAILS_SECONDARY: 'details_secondary',
          DETAILS_STATIC: 'details_static',
          MEDIA: 'media_default',
          MEDIA_SECONDARY: 'media_secondary',
          MEDIA_STATIC: 'media_static',
          IMAGE_ENTITY: 'image_entity_default',
          IMAGE_ENTITY_SECONDARY: 'image_entity_secondary',
          IMAGE_ENTITY_STATIC: 'image_entity_static',
          VIDEO_ENTITY: 'video_entity_default',
          VIDEO_ENTITY_SECONDARY: 'video_entity_secondary',
          IFRAME_ENTITY: 'iframe_entity',
          POLL: 'poll',
          POLL_STATIC: 'poll_static',
          SPACE: 'space',
          SWIPEABLE_MEDIA_STATIC: 'swipeable_media_static',
          TOPIC_DETAILS: 'topic_details'
        },
        o = {
          DEFAULT: 'default',
          CONDENSED: 'condensed',
          SECONDARY: 'secondary',
          STATIC: 'static',
          DATA_SAVER: 'data_saver'
        },
        a = { LABEL: 'label', MOMENTS: 'moments', PLAY: 'play' },
        s = {
          ACTION: 'action',
          APP_STORE: 'app_store',
          APP_STORE_WITH_DOCKED_MEDIA: 'app_store_with_docked_media',
          BROADCAST: 'broadcast',
          BROWSER: 'browser',
          BROWSER_WITH_DOCKED_MEDIA: 'browser_with_docked_media',
          BROWSER_WITH_MEDIA: 'browser_with_media',
          BROWSER_WITH_NEXT_STATE: 'browser_with_next_state',
          EVENT: 'event',
          MOMENT: 'moment',
          NEWSLETTER_SUBSCRIBE: 'newsletter_subscribe',
          PROFILE: 'profile'
        },
        l = {
          APP_STORE: 'CardAppStoreDestination',
          APP_STORE_WITH_DOCKED_MEDIA: 'CardAppStoreWithDockedMediaDestination',
          BROWSER: 'CardBrowserDestination',
          BROWSER_WITH_DOCKED_MEDIA: 'CardBrowserWithDockedMediaDestination',
          PLAYABLE: 'CardPlayableDestination',
          TWEET_COMPOSER: 'CardTweetComposerDestination',
          PROFILE: 'CardProfileDestination'
        },
        c = Object.freeze({
          APP_STORE_DETAILS: 'app_store_details',
          ATTRIBUTION: 'attribution',
          BACKGROUND_COLOR: 'background_color',
          BUTTON_GROUP: 'button_group',
          COMMUNITY_DETAILS: 'community_details',
          DETAILS: 'details',
          DETAILS_WITH_MIDDOT_GROUP: 'details_with_middot_group',
          DEVELOPER_BUILT_CARD: 'developer_built_card',
          DEVELOPER_BUILT_CARD_DEPRECATED: 'developer_built_card_deprecated',
          MEDIA: 'media',
          MEDIA_WITH_DETAILS_HORIZONTAL: 'media_with_details_horizontal',
          POLL: 'poll',
          SPACE: 'space',
          SWIPEABLE_MEDIA: 'swipeable_media',
          TOPIC_DETAILS: 'topic_details',
          TWITTER_LIST_DETAILS: 'twitter_list_details',
          DPA_DETAILS: 'dpa_details',
          FOLLOW_BUTTON: 'follow_button',
          FACEPILE: 'facepile'
        }),
        u = 'https://twitter.com',
        d = 175,
        h = Object.freeze({
          String: 'string_value',
          Image: 'image_value',
          User: 'user_value',
          Boolean: 'boolean_value'
        });
    },
    10737: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => m });
      var r = n(87462),
        i = n(45987),
        o = n(15671),
        a = n(43144),
        s = n(60136),
        l = n(98557),
        c = n(4942),
        u = n(67294),
        d = (n(45697), n(67177)),
        h = n(76290),
        p = n(64123),
        f = [
          'isFullWidth',
          'isLarge',
          'style',
          'withGutter',
          'withWindowWidth'
        ],
        m = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, l.Z)(n);
          function n() {
            return (0, o.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.Z)(n, [
              {
                key: '_getWindowMaxWidthStyle',
                value: function (e, t, n) {
                  if (!e)
                    return t && n >= p.Z.theme.breakpoints.xLarge
                      ? v.withLargeWindow
                      : n >= p.Z.theme.breakpoints.medium
                        ? v.withMediumWindow
                        : void 0;
                }
              },
              {
                key: '_getAdaptiveContainerStyle',
                value: function (e, t, n, r) {
                  return [
                    v.container,
                    n && v.withGutter,
                    this._getWindowMaxWidthStyle(e, t, r)
                  ];
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.isFullWidth,
                    o = t.isLarge,
                    a = t.style,
                    s = t.withGutter,
                    l = t.withWindowWidth,
                    c = (0, i.Z)(t, f);
                  return u.createElement(h.Z, null, function (t) {
                    var i = t.containerWidth,
                      h = t.windowWidth,
                      p = e._getAdaptiveContainerStyle(n, o, s, l ? h : i);
                    return u.createElement(d.Z, (0, r.Z)({ style: [a, p] }, c));
                  });
                }
              }
            ]),
            n
          );
        })(u.Component);
      (0, c.Z)(m, 'defaultProps', {
        isFullWidth: !1,
        isLarge: !1,
        withGutter: !1
      }),
        (m.propTypes = {});
      var v = p.Z.create(function (e) {
        return {
          container: { marginHorizontal: 'auto', width: '100%' },
          withGutter: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal
          },
          withMediumWindow: { maxWidth: 600 },
          withLargeWindow: { maxWidth: 1e3 }
        };
      });
    },
    24174: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a }), n(470);
      var r = n(67294),
        i = n(67177),
        o = n(64123);
      function a(e) {
        var t = e.spacing;
        return r.createElement(i.Z, {
          accessibilityRole: 'separator',
          style: [
            s.divider,
            { marginVertical: null != t ? o.Z.theme.spaces[t] : void 0 }
          ]
        });
      }
      var s = o.Z.create(function (e) {
        return {
          divider: {
            backgroundColor: e.colors.borderColor,
            height: e.borderWidths.small
          }
        };
      });
    },
    5672: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => u });
      var r = n(1413),
        i = (n(50886), n(25728), n(60228), n(90447)),
        o = n(8355),
        a = { red: 255, green: 255, blue: 255 },
        s = function (e) {
          if (!e || 0 === e.length) return null;
          var t = e.map(function (e) {
            return (0, r.Z)((0, r.Z)({}, e), {}, { hsv: (0, i.py)(e.rgb) });
          });
          return (
            t.find(function (e) {
              return l(e.hsv);
            }) || t[0]
          );
        },
        l = function (e) {
          return e.saturation > 0.15 && e.value > 0.1;
        },
        c = function (e, t) {
          return ((0, o.vm)(e) + 0.05) / ((0, o.vm)(t) + 0.05) >= 4.5;
        };
      const u = {
        get: function (e) {
          return (function (e) {
            if (!e) return null;
            var t = a,
              n = e.hsv,
              r = n.hue,
              o = n.saturation,
              s = n.value;
            if (c(t, e.rgb)) return (e.hsv.value = Math.max(s - 0.1, 0)), e;
            for (var l = 0, u = s; u - l > 0.01; ) {
              var d = (l + u) / 2,
                h = { hue: r, saturation: o, value: d };
              c(t, (0, i.WE)(h)) ? (l = d) : (u = d);
            }
            var p = o + (s - l),
              f = { hue: r, saturation: Math.min(p, 1), value: l };
            return { hsv: f, rgb: (0, i.WE)(f) };
          })(s(e));
        },
        getForGallery: function (e) {
          return (function (e) {
            if (!e) return null;
            var t = e.hsv;
            return (
              (function (e) {
                return e.hue >= 11 / 360 && e.hue < 0.125;
              })(t) && (t.hue = 5 / 360),
              (t.saturation = Math.min(Math.max(t.saturation, 0), 0.85)),
              (t.value = Math.min(Math.max(t.value, 0.15), 0.25)),
              { hsv: t, rgb: (0, i.WE)(t) }
            );
          })(s(e));
        }
      };
    },
    19466: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => u });
      var r = n(4942),
        i = (n(97195), n(97895), n(67294)),
        o = n(67177),
        a = n(88388),
        s = n(5352),
        l = n(64123),
        c = function (e) {
          try {
            e instanceof window.HTMLElement && e.focus();
          } catch (e) {}
        };
      function u(e) {
        var t = e.children,
          n = i.useRef([]),
          l = i.useRef(null),
          u = i.useCallback(function () {
            n.current = (0, a.ht)(l.current);
          }, []);
        return i.createElement(
          o.Z,
          {
            onKeyDown: function (e) {
              var t,
                i = e.altKey,
                o = e.ctrlKey,
                a = e.metaKey;
              if (!(i || o || a || 'Tab' === e.key)) {
                var l = ((t = {}),
                (0, r.Z)(t, s.Z.ArrowDown, function () {
                  return (
                    (e = n.current.indexOf(document.activeElement)),
                    (t = n.current[e + 1] || n.current[0]),
                    void c(t)
                  );
                  var e, t;
                }),
                (0, r.Z)(t, s.Z.ArrowUp, function () {
                  return (
                    (e = n.current.indexOf(document.activeElement)),
                    (t = n.current[e - 1] || n.current[n.current.length - 1]),
                    void c(t)
                  );
                  var e, t;
                }),
                (0, r.Z)(t, s.Z.Home, function () {
                  return (e = n.current[0]), void c(e);
                  var e;
                }),
                (0, r.Z)(t, s.Z.End, function () {
                  return (e = n.current[n.current.length - 1]), void c(e);
                  var e;
                }),
                t)[e.key];
                l && (u(), l(), e.preventDefault());
              }
            },
            ref: l,
            style: d.fill
          },
          t
        );
      }
      var d = l.Z.create({ fill: { flexGrow: 1, flexShrink: 1 } });
    },
    21078: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => g });
      var r = n(15671),
        i = n(43144),
        o = n(97326),
        a = n(60136),
        s = n(98557),
        l = n(4942),
        c =
          (n(97195),
          n(62506),
          n(49693),
          n(60228),
          n(70560),
          n(38077),
          n(98742),
          n(97895),
          n(67294)),
        u = n(16508),
        d = (n(45697), n(67177)),
        h = n(88388),
        p = n(64123),
        f = [],
        m = [],
        v = function (e) {
          try {
            e instanceof window.HTMLElement && e.focus({ preventScroll: !0 });
          } catch (e) {}
        },
        g = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, s.Z)(n);
          function n(e, i) {
            var a;
            return (
              (0, r.Z)(this, n),
              (a = t.call(this, e, i)),
              (0, l.Z)(
                (0, o.Z)(a),
                '_disableFocusingPreviousActiveElement',
                !1
              ),
              (0, l.Z)(
                (0, o.Z)(a),
                '_setDisableFocusingPreviousActiveElement',
                function () {
                  a._disableFocusingPreviousActiveElement = !0;
                }
              ),
              (0, l.Z)((0, o.Z)(a), '_restoreFocusIfNeeded', function () {
                var e = a.props.restoreFocusInFocusTrapView;
                a._updateTabbableNodes(),
                  e &&
                    a._tabbable.indexOf(document.activeElement) < 0 &&
                    a.state.active &&
                    v(a._tabbable[0]);
              }),
              (0, l.Z)((0, o.Z)(a), '_handleKeyUp', function () {
                a._tabPressed = !1;
              }),
              (0, l.Z)((0, o.Z)(a), '_handleKeyDown', function (e) {
                (a._tabPressed = 'Tab' === e.key), a._tabPressed;
              }),
              (0, l.Z)((0, o.Z)(a), '_handleFocusOut', function (e) {
                var t = a.state.active;
                if (a._tabbable.length && t) {
                  var n = e.relatedTarget,
                    r = e.target;
                  n &&
                    n instanceof window.Node &&
                    (!a._rootNode.contains(n) || a._rootNode === n) &&
                    n &&
                    (a._updateTabbableNodes(), a._preventFocusLoss(r));
                }
              }),
              (0, l.Z)((0, o.Z)(a), '_preventFocusLoss', function (e) {
                var t = a._tabbable.length,
                  r = a._tabbable.indexOf(e),
                  i = a._tabPressed && 0 === r,
                  o = e === a._rootNode,
                  s = (a._tabPressed && r === t - 1) || o;
                if (
                  e instanceof window.Element &&
                  e.hasAttribute(n.NO_REFOCUS_ATTRIBUTE)
                ) {
                  var l = a._tabbable.filter(function (e) {
                    return !e.hasAttribute(n.NO_REFOCUS_ATTRIBUTE);
                  })[0];
                  l && v(l);
                } else
                  s
                    ? v(a._tabbable[0])
                    : i
                      ? v(a._tabbable[t - 1])
                      : a._tabPressed &&
                        !a._disableFocusingPreviousActiveElement &&
                        v(e);
              }),
              (0, l.Z)((0, o.Z)(a), '_handleRootRef', function (e) {
                e &&
                  a._rootNode !== e &&
                  ((a._rootNode = e),
                  n.FOCUS_CONTAINERS.push(e),
                  a._rootNode.addEventListener('focusout', a._handleFocusOut));
              }),
              (a._tabbable = []),
              (a.state = { active: !1 }),
              a
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e,
                    t = this;
                  u.canUseDOM && m.push(document.activeElement),
                    (this._removeLockStateListener =
                      ((e = function (e) {
                        var n = e.active;
                        t.setState({ active: n });
                      }),
                      f.forEach(function (e) {
                        return e({ active: !1 });
                      }),
                      e({ active: !0 }),
                      f.push(e),
                      function () {
                        return (function (e) {
                          var t = f.indexOf(e);
                          t > -1 && f.splice(t, 1);
                          var n = f.length,
                            r = f[n - 1];
                          r && r({ active: !0 });
                        })(e);
                      })),
                    window.addEventListener(
                      'focus',
                      this._restoreFocusIfNeeded
                    );
                }
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this._restoreFocusIfNeeded();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this;
                  this._rootNode &&
                    this._rootNode.removeEventListener(
                      'focusout',
                      this._handleFocusOut
                    ),
                    this._removeLockStateListener &&
                      this._removeLockStateListener();
                  var t = m.pop();
                  (n.FOCUS_CONTAINERS = n.FOCUS_CONTAINERS.filter(function (t) {
                    return t !== e._rootNode;
                  })),
                    this._disableFocusingPreviousActiveElement ||
                      setTimeout(function () {
                        var e = n.FOCUS_CONTAINERS.some(function (e) {
                          return e.contains(document.activeElement);
                        });
                        t && !e && v(t);
                      }),
                    window.removeEventListener(
                      'focus',
                      this._restoreFocusIfNeeded
                    );
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.style;
                  return c.createElement(
                    d.Z,
                    { style: y.fill },
                    c.createElement(d.Z, { focusable: !0, tabIndex: '0' }),
                    c.createElement(
                      d.Z,
                      {
                        accessibilityRole: 'group',
                        focusable: !0,
                        onKeyDown: this._handleKeyDown,
                        onKeyUp: this._handleKeyUp,
                        ref: this._handleRootRef,
                        style: e
                      },
                      c.createElement(
                        n.Context.Provider,
                        {
                          value: {
                            disableFocusingPreviousActiveElement:
                              this._setDisableFocusingPreviousActiveElement
                          }
                        },
                        this.props.children
                      )
                    ),
                    c.createElement(d.Z, { focusable: !0, tabIndex: '0' })
                  );
                }
              },
              {
                key: '_updateTabbableNodes',
                value: function () {
                  var e;
                  (this._tabbable = (0, h.ht)(this._rootNode)),
                    (this._tabbable =
                      null !== (e = this._tabbable) && void 0 !== e && e.length
                        ? this._tabbable
                        : [this._rootNode]);
                }
              }
            ]),
            n
          );
        })(c.PureComponent);
      (0, l.Z)(g, 'defaultProps', { restoreFocusInFocusTrapView: !0 }),
        (0, l.Z)(g, 'NO_REFOCUS_ATTRIBUTE', 'no-focustrapview-refocus'),
        (0, l.Z)(
          g,
          'Context',
          c.createContext({
            disableFocusingPreviousActiveElement: function () {}
          })
        ),
        (0, l.Z)(g, 'FOCUS_CONTAINERS', []),
        (g.propTypes = {});
      var y = p.Z.create({
        fill: { flexGrow: 1, flexShrink: 1, alignSelf: 'stretch' }
      });
    },
    84234: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => N });
      var r = n(1413),
        i = (n(470), n(67294)),
        o = n(67177),
        a = n(74387),
        s = n.n(a),
        l = n(37353),
        c = n(77956),
        u = n(7960),
        d = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = i.useContext(c.Z);
          return (0, l.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [u.Z.root, e.style, t && u.Z.iconRTL],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z'
                  })
                )
              }
            )
          );
        };
      d.metadata = { width: 24, height: 24 };
      const h = d;
      var p = n(38401),
        f = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, l.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [u.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zM13.25 7L13 12.7s-.5-.2-1-.2-1 .2-1 .2L10.75 7h2.5zM12 17c-.83 0-1.5-.67-1.5-1.5S11.17 14 12 14s1.5.67 1.5 1.5S12.83 17 12 17z'
                  })
                )
              }
            )
          );
        };
      f.metadata = { width: 24, height: 24 };
      const m = f;
      var v = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, l.Z)(
          'svg',
          (0, r.Z)(
            (0, r.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [u.Z.root, e.style],
              viewBox: '0 0 24 24',
              children: i.createElement(
                'g',
                null,
                i.createElement('path', {
                  d: 'M22.56 18.25l-8.4-14.51c-.96-1.66-3.36-1.66-4.32 0l-8.4 14.51C.47 19.91 1.68 22 3.6 22h16.8c1.92 0 3.13-2.09 2.16-3.75zM13.25 8.5L13 14.2s-.5-.2-1-.2-1 .2-1 .2l-.25-5.7h2.5zM12 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
                })
              )
            }
          )
        );
      };
      v.metadata = { width: 24, height: 24 };
      const g = v;
      var y = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, l.Z)(
          'svg',
          (0, r.Z)(
            (0, r.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [u.Z.root, e.style],
              viewBox: '0 0 24 24',
              children: i.createElement(
                'g',
                null,
                i.createElement('path', {
                  d: 'M6 3v1.5S7.504 4 8.5 4c3 0 4.5 2 7 2 1.782 0 4.5-.75 4.5-.75v11s-2.7.75-4.5.75c-3 0-4.756-2-7-2-1 0-2.5.75-2.5.75V21H4V3h2z'
                })
              )
            }
          )
        );
      };
      y.metadata = { width: 24, height: 24 };
      const b = y;
      var w = n(86034),
        E = n(12011),
        Z = n(99318),
        _ = n(43463),
        C = n(67797),
        x = n(64123),
        S =
          (n(41830),
          Object.freeze({
            CommunityNotes: 'CommunityNotes',
            LiveEvent: 'LiveEvent',
            SoftIntervention: 'SoftIntervention'
          })),
        k = { element: 'forward_pivot' },
        T = { element: 'quoted_forward_pivot' },
        I = s().e9f1af3a,
        L = s().d7e50a66,
        P = s().a7e943e0,
        R = s().da5e3194,
        O = function (e) {
          var t = e.inQuoteTweet,
            n = (e.isLinkExternal, e.isTweetNonCompliant),
            r = e.onPress,
            a = e.pivotLinkObject,
            s = e.softInterventionDisplayType,
            l = void 0 === s ? 'StayInformed' : s,
            c = e.text,
            u = e.scribeOnImpression,
            d = A()[l] || A().StayInformed,
            p = d.Icon,
            f = d.backgroundColor,
            m = d.headerText,
            v = d.iconColor,
            g = 'GovernmentRequested' === l,
            y = 'gray700',
            b = 'Fosnr' === l ? L : I;
          return (
            i.useEffect(
              function () {
                null == u || u();
              },
              [u]
            ),
            i.createElement(
              _.Z,
              {
                link: a,
                onPress: r,
                style: [
                  D.softInterventionContainer,
                  t
                    ? D.softInterventionQTContainer
                    : D.softInterventionContainerBorder,
                  f
                ]
              },
              i.createElement(
                o.Z,
                { style: D.softInterventionHeader },
                i.createElement(p, { style: [D.icon, v] }),
                i.createElement(w.ZP, { weight: 'bold' }, m),
                i.createElement(h, { style: D.chevronIcon })
              ),
              i.createElement(
                w.ZP,
                { color: y },
                ''.concat(c, ' '),
                i.createElement(w.ZP, { link: a, style: D.learnMoreLink }, b)
              ),
              g || (n && !t)
                ? i.createElement(
                    w.ZP,
                    { color: y, style: D.softInterventionFooter },
                    g ? R : P
                  )
                : null
            )
          );
        },
        M = function (e, t, n, r) {
          return {
            items: [
              {
                id: r,
                forward_pivot_details: {
                  associated_tweet_id: r,
                  display_type: e,
                  landing_url: t.url,
                  soft_intervention_type: n
                }
              }
            ]
          };
        },
        D = x.Z.create(function (e) {
          return {
            backgroundColorGray: { backgroundColor: e.colors.gray0 },
            chevronIcon: {
              color: e.colors.gray300,
              flexShrink: 0,
              height: e.spaces.space16,
              width: e.spaces.space16,
              marginStart: 'auto'
            },
            icon: {
              flexShrink: 0,
              height: e.spaces.space16,
              width: e.spaces.space16,
              marginEnd: e.spaces.space4
            },
            iconBlue: { color: x.Z.theme.colors.blue500 },
            iconGray: { color: x.Z.theme.colors.gray500 },
            iconOrange: { color: x.Z.theme.colors.orange500 },
            iconRed: { color: x.Z.theme.colors.red500 },
            learnMoreLink: {
              whiteSpace: 'nowrap',
              flexShrink: 0,
              paddingTop: e.spaces.space2
            },
            softInterventionContainer: {
              borderRadius: e.borderRadii.xLarge,
              padding: e.spaces.space12
            },
            softInterventionQTContainer: {
              borderTopStartRadius: e.borderRadii.none,
              borderTopEndRadius: e.borderRadii.none,
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid'
            },
            softInterventionContainerBorder: {
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              borderStyle: 'solid'
            },
            softInterventionFooter: {
              marginTop: e.spaces.space8,
              paddingTop: e.spaces.space8,
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small
            },
            softInterventionHeader: {
              alignItems: 'center',
              flexDirection: 'row',
              paddingBottom: e.spaces.space2
            }
          };
        }),
        A = function () {
          return {
            GetTheLatest: {
              Icon: p.Z,
              headerText: s().e461d0ee,
              iconColor: D.iconBlue
            },
            StayInformed: {
              Icon: m,
              headerText: s().d1386940,
              iconColor: D.iconOrange
            },
            Misleading: {
              Icon: g,
              headerText: s().ecda5f9e,
              iconColor: D.iconRed
            },
            GovernmentRequested: {
              Icon: b,
              backgroundColor: D.backgroundColorGray,
              headerText: s().a423473c,
              iconColor: D.iconGray
            },
            Fosnr: {
              Icon: p.Z,
              backgroundColor: D.backgroundColorGray,
              headerText: s().b3296688,
              iconColor: D.iconGray
            }
          };
        };
      const N = function (e) {
        var t = e.displayType,
          n = e.inQuoteTweet,
          o = e.isTweetNonCompliant,
          a = e.landingUrl,
          s = e.onPress,
          l = e.softInterventionDisplayType,
          c = e.text,
          u = e.tweetId,
          d = C.Z.useAnalytics(),
          h = i.useMemo(
            function () {
              return n ? T : k;
            },
            [n]
          ),
          p = i.useCallback(
            function () {
              d.scribe(
                (0, r.Z)(
                  (0, r.Z)({}, h),
                  {},
                  { action: 'impression', data: M(t, a, l, u) }
                )
              );
            },
            [d, h, t, a, l, u]
          ),
          f = function () {
            s && s(),
              a &&
                d.scribe(
                  (0, r.Z)(
                    (0, r.Z)({}, h),
                    {},
                    { action: 'click', data: M(t, a, l, u) }
                  )
                );
          },
          m = E.ZP.useProps(),
          v =
            t === S.SoftIntervention &&
            !('Fosnr' === l && !m.fosnrSoftInterventionsEnabled());
        return i.createElement(Z.ZP.Consumer, null, function (e) {
          var t = a ? e.getLinkFromUrtUrl(a) : void 0;
          if (!t) return null;
          var r = !t || !!t.external;
          return v
            ? i.createElement(O, {
                inQuoteTweet: n,
                isLinkExternal: r,
                isTweetNonCompliant: o,
                onPress: f,
                pivotLinkObject: t,
                scribeOnImpression: p,
                softInterventionDisplayType: l,
                text: c.text
              })
            : null;
        });
      };
    },
    81817: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => Z });
      var r = n(1413),
        i = (n(59749), n(86544), n(37960), n(67294)),
        o = n(67177),
        a = n(37353),
        s = n(7960),
        l = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, a.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M.998 15V9h2v6h-2zm22 0V9h-2v6h2zM12 2c-4.418 0-8 3.58-8 8v7c0 2.76 2.239 5 5 5h6c2.761 0 5-2.24 5-5v-7c0-4.42-3.582-8-8-8zM8.998 14c-1.105 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.895 2-2 2zm6 0c-1.104 0-2-.9-2-2s.895-2 2-2 2 .9 2 2-.896 2-2 2z'
                  })
                )
              }
            )
          );
        };
      l.metadata = { width: 24, height: 24 };
      const c = l;
      var u = n(86034),
        d = n(68896),
        h = n(49333),
        p = n(2883),
        f = n(99318),
        m = n(67797),
        v = n(64123),
        g =
          (n(470),
          function (e) {
            var t = '1.25em',
              n = {
                height: 'calc('.concat(t, '*0.85)'),
                width: 'calc('.concat(t, '*0.85)')
              },
              r = [y.containerStyle, n];
            return i.createElement(
              o.Z,
              { style: r },
              i.createElement(
                d.Z,
                { ratio: 1 },
                i.createElement(h.Z, { source: e.url, style: y.image })
              )
            );
          }),
        y = v.Z.create(function (e) {
          return {
            root: {
              marginEnd: e.spaces.space2,
              marginStart: e.spaces.space2,
              display: 'inline-flex',
              justifyContent: 'center'
            },
            withLeftMargin: { marginStart: e.spaces.space4 },
            containerStyle: {
              maxHeight: '17px',
              maxWidth: '17px',
              display: 'inline-block',
              position: 'relative'
            },
            image: {
              height: '100%',
              width: '100%',
              borderRadius: e.borderRadii.xSmall,
              display: 'flex',
              borderColor: e.colors.gray200,
              borderWidth: e.borderWidths.small
            }
          };
        });
      const b = function (e) {
        var t = e.badge,
          n = e.link,
          o = e.onPress,
          a = e.withLeftMargin,
          s = void 0 === a || a,
          l = n && (0, r.Z)((0, r.Z)({}, n), {}, { anchorless: !0 });
        return t
          ? i.createElement(
              p.Z,
              {
                interactive: !!n,
                interactiveStyles: null,
                link: l,
                onPress: o,
                style: [y.root, s && y.withLeftMargin]
              },
              g(t)
            )
          : null;
      };
      n(97195);
      var w = { element: 'highlighted_user_label', action: 'click' },
        E = v.Z.create(function (e) {
          return {
            root: { alignItems: 'flex-start', flexShrink: 1 },
            withTopMargin: { marginTop: e.spaces.space4 },
            withLeftMargin: { marginStart: e.spaces.space4 },
            link: {
              alignItems: 'flex-start',
              flexDirection: 'row',
              maxWidth: '100%'
            },
            withUnderline: { textDecorationLine: 'underline' },
            iconContainer: {
              height: e.fontSizes.body,
              marginEnd: e.spaces.space4,
              marginTop: 2,
              width: e.fontSizes.body
            },
            iconContainerLarge: {
              height: e.fontSizes.headline2,
              marginEnd: e.spaces.space4,
              marginTop: 1,
              width: e.fontSizes.headline2
            },
            image: { height: '100%', width: '100%', display: 'flex' },
            svgIcon: { color: e.colors.gray700 }
          };
        });
      const Z = function (e) {
        var t,
          n = e.isAffiliateBadge,
          a = void 0 !== n && n,
          s = e.isIconLarge,
          l = void 0 !== s && s,
          v = e.label,
          g = e.nativeID,
          y = e.onClick,
          Z = e.shouldTruncate,
          _ = void 0 === Z || Z,
          C = e.withLeftMargin,
          x = void 0 === C || C,
          S = e.withTopMargin,
          k = void 0 === S || S,
          T = m.Z.useAnalytics(),
          I = v.badge,
          L = v.description,
          P = v.url,
          R = v.userLabelDisplayType,
          O = v.userLabelType,
          M =
            (t = P) && t.url
              ? {
                  url: t.url,
                  urlType:
                    0 === t.url.indexOf('twitter://')
                      ? 'DeepLink'
                      : 'ExternalUrl'
                }
              : void 0;
        return a || 'BusinessLabel' !== O || 'Badge' !== R
          ? i.createElement(f.$6, null, function (e) {
              var t = M ? e.getLinkFromUrtUrl(M) : void 0,
                n =
                  t || y
                    ? function (e) {
                        y && y(e);
                        var n =
                          t && 'string' == typeof t.pathname
                            ? { url: t.pathname }
                            : void 0;
                        T.scribe((0, r.Z)((0, r.Z)({}, w), {}, { data: n }));
                      }
                    : void 0;
              return a
                ? i.createElement(b, {
                    badge: v.badge,
                    link: t,
                    onPress: n,
                    withLeftMargin: x
                  })
                : i.createElement(
                    o.Z,
                    {
                      nativeID: g,
                      style: [
                        E.root,
                        k && E.withTopMargin,
                        x && E.withLeftMargin
                      ]
                    },
                    i.createElement(
                      p.Z,
                      {
                        interactive: !(!t && !y),
                        interactiveStyles: null,
                        link: t,
                        onPress: n,
                        style: E.link
                      },
                      function (e) {
                        var t = e.isFocused,
                          n = e.isHovered,
                          r = e.isPressed;
                        return i.createElement(
                          i.Fragment,
                          null,
                          (function (e, t, n) {
                            var r = (function (e) {
                                return 'AutomatedLabel' === e
                                  ? i.createElement(c, { style: E.svgIcon })
                                  : null;
                              })(t),
                              a = (function (e) {
                                return e
                                  ? i.createElement(
                                      d.Z,
                                      { ratio: 1 },
                                      i.createElement(h.Z, {
                                        source: e.url,
                                        style: E.image
                                      })
                                    )
                                  : null;
                              })(e),
                              s = r || a,
                              l = n ? E.iconContainerLarge : E.iconContainer;
                            return s
                              ? i.createElement(o.Z, { style: l }, s)
                              : null;
                          })(I, O, l),
                          i.createElement(
                            u.ZP,
                            {
                              color: 'gray700',
                              numberOfLines: _ ? 1 : void 0,
                              style: (n || r || t) && E.withUnderline
                            },
                            L
                          )
                        );
                      }
                    )
                  );
            })
          : null;
      };
    },
    55346: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => c });
      var r = n(15671),
        i = n(43144),
        o = n(60136),
        a = n(98557),
        s = n(67294),
        l = (n(45697), n(55793)),
        c = (function (e) {
          (0, o.Z)(n, e);
          var t = (0, a.Z)(n);
          function n() {
            return (0, r.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  this._unblockHistory = this.props.history.block(
                    function (t, n) {
                      if ('POP' === n && l.ZP.isAndroid() && !e.props.isModal) {
                        var r = e.props.onDismiss;
                        return r && r(), !1;
                      }
                      return !0;
                    }
                  );
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unblockHistory();
                }
              },
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                }
              }
            ]),
            n
          );
        })(s.Component);
      c.propTypes = {};
    },
    49333: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(87462),
        i = n(67294),
        o = n(16508),
        a = n.n(o),
        s = n(63250);
      const l = i.forwardRef(function (e, t) {
        var n = {};
        return (
          !a().canUseDOM &&
            !e.defaultSource &&
            e.source &&
            (n.defaultSource = e.source),
          i.createElement(s.Z, (0, r.Z)({}, n, e, { ref: t }))
        );
      });
    },
    67079: (e, t, n) => {
      'use strict';
      n.d(t, { ZP: () => H });
      var r = n(87462),
        i = n(1413),
        o = n(45987),
        a = n(29439),
        s = (n(41830), n(95682), n(6203), n(470), n(67294)),
        l = n(24404),
        c = n(67177),
        u = n(74387),
        d = n.n(u),
        h = n(11537),
        p = n(47497),
        f = n(94099),
        m = n(86034),
        v = n(81443),
        g = n(2883),
        y = n(98788),
        b = n(32770),
        w = n(4469),
        E = n(29469),
        Z = n(67797),
        _ = n(64123),
        C = ['altLabel', 'style'],
        x = d().j190bf1a,
        S = d().e3fcbdba,
        k = d().jc0b3a8c,
        T = { element: 'alt_text' },
        I = d().ia1d2e58,
        L = {
          backgroundColor: 'alwaysBaseGray1100',
          bold: !0,
          color: 'white',
          opacity: 0.75
        },
        P = Object.freeze({
          live: {
            backgroundColor: 'magenta500',
            bold: !0,
            color: 'whiteOnColor'
          },
          subscriptionSaving: {
            backgroundColor: 'green50',
            color: 'green900',
            bold: !0,
            radius: 9999,
            fontSize: 'subtext3'
          },
          bestValue: {
            backgroundColor: 'green50',
            color: 'green900',
            bold: !0,
            fontSize: 'subtext3'
          },
          mostPopular: {
            backgroundColor: 'purple50',
            color: 'purple900',
            bold: !0,
            fontSize: 'subtext3'
          },
          alt: L,
          gif: L,
          hd: L,
          likedByAuthor: {
            backgroundColor: 'gray50',
            bold: !1,
            color: 'gray700'
          },
          article: {
            bold: !0,
            backgroundColor: 'translucentBlack55',
            color: 'white',
            opacity: 0.1
          }
        }),
        R = function (e) {
          var t = e.altLabel,
            n = e.background,
            r = e.pointerEvents,
            i = e.square,
            o = e.style,
            a = e.type,
            l = a ? P[a] : {},
            u = z(l.backgroundColor || n);
          return O(e)
            ? s.createElement(D, { altLabel: t, style: o, type: a })
            : s.createElement(
                c.Z,
                {
                  pointerEvents: r,
                  style: [
                    F.badge,
                    i ? F.badgeSquare : null,
                    u,
                    o,
                    l.radius ? { borderRadius: l.radius } : null
                  ]
                },
                M(e)
              );
        },
        O = function (e) {
          var t = e.altLabel,
            n = e.type;
          return void 0 !== t && !(0, y.Z)(t) && (void 0 === n || 'alt' === n);
        };
      R.defaultProps = {
        background: 'translucentBlack77',
        pointerEvents: 'none'
      };
      var M = function (e) {
          var t = e.background,
            n = e.bold,
            r = e.children,
            i = e.type,
            o = i ? P[i] : {},
            a = o.color || B(t),
            l = o.bold || n,
            c = o.fontSize || 'subtext2';
          return s.createElement(
            m.ZP,
            {
              align: 'center',
              color: a,
              selectable: !1,
              size: c,
              weight: l ? 'bold' : void 0
            },
            N(i, r)
          );
        },
        D = function (e) {
          var t = s.useState(!1),
            n = (0, a.Z)(t, 2),
            l = n[0],
            u = n[1],
            d = s.useRef(null),
            h = e.altLabel,
            p = e.style,
            f = (0, o.Z)(e, C),
            y = (0, w.b)(),
            b = [(0, w.b)(), (0, w.b)()],
            _ = Z.Z.useAnalytics();
          return (
            s.useEffect(
              function () {
                u(!1);
              },
              [d, l]
            ),
            s.createElement(
              E.Z,
              {
                dismissOnScroll: !1,
                onDismiss: function () {
                  u(!0);
                },
                onOpen: function (e) {
                  var t = e ? 'show_'.concat(e) : 'show';
                  _.scribe((0, i.Z)((0, i.Z)({}, T), {}, { action: t }));
                },
                renderContent: function (e, t) {
                  return s.createElement(
                    c.Z,
                    {
                      accessibilityLabelledBy: b.join(' '),
                      accessibilityRole: 'dialog',
                      style: 'sheet' === t ? F.altSheet : F.altPopover
                    },
                    s.createElement(
                      m.ZP,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'header',
                        color: 'text',
                        nativeID: b[0],
                        size: 'title3',
                        weight: 'bold'
                      },
                      k
                    ),
                    s.createElement(
                      m.ZP,
                      {
                        color: 'gray700',
                        nativeID: b[1],
                        size: 'body',
                        style: F.altText
                      },
                      h
                    ),
                    s.createElement(
                      v.ZP,
                      {
                        onPress: e,
                        size: 'xLarge',
                        style: F.dismissButton,
                        type: 'primaryOutlined'
                      },
                      S
                    )
                  );
                },
                withArrow: !0,
                wrapperStyle: p
              },
              A(y),
              s.createElement(
                g.Z,
                {
                  accessibilityDescribedBy: y,
                  accessibilityRole: 'button',
                  pointerEvents: 'auto',
                  ref: d
                },
                s.createElement(
                  R,
                  (0, r.Z)({}, f, {
                    pointerEvents: 'auto',
                    style: p,
                    type: 'alt'
                  })
                )
              )
            )
          );
        },
        A = function (e) {
          return s.createElement(
            l.Z,
            { nativeID: e, style: F.describedByText },
            d().bed2945c
          );
        },
        N = function (e, t) {
          switch (e) {
            case 'alt':
              return 'ALT';
            case 'gif':
              return 'GIF';
            case 'live':
              return x;
            case 'likedByAuthor':
              return (
                (r = s.createElement(p.Z, { style: F.icon })),
                s.createElement(b.Z, null, function (e) {
                  var t = e.direction;
                  return s.createElement(
                    c.Z,
                    { accessibilityLabel: I, accessibilityRole: 'image' },
                    s.createElement(
                      m.ZP,
                      {
                        accessibilityHidden: !0,
                        dir: t,
                        style: F.likedByAuthorLabel
                      },
                      s.createElement(
                        d().I18NFormatMessage,
                        { $i18n: 'b9ad7ff5' },
                        r
                      )
                    )
                  );
                })
              );
            case 'hd':
              return 'HD';
            case 'article':
              return (
                (n = s.createElement(h.Z, { style: F.icon })),
                s.createElement(b.Z, null, function (e) {
                  var t = e.direction;
                  return s.createElement(
                    c.Z,
                    {
                      accessibilityLabel: 'Article',
                      accessibilityRole: 'image'
                    },
                    s.createElement(
                      m.ZP,
                      {
                        accessibilityHidden: !0,
                        dir: t,
                        style: F.articleCardLabel
                      },
                      s.createElement(
                        d().I18NFormatMessage,
                        { $i18n: 'i0643a5b' },
                        n
                      )
                    )
                  );
                })
              );
            default:
              return t;
          }
          var n, r;
        },
        z = function (e) {
          switch (e) {
            case 'magenta500':
              return F.bgRed;
            case 'purple500':
              return F.bgPurple;
            case 'primary':
              return F.bgPrimary;
            case 'gray0':
              return F.bgLightestGray;
            case 'gray50':
              return F.bgLightGray;
            case 'gray700':
              return F.bgDeepGray;
            case 'maskColor':
              return F.bgMaskColor;
            case 'green500':
              return F.bgGreen;
            case 'green50':
              return F.bgLightGreen;
            case 'purple50':
              return F.bgLightPurple;
            case 'orange500':
              return F.bgOrange;
            case 'navigationBackground':
              return F.bgNavigationBackground;
            case 'translucentWhite':
              return F.bgTranslucentWhite;
            case 'translucentBlack55':
              return F.bgTranslucentBlack55;
            default:
              return F.bgTranslucentBlack;
          }
        },
        B = function (e) {
          switch (e) {
            case 'translucentBlack77':
            case 'maskColor':
              return 'white';
            case 'gray0':
            case 'navigationBackground':
              return 'text';
            default:
              return 'whiteOnColor';
          }
        },
        F = _.Z.create(function (e) {
          return {
            badge: {
              alignSelf: 'flex-start',
              alignItems: 'center',
              height: e.spaces.space20,
              justifyContent: 'center',
              paddingHorizontal: e.spaces.space4,
              borderRadius: e.borderRadii.small
            },
            badgeSquare: {
              width: e.spaces.space20,
              paddingHorizontal: 0,
              overflow: 'hidden'
            },
            bgPrimary: { backgroundColor: e.colors.primary },
            bgRed: { backgroundColor: e.colors.magenta500 },
            bgPurple: { backgroundColor: e.colors.purple500 },
            bgMaskColor: { backgroundColor: e.colors.maskColor },
            bgNavigationBackground: {
              backgroundColor: e.colors.navigationBackground,
              borderColor: e.colors.gray200,
              borderWidth: e.borderWidths.small
            },
            bgTranslucentBlack: {
              backgroundColor: e.colors.translucentBlack30
            },
            bgTranslucentBlack55: {
              backgroundColor: e.colors.translucentBlack55
            },
            bgLightestGray: { backgroundColor: e.colors.gray50 },
            bgLightGray: { backgroundColor: e.colors.gray50 },
            bgDeepGray: { backgroundColor: e.colors.gray700 },
            bgGreen: { backgroundColor: e.colors.green500 },
            bgLightGreen: { backgroundColor: e.colors.green50 },
            bgLightPurple: { backgroundColor: e.colors.purple50 },
            bgOrange: { backgroundColor: e.colors.orange500 },
            bgTranslucentWhite: { backgroundColor: f.bs.white(0.3) },
            altPopover: {
              padding: e.spaces.space32,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontSmoothing: 'always'
            },
            altSheet: { padding: e.spaces.space20 },
            altText: {
              paddingTop: e.spaces.space8,
              paddingBottom: e.spaces.space20
            },
            likedByAuthorLabel: {
              display: 'flex',
              flexDirection: 'row',
              fontSize: e.fontSizes.subtext3
            },
            articleCardLabel: {
              display: 'flex',
              flexDirection: 'row',
              fontSize: e.fontSizes.subtext3
            },
            describedByText: { display: 'none' },
            dismissButton: { padding: e.spaces.space16 },
            icon: { margin: 'auto', height: e.fontSizes.subtext3 }
          };
        });
      const H = R;
    },
    43463: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(2883),
        s = n(40830),
        l = n(64123);
      const c = o.createContext(!1);
      var u = [
        'withDarkerInteractiveBackground',
        'withFocusWithinFocusRing',
        'withInteractiveStyling',
        'withOutsetFocusRing'
      ];
      const d = function (e) {
        var t = e.withDarkerInteractiveBackground,
          n = void 0 !== t && t,
          d = e.withFocusWithinFocusRing,
          h = void 0 !== d && d,
          p = e.withInteractiveStyling,
          f = void 0 === p || p,
          m = e.withOutsetFocusRing,
          v = (0, i.Z)(e, u),
          g = o.useContext(c),
          y = f
            ? (function (e) {
                var t = e.isInAParentListItem,
                  n = e.withDarkerInteractiveBackground,
                  r = e.withFocusWithinFocusRing,
                  i = e.withOutsetFocusRing;
                return s.Z.generate({
                  backgroundColor: l.Z.theme.colors.transparent,
                  color: l.Z.theme.colors.primary,
                  customFocusBackgroundColor: n
                    ? l.Z.theme.colors.hoverBlack
                    : l.Z.theme.colors.gray0,
                  customHoverBackgroundColor:
                    t || n
                      ? l.Z.theme.colors.hoverBlack
                      : l.Z.theme.colors.gray0,
                  customPressedBackgroundColor: t
                    ? l.Z.theme.colors.activeBlack
                    : l.Z.theme.colors.activeFaintGray,
                  insetFocusRing: !i,
                  withFocusWithinFocusRing: r
                });
              })({
                isInAParentListItem: g,
                withDarkerInteractiveBackground: n,
                withOutsetFocusRing: m,
                withFocusWithinFocusRing: h
              })
            : null;
        return o.createElement(
          c.Provider,
          { value: !0 },
          o.createElement(a.Z, (0, r.Z)({}, v, { interactiveStyles: y }))
        );
      };
    },
    32492: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var r = n(45987),
        i = n(67294),
        o = n(67177),
        a = n(67079),
        s = n(64123),
        l = ['align'],
        c = function (e) {
          return [u.root, 'right' === e ? u.alignEnd : u.alignStart];
        },
        u = s.Z.create(function (e) {
          return {
            root: { position: 'absolute', bottom: e.spaces.space12 },
            alignEnd: { end: e.spaces.space12 },
            alignStart: { start: e.spaces.space12 }
          };
        });
      const d = function (e) {
        var t = e.align,
          n = (0, r.Z)(e, l);
        return i.createElement(o.Z, { style: c(t) }, i.createElement(a.ZP, n));
      };
    },
    76488: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a, q: () => o });
      var r = n(29439);
      n(50886), n(69358), n(278), n(60228);
      var i = n(64123),
        o = function (e, t, n) {
          var r = n && n.width && n.height ? n.width / n.height : 1;
          return Math.min(Math.max(r, e), t);
        };
      const a = {
        getAspectRatio: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 16 / 9,
            n = e.aspect_ratio;
          n = void 0 === n ? [] : n;
          var i = (0, r.Z)(n, 2),
            o = i[0],
            a = i[1];
          if (o && a) {
            var s = o > a,
              l = o / a,
              c = l < t;
            return s && !c ? l : t;
          }
          return t;
        },
        getContainDimensions: function (e, t) {
          var n,
            r,
            i = e.height,
            o = e.width;
          return (
            t >= 1
              ? (r = (n = o) / t) > i && ((r = i), (n = i * t))
              : (n = (r = i) * t) > o && ((n = o), (r = o / t)),
            { width: n, height: r }
          );
        },
        getCoverDimensions: function (e, t) {
          var n,
            r,
            i = e.height,
            o = e.width;
          return (
            t >= 1
              ? o > (n = (r = i) * t) && (r = (n = o) / t)
              : i > (r = (n = o) / t) && ((r = i), (n = i * t)),
            { width: n, height: r }
          );
        },
        getImageAspectRatio: o,
        selectBestCropCandidate: function (e, t) {
          return (function (e, t) {
            if (e && 0 !== e.length)
              return e.reduce(function (e, n) {
                var r = t(e),
                  i = t(n);
                return void 0 === r ? n : void 0 === i || r > i ? e : n;
              });
          })(t, function (t) {
            var n = t.h,
              r = t.w / n;
            return Math.min(e / r, r / e);
          });
        },
        selectClosestAspectRatio: function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : Object.keys(i.Z.theme.aspectRatios).map(function (e) {
                    return i.Z.theme.aspectRatios[e];
                  }),
            n = e.width / e.height;
          return t.reduce(function (e, t) {
            return Math.abs(t - n) < Math.abs(e - n) ? t : e;
          });
        }
      };
    },
    1781: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => c });
      var r = n(87462),
        i = n(45987),
        o = n(67294),
        a = n(86034),
        s = n(64123),
        l = ['color', 'style'];
      const c = function (e) {
        var t = e.color,
          n = void 0 === t ? 'gray700' : t,
          s = e.style,
          c = (0, i.Z)(e, l);
        return o.createElement(
          a.ZP,
          (0, r.Z)({}, c, {
            accessibilityHidden: !0,
            color: n,
            style: [u.middot, s]
          }),
          '·'
        );
      };
      var u = s.Z.create(function (e) {
        return {
          middot: { flexShrink: 0, paddingHorizontal: e.spaces.space4 }
        };
      });
    },
    92288: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => s }), n(49693), n(60228), n(47522), n(70560);
      var r = n(67294),
        i = n(67177),
        o = n(1781),
        a = n(64123);
      const s = function (e) {
        var t = e.children,
          n = e.color,
          a = void 0 === n ? 'gray700' : n,
          s = e.size,
          c = e.style,
          u = [];
        return (
          r.Children.forEach(t, function (e) {
            var t = u.length;
            e &&
              (t > 0 &&
                u.push(
                  r.createElement(o.Z, {
                    color: a,
                    key: 'middot-'.concat(t),
                    size: s
                  })
                ),
              u.push(e));
          }),
          u.length
            ? r.createElement(i.Z, { style: [l.middotGroup, c] }, u)
            : null
        );
      };
      var l = a.Z.create(function (e) {
        return {
          middotGroup: {
            alignItems: 'baseline',
            flexDirection: 'row',
            flexShrink: 1
          }
        };
      });
    },
    13582: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i, t: () => r });
      var r = n(67294).createContext({ isModal: !1 });
      const i = r;
    },
    4469: (e, t, n) => {
      'use strict';
      n.d(t, { F: () => o, b: () => a });
      var r = n(29439),
        i = (n(89730), n(68932), n(60228), n(12826), n(67294));
      function o() {
        var e = Math.random().toString(36).slice(2);
        return 'id__'.concat(e);
      }
      function a() {
        var e = i.useState(o);
        return (0, r.Z)(e, 1)[0];
      }
    },
    29469: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => nt });
      var r = n(15671),
        i = n(43144),
        o = n(97326),
        a = n(60136),
        s = n(98557),
        l = n(4942),
        c = (n(34338), n(67294)),
        u = n(67177),
        d = n(51507),
        h = n(2883),
        p = n(87462),
        f = n(45987),
        m = n(68646),
        v = n(73935),
        g = n(31414),
        y = n(86953),
        b = n(54790),
        w = n(16528),
        E = n(43231),
        Z = function () {},
        _ = (function () {
          var e = !1;
          if (E.canUseDOM)
            try {
              var t = {};
              Object.defineProperty(t, 'passive', {
                get: function () {
                  return (e = !0), !1;
                }
              }),
                window.addEventListener('test', null, t),
                window.removeEventListener('test', null, t);
            } catch (e) {}
          return e;
        })();
      function C() {
        return this.cancelBubble;
      }
      function x() {
        return this.defaultPrevented;
      }
      function S(e, t) {
        var n = (function (e) {
          return null != e && (_ ? e : Boolean(e.capture));
        })(t);
        return function (t, r) {
          if (null == t || 'function' != typeof t.addEventListener)
            throw new Error('createEventHandle: called on an invalid target.');
          var i = t;
          if (null != r) {
            var o = function (e) {
              return r(
                (((t = e).nativeEvent = t),
                (t.persist = Z),
                (t.isDefaultPrevented = x),
                (t.isPropagationStopped = C),
                t)
              );
              var t;
            };
            return (
              i.addEventListener(e, o, n),
              function () {
                null != i && i.removeEventListener(e, o, n);
              }
            );
          }
          return Z;
        };
      }
      var k,
        T,
        I = 'keyboard',
        L = 'keyboard',
        P = !1,
        R = new Set(),
        O = 'keyboard',
        M = 'mouse',
        D = 'touch',
        A = 'contextmenu',
        N = 'mousedown',
        z = 'mousemove',
        B = 'mouseup',
        F = 'pointerdown',
        H = 'pointermove',
        W = 'scroll',
        U = 'selectionchange',
        V = 'touchcancel',
        G = 'touchmove',
        j = 'touchstart',
        K = { passive: !0 },
        Y = { capture: !0, passive: !0 },
        $ = S('blur', K),
        q = S('focus', K),
        X = S('visibilitychange', Y),
        Q = S('keydown', Y),
        J = S(F, Y),
        ee = S(H, Y),
        te = S(A, Y),
        ne = S(N, Y),
        re = S(z, Y),
        ie = S(B, Y),
        oe = S(W, Y),
        ae = S(U, Y),
        se = S(V, Y),
        le = S(G, Y),
        ce = S(j, Y);
      function ue() {
        (null == k && null == T) ||
          (null != k && ((L = k), (k = null)),
          null != T && ((I = T), (T = null)),
          he());
      }
      function de(e) {
        var t = e.type;
        if ('undefined' != typeof window && null != window.PointerEvent) {
          if (t === F)
            return void (
              I !== e.pointerType &&
              ((L = e.pointerType), (I = e.pointerType), he())
            );
          if (t === H)
            return void (L !== e.pointerType && ((L = e.pointerType), he()));
        } else {
          if (
            (P ||
              (t === N && I !== M && ((L = M), (I = M), he()),
              t === z && L !== M && ((L = M), he())),
            t === j)
          )
            return (
              (P = !0),
              e.touches && e.touches.length > 1 && (P = !1),
              void (I !== D && ((L = D), (I = D), he()))
            );
          (t !== A && t !== B && t !== U && t !== W && t !== V && t !== G) ||
            (P = !1);
        }
      }
      function he() {
        var e = { activeModality: I, modality: L };
        R.forEach(function (t) {
          t(e);
        });
      }
      E.canUseDOM &&
        ($(window, function () {
          (k = L), (T = I), (I = O), (L = O), he(), (P = !1);
        }),
        q(window, function () {
          ue();
        }),
        Q(document, function (e) {
          e.metaKey ||
            e.altKey ||
            e.ctrlKey ||
            (L !== O && ((L = O), (I = O), he()));
        }),
        J(document, de),
        ee(document, de),
        X(document, function () {
          'hidden' !== document.visibilityState && ue();
        }),
        te(document, de),
        ne(document, de),
        re(document, de),
        ie(document, de),
        se(document, de),
        le(document, de),
        ce(document, de),
        ae(document, de),
        oe(document, de));
      var pe = n(39863),
        fe = n(57771);
      function me(e, t) {
        var n = (0, fe.Z)(function () {
            return new Map();
          }),
          r = (0, fe.Z)(function () {
            var r = S(e, t);
            return function (e, t) {
              var i = n.get(e);
              null != i && i(), null == t && n.delete(e);
              var o = r(e, t);
              return n.set(e, o), o;
            };
          });
        return (
          (0, pe.Z)(
            function () {
              return function () {
                n.forEach(function (e) {
                  e();
                }),
                  n.clear();
              };
            },
            [n]
          ),
          r
        );
      }
      var ve = {},
        ge = { passive: !0 },
        ye = 'react-gui:hover:lock',
        be = 'react-gui:hover:unlock';
      function we(e, t, n) {
        var r = document.createEvent('CustomEvent'),
          i = n || ve,
          o = i.bubbles,
          a = void 0 === o || o,
          s = i.cancelable,
          l = void 0 === s || s,
          c = i.detail;
        r.initCustomEvent(t, a, l, c), e.dispatchEvent(r);
      }
      function Ee(e) {
        var t = e.pointerType;
        return null != t ? t : L;
      }
      var Ze = 'DELAY',
        _e = 'ERROR',
        Ce = 'LONG_PRESS_DETECTED',
        xe = 'NOT_RESPONDER',
        Se = 'RESPONDER_ACTIVE_LONG_PRESS_START',
        ke = 'RESPONDER_ACTIVE_PRESS_START',
        Te = 'RESPONDER_INACTIVE_PRESS_START',
        Ie = 'RESPONDER_RELEASE',
        Le = 'RESPONDER_TERMINATED',
        Pe = Object.freeze({
          NOT_RESPONDER: {
            DELAY: _e,
            RESPONDER_GRANT: Te,
            RESPONDER_RELEASE: _e,
            RESPONDER_TERMINATED: _e,
            LONG_PRESS_DETECTED: _e
          },
          RESPONDER_INACTIVE_PRESS_START: {
            DELAY: ke,
            RESPONDER_GRANT: _e,
            RESPONDER_RELEASE: xe,
            RESPONDER_TERMINATED: xe,
            LONG_PRESS_DETECTED: _e
          },
          RESPONDER_ACTIVE_PRESS_START: {
            DELAY: _e,
            RESPONDER_GRANT: _e,
            RESPONDER_RELEASE: xe,
            RESPONDER_TERMINATED: xe,
            LONG_PRESS_DETECTED: Se
          },
          RESPONDER_ACTIVE_LONG_PRESS_START: {
            DELAY: _e,
            RESPONDER_GRANT: _e,
            RESPONDER_RELEASE: xe,
            RESPONDER_TERMINATED: xe,
            LONG_PRESS_DETECTED: Se
          },
          ERROR: {
            DELAY: xe,
            RESPONDER_GRANT: Te,
            RESPONDER_RELEASE: xe,
            RESPONDER_TERMINATED: xe,
            LONG_PRESS_DETECTED: xe
          }
        }),
        Re = function (e) {
          return e === ke || e === Se;
        },
        Oe = function (e) {
          return 'button' === e.getAttribute('role');
        },
        Me = function (e) {
          return e === Te || e === ke || e === Se;
        },
        De = function (e) {
          var t = e.key,
            n = e.target.getAttribute('role');
          return (
            'Enter' === t || ((' ' === t || 'Spacebar' === t) && 'button' === n)
          );
        },
        Ae = (function () {
          function e(e) {
            (this._eventHandlers = null),
              (this._isPointerTouch = !1),
              (this._longPressDelayTimeout = null),
              (this._longPressDispatched = !1),
              (this._pressDelayTimeout = null),
              (this._pressOutDelayTimeout = null),
              (this._touchState = xe),
              this.configure(e);
          }
          var t = e.prototype;
          return (
            (t.configure = function (e) {
              this._config = e;
            }),
            (t.reset = function () {
              this._cancelLongPressDelayTimeout(),
                this._cancelPressDelayTimeout(),
                this._cancelPressOutDelayTimeout();
            }),
            (t.getEventHandlers = function () {
              return (
                null == this._eventHandlers &&
                  (this._eventHandlers = this._createEventHandlers()),
                this._eventHandlers
              );
            }),
            (t._createEventHandlers = function () {
              var e = this,
                t = function (t, n) {
                  t.persist(),
                    e._cancelPressOutDelayTimeout(),
                    (e._longPressDispatched = !1),
                    (e._selectionTerminated = !1),
                    (e._touchState = xe),
                    (e._isPointerTouch = 'touchstart' === t.nativeEvent.type),
                    e._receiveSignal('RESPONDER_GRANT', t);
                  var r = Ne(e._config.delayPressStart, 0, 50);
                  !1 !== n && r > 0
                    ? (e._pressDelayTimeout = setTimeout(function () {
                        e._receiveSignal(Ze, t);
                      }, r))
                    : e._receiveSignal(Ze, t);
                  var i = Ne(e._config.delayLongPress, 10, 450);
                  e._longPressDelayTimeout = setTimeout(function () {
                    e._handleLongPress(t);
                  }, i + r);
                },
                n = function (t) {
                  e._receiveSignal(Ie, t);
                },
                r = function t(r) {
                  var i = e._config.onPress,
                    o = r.target;
                  if (e._touchState !== xe && De(r)) {
                    n(r), document.removeEventListener('keyup', t);
                    var a = o.getAttribute('role'),
                      s = o.tagName.toLowerCase();
                    null == i ||
                      'link' === a ||
                      'a' === s ||
                      'button' === s ||
                      'input' === s ||
                      'select' === s ||
                      'textarea' === s ||
                      i(r);
                  }
                };
              return {
                onStartShouldSetResponder: function (t) {
                  var n = e._config.disabled;
                  return (
                    n && Oe(t.currentTarget) && t.stopPropagation(),
                    null == n || !n
                  );
                },
                onKeyDown: function (n) {
                  var i = e._config.disabled,
                    o = n.key,
                    a = n.target;
                  if (!i && De(n)) {
                    e._touchState === xe &&
                      (t(n, !1), document.addEventListener('keyup', r));
                    var s = a.getAttribute('role');
                    (' ' === o || 'Spacebar' === o) &&
                      ('button' === s || 'menuitem' === s) &&
                      n.preventDefault(),
                      n.stopPropagation();
                  }
                },
                onResponderGrant: function (e) {
                  return t(e);
                },
                onResponderMove: function (t) {
                  null != e._config.onPressMove && e._config.onPressMove(t);
                  var n = ze(t);
                  if (null != e._touchActivatePosition) {
                    var r = e._touchActivatePosition.pageX - n.pageX,
                      i = e._touchActivatePosition.pageY - n.pageY;
                    Math.hypot(r, i) > 10 && e._cancelLongPressDelayTimeout();
                  }
                },
                onResponderRelease: function (e) {
                  return n(e);
                },
                onResponderTerminate: function (t) {
                  'selectionchange' === t.nativeEvent.type &&
                    (e._selectionTerminated = !0),
                    e._receiveSignal(Le, t);
                },
                onResponderTerminationRequest: function (t) {
                  var n = e._config,
                    r = n.cancelable,
                    i = n.disabled,
                    o = n.onLongPress;
                  return (
                    !(
                      !i &&
                      null != o &&
                      e._isPointerTouch &&
                      'contextmenu' === t.nativeEvent.type
                    ) &&
                    (null == r || r)
                  );
                },
                onClick: function (t) {
                  var n = e._config,
                    r = n.disabled,
                    i = n.onPress;
                  r
                    ? Oe(t.currentTarget) && t.stopPropagation()
                    : (t.stopPropagation(),
                      e._longPressDispatched || e._selectionTerminated
                        ? t.preventDefault()
                        : null != i && !1 === t.altKey && i(t));
                },
                onContextMenu: function (t) {
                  var n = e._config,
                    r = n.disabled,
                    i = n.onLongPress;
                  r
                    ? Oe(t.currentTarget) && t.stopPropagation()
                    : null != i &&
                      e._isPointerTouch &&
                      !t.defaultPrevented &&
                      (t.preventDefault(), t.stopPropagation());
                }
              };
            }),
            (t._receiveSignal = function (e, t) {
              var n = this._touchState,
                r = null;
              null != Pe[n] && (r = Pe[n][e]),
                (this._touchState === xe && e === Ie) ||
                  (null == r || r === _e
                    ? console.error(
                        'PressResponder: Invalid signal ' +
                          e +
                          ' for state ' +
                          n +
                          ' on responder'
                      )
                    : n !== r &&
                      (this._performTransitionSideEffects(n, r, e, t),
                      (this._touchState = r)));
            }),
            (t._performTransitionSideEffects = function (e, t, n, r) {
              if (
                ((function (e) {
                  return e === Le || e === Ie;
                })(n) &&
                  ((this._isPointerTouch = !1),
                  (this._touchActivatePosition = null),
                  this._cancelLongPressDelayTimeout()),
                Me(e) && n === Ce)
              ) {
                var i = this._config.onLongPress;
                null != i &&
                  null == r.nativeEvent.key &&
                  (i(r), (this._longPressDispatched = !0));
              }
              var o = Re(e),
                a = Re(t);
              if (
                (!o && a ? this._activate(r) : o && !a && this._deactivate(r),
                Me(e) && n === Ie)
              ) {
                var s = this._config,
                  l = s.onLongPress;
                null != s.onPress &&
                  ((null != l && e === Se) ||
                    a ||
                    o ||
                    (this._activate(r), this._deactivate(r)));
              }
              this._cancelPressDelayTimeout();
            }),
            (t._activate = function (e) {
              var t = this._config,
                n = t.onPressChange,
                r = t.onPressStart,
                i = ze(e);
              (this._touchActivatePosition = {
                pageX: i.pageX,
                pageY: i.pageY
              }),
                null != r && r(e),
                null != n && n(!0);
            }),
            (t._deactivate = function (e) {
              var t = this._config,
                n = t.onPressChange,
                r = t.onPressEnd;
              function i() {
                null != r && r(e), null != n && n(!1);
              }
              var o = Ne(this._config.delayPressEnd);
              o > 0
                ? (this._pressOutDelayTimeout = setTimeout(function () {
                    i();
                  }, o))
                : i();
            }),
            (t._handleLongPress = function (e) {
              (this._touchState !== ke && this._touchState !== Se) ||
                this._receiveSignal(Ce, e);
            }),
            (t._cancelLongPressDelayTimeout = function () {
              null != this._longPressDelayTimeout &&
                (clearTimeout(this._longPressDelayTimeout),
                (this._longPressDelayTimeout = null));
            }),
            (t._cancelPressDelayTimeout = function () {
              null != this._pressDelayTimeout &&
                (clearTimeout(this._pressDelayTimeout),
                (this._pressDelayTimeout = null));
            }),
            (t._cancelPressOutDelayTimeout = function () {
              null != this._pressOutDelayTimeout &&
                (clearTimeout(this._pressOutDelayTimeout),
                (this._pressOutDelayTimeout = null));
            }),
            e
          );
        })();
      function Ne(e, t, n) {
        return (
          void 0 === t && (t = 0),
          void 0 === n && (n = 0),
          Math.max(t, null != e ? e : n)
        );
      }
      function ze(e) {
        var t = e.nativeEvent,
          n = t.changedTouches,
          r = t.touches;
        return null != r && r.length > 0
          ? r[0]
          : null != n && n.length > 0
            ? n[0]
            : e.nativeEvent;
      }
      function Be() {
        return (
          (Be =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Be.apply(this, arguments)
        );
      }
      function Fe(e, t) {
        var n = e.children,
          r = e.delayLongPress,
          i = e.delayPressIn,
          o = e.delayPressOut,
          a = e.disabled,
          s = e.focusable,
          l = e.onBlur,
          d = e.onContextMenu,
          h = e.onFocus,
          p = e.onHoverIn,
          f = e.onHoverOut,
          m = e.onKeyDown,
          v = e.onLongPress,
          g = e.onPress,
          y = e.onPressMove,
          b = e.onPressIn,
          E = e.onPressOut,
          Z = e.style,
          _ = e.testOnly_hovered,
          C = e.testOnly_pressed,
          x = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, [
            'children',
            'delayLongPress',
            'delayPressIn',
            'delayPressOut',
            'disabled',
            'focusable',
            'onBlur',
            'onContextMenu',
            'onFocus',
            'onHoverIn',
            'onHoverOut',
            'onKeyDown',
            'onLongPress',
            'onPress',
            'onPressMove',
            'onPressIn',
            'onPressOut',
            'style',
            'testOnly_hovered',
            'testOnly_pressed'
          ]),
          S = He(!0 === _),
          k = S[0],
          T = S[1],
          I = He(!1),
          L = I[0],
          P = I[1],
          R = He(!0 === C),
          O = R[0],
          M = R[1],
          D = (0, c.useRef)(null),
          A = (0, w.Z)(t, D),
          N = (function (e, t) {
            var n = (0, c.useRef)(null);
            null == n.current && (n.current = new Ae(t));
            var r = n.current;
            return (
              (0, c.useEffect)(
                function () {
                  r.configure(t);
                },
                [t, r]
              ),
              (0, c.useEffect)(
                function () {
                  return function () {
                    r.reset();
                  };
                },
                [r]
              ),
              (0, c.useDebugValue)(t),
              r.getEventHandlers()
            );
          })(
            0,
            (0, c.useMemo)(
              function () {
                return {
                  delayLongPress: r,
                  delayPressStart: i,
                  delayPressEnd: o,
                  disabled: a,
                  onLongPress: v,
                  onPress: g,
                  onPressChange: M,
                  onPressStart: b,
                  onPressMove: y,
                  onPressEnd: E
                };
              },
              [r, i, o, a, v, g, b, y, E, M]
            )
          ),
          z = N.onContextMenu,
          B = N.onKeyDown;
        !(function (e, t) {
          var n = t.contain,
            r = t.disabled,
            i = t.onHoverStart,
            o = t.onHoverChange,
            a = t.onHoverUpdate,
            s = t.onHoverEnd,
            l = !('undefined' == typeof window || null == window.PointerEvent),
            c = me(l ? 'pointermove' : 'mousemove', ge),
            u = me(l ? 'pointerenter' : 'mouseenter', ge),
            d = me(l ? 'pointerleave' : 'mouseleave', ge),
            h = me(ye, ge),
            p = me(be, ge);
          (0, pe.Z)(
            function () {
              var t = e.current;
              if (null !== t) {
                var l = function (e) {
                    null != s && s(e),
                      null != o && o(!1),
                      c(t, null),
                      d(t, null);
                  },
                  f = function (t) {
                    var r = e.current;
                    null != r && 'touch' !== Ee(t) && (n && we(r, be), l(t));
                  },
                  m = function (e) {
                    'touch' !== Ee(e) &&
                      null != a &&
                      (null == e.x && (e.x = e.clientX),
                      null == e.y && (e.y = e.clientY),
                      a(e));
                  },
                  v = function (e) {
                    null != i && i(e),
                      null != o && o(!0),
                      null != a && c(t, r ? null : m),
                      d(t, r ? null : f);
                  };
                u(
                  t,
                  r
                    ? null
                    : function (t) {
                        var i = e.current;
                        null != i &&
                          'touch' !== Ee(t) &&
                          (n && we(i, ye),
                          v(t),
                          h(
                            i,
                            r
                              ? null
                              : function (e) {
                                  e.target !== i && l(t);
                                }
                          ),
                          p(
                            i,
                            r
                              ? null
                              : function (e) {
                                  e.target !== i && v(t);
                                }
                          ));
                      }
                );
              }
            },
            [u, c, d, h, p, n, r, i, o, a, s, e]
          );
        })(D, {
          contain: !0,
          disabled: a,
          onHoverChange: T,
          onHoverStart: p,
          onHoverEnd: f
        });
        var F = { hovered: k, focused: L, pressed: O },
          H = c.useCallback(
            function (e) {
              a ||
                (e.nativeEvent.target === D.current &&
                  (P(!1), null != l && l(e)));
            },
            [a, D, P, l]
          ),
          W = c.useCallback(
            function (e) {
              a ||
                (e.nativeEvent.target === D.current &&
                  (P(!0), null != h && h(e)));
            },
            [a, D, P, h]
          ),
          U = c.useCallback(
            function (e) {
              null != z && z(e), null != d && d(e);
            },
            [d, z]
          ),
          V = c.useCallback(
            function (e) {
              null != B && B(e), null != m && m(e);
            },
            [m, B]
          );
        return c.createElement(
          u.Z,
          Be({}, x, N, {
            accessibilityDisabled: a,
            focusable: !a && !1 !== s,
            onBlur: H,
            onContextMenu: U,
            onFocus: W,
            onKeyDown: V,
            ref: A,
            style: [!a && We.root, 'function' == typeof Z ? Z(F) : Z]
          }),
          'function' == typeof n ? n(F) : n
        );
      }
      function He(e) {
        var t = (0, c.useState)(!1);
        return [t[0] || e, t[1]];
      }
      var We = n(20773).Z.create({
          root: { cursor: 'pointer', touchAction: 'manipulation' }
        }),
        Ue = (0, c.memo)((0, c.forwardRef)(Fe));
      Ue.displayName = 'Pressable';
      const Ve = Ue,
        Ge = function (e) {
          var t = e.children,
            n = e.onLongPress,
            r = c.useCallback(function (e) {
              return e.preventDefault();
            }, []);
          return c.createElement(
            Ve,
            {
              onLongPress: n,
              onPressIn: function () {
                (document.body.style.userSelect = 'none'),
                  (document.body.style.webkitUserSelect = 'none'),
                  document.body.addEventListener('contextmenu', r);
              },
              onPressOut: function () {
                (document.body.style.userSelect = ''),
                  (document.body.style.webkitUserSelect = ''),
                  document.body.removeEventListener('contextmenu', r);
              }
            },
            t
          );
        };
      var je = n(94587);
      n(60228), n(73964);
      const Ke = (0, n(16740).Z)({
        loader: function () {
          return n.e(1504).then(n.bind(n, 43239));
        }
      });
      var Ye = (function (e) {
        (0, a.Z)(n, e);
        var t = (0, s.Z)(n);
        function n(e, i) {
          var a;
          return (
            (0, r.Z)(this, n),
            (a = t.call(this, e, i)),
            (0, l.Z)((0, o.Z)(a), '_hasScrollListener', !1),
            (0, l.Z)((0, o.Z)(a), '_handleAnchorHoverIn', function () {
              var e = a.props,
                t = e.hoverDelay,
                n = e.onOpen;
              a._clearAnchorTimers(),
                (a._anchorHoverInTimer = setTimeout(
                  function () {
                    !a.state.isAnchorActive && n && n(d.O.hover),
                      a.setState({ isAnchorActive: !0 }),
                      (a._anchorHoverInTimer = void 0);
                  },
                  'short' === t ? b.FN : b.fR
                ));
            }),
            (0, l.Z)((0, o.Z)(a), '_handleAnchorHoverOut', function () {
              a._clearAnchorTimers(),
                (a._anchorHoverOutTimer = setTimeout(function () {
                  a.setState({ isAnchorActive: !1 }),
                    (a._anchorHoverOutTimer = void 0);
                }, b.Cd));
            }),
            (0, l.Z)((0, o.Z)(a), '_handleCardHoverIn', function () {
              a.setState({ isCardHovered: !0 });
            }),
            (0, l.Z)((0, o.Z)(a), '_handleCardHoverOut', function () {
              a._clearCardTimers(),
                (a._cardHoverOutTimer = setTimeout(function () {
                  a._clearHover();
                }, b.Cd));
            }),
            (0, l.Z)((0, o.Z)(a), '_handleAnimateComplete', function () {
              var e = a.props.onAnimateComplete,
                t = a.state,
                n = t.isAnchorActive,
                r = t.isCardHovered;
              e && e(),
                n || r
                  ? a.setState({ isCardMounted: !0 })
                  : a.setState({ isCardMounted: !1 });
            }),
            (0, l.Z)((0, o.Z)(a), '_handleClick', function (e) {
              return a._handleOpenToggle(d.O.click, e);
            }),
            (0, l.Z)((0, o.Z)(a), '_handleOpenToggle', function (e, t) {
              t.preventDefault(), t.stopPropagation();
              var n = a.state.isAnchorActive,
                r = a.props.onOpen;
              n || (r && r(e)), a.setState({ isAnchorActive: !n });
            }),
            (0, l.Z)((0, o.Z)(a), '_handleCancel', function (e) {
              a._handleDismiss(e, !0);
            }),
            (0, l.Z)((0, o.Z)(a), '_handleHide', function (e) {
              a._handleDismiss(e, !1);
            }),
            (0, l.Z)((0, o.Z)(a), '_handleDismiss', function (e, t) {
              var n = a.props.onDismiss;
              a.setState({ isAnchorActive: !1 }),
                a._clearHover(),
                a._clearAnchorTimers(),
                null == n || n(e, t);
            }),
            (0, l.Z)((0, o.Z)(a), '_handleKeypress', function (e) {
              var t = a.state.isAnchorActive,
                n = a.props,
                r = n.enableEnterKeyToggle,
                i = n.visibilityBehavior,
                o = e.altKey,
                s = e.ctrlKey,
                l = e.key,
                c = e.metaKey,
                u = !(o || s || c) && 'Escape' === l,
                h = !(o || s || c) && 'Enter' === l,
                p = i === d.J.forceVisible || i === d.J.forceHidden;
              t && u
                ? a._handleCancel()
                : r && !p && h && a._handleOpenToggle(d.O.keyboard, e);
            }),
            (0, l.Z)((0, o.Z)(a), '_handleLongPress', function () {
              var e = a.state.isAnchorActive,
                t = a.props.onOpen;
              a.setState({ isAnchorActive: !0 }), e || (t && t(d.O.longPress));
            }),
            (0, l.Z)((0, o.Z)(a), '_handleForceOpen', function () {
              var e = a.state.isAnchorActive,
                t = a.props.onOpen;
              a.setState({ isAnchorActive: !0 }), e || (t && t(d.O.force));
            }),
            (0, l.Z)((0, o.Z)(a), '_handleScroll', function () {
              var e = a.state,
                t = e.isAnchorActive,
                n = e.isCardHovered;
              t && !n && a._handleCancel();
            }),
            (0, l.Z)((0, o.Z)(a), '_setAnchorNode', function (e) {
              var t = a.props.anchorRef;
              a._anchorNode = (null == t ? void 0 : t.current) || e || void 0;
            }),
            (a.state = {
              isAnchorActive: !1,
              isCardHovered: !1,
              isCardMounted: !1
            }),
            a
          );
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this.props.visibilityBehavior === d.J.forceVisible &&
                  this.setState({ isAnchorActive: !0 });
              }
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._clearAnchorTimers(), this._clearCardTimers();
                var e = this._getScrollParent();
                this._hasScrollListener &&
                  e &&
                  e.removeEventListener('scroll', this._handleScroll);
              }
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                var e = this.props.dismissOnScroll,
                  t = this.state.isAnchorActive;
                if (e && t && !this._hasScrollListener) {
                  var n = this._getScrollParent();
                  n &&
                    (n.addEventListener('scroll', this._handleScroll, {
                      passive: !0
                    }),
                    (this._hasScrollListener = !0));
                }
              }
            },
            {
              key: 'render',
              value: function () {
                var e = this.context.isInHoverCard,
                  t = this.props,
                  n = t.animationDuration,
                  r = t.animationType,
                  i = t.children,
                  o = t.enableClick,
                  a = t.enableHover,
                  s = t.enableLongPress,
                  l = t.enableNestedHoverCard,
                  h = t.onHoverCardUnmount,
                  p = t.preferredHorizontalOrientation,
                  f = t.preferredVerticalOrientation,
                  m = t.renderContent,
                  v = t.shouldDisable,
                  b = t.visibilityBehavior,
                  w = t.withArrow,
                  E = t.withCardContentOverflow,
                  Z = t.withFixedPosition,
                  _ = t.withMask,
                  C = t.withRoundedSides,
                  x = t.withoutLayer,
                  S = t.wrapperStyle,
                  k = this.state,
                  T = k.isAnchorActive,
                  I = k.isCardHovered,
                  L = k.isCardMounted,
                  P = o && (!a || (a && !g.Z.isEnabled)),
                  R = l || !e,
                  O = s && !g.Z.isEnabled,
                  M = T || I;
                b === d.J.forceVisible
                  ? (M = !0)
                  : b === d.J.forceHidden && (M = !1);
                var D = R && (M || L) && !v(),
                  A =
                    'function' == typeof i
                      ? i({
                          dismissPopover: this._handleHide,
                          forceOpen: this._handleForceOpen,
                          isPopoverShown: M
                        })
                      : i;
                return c.createElement(
                  y.Z,
                  {
                    disabled: !a,
                    onHoverIn: this._handleAnchorHoverIn,
                    onHoverOut: this._handleAnchorHoverOut
                  },
                  c.createElement(
                    u.Z,
                    {
                      onClick:
                        P && b === d.J.interactive ? this._handleClick : void 0,
                      onKeyUp: this._handleKeypress,
                      ref: this._setAnchorNode,
                      style: S
                    },
                    O
                      ? c.createElement(
                          Ge,
                          { onLongPress: this._handleLongPress },
                          A
                        )
                      : A,
                    D
                      ? c.createElement(
                          Ke,
                          {
                            anchorNode: this._anchorNode,
                            animationDuration: n,
                            animationType: r,
                            enableClickOutsideToDismiss: P,
                            onAnimateComplete: this._handleAnimateComplete,
                            onDismiss: this._handleCancel,
                            onHoverCardUnmount: h,
                            preferredHorizontalOrientation: p,
                            preferredVerticalOrientation: f,
                            show: M,
                            withArrow: w,
                            withContentOverflow: E,
                            withFixedPosition: Z,
                            withFocusTrapView: o,
                            withMask: _,
                            withRoundedSides: C,
                            withoutLayer: x
                          },
                          c.createElement(
                            y.Z,
                            {
                              disabled: !a,
                              onHoverIn: this._handleCardHoverIn,
                              onHoverOut: this._handleCardHoverOut
                            },
                            m(this._handleHide)
                          )
                        )
                      : null
                  )
                );
              }
            },
            {
              key: '_clearAnchorTimers',
              value: function () {
                this._anchorHoverInTimer &&
                  clearTimeout(this._anchorHoverInTimer),
                  (this._anchorHoverInTimer = void 0),
                  this._anchorHoverOutTimer &&
                    clearTimeout(this._anchorHoverOutTimer),
                  (this._anchorHoverOutTimer = void 0);
              }
            },
            {
              key: '_clearCardTimers',
              value: function () {
                this._cardHoverOutTimer &&
                  clearTimeout(this._cardHoverOutTimer),
                  (this._cardHoverOutTimer = void 0);
              }
            },
            {
              key: '_clearHover',
              value: function () {
                this.setState({ isCardHovered: !1 }),
                  (this._cardHoverOutTimer = void 0);
              }
            },
            {
              key: '_getScrollParent',
              value: function () {
                return (
                  (this._scrollParent =
                    this._scrollParent ||
                    (function (e) {
                      var t = window,
                        n = e;
                      if (n !== window)
                        for (; n && n !== document.body; ) {
                          var r = (window.getComputedStyle(n) || {}).overflowY;
                          if (
                            !(
                              ('auto' !== r && 'scroll' !== r) ||
                              n instanceof Text
                            )
                          ) {
                            t = n;
                            break;
                          }
                          n = n.parentElement;
                        }
                      return t;
                    })(v.findDOMNode(this))),
                  this._scrollParent
                );
              }
            }
          ]),
          n
        );
      })(c.Component);
      (0, l.Z)(Ye, 'defaultProps', {
        shouldDisable: function () {
          return !1;
        },
        visibilityBehavior: d.J.interactive,
        dismissOnScroll: !0,
        enableLongPress: !1
      }),
        (0, l.Z)(Ye, 'contextType', je.Z);
      var $e = n(64123),
        qe = ['children', 'contentStyle', 'disabled'],
        Xe = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, s.Z)(n);
          function n() {
            var e;
            (0, r.Z)(this, n);
            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
              a[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, l.Z)((0, o.Z)(e), '_renderContent', function (t) {
                var n = e.props.contentStyle;
                return c.createElement(
                  u.Z,
                  { style: [Qe.contentRoot, n] },
                  e.props.renderContent(t)
                );
              }),
              e
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = (e.contentStyle, e.disabled),
                    r = (0, f.Z)(e, qe);
                  return n
                    ? 'function' == typeof t
                      ? t({
                          dismissPopover: m.Z,
                          forceOpen: m.Z,
                          isPopoverShown: !1
                        })
                      : t
                    : c.createElement(
                        Ye,
                        (0, p.Z)({}, r, {
                          enableClick: !0,
                          enableNestedHoverCard: !0,
                          renderContent: this._renderContent
                        }),
                        t
                      );
                }
              }
            ]),
            n
          );
        })(c.Component);
      (0, l.Z)(Xe, 'defaultProps', { enableHover: !1, enableLongPress: !1 }),
        (0, l.Z)(Xe, 'VISIBILITY_BEHAVIOR', d.J);
      var Qe = $e.Z.create(function (e) {
          return {
            contentRoot: {
              maxHeight: 480,
              minHeight: 30,
              maxWidth: 360,
              minWidth: 260,
              overflow: 'auto'
            }
          };
        }),
        Je = n(76290),
        et = n(356),
        tt = n(86301),
        nt = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, s.Z)(n);
          function n() {
            var e;
            (0, r.Z)(this, n);
            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
              a[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, l.Z)((0, o.Z)(e), '_renderSheet', function (t) {
                var n = e.props,
                  r = n.onDismiss,
                  i = n.withoutLayer;
                function o() {
                  t && t(), r && r();
                }
                var a = e._renderContent(o, 'sheet');
                return c.createElement(
                  tt.Z,
                  {
                    onMaskClick: o,
                    type: 'bottom',
                    withKeyboardNavigation: !0,
                    withMask: !0,
                    withoutLayer: i
                  },
                  a
                );
              }),
              (0, l.Z)((0, o.Z)(e), '_renderNarrow', function () {
                var t,
                  n = e.props,
                  r = n.children,
                  i = n.disabled,
                  o = n.onOpen,
                  a = n.visibilityBehavior,
                  s = n.wrapperStyle;
                return a && a !== d.J.interactive
                  ? (a === d.J.forceVisible
                      ? (t = !0)
                      : a === d.J.forceHidden && (t = !1),
                    c.createElement(
                      c.Fragment,
                      null,
                      r,
                      t ? e._renderSheet() : null
                    ))
                  : c.createElement(
                      h.Z,
                      {
                        disabled: i,
                        focusable: !1,
                        interactive: !1,
                        onShowMenu: o,
                        renderMenu: e._renderSheet,
                        style: s
                      },
                      r
                    );
              }),
              (0, l.Z)((0, o.Z)(e), '_renderWide', function () {
                var t = e.props,
                  n = t.children,
                  r = t.contentStyle,
                  i = t.disabled,
                  o = t.dismissOnScroll,
                  a = t.enableHover,
                  s = t.onDismiss,
                  l = t.onOpen,
                  u = t.preferredHorizontalOrientation,
                  d = t.preferredVerticalOrientation,
                  h = t.visibilityBehavior,
                  p = t.withArrow,
                  f = t.withFixedPosition,
                  m = t.withMask,
                  v = t.withoutLayer,
                  g = t.wrapperStyle;
                return c.createElement(
                  Xe,
                  {
                    contentStyle: r,
                    disabled: i,
                    dismissOnScroll: o,
                    enableEnterKeyToggle: !0,
                    enableHover: a,
                    onDismiss: s,
                    onOpen: l,
                    preferredHorizontalOrientation: u,
                    preferredVerticalOrientation: d,
                    renderContent: function (t) {
                      return e._renderContent(t, 'popover');
                    },
                    visibilityBehavior: h,
                    withArrow: p,
                    withFixedPosition: f,
                    withMask: m,
                    withoutLayer: v,
                    wrapperStyle: g
                  },
                  n
                );
              }),
              e
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.switchOnlyOnXSmallBreakpoint;
                  return c.createElement(Je.Z, null, function (n) {
                    var r = n.screenWidth;
                    return (
                      t
                        ? et.Z.isXSmallScreenWidth(r)
                        : et.Z.isNarrowScreenWidth(r)
                    )
                      ? e._renderNarrow()
                      : e._renderWide();
                  });
                }
              },
              {
                key: '_renderContent',
                value: function (e, t) {
                  var n = this.props.renderContent(e, t);
                  return this.props.withDefaultContainer
                    ? c.createElement(u.Z, { style: rt.defaultContainer }, n)
                    : n;
                }
              }
            ]),
            n
          );
        })(c.Component);
      (0, l.Z)(nt, 'defaultProps', {
        disabled: !1,
        dismissOnScroll: !0,
        visibilityBehavior: d.J.interactive
      });
      var rt = $e.Z.create(function (e) {
        return {
          defaultContainer: {
            paddingVertical: e.spacesPx.space16,
            paddingHorizontal: e.spacesPx.space32
          }
        };
      });
    },
    7798: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => K });
      var r = n(15671),
        i = n(43144),
        o = n(97326),
        a = n(60136),
        s = n(98557),
        l = n(4942),
        c = (n(34338), n(37960), n(65007), n(67294)),
        u = n(43231),
        d = n(28228),
        h = n.n(d),
        p = n(64897);
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var m =
          u.canUseDOM &&
          !document.hasOwnProperty('hidden') &&
          document.hasOwnProperty('webkitHidden'),
        v = ['change', 'memoryWarning'],
        g = m ? 'webkitvisibilitychange' : 'visibilitychange',
        y = m ? 'webkitVisibilityState' : 'visibilityState',
        b = 'active',
        w = null,
        E = (function () {
          function e() {}
          var t, n;
          return (
            (e.addEventListener = function (t, n) {
              if (
                e.isAvailable &&
                (h()(
                  -1 !== v.indexOf(t),
                  'Trying to subscribe to unknown event: "%s"',
                  t
                ),
                'change' === t)
              )
                return (
                  w ||
                    ((w = new p.Z()),
                    document.addEventListener(
                      g,
                      function () {
                        w && w.emit('change', e.currentState);
                      },
                      !1
                    )),
                  w.addListener(t, n)
                );
            }),
            (e.removeEventListener = function (t, n) {
              e.isAvailable &&
                (console.error(
                  "AppState.removeListener('" +
                    t +
                    "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `AppState.addEventListener`."
                ),
                h()(
                  -1 !== v.indexOf(t),
                  'Trying to remove listener for unknown event: "%s"',
                  t
                ),
                'change' === t && w && w.removeListener(n));
            }),
            (t = e),
            (n = [
              {
                key: 'currentState',
                get: function () {
                  if (!e.isAvailable) return b;
                  switch (document[y]) {
                    case 'hidden':
                    case 'prerender':
                    case 'unloaded':
                      return 'background';
                    default:
                      return b;
                  }
                }
              }
            ]),
            null && f(t.prototype, null),
            n && f(t, n),
            e
          );
        })();
      E.isAvailable = u.canUseDOM && document[y];
      var Z = n(74387),
        _ = n.n(Z),
        C = n(86034),
        x = n(64123),
        S = 2592e3,
        k = 31449600,
        T = _().ccd32094,
        I = _().abfcce0d,
        L = _().e8733ed9,
        P = _().i3b7a017,
        R = _().be59d8c3,
        O = _().ie5d110f,
        M = _().i3d087db,
        D = _().df5f11b3,
        A = _().ga8d18c9,
        N = _().a91e7d49,
        z = _().id952a69,
        B = _().ga09ab65,
        F = _().c83b901d,
        H = _().a55b9fed,
        W = _().ccaa970f,
        U = _().jade381b,
        V = _().d725a289,
        G = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, s.Z)(n);
          function n() {
            var e;
            (0, r.Z)(this, n);
            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
              a[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, l.Z)((0, o.Z)(e), '_onAppForegrounded', function (t) {
                'active' === t && e.forceUpdate();
              }),
              e
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._listener = E.addEventListener(
                    'change',
                    this._onAppForegrounded
                  );
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e;
                  null === (e = this._listener) ||
                    void 0 === e ||
                    e.remove('change', this._onAppForegrounded);
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    n = e.accessibilityLabel,
                    r = e.color,
                    i = e.cutoff,
                    o = e.humanReadable,
                    a = e.link,
                    s = e.nativeID,
                    l = e.onPress,
                    u = e.prefix,
                    d = e.relative,
                    h = e.style,
                    p = e.timestamp,
                    f = new Date(p),
                    m = !isNaN(f.getTime());
                  if (!m) return null;
                  var v = U(f),
                    g = V(f),
                    y = ''.concat(g, ' · ').concat(v),
                    b = m
                      ? (function (e, t) {
                          var n = Date.now(),
                            r = Math.floor((n - e) / 1e3),
                            i = new Date(n).getFullYear(),
                            o = new Date(e).getFullYear();
                          if (r <= -5) return { label: W(e), aria: W(e) };
                          if (r <= 0) return { label: T, aria: T };
                          if (r < 60)
                            return {
                              label: L(r),
                              aria: I({ amountOfTime: P(r) })
                            };
                          if (r < 3600) {
                            var a = Math.floor(r / 60);
                            return {
                              label: R(a),
                              aria: I({ amountOfTime: O(a) })
                            };
                          }
                          if (r < 86400) {
                            var s = Math.floor(r / 3600);
                            return {
                              label: M(s),
                              aria: I({ amountOfTime: D(s) })
                            };
                          }
                          if (r < S && 'years' === t) {
                            var l = Math.floor(r / 86400);
                            return {
                              label: A(l),
                              aria: I({ amountOfTime: N(l) })
                            };
                          }
                          if (r < k && 'years' === t) {
                            var c = Math.floor(r / S);
                            return {
                              label: z(c),
                              aria: I({ amountOfTime: B(c) })
                            };
                          }
                          if ('years' === t) {
                            var u = Math.floor(r / k);
                            return {
                              label: F(u),
                              aria: I({ amountOfTime: H(u) })
                            };
                          }
                          return o === i
                            ? { label: W(e), aria: W(e) }
                            : { label: U(e), aria: U(e) };
                        })(f, i)
                      : {},
                    w = b.aria,
                    E = b.label,
                    Z = d ? (o ? w : E) : y,
                    _ = d ? w : y;
                  return c.createElement(
                    C.ZP,
                    {
                      accessibilityDescribedBy: t,
                      accessibilityLabel: n || _,
                      color: r,
                      hoverLabel: { label: y },
                      link: a,
                      nativeID: s,
                      onClick: l,
                      style: [h, j.timestamp],
                      withInteractiveStyling: !!a
                    },
                    u,
                    c.createElement('time', { dateTime: f.toISOString() }, Z)
                  );
                }
              }
            ]),
            n
          );
        })(c.PureComponent);
      (0, l.Z)(G, 'defaultProps', {
        color: 'gray700',
        humanReadable: !1,
        relative: !0
      });
      var j = x.Z.create(function (e) {
        return {
          timestamp: {
            flexShrink: 0,
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: e.spaces.space4
          }
        };
      });
      const K = G;
    },
    7277: (e, t, n) => {
      'use strict';
      n.d(t, { K: () => a, Z: () => s });
      var r = n(29439),
        i = n(67294),
        o = n(67177),
        a = i.createContext(null);
      const s = function (e) {
        var t,
          n = e.children,
          s = e.style,
          l = i.useState(null),
          c = (0, r.Z)(l, 2),
          u = c[0],
          d = c[1],
          h =
            ((t = i.useRef(!0)),
            i.useLayoutEffect(function () {
              return (
                (t.current = !0),
                function () {
                  t.current = !1;
                }
              );
            }, []),
            function () {
              return t.current;
            }),
          p = i.useCallback(
            function (e) {
              if (h()) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  r = t.width;
                ((null == u ? void 0 : u.containerHeight) === n &&
                  (null == u ? void 0 : u.containerWidth) === r) ||
                  d({ containerHeight: n, containerWidth: r });
              }
            },
            [
              null == u ? void 0 : u.containerHeight,
              null == u ? void 0 : u.containerWidth,
              h
            ]
          );
        return i.createElement(
          a.Provider,
          { value: u },
          i.createElement(o.Z, { onLayout: p, style: s }, n)
        );
      };
    },
    76290: (e, t, n) => {
      'use strict';
      n.d(t, { F: () => l, Z: () => c });
      var r = n(29439),
        i = n(67294),
        o = n(95998),
        a = n(7277),
        s = function (e) {
          var t = o.Z.get('window'),
            n = t.height,
            r = t.width,
            i = o.Z.get('screen'),
            a = i.height,
            s = i.width,
            l = e || {};
          return {
            containerHeight: l.containerHeight || n,
            containerWidth: l.containerWidth || r,
            screenHeight: a,
            screenWidth: s,
            windowHeight: n,
            windowWidth: r
          };
        };
      function l() {
        var e = i.useContext(a.K),
          t = i.useState(function () {
            return s(e);
          }),
          n = (0, r.Z)(t, 2),
          l = n[0],
          c = n[1];
        return (
          i.useEffect(
            function () {
              var t = function () {
                return c(s(e));
              };
              return (
                o.Z.addEventListener('change', t),
                function () {
                  return o.Z.removeEventListener('change', t);
                }
              );
            },
            [e]
          ),
          i.useEffect(
            function () {
              e && c(s(e));
            },
            [e]
          ),
          l
        );
      }
      const c = function (e) {
        return (0, e.children)(l());
      };
    },
    27e3: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => v }), n(50886), n(37960), n(34338);
      var r = n(67294),
        i = n(86034),
        o = n(37762),
        a = n(1413),
        s = n(29439),
        l =
          (n(41830),
          n(70560),
          n(89730),
          n(25728),
          n(60228),
          n(69358),
          n(43194)),
        c = n(70514),
        u = n(73280),
        d = Object.freeze({
          Cashtag: 'cashtag',
          Hashtag: 'hashtag',
          Mention: 'mention',
          Url: 'url',
          List: 'twitterList'
        }),
        h = Object.freeze({
          CashtagClick: 'cashtag_click',
          HashtagClick: 'hashtag_click'
        });
      function p(e, t) {
        var n = 'https://twitter.com';
        switch (e) {
          case d.Cashtag:
            var r = encodeURIComponent(''.concat(t));
            return ''
              .concat(n, '/search?q=')
              .concat(r, '&src=')
              .concat(h.CashtagClick);
          case d.Hashtag:
            var i = encodeURIComponent(''.concat(t));
            return ''
              .concat(n, '/search?q=')
              .concat(i, '&src=')
              .concat(h.HashtagClick);
          case d.Mention:
            return ''.concat(n, '/').concat(t);
          case d.List:
            return ''.concat(n, '/i/lists/').concat(t);
          case d.Url:
            return t;
        }
      }
      var f = {
        cashtag: function (e, t) {
          return {
            color: 'link',
            dir: 'ltr',
            link: p(d.Cashtag, '$'.concat(t.text)),
            ref: t,
            text: '$'.concat(t.text),
            type: d.Cashtag
          };
        },
        hashtag: function (e, t) {
          return {
            color: 'link',
            dir: u.Z.getTextDirection(t.text),
            link: p(d.Hashtag, '#'.concat(t.text)),
            ref: t,
            text: '#'.concat(t.text),
            type: d.Hashtag
          };
        },
        mention: function (e, t) {
          return {
            color: 'link',
            dir: 'ltr',
            link: p(d.Mention, t.screenName),
            ref: t,
            text: '@'.concat(t.screenName),
            type: d.Mention
          };
        },
        text: function (e, t) {
          return {
            ref: {},
            text: c.Z.replaceCarriageReturns(e),
            type: 'text',
            weight: 'Strong' === t ? 'bold' : void 0
          };
        },
        twitterList: function (e, t) {
          return {
            color: 'text',
            link: p(d.List, t.id),
            ref: t,
            text: e,
            type: d.List,
            weight: 'bold'
          };
        },
        url: function (e, t) {
          return {
            color: 'link',
            link: p(d.Url, t.url),
            ref: t,
            text: e,
            type: d.Url
          };
        },
        user: function (e, t) {
          return { ref: t, text: e, type: 'user', weight: 'bold' };
        }
      };
      function m(e, t) {
        var n = [];
        if (t.length) {
          var r,
            i = (function (e, t) {
              return e.map(function (e) {
                var n = (0, l.Z)(t, e.fromIndex, e.toIndex),
                  r = (0, s.Z)(n, 2),
                  i = r[0],
                  o = r[1];
                return (0, a.Z)(
                  (0, a.Z)({}, e),
                  {},
                  { fromIndex: i, toIndex: o }
                );
              });
            })(t, e),
            c = 0,
            u = (0, o.Z)(i);
          try {
            var d = function () {
              var t = r.value,
                i = t.format,
                o = t.fromIndex,
                a = t.ref,
                s = t.toIndex;
              s !== c && o > c && n.push(f.text(e.slice(c, o)));
              var l = e.slice(o, s);
              if (a) {
                var u = Object.keys(a).find(function (e) {
                  return null != a[e];
                });
                if (u) {
                  var d = f[u];
                  d
                    ? n.push(d(l, a[u]))
                    : (console.warn(
                        '[RichText] resolver not found for entity "'.concat(
                          u,
                          '"'
                        )
                      ),
                      n.push(f.text(l)));
                }
              } else n.push(f.text(l, i));
              c = s;
            };
            for (u.s(); !(r = u.n()).done; ) d();
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          var h = e.length;
          c < h && n.push(f.text(e.slice(c)));
        } else n.push(f.text(e));
        return n;
      }
      function v(e) {
        var t = e.accessibilityRole,
          n = e.align,
          o = e.color,
          a = e.dir,
          s = e.entities,
          l = e.nativeID,
          c = e.onEntityClick,
          u = e.renderFragment,
          d = void 0 === u ? {} : u,
          h = e.size,
          p = e.style,
          f = e.text,
          v = e.weight,
          g = e.withHashflags,
          y = m(f, s);
        return r.createElement(
          i.ZP,
          {
            accessibilityRole: t,
            align: n,
            color: o,
            dir: a,
            nativeID: l,
            size: h,
            style: p,
            weight: v,
            withHashflags: g
          },
          y.map(function (e, t) {
            var n = d[e.type],
              o = {
                children: e.text,
                color: e.color,
                dir: e.dir,
                link: e.link,
                onClick: e.link ? c : void 0,
                weight: e.weight,
                withHashflags: g
              };
            return r.createElement(
              r.Fragment,
              { key: ''.concat(e.text, ':').concat(t) },
              n ? n(o, e.ref) : r.createElement(i.ZP, o)
            );
          })
        );
      }
      (v.makeEntityLink = p),
        (v.internal_parseRichTextEntities = m),
        (v.TextFragment = i.ZP);
    },
    356: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i }), n(470);
      var r = n(64123);
      const i = {
        isNarrowScreenWidth: function (e) {
          return e < r.Z.theme.breakpoints.small;
        },
        isXSmallScreenWidth: function (e) {
          return e < r.Z.theme.breakpoints.xSmall;
        }
      };
    },
    67797: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(67294),
        i = function (e) {
          var t = e.children;
          return r.createElement(r.Fragment, null, t);
        },
        o = function () {
          return { scribe: function () {} };
        },
        a = i,
        s = o;
      const l = {
        set: function (e) {
          var t = e.analyticsHook,
            n = e.provider;
          (a = n || i), (s = t || o);
        },
        Provider: function (e) {
          var t = a;
          return r.createElement(t, e);
        },
        useAnalytics: function () {
          return s();
        }
      };
    },
    86301: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => N });
      var r = n(87462),
        i = n(45987),
        o = n(15671),
        a = n(43144),
        s = n(97326),
        l = n(60136),
        c = n(98557),
        u = n(4942),
        d = (n(34338), n(67294)),
        h = n(10737),
        p = n(83765),
        f = n(1413),
        m = (n(97895), n(67177)),
        v = n(68646),
        g = n(76724),
        y = n(19466),
        b = n(21078),
        w = n(55346),
        E = n(65859),
        Z = (n(97195), n(37353)),
        _ = n(5352),
        C = n(64123);
      const x = C.Z.create({
        initial: {
          alignItems: 'stretch',
          border: '0 solid black',
          boxSizing: 'border-box',
          display: 'flex',
          flexBasis: 'auto',
          flexDirection: 'column',
          margin: 0,
          minHeight: 0,
          minWidth: 0,
          padding: 0,
          position: 'relative',
          zIndex: 0
        }
      });
      var S = [
          _.Z.ArrowDown,
          _.Z.ArrowUp,
          _.Z.ArrowLeft,
          _.Z.ArrowRight,
          _.Z.Escape,
          _.Z.Enter
        ],
        k = function (e) {
          return (0, Z.Z)('div', e);
        };
      const T = (function (e) {
        (0, l.Z)(n, e);
        var t = (0, c.Z)(n);
        function n() {
          var e;
          (0, o.Z)(this, n);
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
            i[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(i))),
            (0, u.Z)((0, s.Z)(e), '_inComposition', !1),
            (0, u.Z)((0, s.Z)(e), '_isCjkKeyboardControlKey', function (e) {
              return -1 !== S.indexOf(e);
            }),
            (0, u.Z)((0, s.Z)(e), '_handleCompositionStart', function () {
              e._inComposition = !0;
            }),
            (0, u.Z)((0, s.Z)(e), '_handleCompositionEnd', function () {
              e._inComposition = !1;
            }),
            (0, u.Z)((0, s.Z)(e), '_handleKeydown', function (t) {
              var n = t.key,
                r = e.props.onKeyDown;
              (e._isCjkKeyboardControlKey(n) && e._inComposition) || r(t);
            }),
            e
          );
        }
        return (
          (0, a.Z)(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.children,
                  n = e.style;
                return d.createElement(
                  k,
                  {
                    onCompositionEnd: this._handleCompositionEnd,
                    onCompositionStart: this._handleCompositionStart,
                    onKeyDown: this._handleKeydown,
                    style: [x.initial, n]
                  },
                  t
                );
              }
            }
          ]),
          n
        );
      })(d.Component);
      var I = n(13582),
        L = 0,
        P = (function (e) {
          (0, l.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            (0, o.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, u.Z)((0, s.Z)(e), '_render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.restoreFocusInFocusTrapView,
                  i = t.style,
                  o = t.withKeyboardNavigation,
                  a = t.withMask,
                  s = [R.root, i],
                  l = o ? y.Z : d.Fragment;
                return d.createElement(
                  b.Z,
                  { restoreFocusInFocusTrapView: r, style: s },
                  d.createElement(
                    l,
                    null,
                    a
                      ? d.createElement(m.Z, {
                          onClick: e._handleMaskClick,
                          style: R.mask,
                          testID: 'mask'
                        })
                      : null,
                    n
                  )
                );
              }),
              (0, u.Z)((0, s.Z)(e), '_handleEsc', function (t) {
                if (!t.defaultPrevented) {
                  var n = t.altKey,
                    r = t.ctrlKey,
                    i = t.key,
                    o = t.metaKey,
                    a = e.props,
                    s = a.enableMaskForDismiss,
                    l = a.onMaskClick;
                  !(n || r || o) &&
                    'Escape' === i &&
                    s &&
                    l &&
                    (t.preventDefault(), l());
                }
              }),
              (0, u.Z)((0, s.Z)(e), '_handleMaskClick', function () {
                var t = e.props,
                  n = t.enableMaskForDismiss,
                  r = t.onMaskClick;
                n && r && r();
              }),
              e
            );
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  (L += 1), g.Z.disable();
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  (L -= 1) <= 0 && g.Z.enable();
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabelledBy,
                    r = t.accessibilityRole,
                    i = t.allowBackNavigation,
                    o = t.onMaskClick;
                  return d.createElement(
                    m.Z,
                    {
                      accessibilityLabelledBy: n,
                      accessibilityRole: r,
                      style: R.fill
                    },
                    d.createElement(
                      T,
                      { onKeyDown: this._handleEsc, style: R.fill },
                      i
                        ? this._render()
                        : d.createElement(E.Z.Consumer, null, function (t) {
                            return d.createElement(
                              I.Z.Consumer,
                              null,
                              function (n) {
                                var r = n.isModal;
                                return d.createElement(
                                  w.Z,
                                  { history: t, isModal: r, onDismiss: o },
                                  e._render()
                                );
                              }
                            );
                          })
                    )
                  );
                }
              }
            ]),
            n
          );
        })(d.Component);
      (0, u.Z)(P, 'defaultProps', {
        accessibilityRole: 'dialog',
        allowBackNavigation: !1,
        enableMaskForDismiss: !0,
        onMaskClick: v.Z,
        withMask: !1,
        restoreFocusInFocusTrapView: !0
      }),
        (P.getCount = function () {
          return L;
        });
      var R = C.Z.create(function (e) {
        return {
          root: {
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
            height: '100%',
            width: '100vw',
            position: 'fixed',
            top: 0
          },
          mask: (0, f.Z)(
            (0, f.Z)({}, C.Z.absoluteFillObject),
            {},
            { backgroundColor: e.colors.maskColor, position: 'fixed' }
          ),
          fill: (0, f.Z)(
            (0, f.Z)({}, C.Z.absoluteFillObject),
            {},
            { display: 'block', position: 'relative' }
          )
        };
      });
      const O = P;
      var M = n(76290);
      const D = 'sheetDialog';
      var A = [
          'children',
          'style',
          'testID',
          'type',
          'withPassthroughEvents',
          'withoutLayer'
        ],
        N = (function (e) {
          (0, l.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            (0, o.Z)(this, n);
            for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++)
              l[c] = arguments[c];
            return (
              (e = t.call.apply(t, [this].concat(l))),
              (0, u.Z)((0, s.Z)(e), '_render', function (t) {
                var n = t.windowHeight,
                  o = t.windowWidth,
                  a = e.props,
                  s = a.children,
                  l = a.style,
                  c = a.testID,
                  u = a.type,
                  f = a.withPassthroughEvents,
                  m = a.withoutLayer,
                  v = (0, i.Z)(a, A),
                  g = o > C.Z.theme.breakpoints.medium,
                  y = [
                    'bottom' === u && [z.alignBottom, z.alignLeft],
                    'center' === u && [z.alignCenter, z.widthSmall],
                    'full' === u && z.alignFull
                  ],
                  b = [
                    'bottom' === u && z.alignCenter,
                    'center' === u && [z.alignCenter, z.widthSmall],
                    'full' === u && z.alignCenter
                  ],
                  w = { maxHeight: ''.concat(0.9 * n, 'px') },
                  E = [
                    z.container,
                    'bottom' === u && z.containerBottom,
                    'center' === u && z.containerCenter,
                    w,
                    l
                  ],
                  Z = [z.container, z.containerCenter, l],
                  _ = d.createElement(
                    O,
                    (0, r.Z)({}, v, { style: [z.root, g ? b : y] }),
                    d.createElement(
                      h.Z,
                      { style: g ? Z : E, testID: c || D, withWindowWidth: !0 },
                      s
                    )
                  );
                return m
                  ? _
                  : 'full' === u
                    ? d.createElement(
                        p.Z.FullSheet,
                        { withPassthroughEvents: f },
                        _
                      )
                    : d.createElement(
                        p.Z.HalfSheet,
                        { withPassthroughEvents: f },
                        _
                      );
              }),
              e
            );
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return d.createElement(M.Z, null, this._render);
                }
              }
            ]),
            n
          );
        })(d.Component);
      (0, u.Z)(N, 'defaultProps', O.defaultProps);
      var z = C.Z.create(function (e) {
        return {
          root: {
            minHeight: 'calc('.concat(e.spaces.space64, ' * 3)'),
            alignSelf: 'center'
          },
          container: {
            maxHeight: '100%',
            overflowY: 'auto',
            backgroundColor: e.colors.cellBackground
          },
          containerBottom: {
            borderTopStartRadius: 2 * e.borderRadiiPx.xLarge,
            borderTopEndRadius: 2 * e.borderRadiiPx.xLarge,
            paddingBottom: C.Z.iPhoneOffsetBottom
          },
          containerCenter: { borderRadius: e.borderRadii.xLarge },
          alignBottom: { alignItems: 'flex-end', paddingTop: e.spaces.space40 },
          alignCenter: { alignItems: 'center', maxWidth: '80vw' },
          alignFull: { alignItems: 'stretch' },
          alignLeft: { start: 0 },
          widthSmall: { width: 320 }
        };
      });
    },
    49954: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => s });
      var r = n(1413),
        i = n(29439),
        o = n(67294),
        a = n(64123);
      const s = function (e) {
        var t = e.children,
          n = o.useState({
            scale: a.Z.theme.scale,
            nextScale: a.Z.theme.scale,
            themeKey: a.Z.theme.key,
            nextTheme: a.Z.theme.key
          }),
          s = (0, i.Z)(n, 2),
          l = s[0],
          c = s[1];
        return (
          o.useEffect(
            function () {
              return a.Z.onThemeChange(function (e) {
                c(
                  (0, r.Z)(
                    (0, r.Z)({}, l),
                    {},
                    { themeKey: e.key, scale: e.scale }
                  )
                );
              });
            },
            [l]
          ),
          o.createElement(o.Fragment, { key: l.themeKey }, t)
        );
      };
    },
    74913: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var r = n(15671),
        i = n(43144),
        o = n(60136),
        a = n(98557),
        s = n(4942),
        l = (n(470), n(67294)),
        c = n(67177),
        u = n(64123),
        d = (function (e) {
          (0, o.Z)(n, e);
          var t = (0, a.Z)(n);
          function n() {
            return (0, r.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.Icon,
                    n = e.color,
                    r = e.size,
                    i = e.style;
                  return l.createElement(
                    c.Z,
                    { style: [h.root, h[r], h[n], i] },
                    l.createElement(t, { style: [p[r], p[n]] })
                  );
                }
              }
            ]),
            n
          );
        })(l.PureComponent);
      (0, s.Z)(d, 'defaultProps', { color: 'primary', size: 'xxLarge' });
      var h = u.Z.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: e.borderRadii.infinite
            },
            xxxLarge: { height: e.spaces.space56, width: e.spaces.space56 },
            xxLarge: { height: e.spaces.space48, width: e.spaces.space48 },
            xLarge: { height: e.spaces.space40, width: e.spaces.space40 },
            large: { height: e.spaces.space28, width: e.spaces.space28 },
            medium: { height: e.spaces.space20, width: e.spaces.space20 },
            primary: { backgroundColor: e.colors.primary },
            neutral: {
              backgroundColor: e.colors.cellBackground,
              borderWidth: e.borderWidths.small,
              borderStyle: 'solid',
              borderColor: e.colors.gray100
            },
            primaryFill: { backgroundColor: e.colors.buttonBlack },
            exclusive: { backgroundColor: e.colors.plum500 },
            danger: { backgroundColor: e.colors.red500 },
            warning: { backgroundColor: e.colors.orange500 },
            success: { backgroundColor: e.colors.green500 }
          };
        }),
        p = u.Z.create(function (e) {
          return {
            xxxLarge: { height: e.spaces.space28, width: e.spaces.space28 },
            xxLarge: { height: e.spaces.space24, width: e.spaces.space24 },
            xLarge: { height: e.spaces.space20, width: e.spaces.space20 },
            large: { height: e.spaces.space16, width: e.spaces.space16 },
            medium: { height: e.spaces.space12, width: e.spaces.space12 },
            primary: { color: e.colors.white },
            neutral: { color: e.colors.text },
            exclusive: { color: e.colors.white },
            danger: { color: e.colors.white },
            warning: { color: e.colors.white },
            primaryFill: { color: e.colors.buttonWhite },
            success: { color: e.colors.white }
          };
        });
    },
    984: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => b });
      var r = n(29439),
        i = n(67294),
        o = n(16508),
        a = n(67177),
        s = n(29607),
        l = n(86034),
        c = n(81443),
        u = n(4942),
        d = n(15671),
        h = n(43144),
        p =
          (n(49693),
          n(60228),
          n(47522),
          n(752),
          n(21694),
          n(51090),
          n(76265),
          n(19649),
          n(55793)),
        f = (function () {
          function e() {
            (0, d.Z)(this, e);
          }
          return (
            (0, h.Z)(e, [
              { key: 'observe', value: function (e, t) {} },
              { key: 'unobserve', value: function (e, t) {} },
              { key: 'unobserveAll', value: function (e) {} }
            ]),
            e
          );
        })(),
        m = (function () {
          function e() {
            var t = this;
            (0, d.Z)(this, e),
              (0, u.Z)(this, '_observerCallback', function (e, n) {
                e.forEach(function (e) {
                  var n = t._entriesCallbackMap.get(e.target);
                  n
                    ? n.forEach(function (t) {
                        return t(e);
                      })
                    : t.unobserveAll(e.target);
                });
              }),
              (this._entriesCallbackMap = new WeakMap());
          }
          return (
            (0, h.Z)(e, [
              {
                key: 'observe',
                value: function (e, t) {
                  var n, r;
                  e &&
                    (this._observer || this._init(),
                    this._entriesCallbackMap.has(e) ||
                      this._entriesCallbackMap.set(e, new Set()),
                    null === (n = this._entriesCallbackMap.get(e)) ||
                      void 0 === n ||
                      n.add(t),
                    null === (r = this._observer) ||
                      void 0 === r ||
                      r.observe(e));
                }
              },
              {
                key: 'unobserve',
                value: function (e, t) {
                  var n, r;
                  e &&
                    this._entriesCallbackMap.has(e) &&
                    (this._observer || this._init(),
                    1 ===
                    (null === (n = this._entriesCallbackMap.get(e)) ||
                    void 0 === n
                      ? void 0
                      : n.size)
                      ? this.unobserveAll(e)
                      : null === (r = this._entriesCallbackMap.get(e)) ||
                        void 0 === r ||
                        r.delete(t));
                }
              },
              {
                key: 'unobserveAll',
                value: function (e) {
                  var t;
                  e &&
                    (this._observer || this._init(),
                    null === (t = this._observer) ||
                      void 0 === t ||
                      t.unobserve(e),
                    this._entriesCallbackMap.delete(e));
                }
              },
              {
                key: '_init',
                value: function () {
                  this._maybePolyfillResizeObserver(),
                    (this._observer = new window.ResizeObserver(
                      this._observerCallback
                    )),
                    (this._entriesCallbackMap = new WeakMap());
                }
              },
              {
                key: '_maybePolyfillResizeObserver',
                value: function () {
                  (!window.ResizeObserver ||
                    (p.ZP.isIOS() && p.ZP.iOSVersion() < 14) ||
                    (p.ZP.isSafari() &&
                      p.ZP.isMac() &&
                      p.ZP.safariVersion() < 14)) &&
                    ((window.ResizeObserver = void 0), n(95761));
                }
              }
            ]),
            e
          );
        })();
      const v = o.canUseDOM ? new m() : new f();
      var g = n(64123),
        y = o.canUseDOM
          ? function () {
              var e = i.useRef(null),
                t = i.useState(150),
                n = (0, r.Z)(t, 2),
                o = n[0],
                a = n[1];
              return (
                i.useLayoutEffect(function () {
                  var t = e.current;
                  if (t) {
                    var n = (0, s.Z)(a, 300);
                    return (
                      v.observe(t, function (e) {
                        n(e.contentRect.width);
                      }),
                      function () {
                        v.unobserveAll(t);
                      }
                    );
                  }
                }, []),
                [o <= 150, e]
              );
            }
          : function () {
              return [!0, null];
            };
      function b(e) {
        var t = e.actionButtonWrapperStyle,
          n = e.actionLink,
          o = e.actionText,
          s = e.children,
          u = e.ctaLink,
          d = e.ctaText,
          h = e.lang,
          p = e.nativeID,
          f = e.onActionClick,
          m = e.style,
          v = y(),
          g = (0, r.Z)(v, 2),
          b = g[0],
          E = g[1];
        return i.createElement(
          a.Z,
          { ref: E, style: [w.root, b && w.rootCompact, m] },
          i.createElement(
            a.Z,
            { style: [w.textWrapper, b && w.textWrapperCompact] },
            i.createElement(
              l.ZP,
              { color: 'gray700', dir: 'auto', lang: h, nativeID: p },
              s
            ),
            d && u
              ? i.createElement(
                  i.Fragment,
                  null,
                  ' ',
                  i.createElement(l.ZP, { dir: 'auto', link: u }, d)
                )
              : null
          ),
          o && (f || n)
            ? i.createElement(
                a.Z,
                { style: [w.buttonWrapper, b && w.buttonWrapperCompact, t] },
                i.createElement(
                  c.ZP,
                  {
                    borderColor: 'transparent',
                    link: n,
                    onPress: f,
                    size: 'small',
                    style: w.button
                  },
                  o
                )
              )
            : null
        );
      }
      var w = g.Z.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.gray0,
            borderColor: e.colors.gray50,
            borderRadius: e.borderRadii.xLarge,
            borderStyle: 'solid',
            borderWidth: '1px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: e.spaces.space4,
            paddingVertical: e.spaces.space12
          },
          rootCompact: { flexDirection: 'column' },
          textWrapper: {
            display: 'block',
            flexShrink: 1,
            marginHorizontal: e.spaces.space12
          },
          textWrapperCompact: { marginHorizontal: e.spaces.space2 },
          buttonWrapper: {
            marginVertical: 'calc(-1 * '.concat(
              e.componentDimensions.gutterVertical,
              ')'
            )
          },
          buttonWrapperCompact: { marginTop: e.spaces.space8, marginBottom: 0 },
          button: {
            paddingStart: e.spaces.space12,
            paddingEnd: e.spaces.space12
          }
        };
      });
    },
    11365: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => a });
      var r = n(67294),
        i = n(67177),
        o = n(12011);
      function a(e) {
        var t = e.accessibilityLabel,
          n = e.accessibilityLabelledBy,
          a = e.children,
          l = e.displayStyle,
          c = void 0 === l ? 'inline' : l,
          u = e.nativeID,
          d = e.style,
          h = o.ZP.useProps().withEdgeToEdgeTweetAnatomy();
        return r.createElement(
          i.Z,
          {
            accessibilityLabel: t,
            accessibilityLabelledBy: n,
            accessibilityRole: 'group',
            nativeID: u,
            style: [
              s.container,
              s[''.concat(c, 'Container')],
              h && s.noMaxWidth,
              d
            ]
          },
          a
        );
      }
      var s = n(64123).Z.create(function (e) {
        return {
          container: { columnGap: e.spacesPx.space4, flexDirection: 'row' },
          inlineContainer: { justifyContent: 'space-between', maxWidth: 510 },
          noMaxWidth: { maxWidth: 'none' },
          blockContainer: {
            alignItems: 'stretch',
            height: '100%',
            justifyContent: 'space-around',
            minHeight: '1.875rem',
            paddingHorizontal: e.spaces.space4
          }
        };
      });
    },
    92471: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => y }), n(37960);
      var r = n(67294),
        i = n(74387),
        o = n.n(i),
        a = n(1413),
        s = n(37353),
        l = n(77956),
        c = n(7960),
        u = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = r.useContext(l.Z);
          return (0, s.Z)(
            'svg',
            (0, a.Z)(
              (0, a.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.Z.root, e.style, t && c.Z.iconRTL],
                viewBox: '0 0 24 24',
                children: r.createElement(
                  'g',
                  null,
                  r.createElement('path', {
                    d: 'M21.15 6.232c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378zM14.75 19l-2 2H21v-2h-6.25z'
                  })
                )
              }
            )
          );
        };
      u.metadata = { width: 24, height: 24 };
      const d = u;
      var h = n(86034),
        p = n(64123),
        f = o().e1b95ab0,
        m = o().g219b922,
        v = o().d0d51086,
        g = o().c6578930;
      function y(e) {
        var t = e.editType,
          n = e.link,
          i = e.nativeID,
          o = e.textMode,
          a = e.textSize;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            h.ZP,
            { color: 'gray700', link: n, style: b.root },
            r.createElement(d, {
              accessibilityLabel: 'latest' === t ? m : g,
              nativeID: i,
              style: [b.icon, o && b.iconTextSpacing]
            }),
            o &&
              r.createElement(
                h.ZP,
                { size: a },
                (function (e, t) {
                  return 'latest' === e ? f : 'inline' === t ? v : g;
                })(t, o)
              )
          )
        );
      }
      var b = p.Z.create(function (e) {
        return {
          icon: { fontSize: e.fontSizes.subtext1 },
          iconTextSpacing: { marginEnd: e.spaces.space4 },
          root: { alignSelf: 'flex-start', flexDirection: 'row' }
        };
      });
    },
    66596: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var r = n(29439),
        i = n(67294),
        o = n(74387),
        a = n.n(o),
        s = n(984),
        l = a().b05a39b2,
        c = function (e) {
          return i.createElement(s.Z, e);
        },
        u = i.forwardRef(function (e, t) {
          var n,
            o,
            a = e.children,
            s = e.label,
            u = e.lang,
            d = e.onReveal,
            h = e.render,
            p = void 0 === h ? c : h,
            f = e.revealLabel,
            m = void 0 === f ? l : f,
            v =
              ((n = i.useReducer(function () {
                return !0;
              }, !1)),
              [(o = (0, r.Z)(n, 2))[0], o[1]]),
            g = (0, r.Z)(v, 2),
            y = g[0],
            b = g[1];
          function w(e) {
            b(), null == d || d(e);
          }
          return (
            i.useImperativeHandle(t, function () {
              return {
                reveal: function () {
                  return w('synthetic');
                }
              };
            }),
            y
              ? a
              : p({
                  actionText: m,
                  children: s,
                  lang: u,
                  onActionClick: function () {
                    return w('organic');
                  }
                })
          );
        });
      u.displayName = 'TweetInterstitial';
      const d = u;
    },
    36504: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => Qe });
      var r = n(87462),
        i = n(29439),
        o = n(1413),
        a = n(15671),
        s = n(43144),
        l = n(97326),
        c = n(60136),
        u = n(98557),
        d = n(4942),
        h =
          (n(34338),
          n(70560),
          n(59749),
          n(86544),
          n(34284),
          n(54564),
          n(90385),
          n(60228),
          n(38077),
          n(69358),
          n(67294)),
        p = n(67177),
        f = n(74387),
        m = n.n(f),
        v = n(31072),
        g = n(39268),
        y = n(45227),
        b = n(51597),
        w = n(76509),
        E = n(94099),
        Z = n(12011),
        _ = n(40830),
        C = n(2883),
        x = n(58341),
        S = n(86034),
        k = n(67797),
        T = n(82894),
        I = m().f4393d0f,
        L = { element: 'screen_name', action: 'profile_click' };
      const P = function (e) {
        var t = e.size,
          n = e.sourceTweetId,
          r = e.style,
          i = e.userAffiliateBadgeInfo,
          o = e.userIsBlueVerified,
          a = e.userIsProtected,
          s = e.userIsVerified,
          l = e.userName,
          c = e.userScreenName,
          u = e.userVerifiedType,
          d = k.Z.useAnalytics(),
          f = h.useCallback(
            function () {
              d.scribe(L);
            },
            [d]
          ),
          v = h.useMemo(
            function () {
              return { pathname: '/i/status/'.concat(n || '') };
            },
            [n]
          ),
          g = n
            ? h.createElement(
                S.ZP,
                { link: v, onPress: f },
                h.createElement(T.Z, {
                  affiliateBadgeInfo: i,
                  isBlueVerified: o,
                  isProtected: a,
                  isVerified: s,
                  name: l,
                  screenName: c,
                  verifiedType: u,
                  withHoverCard: !0,
                  withLink: !1,
                  withScreenName: !1
                })
              )
            : h.createElement(T.Z, {
                affiliateBadgeInfo: i,
                isBlueVerified: o,
                isProtected: a,
                isVerified: s,
                name: l,
                onLinkClick: f,
                screenName: c,
                verifiedType: u,
                withHoverCard: !0,
                withLink: !0,
                withScreenName: !1
              });
        return h.createElement(
          p.Z,
          { accessibilityLabel: I({ name: l }), style: r },
          h.createElement(
            S.ZP,
            { color: 'gray700', size: t },
            h.createElement(m().I18NFormatMessage, { $i18n: 'dbf19261' }, g)
          )
        );
      };
      var R = n(5672);
      const O = function (e) {
          var t = e.ext_media_color && e.ext_media_color.palette,
            n = t && R.Z.get(t);
          return n ? n.rgb : void 0;
        },
        M = function (e) {
          return e.original_info && e.original_info.focus_rects;
        },
        D = function (e) {
          return e.original_info
            ? {
                url: e.media_url_https,
                width: e.original_info.width,
                height: e.original_info.height
              }
            : void 0;
        };
      n(50886);
      var A = n(8876),
        N = n(23896),
        z = n(64123),
        B = m().f8e8e32e,
        F = (function (e) {
          (0, c.Z)(n, e);
          var t = (0, u.Z)(n);
          function n() {
            return (0, a.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, s.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.linkPath,
                    n = e.onClick,
                    r = e.size,
                    i = e.users,
                    o = e.withIcon,
                    a = this._decodeUserList(),
                    s = a.isCurrentUserIncluded
                      ? W.withCurrentUser
                      : W.withoutCurrentUser,
                    l = this._selectMessage(s, a),
                    c = i.map(function (e) {
                      return e.user_id;
                    }),
                    u = t && { pathname: t, state: { userIds: c } };
                  return i.length > 0
                    ? h.createElement(
                        p.Z,
                        { style: [U.root, this.props.style] },
                        h.createElement(
                          S.ZP,
                          {
                            color: 'gray700',
                            link: u,
                            onPress: n,
                            size: r,
                            withInteractiveStyling: !!u
                          },
                          o ? h.createElement(A.Z, { style: U.icon }) : null,
                          l
                        )
                      )
                    : null;
                }
              },
              {
                key: '_selectMessage',
                value: function (e, t) {
                  switch (this.props.users.length) {
                    case 0:
                      return null;
                    case 1:
                      return e.single(t);
                    default:
                      return e.multiple(t);
                  }
                }
              },
              {
                key: '_decodeUserList',
                value: function () {
                  var e = this.props,
                    t = e.loggedInUserId,
                    n = e.users,
                    r = t
                      ? (function (e, n, r) {
                          for (
                            var i = (0, N.Z)(r) ? r : 0, o = Math.max(0, i);
                            o <= e.length - 1;
                            o++
                          )
                            if (e[o].user_id === t) return o;
                          return -1;
                        })(n)
                      : -1,
                    i = r >= 0,
                    o = i && n[r] ? n[r] : void 0;
                  return {
                    isCurrentUserIncluded: i,
                    firstName:
                      n.length >= 1 ? (i && o ? o.name : n[0].name) : void 0,
                    secondName:
                      n.length >= 2
                        ? i && 0 !== r
                          ? n[0].name
                          : n[1].name
                        : void 0,
                    otherUsersCount: n.length > 0 ? n.length - 1 : 0
                  };
                }
              }
            ]),
            n
          );
        })(h.Component),
        H = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'normal';
          return h.createElement(S.ZP, { color: 'gray700', weight: t }, e);
        },
        W = {
          withCurrentUser: {
            single: function () {
              return H(B, 'bold');
            },
            multiple: function (e) {
              var t = e.otherUsersCount,
                n = e.secondName;
              return t && n
                ? H(
                    h.createElement(
                      m().I18NFormatMessage,
                      { $i18n: 'd7b2c271' },
                      h.createElement(S.ZP, { weight: 'bold' }, m().df6703d3),
                      m().c20f7e9f({
                        otherUsersCount: t,
                        secondName: h.createElement(S.ZP, null, n)
                      })
                    )
                  )
                : null;
            }
          },
          withoutCurrentUser: {
            single: function (e) {
              var t = e.firstName;
              return t ? H(t) : null;
            },
            multiple: function (e) {
              var t = e.firstName,
                n = e.otherUsersCount,
                r = e.secondName;
              return n
                ? H(
                    h.createElement(
                      m().I18NFormatMessage,
                      { $i18n: 'b035fe73' },
                      h.createElement(S.ZP, null, t),
                      m().he26f627({
                        otherUsersCount: n,
                        secondName: h.createElement(S.ZP, null, r)
                      })
                    )
                  )
                : null;
            }
          }
        },
        U = z.Z.create(function (e) {
          return {
            root: { flexDirection: 'row' },
            icon: { color: e.colors.gray700, marginEnd: e.spaces.space4 }
          };
        }),
        V = n(67965),
        G = n(22234),
        j = function (e) {
          var t, n;
          return (
            (null === (t = e.features) ||
            void 0 === t ||
            null === (n = t.all) ||
            void 0 === n
              ? void 0
              : n.tags) || []
          );
        };
      n(41830), n(32320), n(278);
      var K = n(80962),
        Y = n(20129),
        $ = n(76488),
        q = 'animated_gif',
        X = 'video',
        Q = 'vine',
        J = Object.freeze({ ANIMATED_GIF: q, VIDEO: X, VINE: Q }),
        ee = ((0, K.Z)(J), m().fc45ccc6),
        te = function (e) {
          return e.additional_media_info &&
            e.additional_media_info.call_to_actions
            ? ne(e.additional_media_info.call_to_actions)
            : void 0;
        },
        ne = function (e) {
          return e.visit_site
            ? { type: 'url', url: e.visit_site.url }
            : e.watch_now
              ? { type: 'watch', url: e.watch_now.url }
              : void 0;
        },
        re = function (e) {
          return ie(e.mediaStats && e.mediaStats.viewCount);
        },
        ie = function (e) {
          var t = e && parseInt(e, 10);
          return t && (0, Y.Z)(t) && t >= 0 ? t : void 0;
        },
        oe = function (e) {
          return !!e && (e.type === q || e.type === X || e.type === Q);
        },
        ae = function (e) {
          var t, n;
          if (
            null !== (t = e.allow_download_status) &&
            void 0 !== t &&
            t.allow_download
          )
            return null ===
              (n = e.video_info.variants.reduce(
                function (e, t) {
                  if (
                    t.bitrate &&
                    'video/mp4' === t.content_type &&
                    (!e || (e.bitrate && e.bitrate < t.bitrate))
                  )
                    return t;
                },
                void 0
              )) || void 0 === n
              ? void 0
              : n.url;
        };
      const se = function (e, t, n, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            a = t.video_info || {},
            s = a.duration_millis,
            l = a.variants,
            c = 1,
            u = {
              accessibilityLabel:
                'string' == typeof t.ext_alt_text ? t.ext_alt_text : ee,
              additionalMediaInfo: t.additional_media_info,
              aspectRatio: $.Z.getAspectRatio(t.video_info, c),
              backgroundColor: O(t),
              cta: te(t),
              durationMs: s,
              poster: D(t),
              shouldShowAltLabel: !!t.ext_alt_text && i,
              source: {
                eventId: n,
                contentId: t.id_str,
                variants: l,
                videoId: e,
                downloadLink: ae(t)
              },
              videoType: t.type,
              viewCount: re(t)
            };
          return (
            r && (u = (0, o.Z)((0, o.Z)({}, u), {}, { forwardPivotInfo: r })), u
          );
        },
        le = oe;
      var ce,
        ue,
        de,
        he = n(66596),
        pe = m().j2eea17a,
        fe = { text: pe, isGlobalSensitiveMedia: !0, withBlurredMedia: !1 },
        me = {
          MessageComponent: function () {
            return pe;
          },
          isGlobalSensitiveMedia: !1,
          withBlurredMedia: !0
        },
        ve = (function (e) {
          (0, c.Z)(n, e);
          var t = (0, u.Z)(n);
          function n() {
            var e;
            (0, a.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, d.Z)((0, l.Z)(e), '_getLabel', function () {
                var t = e.props,
                  n = t.revealableTombstoneConfig,
                  r = t.sensitiveMediaWarnings;
                if (
                  n.withBlurredMedia &&
                  n.MessageComponent &&
                  null != r &&
                  r.size
                ) {
                  var i = n.MessageComponent;
                  return h.createElement(i, { sensitiveMediaWarnings: r });
                }
                return n.text || null;
              }),
              e
            );
          }
          return (
            (0, s.Z)(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e,
                      t = n.get();
                    return t
                      ? h.createElement(t, this.props)
                      : h.createElement(
                          he.Z,
                          { label: this._getLabel() },
                          null !== (e = this.props.children) && void 0 !== e
                            ? e
                            : null
                        );
                  }
                }
              ],
              [
                {
                  key: 'set',
                  value: function (e) {
                    var t = e.component,
                      n = e.sensitiveMediaConfig,
                      r = e.sensitiveMediaWarningConfig;
                    (ce = t), (ue = n), (de = r);
                  }
                },
                {
                  key: 'get',
                  value: function () {
                    return ce;
                  }
                },
                {
                  key: 'sensitiveMediaTombstoneConfig',
                  get: function () {
                    var e;
                    return null !== (e = ue) && void 0 !== e ? e : fe;
                  }
                },
                {
                  key: 'sensitiveMediaWarningTombstoneConfig',
                  get: function () {
                    var e;
                    return null !== (e = de) && void 0 !== e ? e : me;
                  }
                }
              ]
            ),
            n
          );
        })(h.Component);
      (0, d.Z)(ve, 'defaultProps', { withRoundedCorners: !0 });
      const ge = ve;
      var ye = n(20097),
        be = n(27e3),
        we = n(45987),
        Ee = n(68646),
        Ze = n(48778),
        _e = n(14381),
        Ce = n(11934),
        xe = n(34902),
        Se = n(44548);
      n(73964);
      const ke = (0, n(16740).Z)({
        loader: function () {
          return Promise.all([n.e(5234), n.e(5338)]).then(n.bind(n, 44234));
        },
        renderPlaceholder: function () {
          return h.createElement('div', { 'data-testid': 'videoPlayer' });
        }
      });
      var Te,
        Ie = new xe.ZP({});
      const Le = (function (e) {
        (0, c.Z)(n, e);
        var t = (0, u.Z)(n);
        function n() {
          return (0, a.Z)(this, n), t.apply(this, arguments);
        }
        return (
          (0, s.Z)(
            n,
            [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    r,
                    i = n.get();
                  if (i) return h.createElement(i, this.props);
                  var o,
                    a =
                      (null === (e = this.props.source) ||
                      void 0 === e ||
                      null === (t = e.variants) ||
                      void 0 === t
                        ? void 0
                        : t.map(function (e) {
                            return { src: e.url, type: e.content_type };
                          })) || [];
                  if (this.props.cta) {
                    var s = this.props.cta,
                      l = s.type,
                      c = s.url;
                    l && c && (o = { type: l, url: c });
                  }
                  var u = 'animated_gif' === this.props.videoType,
                    d = a && a.length ? (u ? 'gif' : 'media_entity') : 'vmap',
                    p = this.props.source.downloadLink;
                  return h.createElement(
                    Se.l.Provider,
                    { value: { downloadLink: p } },
                    h.createElement(ke, {
                      accessibilityLabel: this.props.accessibilityLabel,
                      aspectRatio: this.props.aspectRatio,
                      configType: 'static',
                      contentId: this.props.source.contentId,
                      contentType: d,
                      cta: o,
                      durationMs: this.props.durationMs,
                      eventId: this.props.source.eventId,
                      geolocationPrompt: this.props.geolocationPrompt,
                      httpClient: Ie,
                      includeBroadcastEventAssociation:
                        this.props.includeBroadcastEventAssociation,
                      intentToPlayTime: this.props.intentToPlayTime,
                      maxLoopCount: this.props.maxLoopCount,
                      poster:
                        null === (r = this.props.poster) || void 0 === r
                          ? void 0
                          : r.url,
                      requestedTimecode: this.props.timecode,
                      setPlayerApi: this.props.setPlayer,
                      size: 'fill',
                      variants: a,
                      videoEl: this.props.videoEl,
                      videoId: this.props.source.videoId,
                      viewCount: this.props.viewCount,
                      vmapUrl: this.props.source.vmapUrl
                    })
                  );
                }
              }
            ],
            [
              {
                key: 'set',
                value: function (e) {
                  Te = e;
                }
              },
              {
                key: 'get',
                value: function () {
                  return Te;
                }
              }
            ]
          ),
          n
        );
      })(h.Component);
      var Pe = ['expandedUrl', 'type'],
        Re = function (e) {
          var t = e.onClick,
            n = e.testID,
            r = e.videoConfig,
            i = (r.expandedUrl, r.type, (0, we.Z)(r, Pe));
          return h.createElement(
            p.Z,
            { onClick: t, style: Oe.video, testID: n },
            h.createElement(Le, i)
          );
        },
        Oe = z.Z.create(function (e) {
          return { video: { height: '100%' } };
        }),
        Me = n(17855),
        De = function (e) {
          var t = e.cacheLocationKey,
            n = e.containerAspectRatio,
            r = e.isCondensed,
            i = e.media,
            a = e.mediaMaxHeight,
            s = e.onClick,
            l = e.renderPhoto,
            c = void 0 === l ? Ae : l,
            u = e.renderVideo,
            d = void 0 === u ? Ne : u,
            p = e.singleImageMaxAspectRatio,
            f = e.singleImageMinAspectRatio,
            m = e.testID,
            v = e.withCenterCrop,
            g = void 0 !== v && v,
            y = e.withLink,
            b = void 0 === y || y,
            w = (0, Me.X)({
              locationKey: t,
              itemCount: i.length
            }).getLayoutCacheForIndex,
            E = h.useMemo(
              function () {
                return i.length > 1 ? Ze.Z.COVER : Ze.Z.withinRange(f, p);
              },
              [i.length, p, f]
            ),
            Z = h.useCallback(
              function (e) {
                var t,
                  n = e.index,
                  r = i[n];
                if ('photo' !== r.type)
                  return d({ onClick: s, testID: m, videoConfig: r });
                var l = {
                    mediaMaxHeight: a,
                    onClick: s,
                    testID: m,
                    withCenterCrop: g,
                    withLink: b
                  },
                  u = null !== (t = w(n)) && void 0 !== t ? t : void 0;
                return c(
                  (0, o.Z)(
                    (0, o.Z)({}, l),
                    {},
                    {
                      aspectMode: E,
                      image: r,
                      layoutCache: u,
                      onVariantSelection: Ee.Z,
                      previewMode: !1
                    }
                  )
                );
              },
              [i, a, s, m, g, b, w, c, E, d]
            );
          return h.createElement(_e.ZP, {
            containerAspectRatio: n,
            groupSize: i.length,
            isCondensed: r,
            renderItemAtIndex: Z
          });
        },
        Ae = function (e) {
          return h.createElement(Ce.j, e);
        },
        Ne = function (e) {
          return h.createElement(Re, e);
        };
      const ze = h.memo(De);
      var Be,
        Fe = ['hideAcceptOverlay'];
      const He = (function (e) {
        (0, c.Z)(n, e);
        var t = (0, u.Z)(n);
        function n() {
          return (0, a.Z)(this, n), t.apply(this, arguments);
        }
        return (
          (0, s.Z)(
            n,
            [
              {
                key: 'render',
                value: function () {
                  var e = n.get();
                  if (e) return h.createElement(e, this.props);
                  var t = this.props,
                    r = (t.hideAcceptOverlay, (0, we.Z)(t, Fe));
                  return h.createElement(ze, r);
                }
              }
            ],
            [
              {
                key: 'set',
                value: function (e) {
                  Be = e;
                }
              },
              {
                key: 'get',
                value: function () {
                  return Be;
                }
              }
            ]
          ),
          n
        );
      })(h.Component);
      n(39772), n(62506);
      var We = n(51572),
        Ue = function (e) {
          if (0 === e.length) return null;
          if (e[0].playerState.playbackState === We.q.FINISHED) {
            var t = e.splice(0, 1)[0];
            e.push(t);
          }
          return e[0];
        },
        Ve = { roundRobin: Ue },
        Ge = {
          autoplaySelectionPolicy: Ue,
          minimumVisibilityForAutoplay: 0.25
        },
        je = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Ge;
            (0, a.Z)(this, e), (0, d.Z)(this, '_playerQueue', []);
            var n = t.autoplaySelectionPolicy,
              r = t.minimumVisibilityForAutoplay;
            (this._autoplaySelectionPolicy = n),
              (this._minimumVisibilityForAutoplay = r);
          }
          return (
            (0, s.Z)(e, [
              {
                key: 'isAutoplayGroupEligibleForAutoplay',
                value: function () {
                  var e = this;
                  return (
                    this._playerQueue.filter(function (t) {
                      return (
                        !t.playerState.placement ||
                        t.playerState.placement.visibleFraction() >=
                          e._minimumVisibilityForAutoplay
                      );
                    }).length === this._playerQueue.length
                  );
                }
              },
              {
                key: 'registerAutoplayGroupPlayer',
                value: function (e, t) {
                  var n = !1;
                  if (void 0 !== t) {
                    var r = this._playerQueue.findIndex(function (e) {
                      return void 0 !== e.mediaIndex && e.mediaIndex > t;
                    });
                    r >= 0 &&
                      (this._playerQueue.splice(r, 0, {
                        playerState: e,
                        mediaIndex: t
                      }),
                      (n = !0));
                  }
                  n ||
                    this._playerQueue.push({ playerState: e, mediaIndex: t });
                }
              },
              {
                key: 'signalGroupAutoplayRequest',
                value: function () {
                  var e = this._autoplaySelectionPolicy(this._playerQueue);
                  return e ? e.playerState : null;
                }
              },
              {
                key: 'signalPlaybackComplete',
                value: function (e) {
                  if (!e) {
                    var t = this.signalGroupAutoplayRequest();
                    t &&
                      (t.commandHandlers.onAutoPlayRequest(),
                      (t.playbackState = We.q.AUTO_PLAYING));
                  }
                }
              },
              {
                key: 'unregisterAutoplayGroupPlayer',
                value: function (e) {
                  var t = this._playerQueue.findIndex(function (t) {
                    return t.playerState === e;
                  });
                  this._playerQueue.splice(t, 1);
                }
              }
            ]),
            e
          );
        })();
      (0, d.Z)(je, 'policies', Ve);
      const Ke = function (e) {
        var t = e.description,
          n = e.title;
        return n || t
          ? h.createElement(
              p.Z,
              { style: Ye.metadataContainer },
              n
                ? h.createElement(
                    S.ZP,
                    { style: Ye.metadata, weight: 'bold', withHashflags: !0 },
                    n
                  )
                : null,
              t ? h.createElement(S.ZP, { style: Ye.metadata }, t) : null
            )
          : null;
      };
      var Ye = z.Z.create(function (e) {
          return {
            metadata: { marginBottom: e.spaces.space4 },
            metadataContainer: {
              flex: 1,
              flexDirection: 'column',
              paddingBottom: e.spaces.space4,
              paddingHorizontal: e.spaces.space12,
              paddingTop: e.spaces.space12
            }
          };
        }),
        $e = m().b74bf8b8,
        qe = (function (e) {
          (0, c.Z)(n, e);
          var t = (0, u.Z)(n);
          function n() {
            var e;
            (0, a.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, d.Z)((0, l.Z)(e), '_autoplayGroupEmitter', null),
              (0, d.Z)((0, l.Z)(e), '_inertVideoContainerRef', h.createRef()),
              (0, d.Z)((0, l.Z)(e), '_getMedia', function () {
                var t = e.props,
                  n = t.authorId,
                  r = t.authorScreenName,
                  i = t.caption,
                  o = t.forwardPivotInfo,
                  a = t.hideAcceptOverlay,
                  s = t.loggedInUserId,
                  l = t.mediaAltTranslations,
                  c = t.mediaDetails,
                  u = t.nudges,
                  d = t.onPlaybackStarted,
                  h = t.preventPlayback,
                  p = t.promotedContent,
                  f = t.shouldShowAltLabelAlways,
                  m = t.showAltTranslation,
                  v = t.tweetCreatedAt,
                  g = t.tweetId,
                  y = t.tweetText,
                  b = t.videoAspectRatio,
                  w = t.videoOptions,
                  E = t.withPostPlayback;
                return (
                  !e._autoplayGroupEmitter &&
                    c.length > 1 &&
                    (e._autoplayGroupEmitter = new je()),
                  e._getMediaMemoized(
                    n,
                    r,
                    i,
                    o,
                    u,
                    a,
                    s,
                    l,
                    c,
                    d,
                    h,
                    p,
                    f,
                    m,
                    v,
                    g,
                    y,
                    b,
                    w,
                    E
                  )
                );
              }),
              (0, d.Z)(
                (0, l.Z)(e),
                '_getMediaMemoized',
                (0, v.Z)(function (t, n, r, i, a, s, l) {
                  var c =
                      arguments.length > 7 && void 0 !== arguments[7]
                        ? arguments[7]
                        : {},
                    u = arguments.length > 8 ? arguments[8] : void 0,
                    d = arguments.length > 9 ? arguments[9] : void 0,
                    h = arguments.length > 10 ? arguments[10] : void 0,
                    p = arguments.length > 11 ? arguments[11] : void 0,
                    f = arguments.length > 12 ? arguments[12] : void 0,
                    m = arguments.length > 13 ? arguments[13] : void 0,
                    v = arguments.length > 14 ? arguments[14] : void 0,
                    y = arguments.length > 15 ? arguments[15] : void 0,
                    b = arguments.length > 16 ? arguments[16] : void 0,
                    E = arguments.length > 17 ? arguments[17] : void 0,
                    Z = arguments.length > 18 ? arguments[18] : void 0,
                    _ = arguments.length > 19 ? arguments[19] : void 0;
                  return (0, g.Z)(u, function (u, g) {
                    var C = u.expanded_url;
                    if (!C) return null;
                    var x = {
                      pathname: C,
                      state: { forwardPivotInfo: i, nudges: a }
                    };
                    if ('photo' === u.type) {
                      var S = 'photo' === u.type && u.original_info,
                        k = D(u);
                      return (
                        S &&
                        k && {
                          type: 'photo',
                          accessibilityLabel: m
                            ? c[u.id_str]
                            : u.ext_alt_text || $e,
                          accessibilityDescribedBy: r
                            ? 'caption-'.concat(y)
                            : void 0,
                          backgroundColor: O(u),
                          cropCandidates: M(u),
                          expandedUrl: x,
                          height: k.height,
                          id_str: u.id_str,
                          shouldShowAltLabel: !(
                            !u.ext_alt_text ||
                            (t !== l && !f)
                          ),
                          url: k.url,
                          width: k.width
                        }
                      );
                    }
                    if (le(u)) {
                      var T = u,
                        I = se(w.Z.forTweet(y), T, void 0, i, f),
                        L = e._autoplayGroupEmitter
                          ? {
                              autoplayGroupEmitter: e._autoplayGroupEmitter,
                              mediaIndex: g
                            }
                          : void 0;
                      return (
                        I &&
                        (0, o.Z)(
                          (0, o.Z)((0, o.Z)({}, I), Z),
                          {},
                          {
                            additionalMediaInfo: T.additional_media_info,
                            aspectRatio: E || I.aspectRatio,
                            authorScreenName: n,
                            autoplayGroupOptions: L,
                            expandedUrl: x,
                            hideDataSaverAcceptOverlay: s,
                            onPlaybackStarted: d,
                            preventPlayback: h,
                            promotedContent: p,
                            tweetCreatedAt: v,
                            tweetId: y,
                            tweetText: b,
                            withPostPlayback: _,
                            type: T.type
                          }
                        )
                      );
                    }
                    return null;
                  });
                })
              ),
              (0, d.Z)((0, l.Z)(e), '_getSourceUser', function () {
                var t = e.props.mediaDetails;
                return (
                  t &&
                  t[0] &&
                  t[0].additional_media_info &&
                  t[0].additional_media_info.source_user
                );
              }),
              (0, d.Z)((0, l.Z)(e), '_getOpenPhotoModal', function (t) {
                return function () {
                  var n,
                    r = e.props.onClick,
                    i =
                      'string' == typeof t[0].expandedUrl
                        ? t[0].expandedUrl
                        : null === (n = t[0].expandedUrl) || void 0 === n
                          ? void 0
                          : n.pathname;
                  null == r || r(),
                    i && (null === ye.ZP || void 0 === ye.ZP || ye.ZP.push(i));
                };
              }),
              e
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !(0, y.Z)(this.props, e);
                }
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  if (this._inertVideoContainerRef.current) {
                    var e = this._inertVideoContainerRef.current;
                    e.hasAttribute('inert') || e.setAttribute('inert', '');
                  }
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.hasSensitiveMedia,
                    r = t.nativeID,
                    i = t.style,
                    o = t.withHalvedMediaSize;
                  return h.createElement(Z.ZP.UseProps, null, function (t) {
                    var a = t.canVerifiedCrawlerConsumeSensitiveMedia,
                      s = t.sensitiveMediaWarningsEnabled,
                      l = t.tweetMediaItemImmersiveViewerEntryPoint,
                      c = t.withEdgeToEdgeContent,
                      u = t.withVodTweetDetailAttribution,
                      d = e.sensitiveMediaWarnings,
                      f = d.size && s();
                    return h.createElement(
                      k.Z.Provider,
                      { namespace: { element: 'media' } },
                      h.createElement(
                        p.Z,
                        {
                          nativeID: r,
                          style: [o ? Xe.halvedMediaSize : null, i]
                        },
                        a() || (!n && !d.size)
                          ? e._renderContent(l())
                          : h.createElement(
                              ge,
                              {
                                revealableTombstoneConfig: f
                                  ? ge.sensitiveMediaWarningTombstoneConfig
                                  : ge.sensitiveMediaTombstoneConfig,
                                sensitiveMediaWarnings: f ? d : void 0,
                                withRoundedCorners: !c()
                              },
                              e._renderContent(l())
                            ),
                        e._renderMediaCaption(),
                        e._renderMediaTags(),
                        e._renderMediaAttribution(u())
                      )
                    );
                  });
                }
              },
              {
                key: '_renderContent',
                value: function (e) {
                  var t = this.props,
                    n = t.customHoverBackgroundColor,
                    r = t.mediaContentStyles,
                    i = t.showBorder,
                    o = t.showRoundCorners,
                    a = this._getMedia(),
                    s = null;
                  e && this._isFirstMediaItemVideo()
                    ? (s = this._renderVideo(e))
                    : a.length >= 1
                      ? (s = this._renderMedia())
                      : this._isFirstMediaItemVideo() &&
                        (s = this._renderVideo());
                  var l = a.length >= 1 || this._isFirstMediaItemVideo(),
                    c = i && l,
                    u = a.length
                      ? _.Z.generate({
                          backgroundColor: 'transparent',
                          color: z.Z.theme.colors.primary,
                          withFocusWithinFocusRing: !0,
                          customHoverBackgroundColor: n
                        })
                      : null;
                  return s
                    ? h.createElement(
                        C.Z,
                        {
                          interactiveStyles: u,
                          style: [
                            c && Xe.itemWithBorder,
                            o && Xe.itemWithRoundCorners,
                            r
                          ]
                        },
                        s,
                        this._renderMediaMetadata()
                      )
                    : null;
                }
              },
              {
                key: '_renderMedia',
                value: function () {
                  var e = this.props,
                    t = e.cacheLocationKey,
                    n = e.containerAspectRatio,
                    r = e.enableKeyboardShortcuts,
                    i = e.hideAcceptOverlay,
                    o = e.isCondensed,
                    a = e.mediaMaxHeight,
                    s = e.onClick,
                    l = e.renderPhoto,
                    c = e.renderVideo,
                    u = e.singleImageMaxAspectRatio,
                    p = e.singleImageMinAspectRatio,
                    f = e.withCenterCrop,
                    m = e.withLink,
                    v = this._getMedia();
                  return h.createElement(
                    x.Z,
                    {
                      enabled: r,
                      handlers: (0, d.Z)(
                        {},
                        x.Z.shortcuts.openMediaModal,
                        this._getOpenPhotoModal(v)
                      )
                    },
                    h.createElement(He, {
                      cacheLocationKey: t,
                      containerAspectRatio: n,
                      hideAcceptOverlay: i,
                      isCondensed: o,
                      media: v,
                      mediaMaxHeight: a,
                      onClick: s,
                      renderPhoto: l,
                      renderVideo: c,
                      singleImageMaxAspectRatio: u,
                      singleImageMinAspectRatio: p,
                      withCenterCrop: f,
                      withLink: m
                    })
                  );
                }
              },
              {
                key: '_renderVideo',
                value: function (e) {
                  var t = this.props,
                    n = t.authorScreenName,
                    r = t.caption,
                    i = t.forwardPivotInfo,
                    a = t.hideAcceptOverlay,
                    s = t.mediaDetails,
                    l = t.onPlaybackStarted,
                    c = t.parentTweetId,
                    u = t.preventPlayback,
                    d = t.promotedContent,
                    f = t.shouldShowAltLabelAlways,
                    m = t.tweetCreatedAt,
                    v = t.tweetId,
                    g = t.tweetText,
                    y = t.videoAspectRatio,
                    b = t.videoOptions,
                    E = t.withPostPlayback,
                    Z = s[0],
                    _ = Z && 'photo' !== Z.type ? Z : void 0,
                    x = Z && 'video' === Z.type,
                    S = _ && se(w.Z.forTweet(v), _, void 0, i, f);
                  if (_ && S) {
                    var k = (0, o.Z)(
                      (0, o.Z)((0, o.Z)({}, S), b),
                      {},
                      {
                        additionalMediaInfo: _.additional_media_info,
                        aspectRatio: y || S.aspectRatio,
                        authorScreenName: n,
                        hideDataSaverAcceptOverlay: a,
                        onPlaybackStarted: l,
                        parentTweetId: c,
                        preventPlayback: u,
                        promotedContent: d,
                        tweetCreatedAt: m,
                        tweetId: v,
                        tweetText: g,
                        withPostPlayback: E
                      }
                    );
                    return x && e
                      ? h.createElement(
                          C.Z,
                          {
                            accessibilityDescribedBy: r
                              ? 'caption-'.concat(v)
                              : void 0,
                            accessibilityLabel: S.accessibilityLabel,
                            link: e,
                            testID:
                              'tweet-media-video-interaction-link-'.concat(v)
                          },
                          h.createElement(
                            p.Z,
                            { ref: this._inertVideoContainerRef },
                            h.createElement(Le, k)
                          )
                        )
                      : h.createElement(Le, k);
                  }
                  return null;
                }
              },
              {
                key: '_renderMediaMetadata',
                value: function () {
                  var e = this.props,
                    t = e.displayMediaMetadata,
                    n = e.mediaDetails,
                    r = (0, i.Z)(n, 1)[0].additional_media_info || {},
                    o = r.description,
                    a = r.title;
                  return t
                    ? h.createElement(Ke, { description: o, title: a })
                    : null;
                }
              },
              {
                key: '_renderMediaTags',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    r = n.displayMediaTags,
                    i = n.loggedInUserId,
                    o = n.mediaDetails,
                    a = n.mediaTagsLink,
                    s = n.onClickMediaTags,
                    l = n.withMediaTagsIcon,
                    c =
                      ((e = o),
                      (t = (0, V.Z)(e, j).filter(function (e) {
                        return 'user' === e.type;
                      })),
                      (0, G.Z)(t, function (e) {
                        return e.user_id;
                      }));
                  return r && a && c.length
                    ? h.createElement(F, {
                        linkPath: a,
                        loggedInUserId: i,
                        onClick: s,
                        size: l ? 'body' : 'subtext2',
                        style: Xe.mediaTags,
                        users: c,
                        withIcon: l
                      })
                    : null;
                }
              },
              {
                key: '_renderMediaAttribution',
                value: function (e) {
                  var t = this.props,
                    n = t.displayMediaAttribution,
                    r = t.mediaDetails,
                    i = t.withMediaTagsIcon,
                    o = this._getSourceUser(),
                    a = e
                      ? (function (e) {
                          if (oe(e)) return e.source_status_id_str;
                        })(r[0])
                      : void 0;
                  return n && o
                    ? h.createElement(P, {
                        size: i ? 'body' : 'subtext2',
                        sourceTweetId: a,
                        style: Xe.mediaAttribution,
                        userAffiliateBadgeInfo: o.highlightedLabel,
                        userIsBlueVerified: o.is_blue_verified,
                        userIsProtected: o.protected,
                        userIsVerified: o.verified,
                        userName: o.name,
                        userScreenName: o.screen_name,
                        userVerifiedType: o.verified_type
                      })
                    : null;
                }
              },
              {
                key: '_isFirstMediaItemVideo',
                value: function () {
                  var e = this.props.mediaDetails;
                  return e[0] && le(e[0]);
                }
              },
              {
                key: '_renderMediaCaption',
                value: function () {
                  var e = this.props,
                    t = e.caption,
                    n = e.renderCaption,
                    r = e.tweetId;
                  return t
                    ? h.createElement(
                        p.Z,
                        {
                          nativeID: 'caption-'.concat(r),
                          style: Xe.mediaCaption
                        },
                        n(t)
                      )
                    : null;
                }
              },
              {
                key: 'sensitiveMediaWarnings',
                get: function () {
                  var e = this.props.mediaDetails;
                  return (0, b.Z)(
                    e.flatMap(function (e) {
                      var t = e.sensitive_media_warning;
                      return t
                        ? Object.keys(t).filter(function (e) {
                            return t[e];
                          })
                        : [];
                    })
                  );
                }
              }
            ]),
            n
          );
        })(h.Component);
      (0, d.Z)(qe, 'defaultProps', {
        displayMediaAttribution: !1,
        displayMediaTags: !0,
        enableKeyboardShortcuts: !1,
        hasSensitiveMedia: !1,
        isCondensed: !1,
        mediaDetails: [],
        renderCaption: function (e) {
          return h.createElement(
            be.Z,
            (0, r.Z)({ color: E.gZ.gray700, size: 'subtext2' }, e)
          );
        },
        showBorder: !0,
        showRoundCorners: !0,
        singleImageMaxAspectRatio: 16 / 9,
        singleImageMinAspectRatio: 16 / 9,
        withCenterCrop: !1,
        withLink: !0,
        withMediaTagsIcon: !1
      });
      var Xe = z.Z.create(function (e) {
        return {
          halvedMediaSize: { minWidth: 2 * e.spacesPx.space72, width: '50%' },
          itemWithBorder: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: e.colors.nestedBorderColor
          },
          itemWithRoundCorners: {
            borderRadius: e.borderRadii.xLarge,
            overflow: 'hidden'
          },
          mediaAttribution: { marginTop: e.spaces.space4 },
          mediaTags: { marginTop: e.spaces.space4 },
          mediaCaption: { marginTop: e.spaces.space8 }
        };
      });
      const Qe = qe;
    },
    89857: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => f });
      var r = n(67294),
        i = n(24404),
        o = n(67177),
        a = n(74387),
        s = n.n(a),
        l = n(86034),
        c = n(92288),
        u = n(4469),
        d = n(64123),
        h = s().a897c4d6,
        p = d.Z.create(function (e) {
          return {
            middotGroup: { display: 'inline' },
            displayNone: { display: 'none' }
          };
        });
      const f = function (e) {
        var t = e.linkColor,
          n = void 0 === t ? 'link' : t,
          a = e.renderCoinCount,
          d = e.renderEditCallout,
          f = e.renderPlace,
          m = e.renderTimestamp,
          v = e.renderViewCount,
          g = e.style,
          y =
            null == d
              ? void 0
              : d({ editType: 'latest', textMode: 'standalone' }),
          b = (0, u.b)(),
          w = y
            ? r.createElement(
                r.Fragment,
                null,
                y,
                r.createElement(i.Z, { nativeID: b, style: p.displayNone }, h)
              )
            : null,
          E = null == f ? void 0 : f(),
          Z =
            null == m ? void 0 : m({ accessibilityDescribedBy: b, prefix: w }),
          _ = E
            ? r.createElement(
                s().I18NFormatMessage,
                { $i18n: 'ge9aefd5' },
                Z,
                E
              )
            : Z;
        return r.createElement(
          o.Z,
          { style: g },
          r.createElement(
            c.Z,
            { style: p.middotGroup },
            r.createElement(l.ZP, { color: n }, _),
            null == v ? void 0 : v(),
            null == a ? void 0 : a()
          )
        );
      };
    },
    14381: (e, t, n) => {
      'use strict';
      n.d(t, { ZP: () => f });
      var r = n(15671),
        i = n(43144),
        o = n(60136),
        a = n(98557),
        s = n(4942),
        l = (n(21057), n(68932), n(67294)),
        c = n(67177),
        u = n(68896),
        d = n(66799),
        h = n(12011),
        p = n(64123),
        f = (function (e) {
          (0, o.Z)(n, e);
          var t = (0, a.Z)(n);
          function n() {
            return (0, r.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function () {
                  switch (this._getGroupSize()) {
                    case 0:
                      return null;
                    case 1:
                      return this._renderGroupOf1();
                    case 2:
                      return this._renderGroupOf2();
                    case 3:
                      return this._renderGroupOf3();
                    case 4:
                      return this._renderGroupOf4();
                    case 5:
                      return this._renderGroupOf5();
                    default:
                      return this._renderGroupOf6();
                  }
                }
              },
              {
                key: '_renderGroupOf1',
                value: function () {
                  return this._renderImageAtIndex(0, null);
                }
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return l.createElement(
                    m,
                    { containerAspectRatio: this.props.containerAspectRatio },
                    this._renderImageInGroup(0, y.gutterRight),
                    this._renderImageInGroup(1)
                  );
                }
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.containerAspectRatio,
                    r = t.isCondensed;
                  return l.createElement(h.ZP.UseProps, null, function (t) {
                    var i = (0, t.withEdgeToEdgeContent)() && !r,
                      o = i ? 3 : n,
                      a = i ? y.gutterRight : y.gutterBottom,
                      s = i ? l.Fragment : v;
                    return l.createElement(
                      m,
                      { containerAspectRatio: o },
                      e._renderImageInGroup(0, y.gutterRight),
                      l.createElement(
                        s,
                        null,
                        e._renderImageInGroup(1, a),
                        e._renderImageInGroup(2)
                      )
                    );
                  });
                }
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  var e = this;
                  return l.createElement(h.ZP.UseProps, null, function (t) {
                    var n = t.withEdgeToEdgeContent;
                    return l.createElement(
                      m,
                      {
                        column: !0,
                        containerAspectRatio: n()
                          ? 1
                          : e.props.containerAspectRatio
                      },
                      l.createElement(
                        g,
                        { style: y.gutterBottom },
                        e._renderImageInGroup(0, y.gutterRight),
                        e._renderImageInGroup(1)
                      ),
                      l.createElement(
                        g,
                        null,
                        e._renderImageInGroup(2, y.gutterRight),
                        e._renderImageInGroup(3)
                      )
                    );
                  });
                }
              },
              {
                key: '_renderGroupOf5',
                value: function () {
                  return l.createElement(
                    m,
                    {
                      column: !0,
                      containerAspectRatio: this.props.containerAspectRatio
                    },
                    l.createElement(
                      g,
                      { style: y.gutterBottom },
                      this._renderImageInGroup(0, y.gutterRight),
                      this._renderImageInGroup(1)
                    ),
                    l.createElement(
                      g,
                      null,
                      this._renderImageInGroup(2, y.gutterRight),
                      this._renderImageInGroup(3, y.gutterRight),
                      this._renderImageInGroup(4)
                    )
                  );
                }
              },
              {
                key: '_renderGroupOf6',
                value: function () {
                  return l.createElement(
                    m,
                    {
                      column: !0,
                      containerAspectRatio: this.props.containerAspectRatio
                    },
                    l.createElement(
                      g,
                      { style: y.gutterBottom },
                      this._renderImageInGroup(0, y.gutterRight),
                      this._renderImageInGroup(1, y.gutterRight),
                      this._renderImageInGroup(2)
                    ),
                    l.createElement(
                      g,
                      null,
                      this._renderImageInGroup(3, y.gutterRight),
                      this._renderImageInGroup(4, y.gutterRight),
                      this._renderImageInGroup(5)
                    )
                  );
                }
              },
              {
                key: '_renderImageInGroup',
                value: function (e, t) {
                  return this._renderImageAtIndex(e, [
                    y.item,
                    y.relativePositioning,
                    t
                  ]);
                }
              },
              {
                key: '_renderImageAtIndex',
                value: function (e, t) {
                  return l.createElement(
                    c.Z,
                    { style: t },
                    this.props.renderItemAtIndex({ index: e })
                  );
                }
              },
              {
                key: '_getGroupSize',
                value: function () {
                  var e = this.props.groupSize;
                  return (
                    0 === e &&
                      d.Z.report(
                        new Error('TweetPhotos: empty array of images received')
                      ),
                    Math.min(e, n.maxGroupSize)
                  );
                }
              }
            ]),
            n
          );
        })(l.Component);
      (0, s.Z)(f, 'maxGroupSize', 6),
        (0, s.Z)(f, 'defaultProps', { isCondensed: !1 });
      var m = function (e) {
          var t = e.children,
            n = e.containerAspectRatio,
            r = void 0 === n ? p.Z.theme.aspectRatios.landscape : n,
            i = e.column,
            o = void 0 !== i && i;
          return l.createElement(
            u.Z,
            { ratio: r },
            l.createElement(
              c.Z,
              { style: [y.wideContainer, o ? y.column : y.row] },
              t
            )
          );
        },
        v = function (e) {
          var t = e.children,
            n = e.style;
          return l.createElement(c.Z, { style: [n, y.item, y.column] }, t);
        },
        g = function (e) {
          var t = e.children,
            n = e.style;
          return l.createElement(c.Z, { style: [n, y.item, y.row] }, t);
        },
        y = p.Z.create(function (e) {
          return {
            wideContainer: { width: '100%', height: '100%' },
            row: { flexDirection: 'row' },
            column: { flexDirection: 'column' },
            gutterRight: { marginEnd: '2px' },
            gutterBottom: { marginBottom: '2px' },
            item: { flexGrow: 1, flexBasis: 0 },
            relativePositioning: { position: 'relative' }
          };
        });
    },
    11934: (e, t, n) => {
      'use strict';
      n.d(t, { j: () => l });
      var r = n(67294),
        i = n(5509),
        o = n(2883),
        a = n(32492),
        s = n(64123),
        l = function (e) {
          var t = e.aspectMode,
            n = e.image,
            s = e.layoutCache,
            l = e.mediaMaxHeight,
            u = e.onClick,
            d = e.onVariantSelection,
            h = e.previewMode,
            p = e.testID,
            f = e.withCenterCrop,
            m = e.withLink,
            v =
              'string' == typeof n.expandedUrl
                ? { pathname: n.expandedUrl }
                : n.expandedUrl;
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              o.Z,
              {
                accessibilityDescribedBy: n.accessibilityDescribedBy,
                interactiveStyles: null,
                link: m ? v : void 0,
                onClick: u,
                style: c.image
              },
              r.createElement(i.Z, {
                accessibilityLabel: n.accessibilityLabel,
                aspectMode: t,
                backgroundColor: n.backgroundColor,
                cropCandidates: n.cropCandidates,
                image: n,
                layoutCache: s,
                mediaMaxHeight: l,
                onVariantSelection: d,
                previewMode: h,
                testID: p,
                withCenterCrop: f,
                withLoadingIndicator: !0
              })
            ),
            n.shouldShowAltLabel
              ? r.createElement(a.Z, {
                  align: 'left',
                  altLabel: n.accessibilityLabel
                })
              : null
          );
        },
        c = s.Z.create(function (e) {
          return { image: { height: '100%' } };
        });
    },
    17855: (e, t, n) => {
      'use strict';
      n.d(t, { X: () => d });
      var r = n(15671),
        i = n(43144),
        o = n(4942),
        a = (n(34338), n(21057), n(68932), n(67294)),
        s = n(5509),
        l = n(66799),
        c = n(14381),
        u = (function () {
          function e() {
            (0, r.Z)(this, e);
          }
          return (
            (0, i.Z)(e, null, [
              {
                key: '_generateKey',
                value: function (e) {
                  var t = e.groupSize,
                    n = e.locationKey,
                    r = e.photoIndexInGroup;
                  return 'location:'
                    .concat(n, '_layout:')
                    .concat(t, '_index:')
                    .concat(r);
                }
              },
              {
                key: 'getLayoutCache',
                value: function (e) {
                  var t = e.groupSize,
                    n = e.locationKey,
                    r = e.photoIndexInGroup,
                    i = Math.max(Math.min(t, c.ZP.maxGroupSize), 1),
                    o = this._generateKey({
                      groupSize: i,
                      locationKey: n,
                      photoIndexInGroup: r
                    });
                  return (
                    this.cache[o] || (this.cache[o] = s.Z.createLayoutCache()),
                    this.cache[o]
                  );
                }
              }
            ]),
            e
          );
        })();
      (0, o.Z)(u, 'cache', {});
      var d = function (e) {
        var t = e.itemCount,
          n = e.locationKey;
        a.useEffect(
          function () {
            0 === t &&
              l.Z.report(
                new Error('TweetPhotos: empty array of images received')
              );
          },
          [t]
        );
        var r = a.useCallback(
          function (e) {
            var r;
            return n &&
              null !==
                (r = u.getLayoutCache({
                  locationKey: n,
                  groupSize: t,
                  photoIndexInGroup: e
                })) &&
              void 0 !== r
              ? r
              : null;
          },
          [t, n]
        );
        return a.useMemo(
          function () {
            return { getLayoutCacheForIndex: r };
          },
          [r]
        );
      };
    },
    82089: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => d });
      var r = n(87462),
        i = n(1413),
        o = (n(50886), n(67294)),
        a = n(48778),
        s = n(14381),
        l = n(11934),
        c = n(17855),
        u = function (e) {
          var t = e.cacheLocationKey,
            n = e.containerAspectRatio,
            u = e.images,
            d = e.isCondensed,
            h = e.mediaMaxHeight,
            p = e.onClick,
            f = e.onVariantSelection,
            m = e.previewMode,
            v = e.singleImageMaxAspectRatio,
            g = e.singleImageMinAspectRatio,
            y = e.testID,
            b = e.withCenterCrop,
            w = void 0 !== b && b,
            E = e.withLink,
            Z = void 0 === E || E,
            _ = (0, c.X)({
              locationKey: t,
              itemCount: u.length
            }).getLayoutCacheForIndex,
            C = o.useMemo(
              function () {
                return u.length > 1 ? a.Z.COVER : a.Z.withinRange(g, v);
              },
              [u.length, v, g]
            ),
            x = o.useMemo(
              function () {
                return u.map(function (e) {
                  return (0, i.Z)({ type: 'photo' }, e);
                });
              },
              [u]
            ),
            S = o.useCallback(
              function (e) {
                var t,
                  n = e.index,
                  i = {
                    mediaMaxHeight: h,
                    onClick: p,
                    onVariantSelection: f,
                    previewMode: m,
                    testID: y,
                    withCenterCrop: w,
                    withLink: Z
                  },
                  a = x[n],
                  s = null !== (t = _(n)) && void 0 !== t ? t : void 0;
                return o.createElement(
                  l.j,
                  (0, r.Z)({}, i, { aspectMode: C, image: a, layoutCache: s })
                );
              },
              [x, h, p, f, m, y, w, Z, _, C]
            );
          return o.createElement(s.ZP, {
            containerAspectRatio: n,
            groupSize: u.length,
            isCondensed: d,
            renderItemAtIndex: S
          });
        };
      const d = o.memo(u);
    },
    93269: (e, t, n) => {
      'use strict';
      n.d(t, { ZP: () => O });
      var r = n(15671),
        i = n(43144),
        o = n(97326),
        a = n(60136),
        s = n(98557),
        l = n(4942),
        c = (n(41830), n(34338), n(34284), n(67294)),
        u = n(67177),
        d = n(86034),
        h = n(64123),
        p = n(29439),
        f = n(93433),
        m =
          (n(25728),
          n(60228),
          n(38077),
          n(70560),
          n(752),
          n(21694),
          n(76265),
          n(78730),
          n(79307),
          n(68932),
          n(12826),
          n(98742),
          n(22234)),
        v = (n(76801), n(43843), n(74387)),
        g = n.n(v),
        y = n(90563),
        b = g().ga629a8c,
        w = function (e, t, n) {
          return e
            ? c.createElement(
                y.Z,
                { screenName: t },
                c.createElement(
                  d.ZP,
                  {
                    dir: 'ltr',
                    link: 'https://twitter.com/'.concat(t),
                    onClick: n
                  },
                  '@'.concat(t)
                )
              )
            : c.createElement(d.ZP, { dir: 'ltr' }, '@'.concat(t));
        },
        E = function (e) {
          var t = e.children,
            n = e.onClick,
            r = e.viewMorePath;
          return c.createElement(
            d.ZP,
            { accessibilityLabel: b, link: r, onClick: n },
            t
          );
        },
        Z = function (e) {
          return e.screen_name;
        },
        _ = function (e, t) {
          return e.find(function (e) {
            return e.id_str === t;
          });
        },
        C = 'NotIncluded',
        x = 'DirectReply',
        S = 'NonDirectReply',
        k = function (e) {
          var t = e.displayTextRange,
            n = e.inReplyToName,
            r = e.inReplyToScreenName,
            i = e.inReplyToUserIdStr,
            o = e.userMentionsEntities,
            a = o.filter(function (e) {
              return e.indices[0] < t[0] || e.id_str === i;
            }),
            s = (0, f.Z)(a),
            l = _(o, i),
            c = n || r;
          return (
            !l &&
              i &&
              c &&
              r &&
              ((l = { id_str: i, name: c, screen_name: r, indices: [] }),
              s.push(l)),
            (0, m.Z)(s, function (e) {
              return e.id_str;
            })
          );
        },
        T = Object.freeze({
          Threaded: 'threaded',
          Isolated: 'isolated',
          None: 'none'
        }),
        I = [T.Threaded, T.Isolated, T.None],
        L = Object.freeze({ all: 'all', name: 'name', none: 'none' }),
        P = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, s.Z)(n);
          function n() {
            var e;
            (0, r.Z)(this, n);
            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
              a[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(a))),
              (0, l.Z)((0, o.Z)(e), '_handleClick', function (t) {
                var n = e.props,
                  r = n.displayTextRange,
                  i = n.inReplyToName,
                  o = n.inReplyToScreenName,
                  a = n.inReplyToUserIdStr,
                  s = n.onClick,
                  l = n.userMentionsEntities;
                s &&
                  s(
                    t,
                    k({
                      displayTextRange: r,
                      inReplyToName: i,
                      inReplyToScreenName: o,
                      inReplyToUserIdStr: a,
                      userMentionsEntities: l
                    }).length
                  );
              }),
              e
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.displayTextRange,
                    n = e.inReplyToName,
                    r = e.inReplyToScreenName,
                    i = e.inReplyToStatusIdStr,
                    o = e.inReplyToUserIdStr,
                    a = e.linkColor,
                    s = e.linkType,
                    l = e.loggedInUserId,
                    h = e.nativeID,
                    f = e.size,
                    m = e.style,
                    v = e.tweetPermalink,
                    y = e.unmentionedUserIds,
                    b = e.userMentionsEntities,
                    T = (function (e) {
                      var t,
                        n = e.displayTextRange,
                        r = e.inReplyToName,
                        i = e.inReplyToScreenName,
                        o = e.inReplyToUserIdStr,
                        a = e.linkify,
                        s = e.loggedInUserId,
                        l = e.onClick,
                        u = e.tweetPermalink,
                        h = e.unmentionedUserIds,
                        f = e.userMentionsEntities,
                        m = o,
                        v = k({
                          displayTextRange: n,
                          inReplyToName: r,
                          inReplyToScreenName: i,
                          inReplyToUserIdStr: o,
                          userMentionsEntities: f
                        }),
                        y = {
                          id_str: '',
                          indices: [],
                          name: '',
                          screen_name: ''
                        },
                        b = null !== (t = _(v, m)) && void 0 !== t ? t : y,
                        T = (function (e, t, n, r) {
                          var i = e
                              ? c.createElement(E, {
                                  onClick: n,
                                  viewMorePath: t
                                })
                              : c.createElement('span', null),
                            o = function (e) {
                              return a(e)
                                ? c.createElement(d.ZP, { color: 'link' })
                                : c.createElement('span', null);
                            },
                            a = function (t) {
                              var n = null == r ? void 0 : r.includes(t.id_str);
                              return e && !n;
                            };
                          return {
                            replyToOne: function (e) {
                              var t = e.user,
                                r = w(a(t), Z(t), n);
                              return c.createElement(
                                g().I18NFormatMessage,
                                { $i18n: 'h5970807' },
                                r
                              );
                            },
                            replyToTwo: function (e) {
                              var t = e.userOne,
                                r = e.userTwo,
                                i = w(a(t), Z(t), n),
                                s = w(a(r), Z(r), n),
                                l = o(r);
                              return c.createElement(
                                g().I18NFormatMessage,
                                { $i18n: 'ge01e6a3' },
                                i,
                                c.cloneElement(l, null, g().caddb529),
                                s
                              );
                            },
                            replyToMany: function (e) {
                              var t = e.othersCount,
                                r = e.user,
                                o = w(a(r), Z(r), n);
                              return c.createElement(
                                g().I18NFormatMessage,
                                { $i18n: 'f5a069ab' },
                                o,
                                c.cloneElement(
                                  i,
                                  null,
                                  g().ff31714c({ othersCount: t })
                                )
                              );
                            },
                            indirectReplyToThree: function (e) {
                              var t = e.userOne,
                                r = e.userThree,
                                i = e.userTwo,
                                s = w(a(t), Z(t), n),
                                l = w(a(i), Z(i), n),
                                u = w(a(r), Z(r), n),
                                d = o(r);
                              return c.createElement(
                                g().I18NFormatMessage,
                                { $i18n: 'hd7dd197' },
                                s,
                                l,
                                c.cloneElement(d, null, g().e06c99b7),
                                u
                              );
                            },
                            indirectReplyToMany: function (e) {
                              var t = e.othersCount,
                                r = e.userOne,
                                o = e.userTwo,
                                s = w(a(r), Z(r), n),
                                l = w(a(o), Z(o), n);
                              return c.createElement(
                                g().I18NFormatMessage,
                                { $i18n: 'g4eb2847' },
                                s,
                                l,
                                c.cloneElement(
                                  i,
                                  null,
                                  g().i4e2f96c({ othersCount: t })
                                )
                              );
                            }
                          };
                        })(
                          a,
                          new URL(
                            ''.concat(u, '/people'),
                            'https://twitter.com'
                          ).toString(),
                          l,
                          h
                        ),
                        I = s === m,
                        L = v.some(function (e) {
                          return e.id_str === s;
                        });
                      switch (I ? x : L ? S : C) {
                        case x:
                        case C:
                          switch (v.length) {
                            case 1:
                              return T.replyToOne({ user: b });
                            case 2:
                              var P,
                                R =
                                  null !==
                                    (P = v.find(function (e) {
                                      return e !== b;
                                    })) && void 0 !== P
                                    ? P
                                    : y;
                              return T.replyToTwo({ userOne: b, userTwo: R });
                            case 3:
                              var O = v.filter(function (e) {
                                  return e !== b;
                                }),
                                M = (0, p.Z)(O, 2),
                                D = M[0],
                                A = M[1];
                              return T.indirectReplyToThree({
                                userOne: b,
                                userTwo: D,
                                userThree: A
                              });
                            default:
                              var N,
                                z =
                                  null !==
                                    (N = v.find(function (e) {
                                      return e !== b;
                                    })) && void 0 !== N
                                    ? N
                                    : y;
                              return T.indirectReplyToMany({
                                userOne: b,
                                userTwo: z,
                                othersCount: v.length - 2
                              });
                          }
                        case S:
                          switch (v.length) {
                            case 1:
                              return null;
                            case 2:
                              var B,
                                F =
                                  null !==
                                    (B = v.find(function (e) {
                                      return e !== b;
                                    })) && void 0 !== B
                                    ? B
                                    : y;
                              return T.replyToTwo({ userOne: b, userTwo: F });
                            case 3:
                              var H,
                                W,
                                U =
                                  null !==
                                    (H = v.find(function (e) {
                                      var t = e.id_str;
                                      return t !== s && t !== m;
                                    })) && void 0 !== H
                                    ? H
                                    : y;
                              return T.indirectReplyToThree({
                                userOne: b,
                                userTwo:
                                  null !== (W = _(v, s)) && void 0 !== W
                                    ? W
                                    : y,
                                userThree: U
                              });
                            default:
                              var V;
                              return T.indirectReplyToMany({
                                userOne: b,
                                userTwo:
                                  null !== (V = _(v, s)) && void 0 !== V
                                    ? V
                                    : y,
                                othersCount: v.length - 2
                              });
                          }
                        default:
                          return null;
                      }
                    })({
                      displayTextRange: t,
                      inReplyToName: n,
                      inReplyToScreenName: r,
                      inReplyToUserIdStr: o,
                      tweetPermalink: v,
                      loggedInUserId: l,
                      linkify: s === L.name,
                      onClick: this._handleClick,
                      unmentionedUserIds: y,
                      userMentionsEntities: b
                    });
                  if (s === L.all) {
                    var I =
                      i &&
                      'https://twitter.com/'
                        .concat(r || 'i', '/status/')
                        .concat(i);
                    return c.createElement(
                      d.ZP,
                      { color: a, link: I, nativeID: h, size: f, style: m },
                      T
                    );
                  }
                  return s === L.name
                    ? c.createElement(
                        u.Z,
                        { style: [R.root, m] },
                        c.createElement(
                          d.ZP,
                          { color: 'gray700', nativeID: h, size: f },
                          T
                        )
                      )
                    : c.createElement(
                        d.ZP,
                        { color: 'gray700', nativeID: h, size: f, style: m },
                        T
                      );
                }
              }
            ]),
            n
          );
        })(c.PureComponent);
      (0, l.Z)(P, 'getReplyContextParticipants', k),
        (0, l.Z)(P, 'ReplyContextTypes', T),
        (0, l.Z)(P, 'TweetReplyContextTypes', I),
        (0, l.Z)(P, 'ReplyContextLinkTypes', L),
        (0, l.Z)(P, 'defaultProps', {
          linkColor: 'link',
          linkType: L.name,
          size: 'body',
          userMentionsEntities: []
        });
      var R = h.Z.create(function (e) {
        return { root: { display: 'inline-block' } };
      });
      const O = P;
    },
    89818: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => E });
      var r = n(1413),
        i = n(29439),
        o = (n(37960), n(67294)),
        a = n(67177),
        s = n(55793),
        l = n(56378),
        c = n(12011),
        u = n(43463),
        d = n(67797),
        h = n(64123),
        p = n(24184),
        f = (n(50886), n(34338), n(470), n(64122)),
        m = function (e) {
          var t = e.elbowHeight,
            n = e.style,
            r = e.wideElbow,
            i = e.width;
          return o.createElement(
            a.Z,
            { style: [b.elbowWrapper, { flexBasis: i }, n] },
            o.createElement(a.Z, {
              style: [b.elbow, { height: t, width: r ? 18 : 12 }]
            })
          );
        },
        v = function (e) {
          var t = e.style,
            n = e.width;
          return o.createElement(a.Z, { style: [{ flexBasis: n }, t] });
        },
        g = function (e) {
          var t = e.style,
            n = e.width;
          return o.createElement(
            a.Z,
            { style: [b.lineWrapper, { flexBasis: n }, t] },
            o.createElement(a.Z, { style: b.line })
          );
        },
        y = function (e) {
          var t = e.elbowHeight,
            n = e.style,
            r = e.wideElbow,
            i = e.width;
          return o.createElement(
            a.Z,
            { style: [b.lineElbowWrapper, { flexBasis: i }, n] },
            o.createElement(a.Z, {
              style: [b.elbow, b.lineElbow, { height: t, width: r ? 18 : 12 }]
            }),
            o.createElement(a.Z, { style: b.line })
          );
        },
        b = h.Z.create(function (e) {
          return {
            lineWrapper: { alignItems: 'center' },
            line: (0, r.Z)(
              (0, r.Z)({}, h.Z.absoluteFillObject),
              {},
              {
                backgroundColor: e.colors.gray200,
                marginHorizontal: 'auto',
                width: e.componentDimensions.conversationLineWidth
              }
            ),
            elbowWrapper: { overflow: 'hidden' },
            elbow: {
              marginStart: 'calc(50% - ( '.concat(
                e.componentDimensions.conversationLineWidth,
                'px / 2 ))'
              ),
              borderBottomStartRadius: e.borderRadii.small,
              borderStartWidth: e.componentDimensions.conversationLineWidth,
              borderBottomWidth: e.componentDimensions.conversationLineWidth,
              borderColor: e.colors.gray200,
              borderStyle: 'solid'
            },
            lineElbowWrapper: { alignItems: 'center' },
            lineElbow: {
              marginStart: void 0,
              position: 'absolute',
              start: 'calc(50% - ( '.concat(
                e.componentDimensions.conversationLineWidth,
                'px / 2 ))'
              )
            }
          };
        });
      const w = function (e) {
        var t = e.indents,
          n = e.paddingTop,
          r = e.smallFirstCell,
          i = void 0 !== r && r,
          a = e.style,
          s = e.wideElbow,
          l = void 0 !== s && s,
          c = e.withElbow;
        return o.createElement(
          o.Fragment,
          null,
          t
            ? t.map(function (e, r) {
                var s = r === t.length - 1,
                  u =
                    0 === r
                      ? i
                        ? f.default.getSizeSimple('large')
                        : f.default.getSizeSimple(f.default.defaultSize)
                      : f.default.getSizeSimple('large'),
                  d = ''.concat(u, 'px'),
                  p = 'calc('
                    .concat(n || 0, 'px + ')
                    .concat(h.Z.theme.spaces.space32, ' / 2)'),
                  b =
                    0 === r
                      ? {
                          marginEnd: 'calc(-1 * '.concat(
                            h.Z.theme.spaces.space12,
                            ')'
                          )
                        }
                      : {},
                  w = [a, b];
                if (s) {
                  if ('line' === e.displayType && c)
                    return o.createElement(y, {
                      elbowHeight: p,
                      key: r,
                      style: w,
                      wideElbow: l,
                      width: d
                    });
                  if ('gap' === e.displayType && c)
                    return o.createElement(m, {
                      elbowHeight: p,
                      key: r,
                      style: w,
                      wideElbow: l,
                      width: d
                    });
                }
                return 'line' === e.displayType
                  ? o.createElement(g, { key: r, style: w, width: d })
                  : 'gap' === e.displayType
                    ? o.createElement(v, { key: r, style: w, width: d })
                    : null;
              })
            : null
        );
      };
      function E(e) {
        var t = e.a11yDomIds,
          n = e.accessibilityRole,
          r = void 0 === n ? 'article' : n,
          f = e.avatar,
          m = e.children,
          v = e.footer,
          g = e.header,
          y = e.indents,
          b = e.interactive,
          E = void 0 === b || b,
          _ = e.link,
          C = e.onBlur,
          x = e.onFocus,
          S = e.onPress,
          k = e.testID,
          T = e.usernameContent,
          I = e.withBottomLine,
          L = e.withElbow,
          P = e.withFooterGap,
          R = void 0 === P || P,
          O = e.withFullWidthChildren,
          M = e.withHeader,
          D = void 0 === M || M,
          A = e.withHorizontalPadding,
          N = void 0 === A || A,
          z = e.withTopLine,
          B = e.withUnreadStyles,
          F = d.Z.useAnalytics(),
          H = o.useState(h.Z.theme.spacesPx.space16),
          W = (0, i.Z)(H, 2),
          U = W[0],
          V = W[1],
          G = o.useRef(!0),
          j = c.ZP.useProps().withEdgeToEdgeContent(),
          K = Boolean(_ && E);
        o.useEffect(function () {
          return function () {
            G.current = !1;
          };
        }, []),
          o.useEffect(
            function () {
              y &&
                F.scribe({
                  component: 'tweet',
                  element: 'tree_connectors',
                  action: 'impression'
                });
            },
            [F, y]
          );
        var Y,
          $ = o.useCallback(function (e) {
            G.current && V(e.nativeEvent.layout.height);
          }, []),
          q = o.useContext(p.Z).isDense,
          X = s.ZP.isDesktopOS();
        return (
          (Y =
            q && X
              ? Z.denseDesktopContainer
              : q && !X
                ? Z.denseMobileContainer
                : Z.container),
          o.createElement(
            u.Z,
            {
              accessibilityLabelledBy: t,
              accessibilityRole: r,
              focusable: K,
              link: _,
              onBlur: C,
              onFocus: x,
              onPress: S,
              style: [I && Z.containerOverlap, B && Z.unread, N && Y],
              testID: k,
              withInteractiveStyling: K
            },
            o.createElement(w, {
              indents: y,
              paddingTop: U,
              smallFirstCell: !1,
              style: Z.connectors,
              withElbow: !!L
            }),
            o.createElement(
              a.Z,
              { style: Z.column },
              o.createElement(
                u.Z,
                { style: Z.hoverBox, withInteractiveStyling: !1 },
                D
                  ? o.createElement(
                      a.Z,
                      { onLayout: y ? $ : void 0 },
                      o.createElement(
                        l.Z,
                        {
                          avatarCell: z
                            ? o.createElement(a.Z, {
                                style: [Z.line, Z.lineTop]
                              })
                            : void 0,
                          avatarCellStyle: Z.lineTopContainer,
                          avatarSize:
                            !O && y && y.length > 0 ? 'large' : void 0,
                          cellStyle: Z.header
                        },
                        g || null
                      )
                    )
                  : null,
                o.createElement(
                  l.Z,
                  {
                    avatarCell: f
                      ? o.createElement(
                          o.Fragment,
                          null,
                          f,
                          I
                            ? o.createElement(a.Z, {
                                style: [Z.line, Z.lineBottom]
                              })
                            : null
                        )
                      : void 0,
                    avatarCellStyle: Z.gridColumnLeft,
                    avatarSize: !O && y && y.length > 0 ? 'large' : void 0,
                    cellStyle: [
                      Z.gridColumnRight,
                      R && !j && Z.gridBottomPadding
                    ],
                    style: O && Z.tweetDetailGrid
                  },
                  T,
                  O ? null : m
                ),
                O
                  ? o.createElement(
                      a.Z,
                      { style: R && j && Z.gridBottomPadding },
                      m
                    )
                  : null
              ),
              v
            )
          )
        );
      }
      var Z = h.Z.create(function (e) {
        return {
          containerOverlap: { marginBottom: -1 },
          column: { flexDirection: 'column', flexGrow: 1, flexShrink: 1 },
          connectors: { zIndex: 1 },
          hoverBox: { flexGrow: 1, flexShrink: 1 },
          unread: { backgroundColor: e.colors.unreadCellBackground },
          header: { paddingTop: e.componentDimensions.gutterVertical },
          gridColumnLeft: { alignItems: 'center' },
          gridColumnRight: { flexGrow: 1, justifyContent: 'center' },
          gridBottomPadding: {
            paddingBottom: e.componentDimensions.gutterVertical
          },
          line: {
            backgroundColor: e.colors.gray200,
            marginHorizontal: 'auto',
            width: e.componentDimensions.conversationLineWidth
          },
          lineTopContainer: { marginBottom: e.spaces.space4 },
          lineTop: (0, r.Z)({}, h.Z.absoluteFillObject),
          lineBottom: { marginTop: e.spaces.space4, flexGrow: 1 },
          tweetDetailGrid: { marginBottom: e.spaces.space4 },
          container: {
            flexDirection: 'row',
            paddingStart: e.spaces.space16,
            paddingEnd: e.spaces.space16,
            overflow: 'hidden'
          },
          denseDesktopContainer: {
            flexDirection: 'row',
            paddingStart: e.spaces.space8,
            paddingEnd: e.spaces.space8,
            overflow: 'hidden'
          },
          denseMobileContainer: {
            flexDirection: 'row',
            paddingStart: e.spaces.space2,
            paddingEnd: e.spaces.space2,
            overflow: 'hidden'
          }
        };
      });
    },
    45392: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => T });
      var r = n(37762),
        i = n(29439),
        o = n(87462),
        a = n(45987),
        s = n(1413),
        l = n(93433),
        c = n(15671),
        u = n(43144),
        d = n(97326),
        h = n(60136),
        p = n(98557),
        f = n(4942),
        m =
          (n(34338),
          n(38077),
          n(60228),
          n(76801),
          n(43843),
          n(98742),
          n(50886),
          n(49693),
          n(47522),
          n(70560),
          n(28436),
          n(64043),
          n(57267),
          n(89730),
          n(62506),
          n(67294)),
        v = n(74387),
        g = n.n(v),
        y = n(86034),
        b = n(67079),
        w = n(64123),
        E = n(66545),
        Z = n(67554),
        _ = n(44832);
      var C = [
          'displayTextRange',
          'entities',
          'entityBaseUrl',
          'excludeCardUrl',
          'highlightType',
          'hitHighlights',
          'inlineMediaSpec',
          'lang',
          'linkColor',
          'linkify',
          'nativeID',
          'numberOfLines',
          'onEntityClick',
          'quotedTweetId',
          'quotedTweetPermalink',
          'style',
          'text',
          'transformHashtagLink',
          'transformUrl',
          'underlineLinks',
          'unmentionedUserIds',
          'withCardLinks',
          'withLikedByAuthorType',
          'withMediaLinks',
          'withQuoteLinks',
          'withShowMoreLink',
          'withUnicodeEmojis'
        ],
        x = g().hf3f8e3a,
        S = (function (e) {
          (0, h.Z)(n, e);
          var t = (0, p.Z)(n);
          function n() {
            var e;
            (0, c.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
              i[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, f.Z)((0, d.Z)(e), '_getTextParts', function () {
                var t,
                  n,
                  r = e.props,
                  i = r.displayTextRange,
                  o = r.entities,
                  a = r.entityBaseUrl,
                  c = r.highlightType,
                  u = r.hitHighlights,
                  d = r.linkify,
                  h = r.quotedTweetPermalink,
                  p = r.text,
                  f = r.transformHashtagLink,
                  m = r.unmentionedUserIds,
                  v = r.withQuoteLinks,
                  g = r.withUnicodeEmojis,
                  y = p,
                  b = o,
                  w = o && o.urls && o.urls.length;
                if (
                  h &&
                  !w &&
                  v &&
                  ((y = ''.concat(p, ' ').concat(d ? h.url : h.display)), d)
                ) {
                  var E = (0, l.Z)(p).length + 1;
                  b = (0, s.Z)(
                    (0, s.Z)({ media: [] }, o),
                    {},
                    {
                      urls: [
                        {
                          display_url: h.display,
                          expanded_url: h.expanded,
                          url: h.url,
                          indices: [E, E + h.url.length]
                        }
                      ]
                    }
                  );
                }
                var _ = [0, y.length],
                  C = [(i || _)[0], y.length],
                  x = u || [];
                return (
                  null !== (t = b) &&
                    void 0 !== t &&
                    null !== (n = t.user_mentions) &&
                    void 0 !== n &&
                    n.length &&
                    null != m &&
                    m.length &&
                    (b = (0, s.Z)(
                      (0, s.Z)({}, b),
                      {},
                      {
                        user_mentions: b.user_mentions.filter(function (e) {
                          return !m.includes(e.id_str);
                        })
                      }
                    )),
                  Z.ZP.tweetTextParts(y, C, b, {
                    useHashtagUrl: !0,
                    transformHashtagLink: f,
                    hitHighlights: x,
                    baseUrl: a,
                    renderUnicodeEmojis: g,
                    highlightType: c
                  })
                );
              }),
              e
            );
          }
          return (
            (0, u.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.displayTextRange,
                    i = (t.entities, t.entityBaseUrl, t.excludeCardUrl),
                    c = (t.highlightType, t.hitHighlights, t.inlineMediaSpec),
                    u = t.lang,
                    d = t.linkColor,
                    h = t.linkify,
                    p = t.nativeID,
                    f = t.numberOfLines,
                    v = t.onEntityClick,
                    g = t.quotedTweetId,
                    w = (t.quotedTweetPermalink, t.style),
                    Z = (t.text, t.transformHashtagLink, t.transformUrl),
                    S = t.underlineLinks,
                    T = (t.unmentionedUserIds, t.withCardLinks),
                    R = t.withLikedByAuthorType,
                    O = t.withMediaLinks,
                    M = t.withQuoteLinks,
                    D = t.withShowMoreLink,
                    A = (t.withUnicodeEmojis, (0, a.Z)(t, C)),
                    N = this._getTextParts(),
                    z = N.some(function (e) {
                      return e.entityType === _.Z.MEDIA;
                    }),
                    B = z && !O,
                    F = g && !M,
                    H = (function (e, t) {
                      var n,
                        i = e.slice(),
                        o = t.inlineMediaSpec ? t.inlineMediaSpec.list : [],
                        a = (0, r.Z)(o);
                      try {
                        for (a.s(); !(n = a.n()).done; )
                          for (var s = n.value, c = 0; c < i.length; c++) {
                            var u = L({ media: s, part: i[c] });
                            if (u) {
                              i.splice.apply(i, [c, 1].concat((0, l.Z)(u)));
                              break;
                            }
                          }
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }
                      return i;
                    })(
                      N.map(function (e, t) {
                        var r = t === N.length - 1,
                          o = !!e.tweetId && e.tweetId === g;
                        if (!O && e.entityType === _.Z.MEDIA) return null;
                        if (o && z && e.indices && n[1] === e.indices[1])
                          return null;
                        if (r) {
                          if (o && F && !B) return null;
                          if (
                            !B &&
                            !F &&
                            !T &&
                            i &&
                            (i === e.url || i === e.expandedUrl)
                          )
                            return null;
                        }
                        return e;
                      }).filter(Boolean),
                      this.props
                    ),
                    W = H,
                    U = H.length,
                    V = [],
                    G =
                      null == c
                        ? void 0
                        : c.list.filter(function (e) {
                            return 0 === e.index;
                          });
                  return (
                    G &&
                      G.forEach(function (e) {
                        V.push(null == c ? void 0 : c.render(e.media_id));
                      }),
                    W.forEach(function (t, n) {
                      var i = (function (e) {
                        var t = e.part,
                          n = 0 === e.i,
                          r = e.i === e.count - 1;
                        if (t.entityType === _.Z.TEXT) {
                          if (
                            !''.concat(t.prefix).concat(t.text).trim() &&
                            (r || n)
                          )
                            return null;
                          if (r) {
                            var i = t.text.replace(I, '');
                            t = (0, s.Z)((0, s.Z)({}, t), {}, { text: i });
                          }
                        }
                        return t;
                      })({ i: n, count: U, part: t });
                      if (!i) return null;
                      var o = (function (e, t) {
                        var n;
                        if (
                          !Array.isArray(
                            null === (n = t.inlineMediaSpec) || void 0 === n
                              ? void 0
                              : n.list
                          )
                        )
                          return null;
                        var i,
                          o = [],
                          a = (0, r.Z)(t.inlineMediaSpec.list);
                        try {
                          for (a.s(); !(i = a.n()).done; ) {
                            var s = i.value;
                            P(s, e) && o.push(s);
                          }
                        } catch (e) {
                          a.e(e);
                        } finally {
                          a.f();
                        }
                        return o.length ? o : null;
                      })(i, e.props);
                      o && c
                        ? V.push(
                            m.createElement(
                              m.Fragment,
                              null,
                              m.createElement(E.ZP, {
                                key: n,
                                linkColor: d,
                                linkify: h,
                                onClick: v,
                                part: i,
                                transformUrl: Z,
                                underlineLinks: S
                              }),
                              o.map(function (e) {
                                return m.createElement(
                                  m.Fragment,
                                  { key: e.media_id },
                                  m.createElement(y.ZP, null, '\n'),
                                  c.render(e.media_id)
                                );
                              })
                            )
                          )
                        : V.push(
                            m.createElement(E.ZP, {
                              key: n,
                              linkColor: d,
                              linkify: h,
                              onClick: v,
                              part: i,
                              transformUrl: Z,
                              underlineLinks: S
                            })
                          );
                    }),
                    D &&
                      V.push(
                        m.createElement(
                          y.ZP,
                          {
                            color: 'link',
                            link: D,
                            testID: 'tweet-text-show-more-link'
                          },
                          ' ',
                          x
                        )
                      ),
                    R &&
                      (V.length && V.push(R),
                      V.push(m.createElement(b.ZP, { type: 'likedByAuthor' }))),
                    V.length
                      ? m.createElement(
                          y.ZP,
                          (0, o.Z)({}, A, {
                            children: V,
                            dir: 'auto',
                            lang: u,
                            nativeID: p,
                            numberOfLines: f,
                            style: [k.root, w],
                            testID: 'tweetText'
                          })
                        )
                      : null
                  );
                }
              }
            ]),
            n
          );
        })(m.Component);
      (0, f.Z)(S, 'defaultProps', {
        highlightType: 'bold',
        linkColor: 'link',
        linkify: E.Gh.linkify,
        underlineLinks: !1,
        withCardLinks: !1,
        withMediaLinks: !1,
        withQuoteLinks: !1,
        withShowMoreLink: void 0,
        withUnicodeEmojis: !1
      });
      var k = w.Z.create(function (e) {
        return { root: { position: 'relative' } };
      });
      const T = S;
      var I = /(\s+$)/g;
      function L(e) {
        var t = (0, s.Z)({}, e.part);
        if (!e.part.indices) return null;
        var n = (0, i.Z)(e.part.indices, 2),
          r = n[0],
          o = n[1];
        if (P(e.media, e.part)) {
          var a = e.part.text;
          if (!a) return null;
          var l = (0, s.Z)({}, t);
          l.indices = [r, e.media.index];
          var c = (0, s.Z)({}, t);
          c.indices = [e.media.index, o];
          var u = l.indices[1] - l.indices[0],
            d = c.indices[1] - c.indices[0];
          return (
            l.text && (l.text = a.substring(0, u)),
            c.text && (c.text = a.substring(u, u + d)),
            [l, c]
          );
        }
      }
      function P(e, t) {
        if (!t.indices) return null;
        var n = (0, i.Z)(t.indices, 2),
          r = n[0],
          o = n[1];
        return e.index > r && e.index <= o;
      }
    },
    64122: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => he });
      var r = n(87462),
        i = n(15671),
        o = n(43144),
        a = n(60136),
        s = n(98557),
        l = n(4942),
        c = n(67294),
        u = n(12011),
        d = n(2883),
        h = n(64123),
        p = n(90563),
        f = n(71002),
        m = (n(21057), n(68932), n(37960), n(45987)),
        v = (n(70560), n(67177)),
        g =
          (n(41830),
          n(34284),
          n(6203),
          n(34338),
          Object.freeze({
            circle: 'circle',
            hex: 'hex',
            square: 'square',
            none: 'none',
            'circle-svg': 'circle-svg',
            'circle-shape-func': 'circle-shape-func',
            'circle-shape-func-crop': 'circle-shape-func-crop'
          })),
        y = {};
      function b(e) {
        var t = e.height,
          n = e.metadata,
          r = void 0 === n ? {} : n,
          i = e.name,
          o = e.svg,
          a = e.width,
          s = [0, 0, a, t].join(' '),
          l = 'scale('.concat(1 / a, ' ').concat(1 / t, ')');
        y[i] = {
          width: a,
          height: t,
          viewBox: s,
          clipPath: function (t) {
            return e.clipPath || 'url(#'.concat(t, ')');
          },
          transform: l,
          svg: o,
          metadata: r
        };
      }
      b({
        name: g.hex,
        width: 200,
        height: 188,
        svg: function (e) {
          return c.createElement(
            'path',
            (0, r.Z)(
              {
                d: 'M193.248 69.51C185.95 54.1634 177.44 39.4234 167.798 25.43L164.688 20.96C160.859 15.4049 155.841 10.7724 149.998 7.3994C144.155 4.02636 137.633 1.99743 130.908 1.46004L125.448 1.02004C108.508 -0.340012 91.4873 -0.340012 74.5479 1.02004L69.0879 1.46004C62.3625 1.99743 55.8413 4.02636 49.9981 7.3994C44.155 10.7724 39.1367 15.4049 35.3079 20.96L32.1979 25.47C22.5561 39.4634 14.0458 54.2034 6.74789 69.55L4.39789 74.49C1.50233 80.5829 0 87.2441 0 93.99C0 100.736 1.50233 107.397 4.39789 113.49L6.74789 118.43C14.0458 133.777 22.5561 148.517 32.1979 162.51L35.3079 167.02C39.1367 172.575 44.155 177.208 49.9981 180.581C55.8413 183.954 62.3625 185.983 69.0879 186.52L74.5479 186.96C91.4873 188.32 108.508 188.32 125.448 186.96L130.908 186.52C137.638 185.976 144.163 183.938 150.006 180.554C155.85 177.17 160.865 172.526 164.688 166.96L167.798 162.45C177.44 148.457 185.95 133.717 193.248 118.37L195.598 113.43C198.493 107.337 199.996 100.676 199.996 93.93C199.996 87.1841 198.493 80.5229 195.598 74.43L193.248 69.51Z'
              },
              e
            )
          );
        }
      }),
        b({
          name: g.square,
          width: 200,
          height: 200,
          metadata: { rx: 16 },
          svg: function (e) {
            return c.createElement(
              'rect',
              (0, r.Z)({ height: '200', rx: '16', width: '200' }, e)
            );
          }
        }),
        b({
          name: g['circle-svg'],
          width: 200,
          height: 200,
          svg: function (e) {
            return c.createElement(
              'circle',
              (0, r.Z)({ cx: '100', cy: '100', r: '100' }, e)
            );
          }
        }),
        b({
          name: g['circle-shape-func'],
          width: 200,
          height: 200,
          clipPath: 'circle(50% at 50% 50%)',
          svg: function (e) {
            return null;
          }
        }),
        b({
          name: g['circle-shape-func-crop'],
          width: 200,
          height: 200,
          clipPath: 'circle(49.5% at 49.5% 49.5%)',
          svg: function (e) {
            return null;
          }
        });
      var w = n(97762);
      function E(e) {
        try {
          return Z(e).join('-');
        } catch (e) {
          return '';
        }
      }
      function Z(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = 0,
            r = Object.keys(e);
          n < r.length;
          n++
        ) {
          var i = r[n];
          'object' === (0, f.Z)(e[i]) ? Z(e[i], t) : (t.push(i), t.push(e[i]));
        }
        return t;
      }
      function _(e) {
        var t = y[e.shape];
        if (!t) return null;
        var n = E(e),
          r = t.svg(e.svgProps);
        return c.createElement(
          'svg',
          { height: '0', viewBox: t.viewBox, width: '0' },
          c.createElement(
            'defs',
            null,
            c.createElement(
              'clipPath',
              {
                clipPathUnits: 'objectBoundingBox',
                id: n,
                transform: t.transform
              },
              r
            )
          )
        );
      }
      function C(e) {
        var t = E(e),
          n = c.useRef({ config: e });
        return (
          (n.current.config = e),
          c.useEffect(
            function () {
              if (!C.DOM_REFS[t]) {
                var e = document.createElement('div');
                (e.style.width = '0px'),
                  (e.style.height = '0px'),
                  (e.innerHTML = w.renderToStaticMarkup(
                    c.createElement(_, n.current.config)
                  )),
                  document.body.appendChild(e),
                  (C.DOM_REFS[t] = e);
              }
            },
            [t]
          ),
          t
        );
      }
      n(69358), (C.DOM_REFS = {});
      var x = ['children', 'style'];
      function S(e) {
        var t = e.children,
          n = e.style,
          r = (0, m.Z)(e, x),
          i = C(r),
          o = y[r.shape],
          a = [];
        if ('circle' === e.shape) a.push(k.circle);
        else if (o && o.clipPath) {
          var s = o.clipPath(i);
          a.push({ clipPath: s });
        }
        return a.push(n), c.createElement(v.Z, { style: a }, t);
      }
      var k = h.Z.create(function (e) {
        return {
          circle: { borderRadius: e.borderRadii.infinite, overflow: 'hidden' }
        };
      });
      function T(e) {
        return { width: e, height: e };
      }
      function I(e) {
        switch (e) {
          case 'small':
            return T(h.Z.theme.spacesPx.space16);
          case 'medium':
            return T(h.Z.theme.spacesPx.space20);
          case 'large':
            return T(h.Z.theme.spacesPx.space32);
          case 'xLarge':
            return T(h.Z.theme.spacesPx.space40);
          case 'xxLarge':
            return T(h.Z.theme.spacesPx.space48);
          case 'xxxLarge':
            return T(h.Z.theme.spacesPx.space56);
          case 'jumbo':
            return T(h.Z.theme.spacesPx.space64);
          default:
            return { width: null, height: null };
        }
      }
      (S.CLIP_CONFIGS = y), (S.Shape = g);
      var L = {
          getLink: function (e) {
            var t;
            return (
              e.link
                ? (t = e.link)
                : e.withLink &&
                  e.screenName &&
                  (t = {
                    pathname: 'https://twitter.com/'.concat(e.screenName || ''),
                    state: e.promotedContent
                      ? { promotedTweetState: e.promotedContent }
                      : void 0
                  }),
              t
            );
          },
          getSize: function (e) {
            if ('object' === (0, f.Z)(e.size)) return e.size;
            if ('string' == typeof e.size && 'custom' !== e.size) {
              var t = I(e.size);
              if (t.width && t.height) return t;
            }
          },
          getAvatarStyles: function (e) {
            var t = P.fromProps.getSize(e);
            return {
              backgroundColor: {
                backgroundColor:
                  e.backgroundColor || h.Z.theme.colors.cellBackground
              },
              size: t
            };
          }
        },
        P = {
          ShapeClip: S,
          ShapeDeciderContext: c.createContext({
            ShapeDecider: function (e) {
              return e;
            }
          }),
          makeDimensions: T,
          getSizeStyle: I,
          getSizeSimple: function (e) {
            switch (e) {
              case 'small':
                return h.Z.theme.spacesPx.space16;
              case 'medium':
                return h.Z.theme.spacesPx.space20;
              case 'large':
                return h.Z.theme.spacesPx.space32;
              case 'xLarge':
                return h.Z.theme.spacesPx.space40;
              case 'xxLarge':
                return h.Z.theme.spacesPx.space48;
              case 'xxxLarge':
                return h.Z.theme.spacesPx.space56;
              case 'jumbo':
                return h.Z.theme.spacesPx.space64;
              default:
                throw new Error('unexpected user avatar size: '.concat(e));
            }
          },
          DefaultProps: {
            aspectRatio: 1,
            hasAdaptiveImage: !0,
            shape: 'circle',
            size: 'jumbo'
          },
          fromProps: L
        };
      function R(e) {
        return e.withHoverCard && e.screenName
          ? c.createElement(
              p.Z,
              {
                onAvatarClick: e.onClick,
                onScreenNameClick: e.onHoverCardScreenNameClick,
                promotedContent: e.promotedContent,
                screenName: e.screenName,
                wrapperStyle: [O.hoverWrapperBaseStyle, e.wrapperStyle]
              },
              e.children
            )
          : e.children;
      }
      R.defaultProps = P.DefaultProps;
      var O = h.Z.create(function (e) {
          return { hoverWrapperBaseStyle: { flexShrink: 1, maxWidth: '100%' } };
        }),
        M = n(1413),
        D = n(29439),
        A = (n(97895), n(14625)),
        N = n(68896),
        z = n(1494),
        B = n(40830),
        F = ['interactivityState'];
      function H(e) {
        var t = e.interactivityState,
          n = (0, m.Z)(e, F),
          r = P.fromProps.getLink(n),
          i = B.Z.generate({
            backgroundColor: h.Z.theme.colors.translucentBlack15,
            color: h.Z.theme.colors.translucentBlack15
          });
        return c.createElement(d.Z, {
          interactiveStyles: r ? i : null,
          interactivityState: t,
          style: W.root
        });
      }
      H.defaultProps = P.DefaultProps;
      var W = h.Z.create(function (e) {
          return {
            root: {
              width: '100%',
              height: '100%',
              boxShadow: '0 0 '
                .concat(e.borderWidths.medium, ' ')
                .concat(e.colors.hoverBlack, ' inset')
            }
          };
        }),
        U = n(82167),
        V = n(90447),
        G = ['interactivityState'],
        j = ['children'];
      function K(e) {
        var t = e.interactivityState,
          n = (0, m.Z)(e, G),
          i = n.children,
          o = (0, m.Z)(n, j),
          a = P.fromProps.getLink(o),
          s = a
            ? { link: a, onPress: n.onClick }
            : { accessibilityRole: 'none' },
          l = (0, V.rb)(
            (0, U.$n)({
              color: (0, V.xO)(h.Z.theme.colors.primary),
              coefficient: 0.5
            })
          ),
          u = B.Z.generate({
            backgroundColor: h.Z.theme.colors.transparent,
            customHoverBackgroundColor: h.Z.theme.colors.transparent,
            customFocusBackgroundColor: l,
            color: l
          }),
          p = [n.style, { backgroundColor: h.Z.theme.colors.transparent }];
        return c.createElement(
          d.Z,
          (0, r.Z)({}, s, {
            accessibilityHidden: n.accessibilityHidden || !n.accessibilityLabel,
            focusable: n.focusable,
            interactiveStyles: a ? u : null,
            interactivityState: t,
            ref: n.avatarRef,
            style: p
          }),
          i
        );
      }
      K.defaultProps = P.DefaultProps;
      var Y = n(5509),
        $ = n(48778),
        q = n(49333),
        X = ['syncUnavailable'],
        Q = {};
      function J(e) {
        var t = e.size,
          n = e.uri,
          r = e.syncUnavailable,
          i = (0, m.Z)(e, X),
          o = c.useRef({ syncUnavailable: e.syncUnavailable });
        (o.current.syncUnavailable = r),
          'string' != typeof t ||
            'custom' === t ||
            Q[t] ||
            (Q[t] = Y.Z.createLayoutCache());
        var a,
          s = P.fromProps.getAvatarStyles(i),
          l = !n;
        return (
          c.useEffect(
            function () {
              'function' == typeof o.current.syncUnavailable &&
                o.current.syncUnavailable(l);
            },
            [l]
          ),
          n
            ? e.hasAdaptiveImage && n
              ? (e.imageLayoutCache
                  ? (a = e.imageLayoutCache)
                  : 'string' == typeof t &&
                    'custom' !== t &&
                    Q[t] &&
                    (a = Q[t]),
                c.createElement(Y.Z, {
                  accessibilityLabel: e.accessibilityLabel || '',
                  aspectMode: $.Z.exact(e.aspectRatio),
                  backgroundColor:
                    e.backgroundColor || h.Z.theme.colors.gray300,
                  image: n,
                  layoutCache: a
                }))
              : c.createElement(q.Z, { source: { uri: n }, style: s.size })
            : c.createElement(N.Z, {
                ratio: e.aspectRatio,
                style: [s.size, ee.unavailable]
              })
        );
      }
      J.defaultProps = P.DefaultProps;
      var ee = h.Z.create(function (e) {
          return { unavailable: { backgroundColor: e.colors.gray0 } };
        }),
        te = ['interactivityState'],
        ne = ['interactivityState', 'style'];
      function re(e) {
        var t = e.interactivityState,
          n = (0, m.Z)(e, te),
          i = c.useContext(P.ShapeDeciderContext),
          o = n;
        return (
          'function' == typeof i.ShapeDecider && (o = i.ShapeDecider(n)),
          c.createElement(
            ie,
            (0, r.Z)({}, o, { interactivityState: t, style: n.style })
          )
        );
      }
      re.defaultProps = P.DefaultProps;
      var ie = c.memo(oe);
      function oe(e) {
        var t = e.interactivityState,
          n = e.style,
          i = (0, m.Z)(e, ne),
          o = c.useState(!1),
          a = (0, D.Z)(o, 2),
          s = a[0],
          l = a[1],
          u = i.shape,
          d = h.Z.theme.colors.transparent;
        i.borderColor
          ? (d = h.Z.theme.colors[i.borderColor])
          : s && (d = h.Z.theme.colors.gray50);
        var p = 0;
        i.borderWidth
          ? (p = h.Z.theme.borderWidthsPx[i.borderWidth])
          : s && (p = h.Z.theme.borderWidthsPx.medium);
        var f = 2 * p,
          g = 0;
        i.gapWidth && (g = h.Z.theme.spacesPx[i.gapWidth]);
        var y = 2 * g,
          b = {},
          w = {};
        if (i.shape === S.Shape.square) {
          var E,
            Z =
              null === (E = S.CLIP_CONFIGS[i.shape].metadata) || void 0 === E
                ? void 0
                : E.rx;
          'number' == typeof Z &&
            ((w.rx = Math.max(0, Z - p)), (b.rx = Math.max(0, w.rx - g)));
        }
        var _ = i.BorderComponent || v.Z,
          C = P.fromProps.getAvatarStyles(i),
          x = 2 * h.Z.theme.borderWidthsPx.medium,
          k = se(-1 * x),
          T = se(x),
          I = se(x + f),
          L = se(x + f + y),
          R =
            'rtl' === (0, z.Z)().direction
              ? ae.absoluteCenterRTL
              : ae.absoluteCenter;
        return c.createElement(
          N.Z,
          {
            nativeID: i.nativeID,
            ratio: 1,
            style: [ae.fill, C.size, ae.overflowVisible, n],
            testID: ''
              .concat('UserAvatar-Container', '-')
              .concat(i.screenName || 'unknown')
          },
          c.createElement(
            N.Z,
            { ratio: 1, style: [ae.fill, R, ae.overflowVisible] },
            c.createElement(
              S,
              { shape: u, style: [ae.interactiveContainer, k] },
              c.createElement(
                K,
                (0, r.Z)({ interactivityState: t }, i, { style: ae.fill }),
                c.createElement(
                  S,
                  { shape: u, style: [ae.nonInteractive, R, T] },
                  c.createElement(_, {
                    style: [ae.fill, { backgroundColor: d }]
                  })
                ),
                c.createElement(
                  S,
                  { shape: u, style: [ae.nonInteractive, R, I], svgProps: w },
                  c.createElement(v.Z, { style: [ae.fill, ae.gapColor] })
                ),
                c.createElement(
                  S,
                  {
                    shape: u,
                    style: [ae.nonInteractive, R, C.backgroundColor, L],
                    svgProps: b
                  },
                  c.createElement(
                    J,
                    (0, r.Z)({}, i, {
                      syncUnavailable: function (e) {
                        l(e);
                      }
                    })
                  )
                ),
                c.createElement(
                  S,
                  { shape: u, style: [R, L], svgProps: b },
                  c.createElement(H, (0, r.Z)({ interactivityState: t }, i))
                )
              )
            ),
            i.decoration
          )
        );
      }
      var ae = h.Z.create(function (e) {
        var t = {
          position: 'absolute',
          top: '50%',
          start: '50%',
          transform: [{ translateX: '-50%' }, { translateY: '-50%' }]
        };
        return {
          fill: { width: '100%', height: '100%' },
          overflowVisible: { overflow: 'visible' },
          gapColor: { backgroundColor: e.colors.cellBackground },
          interactiveContainer: {
            position: 'absolute',
            top: -1 * e.borderWidthsPx.medium,
            start: -1 * e.borderWidthsPx.medium
          },
          nonInteractive: { pointerEvents: 'none' },
          absoluteCenter: t,
          absoluteCenterRTL: (0, M.Z)(
            (0, M.Z)({}, t),
            {},
            { transform: [{ translateX: '50%' }, { translateY: '-50%' }] }
          )
        };
      });
      function se(e) {
        var t,
          n = (0, A.Z)(
            '100% - '.concat(
              'number' == typeof (t = e)
                ? ''.concat(t, 'px')
                : 'string' == typeof t
                  ? t
                  : '0px'
            )
          );
        return P.makeDimensions(n);
      }
      var le = ['children'];
      function ce(e) {
        var t = e.children,
          n = (0, m.Z)(e, le),
          i = P.fromProps.getLink(n),
          o = P.fromProps.getSize(n),
          a = i
            ? { link: i, onPress: n.onClick }
            : { accessibilityRole: 'none' };
        return c.createElement(
          v.Z,
          { style: [ue.root, { width: null == o ? void 0 : o.width }] },
          c.createElement(
            d.Z,
            (0, r.Z)({ focusable: !1, interactiveStyles: null }, a),
            t
          )
        );
      }
      var ue = h.Z.create(function (e) {
          var t = e.spaces;
          return {
            root: {
              alignItems: 'center',
              bottom: t.space12,
              marginBottom: '-'.concat(t.space12),
              maxWidth: '100%',
              position: 'relative',
              wordBreak: 'break-all'
            }
          };
        }),
        de = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, s.Z)(n);
          function n() {
            return (0, i.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, o.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.style,
                    n = c.createElement(u.ZP.UseProps, null, function (n) {
                      var i = n.userAvatarLabel,
                        o = null == i ? void 0 : i();
                      return o
                        ? c.createElement(
                            d.Z,
                            {
                              interactiveStyles: null,
                              style: { width: null == t ? void 0 : t.width }
                            },
                            function (t) {
                              return c.createElement(
                                c.Fragment,
                                null,
                                c.createElement(
                                  re,
                                  (0, r.Z)({}, e.props, {
                                    interactivityState: t
                                  })
                                ),
                                c.createElement(ce, e.props, o)
                              );
                            }
                          )
                        : c.createElement(re, e.props);
                    });
                  return c.createElement(R, this.props, n);
                }
              }
            ]),
            n
          );
        })(c.PureComponent);
      (0, l.Z)(de, 'defaultProps', P.DefaultProps),
        (0, l.Z)(de, 'getSizeStyle', P.getSizeStyle),
        (0, l.Z)(de, 'getSizeSimple', P.getSizeSimple),
        (0, l.Z)(de, 'defaultSize', 'xLarge'),
        (0, l.Z)(de, 'ShapeClip', P.ShapeClip),
        (0, l.Z)(de, 'ShapeDeciderContext', P.ShapeDeciderContext);
      const he = de;
    },
    82894: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => Be });
      var r = n(87462),
        i = n(45987),
        o = n(15671),
        a = n(43144),
        s = n(60136),
        l = n(98557),
        c = n(4942),
        u = (n(34284), n(67294)),
        d = n(67177),
        h = n(45227),
        p = n(86034),
        f = n(2883),
        m = n(98788),
        v = n(67079),
        g = n(1781),
        y = n(64123),
        b = n(24184);
      n(60228), n(73964);
      const w = (0, n(16740).Z)({
        loader: function () {
          return Promise.resolve().then(n.bind(n, 64122));
        }
      });
      n(38077), n(50886);
      var E = n(74387),
        Z = n.n(E),
        _ = n(1413),
        C = n(37353),
        x = n(7960),
        S = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, C.Z)(
            'svg',
            (0, _.Z)(
              (0, _.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [x.Z.root, e.style],
                viewBox: '0 0 22 22',
                children: u.createElement(
                  'g',
                  null,
                  u.createElement('path', {
                    d: 'M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z'
                  })
                )
              }
            )
          );
        };
      S.metadata = { width: 22, height: 22 };
      const k = S;
      var T = n(29439),
        I = 0;
      function L() {
        var e = u.useState(I),
          t = (0, T.Z)(e, 1)[0];
        return I === t && (I += 1), t;
      }
      var P = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = L();
        return (0, C.Z)(
          'svg',
          (0, _.Z)(
            (0, _.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [x.Z.root, e.style],
              viewBox: '0 0 22 22',
              children: u.createElement(
                'g',
                null,
                u.createElement(
                  'linearGradient',
                  {
                    gradientUnits: 'userSpaceOnUse',
                    id: ''.concat(t, '-a'),
                    x1: '4.411',
                    x2: '18.083',
                    y1: '2.495',
                    y2: '21.508'
                  },
                  u.createElement('stop', {
                    offset: '0',
                    stopColor: '#f4e72a'
                  }),
                  u.createElement('stop', {
                    offset: '.539',
                    stopColor: '#cd8105'
                  }),
                  u.createElement('stop', {
                    offset: '.68',
                    stopColor: '#cb7b00'
                  }),
                  u.createElement('stop', {
                    offset: '1',
                    stopColor: '#f4ec26'
                  }),
                  u.createElement('stop', { offset: '1', stopColor: '#f4e72a' })
                ),
                u.createElement(
                  'linearGradient',
                  {
                    gradientUnits: 'userSpaceOnUse',
                    id: ''.concat(t, '-b'),
                    x1: '5.355',
                    x2: '16.361',
                    y1: '3.395',
                    y2: '19.133'
                  },
                  u.createElement('stop', {
                    offset: '0',
                    stopColor: '#f9e87f'
                  }),
                  u.createElement('stop', {
                    offset: '.406',
                    stopColor: '#e2b719'
                  }),
                  u.createElement('stop', {
                    offset: '.989',
                    stopColor: '#e2b719'
                  })
                ),
                u.createElement(
                  'g',
                  { clipRule: 'evenodd', fillRule: 'evenodd' },
                  u.createElement('path', {
                    d: 'M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z',
                    fill: 'url(#'.concat(t, '-a)')
                  }),
                  u.createElement('path', {
                    d: 'M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z',
                    fill: 'url(#'.concat(t, '-b)')
                  }),
                  u.createElement('path', {
                    d: 'M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z',
                    fill: '#d18800'
                  })
                )
              )
            }
          )
        );
      };
      P.metadata = { width: 22, height: 22 };
      const R = P;
      var O = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, C.Z)(
          'svg',
          (0, _.Z)(
            (0, _.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [x.Z.root, e.style],
              viewBox: '0 0 22 22',
              children: u.createElement(
                'g',
                null,
                u.createElement('path', {
                  clipRule: 'evenodd',
                  d: 'M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z',
                  fill: '#829aab',
                  fillRule: 'evenodd'
                })
              )
            }
          )
        );
      };
      O.metadata = { width: 22, height: 22 };
      const M = O;
      var D = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, C.Z)(
          'svg',
          (0, _.Z)(
            (0, _.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [x.Z.root, e.style],
              viewBox: '0 0 24 24',
              children: u.createElement(
                'g',
                null,
                u.createElement('path', {
                  d: 'M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z'
                })
              )
            }
          )
        );
      };
      D.metadata = { width: 24, height: 24 };
      const A = D;
      var N = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, C.Z)(
          'svg',
          (0, _.Z)(
            (0, _.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [x.Z.root, e.style],
              viewBox: '0 0 24 24',
              children: u.createElement(
                'g',
                null,
                u.createElement('path', {
                  d: 'M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z'
                })
              )
            }
          )
        );
      };
      N.metadata = { width: 24, height: 24 };
      const z = N;
      var B = n(12011),
        F = n(81817),
        H = n(40830),
        W = n(29469),
        U =
          (n(41830),
          Object.freeze({
            blue: 'blue',
            business: 'business',
            government: 'government',
            verified: 'verified',
            none: 'none'
          }));
      var V = Z().j836de8a,
        G = Z().f936caa6,
        j = Z().ac72ee4e,
        K = Z().f49e0aac,
        Y = Z().f59bdb94,
        $ = function (e) {
          var t = e.affiliateBadgeInfo,
            n = e.auxiliaryUserLabels,
            r = e.color,
            i = e.displayContext,
            o = e.isBlueVerified,
            a = e.isProtected,
            s = e.isVerified,
            l = e.renderVerifiedBadgeContext,
            c = e.translatorType,
            d = e.verifiedType,
            h = B.ZP.useProps();
          if (u.useContext(b.Z).isDense) return null;
          var f = (function (e) {
              var t = e.isBlueVerified,
                n = e.isVerified,
                r = e.verifiedType;
              if (r)
                switch (r) {
                  case 'Business':
                    return U.business;
                  case 'Government':
                    return U.government;
                }
              return n ? U.verified : t ? U.blue : U.none;
            })({ isBlueVerified: o, isVerified: s, verifiedType: d }),
            m = function (e) {
              return e &&
                'Badge' === e.userLabelDisplayType &&
                'BusinessLabel' === e.userLabelType
                ? u.createElement(F.Z, {
                    isAffiliateBadge: !0,
                    label: e,
                    withTopMargin: !1
                  })
                : null;
            },
            v = [
              (function () {
                if (f === U.none) return null;
                var e = k;
                f === U.business ? (e = R) : f === U.government && (e = M);
                var t = u.createElement(e, {
                  accessibilityLabel: j,
                  style: [
                    r
                      ? X[r]
                      : (function () {
                          var e = h.newBadgeColorEnabled()
                            ? X.defaultBadgeColorNew
                            : X.defaultBadgeColor;
                          switch (f) {
                            case U.government:
                            case U.business:
                              return null;
                            default:
                              return e;
                          }
                        })(),
                    X.maxSize,
                    !l && X.marginStart
                  ],
                  testID: 'icon-verified'
                });
                return l
                  ? u.createElement(
                      q,
                      { accessibilityLabel: K, renderVerifiedBadgeContext: l },
                      t
                    )
                  : t;
              })(),
              m(t),
              n && n.map(m).filter(Boolean),
              (function () {
                if ('content' === i) return null;
                var e = u.createElement(A, {
                  accessibilityLabel: G,
                  style: [
                    X.marginStart,
                    r
                      ? X[r]
                      : 'moderator' === c
                        ? X.yellow
                        : X.defaultBadgeColor,
                    X.maxSize
                  ]
                });
                return 'badged' === c || 'moderator' === c ? e : null;
              })(),
              (function () {
                if (!a) return null;
                var e = u.createElement(z, {
                  accessibilityLabel: V,
                  style: [X.marginStart, r ? X[r] : X.text, X.maxSize],
                  testID: 'icon-lock'
                });
                return l
                  ? u.createElement(
                      q,
                      { accessibilityLabel: Y, renderVerifiedBadgeContext: l },
                      e
                    )
                  : e;
              })()
            ];
          return v.length
            ? u.createElement(p.ZP, { style: X.wrapper }, u.Children.toArray(v))
            : null;
        },
        q = function (e) {
          var t = e.accessibilityLabel,
            n = e.children,
            r = e.renderVerifiedBadgeContext;
          return u.createElement(
            W.Z,
            { renderContent: r },
            u.createElement(
              f.Z,
              {
                accessibilityLabel: t,
                accessibilityRole: 'button',
                interactiveStyles: H.Z.generate({
                  backgroundColor: y.Z.theme.colors.transparent,
                  color: y.Z.theme.colors.primary,
                  customFocusBackgroundColor: y.Z.theme.colors.transparent,
                  customHoverBackgroundColor: y.Z.theme.colors.transparent,
                  customPressedBackgroundColor: y.Z.theme.colors.transparent
                }),
                style: [X.clickable, X.marginStart, X.button]
              },
              n
            )
          );
        };
      $.defaultProps = { displayContext: 'content', translatorType: 'none' };
      var X = y.Z.create(function (e) {
        return {
          wrapper: { display: 'inline-flex', alignItems: 'center' },
          marginStart: { marginStart: e.spaces.space2 },
          defaultBadgeColor: { color: e.colors.badgeColor },
          defaultBadgeColorNew: { color: e.colors.badgeColorNew },
          text: { color: e.colors.text },
          white: { color: e.colors.white },
          yellow: { color: e.colors.yellow500 },
          clickable: { display: 'inline-block' },
          button: { display: 'flex' },
          maxSize: { maxHeight: e.spaces.space20, maxWidth: e.spaces.space20 }
        };
      });
      const Q = $;
      n(470);
      var J = n(97326),
        ee = (n(34338), n(37960), n(11537)),
        te = n(75851),
        ne = n(93384),
        re = n(81443),
        ie = function (e) {
          return 'app-bar-'.concat(e);
        },
        oe = Z().d95eb228,
        ae = Z().af8fa2ae,
        se = {
          back: { Icon: te.Z, label: oe },
          close: { Icon: ne.Z, label: ae }
        },
        le = y.Z.create(function (e) {
          return { root: { marginStart: e.spaces.space1 } };
        });
      const ce = function (e) {
        var t = e.backButtonType,
          n = void 0 === t ? 'back' : t,
          r = e.onClick,
          i = e.onMedia,
          o = (e.style, e.testID),
          a = e.autofocus,
          s = se[n],
          l = s.Icon,
          c = s.label,
          d = i ? 'onMediaDominantColorFilled' : 'primaryText',
          h = u.useCallback(
            function (e) {
              null !== e && a && e.focus();
            },
            [a]
          );
        return u.createElement(re.ZP, {
          accessibilityLabel: c,
          hoverLabel: { label: c },
          icon: u.createElement(l, null),
          onPress: r,
          pullLeft: !0,
          ref: h,
          style: le.root,
          testID: o || ie(n),
          type: d
        });
      };
      n(98041);
      var ue = n(38190),
        de = n(56378),
        he = n(10737),
        pe = n(76290),
        fe = n(356);
      const me = function () {
        return ve.backgroundStyles;
      };
      var ve = y.Z.create(function (e) {
        return {
          backgroundStyles: {
            backdropFilter: 'blur(12px)',
            backgroundColor: e.colors.appBarBackground
          }
        };
      });
      const ge = function (e) {
        var t = e.centeredLogo,
          n = e.isFullWidth,
          r = void 0 !== n && n,
          i = e.isLarge,
          o = void 0 === i || i,
          a = e.leftControl,
          s = e.middleControl,
          l = e.onMiddleControlClick,
          c = e.position,
          h = e.rightControl,
          f = e.style,
          m = e.subtitle,
          v = e.title,
          g = e.titleDomId,
          y = e.titleIconCell,
          b = e.titleIconCellSize,
          w = e.withBackground,
          E = void 0 === w || w,
          Z = e.withGutter,
          _ = void 0 === Z || Z,
          C = e.withPullHandle,
          x = void 0 !== C && C,
          S = [
            be.sideControl,
            be.leftControl,
            !!t && be.sideControlWithCenteredLogo
          ],
          k = [
            be.sideControl,
            be.rightControl,
            !!t && be.sideControlWithCenteredLogo
          ],
          T = !!y,
          I = function (e) {
            return u.createElement(
              d.Z,
              { style: ye.title },
              v
                ? u.createElement(
                    p.ZP,
                    {
                      accessibilityLevel: 2,
                      accessibilityRole: 'heading',
                      nativeID: g,
                      numberOfLines: 1,
                      size: fe.Z.isNarrowScreenWidth(e)
                        ? 'headline2'
                        : 'headline1',
                      style: ye.titleText,
                      weight: 'bold'
                    },
                    v
                  )
                : null,
              m
                ? u.createElement(
                    p.ZP,
                    { color: 'gray700', numberOfLines: 1, size: 'subtext2' },
                    m
                  )
                : null
            );
          };
        return u.createElement(pe.Z, null, function (e) {
          var n = e.screenWidth;
          return u.createElement(
            d.Z,
            { style: [ye.wrapper, 'absolute' === c && ye.absolute] },
            u.createElement(
              d.Z,
              { style: 'fixed' === c && ye.fixed },
              u.createElement(
                d.Z,
                { style: [ye.root, E && me(), f] },
                u.createElement(
                  he.Z,
                  {
                    isFullWidth: r,
                    isLarge: o,
                    style: ye.container,
                    withGutter: _
                  },
                  a || t ? u.createElement(d.Z, { style: S }, a) : null,
                  x && !ue.Z.reducedMotionEnabled
                    ? u.createElement(d.Z, { style: ye.pullHandle })
                    : null,
                  u.createElement(
                    d.Z,
                    {
                      onClick: l,
                      style: [
                        ye.middleContainer,
                        !!t && ye.middleContainerWithCenteredLogo
                      ]
                    },
                    T
                      ? u.createElement(
                          de.Z,
                          {
                            avatarCell: y,
                            avatarCellStyle: ye.verticalAlignMiddle,
                            avatarSize: b,
                            cellStyle: ye.verticalAlignMiddle
                          },
                          I(n)
                        )
                      : I(n),
                    s || null,
                    t || null
                  ),
                  h || t ? u.createElement(d.Z, { style: k }, h) : null
                )
              )
            )
          );
        });
      };
      var ye = y.Z.create(function (e) {
          return {
            wrapper: {
              height: e.componentDimensions.appBarHeight,
              zIndex: e.componentZIndices.appBarZIndex
            },
            absolute: { position: 'absolute', top: 0 },
            fixed: { position: 'fixed', width: '100%', top: 0, start: 0 },
            root: { height: e.componentDimensions.appBarHeight },
            container: {
              alignItems: 'center',
              flexDirection: 'row',
              height: e.componentDimensions.appBarHeight,
              justifyContent: 'center',
              marginHorizontal: 'auto',
              width: '100%'
            },
            middleContainer: {
              flexShrink: 1,
              flexGrow: 1,
              height: '100%',
              justifyContent: 'center'
            },
            middleContainerWithCenteredLogo: { alignItems: 'center' },
            title: { alignItems: 'flex-start' },
            titleText: { paddingVertical: e.spaces.space2 },
            verticalAlignMiddle: { justifyContent: 'center' },
            pullHandle: {
              alignSelf: 'center',
              position: 'absolute',
              top: e.spaces.space12,
              width: e.spaces.space40,
              height: e.spaces.space4,
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.xLarge
            }
          };
        }),
        be = y.Z.create(function (e) {
          return {
            sideControl: {
              alignSelf: 'stretch',
              justifyContent: 'center',
              minHeight: e.spaces.space32,
              minWidth: e.spaces.space32
            },
            sideControlWithCenteredLogo: {
              flexShrink: 1,
              flexGrow: 1,
              flexBasis: '50%'
            },
            leftControl: {
              alignItems: 'flex-start',
              minWidth: e.spaces.space56
            },
            rightControl: { alignItems: 'flex-end', minWidth: e.spaces.space56 }
          };
        }),
        we = n(74913);
      var Ee = Z().d7e50a66,
        Ze = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, l.Z)(n);
          function n() {
            var e;
            (0, o.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, c.Z)((0, J.Z)(e), '_handleButtonRefUpdate', function (t) {
                t && !e._wasFocused && (t.focus(), (e._wasFocused = !0));
              }),
              e
            );
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.onImpression && this.props.onImpression();
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.footer,
                    r = e.graphicDisplayMode,
                    i = e.withBottomPadding,
                    o = e.withCloseButton,
                    a =
                      'illustrationFullWidth' === r
                        ? Ce.fillHeight
                        : Ce.containerTopMargin;
                  return u.createElement(
                    d.Z,
                    {
                      style: [
                        _e.root,
                        i && _e.withBottomPadding,
                        !o &&
                          'illustrationFullWidth' !== r &&
                          (i
                            ? _e.appBarReplacementSpacer
                            : _e.appBarReplacementSpacerThin)
                      ]
                    },
                    this._renderAppBarCloseButton(),
                    u.createElement(
                      d.Z,
                      { style: _e.contentContainer },
                      u.createElement(
                        d.Z,
                        { style: _e.centeredContent },
                        'none' !== r
                          ? u.createElement(
                              d.Z,
                              {
                                style: [Ce.container, a],
                                testID: 'interstitialGraphic'
                              },
                              this._renderGraphic()
                            )
                          : null,
                        u.createElement(
                          d.Z,
                          { style: [_e.content, !!n && _e.contentWithFooter] },
                          this._renderText(),
                          t,
                          this._renderButtons(),
                          n ? this._renderFooter() : null
                        )
                      )
                    )
                  );
                }
              },
              {
                key: '_renderCloseButton',
                value: function (e) {
                  var t = this.props,
                    n = t.backButtonType,
                    r = t.graphicDisplayMode,
                    i = t.onClose;
                  return i
                    ? u.createElement(ce, {
                        backButtonType: n,
                        onClick: i,
                        onMedia: 'illustrationFullWidth' === r
                      })
                    : null;
                }
              },
              {
                key: '_renderAppBarCloseButton',
                value: function () {
                  var e = this.props,
                    t = e.graphicDisplayMode;
                  if (!e.withCloseButton) return null;
                  var n = 'illustrationFullWidth' === t ? 'absolute' : void 0;
                  return u.createElement(ge, {
                    leftControl: this._renderCloseButton(),
                    position: n,
                    withBackground: 'absolute' !== n
                  });
                }
              },
              {
                key: '_renderGraphic',
                value: function () {
                  var e = this.props,
                    t = e.graphic,
                    n = e.graphicDisplayMode,
                    r = e.graphicStyle,
                    i = e.graphicThumbnailColor;
                  if (t && 'illustration' === n) {
                    var o = t;
                    return u.createElement(o, { style: [Ce.illustration, r] });
                  }
                  if (t && 'icon' === n) {
                    var a = t,
                      s = t === ee.Z;
                    return u.createElement(a, {
                      style: [Ce.icon, s && Ce.iconBrandColor, r]
                    });
                  }
                  if (t && 'thumbnail' === n) {
                    var l = t;
                    return u.createElement(we.Z, {
                      Icon: l,
                      color: i,
                      style: r
                    });
                  }
                  if (t && 'illustrationFullWidth' === n) {
                    var c = t;
                    return u.createElement(c, {
                      style: [Ce.illustrationFullWidth, r]
                    });
                  }
                  return null;
                }
              },
              {
                key: '_renderText',
                value: function () {
                  var e = this.props,
                    t = e.contentStyle,
                    n = e.headline,
                    r = e.onSupportUrlClick,
                    i = e.subtext,
                    o = e.supportUrl;
                  return u.createElement(
                    d.Z,
                    { style: t || xe.content },
                    n
                      ? u.createElement(
                          p.ZP,
                          {
                            align: 'left',
                            size: 'title3',
                            style: xe.headline,
                            weight: 'heavy'
                          },
                          n
                        )
                      : null,
                    u.createElement(
                      p.ZP,
                      { align: 'left', color: 'gray700', weight: 'normal' },
                      i,
                      o
                        ? u.createElement(
                            u.Fragment,
                            null,
                            ' ',
                            u.createElement(
                              p.ZP,
                              {
                                align: 'left',
                                link: o,
                                onClick: r,
                                size: 'body',
                                style: xe.learnMoreLink
                              },
                              ''.concat(Ee)
                            )
                          )
                        : null
                    )
                  );
                }
              },
              {
                key: '_renderButtons',
                value: function () {
                  var e = this.props,
                    t = e.actionLabel,
                    n = e.actionLink,
                    r = e.actionType,
                    i = e.onAction,
                    o = e.onSecondaryAction,
                    a = e.onTertiaryAction,
                    s = e.primaryButtonTestID,
                    l = e.secondaryActionLabel,
                    c = e.secondaryActionLink,
                    h = e.tertiaryActionLabel,
                    p = e.tertiaryActionLink,
                    f = e.useBrandedActionButtons,
                    m = f ? 'brandFilled' : r,
                    v = f ? 'brandOutlined' : 'primaryOutlined';
                  return u.createElement(
                    d.Z,
                    { style: Se.container },
                    t
                      ? u.createElement(
                          re.ZP,
                          {
                            link: n,
                            onPress: i,
                            ref: this._handleButtonRefUpdate,
                            size: 'xLarge',
                            style: Se.primaryRoot,
                            testID: s,
                            type: m
                          },
                          t
                        )
                      : null,
                    l
                      ? u.createElement(
                          re.ZP,
                          {
                            link: c,
                            onPress: o,
                            size: 'xLarge',
                            style: Se.root,
                            type: v
                          },
                          l
                        )
                      : null,
                    h
                      ? u.createElement(
                          re.ZP,
                          {
                            link: p,
                            onPress: a,
                            size: 'xLarge',
                            style: Se.root,
                            type: v
                          },
                          h
                        )
                      : null
                  );
                }
              },
              {
                key: '_renderFooter',
                value: function () {
                  var e = this.props.footer;
                  return u.createElement(
                    d.Z,
                    { style: _e.footer },
                    u.createElement(
                      p.ZP,
                      { align: 'left', color: 'gray700', size: 'subtext2' },
                      e
                    )
                  );
                }
              }
            ]),
            n
          );
        })(u.Component);
      (0, c.Z)(Ze, 'defaultProps', {
        actionType: 'primaryFilled',
        backButtonType: 'close',
        graphic: ee.Z,
        graphicDisplayMode: 'icon',
        secondaryActionType: 'brandOutlined',
        withBottomPadding: !0,
        withCloseButton: !0,
        tertiaryActionType: 'brandText',
        useBrandedActionButtons: !1
      });
      var _e = y.Z.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              flexGrow: 1,
              overflow: 'auto',
              paddingBottom: e.spaces.space12
            },
            withBottomPadding: { paddingBottom: e.spaces.space48 },
            appBarReplacementSpacer: { paddingTop: e.spaces.space48 },
            appBarReplacementSpacerThin: { paddingTop: e.spaces.space20 },
            contentWithFooter: { marginBottom: 0 },
            content: { maxWidth: '400px', margin: e.spaces.space32 },
            contentContainer: { alignItems: 'center', flexGrow: 1 },
            centeredContent: {
              width: '100%',
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center'
            },
            footer: {
              width: '100%',
              maxWidth: 400,
              marginTop: e.spaces.space32
            }
          };
        }),
        Ce = y.Z.create(function (e) {
          return {
            container: {
              marginBottom: e.spaces.space16,
              width: '100%',
              alignItems: 'center'
            },
            containerTopMargin: { marginTop: e.spaces.space16 },
            icon: {
              color: e.colors.primary,
              height: e.spaces.space48,
              width: e.spaces.space48
            },
            iconBrandColor: { color: e.colors.brandColor },
            illustration: { height: 200, width: 200 },
            illustrationFullWidth: {
              flexGrow: 1,
              width: '100%',
              height: 'auto'
            },
            fillHeight: { flexGrow: 1 }
          };
        }),
        xe = y.Z.create(function (e) {
          return {
            content: {
              marginBottom: e.spaces.space32,
              justifyContent: 'center'
            },
            headline: { marginBottom: e.spaces.space8 },
            learnMoreLink: {
              color: e.colors.link,
              marginTop: e.spaces.space12,
              whiteSpace: 'nowrap'
            }
          };
        }),
        Se = y.Z.create(function (e) {
          return {
            container: { width: '100%' },
            primaryRoot: { marginTop: 0 },
            root: { marginTop: e.spaces.space16 }
          };
        });
      const ke = Ze;
      var Te = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, C.Z)(
          'svg',
          (0, _.Z)(
            (0, _.Z)({}, e),
            {},
            {
              accessibilityRole: e.accessibilityLabel
                ? e.accessibilityRole || 'img'
                : void 0,
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [x.Z.root, e.style],
              viewBox: '0 0 24 24',
              children: u.createElement(
                'g',
                null,
                u.createElement('path', {
                  d: 'M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM8 6c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm4 7c-1.84 0-3.32.65-4.4 1.81-.93.98-1.61 2.39-1.95 4.19h5.85v2H3.4l.1-1.1c.27-2.66 1.16-4.88 2.64-6.46C7.63 11.85 9.65 11 12 11c.91 0 1.78.13 2.58.38l-.9 1.82c-.52-.13-1.08-.2-1.68-.2zm5-2l1.76 3.57 3.95.58-2.86 2.78.68 3.92L17 20l-3.53 1.85.68-3.92-2.86-2.78 3.95-.58L17 11z'
                })
              )
            }
          )
        );
      };
      Te.metadata = { width: 24, height: 24 };
      const Ie = Te;
      var Le = Object.freeze({ superFollower: Z().fc065ee4 }),
        Pe = Object.freeze({
          superFollower: {
            graphic: Ie,
            headline: Z().e453f536,
            subtext: Z().dea63fc4,
            actionLabel: Z().g7099a02,
            actionLink:
              'https://help.twitter.com/en/using-twitter/super-follows#sfexpect',
            secondaryActionLabel: Z().c2637ef6
          }
        }),
        Re = Object.freeze({
          followsYou: Z().efb17190,
          superFollowsYou: Z().g57b5f6c,
          superFollower: Z().a77a27c0
        }),
        Oe = Object.freeze({
          followsYou: 'gray700',
          superFollowsYou: 'plum700',
          superFollower: 'plum700'
        }),
        Me = y.Z.create(function (e) {
          return {
            root: {
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
              display: 'flex',
              flexShrink: 0
            },
            active: { textDecorationLine: 'underline' },
            indicator: {
              borderRadius: 'inherit',
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space2
            },
            education: {
              borderRadius: e.borderRadii.large,
              overflow: 'hidden'
            },
            educationIcon: { color: e.colors.text },
            followsYou: { backgroundColor: e.colors.gray50 },
            superFollowsYou: { backgroundColor: e.colors.plum0 },
            superFollower: { backgroundColor: e.colors.plum0 }
          };
        });
      const De = function (e) {
        var t = e.onDismiss,
          n = e.onIndicatorClick,
          i = e.onLearnMoreClick,
          o = e.showEducation,
          a = e.style,
          s = e.type,
          l = function (e) {
            var t = [Me.indicator, Me[s], e, a];
            return u.createElement(
              p.ZP,
              {
                color: Oe[s],
                numberOfLines: 1,
                size: 'subtext3',
                style: t,
                testID: 'userFollowIndicator',
                weight: 'medium'
              },
              Re[s]
            );
          };
        return o
          ? Pe[s]
            ? u.createElement(
                d.Z,
                {
                  onClick: function (e) {
                    e.stopPropagation();
                  }
                },
                u.createElement(
                  W.Z,
                  {
                    onDismiss: t,
                    renderContent: function (e) {
                      return (function (e, t) {
                        return u.createElement(
                          d.Z,
                          {
                            style: Me.education,
                            testID: 'userFollowIndicatorEducation'
                          },
                          u.createElement(
                            ke,
                            (0, r.Z)({}, t, {
                              graphicStyle: Me.educationIcon,
                              onAction: function () {
                                e(), null == i || i();
                              },
                              onSecondaryAction: e,
                              withBottomPadding: !1,
                              withCloseButton: !1
                            })
                          )
                        );
                      })(e, Pe[s]);
                    },
                    withArrow: !0,
                    withFixedPosition: !0
                  },
                  u.createElement(
                    f.Z,
                    {
                      accessibilityLabel: Le[s],
                      accessibilityRole: 'button',
                      onClick: n,
                      style: Me.root
                    },
                    function (e) {
                      var t = e.isFocused,
                        n = e.isHovered,
                        r = e.isPressed,
                        i = t || n || r ? Me.active : void 0;
                      return l(i);
                    }
                  )
                )
              )
            : l()
          : u.createElement(d.Z, { style: Me.root }, l());
      };
      var Ae = n(90563),
        Ne = n(64549),
        ze = [
          'affiliateBadgeInfo',
          'auxiliaryUserLabels',
          'avatarSize',
          'badgeContext',
          'color',
          'displayNameLabel',
          'isBlueVerified',
          'isProtected',
          'isVerified',
          'name',
          'nameSize',
          'onAvatarClick',
          'onLinkClick',
          'onScreenNameClick',
          'profileImageUrl',
          'promotedContent',
          'renderUserNameHighlights',
          'renderVerifiedBadgeContext',
          'screenName',
          'screenNameSize',
          'screenNameStyle',
          'screenNameSuffix',
          'screenNameSuffixContainerStyle',
          'style',
          'translatorType',
          'verifiedType',
          'weight',
          'withFollowsYou',
          'withHoverCard',
          'withLink',
          'withName',
          'withNameWrap',
          'withScreenName',
          'withStackedLayout',
          'wrapperStyle'
        ],
        Be = (function (e) {
          (0, s.Z)(n, e);
          var t = (0, l.Z)(n);
          function n() {
            return (0, o.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !(0, h.Z)(e, this.props);
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.affiliateBadgeInfo,
                    n = e.auxiliaryUserLabels,
                    o = e.avatarSize,
                    a = e.badgeContext,
                    s = e.color,
                    l = e.displayNameLabel,
                    c = e.isBlueVerified,
                    h = e.isProtected,
                    y = e.isVerified,
                    b = e.name,
                    E = e.nameSize,
                    Z = (e.onAvatarClick, e.onLinkClick),
                    _ = (e.onScreenNameClick, e.profileImageUrl),
                    C = e.promotedContent,
                    x = e.renderUserNameHighlights,
                    S = e.renderVerifiedBadgeContext,
                    k = e.screenName,
                    T = e.screenNameSize,
                    I = e.screenNameStyle,
                    L = e.screenNameSuffix,
                    P = e.screenNameSuffixContainerStyle,
                    R = e.style,
                    O = e.translatorType,
                    M = e.verifiedType,
                    D = e.weight,
                    A = e.withFollowsYou,
                    N = (e.withHoverCard, e.withLink),
                    z = e.withName,
                    B = e.withNameWrap,
                    F = e.withScreenName,
                    H = e.withStackedLayout,
                    W = (e.wrapperStyle, (0, i.Z)(e, ze)),
                    U = void 0 === H ? this.context.dense : H,
                    V = {
                      pathname: 'https://twitter.com/'.concat(k || ''),
                      state: C ? { promotedTweetState: C } : void 0
                    },
                    G = N && k ? { link: V, onPress: Z } : { interactive: !1 },
                    j = { color: 'gray700', size: T, style: I },
                    K = {
                      color: void 0,
                      displayContext: a,
                      isBlueVerified: c,
                      isProtected: h,
                      isVerified: y,
                      renderVerifiedBadgeContext: S,
                      translatorType: O,
                      verifiedType: M,
                      affiliateBadgeInfo: t,
                      auxiliaryUserLabels: n
                    };
                  'white' === s && ((K.color = s), (j.color = s));
                  var Y = k
                      ? u.createElement(
                          Ne.Z,
                          (0, r.Z)({}, j, { screenName: k })
                        )
                      : null,
                    $ = z && b && !(0, m.Z)(b),
                    q = F && $ && k,
                    X = !U,
                    J = !B,
                    ee = _ && !(0, m.Z)(_),
                    te = X && l,
                    ne = !X && l,
                    re = u.createElement(
                      p.ZP,
                      { size: E, style: Fe.userBadges },
                      u.createElement(Q, K)
                    ),
                    ie = u.createElement(De, {
                      style: Fe.indicator,
                      type: 'followsYou'
                    }),
                    oe = u.createElement(
                      v.ZP,
                      { background: 'primary', style: Fe.indicator },
                      l
                    ),
                    ae = u.createElement(
                      f.Z,
                      (0, r.Z)({}, G, {
                        interactiveStyles: null,
                        style: Fe.shrinkableContainer
                      }),
                      function (e) {
                        var t = e.isFocused,
                          n = e.isHovered,
                          r = e.isPressed;
                        return u.createElement(
                          d.Z,
                          { style: Fe.nameContainer },
                          !!ee &&
                            u.createElement(w, {
                              accessibilityHidden: !0,
                              focusable: !1,
                              hasAdaptiveImage: !0,
                              size: o || 'medium',
                              style: Fe.userAvatar,
                              uri: _
                            }),
                          u.createElement(
                            p.ZP,
                            {
                              color: s,
                              size: E,
                              style: [
                                Fe.name,
                                J && Fe.nameNowrap,
                                (t || n || r) && Fe.underline
                              ],
                              weight: D
                            },
                            $
                              ? u.createElement(
                                  p.ZP,
                                  {
                                    numberOfLines: J ? 1 : void 0,
                                    style: k ? null : Fe.suspendedOrDoesNotExist
                                  },
                                  x ? x() : b,
                                  u.createElement(
                                    p.ZP,
                                    { style: Fe.inlineBadges },
                                    J ? null : re
                                  )
                                )
                              : k
                                ? u.createElement(
                                    u.Fragment,
                                    null,
                                    u.createElement(Ne.Z, {
                                      color: s,
                                      screenName: k,
                                      size: E
                                    }),
                                    J ? null : re
                                  )
                                : null
                          ),
                          J ? re : null,
                          !q && A ? ie : null,
                          ne && oe
                        );
                      }
                    ),
                    se = u.createElement(
                      f.Z,
                      (0, r.Z)({}, G, {
                        focusable: !1,
                        interactiveStyles: null,
                        style: Fe.root
                      }),
                      u.createElement(d.Z, null, Y)
                    );
                  return u.createElement(
                    d.Z,
                    { style: Fe.root },
                    u.createElement(
                      d.Z,
                      (0, r.Z)({}, W, {
                        style: [Fe.root, X && Fe.unstacked, R]
                      }),
                      this._useUserHoverCardWrapper(ae),
                      q
                        ? u.createElement(
                            d.Z,
                            {
                              style: [
                                Fe.screenNameContainer,
                                X && Fe.screenNameContainerSpaced
                              ]
                            },
                            this._useUserHoverCardWrapper(se),
                            A && ie,
                            te && oe,
                            L
                              ? u.createElement(
                                  d.Z,
                                  { style: [Fe.screenNameSuffixContainer, P] },
                                  u.createElement(g.Z, { color: j.color }),
                                  L
                                )
                              : null
                          )
                        : null
                    )
                  );
                }
              },
              {
                key: '_useUserHoverCardWrapper',
                value: function (e) {
                  return this.props.withHoverCard && this.props.screenName
                    ? u.createElement(
                        Ae.Z,
                        {
                          onAvatarClick: this.props.onAvatarClick,
                          onScreenNameClick: this.props.onScreenNameClick,
                          promotedContent: this.props.promotedContent,
                          screenName: this.props.screenName,
                          wrapperStyle: [
                            Fe.hoverWrapperBaseStyle,
                            this.props.wrapperStyle
                          ]
                        },
                        e
                      )
                    : e;
                }
              }
            ]),
            n
          );
        })(u.Component);
      (0, c.Z)(Be, 'defaultProps', {
        badgeContext: 'content',
        color: 'text',
        weight: 'bold',
        withFollowsYou: !1,
        withNameWrap: !1,
        withName: !0,
        withScreenName: !0,
        withHoverCard: !1
      }),
        (0, c.Z)(Be, 'contextType', b.Z);
      var Fe = y.Z.create(function (e) {
        return {
          root: { maxWidth: '100%', flexShrink: 1, outlineStyle: 'none' },
          userAvatar: { flexShrink: 0, marginEnd: e.spaces.space4 },
          unstacked: { flexDirection: 'row', alignItems: 'center' },
          name: { overflow: 'hidden', alignItems: 'center', display: 'flex' },
          suspendedOrDoesNotExist: {
            fontFeatureSettings: "'ss01' on",
            fontWeight: '800'
          },
          nameNowrap: { whiteSpace: 'nowrap' },
          shrinkableContainer: { maxWidth: '100%', flexShrink: 1 },
          underline: { textDecorationLine: 'underline' },
          nameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            maxWidth: '100%'
          },
          screenNameContainer: {
            flexDirection: 'row',
            flexShrink: 1,
            alignItems: 'center'
          },
          screenNameContainerSpaced: { marginStart: e.spaces.space4 },
          screenNameSuffixContainer: { flexDirection: 'row', flexShrink: 0 },
          userBadges: {
            display: 'inline-flex',
            flexDirection: 'row',
            flexShrink: 0
          },
          indicator: { marginStart: e.spaces.space4 },
          hoverWrapperBaseStyle: { flexShrink: 1, maxWidth: '100%' },
          inlineBadges: { textAlignVertical: 'middle' }
        };
      });
    },
    64549: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(67294),
        i = n(86034),
        o = n(64123),
        a = n(24184),
        s = function (e) {
          var t = e.color,
            n = void 0 === t ? 'gray700' : t,
            o = e.renderScreenNameHighlights,
            s = e.screenName,
            l = e.size,
            u = e.style,
            d = r.useContext(a.Z).isDense,
            h = s ? (d ? '' : '@') + s : null,
            p = s && o ? o() : null;
          return h
            ? r.createElement(
                i.ZP,
                {
                  color: n,
                  dir: 'ltr',
                  numberOfLines: 1,
                  size: l,
                  style: [c.screenName, u]
                },
                p || h
              )
            : null;
        };
      s.defaultProps = { color: 'gray700' };
      const l = s;
      var c = o.Z.create(function (e) {
        return {
          screenName: { flexDirection: 'row', fontFeatureSettings: "'ss01' on" }
        };
      });
    },
    44548: (e, t, n) => {
      'use strict';
      n.d(t, { l: () => i });
      var r = { downloadLink: void 0 },
        i = n(67294).createContext(r);
    },
    51572: (e, t, n) => {
      'use strict';
      n.d(t, { W: () => i, q: () => r }), n(41830), n(67294);
      var r = Object.freeze({
          INITIAL: 'initial',
          AUTO_PAUSED: 'autoPaused',
          USER_PAUSED: 'userPaused',
          AUTO_PLAYING: 'autoPlaying',
          USER_PLAYING: 'userPlaying',
          FINISHED: 'finished'
        }),
        i = Object.freeze({ DOCKABLE: 2, NORMAL: 1, SPACE: 0, INELIGIBLE: -1 });
    },
    91780: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => x });
      var r = n(87462),
        i = n(45987),
        o = n(15671),
        a = n(43144),
        s = n(97326),
        l = n(60136),
        c = n(98557),
        u = n(4942),
        d = (n(34338), n(67294)),
        h = n(67177),
        p = n(74387),
        f = n.n(p),
        m = n(21322),
        v = n(79240),
        g = n(40830),
        y = n(2883),
        b = n(32770),
        w = n(64123),
        E = [
          'accessibilityLabel',
          'duration',
          'onComplete',
          'onPress',
          'size',
          'type'
        ],
        Z = f().f17dfdb6,
        _ = 'small',
        C = 'upNext',
        x = (function (e) {
          (0, l.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            (0, o.Z)(this, n);
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            return (
              (e = t.call.apply(t, [this].concat(i))),
              (0, u.Z)((0, s.Z)(e), 'state', { progress: 0 }),
              (0, u.Z)((0, s.Z)(e), '_getInteractiveStyle', function () {
                return e.props.type === C
                  ? g.Z.generate({
                      backgroundColor: w.Z.theme.colors.transparent,
                      color: w.Z.theme.colors.white
                    })
                  : g.Z.generate({
                      backgroundColor: w.Z.theme.colors.primary,
                      color: w.Z.theme.colors.white,
                      customFocusRingColor: 'rgba(255,255,255,0.5)'
                    });
              }),
              (0, u.Z)((0, s.Z)(e), '_animateProgress', function () {
                var t = e.props,
                  n = t.duration,
                  r = t.onComplete;
                if (n && r && e._startTime) {
                  var i = Math.min(1, (Date.now() - e._startTime) / n);
                  e.setState({ progress: i }),
                    1 === i
                      ? r()
                      : (e._frame = window.requestAnimationFrame(
                          e._animateProgress
                        ));
                }
              }),
              e
            );
          }
          return (
            (0, a.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.duration,
                    n = e.onComplete;
                  e.type === C &&
                    t &&
                    n &&
                    ((this._startTime = Date.now()),
                    (this._frame = window.requestAnimationFrame(
                      this._animateProgress
                    )));
                }
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.cancelAnimationFrame(this._frame);
                }
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabel,
                    o = t.duration,
                    a = t.onComplete,
                    s = t.onPress,
                    l = t.size,
                    c = t.type,
                    u = (0, i.Z)(t, E);
                  if (!(c !== C || (o && a))) return null;
                  var p = this._getInteractiveStyle();
                  return d.createElement(b.Z, null, function (t) {
                    var i = t.direction;
                    return d.createElement(
                      y.Z,
                      (0, r.Z)({}, u, {
                        accessibilityLabel: n,
                        interactiveStyles: p,
                        onPress: s,
                        style: [
                          e._getViewSizeStyles(l),
                          c !== C && S.videoButtonColor,
                          e.props.type !== C && S.border
                        ]
                      }),
                      c === C &&
                        d.createElement(v.Z, {
                          color: 'blue500',
                          progress: e.state.progress,
                          size: e._getProgressCircleSize(l),
                          type: 'onMedia'
                        }),
                      d.createElement(
                        h.Z,
                        { style: S.iconWrapper },
                        d.createElement(m.Z, {
                          style: [
                            S.playIcon,
                            'rtl' === i ? S.rightAlignIcon : S.leftAlignIcon,
                            c === C && S.upNextIconSize
                          ]
                        })
                      )
                    );
                  });
                }
              },
              {
                key: '_getViewSizeStyles',
                value: function (e) {
                  return e === _ ? S.smallViewSize : S.root;
                }
              },
              {
                key: '_getProgressCircleSize',
                value: function (e) {
                  return e === _ ? 35 : 67;
                }
              }
            ]),
            n
          );
        })(d.Component);
      (0, u.Z)(x, 'defaultProps', {
        accessibilityLabel: Z,
        size: 'normal',
        type: 'video'
      });
      var S = w.Z.create(function (e) {
        return {
          root: { borderRadius: e.borderRadii.infinite, height: 67, width: 67 },
          smallViewSize: {
            borderRadius: e.borderRadii.infinite,
            height: 35,
            width: 35
          },
          videoButtonColor: { backgroundColor: e.colors.primary },
          iconWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            height: '100%',
            width: '100%'
          },
          border: {
            borderColor: e.colors.white,
            borderWidth: e.borderWidths.large,
            borderStyle: 'solid'
          },
          playIcon: {
            height: 'calc(50% + '.concat(e.borderWidths.large, ')'),
            width: 'calc(50% + '.concat(e.borderWidths.large, ')'),
            color: e.colors.white
          },
          leftAlignIcon: { paddingStart: 3 },
          rightAlignIcon: { paddingEnd: 3 },
          upNextIconSize: { height: '50%', width: '50%' }
        };
      });
    },
    98788: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i }), n(28436), n(64043), n(57267);
      var r =
        /\u00AD|\u034F|\u061C|[\u115F-\u1160]|[\u17B4-\u17B5]|[\u180B-\u180D]|\u180E|[\u200B-\u200F]|[\u202A-\u202E]|[\u2060-\u2064]|\u2065|[\u2066-\u206F]|\u3164|[\uFE00-\uFE0F]|\uFEFF|\uFFA0|[\uFFF0-\uFFF8]/g;
      const i = function (e) {
        return 0 === e.trim().length || 0 === e.replace(r, '').length;
      };
    },
    94587: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => r });
      const r = n(67294).createContext({ isInHoverCard: !1 });
    },
    51507: (e, t, n) => {
      'use strict';
      n.d(t, { J: () => r, O: () => i }), n(41830);
      var r = Object.freeze({
          interactive: 'interactive',
          forceVisible: 'forceVisible',
          forceHidden: 'forceHidden'
        }),
        i = Object.freeze({
          longPress: 'long press',
          keyboard: 'keyboard',
          hover: 'hover',
          click: 'click',
          force: 'force'
        });
    },
    79240: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => m });
      var r = n(87462),
        i = n(29439),
        o = n(45987),
        a = (n(470), n(34338), n(97895), n(41830), n(67294)),
        s = n(67177),
        l = n(64123);
      function c(e, t) {
        return e * (1 - Math.cos(t / 2));
      }
      var u = [
          'color',
          'progress',
          'colorInner',
          'progressInner',
          'size',
          'type',
          'strokeWidth'
        ],
        d = { cx: '50%', cy: '50%' },
        h = l.Z.create({
          root: { alignItems: 'center', justifyContent: 'center' },
          track: {
            transform: [{ rotate: '-90deg' }],
            transitionProperty: 'height, width',
            transitionDuration: '0.15s'
          }
        }),
        p = Object.freeze({ large: 'large', small: 'small' }),
        f = function (e) {
          return Math.max(0, Math.min(e, 1));
        };
      const m = function (e) {
        var t = e.color,
          n = void 0 === t ? 'primary' : t,
          m = e.progress,
          v = void 0 === m ? 0 : m,
          g = e.colorInner,
          y = void 0 === g ? 'primary' : g,
          b = e.progressInner,
          w = void 0 === b ? 0 : b,
          E = e.size,
          Z = void 0 === E ? p.small : E,
          _ = e.type,
          C = void 0 === _ ? 'normal' : _,
          x = e.strokeWidth,
          S = void 0 === x ? 'thin' : x,
          k = (0, o.Z)(e, u),
          T = (function (e) {
            var t;
            if ('number' == typeof e) t = e;
            else
              switch (e) {
                case p.large:
                  t = l.Z.theme.spacesPx.space36;
                  break;
                case p.small:
                default:
                  t = l.Z.theme.spacesPx.space20;
              }
            return [t, t / 2];
          })(Z),
          I = (0, i.Z)(T, 2),
          L = I[0],
          P = I[1],
          R = (function (e) {
            var t = e.color,
              n = e.progress,
              r = e.radius,
              i = e.strokeWidth,
              o = e.type,
              a = { track: {}, progress: {} };
            (a.track.width = (function (e) {
              return 'thick' === e
                ? l.Z.theme.spacesPx.space4
                : l.Z.theme.spacesPx.space2;
            })(i)),
              (a.track.stroke = (function (e) {
                return 'onMedia' === e
                  ? l.Z.theme.colors.white
                  : l.Z.theme.colors.borderColor;
              })(o)),
              (a.progress.stroke = l.Z.theme.colors[t]);
            var s = f(n),
              c = 2 * Math.PI * r,
              u = (1 - s) * c;
            return (
              (a.progress.strokeDasharray = c),
              (a.progress.strokeDashoffset = u),
              a
            );
          })({ color: n, strokeWidth: S, progress: v, radius: P, type: C }),
          O = (function (e) {
            var t = e.colorInner,
              n = e.progressInner,
              r = e.radius,
              i = e.track_width,
              o = {
                clip_id: String(Math.random()),
                clipPath: void 0,
                fill: l.Z.theme.colors[t],
                width: 0,
                x: 0,
                radius: 0
              };
            o.clipPath = 'url(#'.concat(o.clip_id, ')');
            var a = f(n);
            if (0 === a) return o;
            a > 0 && a < 0.05 && (a = 0.05);
            var s = i + 0.5;
            return (
              (o.x = (-1 * i) / 2),
              (o.radius = r - i / 2 - 0.5),
              (o.width =
                s +
                (function (e, t) {
                  var n,
                    r,
                    i = 0.5;
                  return (
                    (n =
                      e -
                      c(e, (1 - Math.min(t, i) / i) * Math.PI) +
                      c(e, (Math.max(t - i, 0) / i) * Math.PI)),
                    (r = Math.pow(10, 3)),
                    Math.round(n * r) / r
                  );
                })(o.radius, a)),
              o
            );
          })({
            colorInner: y,
            radius: P,
            track_width: R.track.width,
            progressInner: w
          });
        return a.createElement(
          s.Z,
          (0, r.Z)(
            {},
            (function (e) {
              var t,
                n = e.props,
                r =
                  ((t = e.progressInner || e.progress), Math.floor(100 * f(t)));
              return {
                accessibilityLabel: n.accessibilityLabel,
                accessibilityRole: 'progressbar',
                accessibilityValueMax: 100,
                accessibilityValueMin: 0,
                accessibilityValueNow: r
              };
            })({ progressInner: w, progress: v, props: k }),
            { style: [h.root, k.style] }
          ),
          a.createElement(
            s.Z,
            { style: [h.track, { height: L, width: L }] },
            a.createElement(
              'svg',
              {
                height: '100%',
                style: { overflow: 'visible' },
                viewBox: '0 0 '.concat(L, ' ').concat(L),
                width: '100%'
              },
              a.createElement(
                'defs',
                null,
                a.createElement(
                  'clipPath',
                  { id: O.clip_id },
                  a.createElement('rect', {
                    height: '100%',
                    width: O.width,
                    x: O.x
                  })
                )
              ),
              a.createElement(
                'circle',
                (0, r.Z)({}, d, {
                  fill: 'none',
                  r: P,
                  stroke: R.track.stroke,
                  strokeWidth: R.track.width
                })
              ),
              a.createElement(
                'circle',
                (0, r.Z)({}, d, {
                  fill: 'none',
                  r: P,
                  stroke: R.progress.stroke,
                  strokeDasharray: R.progress.strokeDasharray,
                  strokeDashoffset: R.progress.strokeDashoffset,
                  strokeLinecap: 'round',
                  strokeWidth: R.track.width
                })
              ),
              a.createElement(
                'circle',
                (0, r.Z)({}, d, {
                  clipPath: O.clipPath,
                  fill: O.fill,
                  r: O.radius
                })
              )
            )
          )
        );
      };
    },
    76509: (e, t, n) => {
      'use strict';
      n.d(t, { P: () => r, Z: () => i }), n(41830);
      var r = Object.freeze({
        BROADCAST: 'broadcast',
        DM: 'dm',
        TWEET: 'tweet',
        STATIC_BROADCAST: 'static_broadcast',
        AUDIO_SPACE: 'audio_space'
      });
      const i = {
        forAudioSpace: function (e, t, n, i) {
          return {
            type: r.AUDIO_SPACE,
            id: e,
            mediaKey: t,
            isLive: n,
            acquisitionParams: i
          };
        },
        forBroadcast: function (e, t, n) {
          return { type: r.BROADCAST, id: e, tweetId: t, impressionId: n };
        },
        forDm: function (e) {
          return { type: r.DM, id: e };
        },
        forTweet: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return { type: r.TWEET, id: e, impressionId: t, index: n };
        }
      };
    },
    77956: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => r });
      const r = n(67294).createContext(!1);
    },
    75851: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => c });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(77956),
        s = n(7960),
        l = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = i.useContext(a.Z);
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style, t && s.Z.iconRTL],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z'
                  })
                )
              }
            )
          );
        };
      l.metadata = { width: 24, height: 24 };
      const c = l;
    },
    47794: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => c });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(77956),
        s = n(7960),
        l = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = i.useContext(a.Z);
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.Z.root, e.style, t && s.Z.iconRTL],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M12.957 4.54L20.414 12l-7.457 7.46-1.414-1.42L16.586 13H3v-2h13.586l-5.043-5.04 1.414-1.42z'
                  })
                )
              }
            )
          );
        };
      l.metadata = { width: 24, height: 24 };
      const c = l;
    },
    40608: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    93384: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    42354: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25zM22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM10.5 15.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S12.83 17 12 17s-1.5-.67-1.5-1.5zm.5-2.8L10.75 7h2.5L13 12.7s-.5-.2-1-.2-1 .2-1 .2z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    47497: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    63987: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    38401: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zM13 17h-2v-5h2v5zm-1-7c-.83 0-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5S12.83 10 12 10z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    5781: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    29255: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    1398: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    8876: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    21322: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', { d: 'M21 12L4 2v20l17-10z' })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    91149: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    11537: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => l });
      var r = n(1413),
        i = n(67294),
        o = n(37353),
        a = n(7960),
        s = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (0, o.Z)(
            'svg',
            (0, r.Z)(
              (0, r.Z)({}, e),
              {},
              {
                accessibilityRole: e.accessibilityLabel
                  ? e.accessibilityRole || 'img'
                  : void 0,
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [a.Z.root, e.style],
                viewBox: '0 0 24 24',
                children: i.createElement(
                  'g',
                  null,
                  i.createElement('path', {
                    d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
                  })
                )
              }
            )
          );
        };
      s.metadata = { width: 24, height: 24 };
      const l = s;
    },
    7960: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => r });
      const r = n(20773).Z.create({
        root: {
          display: 'inline-block',
          fill: 'currentcolor',
          height: '1.25em',
          maxWidth: '100%',
          position: 'relative',
          userSelect: 'none',
          textAlignVertical: 'text-bottom'
        },
        iconRTL: { transform: [{ scaleX: -1 }] }
      });
    },
    16942: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => o });
      var r = n(20296),
        i = n.n(r);
      const o = function (e, t, n) {
        return i()(e, t, n);
      };
    },
    20129: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => r });
      const r = function (e) {
        return 'number' == typeof e && isFinite(e);
      };
    },
    22234: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i }),
        n(752),
        n(60228),
        n(19649),
        n(21694),
        n(76265),
        n(38077);
      var r = n(50633);
      const i = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.Z,
          n = new Set();
        return e.filter(function (r, i) {
          var o = t(r, i, e);
          return !n.has(o) && (n.add(o), !0);
        });
      };
    },
    20296: (e) => {
      function t(e, t, n) {
        var r, i, o, a, s;
        function l() {
          var c = Date.now() - a;
          c < t && c >= 0
            ? (r = setTimeout(l, t - c))
            : ((r = null), n || ((s = e.apply(o, i)), (o = i = null)));
        }
        null == t && (t = 100);
        var c = function () {
          (o = this), (i = arguments), (a = Date.now());
          var c = n && !r;
          return (
            r || (r = setTimeout(l, t)),
            c && ((s = e.apply(o, i)), (o = i = null)),
            s
          );
        };
        return (
          (c.clear = function () {
            r && (clearTimeout(r), (r = null));
          }),
          (c.flush = function () {
            r &&
              ((s = e.apply(o, i)),
              (o = i = null),
              clearTimeout(r),
              (r = null));
          }),
          c
        );
      }
      (t.debounce = t), (e.exports = t);
    },
    19303: (e) => {
      'use strict';
      var t = Object.prototype.hasOwnProperty;
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      e.exports = function (e, r) {
        if (n(e, r)) return !0;
        if (
          'object' != typeof e ||
          null === e ||
          'object' != typeof r ||
          null === r
        )
          return !1;
        var i = Object.keys(e),
          o = Object.keys(r);
        if (i.length !== o.length) return !1;
        for (var a = 0; a < i.length; a++)
          if (!t.call(r, i[a]) || !n(e[i[a]], r[i[a]])) return !1;
        return !0;
      };
    },
    8679: (e, t, n) => {
      'use strict';
      var r = n(59864),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};
      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }),
        (s[r.Memo] = a);
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        f = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' != typeof n) {
          if (f) {
            var i = p(n);
            i && i !== f && e(t, i, r);
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), m = l(n), v = 0; v < a.length; ++v) {
            var g = a[v];
            if (!(o[g] || (r && r[g]) || (m && m[g]) || (s && s[g]))) {
              var y = h(n, g);
              try {
                c(t, g, y);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    38698: (e, t, n) => {
      'use strict';
      var r = n(27418),
        i = n(67294);
      function o(e) {
        for (
          var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += '&args[]=' + encodeURIComponent(arguments[n]);
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      var a = 60106,
        s = 60107,
        l = 60108,
        c = 60114,
        u = 60109,
        d = 60110,
        h = 60112,
        p = 60113,
        f = 60120,
        m = 60115,
        v = 60116,
        g = 60121,
        y = 60117,
        b = 60119,
        w = 60129,
        E = 60131;
      if ('function' == typeof Symbol && Symbol.for) {
        var Z = Symbol.for;
        (a = Z('react.portal')),
          (s = Z('react.fragment')),
          (l = Z('react.strict_mode')),
          (c = Z('react.profiler')),
          (u = Z('react.provider')),
          (d = Z('react.context')),
          (h = Z('react.forward_ref')),
          (p = Z('react.suspense')),
          (f = Z('react.suspense_list')),
          (m = Z('react.memo')),
          (v = Z('react.lazy')),
          (g = Z('react.block')),
          (y = Z('react.fundamental')),
          (b = Z('react.scope')),
          (w = Z('react.debug_trace_mode')),
          (E = Z('react.legacy_hidden'));
      }
      function _(e) {
        if (null == e) return null;
        if ('function' == typeof e) return e.displayName || e.name || null;
        if ('string' == typeof e) return e;
        switch (e) {
          case s:
            return 'Fragment';
          case a:
            return 'Portal';
          case c:
            return 'Profiler';
          case l:
            return 'StrictMode';
          case p:
            return 'Suspense';
          case f:
            return 'SuspenseList';
        }
        if ('object' == typeof e)
          switch (e.$$typeof) {
            case d:
              return (e.displayName || 'Context') + '.Consumer';
            case u:
              return (e._context.displayName || 'Context') + '.Provider';
            case h:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ''),
                e.displayName ||
                  ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
              );
            case m:
              return _(e.type);
            case g:
              return _(e._render);
            case v:
              (t = e._payload), (e = e._init);
              try {
                return _(e(t));
              } catch (e) {}
          }
        return null;
      }
      var C = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        x = {};
      function S(e, t) {
        for (var n = 0 | e._threadCount; n <= t; n++)
          (e[n] = e._currentValue2), (e._threadCount = n + 1);
      }
      for (var k = new Uint16Array(16), T = 0; 15 > T; T++) k[T] = T + 1;
      k[15] = 0;
      var I =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        L = Object.prototype.hasOwnProperty,
        P = {},
        R = {};
      function O(e) {
        return (
          !!L.call(R, e) ||
          (!L.call(P, e) && (I.test(e) ? (R[e] = !0) : ((P[e] = !0), !1)))
        );
      }
      function M(e, t, n, r, i, o, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = a);
      }
      var D = {};
      'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
        .split(' ')
        .forEach(function (e) {
          D[e] = new M(e, 0, !1, e, null, !1, !1);
        }),
        [
          ['acceptCharset', 'accept-charset'],
          ['className', 'class'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv']
        ].forEach(function (e) {
          var t = e[0];
          D[t] = new M(t, 1, !1, e[1], null, !1, !1);
        }),
        ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
          function (e) {
            D[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          'autoReverse',
          'externalResourcesRequired',
          'focusable',
          'preserveAlpha'
        ].forEach(function (e) {
          D[e] = new M(e, 2, !1, e, null, !1, !1);
        }),
        'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
          .split(' ')
          .forEach(function (e) {
            D[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
          D[e] = new M(e, 3, !0, e, null, !1, !1);
        }),
        ['capture', 'download'].forEach(function (e) {
          D[e] = new M(e, 4, !1, e, null, !1, !1);
        }),
        ['cols', 'rows', 'size', 'span'].forEach(function (e) {
          D[e] = new M(e, 6, !1, e, null, !1, !1);
        }),
        ['rowSpan', 'start'].forEach(function (e) {
          D[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var A = /[\-:]([a-z])/g;
      function N(e) {
        return e[1].toUpperCase();
      }
      'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(A, N);
          D[t] = new M(t, 1, !1, e, null, !1, !1);
        }),
        'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(A, N);
            D[t] = new M(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
          }),
        ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
          var t = e.replace(A, N);
          D[t] = new M(
            t,
            1,
            !1,
            e,
            'http://www.w3.org/XML/1998/namespace',
            !1,
            !1
          );
        }),
        ['tabIndex', 'crossOrigin'].forEach(function (e) {
          D[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (D.xlinkHref = new M(
          'xlinkHref',
          1,
          !1,
          'xlink:href',
          'http://www.w3.org/1999/xlink',
          !0,
          !1
        )),
        ['src', 'href', 'action', 'formAction'].forEach(function (e) {
          D[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var z = /["'&<>]/;
      function B(e) {
        if ('boolean' == typeof e || 'number' == typeof e) return '' + e;
        e = '' + e;
        var t = z.exec(e);
        if (t) {
          var n,
            r = '',
            i = 0;
          for (n = t.index; n < e.length; n++) {
            switch (e.charCodeAt(n)) {
              case 34:
                t = '&quot;';
                break;
              case 38:
                t = '&amp;';
                break;
              case 39:
                t = '&#x27;';
                break;
              case 60:
                t = '&lt;';
                break;
              case 62:
                t = '&gt;';
                break;
              default:
                continue;
            }
            i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t);
          }
          e = i !== n ? r + e.substring(i, n) : r;
        }
        return e;
      }
      function F(e, t) {
        var n,
          r = D.hasOwnProperty(e) ? D[e] : null;
        return (
          (n = 'style' !== e) &&
            (n =
              null !== r
                ? 0 === r.type
                : 2 < e.length &&
                  ('o' === e[0] || 'O' === e[0]) &&
                  ('n' === e[1] || 'N' === e[1])),
          n ||
          (function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case 'function':
                  case 'symbol':
                    return !0;
                  case 'boolean':
                    return null !== n
                      ? !n.acceptsBooleans
                      : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                          'aria-' !== e;
                  default:
                    return !1;
                }
              })(e, t, n)
            )
              return !0;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(e, t, r)
            ? ''
            : null !== r
              ? ((e = r.attributeName),
                3 === (n = r.type) || (4 === n && !0 === t)
                  ? e + '=""'
                  : (r.sanitizeURL && (t = '' + t), e + '="' + B(t) + '"'))
              : O(e)
                ? e + '="' + B(t) + '"'
                : ''
        );
      }
      var H =
          'function' == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        W = null,
        U = null,
        V = null,
        G = !1,
        j = !1,
        K = null,
        Y = 0;
      function $() {
        if (null === W) throw Error(o(321));
        return W;
      }
      function q() {
        if (0 < Y) throw Error(o(312));
        return { memoizedState: null, queue: null, next: null };
      }
      function X() {
        return (
          null === V
            ? null === U
              ? ((G = !1), (U = V = q()))
              : ((G = !0), (V = U))
            : null === V.next
              ? ((G = !1), (V = V.next = q()))
              : ((G = !0), (V = V.next)),
          V
        );
      }
      function Q(e, t, n, r) {
        for (; j; ) (j = !1), (Y += 1), (V = null), (n = e(t, r));
        return J(), n;
      }
      function J() {
        (W = null), (j = !1), (U = null), (Y = 0), (V = K = null);
      }
      function ee(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
      function te(e, t, n) {
        if (((W = $()), (V = X()), G)) {
          var r = V.queue;
          if (((t = r.dispatch), null !== K && void 0 !== (n = K.get(r)))) {
            K.delete(r), (r = V.memoizedState);
            do {
              (r = e(r, n.action)), (n = n.next);
            } while (null !== n);
            return (V.memoizedState = r), [r, t];
          }
          return [V.memoizedState, t];
        }
        return (
          (e =
            e === ee
              ? 'function' == typeof t
                ? t()
                : t
              : void 0 !== n
                ? n(t)
                : t),
          (V.memoizedState = e),
          (e = (e = V.queue = { last: null, dispatch: null }).dispatch =
            re.bind(null, W, e)),
          [V.memoizedState, e]
        );
      }
      function ne(e, t) {
        if (((W = $()), (t = void 0 === t ? null : t), null !== (V = X()))) {
          var n = V.memoizedState;
          if (null !== n && null !== t) {
            var r = n[1];
            e: if (null === r) r = !1;
            else {
              for (var i = 0; i < r.length && i < t.length; i++)
                if (!H(t[i], r[i])) {
                  r = !1;
                  break e;
                }
              r = !0;
            }
            if (r) return n[0];
          }
        }
        return (e = e()), (V.memoizedState = [e, t]), e;
      }
      function re(e, t, n) {
        if (!(25 > Y)) throw Error(o(301));
        if (e === W)
          if (
            ((j = !0),
            (e = { action: n, next: null }),
            null === K && (K = new Map()),
            void 0 === (n = K.get(t)))
          )
            K.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
      }
      function ie() {}
      var oe = null,
        ae = {
          readContext: function (e) {
            var t = oe.threadID;
            return S(e, t), e[t];
          },
          useContext: function (e) {
            $();
            var t = oe.threadID;
            return S(e, t), e[t];
          },
          useMemo: ne,
          useReducer: te,
          useRef: function (e) {
            W = $();
            var t = (V = X()).memoizedState;
            return null === t
              ? ((e = { current: e }), (V.memoizedState = e))
              : t;
          },
          useState: function (e) {
            return te(ee, e);
          },
          useLayoutEffect: function () {},
          useCallback: function (e, t) {
            return ne(function () {
              return e;
            }, t);
          },
          useImperativeHandle: ie,
          useEffect: ie,
          useDebugValue: ie,
          useDeferredValue: function (e) {
            return $(), e;
          },
          useTransition: function () {
            return (
              $(),
              [
                function (e) {
                  e();
                },
                !1
              ]
            );
          },
          useOpaqueIdentifier: function () {
            return (
              (oe.identifierPrefix || '') + 'R:' + (oe.uniqueID++).toString(36)
            );
          },
          useMutableSource: function (e, t) {
            return $(), t(e._source);
          }
        },
        se = 'http://www.w3.org/1999/xhtml';
      function le(e) {
        switch (e) {
          case 'svg':
            return 'http://www.w3.org/2000/svg';
          case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
          default:
            return 'http://www.w3.org/1999/xhtml';
        }
      }
      var ce = {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        },
        ue = r({ menuitem: !0 }, ce),
        de = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        he = ['Webkit', 'ms', 'Moz', 'O'];
      Object.keys(de).forEach(function (e) {
        he.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (de[t] = de[e]);
        });
      });
      var pe = /([A-Z])/g,
        fe = /^ms-/,
        me = i.Children.toArray,
        ve = C.ReactCurrentDispatcher,
        ge = { listing: !0, pre: !0, textarea: !0 },
        ye = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
        be = {},
        we = {},
        Ee = Object.prototype.hasOwnProperty,
        Ze = {
          children: null,
          dangerouslySetInnerHTML: null,
          suppressContentEditableWarning: null,
          suppressHydrationWarning: null
        };
      function _e(e, t) {
        if (void 0 === e) throw Error(o(152, _(t) || 'Component'));
      }
      var Ce = (function () {
        function e(e, t, n) {
          i.isValidElement(e)
            ? e.type !== s
              ? (e = [e])
              : ((e = e.props.children),
                (e = i.isValidElement(e) ? [e] : me(e)))
            : (e = me(e)),
            (e = {
              type: null,
              domNamespace: se,
              children: e,
              childIndex: 0,
              context: x,
              footer: ''
            });
          var r = k[0];
          if (0 === r) {
            var a = k,
              l = 2 * (r = a.length);
            if (!(65536 >= l)) throw Error(o(304));
            var c = new Uint16Array(l);
            for (c.set(a), (k = c)[0] = r + 1, a = r; a < l - 1; a++)
              k[a] = a + 1;
            k[l - 1] = 0;
          } else k[0] = k[r];
          (this.threadID = r),
            (this.stack = [e]),
            (this.exhausted = !1),
            (this.currentSelectValue = null),
            (this.previousWasTextNode = !1),
            (this.makeStaticMarkup = t),
            (this.suspenseDepth = 0),
            (this.contextIndex = -1),
            (this.contextStack = []),
            (this.contextValueStack = []),
            (this.uniqueID = 0),
            (this.identifierPrefix = (n && n.identifierPrefix) || '');
        }
        var t = e.prototype;
        return (
          (t.destroy = function () {
            if (!this.exhausted) {
              (this.exhausted = !0), this.clearProviders();
              var e = this.threadID;
              (k[e] = k[0]), (k[0] = e);
            }
          }),
          (t.pushProvider = function (e) {
            var t = ++this.contextIndex,
              n = e.type._context,
              r = this.threadID;
            S(n, r);
            var i = n[r];
            (this.contextStack[t] = n),
              (this.contextValueStack[t] = i),
              (n[r] = e.props.value);
          }),
          (t.popProvider = function () {
            var e = this.contextIndex,
              t = this.contextStack[e],
              n = this.contextValueStack[e];
            (this.contextStack[e] = null),
              (this.contextValueStack[e] = null),
              this.contextIndex--,
              (t[this.threadID] = n);
          }),
          (t.clearProviders = function () {
            for (var e = this.contextIndex; 0 <= e; e--)
              this.contextStack[e][this.threadID] = this.contextValueStack[e];
          }),
          (t.read = function (e) {
            if (this.exhausted) return null;
            var t = oe;
            oe = this;
            var n = ve.current;
            ve.current = ae;
            try {
              for (var r = [''], i = !1; r[0].length < e; ) {
                if (0 === this.stack.length) {
                  this.exhausted = !0;
                  var a = this.threadID;
                  (k[a] = k[0]), (k[0] = a);
                  break;
                }
                var s = this.stack[this.stack.length - 1];
                if (i || s.childIndex >= s.children.length) {
                  var l = s.footer;
                  if (
                    ('' !== l && (this.previousWasTextNode = !1),
                    this.stack.pop(),
                    'select' === s.type)
                  )
                    this.currentSelectValue = null;
                  else if (
                    null != s.type &&
                    null != s.type.type &&
                    s.type.type.$$typeof === u
                  )
                    this.popProvider(s.type);
                  else if (s.type === p) {
                    this.suspenseDepth--;
                    var c = r.pop();
                    if (i) {
                      i = !1;
                      var d = s.fallbackFrame;
                      if (!d) throw Error(o(303));
                      this.stack.push(d),
                        (r[this.suspenseDepth] += '\x3c!--$!--\x3e');
                      continue;
                    }
                    r[this.suspenseDepth] += c;
                  }
                  r[this.suspenseDepth] += l;
                } else {
                  var h = s.children[s.childIndex++],
                    f = '';
                  try {
                    f += this.render(h, s.context, s.domNamespace);
                  } catch (e) {
                    if (null != e && 'function' == typeof e.then)
                      throw Error(o(294));
                    throw e;
                  }
                  r.length <= this.suspenseDepth && r.push(''),
                    (r[this.suspenseDepth] += f);
                }
              }
              return r[0];
            } finally {
              (ve.current = n), (oe = t), J();
            }
          }),
          (t.render = function (e, t, n) {
            if ('string' == typeof e || 'number' == typeof e)
              return '' == (n = '' + e)
                ? ''
                : this.makeStaticMarkup
                  ? B(n)
                  : this.previousWasTextNode
                    ? '\x3c!-- --\x3e' + B(n)
                    : ((this.previousWasTextNode = !0), B(n));
            if (
              ((e = (t = (function (e, t, n) {
                function a(i, a) {
                  var s = a.prototype && a.prototype.isReactComponent,
                    l = (function (e, t, n, r) {
                      if (
                        r &&
                        'object' == typeof (r = e.contextType) &&
                        null !== r
                      )
                        return S(r, n), r[n];
                      if ((e = e.contextTypes)) {
                        for (var i in ((n = {}), e)) n[i] = t[i];
                        t = n;
                      } else t = x;
                      return t;
                    })(a, t, n, s),
                    c = [],
                    u = !1,
                    d = {
                      isMounted: function () {
                        return !1;
                      },
                      enqueueForceUpdate: function () {
                        if (null === c) return null;
                      },
                      enqueueReplaceState: function (e, t) {
                        (u = !0), (c = [t]);
                      },
                      enqueueSetState: function (e, t) {
                        if (null === c) return null;
                        c.push(t);
                      }
                    };
                  if (s) {
                    if (
                      ((s = new a(i.props, l, d)),
                      'function' == typeof a.getDerivedStateFromProps)
                    ) {
                      var h = a.getDerivedStateFromProps.call(
                        null,
                        i.props,
                        s.state
                      );
                      null != h && (s.state = r({}, s.state, h));
                    }
                  } else if (
                    ((W = {}),
                    (s = a(i.props, l, d)),
                    null == (s = Q(a, i.props, s, l)) || null == s.render)
                  )
                    return void _e((e = s), a);
                  if (
                    ((s.props = i.props),
                    (s.context = l),
                    (s.updater = d),
                    void 0 === (d = s.state) && (s.state = d = null),
                    'function' == typeof s.UNSAFE_componentWillMount ||
                      'function' == typeof s.componentWillMount)
                  )
                    if (
                      ('function' == typeof s.componentWillMount &&
                        'function' != typeof a.getDerivedStateFromProps &&
                        s.componentWillMount(),
                      'function' == typeof s.UNSAFE_componentWillMount &&
                        'function' != typeof a.getDerivedStateFromProps &&
                        s.UNSAFE_componentWillMount(),
                      c.length)
                    ) {
                      d = c;
                      var p = u;
                      if (((c = null), (u = !1), p && 1 === d.length))
                        s.state = d[0];
                      else {
                        h = p ? d[0] : s.state;
                        var f = !0;
                        for (p = p ? 1 : 0; p < d.length; p++) {
                          var m = d[p];
                          null !=
                            (m =
                              'function' == typeof m
                                ? m.call(s, h, i.props, l)
                                : m) &&
                            (f ? ((f = !1), (h = r({}, h, m))) : r(h, m));
                        }
                        s.state = h;
                      }
                    } else c = null;
                  if (
                    (_e((e = s.render()), a),
                    'function' == typeof s.getChildContext &&
                      'object' == typeof (i = a.childContextTypes))
                  ) {
                    var v = s.getChildContext();
                    for (var g in v)
                      if (!(g in i)) throw Error(o(108, _(a) || 'Unknown', g));
                  }
                  v && (t = r({}, t, v));
                }
                for (; i.isValidElement(e); ) {
                  var s = e,
                    l = s.type;
                  if ('function' != typeof l) break;
                  a(s, l);
                }
                return { child: e, context: t };
              })(e, t, this.threadID)).child),
              (t = t.context),
              null === e || !1 === e)
            )
              return '';
            if (!i.isValidElement(e)) {
              if (null != e && null != e.$$typeof) {
                if ((n = e.$$typeof) === a) throw Error(o(257));
                throw Error(o(258, n.toString()));
              }
              return (
                (e = me(e)),
                this.stack.push({
                  type: null,
                  domNamespace: n,
                  children: e,
                  childIndex: 0,
                  context: t,
                  footer: ''
                }),
                ''
              );
            }
            var g = e.type;
            if ('string' == typeof g) return this.renderDOM(e, t, n);
            switch (g) {
              case E:
              case w:
              case l:
              case c:
              case f:
              case s:
                return (
                  (e = me(e.props.children)),
                  this.stack.push({
                    type: null,
                    domNamespace: n,
                    children: e,
                    childIndex: 0,
                    context: t,
                    footer: ''
                  }),
                  ''
                );
              case p:
                throw Error(o(294));
              case b:
                throw Error(o(343));
            }
            if ('object' == typeof g && null !== g)
              switch (g.$$typeof) {
                case h:
                  W = {};
                  var Z = g.render(e.props, e.ref);
                  return (
                    (Z = Q(g.render, e.props, Z, e.ref)),
                    (Z = me(Z)),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: Z,
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    ''
                  );
                case m:
                  return (
                    (e = [i.createElement(g.type, r({ ref: e.ref }, e.props))]),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: e,
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    ''
                  );
                case u:
                  return (
                    (n = {
                      type: e,
                      domNamespace: n,
                      children: (g = me(e.props.children)),
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    this.pushProvider(e),
                    this.stack.push(n),
                    ''
                  );
                case d:
                  (g = e.type), (Z = e.props);
                  var C = this.threadID;
                  return (
                    S(g, C),
                    (g = me(Z.children(g[C]))),
                    this.stack.push({
                      type: e,
                      domNamespace: n,
                      children: g,
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    ''
                  );
                case y:
                  throw Error(o(338));
                case v:
                  return (
                    (g = (Z = (g = e.type)._init)(g._payload)),
                    (e = [i.createElement(g, r({ ref: e.ref }, e.props))]),
                    this.stack.push({
                      type: null,
                      domNamespace: n,
                      children: e,
                      childIndex: 0,
                      context: t,
                      footer: ''
                    }),
                    ''
                  );
              }
            throw Error(o(130, null == g ? g : typeof g, ''));
          }),
          (t.renderDOM = function (e, t, n) {
            var a = e.type.toLowerCase();
            if ((n === se && le(a), !be.hasOwnProperty(a))) {
              if (!ye.test(a)) throw Error(o(65, a));
              be[a] = !0;
            }
            var s = e.props;
            if ('input' === a)
              s = r({ type: void 0 }, s, {
                defaultChecked: void 0,
                defaultValue: void 0,
                value: null != s.value ? s.value : s.defaultValue,
                checked: null != s.checked ? s.checked : s.defaultChecked
              });
            else if ('textarea' === a) {
              var l = s.value;
              if (null == l) {
                l = s.defaultValue;
                var c = s.children;
                if (null != c) {
                  if (null != l) throw Error(o(92));
                  if (Array.isArray(c)) {
                    if (!(1 >= c.length)) throw Error(o(93));
                    c = c[0];
                  }
                  l = '' + c;
                }
                null == l && (l = '');
              }
              s = r({}, s, { value: void 0, children: '' + l });
            } else if ('select' === a)
              (this.currentSelectValue =
                null != s.value ? s.value : s.defaultValue),
                (s = r({}, s, { value: void 0 }));
            else if ('option' === a) {
              c = this.currentSelectValue;
              var u = (function (e) {
                if (null == e) return e;
                var t = '';
                return (
                  i.Children.forEach(e, function (e) {
                    null != e && (t += e);
                  }),
                  t
                );
              })(s.children);
              if (null != c) {
                var d = null != s.value ? s.value + '' : u;
                if (((l = !1), Array.isArray(c))) {
                  for (var h = 0; h < c.length; h++)
                    if ('' + c[h] === d) {
                      l = !0;
                      break;
                    }
                } else l = '' + c === d;
                s = r({ selected: void 0, children: void 0 }, s, {
                  selected: l,
                  children: u
                });
              }
            }
            if ((l = s)) {
              if (
                ue[a] &&
                (null != l.children || null != l.dangerouslySetInnerHTML)
              )
                throw Error(o(137, a));
              if (null != l.dangerouslySetInnerHTML) {
                if (null != l.children) throw Error(o(60));
                if (
                  'object' != typeof l.dangerouslySetInnerHTML ||
                  !('__html' in l.dangerouslySetInnerHTML)
                )
                  throw Error(o(61));
              }
              if (null != l.style && 'object' != typeof l.style)
                throw Error(o(62));
            }
            (l = s),
              (c = this.makeStaticMarkup),
              (u = 1 === this.stack.length),
              (d = '<' + e.type);
            e: if (-1 === a.indexOf('-')) h = 'string' == typeof l.is;
            else
              switch (a) {
                case 'annotation-xml':
                case 'color-profile':
                case 'font-face':
                case 'font-face-src':
                case 'font-face-uri':
                case 'font-face-format':
                case 'font-face-name':
                case 'missing-glyph':
                  h = !1;
                  break e;
                default:
                  h = !0;
              }
            for (E in l)
              if (Ee.call(l, E)) {
                var p = l[E];
                if (null != p) {
                  if ('style' === E) {
                    var f = void 0,
                      m = '',
                      v = '';
                    for (f in p)
                      if (p.hasOwnProperty(f)) {
                        var g = 0 === f.indexOf('--'),
                          y = p[f];
                        if (null != y) {
                          if (g) var b = f;
                          else if (((b = f), we.hasOwnProperty(b))) b = we[b];
                          else {
                            var w = b
                              .replace(pe, '-$1')
                              .toLowerCase()
                              .replace(fe, '-ms-');
                            b = we[b] = w;
                          }
                          (m += v + b + ':'),
                            (v = f),
                            (m += g =
                              null == y || 'boolean' == typeof y || '' === y
                                ? ''
                                : g ||
                                    'number' != typeof y ||
                                    0 === y ||
                                    (de.hasOwnProperty(v) && de[v])
                                  ? ('' + y).trim()
                                  : y + 'px'),
                            (v = ';');
                        }
                      }
                    p = m || null;
                  }
                  (f = null),
                    h
                      ? Ze.hasOwnProperty(E) ||
                        (f =
                          O((f = E)) && null != p ? f + '="' + B(p) + '"' : '')
                      : (f = F(E, p)),
                    f && (d += ' ' + f);
                }
              }
            c || (u && (d += ' data-reactroot=""'));
            var E = d;
            (l = ''),
              ce.hasOwnProperty(a)
                ? (E += '/>')
                : ((E += '>'), (l = '</' + e.type + '>'));
            e: {
              if (null != (c = s.dangerouslySetInnerHTML)) {
                if (null != c.__html) {
                  c = c.__html;
                  break e;
                }
              } else if (
                'string' == typeof (c = s.children) ||
                'number' == typeof c
              ) {
                c = B(c);
                break e;
              }
              c = null;
            }
            return (
              null != c
                ? ((s = []),
                  ge.hasOwnProperty(a) && '\n' === c.charAt(0) && (E += '\n'),
                  (E += c))
                : (s = me(s.children)),
              (e = e.type),
              (n =
                null == n || 'http://www.w3.org/1999/xhtml' === n
                  ? le(e)
                  : 'http://www.w3.org/2000/svg' === n && 'foreignObject' === e
                    ? 'http://www.w3.org/1999/xhtml'
                    : n),
              this.stack.push({
                domNamespace: n,
                type: a,
                children: s,
                childIndex: 0,
                context: t,
                footer: l
              }),
              (this.previousWasTextNode = !1),
              E
            );
          }),
          e
        );
      })();
      (t.renderToNodeStream = function () {
        throw Error(o(207));
      }),
        (t.renderToStaticMarkup = function (e, t) {
          e = new Ce(e, !0, t);
          try {
            return e.read(1 / 0);
          } finally {
            e.destroy();
          }
        }),
        (t.renderToStaticNodeStream = function () {
          throw Error(o(208));
        }),
        (t.renderToString = function (e, t) {
          e = new Ce(e, !1, t);
          try {
            return e.read(1 / 0);
          } finally {
            e.destroy();
          }
        }),
        (t.version = '17.0.2');
    },
    97762: (e, t, n) => {
      'use strict';
      e.exports = n(38698);
    },
    69921: (e, t) => {
      'use strict';
      var n = 'function' == typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        i = n ? Symbol.for('react.portal') : 60106,
        o = n ? Symbol.for('react.fragment') : 60107,
        a = n ? Symbol.for('react.strict_mode') : 60108,
        s = n ? Symbol.for('react.profiler') : 60114,
        l = n ? Symbol.for('react.provider') : 60109,
        c = n ? Symbol.for('react.context') : 60110,
        u = n ? Symbol.for('react.async_mode') : 60111,
        d = n ? Symbol.for('react.concurrent_mode') : 60111,
        h = n ? Symbol.for('react.forward_ref') : 60112,
        p = n ? Symbol.for('react.suspense') : 60113,
        f = n ? Symbol.for('react.suspense_list') : 60120,
        m = n ? Symbol.for('react.memo') : 60115,
        v = n ? Symbol.for('react.lazy') : 60116,
        g = n ? Symbol.for('react.block') : 60121,
        y = n ? Symbol.for('react.fundamental') : 60117,
        b = n ? Symbol.for('react.responder') : 60118,
        w = n ? Symbol.for('react.scope') : 60119;
      function E(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case u:
                case d:
                case o:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case h:
                    case v:
                    case m:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function Z(e) {
        return E(e) === d;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = c),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = h),
        (t.Fragment = o),
        (t.Lazy = v),
        (t.Memo = m),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return Z(e) || E(e) === u;
        }),
        (t.isConcurrentMode = Z),
        (t.isContextConsumer = function (e) {
          return E(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return E(e) === l;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return E(e) === h;
        }),
        (t.isFragment = function (e) {
          return E(e) === o;
        }),
        (t.isLazy = function (e) {
          return E(e) === v;
        }),
        (t.isMemo = function (e) {
          return E(e) === m;
        }),
        (t.isPortal = function (e) {
          return E(e) === i;
        }),
        (t.isProfiler = function (e) {
          return E(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return E(e) === a;
        }),
        (t.isSuspense = function (e) {
          return E(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === o ||
            e === d ||
            e === s ||
            e === a ||
            e === p ||
            e === f ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === m ||
                e.$$typeof === l ||
                e.$$typeof === c ||
                e.$$typeof === h ||
                e.$$typeof === y ||
                e.$$typeof === b ||
                e.$$typeof === w ||
                e.$$typeof === g))
          );
        }),
        (t.typeOf = E);
    },
    59864: (e, t, n) => {
      'use strict';
      e.exports = n(69921);
    },
    97196: (e, t, n) => {
      'use strict';
      var r;
      n.d(t, { Z: () => i });
      var i = (function () {
        function e() {}
        return (
          (e.isAvailable = function () {
            return (
              void 0 === r &&
                (r =
                  'function' == typeof document.queryCommandSupported &&
                  document.queryCommandSupported('copy')),
              r
            );
          }),
          (e.getString = function () {
            return Promise.resolve('');
          }),
          (e.setString = function (e) {
            var t = !1,
              n = document.body;
            if (n) {
              var r = document.createElement('span');
              (r.textContent = e),
                (r.style.opacity = '0'),
                (r.style.position = 'absolute'),
                (r.style.whiteSpace = 'pre-wrap'),
                (r.style.userSelect = 'auto'),
                n.appendChild(r);
              var i = window.getSelection();
              i.removeAllRanges();
              var o = document.createRange();
              o.selectNodeContents(r), i.addRange(o);
              try {
                document.execCommand('copy'), (t = !0);
              } catch (e) {}
              i.removeAllRanges(), n.removeChild(r);
            }
            return t;
          }),
          e
        );
      })();
    },
    63250: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => O });
      var r = n(67294),
        i = n(37353),
        o = n(9150),
        a = [];
      function s(e) {
        return a[e - 1];
      }
      var l = n(3911),
        c = /^data:/,
        u = (function () {
          function e() {}
          return (
            (e.has = function (t) {
              var n = e._entries;
              return c.test(t) || Boolean(n[t]);
            }),
            (e.add = function (t) {
              var n = e._entries,
                r = Date.now();
              n[t]
                ? ((n[t].lastUsedTimestamp = r), (n[t].refCount += 1))
                : (n[t] = { lastUsedTimestamp: r, refCount: 1 });
            }),
            (e.remove = function (t) {
              var n = e._entries;
              n[t] && (n[t].refCount -= 1), e._cleanUpIfNeeded();
            }),
            (e._cleanUpIfNeeded = function () {
              var t,
                n,
                r = e._entries,
                i = Object.keys(r);
              i.length + 1 > e._maximumEntries &&
                (i.forEach(function (e) {
                  var i = r[e];
                  (!n || i.lastUsedTimestamp < n.lastUsedTimestamp) &&
                    0 === i.refCount &&
                    ((t = e), (n = i));
                }),
                t && delete r[t]);
            }),
            e
          );
        })();
      (u._maximumEntries = 256), (u._entries = {});
      var d = 0,
        h = {},
        p = {
          abort: function (e) {
            var t = h['' + e];
            t &&
              ((t.onerror = null),
              (t.onload = null),
              (t = null),
              delete h['' + e]);
          },
          getSize: function (e, t, n) {
            var r = !1,
              i = setInterval(a, 16),
              o = p.load(e, a, function () {
                'function' == typeof n && n(), p.abort(o), clearInterval(i);
              });
            function a() {
              var e = h['' + o];
              if (e) {
                var n = e.naturalHeight,
                  a = e.naturalWidth;
                n && a && (t(a, n), (r = !0));
              }
              r && (p.abort(o), clearInterval(i));
            }
          },
          has: function (e) {
            return u.has(e);
          },
          load: function (e, t, n) {
            d += 1;
            var r = new window.Image();
            return (
              (r.onerror = n),
              (r.onload = function (e) {
                var n = function () {
                  return t({ nativeEvent: e });
                };
                'function' == typeof r.decode
                  ? r.decode().then(n, n)
                  : setTimeout(n, 0);
              }),
              (r.src = e),
              (h['' + d] = r),
              d
            );
          },
          prefetch: function (e) {
            return new Promise(function (t, n) {
              p.load(
                e,
                function () {
                  u.add(e), u.remove(e), t();
                },
                n
              );
            });
          },
          queryCache: function (e) {
            var t = {};
            return (
              e.forEach(function (e) {
                u.has(e) && (t[e] = 'disk/memory');
              }),
              Promise.resolve(t)
            );
          }
        };
      const f = p;
      var m = n(21302),
        v = n(20773),
        g = n(84370),
        y = n(67177);
      function b() {
        return (
          (b =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          b.apply(this, arguments)
        );
      }
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                Z(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : w(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function Z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        );
      }
      var _ = 'LOADED',
        C = 'LOADING',
        x = 0,
        S = /^(data:image\/svg\+xml;utf8,)(.*)/;
      function k(e) {
        var t = null;
        if ('number' == typeof e) {
          var n = s(e),
            r = n.scales[0];
          if (n.scales.length > 1) {
            var i = m.Z.get();
            r = n.scales.reduce(function (e, t) {
              return Math.abs(t - i) < Math.abs(e - i) ? t : e;
            });
          }
          var o = 1 !== r ? '@' + r + 'x' : '';
          t = n ? n.httpServerLocation + '/' + n.name + o + '.' + n.type : '';
        } else
          'string' == typeof e
            ? (t = e)
            : e && 'string' == typeof e.uri && (t = e.uri);
        if (t) {
          var a = t.match(S);
          if (a) {
            var l = a[1],
              c = a[2];
            return '' + l + encodeURIComponent(c);
          }
        }
        return t;
      }
      var T = r.forwardRef(function (e, t) {
        var n = e.accessibilityLabel,
          o = e.blurRadius,
          a = e.defaultSource,
          c = e.draggable,
          u = e.onError,
          d = e.onLayout,
          h = e.onLoad,
          p = e.onLoadEnd,
          m = e.onLoadStart,
          w = e.pointerEvents,
          Z = e.source,
          S = e.style,
          T = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, [
            'accessibilityLabel',
            'blurRadius',
            'defaultSource',
            'draggable',
            'onError',
            'onLayout',
            'onLoad',
            'onLoadEnd',
            'onLoadStart',
            'pointerEvents',
            'source',
            'style'
          ]),
          I = r.useState(function () {
            var e = k(Z);
            return null != e && f.has(e) ? _ : 'IDLE';
          }),
          O = I[0],
          M = I[1],
          D = r.useState({}),
          A = D[0],
          N = D[1],
          z = r.useContext(g.Z),
          B = r.useRef(null),
          F = r.useRef(x++),
          H = r.useRef(null),
          W = O === _ || (O === C && null == a),
          U = (function (e, t, n) {
            var r = E({}, v.Z.flatten(e)),
              i = r.filter,
              o = r.resizeMode,
              a = r.shadowOffset,
              s = r.tintColor,
              c = [],
              u = null;
            if ((i && c.push(i), t && c.push('blur(' + t + 'px)'), a)) {
              var d = (0, l.Z)(r);
              d && c.push('drop-shadow(' + d + ')');
            }
            return (
              s && null != n && c.push('url(#tint-' + n + ')'),
              c.length > 0 && (u = c.join(' ')),
              delete r.blurRadius,
              delete r.shadowColor,
              delete r.shadowOpacity,
              delete r.shadowOffset,
              delete r.shadowRadius,
              delete r.tintColor,
              delete r.overlayColor,
              delete r.resizeMode,
              [r, o, u, s]
            );
          })(S, o, F.current),
          V = U[0],
          G = U[1],
          j = U[2],
          K = U[3],
          Y = e.resizeMode || G || 'cover',
          $ = W ? Z : a,
          q = k($),
          X = (function (e) {
            if ('number' == typeof e) {
              var t = s(e);
              return { height: t.height, width: t.width };
            }
            if (null != e && !Array.isArray(e) && 'object' == typeof e)
              return { height: e.height, width: e.width };
          })($),
          Q = q ? 'url("' + q + '")' : null,
          J = (function () {
            if (null != B.current && ('center' === Y || 'repeat' === Y)) {
              var e = B.current,
                t = e.naturalHeight,
                n = e.naturalWidth,
                r = A.height,
                i = A.width;
              if (t && n && r && i) {
                var o = Math.min(1, i / n, r / t);
                return Math.ceil(o * n) + 'px ' + Math.ceil(o * t) + 'px';
              }
            }
          })(),
          ee = q
            ? (0, i.Z)('img', {
                alt: n || '',
                classList: [L.accessibilityImage],
                draggable: c || !1,
                ref: B,
                src: q
              })
            : null,
          te = k(Z);
        return (
          r.useEffect(
            function () {
              function e() {
                null != H.current && (f.abort(H.current), (H.current = null));
              }
              return (
                e(),
                null != te &&
                  (M(C),
                  m && m(),
                  (H.current = f.load(
                    te,
                    function (e) {
                      M(_), h && h(e), p && p();
                    },
                    function () {
                      M('ERRORED'),
                        u &&
                          u({
                            nativeEvent: {
                              error: 'Failed to load resource ' + te + ' (404)'
                            }
                          }),
                        p && p();
                    }
                  ))),
                e
              );
            },
            [te, H, M, u, h, p, m]
          ),
          r.createElement(
            y.Z,
            b({}, T, {
              accessibilityLabel: n,
              onLayout: function (e) {
                if ('center' === Y || 'repeat' === Y || d) {
                  var t = e.nativeEvent.layout;
                  d && d(e), N(t);
                }
              },
              pointerEvents: w,
              ref: t,
              style: [P.root, z && P.inline, X, V]
            }),
            r.createElement(y.Z, {
              style: [
                P.image,
                R[Y],
                { backgroundImage: Q, filter: j },
                null != J && { backgroundSize: J }
              ],
              suppressHydrationWarning: !0
            }),
            ee,
            (function (e, t) {
              return e && null != t
                ? r.createElement(
                    'svg',
                    {
                      style: {
                        position: 'absolute',
                        height: 0,
                        visibility: 'hidden',
                        width: 0
                      }
                    },
                    r.createElement(
                      'defs',
                      null,
                      r.createElement(
                        'filter',
                        { id: 'tint-' + t, suppressHydrationWarning: !0 },
                        r.createElement('feFlood', {
                          floodColor: '' + e,
                          key: e
                        }),
                        r.createElement('feComposite', {
                          in2: 'SourceAlpha',
                          operator: 'atop'
                        })
                      )
                    )
                  )
                : null;
            })(K, F.current)
          )
        );
      });
      T.displayName = 'Image';
      var I = T;
      (I.getSize = function (e, t, n) {
        f.getSize(e, t, n);
      }),
        (I.prefetch = function (e) {
          return f.prefetch(e);
        }),
        (I.queryCache = function (e) {
          return f.queryCache(e);
        });
      var L = o.Z.create({
          accessibilityImage: E(
            E({}, v.Z.absoluteFillObject),
            {},
            { height: '100%', opacity: 0, width: '100%', zIndex: -1 }
          )
        }),
        P = v.Z.create({
          root: { flexBasis: 'auto', overflow: 'hidden', zIndex: 0 },
          inline: { display: 'inline-flex' },
          image: E(
            E({}, v.Z.absoluteFillObject),
            {},
            {
              backgroundColor: 'transparent',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              height: '100%',
              width: '100%',
              zIndex: -1
            }
          )
        }),
        R = v.Z.create({
          center: { backgroundSize: 'auto' },
          contain: { backgroundSize: 'contain' },
          cover: { backgroundSize: 'cover' },
          none: { backgroundPosition: '0 0', backgroundSize: 'auto' },
          repeat: {
            backgroundPosition: '0 0',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto'
          },
          stretch: { backgroundSize: '100% 100%' }
        });
      const O = I;
    },
    21302: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => i });
      var r = n(95998),
        i = (function () {
          function e() {}
          return (
            (e.get = function () {
              return r.Z.get('window').scale;
            }),
            (e.getFontScale = function () {
              return r.Z.get('window').fontScale || e.get();
            }),
            (e.getPixelSizeForLayoutSize = function (t) {
              return Math.round(t * e.get());
            }),
            (e.roundToNearestPixel = function (t) {
              var n = e.get();
              return Math.round(t * n) / n;
            }),
            e
          );
        })();
    },
    64897: (e, t, n) => {
      'use strict';
      n.d(t, { Z: () => c });
      var r = n(28228),
        i = n.n(r);
      function o(e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          o(e, t)
        );
      }
      const a = (function (e) {
          var t, n;
          function r(t, n, r, i) {
            var o;
            return (
              ((o = e.call(this, n) || this).emitter = t),
              (o.listener = r),
              (o.context = i),
              o
            );
          }
          return (
            (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            o(t, n),
            (r.prototype.remove = function () {
              this.emitter.removeSubscription(this);
            }),
            r
          );
        })(
          (function () {
            function e(e) {
              this.subscriber = e;
            }
            return (
              (e.prototype.remove = function () {
                this.subscriber.removeSubscription(this);
              }),
              e
            );
          })()
        ),
        s = (function () {
          function e() {
            this._subscriptionsForType = {};
          }
          var t = e.prototype;
          return (
            (t.addSubscription = function (e, t) {
              i()(
                t.subscriber === this,
                'The subscriber of the subscription is incorrectly set.'
              ),
                this._subscriptionsForType[e] ||
                  (this._subscriptionsForType[e] = []);
              var n = this._subscriptionsForType[e].length;
              return (
                this._subscriptionsForType[e].push(t),
                (t.eventType = e),
                (t.key = n),
                t
              );
            }),
            (t.removeAllSubscriptions = function (e) {
              null == e
                ? (this._subscriptionsForType = {})
                : delete this._subscriptionsForType[e];
            }),
            (t.removeSubscription = function (e) {
              var t = e.eventType,
                n = e.key,
                r = this._subscriptionsForType[t];
              r && delete r[n];
            }),
            (t.getSubscriptionsForType = function (e) {
              return this._subscriptionsForType[e];
            }),
            e
          );
        })();
      var l = function () {
        return !0;
      };
      const c = (function () {
        function e(e) {
          this._subscriber = e || new s();
        }
        var t = e.prototype;
        return (
          (t.addListener = function (e, t, n) {
            return this._subscriber.addSubscription(
              e,
              new a(this, this._subscriber, t, n)
            );
          }),
          (t.removeAllListeners = function (e) {
            this._subscriber.removeAllSubscriptions(e);
          }),
          (t.removeSubscription = function (e) {
            i()(
              e.emitter === this,
              'Subscription does not belong to this emitter.'
            ),
              this._subscriber.removeSubscription(e);
          }),
          (t.listenerCount = function (e) {
            var t = this._subscriber.getSubscriptionsForType(e);
            return t ? t.filter(l).length : 0;
          }),
          (t.emit = function (e) {
            var t = this._subscriber.getSubscriptionsForType(e);
            if (t) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  i = 1;
                i < n;
                i++
              )
                r[i - 1] = arguments[i];
              for (var o = 0, a = t.length; o < a; o++) {
                var s = t[o];
                s && s.listener && s.listener.apply(s.context, r);
              }
            }
          }),
          (t.removeListener = function (e, t) {
            console.error(
              "EventEmitter.removeListener('" +
                e +
                "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`."
            );
            var n = this._subscriber.getSubscriptionsForType(e);
            if (n)
              for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                o && o.listener === t && o.remove();
              }
          }),
          e
        );
      })();
    },
    95761: function (e, t, n) {
      e.exports = (function () {
        'use strict';
        var e = (function () {
            if ('undefined' != typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function (e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function () {
              function t() {
                this.__entries__ = [];
              }
              var n = { size: { configurable: !0 } };
              return (
                (n.size.get = function () {
                  return this.__entries__.length;
                }),
                (t.prototype.get = function (t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function (t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function (t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function (t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function () {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function (e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n += 1) {
                    var i = r[n];
                    e.call(t, i[1], i[0]);
                  }
                }),
                Object.defineProperties(t.prototype, n),
                t
              );
            })();
          })(),
          t =
            'undefined' != typeof window &&
            'undefined' != typeof document &&
            window.document === document,
          r =
            void 0 !== n.g && n.g.Math === Math
              ? n.g
              : 'undefined' != typeof self && self.Math === Math
                ? self
                : 'undefined' != typeof window && window.Math === Math
                  ? window
                  : Function('return this')(),
          i =
            'function' == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(r)
              : function (e) {
                  return setTimeout(function () {
                    return e(Date.now());
                  }, 1e3 / 60);
                },
          o = [
            'top',
            'right',
            'bottom',
            'left',
            'width',
            'height',
            'size',
            'weight'
          ],
          a = 'undefined' != typeof MutationObserver,
          s = function () {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = (function (e, t) {
                var n = !1,
                  r = !1,
                  o = 0;
                function a() {
                  n && ((n = !1), e()), r && l();
                }
                function s() {
                  i(a);
                }
                function l() {
                  var e = Date.now();
                  if (n) {
                    if (e - o < 2) return;
                    r = !0;
                  } else (n = !0), (r = !1), setTimeout(s, t);
                  o = e;
                }
                return l;
              })(this.refresh.bind(this), 20));
          };
        (s.prototype.addObserver = function (e) {
          ~this.observers_.indexOf(e) || this.observers_.push(e),
            this.connected_ || this.connect_();
        }),
          (s.prototype.removeObserver = function (e) {
            var t = this.observers_,
              n = t.indexOf(e);
            ~n && t.splice(n, 1),
              !t.length && this.connected_ && this.disconnect_();
          }),
          (s.prototype.refresh = function () {
            this.updateObservers_() && this.refresh();
          }),
          (s.prototype.updateObservers_ = function () {
            var e = this.observers_.filter(function (e) {
              return e.gatherActive(), e.hasActive();
            });
            return (
              e.forEach(function (e) {
                return e.broadcastActive();
              }),
              e.length > 0
            );
          }),
          (s.prototype.connect_ = function () {
            t &&
              !this.connected_ &&
              (document.addEventListener(
                'transitionend',
                this.onTransitionEnd_
              ),
              window.addEventListener('resize', this.refresh),
              a
                ? ((this.mutationsObserver_ = new MutationObserver(
                    this.refresh
                  )),
                  this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                  }))
                : (document.addEventListener(
                    'DOMSubtreeModified',
                    this.refresh
                  ),
                  (this.mutationEventsAdded_ = !0)),
              (this.connected_ = !0));
          }),
          (s.prototype.disconnect_ = function () {
            t &&
              this.connected_ &&
              (document.removeEventListener(
                'transitionend',
                this.onTransitionEnd_
              ),
              window.removeEventListener('resize', this.refresh),
              this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
              this.mutationEventsAdded_ &&
                document.removeEventListener(
                  'DOMSubtreeModified',
                  this.refresh
                ),
              (this.mutationsObserver_ = null),
              (this.mutationEventsAdded_ = !1),
              (this.connected_ = !1));
          }),
          (s.prototype.onTransitionEnd_ = function (e) {
            var t = e.propertyName;
            void 0 === t && (t = ''),
              o.some(function (e) {
                return !!~t.indexOf(e);
              }) && this.refresh();
          }),
          (s.getInstance = function () {
            return this.instance_ || (this.instance_ = new s()), this.instance_;
          }),
          (s.instance_ = null);
        var l = function (e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n += 1) {
              var i = r[n];
              Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
              });
            }
            return e;
          },
          c = function (e) {
            return (e && e.ownerDocument && e.ownerDocument.defaultView) || r;
          },
          u = v(0, 0, 0, 0);
        function d(e) {
          return parseFloat(e) || 0;
        }
        function h(e) {
          for (var t = [], n = arguments.length - 1; n-- > 0; )
            t[n] = arguments[n + 1];
          return t.reduce(function (t, n) {
            return t + d(e['border-' + n + '-width']);
          }, 0);
        }
        function p(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return u;
          var r = c(e).getComputedStyle(e),
            i = (function (e) {
              for (
                var t = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
                n < r.length;
                n += 1
              ) {
                var i = r[n],
                  o = e['padding-' + i];
                t[i] = d(o);
              }
              return t;
            })(r),
            o = i.left + i.right,
            a = i.top + i.bottom,
            s = d(r.width),
            l = d(r.height);
          if (
            ('border-box' === r.boxSizing &&
              (Math.round(s + o) !== t && (s -= h(r, 'left', 'right') + o),
              Math.round(l + a) !== n && (l -= h(r, 'top', 'bottom') + a)),
            !(function (e) {
              return e === c(e).document.documentElement;
            })(e))
          ) {
            var p = Math.round(s + o) - t,
              f = Math.round(l + a) - n;
            1 !== Math.abs(p) && (s -= p), 1 !== Math.abs(f) && (l -= f);
          }
          return v(i.left, i.top, s, l);
        }
        var f =
          'undefined' != typeof SVGGraphicsElement
            ? function (e) {
                return e instanceof c(e).SVGGraphicsElement;
              }
            : function (e) {
                return (
                  e instanceof c(e).SVGElement && 'function' == typeof e.getBBox
                );
              };
        function m(e) {
          return t
            ? f(e)
              ? (function (e) {
                  var t = e.getBBox();
                  return v(0, 0, t.width, t.height);
                })(e)
              : p(e)
            : u;
        }
        function v(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var g = function (e) {
          (this.broadcastWidth = 0),
            (this.broadcastHeight = 0),
            (this.contentRect_ = v(0, 0, 0, 0)),
            (this.target = e);
        };
        (g.prototype.isActive = function () {
          var e = m(this.target);
          return (
            (this.contentRect_ = e),
            e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
          );
        }),
          (g.prototype.broadcastRect = function () {
            var e = this.contentRect_;
            return (
              (this.broadcastWidth = e.width),
              (this.broadcastHeight = e.height),
              e
            );
          });
        var y = function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s,
              c,
              u =
                ((r = (n = t).x),
                (i = n.y),
                (o = n.width),
                (a = n.height),
                (s =
                  'undefined' != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object),
                (c = Object.create(s.prototype)),
                l(c, {
                  x: r,
                  y: i,
                  width: o,
                  height: a,
                  top: i,
                  right: r + o,
                  bottom: a + i,
                  left: r
                }),
                c);
            l(this, { target: e, contentRect: u });
          },
          b = function (t, n, r) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new e()),
              'function' != typeof t)
            )
              throw new TypeError(
                'The callback provided as parameter 1 is not a function.'
              );
            (this.callback_ = t),
              (this.controller_ = n),
              (this.callbackCtx_ = r);
          };
        (b.prototype.observe = function (e) {
          if (!arguments.length)
            throw new TypeError('1 argument required, but only 0 present.');
          if ('undefined' != typeof Element && Element instanceof Object) {
            if (!(e instanceof c(e).Element))
              throw new TypeError('parameter 1 is not of type "Element".');
            var t = this.observations_;
            t.has(e) ||
              (t.set(e, new g(e)),
              this.controller_.addObserver(this),
              this.controller_.refresh());
          }
        }),
          (b.prototype.unobserve = function (e) {
            if (!arguments.length)
              throw new TypeError('1 argument required, but only 0 present.');
            if ('undefined' != typeof Element && Element instanceof Object) {
              if (!(e instanceof c(e).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var t = this.observations_;
              t.has(e) &&
                (t.delete(e), t.size || this.controller_.removeObserver(this));
            }
          }),
          (b.prototype.disconnect = function () {
            this.clearActive(),
              this.observations_.clear(),
              this.controller_.removeObserver(this);
          }),
          (b.prototype.gatherActive = function () {
            var e = this;
            this.clearActive(),
              this.observations_.forEach(function (t) {
                t.isActive() && e.activeObservations_.push(t);
              });
          }),
          (b.prototype.broadcastActive = function () {
            if (this.hasActive()) {
              var e = this.callbackCtx_,
                t = this.activeObservations_.map(function (e) {
                  return new y(e.target, e.broadcastRect());
                });
              this.callback_.call(e, t, e), this.clearActive();
            }
          }),
          (b.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
          }),
          (b.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
          });
        var w = 'undefined' != typeof WeakMap ? new WeakMap() : new e(),
          E = function (e) {
            if (!(this instanceof E))
              throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length)
              throw new TypeError('1 argument required, but only 0 present.');
            var t = s.getInstance(),
              n = new b(e, t, this);
            w.set(this, n);
          };
        return (
          ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
            E.prototype[e] = function () {
              return (t = w.get(this))[e].apply(t, arguments);
              var t;
            };
          }),
          void 0 !== r.ResizeObserver
            ? r.ResizeObserver
            : ((r.ResizeObserver = E), E)
        );
      })();
    },
    88388: (e, t, n) => {
      'use strict';
      n.d(t, { ht: () => c });
      var r = [
          'input',
          'select',
          'textarea',
          'a[href]',
          'button',
          '[tabindex]',
          'audio[controls]',
          'video[controls]',
          '[contenteditable]:not([contenteditable="false"])',
          'details>summary:first-of-type',
          'details'
        ].join(','),
        i =
          'undefined' == typeof Element
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector,
        o = function (e) {
          var t = parseInt(e.getAttribute('tabindex'), 10);
          return isNaN(t)
            ? (function (e) {
                return 'true' === e.contentEditable;
              })(e)
              ? 0
              : ('AUDIO' !== e.nodeName &&
                    'VIDEO' !== e.nodeName &&
                    'DETAILS' !== e.nodeName) ||
                  null !== e.getAttribute('tabindex')
                ? e.tabIndex
                : 0
            : t;
        },
        a = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        s = function (e) {
          return 'INPUT' === e.tagName;
        },
        l = function (e, t) {
          return !(
            !(function (e, t) {
              return !(
                t.disabled ||
                (function (e) {
                  return s(e) && 'hidden' === e.type;
                })(t) ||
                (function (e, t) {
                  if ('hidden' === getComputedStyle(e).visibility) return !0;
                  var n = i.call(e, 'details>summary:first-of-type')
                    ? e.parentElement
                    : e;
                  if (i.call(n, 'details:not([open]) *')) return !0;
                  if (t && 'full' !== t) {
                    if ('non-zero-area' === t) {
                      var r = e.getBoundingClientRect(),
                        o = r.width,
                        a = r.height;
                      return 0 === o && 0 === a;
                    }
                  } else
                    for (; e; ) {
                      if ('none' === getComputedStyle(e).display) return !0;
                      e = e.parentElement;
                    }
                  return !1;
                })(t, e.displayCheck) ||
                (function (e) {
                  return (
                    'DETAILS' === e.tagName &&
                    Array.prototype.slice.apply(e.children).some(function (e) {
                      return 'SUMMARY' === e.tagName;
                    })
                  );
                })(t) ||
                (function (e) {
                  if (
                    s(e) ||
                    'SELECT' === e.tagName ||
                    'TEXTAREA' === e.tagName ||
                    'BUTTON' === e.tagName
                  )
                    for (var t = e.parentElement; t; ) {
                      if ('FIELDSET' === t.tagName && t.disabled) {
                        for (var n = 0; n < t.children.length; n++) {
                          var r = t.children.item(n);
                          if ('LEGEND' === r.tagName) return !r.contains(e);
                        }
                        return !0;
                      }
                      t = t.parentElement;
                    }
                  return !1;
                })(t)
              );
            })(e, t) ||
            (function (e) {
              return (
                (function (e) {
                  return s(e) && 'radio' === e.type;
                })(e) &&
                !(function (e) {
                  if (!e.name) return !0;
                  var t,
                    n = e.form || e.ownerDocument,
                    r = function (e) {
                      return n.querySelectorAll(
                        'input[type="radio"][name="' + e + '"]'
                      );
                    };
                  if (
                    'undefined' != typeof window &&
                    void 0 !== window.CSS &&
                    'function' == typeof window.CSS.escape
                  )
                    t = r(window.CSS.escape(e.name));
                  else
                    try {
                      t = r(e.name);
                    } catch (e) {
                      return (
                        console.error(
                          'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                          e.message
                        ),
                        !1
                      );
                    }
                  var i = (function (e, t) {
                    for (var n = 0; n < e.length; n++)
                      if (e[n].checked && e[n].form === t) return e[n];
                  })(t, e.form);
                  return !i || i === e;
                })(e)
              );
            })(t) ||
            o(t) < 0
          );
        },
        c = function (e, t) {
          var n = [],
            s = [];
          return (
            (function (e, t, n) {
              var o = Array.prototype.slice.apply(e.querySelectorAll(r));
              return t && i.call(e, r) && o.unshift(e), o.filter(n);
            })(e, (t = t || {}).includeContainer, l.bind(null, t)).forEach(
              function (e, t) {
                var r = o(e);
                0 === r
                  ? n.push(e)
                  : s.push({ documentOrder: t, tabIndex: r, node: e });
              }
            ),
            s
              .sort(a)
              .map(function (e) {
                return e.node;
              })
              .concat(n)
          );
        };
    },
    82131: (e, t, n) => {
      'use strict';
      n.d(t, { Tb: () => x, Tx: () => C, Y: () => g });
      var r,
        i,
        o,
        a,
        s = function (e, t) {
          return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: 'v1-'
              .concat(Date.now(), '-')
              .concat(Math.floor(8999999999999 * Math.random()) + 1e12)
          };
        },
        l = function (e, t) {
          try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
              if ('first-input' === e && !('PerformanceEventTiming' in self))
                return;
              var n = new PerformanceObserver(function (e) {
                return e.getEntries().map(t);
              });
              return n.observe({ type: e, buffered: !0 }), n;
            }
          } catch (e) {}
        },
        c = function (e, t) {
          var n = function n(r) {
            ('pagehide' !== r.type && 'hidden' !== document.visibilityState) ||
              (e(r),
              t &&
                (removeEventListener('visibilitychange', n, !0),
                removeEventListener('pagehide', n, !0)));
          };
          addEventListener('visibilitychange', n, !0),
            addEventListener('pagehide', n, !0);
        },
        u = function (e) {
          addEventListener(
            'pageshow',
            function (t) {
              t.persisted && e(t);
            },
            !0
          );
        },
        d = 'function' == typeof WeakSet ? new WeakSet() : new Set(),
        h = function (e, t, n) {
          var r;
          return function () {
            t.value >= 0 &&
              (n || d.has(t) || 'hidden' === document.visibilityState) &&
              ((t.delta = t.value - (r || 0)),
              (t.delta || void 0 === r) && ((r = t.value), e(t)));
          };
        },
        p = -1,
        f = function () {
          return 'hidden' === document.visibilityState ? 0 : 1 / 0;
        },
        m = function () {
          c(function (e) {
            var t = e.timeStamp;
            p = t;
          }, !0);
        },
        v = function () {
          return (
            p < 0 &&
              ((p = f()),
              m(),
              u(function () {
                setTimeout(function () {
                  (p = f()), m();
                }, 0);
              })),
            {
              get timeStamp() {
                return p;
              }
            }
          );
        },
        g = function (e, t) {
          var n,
            r = v(),
            i = s('FCP'),
            o = function (e) {
              'first-contentful-paint' === e.name &&
                (c && c.disconnect(),
                e.startTime < r.timeStamp &&
                  ((i.value = e.startTime), i.entries.push(e), d.add(i), n()));
            },
            a = performance.getEntriesByName('first-contentful-paint')[0],
            c = a ? null : l('paint', o);
          (a || c) &&
            ((n = h(e, i, t)),
            a && o(a),
            u(function (r) {
              (i = s('FCP')),
                (n = h(e, i, t)),
                requestAnimationFrame(function () {
                  requestAnimationFrame(function () {
                    (i.value = performance.now() - r.timeStamp), d.add(i), n();
                  });
                });
            }));
        },
        y = { passive: !0, capture: !0 },
        b = new Date(),
        w = function (e, t) {
          r ||
            ((r = t), (i = e), (o = new Date()), _(removeEventListener), E());
        },
        E = function () {
          if (i >= 0 && i < o - b) {
            var e = {
              entryType: 'first-input',
              name: r.type,
              target: r.target,
              cancelable: r.cancelable,
              startTime: r.timeStamp,
              processingStart: r.timeStamp + i
            };
            a.forEach(function (t) {
              t(e);
            }),
              (a = []);
          }
        },
        Z = function (e) {
          if (e.cancelable) {
            var t =
              (e.timeStamp > 1e12 ? new Date() : performance.now()) -
              e.timeStamp;
            'pointerdown' == e.type
              ? (function (e, t) {
                  var n = function () {
                      w(e, t), i();
                    },
                    r = function () {
                      i();
                    },
                    i = function () {
                      removeEventListener('pointerup', n, y),
                        removeEventListener('pointercancel', r, y);
                    };
                  addEventListener('pointerup', n, y),
                    addEventListener('pointercancel', r, y);
                })(t, e)
              : w(t, e);
          }
        },
        _ = function (e) {
          ['mousedown', 'keydown', 'touchstart', 'pointerdown'].forEach(
            function (t) {
              return e(t, Z, y);
            }
          );
        },
        C = function (e, t) {
          var n,
            o = v(),
            p = s('FID'),
            f = function (e) {
              e.startTime < o.timeStamp &&
                ((p.value = e.processingStart - e.startTime),
                p.entries.push(e),
                d.add(p),
                n());
            },
            m = l('first-input', f);
          (n = h(e, p, t)),
            m &&
              c(function () {
                m.takeRecords().map(f), m.disconnect();
              }, !0),
            m &&
              u(function () {
                var o;
                (p = s('FID')),
                  (n = h(e, p, t)),
                  (a = []),
                  (i = -1),
                  (r = null),
                  _(addEventListener),
                  (o = f),
                  a.push(o),
                  E();
              });
        },
        x = function (e, t) {
          var n,
            r = v(),
            i = s('LCP'),
            o = function (e) {
              var t = e.startTime;
              t < r.timeStamp && ((i.value = t), i.entries.push(e)), n();
            },
            a = l('largest-contentful-paint', o);
          if (a) {
            n = h(e, i, t);
            var p = function () {
              d.has(i) ||
                (a.takeRecords().map(o), a.disconnect(), d.add(i), n());
            };
            ['keydown', 'click'].forEach(function (e) {
              addEventListener(e, p, { once: !0, capture: !0 });
            }),
              c(p, !0),
              u(function (r) {
                (i = s('LCP')),
                  (n = h(e, i, t)),
                  requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                      (i.value = performance.now() - r.timeStamp),
                        d.add(i),
                        n();
                    });
                  });
              });
          }
        };
    },
    17061: (e, t, n) => {
      var r = n(18698).default;
      function i() {
        'use strict';
        (e.exports = i =
          function () {
            return t;
          }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
        var t = {},
          n = Object.prototype,
          o = n.hasOwnProperty,
          a = 'function' == typeof Symbol ? Symbol : {},
          s = a.iterator || '@@iterator',
          l = a.asyncIterator || '@@asyncIterator',
          c = a.toStringTag || '@@toStringTag';
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
            e[t]
          );
        }
        try {
          u({}, '');
        } catch (e) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function d(e, t, n, r) {
          var i = t && t.prototype instanceof f ? t : f,
            o = Object.create(i.prototype),
            a = new S(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = 'suspendedStart';
              return function (i, o) {
                if ('executing' === r)
                  throw new Error('Generator is already running');
                if ('completed' === r) {
                  if ('throw' === i) throw o;
                  return { value: void 0, done: !0 };
                }
                for (n.method = i, n.arg = o; ; ) {
                  var a = n.delegate;
                  if (a) {
                    var s = _(a, n);
                    if (s) {
                      if (s === p) continue;
                      return s;
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg;
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === r)
                      throw ((r = 'completed'), n.arg);
                    n.dispatchException(n.arg);
                  } else 'return' === n.method && n.abrupt('return', n.arg);
                  r = 'executing';
                  var l = h(e, t, n);
                  if ('normal' === l.type) {
                    if (
                      ((r = n.done ? 'completed' : 'suspendedYield'),
                      l.arg === p)
                    )
                      continue;
                    return { value: l.arg, done: n.done };
                  }
                  'throw' === l.type &&
                    ((r = 'completed'), (n.method = 'throw'), (n.arg = l.arg));
                }
              };
            })(e, n, a)),
            o
          );
        }
        function h(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        t.wrap = d;
        var p = {};
        function f() {}
        function m() {}
        function v() {}
        var g = {};
        u(g, s, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          b = y && y(y(k([])));
        b && b !== n && o.call(b, s) && (g = b);
        var w = (v.prototype = f.prototype = Object.create(g));
        function E(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function Z(e, t) {
          function n(i, a, s, l) {
            var c = h(e[i], e, a);
            if ('throw' !== c.type) {
              var u = c.arg,
                d = u.value;
              return d && 'object' == r(d) && o.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      n('next', e, s, l);
                    },
                    function (e) {
                      n('throw', e, s, l);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (u.value = e), s(u);
                    },
                    function (e) {
                      return n('throw', e, s, l);
                    }
                  );
            }
            l(c.arg);
          }
          var i;
          this._invoke = function (e, r) {
            function o() {
              return new t(function (t, i) {
                n(e, r, t, i);
              });
            }
            return (i = i ? i.then(o, o) : o());
          };
        }
        function _(e, t) {
          var n = e.iterator[t.method];
          if (void 0 === n) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = 'return'),
                (t.arg = void 0),
                _(e, t),
                'throw' === t.method)
              )
                return p;
              (t.method = 'throw'),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return p;
          }
          var r = h(n, e.iterator, t.arg);
          if ('throw' === r.type)
            return (
              (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), p
            );
          var i = r.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                'return' !== t.method &&
                  ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : i
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              p);
        }
        function C(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            e.forEach(C, this),
            this.reset(!0);
        }
        function k(e) {
          if (e) {
            var t = e[s];
            if (t) return t.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                r = function t() {
                  for (; ++n < e.length; )
                    if (o.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (r.next = r);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: void 0, done: !0 };
        }
        return (
          (m.prototype = v),
          u(w, 'constructor', v),
          u(v, 'constructor', m),
          (m.displayName = u(v, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return (
              !!t &&
              (t === m || 'GeneratorFunction' === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(w)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(Z.prototype),
          u(Z.prototype, l, function () {
            return this;
          }),
          (t.AsyncIterator = Z),
          (t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new Z(d(e, n, r, i), o);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          E(w),
          u(w, c, 'Generator'),
          u(w, s, function () {
            return this;
          }),
          u(w, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (t.values = k),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  't' === t.charAt(0) &&
                    o.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(n, r) {
                return (
                  (a.type = 'throw'),
                  (a.arg = e),
                  (t.next = n),
                  r && ((t.method = 'next'), (t.arg = void 0)),
                  !!r
                );
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r],
                  a = i.completion;
                if ('root' === i.tryLoc) return n('end');
                if (i.tryLoc <= this.prev) {
                  var s = o.call(i, 'catchLoc'),
                    l = o.call(i, 'finallyLoc');
                  if (s && l) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, 'finallyLoc') &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ('break' === e || 'continue' === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), p)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ('throw' === r.type) {
                    var i = r.arg;
                    x(n);
                  }
                  return i;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: k(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                p
              );
            }
          }),
          t
        );
      }
      (e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    18698: (e) => {
      function t(n) {
        return (
          (e.exports = t =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    64687: (e, t, n) => {
      var r = n(17061)();
      e.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (e) {
        'object' == typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function('r', 'regeneratorRuntime = r')(r);
      }
    },
    62872: (e, t, n) => {
      'use strict';
      var r = n(90690),
        i = n(27578),
        o = n(6310);
      e.exports = function (e) {
        for (
          var t = r(this),
            n = o(t),
            a = arguments.length,
            s = i(a > 1 ? arguments[1] : void 0, n),
            l = a > 2 ? arguments[2] : void 0,
            c = void 0 === l ? n : i(l, n);
          c > s;

        )
          t[s++] = e;
        return t;
      };
    },
    60953: (e, t, n) => {
      'use strict';
      var r = n(61735),
        i = n(65290),
        o = n(68700),
        a = n(6310),
        s = n(16834),
        l = Math.min,
        c = [].lastIndexOf,
        u = !!c && 1 / [1].lastIndexOf(1, -0) < 0,
        d = s('lastIndexOf'),
        h = u || !d;
      e.exports = h
        ? function (e) {
            if (u) return r(c, this, arguments) || 0;
            var t = i(this),
              n = a(t);
            if (0 === n) return -1;
            var s = n - 1;
            for (
              arguments.length > 1 && (s = l(s, o(arguments[1]))),
                s < 0 && (s = n + s);
              s >= 0;
              s--
            )
              if (s in t && t[s] === e) return s || 0;
            return -1;
          }
        : c;
    },
    70637: (e, t, n) => {
      'use strict';
      var r = n(68844),
        i = n(6045),
        o = n(45375).getWeakData,
        a = n(767),
        s = n(85027),
        l = n(981),
        c = n(48999),
        u = n(18734),
        d = n(2960),
        h = n(36812),
        p = n(618),
        f = p.set,
        m = p.getterFor,
        v = d.find,
        g = d.findIndex,
        y = r([].splice),
        b = 0,
        w = function (e) {
          return e.frozen || (e.frozen = new E());
        },
        E = function () {
          this.entries = [];
        },
        Z = function (e, t) {
          return v(e.entries, function (e) {
            return e[0] === t;
          });
        };
      (E.prototype = {
        get: function (e) {
          var t = Z(this, e);
          if (t) return t[1];
        },
        has: function (e) {
          return !!Z(this, e);
        },
        set: function (e, t) {
          var n = Z(this, e);
          n ? (n[1] = t) : this.entries.push([e, t]);
        },
        delete: function (e) {
          var t = g(this.entries, function (t) {
            return t[0] === e;
          });
          return ~t && y(this.entries, t, 1), !!~t;
        }
      }),
        (e.exports = {
          getConstructor: function (e, t, n, r) {
            var d = e(function (e, i) {
                a(e, p),
                  f(e, { type: t, id: b++, frozen: void 0 }),
                  l(i) || u(i, e[r], { that: e, AS_ENTRIES: n });
              }),
              p = d.prototype,
              v = m(t),
              g = function (e, t, n) {
                var r = v(e),
                  i = o(s(t), !0);
                return !0 === i ? w(r).set(t, n) : (i[r.id] = n), e;
              };
            return (
              i(p, {
                delete: function (e) {
                  var t = v(this);
                  if (!c(e)) return !1;
                  var n = o(e);
                  return !0 === n
                    ? w(t).delete(e)
                    : n && h(n, t.id) && delete n[t.id];
                },
                has: function (e) {
                  var t = v(this);
                  if (!c(e)) return !1;
                  var n = o(e);
                  return !0 === n ? w(t).has(e) : n && h(n, t.id);
                }
              }),
              i(
                p,
                n
                  ? {
                      get: function (e) {
                        var t = v(this);
                        if (c(e)) {
                          var n = o(e);
                          return !0 === n ? w(t).get(e) : n ? n[t.id] : void 0;
                        }
                      },
                      set: function (e, t) {
                        return g(this, e, t);
                      }
                    }
                  : {
                      add: function (e) {
                        return g(this, e, !0);
                      }
                    }
              ),
              d
            );
          }
        });
    },
    99455: (e, t, n) => {
      'use strict';
      var r = n(68844),
        i = n(3689),
        o = n(77254).start,
        a = RangeError,
        s = isFinite,
        l = Math.abs,
        c = Date.prototype,
        u = c.toISOString,
        d = r(c.getTime),
        h = r(c.getUTCDate),
        p = r(c.getUTCFullYear),
        f = r(c.getUTCHours),
        m = r(c.getUTCMilliseconds),
        v = r(c.getUTCMinutes),
        g = r(c.getUTCMonth),
        y = r(c.getUTCSeconds);
      e.exports =
        i(function () {
          return (
            '0385-07-25T07:06:39.999Z' !== u.call(new Date(-50000000000001))
          );
        }) ||
        !i(function () {
          u.call(new Date(NaN));
        })
          ? function () {
              if (!s(d(this))) throw new a('Invalid time value');
              var e = this,
                t = p(e),
                n = m(e),
                r = t < 0 ? '-' : t > 9999 ? '+' : '';
              return (
                r +
                o(l(t), r ? 6 : 4, 0) +
                '-' +
                o(g(e) + 1, 2, 0) +
                '-' +
                o(h(e), 2, 0) +
                'T' +
                o(f(e), 2, 0) +
                ':' +
                o(v(e), 2, 0) +
                ':' +
                o(y(e), 2, 0) +
                '.' +
                o(n, 3, 0) +
                'Z'
              );
            }
          : u;
    },
    37809: (e, t, n) => {
      'use strict';
      var r = n(92297),
        i = n(6310),
        o = n(55565),
        a = n(54071),
        s = function (e, t, n, l, c, u, d, h) {
          for (var p, f, m = c, v = 0, g = !!d && a(d, h); v < l; )
            v in n &&
              ((p = g ? g(n[v], v, t) : n[v]),
              u > 0 && r(p)
                ? ((f = i(p)), (m = s(e, t, p, f, m, u - 1) - 1))
                : (o(m + 1), (e[m] = p)),
              m++),
              v++;
          return m;
        };
      e.exports = s;
    },
    97895: (e, t, n) => {
      'use strict';
      var r = n(79989),
        i = n(62872),
        o = n(87370);
      r({ target: 'Array', proto: !0 }, { fill: i }), o('fill');
    },
    54564: (e, t, n) => {
      'use strict';
      var r = n(79989),
        i = n(37809),
        o = n(10509),
        a = n(90690),
        s = n(6310),
        l = n(27120);
      r(
        { target: 'Array', proto: !0 },
        {
          flatMap: function (e) {
            var t,
              n = a(this),
              r = s(n);
            return (
              o(e),
              ((t = l(n, 0)).length = i(
                t,
                n,
                n,
                r,
                0,
                1,
                e,
                arguments.length > 1 ? arguments[1] : void 0
              )),
              t
            );
          }
        }
      );
    },
    72410: (e, t, n) => {
      'use strict';
      var r = n(79989),
        i = n(60953);
      r(
        { target: 'Array', proto: !0, forced: i !== [].lastIndexOf },
        { lastIndexOf: i }
      );
    },
    90385: (e, t, n) => {
      'use strict';
      n(87370)('flatMap');
    },
    65007: (e, t, n) => {
      'use strict';
      var r = n(79989),
        i = n(99455);
      r(
        { target: 'Date', proto: !0, forced: Date.prototype.toISOString !== i },
        { toISOString: i }
      );
    },
    34284: (e, t, n) => {
      'use strict';
      var r = n(67697),
        i = n(41236).EXISTS,
        o = n(68844),
        a = n(62148),
        s = Function.prototype,
        l = o(s.toString),
        c = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
        u = o(c.exec);
      r &&
        !i &&
        a(s, 'name', {
          configurable: !0,
          get: function () {
            try {
              return u(c, l(this))[1];
            } catch (e) {
              return '';
            }
          }
        });
    },
    45164: (e, t, n) => {
      'use strict';
      var r,
        i = n(71594),
        o = n(19037),
        a = n(68844),
        s = n(6045),
        l = n(45375),
        c = n(20319),
        u = n(70637),
        d = n(48999),
        h = n(618).enforce,
        p = n(3689),
        f = n(59834),
        m = Object,
        v = Array.isArray,
        g = m.isExtensible,
        y = m.isFrozen,
        b = m.isSealed,
        w = m.freeze,
        E = m.seal,
        Z = !o.ActiveXObject && 'ActiveXObject' in o,
        _ = function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        C = c('WeakMap', _, u),
        x = C.prototype,
        S = a(x.set);
      if (f)
        if (Z) {
          (r = u.getConstructor(_, 'WeakMap', !0)), l.enable();
          var k = a(x.delete),
            T = a(x.has),
            I = a(x.get);
          s(x, {
            delete: function (e) {
              if (d(e) && !g(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  k(this, e) || t.frozen.delete(e)
                );
              }
              return k(this, e);
            },
            has: function (e) {
              if (d(e) && !g(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  T(this, e) || t.frozen.has(e)
                );
              }
              return T(this, e);
            },
            get: function (e) {
              if (d(e) && !g(e)) {
                var t = h(this);
                return (
                  t.frozen || (t.frozen = new r()),
                  T(this, e) ? I(this, e) : t.frozen.get(e)
                );
              }
              return I(this, e);
            },
            set: function (e, t) {
              if (d(e) && !g(e)) {
                var n = h(this);
                n.frozen || (n.frozen = new r()),
                  T(this, e) ? S(this, e, t) : n.frozen.set(e, t);
              } else S(this, e, t);
              return this;
            }
          });
        } else
          i &&
            p(function () {
              var e = w([]);
              return S(new C(), e, 1), !y(e);
            }) &&
            s(x, {
              set: function (e, t) {
                var n;
                return (
                  v(e) && (y(e) ? (n = w) : b(e) && (n = E)),
                  S(this, e, t),
                  n && n(e),
                  this
                );
              }
            });
    },
    51090: (e, t, n) => {
      'use strict';
      n(45164);
    },
    15861: (e, t, n) => {
      'use strict';
      function r(e, t, n, r, i, o, a) {
        try {
          var s = e[o](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function i(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, o) {
            var a = e.apply(t, n);
            function s(e) {
              r(a, i, o, s, l, 'next', e);
            }
            function l(e) {
              r(a, i, o, s, l, 'throw', e);
            }
            s(void 0);
          });
        };
      }
      n.d(t, { Z: () => i });
    }
  }
]);
