const express = require('express');
const router = express.Router();
const {getGoals, createGoal, updateGoal, deleteGoal} = require('../controllers/GoalController');

router.get('/').get(getGoals).post(createGoal);
router.get('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;
