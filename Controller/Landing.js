import prisma from "../DB/db.config.js";

/**
 * Fetch Landing
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const fetchLanding = async (req, res) => {
  try {
    let LandingEntry = await prisma.Landing.findMany({
      take: 1,
      orderBy: [
        {
          CreatedAt: "desc",
        },
      ],
    });

    if (LandingEntry?.length > 0) {
      LandingEntry = LandingEntry[0];
      let LeftBook;
      let RightBook;
      let BottomBook;

      if (LandingEntry?.LeftBook) {
        LeftBook = await prisma.Books.findFirst({
          where: {
            BookID: Number(LandingEntry?.LeftBook),
            Available: true,
          },
        });
        if (LeftBook) {
          LandingEntry = {
            ...LandingEntry,
            LeftBook: {
              id: LeftBook?.BookID,
              Title: LeftBook?.Title,
              ImageLink: LeftBook?.ImageLink?.split(",")?.at(0),
            },
          };
        } else {
          LandingEntry = {
            ...LandingEntry,
            LeftBook: null,
          };
        }
      }

      if (LandingEntry?.RightBook) {
        RightBook = await prisma.Books.findFirst({
          where: {
            BookID: Number(LandingEntry?.RightBook),
            Available: true,
          },
        });
        if (RightBook) {
          LandingEntry = {
            ...LandingEntry,
            RightBook: {
              id: RightBook?.BookID,
              Title: RightBook?.Title,
              ImageLink: RightBook?.ImageLink?.split(",")?.at(0),
            },
          };
        } else {
          LandingEntry = {
            ...LandingEntry,
            RightBook: null,
          };
        }
      }

      if (LandingEntry?.BottomBook) {
        BottomBook = await prisma.Books.findFirst({
          where: {
            BookID: Number(LandingEntry?.BottomBook),
            Available: true,
          },
        });
        if (BottomBook) {
          LandingEntry = {
            ...LandingEntry,
            BottomBook: {
              id: BottomBook?.BookID,
              Title: BottomBook?.Title,
              ImageLink: BottomBook?.ImageLink?.split(",")?.at(0),
            },
          };
        } else {
          LandingEntry = {
            ...LandingEntry,
            BottomBook: null,
          };
        }
      }
    } else {
      LandingEntry = {
        Description: "Description",
        LeftBook: "LeftBook",
        RightBook: "RightBook",
        BottomBook: "BottomBook",
        VideoLink: "VideoLink",
        Instruction:
          "Please create an entry for the Landing page as there is currently no Landing Page found in the database.",
      };
    }

    return res.json({
      status: 200,
      data: LandingEntry,
    });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};

/**
 * Fetch All Landing
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const fetchLandingAll = async (req, res) => {
  try {
    let LandingEntry = await prisma.Landing.findMany({
      orderBy: [
        {
          CreatedAt: "desc",
        },
      ],
    });

    return res.json({
      status: 200,
      data: LandingEntry,
    });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};

/*
 * Create Landing
 *
 * @param {*} req
 * @param {*} res
 * @returns
 *
 * Sample JSON
  {
    "Description": "We are JellyFish Press3!",
    "BottomBook": 1,
    "RightBook":2,
    "LeftBook":3,
    "VideoLink": "https://www.youtube.com/watch?v=QZI7D8pUf9o",
  }
 *
 */
export const createLanding = async (req, res) => {
  try {
    const newLanding = await prisma.Landing.create({
      data: {
        ...req.body,
        CreatedAt: new Date(),
      },
    });

    return res.json({ status: 200, data: newLanding, msg: "Landing created." });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};

/*
 * Update Landing
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
export const updateLanding = async (req, res) => {
  try {
    const id = req.params.id;
    const newLanding = await prisma.Landing.update({
      where: {
        LandingId: Number(id),
      },
      data: {
        ...req.body,
      },
    });

    return res.json({ status: 200, data: newLanding, msg: "Landing Updated." });
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
export const deleteLanding = async (req, res) => {
  try {
    const id = req.params.id;
    await prisma.Landing.delete({
      where: {
        LandingId: Number(id),
      },
    });

    return res.json({ status: 200, msg: "Landing deleted successfully" });
  } catch (error) {
    return res.json({
      status: 500,
      error: error.message,
    });
  }
};
