import './interface.css'

import { useState } from 'react'

export default function Interface() {

    const [isPressed, setIsPressed] = useState(false)

    const handlePress = () => {
        setIsPressed(true)
    }

    const handleRelease = () => {
        setIsPressed(false)
    }

    return <>

        <div className="navigation-buttons">
            <button
                onMouseDown={handlePress}
                onMouseUp={handleRelease}
            >
                <img 
                    src={isPressed ? "assets/ui/buttonSquare_grey_pressed.png" : "assets/ui/buttonSquare_grey.png"}
                    alt="forward"
                />
            </button>
            <div className="horizontal-buttons">
                <button
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                >
                    <img 
                        src={isPressed ? "assets/ui/buttonSquare_grey_pressed.png" : "assets/ui/buttonSquare_grey.png"}
                        alt="forward"
                    />
                </button>
                <button
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                >
                    <img 
                        src={isPressed ? "assets/ui/buttonSquare_grey_pressed.png" : "assets/ui/buttonSquare_grey.png"}
                        alt="forward"
                    />
                </button>
            </div>
            <button
                onMouseDown={handlePress}
                onMouseUp={handleRelease}
            >
                <img 
                    src={isPressed ? "assets/ui/buttonSquare_grey_pressed.png" : "assets/ui/buttonSquare_grey.png"}
                    alt="forward"
                />
            </button>
        </div>
    
    </>

}