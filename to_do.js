var task = $('[name="task"]')

var addButton = $('#add_btn')

var tasks = $('#tasks')

addButton.click(function(){
  var text = task.val()

  $('<li>').text(text).appendTo(tasks)
})
