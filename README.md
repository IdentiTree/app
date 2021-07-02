# frontend
Frontend Application Odyssey for the Hackathon


## Setup Local

### Backend
1. Start Mongo db Server with a) Docker or b) local mongodb installation.

```bash
docker-compose up -d
```

2. Copy env file
```bash
cd backend
cp .env.example .env
```

3. Start Node.js app (in the `/backend` folder)
```bash
npm install
npm run build
npm run watch
```

4. Start React app (in the `/frontend` folder)
```bash
npm install
npm run start
```



