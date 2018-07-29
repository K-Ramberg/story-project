class Page < ApplicationRecord
  belongs_to :story
  include HTTParty

  def self.generate
    response = get("https://math.ly/api/v1/arithmetic/simple.json")
    return response
  end
end