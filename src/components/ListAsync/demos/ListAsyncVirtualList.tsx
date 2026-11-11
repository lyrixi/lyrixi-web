import React, { useRef, useState } from 'react'
import {
  Icons,
  Page,
  ListAsync,
  FooterBar,
  type ListAsyncRef,
  type ListAsyncItem,
  type ListAsyncViewItem
} from 'lyrixi-web'
import listData from './listData'

export default function ListAsyncVirtualListDemo() {
  const mainRef = useRef<ListAsyncRef>(null)
  const [value, setValue] = useState<Record<string, unknown> | Record<string, unknown>[] | null>(
    null
  )

  function handleScrollToLocation(id: string) {
    mainRef.current?.scrollToLocation?.({ id })
  }

  return (
    <Page>
      <ListAsync
        ref={mainRef}
        itemLayout="vertical"
        value={value}
        virtual={{
          getItemHeight: (item: ListAsyncItem) => {
            if (item.type === 'group') {
              return 53
            }
            return 80
          }
        }}
        loadData={() =>
          Promise.resolve({
            status: 'noMore',
            message: '没有更多了',
            data: { list: listData }
          })
        }
        formatViewItem={(item: ListAsyncItem): ListAsyncViewItem => {
          if (item.type === 'group') {
            return item
          }
          return {
            ...item,
            avatarSvg: Icons.FileImage,
            description: (
              <div>
                <p>Customer Description1</p>
                <p>Customer Description2</p>
              </div>
            ),
            // content: 'Customer Content',
            arrowVisible: true
          } as ListAsyncViewItem
        }}
        onChange={(v) => setValue(v)}
        onItemVisibleChange={(item) => {
          console.log('onItemVisibleChange', item)
        }}
        checkable
        allowClear
      />
      <Page.Footer>
        <FooterBar>
          <FooterBar.Button block variant="filled" onClick={() => handleScrollToLocation('1')}>
            滚动到第 1 项
          </FooterBar.Button>
          <FooterBar.Button block variant="filled" onClick={() => handleScrollToLocation('20')}>
            滚动到第 20 项
          </FooterBar.Button>
          <FooterBar.Button
            block
            variant="solid"
            color="primary"
            onClick={() => handleScrollToLocation('40')}
          >
            滚动到第 40 项
          </FooterBar.Button>
        </FooterBar>
      </Page.Footer>
    </Page>
  )
}
