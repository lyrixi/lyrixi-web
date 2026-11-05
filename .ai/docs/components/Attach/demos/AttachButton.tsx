import React from 'react'
import { Page, Attach } from 'lyrixi-web'

export default function AttachButtonDemo() {
  return (
    <Page>
      <Page.Main>
        <Attach.Button
          className="demo-attach-button"
          style={{}}
          uploadingRender={({ uploadingType }) => <span>{uploadingType}</span>}
        />
      </Page.Main>
    </Page>
  )
}
