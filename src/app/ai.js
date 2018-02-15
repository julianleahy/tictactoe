export const playState =(board, player) => {
    let winner = isWinner(board);
    if (winner != null) {
        switch (winner) {
            case 1://AI
                return [1, board]
            case 0:// Pl
                return [-1, board]
            case -1:// Tie
                return [0, board];
        }
    } else {
        // Eval next states
        let nextVal = null;
        let nextBoard = null;

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == null) {
                    board[i][j] = player;
                    var value = playState(board, !player)[0];
                    if ((player && (nextVal == null || value > nextVal)) || (!player && (nextVal == null || value < nextVal))) {
                        nextBoard = board.map(function(arr) {
                            return arr.slice();
                        });
                        nextVal = value;
                    }
                    board[i][j] = null;
                }
            }
        }
        return [nextVal, nextBoard];
    }
}


export const isWinner = board => {

    let opt = [true, false];
    let check, winningCombo;
    let allNotNull = true;
    let diagLeftToRight, diagRightToLeft,
        rows, columns;

    for (var x = 0; x < opt.length; x++) {
        check = opt[x];
        diagLeftToRight = true;
        diagRightToLeft = true;

        for (var i = 0; i < board.length; i++) {
            if (board[i][i] != check) {
                diagLeftToRight = false;
            }

            if (board[i][2 - i] != check) {
                diagRightToLeft = false;
            }

            rows = true;
            columns = true;

            for (var j = 0; j < board[i].length; j++) {

                if (board[i][j] != check) {
                    rows = false;
                }

                if (board[j][i] != check) {
                    columns = false;

                }
                if (board[i][j] == null) {
                    allNotNull = false;
                }

            } // loop through rows index

            if (rows || columns) {
                if (rows) {
                    winningCombo = 'rows';
                } else {
                    winningCombo = 'columns';
                }
                return check ? 1 : 0;
            }

        } // loop through board rows

        if (diagLeftToRight || diagRightToLeft) {
            if (diagLeftToRight) {
                winningCombo = 'diagLeftToRight';
            } else {
                winningCombo = 'diagRightToLeft';
            }

            return check ? 1 : 0;
        }

    } // loop through true/false
    if (allNotNull) {
        return -1;
    }
    return null;

}