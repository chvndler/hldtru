import Head from 'next/head';
import Footer from '../components/Footer';

export default function Page({ children, pageTitle, ...props }) {
  return (
    <div className="layout">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
