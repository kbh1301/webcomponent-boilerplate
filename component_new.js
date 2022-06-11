const componentName = "";
customElements.define(`component-${componentName}`, class extends HTMLElement {
    css() { return /*html*/`

    `;}
    
    html() { return /*html*/`

    `;}

    js() {
        
    }

    constructor() {
        super();
    }
    connectedCallback() {
        if(!this.firstElementChild) {
            const styleId = `style-component-${componentName}`;
            if(!this.ownerDocument.querySelector(`#${styleId}`)) {
                const cssTemp = document.createElement('template');
                cssTemp.innerHTML += this.css();
                cssTemp.content.querySelector("style").id = styleId;
                this.ownerDocument.head.append(cssTemp.content);
            }
            const htmlTemp = document.createElement('template');
            htmlTemp.innerHTML += this.html();
            this.prepend(htmlTemp.content);

            this.js();
        }
    }
});
