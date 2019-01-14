class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :resume]

  def home
  end
end
