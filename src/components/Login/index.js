import React from 'react'
import { Form, Input, Button, Icon, Checkbox, notification} from 'antd'

import 'antd/dist/antd.css'


const FormItem = Form.Item;

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.openNotificationWithIcon = this.openNotificationWithIcon.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                let n = values.username;
                let p = values.password;
                if (n === 'xiaomoyu' && p === 'xiaomoyu') {
                    // 表单的路由处理
                    document.cookie = "nowKey=" + "home";
                    // browserHistory.push('/');
                } else {
                    this.openNotificationWithIcon('info');
                }
            }
        });
    }

    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon(type) {
        return notification[type]({
            message: '用户名&密码',
            description: '都是：xiaomoyu',
            duration: 6
        })
    }

    componentDidMount() {
        this.openNotificationWithIcon('info');
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log("this.props => ", this.props)
        return (
            <div id="loginpagewrap" style={{ "width": "100%", "height": "100%", "background-color": "#f9f9f9", "overflow": "hidden"  }}>
                <p style={{ "text-align": "center","font-size": "27px","font-family": "cursive","margin-top": "10%","margin-bottom": "1.4%","font-weight": "bold","color": "#888" }}>鱼策数据</p>
                <div id="loginWrap" style={{ "width": "24%","margin": "0 auto","border":"1px #ccc solid","padding": "2%","border-radius": "5px","background-color": "#fff"}}>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input type="password" placeholder="Password" />
                            )}
                        </FormItem>

                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" style={{ "float": "right" }} href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" id="loginBtn" style={{ "width": "100%" }}>登录</Button>
                            Or <a href="">注册账号!</a>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

let Login = Form.create()(LoginPage); // 需要Form.create(), 否则this.props.form会找不到
export default Login;

