// Code your solution in this file!
function distanceFromHqInBlocks(address) {
    const distanceInBlocks = address - 42
    if (distanceInBlocks < 0) {
        const positiveDistance = (distanceInBlocks * -1);
        return positiveDistance;
    } else {
        return distanceInBlocks;
    }
}

function distanceFromHqInFeet(address) {
    return distanceFromHqInBlocks(address) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice (start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start, destination) - 400) * .02);
    } else if (distanceTravelledInFeet(start, destination) <= 2499) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) >= 2500) {
        return 'cannot travel that far';
    }
}