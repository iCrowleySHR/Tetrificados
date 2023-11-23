<?php
     require_once (__DIR__.'/../model/conexao.php');
     $config = parse_ini_file(__DIR__.'/../model/config.ini');
     $conexao = new conexao ($config['dbname'], $config['host'], $config['user'], $config['password']);
 
    $sql = 'SELECT * FROM feedback';    /*Recebe o codigo sql para fazer a busca */
    $pdo = $conexao -> getPDO();        /* Entra no arquivo conexão e retorna a função getPDO */
    $consultaSQL = $pdo->query($sql);   /*Busca no banco a variavel sql */

    while($dados = $consultaSQL->fetch(PDO::FETCH_ASSOC)){
        echo $dados['nome'];
        echo $dados['notaGeral'];
        echo $dados['notaJogos'];
        echo $dados['notaOrganizacao'];
        echo $dados['notaApresentacao'];
        echo $dados['notaDecoracao'];
        echo $dados['compl'];
        echo $dados['codFeed'];
    }   
?>