# Stage 1: Build-Stage
FROM oven/bun:1.2.7 AS build

WORKDIR /app

# For layer caching we optimize: install deps first 
COPY bun.lock .
COPY package.json .

# Install deps
RUN bun install

# copy the rest of sourcecode
COPY . .

# Build with bun
RUN bun run build

# Stage 2: Production-Stage
# Alpine bc of smaller image size 90mb vs 38mb
FROM oven/bun:1.2.7-alpine 

#set production env 
ENV NODE_ENV=production
EXPOSE 3000

# Set current work dirctory
WORKDIR /app

# Copy from build to . (current workdir)
COPY --from=build /app/dist/index.js .

ENTRYPOINT [ "bun", "/app/index.js" ]