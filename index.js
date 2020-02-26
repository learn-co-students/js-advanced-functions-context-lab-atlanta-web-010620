/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function createEmployeeRecord(array){
    let testEmployee = {}; 
    testEmployee.firstName = array[0]; 
    testEmployee.familyName = array[1]; 
    testEmployee.title = array[2]; 
    testEmployee.payPerHour = array[3]; 
    testEmployee.timeInEvents = []; 
    testEmployee.timeOutEvents = []; 
    return testEmployee; 
}

function createEmployeeRecords(array){
    return array.map(emp => createEmployeeRecord(emp)); 
}

// function createTimeInEvent(emp, time){
//     let timeDate = time.slice(0,10);
//     let TimeIn = {
//         type:"TimeIn",
//         date: timeDate,
//         hour: parseInt(time.slice(11))
//     }
//     emp.timeInEvents.push(TimeIn); 
//     return emp
// }
function createTimeInEvent(time){
    let timeDate = time.split(" ")[0]
    let setHour = time.split(" ")[1]
    let TimeIn = {
        type:"TimeIn",
        date: timeDate,
        hour: parseInt(setHour,10)
    }
    this.timeInEvents.push(TimeIn); 
    return this; 
}

function createTimeOutEvent(time){
    let timeDate = time.split(" ")[0]
    let setHour = time.split(" ")[1]
    // debugger 
    let TimeOut = {
        type:"TimeOut",
        date: timeDate,
        hour: parseInt(setHour,10)
    }
    this.timeOutEvents.push(TimeOut); 
    return this
}

function hoursWorkedOnDate(date){
    let timeInIndex = this.timeInEvents.findIndex(element => element.date === date); 
    let timeIn = this.timeInEvents[timeInIndex].hour; 
    let timeOut = this.timeOutEvents[timeInIndex].hour; 
    return (timeOut - timeIn)*0.01;
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this,date)*this.payPerHour;
}




function calculatePayroll(employees){
    // return employees.reduce(allWagesFor)
    // return employees.reduce(emp=>allWagesFor(emp))
    return employees.reduce(function(memo,emp){
        return memo + allWagesFor.call(emp)
    },0)
}

function findEmployeeByFirstName(employees,name){
    return employees.find(employee => employee.firstName === name); 
}