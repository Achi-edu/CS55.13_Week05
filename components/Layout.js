import Header from './Header';
import Footer from './Footer';
import styles from '@/styles/Layout.module.scss';

export default function Layout({ children }) {
    return (
        <div className={styles.layoutContainer}>
            <Header />
                {children}
            <Footer />
        </div>
    );
}
