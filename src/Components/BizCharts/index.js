import React, { Component } from 'react';
import {Button} from 'antd'
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import style from './css.less';


export default class BizCharts extends Component {
    constructor(){
        super();
        this.state = {
            smallData : [
                {
                    horizontal:'第一列',//第一个横坐标
                    vertical:1//该横坐标对应的纵坐标数据
                },{
                    horizontal:'第二列',//第二个横坐标
                    vertical:2
                },{
                    horizontal:'第三列',
                    vertical:3
                },
            ]
        }
    }
    fun = ()=>{
        this.setState({
            smallData : [
                {
                    horizontal:'第一列',//第一个横坐标
                    vertical:4//该横坐标对应的纵坐标数据
                },{
                    horizontal:'第二列',//第二个横坐标
                    vertical:2
                },{
                    horizontal:'第三列',
                    vertical:1
                },
            ]
        });
    };
    onPlotClick = (data)=>{
        console.log(data)
    };
    render() {
        const data = [
            {
                name: "大理",
                one: 18.9,
                two: 28.8,
                three: 39.3,
                four: 81.4,
                five: 47,
                six: 20.3,
                seven: 24,
                eight: 35.6
            },
            {
                name: "丽江",
                one: 12.4,
                two: 23.2,
                three: 34.5,
                four: 99.7,
                five: 52.6,
                six: 35.5,
                seven: 37.4,
                eight: 42.4
            }
        ];
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ["one","two", "three", "four", "five", "six", "seven", "eight"],
            // 展开字段集,要加哪几个字段在横坐标上显示
            key: "月份",// key字段，承载横坐标文本的字段
            value: "月均降雨量" // value字段，承载纵坐标数据的字段
        });
        console.log(dv)
        return (
            <div>
                <Chart
                    height={400}
                    data={dv}
                    forceFit
                    onPlotClick={this.onPlotClick}//鼠标点击绘图区域时触发的事件。
                >
                    <Axis name="月份" title/>
                    <Axis name="月均降雨量" title/>
                    <Legend />
                    <Tooltip
                        crosshairs={{
                            type: "rect"
                        }}
                        title='月份标题'
                    />
                    <Geom
                        type="line"
                        position="月份*月均降雨量"
                        color="#fdae6b"
                        size={2}
                        shape="smooth"
                    />
                    <Geom
                        type="interval"
                        position="月份*月均降雨量"
                        color={['name', ['#7CB5EC','#f00',]]}//每根柱子的颜色设置
                        adjust={[
                            {
                                type: "dodge",
                                marginRatio: 1/32// 数值范围为 0 至 1，用于调整分组中各个柱子的间距
                            }
                        ]}
                        shape='月份标题'
                    />
                </Chart>
            </div>
        );
    }

}




