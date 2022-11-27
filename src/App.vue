<template>
  <div :style=BackgroundColor>
    <div>
        <div class="navTabs">
            <div class="container">
                <div class="navTabsWrap ml-10">
                    <div @click="changeBackgroundColorToBlue()" class="nav-btn">藍色</div>
                    <div @click="changeBackgroundColorToGreen()" class="nav-btn">綠色</div>
                </div>
                <h1>{{ this.BackgroundColor.backgroundColor }}</h1>
            </div>
        </div>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ForexDepositRate">ForexDepositRate</router-link>
    </nav>
      <router-view/>
  </div>
</template>

<script>

export default{
  data(){
    return {
      BackgroundColor: {
        backgroundColor: ''
      }
    }
  },
  methods:{
        changeBackgroundColorToBlue() {
            this.BackgroundColor.backgroundColor = '#0db4b9'
        },
        changeBackgroundColorToGreen(){
            this.BackgroundColor.backgroundColor = '#b2de27'
        }
    },
    computed: {

    }
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  a{
    font-weight: bold;
    color: #2c3e50;
  }
  a.router-link-exact-active{
    color: #42b983;
  }
  
}

.navTabs {
    padding: 1.25rem 1.25rem 0;
    display: inline-block;
}

.navTabsWrap {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap
}

.container {
    max-width: 64rem;
    margin: 0 auto;
    height: 100%;
    display: block;
}

.ml-10 {
    margin-left: .625rem !important
}

.nav-btn {
    padding: .625rem 1.5rem;
    margin: 0 8px 8px 0;
    color: #005154;
    border: solid 1px #005154;
    border-radius: 4px;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: 1.125rem;
    text-align: center;
    width: 100%;
    cursor: pointer;
    &:hover{
      background-color: #005154;
      color: #fff
    }
    &:focus{
      background-color: #005154;
      color: #fff
    }
}


@media(min-width:576px) {
    .nav-btn {
        width: 39%
    }
}

@media(min-width:768px) {
    .nav-btn {
        width: auto
    }
}

</style>
