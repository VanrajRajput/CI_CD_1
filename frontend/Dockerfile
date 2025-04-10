WORKDIR /app

# Copy only the package.json and package-lock.json from src
COPY src/package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the frontend source code into the container
COPY src/ ./

# Build the app
RUN npm run build

# Install serve globally for running the built app
RUN npm install -g serve
