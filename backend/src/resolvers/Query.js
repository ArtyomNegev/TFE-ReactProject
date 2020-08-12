const { forwardTo } = require("prisma-binding");

const Query = {
	articles: forwardTo('db')
};

module.exports = Query;