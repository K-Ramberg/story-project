class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.integer :theme
      t.string :difficulty

      t.timestamps
    end
  end
end
