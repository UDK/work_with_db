$(document).ready(
    function ()
    {
        $('#view_table').click(
            function ()
            {
                alert('asdsad');
                let parametr = {};
                parametr['view'] = true;
                $.ajax
                ({
                    url: './php/response.php',
                    type: 'GET',
                    data: parametr,
                    success(data)
                    {
                      alert(data);
                    }
                }
                )

            }
        )
    }
)