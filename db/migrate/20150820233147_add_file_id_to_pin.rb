class AddFileIdToPin < ActiveRecord::Migration
  def change
    add_column :pins, :file_id, :string
  end
end
