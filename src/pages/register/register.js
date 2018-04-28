import MD5 from 'js-md5';

let register = {
  // 绑定数据
  data() {
    //验证两次面是否相同
    let validatePass = (rule, value, callback) => {
      if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    //验证账号是否存在
    let validateUname = (rule, value, callback) => {
      this.axios.post('/api/users/uname', {
        username: this.registerForm.username
      }).then((res) => {
        if (res.flag) {
          callback(new Error('用户已存在'));
        } else {
          callback();
        }
      }).catch((err) => {
        console.log(err);
        return false;
      })
    }
    return {
      registerForm: {
        username: '',
        password: '',
        repassword: '',
        nickname: '',
        introduction: ''
      },
      rules: {
        username: [{
            required: true,
            message: '请输入用户名',
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
            message: '请使用字母，数字，下划线',
            trigger: 'blur'
          },
          {
            validator: validateUname,
            trigger: 'blur'
          }
        ],
        password: [{
            required: true,
            message: '请输入密码',
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
            message: '请使用字母，数字，下划线',
            trigger: 'blur'
          }
        ],
        repassword: [{
            required: true,
            message: '请再次输入密码',
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
            message: '请使用字母，数字，下划线',
            trigger: 'blur'
          },
          {
            validator: validatePass,
            trigger: 'blur'
          }
        ],
        nickname: [{
          required: true,
          message: '请输入昵称',
          trigger: 'blur'
        }],
        introduction: [{
          required: true,
          message: '请输入个人简介',
          trigger: 'blur'
        }]
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
      this.axios.post('/api/users/register', {
          username: this.registerForm.username,
          password: MD5(MD5(this.registerForm.password)),
          nickname: this.registerForm.nickname,
          introduction: this.registerForm.introduction
        })
        .then((response) => {
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
    //提交数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
}

export {
  register
};
