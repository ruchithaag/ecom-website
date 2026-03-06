pipeline {

    agent { label 'slave_node' }

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/ruchithaag/ecom-website.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f devops-container || true
                docker run -d -p 8085:80 --name devops-container devops-app
                '''
            }
        }

    }
}