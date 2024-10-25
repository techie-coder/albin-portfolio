export default function NavBar(){
    return(
        <div className="flex justify-between items-center align-center min-w-screen">
            <section className="text-black ml-24 mt-5 font-integralcf-bold text-2xl">Albin Mathew</section>
            <section className="text-black text-xl mr-10 mt-5 noto-serif-display-700">
                <a className="p-3" href='#'>Home</a>
                <a className="p-3" href='#projects'>Projects</a>
                <a className="p-3" href='#contact'>Contact</a>
            </section>
        </div>
    )
}