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


## 🧩 Prerequisites

Ensure the following tools are installed on your system:

| Tool | Purpose | Command to Check |
|------|----------|-----------------|
| **Docker Desktop** | Container runtime | `docker --version` |
| **Minikube** | Local Kubernetes cluster | `minikube version` |
| **Kubectl** | Kubernetes CLI | `kubectl version --client` |
| **Git** | Version control | `git --version` |
| **Jenkins** | CI/CD automation server | `docker ps` |

✅ **Tip:** Open **Docker Desktop** and ensure it is **running** before proceeding.

---

## 🧪 Step 1: Create and Start Minikube Cluster

### 💻 Command:
    ```sh
    minikube start --driver=docker
    kubectl get nodes
    ---
### ✅ Expected Output:
