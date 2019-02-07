import { LitElement, html } from '@polymer/lit-element';
import { inviewportStyles } from './inviewport-styles';

/**
 * `sn-inviewport`
 *
 * Detects when element is in browser viewport and emits an event
 * Encapsulates logic and is used by other component to detect when
 * they are in viewport
 *
 * @example
   ```html
  <sn-inviewport
    @change="${event => this.eventHandler(event)}">
  </sn-inviewport>
  ```
 *
 * @customElement
 * @polymer
 * @demo demo/inviewport/inviewport.html
 */
class InviewportComponent extends class extends LitElement {} {
  static get properties() {
    return {
      /**
       * IntersectionObserver instance
       */
      observer: {
        type: Object,
      },
      selector: {
        type: String,
      },
    };
  }

  constructor() {
    super();
  }
  /**
   * Event handler for when `IntersectionObserver` state is updated
   * Emit a new `CustomEvent` named `'bbChange'` only when inViewport state
   * is changed
   *
   */
  intersectionObserverCallback(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.inviewport = true;
        this.observer.unobserve(entry.target);
      }
    });
  }
  /**
   * Emit event after first render
   */
  firstUpdated() {
    this.observer = new IntersectionObserver(
      this.intersectionObserverCallback.bind(this),
    );
    const elements = this.querySelectorAll(this.selector);
    elements.forEach(element => {
      this.observer.observe(element);
    });
  }
  /**
   * Render child elements
   */
  render() {
    return html`
      ${inviewportStyles} <slot></slot>
    `;
  }
}

window.customElements.define('sn-inviewport', InviewportComponent);
