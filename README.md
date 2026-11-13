# Reforestation in Galicia - Interactivity with JS

Pino Quemado ("Burnt Pine") is a crowdfunding initiative developed as part of an asynchronous programming activity of the Master's in Web Development and Applications at the Universidad Europea de Madrid (UEM). The goal of the project is to raise funds for the recovery of Galicia's forests after the fires, using an altruistic donation model.

> In this project you will only find fictitious data. It is a proof of concept or educational project, so it does not process any real data.



&nbsp;

## Technical details

If you would like to learn more about the HTML structure or the CSS design of the site, I invite you to find out more in these repositories: [HTML](https://github.com/asm-dev/forest-funding-html) and [CSS](https://github.com/asm-dev/forest-funding-css). 

As far as JavaScript is concerned, I decided to follow a **modular architecture** for the application. This approach ensures a clear separation of responsibilities, which improves the clarity, maintainability, scalability and reusability of the code.

To try the main **features** implemented, you can navigate through the main menu, by _scrolling_, or from the floating button "Save the Crescente forest" to the "Let's Save Crecente" section.

&nbsp;

|              Feature              |                                   Description                                   |                         Related file                          | Preview |
| :-------------------------------: | :------------------------------------------------------------------------------------: | :------------------------------------------------------------------: | :------------: |
| Form event handling | Sending form data to a database or backend. We use JSONPlaceholder to simulate a real API  |                     [`src/modules/donation-form.js`](src/modules/donation-form.js)                    | Success ![image](https://github.com/user-attachments/assets/fb4b59da-c100-48d1-862f-6725e01e7a9e) Error ![image](https://github.com/user-attachments/assets/d9d3c1d4-5da5-4684-bbd8-af6929e11e1f)|
|  Donation progress bar  | Lets the user know in real time the total raised for a specific action | [`src/modules/donation-tracker.js`](src/modules/donation-tracker.js) | We donate a certain amount ![image](https://github.com/user-attachments/assets/1d8a133a-fe9d-4514-a984-84b1ddd8349b) When the goal is reached ![image](https://github.com/user-attachments/assets/881774bc-bf0a-411a-9685-441f8077324d) |
|       Image carousel        |                  Increases the interactivity and dynamism of the page                   |         [`src/modules/carousel.js`](src/modules/carousel.js) | Medium and large screens ![image](https://github.com/user-attachments/assets/6e4bf34c-a8e1-42f3-ad39-80ce9b70b918) Mobile devices ![image](https://github.com/user-attachments/assets/245fa6bc-931a-4763-8f78-30829d812677) |
|         Countdown          | Details how many days, hours and minutes are left until the end of the action |        [`src/modules/countdown.js`](src/modules/countdown.js)        | 16:49 on 23/01/2024 ![image](https://github.com/user-attachments/assets/d2a04bb4-56bf-4000-8698-0a5b80051986)  One minute later ![image](https://github.com/user-attachments/assets/4df14a04-6057-4176-af25-b7d4d9210b6b) |
| (_Bonus track_) Quick direct aid submission | Donate directly to the action in a single click | [`src/modules/donation-tracker.js`](src/modules/donation-tracker.js) | Successful validation case ![image](https://github.com/user-attachments/assets/6e0b5bec-fd0f-4ef9-8cab-275e5521c459) ![image](https://github.com/user-attachments/assets/c5ea9ceb-7bbc-4492-abe2-66f10dcdcd8c) Invalid content ![image](https://github.com/user-attachments/assets/53ce54a2-97cd-462b-aaa2-386eb436add9) ![image](https://github.com/user-attachments/assets/522ca725-0b15-4a50-a66f-26874e2e970c) |
