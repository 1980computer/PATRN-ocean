(function() {
    $(document).ready(function() {
        let navbarOpen = false;
        $(".fancybox").fancybox({
            padding :   40,
            margin  :   0,
            closeEffect : 'none',
            nextEffect  :   'none',
            prevEffect  :   'none',
            autoCenter  :   false,
            afterLoad   :   function () {
                $.extend(this, {
                    aspectRatio : false,
                    type    : 'html',
                    width   : '100%',
                    height  : '100%',
                    content : '<div class="fancybox-image"><img src="' + this.href + '"></div>'
                });
            },
            tpl : {
                closeBtn : '<div class="fancybox-control-bar"><button class="open-image" onclick="openImage()"><img src="./assets/images/export.svg"></button><a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a></div>'
            }
        });
        $(".nav-bar_dropdown").hide();

        $(".nav-bar_dropdown-toggle").click(function() {
            $(this).toggleClass("collapsed");
            navbarOpen = !navbarOpen;
            navbarOpen ? $(".nav-bar_dropdown").slideDown() : $(".nav-bar_dropdown").slideUp();
        });
    });
})();

function openImage() {
    window.open($(".fancybox-image img").attr("src"));
}