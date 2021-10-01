import styles from '../styles/Footercover.module.css'


export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer__content}>
          <div className={styles.footer__left}>
            <a aria-label="Credits" href="https://twitter.com/pmndrs" target="_blank" rel="noreferrer">
              <div>
                <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#fff" d="M0 0h15v15H0z" />
                </svg>
              </div>
            </a>
          </div>
          <div className={styles.footer__center}>
            <a className="link" href="https://pmnd.rs/twitter" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a className="link" href="https://pmnd.rs/github" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="link" href="https://pmnd.rs/discord" target="_blank" rel="noreferrer">
              Discord
            </a>
          </div>
          <div className={styles.footer__right}>
            <a href="https://vercel.com?utm_source=pmndrs&utm_campaign=oss" target="_blank" rel="noreferrer">
              <div className="vercel">
                <svg width="18" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.78 0l8.779 15H0L8.78 0z" fill="#fff" />
                </svg>
                <span className={styles.vercel__title}>Powered by Vercel</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
