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
                            Add_table(table_assessment, 'table1');
                        }
                    }
                )
            }
        )
        $('#report').click(
            function () {
                let parametr = {};
                parametr['report'] = true;
                $.ajax({
                    url: './php/response.php',
                    type: 'GET',
                    data: parametr,
                    success(data) {
                        let table_assessment = JSON.parse(data);
                        Add_table(table_assessment,'table2');
                    }
                })
            })
    }
)

function Add_table(table, apparat) {
    $("#" + apparat).append("<thead><tr id='remove_id'><th scope='col'>  </th></tr></thead>");
    let qq = Object.keys(table)[0];
    for (let obj in table[qq]) {
        $("#remove_id").append("<th scope='col'>" + obj + "</th>");
    }
    for (let surname in table) {
        $("#" + apparat).append("<tbody><tr id='" + surname + "'><th scope='col'>" + surname + "</th></tr></tbody>");

        for (let subject in table[surname]) {

            $("#" + surname).append("<th scope='col'>" + table[surname][subject] + "</th>");

        }
    }
}