# frontend
Frontend Application Odyssey for the Hackathon


DEMO: https://identitree-app.herokuapp.com/

[Landingpage/Docs](https://identitree.github.io/app/) 


## Setup Local

### Backend
1. Start Mongo db Server with a) Docker or b) local mongodb installation.

```bash
docker-compose up -d
```

2. Copy env file
```bash
cd backend
cp .env.example ~/src/.env
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

## Development

You can just run the backend with `npm run dev`if you have `nodemon` and `ts-node`installed globaly.

```bash
npm i -g nodemon
npm i -g ts-node
npm run dev 
```

