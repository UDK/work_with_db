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
                            Add_table(table, 'table1', '1', true);
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
                        Add_table(table, 'table2', 'two', false);
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
                        Add_table(table, 'table3', 'three', false);
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
                        Add_table(table, 'table4', 'four', false);
                    }
                })
            }
        )
    }
)

function Add_table(table, apparat, nameclass, bool_id) {
    //clear before fill the forms
    $(".remove" + nameclass).remove();
    let tag_name = "#" + apparat;
    let tag_remove = "'remove" + nameclass+"'";

    $(tag_name).append("<thead class="+tag_remove+"><tr id='re_id" + nameclass + "'><th scope='col'>  </th></tr></thead>");
    let qq = Object.keys(table)[0];
    for (let obj in table[qq]) {
        $("#re_id" + nameclass).append("<th scope='col'>" + obj + "</th>");
    }
    for (let surname in table) {
        if (bool_id != true) {
            $(tag_name).append("<tbody class="+tag_remove+"><tr id='" + nameclass + surname + "'><th scope='col'>" + surname + "</th></tr></tbody>");
        } else {
            $(tag_name).append("<tbody class="+tag_remove+"><tr id='" + nameclass + surname + "'><th scope='col'>" + surname.substring(0, surname.length - 1) + "</th></tr></tbody>");
        }

        for (let subject in table[surname]) {

            $("#" + nameclass + surname).append("<th scope='col'>" + table[surname][subject] + "</th>");

        }
    }
}