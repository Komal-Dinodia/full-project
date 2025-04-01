# Use an official Node.js runtime as the base image
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json first for caching dependencies
COPY package*.json /app/

# Install the frontend dependencies
RUN npm install

# Copy the rest of the frontend files into the container
COPY . /app/

# Build the frontend (React app) for production
RUN npm run build

# Expose the port the frontend will run on
EXPOSE 5003

# Serve the frontend using a simple static server
CMD ["npx", "serve", "build"]
