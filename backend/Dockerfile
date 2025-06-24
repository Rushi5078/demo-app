FROM node:14
WORKDIR /app

# Copy wait-for-it script and give execute permission
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

# Wait for MySQL on 'db:3306' before starting node app
CMD ["/wait-for-it.sh", "db:3306", "--", "node", "index.js"]
