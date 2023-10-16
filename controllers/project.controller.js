const Project = require('../models/project.model');
const User = require('../models/user.model')
// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { name, description, start_date, end_date, project_manager } = req.body;

    const project = await Project.create({
      name,
      description,
      start_date,
      end_date,
      project_manager,
    });

    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a project by ID
exports.getProjectById = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findByPk(projectId);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
  const { projectId } = req.params;
  const updatedProjectData = req.body;

  try {
    // Ensure the project_manager value exists in the users table
    const user = await User.findByPk(updatedProjectData.project_manager);

    if (!user) {
      return res.status(400).json({ message: 'Invalid project manager' });
    }

    const project = await Project.findByPk(projectId);

    if (project) {
      // Perform the update once the project_manager has been validated
      await project.update(updatedProjectData);
      res.status(200).json({ message: 'Project updated successfully' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findByPk(projectId);

    if (project) {
      await project.destroy();
      res.status(200).json({ message: 'Project deleted successfully' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
