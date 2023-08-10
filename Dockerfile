FROM node:current-slim

ENV NODE_ENV production

WORKDIR /app

# Copy server files and install server dependencies
COPY ./package*.json ./
RUN npm ci --omit=dev

# Copy client files, install client dependencies, and build client
COPY ./client ./client
RUN cd client && npm ci --omit=dev && npm run build

# Copy remaining server
COPY ./server ./server

USER node

EXPOSE 3000

CMD npm start
