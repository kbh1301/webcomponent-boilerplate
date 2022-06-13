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
        self = super();
    }
    connectedCallback() {
        const innerElmts = [];
        this.childNodes.forEach(elmt => innerElmts.push(elmt));

        const htmlTemp = document.createElement('template');
        htmlTemp.innerHTML += this.html();
        if(htmlTemp.content.firstElementChild) {
            const componentName = self.tagName.toLowerCase().replace('component-','');
            const styleId = `style-component-${componentName}`;
            if(!this.ownerDocument.querySelector(`#${styleId}`)) {
                const cssTemp = document.createElement('template');
                cssTemp.innerHTML += this.css();
                cssTemp.content.querySelector("style").id = styleId;
                this.ownerDocument.head.append(cssTemp.content);
            }
            this.prepend(htmlTemp.content);

            this.js(innerElmts);
        }
    }
});
