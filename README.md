# Express.js Route Handler Bug

This repository demonstrates a common bug in Express.js route handlers: missing error handling for invalid user IDs and missing return statement in the if condition. 

## Bug Description
The `bug.js` file contains an Express.js route handler that fetches a user by ID.  If an invalid ID is provided, the handler doesn't handle the error correctly, causing the server to hang instead of returning an appropriate error response to the client. Also, there is a missing return statement within the `if` block, leading to the same issue.

## Solution
The `bugSolution.js` file provides a corrected version of the route handler.  It includes error handling for invalid user IDs by returning a 404 Not Found status code if the user is not found and adding the missing return statement for the if condition. 

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`. 
4. Send a GET request to `/users/3` (or any ID not in the `users` array). The server will hang.
5. Run `node bugSolution.js`. 
6. Send a GET request to `/users/3`. The server will now respond with a 404 Not Found status code. 

## Lessons Learned
* Always handle potential errors in your route handlers.
* Provide meaningful error responses to the client.
* Always add a return statement after an if condition to avoid unexpected behavior.