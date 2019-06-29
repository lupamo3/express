'use stricts'
module.exports = function(app) {
    const taskslist = require('../controller/appController');

    //todoList Routes
    app.route('/tasks')
    .get(taskslist.list_all_tasks)
    app.route('/auth')
    .get(taskslist.list_all_people)

    app.route('/tasks/:taskId')
    .get(taskslist.read_a_task)
    .delete(taskslist.delete_a_task);
};
