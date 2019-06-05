function letsGo(){

    var word =document.getElementById("word").value;
    //var resultCount=document.getElementById("resultCount").value;


    $.ajax({
        url: "http://api.urbandictionary.com/v0/define?term=" + word,
        dataType: 'jsonp',
        success: printDefinitions
    });

}

function processResults(data){
    console.log(data);

    for(var i=0; i<data.list.length; i++){
        document.getElementById("myDiv").innerHTML += data.results[i].word;
    }
}


function printDefinitions(data){
    console.log(data);
    var definitions = data.list;
    var html = "<table border = '1'>";
    for(var i=0; i < definitions.length; i++) {

        html += "<tr>";
        html += "<td>" + definitions[i].author + "</td>";
        html += "<td>" + definitions[i].definition + "</td>";
        html += "<td>" + definitions[i].example + "</td>";
        html += "<td>";
    }
    html += "</table>";
    document.getElementById("myDiv").innerHTML = html;
}


