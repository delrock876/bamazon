const { Products } = require('../models')

module.exports = app =>{

app.get('/products', (req, res)=>{
  Products.findAll()
  .then(product=> res.json(product))
  .then(()=>res.sendStatus(200))
  .catch(e=>console.error(e))
})

app.post('/products', (req, res)=>{
  Products.create(req.body)
  .then(()=>res.sendStatus(200))
  .catch(e=>console.error(e))
})

}