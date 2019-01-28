class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :resume, :portfolio, :contact]

  def index
  end
end
