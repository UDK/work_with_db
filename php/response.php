<?php
require_once './work_with_bd.php';
if ($work_db === null) {
    $work_db = new work_with_bd();
}
if ($_GET['view'] == true) {
    $data_table = $work_db->view_table();
    $unique_arr = array();
    for ($a = 0; $a < count($data_table); $a++) {
        $buff = $data_table[$a]['Фамилия'];
        $unique_arr['Предмет'][] = $data_table[$a]['Предмет'];
        /*
         * checks the names in the array if not, creates an associative array
         */
        if (!array_key_exists($buff, $unique_arr)) {
            $unique_arr[$buff][$data_table[$a]['Предмет']] = $data_table[$a]['Оценка'];
        } /*
         * if there is the complements array
         */
        else {
            $unique_arr[$buff][$data_table[$a]['Предмет']] = $data_table[$a]['Оценка'];
        }
    }
    $unique_arr['Предмет'] = array_unique($unique_arr['Предмет']);
    foreach ($unique_arr as $item => $val) {
        if ($item == 'Предмет') {
            continue;
        }

        foreach ($unique_arr['Предмет'] as $subject) {

            if (!array_key_exists($subject, $val)) {
                $unique_arr[$item][$subject] = 0;
            }
        }
        ksort($unique_arr[$item]);

    }
    unset($unique_arr['Предмет']);
    echo json_encode($unique_arr);
}
elseif ($_GET['report']== true) {
    $table_faculty = $work_db->view_avarage();
    $array_faculty = array();
    for($i =0;$i<count($table_faculty);$i++) {
        $array_faculty[$i+1]['Факультет'] = $table_faculty[$i][0];
        $array_faculty[$i+1]['Среднее'] = $table_faculty[$i][1];
    }
    echo json_encode($array_faculty);
}
elseif($_POST['rating']==true){
    $rating = $work_db->rating();
    $rating_table = array();
    for($i =0;$i<count($rating);$i++) {
        $rating_table[$i+1]['Имя'] = $rating[$i][0];
        $rating_table[$i+1]['Баллы'] = $rating[$i][1];
    }
    echo json_encode($rating_table);
}