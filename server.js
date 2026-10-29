const express = require("express") //importing express package
const app = express() // creates a express application
const dotenv = require("dotenv").config() //this allows me to use my .env values in this file
const mongoose = require("mongoose")
const methodOverride = require('method-override')
const morgan = require('morgan')

const Category = require("./models/Category")
const Listing = require("./models/Listing")
const Review = require("./models/Review")
const User = require("./models/User")





// Middleware
app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride('_method'))
app.use(morgan('dev'))


async function conntectToDB(){ //connection to the database
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database")
    }
    catch(error){
        console.log("Error Occured",error)
    }
}


// async function createUser(){
//   const newUser = await User.create({
//     username: 'Jane Doe',
//     password: "1234"
    
// });}


async function createCategory(){
  const newCategory = await Category.create({
    categoryName: "apartment"
    
});}

async function createListing(){
     const newListing = await Listing.create({
        streetAddress: '742 Evergreen Terrace',
        city: 'Springfield',
        price: 250000,
        size: '2200 sqft',
        creator: "6ae316eda277cc7e9cff4c0c",
        category: "6ae3174795ee4da0b14234a1"
      });
}

async function listAllListing(){
        const allListing  = await Listing.find().populate("creator").populate("category")
    console.log(allListing)
}

listAllListing()

conntectToDB()


















// Routes go here








 
 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000






