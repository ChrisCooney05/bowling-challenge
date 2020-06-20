'use strict';

$(document).ready(function() {
  const bowling = new Bowling();

  $('.pins').click(function() {
    let num = $(this).val();
    let frame = bowling.currentFrame();
    let score = parseInt(num);
    leftOrRightScore(score, frame)
    updateTotal()
  });

  function leftOrRightScore(score, frame) {
    let turn = bowling.currentTurn();
    if (turn === 0) {
      bowling.bowl(score);
      $(`#${frame} .left`).text(score);
    } else if (turn === 1) {
      bowling.bowl(score);
      $(`#${frame} .right`).text(score);
    } else {
      bowling.bowl(score);
      $(`#${frame} .right-bonus`).text(score);
    }
  }

  function updateTotal() {
    $('.total').text(bowling.currentScore());
  }

});
