// bring the neccessary HTML element(s) into the JavaScript file
let elementCount = document.getElementById('count-el');
let previousEntries = document.getElementById('previous-entries')
// create a variable to initialize the count of passengers in the subway
let subwayPassengerCount = 0;
// create a function to increment the count of passengers
const incrementPassengerCount = () => {
  // increment the count of the passengers by 1 when this button is clicked
  subwayPassengerCount += 1;
  // reassign the count of passengers to be the new count of passengers
  elementCount.textContent = subwayPassengerCount;
}
// create a button that saves the current passenger count
const saveCurrentPassengerCount = () => {
  // add the subway passenger count with a dash to the
  // previous entries label when save is clicked
  previousEntries.textContent += `${subwayPassengerCount} - `
  // when save is pushed, change the subway passenger 
  // count to 0 as well as the label
  subwayPassengerCount = 0;
  elementCount.textContent = subwayPassengerCount;
}