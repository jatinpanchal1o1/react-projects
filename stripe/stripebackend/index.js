const express = require("express")

const mongoose = require("mongoose")

const uuid = require("uuid")

const stripe = require("stripe")("sk_test_51KsFmaSA7yTnk5MF50kbDPsYS9dsr15LtgZmEOO7yAT7gltfy241RwusDqJjFPOJAhlGjafXgVCnemVSUWM6qIFu004GyBOB1E")

const cors = require("cors")

//connection

mongoose.connect("mongodb://localhost/striptest" || process.env.CONNECT)

const app = express()

const port = 8484 || process.env.PORT

//use middelware

app.use(cors())
app.use(express.json())

//router

app.get("/", (req, res)=>{res.send("get it")})

app.post('/payment', (req, res)=>{
    const {product, token} = req.body;
    const idempontencyKey = uuid();

    return stripe.customer.create({
        email: token.email,
        id: token.id
    })
    .then(customer =>{
        stripe.charges.create({
            amount: product.price*100,
            currency: 'usd',
            customer_id: customer.id,
            email: token.email,
            description: `description of ${product.description}`,
            shipping:{
                name: token.card.name,
                address: {
                  country: token.card.country_address
                }

            }
        },idempontencyKey)
    }).then(
       (result)=>{
           return res.status(200).json(result)
       }
    ).catch((e)=>{e.message})

})

app.listen(port,()=>{console.log("server start")})