const age_2 = 18
const age_3 = 60
const div = document.getElementById('d')
const checkAge = function(...age) {
    age.forEach(element => {
        if (element && !isNaN(element)){
            if (element < age_2){
                div.innerHTML += "You don't have access cause your age is " + element + ". " + "It's less then " + age_2 + '<br />';
            } else if (element >= age_2 && element < age_3){
                div.innerHTML += 'Welcome!' + '<br />';
            } else if (element > age_3){
                div.innerHTML += 'Keep calm and look Culture channel' + '<br />';
            } else {
                div.innerHTML += 'Technical work' + '<br />';
            }
        } else div.innerHTML += 'It is not a integer value, try again' + '<br />';
    })
};

checkAge(17, 20, 61, '0', 'ww', '23')