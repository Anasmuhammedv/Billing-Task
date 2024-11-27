import { createItem, getAllItem } from "../controllers/itemControllers.js"
import express from 'express'

const router = express.Router()

router.post('/item',createItem)
router.get('/item',getAllItem)

export default router