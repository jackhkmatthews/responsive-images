import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';

class ImageDDemoComponent extends LitElement {
  constructor() {
    super();
  }
  render() {
    return html`
      <custom-style>
        <style is="custom-style" include="demo-pages-shared-styles"></style>
      </custom-style>
      <style>
        sn-image-c {
          max-width: 100%;
        }
        .spacer {
          height: 1000px;
        }
      </style>
      <div class="vertical-section-container">
        <h3>Image d demo (scroll down)</h3>
        <div class="spacer"></div>
        <demo-snippet>
          <template>
            <sn-inviewport selector="sn-image-d">
              <sn-image-d
                imgSm="https://res.cloudinary.com/thisissoon/image/upload/c_fill,h_375,q_auto,w_375/v1545131390/Beaverbrooks/100YearsDiamondGuide/hero.jpg"
                imgMd="https://res.cloudinary.com/thisissoon/image/upload/c_fill,h_610,q_auto,w_720/v1545131390/Beaverbrooks/100YearsDiamondGuide/hero.jpg"
                imgLg="https://res.cloudinary.com/thisissoon/image/upload/c_fill,h_458,q_auto,w_1200/v1545131390/Beaverbrooks/100YearsDiamondGuide/hero.jpg"
              >
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcset="https://res.cloudinary.com/thisissoon/image/upload/c_fill,h_458,q_1,w_1200/v1545131390/Beaverbrooks/100YearsDiamondGuide/hero.jpg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcset="https://res.cloudinary.com/thisissoon/image/upload/c_fill,h_610,q_1,w_720/v1545131390/Beaverbrooks/100YearsDiamondGuide/hero.jpg"
                  />
                  <source
                    media="(min-width: 0)"
                    srcset="https://res.cloudinary.com/thisissoon/image/upload/c_fill,h_375,q_1,w_375/v1545131390/Beaverbrooks/100YearsDiamondGuide/hero.jpg"
                  />
                  <img
                    src="https://res.cloudinary.com/thisissoon/image/upload/c_fill,h_458,q_1,w_1200/v1545131390/Beaverbrooks/100YearsDiamondGuide/hero.jpg"
                    alt="Some text"
                  />
                </picture>
              </sn-image-d>
            </sn-inviewport>
          </template>
        </demo-snippet>
      </div>
    `;
  }
}

customElements.define('sn-image-d-demo', ImageDDemoComponent);
