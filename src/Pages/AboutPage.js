import { motion } from "framer-motion";

function AboutPage() {
    return (
        <div className="flex py-40 px-48 max-h-full max-w-full w-full h-4/5">
            <motion.div className="flex flex-col`"
                initial={{
                    x: -1500,
                }}
                animate={{
                    x: 0,
                }}
                exit={{
                    x: -1500,
                }}
                transition={{
                    duration: 1,
                }}>
                <h1 className=" text-lg md:text-5xl leading-loose"> Technologies </h1>
            </motion.div>
        </div>
    )
}

export default AboutPage;