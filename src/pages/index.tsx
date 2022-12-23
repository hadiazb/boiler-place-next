import { ReactElement } from 'react'

// components
import { MainLayout, ViewLayout, Typography } from '../components'

export default function HomePage() {
    return (
        <>
            <Typography variant="h1" typeFont="secondary">
                Home
            </Typography>
            <Typography variant="h2" color="danger" typeFont="primary">
                Esta componente no recibe prop className :(
            </Typography>
        </>
    )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    )
}
