import { ReactElement } from 'react'

// components
import { MainLayout, DefaultLayout, Typography } from '../components'

export default function HomePage() {
  return (
    <>
      <Typography variant="h1">Home</Typography>

      <Typography variant="h2" color="danger">
        Esta es una prueba
      </Typography>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DefaultLayout>{page}</DefaultLayout>
    </MainLayout>
  )
}
