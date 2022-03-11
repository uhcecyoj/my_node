$(function () {
    $.fn.extend({
        getHtml: function() {
            return $(this).html();
        }
    });
});

$.extend(
    {
        getPath: function () {
            return window.location.pathname;
        }
    }
);