const left = {
    invoke: ({x, y}) => ({x: x - 1, y}),
    next: () => up
};

const right = {
    invoke: ({x, y}) => ({x: x + 1, y}),
    next: () => down
};
const up = {
    invoke: ({x, y}) => ({x, y: y + 1}),
    next: () => right
};
const down = {
    invoke: ({x, y}) => ({x, y: y - 1}),
    next: () => left
};

module.exports = {left, right, up, down};