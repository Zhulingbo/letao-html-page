$(function () {

  //一级分类
  var pageNum = 1;
  var pageSize = 5;

  function render() {
    $.ajax({
      type: 'get',
      url: '/category/queryTopCategoryPaging',
      data: {
        page: pageNum,
        pageSize: pageSize
      },
      success: function (info) {
        console.log(info);
        $("#first-render").html(template('table-tmp', info));

        //选软分页器
        $('#paginator').bootstrapPaginator({
          bootstrapMajorVersion: 3,//当前bootstrap版本
          page: pageNum,//当前页数
          totalPages: Math.ceil(info.total / pageSize),
          onPageClicked: function (event, originalEvent, type, page) {
            pageNum = page;
            render();
          }

        });
      }
    })
  }

  render();

  //模态框
  $(".btn-addcate").on('click', function () {
    $('.add-cate').modal('show');
  })


  //表单验证
  var $form = $('#form');
  $form
  $form.bootstrapValidator({
    //配置校验时的图标,
    feedbackIcons: {
      //校验成功的图标
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      categoryName: {
        validators: {
          notEmpty: {
            message: '内容不能为空'
          }
        }
      }
    }
  })
  //验证成功时
  $form.on('success.form.bv', function (e) {
    e.preventDefault();
    console.log('haha');
    $.ajax({
      type: 'post',
      url: '/category/addTopCategory',
      data: $form.serialize(),
      success: function (info) {
        console.log(info);
        if (info.success) {
          $('.add-cate').modal('hide');
          render();
        }
      }
    })
  })
})