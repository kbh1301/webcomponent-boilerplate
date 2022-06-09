customElements.define("component-countershadow", class extends HTMLElement {
    htmlcss() { return /*html*/`
        <button id="dec">-</button>
        <span id="count"></span>
        <button id="inc">+</button>
    `;}

    script(shadowRoot) {
        let count = 0;

        const update = (count) => shadowRoot.getElementById("count").innerHTML = count;
        const inc = () => update(++count);
        const dec = () => update(--count);

        shadowRoot.getElementById("inc").onclick = () => inc();
        shadowRoot.getElementById("dec").onclick = () => dec();
        update(count);    
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