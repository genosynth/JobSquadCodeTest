# JobSquadCodeTest

An application which makes requests to restcountries.com API and gets the data delivered to the front-end.

A slot machine with 3 reels which costs 1 coin per spin and winnings are earned accoringly to the matching fruits.

A user can also register, log in and a web token is then stored in the browser.

## Technologies used

**NODE** for starting the server and installing the dependencies with the built in npm package manager.

**REACT** for creating and running the client side of the application.

**MONGOOSE** for connecting to the MongoDb database where user info is stored.

**BYCRYPTJS** for password hashing, so that passwords are not stored directly into the database but are hashed before storing.

**EXPRESS** for setting up the server.

**JSON WEB TOKEN** an encrypted token is created when a users logs in so that it is stored in the browser and the user won't have to log in each time to view the website.


## Set Up 

1. Make sure that node is installed by running by running the below command.

```
node -v
```

You should get the version of node if it is already installed, else you have to install node from https://nodejs.org/en/ which should take a couple of minutes only.

2. Open up a terminal in your chosen directory and run the following command assuming you have Git installed.
```
git clone https://github.com/genosynth/JobSquadCodeTest.git

```

3. Once the repo is cloned navigate into the **client** folder and run the following command to install the dependencies.

```
npm i
```

4. Once all client dependencies are installed, install the dependencies of the back end by going into the **server** folder and running the same command.

```
npm i
```

5. Now create a **.env** file into the **server** folder file to insert the credentials for connecting to the database and accessing the token_key.

<sup>NOTE - The **STRING** after the "=" sign should be the one you get from the Database of your Mongo DB account after signing in with your account.<sup>

```
DATABASE_ACCESS="STRING"
```


6. We now start the server by running the following commands in the **server** folder.

```
node server
```
or if **nodemon** is installed you can run

```
nodemon server
```

If everything is good you should get the following in your terminal which means that server is now up and running.
```
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node app.js`
Code test server listening on port 5000
Database Connected
```

7. After the server is running we can now run the client part of the website.

<sup>NOTE - This part is only done in development stage as we are using a server for both the client side and the backend side of the application, so we will need to run the below commands in the client folder.<sup>

```
npm start 
```

8. Go to http://localhost:3000/ to access the website.