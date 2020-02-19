class CreateGalleries < ActiveRecord::Migration[6.0]
  def change
    create_table :galleries do |t|
      t.integer :product_id
      t.string :img
    end

    insert"INSERT INTO galleries
    (id, product_id, img)
    VALUES
    (1, 2, 's-1.jpg'),
    (2, 2, 's-2.jpg'),
    (3, 2, 's-3.jpg')"
  end
end
