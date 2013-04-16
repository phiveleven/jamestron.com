Describe the experience design for the site. Write in states and events (perhaps in YAML). Integrate GA

(Features walk-through tests, entering the grid, returning to the grid)

Experience is described from the perspective of a discovering program. One use case is an actual program (crawler, bot, spider) another is a developer.

API Requirements (txt): https://gist.github.com/brito/5211287

todo: Convert requirements into a human-readable and parseable file (YAML), using structured natural language.

Example:

API:
  Requirements:
    - assert OPTIONS /api response is '200 OK':
    - assert GET /api/key matches /[a-z0-9]{64}/
    - (etc)

This YAML file will explain to a developer how to build one for any specific domain problem, similar to debug step through, so that a domain schema and API percolates from answering a set of prompts.

Simultaneously, a program can incrementally submit its own service to a james tron service which validates it (much like a web page can be validated for HTML, etc.)

A service provider (of "james tron" api design certification) could then sign and extend certificates, which another service can query. In a sense, it is a service vouching for another, in the same way a person could vouch for the abilities of a third.

These services could bubble up to a government, which can ensure legal and safety compliance, where all citizens (netizens) can openly see, vote, collaborate and discuss —much like european privacy and electronic communication regulations.

