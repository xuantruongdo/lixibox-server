const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const categoryRouter = require('./categoryRouter')
const orderRouter = require('./orderRouter')

const routers = (app) => {
    app.use('/user', userRouter)
    app.use('/product', productRouter)
    app.use('/category', categoryRouter)
    app.use('/order', orderRouter)
}

module.exports = routers