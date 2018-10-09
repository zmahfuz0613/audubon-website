[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Audubon Society Website

Build a website for the Audubon Society!

## Prerequisites

* React
* Components, props, and state
* React Router

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Create a new React app
1. Fulfill the listed requirements.

Create a new React app in the root of this repository (i.e. `create-react-app
.`) and build your project out from there. You are required to turn in your
submission by making a pull request on the original repository.

Unless otherwise specified on the calendar or by an instructor, homework is due
the next morning by 9:00am.

## Requirements

The Audubon Society has asked you to build them a website where users can upload
pictures of birds and see those pictures in their own dedicated show page. So,
your app will have Create and Read. Your app should therefore have the following
pages:

**Home Page:** Users should see a thumbnail image for each bird. Clicking on the
bird image should take the user to the show page for that bird.

**Show Page:** Users should see all the data for a particular bird. Each bird
has an image, name, and genus. The show page should also include a link to the
Audubon Field Guide page for that bird. Birds for which there is an active
conservation effort will have a Conservation Status (not all birds will have
this though).

**Create Page:** Users should be able to navigate to this page from the
homepage. It should have a form for adding a new bird with fields for:

* `name`: the bird's common name
* `genus`: the bird's scientific name
* `conservationStatus`: If there is a conservation status for the bird
* `image`: an image of the bird
* `homepage`: a link to the Audubon Field Guide page.

Build your app to the following mocks:

**Home Page:**
![homepage](https://media.git.generalassemb.ly/user/8618/files/261bb4ca-cbb6-11e8-86de-e4da123819ce)

**Show Page:**
![show page](https://media.git.generalassemb.ly/user/8618/files/26595fb4-cbb6-11e8-9d34-3447f8414d6a)

**Create Page:**
![create page](https://media.git.generalassemb.ly/user/8618/files/25bc5570-cbb6-11e8-9912-eb843afec31c)

Use the following for the initial state of your application:

```js
const birds = [
{
  name: "Acadian Flycatcher",
  genus: "Empidonax virescens",
  conservationStatus: "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
  image: "https://cdn.audubon.org/cdn/farfuture/ultnKZor9cPFMcyALjvFJEFrjJhxsr_-ljICzfTVqWA/mtime:1486670068/sites/default/files/styles/nas_bird_teaser_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8qXImrfY",
  homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher"
},
{
  name: "Acorn Woodpecker",
  genus: "Melanerpes formicivorus",
  conservationStatus: "Still widespread and common. Reliance on specific oak habitats may make it vulnerable to the effects of climate change.",
  image: "https://cdn.audubon.org/cdn/farfuture/rV9bfk6By-hfKO78V7Tz6LTH7MU1MyrstRcH8OY2TaE/mtime:1486671727/sites/default/files/styles/nas_bird_teaser_illustration/public/2420_Sibl_9780307957900_art_r1.jpg?itok=ySesZCv7",
  homepage: "https://www.audubon.org/field-guide/bird/acorn-woodpecker"
},
{
  name: "American Black Duck",
  genus: "Anas rubripes",
  conservationStatus: "Still abundant locally, but has declined drastically in interior parts of range. Clearing of forest has favored invasion by Mallards, which hybridize extensively with Black Ducks, leading to genetic "swamping" of population.",
  image: "https://cdn.audubon.org/cdn/farfuture/eZFrB72N14qnZxWbHiiDLPNzTdX_1bZIa5zl5uLt5rc/mtime:1486671340/sites/default/files/styles/nas_bird_teaser_illustration/public/783_Sibl_9780307957900_art_r1.jpg?itok=o-HzSZ47",
  homepage: "https://www.audubon.org/field-guide/bird/american-black-duck"
},
{
  name: "American Flamingo",
  genus: "Phoenicopterus ruber",
  conservationStatus: "",
  image: "https://cdn.audubon.org/cdn/farfuture/nfXy1ET3ZGkV8yZFNpEqAv29fYGMxb_wM9N5T-PsazM/mtime:1486669819/sites/default/files/styles/nas_bird_teaser_illustration/public/601_Sibl_9780307957900_art_r1.jpg?itok=hnyWDc76",
  homepage: "https://www.audubon.org/field-guide/bird/american-flamingo"
},
{
  name: "American White Pelican",
  genus: "Pelecanus erythrorhynchos",
  conservationStatus: "Colonies are vulnerable to disturbance and habitat loss. Total population probably declined through first half of 20th century, substantial increase since 1970s.",
  image: "https://cdn.audubon.org/cdn/farfuture/7f6gpIGHyMDreAYYd2Ul-cWSt-fet7z-VpeT7_1pYYU/mtime:1486669913/sites/default/files/styles/nas_bird_teaser_illustration/public/267_Sibl_9780307957900_art_r1.jpg?itok=B2mWUqa6",
  homepage: "https://www.audubon.org/field-guide/bird/american-white-pelican"
},
{
  name: "Aplomado Falcon",
  genus: "Falco femoralis",
  conservationStatus: "",
  image: "https://cdn.audubon.org/cdn/farfuture/wPt5WS9x71iF-KzUvNCYlmRxfB4Tpd69hEO4xvWeYpM/mtime:1486680676/sites/default/files/styles/nas_bird_teaser_illustration/public/990_Sibl_9780307957900_art_r1.jpg?itok=N8wJoZOt",
  homepage: "https://www.audubon.org/field-guide/bird/aplomado-falcon"
},
{
  name: "Atlantic Puffin",
  genus: "Fratercula arctica",
  conservationStatus: "Major declines during 19th century were owing to overharvesting of eggs and adults. During 20th century, continued to decrease at southern end of breeding range in both North America and Europe. Vulnerable to introduction of predators (such as rats) to nesting islands. An ambitious Audubon project to re-introduce puffins on former nesting islands off Maine, started in the 1970s, has been a major success. However, at the southernmost colonies, puffins have poor breeding success in warm-water years, which are becoming more frequent as the climate heats up.",
  image: "https://cdn.audubon.org/cdn/farfuture/aMP5saJTXEJUkLnsCNCksvXWFizkDGMDSeXQ0QbnL8w/mtime:1486682448/sites/default/files/styles/nas_bird_teaser_illustration/public/2514_Sibl_9780307957900_art_r1.jpg?itok=mn0Rbdzj",
  homepage: "https://www.audubon.org/field-guide/bird/atlantic-puffin"
},
{
  name: "Aztec Thrush",
  genus: "Ridgwayia pinicola",
  conservationStatus: "",
  image: "https://cdn.audubon.org/cdn/farfuture/T8HeHD73Q_OVisROp6NKOOTX_yKCBCPrChSr7wXxL1E/mtime:1486682449/sites/default/files/styles/nas_bird_teaser_illustration/public/3556_Sibl_9780307957900_art_r1.jpg?itok=sVi2hkAV",
  homepage: "https://www.audubon.org/field-guide/bird/aztec-thrush"
},
]
```

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
