import React from 'react'
import { useEffect,useRef } from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

const Reveal = ({children, direction}) => {

  const ref = useRef();
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(()=>{
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div className='reveal' style={{position: "relative", overflow: "hidden"}}>
      <motion.div
      ref={ref}
      initial={direction}
      animate={mainControls}
      variants={{
        right: {
          x: 300,
          opacity: 0
        },
        left: {
          x: -300,
          opacity: 0
        },
        visible: {
          x: 0,
          opacity: 1
        },
        
      }}
      transition={{duration: 1}}
    >
      {children}
    </motion.div>
    </div>
  )
}

export default Reveal