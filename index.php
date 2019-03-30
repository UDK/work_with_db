<?php
require_once './html/index.html';
/*require_once './php/work_with_bd.php';
$wk_db = new work_with_bd;
$data_table = $wk_db->view_table();
$unique_arr = array();
for($a =0;$a<count($data_table);$a++)
{
    $buff = $data_table[$a]['Фамилия'];
    if(!array_key_exists($buff,$unique_arr))
    {
        $unique_arr[$buff][$data_table[$a]['Предмет']] = $data_table[$a]['Оценка'];
    }
    else
    {
        $unique_arr[$buff][$data_table[$a]['Предмет']] = $data_table[$a]['Оценка'];
    }
}
echo json_encode($unique_arr);*/