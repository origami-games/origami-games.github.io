var start = 0;
var version = "";
var moduleSet = "";
var searchTerm = "";
var currentGitSha = undefined;
var list = false;

console.log("Launch/Github sync. Reading git repo...")
$.ajax({
    url: "/assets/launch/createLocalGitCopy.php",
    success: function(data) {
        console.log("Response: " + data);
    },
    error: function() {
        console.log("Failed to talk to Launch GitHub...");
    }
});

function loadVersion() {
    $.ajax({
        // url: "buildModuleList.php?version=" + $("#versionSelect").val(),
        url: "buildModuleList.php",
        success: function(data) {
            values = data.split(",");
            $("#resultContainer").html(values[0]);
            $("#setSelect").html('<option value="">All Modules</option>' + values[1]);
            newSearch();
        },
        error: function() {
            $("#resultContainer").html("Unable to load module list...");
        }
    });
}

function newSearch() {
    start = 0;
    moduleSet = document.getElementById("setSelect").value;
    moduleSet = moduleSet.replace(/ /g, "-").toLowerCase();
    searchTerm = document.getElementById("stringSearch").value;

    doSearch();
}

function doSearch() {

    $(".tokenContainer").each(function() {
        $(this).parent().show();
    });

    if (moduleSet != "") {
        console.log("module set !=''");
        $(".tokenContainer").each(function() {
            if (!$(this).hasClass("category-" + moduleSet)) {
                $(this).parent().hide();
            }
        });
    }
    if (searchTerm != "") {
        $(".tokenContainerOuter").each(function() {
            if ($(this).find(".tokenTitle")[0].innerHTML.toLowerCase().indexOf(searchTerm.toLowerCase()) == -1) {
                $(this).hide();
            }
        });
    }
}

function listMode() {
    if (list) {
        $(".tokenContainerOuter").removeClass("listMode");
        $("#listModeButton").prop("value", "▤");
        $(".tokenCircle").find("img").css("height", "150px");
        $(".tokenCircle").find("img").css("width", "150px");
    } else {
        $(".tokenContainerOuter").addClass("listMode");
        $("#listModeButton").prop("value", "▦");
        $(".tokenCircle").find("img").css("height", "29px");
        $(".tokenCircle").find("img").css("width", "29px");
    }
    list = !list;
}
