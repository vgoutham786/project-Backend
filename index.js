const express = require('express');
const cors = require('cors');
const app = express();
const port = +process.env.PORT || 3000;
const sequelize = require('./utils/db'); // Import the Sequelize instance
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Define and use your routes here (auth, user, project, task, team)
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const projectRoutes = require('./routes/project.routes');
const taskRoutes = require('./routes/task.routes');
const teamRoutes = require('./routes/team.routes');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/projects', projectRoutes);
app.use('/tasks', taskRoutes);
app.use('/teams', teamRoutes);

// Sync the Sequelize models with the database and start the server
sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing models:', error);
    });
