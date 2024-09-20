node {
  stage('SCM') {
    checkout scm
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'SonarQube Scanner';
    withSonarQubeEnv(SonarQubeScanner) {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}
