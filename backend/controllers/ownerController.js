const { Owner } = require('../models');

exports.createOwner = async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    res.status(201).json(owner);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create owner' });
  }
};

exports.getOwners = async (req, res) => {
  try {
    const owners = await Owner.findAll();
    res.status(200).json(owners);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch owners' });
  }
};

exports.deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    await Owner.destroy({ where: { id } });
    res.status(200).json({ message: 'Owner deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete owner' });
  }
};
