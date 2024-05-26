import { useState } from "react"
import { useSpring, animated } from "@react-spring/three"

export default function EnemyMob({position})
{

    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    const springProps = useSpring({ 
        scale: clicks < 2 ? [1, 1, 1] : [0.1, 0.1, 0.1],
        color: clicks < 2 ? 'rgb(0, 210, 255)' : 'rgb(255, 255, 255)',
    })

    return <>

        <animated.mesh scale={springProps.scale} position={position} onClick={handleClick}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={springProps.color} />
        </animated.mesh>
    
    </>

}