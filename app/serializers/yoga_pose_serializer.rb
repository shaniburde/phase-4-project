class YogaPoseSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :description, :favorited, :video
end
