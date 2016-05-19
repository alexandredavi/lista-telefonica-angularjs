angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, serialGenerator, contatos) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = contatos.data;
    
    var generateSerial = function (contatos) {
        contatos.forEach(function (contato) {
           contato.serial = serialGenerator.generate(); 
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
    
    generateSerial($scope.contatos);
});