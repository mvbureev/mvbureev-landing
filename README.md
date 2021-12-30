<a href="https://mvbureev.tech">mvbureev.tech</a>

- ⚡ **Next.js** — The React Framework
- 🔥 **next-seo** — Manage SEO easily
- 💡 **SASS** — css
- 📏 **ESLint** — Pluggable JavaScript linter
- 💖 **Prettier** — Opinionated Code Formatter
- 🖌 **Renovate** — Dependency update tool
- 🗂 **Absolute import** — Import folders and files using the `@` prefix

## 🚀 Getting started

Run the following commands inside the project folder:

1. `yarn`
2. `yarn dev`

To view the project open `http://localhost:3000`

## 📦 CI/CD

#### Configure your vps.
- Open the ports in the firewall: __TCP 22, TCP 80, TCP 443, TCP 2375, TCP 2376, TCP 2377, TCP 3000, TCP 7946, UDP 4789, UDP 7946__.
Install docker.
- Create volume for gitlab-runner:
```bash
docker volume create gitlab-runner-config
```
- Run gitlab-runner via docker:
```bash
docker run -d --name gitlab-runner --restart always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v gitlab-runner-config:/etc/gitlab-runner \
    gitlab/gitlab-runner:alpine
```
- Register the runner:
```bash
docker run --rm -it -v gitlab-runner-config:/etc/gitlab-runner gitlab/gitlab-runner:alpine register
```
(https://docs.gitlab.com/runner/register/index.html#docker).
- Don't forget to include your __tags__ when registering! And also set the same tags in `gitlab.ci.yml`.
- Set runner executor =__'docker__.
- On your vps, login as root:
```shell
sudo su
```
- Edit the config for gitlab runner:
```shell
nano /var/lib/docker/volumes/gitlab-runner-config/_data/config.toml
```
- You need to add 2 items to the config:
```toml
     privileged = true
     volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock"]
```
- To make it look something like:
```toml
concurrent = 1
check_interval = 0

[session_server]
   session_timeout = 1800

[[runners]]
   name = "mvbureev.tech"
   url = "https://gitlab.com/"
   token = "{{YOUR_TOKEN}}"
   executor = "docker"
   [runners.custom_build_dir]
   [runners.cache]
     [runners.cache.s3]
     [runners.cache.gcs]
     [runners.cache.azure]
   [runners.docker]
     tls_verify = false
     image = "docker:stable"
     privileged = true
     disable_entrypoint_overwrite = false
     oom_kill_disable = false
     disable_cache = false
     volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock"]
     shm_size = 0
```
Ready!

Documentation: https://docs.gitlab.com/runner/install/docker.html

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

## ❤️ Gratitude

This project is based on the [jkytoela/next-startd template](https://github.com/jkytoela/next-startd)

