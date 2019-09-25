import React from 'react'
import {Transfer, Tree} from 'antd'
// import ss from './one/index'
// import jsPDF from "jspdf"

import './css.less';
const { TreeNode } = Tree;

// 每次点击左边的复选框和节点都会执行：
//selectedKeys = checkedKeys:左边选中的key数组与右边key数组集合
//eventKey:左边当前选中的key字符串
//方法作用：判断checkedKeys数组里有没有当前选中的key字符串，有的话返回true，没有则返回false
const isChecked = (selectedKeys, eventKey) => {
    return selectedKeys.indexOf(eventKey) !== -1;
};

//渲染左边的树：将所有数据的凡是有右边key值的值都禁用
//treeNodes:所有的树数据；
//checkedKeys:显示在右边的key数组
const generateTree = (treeNodes = [], checkedKeys = []) => {
    return treeNodes.map(({ children, ...props }) => (
        <TreeNode {...props} disabled={checkedKeys.includes(props.key)}>
            {generateTree(children, checkedKeys)}
        </TreeNode>
    ));
};
/**
 *
 * @param {array}  dataSource = treeData
 * @param {array} targetKeys 在右边的所有节点的key值
 * @param {function} restProps 就是下面的onchange方法
 * @return {*}
 */

//这个变量等于一个方法。方法里return出节点元素，那么实际上变量就等于这个节点元素，因此可以直接在render里用标签
const TreeTransfer = ({ dataSource, targetKeys, ...restProps }) => {
    //创建一个空数组，将treeData里的所有节点（无论子父节点），都加到数组中，使得所有的子父节点都变成同级
    const transferDataSource = [];
    function flatten(list = []) {
        console.log(list)
        list.forEach((item) => {
            transferDataSource.push(item);
            flatten(item.children);
        });
    }
    flatten(dataSource);
    console.log(transferDataSource)
    return (
        <Transfer//这个是穿梭框
            {...restProps}
            targetKeys={targetKeys}//显示在右侧框数据的 key 集合
            dataSource={transferDataSource}//数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。
            className="tree-transfer"//自定义类
            render={(item) => item.title}
            showSelectAll//是否展示全选勾选框
        >
            {/*用一个箭头函数，return出节点，相当于这里直接放置了一个节点*/}
            {/*穿梭框的里面的内容用函数来返回，因为有参数接收：direction-'left'or'right'；selectedKeys：选中的key数组（调用两次，因为有左右之分，例如：左边选中-["0-0", "0-1"]，右边没有选中：[]）*/}
            {({ direction, onItemSelect, selectedKeys }) => {
                if (direction === 'left') {
                    //selectedKeys:左边选中的key数组
                    //targetKeys:显示在右边的key数组
                    //checkedKeys：将显示在与右边的key数组，和在左边选中的key数组合并，即可得到点击添加按钮后的右边的所有节点的key数组
                    const checkedKeys = [...selectedKeys, ...targetKeys];
                    // console.log(checkedKeys);

                    return (
                        <Tree//这里是树节点
                            blockNode//是否节点占据一行
                            checkable//节点前添加 Checkbox 复选框
                            checkStrictly//checkable 状态下节点选择完全受控（父子节点选中状态不再关联）
                            defaultExpandAll//默认展开所有树节点（父子节点不关联）
                            checkedKeys={checkedKeys}//这个是在右边的key数组，将其给属性checkedKeys，表示在左边将这些已经在右边的节点选中
                            onCheck={(//点击复选框时触发,每点一次选中就执行一次
                                _,
                                {
                                    node: {
                                        props: { eventKey }
                                    }
                                }
                            ) => {
                                //点击后，这里的函数先执行，这里的checkedKeys是上一个的checkedKeys，此时里面还没有添加进去刚刚点击的key字符串，所有isChecked(checkedKeys, eventKey)一定是返回false的，取反就变成true，表示最新的checkedKeys里面有了刚刚点击的key数组
                                //onItemSelect：这个函数的作用应该是：第一个参数为当前key值，第二个为bool值，bool为true，则将其勾选上，为false，则取消勾选
                                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
                            }}
                            onSelect={(//点击树节点触发
                                _,
                                {
                                    node: {
                                        props: { eventKey }
                                    }
                                }
                            ) => {
                                onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
                            }}
                        >
                            {/*树的子节点*/}
                            {generateTree(dataSource, targetKeys)}
                        </Tree>
                    );
                }
            }}
        </Transfer>
    );
};

const treeData = [
    { key: '0-0', title: '0-0' },
    {
        key: '0-1',
        title: '0-1',
        children: [{ key: '0-1-0', title: '0-1-0' }, { key: '0-1-1', title: '0-1-1' }]
    },
    { key: '0-2', title: '0-2' }
];

class Component extends React.Component {
    state = {
        targetKeys: []
    };

    //改变时输出在右边的所有节点key值["0-0", "0-1", "0-1-0"]
    onChange = (targetKeys) => {
        console.log('Target Keys:', targetKeys);
        this.setState({ targetKeys });
    };
    //若前面为对象：key是属性，value是对应的属性值
    //若前面为数组：key是索引，value是对应的元素
    //只能返回以下几种数据类型：(只能在条件筛选里面返回，最终一定要返回出value)
    // number:a的值替换为该数字
    // string:a的值替换为该字符串
    // Boolean:a的值替换为该布尔值
    // array:a的值替换为该数组
    // object:a的值替换为该对象
    // null:a的值替换为该null
    // undefined：删除a属性

    replacer=(key, value)=> {
        console.log(key,value)
        if (key === 'a') {
            return '111';
        }
        return value;
        // return undefined
    }

    render() {

        const { targetKeys } = this.state;
        return (
            <div>
                <TreeTransfer
                    dataSource={treeData}
                    targetKeys={targetKeys}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default Component;