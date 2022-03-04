class CreateYogaPoses < ActiveRecord::Migration[6.1]
  def change
    create_table :yoga_poses do |t|
      t.string :title
      t.string :image
      t.string :category
      t.string :description
      t.boolean :favorited
      t.string :video

      t.timestamps
    end
  end
end
