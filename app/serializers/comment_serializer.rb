class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :username

  has_one :user
  has_one :yoga_pose
 
  def username 
   "#{user.username}"
  end


end
