const posts = [
  {
    profileImage: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    profileName: "Sarthak Sharma",
    videoSrc: "Reels/v1.mp4",
    caption: "Learning JavaScript DOM and building real projects 🚀",
    isFollowed: false,
    isLiked: true,
    likeCount: 124,
    commentCount: 18,
    shareCount: 6
  },
  {
    profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    profileName: "Vaibhav Patil",
    videoSrc: "Reels/v2.mp4",
    caption: "Consistency is the key to growth 💻🔥",
    isFollowed: true,
    isLiked: false,
    likeCount: 89,
    commentCount: 12,
    shareCount: 3
  },
  {
    profileImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    profileName: "Somnath Patil",
    videoSrc: "Reels/v3.mp4",
    caption: "Day by day improving my frontend skills ✨",
    isFollowed: false,
    isLiked: false,
    likeCount: 210,
    commentCount: 34,
    shareCount: 15
  },
  {
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    profileName: "Shraddha Golhar",
    videoSrc: "Reels/v4.mp4",
    caption: "Day by day improving my frontend skills ✨",
    isFollowed: true,
    isLiked: false,
    likeCount: 450,
    commentCount: 94,
    shareCount: 56
  },
  {
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    profileName: "Twisha Marathe",
    videoSrc: "Reels/v5.mp4",
    caption: "Day by day improving my frontend skills ✨",
    isFollowed: false,
    isLiked: true,
    likeCount: 987,
    commentCount: 56,
    shareCount: 98
  },
  {
    profileImage: "https://plus.unsplash.com/premium_photo-1683121771856-3c3964975777?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    profileName: "Mayur Patil",
    videoSrc: "Reels/v6.mp4",
    caption: "Day by day improving my frontend skills ✨",
    isFollowed: true,
    isLiked: false,
    likeCount: 123,
    commentCount: 45,
    shareCount: 34
  }
];

var reel = document.querySelector(".section");

var html = "";

posts.forEach(function(element) {
  html += `<div class="reel">
          <video autoplay muted loop src="${element.videoSrc}"></video>
          <div class="bottom">
            <div class="user">
              <img
                src="${element.profileImage}"
                alt="${element.profileName}"
              />
              <h4>${element.profileName}</h4>
              <button>${element.isFollowed ? 'Following' : 'Follow'}</button>
            </div>
            <div class="caption">
              <p>${element.caption}</p>
            </div>
            <div class="right">
              <div class="like icon">
              ${element.isFollowed ? '<i class="ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}
                <h4>${element.likeCount}</h4>
              </div>
              <div class="comment icon">
                <i class="ri-chat-1-line"></i>
                <h4>${element.commentCount}</h4>
              </div>
              <div class="share icon">
                <i class="ri-share-forward-line"></i>
                <h4>${element.shareCount}</h4>
              </div>
              <div class="menu icon">
                <i class="ri-more-2-fill"></i>
              </div>
            </div>
          </div>
        </div>`;
});

if(reel) reel.innerHTML = html;

