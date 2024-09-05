export type Menu = MenuItem | MenuDirectory

export interface MenuItem {
  label: string
  to: string
  type: 'item'
}

export interface MenuDirectory {
  label: string
  content: Menu[]
  type: 'directory'
  isExpanded?: boolean
}
