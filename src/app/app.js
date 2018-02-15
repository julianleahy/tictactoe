import 'styles/normalize.css';
import 'styles/main.scss';

import scrollTo from './scrollto';

$(function() {


    // default board setup
    // when player places a tile the corresponding index will be marked as false
    // computers move will be marked as true
    let  board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]


    // get row and column from squares id
    // place false in corresponding index on board
    $('.square').click( function() {

        const cell = $(this).attr('id');
        const row = parseInt(cell[1]);
        const col = parseInt(cell[2]);

        board[row][col] = false;
        outputTile();
  
    });

    // loop over board if value is false add a cross
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

    // scroll to 
    $('.play').click( function() {
        scrollTo();
    });
    
});

