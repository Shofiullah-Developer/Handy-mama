import asyncHandler from 'express-async-handler'
import Service from '../models/serviceModel.js'

// @desc    Fetch all services
// @route   GET /api/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Service.countDocuments({ ...keyword })
  const services = await Service.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ services, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single service
// @route   GET /api/services/:id
// @access  Public
const getServiceById = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id)

  if (service) {
    res.json(service)
  } else {
    res.status(404)
    throw new Error('Service not found')
  }
})

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id)

  if (service) {
    await service.remove()
    res.json({ message: 'Service removed' })
  } else {
    res.status(404)
    throw new Error('Service not found')
  }
})

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
const createService = asyncHandler(async (req, res) => {
  const service = new Service({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdService = await service.save()
  res.status(201).json(createdService)
})

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
const updateService = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const service = await Service.findById(req.params.id)

  if (service) {
    service.name = name
    service.price = price
    service.description = description
    service.image = image
    service.brand = brand
    service.category = category
    service.countInStock = countInStock

    const updatedService = await service.save()
    res.json(updatedService)
  } else {
    res.status(404)
    throw new Error('Service not found')
  }
})

// @desc    Create new review
// @route   POST /api/services/:id/reviews
// @access  Private
const createServiceReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const service = await Service.findById(req.params.id)

  if (service) {
    const alreadyReviewed = service.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Service already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    service.reviews.push(review)

    service.numReviews = service.reviews.length

    service.rating =
      service.reviews.reduce((acc, item) => item.rating + acc, 0) /
      service.reviews.length

    await service.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Service not found')
  }
})

// @desc    Get top rated services
// @route   GET /api/services/top
// @access  Public
const getTopServices = asyncHandler(async (req, res) => {
  const services = await Service.find({}).sort({ rating: -1 }).limit(3)

  res.json(services)
})

export {
  getServices,
  getServiceById,
  deleteService,
  createService,
  updateService,
  createServiceReview,
  getTopServices,
}
