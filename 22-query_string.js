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
    if(!singleProduct){
        return res.status(404).send("Product not found")
    }
    else
    res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId',(req,res)=>{
    console.log(req.params);
    res.send("hello there your review id is working")
})
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit} = req.query;
    let sortedProduct = [...products];
    // console.log(sortedProduct);
    if(search){
        sortedProduct = sortedProduct.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProduct = sortedProduct.slice(0,Number(limit));
    }
    if(sortedProduct.length<1){
        // res.status(200).send('no product match to your search')
        return res.status(200).json({sucess:true,data:[]})
    }
    return res.status(200).json(sortedProduct)
    // res.send("you are in query section")
})
//input
// http://localhost:5000/api/v1/query?search=a&limit=3
//output
// { name: 'ankit ', ' id': ' 5' }
// { search: 'a', limit: '3' }

// more optial way to do this
// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=>product.id === 1)
//     res.json(singleProduct)
// })

app.listen(5000,()=>{
    console.log("server is listening on port 5000...");
})