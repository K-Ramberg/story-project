class Story < ApplicationRecord
    has_many :pages, dependent: :destroy
end
