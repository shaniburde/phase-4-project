class CommentsController < ApplicationController

    def index 
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show 
        comment = find_comment
        render json: comment, status: :ok
    end

    def update 
        comment = find_comment
        @current_user.comments.update!(comment_params)
        render json: comment, status: :ok
    end

    def create 
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy 
        comment = find_comment
        comment.destroy
        head :no_content
    end

    private 

    def find_comment 
        Comment.find(params[:id])
    end

    def comment_params 
        params.permit(:description, :yoga_pose_id, :user_id)
    end
end
