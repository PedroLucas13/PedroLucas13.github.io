<?php
error_reporting(0);
 
$msg = "";

// If upload button is clicked ...
if (isset($_POST['upload'])) {

    $db = mysqli_connect("sql302.epizy.com", "epiz_32266644", "Iq7v2BkmOdVUL", "epiz_32266644_pedro_tech");

    $name = mysqli_real_escape_string($db, $_POST['name']);
    $message = mysqli_real_escape_string($db, $_POST['message']);
    $q = mysqli_query($db, 'SELECT MAX(id) as id from `depoimentos`');
    $row = mysqli_fetch_assoc($q);
    $id = $row['id'] + 1;

        for( $i=0 ; $i < $total_count ; $i++ ) {

            $filename = $_FILES["uploadfile"]["name"][$i];
            $filename = preg_replace('/\s+/', '_', $filename);
            $filename2 = $_FILES["uploadfile"]["name"][$i+1];
            $filename2 = preg_replace('/\s+/', '_', $filename2);
            $filename3 = $_FILES["uploadfile"]["name"][$i+2];
            $filename3 = preg_replace('/\s+/', '_', $filename3);
            $tempname = $_FILES["uploadfile"]["tmp_name"][$i];
            
            $sql = "INSERT INTO `depoimentos` (id, nome, email, pontos, data, avaliacao, filename1, filename2, filename3) VALUES ('" . $id . "', '" . $name . "', '""', '""', '""', '" . $message . "', '" . "n" . "', '" . "n" . "', '" . "n" . "')";
            mysqli_query($db, $sql); 
            
    }
    exit();
    mysqli_close($db);
}
?>