class YogaPoseWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :description, :favorited, :video, :comments
  has_many :comments

end
