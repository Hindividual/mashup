V1: I'm a really big fan of poetry, and what I find really interesting about it is how it transforms over time. Words take on new meanings, imagery gets richer or more confusing; it's all about context.

Seeing instagram and their tagging system as an eye into how the modern public visualizes concepts, I thought it would be cool to make a game to see if people could guess a poem based on a series of isntagram pictures, with each word being represented as a tag on a picture being shown, but once I actually attempted to do this I realized that people will tag thier selfies with ANYTHING to get more likes, so this experiment kind of fails. Nevertheless, this makes AJAX requests and displays an image for each word (corresponding to a tag) typed in the input box, and gives credit to the usernames of the users whose images are displayed.


Issues I still need to work on:
(1) Due to the nature of AJAX requests, the images don't appear in the correct order. I've been playing around with this/stack-overflow-ing my brains out, but I haven't gotten there yet.
(2) I couldn't get the event handlers on my backbone view working correctly. Going to keep working with that.
(3) The render call is ugly. When I tried to set the URL on the model and call fetch, it gave me an error that I need to keep working on.

