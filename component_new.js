customElements.define(`component-new`, class extends HTMLElement {
    css() { return /*html*/`
        <style>

        </style>
    `;}

    html() {
        let defaultSlot = '';
        this.innerElmts.forEach(elmt => { if(!elmt.slot) defaultSlot += elmt.outerHTML || elmt.textContent; });

        return /*html*/`

            ${defaultSlot}
        `;
    }

    js() {
        
    }

    static get observedAttributes() { return []; }
    attributeChangedCallback(name, oldValue, newValue) { if(this.rendered) this.render(); }

    render() {
        const componentName = this.tagName.toLowerCase().replace("component-", "");
        const styleId = `style-component-${componentName}`;
        if (!this.ownerDocument.querySelector(`#${styleId}`)) {
            const cssTemp = document.createElement("template");
            cssTemp.innerHTML += this.css();
            cssTemp.content.querySelector("style").id = styleId;
            this.ownerDocument.head.append(cssTemp.content);
        }
        const htmlTemp = document.createElement("template");
        htmlTemp.innerHTML += this.html();
        this.innerHTML = htmlTemp.innerHTML; 
        this.js();
    }
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerElmts = [];
        if (!this.rendered) {
            Array.from(this.childNodes).forEach(child => this.innerElmts.push(child));
            this.render();
            this.rendered = true;
        }
    }
});
