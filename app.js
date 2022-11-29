const express = require('express');
const app = express();
const {products} = require('./data');
app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1><br><a href="/api/products">product</a>')
})
app.get('/api/products',(req,res)=>{
    const newProduct = products.map((item)=>{
        const {id,name,image} = item;
        return {id,name,image} 
    })
    res.json(newProduct)
})
app.get('/api/products/:productId',(req,res)=>{
    console.log(req.params);
    const {productId} = req.params;
    const singleProduct = products.find((item)=>item.id === Number(productId))
    res.json(singleProduct)
})

// more optial way to do this
// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=>product.id === 1)
//     res.json(singleProduct)
// })

app.listen(5000,()=>{
    console.log("server is listening on port 5000...");
})