"use strict";
/*! elements.js | Friendkit | © Css Ninja. 2019-2020 */
$(document).ready((function () {
    if ($("#elements-page").length) {
        var t = function (t) {
            if (0 == (t = "string" == typeof t ? t : $(this).attr("href")).indexOf("#")) {
                var n = $(t);
                if (n.length && ($("html, body").animate({
                    scrollTop: n.offset().top - 50 - 20
                }), history && "pushState" in history)) return history.pushState({}, document.title, window.location.pathname + t), !1
            }
        },
            n = function () {
                $("#albums-help-modal .next-modal").one("click", (function () {
                    $(this).closest(".card-body").find(".content-block, .dot").toggleClass("is-active"), $(this).text("got it").off(), e()
                }))
            },
            e = function () {
                $("#albums-help-modal .next-modal").on("click", (function () {
                    var t = $(this),
                        e = t.attr("data-modal");
                    t.closest(".modal").removeClass("is-active"), $("#" + e).addClass("is-active"), setTimeout((function () {
                        t.closest(".card-body").find(".content-block, .dot").toggleClass("is-active"), t.text("Next").off(), n()
                    }), 800)
                }))
            },
            o = function () {
                $("#videos-help-modal .next-modal").one("click", (function () {
                    $(this).closest(".card-body").find(".content-block, .dot").toggleClass("is-active"), $(this).text("got it").off(), i()
                }))
            },
            i = function () {
                $("#videos-help-modal .next-modal").on("click", (function () {
                    var t = $(this),
                        n = $(this).attr("data-modal");
                    t.closest(".modal").removeClass("is-active"), $("#" + n).addClass("is-active"), setTimeout((function () {
                        t.closest(".card-body").find(".content-block, .dot").toggleClass("is-active"), t.text("Next").off(), o()
                    }), 800)
                }))
            };
        t(window.location.hash), $("body").on("click", ".submenu-wrap a", t), $(".element-menu .menu-trigger").on("click", (function () {
            $(this).closest(".element-menu").siblings(".element-menu").find(".menu-trigger").removeClass("is-active"), $(this).closest(".element-menu").siblings(".element-menu").find(".submenu-wrap").slideUp(), $(this).toggleClass("is-active"), $(this).siblings(".submenu-wrap").slideToggle("fast")
        })), $(".submenu-wrap li a").on("click", (function () {
            $(".submenu-wrap li a").removeClass("is-active"), $(this).addClass("is-active")
        })), n(), o(), $(".lightbox-trigger, .close-lightbox").on("click", (function () {
            $(".custom-profile-lightbox").toggleClass("is-active"), setTimeout((function () {
                $(".image-loader, .comments-loader").toggleClass("is-active")
            }), 1200)
        })), $((function () {
            $('[data-fancybox="cl-group-demo"]').fancybox({
                baseClass: "fancybox-custom-layout",
                infobar: !1,
                touch: {
                    vertical: !1
                },
                buttons: ["close", "thumbs", "share"],
                animationEffect: "fade",
                transitionEffect: "fade",
                preventCaptionOverlap: !1,
                idleTime: !1,
                gutter: 0,
                caption: function (t) {
                    return '<div style="padding: 20px;"><h3>home</h3><p>interiors, exteriors, and the humans that inhabit them.</p><p><a href="https://unsplash.com/collections/curated/162" target="_blank">unsplash.com</a></p></div>'
                }
            }), $(".quick_view").fancybox({
                baseClass: "quick-view-container",
                infobar: !1,
                buttons: !1,
                thumbs: !1,
                margin: 0,
                touch: {
                    vertical: !1
                },
                animationEffect: !1,
                transitionEffect: "slide",
                transitionDuration: 500,
                baseTpl: '<div class="fancybox-container" role="dialog"><div class="quick-view-content"><div class="quick-view-carousel"><div class="fancybox-stage"></div></div><div class="quick-view-aside"></div><button data-fancybox-close class="quick-view-close">X</button></div></div>',
                onInit: function (t) {
                    for (var n = '<ul class="quick-view-bullets">', e = 0; e < t.group.length; e++) n += '<li><a data-index="' + e + '" href="javascript:;"><span>' + (e + 1) + "</span></a></li>";
                    n += "</ul>", $(n).on("click touchstart", "a", (function () {
                        var t = $(this).data("index");
                        $.fancybox.getInstance((function () {
                            this.jumpTo(t)
                        }))
                    })).appendTo(t.$refs.container.find(".quick-view-carousel"));
                    var o = t.group[t.currIndex].opts.$orig.data("qw-form");
                    t.$refs.container.find(".quick-view-aside").append($("#" + o).clone(!0).removeClass("is-hidden"))
                },
                beforeShow: function (t) {
                    t.$refs.container.find(".quick-view-bullets").children().removeClass("active").eq(t.currIndex).addClass("active")
                }
            }), $.fancyConfirm = function (t) {
                t = $.extend(!0, {
                    title: "Are you sure?",
                    message: "",
                    okButton: "OK",
                    noButton: "Cancel",
                    callback: $.noop
                }, t || {}), $.fancybox.open({
                    type: "html",
                    src: '<div class="fancybox-confirm fc-content p-5 rounded"><h2 class="title mb-10">' + t.title + "</h2><p>" + t.message + '</p><p class="text-right buttons mt-10"><a data-value="0" data-fancybox-close href="javascript:;" class="button">' + t.noButton + '</a><button data-value="1" data-fancybox-close class="button is-solid primary-button raised">' + t.okButton + "</button></p></div>",
                    opts: {
                        animationDuration: 350,
                        animationEffect: "material",
                        modal: !0,
                        baseTpl: '<div class="fancybox-container fc-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-stage"></div></div></div>',
                        afterClose: function (n, e, o) {
                            var i = o ? o.target || o.currentTarget : null,
                                a = i ? $(i).data("value") : 0;
                            t.callback(a)
                        }
                    }
                })
            }, $("#test_confirm").click((function () {
                $.fancyConfirm({
                    title: "Are you sure you want to delete this post?",
                    message: "You are about to delete a post permanently. Post content and attachements will be lost without being ablt to be recovered",
                    okButton: "Delete",
                    noButton: "Cancel",
                    callback: function (t) {
                        t ? alert("This is a demo callback. Delete was clicked") : alert("This is a demo callback. Cancel was clicked")
                    }
                })
            })), $.fn.fancyMorph = function (t) {
                var n = function (t, n) {
                    var e = this;
                    e.opts = $.extend({
                        animationEffect: !1,
                        infobar: !1,
                        buttons: ["close"],
                        smallBtn: !1,
                        touch: !1,
                        baseClass: "fancybox-morphing",
                        afterClose: function () {
                            e.close()
                        }
                    }, n), e.init(t)
                };
                return n.prototype.init = function (t) {
                    var n = this;
                    n.$btn = t.addClass("morphing-btn"), n.$clone = $('<div class="morphing-btn-clone" />').hide().insertAfter(t), t.wrap('<span class="morphing-btn-wrap"></span>').on("click", (function (t) {
                        t.preventDefault(), n.start()
                    }))
                }, n.prototype.start = function () {
                    var t = this;
                    t.$btn.hasClass("morphing-btn_circle") || (t.$btn.width(t.$btn.width()).parent().width(t.$btn.outerWidth()), t.$btn.off(".fm").on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", (function (n) {
                        "width" === n.originalEvent.propertyName && (t.$btn.off(".fm"), t.animateBg())
                    })).addClass("morphing-btn_circle"))
                }, n.prototype.animateBg = function () {
                    var t = this;
                    t.scaleBg(), t.$clone.show(), t.$clone[0].offsetHeight, t.$clone.off(".fm").on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", (function (n) {
                        t.$clone.off(".fm"), t.complete()
                    })).addClass("morphing-btn-clone_visible")
                }, n.prototype.scaleBg = function () {
                    var t = this.$clone,
                        n = this.getScale(),
                        e = this.$btn,
                        o = e.offset();
                    t.css({
                        top: o.top + .5 * e.outerHeight() - e.outerHeight() * n * .5 - $(window).scrollTop(),
                        left: o.left + .5 * e.outerWidth() - e.outerWidth() * n * .5 - $(window).scrollLeft(),
                        width: e.outerWidth() * n,
                        height: e.outerHeight() * n,
                        transform: "scale(" + 1 / n + ")"
                    })
                }, n.prototype.getScale = function () {
                    var t = this.$btn,
                        n = .5 * t.outerWidth(),
                        e = t.offset().left + n - $(window).scrollLeft(),
                        o = t.offset().top + n - $(window).scrollTop(),
                        i = $(window).width(),
                        a = $(window).height(),
                        s = e > i / 2 ? e : i - e,
                        c = o > a / 2 ? o : a - o;
                    return Math.ceil(Math.sqrt(Math.pow(s, 2) + Math.pow(c, 2)) / n)
                }, n.prototype.complete = function () {
                    var t = this.$btn;
                    $.fancybox.open({
                        src: t.data("src") || t.attr("href")
                    }, this.opts)
                }, n.prototype.close = function () {
                    var t = this,
                        n = t.$clone;
                    t.scaleBg(), n.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", (function (e) {
                        n.hide(), t.$btn.removeClass("morphing-btn_circle")
                    })), n.removeClass("morphing-btn-clone_visible"), $(window).off("resize.fm")
                }, this.each((function () {
                    var e = $(this);
                    e.data("morphing") || e.data("morphing", new n(e, t))
                })), this
            }, $("[data-morphing]").fancyMorph({
                hash: "morphing"
            })
        }))
    }
}));
