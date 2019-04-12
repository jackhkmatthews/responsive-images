import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';

class ImageBDemoComponent extends LitElement {
  render() {
    return html`
      <custom-style>
        <style is="custom-style" include="demo-pages-shared-styles"></style>
      </custom-style>
      <style>
        sn-image-b {
          max-width: 100%;
          width: 100%;
        }
        .spacer {
          height: 1000px;
        }
      </style>
      <div class="vertical-section-container">
        <h3>image b demo (scroll down)</h3>
        <demo-snippet>
          <template>
            <sn-inviewport selector="sn-image-b">
              <sn-image-b
                intrinsicAspectRatio="1200:500"
                placeholderStart="#ffffff"
                placeholderEnd="#5E469E"
                srcdata="http://via.placeholder.com/1200x500?text=top-1200x500"
              >
              </sn-image-b>
            </sn-inviewport>
            <h3>keep scrolling</h3>
            <div class="spacer"></div>
            <sn-inviewport selector="sn-image-b">
              <sn-image-b
                intrinsicAspectRatio="1200:500"
                placeholderStart="#ffffff"
                placeholderEnd="#5E469E"
                srcdata="http://via.placeholder.com/1200x500?text=bottom-1200x500"
              >
              </sn-image-b>
            </sn-inviewport>
          </template>
        </demo-snippet>
      </div>
    `;
  }
}
customElements.define('sn-image-b-demo', ImageBDemoComponent);
