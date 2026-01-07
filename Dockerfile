# Use Node.js version 20 running on Alpine Linux (a very small, lightweight OS)
FROM node:20-alpine

# Set the working directory inside the container to /app
# All future commands will run in this folder
WORKDIR /app

# Copy package.json and package-lock.json first
# We do this before copying the rest of the code so Docker can cache the installed dependencies
COPY package*.json ./

# Install the project dependencies (like React, Vite, etc.)
RUN npm install

# Now copy all the rest of your project files into the container
COPY . .

# Tell Docker that the container listens on port 5173 (Vite's default port)
EXPOSE 5173

# The command to run when the container starts
# "npm run dev" starts the development server
# "--host 0.0.0.0" allows access from outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
