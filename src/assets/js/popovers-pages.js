/*! popovers-pages.js | Friendkit | © Css Ninja. 2019-2020 */
"use strict";

function getPagesPopovers() {
    $("*[data-page-popover]").each((function () {
        var a = $(this),
            e = $(this).attr("data-page-popover"),
            n = feather.icons.mail.toSvg(),
            o = feather.icons["more-horizontal"].toSvg(),
            s = (feather.icons["map-pin"].toSvg(), feather.icons.users.toSvg()),
            i = feather.icons.tag.toSvg(),
            t = feather.icons.bookmark.toSvg();
        $.ajax({
            url: "assets/data/api/pages/pages.json",
            async: !0,
            dataType: "json",
            success: function (r) {
                a.webuiPopover({
                    trigger: "hover",
                    placement: "auto",
                    width: 300,
                    padding: !1,
                    offsetLeft: 0,
                    offsetTop: 20,
                    animation: "pop",
                    cache: !1,
                    content: function () {
                        setTimeout((function () {
                            $(".loader-overlay").removeClass("is-active")
                        }), 1e3);
                        return '\n                            <div class="profile-popover-block">\n\n                                <div class="loader-overlay is-active">\n                                    <div class="loader is-loading"></div>\n                                </div>\n\n                                <div class="profile-popover-wrapper">\n                                    <div class="popover-cover">\n                                        <img src="' + r[e].cover_image + '">\n                                        <div class="popover-avatar">\n                                            <img class="avatar" src="' + r[e].profile_picture + '">\n                                        </div>\n                                    </div>\n                                    <div class="popover-meta">\n                                        <span class="page-meta">\n                                            <span class="pagename">' + r[e].name + '</span>\n                                        </span>\n                                        <div class="page-activity">\n                                            ' + i + '\n                                            <div class="text">\n                                                ' + r[e].activity + '\n                                            </div>\n                                        </div>\n                                        <div class="page-followers">\n                                            ' + s + '\n                                            <div class="text">\n                                                <a href="#">' + r[e].followers + '</a> Followers\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="popover-actions">\n                                    <a href="#" class="popover-icon">\n                                        ' + o + '\n                                    </a>\n                                    <a href="#" class="popover-icon">\n                                        ' + t + '\n                                    </a>\n                                    <a href="#" class="popover-icon">\n                                        ' + n + "\n                                    </a>\n                                </div>\n                            </div>\n                        "
                    }
                })
            }
        })
    }))
}
$(document).ready((function () {
    getPagesPopovers()
}));
