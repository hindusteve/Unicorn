# Unicorn
Coding Challenge during an interview - simple solution to be revisited


Challenge is to create a web app that allows a unicorn ranch owner to determine in real time where his current herd is distributed across 4 locations on the ranch (barn, pasture, meadow, trails).

Current solution is Javascript only, utilizes an object to represent the ranch and its locations, with key:value pairs representing each location and the unicorns at that location (implemented as an array). Two functions were utilized, one to track movements of individual unicorns from origin to destination, and second to provide a real time status of each location.

Future state goals:
 - make a true web app
 - ability to record movement of multiple unicorns, rather than individually
