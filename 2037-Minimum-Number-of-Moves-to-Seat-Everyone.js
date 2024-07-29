/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b) => a-b);
    students.sort((a,b) => a-b);
    let totalMoves = 0;
    let length = seats.length;
    for (let i =0; i < length; i++){
        totalMoves += Math.abs(seats[i] - students[i])
    }
    return totalMoves;
};