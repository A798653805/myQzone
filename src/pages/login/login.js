import Cookie from "js-cookie";
import MD5 from "js-md5";

let login = {
  data() {
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    };
    let checkpassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('密码不能为空'))
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{
            validator: checkUsername,
            trigger: 'blur'
          },
          {
            min: 6,
            max: 14,
            message: '长度在 6 到 14 个字符',
            trigger: 'blur'
          },
          {
            pattern: /^[a-zA-Z0-9_-]{6,14}$/,
            message: '请输入正确用户名格式',
            trigger: 'blur'
          },
        ],
        password: [{
            validator: checkpassword,
            trigger: 'blur'
          },
          {
            min: 6,
            max: 14,
            message: '长度在 6 到 14 个字符',
            trigger: 'blur'
          },
          {
            pattern: /^[a-zA-Z0-9_-]{6,14}$/,
            message: '请使用正确密码格式',
            trigger: 'blur'
          },
        ]
      }
    };
  },

  methods: {
    //跳转到注册页面
    toRegister() {
      this.$router.push({
        path: '/register'
      });

    },
    /**
     * 提交信息 
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /**
     * 向后台发送数据
     */
    login() {
      
      this.axios.post('/api/users/login', {
        username: this.loginForm.username,
        password: MD5(this.loginForm.password)
      }).then((res) => {
        if (res.flag) {
          sessionStorage.setItem('token', res.token)
          window.location.href = 'http://localhost:8080/#/home';
        } else {
          this.$message({
            message: '用户名或密码错误，请重新输入',
            type: 'error'
          });
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  },

  created() {
    if(sessionStorage.getItem('flag')){
      this.$message({
        message: 'token过期了，请重新登录',
        type: 'error'
      })
      sessionStorage.removeItem('flag');
    }
  },
}

export {
  login
};
