var PinApp = React.createClass({
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

  addPin: function(pin, callback) {
    $.ajax({
      type: 'POST',
      // contentType: "application/json; charset=utf-8",
      url: 'pins',
      // dataType: 'json',
      data: {
        pin: pin
      }
    }).done(function(result) {
      if (this.isMounted()) {
        var list = this.state.list;
        list.push(result);
        this.setState({
          list: list
        });

        this.refs.modal.close();
        callback({
          success: true
        });
      }
    }.bind(this)).error(function(xhr, textStatus, response) {
      callback({
        success: false,
        error: textStatus
      });
    });
  },

  render: function() {
    return (
      <div className="pin-app">
        <PinList list={this.state.list}/>
        <Modal id="myModal" ref="modal">
          <PinForm addPin={this.addPin}/>
        </Modal>
      </div>
    )
  }
});
