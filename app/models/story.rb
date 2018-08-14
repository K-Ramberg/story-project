class Story < ApplicationRecord
    belongs_to :character
    has_many :pages, dependent: :destroy
end
