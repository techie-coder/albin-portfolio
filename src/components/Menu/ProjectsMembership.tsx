
import eduImage from '../../../public/Railway Mountain Houses.jpg'
import Image from 'next/image'

export default function EducationExperience(props){

    const title = props.title;


    return(
        <div className="ml-10 mt-28 mb-10 relative w-screen">
            <h1 className="noto-serif-display-900 text-5xl text-black bold pr-36">{title}</h1>
            <section id="image-container" className="mt-10 flex justify-start mr-24 space-x-10">
            <Image src={eduImage} width={400} height={400} alt={"mountain"} objectFit='cover'/>
            <section id="projects" className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">SmartBus</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">Smart Bus is an AI-powered app that recommends optimal bus routes based on real-time traffic data, user preferences, and historical patterns. By enhancing travel efficiency and user experience, it empowers commuters to make informed decisions, reducing wait times and improving overall satisfaction with public transport.</p>
                </span>
            </section>
            <section className="noto-serif-display-400 ml-3 mt-3 flex flex-col w-80 space-y-14">
                <span>
                    <h2 className="text-4xl font-integralcf-bold drop-shadow-sm">UEMCON</h2>
                    <p className="text-2xl mt-3 drop-shadow-sm">I am an active member of Conclave of Nations, UEM Kolkata Club where I participate in various debates and exciting group discussions</p>
                </span>
            </section>
            </section>
        </div>
    )
}