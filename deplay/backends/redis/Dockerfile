FROM redis:latest

LABEL author="linkasde_system@163.com"
LABEL version="1.0.0"
LABEL desecribe="redis's dockerfile"

COPY build.sh redis.conf /

RUN chmod +x build.sh

ENTRYPOINT [ "./build.sh" ]