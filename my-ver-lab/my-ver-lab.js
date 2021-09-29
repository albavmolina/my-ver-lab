const newSkillText = $('#enterSkillHere')

$('#addSkill').click(function() {
    console.log(newSkillText.val())
    $("ul").append('<li><button class=`X`> X </button>'  + newSkillText.val() + '</li>');
})

const button = $('.X')

$("ul").on('click', '.X', function() {
    $(this).parent().remove();
    console.log($(this))
})