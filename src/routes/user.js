const express = require('express')
const { UserService } = require('../services/index')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    let response = await UserService.findUsers()
    res.status(200).send(response)
  } catch (err) {
    res.send(err)
  }
})
router.post('/create', async (req, res) => {
  try {
    let response = await UserService.createUser(
      req.body.username,
      req.body.email,
      req.body.password
    )
    res.status(201).send(response)
  } catch (err) {
    res.send(err)
  }
})
router.put('/update/:id', async (req, res) => {
  try {
    let response = await UserService.updateUser(
      req.params.id,
      req.body.username,
      req.body.email,
      req.body.password
    )
    res.status(200).send(response)
  } catch (err) {
    res.send(err)
  }
})
router.delete('/delete/:id', async (req, res) => {
  try {
    let response = await UserService.deleteUser(req.params.id)
    if (response !== 0) {
      res.sendStatus(200)
    } else {
      res.status(404).send({ message: 'Id do usuário é inválido!' })
    }
  } catch (err) {
    res.send(err)
  }
})
router.post('/auth', async (req, res) => {
  try {
    let response = await UserService.authUser(req.body.email, req.body.password)
    if (JSON.stringify(response) !== '[]') {
      response[0].password = '******'
      res.send(response)
    } else {
      res.status(401).send({ message: 'Usuário inválido!' })
    }
  } catch (err) {
    res.send(err)
  }
})
module.exports = router
