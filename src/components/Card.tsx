import Image from "next/image"
import albin from '../../public/albinmathew.png';

export default function Card(){

    const navList = ['Home', 'About', 'Education', 'Experience', 'Publications', 'Awards', 'Projects', 'Membership', 'Research', 'Events', 'Posters', 'Courses', 'Contact']

    return(
        <div data-scroll data-scroll-speed="0.3" className="flex flex-row min-h-screen justify-center items-center scroll-pb-0">
                <section className="bg-crimson min-h-96 z-0 mt-14 items-center align-center drop-shadow-md">
                <section className='absolute z-99 ml-3 mt-16 text-xl noto-serif-display-700'>
                <ul>
                        {navList.map((item, index) => (<li key={index}><a href={"#"+item.toLowerCase()}>{item}</a></li>))}
                </ul>
                </section>
                <section className='z-10'>
                <Image
                    src={albin}
                    width={550}
                    height={550}
                    alt={"albin"}
                    />
                    </section>
                </section>
            </div>
    )
}