## React-19 Setup with vite:

### Install react with vite:

```bash
npm create vite@latest my-app -- --template react
# OR
npm create vite@latest
npm install
npm run dev
```

### install Tailwind CSS using vite:

#### 1. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

#### 2. Configure vite.config.ts file

```bash
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

#### 3. Import Tailwindcss in CSS file

```bash
@import "tailwindcss";
```

### Install React Router v7

```bash
npm i react-router
```

### Install React Icons

```bash
npm i react-icons
```

### json server configuration in local-server

```bash
npx json-server --watch data.json --port 5000
```

## 🚀 About Me

I'm a Frontend developer...

[Github Link](https://github.com/sanjibchanda/react-19)
