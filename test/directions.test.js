const directions = require('../main/directions');
const chai = require('chai');
chai.should();

describe('directions', function () {
    it('should subtract 1 from x if left is called', function () {
        directions.left.invoke({x:0, y:0}).should.deep.equal({x:-1, y:0});
    });
    it('should add 1 to x if right is called', function () {
        directions.right.invoke({x:0, y:0}).should.deep.equal({x:1, y:0});
    });
    it('should add 1 to y if up is called', function () {
        directions.up.invoke({x:0, y:0}).should.deep.equal({x:0, y:1});
    });
    it('should add 1 to y if down is called', function () {
        directions.down.invoke({x:0, y:0}).should.deep.equal({x:0, y:-1});
    });

    it('left should have up as next step', function () {
        directions.left.next().should.equal(directions.up);
    });
    it('right should have down as next step', function () {
        directions.right.next().should.equal(directions.down);
    });
    it('up should have right as next step', function () {
        directions.up.next().should.equal(directions.right);
    });
    it('down should have left as next step', function () {
        directions.down.next().should.equal(directions.left);
    });
});