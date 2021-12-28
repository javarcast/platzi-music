<template>
  <div class="hello">
    <p>{{msg}}</p>
    <input type="date" v-model="birthDate">

    <p v-show="!isNaN(ageValue)">Edad: {{ageValue}}</p>
    <input type="text" v-model="name">
    <button @click="formated">Enviar</button>

    <p>{{formatName}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      person: {
        name: 'Juan'
      },
      showValue: true,
      birthDate: '',
      formatName: '',
      name: ''
    }
  },
  computed: {
    ageValue () {
      const now = new Date(Date.now()).getTime()
      const birthDateD = new Date(this.birthDate).getTime()
      const days = Math.abs(birthDateD - now) / (1000 * 3600 * 24)
      console.log(now, birthDateD)
      return parseInt(days)
    }
  },
  watch: {
    birthDate (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  methods: {
    formated () {
      this.formatName = this.name.split(' ').join('-')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
