# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SearchController, type: :controller do
  render_views

  describe "GET #index" do
    let!(:product) { create(:product, title: "polroy LED") }
    let(:q) { "roy" }
    subject!{ get :index, params: { q: q, format: :json } }

    context "search product" do
      it "find product in db" do
        parse_body = JSON.parse(response.body)
        expect(parse_body).to eq("products" => ["title" => product.title, "url" => "/product/#{product.id}"])
      end

      it "response with 200 ok" do
        expect(response.code).to eq('200')
      end

      context "search with wrong value" do
        let(:query) { 'wrong' }
        it "nothing found" do
          expect response.body.empty?  
        end          
      end            
    end
  end  
end
