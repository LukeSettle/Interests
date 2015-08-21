var PinList = React.createClass({
  getInitialProps: function() {
    return {
      list: []
    };
  },

  render: function() {
    function item(d) {
      return <Pin url={d.url} note={d.note} file_id={d.file_id} key={d.id}/>;
    }
    return <ul className="pinsList row">{this.props.list.map(item)}</ul>;
  }
});
