Vue.component('todo-Producto', {
    props: ['Producto'],
    template: '<tr><th>{{Producto.Product}}</th><td>{{Producto.TipoProduc}}</td><td><a class="button">Registrar</a></td></tr>'
});

var app = new Vue({
    el: '#app',
    data: {
        Producto: null,
        TipoProduc: null,
        Cantidad: null,
        Precio: null
    },
    methods: {
        obtenerProducto: function () {
            var vm = this;
            axios.post('/',null)
                .then(function (response) {
                   vm.Producto = response.data;
                });
        }
    }
});
app.obtenerProducto();