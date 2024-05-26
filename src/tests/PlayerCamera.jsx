import { useFrame } from "@react-three/fiber"
import { useState } from "react"

export default function PlayerCamera()
{

    const [position, setPosition] = useState([0, 10, 10])

    return <>

        <CameraRig position={position} />
    
    </>

}

function CameraRig({ position })
{
    useFrame((state) => {
        state.camera.position.set(...position)
        state.camera.lookAt(0, 0, 0)
    })
}
