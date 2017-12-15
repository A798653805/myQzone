import dywindow from "../../components/dynamic/dynamic.vue";

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
        dywindow
    },
    methods: {
        getNice(data) {
            item.goods = data;
        }
    }
}

export {myHome};