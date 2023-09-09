import React from "react";
import { BallCanvas } from "@/component/canvas";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/constants";



const Tech: React.FC = () => {
    return (
        <>

            <div className="text-gray-100 mb-4 text-center">
                <h3 className="text-4xl font-semibold">
                    Tech <span className="text-cyan-600">Stack</span>
                </h3>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </>
    );
};

const Wrappper = () => {
    return (
        <div>
            {/* Other content */}
            <SectionWrapper Component={Tech} idName="tech" />
            {/* Other content */}
        </div>
    );
};
export default Wrappper;
