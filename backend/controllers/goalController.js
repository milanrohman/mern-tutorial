const asyncHandler = require ('express-async-handler')
const Goal = require('../models/goaModel')

const getGoals = asyncHandler (async(req,res) => {
    res.status(200).json({message: 'Get Goals'})
})

const setGoal= asyncHandler (async(req, res) => { 
    if(!req.body.text){
        req.status(400)
        throw new Error ('Please add a text field')
    }
    res.status(200).json({message: 'Set Goals'})})

const updateGoal=  asyncHandler (async(req, res) => { res.status(200).json({message: `Update Goal ${req.params.id}`})})

const deleteGoal= asyncHandler (async(req, res) => { res.status(200).json({message: `Delete Goal ${req.params.id}`})})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}

