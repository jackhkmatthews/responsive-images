import { LitElement, html } from '@polymer/lit-element';
import { imageBStyles } from './image-b-styles';

/**
 * `sn-image-b`
 *
 * Responsive image B component. Uses the same asset across all breakpoints. Space held by padding bottom on a placeholder div (::before / ::after could also be used). Image loading handled gracefully with gradient background fade.
 *
 * @customElement
 * @polymer
 * @demo demo/image-b/image-b.html
 */
class ImageBComponent extends class extends LitElement {} {
  static get properties() {
    return {
      /**
       * True if image loaded
       */
      loaded: { type: Boolean, reflect: true },
      /**
       * True if image inviewport
       */
      inviewport: { type: Boolean, reflect: true },
      /**
       * src for image
       */
      srcData: { type: String, reflect: true },
      /**
       * intrinsic aspect ratio of asset
       */
      intrinsicAspectRatio: { type: String, reflect: true },
      /**
       * Start of placeholder gradient
       */
      placeholderStart: { type: String, reflect: true },
      /**
       * Start of placeholder gradient
       */
      placeholderEnd: { type: String, reflect: true },
    };
  }
  constructor() {
    super();
  }
  getStyle() {
    const paddingBottom =
      (this.intrinsicAspectRatio.split(':')[1] /
        this.intrinsicAspectRatio.split(':')[0]) *
      100;
    return `padding-bottom: ${paddingBottom}%; background: linear-gradient(135deg, ${
      this.placeholderStart
    } 0%, ${this.placeholderEnd} 100%)`;
  }
  render() {
    return this.inviewport
      ? html`
          ${imageBStyles}
          <div class="placeholder" style="${this.getStyle()}"></div>
          <img @load="${() => (this.loaded = true)}" src="${this.srcData}" />
        `
      : html``;
  }
}

customElements.define('sn-image-b', ImageBComponent);
