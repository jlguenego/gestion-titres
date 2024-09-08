import type { ComponentOptions } from 'vue'
import { VueComponent as NotDefinedComponent } from '../markdown/_NotDefined.md'
import { VueComponent as WelcomeComponent } from '../markdown/Welcome.md'

export const menuDoc: { [text: string]: ComponentOptions } = {
  welcome: WelcomeComponent,
  not_defined: NotDefinedComponent,
}
