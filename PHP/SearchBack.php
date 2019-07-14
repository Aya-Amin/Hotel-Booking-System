<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "HotelSystem";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$getDate = "SELECT  DATE(NOW()) AS Date;";
$currentDate = $conn->query($getDate);
$currentDate = mysqli_fetch_assoc($currentDate);

$userID = 0;
// if (!isset($_SESSION)) {
//     session_start();
//     $userID = $_SESSION['UserID'];
// }

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo"yessssssssssssssssss";

    foreach ($_POST as $key => $value) {
        echo $key;
        echo ">>>>";
        echo $value;
        echo "<br/>";
    }

    $location =$_POST["location"];

    $sql = "CALL UpdateAvailableRoo ms();";
    $result = $conn->query($sql);

//     $sql = "CALL Search(
// 	IN isPriceSelected BOOLEAN,
// 	IN price INT,
//  	IN isStarsSelected BOOLEAN,
//     IN stars INT,
//     IN isRatingSelected BOOLEAN,
//     IN rating INT,
//     IN location VARCHAR(25),
//     IN roomType VARCHAR(25)
// );";

//     $result = $conn->query($sql);

}

//                        <div class="card ">
//                         <div class="card-header">
//                             <img src="Assets/florence1.jpg" class="card-img-top">
//                         </div>
//                         <div class="card-block ">
//                             <div>
//                                 <span class="glyphicon glyphicon-star"></span>
//                                 <span class="glyphicon glyphicon-star"></span>
//                                 <span class="glyphicon glyphicon-star"></span>
//                                 <span class="glyphicon glyphicon-star-empty"></span>
//                                 <span class="glyphicon glyphicon-star-empty"></span>
//                             </div>

//                             <span>
//                                 <h4 class="card-title">Hotel Name</h4>
//                             </span>
//                             <p class="card-text">15,Emad Eldin Street,Downtown, Cairo</p>
//                             <p class="card-text choose_btn">price</p>

//                             <a href="#" class="btn btn-primary " data-toggle="modal" data-target="#myModal">view</a>
//                             <a href="#" class="btn btn-primary ">Choose</a>
//                         </div>
//                     </div>
