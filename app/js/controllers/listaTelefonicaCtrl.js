angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [];
    $scope.operadoras = [];
    $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        $http.post("http://127.0.0.1:3412/contatos", contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };

    var carregarContatos = function () {
        $http.get("http://127.0.0.1:3412/contatos").success(function (data) {
            $scope.contatos = data;
        });
    };

    var carregarOperadoras = function () {
        $http.get("http://127.0.0.1:3412/operadoras").success(function (data) {
            $scope.operadoras = data;
        });
    }

    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    carregarContatos();
    carregarOperadoras();
});