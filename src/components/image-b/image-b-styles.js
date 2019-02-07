import { html } from '@polymer/lit-element';

export const imageBStyles = html`
  <style>
    :host {
      display: inline-block;
      position: relative;
    }
    img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
    :host([loaded]) img {
      transition: opacity 2s linear;
      opacity: 1;
    }
  </style>
`;
