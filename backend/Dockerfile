FROM node:18
WORKDIR /backend
COPY package.json ./
COPY prisma ./prisma/ 
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run build
CMD [ "npm", "start" ]