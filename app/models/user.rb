class User < ApplicationRecord

    has_many :comments
    has_many :yoga_poses, through: :comments
end
