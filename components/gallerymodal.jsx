import Image from "next/image";
import { useState, useEffect } from "react";
import styles from './gallerymodal.module.css';

export default function GalleryModal(props) {
    const [showPrev,setShowPrev] = useState();
    const [showNext,setShowNext] = useState();
    const [initPosition, setInitPosition] = useState();
    const [finalPosition, setFinalPosition] = useState();
    const [moveDir, setMoveDir] = useState();

    function handleTouchStart(evt){
        //evt.preventDefault();
        setInitPosition([evt.nativeEvent.touches[0].clientX,evt.nativeEvent.touches[0].clientY]);
        //console.log("start: ",initPosition);
    }

    function handleTouchMove(evt){
        //setFinalPosition(evt.nativeEvent.touches[0].clientX, console.log("test"));
        //console.log("moved:",finalPosition);
        /*if(evt.nativeEvent.touches.length>0){

        }*/
        if(!initPosition || evt.nativeEvent.touches.length> 1 || (evt.nativeEvent.touches[0].clientY - initPosition[1])> 10 ){
            return
        }
        if((evt.nativeEvent.touches[0].clientX-initPosition[0])>20){
            setMoveDir("right");
        }else if((initPosition[0]-evt.nativeEvent.touches[0].clientX)>20){
            setMoveDir("left");
        }
    }

    /*useEffect(()=>{
        if(!moveDir){
            return;
        }
        //console.log(moveDir);
        if(moveDir == "left"){
            props.loadNext;
            console.log("next");
        }else{
            props.loadPrev;
            console.log("prev");
        }
        },[moveDir])*/

    function handleTouchEnd(evt){
        //evt.preventDefault();
        if(!moveDir){
            return;
        }
        if(moveDir == "left"){
            props.loadNext();
            //console.log("next");
        }else{
            props.loadPrev();
            //console.log("prev");
        }
        setInitPosition(undefined);
        setMoveDir(undefined);
    }

    /*useEffect(
        ()=>console.log("start: ",initPosition),[initPosition]
    )

    useEffect(
        ()=>console.log("moved:",finalPosition),[finalPosition]
    )*/

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
            <div className="modal-content" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                <Image src={props.imgsrc} style={{ objectFit: "contain" }} fill={true} alt="myimg" />
            </div>
            {/*<div id={props.imgcaption}>{props.imgcaption}</div>*/}
            {/*showNext && <span style={{position:"absolute", color:"white", top:"50%", right:20, zIndex:2, fontWeight:"bold",fontSize:"30px"}} onClick={props.loadNext}>&#10095;</span>*/}
            {showNext && <span className="arrows arrows-right" onClick={props.loadNext}>&#10095;</span>}
                
    </div>
}
