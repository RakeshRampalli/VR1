pipeline {
   agent any
   environment {
       // Set environment variables
       SONARQUBE_URL = 'http://localhost:9000'
       SONARQUBE_CREDENTIALS = 'sonar-token' // You get this from Jenkins credentials
   }
   stages {
       stage('Install Java 17') {
           steps {
               script {
                   // Install Java 17 on the Jenkins node (for Debian/Ubuntu based systems)
                   sh '''
                       sudo apt-get update
                       sudo apt-get install -y openjdk-17-jdk
                   '''
               }
           }
       }
       stage('Set Java 17 as default') {
           steps {
               script {
                   // Set Java 17 as the default Java version
                   sh '''
                       sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-17-openjdk-amd64/bin/java 1
                       sudo update-alternatives --set java /usr/lib/jvm/java-17-openjdk-amd64/bin/java
                   '''
               }
           }
       }
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
                       sh "sonar-scanner -Dsonar.projectKey=my_project_key -Dsonar.sources=. -Dsonar.host.url=${SONARQUBE_URL} -Dsonar.login=${SONARQUBE_CREDENTIALS}"
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
