const  Task  = require('../models/task.model');

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date, priority, status, assignedTo, projectId } = req.body;

    const task = await Task.create({
      title,
      description,
      due_date,
      priority,
      status,
      assignedTo,
      projectId,
    });

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findByPk(taskId);

    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, due_date, priority, status, assignedTo, projectId } = req.body;

  try {
    const task = await Task.findByPk(taskId);

    if (task) {
      task.title = title;
      task.description = description;
      task.due_date = due_date;
      task.priority = priority;
      task.status = status;
      task.assignedTo = assignedTo;
      task.projectId = projectId;

      await task.save();
      res.status(200).json({ message: 'Task updated successfully', task });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findByPk(taskId);

    if (task) {
      await task.destroy();
      res.status(200).json({ message: 'Task deleted successfully' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
