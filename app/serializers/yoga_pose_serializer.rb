class YogaPoseSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :description, :is_favorited, :video
end
