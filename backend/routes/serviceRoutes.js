import express from 'express'
const router = express.Router()
import {
  getServices,
  getServiceById,
  deleteService,
  createService,
  updateService,
  createServiceReview,
  getTopServices,
} from '../controllers/serviceController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getServices).post(protect, admin, createService)
router.route('/:id/reviews').post(protect, createServiceReview)
router.get('/top', getTopServices)
router
  .route('/:id')
  .get(getServiceById)
  .delete(protect, admin, deleteService)
  .put(protect, admin, updateService)

export default router
