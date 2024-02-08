import prisma from "../DB/db.config.js";


/*
 * Create email capture 
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createEmailCapture = async (req, res) => {
  const { email } = req.body;

  const newPost = await prisma.emailCapture.create({
    data: {
      email,
    },
  });

  return res.json({ status: 200, data: newPost, msg: "Post created." });
};
