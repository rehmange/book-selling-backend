import prisma from "../DB/db.config.js";

/**
 * Create Book 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 * 
 * sample Json
{
    "Title": "Title",
    "Description": "helloeodslkafjlkasdjf",
    "ISBN": "lsakdfj",
    "Author": "aklsfj",
    "ImageLink": "alksdf",
    "PublicationDate": "2024-02-16T20:40:38",
    "Price": 6531,
    "Available":true
}
 */
export const createBook = async (req, res) => {
  try {
    let { PublicationDate } = req.body;
    PublicationDate = new Date(PublicationDate);
    let body = req.body;
    body = {
      ...body,
      PublicationDate,
    };

    const newBook = await prisma.Books.create({
      data: {
        ...body,
        CreatedAt: new Date(),
      },
    });

    return res.json({ status: 200, data: newBook, msg: "Book created." });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
      msg: "Book not created.",
    });
  }
};

/**
 * Update Availability Book
 * @param {*} req
 * @param {*} res
 * @returns
 *
 */
export const updateAvailableBook = async (req, res) => {
  try {
    const id = req.params.id;

    const updateBook = await prisma.Books.update({
      where: {
        BookID: Number(id),
      },
      data: {
        Available: req.body.Available,
      },
    });

    return res.json({
      status: 200,
      data: updateBook,
      msg: "Book availability Updated.",
    });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
      msg: "internal Server Error",
    });
  }
};
