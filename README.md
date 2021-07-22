# About
- This is the v1.0 of FuzzTube- a youtube clone.
- [Track of this app](https://www.notion.so/Making-of-Fuzz-Tube-YouTube-clone-63e839969f8e4d43a2c5c8fb9e9276d5) can be found here

## Features
- User can comment on the videos. Usually the comments are posted a little late due to
  poor Youtube API (though you can see your comments instantly in original YouTube)
- Users can see their subscribed channels from their authorized email address. 

## Issues with API

- While commenting, your comment/comments won't be rendered instantly. It might, but very rarely though the same comment will be 
  rendered instantly in original YouTube post.
    
  Reason being →

        That depends on rest API speed which delays the rendering.
        Now you might ask me that how it instantly shows the comment in the YouTube app or website.. There are some reasons:
        1. They might be using a different rest API version
        2. YouTube use microservice that's where they manage the speed
        3. YouTube use optimistic UI (It shows the result in frontend immediately but backend request is still on)
