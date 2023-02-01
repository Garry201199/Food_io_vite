export const fadeIn = (direction) => {
    return {
      hidden: {
        y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          // type: 'linear',
          duration: 1,
          ease: [0.12, 0, 0.39, 0],
        },
      },
      exit:{
        opacity:0,
        scale:0,
      }

    };
  };

  export const variants={
    
    initial:{
      opacity :0,
      // scale:0,
      y:200
    },
    animate:{
      opacity :1,
      // scale:1,
      y:0,
      transition:{
        duration: 1,
         ease:[0.22,1, 0.36,1],
        //  delayChildren :3
      }
    },
    exit:{
      opacity:0,
      y:-200,
      transition:{
        duration:0.5,
        ease:[0.7 ,0 ,0.84 ,0]
      }
  
    }
  }

  