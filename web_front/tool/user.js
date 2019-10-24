var USER = {
  user_login: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGIN,
      data: options.data,
      success: options.callback,
    })
  },
  user_logout: function (options) {
    $.ajax({
      type: 'post',
      url: USER_LOGOUT,
      success: options.callback,
    })
  },
  get_user: function (options) {
    $.ajax({
      type: 'get',
      url: GET_USER,
      success: options.callback,
    })
  },
  get_userInfo: function (options) {
    $.ajax({
      type: 'get',
      url: GET_USERINFO,
      success: options.callback,
    })
  },
  edit_userInfo: function (options) {
    $.ajax({
      type: 'post',
      url: EDIT_USERINFO,
      contentType: false,
      processData: false,
      data: options.data,

      success: options.callback,
    })
  },
};