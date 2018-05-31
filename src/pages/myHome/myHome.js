import Dywindow from "../../components/dynamic/dynamic.vue";
import Overview from '../../components/overview/overview.vue';
import MsgBoard from "../../components/msgboard_s/msgboard_s.vue";
import {
  verify
} from '../../components/utils/verify';

let myHome = {
  data() {
    return {
      mood: []
    }
  },
  components: {
    Dywindow,
    Overview,
    MsgBoard
  },
  methods: {
    getMood() {
      this.axios.post('/api/mood/getmood').then(res => {
        if (verify(res.flag)) {
          if (res.data) {
            this.mood = res.data.map(item => item);
          }
        }
      })
		},
		 delonly(id) {
		     this.axios.post('/api/mood/delone', {
		       id: id
		     }).then(res => {
		       if (verify(res.flag)) {
		         this.$message({
		           message: res.message,
		           type: 'success'
		         })
		         this.getMood()
		       }
		     })
		   },
		   good(id) {
		     this.axios.post('/api/mood/good', {
		       id: id
		     }).then(res => {
		       if (verify(res.flag)) {
		         if (res.u_data) {
		           this.$message({
		             message: res.message,
		             type: 'error'
		           })
		         } else {
		           this.$message({
		             message: res.message,
		             type: 'success'
		           });
		           //  this.getMood()
		           location.reload();
		         }
		       }
		     })
		   },

	},
	created(){
		this.getMood();
	}
}

export {
  myHome
};
