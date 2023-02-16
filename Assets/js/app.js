// Scrolling navbar for full screen

var navbar = document.getElementById("navbar");
var items = navbar.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    var sectionId = this.getAttribute("id").replace("Item","Section");
    var section = document.getElementById(sectionId);
    var rect = section.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var top = rect.top + scrollTop;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });
}

// Scrolling navbar for small screen

document.getElementById('nav-toggle').addEventListener('click', function() {
  document.getElementById('dropdown').classList.toggle('hidden');
});

var navbar = document.getElementById("navbarsmall");
var items = navbar.getElementsByTagName("li");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    var sectionId = this.getAttribute("id").replace("Item","Section");
    var section = document.getElementById(sectionId);
    var rect = section.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var top = rect.top + scrollTop - 30;
    window.scrollTo({ top: top, behavior: 'smooth' });
    document.getElementById('dropdown').classList.toggle('hidden');
    document.getElementById('nav-toggle').classList.toggle('opened');
  });
}

// Dark mode

const checkbox1 = document.querySelector("#checkbox");
const checkbox2 = document.querySelector("#checkboxsm");

  if(localStorage.theme == 'dark') {
    checkbox1.checked = true;
    checkbox2.checked = true;
  }
  else{
    checkbox1.checked = false;
    checkbox2.checked = false;
  }

  checkbox1.addEventListener("change", function() {
    checkbox2.checked = checkbox1.checked;
  });

  checkbox2.addEventListener("change", function() {
    checkbox1.checked = checkbox2.checked;
  });
  
  var themeToggleBtn = document.getElementById('checkbox');
  var themeToggleBtn2 = document.getElementById('checkboxsm');
  
  themeToggleBtn.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'
      
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    }
      
  });

  themeToggleBtn2.addEventListener('click', function() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'
      maind.classList.add("home");
      maind.classList.remove("snowhm");
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
      maind.classList.remove("home");
      maind.classList.add("snowhm");
    }
      
  });

// Back to Top Button

window.addEventListener("scroll", function() {
  var button = document.getElementById("back-to-top");
  if (window.pageYOffset > 10) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

document.getElementById("back-to-top").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('dropdown').classList.add('hidden');
  document.getElementById('nav-toggle').classList.remove('opened');
});

// Typing effect

const typed = new Typed('#typed-text', {
  strings: ['B.Tech CSE Undergraduate', 'Software Developer', 'Competitive Programmer'],
  typeSpeed: 50,
  backSpeed: 24,
  showCursor: true,
  loop: true
});

// Projects hover

document.getElementById("hovervisible").addEventListener("mouseover", function() {
  document.getElementById("visibleonhover").style.display = "flex";
});

document.getElementById("hovervisible").addEventListener("mouseout", function() {
  document.getElementById("visibleonhover").style.display = "none";
});

document.getElementById("hovervisible2").addEventListener("mouseover", function() {
  document.getElementById("visibleonhover2").style.display = "flex";
});

document.getElementById("hovervisible2").addEventListener("mouseout", function() {
  document.getElementById("visibleonhover2").style.display = "none";
});

document.getElementById("hovervisible3").addEventListener("mouseover", function() {
  document.getElementById("visibleonhover3").style.display = "flex";
});

document.getElementById("hovervisible3").addEventListener("mouseout", function() {
  document.getElementById("visibleonhover3").style.display = "none";
});

// for buttons

document.getElementById("hoverrakhva").addEventListener("mouseover", function() {
  document.getElementById("hoverreh").classList.add("blur-md");
});
document.getElementById("hoverrakhva").addEventListener("mouseout", function() {
  document.getElementById("hoverreh").classList.remove("blur-md");
});

document.getElementById("hoverrakhva2").addEventListener("mouseover", function() {
  document.getElementById("hoverreh").classList.add("blur-md");
});
document.getElementById("hoverrakhva2").addEventListener("mouseout", function() {
  document.getElementById("hoverreh").classList.remove("blur-md");
});

document.getElementById("hoverrakhva3").addEventListener("mouseover", function() {
  document.getElementById("hoverreh2").classList.add("blur-md");
});
document.getElementById("hoverrakhva3").addEventListener("mouseout", function() {
  document.getElementById("hoverreh2").classList.remove("blur-md");
});

document.getElementById("hoverrakhva4").addEventListener("mouseover", function() {
  document.getElementById("hoverreh3").classList.add("blur-md");
});
document.getElementById("hoverrakhva4").addEventListener("mouseout", function() {
  document.getElementById("hoverreh3").classList.remove("blur-md");
});

// API for codeforces

let rankMap = new Map([
  ["newbie", "grey"],
  ["pupil", "green"],
  ["specialist", "darkcyan"],
  ["expert", "blue"],
  ["candidate master", "purple"],
  ["master", "orange"],
  ["international master", "orange"],
  ["grandmaster", "red"],
  ["international grandmaster", "red"],
  ["legendary grandmaster", "rgb(150,0,0)"],
]);

var profileimage = document.getElementById("profileimage");
var usernameid = document.getElementById("username");
var nccid = document.getElementById("ncc");
var ratingid = document.getElementById("rating");
var rankid = document.getElementById("rank");
var institutionid = document.getElementById("institution");
var linkid = document.getElementById("link");

async function getUserData(handle) {
  try {
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const data = await response.json();
    const userData = data.result[0];
    const handlelink = "https://codeforces.com/profile/" + userData.handle;
    const username = userData.handle;
    const name = userData.firstName + " " + userData.lastName;
    const rating = userData.rating;
    const rank = userData.rank;
    const city = userData.city;
    const country = userData.country;
    const institution = userData.organization;
    const profilePhoto = userData.titlePhoto;
    const maxRating = userData.maxRating;
    const maxRank = userData.maxRank;

    profileimage.innerHTML = `<img src="${profilePhoto}" alt="Profile Photo codeforces" class="object-cover h-60 aspect-square rounded-full">`;
    usernameid.innerHTML = username;
    nccid.innerHTML = name + ", " + city + ", " + country;
    ratingid.innerHTML = "Contest rating: " + `<element class = "font-semibold">${rating}</element>` + " (max. " + `<element class = "font-semibold">${maxRank}, ${maxRating})</element>`;
    rankid.innerHTML = rank;
    institutionid.innerHTML = "From " + institution;
    linkid.href = handlelink;

    usernameid.style.color = rankMap.get(rank.toLowerCase());
    ratingid.style.color = rankMap.get(rank.toLowerCase());
    rankid.style.color = rankMap.get(rank.toLowerCase());

  } catch (error) {
    console.error(error);
  }
}

getUserData('shinigami19');

// API for codechef

let rankMapcc = new Map([
  [0, "#666666"],
  [1400, "#1e7d22"],
  [1600, "#3366cc"],
  [1800, "#684273"],
  [2000, "#ffbf00"],
  [2200, "#ff7f00"],
  [2500, "#d0011b"],
]);

let id = 2638223;
let apiKey = "shinigami19:9f85c406587c4ce7c3d9562c95695bd610f91920";
const usercc = "shinigami19";
let ratings = 1670;

async function getUserDatacc(id, apiKey){
await fetch(`https://corsproxy.io/?https://clist.by/api/v2/account/${id}/`, {
	"headers": {
		"Authorization": `ApiKey ${apiKey}`
	}
})
	.then(response => response.json())
	.then(data => {
    ratings = data.rating;
  });
  
  document.getElementById("namecc").innerHTML = "Lalit Mangal";
  document.getElementById("usernamecc").innerHTML = usercc;
  document.getElementById("linkcc").href = "https://www.codechef.com/users/" + usercc;
  document.getElementById("profileimagecc").innerHTML = `<img src="https://cdn.codechef.com/sites/default/files/uploads/pictures/283e8e67c8295485abe2d338eaaff8fe.png" alt="Profile Photo Codechef" class="object-cover h-60 aspect-square rounded-full">`;
  document.getElementById("occucc").innerHTML = "Student";
  document.getElementById("countrycc").innerHTML = "India";
  document.getElementById("collegecc").innerHTML = "Birla Institute of Technology Mesra Ranchi, Jharkhand, India";
  document.getElementById("ratingcc").innerHTML = ratings;

  if (ratings < 1400) {
    document.getElementById("starscc").innerHTML = "1★";
    document.getElementById("starscc").style.backgroundColor = rankMapcc.get(0);
    document.getElementById("ratingstarsn").innerHTML = `<span id = "ratingstarsnsp">★</span>`;
    document.getElementById("ratingstarsnsp").style.backgroundColor = rankMapcc.get(0);

  }
  else if (ratings < 1600) {
    document.getElementById("starscc").innerHTML = "2★";
    document.getElementById("starscc").style.backgroundColor = rankMapcc.get(1400);
    for (let i = 0; i < 2; i++) {
      document.getElementById("ratingstarsn").innerHTML += `<span id = "ratingstarsnsp">★</span>`;
    }
    var elements = document.querySelectorAll("#ratingstarsnsp");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = rankMapcc.get(1400);
    }
  }
  else if (ratings < 1800) {
    document.getElementById("starscc").innerHTML = "3★";
    document.getElementById("starscc").style.backgroundColor = rankMapcc.get(1600);
    for (let i = 0; i < 3; i++) {
      document.getElementById("ratingstarsn").innerHTML += `<span id = "ratingstarsnsp">★</span>`;
    }
    var elements = document.querySelectorAll("#ratingstarsnsp");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = rankMapcc.get(1600);
    }
  }
  else if (ratings < 2000) {
    document.getElementById("starscc").innerHTML = "4★";
    document.getElementById("starscc").style.backgroundColor = rankMapcc.get(1800);
    for (let i = 0; i < 4; i++) {
      document.getElementById("ratingstarsnsp").style.backgroundColor = rankMapcc.get(1800);
    }
    var elements = document.querySelectorAll("#ratingstarsnsp");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = rankMapcc.get(1800);
    }
  }
  else if (ratings < 2200) {
    document.getElementById("starscc").innerHTML = "5★";
    document.getElementById("starscc").style.backgroundColor = rankMapcc.get(2000);
    for (let i = 0; i < 5; i++) {
      document.getElementById("ratingstarsn").innerHTML += `<span id = "ratingstarsnsp">★</span>`;
    }
    var elements = document.querySelectorAll("#ratingstarsnsp");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = rankMapcc.get(2000);
    }
  }
  else if (ratings < 2500) {
    document.getElementById("starscc").innerHTML = "6★";
    document.getElementById("starscc").style.backgroundColor = rankMapcc.get(2200);
    for (let i = 0; i < 6; i++) {
      document.getElementById("ratingstarsn").innerHTML += `<span id = "ratingstarsnsp">★</span>`;
    }
    var elements = document.querySelectorAll("#ratingstarsnsp");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = rankMapcc.get(2200);
    }
  }
  else if (ratings >= 2500){
    document.getElementById("starscc").innerHTML = "7★";
    document.getElementById("starscc").style.backgroundColor = rankMapcc.get(2500);
    for (let i = 0; i < 7; i++) {
      document.getElementById("ratingstarsn").innerHTML += `<span id = "ratingstarsnsp">★</span>`;
    }
    var elements = document.querySelectorAll("#ratingstarsnsp");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = rankMapcc.get(2500);
    }
  }
}

getUserDatacc(id, apiKey);

// API for hackerrank

const username = "shinigami19";

async function getUserDatahr(username){
const url = `https://corsproxy.io/?https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`;
const response = await fetch(url, {
  headers: {
    Origin: "*",
    Cookie: `_hrank_session=31d9cd93f9b46392aa602076f614344a2d49f307882d3aadd684ad13474c25165e368e7f5ca11322e12adee461a6c1a6dcfc01899baa935a0d404b9f949ad40d`,
  },
  });
  const data = await response.json();
  document.getElementById("profileimagehr").innerHTML = `<img src="${data.model.avatar}" alt="Profile Photo Hackerrank" class="object-cover h-60 aspect-square rounded-full">`;
  document.getElementById("linkhr").href = "https://www.hackerrank.com/" + username;
  document.getElementById("namehr").innerHTML = data.model.personal_first_name.charAt(0).toUpperCase() + data.model.personal_first_name.slice(1) + " " + data.model.personal_last_name.charAt(0).toUpperCase() + data.model.personal_last_name.slice(1);
  document.getElementById("usernamehr").innerHTML = "@" + data.model.username;
  document.getElementById("countryhr").innerHTML = data.model.country;
  document.getElementById("collegehr").innerHTML = data.model.school;

const url2 = `https://corsproxy.io/?https://www.hackerrank.com/rest/hackers/${username}/badges`;
const response2 = await fetch(url2, {
  headers: {
    Origin: "*",
    Cookie: `_hrank_session=31d9cd93f9b46392aa602076f614344a2d49f307882d3aadd684ad13474c25165e368e7f5ca11322e12adee461a6c1a6dcfc01899baa935a0d404b9f949ad40d`,
  },
  });
  const data2 = await response2.json();
  document.getElementById("badgeshr").innerHTML =   `<h3 class = "font-bold mb-2 dark:text-beige-text dark:font-extrabold">Badges : </h3><ul>`;
  for(var i = 0; i < data2.models.length; i++){
    if(data2.models[i].stars != 0)
      document.getElementById("badgeshr").innerHTML += `<li>${data2.models[i].badge_name} - ${data2.models[i].stars} stars</li></ul>`;
  }
  document.getElementById("badgeshr").innerHTML += `</ul>`;
  

const url3 = `https://corsproxy.io/?https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=${username}`;
const response3 = await fetch(url3, {
  headers: {
    Origin: "*",
    Cookie: `_hrank_session=31d9cd93f9b46392aa602076f614344a2d49f307882d3aadd684ad13474c25165e368e7f5ca11322e12adee461a6c1a6dcfc01899baa935a0d404b9f949ad40d`,
  },
  });
  const data3 = await response3.json();
  document.getElementById("skillshr").innerHTML =   `<h3 class = "font-bold mb-2 dark:text-beige-text dark:font-extrabold">Verified Skills : </h3><ul>`;
  for(var i = 0; i < data3.data.length; i++){
    if(data3.data[i].attributes.certificate.level)
      document.getElementById("skillshr").innerHTML += `<li>${data3.data[i].attributes.certificate.label} (${data3.data[i].attributes.certificate.level})</li></ul>`;
    else
    document.getElementById("skillshr").innerHTML += `<li>${data3.data[i].attributes.certificate.label}</li></ul>`;
  }
  document.getElementById("skillshr").innerHTML += `</ul>`;
}
getUserDatahr(username);

// API for github

async function getGitHubProfile(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  
  document.getElementById("profileimagegit").innerHTML = `<img src="${data.avatar_url}" alt="Profile Photo Github" class="object-cover h-60 aspect-square rounded-full">`;
  document.getElementById("linkgit").href = "https://www.github.com/" + username;
  document.getElementById("namegit").innerHTML = data.name;
  document.getElementById("usernamegit").innerHTML = username;
  document.getElementById("locationgit").innerHTML = data.location;
}

getGitHubProfile("shinigami1908");

GitHubCalendar(".calendar", "shinigami1908", {responsive: true, global_stats: false});

// Reply using emailsjs

document.getElementById("contactme").addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm("mail_from_portfolio", "mail_from_portfolio_t", '#contactme', "e5ZhmyNqVEEFPqkb3")
  .then(function(response) {
    alert("Email sent successfully!");
    location.reload();
  }, function(error) {
    console.log("Send email failed!\r\n Response:\n " + JSON.stringify(error));
    alert("Send email failed! Please try again later.");
  });
});

// Konami code

let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let index = 0;
    document.addEventListener("keydown", function(event) {
      if (event.keyCode === konamiCode[index]) {
        index++;
        if (index === konamiCode.length) {
          window.open("https://youtu.be/dQw4w9WgXcQ", "_blank");
        }
      } else {
        index = 0;
      }
    });

// Console Message

console.log("Roses are red\n9/11 was tragic\nEnter the konami code\nto see the magic");