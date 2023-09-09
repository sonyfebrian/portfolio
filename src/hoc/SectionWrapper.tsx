import { styles } from "./styles";
import { staggerContainer } from "@/utils/motion";

import { motion } from "framer-motion";

interface StarWrapperProps {
    Component: React.ComponentType;
    idName: string;
}

const StarWrapper: React.FC<StarWrapperProps> = ({ Component, idName }) => {
    return (
        <motion.section
            variants={staggerContainer(1, 0)} // Provide staggerChildren and delayChildren arguments here
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    );
};

export default StarWrapper;