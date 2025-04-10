# Use the official node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React (Vite) app
RUN npm run build

# Use serve to serve the build folder
RUN npm install -g serve

# Expose the port you want the app to run on (optional, useful in Docker Compose)
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3000"]
