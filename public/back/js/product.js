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

})