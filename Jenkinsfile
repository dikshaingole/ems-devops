pipeline {
    agent any
    environment {
        DOCKERHUB = credentials('dockerhub-id')
    }
    stages {
        stage('Checkout') {
			steps {
				git branch: 'main',
				url: 'https://github.com/PranikNikose/ems-devops.git',
				credentialsId: 'GitHub-Creds-PranikN'
			}
		}
        stage('Backend Unit Tests') {
            steps {
                bat 'cd backend && mvn test'
            }
        }
        stage('Build Backend') {
            steps {
                bat 'cd backend && mvn clean install'
            }
        }
        stage('Frontend Unit Tests') {
			steps {
				bat 'cd frontend && npm install'
			}
		}
        stage('Build Frontend') {
            steps {
                bat 'cd frontend && npx ng build '
            }
        }
        stage('Docker Build & Push') {
            steps {
                bat 'docker build -t %DOCKERHUB_USR%/ems-backend:latest backend/.'
                bat 'docker build -t %DOCKERHUB_USR%/ems-frontend:latest frontend/.'
                bat "docker login -u %DOCKERHUB_USR% -p %DOCKERHUB_PSW%"
                bat 'docker push %DOCKERHUB_USR%/ems-backend:latest'
                bat 'docker push %DOCKERHUB_USR%/ems-frontend:latest'
                bat 'docker logout'
            }
        }
    }
    post {
        success { echo '✅ Pipeline completed successfully!' }
        failure { echo '❌ Pipeline failed. Check errors!' }
    }
}
