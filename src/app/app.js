import AOS from 'aos';
import 'styles/normalize.css';
import 'styles/main.scss';
import 'styles/aos.css'

import {scrollTo, scrollEnd} from './scrollto';
import {playState, isWinner, hasWon} from './ai';
import winner from './winner';

$(function() {

    // default board setup
    // when player places a tile the corresponding index will be marked as false
    // computers move will be marked as true
    let  board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    let AI = true;
    let player = $('#turn');

    $('.select').click(function(){
        player.toggleClass('human');
        AI = !AI;
    })

    // scroll to 
    $('.play').click( function() {
        resetBoard();
        $('.wrapper').removeClass('noscroll');
        scrollTo();
        setTimeout(()=>{ai()},1000)
        
    });

    $('.close').click(function(){
        $('.modal').fadeOut('slow');
        scrollEnd();
        setTimeout(function(){
            $('.wrapper').addClass('noscroll');
        },2500)
    })


    // get row and column from squares id
    // place false in corresponding index on board
    $('.square').click( function() {

        if(AI) return;

        const cell = $(this).attr('id');
        const row = parseInt(cell[1]);
        const col = parseInt(cell[2]);

        board[row][col] = false;
        outputTile();
        AI = true;
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
    
    }

    const ai = () => {
        if(!AI) return;
        board = playState(board, true)[1];
        AI = false;
        setTimeout(()=>{
            outputTile();
            checkWin();
        },1000,)  
    }

    const checkWin = () => {
        if(isWinner(board) === 1  ){
            winner(hasWon(), board);
        }else if(isWinner(board) === -1){
            setTimeout(()=>{
                $('.modal').css('display','block');
                $('.gameover').text('Game Over! You Managed To Draw')
            },2000)
           
        }
    }

    const resetBoard = () => {
        $('.square').removeClass('circle cross');
        $('.c0, .c1, .c2').css('background-color', '#222');
        AI = (player.hasClass('human')) ? false : true;

        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
    }
    
});

AOS.init({
    duration : 500
})

