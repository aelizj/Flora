FROM      node:current-slim

ENV       DB mongodb://localhost:27017/floradb
ENV       AWS_JWT_SECRET_NAME flora/jwtSecret

# For development use
ENV       JWT_DEV_KEY VgvTPz56XxoWhx9ZavI1sNLs0333C71LWvQHqIEPERGKYrnt+yX9gJZqa6N49OKDyhJ/fJiCZh+5mRAMotq7IHvjgSUnbftLplH+9rXqIiqZpapf8ON/bvmIHHZ1VyB+iCvwr7jTnEgNuVR9d8kNBMBh5rVT7fyyW++ml9LrTzY=

WORKDIR   /app

COPY      ./logs ./logs

# Install MongoDB dependencies
RUN       echo "deb http://deb.debian.org/debian oldstable main" >> /etc/apt/sources.list
RUN       apt-get update && apt-cache search libssl && apt-get install -y wget gnupg lsb-release libssl1.1

# Add MongoDB official repo
RUN       wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | apt-key add -
RUN       echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/7.0 main" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
# Install MongoDB
RUN       apt-get update && apt-get install -y mongodb-org

# Create a MongoDB data directory
RUN       mkdir -p /data/db

# Copy server package files and install server dependencies
COPY      ./package*.json ./
RUN       npm ci --omit=dev

# Copy client files, install client dependencies, and build client
COPY      ./client ./client
RUN       cd client && npm ci --omit=dev && npm run build

# Copy remaining server files
COPY      ./server ./server

RUN       echo "lets force it to redo layers after this again"

# Copy startup script
COPY      ./scripts/startup.sh ./scripts/startup.sh
RUN       chmod +x ./scripts/startup.sh

RUN       chmod -R 777 /data/db

USER      node

EXPOSE    3000

CMD       ["./scripts/startup.sh"]
