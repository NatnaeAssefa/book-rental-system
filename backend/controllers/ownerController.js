const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.createOwner = async (req, res) => {
  try {
    const owner = await prisma.owner.create({
      data: req.body,
    });
    res.status(201).json(owner);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getOwners = async (req, res) => {
  try {
    const owners = await prisma.owner.findMany();
    res.status(200).json(owners);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.deleteOwner = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.owner.delete({ where: { id } });
    res.status(200).json({ message: "Owner deleted" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
