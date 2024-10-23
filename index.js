// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {return [...drivers].slice(null, 2)};
// returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(drivers) {return [...drivers].splice(2)};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers)

function createFareMultiplier(multiplier) {
    return function(fare) {
        return multiplier*fare
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


// const selectDifferentDrivers = function(drivers, selectionFunction) {
//     return selectionFunction(drivers);
// };

function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers)
}

// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
// console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 

