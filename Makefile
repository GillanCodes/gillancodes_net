rserver:
	concurrently "cd ./server && tsc --watch" "nodemon ./dist/src/server.js"

rclient: 
	cd ./client && npm run dev

dev:
	concurrently "make rserver" "make rclient"
