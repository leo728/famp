<template>
    <div id="main" style="height: 320px;width: 100%;box-sizing: border-box; overflow: hidden"></div>
</template>

<script>
    const echarts = require('echarts');
    export default {
        name: 'home',
        data() {
            return {
                day: [],
                value: []
            }
        },
        created(){
            this.setDataValue()
        },
        mounted() {
            setTimeout(this.renderEcharts,1000)
        },
        methods: {
            renderEcharts() {
                const myChart = echarts.init(document.getElementById('main'));
                myChart.setOption({
                    color: [
                        '#2c6cff', '#5085FF', '#5ab1ef', '#ffb980', '#d87a80',
                        '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
                        '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
                        '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
                    ],
                    grid: {
                        backgroundColor: '#fff',
                        borderWidth: 0,
                        x: 30,
                        y: 20,
                        x2: 40,
                        y2: 30
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            crossStyle: {
                                color: '#5085FF',
                                width: 1,
                                type: 'solid'
                            },
                        },
                        borderRadius: 4,
                        backgroundColor: '#5085FF'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.day,
                            boundaryGap: 0,
                            axisLine: {
                                lineStyle: {color: '#5085FF', width: 1},
                            },
                            axisTick: {
                                lineStyle: {color: '#5085FF', width: 1}
                            },
                            splitLine: {
                                show: false
                            },
                            axisPointer: {
                                lineStyle: {
                                    color: '#5085FF',
                                    width: 1
                                }
                            }
                        },
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLine: {
                                lineStyle: {color: '#5085FF', width: 0}
                            },
                            axisTick: {
                                lineStyle: {color: '#5085FF', width: 1}
                            },
                            splitLine: {
                                lineStyle: {color: '#e3e3e3', width: 1, type: 'dashed'}
                            }
                        }
                    ],
                    series: [
                        {
                            name: '',
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            type: 'line',
                            data: this.value,
                            smooth: true,
                            smoothMonotone: 'none',
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ],
                                lineStyle: {
                                    color: '#5085FF',
                                    type: 'dotted',
                                    width: 1,
                                    opacity: 1,
                                }
                            },
                            lineStyle: {
                                color: '#5085FF',
                                width: 2
                            },
                            areaStyle: {
                                opacity: .2,
                                color: '#5085FF'
                            }
                        }
                    ]
                });
            },
            setFor(e) {
                let a, b, d = new Date(), m = d.getMonth() + 1;
                switch (e) {
                    case 1:
                        if (m >= 1 || m <= 3) {
                            a = ['1月', '2月', '3月']
                        } else if (m >= 4 || m <= 6) {
                            a = ['4月', '5月', '6月']
                        } else if (m >= 7 || m <= 9) {
                            a = ['7月', '8月', '9月']
                        } else {
                            a = ['10月', '11月', '12月']
                        }
                        b = getRanData(3);
                        break;
                    case 2:
                        if (m >= 1 || m <= 6) {
                            a = ['1月', '2月', '3月', '4月', '5月', '6月']
                        } else {
                            a = ['7月', '8月', '9月', '10月', '11月', '12月']
                        }
                        b = getRanData(6);
                        break;
                    case 3:
                        a = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
                        b = getRanData(12);
                        break;
                    default:
                        a = day;
                        b = value;
                }
                renderEcharts(a, b)
            },
            getRanData(e) {
                let d = [];
                for (let i = 1; i <= e; i++) {
                    d.push(Math.floor(Math.random() * 10))
                }
                return d;
            },
            getDays() {
                let date = new Date();
                let year = date.getFullYear();
                let mouth = date.getMonth() + 1;
                let days;
                if (mouth === 2) {
                    days = year % 4 === 0 ? 29 : 28;
                } else if (mouth === 1 || mouth === 3 || mouth === 5 || mouth === 7 || mouth === 8 || mouth === 10 || mouth === 12) {
                    days = 31;
                } else {
                    days = 30;
                }
                return days;
            },
            setDataValue(){
                let dayArr = [],days = this.getDays(),valueArr=[];
                for (let i=1;i<=days;i++){
                    dayArr.push(i+'日');
                    valueArr.push(Math.floor(Math.random()*10))
                }
                this.day = dayArr
                this.value = valueArr
            }
        }
    }
</script>

<style scoped>

</style>