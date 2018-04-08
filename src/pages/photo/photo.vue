<template>
  <div class="photo-box">
    <div class="title-box">
      相册
    </div>
    <div class="photo">
      <div class="photo-list">
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相册名称</p>
          </div>
        </div>
        <div class="photo-item">
          <div class="photo">
            <img class="photo-img" src="static/imgs/top.jpg" alt="">
            <p class="photo-name">相1册名称</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
        <el-pagination layout="prev, pager, next" :page-size="15" :total="16">
        </el-pagination>
      </div>
  </div>
</template>

<style lang="less">
@import url('./less/photo.less');
</style>
