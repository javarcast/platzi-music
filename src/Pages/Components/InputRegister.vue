<template>
  <div class="container">
    <div class="group">
      <input type="text" required v-model="inputValue" />
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>{{title}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputRegister',
  props: {
    value: {
      required: true,
      type: String
    },
    title: String
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  watch: {
    inputValue (newValue) {
      this.$emit('input', newValue)
    },
    value (newValue) {
      this.inputValue = newValue
    }
  }
}

</script>

<style>

.container {
  margin: 10px auto 0;
  padding: 10px 0px 10px;
  width: 100%;
}

.group {
  position: relative;
  margin-bottom: 20px;
  width: 100%;
}

input {
  font-size: 18px;
  padding: 10px 0px 10px 0px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #757575;
}

input:focus {
  outline: none;
}

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
input:focus ~ label,
input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #FF9300;
}

.bar {
  position: relative;
  display: block;
  width: 300px;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #FF9300;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

input:focus ~ .highlight {
  -webkit-animation: inputHighlighter 0.3s ease;
  -moz-animation: inputHighlighter 0.3s ease;
  animation: inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from {
    background: #FF9300;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@-moz-keyframes inputHighlighter {
  from {
    background: #FF9300;
  }
  to {
    width: 0;
    background: transparent;
  }
}
@keyframes inputHighlighter {
  from {
    background: #FF9300;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
