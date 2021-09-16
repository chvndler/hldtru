import styles from '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from "@chakra-ui/react"
import Cookies from "universal-cookie"
import consts from "/consts.js"
import App from 'next/app'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
