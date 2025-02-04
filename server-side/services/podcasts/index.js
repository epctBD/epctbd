const Podcast = require("../../models/podcast");
const { statusCodes } = require("../../utils/statusCodes");

const addPodcast = async (podcast_data) => {
  const podcast = new Podcast({ ...podcast_data });
  await podcast.save();

  const podcasts = await Podcast.find();
  return {
    message: "Podcast Added Successfully",
    podcasts,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

const getPodcasts = async () => {
  const podcasts = await Podcast.find();
  return {
    message: "Podcasts Fetched Successfully",
    podcasts,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const deletePodcast = async (id) => {
  const podcast = await Podcast.findByIdAndDelete(id);
  if (!podcast) {
    throw new apiError(404, "Podcast not found");
  }

  const podcasts = await Podcast.find();
  return {
    message: "Podcast Deleted Successfully",
    podcasts,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

module.exports = {
  addPodcast,
  getPodcasts,
  deletePodcast,
};
