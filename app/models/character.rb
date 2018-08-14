class Character < ApplicationRecord
    belongs_to :user
    has_many :stories, dependent: :destroy
    validates :name, presence: true
    validates :occupation, presence: true
    validates :head_element, presence: true
    validates :body_element, presence: true
    validates :leg_element, presence: true
end
