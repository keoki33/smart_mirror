class UsersController < ApplicationController
       def index
    @users = User.all
    render json: @users.to_json
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user.to_json
  end

  def new
    @user = User.new
  end

  def create
    @user = User.find_or_create_by(name: params[:name])
      render json: @user.to_json
  end

  def destroy
    @user = User.find_by(name: params[:name])
    @user.destroy
  end



end
