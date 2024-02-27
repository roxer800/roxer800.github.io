const dropdownButton= document.querySelector('.form--dropdown')
const dropdownDiv= document.querySelector('.dropdown-menu-form')
const adultsMinus= document.querySelector('.adults--minus')
const adultsPlus= document.querySelector('.adults--plus')
const childrenMinus= document.querySelector('.children--minus')
const childrenPlus= document.querySelector('.children--plus')
const roomsMinus= document.querySelector('.rooms--minus')
const roomsPlus = document.querySelector('.rooms--plus')
const formDropdown = document.querySelector('.form--dropdown')
const test = document.querySelector('.adults--count')



let dropdownId = false
let adultsCount = 0
let childrenCount = 0
let roomsCount = 0












dropdownButton.addEventListener('click', () => {
    dropdownId = !dropdownId
    dropdownDiv.style.display = dropdownId? 'block' : 'none'
})


adultsPlus.addEventListener('click', () => {
    adultsCount++
    if(adultsCount > 0) {
        adultsMinus.style.color = '#006ce4'
        adultsMinus.style.cursor = 'pointer'
    }
    document.querySelector('.adults--count').innerHTML = adultsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})
childrenPlus.addEventListener('click', () => {
    childrenCount++
    if(childrenCount >= 1) {
        childrenMinus.style.color = '#006ce4'
        childrenMinus.style.cursor = 'pointer'
    }
    document.querySelector('.children--count').innerHTML = childrenCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})
roomsPlus.addEventListener('click', () => {
    roomsCount++
    if(roomsCount > 0) {
        roomsMinus.style.color = '#006ce4'
        roomsMinus.style.cursor = 'pointer'
    }
    document.querySelector('.rooms--count').innerHTML = roomsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})


adultsMinus.addEventListener('click', () => {
    if(adultsCount > 0) {
        adultsCount-- 
    } else if(adultsCount < 1) {
        adultsMinus.style.color = 'grey'
        adultsMinus.style.cursor = 'no-drop'
        adultsCount = 0
    }
    document.querySelector('.adults--count').innerHTML = adultsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})
childrenMinus.addEventListener('click', () => {

    if(childrenCount > 0) {
        childrenCount-- 
    } else  {
        childrenMinus.style.color = 'grey'
        childrenMinus.style.cursor = 'no-drop'
        console.log(childrenCount)
    }
    document.querySelector('.children--count').innerHTML = childrenCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
    
})
roomsMinus.addEventListener('click', () => {
    if(roomsCount > 0) {
        roomsCount-- 
    } else if(roomsCount < 1) {
        roomsMinus.style.color = 'grey'
        roomsMinus.style.cursor = 'no-drop'
        roomsCount = 0
    }
    document.querySelector('.rooms--count').innerHTML = roomsCount
    formDropdown.innerHTML = `${adultsCount} adults &#x2022 ${childrenCount} children &#x2022 ${roomsCount} room`
})





const firstCheckQuestion = document.querySelector('.first--check--question')
const firstCheckQuestionContent = document.querySelector('.first--check--question--content')
const secondCheckQuestion = document.querySelector('.second--check--question')
const secondCheckQuestionContent = document.querySelector('.second--check--question--content')


    firstCheckQuestion.addEventListener('mouseover', () => {
        firstCheckQuestionContent.style.display = 'block'
    })
    firstCheckQuestion.addEventListener('mouseout', () => {
        firstCheckQuestionContent.style.display = 'none'
    })
    
    secondCheckQuestion.addEventListener('mouseover', () => {
        secondCheckQuestionContent.style.display = 'block'
    })
    secondCheckQuestion.addEventListener('mouseout', () => {
        secondCheckQuestionContent.style.display = 'none'
    })

    mobiscroll.datepicker('#inline-picker', {
        controls: ['calendar'],
        select:'range',
        display: 'inline',
        pages:2,
        showRangeLabels: false,
        touchUi: false,
        
    });
    
    
    const checkOutDateCalendar = document.querySelector('.check--out--date--calendar');
    const checkInDateCalendar = document.querySelector('.check--in--date--calendar');


    

    
    



    const calendarPicker = document.querySelector('.calendar--picker');
    const flexible = document.querySelector('.flexible')
    const flexiblePicker = document.querySelector('.flexible--picker')
    const flexibleFooter = document.querySelector('.flexible--footer')
    const calendar = document.querySelector('.calendar')
    const calendarDayPickerDiv = document.querySelector('.calendar--day--picker--div')


    
    calendarPicker.addEventListener('click',() => {
        if(calendar.style.display = 'none')  {
            flexiblePicker.style.display = 'none'
            flexibleFooter.style.display = 'none'
            calendar.style.display = 'block'
            calendarDayPickerDiv.style.display = 'flex'
            calendarPicker.style.color = '#006ce4'
            flexible.style.color = 'grey'
        }
    })
    flexible.addEventListener('click',() => {
        if(flexiblePicker.style.display = 'none')  {
            calendar.style.display = 'none'
            calendarDayPickerDiv.style.display = 'none'
            flexiblePicker.style.display = 'block'
            flexibleFooter.style.display = 'flex'
            calendarPicker.style.color = 'grey'
            flexible.style.color = '#006ce4'
        }
    })
    
    const calendarPicker2 = document.querySelector('.calendar--picker2');
    const flexible2 = document.querySelector('.flexible2')
    const flexiblePicker2 = document.querySelector('.flexible--picker2')
    const flexibleFooter2 = document.querySelector('.flexible--footer2')
    const calendar2 = document.querySelector('.calendar2')
    const calendarDayPickerDiv2 = document.querySelector('.calendar--day--picker--div2')

    
    calendarPicker2.addEventListener('click',() => {
        if(calendar2.style.display = 'none')  {
            flexiblePicker2.style.display = 'none'
            flexibleFooter2.style.display = 'none'
            calendar2.style.display = 'block'
            calendarDayPickerDiv2.style.display = 'flex'
            calendarPicker2.style.color = '#006ce4'
            flexible2.style.color = 'grey'
        }
    })
    flexible2.addEventListener('click',() => {
        if(flexiblePicker2.style.display = 'none')  {
            calendar2.style.display = 'none'
            calendarDayPickerDiv2.style.display = 'none'
            flexiblePicker2.style.display = 'block'
            flexibleFooter2.style.display = 'flex'
            calendarPicker2.style.color = 'grey'
            flexible2.style.color = '#006ce4'
        }
    })


    
    window.onload = () => {
        const hideDiv = document.getElementById("myDiv")
        const hideDiv2 = document.getElementById("check--in--date")
    
        document.onclick = (div) => {
            if(div.target.id !== 'myDiv' && div.target.id !== 'myDiv2' && div.target.id !== 'sSPIWPJS'
            && div.target.id !== 'sSPIWPJS1' && div.target.id !== 'sSPIWPJS2' && div.target.id !== 'sSPIWPJS3' && div.target.id !== 'sSPIWPJS4'
            && div.target.id !== 'sSPIWPJS5' && div.target.id !== 'sSPIWPJS6' && div.target.id !== 'sSPIWPJS7' && div.target.id !== 'sSPIWPJS8'
            && div.target.id !== 'sSPIWPJS9' && div.target.id !== 'sSPIWPJS10' && div.target.id !== 'sSPIWPJS11' && div.target.id !== 'sSPIWPJS12'
            && div.target.id !== 'sSPIWPJS13' && div.target.id !== 'sSPIWPJS14' && div.target.id !== 'sSPIWPJS15' && div.target.id !== 'sSPIWPJS16'
            && div.target.id !== 'sSPIWPJS17' && div.target.id !== 'sSPIWPJS18' && div.target.id !== 'sSPIWPJS19' && div.target.id !== 'sSPIWPJS20'){
                hideDiv.style.display = 'none'
                dropdownId = !dropdownId
            }
            
            
    }
    }

    function toggleDiv(id) {
        document.querySelectorAll(".check--in--date--calendar").forEach((div) => {
        if (div.id == id) {
            div.style.display = div.style.display == "none" ? "block" : "none";
        } else {
            div.style.display = "none";
        }
        });
        
    }
    function hideOnClickOutside(divId) {
        $(document).on('click', function(event) {
            if (!$(event.target).closest('#' + divId).length) {
                $('#' + divId).fadeOut();
            }
        });
    
        $('#' + divId).on('click', function(event){
            event.stopPropagation(); // Prevent event bubbling
        });
    }
    hideOnClickOutside('checkInDate')
    