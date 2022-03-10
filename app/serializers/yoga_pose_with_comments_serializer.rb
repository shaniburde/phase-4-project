class YogaPoseWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :description, :comments
  has_many :comments

end
