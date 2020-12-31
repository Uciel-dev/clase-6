function getOldest(ageList) {
    let major = ageList[0];
    for (let i = 1; i < ageList.length; i++) {
        if (ageList[i] > major) {
            major = ageList[i];
        }
    }

    return major;
}

function getYoungest(ageList) {
    let minor = ageList[0];
    for (let i = 1; i < ageList.length; i++) {
        if (ageList[i] < minor) {
            minor = ageList[i];
        }
    }

    return minor;
}

function getAverage(ageList) {
    let totalAmount = 0;
    for (let i = 0; i < ageList.length; i++) {
        totalAmount += ageList[i];
    }

    return (totalAmount / ageList.length).toFixed(2);
}