FROM node:18-slim AS base


FROM base AS builder

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install -g pnpm

WORKDIR /app

COPY . .
RUN rm -rf node_modules
RUN pnpm --frozen-lockfile install
RUN pnpm build


FROM base AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

EXPOSE 3000

LABEL autoheal true
HEALTHCHECK --start-period=30s --interval=10s CMD curl -f "http://localhost:${PORT}" || exit 1

RUN apt update && apt install -y curl

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

WORKDIR /app

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]
