

const inputs = {
    day: document.querySelector("input[name='day']"),
    month:document.querySelector("input[name='month']"),
    year: document.querySelector("input[name='year']")
}
const outputs = {
    day:document.querySelector("span[name='day']"),
    month:document.querySelector("span[name='month']"),
    year:document.querySelector("span[name='year']")
}

const inputWrappers = document.querySelectorAll('.input-wrapper');



const form = document.querySelector("form");
const button = document.querySelector("button");



button.addEventListener("click", (e) => {
    e.preventDefault()

    outputs.day.innerHTML = "- -";
    outputs.month.innerHTML = "- -";
    outputs.year.innerHTML = "- -";

    let newDate = {
        day:inputs.day.value,
        month:inputs.month.value,
        year:inputs.year.value
    }
 
    let hasNoError = {
        day:true,
        month:true,
        year:true
    }

   
    let dateToCheck = new Date(newDate.year,newDate.month-1,newDate.day);


    //check day input
    if (newDate.day.length === 0) {
        const errorSpan = inputWrappers[0].lastElementChild;
        inputWrappers[0].classList.add('add-error');
        errorSpan.innerHTML = "This field is required"
        hasNoError.day = false;
    } else if (newDate.day < 1 || newDate.day > new Date(newDate.year, newDate.month, 0).getDate() || isNaN(newDate.day)) {
        const errorSpan = inputWrappers[0].lastElementChild;
        inputWrappers[0].classList.add('add-error');
        errorSpan.innerHTML = "Must be a valid day"
        hasNoError.day = false;
    } else {
        hasNoError.day = true;
    }

    //check month input
    if (newDate.month.length === 0) {
        const errorSpan = inputWrappers[1].lastElementChild;
        inputWrappers[1].classList.add('add-error');
        errorSpan.innerHTML = "This field is required"
        hasNoError.month = false;
    } else if (parseInt(newDate.month) > 12 || parseInt(newDate.month) < 1 || isNaN(newDate.month)) {
        const errorSpan = inputWrappers[1].lastElementChild;
        inputWrappers[1].classList.add('add-error');
        errorSpan.innerHTML = "Must be a valid month"
        hasNoError.month = false;
    } else {
        hasNoError.month = true;
    }

    //check year input
    if (newDate.year.length === 0) {
        const errorSpan = inputWrappers[2].lastElementChild;
        inputWrappers[2].classList.add('add-error');
        errorSpan.innerHTML = "This field is required"
        hasNoError.year = false;
    } else if (newDate.year > new Date().getFullYear()) {
        const errorSpan = inputWrappers[2].lastElementChild;

        inputWrappers[2].classList.add('add-error');
        errorSpan.innerHTML = "Must be in the past"
        hasNoError.year = false;
    } else if (isNaN(newDate.year)) {
        const errorSpan = inputWrappers[2].lastElementChild;
        inputWrappers[2].classList.add('add-error');
        errorSpan.innerHTML = "Must be a valid year"
        hasNoError.year = false;
    } else {
        hasNoError.year = true;
    }



    if (hasNoError.day && hasNoError.month && hasNoError.year) {
        inputWrappers.forEach(input => {
            input.classList.remove('add-error');
            const errorSpan = input.lastElementChild;
            errorSpan.innerHTML = "";
        })
       
        let today = new Date();
        const diff = today - dateToCheck
        console.log(diff)
        var seconds = Math.floor(diff / 1000),
            minutes = Math.floor(seconds / 60),
            hours = Math.floor(minutes / 60),
            days = Math.floor(hours / 24),
            months = Math.floor(days / 30),
            years = Math.floor(months / 12);
        months%=12;
        days%=30;
        outputs.day.innerHTML = days;
        outputs.month.innerHTML= months;
        outputs.year.innerHTML= years;
    }

})