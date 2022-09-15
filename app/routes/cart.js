const express = require ('express')
const router = express.Router()
const CartValidate = require ('../validation/cart')
const CartController = require ('../controllers/cart')
const {verifyToken, verifyTokenAndAuthorization,
     verifyTokenAndAdmin} = require('../middleware/jwt');


// CREATE cart
router.post('/',
 verifyToken,
 CartController.createCart,
 CartValidate.validateCart
 )

// UPDATE CART

 router.put('/:id',
 verifyTokenAndAuthorization,
 CartController.updateCart,
 CartValidate.validateCart
 )


// DELETE CART

 router.delete('/:id',
 verifyTokenAndAuthorization,
 CartController.deleteCart
 )

 // GET USER CART

 router.get('/find/:userId',
  verifyTokenAndAuthorization,
  CartController.getUserCart,
  CartValidate.validateCart
  )


 // GET ALL CARTS
 router.get('/', 
 verifyTokenAndAdmin,
 CartController.getAllUserCarts,
 CartValidate.validateCart
  )




module.exports = router;