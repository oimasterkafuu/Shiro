'use client'

import { useEffect } from 'react'

// import { captureException } from '@sentry/nextjs'

import { NormalContainer } from '~/components/layout/container/Normal'
import { StyledButton } from '~/components/ui/button'

// eslint-disable-next-line react/display-name
export default ({ error, reset }: any) => {
  useEffect(() => {
    console.error('error', error)
    // captureException(error)
  }, [error])

  return (
    <NormalContainer>
      <div className="flex min-h-[calc(100vh-10rem)] flex-col center">
        <h2 className="mb-5 text-center">
          <p>渲染页面时出现了错误</p>
          <p>
            多次出现错误请联系站长{' '}
            <a href="mailto:oimasterfake@icloud.com">oimasterkafuu</a>
            ，谢谢！
          </p>
        </h2>
        <StyledButton variant="primary" onClick={() => location.reload()}>
          刷新
        </StyledButton>
      </div>
    </NormalContainer>
  )
}
