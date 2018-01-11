$(function () {
//
  // 基于准备好的dom，初始化echarts实例
  var myChart1 = echarts.init(document.getElementById('main1'));
  var data = [
    {name:"耐克",num:1000},
    {name:"阿迪",num:900},
    {name:"迪卡侬",num:700},
    {name:"匡威",num:20},
    {name:"回力",num:40},
    {name:"安德玛",num:1200},
    {name:"李宁",num:500},
  ]
  var arr1 = data.map(function (e, i) {
    return e.name;
    // return arr2 = e.num;
  })
  var arr2 = data.map(function (e, i) {
    // return arr1 = e.name;
    return e.num;
  })
  console.log(arr1);
  // 指定图表的配置项和数据
  var option1 = {
    title: {
      text: '2017年度鞋类销量'
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: arr1
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: arr2
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);

  //圆饼图
  var myChart2 = echarts.init(document.getElementById('main2'));
  option2 = {
    title : {
      text: '乐淘网销售数据',
      subtext: '你懂的',
      x:'center'
    },
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
      {
        name: '访问来源',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:335, name:'直接访问'},
          {value:310, name:'邮件营销'},
          {value:234, name:'联盟广告'},
          {value:135, name:'视频广告'},
          {value:1548, name:'搜索引擎'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart2.setOption(option2);

  //菜单按钮点击事件绑定
  $(".menu_icon").on('click',function () {
    $(".le_aside").toggleClass('move');
    $(".letao").toggleClass('move');
  })
})