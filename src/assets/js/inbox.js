"use strict";
/*! inbox.js | Friendkit | © Css Ninja. 2019-2020 */
$(document).ready((function () {
    if ($(".inbox-wrapper").length) {
        $(".left-menu a").on("click", (function () {
            $(".left-menu a.is-active").removeClass("is-active"), $(this).addClass("is-active")
        })), $(".msg-subject svg").on("click", (function () {
            $(this).toggleClass("is-active")
        })), $(".is-msg").on("click", (function () {
            $(".is-msg.is-active").removeClass("is-active"), $(this).addClass("is-active")
        }));
        var e = document.querySelectorAll(".reply-textarea");
        Array.from(e).map((function (e) {
            return new Quill(e, {
                modules: {
                    toolbar: [
                        [{
                            header: [1, 2, !1]
                        }],
                        ["bold", "italic", "underline"],
                        ["image", "code-block"]
                    ]
                },
                placeholder: "Write your reply...",
                theme: "bubble"
            })
        }));
        $(".is-msg").on("click", (function () {
            var e = $(this).attr("data-preview-id");
            $(".message-body-inner.is-active").removeClass("is-active"), $("#message-preview-" + e).addClass("is-active"), $(".message-body").animate({
                scrollTop: 0
            }, "fast"), $(".inbox-message-container").addClass("is-opened-mobile")
        })), $("#close-inbox-preview").on("click", (function () {
            $(".inbox-message-container").removeClass("is-opened-mobile")
        })), $("#open-compose, #close-compose").on("click", (function () {
            $(".inbox-left-sidebar").toggleClass("is-opened-mobile")
        }))
    }
}));
