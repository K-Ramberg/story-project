# project-Mathland
REACT ON RAILS application for encouraging children to practice arithmetic.

### Outline
This application was put together with a React front end on Rails to with a PostgreSQL database. This application was initially intended to be focused on getting teh attention of chilren, who could create their own characters and insert themselves into a story they could directly influence. Due to time constraints and functional practicalty, the focus was then turned towards adding a more direct benefit. Introducing an academic component (more specifcally mathematics) allowed for direct placements of achievable tasks for users to get response from. In it's current iteration, Mathland acts more as a basic arithmetic math tudor than it's initial intent of story writing for children.The greatest challenge was working around a consistent continutity issue with the indexing of a story's page components; which ultimatley forced a shift from reusable preset sotries to one-use random story creation.

##### Live Site: 
https://mathlandia.herokuapp.com/

##### User Stories
https://trello.com/b/UH0CD9gR/storycraft

#### Goals and Improvements
In it's current state, Mathland leaves much to be desired. The holdover of creative emphasis for users to immerse themselves into stories is far from achieving intended effect. Necessary improvements include:  
    1. dynamic generation of styled story plot characters[much like a user can generate a character, a story 'antagonist' shall be generated in each iteration of a story to provide the challenges or qeustions]. 
    2. For each story, it is inteneded for the user to be given the option of adding a friend character. The function of theis friend now, as opposed to it's original companion role, now should provide the functionality of offering question solving hints. 
    3. A fundamental issue with the current state of the application is it's lack of any exposition or attmept thereof. A background of simple plot should be present from page to page. 
    4. beyond adding character styles, fleshing out themed settings has been left room for. It is currenlty coded that theme randomly generates in a story iteration, but now styles have yet been linked to those values to provide a much needed atmosphere to the page components. 
    5. Tracking a user's successfull completion of stories has been included to leae open the avenue of character progression. It is intended that to encourage use, and reuse of the application, higher tracked numbers of success should open up access for the user to more designed features for making a character.
    6. There is currently no warning or indication for answering a page question whether an incorrect answer has already been selected, how many chances a user has left to attempt to answer, or even a confirmation of selection.

### Planning
This application had a general direction of what it intended to do, but a lack of adequately concise planning proved evident in a failure to complete several set goals. However, it was always intended that a third-party API be included. When the application was directed towards it's current question answer format, the API Math.ly fit nicely with meeting those goals. It was a seemless integration, and I would reccommend its use in the future. It should also be noted that Math.ly was only workable in the application with the aid of the package Mathjax, wich allows react components to render the MathML results Math.ly API returns in its json responses. Additionally, the chancejs package worked conveniently for aiding in random character generation, allowing for easily served up names, genders, and numbers for plot characters and themes. I would also reccomend its use in the future.

#### ERD 
![](https://github.com/K-Ramberg/story-project/blob/master/ERD/Erd.png)

#### wire-frame
![](https://github.com/K-Ramberg/story-project/blob/master/Wireframe/wireframe.png)

#### Languages, Libraries, packages, etc.
- React
- Ruby on Rails
-Axios
-Styled Components
-lodash
-chancejs
-mathjax
-Math.ly
-Bootstrap