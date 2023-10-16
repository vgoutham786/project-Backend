const  Team  = require('../models/team.model');

// Create a new team
exports.createTeam = async (req, res) => {
    try {
        const { teamName, members } = req.body;

        const team = await Team.create({
            teamName,
            members,
        });

        res.status(201).json({ message: 'Team created successfully', team });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get a team by ID
exports.getTeamById = async (req, res) => {
    const { teamId } = req.params;

    try {
        const team = await Team.findByPk(teamId);

        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json({ message: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all teams
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.findAll();
        res.status(200).json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a team by ID
exports.updateTeam = async (req, res) => {
    const { teamId } = req.params;
    const { teamName, members } = req.body;

    try {
        const team = await Team.findByPk(teamId);

        if (team) {
            team.teamName = teamName;
            team.members = members;

            await team.save();
            res.status(200).json({ message: 'Team updated successfully', team });
        } else {
            res.status(404).json({ message: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a team by ID
exports.deleteTeam = async (req, res) => {
    const { teamId } = req.params;

    try {
        const team = await Team.findByPk(teamId);

        if (team) {
            await team.destroy();
            res.status(200).json({ message: 'Team deleted successfully' });
        } else {
            res.status(404).json({ message: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
