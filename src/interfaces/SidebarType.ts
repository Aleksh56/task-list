export type ItemType = {
  key: string
  icon: React.ReactNode
  children: ItemType[] | null
  label: string | string[]
  type: string
}
