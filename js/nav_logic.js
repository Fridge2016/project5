localStorage.setItem("status", "closed");

function toggleNav()
{
    if(localStorage.getItem("status") == "closed")
    {
        openNav();
    }
    else
    {
        closeNav();
    }
}

function openNav()
{
    document.getElementById("navBar").style.width = "250px";
    localStorage.setItem("status", "open");
}

function closeNav()
{
    document.getElementById("navBar").style.width = "0";
    localStorage.setItem("status", "closed");
}