FROM node:latest

WORKDIR /usr/src/app

# Copy the rest of the source files into the image.
COPY . .

RUN npm install

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD node server.js
