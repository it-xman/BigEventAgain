const ARTICLE = {
  get_category : function (options) {
    $.ajax({
      type: 'get',
      url: GET_CATEGORY,
      success: options.callback,
    })
  }


};