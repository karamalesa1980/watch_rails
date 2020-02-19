class Product < ApplicationRecord
  validates :title, presence: true
  validates :price, presence: true

  belongs_to :category
  has_many :galleries
  has_many :related_products
  has_many :related, through: :related_products

  enum hit: { hit: 1, not_hit: 0 }
end
