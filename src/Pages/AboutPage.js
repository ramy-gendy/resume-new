import { motion } from "framer-motion";

function AboutPage() {
    return (
        <motion.div className="center" initial={{
            opacity: 0,
        }} animate={{
            opacity: 1,
        }} exit={{
            opactiy: 0
        }}>
            <h1> Hello About </h1>
        </motion.div>
    )
}

export default AboutPage;