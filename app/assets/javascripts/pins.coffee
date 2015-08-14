window.newPin = (pinId) ->
  console.log(pinId)
  $.ajax "/pins/pinId", {
    method: 'PUT'
  }
