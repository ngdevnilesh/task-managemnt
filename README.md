## Task Management
Task Management is a React.js application designed for efficient tracking and management of daily tasks.

## Getting Started
These instructions will help you set up the project on your local machine for development and testing purposes.

## Prerequisites
Before you begin, ensure you have the following installed:

1. Node.js
2. npm (or yarn)
3. Firebase CLI (for deployment)


## Installing
Follow these steps to get your development environment running:

## Clone the repository
1. Open command promt
2. git clone ssh://git@gitlab.osmosys.co:2020/osm-training/reactjs/upskilling-oct23-dec23/nilesh-belurkar.git
3. Navigate to the project directory
4. cd task-management
5. Install dependencies - npm install
6. Start the development server - npm start
7. This will run the app in development mode. Open http://localhost:3000 to view it in your browser.


## Deployment
Building the App for Production
This command bundles React in production mode and optimizes the build for the best performance.
Build the app for production - npm run build

## Deploying to Firebase
Install Firebase CLI

If you haven't already installed Firebase CLI, do it by running:

command - npm install -g firebase-tools
Login to Firebase

command - firebase login

Follow the on-screen instructions to log in.

## Initialize Firebase in your project
command  - firebase init
Select Hosting when prompted for features to set up.
Choose an existing Firebase project or create a new one.
Set build as your public directory.
Configure as a single-page app by answering yes.
Do not overwrite build/index.html.
Deploy to Firebase

firebase deploy
After deployment, Firebase provides a URL to access your live app.

URL - https://react-test-ca68e.web.app/