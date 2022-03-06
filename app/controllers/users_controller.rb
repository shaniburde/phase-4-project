class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password)
    end

    def find_user
        User.find(params[:id])
    end
end
