FROM mysql:5.7.25
RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./schema.sql /docker-entrypoint-initdb.d
EXPOSE 3306

