import styles from '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react";
import App from 'next/app';


function MyApp({ Component, pageProps }) {
	const theme = extendTheme({
	colors: {
		brand: {
			100: "#FFF",
			200: "#000",
			300: "#5AFF15",
			400: "#9D75CB"
		},
	},
  components: {
  	Button: {
	  	variants: {
		  	"hldtru": {
					bg: "#5AFF15",
					color: "#5AFF15",
				},
		  },
	  },
	},
})

  return (
	<ChakraProvider>
	  <Component {...pageProps} />
	</ChakraProvider>
  )
}


export default MyApp
