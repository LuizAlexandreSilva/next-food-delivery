import ThemeContainer from "../contexts/theme/ThemeContainer"
import AppProvider from "../hooks"

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </AppProvider>
  )
}

export default MyApp
