class YogaPoseWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :description, :is_favorited, :video, :comments
  has_many :comments

end
