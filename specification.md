# Define the Application

## 1. Add the library 
  
  Grab james-tron.js and add it to your project.

    <script src="path/to/james-tron.js">

## 2. Ready the console

  - Design / define schema, states, events.
  - Manage automated tests

## 3. Define components

  Determine the top level objects for the application
  
  Example:
  
        function User() {}

## 4. Define the states

  Describe the states the objects can be in.
  This is a collection of functions that test what states the object is in.
  
  Example:
    
    User.prototype.is = { Anonymous: Function,
                          Recognized: Function,
                          New: Function }

## 5. Define the events

  Describe the actions that trigger state changes.
  
  Example:
    
    User.prototype.can = { 'sign in': Function,
                           'sign out': Function }


# Implementation

## 1. 
    



# API documentation
## Functions that define states
### Get
### Set (Add, Modify, Remove)

## Functions that define events
### Get
### Set (Add, Modify, Remove)

  

# Clipboard

        ${Project Name}
        User can:
                - Register Account / Delete Account
                - Login / Logout
                - Search site
                - Create blog post / Delete a blog post
                - Share blog post
                        - on Facebook
                        - on Twitter
        
Each of these features are mapped to events.

        user() {
                .register_account({ ... })
                .login({ ... })
                .search_site({ ... })
                .create_article({ ... })
                .share_article({ ... });
                }
                
Example test case:
        
        GET user/${name}
                Ok? return new User (name)
                Not Found? return undefined

Example test case:
        
        GET article/${title}
                Ok? return new Article (title)
                Not Found? return undefined




