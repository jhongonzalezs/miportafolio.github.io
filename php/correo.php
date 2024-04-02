<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enviando...</title>
    <!--
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css" integrity="sha512-cyIcYOviYhF0bHIhzXWJQ/7xnaBuIIOecYoPZBgJHQKFPo+TOBA+BY1EnTpmM8yKDU4ZdI3UGccNGCEUdfbBqw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.all.min.js" integrity="sha512-IZ95TbsPTDl3eT5GwqTJH/14xZ2feLEGJRbII6bRKtE/HC6x3N4cHye7yyikadgAsuiddCY2+6gMntpVHL1gHw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
-->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    
</body>
</html>

<?php 
	$nombre = $_POST['name'];
	$email = $_POST['email'];
	$asunto = $_POST['subject'];
	$mensaje = "Nombre: ".$nombre." \nEmail: $email \n Mensaje:".$_POST['message'];

    
    $post = (isset($_POST['name']) && !empty($_POST['name'])) &&
        (isset($_POST['email']) && !empty($_POST['email'])) &&
        (isset($_POST['subject']) && !empty($_POST['subject'])) &&
        (isset($_POST['message']) && !empty($_POST['message']));
        
        if ( $post ) {
            
            if(mail('gonzalezsanchezjhonjairo1@gmail.com', $asunto, $mensaje)){
		echo "<script>
                Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: 'Su mensaje ha sido enviado a nosotros.',
                timer: 4000
            })
            location.href ='#';
            </script>";
	}else{
        echo "<script>
                Swal.fire({
                icon: 'error',
                title: 'ERROR!',
                text: 'Hubo un error al enviar su mensaje.',
                timer: 4000
            })
            location.href ='#';
            </script>";
    }
            
        }else{
            echo "<script>
                Swal.fire({
                icon: 'error',
                title: 'ERROR!',
                text: 'Debe completar todos los campos del formulario.',
                timer: 4000
            })
            location.href ='#';
            </script>";
        }

 ?>