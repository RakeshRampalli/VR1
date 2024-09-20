pipeline {
   agent any
   environment {
       SONARQUBE_URL = 'http://192.168.9.103:9000' // Replace localhost with correct IP if needed
       SONARQUBE_CREDENTIALS = 'sonar-token'   // Jenkins stored token ID
   }
   stages {
       stage('Clone repository') {
           steps {
               git branch: 'main', url: 'https://github.com/RakeshRampalli/VR1.git'
           }
       }
       stage('Code Analysis - SonarQube') {
           steps {
               script {
                   withSonarQubeEnv('SonarQube') {
                       sh "/opt/sonar-scanner/bin/sonar-scanner -X -Dsonar.projectKey=VR1 -Dsonar.sources=. -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.login=${SONARQUBE_CREDENTIALS}"
                   }
               }
           }
       }
       stage('Build Project') {
           steps {
               sh 'mvn clean install'
           }
       }
       stage('Quality Gate') {
           steps {
               script {
                   timeout(time: 5, unit: 'MINUTES') {
                       waitForQualityGate abortPipeline: true
                   }
               }
           }
       }
   }
}
