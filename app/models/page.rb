class Page < ApplicationRecord
  belongs_to :story
  include HTTParty
  base_uri "https://math.ly/api/v1/arithmetic/simple.json?difficulty="

  def self.generate
    response = get("beginner")
    return response
  end
end