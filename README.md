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
- `k8s_architecture_diagram.png` – Architecture diagram  [k8s_architecture.pdf]([k8s_architecture_diagram.png](k8s_architecture_diagram.png))

### ⚙️ Tools Used
- Draw.io for architecture diagram  
- MS Word / Markdown for documentation  

### 🧩 Challenges Faced
- Understanding how internal communication happens between **API Server** and **kubelet**  
- Initially confused about **Pod networking** inside cluster, resolved by testing with `kubectl exec` and `curl` between pods.

---

## ✅ Part 2: CI/CD Pipeline with Jenkins

### 🧰 Project
Deployed a **Python application** to Kubernetes using a Jenkins CI/CD pipeline.

### ⚙️ Pipeline Stages
1. **Clone code** from GitHub  
2. **Build Docker image** using Dockerfile  
3. **Push image** to DockerHub  
4. **Deploy to Kubernetes (Minikube)**  
5. **(Optional)**: Auto rollback on failure  

### 🧾 Files Included
- `Jenkinsfile` – Declarative pipeline configuration  
- Sample app: `/app` directory  
- Kubernetes manifests: `/k8s` directory  

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
