const express = require('express')
const router = express.Router()
const OrderValidate = require('../validation/order')
const OrderController = require ('../controllers/order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/jwt');


// CREATE ORDER
router.post('/',
 verifyToken,
OrderController.CreateOrder,
OrderValidate.validateOrder
)


// UPDATE ORDER


router.put('/:id',
 verifyTokenAndAdmin,
 OrderController.UpdateOrder,
 OrderValidate.validateOrder
 )


// DELETE ORDER


router.delete('/:id',
 verifyTokenAndAdmin,
 OrderController.DeleteOrder,
 OrderValidate.validateOrder
 )


// GET USER ORDERS

router.get('/find/:id',
 verifyTokenAndAuthorization,
 OrderController.GetOrder,
 OrderValidate.validateOrder
 )


// GET ALL ORDERS

router.get('/'
, verifyTokenAndAdmin,
OrderController.GetAllOrders,
OrderValidate.validateOrder
)


// GET MONTHLY INCOME

router.get('/income',
 verifyTokenAndAdmin,
 OrderController.GetOrderStats,
 OrderValidate.validateOrder
 )


module.exports = router;