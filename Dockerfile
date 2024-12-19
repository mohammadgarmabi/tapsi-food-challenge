FROM node:20

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY dist /app/dist

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "preview"] 