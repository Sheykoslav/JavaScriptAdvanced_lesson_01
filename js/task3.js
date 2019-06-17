const Game = (function() {
  const squares =[1,2,3,4,5,6,7,8,9];
  let turn = 0;

  function main() {
    acting();
    reload();
  }

  function acting(){
    $('#player1').addClass('spongebob');
    $('#player1').append(`<p>My turn</P>`);
    for (var i = 0; i < 9; i++) {
      $(`#${squares[i]}`).click(function(){
        if($(this).hasClass('')){
          if(turn%2 == 0){
            $(this).addClass('krestik');
            $('#player1').removeClass('spongebob');
            $('#player1').empty();
            $('#player2').addClass('patrik');
            $('#player2').append(`<p>My turn</P>`);
          }
          else {
            $(this).addClass('nolik');
            $('#player2').removeClass('patrik');
            $('#player2').empty();
            $('#player1').addClass('spongebob');
            $('#player1').append(`<p>My turn</P>`);
          }
          turn++;
            checkWinner();
        }
        else{alert('wrong square, Start new game');
        location.reload();
        }
      })
    }
  }

  function checkWinner(){
    if(($('#1').hasClass('krestik') && $('#2').hasClass('krestik') && $('#3').hasClass('krestik')) ||
        ($('#4').hasClass('krestik') && $('#5').hasClass('krestik') && $('#6').hasClass('krestik')) ||
        ($('#7').hasClass('krestik') && $('#8').hasClass('krestik') && $('#9').hasClass('krestik')) ||
        ($('#1').hasClass('krestik') && $('#4').hasClass('krestik') && $('#7').hasClass('krestik')) ||
        ($('#2').hasClass('krestik') && $('#5').hasClass('krestik') && $('#8').hasClass('krestik')) ||
        ($('#3').hasClass('krestik') && $('#6').hasClass('krestik') && $('#9').hasClass('krestik')) ||
        ($('#1').hasClass('krestik') && $('#5').hasClass('krestik') && $('#9').hasClass('krestik')) ||
        ($('#3').hasClass('krestik') && $('#5').hasClass('krestik') && $('#7').hasClass('krestik'))){
      $('#player1').removeClass('spongebob');
      $('#player1').addClass('s-winner');
      $('#player2').removeClass('patrik');
      $('#player2').empty();
      setTimeout(function() {
        alert('Player krestik won the game!');
      },200)
    }
    if(($('#1').hasClass('nolik') && $('#2').hasClass('nolik') && $('#3').hasClass('nolik')) ||
        ($('#4').hasClass('nolik') && $('#5').hasClass('nolik') && $('#6').hasClass('nolik')) ||
        ($('#7').hasClass('nolik') && $('#8').hasClass('nolik') && $('#9').hasClass('nolik')) ||
        ($('#1').hasClass('nolik') && $('#4').hasClass('nolik') && $('#7').hasClass('nolik')) ||
        ($('#2').hasClass('nolik') && $('#5').hasClass('nolik') && $('#8').hasClass('nolik')) ||
        ($('#3').hasClass('nolik') && $('#6').hasClass('nolik') && $('#9').hasClass('nolik')) ||
        ($('#1').hasClass('nolik') && $('#5').hasClass('nolik') && $('#9').hasClass('nolik')) ||
        ($('#3').hasClass('nolik') && $('#5').hasClass('nolik') && $('#7').hasClass('nolik'))){
      $('#player2').removeClass('patrik');
      $('#player2').addClass('p-winner');
      $('#player1').removeClass('spongebob');
      $('#player1').empty();
      setTimeout(function () {
        alert('Player nolik won the game!');
      },200)
    }
  }

  function reload() {
    $('#new_game').click(function () {
      location.reload();
    })
  }

  return{
    main:main
  }

})();
Game.main();
