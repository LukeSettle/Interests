var Pin = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    note: React.PropTypes.string,
    file: React.PropTypes.string
  },

  render: function() {
    return (
      <li className="each-pic">
        <img className="show-pic" src={this.props.file} height="50%" width="50%"/>
        <h1>{this.props.url}</h1>
        <p>note: {this.props.note}</p>
      </li>
    );
  }
});
