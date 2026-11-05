import React from 'react'
import { Page, Skeleton } from 'lyrixi-web'

export default function SkeletonTitleDemo() {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Title animated />
      </Page.Main>
    </Page>
  )
}
