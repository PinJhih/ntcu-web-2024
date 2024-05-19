FROM node

WORKDIR /app
COPY . /app

RUN npm install
RUN mkdir -p data

EXPOSE 3000

CMD ["npm", "start"]
