require 'rails_helper'

RSpec.describe ProductController, type: :controller do
  render_views


  describe "GET #show" do
    let(:user)    {create :user}
    let(:product) {create :product}

    subject { get :show, params: { id: product.id } } 

    context "show product" do
      it 'render show view' do
        sign_in(user)
        is_expected.to render_template :show
      end
    end

    context "does not show product" do
      it 'does not render show view' do
        is_expected.to_not render_template :show
      end
    end
  end
end
