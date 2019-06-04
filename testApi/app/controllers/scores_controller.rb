class ScoresController < ApplicationController

   def index
    @scores = Score.all.sort
    # @test = @scores.sort_by(&:score).reverse
    render json: @scores.to_json
  end

  def show
    @score = Score.find_by(id: params[:id])
    render json: @score.to_json
  end

  def new
    @score = Score.new
  end

  def create
    @response = {
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "as you wish"
            }
          }
        ]
      }
    }
  }
}
    # @score = Score.create(score: params[:score], game: params[:game], player_id: params[:player_id], name: params[:name])
    #   render json: @score.to_json
      @score = Score.create(score: params["queryResult"]["parameters"]["number"], game: "test", player_id: 1, name: "keo")
      render json: @response.to_json
    puts "/////////////////////////////////////////"
    puts params["queryResult"]["parameters"]
    # puts "/////////////////////////////////////////
  end

  
#   def edit
#     @score = Score.find(params[:id])
#   end

#   def update
#     @score = Score.find(params[:id])

#     @score.update(score_params)

#     if @score.save
#       redirect_to @score
#     else
#       render :edit
#     end
#   end

  def destroy
    @score = Score.find_by(name: params[:name])
    @score.destroy
  end

end
