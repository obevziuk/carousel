## Description
The infinite carousel by default includes **50** slides and displays **7** items at a time.
There are buttons that allow to control the carousel, such as going forward/back, repeat slide animation, etc.
When the carousel is animated, the active slide will be highlighted in the center of the carousel to make it obvious that the slide is selected.
In addition, the custom animation will be applied to the active slide if required. The test data is used to define whether the slide should be animated and what unique animation should be applied.

In addition to the required directions there are a few bonus things that were done:
- the carousel is populated dynamically, based on the test data. So it makes the carousel reloadable with new data/images.
- the main.js file contains a signal function that is called when the current/active index is changed.
- extra functionality is added: adding/removing slides, switching between the number of slides to be displayed at a time.

## Third-party libraries
There are a few libraries have been used
- **Greensock library**. The library allows to animate DOM(Document Object Mode) elements(slides in our case) by applying variety of animation types
- **Slick Carousel**. The small library provides us with constructor to build the carousel as well as with event listeners/signals that allow us to control user interaction
- **jQuery**. Makes it easier, comparing to plain JS, to access and modify DOM

## Instructions:
- Please install [Node.js](https://nodejs.org/en/)
- Using terminal or git, open the folder with the code and install all required dependencies mentioned above by running the command:
```npm install```
Once the libraries are successfully installed, run the app by running the command:
```npm run start```
The app will be run on localhost:3000 and should be automatically opened on the default browser
