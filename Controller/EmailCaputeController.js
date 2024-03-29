import prisma from "../DB/db.config.js";

/*
 * Create email capture
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createEmailCapture = async (req, res) => {
  try {
    const { email } = req.body;

    const newPost = await prisma.EmailCapture.create({
      data: {
        EmailAddress: email,
        CreatedAt: new Date(),
      },
    });

    return res.json({ status: 200, data: newPost, msg: "Post created." });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};
