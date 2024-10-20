//function sprawdzCzyPrawidlowe(end,start,elemPrzen){
    function sprawdzCzyPrawidlowe(to,from,elemPrzen) {
        const piece = [from[0]][from[1]];
        const targetPiece = board[to[0]][to[1]];
    
        // Check if the move is within bounds
        if (to[0] < 0 || to[0] > 7 || to[1] < 0 || to[1] > 7) {
            return false;
        }
    
        // Check if the piece belongs to the player
        if (piece === null || (piece.toLowerCase() === piece && player === 'white') || (piece.toUpperCase() === piece && player === 'black')) {
            return false;
        }
    
        switch (elemPrzen) {
            case 'pionek': // Pawn
                const direction = (piece === 'P') ? -1 : 1; // White moves up, Black moves down
                if (from[1] === to[1]) { // Moving straight
                    if (to[0] === from[0] + direction && targetPiece === null) return true; // Move one square
                    if (from[0] === (piece === 'P' ? 6 : 1) && to[0] === from[0] + 2 * direction && targetPiece === null) return true; // Move two squares
                } else if (Math.abs(from[1] - to[1]) === 1 && to[0] === from[0] + direction) { // Capturing
                    return targetPiece !== null && targetPiece.toLowerCase() !== targetPiece; // Capture only if there's an opponent's piece
                }
                break;
    
            case 'wieza': // Rook
                if (from[0] === to[0] || from[1] === to[1]) {
                    return isPathClear(board, from, to);
                }
                break;
    
            case 'kon': // Knight
                if ((Math.abs(from[0] - to[0]) === 2 && Math.abs(from[1] - to[1]) === 1) ||
                    (Math.abs(from[0] - to[0]) === 1 && Math.abs(from[1] - to[1]) === 2)) {
                    return true;
                }
                break;
    
            case 'goniec': // Bishop
                if (Math.abs(from[0] - to[0]) === Math.abs(from[1] - to[1])) {
                    return isPathClear(board, from, to);
                }
                break;
    
            case 'krolowa': // Queen
                if (from[0] === to[0] || from[1] === to[1] || Math.abs(from[0] - to[0]) === Math.abs(from[1] - to[1])) {
                    return isPathClear(board, from, to);
                }
                break;
    
            case 'krol': // King
                if (Math.abs(from[0] - to[0]) <= 1 && Math.abs(from[1] - to[1]) <= 1) {
                    return true;
                }
                break;
        }
    
        return false; // If no conditions matched, the move is invalid
    }
    
    // Helper function to check if the path is clear for Rooks, Bishops, and Queens
    function isPathClear(board, from, to) {
        const stepX = Math.sign(to[0] - from[0]);
        const stepY = Math.sign(to[1] - from[1]);
        let currentX = from[0] + stepX;
        let currentY = from[1] + stepY;
    
        while (currentX !== to[0] || currentY !== to[1]) {
            if (board[currentX][currentY] !== null) {
                return false; // Path is blocked
            }
            currentX += stepX;
            currentY += stepY;
        }
        return true; // Path is clear
    }
