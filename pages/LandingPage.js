'use strict';

class LandingPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }

  generate() {
    this.elements =`
      <header>
        <h1>Super cool Star Wars website</h1>
        <h2>Here you can find the information to become the best fan of star wars</h2>
      </header>
    `
    this.render();
  }

  render() {
    this.parentElement.innerHTML = this.elements;
  }
}