{/* <nav class="navbar navbar-inverse">...</nav> */}
const navBar = document.querySelector('.nav')
const renderNav = () =>{
  const navLogo = document.createElement('h1')
  navLogo.className = 'logo'
  navLogo.innerText = 'Climate Fighters'
  const navUl = document.createElement('ul')
  const navList = document.createElement('div')
  navList.className = 'nav-list-links'
  navUl.className = 'nav-list'
  const navLi1 = document.createElement('li')
  const navLi2 = document.createElement('li')
  const navLi3 = document.createElement('li')
  
  const homeLink = document.createElement('a')
  homeLink.href = 'index.html'
  homeLink.innerText = 'Home'
  navLi1.append(homeLink)
  navLi1.className = 'nav-links'

  const graphLink = document.createElement('a')
  graphLink.href = ''
  graphLink.innerText = 'Graph'
  navLi2.append(graphLink);
  navLi2.className = "nav-links";

   const contactLink = document.createElement("a");
		contactLink.href = "";
		contactLink.innerText = "Contact";
		navLi3.append(contactLink);
		navLi3.className = "nav-links";

  navList.append(navLi1, navLi2, navLi3);
  navUl.append(navLogo, navList)
  navBar.append(navUl)

}


