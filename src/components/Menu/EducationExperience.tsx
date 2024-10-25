
import eduImage from '../../../public/Mountains Wide Angle.jpg'
import Image from 'next/image'
import './menu.css';

interface Props{
    title: string;
}

export default function EducationExperience({title}: Props){

    return(
        <div id="div-id" className="ml-10 mt-28 mb-10 relative w-screen">
            <h1 className="noto-serif-display-900 text-5xl text-black bold pr-36">{title}</h1>
            <section id="image-container" className="mt-10 flex justify-start mr-24 space-x-10">
            <Image src={eduImage} width={400} height={400} alt={"mountain"} objectFit='cover'/>
            <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">Institute of Engineering and Management</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">I am pursuing B.Tech in CSE from IEM Kolkata</p>
                </span>
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">Orient Day School</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">I completed my Secondary and Higher Secondary from Orient Day School, Kolkata</p>
                </span>
            </section>
            <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">Generative AI</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">I am participating in a Generative AI Study Jam in University of Engineering and Management Google Developer Group.</p>
                </span>
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">Problem Solving</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">I solve dynamic problems using Python</p>
                </span>
            </section>
            </section>
        </div>
    )
}