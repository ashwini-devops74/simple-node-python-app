# Fresher DevOps Assignment

This repository contains my complete solution for the **Fresher DevOps Assignment**, covering Kubernetes architecture, CI/CD with Jenkins, Observability with Prometheus & Grafana, and Nginx reverse proxy setup.

---

## Overview

This project demonstrates practical knowledge of DevOps tools and workflows using:
- **Kubernetes (Minikube)** for container orchestration  
- **Jenkins** for CI/CD pipeline  
- **Prometheus & Grafana** for observability and monitoring  
- **Nginx** as a reverse proxy for web app routing  

Each part simulates a real-world scenario and is implemented step-by-step.

---

## Task 1: Kubernetes Architecture

### 📄 Description
- Explained the **Kubernetes architecture** with all major components:
  - **Master Node**: API Server, Controller Manager, Scheduler, etcd  
  - **Worker Node**: kubelet, kube-proxy, container runtime  
- Described how **Pods, Services, Deployments, and Namespaces** interact.

### Deliverables
- [k8s_architecture.pdf](k8s_architecture.pdf) – Explanation document 
- [K8s_architecture_diagram.png](K8s_architecture_diagram.png) – Architecture diagram  

### Tools Used
- Draw.io for architecture diagram  
- Overleaf for Documentation
---

## Part 2: CI/CD Pipeline with Jenkins

### Project Description
- This part automates the deployment of a **Python + Node.js** application into a **Kubernetes cluster** using a **Jenkins pipeline**.  
- The Jenkins server runs as a container, builds and pushes Docker images to Docker Hub, and then deploys them on Minikube.

### How to run this application on minikube and automate the deployment with Jenkins. 

#### Prerequisites

Ensure the following tools are installed on your system:

| Tool | Purpose | Command to Check |
|------|----------|-----------------|
| **Docker Desktop** | Container runtime | `docker --version` |
| **Minikube** | Local Kubernetes cluster | `minikube version` |
| **Kubectl** | Kubernetes CLI | `kubectl version --client` |
| **Git** | Version control | `git --version` |
| **Jenkins** | CI/CD automation server | `docker ps` |

✅ **Tip:** Open **Docker Desktop** and ensure it is **running** before proceeding.

#### Steps for deployment and automation.

* Create a minikube cluster and ensure the cluster is created by running the below commands.
```
minikube start driver="Docker"
minikube status
```

Apply the deployment files available in the  here.
kubectl apply -f ./deloyment
Ensure the pods are running and service can reachable.
To enable automation install jenkins in docker using below command.
Once installed configure fileline with the groovy script availe here.
Ensure the docker hub credentials are available to push the imaged to docker hub.
build the pipeline and ensure the pipeline complete the below stages.
