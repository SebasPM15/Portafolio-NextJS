import {motion} from "framer-motion"
//Variantes

const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }, 
}

//Calculate the reverse index for staggered delay
const reverseIndex = (index: number): number => {
    const totalSteps = 6; //Number of steps
    return totalSteps - index -1;
}

const Stairs = () => {
    return (
        <>
        {/* render 6 motion divs, each representing a step of the stairs
            
            Each div will have the same animation defined by the stairsAnimation object.
            The delay for each div is calulated dinamycally based on it's reversed index,
            creating a staggered effect with decreasing delay for each subsequent step.
            
            */}
        {[...Array(6)].map((_, index) => {
            return <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial="initial"
            animate = "animate" 
            exit="exit" 
            transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
            />
        })}
        </>
    )
}

export default Stairs;