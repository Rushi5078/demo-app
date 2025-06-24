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
                // Stop containers and remove volumes so DB resets
                sh 'docker-compose down -v'
                
                // Start containers in detached mode
                sh 'docker-compose up -d'
                
                // Optional: wait for DB initialization
                sh 'sleep 20'
            }
        }
    }
}
