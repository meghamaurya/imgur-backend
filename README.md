# Milestone-6: Imgur Backend

## Learning Competencies

At the end of this milestone you will learn

- Reading and understanding code
- Backend vs Frontend
- Building dynamic webapps using Express
- Understanding the databases: Mongodb

## Problem Statement:

Woohoo! Look like we're doing some real web app development now. Isn't this a lot more fun!? Working with actual pages and interactivity and users and profiles and databases and bugs and errors and crashes (OK! Maybe the last 3 aren't that fun).

An image hosting service allows individuals to upload images to an Internet website. The image host will then store the image onto its server, and show the individual different types of code to allow others to view that image.

For this Milestone, we will be creating only the Wireframes/Screens of how our app should like and the Backend APIs.

 IMGUR is the internet's most loved image hosting website because it lets you store as many photos as you like without having them deleted until you decide you want them gone. It's simple, easy to use, provides with various features and above all it's free. Also another beauty of the app is that it works as well without logging in or signing up. It has a massive user base with support for popular image formats and user comments. It's actually more of a central hub for storing and sharing photos than just a simple image hosting service. It is the place where you’ll find the funniest, most informative and inspiring images, memes, GIFs, and visual stories served up in an endless stream of bite-sized fun. Powered by a passionate community of people from all around the world, anyone can join to share cool stuff and vote the best to the top.

In addition to storing your photos, Imgur lets you crop and resize pictures.

https://imgur.com/

## Things to consider:

- [What points to consider while creating Database schema](https://www.codeproject.com/Articles/359654/11-important-database-designing-rules-which-I-fo-2)
- [Wireframes](https://careerfoundry.com/en/blog/ux-design/how-to-create-your-first-wireframe/)
- [Storing files in Database Yea or Nay?](https://stackoverflow.com/questions/3748/storing-images-in-db-yea-or-nay)

## **Releases**

1. set up your node project, create an `index.js` file inside our current working directory. Add the necessary git files and modules and once you start the application, get it to print something in the terminal. 
2. Create a server for the "/" route. Make it return a placeholder value when queried, and test it using Postman so that you know it's working. 
3. Deploy your server using Heroku, ensuring that the API URL can be accessed from [Postman.](https://www.postman.com/) 
4. Set up your database with mongoose and mongoDB. 
5. explore remote databases - as - a - service, and set it up with your API. 
*hint: mlab and elephantSQL sree great examples with generous free plans*
We are going to design the database to store image metadata, user informations, likes and comments. 
    
    instead of this, VS will give some pointers on MongoDb Atlas 
    
    → Inside our main directory let's create a folder called `utils` and make a file called `db.js`
    
6. switch between local and remote database using your config variables
*hint: how would you set up config variables in your env file?*
7. Let's now create a schema for our post. 
    
    Create a `models` folder inside your project and add a file `image.model.js`
    
    *This Mongoose Model represents "Image" collection in MongoDB database.*   
    

      Ensure these CRUD functions are supported in your Mongoose model:

1. Creating an Image:  
    1. **create a new Image: object.[save()]**  [docs](https://mongoosejs.com/docs/api/model.html#model_Model-save)
2. Accessing the Image:
    1. **find a Image by id: [findById]**  [docs](https://mongoosejs.com/docs/api/model.html#model_Model.findById)
    2. **retrieve all Images: [find()]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.find)
3. Updating the Image
    1. **update a Image by id: [findByIdAndUpdate]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate)
4. Removing an Image:
    1. **remove a Image: [findByIdAndRemove]** [docs](https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndRemove)
    2. **remove all Image: [deleteMany()]**  [docs](https://mongoosejs.com/docs/api/model.html#model_Model.deleteMany)
5. In a separate controllers folder, create the controllers that perform the actions for each of your CRUD operations.  
6. Using the controllers, create RESTful routes for all your CRUD operations. Make sure it allows you to create, read, update and delete a post. Test each of them using Postman. 
