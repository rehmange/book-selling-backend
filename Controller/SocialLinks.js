import prisma from "../DB/db.config.js";

export const fetchSocialLink = async (req, res) => {
  const socialLinks = await prisma.SocialLinks.findMany({});

  return res.json({
    status: 200,
    data: socialLinks,
  });
};

/*
 * Create Social Link
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createSocialLink = async (req, res) => {
  const { type, url } = req.body;
  console.log(req.body);
  const newPost = await prisma.SocialLinks.create({
    data: {
      Type: type,
      Url: url,
      CreatedAt: new Date(),
    },
  });

  return res.json({ status: 200, data: newPost, msg: "Post created." });
};

/**
 * Delete Socail Link
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteSocialLink = async (req, res) => {
  const id = req.params.id;
  await prisma.SocialLinks.delete({
    where: {
      SocialLinkId: Number(id),
    },
  });

  return res.json({ status: 200, msg: "Post deleted successfully" });
};
