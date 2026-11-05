import React, { forwardRef, type Ref } from 'react'

import { ListAsync, type ListAsyncRef } from 'lyrixi-web'

import mainLoadingRender from './mainLoadingRender'
import type { MainProps } from './types'

// 普通列表
const Main = (
  { virtual, onLoad, onChange, loadData }: MainProps,
  ref: Ref<ListAsyncRef>
) => {
  return (
    <ListAsync
      ref={ref}
      className="lyrixi-list-pageName"
      virtual={virtual}
      loadingRender={mainLoadingRender}
      loadData={loadData}
      onLoad={onLoad}
      onChange={onChange}
    />
  )
}

export default forwardRef<ListAsyncRef, MainProps>(Main)
