export type Menu = MenuItem | MenuDirectory

export interface MenuItem {
  label: string
  name: string
  type: 'item'
  icon?: unknown
  favorite?: number
}

export interface MenuDirectory {
  label: string
  content: Menu[]
  type: 'directory'
  isExpanded?: boolean
}
