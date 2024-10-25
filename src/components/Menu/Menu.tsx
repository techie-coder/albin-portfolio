import { useState } from "react";
import EducationExperience from "./EducationExperience";
import PublicationAwards from "./PublicationAwards";
import ProjectsMembership from './ProjectsMembership';
import ResearchEvents from "./ResearchEvents";
import PostersCourses from './PostersCourses';
import Contact from "./Contact";
import './menu.css';

export default function Menu() {
    const [title, setTitle] = useState('Education and Experience');

    const listElements = [
        'Education and Experience',
        'Publications and Awards',
        'Projects and Memberships',
        'Research and Events',
        'Posters and Courses'
    ];

    const renderContent = () => {
        switch (title) {
            case 'Education and Experience':
                return <EducationExperience title={title}/>;
            case 'Publications and Awards':
                return <PublicationAwards title={title}/>;
            case 'Projects and Memberships':
                return <ProjectsMembership title={title}/>;
            case 'Research and Events':
                return <ResearchEvents title={title}/>;
            case 'Posters and Courses':
                return <PostersCourses title={title}/>;
            default:
                return null;
        }
    };

    return (
        <div className="relative z-0">
            <span className="absolute z-10 h-[90vh] w-52 inset-y-0 right-0 mr-2 text-center rounded-lg">
                <ul className="z-99 space-y-5 text-right mt-[50%] text-2xl font-integralcf-bold">
                    {listElements.map((item, index) => (
                        <li
                            key={index}
                            className="pr-2 border-t-2 text-black hover:text-white cursor-pointer"
                            onClick={() => setTitle(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </span>
            <div className="content-area min-h-[80vh]">
                {renderContent()}
            </div>
            <Contact />
        </div>
    );
}
