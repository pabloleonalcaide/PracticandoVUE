const app = new Vue({
  el: '#app',
  template: '#ejemploTemplate',
  data: {
  	elementos: [
      { name: "Elemento 1", url: '#1' },
      { name: "Elemento 2", url: '#2' },
      { name: "Elemento 3", url: '#3' },
    ],
    mostrar: true,
    mensaje: "Hello Vue!",
    imagen: "https://vuejs.org/images/logo.png"
  },
  methods:{
  	toggleMostrar: function(){
  		//para hacer uso del dato mostrar, tenemos que utilizar el objeto this
  		this.mostrar = !this.mostrar
  	}
  }
})