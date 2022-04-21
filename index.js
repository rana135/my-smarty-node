const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome To My Smarty Node!')
})

app.get('/user', (req, res) =>{
  res.send({id:1, name:"Rana Hossain", mobile:"0125522"})
})

const users = [
  {id:1, name:"rana", mobile:"0125522", email:"rana@gmail.com"},
  {id:2, name:"raju", mobile:"0125522", email:"raju@gmail.com"},
  {id:3, name:"raka", mobile:"0125522", email:"raka@gmail.com"},
  {id:4, name:"reba", mobile:"0125522", email:"reba@gmail.com"},
  {id:5, name:"runa", mobile:"0125522", email:"runa@gmail.com"},
]

app.get('/users', (req, res) =>{
 if(req.query.name){
  const search = req.query.name.toLowerCase();
  const matched = users.filter(user => user.name.toLowerCase().includes(search))
  res.send(matched)
 }
 else{
  res.send(users)
 }
})
app.get('/user/:id', (req, res) =>{
  console.log(req.params);
  const id = parseInt(req.params.id);
  // const user = users[id]
  const user = users.find(user => user.id === id)
  res.send(user)
})

app.post('/user', (req, res) =>{
  console.log('Reque', req.body);
  const user = req.body
  user.id = users.length + 1;
  users.push(user)
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
