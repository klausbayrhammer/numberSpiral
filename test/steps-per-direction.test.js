const stepsPerDirection = require('../main/steps-per-direction');
const chai = require('chai');
chai.should();

describe('steps-per-direction', function () {
    it('should compute steps per directions for single step', function () {
        stepsPerDirection(1).should.eql([1])
    });
    it('should compute steps per directions for four steps', function () {
        stepsPerDirection(4).should.eql([1,1,2])
    });
});