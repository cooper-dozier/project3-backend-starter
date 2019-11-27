# INTERACT - Backend
### A Forums Application - Group Project
- Project 3 in the Software Engineering Intensive course by General Assembly

[Frontend Repository Here](https://github.com/CutieChina/project3-frontend-starter)

## Technologies Used
- Both Ends:
  - npm
  - nodemon
  - git
- Backend:
  - PostgreSQL
  - Sequelize
  - Express JS
- Frontend:
  - React JS
  - React Bootstrap
  - axios
- Utility
  - Postman

## Database Tables
Note: PostgreSQL 'varchar' datatype is called 'string' in Sequelize
- DB Name:
  - Call it what you like; we used 'forum_dev'
- 'Forums' Table
  - 'forum_name' Column: type: varchar, max 255 characters
  - Automatic Columns: id, createdAt, updatedAt
- Threads Table
  - 'subject' Column: type: varchar, max 255 characters
  - 'userId' Column: type: foreignKey (integer)
  - 'forumId' Column: type: foreignKey (integer)
  - Automatic Columns: id, createdAt, updatedAt
- MessageItems Table
  - 'message' Column: type: text (unlimited characters)
  - 'userId' Column: type: foreignKey (integer)
  - 'threadId' Column: type: foreignKey (integer)
  - Automatic Columns: id, createdAt, updatedAt
- Users Table
  - 'username' Column: type: varchar, max 255 characters
  - 'email" Column: type: varchar, max 255 characters
  - Automatic Columns: id, createdAt, updatedAt

## Express Routes
- GET http://localhost:3000/api/forums/**${forumId}**
  - where **${forumId}** represents an integer
  - This call will get the information for the Forum with the primary key ('id') of **${forumId}** from the 'Forums' table,
  AND also all the threads with the 'forumId' value of **${forumId}** from the 'Threads' table
  - This call is used in the 'getThreadList' axios function, which is defined and used in the '/src/DisplayThreadList.js' file in the Frontend 
  - This call invokes the 2nd Express route defined in the '/routes/forums.js' file in the Backend
- DELETE http://localhost:3000/api/messageitems/**${messageToDelete}** 
  - where **${messageToDelete}** represents an integer
  - This call will destroy the information for the MessageItem with the primary key ('id') of **${messageToDelete}** in the 'MessageItems' table, AND get the information for all the MessageItems which have not been deleted
  - This call is *defined* in the 'deleteMessage' axios function in the '/src/DisplayThread.js' file in the frontend BUT it is *called* only in the '/src/DisplayMessage.js' file
  - This call invokes the 5th Express route defined in the '/routes/messageitems.js' file in the Backend
- POST http://localhost:3000/api/messageitems
  - This call will create a new MessageItem in the MessageItems table with a primary key ('id') of the next integer that is unused. The id's of deleted records are never reused in PostGreSQL. It will also return all extant MessageItems
  - This call is defined and used in the 'createMessage' axios function in the '/src/DisplayThread.js' file in the Frontend
  - This call invokes the 3rd Express route defined in the '/routes/messageitems.js' file in the Backend
- GET http://localhost:3000/api/threads/messages/**${threadId}**
  - where **${threadId}** represents an integer
  - This call will get the information for the Thread with the primary key ('id') of **${threadId}** from the 'Threads' table,
  AND also all the MessageItems with the 'threadId' value of **${threadId}** from the 'MessageItems' table
  - This call is defined and used in the 'getThread' axios function in the '/src/DisplayThread.js' file in the Frontend
  - This call invokes the 5th Express route defined in the '/routes/threads.js' file in the Backend
- GET http://localhost:3000/api/messageItems/**${messageId}**
  - where **${messageId}** represents an integer
  - This call will get the information for the MessageItem with the primary key ('id') of **${messageId}** from the 'MessageItems' table
  - This call is defined in the 'getOneMessage' axios function in the '/src/DisplayMessage.js' file in the Frontend. It is called in the same file on page load/ component mount. It could be used to provide information for a component that can link single messages from outside.
  - This call invokes the 2nd Express route defined in the '/routes/messageitems.js' file in the Backend
- NOTE: There some other routes defined in the Backend '/routes/' folder, but they are not used in the Frontend at this time

## Installation
- Before you start, install Node.js and NPM
- This is beyond the scope of the README.md, but here is one place to start [The NPM Blog - How to Install](https://blog.npmjs.org/post/85484771375/how-to-install-npm)
- If installing Node.js and NPM looks like it is going to be hard, you're probably trying to do it wrong

1. Fork and clone or just clone [this repository](https://github.com/cooper-dozier/project3-backend-starter)
    - [Github help for cloning](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
1. Change to the directory you just cloned the project to your machine with your terminal or CMD prompt
1. In terminal, run 'npm install'
1. Download and Install PostGreSQL -  go [here](https://www.postgresql.org/download/), select your OS, and follow instructions. The rest is out of the scope of this document.
    - You will need to supply a username and password for the database, I think 
1. In terminal, run 'createdb forum_dev'
1. In terminal, run 'sequelize db:migrate'
1. In terminal, run 'sequelize db:seed:all' to add dummy data
1. In terminal, run 'npm start'
1. The Backend should now be running and you can use it to access the GET routes in your web browser by going to (http://localhost:3000/); the available paths are listed here in 'app.js' from line 23 to 29
(For example, 'http://localhost:3000/api/threads' is the one listed on app.js line 28)
- To experiment with the POST, PUT, and DELETE routes you can try [Postman](https://www.getpostman.com/). Instructions for this are out of scope.