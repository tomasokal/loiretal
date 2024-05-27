import locations from './GameInfo/Nodes.json'

export default function World()
{

    console.log(locations)

    return <>

        <mesh 
            position={[0, 0, 0]}    
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>

        <mesh 
            position={[4, 0, 0]}    
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>

        <mesh 
            position={[0, 0, -4]}    
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>

        <mesh 
            position={[0, 0, -8]}    
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>

        <mesh 
            position={[4, 0, -8]}    
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>

        <mesh 
            position={[-4, 0, -8]}    
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>
    
        <mesh 
            position={[0, 4, -8]}    
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[2, 2]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>
    
    </>

}
