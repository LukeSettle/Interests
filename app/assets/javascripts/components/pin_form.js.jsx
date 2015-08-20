var PinForm = React.createClass({
  onSubmit: function(e) {
    var self = this;
    this.props.addPin({
      url: this.refs.url.getDOMNode().value,
      note: this.refs.note.getDOMNode().value,
      file: this.refs.file.getDOMNode().value
    }, this.onComplete);
    e.preventDefault();
  },

  onComplete(e){
    console.log(e);
  },
  render: function() {
    return (
        <form>
          <input ref="url" type="text" placeholder="URL" />
          <input ref="note" type="text" placeholder="Note" />
          <input ref="file" type="text" placeholder="Picture" />
          <button onClick={this.onSubmit}>Submit</button>
        </form>
      )
  }
});
