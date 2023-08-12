import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './gallerymodal.module.css';

export default function GalleryModal(props) {
    const [showPrev,setShowPrev] = useState();
    const [showNext,setShowNext] = useState();
    useEffect(()=>{
        if(props.imgIndex<=0){
            setShowPrev(false);
        }else{
            setShowPrev(true);
        }
    },[props.imgIndex]);

    useEffect(()=>{
        if(props.imgIndex>=props.imgArrLen-1){
            setShowNext(false);
        }else{
            setShowNext(true);
        }
    },[props.imgIndex]);

    return <div id="myModal" className="modal">
        <span className="close" onClick={props.closeHandler}>&times;</span>
        
            {/*showPrev && <span style={{position:"absolute", color:"white", top:"50%", left:20, zIndex:2, fontWeight:"bold",fontSize:"30px"}} onClick={props.loadPrev}>&#10094;</span>*/}
            {showPrev && <span className="arrows arrows-left" onClick={props.loadPrev}>&#10094;</span>}
            <div className="modal-content">
                <Image src={props.imgsrc} style={{ objectFit: "contain" }} fill={true} alt="myimg" />
            </div>
            {/*<div id={props.imgcaption}>{props.imgcaption}</div>*/}
            {/*showNext && <span style={{position:"absolute", color:"white", top:"50%", right:20, zIndex:2, fontWeight:"bold",fontSize:"30px"}} onClick={props.loadNext}>&#10095;</span>*/}
            {showNext && <span className="arrows arrows-right" onClick={props.loadNext}>&#10095;</span>}
                
    </div>
}