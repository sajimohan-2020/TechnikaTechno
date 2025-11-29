# Use an alpine node because of small size
FROM node:20-alpine
ARG PUBLIC_APIURL=${PUBLIC_APIURL}
ENV PUBLIC_APIURL=${PUBLIC_APIURL}
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json
COPY package-lock.json package.json ./
# Install app dependencies using PNPM
RUN npm i 
# Copy the application code 
COPY . .
# Build the TypeScript code
RUN npm run build

# Expose the app
ENV PORT 80
EXPOSE 80
# Start the application
CMD ["npm", "start"]