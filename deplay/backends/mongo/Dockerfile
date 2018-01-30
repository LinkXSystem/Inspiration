FROM mongo:latest

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="this is dockerfile of inspection's project for mongo part"

COPY init.js .

RUN /usr/local/bin/docker-entrypoint.sh

RUN mongo init.js

ENTRYPOINT [ "" ]