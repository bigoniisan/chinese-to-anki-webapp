# Use a lightweight Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files (excluding node_modules via .dockerignore)
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Run Vite dev server with hot reloading
CMD ["npm", "run", "dev", "--", "--host"]
