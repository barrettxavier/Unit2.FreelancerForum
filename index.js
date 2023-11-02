const mainDiv = document.createElement(`div`);
mainDiv.setAttribute(`style`, `display:flex; flex-direction:column; background-color:#999999; width:800px; height:620px; border:2px solid black`);
document.body.appendChild(mainDiv);

const topDiv1 = document.createElement(`div`);
topDiv1.setAttribute(`style`, `background-color:#888888; width:100%; height:15%; margin-bottom:5px; text-align:center`)
mainDiv.appendChild(topDiv1);

const topDiv2= document.createElement(`div`);
topDiv2.setAttribute(`style`, `background-color:#888888; width:100%; height:15%; margin-bottom:5px`)
mainDiv.appendChild(topDiv2);

const topDiv3 = document.createElement(`div`);
topDiv3.setAttribute(`style`, `background-color:#888888; width:100%; height:15%; margin-bottom:5px`)
mainDiv.appendChild(topDiv3);

const topDiv4 = document.createElement(`div`);
topDiv4.setAttribute(`style`, `background-color:#888888; width:100%; height:55%`)
mainDiv.appendChild(topDiv4);

const header = document.createElement(`h1`);
header.textContent=`Freelancer Forum`;
header.setAttribute(`style`, `font-size:3rem; margin:5px`)
topDiv1.appendChild(header);

const averageHeader = document.createElement(`h3`);
averageHeader.textContent=`The average starting price is $30`;  // will come back to change out the price with a ${sum}
topDiv2.appendChild(averageHeader);











const jobArray = [
  {name: Alice, occupation: Writer, price: $30},
  {name: Bob, occupation: Teacher, price: $50},
  {name: Carol, occupation: Programmer, price: $70},
];


