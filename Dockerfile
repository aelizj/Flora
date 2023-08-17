FROM      node:current-slim

ENV       NODE_ENV production

WORKDIR   /app

COPY      ./logs ./logs

# Copy server files and install server dependencies
COPY      ./package*.json ./
RUN       npm ci --omit=dev

# Copy client files, install client dependencies, and build client
COPY      ./client ./client
RUN       cd client && npm ci --omit=dev && npm run build

# Copy remaining server files
COPY      ./server ./server

# Copy startup script
COPY      ./scripts/startup.sh ./scripts/startup.sh
RUN       chmod +x ./scripts/startup.sh

USER      node

EXPOSE    3000
EXPOSE    5001

CMD      ["./scripts/startup.sh"]
