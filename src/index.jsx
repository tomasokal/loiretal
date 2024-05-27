import './style.css'

import { StrictMode, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'

import Experience from './Experience'
import Interface from './tests/Interface/Interface'
import Game from './tests/Game'

const root = createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Game />
    </StrictMode>
)