FROM node:14
WORKDIR /app

# Copy wait-for-it and make it executable
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

# Wait for DB, then start app (timeout increased to 30s)
CMD ["/wait-for-it.sh", "db:3306", "-t", "30", "--", "node", "index.js"]
