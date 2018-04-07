<template>
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
</template>

<script>
export default {
  
}
</script>

<style lang="less">
  .overview-box {
    position: relative;
    display: inline-block;
    width: 260px;
    height: 100px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 #ffffff;
    .overview {
      position: absolute;
      top: 50%;
      margin-top: -34px;
      overflow: hidden;
      padding: 0 10px;
      li {
        padding: 10px 0 10px 0;
        width: 76px;
        float: left;
        text-align: center;
        border-right: 1px solid #666666;
        a {
          &:hover {
            text-decoration: underline
          }
          color: #2D2F33;
          span {
            font-size: 26px;
            padding-bottom: 4px;
          }
          p {
            padding-top: 7px;
            font-size: 15px;
          }
        }
        &:last-child {
          border: none;
        }
      }
    }
  }
</style>

