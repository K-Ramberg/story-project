# project-Mathland
REACT ON RAILS application for encouraging children to practice arithmetic.

### Outline
This application was put together with a React front end on Rails to with a PostgreSQL database. This application was initially intended to be focused on getting the attention of chilren, who could create their own characters and insert themselves into a story they could directly influence. Due to time constraints and functional practicalty, the focus was then turned towards adding a more direct benefit. Introducing an academic component (more specifcally mathematics) allowed for direct placements of achievable tasks for users to get response from. In it's current iteration, Mathland acts more as a basic arithmetic math tudor than it's initial intent of story writing for children.

##### Live Site: 
https://mathlandia.herokuapp.com/

##### User Stories
https://trello.com/b/UH0CD9gR/storycraft

#### Goals and Improvements
In it's current state, the greatest challenge was working around a consistent continutity issue with the indexing of a story's page components; which ultimatley forced a shift from reusable preset sotries to one-use random story creation. The holdover of creative emphasis for users to immerse themselves into stories leaves room for the following improvements:  
    1. Much like a user can generate a character, a story 'antagonist' will be generated in each iteration of a story to provide the challenges or questions.  
    2. For each story, it is inteneded for the user to be given the option of adding an optional friend character to offer question solving hints. 
    3. To target the desired story experience, story exposition conditional to the page progression will be added. 
    4. beyond adding character styles, randomized story themes will be added. Setting will hold constant but time-of-day features like morning or night themes could be added.
    5. Tracking a user's successfull completion of stories has been included to leave open the avenue of character progression. It is intended that to encourage use, and reuse of the application, higher tracked numbers of success should open up access for the user to more designed features for making a character.
    6. There is currently no warning or indication for answering a page question whether an incorrect answer has already been selected, how many chances a user has left to attempt to answer, or even a confirmation of selection, which will aid intuitve use of the app. 

### Planning
 It was always intended that a third-party API would be included. When the application was directed towards it's current question answer format, the API Math.ly fit nicely with meeting those goals. It was a seemless integration, and I would reccommend its use in the future. It should also be noted that Math.ly was only workable in the application with the aid of the package Mathjax, wich allows react components to render the MathML results Math.ly API returns in its json responses. Additionally, the chancejs package worked conveniently for aiding in random character generation, allowing for easily served up names, genders, and numbers for plot characters and themes. I would also reccomend its use in the future.


#### ERD 
![](https://github.com/K-Ramberg/story-project/blob/master/ERD/Erd.png)

#### wire-frame
![](https://github.com/K-Ramberg/story-project/blob/master/Wireframe/wireframe.png)

#### Languages, Libraries, packages, etc.
- React
- Ruby on Rails
- Axios
- Styled Components
- lodash
- chancejs
- mathjax
- Math.ly
- Bootstrap
- React-Konva