let arr = [
  {
    "name": "Sundar Pichai",
    "role": "CEO of Google",
    "description": "Sundar Pichai is the CEO of Alphabet Inc. and its subsidiary Google. He is known for leading the development of products like Chrome, Android, and Google Drive.",
    "image": "https://media.gettyimages.com/id/1493187008/photo/berlin-germany-sundar-pichai-ceo-google-and-alphabet-attends-the-germany-women-and-google.jpg?s=612x612&w=0&k=20&c=hgPVha39Za2qJRYSpwT7ykkVz34DM2obEcFAOA4JiEI="
  },
  {
    "name": "Elon Musk",
    "role": "CEO of Tesla & SpaceX",
    "description": "Elon Musk is a business magnate and investor, leading companies focused on electric vehicles, space exploration, and renewable energy.",
    "image": "https://media.gettyimages.com/id/2184585949/photo/washington-dc-elon-musk-listens-as-u-s-president-elect-donald-trump-addresses-a-house.jpg?s=612x612&w=0&k=20&c=JAbnHDJQd2jem_u38KZt-UE4bdfynZZGqZPg4tkU5-c="
  },
  {
    "name": "Satya Nadella",
    "role": "CEO of Microsoft",
    "description": "Satya Nadella is the Chairman and CEO of Microsoft, credited with transforming the company’s culture and driving growth in cloud computing.",
    "image": "https://media.gettyimages.com/id/1730506424/photo/berlin-germany-satya-nadella-at-the-axel-springer-award-at-axel-springer-neubau-on-october-17.jpg?s=612x612&w=0&k=20&c=S9FtaS8aUexbzdVWHq6ktMJ9cYUTTa2M_hGwcpKRoSQ="
  },
  {
    "name": "Mark Zuckerberg",
    "role": "CEO of Meta",
    "description": "Mark Zuckerberg is the co-founder and CEO of Meta Platforms, the company behind Facebook, Instagram, and WhatsApp.",
    "image": "https://media.gettyimages.com/id/1178141599/photo/new-york-ny-facebook-ceo-mark-zuckerberg-speaks-about-the-new-facebook-news-feature-at-the.jpg?s=612x612&w=0&k=20&c=8Xrz-btIsKO1miA3mlp-YIL9RZryHRA3iCcjf-0jHZ0="
  }
]

var sum = " "
var main = document.querySelector('main')
arr.forEach(function(element){
    sum = sum + ` <div class="card">
            <img src="${element.image}" alt="">
            <h2>${element.name}</h2>
            <h3>${element.role}</h3>
            <p>${element.description}</p>
        </div>`
})

main.innerHTML = sum

