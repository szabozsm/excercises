import { Router } from 'express'
import {
  health
  
} from '../controllers/diagController'

const router = Router()

router.route('/').get(health)


export default router
