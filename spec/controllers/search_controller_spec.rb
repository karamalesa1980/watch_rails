# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SearchController, type: :controller do
  render_views

  describe "GET #index" do
    let!(:product) { create(:product, title: 'Casio LED') }
    let(:query) { 'cas' }
    subject! { get :index, params: { query: query, format: :json } }

    context "search product" do
      it "find product in db" do
        res = JSON.parse(response.body).first.values
        expect(res).to contain_exactly(product.title, product.id)
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
