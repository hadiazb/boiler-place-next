import { ReactElement } from 'react'

// components
import { MainLayout, Typography } from '../../components'

export default function AboutPage() {
  return (
    <>
      <Typography variant="h1">About</Typography>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
