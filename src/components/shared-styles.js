import { html } from '@polymer/lit-element/lit-element.js';

export const sharedStyles = html`
  <style>
    @import 'normalize.css/normalize.css';

    *,
    *::before,
    *::after,
    :host {
      box-sizing: border-box;
    }

    :host {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  </style>
`;
