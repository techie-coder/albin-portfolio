import eduImage from '../../../public/Mountain Cliff Person.jpg'
import Image from 'next/image'

export default function PublicationAwards(props){

    const title = props.title;

    return(
        <div id="div-id" className="ml-10 mt-28 mb-10 relative w-screen">
        <h1 className="noto-serif-display-900 text-5xl text-black bold pr-36">{title}</h1>
        <section id="image-container" className="mt-10 flex justify-start mr-24 space-x-16">
        <Image src={eduImage} width={400} height={400} alt={"mountain"} objectFit='cover'/>
        <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
            <span>
                <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">AI Based Transport Recommendation System</h2>
                <p className="text-xl mt-3">This paper presents an AI-based transport system designed to enhance urban mobility and reduce congestion. Leveraging machine learning algorithms, the system optimizes route planning, predicts traffic patterns, and adapts to real-time conditions. By integrating various modes of transport—such as buses, trains, and ride-sharing—it promotes seamless connectivity and improves user experience.</p>
            </span>
        </section>
        <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
            <span>
                <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">Smart City Innovation Award</h2>
                <p className="text-2xl mt-3">Recognized for excellence in enhancing urban transport efficiency through AI integration</p>
            </span>
        </section>
        </section>
    </div>
    )
}