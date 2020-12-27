function determineOlderAge(ageList) {
    let higher = ageList[0];
    for (let i = 1; i < ageList.length; i++) {
        if (ageList[i] > higher) {
            higher = ageList[i];
        }
    }

    return higher;
}

function determineMinorAge(ageList) {
    let lower = ageList[0];
    for (let i = 1; i < ageList.length; i++) {
        if (ageList[i] < lower) {
            lower = ageList[i];
        }
    }

    return lower;
}

function calculateAverage(ageList) {
    let totalAmount = 0;
    for (let i = 0; i < ageList.length; i++) {
        totalAmount += ageList[i];
    }

    return (totalAmount / ageList.length).toFixed(2);
}