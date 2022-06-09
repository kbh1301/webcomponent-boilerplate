customElements.define("component-boxshadow", class extends HTMLElement {
    htmlcss() { return /*html*/`
        <style>
            #box {
                width: 150px;
                height: 150px;
                background-color: red;
            }

            .blue {
                background-color: blue !important;
            }
        </style>

        <div id="box"></div>
        <button id="button1">Button 1</button>
    `;}

    script(shadowRoot) {
        const box = shadowRoot.getElementById('box');
        const button1 = shadowRoot.getElementById('button1');

        button1.onclick = () => {
            box.classList.toggle('blue');
        }
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