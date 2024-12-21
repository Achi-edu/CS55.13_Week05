import Link from 'next/link';
import styles from '@/styles/Layout.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/" className="logo" aria-label="Go to Home Page">Gamer Devs</Link>
            </div>
            <nav className={styles.right}>
                <ul className={styles.navList}>
                    <li><Link href="/"  aria-label="Go to Retromags" className="nav-link">Video Game Magazine
                        Archives</Link></li>
                </ul>
            </nav>
        </header>
    );
}
