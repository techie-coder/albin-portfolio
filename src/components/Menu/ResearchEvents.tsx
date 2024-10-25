
import eduImage from '../../../public/Forest Sunrise Scenic View.jpg'
import Image from 'next/image'

export default function ResearchEvents(props){

    const title = props.title;


    return(
        <div id="div-id" className="ml-10 mt-28 mb-10 relative w-screen">
            <h1 className="noto-serif-display-900 text-5xl text-black bold pr-36">{title}</h1>
            <section id="image-container" className="mt-10 flex justify-start mr-24 space-x-10">
            <Image src={eduImage} width={400} height={400} alt={"mountain"} objectFit='cover'/>
            <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">Deep Learning to predict transport routes</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">Smart Bus is an AI-powered app that recommends optimal bus routes based on real-time traffic data, user preferences, and historical patterns. By enhancing travel efficiency and user experience, it empowers commuters to make informed decisions, reducing wait times and improving overall satisfaction with public transport.</p>
                </span>
            </section>
            <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">DriveBlaze Hackathon</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">Built SmartBus App and got the award for being Seconds Runner's Up</p>
                </span>
            </section>
            </section>
        </div>
    )
}