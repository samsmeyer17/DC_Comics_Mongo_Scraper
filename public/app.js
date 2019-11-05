$(".save-article-btn").on("click", function() {
  console.log(this);

  let id = $(this).attr("data-id")
  console.log("id", id)

  $.ajax({
    method: "PUT",
    url: "/articles/" + id,

  }).then(function(data){
    console.log(data)
    location.reload()
  })
})

$(".unsave-article-btn").on("click", function() {
  console.log(this);

  let id = $(this).attr("data-id")
  console.log("id", id)

  $.ajax({
    method: "PUT",
    url: "/saved/" + id
  }).then(function(data){
    console.log(data)
    location.reload()
  })
})

$("add-note-btn").on("submit", function() {
  

})