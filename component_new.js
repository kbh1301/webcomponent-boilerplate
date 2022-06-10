customElements.define("component-new", class extends HTMLElement {
    htmlcss() { return /*html*/`

    `;}

    script() {
        
    }

    constructor() {
        super();
    }
    connectedCallback() {
        const temp = document.createElement('template');
        temp.innerHTML = this.htmlcss();
        if(!this.firstElementChild) {
            this.prepend(temp.content);
            this.script();
        }
    }
});
