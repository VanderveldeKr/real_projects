<?php
    $data = $_POST;
    $phone = $data['phone'];
    $jaw = $data['jaw'];
    $technologies = $_POST["technologies"];
    
    $selectedTechnologies = '';
    
    foreach($technologies as $item) {
        echo "$item<br />";
        
    $selectedTechnologies .= $item . "\n";
    }
    
    $textile = $data['textile'];
    $procedures = $data['procedures'];
    $fasting = $data['fasting'];
 
    $to = "romandetkinperm@yandex.ru"; 
    $date = date ("d.m.Y"); 
    $time = date ("h:i");
    $subject = "Квиз с сайта";

    $msg="
    Челюсть: $jaw;
    Заболевания: $selectedTechnologies;
    Состояние ткани: $textile;
    Отношение к процедурам: $procedures;
    Посещение: $fasting;
    Телефон: $phone";

    mail($to, $subject, $msg, "From: $to ");
?>

