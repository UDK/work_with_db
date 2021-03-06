<?php

class work_with_bd
{
    private $config;
    private $db_connect;

    /**
     * check config file.
     */
    public function __construct()
    {

        if (!@include_once('./config/config.php')) {
            die('File with config not found');
        } else {
            $this->config = @include('./config/config.php');
            $this->Connect();
        }
    }

    private function Connect()
    {
        try {
            $dns = 'mysql:host=' . $this->config['host'] . ';dbname=' . $this->config['db_name'];
            $this->db_connect = new PDO($dns, $this->config['username'], $this->config['password']);
        } catch (PDOException $e) {
            echo "Невозможно подключиться к серверу";
            die();
        }
    }

    private function send_request($request)
    {
        $table_assessment = $this->db_connect->query($request);
        $data = $table_assessment->fetchAll();
        return $data;
    }
    public function branch()
    {
        $request = "SELECT name FROM bracnh";
        return $this->send_request($request);
    }

    public function fuculty()
    {
        $request = "SELECT name FROM faculty";
        return $this->send_request($request);
    }

    public function groups($faculty)
    {
        $request_bd = $this->db_connect->prepare("SELECT groups.name FROM faculty JOIN groups on faculty.id = groups.id_faculty WHERE faculty.name = :faculty");
        $request_bd->bindParam(':faculty',$faculty);
        $request_bd->execute();
        return $request_bd->fetchAll();
    }


    public function view_table()
    {
        $request = "SELECT assessment.assessments as 'Оценка', subject_academic.name as 'Предмет', students.surname as 'Фамилия', students.id FROM assessment JOIN students ON assessment.id_students = students.id JOIN subject_academic ON assessment.id_subject_academic = subject_academic.id";
        return $this->send_request($request);
    }

    public function view_avarage()
    {
        $request = "SELECT faculty.name, AVG(assessment.assessments) FROM faculty JOIN groups ON faculty.id = groups.id_faculty JOIN students ON groups.id = students.id_group JOIN assessment ON students.id = assessment.id_students GROUP BY faculty.id";
        return $this->send_request($request);
    }

    public function rating($group)
    {
        $request_bd = $this->db_connect->prepare("SELECT assessment.assessments as 'Оценка', subject_academic.name as 'Предмет', students.surname as 'Фамилия', students.id FROM groups JOIN students on groups.id = students.id_group JOIN assessment on students.id = assessment.id_students JOIN subject_academic on assessment.id_subject_academic = subject_academic.id WHERE groups.name = :group");
        $request_bd->bindParam(':group',$group);
        $request_bd->execute();
        return $request_bd->fetchAll();
    }

    public function unique()
    {
        $request = "SELECT DISTINCT surname,firstname,lastname FROM students";
        return $this->send_request($request);
    }
}

?>