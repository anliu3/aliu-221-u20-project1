document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('https://marist.edu');
    }
}
,document.getElementById('portal_button').addEventListener('click', goToMaristEdu)
,document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu)
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

    console.log(currentStories);

    function displayItem(FeedItem) {
        let newsfeedElement = document.getElementById('newsfeed');

        let itemHTML =
            <div class = "feed-item">
                <h2><a href = '${feedItem.linkUrl}' target = '_blank'>${FeedItem.Title}</a></h2>
                <p>${FeedItem.Body}</p>
                <a href ='${feedItem.linkUrl}' target = '_blank'>
                    <img src = "${feedItem.imageUrl}" alt ="${feedItem.Title}" style = "max-width: 20%; height: 15%"></img>
                </a>
            </div>
    ;
    newsfeedElement.innerHTML += itemHTML;
}

currentStories.forEach(function(item) {
    displayItem(item);
});
