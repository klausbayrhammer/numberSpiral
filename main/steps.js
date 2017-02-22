const _ = require('lodash');
const {left} = require('./directions');
const stepsPerDirection = require('./steps-per-direction');

module.exports = function (numberOfSteps) {
    const steps = stepsPerDirection(numberOfSteps);
    return stepInDirection(steps, left);
};

function stepInDirection(steps, currentStep) {
    if(_.isEmpty(steps)) {
        return [];
    }
    const stepsInCurrentDirection = _.times(steps[0], () => currentStep);
    const stepsInNextDirection = stepInDirection(_.tail(steps), currentStep.next());
    return stepsInCurrentDirection.concat(stepsInNextDirection);
}