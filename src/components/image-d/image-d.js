import { LitElement, html } from '@polymer/lit-element';
import { imageDStyles } from './image-d-styles';

/**
 * `sn-image-d`
 *
 * Responsive image D component. Uses a single `img` tag for the full res image and a `picture` element with correct crops and resolutions of very low picture quality for a placeholder.
 *
 * @customElement
 * @polymer
 * @demo demo/image-d/image-d.html
 */
class ImageDComponent extends class extends LitElement {} {
  static get properties() {
    return {
      /**
       * Current URL of image to display in `img` element
       */
      src: { type: String },
      /**
       * Current breakpoint of device to determine which set of images
       * display to load
       */
      breakpoint: { type: String },
      /**
       * Set of images for different viewports
       */
      images: { type: Array },
      /**
       * Is true when the element is in browser viewport
       */
      inviewport: { type: Boolean, reflect: true },
      /**
       * True is full res loaded
       */
      loaded: { type: Boolean, reflect: true },
      /**
       * URL for non retina image on small devices less than 768px wide
       */
      imgSm: { type: String },
      /**
       * URL for non retina image on medium devices greater than 768px and less than 1024px wide
       */
      imgMd: { type: String },
      /**
       * URL for non retina image on large devices greater than 1024px wide
       */
      imgLg: { type: String },
    };
  }

  constructor() {
    super();
    this.fallback =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJAQMAAAAB5D5xAAAABlBMVEV+VHV+VHWl6rRiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAFUlEQVQImWNgQAINQMTCsADMYGAAABRDAiXEUVrTAAAAAElFTkSuQmCC';
    this.breakpoint = 'sm';
    this.src = '';
  }
  /**
   * Set image object and alt on first render
   */
  firstUpdated() {
    this.images = this.getImages();
    this.src = this.getSrc(this.images);
  }
  /**
   * When image has been preloaded set the src for the
   * main `img` element to replace the placeholder
   */
  onImagePreload() {
    this.loaded = true;
  }
  /**
   * On breakpoint change update `breakpoint` and restart preloading logic.
   */
  onBreakpointChange(event) {
    this.breakpoint = event.detail.breakpoint;
    this.loaded = false;
    this.src = this.getSrc(this.images);
  }
  /**
   * Return retina image relative to current breakpoint
   */
  getSrc(images) {
    return images.find(image => image.size === this.breakpoint).src;
  }
  /**
   * Display fallback image if image fails to load
   */
  onImagePreloadError() {
    // this.src = this.fallback;
    this.loaded = true;
  }
  /**
   * Compose image object and return
   */
  getImages() {
    return [
      {
        size: 'sm',
        src: this.imgSm,
      },
      {
        size: 'md',
        src: this.imgMd,
      },
      {
        size: 'lg',
        src: this.imgLg,
      },
    ];
  }
  /**
   * Renders component content
   */
  render() {
    const img = html`
      <img
        class="image"
        src="${this.src}"
        @load="${this.onImagePreload}"
        @error="${this.onImagePreloadError}"
      />
    `;
    return html`
      ${imageDStyles}
      <sn-device @snChange="${this.onBreakpointChange}"></sn-device>
      ${this.inviewport ? img : html``}
      <slot></slot>
    `;
  }
}

customElements.define('sn-image-d', ImageDComponent);
