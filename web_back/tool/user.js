var USER = {
  user_login: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback
    })
  },


};