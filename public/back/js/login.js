$(function () {
var $form = $("form");
  $form.bootstrapValidator({
    //设置小图标
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields:{

      //验证用户名
      username:{
        validators:{
          notEmpty:{
            message:"用户名不能为空"
          },
          callback:{
            message:"用户名不存在"
          }
        }
      },
      //验证密码
      password:{
        validators:{
          notEmpty:{
            message:"密码不能为空"
          },
          stringLength:{
            min:6,
            max:12,
            message:"密码长度为6-12个字符"
          },
          callback:{
            message:"密码错误"
          }
        }
      }
    }
  })

  $form.on('success.form.bv',function (e) {
    e.preventDefault();
    console.log('呵呵');
    var data = $form.serialize();
    $.ajax({
      type:'post',
      url:'/employee/employeeLogin',
      data:data,
      success:function (data) {
        console.log(data);
        if (data.success){
          location.href = 'index.html';
        }
        if(data.error == 1000){
          $form.data("bootstrapValidator").updateStatus("username",  "INVALID",  'callback' );
        }
        if(data.error == 1001){
          $form.data("bootstrapValidator").updateStatus("password",  "INVALID",  "callback" );
        }
      }
    })
  })

  //重置功能
  $("[type='reset']").on('click',function () {
      $form.data("bootstrapValidator").resetForm();
  })

})