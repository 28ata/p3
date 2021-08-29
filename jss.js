p1=localStorage.getItem("player1name");
p2=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
document.getElementById("player1name").innerHTML = p1 + ":";
document.getElementById("player2name").innerHTML = p2 + ":";
document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p1score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn-"+ p1;
document.getElementById("player_answer").innerHTML = "answer turn-"+ p2;
function make(){
    n1 = document.getElementById("numb1").value;
    n2 = document.getElementById("numb2").value;
    actual_answer=parseInt(n1)*parseInt(n2);
    question_number = "<h4>" + n1 + "X" + n2 +"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box>";
    check_button = "<br><br><button class='btn btn-info'>Check</button>";
    row=question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("numb1").value = "";
    document.getElementById("numb2").value = "";
}