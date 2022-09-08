npm init
npm install @babel/core @babel/cli --save-dev
npm install @babel/preset-env --save-dev

**create .babelrc file for preset**

*to convert new code into compatible code - cross browser support*

**node_modules/.bin/babel before.js -o after.js**

node_modules/.bin/babel - where babel is located 
before.js - where code with new features is written
-o - output
after.js - where new code is converted to compatible code

**npm install** to get all the necessary dependencies - *node_modules*