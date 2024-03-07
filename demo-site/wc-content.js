class WCContent extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        console.log("wc-content")
    }

  }

  customElements.define("wc-Content", WCContent);