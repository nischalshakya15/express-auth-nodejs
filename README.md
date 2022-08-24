## express-auth

Authentication module which can be integrated into any project. 

## Prerequisites

- nodejs
- Docker and docker-compose (for containerization)
- npm

## Setup

- git clone https://github.com/nischalshakya15/express-server-typescript.git

- Go to the project directory

  `cd express-server-typescript`

- Rename env.example to .env file

- Update configuration of .env file as per your system

- Create a database **express_server**

- Run a migration file which will create tables in the database

    ``npm run migrate:latest``

- Run a seed file which will dump data into tables

    `npm run seed:run`

- Running in **development** mode

  `npm run start:dev`

- Running in **production** mode

  `npm run build && npm start`

- Open the browser

  `http://localhost:8080/api-docs`
  
- In Authentication section. Call the **/authenticate** url with **username: admin** & **password: admin** to get the accessToken and refreshToken. 
  
- Use that **accessToken** to call Users API. 

## Using Docker
- Run the container
  
  **Make sure you don't have any application running on 3306 and 8080 port**

    `docker-compose --compatibility up -d`
    
- Open the browser
    
    `http://localhost:8080/api-docs`
   
### References

https://stackify.com/winston-logging-tutorial/

https://www.codota.com/code/javascript/functions/winston/format

https://medium.com/@jorgemcdev/node-express-app-typescript-tslint-prettier-airbnb-husky-c42588cbcbe3

https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556

https://codeburst.io/a-generalized-solution-to-authorization-in-node-js-9a38d9916d62

https://levelup.gitconnected.com/tutorial-for-authentication-and-authorization-in-a-node-application-772bef191dae

https://dev.to/mezzolite/beginner-node-js-many-to-many-relationships-3nln

http://zetcode.com/javascript/winston/

https://swagger.io/docs/specification/authentication/

https://petstore.swagger.io/v2/swagger.json