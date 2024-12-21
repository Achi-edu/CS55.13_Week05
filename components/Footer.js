import ToggleTheme from "./ToggleTheme";
import styles from '@/styles/Layout.module.scss';

export default function Footer() {
    return (
        <footer className={`right ${styles.footer}`}>
            <ToggleTheme/>
        </footer>
    );
}
