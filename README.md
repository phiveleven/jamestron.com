James Tron
=============

Overview
--------

James tron is a framework designed to facilitate feature architecture, interoperability,
testing and analytics.

At the center of all interaction is the user and the actions performed. Similarly, the server also
participates with responses, which are also events.

By centering on events and using them as pivot points, there can be separate definitions of what
the *events _do_* and how the *events _connect_* between each other.
In a sense, events represent the footprints of a user in a system. This user can be a physical person,
a user agent or browser running tests, or a server calling another server.

In between events, *states* determine the “stopping points” between events. *events _connect_ states*.
