class Character < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :occupation, presence: true
end
