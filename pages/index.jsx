// index.jsx
import { useEffect, useRef, useState } from 'react';
import { ReactDOM } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Mainimg from '../components/mainimg';
import mainimgstyles from '../components/mainimg.module.css';
import Sevas from '../components/sevas';
import FAQS from '../components/faqs';

import img1 from '../public/images/front/1.jpg';
import img2 from '../public/images/front/2.jpg';
import img3 from '../public/images/front/3.jpg';
import img4 from '../public/images/front/4.jpg';
import img5 from '../public/images/front/5.jpg';
import img6 from '../public/images/front/6.jpg';

/*function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}*/

export default function HomePage() {

    //const [likes, setLikes] = useState(0);
    const [runSlideshow, setRunSlideshow] = useState(true);
    //const [slideIndex, setSlideIndex] = useState(0);
    let slideIndex = 0;
    //const [vIndex, setVIndex] = useState(0);
    //let vIndex = 0;
    const vIndex = useRef(-1);
    const slideContainer = useRef();
    const dotContainer = useRef();
    //const = ReactDOM.findDOMNode(Layout).getElementsByClassName('mySlides') // Returns the elements
    function imgClickHandler(){
        if(runSlideshow){
            setRunSlideshow(false);
            console.log("tried false")
        }else{
            setRunSlideshow(true);
            console.log("tried true")
        }
    }
    /*function handleClick() {
        setLikes(likes + 1);
    }*/

    /*function setSlideIndex(){
        slideIndex + 1;
    }*/

    /*useEffect(() => {
        //let domElems = document.getElementsByClassName("mySlides");
        //showSlides(domElems);
        //setTimeout(showSlides(domElems), 2000); // Change image every 2 seconds
        //setTimeout(showSlides, 2000); // Change image every 2 seconds
        //showSlides();
        let myIntv = setInterval(setVisibility, 2000);
        return () => clearInterval(myIntv);
    }, []);

    

    function setVisibility() {
        let slides = [...slideContainer.current.children];
        let dots = [...dotContainer.current.children];
        if (vIndex.current > slides.length) {
            vIndex.current = 0;
        }
        for (let i = 0; i < slides.length; i++) {
            if (i == vIndex.current) {
                slides[i].style.display = "block";
                let dotsClass = `${mainimgstyles.dot} ${mainimgstyles.active}`;
                dots[i].className = dotsClass;
            } else {
                slides[i].style.display = "none";
                dots[i].className = `${mainimgstyles.dot}`;
            }
        }

        //last
        //let oldVal = vIndex
        vIndex.current = vIndex.current + 1;
    }*/

    useEffect(() => {
        if(runSlideshow){
            setVisibility();
            let myIntv = setInterval(setVisibility, 2000);
            return () => clearInterval(myIntv);

        }else{
            pauseVisibility()
        }
        
    }, [runSlideshow]);

    function setVisibility() {
        let slides = [...slideContainer.current.children];
        let dots = [...dotContainer.current.children];
        //console.log(vIndex.current);
        //if (vIndex.current > slides.length - 1) {
        if (vIndex.current > slides.length - 1 || vIndex.current < 0) {
            vIndex.current = 0;
        }
        for (let i = 0; i < slides.length; i++) {
            if (i == vIndex.current) {
                slides[i].style.display = "block";
                let dotsClass = `${mainimgstyles.dot} ${mainimgstyles.active}`;
                dots[i].className = dotsClass;
            } else {
                slides[i].style.display = "none";
                dots[i].className = `${mainimgstyles.dot}`;
            }
        }
        vIndex.current = vIndex.current + 1;
    }

    function pauseVisibility(){
        let slides = [...slideContainer.current.children];
        let dots = [...dotContainer.current.children];
        //console.log(vIndex.current);
        vIndex.current = vIndex.current - 1;
        if (vIndex.current > slides.length - 1) {
            vIndex.current = 0;
        }
        for (let i = 0; i < slides.length; i++) {
            if (i == vIndex.current) {
                slides[i].style.display = "block";
                let dotsClass = `${mainimgstyles.dot} ${mainimgstyles.active}`;
                dots[i].className = dotsClass;
            } else {
                slides[i].style.display = "none";
                dots[i].className = `${mainimgstyles.dot}`;
            }
        }
        vIndex.current = vIndex.current + 1;
    }

    function showSlides() {
        let i;

        //console.log(slides);
        //let slides = document.getElementsByClassName("mySlides");
        //let slides = slideContainer.getElementsByClassName('mySlides') // Returns the elements
        let slides = [...slideContainer.current.children];
        /*let dots = document.getElementsByClassName("dot");*/
        let dots = [...dotContainer.current.children];
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        //setSlideIndex(slideIndex + 1);
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            //dots[i].className = dots[i].className.replace(" active", "");
            dots[i].className = dots[i].className = `${mainimgstyles.dot}`;
        }
        slides[slideIndex - 1].style.display = "block";
        let dotsClass = `${mainimgstyles.dot} ${mainimgstyles.active}`;
        //dots[slideIndex - 1].className += " active";
        dots[slideIndex - 1].className = dotsClass;
        let tmout = setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    return (
        <>

            <Head>
                <title>Ashta Siddhivinayaka Temple</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!runSlideshow && <div className={mainimgstyles.play} onClick={()=>{setRunSlideshow(true)}}></div>}
            <div className={mainimgstyles.slideshow_container} ref={slideContainer}>
                {/*<Mainimg image="/images/front/1.jpg" clickHandler={imgClickHandler}/>
                <Mainimg image="/images/front/2.jpg" clickHandler={imgClickHandler}/>
                <Mainimg image="/images/front/3.jpg" clickHandler={imgClickHandler}/>
                <Mainimg image="/images/front/4.jpg" clickHandler={imgClickHandler}/>
                <Mainimg image="/images/front/5.jpg" clickHandler={imgClickHandler}/>
                <Mainimg image="/images/front/6.jpg" clickHandler={imgClickHandler}/>*/}
                <Mainimg image={img1} clickHandler={imgClickHandler}/>
                <Mainimg image={img2} clickHandler={imgClickHandler}/>
                <Mainimg image={img3} clickHandler={imgClickHandler}/>
                <Mainimg image={img4} clickHandler={imgClickHandler}/>
                <Mainimg image={img5} clickHandler={imgClickHandler}/>
                <Mainimg image={img6} clickHandler={imgClickHandler}/>
            </div>

            <div className={mainimgstyles.dotDiv} ref={dotContainer}>
                <span className={mainimgstyles.dot}></span>
                <span className={mainimgstyles.dot}></span>
                <span className={mainimgstyles.dot}></span>
                <span className={mainimgstyles.dot}></span>
                <span className={mainimgstyles.dot}></span>
                <span className={mainimgstyles.dot}></span>
            </div>

            <Layout>



                <div id="sevas">
                    <Sevas />
                </div>
                <div id="faqs" >

                    <FAQS />
                </div>
            </Layout>
        </>
    );
}
