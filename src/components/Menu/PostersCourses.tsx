import eduImage from '../../../public/Curved Road Time Lapse.jpg'
import Image from 'next/image'
import './menu.css';

interface Props{
    title: string;
}

export default function ResearchEvents({title}:Props){


    return(
        <div id="div-id" className="ml-10 mt-28 mb-10 relative w-screen">
            <h1 className="noto-serif-display-900 text-5xl text-black bold pr-36">{title}</h1>
            <section id="image-container" className="mt-10 flex justify-start mr-24 space-x-10">
            <Image src={eduImage} width={400} height={400} alt={"mountain"} objectFit='cover'/>
            <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">CS105: Web Development</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">CS 105 introduces students to the fundamentals of web development, covering HTML, CSS, and JavaScript. Students learn to create interactive and responsive websites, emphasizing best practices and user experience. Projects encourage hands-on application of skills in real-world scenarios.</p>
                </span>
            </section>
            <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">AI In Everyday Applications</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">This presentation explores how artificial intelligence enhances daily life, from personal assistants to smart home devices. It highlights practical use cases, examining the impact of AI on convenience, efficiency, and decision-making, while considering ethical implications and future trends in everyday technology.</p>
                </span>
            </section>
            </section>
        </div>
    )
}