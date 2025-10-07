# Use Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the files
COPY . .

# Install Python
RUN apt-get update && apt-get install -y python3

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
