import { LitElement, html } from '@polymer/lit-element';
import { imageCStyles } from './image-c-styles';

/**
 * `sn-image-c`
 *
 * Responsive image C component. Uses the same crop across all breakpoints but resolution changes. These changes handled by `srcset` and `sizes` attributes. Space held by padding bottom on a placeholder div (::before / ::after could also be used). Image loading handled gracefully with gradient background fade.
 *
 * @customElement
 * @polymer
 * @demo demo/image-c/image-c.html
 */
class ImageCComponent extends class extends LitElement {} {
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
       * srcset for image
       */
      srcSetData: { type: String, reflect: true },
      /**
       * sizes for image
       */
      sizesData: { type: String, reflect: true },
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
          ${imageCStyles}
          <div class="placeholder" style="${this.getStyle()}"></div>
          <img
            @load="${() => (this.loaded = true)}"
            srcset="${this.srcSetData}"
            sizes="${this.sizesData}"
            src="${this.srcData}"
          />
        `
      : html``;
  }
}

customElements.define('sn-image-c', ImageCComponent);
