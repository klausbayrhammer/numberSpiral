const chai = require('chai');
const board = require('../main/board');
chai.should();

describe('number spiral data container', function () {
    it('should compute a data spiral for a 1x1 board', function () {
        board(1).should.deep.equal([{x: 0, y: 0}]);
    });
    it('should compute a data spiral for a 2x2 board', function () {
        board(2).should.deep.equal([
            {x: 0,  y: 0},
            {x: -1, y: 0},
            {x: -1, y: 1},
            {x: 0,  y: 1}
        ]);
    });
    it('should compute a data spiral for a 2x2 board', function () {
        board(3).should.deep.equal([
            {x: 0,  y: 0},
            {x: -1, y: 0},
            {x: -1, y: 1},
            {x: 0,  y: 1},
            {x: 1,  y: 1},
            {x: 1,  y: 0},
            {x: 1,  y: -1},
            {x: 0,  y: -1},
            {x: -1, y: -1}
        ]);
    });
});