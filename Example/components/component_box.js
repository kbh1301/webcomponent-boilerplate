customElements.define("component-box", class extends HTMLElement {
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

    script() {
        const box = this.querySelector('#box');
        const button1 = this.querySelector('#button1');

        button1.onclick = () => {
            box.classList.toggle('blue');
        }
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
