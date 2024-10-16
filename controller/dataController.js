import { data } from '../model/index.js'
import bodyParser from 'body-parser'
import express from 'express'

const dataRouter = express.Router()
dataRouter.use(bodyParser.json())

dataRouter.get('/', (req,res)=> {
    data.fetchdata(req,res)
})
dataRouter.get('/:id', (req,res)=> {
    data.fetchInfo(req,res)
})
dataRouter.delete('/:id', (req,res)=> {
    data.deleteData(req,res)
})
dataRouter.post('/add', (req,res)=> {
    data.addData(req,res)
})
dataRouter.patch('/:id', (req,res)=> {
    data.editData(req,res)
})

export{
    dataRouter,
    express
}