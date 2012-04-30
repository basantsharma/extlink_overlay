// $Id: extlink_overlay.js,v 1 2012/04/28 01:25:56
(function ($) {
  Drupal.behaviors.extlink_overlay = {
    attach: function (context, settings) {
      if ($('#edit-extlink-overlay-popup:checkbox').is(':checked'))
          $('#edit-extlink-alert:checkbox').removeAttr('checked').attr('disabled','disabled');
      if (Drupal.settings.extlink_overlay.extOverlayPopUp) {
        $('.'+ Drupal.settings.extlink.extClass).live('click',function(event) {
          event.preventDefault();
          var $structure = '<div class="overlayOuter"><div class="overlayInner"/><iframe src=' + $(this).attr("href") + ' id="frame-content"    width="80%" height = "100%"/><div id="frame-close"/></div>';
          $('body').append($structure);
          $(".overlayOuter").fadeIn(300);
          $('iframe#frame-content').load(function() {
            $(".overlayInner").css({'background-image':'none'});
            $('iframe#frame-content').slideDown(300);
          });
        });
      }
      $('#frame-close').live('click',function(event) {
        $('iframe#frame-content').slideUp(300);
        $(".overlayOuter").fadeOut(300).remove();
      });
      $('#edit-extlink-overlay-popup:checkbox').click(function () {
        if ($(this).is(':checked'))
          $('#edit-extlink-alert:checkbox').removeAttr('checked').attr('disabled','disabled');
        else
          $('#edit-extlink-alert:checkbox').removeAttr('disabled');
      });
    }
  }
})(jQuery);
