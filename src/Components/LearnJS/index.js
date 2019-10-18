import React, { Component } from 'react';
import {Button,Modal,Table} from 'antd';
import './css.less';


export default class App extends Component {
    constructor(){
        super();
        this.state = {};
        this.data = '[{"guid":"A0BA64483ACC64CD5995947F55D3C3C86","customCode":"AZMJSCSF","nodeType":2,"customName":"按子目计算的安全文明施工措施项目","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A21A344F71B5E47269D2A6F6F4B455B43","customCode":"AQFHWMSG","nodeType":1,"customName":"安全防护、文明施工措施费部分","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A242B5AFE5ECA45A195062E19FED033DE","customCode":"011702006001","nodeType":3,"customName":"矩形梁模板","characterValue":"矩形梁模板(梁宽cm) 25以外 支模高度3.60m内(地上)","checkTotalPrice":20483.28,"totalPrice":81933.12,"canTotalPrice":61449.84},{"guid":"A265AA595213B420480191928A1E9123C","customCode":"","nodeType":4,"customName":"","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A36D8F9F2837E4988B4B1DBC7C1E3015A","customCode":"A21-54","nodeType":5,"customName":"地下室楼板模板(楼板厚cm) 50 支模高度3.6m","characterValue":"","checkTotalPrice":0,"totalPrice":67949.14,"canTotalPrice":67949.14},{"guid":"A37C2ACE82BFE4B68A065328F483E84C2","customCode":"QTCSF","nodeType":1,"customName":"其他措施费部分","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A407EA3DBA63C4F4FB6E0DD005BF47CF4","customCode":"XSJSAQFHWMSG001","nodeType":-100,"customName":"按系数计算的安全防护、文明施工措施项目费（包括文明施工、环境保护、临时设施费、安全施工费）","characterValue":"","checkTotalPrice":0,"totalPrice":19839.492,"canTotalPrice":19839.492},{"guid":"A547B771B1A7D44B59BA2BA71CBACB4EF","customCode":"MBZC001","nodeType":3,"customName":"模板的支撑","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A600B0781548D496DA63C7D485772C1DD","customCode":"AQFHWMSG","nodeType":1,"customName":"安全防护、文明施工措施费部分","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A630AA6A3C008411DA05C29E6F8EAB560","customCode":"A21-33-2","nodeType":5,"customName":"梁模板 单梁、连续梁(梁宽cm) 25以外 支模高度10m","characterValue":"","checkTotalPrice":0,"totalPrice":81936.98,"canTotalPrice":81936.98},{"guid":"A678D2295202E423583A6959E26799749","customCode":"XCSZJYJJ001","nodeType":3,"customName":"现场仅设置卷扬机架","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A6986AB18DFCE4BC4ACF9F95B8BF441C1","customCode":"XCSGWL001","nodeType":3,"customName":"现场围挡","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A69DADD0528EC485CA0CE7B74CCF4A508","customCode":"011702014001","nodeType":3,"customName":"有梁板模板","characterValue":"有梁板模板 支模高度3.60m内","checkTotalPrice":18910.078,"totalPrice":75640.31,"canTotalPrice":56730.231999999996},{"guid":"A8EA3E826FA8245FA8075F07ACE13D1BD","customCode":"011702002001","nodeType":3,"customName":"矩形柱模板","characterValue":"矩形柱模板(周长m) 支模高度3.60m内 1.8外","checkTotalPrice":4871.1001,"totalPrice":20323.73,"canTotalPrice":15452.6299},{"guid":"A90232063A7514583AC51015D0444AF1C","customCode":"","nodeType":2,"customName":"第三节  混凝土模板及支架(撑)","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A9625912EDAEA45C2A873265765A86540","customCode":"DXJXSBJCCJAC001","nodeType":3,"customName":"大型机械设备进出场及安拆","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"AA14AC7DE779640F78DFBA5D243E13141","customCode":"MBJZJF","nodeType":2,"customName":"模板及支架费","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"AA1888C6CEF9E41BE9E2BAB0E05B43880","customCode":"A21-16","nodeType":5,"customName":"矩形柱模板(周长m) 支模高度3.6m内 1.8外","characterValue":"","checkTotalPrice":0,"totalPrice":20323.674,"canTotalPrice":20323.674},{"guid":"AB21AA947DA3C49899F2B44A56A0A4C80","customCode":"A21-59","nodeType":5,"customName":"板模板 支模高度超过10m每增加1m内","characterValue":"","checkTotalPrice":0,"totalPrice":7697.2495,"canTotalPrice":7697.2495},{"guid":"ACBB5B3E7B535417EA9A038B80F87898E","customCode":"","nodeType":4,"customName":"","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"AD6C80514198F4FCA87854EB7D2EE97F2","customCode":"","nodeType":4,"customName":"","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"AEB39FDCE332E4702A4D22B4745D47605","customCode":"QTCSF","nodeType":1,"customName":"其他措施费部分","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"AEED6CCF77DD5419DA1CF571F0D063B74","customCode":"","nodeType":4,"customName":"","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"AF4DF926942EB46179BEC81E763443D23","customCode":"AXSJSCSXMF","nodeType":2,"customName":"按系数计算的其他安全文明施工措施项目","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A2C3D6013345842818D3836DD46E69FCB","customCode":"GGCSF001","nodeType":-100,"customName":"赶工措施费","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A4B688A07F62F40D98928795FAFAA0149","customCode":"YJSGZJF001","nodeType":-100,"customName":"夜间施工增加费","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0},{"guid":"A5CE53F1A78D14136A43D7EBCE0DAE924","customCode":"WMGDZJF001","nodeType":-100,"customName":"文明工地增加费","characterValue":"","checkTotalPrice":0,"totalPrice":4367.1836,"canTotalPrice":4367.1836},{"guid":"A63B52D35AEBE463B962B6249D73CF3B2","customCode":"NJCQZJCC001","nodeType":-100,"customName":"泥浆池（槽）砌筑及拆除","characterValue":"","checkTotalPrice":0,"totalPrice":0,"canTotalPrice":0}]';
        this.columns = [
            {
                title: '项目编码',
                dataIndex: 'customCode',
                key: 'customCode',
                width:100,
                textWrap: 'word-break',
                ellipsis: true,
            },
            {
                title: '项目名称',
                dataIndex: 'customName',
                key: 'customName',
                width:100,
                ellipsis: true,
            },
            {
                title: '项目特征',
                dataIndex: 'characterValue',
                key: 'characterValue',
                width:100,
            },
            {
                title: '类别',
                dataIndex: 'nodeType',
                key: 'nodeType',
                width:100,
                align:'center'
            },
            {
                title: '已关联金额',
                dataIndex: 'checkTotalPrice',
                key: 'checkTotalPrice',
                width:100,
                align:'center'
            },
            {
                title: '合同总额',
                dataIndex: 'totalPrice',
                key: 'totalPrice',
                width:100,
                align:'center'
            },
            {
                title: '可获取金额',
                dataIndex: 'canTotalPrice',
                key: 'canTotalPrice',
                // width:100,
                align:'center'
            },
        ];

        // this.data = [
        //     {
        //         key:'1',
        //         amount:111,
        //         used:10,
        //         children:[
        //             {key:'1-1',amount:21,used:9},
        //             {key:'1-2',amount:22,used:11}
        //             ]
        //     },
        //     {
        //         key:'1',
        //         amount:44,
        //         used:4,
        //         children:[
        //             {key:'1-1',amount:21,used:9},
        //             {key:'2-2',amount:13,used:7}
        //             ]
        //     }
        // ]
    }
    componentWillMount(){

    }

    event = (value = '111',text = '222')=>{
        console.log(value,text)
    };

    render() {
        return (
            <div>
                <Button onClick={()=>this.event('sss')}>
                    有参数
                </Button>
                <Button onClick={()=>this.event()}>
                    无参数
                </Button>
                <Button onClick={this.event}>
                    无参数,直接调用
                </Button>
                <div className='ceshi'>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                <Modal
                    visible={true}
                    title={'清单选择'}
                    width={800}
                    style={{height:550,padding:0}}
                    bodyStyle={{padding:0}}
                >
                    <Table
                        columns={this.columns}
                        dataSource={JSON.parse(this.data)}
                        scroll={{ y:500 }}
                        bordered
                        // size={'small'}
                        tableLayout={'fixed'}
                        // width={'100%'}
                        style={{width:'100%'}}
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    console.log(record)
                                    this.setState({
                                        selectObj:record
                                    });
                                }
                            }
                        }
                        }

                        rowKey={(info)=>(info.guid)}
                    />
                </Modal>
            </div>

        );
}
}