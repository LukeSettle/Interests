var PinList = React.createClass({
  getInitialState: function() {
    return {
      list: []
    };
  },

  componentDidMount: function() {
    $.get('pins', function(result) {
      if (this.isMounted()) {
        this.setState({
          list: result
        });
      }
    }.bind(this));
  },

  render: function() {
    function item(d) {
      return <Pin url={d.url} note={d.note} file={d.file}/>;
    }
    return <ul>{this.state.list.map(item)}</ul>;
  }
});
