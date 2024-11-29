const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
// const sequelize = require("../config/connection.js");

const queryProduct = async (filter, options) => {
  const { sortBy, pageSize, currentPage } = options;
  const pageNo = +currentPage || 1;
  const pageLimit = +pageSize || 10;
  const skip = pageNo === 1 ? 0 : (pageNo - 1) * pageLimit;
  const order = sortBy
    ? [[sortBy.split(":")[0]], sortBy.split(":")[1] === "1" ? "ASC" : "DESC"]
    : ["createdAt", "DESC"];

  const { searchBy, searchFields } = filter;
  let where = {};

  if (searchBy) {
    where = {
      [Op.or]: {
        searchFields: {
          [Op.iLike]: `%${searchBy}%`,
        },
      },
    };
  }
  //   const Product = await Product.findAndCountAll({
  //     where,
  //     order: [order],
  //     limit: pageLimit,
  //     offset: skip,
  //   });
  //   return Product;
};
module.exports = { queryProduct };
