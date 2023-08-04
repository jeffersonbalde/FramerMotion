'use client'

import { motion } from 'framer-motion'

const page = () => {

  const list = { hidden: { opacity: 0 } }
const item = { hidden: { x: -10, opacity: 0 } }

  return (
    <motion.div
      className='flex justify-center items-center flex-col '
    >
      <motion.div
        className='w-96 h-96 bg-slate-900 mt-40 '
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      ></motion.div>
      <motion.div
        className='w-96 h-96 bg-slate-900 mt-40 ' 
        // initial={{opacity: 0}}
        whileInView={{ opacity: 1 }}
      ></motion.div>
      <motion.div
        className='w-96 h-96 bg-slate-900 mt-40 '
        // initial={{opacity: 0}}
        whileInView={{ x: -100 }}
      ></motion.div>
      <motion.div
        className='w-96 h-96 bg-slate-900 mt-40 '
        // initial={{opacity: 0}}
        whileInView={{ x: -100 }}
        animate="item" variants={list}
      ></motion.div>
    </motion.div>
  )
}

export default page