FROM mongo:latest

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="this is dockerfile of inspection's project for mongo part"

COPY init.js build.sh .

RUN chmod +x build.sh

ENTRYPOINT [ "./build.sh" ]