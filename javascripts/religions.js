if (!Religions) {
    var Religions = {};
}

(function ($) {
    
    Religions.mobileSelectNav = function () {
        // Create the dropdown base
        $("<select class=\"mobile\" />").appendTo("#primary-nav");
        
        // Create default option "Go to..."
        $("<option />", {
           "selected": "selected",
           "value"   : "",
           "text"    : "Go to..."
        }).appendTo("#primary-nav select");
        
        // Populate dropdown with menu items
        $("#primary-nav a").each(function() {
            var el = $(this);
            if (el.parents('ul ul').length) {
                var parentCount = el.parents("ul").length;
                var dashes = new Array(parentCount).join('- ');
                $("<option />", {
                    "value": el.attr("href"),
                    "text":  dashes + el.text()
                }).appendTo("#primary-nav select");
            } else {
                $("<option />", {
                    "value": el.attr("href"),
                    "text": el.text()
                }).appendTo("#primary-nav select");
            }
            $("#primary-nav select").change(function() {
              window.location = $(this).find("option:selected").val();
            });
        });
    }

    Religions.exhibitPages = function () {
        var $exhibitpages   = $("#exhibit-pages"),
            $window = $(window),
            offset  = $exhibitpages.offset(),
            topPadding = 20,
            $contentDiv = $("#content");
        if (document.getElementById("exhibit-pages")) {
            $window.scroll(function () {
                if($window.scrollTop() > offset.top && $window.width() > 767 && ($window.height() - topPadding - 85) >  $exhibitpages.height()) {
                    $exhibitpages.stop().animate({
                        marginTop: $window.scrollTop() - offset.top + topPadding
                        });
                } else {
                    $exhibitpages.stop().animate({
                        marginTop: 0
                    });
                }
            });
        }
    };

    Religions.lightbox = function () {
        $('#exhibit-blocks img').each(function() {
            var baseUrl = $(this).attr('src');
            var directory = /files\/(\w*)/;
            var fullsizeUrl = baseUrl.replace(directory, "files/fullsize");

            $(this).colorbox({
                href: fullsizeUrl,
                height: "100%",
                rel: 'gal'
            });
        });
    }


})(jQuery);