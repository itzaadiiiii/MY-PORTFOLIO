FROM node:18.20.3-alpine

# Set the working directory
WORKDIR /app

# Copy local project files into the container
COPY . /app

# Set working directory to project folder
WORKDIR /app/project

# Install dependencies
RUN rm -rf node_modules package-lock.json && \
    npm install && \
    npm install vite --save-dev

# Expose Vite's default port
EXPOSE 5173

# Start Vite server with --host
CMD ["npm", "run", "dev", "--", "--host"]

