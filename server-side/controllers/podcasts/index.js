const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const podcastService = require("../../services/podcasts");

const addPodcast = asyncHandler(async (req, res) => {
  const { podcast_name, podcast_url } = req.body;

  if (!podcast_name || !podcast_url) {
    throw new apiError(400, "Please provide podcast name and URL");
  }

  const { message, podcasts, statusCode } = await podcastService.addPodcast({
    podcast_name,
    podcast_url,
  });

  new apiResponse(res, statusCode, message, podcasts);
});

const getPodcasts = asyncHandler(async (req, res) => {
  const { message, podcasts, statusCode } = await podcastService.getPodcasts();
  new apiResponse(res, statusCode, message, podcasts);
});

const deletePodcast = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { message, podcasts, statusCode } = await podcastService.deletePodcast(
    id
  );
  new apiResponse(res, statusCode, message, podcasts);
});

module.exports = {
  addPodcast,
  getPodcasts,
  deletePodcast,
};
