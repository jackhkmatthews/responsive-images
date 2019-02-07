import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';

class ImageADemoComponent extends LitElement {
  render() {
    return html`
      <custom-style>
        <style is="custom-style" include="demo-pages-shared-styles"></style>
      </custom-style>
      <style>
        sn-image-a {
          max-width: 100%;
        }
        .spacer {
          height: 1000px;
        }
      </style>
      <div class="vertical-section-container">
        <h3>image a demo (scroll down)</h3>
        <div class="spacer"></div>
        <demo-snippet>
          <template>
            <sn-inviewport selector="sn-image-a">
              <sn-image-a
                sm="http://via.placeholder.com/400x300?text=400x300 400x300 0px"
                md="http://via.placeholder.com/900x450?text=900x450 900x450 768px"
                lg="http://via.placeholder.com/1200x500?text=1200x500 1200x500 1024px"
                placeholderStart="#ffffff"
                placeholderEnd="#5E469E"
              >
              </sn-image-a>
            </sn-inviewport>
          </template>
        </demo-snippet>
      </div>
    `;
  }
}
customElements.define('sn-image-a-demo', ImageADemoComponent);
