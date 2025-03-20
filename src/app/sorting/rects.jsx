import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Rect from "./rect";

const Rects = ({ rects, speed = 1 }) => { // Default speed to 1 if not provided
    let margin = rects.length > 50 ? 1 : 5;

    return (
        <div className="flex justify-center items-end">
            <AnimatePresence>
                {rects.map((rect, rectidx) => (
                    <motion.div
                        key={rectidx}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: Math.max(speed / 1000, 0.1) }}  
                    >
                        <Rect marg={margin} rect={rect} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

export default Rects;
