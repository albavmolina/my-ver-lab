newSkillText = $('#enterSkillHere')
$('#addSkill').click(function)(){
    console.log(newSkillText).val()
    $("ul").append('<li>' + newSkillText.val() + '</li>');
})

