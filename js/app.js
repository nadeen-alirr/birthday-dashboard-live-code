let profiles = [
   {
        username: 'Nadeen',
        gender : 'Female',
        //  age: 25,
        birthday: '15 January 1998',
    },
    {
        username: 'Mohammad',
        gender : 'Male',
        //age: 28,
        birthday: '05 May 1995',
    },
    {
        username: 'Majd',
        gender : 'Female',
        //age: 24,
        birthday: '05 May 1999',
    },
    {
        username: 'Rawan',
        gender : 'Female',
        //age: 24,
        birthday: '10 May 1999',
    }
]


let profilesContainer = document.getElementById('birthday__profile-container')// note :id not class name

// day + month +year 
let currentDate= new Date();
let  currentMonth_str = currentDate.toLocaleString('default', { month: 'long' });
let currentDay = currentDate.getDay(); 
let currentYear =currentDate.getFullYear();
let currentMonthNum =currentDate.getMonth()+1;

console.log(currentMonthNum);
console.log(currentDay)
console.log(currentMonth_str);
console.log(currentYear);
console.log(currentDate);

let count =0;
let calculateAge=0;

for(let profile of profiles){
 let birthday = profile.birthday.split(' ');
    if(birthday[1] === currentMonth_str && birthday[0] == currentDay ){
    //Way 1 : The easy way
    let imageSrc= profile.gender ==='Female' ? 'assets/img/female.png' : 'assets/img/male.png' ;

    let calculateAge= currentYear - parseInt(birthday[2]);
    console.log(calculateAge);
        profilesContainer.innerHTML += ` <div class="birthday__profile">
        <img src=${imageSrc} alt="">
        <div class="birthday__info">
            <p>${profile.username}</p>
            <p id="P__age">${calculateAge}</p>
        </div>
    </div>`
    count++;
    }
}
   let total_birthday=document.getElementById('total_Birthdays');
   total_birthday.innerHTML=`${count} birthdays today`;

function clearAll(){
    profilesContainer.innerHTML='';
}




    //Way 2 : The hard way
        //  let profileCard =  document.createElement('div')
        // profileCard.className='birthday__profile';
        // profilesContainer.appendChild(profileCard)
        // let profileImg = document.createElement('img')
        // profileImg.setAttribute('src','assets/img/female.png')
        // profileCard.appendChild(profileImg);
        // let birthdayInfo = document.createElement('div')
        // birthdayInfo.className = 'birthday__info'
        // profileCard.appendChild(birthdayInfo)
        // let username = document.createElement('p')    
        //username.appendChild(document.createTextNode(profile.username))
        //birthdayInfo.appendChild(username)
        //let age = document.createElement('p')    
        //age.appendChild(document.createTextNode(profile.age))
        //birthdayInfo.appendChild(age)
        //console.log(profile)
    

   