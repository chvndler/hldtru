import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>

        <Link href="/terms">
          <a>Terms & Conditions</a>
        </Link>

        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </footer>
    </>
  );
}
