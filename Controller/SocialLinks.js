import prisma from "../DB/db.config.js";

/**
 * Fetch Social Links
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const fetchSocialLink = async (req, res) => {
  try {
    const socialLinks = await prisma.SocialLinks.findMany({});

    return res.json({
      status: 200,
      data: socialLinks,
    });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};

/*
 * Create Social Link
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createSocialLink = async (req, res) => {
  try {
    const { type, url } = req.body;
    const newPost = await prisma.SocialLinks.create({
      data: {
        Type: type,
        Url: url,
        CreatedAt: new Date(),
      },
    });

    return res.json({ status: 200, data: newPost, msg: "Social Link created." });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};

/**
 * Delete Socail Link
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteSocialLink = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.SocialLinks.delete({
      where: {
        SocialLinkId: Number(id),
      },
    });

    return res.json({ status: 200, msg: "Social Link deleted successfully" });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};
