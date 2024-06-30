function changeStyle()
{
    var current_style = document.getElementById("style");
    var href = current_style.getAttribute("href");
    if (href.includes("style_1"))
    {
        var new_style = href.replace("style_1", "style_2");
        current_style.setAttribute("href", new_style);
        localStorage.setItem("style", "style_2");
    }
    else
    {
        var new_style = href.replace("style_2", "style_1");
        current_style.setAttribute("href", new_style);
        localStorage.setItem("style", "style_1");
    }
}

window.onload = function()
{
    var current_style = document.getElementById("style").getAttribute("href");
    if(!current_style.includes(localStorage.getItem("style")))
    {
        if(localStorage.getItem("style").includes("style_1"))
        {
            document.getElementById("style").setAttribute("href", current_style.replace("style_2", "style_1"));
        }
        else
        {
            document.getElementById("style").setAttribute("href", current_style.replace("style_1", "style_2"));
        }

    }
}