import { LitElement, html, css } from 'lit-element';

import './my-component.js';

export class MyApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
      title:  { attribute: true },
    };
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('attribute change', name, newVal);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  constructor() {
    super()

    this.title = "Developer"
  }


  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  render() {
    return html`
      <main>
        <h1>My app</h1>

        <p title="developer">${this.title}</p>

        <my-component></my-component>
        
      </main>

      
    `;
  }
}
