//data-definition.md

user : String //The username that an individual will sign in with

password : String //The password that an individual will sign in with

spot : String //The name of a specific HotSpot location.  Example "Starbucks"

spotLoc : float[] //The x and y values (latitude and longitude) representing     where the spot is located

spotScore : int //The number of people in a certain spot at once.  If 20 people are at starbucks, spotScore would equal 20.

radius : float //The radius the user has to be in to be considered "in" the HotSpot

inRadius : boolean //Return true if within the radius, false otherwise

radiusTime : float //Gives the amount of time the user spent in the HotSpot
