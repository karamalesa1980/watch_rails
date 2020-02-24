json.products do
  json.array!(@products) do |product|
    json.title product.title
    #json.id    product.id
    json.url   product_path(product)
  end
end    