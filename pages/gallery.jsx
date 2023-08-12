import Head from "next/head";
import Image from "next/image";
import GalleryModal from "../components/gallerymodal";
import { useState } from "react";

const imagesArr = [{
    id:0,
    src:"/images/gallery/1.jpg",
    caption:"Ganapathi"
},{
    id:1,
    src:"/images/gallery/2.jpg",
    caption:"Ganapathi"
},{
    id:2,
    src:"/images/gallery/3.jpg",
    caption:"Nandi"
},{
    id:3,
    src:"/images/gallery/4.jpg",
    caption:"Mahadev"
},{
    id:4,
    src:"/images/gallery/5.jpg",
    caption:"Kali Devi"
},{
    id:5,
    src:"/images/gallery/6.jpg",
    caption:"Gayatri Devi"
},{
    id:6,
    src:"/images/gallery/7.jpg",
    caption:"Gayatri Devi"
},{
    id:7,
    src:"/images/gallery/8.jpg",
    caption:"Trishul"
},{
    id:8,
    src:"/images/gallery/9.jpg",
    caption:"Ganapathi"
},{
    id:9,
    src:"/images/gallery/10.jpg",
    caption:"Durga Devi"
},{
    id:10,
    src:"/images/gallery/11.jpg",
    caption:"Ganapathi"
}];

export default function Gallery() {
    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const [imgSrc,setImgSource] = useState("");
    const [imgIndex,setImgIndex] = useState();
    const [allowPrev,setAllowPrev] = useState(true);
    const [allowNext,setAllowNext] = useState(true);
    //let imgSrc;
    let imgCaption;
    function displayImg(evt) {
        evt.preventDefault();
        /*console.log(evt);
        setModalImg(evt.target.srcset);*/
        setShowModal(true);
        let imgId = evt.currentTarget.id;
        
        imagesArr.map((imgElm)=>{
            if(imgElm.id == imgId){
                //imgSrc = imgElm.src;
                setImgIndex(imgElm.id);//added new
                setImgSource(imgElm.src);
                imgCaption = imgElm.caption;
            }
        })
    };

    function loadNxtImg(){ //added new ---solve issues with index increasing even if end is reached
        console.log("next");
        let currIndex = imgIndex + 1;
        if(currIndex >=imagesArr.length){
            console.log("exceeded index");
        }else{
            setImgIndex(currIndex);
            imagesArr.map((imgElm)=>{
                if(imgElm.id == currIndex){
                    setImgSource(imgElm.src);
                }
            })
        }
        
    }

    function loadPrevImg(){ //added new ---solve issues with index increasing even if end is reached
        console.log("previous");
        let currIndex = imgIndex - 1;
        if (currIndex<=-1){
            console.log("preceeded index");
        }else{
            setImgIndex(currIndex);
            imagesArr.map((imgElm)=>{
                if(imgElm.id == currIndex){
                    setImgSource(imgElm.src);
                }
            })
        }       
    }
    /*function destroyModal() {
        setShowModal(false);
    };*/
    function modalCloseHandler(){
        setShowModal(false);
    }
    return <div>
        <Head>
            <title>Gallery: Ashta Siddhivinayaka Temple</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*<div onClick={displayImg} id="/images/Ganapathi.jpg" style={{width:300, height:300}}>
            <Image src="/images/Ganapathi.jpg" width={300} height={300} alt="Ganapathi" />
        </div>*/}

        <div className="gallery-thumbnails">
        {imagesArr.map((elem)=>{
            return (<div onClick={displayImg} id={elem.id} className="gallery-img-container" key={elem.id}>
            <Image src={elem.src} width={150} height={150} alt={elem.caption}/>
            <div className="gallery-img-captions">{elem.caption}</div>
        </div>)
        })}
        </div>

        

        {/* {showModal && <div id="myModal" className="modal">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <div className="modal-content">
                <Image src={modalImg} style={{ objectFit: "contain" }} fill={true} alt="myimg" />

            </div>

            <div id="caption"></div>
        </div>} */}
        {showModal && <GalleryModal imgsrc={imgSrc} imgcaption={imgCaption} closeHandler={modalCloseHandler} loadPrev={loadPrevImg} loadNext={loadNxtImg} imgIndex={imgIndex} imgArrLen={imagesArr.length}/>}
    </div>
}