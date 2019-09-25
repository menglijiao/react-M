import React,{ Component } from 'react';
import { Input,Button,Modal,Select } from 'antd';
import One from './One/index';
import './css.less';

export default class Content extends Component{
    constructor(props){
        super(props);
        //这里只会在初始状态下执行一次，因此，第一次props传下来的value是什么，text就是什么，后面props再传下来不同的value参数，这里就不会接收了。
        // 要想更新text值，这时只能在下面的componentWillReceiveProps里面可以接收到新的value属性，然后用setState赋值给text。
        //状态里可以数据类型方法，前提是返回后要是一个数据类型，里面可以打印。然后这里也是初始时渲染一次，正常打印，但之后就不再执行constructor了，也不再打印。里面也不能用setState
        //这个构造函数里可以执行函数event，切记这个event里不能使用setState,
        // 构造函数里也可打印
        // 总结：构造函数执行初始状态的一次，之后就不执行了，且里面不能用setState
        this.state = {
            text:props.value,
            a:[1,2].map(item=>{
                console.log(item)

                return item*2
            }),
            b:'',
            visible:false
        };
        this.event();
        console.log('content的constructor')
    }
    //初始状态执行一次，之后就不执行了。这里的setState,render会等setState修改完状态再渲染，因此就算这里用了setState,render也只渲染一次
    componentWillMount(){
        console.log('content的componentWillMount')
        this.setState({
            b:'bbb'
        });
    }
    //这里用setState,就会触发页面二次渲染，因为这个是在render之后执行，所以这样用setState会触发render以及这里调用的组件的componentWillReceiveProps和render
    componentDidMount(){
        console.log('content的componentDidMount')
    }
    //初始化时不会执行，但是父组件里用了setState后，子组件重新渲染后，同时这个钩子函数也会执行，无论是否有参数传递下来,
    //也无论传递的参数是否相同
    //若父组件的value改变了，则this.props.value和props.value不相同，但这个钩子函数还是会一模一样的执行三遍
    //但三次渲染传下来的参数互不影响
    // 注意：当父组件第二次渲染时，这个钩子函数执行后，render才执行，此时在里面用setState修改状态时，render会等状态修改完就猜执行，因此render只执行一次吗，而不会执行两次。因此跟直接在render里用this.props.value的效果是一样的。两种可选择一种方式即可。一般如果参数是回显用，则执行在render用this.props.value,其他的就在这里钩子函数里更新状态。
    //这里用setState,是在render之前，因此render会等setState修改完状态再渲染，因此这里用了setState也不会触发页面二次渲染
    componentWillReceiveProps(props){
        console.log('content的componentWillReceiveProps')
        this.setState({
            b:'bbb'
        });
        if(this.props.value !== props.value){
            // this.setState({
            //     text:props.value
            // })
        }
    }
    event = ()=>{

        console.log('event执行')
    };

    onChange=(text)=>{
        this.setState({
            text:text.target.value
        })
    };
    render(){

        return (
            <div>
                <Input value={this.state.text} onChange={this.onChange}/>
                <Button>权限设置</Button>
                <div className={'selete'}>FFV啊废物企鹅VB阿尔啊哒哒哒哒哒哒多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多
                </div>
                <div style={{width:200}} className={'aaa'}>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="无"
                        value={['001','002','003','004']}
                    />
                </div>


                <Modal
                    title="新增变更标注"
                    visible={this.state.visible}
                    onCancel={()=>this.setState({
                        visible:false
                    })}
                    maskClosable={false}
                    footer={null}
                    centered
                    width={446}
                    style={{height:400}}
                    wrapClassName={'sameStyle'}
                >
                    <div className={"content"}></div>
                    <div className={"btn"}>
                        <Button type="primary">应用</Button>
                        <Button>确定</Button>
                        <Button>取消</Button>
                    </div>
                </Modal>
                <One/>
            </div>        )
    }
}