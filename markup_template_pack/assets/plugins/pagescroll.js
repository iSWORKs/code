/*  --pagescroll.js --
    
    smooth scroll

*/

(function () {

    var speed = 400;
    var easing = "swing";
    var headerHeight = 0;

    // for after Page transition
    $(document).ready(function(){
        var url = $(location).attr('href');
        if (url.indexOf("?id=") == -1) {
            // !Another processing(if any)
        }else{
            // smooth scrolling
            var url_sp = url.split("?id=");
            var hash   = '#' + url_sp[url_sp.length - 1];
            var tgt    = $(hash);
            var pos    = tgt.offset().top;
            $("html, body").animate({scrollTop:pos}, speed, easing);
        }
    });

    $(window).load(function () {

        // PageTop
        $('a[href^=#], area[href^=#]').not('a[href=#], area[href=#]').each(function () {
            // jquery.easing
            jQuery.easing.quart = function (x, t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            };
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
                var $targetId = $(this.hash),
                $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
                var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
                if ($target) {
                    var targetOffset = $target.offset().top - headerHeight;
                    $(this).click(function () {
                        $('html, body').animate({
                            scrollTop: targetOffset
                        }, speed, easing);
                        return false;
                    });
                }
            }
        });
        if (location.hash) {
            var hash = location.hash;
            window.scroll(0, headerHeight)
            $('a[href=' + hash + ']').click();
        }
    });


}());