module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'node-app',
      script    : 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },

    
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'deploy',
      host : '139.59.124.141',
      ref  : 'origin/master',
      repo : 'https://590bcfd864e5e901e0a75e37befda91c3c18804c@github.com/GithubNAN/deploy.git',
      path : '~/node-example',
      'post-deploy' : 'nvm install && npm install && /home/deploy/.nvm/versions/node/v7.9.0/bin/pm2 reload ecosystem.config.js --env production'
    },
  }
};
