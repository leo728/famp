let day = [],days = getDays(),value=[];
for (let i=1;i<=days;i++){
    day.push(i+'日');
    value.push(Math.floor(Math.random()*10))
}
renderEcharts(day,value);
function renderEcharts(a,b){
    let option = {
        color: [
            '#2c6cff','#5085FF','#5ab1ef','#ffb980','#d87a80',
            '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
            '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
            '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
        ],
        title : {
            text: '项目概览',
            subtext: '根据不同时段统计项目数量',
            textStyle:{
                fontSize: 18,
                fontWeight: 'bolder',
                color: '#5085FF'
            }
        },
        grid: {
            backgroundColor:'#fff',
            borderWidth: 0,
            x: 30,
            y: 80,
            x2: 40,
            y2: 30
        },
        tooltip : {
            trigger: 'axis',
            axisPointer:{
                type: 'cross',
                crossStyle: {
                    color: '#5085FF',
                    width: 1,
                    type: 'solid'
                },
            },
            borderRadius:4,
            backgroundColor:'#5085FF'
        },
        xAxis : [
            {
                type : 'category',
                data : a,
                boundaryGap:0,
                axisLine:{
                    lineStyle:{color:'#5085FF',width:1},
                },
                axisTick:{
                    lineStyle:{color:'#5085FF',width:1}
                },
                splitLine:{
                    show:false
                },
                axisPointer: {
                    lineStyle: {
                        color: '#5085FF',
                        width: 1
                    }
                }
            },
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{color:'#5085FF',width:0}
                },
                axisTick:{
                    lineStyle:{color:'#5085FF',width:1}
                },
                splitLine:{
                    lineStyle:{color:'#e3e3e3',width:1,type:'dashed'}
                }
            }
        ],
        series : [
            {
                name:'',
                xAxisIndex:0,
                yAxisIndex:0,
                type:'line',
                data:b,
                smooth: true,
                smoothMonotone:'none',
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ],
                    lineStyle:{
                        color:'#5085FF',
                        type:'dotted',
                        width:1,
                        opacity:1,
                    }
                },
                lineStyle:{
                    color:'#5085FF',
                    width:2
                },
                areaStyle:{
                    opacity:.2,
                    color:'#5085FF'
                }
            }
        ]
    };
    const myChart = echarts.init(document.getElementById('chart'));
    myChart.setOption(option);
}
function setFor(e,f){
    $(f).addClass('am-active').siblings('.select-view>span').removeClass('am-active');
    let a,b,d = new Date(),m=d.getMonth()+1;
    switch (e) {
        case 1:
            if(m >=1 || m <= 3){
                a=['1月','2月','3月']
            }else if(m >=4 || m <= 6){
                a=['4月','5月','6月']
            }else if(m >=7 || m <= 9){
                a=['7月','8月','9月']
            }else {
                a=['10月','11月','12月']
            }
            b = getRanData(3);
            break;
        case 2:
            if(m >= 1 || m <=6){
                a=['1月','2月','3月','4月','5月','6月']
            }else {
                a=['7月','8月','9月','10月','11月','12月']
            }
            b = getRanData(6);
            break;
        case 3:
            a = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
            b = getRanData(12);
            break;
        default:
            a = day;
            b = value;
    }
    renderEcharts(a,b)
}
function getRanData(e){
    let d = [];
    for (let i=1;i<=e;i++){
        d.push(Math.floor(Math.random()*10))
    }
    return d;
}