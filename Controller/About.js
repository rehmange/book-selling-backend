import prisma from "../DB/db.config.js";

/**
 * Fetch About
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const fetchAbout = async (req, res) => {
  try {
    let socialLinks = await prisma.About.findMany({
      take: 1,
      orderBy: [
        {
          CreatedAt: "desc",
        },
      ],
    });

    if (socialLinks?.length > 0) {
      socialLinks = socialLinks[0];
    } else {
      socialLinks = {
        Title: "Title",
        Desc1: "Desc1",
        Desc2: "desc2",
        ImageUrl: "image",
        Instruction:
          "Please create an entry for the About page as there is currently no About Page found in the database.",
      };
    }

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

/**
 * Fetch All About
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const fetchAboutAll = async (req, res) => {
  try {
    let socialLinks = await prisma.About.findMany({
      orderBy: [
        {
          CreatedAt: "desc",
        },
      ],
    });

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
 * Create About
 *
 * @param {*} req
 * @param {*} res
 * @returns
 *
 * Sample JSON
  {
    "Title": "We are JellyFish Press3!",
    "Desc1": "JellyFish Press is a global empowerment brand dedicated to raising the most inspired and confident generation of girls.",
    "Desc2":"We believe in empowering girls to dream big, that amplifying stories of real-life women can lead to a more equal world, and that girls can and should do everything!",
    "ImageUrl":"https://res.cloudinary.com/dywz3o7dg/image/upload/v1707851888/knu9jmnohzbmxt5x3kld.png"
  }
 *
 */
export const createAbout = async (req, res) => {
  try {
    const newAbout = await prisma.About.create({
      data: {
        ...req.body,
        CreatedAt: new Date(),
      },
    });

    return res.json({ status: 200, data: newAbout, msg: "About created." });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};

/*
 * Update About
 *
 * @param {*} req
 * @param {*} res
 * @returns
 *
 * Sample JSON
  {
    "Title": "We are JellyFish Press3!",
    "Desc1": "JellyFish Press is a global empowerment brand dedicated to raising the most inspired and confident generation of girls.",
    "Desc2":"We believe in empowering girls to dream big, that amplifying stories of real-life women can lead to a more equal world, and that girls can and should do everything!",
    "ImageUrl":"https://res.cloudinary.com/dywz3o7dg/image/upload/v1707851888/knu9jmnohzbmxt5x3kld.png"
  }
 * 
 *
 */
export const updateAbout = async (req, res) => {
  try {
    const id = req.params.id;
    const newAbout = await prisma.About.update({
      where: {
        AboutId: Number(id),
      },
      data: {
        ...req.body,
      },
    });

    return res.json({ status: 200, data: newAbout, msg: "About Updated." });
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
 * @param {id}
 * @returns
 */
export const deleteAbout = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.About.delete({
      where: {
        AboutId: Number(id),
      },
    });

    return res.json({ status: 200, msg: "About deleted successfully" });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};
