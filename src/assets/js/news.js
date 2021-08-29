"use strict";
/*! news.js | Friendkit | © Css Ninja. 2019-2020 */
$(document).ready((function () {
    $("#news-layout").length && ($(".stories .story").on("click", (function () {
        var s = $(this).attr("data-story");
        $(this).siblings(".story").removeClass("is-active"), $(this).addClass("is-active"), $(".news-hero-wrapper").addClass("is-hidden"), $("#" + s).removeClass("is-hidden")
    })), $(".news-card .action.is-like").on("click", (function () {
        $(this).hasClass("is-active") ? ($(this).removeClass("is-active"), $(this).find("svg").removeClass("gelatine")) : ($(this).addClass("is-active"), $(this).find("svg").addClass("gelatine"))
    })))
}));
