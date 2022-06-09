customElements.define("component-counter", class extends HTMLElement {
    htmlcss() { return /*html*/`
        <button id="dec">-</button>
        <span id="count"></span>
        <button id="inc">+</button>
    `;}

    script() {
        let count = 0;

        const update = (count) => this.querySelector("#count").innerHTML = count;
        const inc = () => update(++count);
        const dec = () => update(--count);

        this.querySelector("#inc").onclick = () => inc();
        this.querySelector("#dec").onclick = () => dec();
        update(count);    
    }

    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = this.htmlcss();
        this.script();
    }
});