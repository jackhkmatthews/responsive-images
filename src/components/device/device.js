import { LitElement, html } from '@polymer/lit-element';
import { deviceStyles } from './device-styles';
/**
 * `sn-device`
 *
 * A component that listens to browser resize events and emits an event
 * reporting the current device size as a corresponding breakpoint
 *
 * @customElement
 * @polymer
 * @demo demo/device/device.html
 */
class DeviceComponent extends class extends LitElement {} {
  static get properties() {
    return {
      /**
       * A string which represents the current size of the
       * device and the corresponding breakpoint.
       * One of `'sm'`, `'md'` or `'lg'`
       */
      breakpoint: {
        type: String,
      },
    };
  }

  constructor() {
    super();

    let timer;
    window.addEventListener('resize', event => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => this.onResize(event), 300);
    });
  }
  /**
   * Returns a string that represents the current
   * device breakpoint
   * @param {number} width
   * @returns {string} breakpoint represented as a string
   */
  getBreakpoint(width) {
    if (width >= 1024) return 'lg';
    if (width >= 768) return 'md';
    return 'sm';
  }
  /**
   * Get the current window width and check if there
   * has been a change in breakpoint. Update breakpoint and emit
   * event if breakpoint has changed
   *
   * @param {Event} event Window resize event
   */
  onResize(event) {
    const breakpoint = this.getBreakpoint(event.target.innerWidth);
    if (breakpoint === this.breakpoint) return;
    this.breakpoint = breakpoint;
    this.requestUpdate();
    this.emitChangeEvent(breakpoint);
  }
  /**
   * Emit `snChange` event
   * @param {string} breakpoint
   */
  emitChangeEvent(breakpoint) {
    const data = {
      detail: { breakpoint },
    };
    const event = new CustomEvent('snChange', data);
    this.dispatchEvent(event);
  }
  /**
   * Emit event after first render
   */
  firstUpdated() {
    this.breakpoint = this.getBreakpoint(window.innerWidth);
    this.emitChangeEvent(this.breakpoint);
  }
  /**
   * No need to render any elements here as this component
   * simply provides a service
   */
  render() {
    return html`
      ${deviceStyles}
    `;
  }
}

window.customElements.define('sn-device', DeviceComponent);
