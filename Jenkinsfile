pipeline {
   agent any
   environment {
       // Set environment variables
       SONARQUBE_URL = 'http://localhost:9000'
       SONARQUBE_CREDENTIALS = 'sonar-token' // You get this from Jenkins credentials
   }
   stages {
       stage('Clone repository') {
           steps {
               // Checkout the GitHub repository
               git branch: 'main', url: 'https://github.com/RakeshRampalli/VR1.git'
           }
       }
       stage('Code Analysis - SonarQube') {
           steps {
               script {
                   // Run SonarQube analysis
                   withSonarQubeEnv('SonarQube') { // Use the name of the SonarQube instance you added in Jenkins
                       sh "sonar-scanner -Dsonar.projectKey=VR1 -Dsonar.sources=. -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.login=${SONARQUBE_CREDENTIALS}"
                   }
               }
           }
       }
       stage('Build Project') {
           steps {
               // Example build step (adjust according to your project)
               sh './gradlew build' // If it's a Gradle project, or adjust for Maven, NPM, etc.
           }
       }
       stage('Quality Gate') {
           steps {
               script {
                   // Wait for SonarQube quality gate result
                   timeout(time: 5, unit: 'MINUTES') {
                       waitForQualityGate abortPipeline: true
                   }
               }
           }
       }
   }
}
