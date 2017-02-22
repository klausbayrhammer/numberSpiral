const steps = require('../main/steps');
const {left, right, up, down} = require('../main/directions');

describe('compute a list of steps', function () {
    it('should start with left', function () {
        steps(1).should.deep.equal([left]);
    });
    it('should directions for four steps', function () {
        steps(4).should.deep.equal([left, up, right, right]);
    });
    it('should directions for ninesteps', function () {
        steps(9).should.deep.equal([left, up, right, right, down, down, left, left, left]);
    });
});