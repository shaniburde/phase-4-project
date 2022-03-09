class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description

  has_one :user
  has_one :yoga_pose

end