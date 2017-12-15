import dywindow from "../../components/dynamic/dynamic.vue";

let myHome = {
    data(){
        return {
            users:[
                {
                    goods: 0,
                },
                {
                    goods: 0
                }
            ]
        }
    },
    components: {
        dywindow
    },
    methods: {
        touchNice() {
            this.goods++;
        }
    }
}

export {myHome};