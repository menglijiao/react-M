import React from 'react'
import './css.less';

export default class Component extends React.Component {
    render() {
        return (
            <div>
                {/*圆*/}
                <svg className="svgStyle">
                    <circle
                        cx="100" //圆心的横坐标
                        cy="100"//圆心的纵坐标
                        r="50" //圆的半径
                        stroke="green" //圆的边框颜色
                        strokeWidth="2" //圆的边框宽度
                        fill="yellow"//圆的背景色
                    />
                </svg>
                {/*椭圆*/}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  className="svgStyle">
                    <ellipse
                        cx="150"//圆心的横坐标
                        cy="100"//圆心的纵坐标
                        rx="100"//横向半径
                        ry="50"//纵向半径
                        style={{
                            fill:'yellow',//背景色
                            stroke:'purple',//边框色
                            strokeWidth:3//边框宽度
                        }} />
                </svg>
                {/*将椭圆的背景色线性渐变*/}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svgStyle">
                    {/*自定义一个线性渐变*/}
                    <defs>
                        <linearGradient
                            id="grad1" //引用时根据
                            x1="0%"//横向渐变的开始位置
                            y1="0%"//纵向渐变的开始位置
                            x2="100%"//横向渐变的结束位置
                            y2="0%"//纵向渐变的结束位置
                        >
                            <stop
                                offset="0%"//在渐变线上的位置，显示什么色，中间就是两个颜色的过渡
                                style={{
                                    stopColor:'yellow',
                                    stopOpacity:1
                                }}
                            />
                            <stop
                                offset="50%"
                                style={{
                                    stopColor:'blue',
                                    stopOpacity:0.8
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor:'red',
                                    stopOpacity:1
                                }}
                            />
                        </linearGradient>
                    </defs>
                    <ellipse
                        cx="200"
                        cy="70"
                        rx="85"
                        ry="55"
                        fill="url(#grad1)" //椭圆背景色，引入上面定义的线性渐变
                    />
                    {/*文本*/}
                    <text fill="#ffffff" fontSize="45" fontFamily="Verdana" x="150" y="86">SVG</text>
                </svg>
                {/*直线*/}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svgStyle">
                    <line
                        x1="100"//起点的横坐标
                        y1="50"//起点的纵坐标
                        x2="300"//终点的横坐标
                        y2="100"//终点的纵坐标
                        style={{
                            stroke:'red',//直线颜色
                            strokeWidth:5//直线宽度
                        }}
                    />
                </svg>
                {/*多边形-五角星*/}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svgStyle" >
                    <polygon
                        points="100,0 159,181 5,69 195,69 41,181"//X,Y表示一个点的坐标，图形是由多个这样的点按顺序连起来的
                        style={{
                            fill:'yellow',//背景色
                            stroke:'purple',//连线颜色
                            strokeWidth:2//连线宽度
                        }}
                    />
                </svg>
                {/*折线*/}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svgStyle">
                    <polyline
                        points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
                        style={{
                            fill:'white',
                            stroke:'red',
                            strokeWidth:4
                        }}
                    />
                </svg>
                {/*六边形*/}
                <svg
                    className="svgStyle"
                    // width="172"
                    // height="180"
                    // viewBox="0 0 172 152"//viewBox的四个参数分别代表：最小X轴数值；最小y轴数值；宽度；高度。前两个暂时用不到，个人理解除非要对内部svg做整体位移，否则一般都是0
                >
                    <defs>
                        <linearGradient
                            id="backColor"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%">
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "#aa8838",
                                    stopOpacity: 1
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "#1c7eaa",
                                    stopOpacity: 1
                                }}
                            />
                        </linearGradient>
                        {/*阴影*/}
                        <filter id="f1" x="-10" y="-10" width="172" height="152">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur"/>
                            <feOffset in="blur" dx="0" dy="3" result="offsetBlur"/>
                            <feComposite in="offsetBlur" in2="SourceAlpha" operator="in" result="specOut"/>
                            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                                         k1="0" k2="0.7" k3="0.7" k4="0" result="litPaint"/>
                            <feMerge>
                                <feMergeNode in="offsetBlur"/>
                                <feMergeNode in="litPaint"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <polygon
                        fill={'url(#backColor)'}
                        stroke= "red"
                        strokeWidth= "1"
                        points= "48,11 124,11 162,76 124,141 48,141 11,76"
                    />
                </svg>
            </div>
        );
    }
}