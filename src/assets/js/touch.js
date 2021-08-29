"use strict";

function _typeof3(e) {
    return (_typeof3 = "function" == typeof Symbol && "symbol" === _typeof3(Symbol.iterator) ? function (e) {
        return void 0 === e ? "undefined" : _typeof3(e)
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof3(e)
    })(e)
}
/*! touch.js | Friendkit | 2019-2020 */
$(document).ready((function () {
    var e, t;

    function i() {
        var e = document.querySelector(".videos-wrapper");
        (t = new Hammer(e)).on("swipeleft", (function () {
            console.log("Swipe left detected."), $(".videos-wrapper").find(".videos-sidebar").removeClass("is-active")
        })), t.on("swiperight", (function () {
            console.log("Swipe right detected."), $(".videos-wrapper").find(".videos-sidebar").addClass("is-active"), $(".videos-wrapper").find(".related-side").removeClass("is-opened")
        }))
    }
    e = function (e, t) {
        var i;
        e.fn.hammer = function (i) {
            return this.each((function () {
                ! function (i, o) {
                    var n = e(i);
                    n.data("hammer") || n.data("hammer", new t(n[0], o))
                }(this, i)
            }))
        }, t.Manager.prototype.emit = (i = t.Manager.prototype.emit, function (t, o) {
            i.call(this, t, o), e(this.element).trigger({
                type: t,
                gesture: o
            })
        })
    }, "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof3(exports)) ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer), $(".videos-sidebar").length && (window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(max-width: 768px)").matches && window.matchMedia("(orientation: portrait)").matches ? i() : void 0 !== t && t.destroy(), $(window).on("resize", (function () {
        window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(max-width: 768px)").matches && window.matchMedia("(orientation: portrait)").matches ? i() : void 0 !== t && t.destroy()
    })))
}));
