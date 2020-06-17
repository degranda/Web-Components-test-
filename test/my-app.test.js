import { html, fixture, expect } from '@open-wc/testing';

import '../src/my-app.js';

describe('MyApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <my-app></my-app>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('renders a my-componet', () => {
    const el = element.shadowRoot.querySelector('my-component');
    expect(el).to.exist;
  }); 

  it('renders a p', async () => {
    const el = await fixture('<p title="Web Developer"></p>');
    expect(el.getAttribute('title')).to.equal('Web Developer');
  })

});
