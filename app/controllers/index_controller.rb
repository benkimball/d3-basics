class IndexController < ApplicationController
  CATEGORIES = %w(video link photo audio chat quote answer text)

  def index
    @data = CATEGORIES.inject([]) do |array, category|
      array.push({'category' => category, 'count' => rand(100)})
    end
  end
end
