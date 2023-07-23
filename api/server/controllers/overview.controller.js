const { Response } = require("../../utils/response.util");
const { SUCCESS_STATUS } = require("../../constants/http-status.constant");
const { OK_CODE } = require("../../constants/http-status-code.constant");
const { products } = require("../repositories/models");

const test = async (req, res) => { 
    const product = await products.findAll({})
    return Response(res, SUCCESS_STATUS, OK_CODE, product);
}

module.exports.Test = test; 
