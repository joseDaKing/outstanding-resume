import React from "react";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
    closed: {
        opacity: 0,
        height: 0
    },
    opened: {
        opacity: 1,
        height: "auto"
    }
};

interface IDisclossureAnimationProps {
    isOpen: boolean;
}

export const DisclosureAnimation: React.FC<IDisclossureAnimationProps> = ({ isOpen, children }) => {

    return (
        <AnimatePresence>
            {isOpen &&
            <motion.div 
            initial="closed"
            animate="opened"
            exit="closed"
            variants={variants}
            style={{
                overflow: "hidden"
            }}>
                {children}
            </motion.div>}
        </AnimatePresence>
    );
}