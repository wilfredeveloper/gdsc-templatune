import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`flex w-full justify-evenly items-center ${styles.footer}`}>

            <p>© 2021 Templatune. All rights reserved.</p>

            <div className={`flex items-center justify-center flex-col`}>
                <p className={`${styles.studio_tech_line} ${styles.paragraph_line}`}>PXUM STUDIO | PXUM TECH</p>
                <p className={`${styles.studio_tech_line} ${styles.paragraph_line}`}>POWERED BY PXUM TECH</p>
            </div>
            <div>
                <p className={`${styles.email_heading} text-gray-500`}>Email us on</p>
                <p className={`${styles.email}`}>pxumtech@gmail.com</p>
            </div>
        </footer>
    )
}