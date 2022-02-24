
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix && matrix.length !== 0) {
        return matrix.map(function(item, index) {
            return index%2 === 0 ? item : item.reverse();
        }).flat();
    }
    return [];
}
