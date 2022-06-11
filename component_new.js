customElements.define(`component-new`, class extends HTMLElement {
    css() { return /*html*/`
        <style>

        </style>
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
            const componentName = self.tagName.toLowerCase().replace('component-','');
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
