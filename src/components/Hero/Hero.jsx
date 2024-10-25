
import gsap from 'gsap';
import SplitText from '../../../utils/SplitText3.min.js';
import { useEffect } from 'react';
import './hero.css';

export default function Hero(){

    useEffect(
        () => {
            const split = new SplitText('#header-text', {
                type: 'lines',
                linesClass: 'lineChildren',
            })

            const splitParent = new SplitText('#header-text', {
                type: 'lines',
                linesClass: 'lineParent',
            })

            gsap.to(split.lines, {
                duration: 1,
                y:0,
                opacity:1,
                stagger: 0.1,
                ease: 'power2'
            })
        }, [])


    return(
        <div data-scroll data-scroll-speed="0.5" className="flex justify-center items-center align-center mt-64 mr-40">
            <section className="ml-11 mt-14" id="header-text">
                <h1 className="text-9xl text-white font-integralcf-bold drop-shadow-xl text-right">PORTFOLIO</h1>
                <h2 className="text-9xl text-black font-integralcf-bold drop-shadow-xl">ALBIN MATHEW</h2>
            </section>
        </div>
    )
}