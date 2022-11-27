<template>
  <div>
    <label for="inputType">Enter Input Type</label>
    <br>
    <input v-model="InputType" type="text" name="inputType" />
    <h1>{{ InputType }}</h1>
    <br>
    <component :is="selectOrInputHtmlTag" :type="InputType" id="wasabi">
      <template v-if="InputType.toLowerCase() == 'select'">
          <option 
            v-for="(option, index) in options"
            :key="index"
          >
            {{ option }}
          </option>
      </template>
    </component>
    <label v-if="InputType.toLowerCase() == 'radio'" for="wasabi">
      WASABI
    </label>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      InputType: 'radio',
      options: ["Please Select","WASABI", "WASABI", "WASABI", "WASABI"]
    }
  },
  computed: {
    selectOrInputHtmlTag() {
      return this.InputType.toLowerCase() == 'select' ? 'select' : 'input';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/home.scss";
</style>
