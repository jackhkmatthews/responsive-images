import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';

class InviewportDemoComponent extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <custom-style>
        <style is="custom-style" include="demo-pages-shared-styles"></style>
      </custom-style>
      <style>
        .spacer {
          height: 1000px;
          border: 1px solid black;
        }
      </style>
      <div class="vertical-section-container">
        <h3>Inviewport demo (scroll down)</h3>
        <sn-inviewport selector=".slide-up, .fade-in">
          <div class="spacer"></div>
          <div class="fade-in"><p>Target 1</p></div>
          <div class="spacer"></div>
          <div class="slide-up"><p>Target 2</p></div>
          <div class="spacer"></div>
          <div class="fade-in"><p>Target 3</p></div>
          <div class="spacer"></div>
          <div class="slide-up"><p>Target 4</p></div>
        </sn-inviewport>
      </div>
    `;
  }

  log(event) {
    // eslint-disable-next-line no-console
    console.log(event);
  }
}
customElements.define('sn-inviewport-demo', InviewportDemoComponent);
