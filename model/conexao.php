<?php 
class conexao{
    private $pdo;
    public function __construct($dbname, $host, $user, $password) {
        try {
            $this -> pdo = New PDO ("mysql:dbname=" . $dbname . ";host=" . $host, $user, $password);
            return "CONEXÃO DO PDO";
        } catch (PDOException $erro) {
            return "ERRO DE CONEXÃO NO PDO:" . $erro -> getMessage();
            exit();
        } catch (Exception $erro) {
            return "ERRO NÃO PASSOU DA CONEXÃO:" . $erro -> getMessage();
            exit();
        }
    }

    public function insereValores($cadNome, $cadNota, $cadCompl){
        $insereValores = $this -> pdo -> prepare ("insert into feedBack(nome, nota, compl) values(:nome,:nota,:compl);");
        $insereValores -> bindValue(":nome", $cadNome);
        $insereValores -> bindValue(":nota", $cadNota);
        $insereValores -> bindValue(":compl", $cadCompl);
        $insereValores->execute();
    }
    
}

?>