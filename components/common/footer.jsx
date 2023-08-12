import styles from './footer.module.css';

export default function Footer() {
    return <div className={styles.footer}>
        <div className={styles.gridContainer}>
            <div className={styles.gridItems}>
                <h3>Festivals</h3>
                Ganesh Chaturthi<br />
                Deepavali<br />
            </div>
            <div className={styles.gridItems}>
                <h3>Reach Us At</h3>
                chetan.naik.t@gmail.com <br />
                +91 9923514280
            </div>
            <div className={styles.gridItems}>
                <h3>Find Us At</h3>
                Balerashi, Amdali, <br />
                Uttara Karnataka, Karnataka <br />
                581324
            </div>
        </div>
        <span><a href='https://pngtree.com/freepng/luxury-mandala-design_3751778.html' target='_blank'>png image from pngtree.com/</a></span>
    </div>
}