import { motion } from "framer-motion";

function ContactPage() {
    return (
        <div className="flex items-center justify-evenly max-h-full max-w-full w-full h-4/5">
            <motion.div className="flex flex-col items-center justify-z`"
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
                <h1 className=" text-lg md:text-5xl leading-loose"> Contact </h1>
            </motion.div>
        </div>
    )
}

export default ContactPage;