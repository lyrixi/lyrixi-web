import React from 'react'
import { Page, Skeleton } from 'lyrixi-web'

export default function SkeletonAvatarDemo() {
  return (
    <Page>
      <Page.Main style={{ backgroundColor: 'white' }}>
        <Skeleton.Avatar animated />
      </Page.Main>
    </Page>
  )
}
