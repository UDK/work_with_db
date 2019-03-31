$(document).ready(
    function () {
        $('#view_table').click(
            function () {
                let parametr = {};
                parametr['view'] = true;
                $.ajax
                ({
                        url: './php/response.php',
                        type: 'GET',
                        data: parametr,
                        success(data) {
                            let table_assessment = JSON.parse(data);
                            $(".table").append("<thead><tr id='remove_id'><th scope='col'>  </th></tr></thead>");
                            let qq = Object.keys(table_assessment)[0];
                            for (let obj in table_assessment[qq]) {
                                $("#remove_id").append("<th scope='col'>" + obj + "</th>");
                            }
                            for (let surname in table_assessment) {
                                $(".table").append("<tbody><tr id='" + surname + "'><th scope='col'>" + surname + "</th></tr></tbody>");

                                for (let subject in table_assessment[surname]) {

                                    $("#" + surname).append("<th scope='col'>" + table_assessment[surname][subject] + "</th>");

                                }
                            }
                        }
                    }
                )

            }
        )
    }
)