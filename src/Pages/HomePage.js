import { motion } from "framer-motion";

function HomePage() {
    return (
        <div className="center">
            <div className="home-page">
                <motion.div className="title"
                    initial={{
                        x: -1200,
                    }}
                    animate={{
                        x: 0,
                    }}
                    exit={{
                        x: -1200,
                    }}
                    transition={{
                        duration: 1,
                    }}>
                    <h1> Ramy Gendy </h1>
                    <h3> Web/Software Developer </h3>
                </motion.div>

                <motion.img
                    initial={{
                        y: 1200,
                    }}
                    animate={{
                        y: 0,
                    }}
                    exit={{
                        y: 1200,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    class="profile-img"
                    src="./profile.png" />
            </div>
        </div>
    )
}

export default HomePage;