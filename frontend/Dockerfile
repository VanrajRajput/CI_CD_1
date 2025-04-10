WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build
RUN npm install -g serve
docker build -t vanrajsinh/react-app ./frontend
