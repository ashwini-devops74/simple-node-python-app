# 🚀 Fresher DevOps Assignment

This repository contains my complete solution for the **Fresher DevOps Assignment**, covering Kubernetes architecture, CI/CD with Jenkins, Observability with Prometheus & Grafana, and Nginx reverse proxy setup.

---

## 📘 Overview

This project demonstrates practical knowledge of DevOps tools and workflows using:
- **Kubernetes (Minikube)** for container orchestration  
- **Jenkins** for CI/CD pipeline  
- **Prometheus & Grafana** for observability and monitoring  
- **Nginx** as a reverse proxy for web app routing  

Each part simulates a real-world scenario and is implemented step-by-step.

---

## ✅ Part 1: Kubernetes Architecture

### 📄 Description
- Explained the **Kubernetes architecture** with all major components:
  - **Master Node**: API Server, Controller Manager, Scheduler, etcd  
  - **Worker Node**: kubelet, kube-proxy, container runtime  
- Described how **Pods, Services, Deployments, and Namespaces** interact.

### 🖼 Deliverables
- `k8s_architecture.pdf` – Explanation document [k8s_architecture.pdf](k8s_architecture.pdf)
- `k8s_architecture_diagram.png` – Architecture diagram  [K8s_architecture_diagram.png](K8s_architecture_diagram.png)

### ⚙️ Tools Used
- Draw.io for architecture diagram  
- Overleaf for Documentation
---

## ✅ Part 2: CI/CD Pipeline with Jenkins

### 🧰 Project Description
This part automates the deployment of a **Python + Node.js** application into a **Kubernetes cluster** using a **Jenkins pipeline**.  

The Jenkins server runs as a container, builds and pushes Docker images to Docker Hub, and then deploys them on Minikube.

---

## 🏃 How to Run This Project

### 📦 Prerequisites
Make sure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/)  
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)  
- [kubectl](https://kubernetes.io/docs/tasks/tools/)  
- [Jenkins](https://www.jenkins.io/) (running inside Docker container)  
- [Git](https://git-scm.com/)  

### 💡 Challenges Faced
- **Issue**: Jenkins container couldn’t access Minikube’s kubeconfig  
  - **Fix**: Mounted host `.kube` folder into Jenkins container  
    ```bash
    -v C:\Users\<username>\.kube:/root/.kube:ro
    ```
- **Issue**: Permission errors when running `kubectl` inside Jenkins  
  - **Fix**: Used `jenkins` container with `-u root` and mounted docker.sock  

### 📸 Screenshots
- Successful build logs  
- Pod and deployment details (`kubectl get pods`, `kubectl get svc`)  

---

## ✅ Part 3: Observability with Prometheus & Grafana

### 🧰 Project
Deployed a Python app on **Heroku**, configured **Prometheus** to scrape metrics, and visualized data using **Grafana**.

### ⚙️ Steps
1. Deployed app on Heroku – [Live App Link](https://your-app.herokuapp.com)  
2. Configured `prometheus.yml` to scrape Heroku endpoint  
3. Imported Grafana dashboard using JSON export  
4. Visualized metrics such as request count and response time  

### 🧾 Files Included
- `prometheus.yml`  
- `grafana_dashboard.json`  
- `README_Observability.md`  

### 💡 Challenges Faced
- **Heroku Metrics Endpoint**: Needed to add `/metrics` route in Python app  
- **Prometheus Target Down**: Solved by exposing correct Heroku port (5000) and using proper job target URL.  
- **Grafana Connection**: Resolved CORS and connectivity issues by running all services on same network.  

---

## ✅ Part 4: Nginx Reverse Proxy

### 🧰 Project
Configured **Nginx** as a reverse proxy to forward traffic to the Python app.

### ⚙️ Steps
1. Created `nginx.conf` to reverse proxy to `app:5000`  
2. Wrote `Dockerfile` for Nginx  
3. Ran Nginx container to route external traffic  

```nginx
server {
    listen 80;
    location / {
        proxy_pass http://app:5000;
    }
}
