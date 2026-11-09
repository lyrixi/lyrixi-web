import React from 'react'

import type { ComponentType, SVGProps } from 'react'

import { Page, Card, MenuGrid, Icon, Badge, Icons, LocaleUtil, Toast } from 'lyrixi-web'

type MenuGridDemoItem = {
  id: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  name: string
  isNew?: boolean
  unreadCount?: number
}

export default function MenuGridDemo() {
  const locale = LocaleUtil.locale

  const list: MenuGridDemoItem[] = [
    { id: 'album', icon: Icons.FileImage, name: '我的相册' },
    { id: 'star', icon: Icons.StarFill, name: '赞 / 收藏' },
    { id: 'history', icon: Icons.Reloadtime, name: '浏览记录' },
    { id: 'draft', icon: Icons.FolderColor, name: '草稿箱' },
    { id: 'wallet', icon: Icons.FilePack, name: '我的钱包', unreadCount: 3 },
    { id: 'order', icon: Icons.FileText, name: '我的订单', unreadCount: 12 },
    { id: 'creator', icon: Icons.Config, name: '创作中心', isNew: true },
    { id: 'ad', icon: Icons.FilterMenu, name: '广告中心', isNew: true }
  ]

  const _badgeRender = (item: MenuGridDemoItem) => {
    if (item.unreadCount) {
      return <Badge count={item.unreadCount} />
    }
    if (item.isNew) {
      return <Badge />
    }
    return null
  }

  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Main style={{ margin: '0' }}>
            <MenuGrid style={{ padding: '10px' }}>
              {list.map((item) => {
                const title = locale(item.name)
                const badge = _badgeRender(item)
                return (
                  <MenuGrid.Item
                    key={item.id}
                    span={6}
                    icon={<Icon svg={item.icon} size="l" />}
                    title={title}
                    badge={badge}
                    onClick={() => {
                      console.log(item)
                    }}
                  />
                )
              })}
            </MenuGrid>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
