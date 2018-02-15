import AOS from 'aos';
import 'styles/normalize.css';
import 'styles/main.scss';
import 'styles/aos.css'

import scrollTo from './scrollto';
import {playState, isWinner} from './ai';

$(function() {

    $('.square').attr({
       'data-aos-anchor' :'#build',
       'data-aos-anchor-placement' :'top-bottom'
    })


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
        ai();
        
       
    });

    // loop over board 
    // if value is false(player) add a cross 
    // if value is true(Ai) add a circle 
    const outputTile = () => {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                switch (board[i][j]) {
                    case false:
                        $(`#x${i}${j}`).addClass('cross');
                        break;
                    case true:
                        $(`#x${i}${j}`).addClass('circle');
                        break;
                }
            }
        }
        setTimeout(()=>{
            checkWin();
        },100)
    }

    // scroll to 
    $('.play').click( function() {
        $('.wrapper').removeClass('noscroll');
        scrollTo();
        setTimeout(()=>{ai()},2500)
    });

    const ai = () => {
        board = playState(board, true)[1];
        outputTile();
        
        
    }

    const checkWin = () => {
        if(isWinner(board) === 1){
            alert('You Lost')
        }else if(isWinner(board) === -1){
            alert('You Drew')
        }
    }
    
});

AOS.init({
    duration : 1000
})

