pipeline {

    agent any

    environment {

        SONARQUBE_URL = 'http://localhost:9000' // Replace localhost with correct IP if needed

        SONARQUBE_CREDENTIALS = 'sqa_f9b4e8d5cdfea0a13dd95e880b3e1bfceae5908b' // Jenkins stored token ID

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

                sh '''

                    mvn clean verify sonar:sonar \

                    -Dsonar.projectKey=VR1 \

                    -Dsonar.projectName='VR1 GitHub Project' \

                    -Dsonar.host.url=${SONARQUBE_URL} \

                    -Dsonar.token=${SONARQUBE_CREDENTIALS}

                '''

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
