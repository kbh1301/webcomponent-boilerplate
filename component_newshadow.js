customElements.define("component-new", class extends HTMLElement {
    htmlcss() { return /*html*/`

    `;}

    script(shadowRoot) {
        
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const shadowRoot = this.shadowRoot;
        const template = document.createElement('template');
        template.innerHTML = this.htmlcss();
        shadowRoot.appendChild(template.content.cloneNode(true));
        this.script(shadowRoot);
    }
});