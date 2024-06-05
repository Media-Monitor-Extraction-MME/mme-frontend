'use strict';
(self.webpackChunkembed_iframe = self.webpackChunkembed_iframe || []).push([
  [1901],
  {
    98222: (e, t, n) => {
      n.d(t, { Z: () => b, i: () => d });
      var r = n(46873),
        i = [
          r.sj.IMAGE_DIRECT_MESSAGE,
          r.sj.MESSAGE_ME,
          r.sj.VIDEO_DIRECT_MESSAGE
        ],
        o = [
          r.sj.POLL_2_CHOICE_TEXT,
          r.sj.POLL_3_CHOICE_TEXT,
          r.sj.POLL_4_CHOICE_TEXT,
          r.sj.POLL_2_CHOICE_IMAGE,
          r.sj.POLL_3_CHOICE_IMAGE,
          r.sj.POLL_4_CHOICE_IMAGE,
          r.sj.POLL_2_CHOICE_VIDEO,
          r.sj.POLL_3_CHOICE_VIDEO,
          r.sj.POLL_4_CHOICE_VIDEO
        ],
        s = [r.sj.AUDIOSPACE],
        c = [r.sj.AMPLIFY, r.sj.BROADCAST, r.sj.LIVE_EVENT, r.sj.MOMENT].concat(
          o,
          i,
          s
        ),
        a = [r.sj.PROMO_VIDEO_CONVO, r.sj.PROMO_IMAGE_CONVO],
        l = r.sj.AMPLIFY,
        u = [
          r.sj.POLL_2_CHOICE_VIDEO,
          r.sj.POLL_3_CHOICE_VIDEO,
          r.sj.POLL_4_CHOICE_VIDEO,
          r.sj.PROMO_VIDEO_WEBSITE
        ],
        m = /^[0-9]*:(broadcast)$/g,
        _ = function (e) {
          return s.indexOf(e.name) > -1;
        },
        d = function (e) {
          return (
            (function (e) {
              return i.indexOf(e.name) > -1;
            })(e) ||
            (function (e) {
              return a.indexOf(e.name) > -1;
            })(e)
          );
        };
      const b = {
        isPollCard: function (e) {
          return o.indexOf(e.name) > -1;
        },
        isSpaceCard: _,
        isTwitterCardClick: function (e) {
          return -1 !== c.indexOf(e.name);
        },
        shouldRenderVideoPlayer: function (e) {
          return -1 !== u.indexOf(e.name) || !!e.name.match(m);
        },
        shouldShowCard: function (e) {
          return (
            !(function (e) {
              return l === e.name;
            })(e) && !_(e)
          );
        }
      };
    },
    97677: (e, t, n) => {
      n.d(t, { Z: () => l });
      var r = n(97326),
        i = n(94578),
        o = n(4942),
        s = n(67294),
        c = n(73935),
        a = (function (e) {
          function t(t) {
            var n;
            return (
              (n = e.call(this, t) || this),
              (0, o.Z)((0, r.Z)(n), 'observer', null),
              (0, o.Z)((0, r.Z)(n), 'createObserver', function () {
                var e = n.props,
                  t = e.root,
                  r = e.rootMargin,
                  i = e.threshold;
                n.observer = new IntersectionObserver(n.handleChange, {
                  root: t,
                  rootMargin: r,
                  threshold: i
                });
              }),
              (0, o.Z)((0, r.Z)(n), 'destroyObserver', function () {
                n.observer &&
                  n.node &&
                  (n.observer.unobserve(n.node), (n.observer = null));
              }),
              (0, o.Z)((0, r.Z)(n), 'handleChange', function (e) {
                (0, n.props.onChange)(e[0]);
              }),
              n.props.disabled || n.createObserver(),
              n
            );
          }
          (0, i.Z)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = (0, c.findDOMNode)(this);
              e instanceof HTMLElement &&
                ((this.node = e),
                this.node &&
                  this.observer &&
                  this.observer.observe &&
                  this.observer.observe(this.node));
            }),
            (n.componentDidUpdate = function (e) {
              var t = this.props.disabled;
              !t && e.disabled && this.createObserver(),
                t && !e.disabled && this.destroyObserver();
            }),
            (n.componentWillUnmount = function () {
              this.destroyObserver();
            }),
            (n.render = function () {
              var e = this.props.children;
              return s.Children.only(e);
            }),
            t
          );
        })(s.Component);
      (0, o.Z)(a, 'defaultProps', {
        disabled: !1,
        root: null,
        rootMargin: '0px'
      });
      const l = a;
    },
    80228: (e, t, n) => {
      n.d(t, { Z: () => f, e: () => b });
      var r = n(87462),
        i = n(63366),
        o = n(67294),
        s = n(67177),
        c = n(64123),
        a = n(76290),
        l = n(57869),
        u = n(49954),
        m = ['children', 'style'],
        _ =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetContainer/index.js',
        d = void 0,
        b = c.Z.theme.breakpoints.xSmall;
      const f = function (e) {
        var t = e.children,
          n = e.style,
          f = (0, i.Z)(e, m),
          N = o.useState(!1),
          E = N[0],
          T = N[1],
          h = o.useRef(),
          I = o.useRef(),
          C = (0, a.F)().windowWidth;
        return (
          o.useEffect(
            function () {
              C && C < b && c.Z.setScale(l.ZP.ThemeScaleNames.small);
            },
            [C]
          ),
          o.createElement(
            u.Z,
            {
              __self: d,
              __source: { fileName: _, lineNumber: 57, columnNumber: 5 }
            },
            o.createElement(
              s.Z,
              (0, r.Z)({ style: [p.container, n] }, f, {
                ref: I,
                __self: d,
                __source: { fileName: _, lineNumber: 58, columnNumber: 7 }
              }),
              E
                ? null
                : o.createElement('div', {
                    onFocus: function (e) {
                      return (function (e, t, n, r, i) {
                        r ||
                          e.target !== t.current ||
                          (i(!0),
                          e.target.dispatchEvent(
                            new KeyboardEvent('keydown', { key: 'a' })
                          ),
                          n.current.children[1].focus());
                      })(e, h, I, E, T);
                    },
                    ref: h,
                    tabIndex: '0',
                    __self: d,
                    __source: { fileName: _, lineNumber: 60, columnNumber: 11 }
                  }),
              t
            )
          )
        );
      };
      var p = c.Z.create(function (e) {
        return {
          container: {
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
            borderRadius: e.borderRadii.large,
            overflow: 'hidden'
          }
        };
      });
    },
    80944: (e, t, n) => {
      n.d(t, { Z: () => r });
      const r = (0, n(16740).Z)({
        loader: function () {
          return Promise.all([
            n.e(781),
            n.e(9935),
            n.e(5234),
            n.e(8941),
            n.e(5332),
            n.e(4347)
          ]).then(n.bind(n, 652));
        },
        renderPlaceholder: function () {
          return null;
        }
      });
    },
    57555: (e, t, n) => {
      n.r(t), n.d(t, { EmbedServerAPIContext: () => si, default: () => ci });
      var r = n(97326),
        i = n(94578),
        o = n(4942),
        s = n(67294),
        c =
          (n(22675),
          Object.freeze({ FCP: 'FCP', FID: 'FID', LCP: 'LCP' }),
          n(60798)),
        a = function (e) {
          c.ZP.scribe(
            e.name,
            { component: c.z8.PERFORMANCE, section: c.bx.MAIN },
            { duration_ms: e.value }
          );
        },
        l = n(82131),
        u = n(16942),
        m = n(25304),
        _ = (function (e) {
          function t(t) {
            var n;
            return ((n = e.call(this, t) || this).state = { hasError: !1 }), n;
          }
          return (
            (0, i.Z)(t, e),
            (t.getDerivedStateFromError = function (e) {
              return (0, m.Vg)(e), { hasError: !0 };
            }),
            (t.prototype.render = function () {
              return this.props.children;
            }),
            t
          );
        })(s.Component),
        d = n(53070),
        b = n(75208),
        f = n(74387),
        p = n.n(f),
        N = n(42354),
        E = n(67177),
        T = n(86034),
        h = n(64123),
        I =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/NotFound/index.js',
        C = p().e2dae334;
      function v(e) {
        return s.createElement(
          E.Z,
          {
            onLayout: e.onLayout,
            style: w.outerContainer,
            __self: this,
            __source: { fileName: I, lineNumber: 16, columnNumber: 5 }
          },
          s.createElement(
            E.Z,
            {
              style: w.innerContainer,
              __self: this,
              __source: { fileName: I, lineNumber: 17, columnNumber: 7 }
            },
            s.createElement(N.Z, {
              style: w.icon,
              __self: this,
              __source: { fileName: I, lineNumber: 18, columnNumber: 9 }
            }),
            s.createElement(
              T.ZP,
              {
                style: w.text,
                __self: this,
                __source: { fileName: I, lineNumber: 19, columnNumber: 9 }
              },
              C
            )
          )
        );
      }
      var Z,
        y,
        w = h.Z.create(function (e) {
          return {
            outerContainer: { maxWidth: 550, minWidth: 250 },
            icon: { marginBottom: e.spaces.space4 },
            innerContainer: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              padding: e.spaces.space16
            }
          };
        }),
        g = n(39958),
        P = n(87462),
        x = n(63366),
        A = n(31830),
        R = Object.freeze({ tweet: 'tweet' }),
        k = [
          {
            name: 'tfw_team_holdback_11929',
            ref_id: 'hb',
            ref_values: ['control', 'holdback_prod', 'production']
          }
        ],
        L = n(50277),
        S = {
          sections:
            ((Z = {}),
            (Z[c.bx.FAKE] = ''),
            (Z[c.bx.MAIN] = 's1'),
            (Z[c.bx.PARENT] = 's2'),
            (Z[c.bx.QUOTE] = 's3'),
            (Z[c.bx.PARENT_QUOTE] = 's4'),
            (Z[c.bx.HOLDBACK_EXPERIMENT] = ''),
            (Z[c.bx.SKELETON_LOADER_EXPERIMENT] = ''),
            (Z[c.bx.RELATED_VIDEOS_EXPERIMENT] = ''),
            Z),
          components:
            ((y = {}),
            (y[c.z8.AUTHOR] = 'c1'),
            (y[c.z8.BIRDWATCH_PIVOT] = 'c1.1'),
            (y[c.z8.CARD] = 'c2'),
            (y[c.z8.LIKE_ACTION] = 'c3'),
            (y[c.z8.LOGO] = 'c4'),
            (y[c.z8.NEWS_ACTION] = 'c5'),
            (y[c.z8.PERFORMANCE] = ''),
            (y[c.z8.PHOTO] = 'c6'),
            (y[c.z8.PLACE] = 'c7'),
            (y[c.z8.PRIVACY_NOTICE] = 'c8'),
            (y[c.z8.PUBLIC_INTEREST_NOTICE] = 'c9'),
            (y[c.z8.SHARE_ACTION] = 'c10'),
            (y[c.z8.SOFT_INTERVENTION_PIVOT] = 'c11'),
            (y[c.z8.THREAD] = 'c11.1'),
            (y[c.z8.TIMESTAMP] = 'c12'),
            (y[c.z8.TWEET_REPLY_CONTEXT] = 'c13'),
            (y[c.z8.TWEET_TEXT_CASHTAG] = 'c14'),
            (y[c.z8.TWEET_TEXT_HASHTAG] = 'c15'),
            (y[c.z8.TWEET_TEXT_MEDIA] = 'c16'),
            (y[c.z8.TWEET_TEXT_MENTION] = 'c17'),
            (y[c.z8.TWEET_TEXT_QUOTE] = 'c18'),
            (y[c.z8.TWEET_TEXT_URL] = 'c19'),
            (y[c.z8.VIDEO] = 'c20'),
            (y[c.z8.WHITESPACE] = 'c21'),
            (y[c.z8.REPLY_PROMPT] = 'c22'),
            (y[c.z8.ERROR] = 'c23'),
            (y[c.z8.SENSITIVE_MEDIA] = 'c25'),
            y)
        };
      const O = function (e) {
        var t = [];
        return (
          k.forEach(function (n) {
            var r = e[n.name],
              i = n.ref_id;
            if (r && i) {
              if (!/^[a-z0-9]+$/i.test(i)) return;
              var o = r.bucket;
              if (n.ref_values) {
                var s = n.ref_values.indexOf(o);
                if (s > -1) {
                  var c = i + '_' + s;
                  r.version && (c += '_' + r.version), t.push(c);
                }
              }
            }
          }, {}),
          t.join(',')
        );
      };
      var M = ['pathname', 'query'],
        W = function (e, t, n, r) {
          var i,
            o,
            s,
            c,
            a,
            l,
            u,
            m,
            _,
            d,
            b = {
              twcamp:
                ((d = e.embedType), d === R.tweet ? 'tweetembed' : 'unknown'),
              twterm: e.id,
              twgr: r ? n : O(t),
              twcon:
                ((s = e.namespace),
                (c = s.section),
                (a = void 0 === c ? '' : c),
                (l = s.component),
                (u = void 0 === l ? '' : l),
                (m = a && S.sections[a]),
                (_ = u && S.components[u]),
                m || _ ? m + '_' + _ : '')
            },
            f = {
              ref_src:
                ((i = b),
                (o = (function (e) {
                  var t;
                  return (0, P.Z)((((t = {}).twsrc = 'tfw'), t), e);
                })(i)),
                (function (e) {
                  return e.reduce(function (e, t) {
                    return e + '|' + t;
                  });
                })(
                  Object.keys(o).map(function (e) {
                    return (function (e, t) {
                      return e + '^' + t;
                    })(e, o[e] ? o[e] : '');
                  })
                )),
              ref_url: e.pageData.origin
            };
          return function (e) {
            var t,
              n = e.pathname,
              r = e.query,
              i = (0, x.Z)(e, M),
              o = (function (e) {
                return e.startsWith('/');
              })((t = n))
                ? '' + L.S9 + t
                : t;
            return (0, P.Z)(
              {
                pathname: o,
                query: A.Z.isTwitterDotComLink(o) ? (0, P.Z)({}, f, r) : r
              },
              i
            );
          };
        },
        z = n(99318),
        X = n(45227),
        D = n(31072),
        V =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/AnalyticsContext/index.js',
        j = function () {
          return !0;
        },
        U = s.createContext(),
        Q = U.Consumer,
        B = U.Provider,
        K = function (e, t) {
          var n = (0, P.Z)({}, e, { namespace: (0, P.Z)({}, e.namespace, t) });
          return (0, X.Z)(n, e) ? e : n;
        },
        H = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), s = 0;
              s < n;
              s++
            )
              i[s] = arguments[s];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), '_getMergedContext', (0, D.Z)(K)),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.children,
                r = t.namespace,
                i = g.Z.getFeatures(),
                o = g.Z.getSessionId().session_id,
                c = i && i.tfw_refsrc_session,
                a = !(!c || 'on' !== c.bucket);
              return s.createElement(
                Q,
                {
                  __self: this,
                  __source: { fileName: V, lineNumber: 39, columnNumber: 7 }
                },
                function (t) {
                  var c = t ? e._getMergedContext(t, r) : void 0;
                  return s.createElement(
                    B,
                    {
                      value: c,
                      __self: e,
                      __source: {
                        fileName: V,
                        lineNumber: 43,
                        columnNumber: 13
                      }
                    },
                    c
                      ? s.createElement(
                          z.zt,
                          {
                            isExternal: j,
                            linkProcessor: W(c, i, o, a),
                            __self: e,
                            __source: {
                              fileName: V,
                              lineNumber: 45,
                              columnNumber: 17
                            }
                          },
                          n
                        )
                      : n
                  );
                }
              );
            }),
            t
          );
        })(s.Component),
        F = function (e) {
          return !(!e.limited_actions || 'non_compliant' !== e.limited_actions);
        },
        G = n(78539);
      function q(e) {
        return (0, G.mn)() && e.profile_image_shape
          ? 'hexagon' === (t = e.profile_image_shape).toLowerCase()
            ? 'hex'
            : t.toLowerCase()
          : e.is_blue_verified && 'Business' === e.verified_type
            ? 'square'
            : void 0;
        var t;
      }
      var Y = n(43463),
        $ = n(26039),
        J = ['children', 'link', 'style'],
        ee =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/InnerTweetContainer/index.js',
        te = p().c79cb0e4,
        ne = (function (e) {
          function t() {
            var t;
            return (
              (t = e.call(this) || this),
              (0, o.Z)((0, r.Z)(t), 'handleViewLinkClick', function (e) {
                var n = t.props.onClick;
                t._linkRef.current &&
                  t._linkRef.current.click &&
                  t._linkRef.current.click(),
                  n && n(e);
              }),
              (0, o.Z)((0, r.Z)(t), 'handleListItemViewClick', function (e) {
                t._linkRef.current &&
                  t._linkRef.current.click &&
                  t._linkRef.current.click();
              }),
              (t._containerRef = s.createRef()),
              (t._linkRef = s.createRef()),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.children,
                n = e.link,
                r = e.style,
                i = (0, x.Z)(e, J);
              return s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  Y.Z,
                  (0, P.Z)(
                    { accessibilityRole: 'article', focusable: !0, style: r },
                    i,
                    {
                      onClick: this.handleListItemViewClick,
                      viewRef: this._containerRef,
                      __self: this,
                      __source: {
                        fileName: ee,
                        lineNumber: 48,
                        columnNumber: 9
                      }
                    }
                  ),
                  s.createElement($.Z, {
                    accessibilityLabel: te,
                    link: n,
                    onClick: this.handleViewLinkClick,
                    ref: this._linkRef,
                    __self: this,
                    __source: { fileName: ee, lineNumber: 56, columnNumber: 11 }
                  }),
                  t
                )
              );
            }),
            t
          );
        })(s.Component);
      const re = ne;
      var ie = n(98222),
        oe = n(23896),
        se = n(97677),
        ce = n(80228),
        ae = n(2883),
        le = n(64122),
        ue =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/ParentTweetContainer/index.js',
        me = void 0,
        _e = p().d8708428;
      const de = function (e) {
        var t = e.avatarUrl,
          n = e.children,
          r = e.user;
        return s.createElement(
          Y.Z,
          {
            style: be.container,
            withInteractiveStyling: !1,
            __self: me,
            __source: { fileName: ue, lineNumber: 25, columnNumber: 5 }
          },
          s.createElement(
            E.Z,
            {
              __self: me,
              __source: { fileName: ue, lineNumber: 26, columnNumber: 7 }
            },
            s.createElement(
              ae.Z,
              {
                hoverLabel: { label: _e },
                interactiveStyles: null,
                __self: me,
                __source: { fileName: ue, lineNumber: 27, columnNumber: 9 }
              },
              s.createElement(le.default, {
                importantForAccessibility: 'no-hide-descendants',
                onClick: m.QY,
                screenName: r.screen_name,
                shape: q(r),
                size: 'xxLarge',
                uri: t,
                withLink: !0,
                __self: me,
                __source: { fileName: ue, lineNumber: 33, columnNumber: 11 }
              })
            ),
            s.createElement(E.Z, {
              style: be.line,
              __self: me,
              __source: { fileName: ue, lineNumber: 43, columnNumber: 9 }
            })
          ),
          s.createElement(
            E.Z,
            {
              style: be.columnRight,
              __self: me,
              __source: { fileName: ue, lineNumber: 45, columnNumber: 7 }
            },
            n
          )
        );
      };
      var be = h.Z.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            columnRight: {
              flexBasis: 0,
              flexGrow: 7,
              justifyContent: 'flex-start',
              marginStart: e.spaces.space4,
              marginBottom: e.spaces.space12
            },
            line: {
              backgroundColor: e.colors.gray200,
              marginHorizontal: 'auto',
              marginTop: e.spaces.space4,
              marginBottom: e.spaces.space4,
              minHeight: '10px',
              width: '2px',
              flexGrow: 1
            }
          };
        }),
        fe = n(57296),
        pe = n(79862),
        Ne =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/BirdwatchPivotWrapper/index.js';
      function Ee(e) {
        var t = s.useState(!1),
          n = t[0],
          r = t[1],
          i = s.useCallback(function (t) {
            switch (e.section) {
              case c.bx.MAIN:
                return (0, m.f7)(t);
              case c.bx.PARENT:
                return (0, m.Jg)(t);
              case c.bx.QUOTE:
                return (0, m.Zy)(t);
              default:
                return;
            }
          }),
          o = s.useCallback(function (t) {
            var n = e.section,
              r = t.currentTarget,
              i = !1;
            switch (
              (r instanceof HTMLAnchorElement &&
                (i = A.Z.isTwitterDotComLink(r.href)),
              n)
            ) {
              case c.bx.MAIN:
                return i ? (0, m.f7)(t) : (0, m.aP)(t);
              case c.bx.PARENT:
                return i ? (0, m.Jg)(t) : (0, m.c8)(t);
              case c.bx.QUOTE:
                return i ? (0, m.Zy)(t) : (0, m.gF)(t);
              default:
                return;
            }
          }),
          a = s.useCallback(function (t) {
            var i = t.isIntersecting,
              o = e.section;
            i &&
              !n &&
              (o === c.bx.MAIN
                ? (0, m.vM)()
                : o === c.bx.PARENT
                  ? (0, m.BY)()
                  : o === c.bx.QUOTE && (0, m.ei)(),
              r(!0));
          });
        return (0, G.re)()
          ? s.createElement(
              se.Z,
              {
                disabled: n,
                onChange: a,
                threshold: 1,
                __self: this,
                __source: { fileName: Ne, lineNumber: 94, columnNumber: 5 }
              },
              s.createElement(
                pe.Z,
                (0, P.Z)({}, e, {
                  isForQuoteTweet: e.section === c.bx.QUOTE,
                  onEntityClick: o,
                  onPivotClick: i,
                  tweetId: e.tweetId,
                  __self: this,
                  __source: { fileName: Ne, lineNumber: 95, columnNumber: 7 }
                })
              )
            )
          : null;
      }
      const Te = (0, n(16740).Z)({
        loader: function () {
          return Promise.all([n.e(781), n.e(8941), n.e(934), n.e(1520)]).then(
            n.bind(n, 41569)
          );
        },
        renderPlaceholder: function () {
          return null;
        }
      });
      var he = n(68646),
        Ie = n(82089),
        Ce =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/Photos/index.js',
        ve = void 0,
        Ze = p().a316f872,
        ye = function (e) {
          return e.map(function (e) {
            return (0, P.Z)({ accessibilityLabel: Ze }, e, {
              shouldShowAltLabel: !1
            });
          });
        };
      const we = function (e) {
        var t = e.images,
          n = e.section,
          r = e.style,
          i = n === fe.bx.MAIN || n === fe.bx.PARENT,
          o = t.length > 1;
        return s.createElement(
          E.Z,
          {
            style: [Pe.photoWrapper, i && [Pe.nonQuotedTweetStyles, r]],
            __self: ve,
            __source: { fileName: Ce, lineNumber: 53, columnNumber: 5 }
          },
          s.createElement(Ie.Z, {
            cacheLocationKey: 'embedded_tweet',
            images: ye(t),
            onClick: ge(n),
            onVariantSelection: he.Z,
            previewMode: !1,
            singleImageMaxAspectRatio: 2,
            singleImageMinAspectRatio: 1,
            withCenterCrop: o,
            __self: ve,
            __source: { fileName: Ce, lineNumber: 54, columnNumber: 7 }
          })
        );
      };
      var ge = function (e) {
          switch (e) {
            case fe.bx.PARENT_QUOTE:
              return m.$X;
            case fe.bx.PARENT:
              return m.JV;
            case fe.bx.QUOTE:
              return m.q2;
            default:
              return m.LC;
          }
        },
        Pe = h.Z.create(function (e) {
          return {
            photoWrapper: { overflow: 'hidden' },
            nonQuotedTweetStyles: {
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.large,
              borderStyle: 'solid',
              borderWidth: '1px'
            }
          };
        }),
        xe =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/PublicInterestNotice/index.js',
        Ae = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), s = 0;
              s < n;
              s++
            )
              i[s] = arguments[s];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'state', { seen: !1 }),
              (0, o.Z)((0, r.Z)(t), 'getClickHandler', function () {
                switch (t.props.section) {
                  case c.bx.MAIN:
                    return m.qO;
                  case c.bx.PARENT:
                    return m.Z$;
                  case c.bx.QUOTE:
                    return m.GV;
                  case c.bx.PARENT_QUOTE:
                    return m.x2;
                  default:
                    return;
                }
              }),
              (0, o.Z)((0, r.Z)(t), 'handleInViewport', function (e) {
                var n = e.isIntersecting,
                  r = t.state.seen,
                  i = t.props.section;
                n &&
                  !r &&
                  (i === c.bx.MAIN
                    ? (0, m.Mu)()
                    : i === c.bx.PARENT
                      ? (0, m.Rd)()
                      : i === c.bx.QUOTE
                        ? (0, m.yu)()
                        : i === c.bx.PARENT_QUOTE && (0, m.wA)(),
                  t.setState({ seen: !0 }));
              }),
              (0, o.Z)((0, r.Z)(t), 'isInQuotedTweet', function () {
                var e = t.props.section;
                return e === c.bx.QUOTE || e === c.bx.PARENT_QUOTE;
              }),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.actionLabel,
                n = e.actionLink,
                r = e.text,
                i = this.state.seen,
                o = this.getClickHandler();
              return s.createElement(
                se.Z,
                {
                  disabled: i,
                  onChange: this.handleInViewport,
                  threshold: 1,
                  __self: this,
                  __source: { fileName: xe, lineNumber: 41, columnNumber: 7 }
                },
                s.createElement(
                  ae.Z,
                  {
                    link: n,
                    onClick: o,
                    style: [
                      Re.label,
                      this.isInQuotedTweet() && Re.labelInQuotedTweet
                    ],
                    __self: this,
                    __source: { fileName: xe, lineNumber: 42, columnNumber: 9 }
                  },
                  s.createElement(
                    T.ZP,
                    {
                      color: 'normal',
                      size: 'body',
                      withInteractiveStyling: !1,
                      __self: this,
                      __source: {
                        fileName: xe,
                        lineNumber: 47,
                        columnNumber: 11
                      }
                    },
                    r,
                    ' ',
                    s.createElement(
                      T.ZP,
                      {
                        color: 'blue700',
                        withInteractiveStyling: !0,
                        __self: this,
                        __source: {
                          fileName: xe,
                          lineNumber: 49,
                          columnNumber: 13
                        }
                      },
                      t
                    )
                  )
                )
              );
            }),
            t
          );
        })(s.Component),
        Re = h.Z.create(function (e) {
          return {
            label: {
              marginTop: e.spaces.space12,
              marginBottom: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              paddingTop: e.spaces.space12,
              paddingLeft: e.spaces.space16,
              paddingRight: e.spaces.space16,
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.large,
              backgroundColor: e.colors.gray0
            },
            labelInQuotedTweet: {
              borderRadius: e.borderRadii.large,
              marginStart: e.spaces.space16,
              marginEnd: e.spaces.space16
            }
          };
        }),
        ke = function (e) {
          if (e) {
            var t = e.badge,
              n = e.description,
              r = e.url,
              i = e.user_label_type,
              o = e.user_label_display_type;
            return {
              badge: { url: t && t.url },
              description: n,
              url: { url: r && r.url, urlType: 'ExternalUrl' },
              userLabelType: i,
              userLabelDisplayType: o
            };
          }
        },
        Le = function (e) {
          return 'Badge' === (null == e ? void 0 : e.user_label_display_type);
        },
        Se = n(82894),
        Oe = n(81817),
        Me = n(1781),
        We = n(92471),
        ze =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/QuotedTweet/index.js',
        Xe = void 0,
        De = p().hf33d238;
      const Ve = function (e) {
        var t = e.hideMedia,
          n = e.quotedTweet,
          r = e.onClick,
          i = e.section,
          o = e.style,
          c = n.user,
          a = c.highlighted_label;
        return s.createElement(
          ae.Z,
          {
            hoverLabel: { label: De },
            interactiveStyles: null,
            __self: Xe,
            __source: { fileName: ze, lineNumber: 36, columnNumber: 5 }
          },
          s.createElement(
            ce.Z,
            {
              style: [je.container, o],
              __self: Xe,
              __source: { fileName: ze, lineNumber: 42, columnNumber: 7 }
            },
            s.createElement(
              re,
              {
                link: (0, L.t0)(n),
                onClick: r,
                __self: Xe,
                __source: { fileName: ze, lineNumber: 43, columnNumber: 9 }
              },
              s.createElement(
                E.Z,
                {
                  style: je.innerContainer,
                  __self: Xe,
                  __source: { fileName: ze, lineNumber: 44, columnNumber: 11 }
                },
                s.createElement(
                  E.Z,
                  {
                    style: je.header,
                    __self: Xe,
                    __source: { fileName: ze, lineNumber: 45, columnNumber: 13 }
                  },
                  s.createElement(Se.Z, {
                    affiliateBadgeInfo: ke(a),
                    isBlueVerified: c.is_blue_verified,
                    isVerified: c.verified,
                    name: c.name,
                    profileImageUrl: c.profile_image_url_https,
                    screenName: c.screen_name,
                    style: je.username,
                    verifiedType: c.verified_type,
                    __self: Xe,
                    __source: { fileName: ze, lineNumber: 46, columnNumber: 15 }
                  }),
                  (function (e) {
                    return e.isEdited && !e.isStaleEdit
                      ? s.createElement(
                          E.Z,
                          {
                            style: je.editedIcon,
                            __self: Xe,
                            __source: {
                              fileName: ze,
                              lineNumber: 82,
                              columnNumber: 5
                            }
                          },
                          s.createElement(Me.Z, {
                            __self: Xe,
                            __source: {
                              fileName: ze,
                              lineNumber: 83,
                              columnNumber: 7
                            }
                          }),
                          s.createElement(We.Z, {
                            __self: Xe,
                            __source: {
                              fileName: ze,
                              lineNumber: 84,
                              columnNumber: 7
                            }
                          })
                        )
                      : null;
                  })(n)
                ),
                (function (e) {
                  var t = ke(e);
                  return !t || Le(e)
                    ? null
                    : s.createElement(Oe.Z, {
                        label: t,
                        shouldTruncate: !0,
                        __self: Xe,
                        __source: {
                          fileName: ze,
                          lineNumber: 77,
                          columnNumber: 10
                        }
                      });
                })(a)
              ),
              s.createElement(xt, {
                hideMedia: t,
                section: i === fe.bx.PARENT ? fe.bx.PARENT_QUOTE : fe.bx.QUOTE,
                tweet: n,
                __self: Xe,
                __source: { fileName: ze, lineNumber: 60, columnNumber: 11 }
              }),
              (function (e) {
                return e.isStaleEdit
                  ? s.createElement(
                      E.Z,
                      {
                        style: je.staleCallout,
                        __self: Xe,
                        __source: {
                          fileName: ze,
                          lineNumber: 91,
                          columnNumber: 5
                        }
                      },
                      s.createElement(We.Z, {
                        editType: 'stale',
                        textMode: 'inline',
                        textSize: 'subtext2',
                        __self: Xe,
                        __source: {
                          fileName: ze,
                          lineNumber: 92,
                          columnNumber: 7
                        }
                      })
                    )
                  : null;
              })(n)
            )
          )
        );
      };
      var je = h.Z.create(function (e) {
          return {
            container: { borderRadius: e.borderRadii.large },
            innerContainer: {
              paddingTop: e.spaces.space12,
              paddingRight: e.spaces.space12,
              paddingLeft: e.spaces.space12
            },
            header: { flexDirection: 'row' },
            username: { flex: '1 1 auto' },
            editedIcon: {
              flexDirection: 'row',
              flexBasis: 'content',
              marginStart: e.spaces.space2
            },
            staleCallout: {
              flexDirection: 'row',
              paddingBottom: e.spaces.space12,
              paddingRight: e.spaces.space12,
              paddingLeft: e.spaces.space12
            }
          };
        }),
        Ue = n(984),
        Qe = n(66596),
        Be = n(68896),
        Ke =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/SensitiveMediaInterstitial/index.js',
        He = p().daa154a0,
        Fe = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), a = 0;
              a < n;
              a++
            )
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'state', { seen: !1 }),
              (0, o.Z)(
                (0, r.Z)(t),
                'renderTombstoneComponent',
                function (e, n) {
                  var i = t.getClickHandler(),
                    o = n === c.bx.MAIN || n === c.bx.PARENT;
                  return s.createElement(
                    Ue.Z,
                    (0, P.Z)({}, e, {
                      actionButtonWrapperStyle: Ge.attachment,
                      onActionClick: function (t) {
                        e.onActionClick(), i(t);
                      },
                      style: [
                        Ge.content,
                        Ge.wrapper,
                        o ? Ge.nonQuotedTweetStyles : Ge.quotedTweetStyles
                      ],
                      __self: (0, r.Z)(t),
                      __source: {
                        fileName: Ke,
                        lineNumber: 81,
                        columnNumber: 7
                      }
                    })
                  );
                }
              ),
              (0, o.Z)((0, r.Z)(t), 'getClickHandler', function () {
                switch (t.props.section) {
                  case c.bx.MAIN:
                    return m.ez;
                  case c.bx.PARENT:
                    return m.g;
                  case c.bx.QUOTE:
                    return m.Fy;
                  case c.bx.PARENT_QUOTE:
                    return m.or;
                  default:
                    return he.Z;
                }
              }),
              (0, o.Z)((0, r.Z)(t), 'handleInViewport', function (e) {
                var n = e.isIntersecting,
                  r = t.state.seen,
                  i = t.props.section;
                n &&
                  !r &&
                  (i === c.bx.MAIN
                    ? (0, m.cY)()
                    : i === c.bx.PARENT
                      ? (0, m.e7)()
                      : i === c.bx.QUOTE
                        ? (0, m.g1)()
                        : i === c.bx.PARENT_QUOTE && (0, m.Lo)(),
                  t.setState({ seen: !0 }));
              }),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.children,
                r = t.section,
                i = t.lang,
                o = t.attachmentAspectRatio,
                a = this.state.seen,
                l = s.createElement(
                  T.ZP,
                  {
                    align: 'center',
                    lang: i,
                    style: Ge.text,
                    __self: this,
                    __source: { fileName: Ke, lineNumber: 44, columnNumber: 7 }
                  },
                  He
                ),
                u = r === c.bx.MAIN || r === c.bx.PARENT ? Ge.root : null;
              return s.createElement(
                se.Z,
                {
                  disabled: a,
                  onChange: this.handleInViewport,
                  threshold: 1,
                  __self: this,
                  __source: { fileName: Ke, lineNumber: 51, columnNumber: 7 }
                },
                s.createElement(
                  Qe.Z,
                  {
                    label: l,
                    lang: i,
                    render: function (t) {
                      return s.createElement(
                        E.Z,
                        {
                          style: u,
                          __self: e,
                          __source: {
                            fileName: Ke,
                            lineNumber: 58,
                            columnNumber: 15
                          }
                        },
                        o
                          ? s.createElement(
                              Be.Z,
                              {
                                ratio: o,
                                __self: e,
                                __source: {
                                  fileName: Ke,
                                  lineNumber: 60,
                                  columnNumber: 19
                                }
                              },
                              e.renderTombstoneComponent(t, r)
                            )
                          : e.renderTombstoneComponent(t, r)
                      );
                    },
                    __self: this,
                    __source: { fileName: Ke, lineNumber: 52, columnNumber: 9 }
                  },
                  n
                )
              );
            }),
            t
          );
        })(s.Component),
        Ge = h.Z.create(function (e) {
          return {
            root: { marginTop: e.spaces.space12 },
            attachment: {
              marginTop: e.spaces.space8,
              paddingBottom: e.spaces.space4
            },
            content: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              height: '100%',
              width: '100%'
            },
            photoWrapper: { overflow: 'hidden' },
            nonQuotedTweetStyles: {
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.large,
              borderStyle: 'solid',
              borderWidth: '1px'
            },
            quotedTweetStyles: {
              borderColor: e.colors.transparent,
              borderTopColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.none
            }
          };
        }),
        qe = n(84234),
        Ye =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/SoftInterventionPivot/index.js',
        $e = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), s = 0;
              s < n;
              s++
            )
              i[s] = arguments[s];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'state', { seen: !1 }),
              (0, o.Z)((0, r.Z)(t), 'getClickHandler', function () {
                var e = t.props,
                  n = e.link,
                  r = e.section,
                  i = A.Z.isTwitterDotComLink(n.url);
                switch (r) {
                  case c.bx.MAIN:
                    return i ? m.Zg : m.El;
                  case c.bx.PARENT:
                    return i ? m.oj : m.xZ;
                  case c.bx.QUOTE:
                    return i ? m.Rg : m.uA;
                  case c.bx.PARENT_QUOTE:
                    return i ? m.Fq : m.lP;
                  default:
                    return;
                }
              }),
              (0, o.Z)((0, r.Z)(t), 'handleInViewport', function (e) {
                var n = e.isIntersecting,
                  r = t.state.seen,
                  i = t.props.section;
                n &&
                  !r &&
                  (i === c.bx.MAIN
                    ? (0, m.Ek)()
                    : i === c.bx.PARENT
                      ? (0, m.kc)()
                      : i === c.bx.QUOTE
                        ? (0, m.jv)()
                        : i === c.bx.PARENT_QUOTE && (0, m.UP)(),
                  t.setState({ seen: !0 }));
              }),
              (0, o.Z)((0, r.Z)(t), 'isInQuotedTweet', function () {
                var e = t.props.section;
                return e === c.bx.QUOTE || e === c.bx.PARENT_QUOTE;
              }),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.isTweetNonCompliant,
                n = e.link,
                r = e.label,
                i = e.tweetId,
                o = e.displayType,
                c = this.state.seen,
                a = { text: r, entities: [] };
              return s.createElement(
                se.Z,
                {
                  disabled: c,
                  onChange: this.handleInViewport,
                  threshold: 1,
                  __self: this,
                  __source: { fileName: Ye, lineNumber: 51, columnNumber: 7 }
                },
                s.createElement(
                  E.Z,
                  {
                    onClick: this.getClickHandler(),
                    style: [
                      Je.label,
                      this.isInQuotedTweet() && Je.labelInQuotedTweet
                    ],
                    __self: this,
                    __source: { fileName: Ye, lineNumber: 52, columnNumber: 9 }
                  },
                  s.createElement(qe.Z, {
                    displayType: 'SoftIntervention',
                    inQuoteTweet: this.isInQuotedTweet(),
                    isTweetNonCompliant: t,
                    landingUrl: n,
                    softInterventionDisplayType: o,
                    text: a,
                    tweetId: i,
                    __self: this,
                    __source: { fileName: Ye, lineNumber: 56, columnNumber: 11 }
                  })
                )
              );
            }),
            t
          );
        })(s.Component),
        Je = h.Z.create(function (e) {
          return {
            label: {
              display: 'block',
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginTop: e.spaces.space12
            },
            labelInQuotedTweet: { marginTop: 0 }
          };
        }),
        et = n(76290),
        tt = n(12011),
        nt = n(45392),
        rt =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetTextWrapper/index.js',
        it = void 0,
        ot = h.Z.create(function (e) {
          return {
            tweetTextMain: { cursor: 'text' },
            tweetTextQuoted: { cursor: 'normal' }
          };
        }),
        st = Object.freeze({
          CASHTAG: 'cashtag',
          EMOJI: 'emoji',
          HASHTAG: 'hashtag',
          MEDIA: 'media',
          MENTION: 'mention',
          TEXT: 'text',
          URL: 'url'
        });
      const ct = function (e) {
        var t = e.hideMedia,
          n = e.section,
          r = e.tweet,
          i = n === c.bx.PARENT_QUOTE || n === c.bx.QUOTE,
          o = n === c.bx.PARENT_QUOTE || n === c.bx.PARENT,
          a = !(!r.note_tweet || !r.note_tweet.id),
          l =
            'https://mobile.twitter.com/' +
            r.user.screen_name +
            '/status/' +
            r.id_str,
          u = (function (e) {
            return function (t, n) {
              var r = t.currentTarget,
                i = r.title && A.Z.isTwitterDotComLink(r.title),
                o = r.title && A.Z.isStatusUrl(r.title);
              if (e === c.bx.MAIN)
                switch (n) {
                  case st.CASHTAG:
                    return void m.$E(t);
                  case st.HASHTAG:
                    return void m.$d(t);
                  case st.MEDIA:
                    return void m.BM(t);
                  case st.MENTION:
                    return void m.hJ(t);
                  case st.URL:
                    return void (o ? m.k9(t) : i ? m.bK(t) : m._N(t));
                  default:
                    return;
                }
              else if (e === c.bx.PARENT)
                switch (n) {
                  case st.CASHTAG:
                    return void m.PS(t);
                  case st.HASHTAG:
                    return void m.EP(t);
                  case st.MEDIA:
                    return void m.$F(t);
                  case st.MENTION:
                    return void m.Ci(t);
                  case st.URL:
                    return void (o ? m.V9(t) : i ? m._u(t) : m.sz(t));
                  default:
                    return;
                }
            };
          })(n);
        return s.createElement(
          et.Z,
          {
            __self: it,
            __source: { fileName: rt, lineNumber: 27, columnNumber: 5 }
          },
          function (e) {
            var n = e.windowWidth < ce.e;
            return s.createElement(
              tt.ZP.Provider,
              {
                value: {
                  isEmbedBrandLinkExperimentEnabled: function () {
                    return !1;
                  }
                },
                __self: it,
                __source: { fileName: rt, lineNumber: 31, columnNumber: 11 }
              },
              s.createElement(nt.Z, {
                displayTextRange: r.display_text_range,
                entities: r.entities,
                entityBaseUrl: L.S9,
                excludeCardUrl: r.card && r.card.url,
                lang: r.lang,
                linkColor: 'blue700',
                linkify: !i,
                onEntityClick: u,
                quotedTweetId: r.quoted_tweet && r.quoted_tweet.id_str,
                size: i || o || n ? 'body' : 'headline1',
                style: i ? ot.tweetTextQuoted : ot.tweetTextMain,
                text: r.text,
                withCardLinks: t || i || (r.card && ie.Z.isSpaceCard(r.card)),
                withMediaLinks: t,
                withQuoteLinks: i,
                withShowMoreLink: a ? l : void 0,
                __self: it,
                __source: { fileName: rt, lineNumber: 36, columnNumber: 13 }
              })
            );
          }
        );
      };
      var at = n(80944),
        lt = function (e) {
          var t = e && e.video && e.video.aspectRatio;
          if (t) return t;
          var n = ut(e);
          return n ? [n.width, n.height] : [16, 9];
        },
        ut = function (e) {
          var t = e && e.photos && e.photos.length ? e.photos[0] : void 0;
          return t && t.expandedUrl && t.expandedUrl.includes('/video/')
            ? t
            : void 0;
        },
        mt = function (e) {
          var t = _t(e);
          return t ? [t.width, t.height] : [16, 9];
        },
        _t = function (e) {
          return e && e.photos && e.photos.length && 1 === e.photos.length
            ? e.photos[0]
            : void 0;
        },
        dt = function (e) {
          if (2 === e.length) {
            var t = e[0] > 0 ? e[0] : 16,
              n = e[1] > 0 ? e[1] : 9;
            return Math.max(1, t / n);
          }
          return 16 / 9;
        },
        bt = function (e) {
          var t = e.video && e.video.poster;
          if (t) return t;
          var n = ut(e);
          return n ? n.url : void 0;
        },
        ft = function (e, t, n) {
          var r = !t && !!e.video && n,
            i = !t && !!bt(e);
          return r || i;
        },
        pt = function (e) {
          var t = e && e.video && !!e.video.sensitiveMediaWarning,
            n =
              e &&
              e.photos &&
              !!e.photos.find(function (e) {
                return e.sensitiveMediaWarning;
              });
          return t || n || !!e.possibly_sensitive;
        },
        Nt = n(63250),
        Et = n(91780),
        Tt =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetVideoPoster/index.js',
        ht = void 0,
        It = p().fd2ac40a,
        Ct = p().he60f378;
      const vt = function (e) {
        var t = e.aspectRatio,
          n = e.link,
          r = e.src,
          i = e.section,
          o = e.style,
          c =
            i === fe.bx.PARENT_QUOTE || i === fe.bx.QUOTE
              ? [o]
              : [yt.nonQuotedTweetStyles, o],
          a = Zt(i);
        return s.createElement(
          Be.Z,
          {
            ratio: dt(t),
            style: c,
            __self: ht,
            __source: { fileName: Tt, lineNumber: 38, columnNumber: 5 }
          },
          s.createElement(
            ae.Z,
            {
              accessibilityLabel: Ct,
              interactiveStyles: null,
              link: n,
              onPress: a,
              style: [h.Z.absoluteFill, yt.wrapper],
              __self: ht,
              __source: { fileName: Tt, lineNumber: 39, columnNumber: 7 }
            },
            s.createElement(Nt.Z, {
              accessibilityLabel: It,
              source: r,
              style: h.Z.absoluteFill,
              __self: ht,
              __source: { fileName: Tt, lineNumber: 46, columnNumber: 9 }
            }),
            s.createElement(Et.Z, {
              accessibilityLabel: Ct,
              onPress: a,
              __self: ht,
              __source: { fileName: Tt, lineNumber: 47, columnNumber: 9 }
            })
          )
        );
      };
      var Zt = function (e) {
          switch (e) {
            case fe.bx.MAIN:
              return m.qK;
            case fe.bx.PARENT:
              return m.py;
            case fe.bx.QUOTE:
              return m.Pn;
            case fe.bx.PARENT_QUOTE:
              return m.og;
            default:
              return he.Z;
          }
        },
        yt = h.Z.create(function (e) {
          return {
            wrapper: { justifyContent: 'center', alignItems: 'center' },
            nonQuotedTweetStyles: {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: e.colors.nestedBorderColor,
              borderRadius: e.borderRadii.large,
              overflow: 'hidden'
            }
          };
        }),
        wt = n(93269),
        gt = n(36504),
        Pt =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetContent/index.js',
        xt = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), c = 0;
              c < n;
              c++
            )
              i[c] = arguments[c];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), '_getDisplayProps', function () {
                var e = t.props,
                  n = e.hideMedia,
                  r = e.hideThread,
                  i = e.tweet,
                  o = e.section,
                  s = t._isWithinQuotedTweet(),
                  c = t._isEmbeddable();
                return {
                  hasSensitiveMedia: pt(i),
                  showCard: !(
                    !i.card ||
                    s ||
                    n ||
                    !ie.Z.shouldShowCard(i.card)
                  ),
                  showPhotos: !(n || !i.photos || !i.photos.length),
                  showQuotedTweet: !(!i.quoted_tweet || s),
                  showReplyContext: !(
                    !i.in_reply_to_status_id_str ||
                    (!r && o !== fe.bx.PARENT && !s)
                  ),
                  showVideo: !(n || !c || s),
                  showVideoPoster: ft(i, n, s)
                };
              }),
              (0, o.Z)((0, r.Z)(t), '_getAttachmentAspectRatio', function () {
                var e = t.props.tweet,
                  n = t._getDisplayProps(),
                  r = n.showPhotos,
                  i = n.showVideo,
                  o = n.showVideoPoster;
                return i || o ? dt(lt(e)) : r ? dt(mt(e)) : void 0;
              }),
              (0, o.Z)(
                (0, r.Z)(t),
                '_renderMixedMediaVideoPoster',
                function (e) {
                  var n = t.props,
                    i = n.tweet,
                    o = n.section,
                    c = (0, L.t0)(i),
                    a = e.videoConfig;
                  return a && a.poster
                    ? s.createElement(vt, {
                        aspectRatio: [1, 1],
                        link: c,
                        section: o,
                        src: a.poster.url,
                        style: At.mixedMediaVideo,
                        __self: (0, r.Z)(t),
                        __source: {
                          fileName: Pt,
                          lineNumber: 264,
                          columnNumber: 7
                        }
                      })
                    : null;
                }
              ),
              (0, o.Z)((0, r.Z)(t), '_isEmbeddable', function () {
                var e = t.props.tweet;
                return e.video && e.video.variants;
              }),
              (0, o.Z)((0, r.Z)(t), '_isWithinQuotedTweet', function () {
                var e = t.props.section;
                return e === fe.bx.PARENT_QUOTE || e === fe.bx.QUOTE;
              }),
              (0, o.Z)((0, r.Z)(t), '_isMixedMedia', function () {
                var e = t.props.tweet.mediaDetails;
                return !!(
                  null != e &&
                  e.length &&
                  (null == e ? void 0 : e.length) > 1 &&
                  null != e &&
                  e.some(function (e) {
                    return 'video' === e.type || 'animated_gif' === e.type;
                  })
                );
              }),
              t
            );
          }
          (0, i.Z)(t, e);
          var n = t.prototype;
          return (
            (n.render = function () {
              var e = this._isWithinQuotedTweet();
              return s.createElement(
                s.Fragment,
                {
                  __self: this,
                  __source: { fileName: Pt, lineNumber: 85, columnNumber: 7 }
                },
                this._renderPublicInterestNotice(),
                s.createElement(
                  E.Z,
                  {
                    style: e && At.textWrapperQuoted,
                    __self: this,
                    __source: { fileName: Pt, lineNumber: 87, columnNumber: 9 }
                  },
                  this._renderReplyContext(),
                  this._renderTweetText()
                ),
                this._renderAttachmentOrHideSensitiveMedia(),
                this._renderSoftInterventionPivot(),
                this._renderQuotedTweet(),
                this._renderBirdwatchPivot()
              );
            }),
            (n._renderReplyContext = function () {
              var e = this.props,
                t = e.section,
                n = e.tweet,
                r = this._getDisplayProps().showReplyContext,
                i = (function (e) {
                  switch (e) {
                    case fe.bx.MAIN:
                      return m.N_;
                    case fe.bx.PARENT:
                      return m.xj;
                    default:
                      return;
                  }
                })(t),
                o = (0, L.CX)((0, L.t0)(n)),
                c = this._isWithinQuotedTweet()
                  ? wt.ZP.ReplyContextLinkTypes.none
                  : wt.ZP.ReplyContextLinkTypes.all;
              return r
                ? s.createElement(wt.ZP, {
                    displayTextRange: n.display_text_range,
                    inReplyToName: n.in_reply_to_name,
                    inReplyToScreenName: n.in_reply_to_screen_name,
                    inReplyToStatusIdStr: n.in_reply_to_status_id_str,
                    inReplyToUserIdStr: n.in_reply_to_user_id_str,
                    linkColor: 'gray700',
                    linkType: c,
                    onClick: i,
                    style: At.replyContext,
                    tweetPermalink: o,
                    userMentionsEntities: n.entities.user_mentions,
                    __self: this,
                    __source: { fileName: Pt, lineNumber: 108, columnNumber: 7 }
                  })
                : null;
            }),
            (n._renderPublicInterestNotice = function () {
              var e = this.props,
                t = e.section,
                n = e.tweet.public_interest_notice;
              return n
                ? s.createElement(Ae, {
                    actionLabel: n.action_label,
                    actionLink: n.landing_url,
                    section: t,
                    text: n.text,
                    __self: this,
                    __source: { fileName: Pt, lineNumber: 128, columnNumber: 7 }
                  })
                : null;
            }),
            (n._renderTweetText = function () {
              var e = this.props,
                t = e.hideMedia,
                n = e.section,
                r = e.tweet;
              return s.createElement(ct, {
                hideMedia: t,
                section: n,
                tweet: r,
                __self: this,
                __source: { fileName: Pt, lineNumber: 139, columnNumber: 12 }
              });
            }),
            (n._renderAttachmentOrHideSensitiveMedia = function () {
              var e = this.props,
                t = e.tweet,
                n = e.section,
                r = this._getDisplayProps(),
                i = r.hasSensitiveMedia,
                o = r.showCard,
                c = r.showPhotos,
                a = r.showQuotedTweet,
                l = r.showVideo,
                u = r.showVideoPoster,
                m = this._getAttachmentAspectRatio();
              return i && (l || u || c || (o && !a)) && !this._isMixedMedia()
                ? s.createElement(
                    Fe,
                    {
                      attachmentAspectRatio: m,
                      lang: t.lang,
                      section: n,
                      __self: this,
                      __source: {
                        fileName: Pt,
                        lineNumber: 159,
                        columnNumber: 9
                      }
                    },
                    this._renderAttachment()
                  )
                : this._renderAttachment();
            }),
            (n._renderAttachment = function () {
              var e = this,
                t = this._getDisplayProps(),
                n = t.showCard,
                r = t.showPhotos,
                i = t.showQuotedTweet,
                o = t.showVideo,
                c = t.showVideoPoster,
                a = this.props,
                l = a.tweet,
                u = a.section;
              return s.createElement(
                tt.ZP.UseProps,
                {
                  __self: this,
                  __source: { fileName: Pt, lineNumber: 185, columnNumber: 7 }
                },
                function () {
                  if (e._isMixedMedia() && (o || c || r)) {
                    var t = e._isWithinQuotedTweet()
                      ? { showBorder: !1, showRoundCorners: !1 }
                      : {};
                    return s.createElement(
                      gt.Z,
                      (0, P.Z)({}, t, {
                        mediaDetails: l.mediaDetails,
                        onClick: (0, m.pz)(u),
                        renderVideo: e._renderMixedMediaVideoPoster,
                        style: At.attachment,
                        __self: e,
                        __source: {
                          fileName: Pt,
                          lineNumber: 195,
                          columnNumber: 15
                        }
                      })
                    );
                  }
                  return o
                    ? e._renderVideo()
                    : c
                      ? e._renderVideoPoster()
                      : r
                        ? e._renderPhotos()
                        : n && !i
                          ? e._renderCard()
                          : null;
                }
              );
            }),
            (n._renderCard = function () {
              var e = this.props,
                t = e.tweet,
                n = e.section,
                r = {
                  tweetId: t.id_str,
                  tweetPermalink: (0, L.CX)((0, L.t0)(t)),
                  tweetUserId: t.user.id_str
                };
              return t.card
                ? s.createElement(Te, {
                    card: t.card,
                    cardContext: r,
                    section: n,
                    style: At.attachment,
                    __self: this,
                    __source: { fileName: Pt, lineNumber: 227, columnNumber: 7 }
                  })
                : null;
            }),
            (n._renderPhotos = function () {
              var e = this.props,
                t = e.tweet,
                n = e.section;
              return t.photos
                ? s.createElement(we, {
                    images: t.photos,
                    section: n,
                    style: At.attachment,
                    __self: this,
                    __source: {
                      fileName: Pt,
                      lineNumber: 233,
                      columnNumber: 27
                    }
                  })
                : null;
            }),
            (n._renderVideo = function () {
              var e = this,
                t = this.props,
                n = t.tweet,
                r = t.section,
                i = (0, L.t0)(n);
              return n.video
                ? s.createElement(
                    si.Consumer,
                    {
                      __self: this,
                      __source: {
                        fileName: Pt,
                        lineNumber: 240,
                        columnNumber: 7
                      }
                    },
                    function (t) {
                      return s.createElement(at.Z, {
                        api: t,
                        link: i,
                        possiblySensitive: n.possibly_sensitive,
                        section: r,
                        style: At.attachment,
                        tweetId: n.id_str,
                        video: n.video,
                        __self: e,
                        __source: {
                          fileName: Pt,
                          lineNumber: 242,
                          columnNumber: 11
                        }
                      });
                    }
                  )
                : null;
            }),
            (n._renderVideoPoster = function () {
              var e = this.props,
                t = e.tweet,
                n = e.section,
                r = (0, L.t0)(t),
                i = bt(t),
                o = lt(t);
              return i
                ? s.createElement(vt, {
                    aspectRatio: o,
                    link: r,
                    section: n,
                    src: i,
                    style: At.attachment,
                    __self: this,
                    __source: { fileName: Pt, lineNumber: 280, columnNumber: 7 }
                  })
                : null;
            }),
            (n._renderSoftInterventionPivot = function () {
              var e = this.props,
                t = e.section,
                n = e.tweet,
                r = n.soft_intervention_pivot;
              return r
                ? s.createElement($e, {
                    displayType: r.displayType,
                    isTweetNonCompliant: F(n),
                    label: r.label,
                    link: r.landing_url,
                    section: t,
                    tweetId: n.id_str,
                    __self: this,
                    __source: { fileName: Pt, lineNumber: 316, columnNumber: 7 }
                  })
                : null;
            }),
            (n._renderBirdwatchPivot = function () {
              var e = this.props,
                t = e.section,
                n = e.tweet;
              return n.birdwatch_pivot
                ? s.createElement(
                    Ee,
                    (0, P.Z)({}, n.birdwatch_pivot, {
                      section: t,
                      tweetId: n.id_str,
                      __self: this,
                      __source: {
                        fileName: Pt,
                        lineNumber: 330,
                        columnNumber: 7
                      }
                    })
                  )
                : null;
            }),
            (n._renderQuotedTweet = function () {
              var e = this.props,
                t = e.hideMedia,
                n = e.tweet,
                r = e.section,
                i = this._getDisplayProps().showQuotedTweet,
                o = r === fe.bx.PARENT ? fe.bx.PARENT_QUOTE : fe.bx.QUOTE,
                c = r === fe.bx.PARENT ? m.tI : m.HM;
              return i && n.quoted_tweet
                ? s.createElement(
                    H,
                    {
                      namespace: { section: o },
                      __self: this,
                      __source: {
                        fileName: Pt,
                        lineNumber: 340,
                        columnNumber: 7
                      }
                    },
                    s.createElement(Ve, {
                      hideMedia: t,
                      onClick: c,
                      quotedTweet: n.quoted_tweet,
                      section: r,
                      style: At.attachment,
                      __self: this,
                      __source: {
                        fileName: Pt,
                        lineNumber: 341,
                        columnNumber: 9
                      }
                    })
                  )
                : null;
            }),
            t
          );
        })(s.Component);
      (0, o.Z)(xt, 'defaultProps', { hideMedia: !1, hideThread: !1 });
      var At = h.Z.create(function (e) {
          return {
            mixedMediaVideo: {
              height: '100%',
              borderRadius: 0,
              border: '0 solid'
            },
            quotedMixedMediaContent: { borderWidth: '0px', borderRadius: 0 },
            attachment: { marginTop: e.spaces.space12 },
            replyContext: { marginBottom: e.spaces.space4 },
            textWrapperQuoted: {
              marginBottom: e.spaces.space12,
              marginTop: e.spaces.space4,
              paddingRight: e.spaces.space12,
              paddingLeft: e.spaces.space12
            }
          };
        }),
        Rt = n(11537),
        kt = n(40830),
        Lt =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TwitterLogo/index.js',
        St = void 0,
        Ot = p().jfbc3a86;
      const Mt = function (e) {
        var t = e.link,
          n = kt.Z.generate({
            backgroundColor: 'transparent',
            color: h.Z.theme.colors.blue500
          }),
          r = { backgroundColor: 'transparent' },
          i = { hoverStyle: r, pressedStyle: r };
        return s.createElement(
          U.Consumer,
          {
            __self: St,
            __source: { fileName: Lt, lineNumber: 35, columnNumber: 5 }
          },
          function (r) {
            return s.createElement(
              ae.Z,
              {
                accessibilityLabel: Ot,
                interactiveStyles: (0, P.Z)({}, n, i),
                link: t,
                onPress: e.scribeHandler
                  ? e.scribeHandler
                  : ((o = r && r.namespace.section),
                    o === fe.bx.PARENT ? m.nO : m.GC),
                style: Wt.iconWrapper,
                __self: St,
                __source: { fileName: Lt, lineNumber: 38, columnNumber: 11 }
              },
              s.createElement(Rt.Z, {
                style: Wt.icon,
                __self: St,
                __source: { fileName: Lt, lineNumber: 49, columnNumber: 13 }
              })
            );
            var o;
          }
        );
      };
      var Wt = h.Z.create(function (e) {
          return {
            icon: {
              color: e.colors.brandColor,
              margin: '0',
              width: 25 * e.scales[e.scale] + 'px',
              height: 25 * e.scales[e.scale] + 'px'
            },
            iconWrapper: {
              borderRadius: h.Z.theme.borderRadii.infinite,
              marginStart: 'auto'
            }
          };
        }),
        zt = n(7798),
        Xt =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/ParentTweet/index.js',
        Dt = void 0,
        Vt = p().jade381b,
        jt = p().d8708428,
        Ut = p().a7fb9c0c,
        Qt = function (e) {
          e.stopPropagation(), (0, m.QY)(e);
        };
      const Bt = function (e) {
        var t = e.hideMedia,
          n = e.parentTweet,
          r = (0, L.t0)(n),
          i = n.user.highlighted_label;
        return s.createElement(
          et.Z,
          {
            __self: Dt,
            __source: { fileName: Xt, lineNumber: 46, columnNumber: 5 }
          },
          function (e) {
            var o,
              c = e.windowWidth < ce.e;
            return s.createElement(
              re,
              {
                link: r,
                onClick: m.IO,
                withInteractiveStyling: !1,
                __self: Dt,
                __source: { fileName: Xt, lineNumber: 50, columnNumber: 11 }
              },
              s.createElement(
                de,
                {
                  avatarUrl: n.user.profile_image_url_https,
                  permalink: r,
                  user: n.user,
                  __self: Dt,
                  __source: { fileName: Xt, lineNumber: 55, columnNumber: 13 }
                },
                s.createElement(
                  E.Z,
                  {
                    style: Kt.header,
                    __self: Dt,
                    __source: { fileName: Xt, lineNumber: 60, columnNumber: 15 }
                  },
                  s.createElement(
                    E.Z,
                    {
                      style: [
                        Kt.usernameLabel,
                        i && !Le(i) && Kt.highlightedUserLabelWrapper
                      ],
                      __self: Dt,
                      __source: {
                        fileName: Xt,
                        lineNumber: 61,
                        columnNumber: 17
                      }
                    },
                    s.createElement(
                      E.Z,
                      {
                        style: Kt.usernameTimestamp,
                        __self: Dt,
                        __source: {
                          fileName: Xt,
                          lineNumber: 69,
                          columnNumber: 19
                        }
                      },
                      s.createElement(
                        ae.Z,
                        {
                          hoverLabel: { label: jt },
                          interactiveStyles: null,
                          style: Kt.username,
                          __self: Dt,
                          __source: {
                            fileName: Xt,
                            lineNumber: 70,
                            columnNumber: 21
                          }
                        },
                        s.createElement(Se.Z, {
                          affiliateBadgeInfo: ke(i),
                          isBlueVerified: n.user.is_blue_verified,
                          isVerified: n.user.verified,
                          name: n.user.name,
                          onLinkClick: m.QY,
                          screenName: n.user.screen_name,
                          verifiedType: n.user.verified_type,
                          withLink: !0,
                          withScreenName: !1,
                          __self: Dt,
                          __source: {
                            fileName: Xt,
                            lineNumber: 77,
                            columnNumber: 23
                          }
                        })
                      ),
                      s.createElement(
                        E.Z,
                        {
                          style: Kt.timestampAndEditedIcon,
                          __self: Dt,
                          __source: {
                            fileName: Xt,
                            lineNumber: 89,
                            columnNumber: 21
                          }
                        },
                        s.createElement(Me.Z, {
                          __self: Dt,
                          __source: {
                            fileName: Xt,
                            lineNumber: 90,
                            columnNumber: 23
                          }
                        }),
                        s.createElement(
                          T.ZP,
                          {
                            color: 'gray700',
                            link: r,
                            numberOfLines: 1,
                            __self: Dt,
                            __source: {
                              fileName: Xt,
                              lineNumber: 91,
                              columnNumber: 23
                            }
                          },
                          c
                            ? ((o = n.created_at),
                              s.createElement(zt.Z, {
                                timestamp: o,
                                __self: Dt,
                                __source: {
                                  fileName: Xt,
                                  lineNumber: 161,
                                  columnNumber: 10
                                }
                              }))
                            : Vt(new Date(n.created_at))
                        ),
                        (function (e) {
                          return e.isEdited && !e.isStaleEdit
                            ? s.createElement(
                                T.ZP,
                                {
                                  __self: Dt,
                                  __source: {
                                    fileName: Xt,
                                    lineNumber: 136,
                                    columnNumber: 5
                                  }
                                },
                                s.createElement(Me.Z, {
                                  __self: Dt,
                                  __source: {
                                    fileName: Xt,
                                    lineNumber: 137,
                                    columnNumber: 7
                                  }
                                }),
                                s.createElement(We.Z, {
                                  __self: Dt,
                                  __source: {
                                    fileName: Xt,
                                    lineNumber: 138,
                                    columnNumber: 7
                                  }
                                })
                              )
                            : null;
                        })(n)
                      )
                    ),
                    s.createElement(
                      E.Z,
                      {
                        style: Kt.header,
                        __self: Dt,
                        __source: {
                          fileName: Xt,
                          lineNumber: 99,
                          columnNumber: 19
                        }
                      },
                      s.createElement(
                        T.ZP,
                        {
                          dir: 'ltr',
                          link: (0, L.po)(n.user.screen_name),
                          numberOfLines: 1,
                          onClick: m.QY,
                          size: 'body',
                          style: Kt.screenName,
                          __self: Dt,
                          __source: {
                            fileName: Xt,
                            lineNumber: 100,
                            columnNumber: 21
                          }
                        },
                        '@',
                        n.user.screen_name
                      ),
                      s.createElement(Me.Z, {
                        __self: Dt,
                        __source: {
                          fileName: Xt,
                          lineNumber: 111,
                          columnNumber: 21
                        }
                      }),
                      s.createElement(
                        T.ZP,
                        {
                          color: 'blue700',
                          link: (0, L.XS)(n),
                          onClick: Qt,
                          weight: 'bold',
                          __self: Dt,
                          __source: {
                            fileName: Xt,
                            lineNumber: 112,
                            columnNumber: 21
                          }
                        },
                        Ut
                      )
                    ),
                    (function (e) {
                      var t = ke(e);
                      return !t || Le(e)
                        ? null
                        : s.createElement(
                            E.Z,
                            {
                              style: Kt.highlightedLabel,
                              __self: Dt,
                              __source: {
                                fileName: Xt,
                                lineNumber: 149,
                                columnNumber: 5
                              }
                            },
                            s.createElement(Oe.Z, {
                              label: t,
                              onClick: m.QY,
                              shouldTruncate: !0,
                              withTopMargin: !1,
                              __self: Dt,
                              __source: {
                                fileName: Xt,
                                lineNumber: 150,
                                columnNumber: 7
                              }
                            })
                          );
                    })(i)
                  ),
                  s.createElement(Mt, {
                    link: (0, L.t0)(n),
                    __self: Dt,
                    __source: {
                      fileName: Xt,
                      lineNumber: 123,
                      columnNumber: 17
                    }
                  })
                ),
                s.createElement(xt, {
                  hideMedia: t,
                  section: fe.bx.PARENT,
                  tweet: n,
                  __self: Dt,
                  __source: { fileName: Xt, lineNumber: 125, columnNumber: 15 }
                })
              )
            );
          }
        );
      };
      var Kt = h.Z.create(function (e) {
          return {
            header: { flexDirection: 'row' },
            usernameLabel: {
              alignItems: 'baseline',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: 'calc(100% - 25px)'
            },
            highlightedUserLabelWrapper: { height: 67 },
            highlightedLabel: { maxWidth: '100%' },
            username: { flex: '1 1 auto' },
            screenName: { flexDirection: 'row', color: e.colors.gray700 },
            usernameTimestamp: {
              alignItems: 'flex-start',
              flexDirection: 'row',
              maxWidth: '100%'
            },
            timestampAndEditedIcon: {
              flexDirection: 'row',
              flexBasis: 'content'
            }
          };
        }),
        Ht = n(81443),
        Ft =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/PrimaryActionButton/index.js',
        Gt = void 0,
        qt = h.Z.create(function (e) {
          return {
            root: {
              paddingTop: e.spaces.space4,
              paddingBottom: e.spaces.space12
            }
          };
        });
      const Yt = function (e) {
        var t = e.children,
          n = e.link,
          r = e.onClick;
        return s.createElement(
          E.Z,
          {
            style: qt.root,
            __self: Gt,
            __source: { fileName: Ft, lineNumber: 15, columnNumber: 5 }
          },
          s.createElement(
            Ht.ZP,
            {
              backgroundColor: 'transparent',
              borderColor: 'buttonOutlinedBorder',
              color: 'blue700',
              link: n,
              onClick: r,
              size: 'small',
              __self: Gt,
              __source: { fileName: Ft, lineNumber: 16, columnNumber: 7 }
            },
            t
          )
        );
      };
      var $t = n(63987),
        Jt =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/PrivacyNotice/index.js',
        en = p().eeb55174,
        tn = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), s = 0;
              s < n;
              s++
            )
              i[s] = arguments[s];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'handleInViewport', function (e) {
                e.isIntersecting &&
                  !t.props.isPrivacyNoticeSeen &&
                  ((0, m.fv)(), t.props.setPrivacyNoticeSeen(!0));
              }),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props.style,
                n = this.props.isPrivacyNoticeSeen,
                r = kt.Z.generate({
                  backgroundColor: 'transparent',
                  color: h.Z.theme.colors.blue700
                });
              return s.createElement(
                et.Z,
                {
                  __self: this,
                  __source: { fileName: Jt, lineNumber: 41, columnNumber: 7 }
                },
                function (i) {
                  var o = i.windowWidth < ce.e;
                  return s.createElement(
                    se.Z,
                    {
                      disabled: n,
                      onChange: e.handleInViewport,
                      threshold: 1,
                      __self: e,
                      __source: {
                        fileName: Jt,
                        lineNumber: 45,
                        columnNumber: 13
                      }
                    },
                    s.createElement(
                      ae.Z,
                      {
                        accessibilityLabel: en,
                        interactiveStyles: r,
                        link: 'https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy',
                        onPress: m.QZ,
                        style: [nn.iconWrapper, t],
                        __self: e,
                        __source: {
                          fileName: Jt,
                          lineNumber: 46,
                          columnNumber: 15
                        }
                      },
                      function (t) {
                        var n = t.isFocused,
                          r = t.isHovered,
                          i = t.isPressed;
                        return s.createElement($t.Z, {
                          style: [
                            nn.icon,
                            o && nn.tiny,
                            (n || r || i) && nn.iconFocus
                          ],
                          __self: e,
                          __source: {
                            fileName: Jt,
                            lineNumber: 54,
                            columnNumber: 19
                          }
                        });
                      }
                    )
                  );
                }
              );
            }),
            t
          );
        })(s.Component),
        nn = h.Z.create(function (e) {
          return {
            iconWrapper: {
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space32,
              width: e.spaces.space32,
              justifyContent: 'center',
              marginEnd: '-' + e.spaces.space4
            },
            icon: { color: e.colors.gray700 },
            iconFocus: { color: e.colors.blue700 },
            tiny: { fontSize: e.fontSizes.subtext2 }
          };
        }),
        rn =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/ThreadedTweetContentContainer/index.js';
      function on(e) {
        var t = e.children;
        return s.createElement(
          E.Z,
          {
            style: sn.container,
            __self: this,
            __source: { fileName: rn, lineNumber: 17, columnNumber: 5 }
          },
          s.createElement(
            E.Z,
            {
              style: sn.columnLeft,
              __self: this,
              __source: { fileName: rn, lineNumber: 18, columnNumber: 7 }
            },
            s.createElement(E.Z, {
              style: sn.line,
              __self: this,
              __source: { fileName: rn, lineNumber: 19, columnNumber: 9 }
            })
          ),
          s.createElement(
            E.Z,
            {
              style: sn.columnRight,
              __self: this,
              __source: { fileName: rn, lineNumber: 21, columnNumber: 7 }
            },
            t
          )
        );
      }
      var sn = h.Z.create(function (e) {
          return {
            columnLeft: {
              minWidth: e.spaces.space48,
              paddingTop: e.spaces.space4
            },
            columnRight: {
              flexBasis: 0,
              flexGrow: 7,
              justifyContent: 'center',
              marginStart: e.spaces.space4,
              paddingTop: e.spaces.space12
            },
            container: { flexDirection: 'row', paddingBottom: e.spaces.space4 },
            line: {
              backgroundColor: e.colors.gray200,
              height: '100%',
              marginHorizontal: 'auto',
              minHeight: '25px',
              width: '2px'
            }
          };
        }),
        cn =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/ThreadIndicator/index.js',
        an = p().fea9464c,
        ln = p().d8708428;
      function un(e) {
        var t = e.tweet;
        return s.createElement(
          E.Z,
          {
            style: mn.container,
            __self: this,
            __source: { fileName: cn, lineNumber: 23, columnNumber: 5 }
          },
          s.createElement(
            E.Z,
            {
              style: mn.columnLeft,
              __self: this,
              __source: { fileName: cn, lineNumber: 24, columnNumber: 7 }
            },
            s.createElement(
              ae.Z,
              {
                hoverLabel: { label: ln },
                interactiveStyles: null,
                __self: this,
                __source: { fileName: cn, lineNumber: 25, columnNumber: 9 }
              },
              s.createElement(le.default, {
                accessibilityHidden: !0,
                focusable: !1,
                onClick: m.NS,
                screenName: t.user.screen_name,
                shape: q(t.user),
                size: 'large',
                uri: t.user.profile_image_url_https,
                withLink: !0,
                __self: this,
                __source: { fileName: cn, lineNumber: 31, columnNumber: 11 }
              })
            )
          ),
          s.createElement(
            E.Z,
            {
              style: mn.columnRight,
              __self: this,
              __source: { fileName: cn, lineNumber: 43, columnNumber: 7 }
            },
            s.createElement(
              T.ZP,
              {
                color: 'blue700',
                link: (0, L.t0)(t),
                onClick: m.NS,
                size: 'body',
                __self: this,
                __source: { fileName: cn, lineNumber: 44, columnNumber: 9 }
              },
              an
            )
          )
        );
      }
      var mn = h.Z.create(function (e) {
          return {
            container: { flexDirection: 'row', paddingBottom: e.spaces.space4 },
            columnLeft: { alignItems: 'center', minWidth: e.spaces.space48 },
            columnRight: {
              flexBasis: 0,
              flexGrow: 7,
              justifyContent: 'center',
              marginStart: e.spaces.space4
            }
          };
        }),
        _n =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/GenericAction/index.js',
        dn = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), s = 0;
              s < n;
              s++
            )
              i[s] = arguments[s];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'handleClick', function (e) {
                var n = t.props.onClick;
                n && n(e);
              }),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                n = t.accessibilityLabel,
                r = t.hoverColor,
                i = t.hoverLabel,
                o = t.icon,
                c = t.isLastAction,
                a = t.link,
                l = t.pullLeft,
                u = t.shouldTruncate,
                m = t.text,
                _ = { color: h.Z.theme.colors[r] },
                d = kt.Z.generate({
                  backgroundColor: 'transparent',
                  color: h.Z.theme.colors[r],
                  customHoverBackgroundColor: 'transparent',
                  customPressedBackgroundColor: 'transparent'
                }),
                b = kt.Z.generate({
                  backgroundColor: 'transparent',
                  color: h.Z.theme.colors[r]
                }),
                f = a ? 'link' : 'button';
              return s.createElement(
                ae.Z,
                {
                  accessibilityLabel: n,
                  accessibilityRole: f,
                  hoverLabel: i,
                  interactiveStyles: d,
                  link: a,
                  onClick: this.handleClick,
                  style: [
                    fn.root,
                    u && fn.truncate,
                    !c && fn.gapBetweenActions
                  ],
                  __self: this,
                  __source: { fileName: _n, lineNumber: 59, columnNumber: 7 }
                },
                function (t) {
                  var n = t.isFocused,
                    r = t.isHovered,
                    i = t.isPressed;
                  return s.createElement(
                    s.Fragment,
                    {
                      __self: e,
                      __source: {
                        fileName: _n,
                        lineNumber: 69,
                        columnNumber: 11
                      }
                    },
                    s.createElement(
                      E.Z,
                      {
                        focusable: !1,
                        style: [
                          fn.iconWrapper,
                          l && fn.pullLeft,
                          r && b.hoverStyle,
                          i && b.pressedStyle
                        ],
                        __self: e,
                        __source: {
                          fileName: _n,
                          lineNumber: 70,
                          columnNumber: 13
                        }
                      },
                      s.createElement(o, {
                        style: [fn.icon, (n || i || r) && _],
                        __self: e,
                        __source: {
                          fileName: _n,
                          lineNumber: 79,
                          columnNumber: 15
                        }
                      })
                    ),
                    m
                      ? s.createElement(
                          T.ZP,
                          {
                            numberOfLines: 1,
                            size: 'subtext1',
                            style: [
                              fn.text,
                              (n || i || r) && _,
                              (n || i || r) && fn.textHover
                            ],
                            weight: 'bold',
                            __self: e,
                            __source: {
                              fileName: _n,
                              lineNumber: 82,
                              columnNumber: 15
                            }
                          },
                          m
                        )
                      : null
                  );
                }
              );
            }),
            t
          );
        })(s.Component);
      (0, o.Z)(dn, 'defaultProps', { pullLeft: !1, shouldTruncate: !1 });
      const bn = dn;
      var fn = h.Z.create(function (e) {
          return {
            root: { flexDirection: 'row', alignItems: 'center' },
            iconWrapper: {
              borderRadius: e.borderRadii.infinite,
              height: e.spaces.space32,
              width: e.spaces.space32,
              justifyContent: 'center'
            },
            icon: { color: e.colors.gray700 },
            gapBetweenActions: { marginEnd: e.spaces.space20 },
            pullLeft: { marginStart: '-' + e.spaces.space4 },
            text: { color: e.colors.gray700, marginStart: e.spaces.space4 },
            textHover: { textDecorationLine: 'underline' },
            truncate: { flexShrink: 1 }
          };
        }),
        pn = n(47497),
        Nn = n(64641),
        En =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/LikeAction/index.js',
        Tn = p().d58baa7f,
        hn = p().c244ba0b,
        In = p().cbca8ff6,
        Cn = function () {
          return s.createElement(pn.Z, {
            style: Zn.iconFill,
            __self: void 0,
            __source: { fileName: En, lineNumber: 29, columnNumber: 32 }
          });
        },
        vn = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), s = 0;
              s < n;
              s++
            )
              i[s] = arguments[s];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'getAccessibilityLabel', function (e) {
                if (e > 0) {
                  var t = Tn(e);
                  return hn({ count: e, formattedCount: t });
                }
                return In;
              }),
              (0, o.Z)((0, r.Z)(t), 'getText', function () {
                var e = t.props.likeCount;
                if (e > 0) return Tn(e);
              }),
              (0, o.Z)((0, r.Z)(t), 'handleLikeActionClick', function (e) {
                (0, m.S1)(e),
                  Nn.ZP.send({
                    key: Nn.zW.TRIGGER,
                    details: { region: Nn.dJ.INTENT, type: Nn.zW.CLICK }
                  }),
                  Nn.ZP.send({
                    key: Nn.zW.TRIGGER,
                    details: { region: Nn.dJ.INTENT, type: Nn.zW.LIKE }
                  });
              }),
              t
            );
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.hoverLabel,
                n = e.isLastAction,
                r = e.link,
                i = e.likeCount,
                o = this.getText(),
                c = this.getAccessibilityLabel(i);
              return s.createElement(bn, {
                accessibilityLabel: c,
                hoverColor: 'magenta500',
                hoverLabel: t,
                icon: Cn,
                isLastAction: n,
                link: r,
                onClick: this.handleLikeActionClick,
                pullLeft: !0,
                text: o,
                __self: this,
                __source: { fileName: En, lineNumber: 59, columnNumber: 7 }
              });
            }),
            t
          );
        })(s.Component),
        Zn = h.Z.create(function (e) {
          return {
            iconFill: { fill: e.colors.magenta500, color: e.colors.magenta500 }
          };
        }),
        yn = n(91149),
        wn = n(5781),
        gn = Object.freeze({
          conversation: 'conversation',
          covid19: 'covid19'
        }),
        Pn = ['hoverLabel', 'isLastAction'],
        xn =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/NewsAction/index.js',
        An = void 0,
        Rn = p().c1ab8b08,
        kn = p().adade5fe,
        Ln = p().d503542e,
        Sn = p().ab7c2dea,
        On = function () {
          return s.createElement(yn.Z, {
            style: Mn.iconFill,
            __self: An,
            __source: { fileName: xn, lineNumber: 30, columnNumber: 32 }
          });
        },
        Mn = h.Z.create(function (e) {
          return {
            iconFill: { fill: e.colors.blue500, color: e.colors.blue500 }
          };
        });
      const Wn = function (e) {
        var t = e.hoverLabel,
          n = e.isLastAction,
          r = (0, x.Z)(e, Pn);
        return s.createElement(
          et.Z,
          {
            __self: An,
            __source: { fileName: xn, lineNumber: 56, columnNumber: 5 }
          },
          function (e) {
            var i = e.windowWidth < ce.e,
              o = (function (e, t) {
                var n = e.link,
                  r = e.newsActionType,
                  i = e.tweet;
                return r === gn.covid19
                  ? {
                      accessibilityLabel: Rn,
                      icon: wn.Z,
                      link: n,
                      text: t ? kn : Rn
                    }
                  : {
                      accessibilityLabel: Ln,
                      icon: On,
                      link: (0, L.Rk)(i),
                      text: Sn
                    };
              })(r, i),
              c = o.accessibilityLabel,
              a = o.icon,
              l = o.link,
              u = o.text;
            return s.createElement(bn, {
              accessibilityLabel: c,
              hoverColor: 'blue700',
              hoverLabel: t,
              icon: a,
              isLastAction: n,
              link: l,
              onClick: m.ri,
              shouldTruncate: n,
              text: u,
              __self: An,
              __source: { fileName: xn, lineNumber: 62, columnNumber: 11 }
            });
          }
        );
      };
      var zn = n(15861),
        Xn = n(64687),
        Dn = n.n(Xn),
        Vn = n(97196),
        jn = n(65643),
        Un = n(40608),
        Qn = n(29255),
        Bn = n(1398),
        Kn = p().hee6b9ca,
        Hn = p().i55ea7bc,
        Fn = p().a9d3434a,
        Gn = p().ffb13f8a,
        qn = p().e3f4426c,
        Yn = (function (e) {
          function t(t) {
            var n;
            (n = e.call(this, t) || this),
              (0, o.Z)((0, r.Z)(n), 'isFallback', function () {
                return !window.navigator.share;
              }),
              (0, o.Z)((0, r.Z)(n), 'getClickHandler', function () {
                return n.isFallback() ? n.handleCopyLink : n.handleShare;
              }),
              (0, o.Z)((0, r.Z)(n), 'handleClick', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  n.getClickHandler()(e),
                  (0, m.ju)();
              }),
              (0, o.Z)((0, r.Z)(n), 'handleShare', function (e) {
                var t = n.props.link;
                (0, zn.Z)(
                  Dn().mark(function e() {
                    var n, r, i, o, s;
                    return Dn().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 0),
                                (n = t.pathname),
                                (r = t.hash),
                                (i = t.state),
                                (o = t.query),
                                (s = jn.Z.createPath(
                                  jn.Z.createLocation({
                                    pathname: n,
                                    hash: r,
                                    query: o,
                                    state: i
                                  })
                                )),
                                !navigator.share)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (e.next = 6), navigator.share({ url: s });
                            case 6:
                              e.next = 11;
                              break;
                            case 8:
                              (e.prev = 8), (e.t0 = e.catch(0));
                            case 11:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 8]]
                    );
                  })
                )();
              }),
              (0, o.Z)((0, r.Z)(n), 'handleCopyLink', function (e) {
                var t = n.props.link,
                  r = t.pathname,
                  i = t.hash,
                  o = t.state,
                  s = t.query,
                  c = jn.Z.createPath(
                    jn.Z.createLocation({
                      pathname: r,
                      hash: i,
                      query: s,
                      state: o
                    })
                  );
                Vn.Z.isAvailable() &&
                  (Vn.Z.setString(c),
                  n.setState({ actionLabel: qn, icon: Un.Z }),
                  setTimeout(function () {
                    n.setState({
                      actionLabel: n.props.isTinyTweet ? Fn : Gn,
                      icon: Qn.Z
                    });
                  }, 6e3));
              });
            var i,
              s = n.isFallback();
            i = s ? (t.isTinyTweet ? Fn : Gn) : t.isTinyTweet ? Hn : Kn;
            var c = s ? Qn.Z : Bn.Z;
            return (n.state = { actionLabel: i, icon: c }), n;
          }
          return (
            (0, i.Z)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.hoverLabel,
                n = e.isLastAction,
                r = this.state,
                i = r.actionLabel,
                o = r.icon;
              return s.createElement(bn, {
                hoverColor: 'green500',
                hoverLabel: t,
                icon: o,
                isLastAction: n,
                onClick: this.handleClick,
                pullLeft: !0,
                shouldTruncate: !0,
                text: i,
                __self: this,
                __source: {
                  fileName:
                    '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/ShareAction/index.js',
                  lineNumber: 112,
                  columnNumber: 7
                }
              });
            }),
            t
          );
        })(s.Component),
        $n =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetActions/index.js',
        Jn = void 0,
        er = p().cbca8ff6,
        tr = p().a9b1c384,
        nr = p().hee6b9ca;
      const rr = function (e) {
        var t,
          n = e.likeCount,
          r = e.likeLink,
          i = e.newsActionLink,
          o = e.newsActionType,
          a = e.permalink,
          l = e.tweet,
          u = o !== gn.covid19,
          m = s.createElement(vn, {
            hoverLabel: { label: er },
            isLastAction: !1,
            key: 'like-action',
            likeCount: n,
            link: r,
            __self: Jn,
            __source: { fileName: $n, lineNumber: 34, columnNumber: 5 }
          }),
          _ = function (e) {
            var t = o !== gn.covid19 ? { label: tr } : null;
            return s.createElement(Wn, {
              hoverLabel: t,
              isLastAction: e,
              key: 'news-action',
              link: i,
              newsActionType: o,
              tweet: l,
              __self: Jn,
              __source: { fileName: $n, lineNumber: 54, columnNumber: 7 }
            });
          },
          d = s.createElement(
            et.Z,
            {
              key: 'share-action',
              __self: Jn,
              __source: { fileName: $n, lineNumber: 67, columnNumber: 5 }
            },
            function (e) {
              var t = e.windowWidth;
              return s.createElement(
                H,
                {
                  namespace: { component: c.z8.SHARE_ACTION },
                  __self: Jn,
                  __source: { fileName: $n, lineNumber: 69, columnNumber: 9 }
                },
                s.createElement(
                  z.$6,
                  {
                    __self: Jn,
                    __source: { fileName: $n, lineNumber: 70, columnNumber: 11 }
                  },
                  function (e) {
                    return s.createElement(Yn, {
                      hoverLabel: { label: nr },
                      isLastAction: !0,
                      isTinyTweet: t < ce.e,
                      link: e.linkProcessor(a),
                      __self: Jn,
                      __source: {
                        fileName: $n,
                        lineNumber: 72,
                        columnNumber: 15
                      }
                    });
                  }
                )
              );
            }
          );
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            E.Z,
            {
              style: [ir.root, ir.actionsBorder],
              __self: Jn,
              __source: { fileName: $n, lineNumber: 101, columnNumber: 7 }
            },
            ((t = [m]), u ? t.push(_(!1), d) : t.push(_(!0)), t)
          )
        );
      };
      var ir = h.Z.create(function (e) {
          return {
            root: { alignItems: 'flex-start', flexDirection: 'row' },
            actionsBorder: {
              borderTopWidth: e.borderWidths.small,
              borderColor: e.colors.gray200,
              marginTop: e.spaces.space4,
              paddingTop: e.spaces.space4
            }
          };
        }),
        or = n(67079),
        sr = n(5509),
        cr = n(48778),
        ar = ['aspect_ratio', 'duration_ms'],
        lr =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetContentWideScreenVideo/index.js',
        ur = void 0,
        mr = p().fd2ac40a,
        _r = p().d7b80bd3,
        dr = p().fc209bb7,
        br = 'NOT_STARTED',
        fr = {
          url: 'https://pbs.twimg.com/lex/placeholder_live_nomargin.png',
          width: 1920,
          height: 1080
        },
        pr = function (e, t, n) {
          return ('string' == typeof n ? [n] : n)
            .map(function (n) {
              return e[n] && e[n][t];
            })
            .find(function (e) {
              return !!e;
            });
        },
        Nr = pr,
        Er = pr,
        Tr = function (e) {
          return !(null == e || !e.binding_values.broadcast_id.string_value);
        };
      function hr(e) {
        var t,
          n = this,
          r = e.tweet,
          i = e.section,
          o = (0, L.t0)(r),
          c = r.card,
          a = null == c ? void 0 : c.binding_values;
        if (r.video) t = r.video;
        else {
          if (!Tr(c)) return null;
          if (Nr(a, 'string_value', 'broadcast_state') === br)
            return (function (e) {
              var t = null == e ? void 0 : e.binding_values,
                n = Nr(t, 'string_value', 'broadcast_url'),
                r = Er(t, 'image_value', 'broadcast_pre_live_slate'),
                i = r.url ? { url: r.url, width: 600, height: 337 } : fr,
                o = s.useMemo(
                  function () {
                    return function (e) {
                      e.stopPropagation(),
                        e.preventDefault(),
                        window.open(n, '_blank');
                    };
                  },
                  [n]
                );
              return s.createElement(
                E.Z,
                {
                  onClick: o,
                  __self: ur,
                  __source: { fileName: lr, lineNumber: 118, columnNumber: 5 }
                },
                s.createElement(sr.Z, {
                  accessibilityLabel: mr,
                  aspectMode: cr.Z.exact(h.Z.theme.aspectRatios.landscape),
                  image: i,
                  previewMode: !1,
                  __self: ur,
                  __source: { fileName: lr, lineNumber: 119, columnNumber: 7 }
                }),
                (function (e) {
                  var t = null == e ? void 0 : e.binding_values,
                    n = Nr(t, 'string_value', 'broadcast_scheduled_start_time'),
                    r = n ? new Date(parseInt(n, 10)) : void 0,
                    i = r ? _r({ date: dr(r) }) : void 0;
                  return i
                    ? s.createElement(
                        E.Z,
                        {
                          style: Ir.labelOverlay,
                          __self: ur,
                          __source: {
                            fileName: lr,
                            lineNumber: 94,
                            columnNumber: 5
                          }
                        },
                        s.createElement(
                          or.ZP,
                          {
                            __self: ur,
                            __source: {
                              fileName: lr,
                              lineNumber: 95,
                              columnNumber: 7
                            }
                          },
                          i
                        )
                      )
                    : null;
                })(e)
              );
            })(c);
          var l = (function (e) {
              var t = null == e ? void 0 : e.binding_values,
                n = parseInt(Nr(t, 'string_value', 'broadcast_width'), 10),
                r = parseInt(Nr(t, 'string_value', 'broadcast_height'), 10),
                i = Math.max(n / r, 1),
                o = Er(t, 'image_value', 'broadcast_thumbnail_original'),
                s = Nr(t, 'string_value', 'broadcast_state') === br,
                c = Er(t, 'image_value', 'broadcast_pre_live_slate') || fr,
                a = s ? c : o;
              return (0, P.Z)(
                {
                  type: 'live_broadcast',
                  aspect_ratio: i,
                  broadcast_id: Nr(t, 'string_value', 'broadcast_id'),
                  content_id: Nr(t, 'string_value', 'broadcast_media_key'),
                  destination: 'destination_default'
                },
                a ? { poster_image: a } : null,
                {
                  duration_ms: null,
                  timecode:
                    Nr(t, 'string_value', 'broadcast_timecode') ||
                    Nr(t, 'string_value', 'broadcast_replay_edited_start_time')
                }
              );
            })(c),
            u = l.aspect_ratio,
            m = l.duration_ms,
            _ = (0, x.Z)(l, ar);
          (t = (0, P.Z)(
            {
              aspectRatio: u,
              durationMs: m,
              videoId: {},
              contentType: '',
              includeBroadcastEventAssociation: !1
            },
            _
          )),
            Tr(c) &&
              ((t.videoId = {
                id:
                  null == c
                    ? void 0
                    : c.binding_values.broadcast_id.string_value,
                tweetId: (0, L.CX)(o),
                type: 'broadcast'
              }),
              (t.contentType = 'vmap'),
              (t.includeBroadcastEventAssociation = !1));
        }
        return s.createElement(
          si.Consumer,
          {
            __self: this,
            __source: { fileName: lr, lineNumber: 166, columnNumber: 5 }
          },
          function (e) {
            return s.createElement(at.Z, {
              api: e,
              isInCard: !0,
              link: o,
              possiblySensitive: r.possibly_sensitive,
              section: i,
              tweetId: r.id_str,
              video: t,
              __self: n,
              __source: { fileName: lr, lineNumber: 169, columnNumber: 11 }
            });
          }
        );
      }
      var Ir = h.Z.create(function (e) {
          return {
            labelOverlay: {
              position: 'absolute',
              bottom: e.spaces.space12,
              start: e.spaces.space12
            }
          };
        }),
        Cr = n(23376),
        vr = n(89857),
        Zr =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/Tweet/index.js',
        yr = p().f9e9679f,
        wr = p().ib52c63b,
        gr = p().ee2d941c,
        Pr = p().h4884940,
        xr = p().a7fb9c0c,
        Ar = p().d8708428,
        Rr = p().d4be10d8,
        kr = p().ifd14e5a,
        Lr = p().j54e1e6e,
        Sr = p().jade381b,
        Or = p().d725a289,
        Mr = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), a = 0;
              a < n;
              a++
            )
              i[a] = arguments[a];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'state', { impressionHandled: !1 }),
              (0, o.Z)((0, r.Z)(t), 'handleImpression', function (e) {
                var n = e.isIntersecting,
                  r = t.state.impressionHandled;
                n &&
                  !r &&
                  (c.ZP.scribe(c.eX.IMPRESSION, { section: c.bx.MAIN }),
                  t.setState({ impressionHandled: !0 }));
              }),
              (0, o.Z)((0, r.Z)(t), 'handleFollowIntentClick', function (e) {
                e.stopPropagation(), (0, m.pd)(e);
              }),
              (0, o.Z)((0, r.Z)(t), 'isWideScreenVideo', function () {
                var e,
                  n,
                  r,
                  i = t.props,
                  o = i.tweet,
                  s = i.wideScreenMediaMaxWidth;
                return (
                  ((null == (e = o.card) ||
                  null == (n = e.binding_values) ||
                  null == (r = n.broadcast_id)
                    ? void 0
                    : r.string_value) ||
                    o.video) &&
                  (0, oe.Z)(s) &&
                  !isNaN(s)
                );
              }),
              (0, o.Z)((0, r.Z)(t), '_renderWideScreenTweetVideo', function () {
                var e = t.props,
                  n = e.hideMedia,
                  i = e.hideThread,
                  o = e.tweet,
                  a = s.createElement(hr, {
                    hideMedia: n,
                    hideThread: i,
                    section: c.bx.MAIN,
                    tweet: o,
                    __self: (0, r.Z)(t),
                    __source: { fileName: Zr, lineNumber: 243, columnNumber: 7 }
                  });
                return t.isSelfThread()
                  ? s.createElement(
                      on,
                      {
                        __self: (0, r.Z)(t),
                        __source: {
                          fileName: Zr,
                          lineNumber: 252,
                          columnNumber: 7
                        }
                      },
                      a
                    )
                  : a;
              }),
              (0, o.Z)((0, r.Z)(t), '_maybeRenderEditedCallout', function () {
                return t._isEdited()
                  ? s.createElement(We.Z, {
                      editType: 'latest',
                      textMode: 'standalone',
                      textSize: 'body',
                      __self: (0, r.Z)(t),
                      __source: {
                        fileName: Zr,
                        lineNumber: 291,
                        columnNumber: 31
                      }
                    })
                  : null;
              }),
              (0, o.Z)((0, r.Z)(t), '_maybeRenderPlace', function () {
                var e = t.props.tweet;
                if (e && e.place) {
                  var n = e.place;
                  return s.createElement(
                    T.ZP,
                    {
                      color: 'gray700',
                      link: (0, L.$1)(n),
                      onClick: m.zJ,
                      __self: (0, r.Z)(t),
                      __source: {
                        fileName: Zr,
                        lineNumber: 299,
                        columnNumber: 9
                      }
                    },
                    n.full_name
                  );
                }
                return null;
              }),
              (0, o.Z)((0, r.Z)(t), '_isEdited', function () {
                var e = t.props.tweet;
                return e.isEdited && !e.isStaleEdit;
              }),
              (0, o.Z)((0, r.Z)(t), '_isStaleTweet', function () {
                var e,
                  n = t.props.tweet;
                return (
                  (null == (e = n.parent) ? void 0 : e.isStaleEdit) ||
                  n.isStaleEdit
                );
              }),
              (0, o.Z)((0, r.Z)(t), '_renderStaleCallout', function () {
                return s.createElement(
                  E.Z,
                  {
                    style: Wr.staleCallout,
                    __self: (0, r.Z)(t),
                    __source: { fileName: Zr, lineNumber: 319, columnNumber: 7 }
                  },
                  s.createElement(We.Z, {
                    editType: 'stale',
                    textMode: 'inline',
                    textSize: 'body',
                    __self: (0, r.Z)(t),
                    __source: { fileName: Zr, lineNumber: 320, columnNumber: 9 }
                  })
                );
              }),
              (0, o.Z)((0, r.Z)(t), '_renderTimestamp', function (e) {
                var n = t.props,
                  i = n.permalink,
                  o = n.tweet,
                  c = new Date(o.created_at),
                  a = Sr(c),
                  l = Or(c) + ' · ' + a;
                return s.createElement(zt.Z, {
                  accessibilityLabel: t._isEdited()
                    ? Lr + ' ' + kr + ' ' + l
                    : null,
                  color: 'gray700',
                  link: i,
                  onPress: m.N5,
                  prefix: e && e.prefix,
                  relative: !1,
                  timestamp: o.created_at,
                  __self: (0, r.Z)(t),
                  __source: { fileName: Zr, lineNumber: 332, columnNumber: 7 }
                });
              }),
              t
            );
          }
          (0, i.Z)(t, e);
          var n = t.prototype;
          return (
            (n.render = function () {
              var e,
                t,
                n = this.isWideScreenVideo(),
                r = this.props,
                i = r.onLayout,
                o = r.permalink;
              return (
                n
                  ? ((t = {
                      maxWidth:
                        (this.props.wideScreenMediaMaxWidth || Cr.x) + 'px',
                      borderRadius: 0
                    }),
                    (e = this._renderWideScreenTweetVideo()))
                  : (e = s.createElement(
                      s.Fragment,
                      {
                        __self: this,
                        __source: {
                          fileName: Zr,
                          lineNumber: 125,
                          columnNumber: 9
                        }
                      },
                      this._maybeRenderParentTweet(),
                      this._renderHeader(),
                      this._renderTweetContentMetaAndPrivacy(),
                      this._maybeRenderThreadIndicator(),
                      this._isStaleTweet()
                        ? this._renderStaleCallout()
                        : this._maybeRenderTweetActions(),
                      this._maybeRenderPrimaryActionButton()
                    )),
                s.createElement(
                  H,
                  {
                    namespace: { section: c.bx.MAIN },
                    __self: this,
                    __source: { fileName: Zr, lineNumber: 136, columnNumber: 7 }
                  },
                  s.createElement(
                    ce.Z,
                    {
                      onLayout: i,
                      style: [Wr.outerContainer, n && t],
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 137,
                        columnNumber: 9
                      }
                    },
                    s.createElement(
                      re,
                      {
                        link: o,
                        onClick: m.EF,
                        style: n ? null : Wr.innerContainer,
                        __self: this,
                        __source: {
                          fileName: Zr,
                          lineNumber: 138,
                          columnNumber: 11
                        }
                      },
                      e
                    )
                  )
                )
              );
            }),
            (n._renderHeader = function () {
              var e = this.props.tweet,
                t = this.state.impressionHandled;
              return s.createElement(
                se.Z,
                {
                  disabled: t,
                  onChange: this.handleImpression,
                  threshold: 1,
                  __self: this,
                  __source: { fileName: Zr, lineNumber: 155, columnNumber: 7 }
                },
                s.createElement(
                  E.Z,
                  {
                    style: [
                      Wr.header,
                      this.isSelfThread() && Wr.threadedHeader
                    ],
                    __self: this,
                    __source: { fileName: Zr, lineNumber: 156, columnNumber: 9 }
                  },
                  s.createElement(
                    ae.Z,
                    {
                      hoverLabel: { label: Ar },
                      interactiveStyles: null,
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 157,
                        columnNumber: 11
                      }
                    },
                    s.createElement(le.default, {
                      accessibilityHidden: !0,
                      focusable: !1,
                      onClick: m.pd,
                      screenName: e.user.screen_name,
                      shape: q(e.user),
                      size: 'xxLarge',
                      uri: e.user.profile_image_url_https,
                      withLink: !0,
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 163,
                        columnNumber: 13
                      }
                    })
                  ),
                  s.createElement(
                    E.Z,
                    {
                      style: Wr.userNameAndLabel,
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 174,
                        columnNumber: 11
                      }
                    },
                    s.createElement(
                      ae.Z,
                      {
                        hoverLabel: { label: Ar },
                        interactiveStyles: null,
                        __self: this,
                        __source: {
                          fileName: Zr,
                          lineNumber: 175,
                          columnNumber: 13
                        }
                      },
                      s.createElement(Se.Z, {
                        affiliateBadgeInfo: ke(e.user.highlighted_label),
                        isBlueVerified: e.user.is_blue_verified,
                        isVerified: e.user.verified,
                        name: e.user.name,
                        onLinkClick: m.pd,
                        screenName: e.user.screen_name,
                        screenNameSuffix: s.createElement(
                          T.ZP,
                          {
                            color: 'blue700',
                            link: (0, L.XS)(e),
                            onClick: this.handleFollowIntentClick,
                            weight: 'bold',
                            __self: this,
                            __source: {
                              fileName: Zr,
                              lineNumber: 189,
                              columnNumber: 19
                            }
                          },
                          xr
                        ),
                        verifiedType: e.user.verified_type,
                        withLink: !0,
                        withScreenName: !0,
                        withStackedLayout: !0,
                        __self: this,
                        __source: {
                          fileName: Zr,
                          lineNumber: 181,
                          columnNumber: 15
                        }
                      })
                    ),
                    this._maybeRenderHighlightedUserLabel()
                  ),
                  this._maybeRenderTwitterLogo()
                )
              );
            }),
            (n._maybeRenderTwitterLogo = function () {
              var e = this.props,
                t = e.hideThread,
                n = e.permalink,
                r = e.tweet;
              return t || (!t && !r.parent)
                ? s.createElement(Mt, {
                    link: n,
                    __self: this,
                    __source: {
                      fileName: Zr,
                      lineNumber: 214,
                      columnNumber: 59
                    }
                  })
                : null;
            }),
            (n._renderTweetContentMetaAndPrivacy = function () {
              var e = this.props,
                t = e.hideMedia,
                n = e.hideThread,
                r = e.tweet,
                i = s.createElement(
                  s.Fragment,
                  {
                    __self: this,
                    __source: { fileName: Zr, lineNumber: 221, columnNumber: 7 }
                  },
                  s.createElement(xt, {
                    hideMedia: t,
                    hideThread: n,
                    section: c.bx.MAIN,
                    tweet: r,
                    __self: this,
                    __source: { fileName: Zr, lineNumber: 222, columnNumber: 9 }
                  }),
                  s.createElement(
                    E.Z,
                    {
                      style: Wr.meta,
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 223,
                        columnNumber: 9
                      }
                    },
                    this._renderTweetMeta(),
                    this._renderPrivacyNotice()
                  )
                );
              return this.isSelfThread()
                ? s.createElement(
                    s.Fragment,
                    {
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 231,
                        columnNumber: 7
                      }
                    },
                    s.createElement(
                      on,
                      {
                        __self: this,
                        __source: {
                          fileName: Zr,
                          lineNumber: 232,
                          columnNumber: 9
                        }
                      },
                      i
                    )
                  )
                : i;
            }),
            (n._maybeRenderThreadIndicator = function () {
              var e = this.props.tweet;
              return this.isSelfThread()
                ? s.createElement(un, {
                    tweet: e,
                    __self: this,
                    __source: {
                      fileName: Zr,
                      lineNumber: 260,
                      columnNumber: 34
                    }
                  })
                : null;
            }),
            (n._maybeRenderHighlightedUserLabel = function () {
              var e = this.props.tweet.user.highlighted_label,
                t = ke(e);
              return !t || Le(e)
                ? null
                : s.createElement(Oe.Z, {
                    label: t,
                    onClick: m.pd,
                    shouldTruncate: !0,
                    withTopMargin: !1,
                    __self: this,
                    __source: { fileName: Zr, lineNumber: 272, columnNumber: 7 }
                  });
            }),
            (n._maybeRenderParentTweet = function () {
              var e = this.props,
                t = e.hideMedia,
                n = e.hideThread,
                r = e.tweet;
              return r.parent && !n
                ? s.createElement(
                    H,
                    {
                      namespace: { section: c.bx.PARENT },
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 279,
                        columnNumber: 7
                      }
                    },
                    s.createElement(Bt, {
                      hideMedia: t,
                      parentTweet: r.parent,
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 280,
                        columnNumber: 9
                      }
                    })
                  )
                : null;
            }),
            (n._maybeRenderTweetActions = function () {
              var e = this.props.tweet;
              return F(e) ? null : this._renderTweetActions();
            }),
            (n._renderTweetMeta = function () {
              return s.createElement(
                T.ZP,
                {
                  numberOfLines: 1,
                  __self: this,
                  __source: { fileName: Zr, lineNumber: 346, columnNumber: 7 }
                },
                s.createElement(vr.Z, {
                  linkColor: 'gray700',
                  renderEditCallout: this._maybeRenderEditedCallout,
                  renderPlace: this._maybeRenderPlace,
                  renderTimestamp: this._renderTimestamp,
                  __self: this,
                  __source: { fileName: Zr, lineNumber: 347, columnNumber: 9 }
                })
              );
            }),
            (n._renderPrivacyNotice = function () {
              return s.createElement(tn, {
                isPrivacyNoticeSeen: this.props.isPrivacyNoticeSeen,
                setPrivacyNoticeSeen: this.props.setPrivacyNoticeSeen,
                style: Wr.privacy,
                __self: this,
                __source: { fileName: Zr, lineNumber: 359, columnNumber: 7 }
              });
            }),
            (n._renderTweetActions = function () {
              var e,
                t,
                n = this.props,
                r = n.likeActionLink,
                i = n.newsActionLink,
                o = n.newsActionType,
                c = n.permalink,
                a = n.tweet,
                l = a.favorite_count || 0;
              return (
                null != (e = a.previous_counts) &&
                  e.favorite_count &&
                  (l +=
                    null == (t = a.previous_counts)
                      ? void 0
                      : t.favorite_count),
                void 0 !== a.favorite_count
                  ? s.createElement(rr, {
                      likeCount: l,
                      likeLink: r,
                      newsActionLink: i,
                      newsActionType: o,
                      permalink: c,
                      tweet: a,
                      __self: this,
                      __source: {
                        fileName: Zr,
                        lineNumber: 377,
                        columnNumber: 7
                      }
                    })
                  : null
              );
            }),
            (n._maybeRenderPrimaryActionButton = function () {
              var e = this,
                t = this.props,
                n = t.permalink,
                r = t.tweet,
                i = r.conversation_count,
                o = wr({ count: i, formattedCount: yr(i) }),
                c = function (t, n, r) {
                  return s.createElement(
                    Yt,
                    {
                      link: t,
                      onClick: n,
                      __self: e,
                      __source: {
                        fileName: Zr,
                        lineNumber: 397,
                        columnNumber: 9
                      }
                    },
                    r
                  );
                };
              return F(r) || (r.card && (0, ie.i)(r.card))
                ? null
                : r.isStaleEdit
                  ? c(n, m.mZ, Rr)
                  : 0 === Number(r.conversation_count)
                    ? c(L.Bs, m.uM, gr)
                    : c(n, m.uM, o);
            }),
            (n.isSelfThread = function () {
              var e = this.props.tweet,
                t = e.id_str,
                n = e.self_thread;
              return n && n.id_str === t;
            }),
            t
          );
        })(s.Component);
      (0, o.Z)(Mr, 'defaultProps', { hideThread: !1 });
      var Wr = h.Z.create(function (e) {
        return {
          outerContainer: { maxWidth: 550, minWidth: 250, cursor: 'pointer' },
          innerContainer: {
            backgroundColor: e.colors.cellBackground,
            paddingTop: e.spaces.space12,
            paddingRight: e.spaces.space16,
            paddingBottom: e.spaces.space4,
            paddingLeft: e.spaces.space16
          },
          header: { flexDirection: 'row', paddingBottom: e.spaces.space12 },
          threadedHeader: { paddingBottom: 0 },
          userNameAndLabel: {
            flexDirection: 'column',
            justifyContent: 'center',
            marginHorizontal: e.spaces.space4,
            maxWidth: 'calc(100% - 84px)'
          },
          logo: { marginStart: 'auto' },
          meta: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: e.spaces.space2
          },
          staleCallout: {
            borderTopWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
            flexDirection: 'row',
            marginTop: e.spaces.space4,
            paddingTop: e.spaces.space8,
            paddingBottom: e.spaces.space4
          },
          privacy: { marginStart: 'auto' }
        };
      });
      const zr = function (e) {
        var t = e.children,
          n = {
            id: e.id,
            pageData: e.pageData,
            embedType: R.tweet,
            namespace: fe.PE
          };
        return s.createElement(
          U.Provider,
          {
            value: n,
            __self: void 0,
            __source: {
              fileName:
                '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/embeds/Tweet/context.js',
              lineNumber: 17,
              columnNumber: 10
            }
          },
          t
        );
      };
      var Xr = n(11365),
        Dr =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetLoadingState/fallbacks/TweetActionsFallback/index.js',
        Vr = void 0,
        jr = h.Z.create(function (e) {
          return {
            fallbackActions: {
              backgroundColor: e.colors.gray50,
              flex: 1,
              justifyContent: 'center',
              marginBottom: e.spaces.space8,
              marginTop: e.spaces.space8,
              paddingTop: e.spaces.space12,
              position: 'relative'
            },
            width: { width: '50%' }
          };
        });
      const Ur = function () {
        return s.createElement(
          E.Z,
          {
            style: jr.width,
            __self: Vr,
            __source: { fileName: Dr, lineNumber: 8, columnNumber: 5 }
          },
          s.createElement(
            Xr.Z,
            {
              displayStyle: 'block',
              __self: Vr,
              __source: { fileName: Dr, lineNumber: 9, columnNumber: 7 }
            },
            s.createElement(E.Z, {
              style: jr.fallbackActions,
              __self: Vr,
              __source: { fileName: Dr, lineNumber: 10, columnNumber: 9 }
            })
          )
        );
      };
      var Qr =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetLoadingState/fallbacks/TweetTextFallback/index.js',
        Br = void 0,
        Kr = h.Z.create(function (e) {
          return {
            fallbackText: {
              backgroundColor: e.colors.gray50,
              flex: 1,
              justifyContent: 'center',
              marginTop: e.spaces.space8,
              marginBottom: e.spaces.space8,
              paddingTop: e.spaces.space12,
              position: 'relative'
            },
            long: { width: '90%' },
            medium: { width: '80%' },
            short: { width: '65%' }
          };
        });
      const Hr = function () {
        return s.createElement(
          E.Z,
          {
            __self: Br,
            __source: { fileName: Qr, lineNumber: 8, columnNumber: 5 }
          },
          s.createElement(E.Z, {
            style: [Kr.fallbackText, Kr.long],
            __self: Br,
            __source: { fileName: Qr, lineNumber: 9, columnNumber: 7 }
          }),
          s.createElement(E.Z, {
            style: [Kr.fallbackText, Kr.medium],
            __self: Br,
            __source: { fileName: Qr, lineNumber: 10, columnNumber: 7 }
          }),
          s.createElement(E.Z, {
            style: [Kr.fallbackText, Kr.short],
            __self: Br,
            __source: { fileName: Qr, lineNumber: 11, columnNumber: 7 }
          })
        );
      };
      var Fr =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetLoadingState/fallbacks/TweetTimestampFallback/index.js',
        Gr = void 0,
        qr = h.Z.create(function (e) {
          return {
            fallbackTimestamp: {
              backgroundColor: e.colors.gray50,
              flex: 1,
              justifyContent: 'center',
              marginBottom: e.spaces.space8,
              marginTop: e.spaces.space8,
              paddingTop: e.spaces.space12,
              position: 'relative'
            },
            width: { width: '20%' }
          };
        });
      const Yr = function () {
        return s.createElement(
          E.Z,
          {
            style: qr.width,
            __self: Gr,
            __source: { fileName: Fr, lineNumber: 8, columnNumber: 5 }
          },
          s.createElement(E.Z, {
            style: qr.fallbackTimestamp,
            __self: Gr,
            __source: { fileName: Fr, lineNumber: 9, columnNumber: 7 }
          })
        );
      };
      var $r = n(89818),
        Jr =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/components/TweetLoadingState/index.js',
        ei = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, i = new Array(n), s = 0;
              s < n;
              s++
            )
              i[s] = arguments[s];
            return (
              (t = e.call.apply(e, [this].concat(i)) || this),
              (0, o.Z)((0, r.Z)(t), 'state', { seen: !1 }),
              (0, o.Z)((0, r.Z)(t), 'handleInViewport', function (e) {
                var n = e.isIntersecting,
                  r = t.state.seen;
                n && !r && ((0, m.sL)(), t.setState({ seen: !0 }));
              }),
              t
            );
          }
          (0, i.Z)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              Nn.ZP.send({ key: Nn.zW.RESULTS, details: {} }),
                Nn.ZP.send({ key: Nn.zW.RENDERED, details: {} });
            }),
            (n.render = function () {
              var e = this.props,
                t = e.bucket,
                n = e.onLayout,
                r = this.state.seen,
                i = 'cta' === t;
              return s.createElement(
                ce.Z,
                {
                  onLayout: n,
                  style: ni.outerContainer,
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 59, columnNumber: 7 }
                },
                s.createElement(
                  se.Z,
                  {
                    disabled: r,
                    onChange: this.handleInViewport,
                    threshold: 1,
                    __self: this,
                    __source: { fileName: Jr, lineNumber: 60, columnNumber: 9 }
                  },
                  s.createElement(
                    re,
                    {
                      link: L.Bs,
                      onClick: m.CF,
                      style: ni.innerContainer,
                      __self: this,
                      __source: {
                        fileName: Jr,
                        lineNumber: 61,
                        columnNumber: 11
                      }
                    },
                    s.createElement(
                      $r.Z,
                      {
                        avatar: s.createElement(le.default, {
                          size: 'xxLarge',
                          __self: this,
                          __source: {
                            fileName: Jr,
                            lineNumber: 67,
                            columnNumber: 23
                          }
                        }),
                        footer: this._maybeRenderReplyButton(i),
                        usernameContent: this._renderUserNameAndLogo(),
                        withFullWidthChildren: !0,
                        __self: this,
                        __source: {
                          fileName: Jr,
                          lineNumber: 66,
                          columnNumber: 13
                        }
                      },
                      s.createElement(Hr, {
                        __self: this,
                        __source: {
                          fileName: Jr,
                          lineNumber: 72,
                          columnNumber: 16
                        }
                      }),
                      this._renderTimestampAndPrivacyIcon(),
                      this._renderTweetActions()
                    )
                  )
                )
              );
            }),
            (n._renderUserNameAndLogo = function () {
              return s.createElement(
                s.Fragment,
                {
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 84, columnNumber: 7 }
                },
                s.createElement(
                  E.Z,
                  {
                    style: ni.userAndTwitterLogo,
                    __self: this,
                    __source: { fileName: Jr, lineNumber: 85, columnNumber: 9 }
                  },
                  s.createElement(E.Z, {
                    style: ni.userName,
                    __self: this,
                    __source: { fileName: Jr, lineNumber: 86, columnNumber: 11 }
                  }),
                  s.createElement(
                    E.Z,
                    {
                      style: ni.icon,
                      __self: this,
                      __source: {
                        fileName: Jr,
                        lineNumber: 87,
                        columnNumber: 11
                      }
                    },
                    s.createElement(Mt, {
                      link: L.S9,
                      scribeHandler: m.YV,
                      __self: this,
                      __source: {
                        fileName: Jr,
                        lineNumber: 88,
                        columnNumber: 13
                      }
                    })
                  )
                ),
                s.createElement(E.Z, {
                  style: ni.screenName,
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 91, columnNumber: 9 }
                })
              );
            }),
            (n._renderTimestampAndPrivacyIcon = function () {
              return s.createElement(
                E.Z,
                {
                  style: ni.timestampAndPrivacyIcon,
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 98, columnNumber: 7 }
                },
                s.createElement(Yr, {
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 99, columnNumber: 9 }
                }),
                s.createElement(tn, {
                  isPrivacyNoticeSeen: this.props.isPrivacyNoticeSeen,
                  setPrivacyNoticeSeen: this.props.setPrivacyNoticeSeen,
                  style: ni.icon,
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 100, columnNumber: 9 }
                })
              );
            }),
            (n._renderTweetActions = function () {
              return s.createElement(
                E.Z,
                {
                  style: ni.actions,
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 111, columnNumber: 7 }
                },
                s.createElement(Ur, {
                  __self: this,
                  __source: { fileName: Jr, lineNumber: 112, columnNumber: 9 }
                })
              );
            }),
            (n._maybeRenderReplyButton = function (e) {
              return e
                ? s.createElement(
                    E.Z,
                    {
                      style: ni.button,
                      __self: this,
                      __source: {
                        fileName: Jr,
                        lineNumber: 119,
                        columnNumber: 7
                      }
                    },
                    s.createElement(
                      Yt,
                      {
                        link: L.Bs,
                        onClick: m.d$,
                        __self: this,
                        __source: {
                          fileName: Jr,
                          lineNumber: 120,
                          columnNumber: 9
                        }
                      },
                      Pr
                    )
                  )
                : null;
            }),
            t
          );
        })(s.Component);
      const ti = ei;
      var ni = h.Z.create(function (e) {
          return {
            actions: {
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginTop: e.spaces.space4,
              paddingTop: e.spaces.space4,
              paddingBottom: e.spaces.space1
            },
            button: {
              marginBottom: e.spaces.space4,
              marginTop: e.spaces.space1
            },
            icon: { marginStart: 'auto' },
            outerContainer: { cursor: 'pointer', maxWidth: 550, minWidth: 250 },
            innerContainer: { backgroundColor: e.colors.cellBackground },
            screenName: {
              backgroundColor: e.colors.gray50,
              flexDirection: 'row',
              marginBottom: e.spaces.space8,
              marginStart: '-' + e.spaces.space8,
              paddingTop: e.spaces.space12,
              width: '25%'
            },
            text: {
              paddingBottom: e.spaces.space2,
              paddingTop: e.spaces.space8
            },
            timestampAndPrivacyIcon: {
              alignItems: 'center',
              flexDirection: 'row'
            },
            userAndTwitterLogo: {
              alignItems: 'center',
              flexDirection: 'row',
              marginStart: '-' + e.spaces.space8
            },
            userName: {
              backgroundColor: e.colors.gray50,
              justifyContent: 'center',
              marginBottom: e.spaces.space8,
              marginTop: e.spaces.space8,
              paddingTop: e.spaces.space12,
              position: 'relative',
              width: '20%'
            }
          };
        }),
        ri = n(86862);
      const ii = Object.freeze({
        FAILED: 'failed',
        LOADED: 'loaded',
        LOADING: 'loading',
        NONE: 'none'
      });
      var oi =
          '/data/jenkins/workspace/source_5/syndication/embed-iframe/src/embeds/Tweet/Tweet.js',
        si = s.createContext();
      si.displayName = 'EmbedServerAPIContext';
      var ci = (function (e) {
        function t(t) {
          var n, i;
          return (
            (n = e.call(this, t) || this),
            (0, o.Z)((0, r.Z)(n), 'setPrivacyNoticeSeen', function (e) {
              n.setState({ isPrivacyNoticeSeen: e });
            }),
            (0, o.Z)((0, r.Z)(n), '_getNewsActionProps', function () {
              var e = n.state.tweet;
              if (e)
                return e.news_action_type === gn.covid19
                  ? {
                      newsActionLink: { pathname: e.covid19_hub_url },
                      newsActionType: gn.covid19
                    }
                  : {
                      newsActionLink: (0, L.t0)(e),
                      newsActionType: gn.conversation
                    };
            }),
            (0, o.Z)(
              (0, r.Z)(n),
              'handleSkeletonLayout',
              (0, u.Z)(function (e) {
                var t = e.nativeEvent.layout,
                  n = t.width,
                  r = t.height;
                Nn.ZP.send({
                  key: Nn.zW.RESIZE,
                  details: { width: n, height: r }
                });
              }, 100)
            ),
            (0, o.Z)(
              (0, r.Z)(n),
              'handleLayout',
              (0, u.Z)(
                ((i = !1),
                function (e) {
                  var t = e.nativeEvent;
                  if (n.state.tweetFetchStatus === ii.LOADED) {
                    var r = t.layout,
                      o = r.width,
                      s = r.height;
                    Nn.ZP.send({
                      key: Nn.zW.RESIZE,
                      details: { width: o, height: s }
                    }),
                      i ||
                        (Nn.ZP.send({ key: Nn.zW.RENDERED, details: {} }),
                        (i = !0));
                  }
                }),
                100
              )
            ),
            (0, o.Z)((0, r.Z)(n), 'loadTweet', function () {
              var e = n.props.id,
                t = b.Z.getLocale();
              return n
                .fetchTweet(e, t)
                .then(function (e) {
                  n.setState({ tweet: e, tweetFetchStatus: ii.LOADED }),
                    Nn.ZP.send({ key: Nn.zW.RESULTS, details: {} }),
                    n._scribeAction(c.eX.RESULTS),
                    (0, l.Y)(a),
                    (0, l.Tb)(a),
                    (0, l.Tx)(a);
                })
                .catch(function (e) {
                  n.setState({ tweetFetchStatus: ii.FAILED }),
                    Nn.ZP.send({ key: Nn.zW.NO_RESULTS, details: {} }),
                    n._scribeAction(c.eX.NO_RESULTS);
                });
            }),
            (0, o.Z)((0, r.Z)(n), 'fetchTweet', function (e, t) {
              var r = n.props.api,
                i = g.Z.getFeatures();
              return r.Tweet.fetch({ features: (0, d.Z)(i), id: e, lang: t });
            }),
            (0, o.Z)((0, r.Z)(n), '_scribeAction', function (e) {
              c.ZP.scribe(e, { section: c.bx.MAIN });
            }),
            (n.setPrivacyNoticeSeen = n.setPrivacyNoticeSeen.bind((0, r.Z)(n))),
            (n.state = {
              tweetFetchStatus: ii.LOADING,
              isPrivacyNoticeSeen: !1
            }),
            n
          );
        }
        (0, i.Z)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            this.props.id
              ? this.loadTweet()
              : this.setState({ tweetFetchStatus: ii.FAILED });
          }),
          (n.render = function () {
            var e = this.state,
              t = e.tweet;
            if (e.tweetFetchStatus === ii.LOADED && t) {
              if (t.id_str) return this._renderTweet();
              if ('TweetTombstone' === t.__typename)
                return s.createElement(v, {
                  onLayout: this.handleSkeletonLayout,
                  __self: this,
                  __source: { fileName: oi, lineNumber: 81, columnNumber: 16 }
                });
            }
            return this._renderFallback();
          }),
          (n._renderTweet = function () {
            var e = this.props,
              t = e.hideMedia,
              n = e.hideThread,
              r = e.id,
              i = e.pageData,
              o = e.wideScreenMediaMaxWidth,
              c = this.state.tweet,
              a = this._getNewsActionProps(),
              l = g.Z.getFeatureData('tfw_fosnr_soft_interventions_enabled');
            return c && a
              ? s.createElement(
                  _,
                  {
                    __self: this,
                    __source: { fileName: oi, lineNumber: 96, columnNumber: 7 }
                  },
                  s.createElement(
                    si.Provider,
                    {
                      value: this.props.api,
                      __self: this,
                      __source: {
                        fileName: oi,
                        lineNumber: 97,
                        columnNumber: 9
                      }
                    },
                    s.createElement(
                      tt.ZP.Provider,
                      {
                        value: {
                          mixedMediaEnabled: function () {
                            return !0;
                          },
                          blueVerifiedBadgeIsEnabled: function () {
                            return !0;
                          },
                          blueBusinessVerifiedBadgeEnabled: function () {
                            return !0;
                          },
                          blueGovernmentVerifiedBadgeEnabled: function () {
                            return !0;
                          },
                          blueBusinessAffiliateBadgeEnabled: function () {
                            return !0;
                          },
                          businessGovernmentVerifiedNewIconsEnabled:
                            function () {
                              return !0;
                            },
                          fosnrSoftInterventionsEnabled: function () {
                            return l && l.bucket && 'on' === l.bucket;
                          }
                        },
                        __self: this,
                        __source: {
                          fileName: oi,
                          lineNumber: 98,
                          columnNumber: 11
                        }
                      },
                      s.createElement(
                        zr,
                        {
                          id: r,
                          pageData: i,
                          __self: this,
                          __source: {
                            fileName: oi,
                            lineNumber: 116,
                            columnNumber: 13
                          }
                        },
                        s.createElement(Mr, {
                          hideMedia: t,
                          hideThread: n,
                          isPrivacyNoticeSeen: this.state.isPrivacyNoticeSeen,
                          likeActionLink: (0, L.ke)(c),
                          newsActionLink: a.newsActionLink,
                          newsActionType: a.newsActionType,
                          onLayout: this.handleLayout,
                          permalink: (0, L.t0)(c),
                          setPrivacyNoticeSeen: this.setPrivacyNoticeSeen,
                          tweet: c,
                          wideScreenMediaMaxWidth: o,
                          __self: this,
                          __source: {
                            fileName: oi,
                            lineNumber: 117,
                            columnNumber: 15
                          }
                        }),
                        s.createElement(ri.Z, {
                          zIndex: 1,
                          __self: this,
                          __source: {
                            fileName: oi,
                            lineNumber: 130,
                            columnNumber: 15
                          }
                        })
                      )
                    )
                  )
                )
              : this._renderFallback();
          }),
          (n._renderFallback = function () {
            return this._isSkeletonExperimentTreatmentEnabled()
              ? s.createElement(ti, {
                  bucket: this._getExperimentBucketValue(),
                  isPrivacyNoticeSeen: this.state.isPrivacyNoticeSeen,
                  onLayout: this.handleSkeletonLayout,
                  setPrivacyNoticeSeen: this.setPrivacyNoticeSeen,
                  __self: this,
                  __source: { fileName: oi, lineNumber: 142, columnNumber: 7 }
                })
              : null;
          }),
          (n._getExperimentBucketValue = function () {
            var e = g.Z.getFeatureData(c.bx.SKELETON_LOADER_EXPERIMENT);
            return e && e.bucket;
          }),
          (n._isSkeletonExperimentTreatmentEnabled = function () {
            return (
              'cta' === this._getExperimentBucketValue() ||
              'no_cta' === this._getExperimentBucketValue()
            );
          }),
          t
        );
      })(s.Component);
    },
    50277: (e, t, n) => {
      n.d(t, {
        $1: () => u,
        Bs: () => i,
        CX: () => _,
        Rk: () => s,
        S9: () => r,
        XS: () => c,
        ke: () => o,
        po: () => m,
        sp: () => l,
        t0: () => a
      });
      var r = 'https://twitter.com',
        i = 'https://twitter.com/explore',
        o = function (e) {
          return {
            pathname: r + '/intent/like',
            query: { tweet_id: e.id_str }
          };
        },
        s = function (e) {
          return {
            pathname: r + '/intent/tweet',
            query: { in_reply_to: e.id_str }
          };
        },
        c = function (e) {
          return {
            pathname: r + '/intent/follow',
            query: { screen_name: e.user.screen_name }
          };
        },
        a = function (e) {
          var t, n, i;
          if (
            e.isStaleEdit &&
            null != (t = e.edit_control) &&
            null != (n = t.edit_tweet_ids) &&
            n.length
          ) {
            var o = e.edit_control.edit_tweet_ids;
            i = o[o.length - 1];
          } else i = e.id_str;
          return { pathname: r + '/' + e.user.screen_name + '/status/' + i };
        },
        l = function (e) {
          var t = e.id,
            n = e.screenName;
          return { pathname: r + '/' + n + '/status/' + t };
        },
        u = function (e) {
          return { pathname: r + '/places/' + e.id };
        },
        m = function (e) {
          return { pathname: r + '/' + e };
        },
        _ = function (e) {
          return e.pathname;
        };
    },
    53070: (e, t, n) => {
      n.d(t, { Z: () => r });
      const r = function (e) {
        var t = Object.keys(e);
        return 0 === t.length
          ? null
          : t
              .map(function (t) {
                return t + ':' + e[t].bucket;
              })
              .join(';');
      };
    },
    25304: (e, t, n) => {
      n.d(t, {
        $E: () => x,
        $F: () => ne,
        $X: () => ve,
        $d: () => A,
        A6: () => U,
        BM: () => R,
        BY: () => me,
        CF: () => c,
        Ci: () => re,
        EF: () => W,
        EP: () => te,
        Ek: () => w,
        El: () => z,
        Fq: () => Pe,
        Fy: () => Fe,
        GC: () => p,
        GV: () => Oe,
        HM: () => ke,
        Hf: () => We,
        I3: () => D,
        IO: () => ae,
        JV: () => q,
        Jg: () => ue,
        LC: () => E,
        Lo: () => Re,
        Lp: () => Te,
        Md: () => ze,
        Mu: () => C,
        N5: () => g,
        NS: () => Q,
        N_: () => P,
        PQ: () => Xe,
        PS: () => ee,
        Pn: () => Me,
        QY: () => F,
        QZ: () => h,
        Rd: () => Y,
        Rg: () => Ke,
        S1: () => f,
        SG: () => De,
        UP: () => xe,
        V9: () => se,
        Vg: () => B,
        YV: () => a,
        Z$: () => $,
        Zg: () => X,
        Zy: () => Ue,
        _N: () => S,
        _u: () => ie,
        aP: () => d,
        bK: () => L,
        c8: () => le,
        cY: () => H,
        d$: () => l,
        e7: () => Ie,
        ei: () => Qe,
        ez: () => K,
        f7: () => b,
        fW: () => j,
        fv: () => I,
        g: () => he,
        g1: () => Ge,
        gF: () => je,
        hJ: () => k,
        iR: () => Ee,
        jh: () => V,
        jq: () => Ve,
        ju: () => fe,
        jv: () => He,
        k9: () => O,
        kc: () => be,
        lP: () => ge,
        mZ: () => y,
        nO: () => G,
        og: () => we,
        oj: () => de,
        or: () => Ae,
        pd: () => m,
        py: () => ce,
        pz: () => qe,
        q2: () => Le,
        qK: () => M,
        qO: () => v,
        r4: () => pe,
        ri: () => N,
        sL: () => u,
        sz: () => oe,
        tI: () => Ce,
        tS: () => Ne,
        uA: () => Be,
        uM: () => Z,
        vM: () => _,
        wA: () => Ze,
        x2: () => ye,
        xZ: () => _e,
        xj: () => J,
        yu: () => Se,
        zJ: () => T
      });
      var r = n(53100),
        i = n(91381),
        o = n(60798),
        s = function (e) {
          e.stopPropagation();
        },
        c = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.WHITESPACE
            });
        },
        a = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.LOGO
            });
        },
        l = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.REPLY_PROMPT
            });
        },
        u = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.MAIN,
            element: o.eK.SKELETON
          });
        },
        m = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.AUTHOR
            });
        },
        _ = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.MAIN,
            component: o.z8.BIRDWATCH_PIVOT
          });
        },
        d = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.MAIN,
              component: o.z8.BIRDWATCH_PIVOT
            });
        },
        b = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.BIRDWATCH_PIVOT
            });
        },
        f = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.LIKE_ACTION
            });
        },
        p = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.LOGO
            });
        },
        N = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.NEWS_ACTION
            });
        },
        E = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.PHOTO
            });
        },
        T = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.PLACE
            });
        },
        h = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.MAIN,
              component: o.z8.PRIVACY_NOTICE
            });
        },
        I = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.MAIN,
            component: o.z8.PRIVACY_NOTICE
          });
        },
        C = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.MAIN,
            component: o.z8.PUBLIC_INTEREST_NOTICE
          });
        },
        v = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.PUBLIC_INTEREST_NOTICE
            });
        },
        Z = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.REPLY_PROMPT
            });
        },
        y = function (e) {
          s(e);
        },
        w = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.MAIN,
            component: o.z8.SOFT_INTERVENTION_PIVOT
          });
        },
        g = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TIMESTAMP
            });
        },
        P = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_REPLY_CONTEXT
            });
        },
        x = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_TEXT_CASHTAG
            });
        },
        A = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_TEXT_HASHTAG
            });
        },
        R = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_TEXT_MEDIA
            });
        },
        k = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_TEXT_MENTION
            });
        },
        L = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_TEXT_URL
            });
        },
        S = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_TEXT_URL
            });
        },
        O = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.TWEET_TEXT_QUOTE
            });
        },
        M = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.VIDEO
            });
        },
        W = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.WHITESPACE
            });
        },
        z = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.MAIN,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        X = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        D = function (e) {
          s(e), (0, r.A)(o.bx.MAIN, o.eK.CTA_PAUSED_PLAYER, o.eX.CLICK_TWITTER);
        },
        V = function (e) {
          s(e), (0, r.A)(o.bx.MAIN, o.eK.CTA_LOGO, o.eX.CLICK_TWITTER);
        },
        j = function (e) {
          s(e), (0, r.A)(o.bx.MAIN, o.eK.CTA_REPLIES, o.eX.CLICK_TWITTER);
        },
        U = function (e, t) {
          s(e),
            o.ZP.scribe(
              o.eX.CLICK_TWITTER,
              {
                section: o.bx.MAIN,
                component: o.z8.VIDEO,
                element: o.eK.RELATED_VIDEOS
              },
              {
                item_details: {
                  relatedVideos: { cursor: t, item_type: i.v.CAROUSEL }
                }
              }
            );
        },
        Q = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.MAIN,
              component: o.z8.THREAD
            });
        },
        B = function (e) {
          o.ZP.scribe(
            o.eX.UNHANDLED_ERROR,
            { section: o.bx.MAIN, component: o.z8.ERROR },
            { message: e.toString() }
          );
        },
        K = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
              section: o.bx.MAIN,
              component: o.z8.SENSITIVE_MEDIA
            });
        },
        H = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.MAIN,
            component: o.z8.SENSITIVE_MEDIA
          });
        },
        F = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.AUTHOR
            });
        },
        G = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.LOGO
            });
        },
        q = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.PHOTO
            });
        },
        Y = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.PARENT,
            component: o.z8.PUBLIC_INTEREST_NOTICE
          });
        },
        $ = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.PUBLIC_INTEREST_NOTICE
            });
        },
        J = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_REPLY_CONTEXT
            });
        },
        ee = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_TEXT_CASHTAG
            });
        },
        te = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_TEXT_HASHTAG
            });
        },
        ne = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_TEXT_MEDIA
            });
        },
        re = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_TEXT_MENTION
            });
        },
        ie = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_TEXT_URL
            });
        },
        oe = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_TEXT_URL
            });
        },
        se = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.TWEET_TEXT_QUOTE
            });
        },
        ce = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.VIDEO
            });
        },
        ae = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.WHITESPACE
            });
        },
        le = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.PARENT,
              component: o.z8.BIRDWATCH_PIVOT
            });
        },
        ue = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.BIRDWATCH_PIVOT
            });
        },
        me = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.PARENT,
            component: o.z8.BIRDWATCH_PIVOT
          });
        },
        _e = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.PARENT,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        de = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        be = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.PARENT,
            component: o.z8.SOFT_INTERVENTION_PIVOT
          });
        },
        fe = function () {
          o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
            section: o.bx.MAIN,
            component: o.z8.SHARE_ACTION
          });
        },
        pe = function (e) {
          s(e),
            (0, r.A)(o.bx.PARENT, o.eK.CTA_PAUSED_PLAYER, o.eX.CLICK_TWITTER);
        },
        Ne = function (e) {
          s(e), (0, r.A)(o.bx.PARENT, o.eK.CTA_LOGO, o.eX.CLICK_TWITTER);
        },
        Ee = function (e) {
          s(e), (0, r.A)(o.bx.PARENT, o.eK.CTA_REPLIES, o.eX.CLICK_TWITTER);
        },
        Te = function (e, t) {
          s(e),
            o.ZP.scribe(
              o.eX.CLICK_TWITTER,
              {
                section: o.bx.PARENT,
                component: o.z8.VIDEO,
                element: o.eK.RELATED_VIDEOS
              },
              {
                item_details: {
                  relatedVideos: { cursor: t, item_type: i.v.CAROUSEL }
                }
              }
            );
        },
        he = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
              section: o.bx.PARENT,
              component: o.z8.SENSITIVE_MEDIA
            });
        },
        Ie = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.PARENT,
            component: o.z8.SENSITIVE_MEDIA
          });
        },
        Ce = function (e) {
          s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, { section: o.bx.PARENT_QUOTE });
        },
        ve = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT_QUOTE,
              component: o.z8.PHOTO
            });
        },
        Ze = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.PARENT_QUOTE,
            component: o.z8.PUBLIC_INTEREST_NOTICE
          });
        },
        ye = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT_QUOTE,
              component: o.z8.PUBLIC_INTEREST_NOTICE
            });
        },
        we = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT_QUOTE,
              component: o.z8.VIDEO
            });
        },
        ge = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.PARENT_QUOTE,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        Pe = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.PARENT_QUOTE,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        xe = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.PARENT_QUOTE,
            component: o.z8.SOFT_INTERVENTION_PIVOT
          });
        },
        Ae = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
              section: o.bx.PARENT_QUOTE,
              component: o.z8.SENSITIVE_MEDIA
            });
        },
        Re = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.PARENT_QUOTE,
            component: o.z8.SENSITIVE_MEDIA
          });
        },
        ke = function (e) {
          s(e), o.ZP.scribe(o.eX.CLICK_TWITTER, { section: o.bx.QUOTE });
        },
        Le = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.QUOTE,
              component: o.z8.PHOTO
            });
        },
        Se = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.QUOTE,
            component: o.z8.PUBLIC_INTEREST_NOTICE
          });
        },
        Oe = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.QUOTE,
              component: o.z8.PUBLIC_INTEREST_NOTICE
            });
        },
        Me = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.QUOTE,
              component: o.z8.VIDEO
            });
        },
        We = function () {
          o.ZP.scribe(o.eX.CLICK_TWITTER, {
            section: o.bx.MAIN,
            component: o.z8.CARD
          });
        },
        ze = function () {
          o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
            section: o.bx.MAIN,
            component: o.z8.CARD
          });
        },
        Xe = function () {
          o.ZP.scribe(o.eX.CLICK_TWITTER, {
            section: o.bx.PARENT,
            component: o.z8.CARD
          });
        },
        De = function () {
          o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
            section: o.bx.PARENT,
            component: o.z8.CARD
          });
        },
        Ve = function (e, t) {
          o.ZP.scribe(o.eX.EXPERIMENT, { section: e, page: o.iY.DDG }, t);
        },
        je = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.QUOTE,
              component: o.z8.BIRDWATCH_PIVOT
            });
        },
        Ue = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.QUOTE,
              component: o.z8.BIRDWATCH_PIVOT
            });
        },
        Qe = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.QUOTE,
            component: o.z8.BIRDWATCH_PIVOT
          });
        },
        Be = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_EXTERNAL, {
              section: o.bx.QUOTE,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        Ke = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_TWITTER, {
              section: o.bx.QUOTE,
              component: o.z8.SOFT_INTERVENTION_PIVOT
            });
        },
        He = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.QUOTE,
            component: o.z8.SOFT_INTERVENTION_PIVOT
          });
        },
        Fe = function (e) {
          s(e),
            o.ZP.scribe(o.eX.CLICK_INTERACTIVE, {
              section: o.bx.QUOTE,
              component: o.z8.SENSITIVE_MEDIA
            });
        },
        Ge = function () {
          o.ZP.scribe(o.eX.SEEN, {
            section: o.bx.QUOTE,
            component: o.z8.SENSITIVE_MEDIA
          });
        },
        qe = function (e) {
          switch (e) {
            case o.bx.PARENT_QUOTE:
              return ve;
            case o.bx.PARENT:
              return q;
            case o.bx.QUOTE:
              return Le;
            default:
              return E;
          }
        };
    },
    53100: (e, t, n) => {
      n.d(t, { A: () => i, v: () => o });
      var r = n(60798),
        i = function (e, t, n) {
          r.ZP.scribe(n, { section: e, component: r.z8.VIDEO, element: t });
        },
        o = function (e) {
          r.ZP.scribe(r.eX.CLICK_INTERACTIVE, {
            section: e,
            component: r.z8.VIDEO
          });
        };
    }
  }
]);
