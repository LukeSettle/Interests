class RemoveFileFromPin < ActiveRecord::Migration
  def change
    remove_column :pins, :file, :string
  end
end
