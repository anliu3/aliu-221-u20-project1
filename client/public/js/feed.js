document.addEventListener('DOMContentLoaded', function() {
//document.getElementById('portal_button').addEventListener('click', goToLocation("https://www.marist.edu/"))
//document.getElementById('portal_button_text').addEventListener('click', goToLocation("https://www.marist.edu/"))
}
);

let currentStories = [];

    currentStories.push({
        Title: 'Marist Story 1',
        Body: 'This is the body of the story, it may be longer',
        linkUrl: 'https://www.marist.edu/academic-resources/alc',
        imageUrl: 'images/campus.png'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: 'This is the body of the story, it may be longer',
        linkUrl: 'https://www.marist.edu/athletics',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Marist Story 3',
        Body: 'This is the body of the story, it may be longer',
        linkUrl: 'https://www.marist.edu/admission/visit/in-person',
        imageUrl: 'images/hancock.jpeg'
    });

    function displayItem(FeedItem) {
        let newsfeedElement = document.getElementById('newsfeed');

        newsfeedElement.innerHTML += `
            <div class = "feed-item">
                <h2><a href = "${FeedItem.linkUrl}" target = "_blank">${FeedItem.Title}</a></h2>
                <p>${FeedItem.Body}</p>
                <a href ="${FeedItem.linkUrl}" target = "_blank">
                    <img src = "${FeedItem.imageUrl}" alt ="${FeedItem.Title}" style = "max-width: 20%; height: 15%"></img>
                </a>
                </div>
             
    `;
}

for(i=0; i<currentStories.length; i++) 
    displayItem(currentStories[i]);
