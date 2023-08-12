import Image from "next/image";
import styles from "./mainimg.module.css";

export default function Mainimg({ image,clickHandler }) {
    const classes = `${styles.mySlides} ${styles.fade}`;

    return <div className={classes} onClick={clickHandler}>
        <Image src={image} fill={true} alt="myimg" placeholder="blur" style={{objectFit: "cover"}}/>
        {/*style={{height: "50vw",objectFit: "cover",objectPosition: "center"}}*/}
    </div>
}