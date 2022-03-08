class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def login
        user = User.find_by(username:params[:username])
       
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: {error: "Username or password is incorrect"}, status: :unauthorized
        end 
    end 

    def logout
        session.delete :user_id
        head :no_content
    end
end
