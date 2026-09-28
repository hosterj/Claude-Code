import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// 배포(build) 때만 GitHub Pages 경로(/Claude-Code/)를 쓰고, 개발 서버는 / 그대로 둡니다.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Claude-Code/' : '/',
}))
