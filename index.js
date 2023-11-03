const hiringPool = {
  person1: {name: `Alice`, occupation: `Writer` , startingpay: 30},
  person2: {name: `Bob`, occupation: `Teacher` , startingpay: 50},
  person3: {name: `Carol`, occupation: `Programmer` , startingpay: 70},
};

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

const hire1 = hiringPool.person1;
const hire1name = hire1.name;
const toBeHired1 = document.createElement(`h3`);
toBeHired1.textContent=`${hire1name}`;
divInside4Left.appendChild(toBeHired1);

const hire2 = hiringPool.person2;
const hire2name = hire2.name;
const toBeHired2 = document.createElement(`h3`);
toBeHired2.textContent=`${hire2name}`;
divInside4Left.appendChild(toBeHired2);

const hire3 = hiringPool.person3;
const hire3name = hire3.name;
const toBeHired3 = document.createElement(`h3`);
toBeHired3.textContent=`${hire3name}`;
divInside4Left.appendChild(toBeHired3);





// Occupation section ----------------------------------------------------------
const occupation = document.createElement(`h1`);
occupation.textContent=`Occupation`;
divInside4Middle.appendChild(occupation);

const occupation1 = hiringPool.person1;
const occupation1name = occupation1.occupation;
const listedJob1 = document.createElement(`h3`);
listedJob1.textContent=`${occupation1name}`;
divInside4Middle.appendChild(listedJob1);

const occupation2 = hiringPool.person2;
const occupation2name = occupation2.occupation;
const listedJob2 = document.createElement(`h3`);
listedJob2.textContent=`${occupation2name}`;
divInside4Middle.appendChild(listedJob2);

const occupation3 = hiringPool.person3;
const occupation3name = occupation3.occupation;
const listedJob3 = document.createElement(`h3`);
listedJob3.textContent=`${occupation3name}`;
divInside4Middle.appendChild(listedJob3);





// Starting Price section ------------------------------------------------------
const startingPrice = document.createElement(`h1`);
startingPrice.textContent=`StartingPrice`;
divInside4Right.appendChild(startingPrice);

const pay1 = hiringPool.person1;
const startingpay1 = pay1.startingpay;
const listedPrice1 = document.createElement(`h3`);
listedPrice1.textContent=`$${startingpay1}`;
divInside4Right.appendChild(listedPrice1);

const pay2 = hiringPool.person2;
const startingpay2 = pay2.startingpay;
const listedPrice2 = document.createElement(`h3`);
listedPrice2.textContent=`$${startingpay2}`;
divInside4Right.appendChild(listedPrice2);

const pay3 = hiringPool.person3;
const startingpay3 = pay3.startingpay;
const listedPrice3 = document.createElement(`h3`);
listedPrice3.textContent=`$${startingpay3}`;
divInside4Right.appendChild(listedPrice3);





// All h1 elements -------------------------------------------------------------
const allH1 = document.querySelectorAll(`h1`);
allH1.forEach(h1Element => {
  h1Element.setAttribute(`style`, `font-size:2.5rem; margin:5px`);
});

// All h3 elements -------------------------------------------------------------
const allH3 = document.querySelectorAll(`h3`);
allH3.forEach(h3Element => {
  h3Element.setAttribute(`style`, `font-size:1.75rem; margin:5px; font-weight:200`);
});