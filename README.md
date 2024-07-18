# Notes

1. I spent a (long) day doing this, maybe 10 hours or so just so you have visibility of effort.
2. Many aspects of it are not production ready due to the time limitation but hopefully you can see the foundations, I have left comments where things are paricularly hacky!
3. I generally favour a utility first approach to CSS which I'd usually do with TailwindCSS or spend time setting up helpers by generating them with SASS, but owing to time constraints I stuck with basic CSS and modules as they work out the box with NextJS.
4. I've used [Utopia](https://utopia.fyi) to provide some consistant sizing and spacing. Again I'd normally set up helper classes but I've used the variables directly in the interest of expedience.
5. There are no media queries - again just a time thing. Utopia does eliminate a lot of the faff of sizing, but doesn't help with layout so I'd suggest viewing on at least a 1240px screen.
6. I only set up one test for the core filtering to satisfy the requirement - I'd have loved to include a component one but ran out of time.
7. I'd usually use a framework like react-hook-form for the filter form but did it in a pretty old school manual way just to show that I know how to!
8. I initially assumed it would be api based filtering - for this I'd use SWR or more likely [react-query](https://tanstack.com/query/latest/docs/framework/react/overview). You can see I started doing the path of extracting some of the API request stuff but then bailed when I realised that it was all going to be client side.
9. I would usually use a lib like [io-ts](https://github.com/gcanti/io-ts) to prevent bad data coming into the app - I did find a few places where the types didn't align with what was coming over the wire, but I've just worked around this by modifying the type defs.

# Virgin Atlantic / Virgin Atlantic Holidays ~ Holiday Search Results (Front-end test)

Thank you for your interest in joining our front-end team and taking the time to do the test. We think it will provide a nice and interesting challenge and a good talking point for the next stage of the process.

## Rules

You must write the application in [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) with [NextJS](https://nextjs.org/). This is all set up and ready to use inside this project.

We have used [new App Router](https://nextjs.org/docs/app/building-your-application/routing) in Next to make the test a bit more interesting and mix rendering on the client and server.

For the test you should adhere to the following conditions:

1. The code must be your own work. If you have a strong case to use a small code snippet of someone else's e.g. a
   boilerplate function, it must be clearly commented and attributed to the original author
1. You must include any unit tests you think are appropriate - Cypress is set up for you already
1. Give consideration to performance and accessibility. Lighthouse scores are high - please keep them that way
1. Code must be clear, concise and human readable
1. We do not want to see how well you can use a UI framework. This is a test and we want to see what you can create so please avoid Bootstrap, Material UI etc
1. Simple CSS has been included but please use whatever CSS flavour you like: LESS, Emotion, Styled Components etc

## What it should do

Build the 'search results page' which connects to our holiday search API to display a list of holidays for a given location and departure date. Select what data items (example listed below) you think should be included on the page. You can use the [live website](https://www.virginholidays.co.uk) and a holiday search as an example but feel free to change things up.

Add the ability to filter the results by:

1. Price per person
1. Hotel facilities
1. Star rating

The call to the API has been made inside the SearchResultsComponent and some example links are provided on the home route.

Typings for the POST request body and response are provided in `src/types/booking.ts` file.

The endpoint will return data relating to the holiday packages available. The key properties you should be interested in are in the typings. Please note, our endpoint will return much more data, but you are free to ignore this!

Results can be slow to load so you will need to handle this in your code how ever you wish but a basic `loading.tsx` file has been added.

## Supplying your code

Please **create and commit your code into a public Github repository** and supply the link to the recruiter for review.

Thanks for your time, we look forward to hearing from you!

## Running the app

`yarn dev` to start serving the application in development mode. You can check a production ready build by running `yarn build && yarn start`. Please refer to the NextJS documentation for more details.

`yarn cypress:open` to run the Cypress test. We have provided a passing test already for the composition service but would like to see some more.

Built on node `v20.1.0`.
