FROM node:6.2.2
RUN mkdir -p /code
WORKDIR /code 
ADD package.json .
RUN npm install 
ADD . ./
EXPOSE 3000
CMD ["node",  "app.js"]
