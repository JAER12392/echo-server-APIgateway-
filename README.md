# echo-server-APIgateway-

Created a Node echo server in a Docker container that is publicly accessible over IP: https://1jflkzt63i.execute-api.us-east-1.amazonaws.com/Prod

Depending on if it is a GET or POST request the API will send you back the headers or headers + body of the requester. 

Used Amazon API gateway that directs traffic to either a GET route or POST route. Also have Cloudwatch analyzing the request to log all of that information.

