
function computeSteps (steps, stepsInDirection = 1) {
    if(steps <= 0) {
        return [];
    }
    const remainingStepsInDirection = steps - stepsInDirection;
    return [Math.floor(stepsInDirection)].concat(computeSteps(remainingStepsInDirection, stepsInDirection+0.5))
}

module.exports = computeSteps;