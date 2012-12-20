James Tron
=============

Overview
--------

James Tron is a framework designed to facilitate feature architecture, interoperability,
testing and analytics.

At the center of all interaction is the user and the actions performed. Similarly, the server also
participates with responses, which are also events.

By centering on events and using them as pivot points, there can be separate definitions of what
the *events _do_* and how the *events _connect_* between each other.
In a sense, events represent the footprints of a user in a system. This user can be a physical person,
a user agent or browser running tests, or a server calling another server.

In between events, *states* determine the “stopping points” between events. *events _connect_ states*.


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
