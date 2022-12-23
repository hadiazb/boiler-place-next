import { ReactElement } from 'react'

// components
import { MainLayout, ViewLayout, Typography } from '../../components'

export default function ContactPage() {
    return (
        <>
            <Typography variant="h1" typeFont="secondary">
                Contact
            </Typography>
        </>
    )
}

ContactPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    )
}
