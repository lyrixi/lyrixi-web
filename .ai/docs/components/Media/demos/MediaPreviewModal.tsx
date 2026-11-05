import React from 'react'
import { Page, Media } from 'lyrixi-web'

export default function MediaPreviewModalDemo() {
  return (
    <Page>
      <Page.Main>
        <Media.PreviewModal open={false} list={[]} />
      </Page.Main>
    </Page>
  )
}
