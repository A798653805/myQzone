let login = {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
        };
    },
    // 方法
    methods: {
        //跳转到注册页面
        toRegister() {
            window.location.href = 'http://localhost:8080/#/register'
        }
    },

    // dom创建
    created() {
        setTimeout(function () {
            this.showFlag = true;
            console.log(this.showFlag);
        }, 2000);

    },
}

export {login};