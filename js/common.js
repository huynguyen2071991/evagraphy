var SP_FIXED = false;
var SP_WIDTH = 769;
var SPEED = 500;

var UA = navigator.userAgent.toLowerCase();
// iPhone
var isiPhone = (UA.indexOf('iphone') > -1);
// Android
var isAndroid = (UA.indexOf('android') > -1) && (UA.indexOf('mobile') > -1);

function scrollPosition(position) {
  if ($(window).width() < SP_WIDTH) {
    position -= SP_FIXED ? $('header').height() : 0;
  }
  $('html, body').animate({
    scrollTop: position
  }, SPEED);
}

//（<a href="#top">の様に記述すると滑らかにスクロールする。）
$(function () {
  $('a[href^="#"]').click(function () {
    var position = $(this.hash).length > 0 ? $(this.hash).offset().top : 0;
    scrollPosition(position);
    return false;
  });
});

//Select Box
$(function () {
  if ($('.nice-select').length >= 1) {
    $('.nice-select').niceSelect();
  }
});

//モーダル起動
$(function () {
  $('a[data-modal]').click(function (event) {
    $(this).modal();
    return false;
  });
  return false;
});

$(function () {
  var body = $(document.body);
  $(function() {
    $(".dropdown-wrapper").on("click", function(e) {
      body.toggleClass("dropdown-show");
      e.stopPropagation()
    });
    $(document).on("click", function(e) {
      if ($(e.target).is(".dropdown-wrapper") === false) {
        body.removeClass("dropdown-show");
      }
    });
  });
});

$(function () {
  $('.h-left').on('click', function (e) {
    var body = $(document.body);
    body.toggleClass('menu-open');
  });
  $('.dropdown-wrapper').on('click', function (e) {
    if ($(window).width() < 769) {
      $('.dropdown-menu').modal({
        showClose: false
      });
    }
  });
  if ($('.ofi').length >= 1) {
    objectFitImages('.ofi img')
  }
});

//アップロードボタン
$('.upload-box').each(function () {
  function imagepreview(input) {
    if (input.files && input.files[0]) {
      var filerd = new FileReader();
      filerd.onload = function (e) {
        $('.uploaded-img [data-preview-id="' + 'imgpreview' + $(input).attr('data-upload-id').slice(-1) + '"]').attr('src', e.target.result);
      };
      filerd.readAsDataURL(input.files[0]);
    }
  }
  $(this).find('input[type="file"]').on('change', function () {
    imagepreview(this);
    console.log('aaa');
  });
});