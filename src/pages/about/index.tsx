import { ReactElement } from 'react'

// components
import { MainLayout, ViewLayout, Typography } from '../../components'

export default function AboutPage() {
    return (
        <>
            <Typography variant="h1" typeFont="secondary">
                About
            </Typography>
        </>
    )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    )
}
