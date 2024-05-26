import { SpriteAnimator } from "@react-three/drei";

export default function SpriteTest() {

    return (

        <SpriteAnimator
            position={[1, 1, 1]}
            startFrame={0}
            autoPlay={true}
            loop={true}
            scale={1}
            textureImageURL={'./sprites/flame/flame.png'}
            textureDataURL={'./sprites/flame/flame.json'}
            alphaTest={0.001}
            asSprite={true}
        />

    )


}