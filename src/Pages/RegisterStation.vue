<template>
    <div class="container">
      <img src="https://static.platzi.com/media/user_upload/Page%201-d8d869f4-7130-4ae9-9907-2fa809bd136a.jpg" alt="Logo">
      <h1 class="title">Registro estación Platzi</h1>
      <form >
        <input-register v-model="name" title="Nombre"></input-register>
        <input-register v-model="lastname" title="Apellido"></input-register>
        <input-register v-model="position" title="Cargo"></input-register>
        <div class="button-wrapper">
          <button @click="signInButton">Enviar</button>
        </div>
      </form>
    </div>
</template>

<script>
import InputRegister from './Components/InputRegister'
export default {
  name: 'RegisterStation',
  data () {
    return {
      name: '',
      lastname: '',
      position: ''
    }
  },
  components: {
    InputRegister
  },
  methods: {
    signInButton (e) {
      console.log(this.name, this.lastname, this.position)
      e.preventDefault()
    }
  }
}
</script>
<style scoped >
  .container{
    display: flex;
    justify-content: center;
    width: 360px;
    flex-wrap: wrap;
  }
  .container .title{
    color: #00BFD6;
    font-size: 27px;
    margin: 20px 0px;
    font-weight: bold;
  }
  .button-wrapper{
    display: flex;
    justify-content: end;
  }
</style>
