FROM node:14-alpine as builder
ENV NODE_ENV=development \
    PORT=3000 

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm set progress=false && npm install
# Copy all files 
COPY . ./
EXPOSE $PORT
CMD ["yarn", "start"]
