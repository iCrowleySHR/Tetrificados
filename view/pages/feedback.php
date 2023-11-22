<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tetrificados | FeedBack</title>
    <link rel="stylesheet" href="../css/feed.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    <main>
    <img src="../img/logo.png" alt="" class="logo">
        <form action="" method="post">
            <h2>FeedBack</h2>
            <fieldset>
                <label for="nome">Digite seu nome*</label>
                <input type="text" name="nome" placeholder="Nome" maxlength="40" required>
            </fieldset>
            <fieldset>
                <label for="nota">Nota de 1 a 10*</label>
                <select name="nota" id="" required>
                    <option value="">Selecione a nota</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="complemento">Complemento</label>
                <textarea name="complemento" id="" cols="30" rows="7" maxlength="200"></textarea>
            </fieldset>
        <button type="submit">Enviar</button>
        </form>
    </main>
    <?php include('../../controller/recebeFeedback.php'); ?>
</body>
</html>