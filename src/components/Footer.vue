<template>
  <div v-show="$route.path !== '/home'" id="Footer">
    <div class="talk">
      <img class="wx" src="../assets/images/wx.png" alt="">
       <p>&copy; foreile.link 版权所有 Blog由Vue,nodejs驱动. <br /><img src="../assets/images/beianicon.png" alt=""><a href="https://beian.miit.gov.cn" target="_blank">粤ICP备2021010015号</a></p>
    </div>
  </div>
</template>
<script>

  export default {
    name:'down',
    data () {
      return {
          Text:''
      };
    },
  }
</script>
<style lang="scss" scoped>
#Footer {
  background: linear-gradient(#333, #456);
  padding: 2rem 0;
  margin-top: 2rem;
  .talk {
    margin:0 1rem;
    color: #f2f2f2;
    font-size: 11px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img.wx{
      width: 5rem;
      margin-right: 1rem;
    }
    p {
      img {
        margin-top: 1rem;
        margin-left: -3px;
        margin-right: 5px;
      }
    }
    a {
      color: #f2f2f2;
      vertical-align: super;
    }
  }
}
</style>
