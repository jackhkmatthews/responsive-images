import { html } from '@polymer/lit-element';

export const imageDStyles = html`
  <style>
    :host {
      position: relative;
      display: inline-block;
      overflow: hidden;
    }
    ::slotted(picture) {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 0;
      filter: blur(80px);
    }

    ::slotted(img) {
      width: 100%;
      height: 100%;
    }

    .image {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 0;
      object-fit: cover;
    }

    :host([loaded]) .image {
      transition: opacity 2s linear;
      opacity: 1;
    }
  </style>
`;
