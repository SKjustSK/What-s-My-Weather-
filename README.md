# webpack-npm-template
A template repository to start working with webpack.

Run `npm install` and `npm update` before starting your project.

Contains the following dev dependencies: 
- "@eslint/js": "^9.5.0"
- "css-loader": "^7.1.2"
- "eslint": "^9.5.0"
- "globals": "^15.6.0"
- "html-webpack-plugin": "^5.6.0"
- "style-loader": "^4.0.0"
- "webpack": "^5.91.0"
- "webpack-cli": "^5.1.4"
- "webpack-merge": "^5.10.0"
- "webpack-dev-server": "^5.0.4"

With the following scripts:
- "build": "webpack --config webpack.prod.js"
- "start": "webpack serve --open --config webpack.dev.js"
- "updateGitHubPage": "git subtree push --prefix dist origin gh-pages"