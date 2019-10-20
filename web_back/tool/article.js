const ARTICLE = {
  get_category: function (options) {
    $.ajax({
      type: 'get',
      url: GET_CATEGORY,
      success: options.callback,
    })
  },
  add_category: function (options) {
    $.ajax({
      type: 'post',
      url: ADD_CATEGORY,
      data: options.data,
      success: options.callback,
    })
  },
  edit_category: function (options) {
    $.ajax({
      type: 'post',
      url: EDIT_CATEGORY,
      data: options.data,
      success: options.callback,
    })
  },
  del_category: function (options) {
    $.ajax({
      type: 'post',
      url: DEL_CATEGORY,
      data: options.data,
      success: options.callback,
    })
  }
};