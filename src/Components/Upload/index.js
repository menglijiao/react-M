import React, { Component } from 'react';
import { Upload, Icon, Modal } from 'antd';
import './css.less';

//异步读取文件
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            previewVisible: false,//控制预览modal的
            previewImage: '',
            fileList: [
                {
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }
            ],
        };
    }
    handleCancel = () => this.setState({ previewVisible: false });

    //打开图片预览
    handlePreview = async file => {
        //如果图片参数里url和preview这两个参数都没有的话，就取参数originFileObj将其转变为base64编码
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        console.log(file.originFileObj)
        // getBase64(file.originFileObj)
        //有file.url1,去该值，没有，则取file.preview
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    //图片变化时的回调；上传，删除时执行
    // response为上传接口的响应
    //上传时执行三次，状态info.file.status分别为uploading,uploading,done.前两次没有response，最后一次上传成功后，状态变成done，也有了response
    //重点：每一次执行都必须获取fileList，传递给upload标签。若第一次没有获取传递进去，则第二次就不执行了。就无法上传成功
    handleChange = (info) =>{
        console.log(info.file);
        let fileList = info.fileList;
        this.setState({ fileList })
    };


    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        //一般图片上传组件需要两个标签。一个是Upload上传标签，一个是图片预览modal。
        // Upload：
        //action:上传接口
        // fileList：所有文件列表
        //onPreview：点击了图片的预览图标的回调
        //onChange：图片上传，删除，都会调用这个方法
        return (
            <div className="clearfix">
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 3 ? null : (
                            <div>
                                <Icon type="plus" />
                                <div className="ant-upload-text">Upload</div>
                            </div>
                        )}
                </Upload>
                <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img
                        alt="example"
                        style={{ width: '100%' }}
                        src={previewImage}
                    />
                </Modal>
            </div>
        );
}
}