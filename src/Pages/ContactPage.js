import { motion } from "framer-motion";

function ContactPage() {
    return (
        <motion.div className="center" initial={{
            opacity: 0,
        }} animate={{
            opacity: 1,
        }} exit={{
            opactiy: 0
        }}>
            <h1> Hello Contact </h1>
        </motion.div>
    )
}

export default ContactPage;