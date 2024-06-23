require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const productsRouter = require('./routes/products.routes');
const authRouter = require('./routes/auth.routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/productos', productsRouter);
app.use('/auth', authRouter);

//app.use('/api', adminRouter);// 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})