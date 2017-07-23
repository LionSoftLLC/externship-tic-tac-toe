let shell = require('shelljs');

shell.exec(`npm run build`);
shell.exec(`cp index.html bundle/`);
shell.exec(`cp index.css bundle/`);
shell.exec(`cp index.js bundle/`);
