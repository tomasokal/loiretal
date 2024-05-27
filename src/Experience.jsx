import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import World from './tests/World'
import PlayerCamera from './tests/PlayerCamera'

export default function Experience()
{

    // What we are tracking
    // Inventory
    // Room
    // Room Events
    // Global Events
    
    return <>

        {/* <PlayerCamera /> */}

        <World />
        <ambientLight intensity={0.5} />
        <OrbitControls />
    
    </>

}
