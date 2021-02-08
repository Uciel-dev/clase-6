function getOldest(ageList) {
    let oldest = ageList[0];
    for (let i = 1; i < ageList.length; i++) {
        if (ageList[i] > oldest) {
            oldest = ageList[i];
        }
    }

    return oldest;
}

function getYoungest(ageList) {
    let younget = ageList[0];
    for (let i = 1; i < ageList.length; i++) {
        if (ageList[i] < younget) {
            younget = ageList[i];
        }
    }

    return younget;
}

function getAverage(ageList) {
    let totalAmount = 0;
    for (let i = 0; i < ageList.length; i++) {
        totalAmount += ageList[i];
    }

    return (totalAmount / ageList.length).toFixed(2);
}