FROM node:21.5.0-slim

ENV HOSTNAME 0.0.0.0
ENV PORT 3000
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

RUN addgroup --system --gid 1001 maikschreiber
RUN adduser --system --uid 1001 maikschreiber

COPY --chown=maikschreiber:maikschreiber .next/standalone /app
COPY --chown=maikschreiber:maikschreiber .next/static /app/.next/static

USER maikschreiber
WORKDIR /app
CMD ["node", "server.js"]
