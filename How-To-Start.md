# Setup instructions

## Start frontend
cd /frontend

* expo start
* i (start iOS-simulator) IMPORTANT: be sure that remote debugging is on. (CMD + D => Remote Debugging)

## Start backend
cd /backend

* npm run server
* npm run ngrok
* npm run inspect-traffic

--------------------------------

cd backend && npm run server
cd backend && npm run ngrok => (
   then go to utils.js and 
   replace https://XXXXXXXX.ngrok.io with 
   the CLI-GUIs       Forwarding       https://XXXXXXXX.ngrok.io
)

cd frontend && expo start