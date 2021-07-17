import React,{ Component } from 'react';
import { Upload, Modal,Button,Carousel  } from 'antd';
import './css.less';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class Box extends Component{
    state = {
        oneVisible:false,
        previewVisible1: false,
        previewVisible: false,
        previewImage1: '',
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
        ],
    };

    //关闭图片预览
    handleCancel = () => this.setState({ previewVisible: false });

    //打开图片预览
    //async...await:将异步转变成同步，首先在 function 前面加 async 用来说明这个函数是一个异步函数，
    // 当然，async是要和await配合使用的，await 意思是等一下，等着getBase64（）这个函数执行完毕，得到值后再赋值给file.preview，
    // 然后再用file.preview的值进行下一步操作，就是这么简单！
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ file,fileList }) => {
        if (file.status === 'uploading') {
        }
        if (file.status === 'done') {
        }
        fileList.forEach((item,ind)=>{
            if(item.thumbUrl){
                let obj = {
                    name: item.name,
                    status: item.status,
                    uid: item.uid,
                    url: item.thumbUrl
                };
                fileList.splice(ind,1,obj)
            }
        });
        this.setState({ fileList });
    };

    render() {
        const {previewVisible1, previewVisible, previewImage1,previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <div>
                    <Button onClick={()=> {this.setState({oneVisible:true})}}>上传图片</Button>
                </div>
                <div>
                    {
                        fileList.map(item=>{
                            return <img
                                src={item.url}
                                key={item.uid}
                                className="img"
                                onClick={()=>{
                                    this.setState({
                                        previewVisible1:true,
                                        previewImage1:item.url
                                    })
                                }
                            }/>

                        })
                    }
                </div>
                <Modal
                    visible={this.state.oneVisible}
                    footer={null}
                    onCancel={()=> {this.setState({oneVisible:false})}}
                >
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                    >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={() => this.setState({ previewVisible: false })}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Modal>
                <Modal
                    visible={previewVisible1}
                    footer={null}
                    onCancel={() => this.setState({ previewVisible1: false })}
                >
                    <Carousel
                        autoplay
                        slidesToShow={1}//每次显示的张数
                        slidesToScroll={1}//一次转多少张
                    >
                        {
                            fileList.map(item=>{
                                return <img alt="example" style={{ width: '100%' }} src={item.url} key={item.uid}/>
                            })
                        }
                    </Carousel>
                </Modal>
            </div>
        );
    }
}