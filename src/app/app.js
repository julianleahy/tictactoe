import 'styles/normalize.css';
import 'styles/main.scss';

$(function() {

    let  board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    $('.square').click( function() {

        var cell = $(this).attr('id');
        var row = parseInt(cell[1]);
        var col = parseInt(cell[2]);

        board[row][col] = false;
        outputTile();
  
    });

    const outputTile = () => {

        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                switch (board[i][j]) {
                  case false :
                    $(`#x${i}${j}`).addClass('cross')
                       
                }
            }
        }

    }
    
});

