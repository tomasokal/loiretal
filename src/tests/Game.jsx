import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Example JSON structure
const locations = {
  "locations": [
    {
      "id": 1,
      "name": "Gate",
      "position": { "x": 0, "y": 0, "z": 0 },
      "connections": { "right": 2, "up": 3 }
    },
    {
      "id": 2,
      "name": "Boathouse",
      "position": { "x": 5, "y": 0, "z": 10 },
      "items": [ "key" ],
      "connections": { "left": 1 }
    },
    {
      "id": 3,
      "name": "Door",
      "position": { "x": -5, "y": 0, "z": 10 },
      "connections": { "down": 1, "up": 4 }
    },
    {
      "id": 4,
      "name": "Main Gallery",
      "position": { "x": 10, "y": 0, "z": 20 },
      "connections": { "down": 3, "right": 5, "left": 6 }
    },
    {
      "id": 5,
      "name": "Service Room",
      "position": { "x": -10, "y": 0, "z": 20 },
      "items": [ "lantern" ],
      "connections": { "left": 4 }
    },
    {
      "id": 6,
      "name": "Stairs",
      "position": { "x": 15, "y": 0, "z": 30 },
      "connections": { "right": 4, "up": 7 }
    },
    {
      "id": 7,
      "name": "Lantern Room",
      "position": { "x": 20, "y": 10, "z": 40 },
      "items": [ "journal" ],
      "connections": { "down": 6 }
    }
  ]
};

const Game = () => {
    const [currentLocation, setCurrentLocation] = useState(locations.locations[0]);
    const [inventory, setInventory] = useState([]);
    const [messages, setMessages] = useState([]);
  
    const move = (direction) => {
      const nextLocationId = currentLocation.connections[direction];
      if (nextLocationId) {
        if (nextLocationId === 3 && !inventory.includes("key")) {
          setMessages(["You need the key to pass through the door."]);
          return;
        }
        if (nextLocationId === 7 && !inventory.includes("lantern")) {
          setMessages(["You need the lantern to go up the stairs."]);
          return;
        }
        const nextLocation = locations.locations.find(location => location.id === nextLocationId);
        setCurrentLocation(nextLocation);
        setMessages([]);
      } else {
        setMessages(["You can't go that way!"]);
      }
    };
  
    const takeItem = (item) => {
      setInventory([...inventory, item]);
      const updatedLocation = {
        ...currentLocation,
        items: currentLocation.items.filter(i => i !== item)
      };
      setCurrentLocation(updatedLocation);
  
      if (item === "journal") {
        setMessages(["Congratulations! You've taken the journal and won the game!"]);
      }
    };
  
    return (
      <div>
        <Canvas>
          <ambientLight />
          <OrbitControls />
          <pointLight position={[10, 10, 10]} />
          <mesh position={[currentLocation.position.x, currentLocation.position.y, currentLocation.position.z]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
            {/* <text position={[0, 1, 0]}>{currentLocation.name}</text> */}
          </mesh>
        </Canvas>
        <div className="controls">
          <button onClick={() => move('up')}>Up</button>
          <button onClick={() => move('left')}>Left</button>
          <button onClick={() => move('right')}>Right</button>
          <button onClick={() => move('down')}>Down</button>
        </div>
        <div>
          <h2>Current Location: {currentLocation.name}</h2>
          <p>Items in this room:</p>
          <ul>
            {currentLocation.items?.map(item => (
              <li key={item}>
                {item}
                <button onClick={() => takeItem(item)}>Take {item}</button>
              </li>
            ))}
          </ul>
          <p>Inventory:</p>
          <ul>
            {inventory.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
      </div>
    );
  };
  
  export default Game;
