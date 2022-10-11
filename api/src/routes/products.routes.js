const {Router} = require("express")

const router = Router()

router.get("/api/products",(req,res)=>{
  res.send("Get products")
})

router.post("/api/products",(req,res)=>{
  res.send("Create a product")
})

router.delete("/api/products",(req,res)=>{
  res.send("Delete a product")
})

module.exports=router