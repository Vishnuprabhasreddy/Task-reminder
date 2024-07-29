<?php
$email = $_POST['email'];
$password = $_POST['password'];

$con = new mysqli('localhost', 'root', '', 'test');

if ($con->connect_error) {
    die("Failed to connect: " . $con->connect_error);
} else {
    $stmt = $con->prepare("SELECT email, password FROM registration WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();

    if ($stmt_result->num_rows > 0) {
        while ($data = $stmt_result->fetch_assoc()) {
            if ($data['password'] === $password) {
                echo "<h2>Login Successfully</h2>";
                echo "<p>Email: " . $data['email'] . "</p>";
                echo "<script>
                        window.location.href = 'index.html';
                      </script>";
            }
        }
    } else {
        echo "<h2>Invalid Email or password</h2>";
    }
}

$con->close();
?>
