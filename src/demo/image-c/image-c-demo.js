import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';

class ImageCDemoComponent extends LitElement {
  render() {
    return html`
      <custom-style>
        <style is="custom-style" include="demo-pages-shared-styles"></style>
      </custom-style>
      <style>
        sn-image-c {
          max-width: 100%;
        }
        .full-width {
          width: 100%;
        }
        .variable-width {
          width: 100%;
        }
        .spacer {
          height: 1000px;
        }
        @media (min-width: 768px) {
          .variable-width {
            width: 75%;
          }
        }
        @media (min-width: 1024px) {
          .variable-width {
            width: 50%;
          }
        }
      </style>
      <div class="vertical-section-container">
        <h3>image c demo (scroll down)</h3>
        <demo-snippet>
          <template>
            <sn-inviewport selector="sn-image-c">
              <sn-image-c
                class="full-width"
                intrinsicAspectRatio="2:1"
                placeholderStart="#ffffff"
                placeholderEnd="#5E469E"
                srcSetData="
                  http://via.placeholder.com/300x150?text=top-300x150    300w,
                  http://via.placeholder.com/600x300?text=top-600x300    600w,
                  http://via.placeholder.com/1200x600?text=top-1200x600 1200w,
                  http://via.placeholder.com/2400x1200?text=top-2400x1200 2400w
                "
                srcData="http://via.placeholder.com/1200x600?text=top-1200x600"
                sizesData="100vw"
              >
              </sn-image-c>
            </sn-inviewport>
            <h3>keep scrolling</h3>
            <div class="spacer"></div>
            <sn-inviewport selector="sn-image-c">
              <sn-image-c
                class="variable-width"
                intrinsicAspectRatio="2:1"
                placeholderStart="#ffffff"
                placeholderEnd="#5E469E"
                srcSetData="
                  http://via.placeholder.com/300x150?text=bottom-300x150    300w,
                  http://via.placeholder.com/600x300?text=bottom-600x300    600w,
                  http://via.placeholder.com/1200x600?text=bottom-1200x600 1200w,
                  http://via.placeholder.com/2400x1200?text=bottom-2400x1200 2400w
                "
                srcData="http://via.placeholder.com/1200x600?text=bottom-1200x600"
                sizesData="
                  (max-width: 768px) 100vw,
                  (max-width: 1024px) 75vw,
                 50vw 
                "
              >
              </sn-image-c>
            </sn-inviewport>
          </template>
        </demo-snippet>
      </div>
    `;
  }
}
customElements.define('sn-image-c-demo', ImageCDemoComponent);
