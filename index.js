// bring neccesary elements from HTML file
const elementCount = document.getElementById("count-el");

// create a varibale to store the count of people entering the subway
let subwayPassengerCount = 0;
// listen for when the user clicks on the incrment button
const increment = () => {
  subwayPassengerCount += 1;
  elementCount.innerText = subwayPassengerCount;
}



// increment the count variable when the button is clicked

// change the value of the count in the html to match the new count