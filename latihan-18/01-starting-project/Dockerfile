FROM node:15.13-alpine
WORKDIR /01-starting-project
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]