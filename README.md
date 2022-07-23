# Tic-Tac-Paw
Project 1 Game

By: Shiv Patel


WireFrame
------
https://www.figma.com/file/xz9qGRsla9dZXSiBzChwzZ/Untitled?node-id=0%3A1


User Stories:
------
+ Player 1 Begins (Gray Cat)
+ Player will hover over which box they want to mark (Animated by jumping cat)
+ Once clicked, box will display image of their cat (Either gray or orange)
+ Turn will swap to next player
+ First person to have 3 of their image in a row, column, or diagonal will win
+ Score will increase depending on which player won and "Play Again" button will now appear
+ "Play Again" button will refresh page, allowing players to compete once more


Why Tic-Tac-Paw?
---------------
I wanted to try something simple as it was my first project and I didn't want to overload myself, so I chose a simple game like Tic-Tac-Toe. To spice it up, I decided to make it cat themed, because cats are awesome.

New Technologies Used
------------------
+ Array.from( ) 
+ .classList.add( )
+ ( ).target
+ local.storage.add( )
+ local.storage.get( )
+ .. and more

Unsolved Problems
-----------------------
+ Player score stays at 1 once page is refreshed
+ No way to stop clicking squares once game is won
+ Cat images aren't centered (Tried almost everything)

Approaches Taken
------------------------
For the images specifically, it was hard to find what to do until I came across a video that showed you how to add classes to html. This made it 1000x easier because I could just make a CSS class with an image, then use JS to add the image to the square that was clicked on.

Coming soon!
--------------------
+ Win animation
+ Sound effects
+ Cat selection

