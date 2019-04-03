$(document).ready(
    function () {
        $.ajax({
            async: false,
            url: './php/response.php',
            type: 'GET',
            data: {faculty: true},
            success(data) {
                let table = JSON.parse(data);
                change_rating(table, 'faculty', 'faculty')
            }
        })
        $('.select_option').change(
            function () {
                $.ajax({
                    async: false,
                    url: './php/response.php',
                    type: 'GET',
                    data: {group: true, value_faculty: $('#faculty option:selected').text()},
                    success(data) {
                        let table = JSON.parse(data);
                        change_rating(table,'.select_option_group', 'groups', 'group');
                    }
                })
            }
        )
        $('.select_option_group').change(
            function () {
                $.ajax({
                    async: true,
                    url: './php/response.php',
                    type: 'GET',
                    data: {rating: true, value_group: $('#groups option:selected').text()},
                    success(data) {
                        let avg = JSON.parse(data);
                        Add_table(avg,'table_avg','avg',true)
                    }
                })
            }
        )
        $('#view_table').click(
            function () {
                $.ajax
                ({
                        url: './php/response.php',
                        type: 'GET',
                        data: {view: true},
                        success(data) {
                            let table = JSON.parse(data);
                            Add_table(table, 'table1', '1', false);
                        }
                    }
                )
            }
        )
        $('#report').click(
            function () {
                $.ajax({
                    url: './php/response.php',
                    type: 'GET',
                    data: {report: true},
                    success(data) {
                        let table = JSON.parse(data);
                        Add_table(table, 'table2', 'two');
                    }
                })
            })

        $('#view_unique').click(
            function () {
                $.ajax({
                    url: './php/response.php',
                    type: 'GET',
                    data: {unique: true},
                    success(data) {
                        let table = JSON.parse(data);
                        Add_table(table, 'table4', 'four');
                    }
                })
            }
        )
    }
)
/*
 *working with select table. table - input table, name_class - purification  class, apparat - id of teg, nameclass - just name for delete class
 */
function change_rating(table,name_class, apparat, nameclass) {
    $(name_class+' .remove_' + nameclass).remove();
    for (let obj in table) {
        $('#' + apparat).append("<option value='" + (Number(obj) + 1) + "'class='remove_" + nameclass + "'>" + table[obj] + "</option>");
    }
}

function Add_table(table, apparat, nameclass, bool_id) {
    $(".remove" + nameclass).remove();
    $("#" + apparat).append("<thead class='remove" + nameclass + "'><tr id='remove_id" + nameclass + "'><th scope='col'>  </th></tr></thead>");
    let qq = Object.keys(table)[0];
    for (let obj in table[qq]) {
        $("#remove_id" + nameclass).append("<th scope='col'>" + obj + "</th>");
    }
    for (let surname in table) {
        if (bool_id == true) {
            $("#" + apparat).append("<tbody class='remove" + nameclass + "'><tr id='" + nameclass + surname + "'><th scope='col'>" + surname + "</th></tr></tbody>");
        } else {
            $("#" + apparat).append("<tbody class='remove" + nameclass + "'><tr id='" + nameclass + surname + "'><th scope='col'>" + surname.substring(0, surname.length - 1) + "</th></tr></tbody>");
        }

        for (let subject in table[surname]) {

            $("#" + nameclass + surname).append("<th scope='col'>" + table[surname][subject] + "</th>");

        }
    }
}