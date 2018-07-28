class Page < ApplicationRecord
  belongs_to :story
  include HTTParty
  base_uri 'https://math.ly/api/v1/algebra/linear-equations/pbnpd.json'

  def self.generate
    response = get("/")
    puts response
  end
  
end