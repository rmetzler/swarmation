(function() {
    var board = $('#board').get(0);
    var context = board.getContext("2d");

    var drawBoard = function() {
        // Draw vertical lines
        for (var x = 0.5; x <= board.width; x += 10) {
            context.moveTo(x, 0);
            context.lineTo(x, board.height - .5);
        }

        // Draw horizontal lines
        for (var y = 0.5; y <= board.height; y += 10) {
            context.moveTo(0, y);
            context.lineTo(board.width, y);
        }

        context.strokeStyle = "#eee";
        context.stroke();
    }
    
    $('#board').click(function(e) {
        var offset = $(board).offset();
        var x = Math.floor((e.pageX - offset.left - 4) / 10) * 10 + 1;
        var y = Math.floor((e.pageY - offset.top - 4) / 10) * 10 + 1;
        context.fillRect(x, y, 9, 9);
        $('#board').trigger('newPixel', [x, y]);
    });

    $('#board').bind('receivePixel', function(event, x, y) {
        context.fillRect(x, y, 9, 9);
    });
    
    $('#reset').click(function(e) {
        board.width = board.width;
        drawBoard();
    });
    
    // Run it
    drawBoard();
})();