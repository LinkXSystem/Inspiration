### 部署

> 说明

```
# 注意如果你需要修改部署方式或部署文件，才需要执行以下命令
git checkout origin/deplay
```

> 目录

* frontend：前端的 Dockerfile 构建文件存储文件夹
* jenkins：jenkins 的 CI/CD 脚本
* backends: 基础设施的 Dockerfile 和 服务器的 Dockerfile

> jenkinks

```
mkdir /jenkins/

docker run -d  \
  --restart=always \
  --rm -u root \
  -p 8080:8080 \
  -v /jenkins/jenkins_home:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /jenkins/:/home \
  jenkinsci/blueocean
```
