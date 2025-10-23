# 💬 Whop – Real-Time Messenger Platform


## 🗝️ Key Features

- ✅ Authentication with Secure Cookies
- 🔌 Real-Time Messaging via WebSocket (Socket.io)
- 💬 Create One-on-One or Group Chats
- 👥 Join & Leave Rooms in Real-Time
- 🟢 Online / Offline User Presence
- 💬 Reply to Specific Messages
- ⚡ Real-Time Last Message Updates
- 🤖 Whop AI – Built-in Chat Intelligence
- 📁 File Upload with Cloudinary Integration
- 🌗 Light & Dark Mode
- 📱 Fully Responsive UI
- 🎨 Styled with **Tailwind v4** + **Shadcn/UI**
- 🧩 Built with **Node.js**, **MongoDB**, **React**, and **TypeScript**
- 🚀 Deployment Ready


## 🛠️ Install & Run

Quick steps to get the project running locally (Windows / WSL / macOS / Linux).

Prerequisites:

- Node.js v18+ and npm (or pnpm/yarn) installed
- MongoDB running locally or a connection string
- (Optional) Cloudinary account for file uploads

1) Backend

- Open a terminal and go to the backend folder:

```bash
cd backend
```

- Install dependencies:

```bash
npm install
```

- Create a `.env` file in `backend` (see `src/config/env.config.ts` for expected keys) and set up your MongoDB URI, JWT secret, Cloudinary keys, etc.

- Run in development (uses nodemon + ts-node):

```bash
npm run dev
```

- Build for production and start:

```bash
npm run build
npm start
```

2) Client

- Open a new terminal and go to the client folder:

```bash
cd client
```

- Install dependencies:

```bash
npm install
```

- Run the dev server (Vite):

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

3) Notes

- By default the client expects the backend API/socket server to be available at the address configured in `client/src/lib/axios-client.ts` and the socket URL in `client/src/hooks/use-socket.ts` — update those if your backend runs on a different host/port.
- If you use a different package manager (pnpm or yarn) replace `npm install` / `npm run` accordingly.
- For deployment, build both sides and serve the `client/dist` from a static host or integrate with the backend `dist` server.



