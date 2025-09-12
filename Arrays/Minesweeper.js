/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const m = board.length;
    const n = board[0].length;
    const r = click[0];
    const c = click[1];

    // Regla 1: Si se hace clic en una mina 'M'.
    if (board[r][c] === 'M') {
        board[r][c] = 'X';
        return board;
    }

    // Regla 2 y 3: Si se hace clic en un espacio vacío 'E'.
    dfs_reveal(board, r, c);
    
    return board;
};

// Direcciones para los 8 vecinos.
const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function dfs_reveal(board, r, c) {
    const m = board.length;
    const n = board[0].length;
    
    // Contar las minas vecinas a la celda (r, c).
    let mines_count = 0;
    for (let i = 0; i < 8; i++) {
        const nr = r + dx[i];
        const nc = c + dy[i];
        
        // Verificar si el vecino está dentro de los límites y es una mina.
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'M') {
            mines_count++;
        }
    }

    // Si hay minas vecinas, cambia la celda a su número.
    if (mines_count > 0) {
        board[r][c] = mines_count.toString();
        return;
    }
    
    // Si no hay minas (mines_count es 0), cambia la celda a 'B' y explora a los vecinos.
    board[r][c] = 'B';
    
    // Recorre recursivamente los vecinos.
    for (let i = 0; i < 8; i++) {
        const nr = r + dx[i];
        const nc = c + dy[i];

        // Se llama a DFS en los vecinos que no han sido revelados.
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'E') {
            dfs_reveal(board, nr, nc);
        }
    }
}