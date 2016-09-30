var task = $('[name="task"]') // variable for textarea

var addButton = $('#add_btn') //variable for the button

var tasks = $('#tasks') //variable for place info from texarea is going

addButton.click(function(){  //when button is clicked the function occurs
  var text = task.val()      //the value of the textarea (task) is set to variable text

  $('<tr>').text(text).appendTo(tasks) //value from textarea, now called "text" due to function, is being appended to the unordered
})                                      //as a <li> .  finding the .text(text) a little confusing..
                                        //unless its like the <li>.text = text except with ()....4
