<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include('../../controller/resultado.php')?>
    <?php while($dados = $consultaSQL->fetch(PDO::FETCH_ASSOC)){?>
        <h1><?php echo $dados['nome']; ?>< /h1>

        <?php }?>
    
</body>
</html>