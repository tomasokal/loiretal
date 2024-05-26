import react from '@vitejs/plugin-react'

// const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    plugins:
    [
        react()
    ],
    root: 'src/',
    publicDir: "../public/",
    base: '/loiretal/',
    build:
    {
        outDir: '../docs',
        emptyOutDir: true,
        sourcemap: true
    }
}