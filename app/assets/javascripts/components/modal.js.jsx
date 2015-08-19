var Modal = React.createClass({
  getDefaultProps: function() {
    return {
      id: 'myModal'
    };
  },

  close: function() {
    $(this.refs.container.getDOMNode()).modal('hide');
  },

  render: function() {
    return (
      <div className="modal fade" id={this.props.id} ref="container">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                <span aria-hidden="true"></span>
              </button>
              <h4 className="modal-title">New Pin</h4>
            </div>
          <div className="modal-body">
            {this.props.children}
          </div>
        </div>
      </div>
    </div>
    )
  }
});
