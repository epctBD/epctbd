const portfolioService = require("../../services/portfolio");
const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { singleUpload, pdfUpload } = require("../../utils/cloudinary");

const addPortfolio = asyncHandler(async (req, res) => {
  const { title, subtitle, pdf_file, feature_image } = req.body;

  if (!title || !subtitle || !pdf_file || !feature_image) {
    throw new apiError(400, "Please provide all required information");
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
  const { title, subtitle, feature_image, existing_image_link } = req.body;

  if (!id) {
    throw new apiError(400, "Portfolio ID is required");
  }

  if (!title || !subtitle) {
    throw new apiError(400, "Please provide all required information");
  }

  // Prefer new image, otherwise fallback to existing
  let finalFeatureImage = feature_image || existing_image_link;

  if (!finalFeatureImage) {
    throw new apiError(400, "Feature image is required");
  }

  const portfolio_data = {
    title,
    subtitle,
    feature_image: finalFeatureImage,
  };

  const { message, portfolios, statusCode } =
    await portfolioService.updatePortfolio(id, portfolio_data);

  return new apiResponse(res, statusCode, message, portfolios);
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
