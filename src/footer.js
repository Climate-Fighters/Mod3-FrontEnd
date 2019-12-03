const footerDiv = document.querySelector(".footer");

const renderFooter = () =>{
  let footerUl = document.createElement('ul')
  footerUl.className = 'footer-list'

  let footerLi1 = document.createElement('li')
  footerLi1.className = 'footer-list-items'

  let footerLi2 = document.createElement("li");
  footerLi2.className = "footer-list-items";
  
  let footerLi3 = document.createElement("li");
  footerLi3.className = "footer-list-items";
  
  let footerLi4 = document.createElement("li");
	footerLi4.className = "footer-list-items";

  let footerA = document.createElement('a')
  footerA.className = 'footer-links'
  footerA.innerText = 'Home'
  footerLi1.append(footerA)

  let footerB = document.createElement("a");
  footerB.className = "footer-links";
  footerB.innerText = "Graph";
  footerLi2.append(footerB);
  
  let footerC = document.createElement("a");
  footerC.className = "footer-links";
  footerC.innerText = "Contact";
  footerLi3.append(footerC);

  let footerD = document.createElement("a");
	footerD.className = "footer-links";
  footerD.innerText = "FQA";
  footerLi4.append(footerD);
  
  footerUl.append(footerLi1, footerLi2, footerLi3, footerLi4)
  footerDiv.append(footerUl);
 
}