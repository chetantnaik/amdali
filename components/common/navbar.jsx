import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return <div className={styles.header}>
        <span>
            <Link href="/" className={styles.headerlist}>Home</Link>
        </span>
        <span>
            <Link href="/gallery" className={styles.headerlist}>Gallery</Link>
        </span>
        <span>
            <Link href="/#sevas" className={styles.headerlist}>Sevas</Link>
        </span>
        <span>
            <Link href="/#faqs" className={styles.headerlist}>FAQ's</Link>
        </span>
    </div >
}