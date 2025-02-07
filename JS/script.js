$(document).ready(
    // $('#test').mouseover( function () {
    // console.log("paragraph is clicked !" , this);
    //  $('p').hide();
    // $('.para1').click(function (){
    //           console.log("paragraph is clicked!" , this);

    // })




    // $('.para1').on({
    //     click : function () {
    //         console.log("parargraph is clicked !");

    //     },

    //     mouseover : function () {
    //         console.log("parargraph is over !");
    //     }

    // })


    // $('.para1').hide(5000 , function(){
    //     console.log("paragraph is hidden");

    // }),

    // $('.para1').show(5000 , function(){
    //     console.log("paragraph is hidden");
    // })





    // $('.para1').hide(),

    // $('.para1').fadeOut(5000 , function(){
    //         console.log("paragraph is hidden");

    //     }),

    // $('.para1').fadeIn(5000, (function () {
    //     console.log("paragraph is hidden");
    // })
    // )

    //fade methods
    //  $('#test').hide(),

    $('#hideBtn').click(function(){
     $('#test').fadeOut(5000,  function (){

        console.log("hidden");
        
     })
    }),


    $('#shownBtn').click(function(){
        $('#test').fadeIn(5000,  function (){
   
           console.log("shown");
           
        })
       })

)