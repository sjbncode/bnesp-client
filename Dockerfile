FROM node:7.6
RUN mkdir -p /home/Service 
WORKDIR /home/Service
Copy . /home/Service
RUN npm install
# replace this with your application's default port
EXPOSE 8010 8080

CMD ["npm","run","dev"]