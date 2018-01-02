import dywindow from "../../components/dynamic/dynamic.vue"
import ViewDeta from '../../pages/myHome/viewDeta/viewDeta.vue'
import MessageBoard from '../../pages/myHome/mseeageBoard/messageBoard.vue'

let myHome = {
  data() {
    return {
      items: [{
          goods: 0,
        },
        {
          goods: 5
        }
      ]
    }
  },
  components: {
    dywindow,
    ViewDeta,
    MessageBoard
  },
  methods: {

  }
}

export {
  myHome
};
