James Tron
=============

*Work in Progress*

Overview
--------

James Tron is a framework designed to facilitate feature architecture, interoperability,
testing and analytics.

The product converts specifications in natural language to tests and code.
The end product is a translation from something high level that can be understood and written in tests.

At the center of all interaction is the user and the actions performed. Similarly, the server also
participates with responses, which are also events.

By centering on events and using them as pivot points, there can be separate definitions of what
the **events _do_** and how the **events _connect_** between each other.
In a sense, events represent the footprints of a user in a system. This user can be a physical person,
a user agent or browser running tests, or a server calling another server.

In between events, **states** determine the “stopping points” between events. **events _connect_ states** by subscription.


Experience
--------

We're looking at three usecases for James Tron. Product and Project Managers, Interaction Designers, and Engineers.

**Product Manager**     
  - focus: vision, analytics

**Project Manager**
  - focus: product capability, dev roadmap
  - (As a manager you have a dashboard of what tests are passing.)

**Interaction Designers**
  - focus: user flow quality, aesthetics

**Engineers**
  - focus: passing tests


To start you describe the product and its features:

The description of each feature has to be a comprehensive set of business critical requirements.

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




How to use
--------

1. Add the library


        <script src="path/to/james-tron.js">

2. Define states


        <form class=when-signed-out>
            <input name=email>
            <button>Sign in</button>
        </form>
    
        <a href="/profile" class=when-signed-in>Profile</a>
    
3. Define events


        $(document)
    
        // application data is stored on the document
        .data({
          user: {}
        })
        
        // events mutate data
        .tron({
            'sign-in': function sign_in(){ 
                $(this).data('user', { name:'james' });
            },
            'sign-out': function sign_out(){
                $(this).data('user', {});
            } })
            
        // a reset function reads data and determines what to show
        .rectify(function reset(){
          $('[class^=when-]').hide();
          
          if ($(this).data('user').name) 
            $('.when-signed-in').show();                
          else
            $('.when-signed-out').show();
        });
