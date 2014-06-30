class StaticController < ApplicationController
	def blog
		if (params.count == 2) then
			@newer = false;
		else 
			@newer = true;
		end

		# @last_blog_post;
		# if (params[params.count] == @last_blog_post) then
		# 	@older = false;
		# else
		# 	@older = true;
		# end
	end
end
