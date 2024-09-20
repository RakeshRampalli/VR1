pipeline {
   agent any
   environment {
       JAVA_HOME = "/path/to/java17"   // Ensure the path points to Java 17
       PATH = "${JAVA_HOME}/bin:${env.PATH}"
   }
   stages {
       stage('SonarQube Analysis') {
           steps {
               script {
                   withSonarQubeEnv('SonarQube') {
                       sh '''
                       sonar-scanner \
                       -Dsonar.projectKey=VR1 \
                       -Dsonar.sources=src \
                       -Dsonar.java.source=17 \
                       -Dsonar.java.target=17 \
                       -Dsonar.host.url=http://localhost:9000 \
                       -Dsonar.login=sonar-token
                       '''
                   }
               }
           }
       }
   }
}
