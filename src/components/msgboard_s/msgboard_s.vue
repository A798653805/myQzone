<template>
  <div class="msgboard-box">
      <div class="title">
        留言板
      </div>
      <div class="text-box">
        <el-input type="textarea" class="input" :rows="3"></el-input>
        <el-button class="sub-msg" size="mini" type="primary">发表</el-button>
      </div>
      <ul>
        <li class="msg-item">
          <div class="msg">
            <span class="name">下没声:</span>
            <p>你是我的加快速度副教授积分时代峻峰考虑到开了房间</p>
          </div>
          <div class="date">2010-10-10</div>
        </li>
        <li class="msg-item">
          <div class="msg">
            <span class="name">下没声:</span>
            <p>你是我的加快速度副教授积分时代峻峰考虑到开了房间</p>
          </div>
          <div class="date">2010-10-10</div>
        </li>
        <li class="msg-item">
          <div class="msg">
            <span class="name">下没声:</span>
            <p>你是我的加快速度副教授积分时代峻峰考虑到开了房间</p>
          </div>
          <div class="date">2010-10-10</div>
        </li>
      </ul>
      <el-button class="msg" type="text">查看更多留言</el-button>
    </div>
</template>


<style lang="less">
   .msgboard-box {
    padding: 10px;
    float: left;
    margin-top: 14px;
    width: 240px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 #ffffff;
    .title {
      padding-bottom: 20px;
      font-weight: 700;
    }
    .text-box {
      overflow: hidden;
      .sub-msg {
        margin-top: 8px;
        float: right;
      }
      textarea {
        resize: none;
      }
    }
    .msg-item {
      overflow: hidden;
      border-bottom: #606266 solid 1px;
      padding: 5px;
      vertical-align: top;
      .msg{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        max-height: 68px;
        line-height: 16px;
        font-size: 10px;
        .name {
          color: #409EFF;
        }
        p {
          display: inline;
        }
      }
      .date {
        font-size: 10px;
        color: #909399;
      }
    }
  }
</style>
