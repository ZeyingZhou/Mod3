Section00 = { Monday:

  { index: [ 3, 4, 6, 7, 8 ],

    code: [ '151', '131', '171', '171', '143' ],

    type: [ 'LECT', 'TUT', 'TUT', 'LECT', 'LECT' ] },

 Tuesday:

  { index: [ 1, 2, 2, 8, 9 ],

    code: [ '151', '143', '143', '111', '171' ],

    type: [ 'LECT', 'LAB', 'LAB', 'LECT', 'LECT' ] },

 Wednesday:

  { index: [ 2, 3, 7, 7, 7 ],

    code: [ '151', '100', '100', '100', '100' ],

    type: [ 'LECT', 'LECT', 'LAB', 'LAB', 'LAB' ] },

 Thursday:

  { index: [ 2, 3, 7, 8, 9 ],

    code: [ '100', '100', '111', '171', '143' ],

    type: [ 'LECT', 'STUDIO', 'LECT', 'LECT', 'LECT' ] },

 Friday:

  { index: [ 1, 2, 3, 7, 7, 9 ],

    code: [ '151', '131', '111', '151', '151', '111' ],

    type: [ 'LECT', 'LECT', 'TUT', 'LAB', 'LAB', 'LECT' ] } }

var n=0;
for(var i=0;i<85;i++){
 if(i%17==0 && i!=0){
   console.log("setting n to zero");
   n=0;
 }
 if(i<17 && i==Section00.Monday.index[n]){
 
     $("#mondayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Monday.code[n] + " </div>");
     n++;
 }  
 else if(i>=17 && i<34 && (i%17)==Section00.Tuesday.index[n]){
   $("#tuesdayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Tuesday.code[n] + " </div>");
   n++;
 }
 else if(i>=34&&i<51 && (i%17)==Section00.Wednesday.index[n]){
 
   $("#wednesdayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Wednesday.code[n] + " </div>");
   n++;
 }
 else if(i>=51&&i<68 && (i%17)==Section00.Thursday.index[n]){
   $("#thursdayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Thursday.code[n] + " </div>");
   n++;
 }
 else if(i>=68&&i<85 && (i%17)==Section00.Friday.index[n]){
   $("#fridayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Friday.code[n] + " </div>");
   n++;
 }
 else if(i<17){
   $("#mondayFunday").append("<div class=\"timeSlot\"></div>");
 }
 else if(i>=17&&i<34){
   $("#tuesdayFunday").append("<div class=\"timeSlot\"></div>");
 }
 else if(i>=34&&i<51){
   $("#wednesdayFunday").append("<div class=\"timeSlot\"></div>");
 }
 else if(i>=51&&i<68){
   $("#thursdayFunday").append("<div class=\"timeSlot\"></div>");
 }
 // else(i>68&&i<85){
 else{
   $("#fridayFunday").append("<div class=\"timeSlot\"></div>");
 }
}
// for(var i=0;i<17;i++){

//   if(i==Section00.Monday.start[n]){
 
//       $("#mondayFunday").append("<div class=\"timeSlot lecture\"> APSC " + Section00.Monday.code[n] + " </div>")
//       n++;
//     }
//   else{
//     $("#mondayFunday").append("<div class=\"timeSlot\"></div>")

//   }
// }

// var divvy = document.createElement("div");
// var node = document.createTextNode("APSC151");
// divvy.appendChild(node);
// $("#timeColumn").append(divvy);



//Give draggable function to all buttons
  $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});


	//Customize events(create new event buttons by typing text in the input box)
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$(".list").append("<div class=\"origin\"><button class=\"add btn btn-secondary\"><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
  }
});
	
	//Delete button function in the event list
$(".list").on("click", "span", function(event){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
});
event.stopPropagation();
});

  //Delete button function in the timetable
$("#timetable").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

	//Hide and show input box 
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

  //Refresh function(used when the button is dropped)
  function init(){
    $(".list").find(".origin").remove();
    $(".list").append("<div class=\"origin\"><button class=\"add btn btn-primary\"><span><i class=\"fa fa-trash\"></i> </span>Eat</button></div><div class=\"origin\"><button class=\"add btn btn-success\"><span><i class=\"fa fa-trash\"></i></span>Workout</button></div><div class=\"origin\"><button class=\"add btn btn-warning\"><span><i class=\"fa fa-trash\"></i></span>Sleep</button></div><div class=\"origin\"><button class=\"add btn btn-info\"><span><i class=\"fa fa-trash\"></i></span>Laundry</button></div><div class=\"origin\"><button class=\"add btn btn-dark\"><span><i class=\"fa fa-trash\"></i></span>Study</button></div>");
    $("button").draggable({cancel:false ,cursor: "crosshair", revert: "invalid"});
  } 

  //Button Drop function for timetable and event list
$(".timeSlot").droppable({ accept: ".add", 
           drop: function(event, ui) {
                    console.log("drop");
                   $(this).removeClass("border").removeClass("over");
             var dropped = ui.draggable;
            var droppedOn = $(this);
            console.log(this + " drodripdroppped");
            $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);  
  //When the buttons are dropped, generate new preset event buttons
            init(); 
                }, 
          over: function(event, elem) {
                  $(this).addClass("over");
                   console.log("over");
          }
                ,
                  out: function(event, elem) {
                    $(this).removeClass("over");
                  }
                     });

//Belows allows user to bring button back to task bar on the side

// $(".origin").droppable({ accept: ".add", drop: function(event, ui) {
//                     console.log("drop2");
//                    $(this).removeClass("border").removeClass("over");
//              var dropped = ui.draggable;
//             var droppedOn = $(this);
//             $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);      
             
// }});