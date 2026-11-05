import React from 'react'
import { Bridge, Button, Card, Page, Toast } from 'lyrixi-web'

export default function BridgeDemo() {
  return (
    <Page title="Bridge (Web)">
      <Card title="getLocation">
        <Button
          onClick={() => {
            Bridge.getLocation({
              onSuccess: (res) => {
                Toast.open({ content: JSON.stringify(res.data) })
              },
              onError: (res) => {
                Toast.open({ content: res.message || 'error' })
              }
            })
          }}
        >
          获取位置
        </Button>
      </Card>
      <Card title="openLocation">
        <Button
          onClick={() => {
            Bridge.openLocation({
              to: {
                latitude: 39.909187,
                longitude: 116.397451,
                name: '示例坐标'
              }
            })
          }}
        >
          打开地图
        </Button>
      </Card>
    </Page>
  )
}
