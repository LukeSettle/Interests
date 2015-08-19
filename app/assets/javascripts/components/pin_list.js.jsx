var PinList = React.createClass({
  getInitialProps: function() {
    return {
      list: []
    };
  },

  render: function() {
    function item(d) {
      return <Pin url={d.url} note={d.note} file={d.file} key={d.id}/>;
    }
    return <ul>{this.props.list.map(item)}</ul>;
  }
});
