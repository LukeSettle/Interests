var Pin = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    note: React.PropTypes.string,
    file_id: React.PropTypes.string
  },

  render: function() {
    return (
      <li className="each-pic">
        <attachment_url className="show-pic" src={this.props.file_id} height="50%" width="50%"/>
        <h1>{this.props.url}</h1>
        <p>note: {this.props.note}</p>
      </li>
    );
  }
});
