import { ReactElement } from 'react'

// components
import { MainLayout, Typography } from '../../components'

export default function ContactPage() {
  return (
    <>
      <Typography variant="h1">Contact</Typography>
    </>
  )
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
