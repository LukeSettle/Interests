class PinSerializer < ActiveModel::Serializer
  attributes :id, :note, :url, :file
end
