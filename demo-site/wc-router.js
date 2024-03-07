class WCRouter extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        console.log("I am loaded");

        let el = Array.from(this.children)

        el.forEach(element => {
            console.log(element.getAttribute("path")); 
        });
    }

  }

  customElements.define("wc-router", WCRouter);