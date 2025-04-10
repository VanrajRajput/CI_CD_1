# Use Node Alpine as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend source files
COPY . .

# Build the app
RUN npm run build

# Install serve to serve built app
RUN npm install -g serve

# Expose desired port
EXPOSE 3000

# Serve the app
CMD ["serve", "-s", "dist", "-l", "3000"]
