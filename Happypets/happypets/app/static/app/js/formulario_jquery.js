$("#formulario_contacto").validate({
    rules:{
        nombre:{
            required: true,
            minlength: 3, 
            maxlength: 30
        },
        apellido:{
            required: true,
            minlength: 3,
            maxlength: 30
        },
        email:{
            required: true,
            email: true
        },
        telefono:{
            required: true,
            number: true,
            minlength: 9,
            maxlength: 9
        }
    }
})

$("#guardar").click(function(){
    if($("#formulario_contacto").valid() == false){
        return;
    }
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let email = $("#email").val()
    let telefono = $("#telefono").val()


})