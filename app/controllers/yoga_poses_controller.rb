class YogaPosesController < ApplicationController

    def index
        yogaposes = YogaPose.all
        render json: yogaposes, status: :ok
    end

    def show
        yogapose = find_yoga_poses
        render json: yogapose, serializer: YogaPoseWithCommentsSerializer, status: :ok
    end

    private

    def find_yoga_poses
        YogaPose.find(params[:id])
    end
end
