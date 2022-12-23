import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { Navbar } from '../..'

import { Theme, GlobalStyle } from '../../../assets/style'

// styles
import { StyledMainLayout, StyledMainLayoutCtr } from './mainLayout-styles'

export type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const theme = Theme()
    return (
        <>
            <Head>
                <title>Hugo - web</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <ThemeProvider theme={theme}>
                <GlobalStyle reset />
                <StyledMainLayout>
                    <StyledMainLayoutCtr>{children}</StyledMainLayoutCtr>
                </StyledMainLayout>
            </ThemeProvider>
        </>
    )
}

export default MainLayout
