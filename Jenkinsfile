pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                // Stop containers and clear volume for fresh DB init
                sh 'docker-compose down -v'

                // Start containers in detached mode
                sh 'docker-compose up -d'

                // Wait for containers to initialize
                sh 'sleep 20'
            }
        }
    }
}
