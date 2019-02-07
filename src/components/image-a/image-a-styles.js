import { html } from '@polymer/lit-element';

export const imageAStyles = html`
  <style>
    :host {
      position: relative;
      display: inline-block;
    }
    .picture {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 0;
    }
    .picture--ful-res {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 0;
    }
    .picture__img {
      width: 100%;
      height: 100%;
    }
    .picture__img--ful-res {
      object-fit: cover;
    }
    :host([loaded]) .picture--ful-res {
      transition: opacity 2s linear;
      opacity: 1;
    }
  </style>
`;
