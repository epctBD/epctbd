const portfolioService = require("../../services/portfolio");
const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { singleUpload, pdfUpload } = require("../../utils/cloudinary");

const addPortfolio = asyncHandler(async (req, res) => {
  const { title, subtitle } = req.body;

  if (!title || !subtitle) {
    new apiError(400, "Please provide all required information");
  }

  let feature_image = null;
  let pdf_file = null;

  if (req.files) {
    try {
      if (req.files.feature_image) {
        feature_image = await singleUpload(req.files.feature_image[0]);
      } else {
        throw new apiError(400, "Feature image is required");
      }

      if (req.files.pdf_file) {
        pdf_file = await pdfUpload(req.files.pdf_file[0]);
      }
    } catch (error) {
      throw new apiError(500, "File upload failed");
    }
  } else {
    throw new apiError(400, "Feature image is required");
  }

  const portfolio_data = {
    title,
    subtitle,
    feature_image,
    pdf_file,
  };

  const { message, portfolios, statusCode } =
    await portfolioService.addPortfolio(portfolio_data);

  new apiResponse(res, statusCode, message, portfolios);
});

const getPortfolios = asyncHandler(async (req, res) => {
  const { message, portfolios, statusCode } =
    await portfolioService.getPortfolios();

  new apiResponse(res, statusCode, message, portfolios);
});

const updatePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, subtitle, existing_image_link } = req.body;

  if (!title || !subtitle) {
    new apiError(400, "Please provide all required information");
  }

  let feature_image = null;

  if (existing_image_link) {
    feature_image = existing_image_link;
  } else if (req.file) {
    try {
      feature_image = await singleUpload(req.file);
    } catch (error) {
      return new apiError(500, "Image upload failed");
    }
  } else {
    return new apiError(400, "Feature image is required");
  }

  const portfolio_data = {
    title,
    subtitle,
    feature_image,
  };

  const { message, portfolios, statusCode } =
    await portfolioService.updatePortfolio(id, portfolio_data);

  new apiResponse(res, statusCode, message, portfolios);
});

const deletePortfolio = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    new apiError(400, "Please provide a portfolio id");
  }

  const { message, portfolios, statusCode } =
    await portfolioService.deletePortfolio(id);

  new apiResponse(res, statusCode, message, portfolios);
});

module.exports = {
  addPortfolio,
  getPortfolios,
  updatePortfolio,
  deletePortfolio,
};
