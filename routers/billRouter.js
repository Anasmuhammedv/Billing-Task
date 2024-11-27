import express from 'express'
import { createBill, getReports } from '../controllers/billController.js'

const router = express.Router()

router.post("/bill",createBill)
router.get("/bill/:id",getReports)

export default router