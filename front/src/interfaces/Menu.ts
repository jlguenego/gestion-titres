import type { Component } from 'vue'

export type Menu = MenuItem | MenuDirectory

export interface MenuItem {
  label: string
  name: string
  type: 'item'
  icon?: Component
  favorite?: number
  authz?: string
}

export interface MenuDirectory {
  label: string
  content: Menu[]
  type: 'directory'
  isExpanded?: boolean
  authz?: string
}
