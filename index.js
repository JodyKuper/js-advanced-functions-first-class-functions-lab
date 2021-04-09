

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)

}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}

const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]
    
const createFareMultiplier = function(x) {
  return function(fare) {
      return fare * x
  } 

}



const fareDoubler =fare => fare *2

const fareTripler =fare => fare *3

 const selectDifferentDrivers = function(selectDrivers, arrayDr){
     return arrayDr(selectDrivers) 
     
     }
     

 