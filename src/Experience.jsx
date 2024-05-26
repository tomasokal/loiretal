import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import World from './tests/World'
import PlayerCamera from './tests/PlayerCamera'

export default function Experience()
{
    
    return <>

        <PlayerCamera />

        <World />
        <ambientLight intensity={0.5} />
        <OrbitControls />
    
    </>

}
