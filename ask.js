function mov()
{
    var wynik = document.getElementById("wynik");
    var zrodlowy = document.getElementById("zrodlowy").value;
    var docelowy = document.getElementById("docelowy").value;

    if(zrodlowy == "AX" && docelowy == "BX")
    {
        var ax = document.getElementById("ax").value;
        var bx = document.getElementById("bx").value;
        bx=ax;
            rezultat.innerHTML = "Wartość " +ax+ " została wysłana z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
        document.form.BX.value=bx;
    }
    else
    {
        if(zrodlowy == "AX" && docelowy == "CX")
        {
            var ax = document.getElementById("ax").value;
            var cx = document.getElementById("cx").value;
            cx=ax;
            rezultat.innerHTML = "<p> Przesyłano wartość " +ax+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
            document.form.CX.value=cx;
        }
        else
        {
            if(zrodlowy == "AX" && docelowy == "DX")
            {
                var ax = document.getElementById("ax").value;
                var dx = document.getElementById("dx").value;
                dx=ax;
            rezultat.innerHTML = "<p> Przesyłano wartość " +ax+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
                document.form.DX.value=dx;
            }
        }

        if(zrodlowy == "BX" && docelowy == "AX")
        {
            var bx = document.getElementById("bx").value;
            var ax = document.getElementById("ax").value;
            ax=bx;
            rezultat.innerHTML = "<p> Przesyłano wartość " +bx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
            document.form.AX.value=ax;
        }
        else
        {
            if(zrodlowy == "BX" && docelowy == "CX")
            {
                var bx = document.getElementById("bx").value;
                var cx = document.getElementById("cx").value;
                cx=bx;
            rezultat.innerHTML = "Przesyłano wartość " +bx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy;
                document.form.CX.value=cx;
            }
            else
            {
                if(zrodlowy == "BX" && docelowy == "DX")
                {
                    var bx = document.getElementById("bx").value;
                    var dx = document.getElementById("dx").value;
                    dx=bx;
            rezultat.innerHTML = "<p> Przesyłano wartość " +bx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
                    document.form.DX.value=dx;
                }
            }

        }

        if(zrodlowy == "CX" && docelowy == "AX")
        {
            var cx = document.getElementById("cx").value;
            var ax = document.getElementById("ax").value;
            ax=cx;
            rezultat.innerHTML = "<p> Przesyłano wartość " +cx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
            document.form.AX.value=ax;
        }
        else
        {
            if(zrodlowy == "CX" && docelowy == "BX")
            {
                var cx = document.getElementById("cx").value;
                var bx = document.getElementById("bx").value;
                bx=cx;
            rezultat.innerHTML = "<p> Przesyłano wartość " +cx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
                document.form.BX.value=bx;
            }
            else
            {
                if(zrodlowy == "CX" && docelowy == "DX")
                {
                    var cx = document.getElementById("cx").value;
                    var dx = document.getElementById("dx").value;
                    dx=cx;
            rezultat.innerHTML = "<p> Przesyłano wartość " +cx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
                    document.form.DX.value=dx;
                }
            }
        }

        if(zrodlowy == "DX" && docelowy == "AX")
        {
            var dx = document.getElementById("dx").value;
            var ax = document.getElementById("ax").value;
            ax=dx;
            rezultat.innerHTML = "<p> Przesyłano wartość " +dx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
            document.form.AX.value=ax;
        }
        else
        {
            if(zrodlowy == "DX" && docelowy == "BX")
            {
                var dx = document.getElementById("dx").value;
                var bx = document.getElementById("bx").value;
                bx=dx;
            rezultat.innerHTML = "<p> Przesyłano wartość " +dx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
                document.form.BX.value=bx;
            }
            else
            {
                if(zrodlowy == "DX" && docelowy == "CX")
                {
                    var cx = document.getElementById("cx").value;
                    var dx = document.getElementById("dx").value;
                    cx=dx;
            wynik.innerHTML = "<p> Przesyłano wartość " +dx+ " z rejestru "+zrodlowy+" do rejestru "+docelowy +"</p>";
                    document.form.CX.value=cx;
                }
            }
        }


    }

}
