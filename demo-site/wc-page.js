class WCPage extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        console.log("wc-page")
    }

  }

  customElements.define("wc-page", WCPage);