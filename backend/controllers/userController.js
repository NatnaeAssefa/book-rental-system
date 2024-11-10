const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await prisma.user.create({
      data: userData,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
