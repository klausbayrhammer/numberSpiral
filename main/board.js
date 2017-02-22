const stepsToPopulateBoard = require('./steps');
const _ = require('lodash');

const startingPosition = {x: 0, y: 0};

function nextStep(steps, currentPosition) {
    if(steps.length === 0) {
        return [];
    }
    const nextPosition = steps[0].invoke(currentPosition);
    return [currentPosition].concat(nextStep(_.tail(steps), nextPosition));
}

module.exports = function (size) {
    const numberOfSteps = size * size;
    const steps = stepsToPopulateBoard(numberOfSteps);
    return nextStep(steps, startingPosition);
};