pipeline {
    agent any
    stages {
        stage('Git Pull') {
            steps {
                 git branch: 'main', url: 'https://github.com/ashwini-devops74/simple-node-python-app.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ashwiniconthub/sample-nodejs:latest .'
            }
        }
        stage('Push to Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'docker login -u $USER -p $PASS'
                    sh 'docker push ashwiniconthub/sample-nodejs:latest'
                }
            }
        }
        stage('Deploy to Minikube') {
            steps {
                sh 'kubectl apply -f deployment/deployment.yaml -n application'
                sh 'kubectl rollout status deployment/node-python-app -n application'
            }
        }
    }
}
