// Created a section to hold the different divs ----------------------------------
const mainSection = document.createElement(`section`);
mainSection.setAttribute(`style`, `display:flex; flex-direction:column; background-color:#888888; width:800px; height:620px; border:2px solid black`);
document.body.appendChild(mainSection);

const div1 = document.createElement(`div`);
div1.setAttribute(`style`, `line-height:80px; background-color:#999999; width:100%; height:15%; margin-bottom:5px; text-align:center`)
mainSection.appendChild(div1);

const div2= document.createElement(`div`);
div2.setAttribute(`style`, `line-height:70px; background-color:#999999; width:100%; height:15%; margin-bottom:5px; text-align:center`)
mainSection.appendChild(div2);

const div3 = document.createElement(`div`);
div3.setAttribute(`style`, `line-height:70px; background-color:#999999; width:100%; height:15%; margin-bottom:5px; text-align:center`)
mainSection.appendChild(div3);

const div4 = document.createElement(`div`);
div4.setAttribute(`style`, `display:flex; justify-content:space-between; background-color:#999999; width:100%; height:55%`)
mainSection.appendChild(div4);



//Divs inside of div4 -----------------------------------------------------------
const divInside4Left = document.createElement(`div`);
divInside4Left.setAttribute(`style`, `background-color:#888888; width:33%; height:100%; margin-bottom:5px; text-align:center`)
div4.appendChild(divInside4Left);

const divInside4Middle = document.createElement(`div`);
divInside4Middle.setAttribute(`style`, `background-color:#888888; width:33%; height:100%; margin-bottom:5px; text-align:center`)
div4.appendChild(divInside4Middle);

const divInside4Right = document.createElement(`div`);
divInside4Right.setAttribute(`style`, `background-color:#888888; width:33%; height:100%; margin-bottom:5px; text-align:center`)
div4.appendChild(divInside4Right);



// Header -----------------------------------------------------------------------
const header = document.createElement(`h1`);
header.textContent=`- Freelancer Forum -`;
div1.appendChild(header);

// Average price section --------------------------------------------------------
const averageHeader = document.createElement(`h3`);
averageHeader.textContent=`The average starting price is $30`;  // will come back to change out the price with a ${sum}
div2.appendChild(averageHeader);

// Available freelancers section ------------------------------------------------
const availableFreelancers = document.createElement(`h1`);
availableFreelancers.textContent=`Available Freelancers`;  
div3.appendChild(availableFreelancers);

// Name section ----------------------------------------------------------------
const frelancerName = document.createElement(`h1`);
frelancerName.textContent=`Name`;
divInside4Left.appendChild(frelancerName);











// Occupation section ----------------------------------------------------------
const occupation = document.createElement(`h1`);
occupation.textContent=`Occupation`;
divInside4Middle.appendChild(occupation);

// Starting Price section ------------------------------------------------------
const startingPrice = document.createElement(`h1`);
startingPrice.textContent=`StartingPrice`;
divInside4Right.appendChild(startingPrice);

// const firstPerson = jobArray[0];
// if (firstPerson) {
//   const firstName = firstPerson.name;
//   console.log(firstName);
// }

















// All h1 elements
const allH1 = document.querySelectorAll(`h1`);
allH1.forEach(h1Element => {
  h1Element.setAttribute(`style`, `font-size:2.5rem; margin:5px`);
});

// All h elements
const allH3 = document.querySelectorAll(`h3`);
allH3.forEach(h3Element => {
  h3Element.setAttribute(`style`, `font-size:1.75rem; margin:5px; font-weight:200`);
});














// const jobArray = [
//   {name: Alice, occupation: Writer, price: $30},
//   {name: Bob, occupation: Teacher, price: $50},
//   {name: Carol, occupation: Programmer, price: $70},
// ];


