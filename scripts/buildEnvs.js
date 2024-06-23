const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');
const process = require("node:process");
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const envList = ['local', 'development', 'prod'];

dotenv.config();

envList.forEach(en => {
  const envPath = en !== 'local' ? `.${en}` : '';

  const envFile = `export const environment = {
    production: ${process.env.IS_PRODUCTION},
    firebase: {
      projectId: "${process.env.FIREBASE_PROJECT_ID}",
      appId: "${process.env.FIREBASE_APP_ID}",
      storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
      apiKey: "${process.env.FIREBASE_API_KEY}",
      authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
      messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}"
    }
  };
`;

  const targetPath = path.join(__dirname, `../src/environments/environment${envPath}.ts`);
  fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(successColor, `${checkSign} Successfully generated ${en} environment file`);
    }
  });
});
