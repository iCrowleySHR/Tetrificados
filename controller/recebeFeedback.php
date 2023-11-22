<?php
    require_once (__DIR__.'/../model/conexao.php');
    $config = parse_ini_file(__DIR__.'/../model/config.ini');
    $conexao = new conexao ($config['dbname'], $config['host'], $config['user'], $config['password']);

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $cadNome = addslashes($_POST['nome']);
        $cadNota = addslashes($_POST['nota']);
        $cadCompl = addslashes($_POST['complemento']);

        $conexao -> insereValores($cadNome, $cadNota, $cadCompl);

        echo ' 
        <script>
            Swal.fire({
                title: "FeedBack recebido!",
                text: "Obrigado por deixar seu feedback.",
                icon: "success",
                iconColor: "#0dca36",
                color: "white",
                background: "#212121",
                confirmButtonColor: "#0dca36"
            });
        </script> 
        ';
    }
?>