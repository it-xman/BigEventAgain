# BigEventAgain
重新整一遍，理清思路

## 1. 登录功能

- 判断输入框的内容是否为空
  - 为空，点击登录提示请输入完整的用户名和密码
  - 不为空，发送ajax请求数据，查看输入的用户名和密码是否正确
    - 正确，跳转到后台首页
    - 失败，提示用户名或密码错误
- 实现步骤：
  - 创建一个tool文件夹，里面放入一些分离开的js文件，方便后期维护和修改
  - 先写一个config.js文件，用来写接口的配置文件
    - 声明一个变量保存接口的基地址
    - 声明不同的接口名字，保存完整的接口地址
  - 再写一个user.js文件，用来保存用户登录的一些方法

## 2. 退出功能

- 点击主页的退出按钮实现退出登录功能

  - 给退出的a标签取消其默认的跳转行为

  - 点击退出按钮弹出弹框询问是否确认退出
    - 确认：发送ajax请求到服务端，如果返回数据的状态码为200，跳转到登录界面
    - 取消：什么也不做，返回登录页面

## 3. 获取用户头像和昵称显示在左侧和右侧用户信息区域

- 进入页面就获取用户的信息
- 发送ajax请求，将请求回来的数据渲染到页面上

## 4. 个人中心页面实现修改用户信息的功能

- 实现点击左侧菜单栏，没有页面跳转，只在一定范围内更新了显示的页面
  - 使用了`iframe`标签
  - 该标签可以实现在一个页面中嵌入一个子页面
    - 在该标签的src属性里放入不同的地址，就在子页面里显示不同的页面，可以设置大小

- 获取表单信息，使用到了`FormData()`

  - 使用FormData需要给表单元素设置name属性
  - `let fd = new FormData('传入的表单元素')[0] `
  - fd.append()可添加字段
    
  - 两个参数, 参数为字符串格式
    
  - 使用ajax发送formData需要注意设置两条属性

    ```javascript
    contentType: false,
    processData: false,
    ```

  - 传入的data参数设置为fd

- 点击到个人中心

  - 给服务端发送请求，获取用户的所有信息
  - 将请求回来的数据渲染到表单里

- 点击修改按钮，获取所有表单里的内容

  - 如有为空，提示用户将信息填写完整

    - 用到bootstrap的模态框

    - 需要引入bootstrap的js文件和css文件

      ```html
      <!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      ```

  - 如果不为空，将表单信息的数据发送到服务端，

  - 页面提示信息修改成功，1.5秒后会跳转到登录页面

- 给需要上传的头像那里添加图片预览

  ```javascript
  // 点击选择文件按钮添加改变事件
  $('#user_pic').on('change', function () {
      console.log(this)
      console.log(this.files)
      console.log(this.files[0])
      console.log($(this))
      console.log($(this)[0])
      console.log($(this)[0].files)
      console.log($(this)[0].files[0])
  // 获取图片临时地址
  // jQuery方式
  let tempUrl = URL.createObjectURL($(this[0].files[0]);
  // 因为this的指向问题？ 这里有一个改变事件，点击以后this指向这个input，type=file的标签
  // 所以可以直接使用this.files[0]来获取需上传文件信息？
  let tempUrlY = URL.createObjectURL(this.files[0]);
  $('.user_pic').prop('src', tempUrl)
  })
  ```

## 5. 文章管理的文章分类功能

- 用到模板引擎和模态框

  - 给模态框加一个提交编辑按钮，默认隐藏

- 获取服务端数据，将请求回的数据渲染到页面中

- 点击新增分类，弹出模态框

  - 新增按钮被点击时，判断输入框的内容是否为空，如果为空，就提示用户将内容输入完整。
  - 点击关闭，返回。
  - 如果写的名称和分类别名重复，提示用户不能输入相同的name和slug

- 点击某一个编辑按钮，弹出模态框

  - **将编辑按钮的自定义属性data-id的值赋值给提交编辑按钮**，这样才能在点击提交编辑按钮的时候使用$(this)获取到对应分类的id。

  - 因为需要添加事件的按钮是后来添加上去的，直接绑定事件不管用，所以需要用到事件委托

  - 将新增分类的内容改成‘编辑分类’
    - 点击新增分类时需将提交分类的内容改回去
    - 将输入框的内容清空
  - 获取当前编辑按钮所在行的内容，渲染到模态框的输入框中
  - 点击提交编辑按钮时，判断输入框内容是否为空
    - 为空，提示用户将信息填写完整
    - 将模态框中要修改的内容发送到服务端修改数据
      - 刷新当前页面

- 点击某一个删除按钮，询问用户是否删除

  - 使用时间委托
  
  - 确认： 发送数据到服务端，将该条数据删除
    - 刷新当前页面或者将删除按钮所在tr删除
  - 取消：返回。

```javascript
// 点击删除按钮
// 使用箭头函数解决this指向问题

  $('.tbody').on('click', '#del',
      function (e) {
        e.preventDefault();
        if (confirm('确定要删除该条文章分类吗？')) {
          ARTICLE.del_category({
            data: {
              id: $(this).attr('data-id'),
            },
            callback:
                (res) => {
                  if (res.code === 200) {
                    $(this).parents('tr').remove();
                    console.log(this)
                  }
                }
          })
        }
      }
  );
```

```javascript
//将this的指向在函数外面赋值给that，确保that一直指向点击事件
  $('.tbody').on('click', '#del', function (e) {
        e.preventDefault();
        let that = this;
        if (confirm('确定要删除该条文章分类吗？')) {
          ARTICLE.del_category({
            data: {
              id: $(this).attr('data-id'),
            },
            callback: function (res) {
              if (res.code === 200) {
                $(that).parents('tr').remove();
              }
            }
          })
        }
      }
  )

```

## 6. 文章列表功能

- 点击文章列表，获取数据，将数据渲染到页面上
  - 注意需要给谁设置唯一标识，或者添加自定义属性
- 筛选功能
  - 所有分类获取到文章分类里的name属性值，渲染到所有分类的选项里
  - 所有状态有草稿和已发布，仔细观察需要为其添加自定义属性或者name属性
  - 点击筛选按钮向服务端发送请求，将符合条件的数据返回来并渲染到页面上
- 底部的分页栏
  - 用到的插件要熟练使用，熟悉插件的自带方法
  - twbsPagination,一款js插件，需要引bootstrap的样式文件
- 点击编辑按钮，跳转到对应的文章编辑页面
- 点击删除按钮，将对应的文章信息删除调
- 点击发表文章按钮，跳转到发表文章页面

### 问题：

发布文章完成，接口有问题，无法完成数据的发送，使用到了formData，给发布和存为草稿设置固定的value值，然后使用formData的append方法添加state状态，该状态为点击按钮的value值

- 无法完成编辑接口的数据发送，无法完成发布文章接口的数据发送。

- 注意点：使用FormData发送数据，需要找到表单，使用get('name值')获取表单的某一个元素的值，append('name'， '要添加的值')可以添加向服务端发送的数据，使用ajax发送数据时需要设置两条属性:

  ```javascript
  contentType: false,
  processData: false,
  ```

- 图片预览功能

  ```javascript
  //获取文件的临时地址
  let url = URL.createObjectURL(this.files[0]);
  ```