import React from 'react'
import { Page, Media } from 'lyrixi-web'

export default function MediaListDemo() {
  return (
    <Page>
      <Page.Main>
        <Media.List list={[]} />
      </Page.Main>
    </Page>
  )
}
