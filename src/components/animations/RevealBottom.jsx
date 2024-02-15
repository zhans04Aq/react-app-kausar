import React from 'react'
import { useEffect,useRef } from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

const RevealBottom = ({children}) => {

  const ref = useRef();
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(()=>{
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <motion.div
      className='reveal'
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {
          y: 300,
          opacity: 0
        },
        visible: {
          y: 0,
          opacity: 1
        },
        
      }}
      transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  )
}

export default RevealBottom