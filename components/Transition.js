import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const animations = {
    initial: {
        opacity: 0,
        x: 100
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -100
    }
}

const Transition = ({ children }) => {
    const { asPath } = useRouter();

    return (
        <AnimatePresence
            exitBeforeEnter
        >
            <motion.div
                key={asPath}
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{duration: 0.8}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

// const Transition = ({ children }) => {
//     const { asPath } = useRouter();
// 
//     return (
//         <div className="effect-1">
//             <AnimatePresence
//                 exitBeforeEnter
//             >
//                 <motion.div
//                     key={asPath}
//                     variants={variants}
//                     animate="in"
//                     initial="out"
//                     exit="out"
//                 >
//                     {children}
//                 </motion.div>
//             </AnimatePresence>
//         </div>
//     )
// }

export default Transition