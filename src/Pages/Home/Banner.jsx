import React from 'react';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import imges1 from '../../assets/image/imge1.jpg'
import imges2 from '../../assets/image/imge2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={imges1}
                        animate={{ y: [50, 100 , 50] }}
                        transition={{duration : 10, repeat: Infinity}}
                        className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-blue-500 border-l-8 border-b-8 shadow-2xl w-72" />
                    <motion.img
                        src={imges2}
                        animate={{ x: [100, 150 , 100] }}
                        transition={{duration : 10, delay:5, repeat: Infinity}}
                        className="max-w-sm rounded-t-[50px] rounded-br-[50px] border-blue-500 border-l-8 border-b-8 w-72 shadow-2xl" />

                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold"> Latest <motion.span
                            animate={{ color: ['#147065', '#6e8d0d', '#e54225', '#f1c018'] }}
                            transition={{ duration: 1.5, delay: 1, ease: easeOut, repeat: Infinity }}
                        >Jobs </motion.span>
                        For Your!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;