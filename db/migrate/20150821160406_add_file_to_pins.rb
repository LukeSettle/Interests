class AddFileToPins < ActiveRecord::Migration
  def change
    add_column :pins, :file, :string
  end
end
