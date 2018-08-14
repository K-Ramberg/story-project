class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.integer :theme
      t.string :difficulty
      t.string :enemy
      t.string :enemy_gender
      t.boolean :enemy_prefix
      t.references :character, foreign_key: true

      t.timestamps
    end
  end
end
