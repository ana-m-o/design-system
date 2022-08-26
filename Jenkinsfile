pipeline {
  agent {
    kubernetes {
      yamlFile 'mypod.yaml'
    }
  }
  environment {
    NEXT_BRANCH = 'staging'
    LATEST_BRANCH = 'master'
    LAST_COMMIT_AUTHOR = ''
    botName = 'Llörneim'
    myContainer = 'uiversecontainer-node-14-npm-7'
    GC_KEY_PRO = credentials('pro-microfrontends')
    npmrc = credentials('ether-npmrc')
  }
  stages {
    stage('Check last commit author') {
      steps {
        script {
          LAST_COMMIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --format="%aN"').trim()
        }
      }
    }
    stage('Dependencies') {
      when {
        expression {
          return !(LAST_COMMIT_AUTHOR == botName)
        }
      }
      steps {
        container("${myContainer}") {
          sh 'cp -f $npmrc .npmrc'
          script {
            try {
              sh '''
                cp -R /node_modules node_modules
                npm -v
                node -v
                npm ci
              '''
            }
            catch (Error) {
              currentBuild.description = 'error'
              currentBuild.result = 'FAILURE'
              error('Aborting early due to: ' + Error.getMessage())
            }
          }
        }
      }
    }
    stage('testing') {
        when {
            expression {
                return !(LAST_COMMIT_AUTHOR == botName)
            }
        }
        steps {
            container("${myContainer}") {
                sh 'npm test';
            }
        }
    }
    stage('Checkout branch') {
      when {
        allOf {
          anyOf {
            branch "${NEXT_BRANCH}"
            branch "${LATEST_BRANCH}"
          }
          expression {
            return !(LAST_COMMIT_AUTHOR == botName)
          }
        }
      }
      steps {
        container("${myContainer}") {
          sh "git checkout ${env.BRANCH_NAME}"
        }
      }
    }
    stage('Publish next version') {
      when {
        allOf {
          anyOf {
            branch "${NEXT_BRANCH}"
          }
          expression {
            return !(LAST_COMMIT_AUTHOR == botName)
          }
        }
      }
      steps {
        container("${myContainer}") {
          sshagent (credentials: ['bot-ether-uiverse-ssh']) {
            sh """
              mkdir -p ~/.ssh
              ssh-keyscan -H -p 7999 globaldevtools.bbva.com >> ~/.ssh/known_hosts
              git config --global user.email 'Llörneim@example.com'
              git config --global user.name 'Llörneim'
              npm run next-ci
            """
          }
        }
      }
    }
    stage('Publish latest version') {
      when {
        allOf {
          anyOf {
            branch "${LATEST_BRANCH}"
          }
          expression {
            return !(LAST_COMMIT_AUTHOR == botName)
          }
        }
      }
      steps {
        container("${myContainer}") {
          sshagent (credentials: ['bot-ether-uiverse-ssh']) {
            sh """
              mkdir -p ~/.ssh
              ssh-keyscan -H -p 7999 globaldevtools.bbva.com >> ~/.ssh/known_hosts
              git config --global user.email 'Llörneim@example.com'
              git config --global user.name 'Llörneim'
              npm run latest-ci
            """
          }
        }
      }
    }
    stage('Publish storybook') {
      when {
        allOf {
          anyOf {
            branch "${LATEST_BRANCH}"
          }
          expression {
            return !(LAST_COMMIT_AUTHOR == botName)
          }
        }
      }
      steps {
        container("${myContainer}") {
          sshagent (credentials: ['bot-ether-uiverse-ssh']) {
            sh """
              npm run build-storybook
              gcloud auth activate-service-account --key-file=${GC_KEY_PRO}
              gsutil rm 'gs://uiverse-components/**/*'
              gsutil cp -r storybook-static/* gs://uiverse-components
              gsutil setmeta -h "Cache-Control:max-age=0" 'gs://uiverse-components/**/*'
              gsutil -m acl ch -g AllUsers:R 'gs://uiverse-components/**/*'
            """
          }
        }
      }
    }
  }
}
