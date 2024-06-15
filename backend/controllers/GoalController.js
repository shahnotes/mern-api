const getGoals = async (req, res) => {
    res.status(200).json({
        message: 'Goals',
    })
};

const createGoal = async (req, res) => {
    res.status(200).json({
        message: 'Create goal',
    })
};

const updateGoal = async (req, res) => {
    res.status(200).json({
        message: `Update goal: ${req.params.id}`,
    });
}

const deleteGoal = async (req, res) => {
    res.status(200).json({
        message: `Delete goal: ${req.params.id}`,
    })
};

module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal,
};
