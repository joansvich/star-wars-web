'use strict';

class Router {

  constructor() {
    this.page = null;
  }

  buildDom(url, parentElement) {
    switch (url) {
      case '/':
        this.generateLandingPage(parentElement);
        break;
      case '/movies':
        this.generateMoviesPage(parentElement);
        break;
      default:
        this.generateLandingPage(parentElement);
        break;
    }
  }

  generateLandingPage(parentElement) {
    this.page = new LandingPage(parentElement);
    this.page.generate();
  }

  generateMoviesPage() {

  }
}

const routerInstance = new Router();