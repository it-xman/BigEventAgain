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
  },
  get_list: function (options) {
    $.ajax({
      type: 'get',
      url: GET_LIST,
      data: options.data,
      success: options.callback,
    })
  },
  filter_list: function (options) {
    $.ajax({
      type: 'get',
      url: GET_LIST,
      data: options.data,
      success: options.callback,
    })
  },
  del_list: function (options) {
    $.ajax({
      type: 'get',
      url: DEL_LIST,
      data: options.data,
      success: options.callback,
    })
  },
  edit_list: function (options) {
    $.ajax({
      type: 'post',
      url: EDIT_LIST,
      data: options.data,
      contentType: false,
      processData: false,
      success: options.callback,
    })
  },
  publish_list: function f(options) {
  $.ajax({
    type: 'post',
    url: PUBLISH_LIST,
    data: options.data,
    contentType: false,
    processData: false,
    success: options.callback,
  })
}


};