let searchCategory = null;
let filteredData;
let data;

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function clearAndHideCweList() {
    $("#cwe-list").html("");
    $("#cwe-list").removeClass("show");
}

function reset() {
    filteredData = [];
    $("#vuln-name").val("");
    $("#chosen-category").html("");
    $("#chosen-cwe").html("");
    clearAndHideCweList();
    searchCategory = null;
    $("#search-category-button").text("OWASP Category");
}

function setSearchCategory(category) {
    searchCategory = category;
    $("#search-category-button").text($(`#${searchCategory}`).text());
    data = document[`owasp${capitalize(category)}`];
}

function setResult(category, cwe) {
    $("#chosen-category").text(category);
    $("#chosen-cwe").text(cwe);
}

function escapeQuotes(string) {
    return string.replaceAll("'", "\\'");
}

$("#vuln-name").keyup((event) => {
    if (event.key == "Escape") return;

    if (!searchCategory) {
        alert("Select a search category");
        reset();
        return;
    }

    let userInput = $("#vuln-name").val().toLowerCase();
    if (!userInput) return;

    filteredData = {};
    $("#cwe-list").value = "";
    let output = "";

    $.each(data, (category, cwes) => {
        matches = [
            ...cwes.filter((el) => el.toLowerCase().includes(userInput)),
        ];
        if (!!matches.length) filteredData[category] = matches;
    });
    if (!!Object.keys(filteredData).length) {
        $.each(filteredData, (category, cwes) => {
            // console.log(category, " - ", cwes);
            for (const cwe of cwes) {
                // console.log(
                //     `<div class="dropdown-item" onclick="setCategory('${category}')">${cwe}</div>`
                // );
                output += `<div class="dropdown-item" onclick="setResult('${category}', '${escapeQuotes(
                    cwe
                )}')">${cwe}</div>`;
            }
        });
    } else {
        output +=
            '<div class="dropdown-item" onclick="reset()">No items found</div>';
    }

    $("#cwe-list").html(output);
    $("#cwe-list").addClass("show");
});

$(document).on("keydown", function (event) {
    if (event.key == "Escape") {
        $("#cwe-list").html("");
        $("#cwe-list").removeClass("show");
    }
});

$("body").click(function (e) {
    if (e.target.className !== "form_wrapper") {
        clearAndHideCweList();
    }
});
