# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Cypress dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port used by Cypress (default is 8080)
EXPOSE 8080

# Run Cypress tests in headless mode when the container starts
CMD ["npm", "run"]
