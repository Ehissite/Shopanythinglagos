<?php  require("login.class.php"); ?>
  <?php 

  if (isset($_POST['submit'])) {
    $user = new LoginUser($_POST['username'],$_POST['password']);
  }

  ?>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>SAL Merchant - Sign in</title>

  <link rel="stylesheet" href="./edlogin.css">
  <link href="img/ed.png" rel="icon">




</head>
<body>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=">
  <title>SAL Merchant</title>
</head>
<body style="background-color:blueviolet;">

 
  <center style="margin-top: 130px;">
    <h1>SAL Merchant</h1>
    <p>Login</p>
  <p><?php echo @$user->error ?></p>
  <p><?php echo @$user->success ?></p>
  </center>
   <div class="wrapper">
    <div class="form">
      <form method="POST">

      <div class="form-group">
          <input type="text" name="username" minlength="3" maxlength="48" required="required" placeholder="Merchant Name" />
      </div>

      <div class="form-group">
          <input type="text" name="password" required="required" placeholder="Merchant ID" />

      </div>
      
        
      <div class="form-group">
        <button style="background-color: dodgerblue;color: white;" type="submit" name="submit">Login</button> 
        <textarea id="code_output">
        </textarea>
      </div>
        
      </form>
    </div>
  </div>
  <center>
    <p>Don't have an account? <a href="register.php" style="color: dodgerblue;"><b>Register</b></a></p>
  </center>
</body>
</html>

  <script  src="./edlogin.js"></script>

</body>
</html>
