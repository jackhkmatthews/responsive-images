import { LitElement, html } from '@polymer/lit-element';
import '@polymer/iron-demo-helpers/demo-pages-shared-styles';
import '@polymer/iron-demo-helpers/demo-snippet';

class DeviceDemoComponent extends LitElement {
  render() {
    return html`
      <div class="vertical-section-container">
        <h3>DeviceComponent demo</h3>
        <sn-device @snChange="${e => this.log(e)}"></sn-device>
      </div>
    `;
  }

  log(event) {
    // eslint-disable-next-line no-console
    console.log(event);
  }
}
customElements.define('sn-device-demo', DeviceDemoComponent);
