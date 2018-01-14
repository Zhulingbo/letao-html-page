$(function () {

  var pageNum = 1;
  var pageSize = 5;
  $.ajax({
    type:'get',
    url:'/product/queryProductDetailList',
    data:{
      page:pageNum,
      pageSize:pageSize
    },
    success:function (info) {
      console.log(info);
      $('tbody').html(template('pro-tmp',info));
    }
  })

  //模态框
  $(".btn-addcate").on('click',function () {
    $('.add-cate').modal('show');
  })

  //模态框下拉列表
  $(".btn-choose").on('click',function () {
    console.log('haha');
    $.ajax({
      type:'get',
      url:'/category/querySecondCategoryPaging',
      data:{
        page:pageNum,
        pageSize:pageSize
      },
      success:function (info) {
        console.log(info);
        $('#add-sec-cate').html(template('down-tmp',info));
        $(".dropdown-menu li a").off().on('click',function () {
          $('.btn-choose .text').text($(this).text());
          $("#cate_name").val($(this).text());
        })
      }
    })
  })

  //表单校验
  $('#form').bootstrapValidator({
    excluded:[],
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields:{
      cate_name:{
        validators:{
          notEmpty:{
            message:'请选择二级分类'
          }
        }
      },
      proName:{
        validators:{
          notEmpty:{
            message:'商品不能为空'
          }
        }
      },
      proDesc:{
        validators:{
          notEmpty:{
            message:'商品描述不能为空'
          }
        }
      },
      //^[1-9]\d*$
      num:{
        validators:{
          notEmpty:{
            message:'商品库存不能为空'
          },
          //正则校验
          regexp:{
            regexp:/^[1-9]\\d*$/,
            message:'请输入正确的数字'
          }
        }
      },
      size:{
        validators:{
          notEmpty:{
            message:'商品尺寸不能为空'
          },
          regexp:{
            regexp:/^\d{2}-\d{2}$/,
            message:'请输入正确的尺寸信息'
          }
        }
      },
      oldPrice:{
        validators:{
          notEmpty:{
            message:'价格信息不能为空'
          }
        }
      },
      price:{
        validators:{
          notEmpty:{
            message:'价格信息不能为空'
          }
        }
      },
      brandLogo:{
        validators:{
          notEmpty:{
            message:'请上传3张图片'
          }
        }
      }
    }
  })

})