'use strict';

class Navbar {
  constructor(parentElement, links, style) {
    this.parentElement = parentElement;
    this.links = links;
    this.style = style;
    this.elements = null;
  }

  generate(){
    this.elements = `
      <nav>
        <ul>    
    `;
    this.links.forEach((link) => {
      this.elements += `
        <li>
          <a href="#0" url=${link.url}>${link.name}</a>
        </li>
      `
    });
    this.elements += `
        </ul>
      </nav>
    `
    this.render();
  }

  render(){
    this.parentElement.innerHTML = this.elements;
  }

}