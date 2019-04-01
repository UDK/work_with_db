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
                            let table = JSON.parse(data);
                            Add_table(table, 'table1', '1',false);
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
                        let table = JSON.parse(data);
                        Add_table(table, 'table2', 'two');
                    }
                })
            })
        $('#rating').click(
            function () {
                let parametr = {};
                parametr['rating'] = true;
                $.ajax({
                    url: './php/response.php',
                    type: 'GET',
                    data: parametr,
                    success(data) {
                        let table = JSON.parse(data);
                        Add_table(table, 'table3', 'three');
                    }
                })
            })
        $('#view_unique').click(
            function () {
                let parametr = {};
                parametr['unique'] = true;
                $.ajax({
                    url: './php/response.php',
                    type: 'GET',
                    data: parametr,
                    success(data) {
                        let table = JSON.parse(data);
                        Add_table(table, 'table4', 'four');
                    }
                })
            }
        )
    }
)

function Add_table(table, apparat, nameclass,bool_id) {
    $(".remove"+nameclass).remove();
    $("#" + apparat).append("<thead class='remove"+nameclass+"'><tr id='remove_id" + nameclass + "'><th scope='col'>  </th></tr></thead>");
    let qq = Object.keys(table)[0];
    for (let obj in table[qq]) {
        $("#remove_id" + nameclass).append("<th scope='col'>" + obj + "</th>");
    }
    for (let surname in table) {
        if(bool_id==true) {
            $("#" + apparat).append("<tbody class='remove" + nameclass + "'><tr id='" + nameclass + surname + "'><th scope='col'>" + surname + "</th></tr></tbody>");
        }
        else {
            $("#" + apparat).append("<tbody class='remove" + nameclass + "'><tr id='" + nameclass + surname + "'><th scope='col'>" + surname.substring(0,surname.length-1) + "</th></tr></tbody>");
        }

        for (let subject in table[surname]) {

            $("#" +nameclass +surname).append("<th scope='col'>" + table[surname][subject] + "</th>");

        }
    }
}