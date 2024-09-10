import type { Directive } from 'vue'

export const vFocus: Directive<HTMLElement, void> = {
  mounted: (el) => el.focus(),
}
