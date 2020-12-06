const router = require('express').Router();
let Task = require('../models/task.model');

// GET ALL TASKS
router.route('/').get((req, res) => {
    console.log('You are on /tasks');
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// ADD TASK
/* POST body example:
{
    taskRequester: 'mary1950',
    title: 'Pls buy me bread',
    description: 'wonder bread',
    dueDate: Date('__').toISOString(),
    startLoc: [90, 90], // grocery store [lat, lng]
    endLoc: [120, 90],  // mary's house
}
*/
router.route('/add').post((req, res) => {
    console.log('You are on /add');
    // required
    const taskRequester = req.body.taskRequester;
    const status = 'OPEN';
    const title = req.body.title;
    const dueDate = req.body.dueDate;
    const startLoc = req.body.startLoc;
    const endLoc = req.body.endLoc;
    console.log(req.body.description);
    // optional
    const description = ('description' in req.body) ? req.body.description : null;

    const newTask = new Task({
        taskRequester: taskRequester,
        taskDoer: null,
        status: status,
        title: title,
        description: description,
        dueDate: dueDate,
        startLoc: startLoc,
        endLoc: endLoc,
    });

    newTask.save()
        .then(() => res.json('New task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET TASK BY ID
router.route('/:id').get((req, res) => {
    console.log('You are on /:id');
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET TASKS BY USER
router.route('/user/:user').get((req, res) => {
    console.log('You are on /user/:user');
    Task.find({
            taskRequester: req.params.user
        })
        .then(tasksReq => {
            Task.find({
                    taskDoer: req.params.user
                })
                .then(tasksDo => {
                    const ans = tasksReq.concat(tasksDo);
                    res.json(ans);
                })
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET COMPLETED TASKS BY USER
router.route('/done/:user').get((req, res) => {
    console.log('You are on /done/:user');
    Task.find({
            status: 'DONE',
            taskDoer: req.params.user,
        })
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE TASK STATUS
/* POST body example:
{
    status: 'IN-PROGRESS',
    taskDoer: 'user100',
}
*/
router.route('/update/:id').post((req, res) => {
    console.log('You are on /update/:id');
    Task.findById(req.params.id)
        .then(task => {
            task.status = req.body.status;
            if (task.status === 'IN-PROGRESS') {
                task.taskDoer = req.body.taskDoer;
            }

            task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE TASK BY ID
router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;