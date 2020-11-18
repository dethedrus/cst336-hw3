<!DOCTYPE html>
<html>
    <head>
        <title>Whether the weather will weather your stuff... or not!</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link href="css/styles.css" rel="stylesheet" type="text/css"/>
    </head>

    <body>
    <div class="jumbotron">
        <h1 class="display-4">Weather for right <b>NOW</b></h1>
        <p class="lead">Supply a zip code for current weather anywhere in the US</p>
        <hr class="my-4">
            <p>Please enter the zip code you wish to search <i>(only works for US)</i></p>
        </p>
        <div class="row mb-4">
            <div class="col-sm">
                <form id="search" class="form">
                    <div class="input-group">
                        <input id="zip" type="number" class="form-control" max = "99999" placeholder="Zip code"
                            onKeyPress="if(this.value.length == 5) return false;" >
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="submit" disabled>Search</button>
                        </div>
                    </div>
                    <span id = "error"></span>
                </form>
            </div>
        </div>
        <span id = "current"></span><br>
        <span id = "conditions"></span><br>
        <span id = "feels"></span>
    </div>
    <script src = "js/script.js"></script>
    </body>
</html>