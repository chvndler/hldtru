import styles from '../styles/globals.css'
/* ensure all pages have Bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from "universal-cookie"
import consts from "/consts.js"
import App from 'next/app'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const cookies = new Cookies(appContext.ctx.req.headers.cookie);
  const password = cookies.get(consts.SiteReadCookie) ?? '';

  if (password === 'truth') {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp
