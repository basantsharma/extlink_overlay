// $Id: extlink_overlay.js,v 1 2012/04/28 01:25:56
(function ($) {
  Drupal.behaviors.extlink_overlay = {
    attach: function (context, settings) {
      $('.ext').live('click',function(event) {
        event.preventDefault();
        var $this = $(this);
        var $url = $this.attr("href");
        var $structure = '<div class="overlayOuter"><div class="overlayInner"/><iframe src='+$url+' id="frame-content"        width="80%" height = "100%"/><div id="frame-close"/></div>';
        $('body').append($structure);
        $(".overlayOuter").fadeIn(300);
        $('iframe#frame-content').load(function() {
          $(".overlayInner").css({'background-image':'none'});
          $('iframe#frame-content').slideDown(300);
        });
      });
      $('#frame-close').live('click',function(event) {
        $('iframe#frame-content').slideUp(300);
        $(".overlayOuter").fadeOut(300).remove();
      });
    }
  }
})(jQuery);