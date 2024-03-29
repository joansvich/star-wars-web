'use strict';

const main = () => {
  const ENTRY_POINT = '/'
  let layoutInstance = null;
  let navbarInstance = null;
  let links = [
    { name: 'Home', url: '/' },
    { name: 'Movies', url: '/movies' }
  ]
  let rootElement = document.querySelector('#root');

  const generateLayout = () => {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }

  const generateNavbar = () => {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }

  const activateRouter = () => {
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
  }

  generateLayout();
  generateNavbar();
  activateRouter();

}

window.addEventListener('load', main);