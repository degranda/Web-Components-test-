class myComponent extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' }); 

        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = this.getTemplate()
    }
    getTemplate() {
        return `
            <h2>Hola mundo!</h2>
            <p>Diego De Granda</p>
        `; 
    }
}

customElements.define('my-component', myComponent);