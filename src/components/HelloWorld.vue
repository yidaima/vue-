<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="/user/login">登录</a>
    <a href="/user/register">注册</a>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  margin: 0 10px;
  color: #42b983;
}
</style>
