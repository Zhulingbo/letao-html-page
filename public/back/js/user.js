$(function () {

  var pageNum = 1;
  var pageSize = 5;

  function render() {

    $.ajax({
      type:'get',
      url:'/user/queryUser',
      data:{
        page:pageNum,
        pageSize:pageSize
      },
      success:function (info) {
        console.log(info);
        $('tbody').html(template('user-tmp',info));

        //
      }
    })

  }
  render();

})