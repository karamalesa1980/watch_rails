class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :bytitle, :content, :price,
              :old_price, :description, :short_title

  belongs_to :category            

  def short_title
    object.title.truncate(8)
  end
              
end
