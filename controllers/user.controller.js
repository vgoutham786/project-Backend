const  User  = require('../models/user.model');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role, profile_picture } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      role,
      profile_picture,
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name, email, role, profile_picture } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      user.name = name;
      user.email = email;
      user.role = role;
      user.profile_picture = profile_picture;

      await user.save();
      res.status(200).json({ message: 'User updated successfully', user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);

    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
