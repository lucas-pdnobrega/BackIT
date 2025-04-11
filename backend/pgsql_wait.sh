#!/bin/sh

set -e

echo "On hold until PostgreSQL starts at port 5432..."

until nc -z postgres 5432; do
    echo "Waiting on Postgres..."
    sleep 1
done

echo "Postgres is avaliable. Running migrations."

npx prisma generate
npx prisma migrate deploy

#Start prisma
echo "Starting application."
yarn start:prod