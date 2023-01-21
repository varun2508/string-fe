import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    out: {
        opacity: 0,
        x: 40,
        transition: {
            duration: 0.75
        }
    },
    in: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            delay: 0.5
        }
    }
}

const Transition = ({ children }) => {
    const { asPath } = useRouter();

    return (
        <div className="effect-1">
            <AnimatePresence
                exitBeforeEnter
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="in"
                    initial="out"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
};

export default Transition;