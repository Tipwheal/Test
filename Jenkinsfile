﻿pipeline {
    agent any
    tools {
        maven 'Maven' //引号里的Maven不要改
    }
    stages {
        stage('Test') {
            steps {
                withSonarQubeEnv('SonarQube') { //引号里的SonarQube不要改
                    sh 'mvn clean sonar:sonar'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'mvn package'
                archive 'target/Demo.war' //制品路径需要修改
            }
        }
        stage('Deploy') {
            steps { //所有的group1_demo需要修改
                sh 'docker stop groupTest_Test || true'
                sh 'docker rm groupTest_Test || true'
                sh 'docker run --name groupTest_Test -p 11111:8080 -d dordoka/tomcat' //端口11111需要修改
                sh 'docker cp target/Demo.war groupTest_Test:/opt/tomcat/webapps/' //制品路径需要修改
            }
        }
    }
}
