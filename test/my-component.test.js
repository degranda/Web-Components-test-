import { html, fixture, expect } from '@open-wc/testing';

import '../src/my-component.js';

describe('myComponent', () => {
    let element;
    beforeEach(async () => {
        element = await fixture(html`
            <my-component></my-component>
        `);
    });

    it('render a h2', () => {
        const h2 = element.shadowRoot.querySelector('h2');
        expect(h2).to.exist;
        expect(h2.textContent).to.equal('Hola mundo!');
    });

    it('renders a p', () => {
        const p = element.shadowRoot.querySelector('p');
        expect(p).to.exist;
        expect(p.textContent).to.equal('Diego De Granda');
    })
})