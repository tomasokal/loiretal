
export default function World()
{

    return <>

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <meshBasicMaterial color={'rgb(0, 255, 0)'} />
        </mesh>
    
    </>

}