import { github } from "@/assets";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";


interface Tag {
    name: string;
    color: string;
}

interface ProjectCardProps {
    name: string;
    description: string;
    tags: Tag[];
    image: string;
    source_code_link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                />

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src={github}
                            alt="source code"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </div>
    );
};




const Works: React.FC = () => {
    return (
        <>

            <div className="text-gray-100 mb-4 text-center">
                <h3 className="text-4xl font-semibold">
                    Pro<span className="text-cyan-600">jects</span>
                </h3>
                <p className="mt-3 text-secondary text-center text-[17px]  leading-[30px]">
                    Following projects showcase my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to live demos in it. It reflects my ability to solve complex
                    problems, work with different technologies, and manage projects
                    effectively.
                </p>
            </div>

            <div className="mt-20 flex flex-wrap gap-4">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} {...project} />
                ))}
            </div>
        </>
    );
};

const WrappperWork = () => {
    return (
        <div>
            {/* Other content */}
            <SectionWrapper Component={Works} idName="project" />
            {/* Other content */}
        </div>
    );
};

export default WrappperWork;