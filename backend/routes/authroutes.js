// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { signup,login,googleLogin } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/google-login", googleLogin);
router.get("/test"(req,res)=> {
  res.sent("backend is working");
});

module.exports = router;
