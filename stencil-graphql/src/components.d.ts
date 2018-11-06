/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core'

import '@ionic/core'
import 'ionicons'

export namespace Components {
  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    AppHome: Components.AppHome
    AppRoot: Components.AppRoot
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes
    'app-root': Components.AppRootAttributes
  }

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement
    new (): HTMLAppHomeElement
  }

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement
    new (): HTMLAppRootElement
  }

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-root': HTMLAppRootElement
  }

  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}
}
