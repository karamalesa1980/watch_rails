# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_19_203420) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string "title"
    t.string "bytitle"
    t.string "img"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "title"
    t.string "bytitle"
    t.string "keywords"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "ancestry"
    t.index ["ancestry"], name: "index_categories_on_ancestry"
  end

  create_table "galleries", force: :cascade do |t|
    t.integer "product_id"
    t.string "img"
  end

  create_table "products", force: :cascade do |t|
    t.integer "category_id"
    t.integer "brand_id"
    t.string "title"
    t.string "bytitle"
    t.text "content"
    t.float "price"
    t.float "old_price"
    t.integer "status"
    t.string "keywords"
    t.string "description"
    t.string "img", default: "no_image.jpg"
    t.integer "hit", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "related_products", id: false, force: :cascade do |t|
    t.integer "product_id"
    t.integer "related_id"
  end

end
