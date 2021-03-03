$(function () {
  (function quantityProducts() {
    let $quantityArrowMinus = $('.caret-down_child');
    let $quantityArrowPlus = $('.caret-up_child');
    let $quantityNum = $('.input-child');

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 0) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});

$(function () {
  (function quantityProducts() {
    let $quantityArrowMinus = $('.caret-down_adult');
    let $quantityArrowPlus = $('.caret-up_adult');
    let $quantityNum = $('.input-adults ');

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});

$(function () {
  (function quantityProducts() {
    let $quantityArrowMinus = $('.caret-down_room');
    let $quantityArrowPlus = $('.caret-up_room');
    let $quantityNum = $('.input-room ');

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});
