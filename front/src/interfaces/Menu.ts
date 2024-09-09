import type { Component } from 'vue'

export type Menu = MenuItem | MenuDirectory

export interface MenuItem {
  label: string
  name: string
  type: 'item'
  icon?: Component
  favorite?: number
  permission?: string
}

export interface MenuDirectory {
  label: string
  content: Menu[]
  type: 'directory'
  isExpanded?: boolean
  permission?: string
}
