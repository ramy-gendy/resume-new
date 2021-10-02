import { motion } from "framer-motion";

function HomePage() {
    return (
        <div className="grid sm:grid-cols-2 items-center place-center max-h-full max-w-full w-full h-4/5 bg-header-background bg-contain">
            <motion.div className="grid items-center justify-center"
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
                <h1 className="text-5xl text-center md:text-6xl leading-loose"> Ramy Gendy </h1>
                <h3 className="text-4xl text-center md:text-5xl"> Full-stack Web Developer </h3>
            </motion.div>

            <div className="grid justify-center place-items-center">
                <motion.img
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="rounded-full w-8/12 h-full sm:w-10/12"
                    src="./profile.png"
                />
            </div>
        </div>
    )
}

export default HomePage;