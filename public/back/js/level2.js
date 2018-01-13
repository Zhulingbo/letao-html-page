$(function () {

var pageNum = 1;
var pageSize = 5;

function render() {
  $.ajax({
    type:'get',
    url:'/category/querySecondCategoryPaging',
    data:{
      page:pageNum,
      pageSize:pageSize
    },
    success:function (info) {
      console.log(info);
      $('tbody').html(template('second_tab',info))

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
  $(".btn-addcate").on('click',function () {
    $(".add-cate").modal('show');
  })
})