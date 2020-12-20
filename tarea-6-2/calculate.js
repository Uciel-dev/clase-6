function determineHigherSalary(salaryList) {
    let higher = salaryList[0];
    for (let i = 1; i < salaryList.length; i++) {
        if (salaryList[i] > higher) {
            higher = salaryList[i];
        }
    }

    return higher;
}

function determineLowerSalary(salaryList) {
    let lower = salaryList[0];
    for (let i = 1; i < salaryList.length; i++) {
        if (salaryList[i] < lower) {
            lower = salaryList[i];
        }
    }

    return lower;
}

function calculateAverage(salaryList) {
    let totalAmount = 0;
    for (let i = 0; i < salaryList.length; i++) {
        totalAmount += salaryList[i];
    }

    return (totalAmount / salaryList.length).toFixed(2);
}