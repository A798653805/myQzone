import Dywindow from "../../components/dynamic/dynamic.vue";
import Overview from '../../components/overview/overview.vue';
import MsgBoard from "../../components/msgboard_s/msgboard_s.vue";

let myHome = {
    data(){
        return {
            items:[
                {
                    goods: 0,
                },
                {
                    goods: 5
                }
            ]
        }
    },
    components: {
        Dywindow,
        Overview,
        MsgBoard
    },
    methods: {
        
    }
}

export {myHome};