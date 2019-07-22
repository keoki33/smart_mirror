Flatiron Coding Bootcamp final project - Smart / Magic mirror controlled via Google home app

https://youtu.be/A7g2VQ8CuxM

For my final Flatiron bootcamp project I created my own version of a smart mirror to showcase what I had learned. I knew I wanted to create a website with React.js, but I didn’t want to build a basic CRUD site. I wanted to make something different, something unique. I’ve always wanted to build a smart mirror so I decided what better time than now.

Unlike other smart mirrors that I’ve seen, I wanted to be able to control it without touching it for two reasons. First, because it should still function as a mirror. It would not make a good mirror if it’s constantly covered in smudges. Second, because you should be able to control it whilst getting ready.

Voice control was the logical choice, it allowed for hands free control even at a distance. I chose to integrate it with Google voice as it is superior to HTML5 Speech Recognition API and as a bonus, it also allowed me to learn how to create apps for google home.

The remote control was actually only created at first as a faster way to test the front end. I decided to add it as secondary control after seeing how well it worked and realizing that it would be difficult to demo the voice control in a noisy room.

I thoroughly enjoyed creating this project and my time at Flatiron bootcamp. I would recommend them to anyone that wants to learn programming.

Now for the tech stuff:

The frontend was created with React.js. My Google home app posts commands to my Rails backend which is then relayed to my frontend with action cable. Emailing is done with action mailer and SendGrid. The backend is hosted on Heroku and the frontend on netlify. The remote control is a separate React.js website which also posts commands to the backend.

For the demonstration the remote was running on an iPhone X and the mirror on an iPad Pro 12.9. The mirror was created using two way acrylic sheet and a box frame.

To do list:

refactor, refactor, more refactor
Create settings screen
user login, save settings
publish Google voice control app
Make all info tiles same size to allow for changing tiles
create more info tiles
