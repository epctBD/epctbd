const Portfolio = require("../../models/portfolio");
const { statusCodes } = require("../../utils/statusCodes");

const addPortfolio = async (portfolio_data) => {
  const portfolio = new Portfolio({
    ...portfolio_data,
  });

  await portfolio.save();

  const portfolios = await Portfolio.find();

  return {
    message: "Portfolio Added Successfully",
    portfolios,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

const getPortfolios = async () => {
  const portfolios = await Portfolio.find({});

  if (portfolios.length === 0) {
    return {
      message: "No Portfolios Found",
      portfolios,
      statusCode: statusCodes.SUCCESSFUL.SUCCESS,
    };
  }

  return {
    message: "Portfolios Fetched Successfully",
    portfolios,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const updatePortfolio = async (portfolio_id, portfolio_data) => {
  const portfolio = await Portfolio.findById(portfolio_id);

  if (!portfolio) {
    return {
      message: "Portfolio not found",
      statusCode: statusCodes.CLIENT_ERROR.BAD_REQUEST,
    };
  }

  await Portfolio.findByIdAndUpdate(portfolio_id, portfolio_data, {
    new: true,
  });

  const portfolios = await Portfolio.find();

  return {
    message: "Portfolio Updated Successfully",
    portfolios,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

const deletePortfolio = async (portfolio_id) => {
  const portfolio = await Portfolio.findById(portfolio_id);

  if (!portfolio) {
    return {
      message: "Portfolio not found",
      statusCode: statusCodes.CLIENT_ERROR.BAD_REQUEST,
    };
  }

  await Portfolio.findByIdAndDelete(portfolio_id);
  const portfolios = await Portfolio.find();

  return {
    message: "Portfolio deleted successfully",
    portfolios,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

module.exports = {
  addPortfolio,
  getPortfolios,
  updatePortfolio,
  deletePortfolio,
};
