FROM jenkins/jenkins:lts

USER root

# install docker client and curl
RUN apt-get update && \
    apt-get install -y docker.io curl ca-certificates && \
    apt-get clean

# install kubectl
RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && \
    install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl && rm kubectl

USER jenkins
