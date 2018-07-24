class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :occupation
      t.integer :head_element
      t.integer :body_element
      t.integer :leg_element
      t.integer :color_scheme
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
