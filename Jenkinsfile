pipeline {
    agent {
        docker {
            image 'node:8.9.4-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm config set registry https://registry.npm.taobao.org'
                sh 'cd frontend'
                sh 'npm install'
            }
        }
        stage('Deliver') {
           steps {
                sh 'ls -sh'
                sh 'npm start'
                // input message: 'Finished using the web site? (Click "Proceed" to continue)'
           }
        }
    }
}