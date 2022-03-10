class YogaPosesController < ApplicationController

    def index
        yogaposes = YogaPose.all
        render json: yogaposes, status: :ok
    end

    def show
        yogapose = find_yoga_poses
        render json: yogapose, include: [:comments], serializer: YogaPoseWithCommentsSerializer, status: :ok
    end

    def update 
        yogapose = find_yoga_poses
        yogapose.update!(yoga_params)
        render json: yogapose, status: :ok
    end

    private

    def find_yoga_poses
        YogaPose.find(params[:id])
    end

    def yoga_params
        params.permit(:is_favorited)
    end
end
