<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['email'])) {$email = $_POST['email'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "gabbaman35@gmail.com"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Email пользователя\nEmail: $email";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='User Emails'; //сабж
$email='Email'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Thans you page</title>
    <link rel="stylesheet" href="src/css/blocks/font.css">
    <meta name="generator">
    <script type="text/javascript">
        setTimeout('location.replace("/index.html")', 3000);
        /*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/      
    </script>
    <style>
        body {
            background-color: #020313;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: #ffffff;
            font-family: "Gilroy";
            height: 100vh;
        }

        h1 {
            display: block;
        }
    </style>
</head>

<body>
    <h1>Thank you for being with us!</h1>
</body>

</html>