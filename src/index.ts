
export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.method);
		console.log(request.headers);
		
		if (request.method=="GET"){
			return Response.json({
				message:"you send a get request "
			})
		}
		else return Response.json({
			message:"you did not send a get request "
		})
	},
} satisfies ExportedHandler<Env>;
