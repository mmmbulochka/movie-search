import '../styles/globals.css'
import Header from '../components/header'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron } from '/home/aleksandra/projects/movie/styletron.js'

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      {/*<Header/>*/}
      <Component {...pageProps} />
    </StyletronProvider>
  );
}

export default MyApp
