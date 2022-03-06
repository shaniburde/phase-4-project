class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :yoga_pose, null: false, foreign_key: true

      t.timestamps
    end
  end
end
