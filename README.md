# Northcoders News

This repo contains all scripts and components necessary to serve a front-end REACT app of a mock news aggregator site.

In the app, users can view articles, vote on articles, and post and delete comments.

The front end is available at:
[NC News App](https://www.adampeel.co.uk/nc-news)

The data is retrieved from a back-end application:
[API Documentation](https://www.adampeel.co.uk/api)

The repository for which can be found here:
[Backend Repo](https://github.com/Adam-Peel/news-aggregator)

# Local hosting

## Local hosting - Necessary repo set up

### Cloning:

To set up and use this repository locally you are welcome to clone the whole repo, using the method of your choice.

### Local set up:

Once cloned, run `npm install` and ensure that the following packages:

"dependencies": {
"@emotion/react": "^11.14.0",
"@emotion/styled": "^11.14.0",
"@mui/icons-material": "^7.1.2",
"@mui/material": "^7.1.2",
"react": "^19.1.0",
"react-dom": "^19.1.0",
"react-router": "^7.6.2"
},
"devDependencies": {
"@eslint/js": "^9.25.0",
"@types/react": "^19.1.2",
"@types/react-dom": "^19.1.2",
"@vitejs/plugin-react": "^4.4.1",
"eslint": "^9.25.0",
"eslint-plugin-react-hooks": "^5.2.0",
"eslint-plugin-react-refresh": "^0.4.19",
"globals": "^16.0.0",
"vite": "^6.3.5"
}

Run using the following:

| **Engine** | **Version** |
| ---------- | ----------- |
| Node.js    | V22.15.0    |

Once set up, the build can be deployed locally by running the command `npm run dev` in any folder of the repo.

## Progress Status

As the repo is currently a work in progress, regular checks for commits and / or pull requests should be made.

Further work is planned on:

1. Debugging and testing of UX.
2. Enhancing styling, including for smaller screen sizes and different colour schemes.
3. Adding more endpoints to enhance functionality.
