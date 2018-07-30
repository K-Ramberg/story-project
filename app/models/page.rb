class Page < ApplicationRecord
  belongs_to :story
  include HTTParty
  base_uri "https://math.ly/api/v1/arithmetic/simple.json?difficulty="

  def self.generate(difficulty)
    response = get("#{difficulty}")
    return response
  end
end