const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


exports.createBook = async (req, res) => {
  try {
    console.log(req.body);
    const book = await prisma.book.create({
      data: req.body
    });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create book' + error });
  }
};

exports.getBooks = async (req, res) => {
  try {
    console.log(req.body);
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' + error });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    await prisma.book.delete({ where: { id } });
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' + error });
  }
};
