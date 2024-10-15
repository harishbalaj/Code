//REST API
const express = require('express')
const router = express.Router()
const {loginUser, addStudents, addAttendence, getAllUsers, addAssessment, addResult, updateResult, deleteResult} = require('./usersController')

//API
router.post("/login", loginUser)
router.post("/addStudents", addStudents)
router.post("/addAttendence", addAttendence)
router.post("/addAssessment", addAssessment)
router.post("/addResult", addResult)
router.put("/updateResult/:userId", updateResult)
router.put("/deleteResult/:userId", deleteResult)
router.get("/getAllUsers", getAllUsers)

module.exports = router