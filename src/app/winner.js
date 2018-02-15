export default function (combo, board) {

    switch (combo) {
        case 'diagLeftToRight':
            $('.lr').css({ background: 'red' })
            break;
        case 'diagRightToLeft':
            $('.rl').css({ background: 'red' })
            break;
        case 'columns':
            const c = cols(board);
            if (c == 0) {
                $('.c0').css({ background: 'red' })
            }
            if (c == 1) {
                $('.c1').css({ background: 'red' })
            }
            if (c == 2) {
                $('.c2').css({ background: 'red' })
            }
            break;
        case 'rows':
            const r = rows(board);
            if (r == 0) {
                $('.r0').css({ background: 'red' })
            }
            if (r == 1) {
                $('.r1').css({ background: 'red' })
            }
            if (r == 2) {
                $('.r2').css({ background: 'red' })
            }
            break;

        default:
            break;
    }




}

// return starting winning index

function cols(board) {

    for (var i = 0; i < 1; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j]) {
                if (board[i + 1][j] && board[i + 2][j]) {
                    return j;
                }
            }
        }
    }

}

function rows(board) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 1; j++) {
            if (board[i][j]) {
                if (board[i][j + 1] && board[i][j + 2]) {
                    return i;
                }
            }
        }
    }
}