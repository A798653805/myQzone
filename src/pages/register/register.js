import axios from '../../../node_modules/axios/dist/axios'

let register = {
    // 绑定数据
    data() {
        return {
            registerForm: {
                username: '',
                password: '',
                repassword: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'blur' },
                    { pattern: /^[a-zA-Z0-9_-]{6,14}$/, message: '请使用字母，数字，下划线', trigger: 'blur'}
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'blur' },
                    { pattern: /^[a-zA-Z0-9_-]{6,14}$/, message: '请使用字母，数字，下划线', trigger: 'blur'}                    
                ],
                repassword: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'blur' },
                    { pattern: /^[a-zA-Z0-9_-]{6,14}$/, message: '请使用字母，数字，下划线', trigger: 'blur' }                    
                ]
            }
        };
    },

    // 方法
    methods: {
        //返回登录页
        returnLogin() {
            window.location.href = 'http://localhost:8080/#/login';
        },
        //发送数据
        register() {
            axios.post('/api/users/register', {
                username: this.registerForm.username,
                password: this.registerForm.password,
            })
                .then(function (response) {
                    this.$message({
                        message: '注册成功,3秒钟后自动返回登录页面',
                        type: 'success'
                    });
                    setTimeout(() => {
                        this.returnLogin();
                    }, 3000);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        //验证登录规则
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid && this.validatePwd()) {
                   this.register();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
       /**
        * 验证两次密码是否相同
        */
        validatePwd(){
            let repwd = document.getElementById('repwd');
            let message = repwd.getElementsByClassName('el-form-item__content')[0];
            let div = document.createElement('div');
            if (this.registerForm.repassword.length >= 6 && this.registerForm.repassword.length <= 14) {
                if (this.registerForm.password !== this.registerForm.repassword) {
                    div.setAttribute('class', 'el-form-item__error');
                    div.setAttribute('id', 'cunzai');
                    div.innerHTML = '两次密码输入不一致'
                    repwd.className += ' ' + 'is-error';
                    message.appendChild(div);
                    return false;
                } else {
                    if (repwd.getAttribute('class').indexOf('is-error') > -1 && document.getElementById('cunzai')) {
                        let reg = new RegExp('(\\s|^)' + 'is-error' + '(\\s|$)');
                        repwd.className = repwd.className.replace(reg, '');
                        message.removeChild(document.getElementById('cunzai'));
                    }
                    return true;
                }
            }
        }
    },
}

export {register};