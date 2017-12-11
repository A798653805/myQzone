<template>
    <div class="myhome-box">
        <div class="overview-box">
            <div class="overview">
                <ul>
                    <li>
                        <a href="">
                           <span>100</span>
                           <p>照片</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>100</span>
                            <p>博客</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>100</span>
                            <p>心情</p>
                        </a>
                    </li>      
                </ul>
            </div>
        </div>
        <div class="dynamic-box">
            <dywindow></dywindow>
        </div>
         <div class="msgboard-box">
            留言板
        </div>
    </div>
</template>

<style lang="less">
    @import url('./less/myHome.less');
</style>

<script>
import { myHome } from "./myHome";

export default myHome
</script>


