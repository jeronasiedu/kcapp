import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import Layout from '../components/layout'
import '../styles/globals.css'
import { MantineProvider } from '@mantine/core'
function MyApp({ Component, pageProps }) {
  const styles = {
    global: (props) => ({
      body: {
        // fontFamily: 'raleway, sans-serif',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('#f5f6fa', '#010106')(props),
        // lineHeight: 'base',
      },
    }),
  }
  const theme = extendTheme({ styles })
  return (
    <MantineProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </MantineProvider>
  )
}

export default MyApp
