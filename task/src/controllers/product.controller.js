const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const productService = require("../services/product.service");

const getProduct = catchAsync(async (req, res, next) => {
  const filter = pick(req.query, ["searchBy", "searchFields"]);
  const options = pick(req.query, ["sortBy", "pageSize", "currentPage"]);
  const result = await productService.queryProduct(filter, options);
  res.status(httpStatus.ACCEPTED).send(result);
});

module.exports = { getProduct };
