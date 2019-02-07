import { LitElement, html } from '@polymer/lit-element';
import { imageAStyles } from './image-a-styles';

/**
 * `sn-image-a`
 *
 * Responsive image A component. Uses a picture element for full res images layered on top of a second picture element with inline SVG / data URI images to hold the space while the full res image loads. Uses CSS to style transparent placeholder picture element with a gradient (can instead use gradient SVG as placeholder image - more markup though).
 *
 * @customElement
 * @polymer
 * @demo demo/image-a/image-a.html
 */
class ImageAComponent extends class extends LitElement {} {
  static get properties() {
    return {
      /**
       * If true image has loaded
       */
      loaded: { type: Boolean, reflect: true },
      /**
       * String containing image src, dimentions and breakpoint seperated by spaces.
       */
      sm: { type: String, reflect: true },
      /**
       * String containing image src, dimentions and breakpoint seperated by spaces.
       */
      md: { type: String, reflect: true },
      /**
       * String containing image src, dimentions and breakpoint seperated by spaces.
       */
      lg: { type: String, reflect: true },
      /**
       * Array of images {src, height, width, minWidth} constructed from sm, md and lg properties.
       * Used to generate template.
       */
      images: { type: Array },
      /**
       * Set to true by `sn-inviewport` component when element in viewport
       */
      inviewport: { type: Boolean, reflect: true },
      /**
       * Start of placeholder gradient
       */
      placeholderStart: { type: String, reflect: true },
      /**
       * End of placeholder gradient
       */
      placeholderEnd: { type: String, reflect: true },
    };
  }
  constructor() {
    super();
  }
  firstUpdated() {
    this.images = this.getImages();
  }
  onImageLoad() {
    this.loaded = true;
  }
  getImages() {
    return ['lg', 'md', 'sm'].map(size => {
      const info = this[size].split(' ');
      return {
        src: info[0],
        width: info[1].split('x')[0],
        height: info[1].split('x')[1],
        minWidth: info[2],
      };
    });
  }
  getStyle() {
    return `background: linear-gradient(135deg, ${this.placeholderStart} 0%, ${
      this.placeholderEnd
    } 100%)`;
  }
  render() {
    return this.images
      ? html`
          ${imageAStyles}
          <picture
            class="picture picture--placeholder"
            style="${this.getStyle()}"
          >
            ${this.images.map(
              image => html`
                <source
                  media="(min-width: ${image.minWidth})"
                  srcset="data:image/svg+xml,%20%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='${image.width}'%20height='${image.height}'%3E%3C/svg%3E"
                />
              `,
            )}
            <img
              class="picture__img picture__img--placholder"
              src="data:image/svg+xml,%20%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='${this
                .images[0].width}'%20height='${this.images[0]
                .height}'%3E%3C/svg%3E"
              alt="Some text"
            />
          </picture>
          ${this.inviewport
            ? html`
                <picture class="picture picture--ful-res">
                  ${this.images.map(
                    image => html`
                      <source
                        media="(min-width: ${image.minWidth})"
                        srcset="${image.src}"
                      />
                    `,
                  )}
                  <img
                    @load="${this.onImageLoad}"
                    class="picture__img picture__img--ful-res"
                    srcset="${this.images[0].src}"
                    src="${this.images[0].src}"
                    alt="Some text"
                  />
                </picture>
              `
            : ''}
        `
      : html``;
  }
}

customElements.define('sn-image-a', ImageAComponent);
