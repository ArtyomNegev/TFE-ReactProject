const Mutation = {
	async createArticle(parent,args,ctx,info){
		console.log(args);
		const article = await ctx.db.mutation.createArticle({
			data: {
				...args
			}
		}, info);
		return article
	}
};	

module.exports = Mutation;