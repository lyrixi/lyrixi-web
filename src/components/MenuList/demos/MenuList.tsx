import React from 'react'
import { Page, MenuList, Icons, type MenuListItem, type MenuListChangeOptions } from 'lyrixi-web'

const items: MenuListItem[] = [
  {
    id: 'sub1',
    name: 'Navigation One',
    iconSvg: Icons.FileText,
    children: [
      {
        id: 'g1',
        name: 'Item 1',
        type: 'group',
        children: [
          { id: '1', name: 'Option 1' },
          { id: '2', name: 'Option 2' }
        ]
      },
      {
        id: 'g2',
        name: 'Item 2',
        type: 'group',
        children: [
          { id: '3', name: 'Option 3' },
          { id: '4', name: 'Option 4' }
        ]
      }
    ]
  },
  {
    id: 'sub2',
    name: 'Navigation Two',
    iconSvg: Icons.FilterMenu,
    children: [
      { id: '5', name: 'Option 5' },
      { id: '6', name: 'Option 6' },
      {
        id: 'sub3',
        name: 'Submenu',
        children: [
          { id: '7', name: 'Option 7' },
          { id: '8', name: 'Option 8' }
        ]
      }
    ]
  },
  {
    id: 'sub4',
    name: 'Navigation Three',
    iconSvg: Icons.Config,
    children: [
      { id: '9', name: 'Option 9' },
      { id: '10', name: 'Option 10' },
      { id: '11', name: 'Option 11' },
      { id: '12', name: 'Option 12' }
    ]
  },
  {
    id: 'grp',
    name: 'Group',
    type: 'group',
    children: [
      { id: '13', name: 'Option 13' },
      { id: '14', name: 'Option 14' }
    ]
  }
]

export default function MenuListDemo() {
  const handleChange = (currentItem: MenuListItem, options: MenuListChangeOptions) => {
    console.log('change ', currentItem, options.action)
  }

  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <MenuList
          onChange={handleChange}
          style={{ width: 256 }}
          defaultOpenIds={['sub1']}
          items={items}
        />
      </Page.Main>
    </Page>
  )
}
