##### Preview and link
https://neon-lamington-b2088c.netlify.app
![Cattura](https://github.com/SuperBona/Temp-contentful-app/assets/122936032/32c38463-eeeb-4339-b877-dc54013aa5e1)
![Cattura](https://github.com/SuperBona/Temp-contentful-app/assets/122936032/b89a4c05-4905-448e-a0ab-174740e7ffbb)




## Figma URL

[Contentful](https://www.figma.com/file/XtVr3JRCGWyZESYxd9EhZK/Contentful?node-id=0%3A1&t=SNnU6FgNUQXktIFb-1)

## Steps

#### Install and Setup

- npm install
- npm run dev

#### Structure

Create Hero and Projects components

#### Hero

Setup Hero component.

#### Nice Images

[Undraw](https://undraw.co/)

#### Data

Explore data.js

#### Headless CMS

A headless CMS is a back-end only content management system that provides content creators with an intuitive interface for creating and managing content, while leaving the front-end presentation layer to be handled by a separate system or platform. This approach allows for greater flexibility and scalability, as the content can be easily distributed to multiple channels and devices, without being limited by the constraints of a particular front-end system.

#### Contentful

Create a Contentful account

[Contentful ](https://www.contentful.com/)

##### Create Data

Setup content type and create few entries

#### Explore API

Get Space ID, Access Token and explore code examples.

Space ID -
Access Token -

#### Install SDK

- npm install contentful

#### Get Entries

```js
import { createClient } from 'contentful'

const client = createClient({
  space: '....',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
})

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response.items))
  .catch(console.error)
```

#### Custom Hook

Create custom hook with loading and projects state values.

#### Parse Data

Setup projects array

#### Setup Products Component

Render data in Products component

Invece di importare Axios e fornire l'URL con tutti questi valori sotto un hook, questa libreria fa questa richiesta per noi.
E poi possiamo concatenarlo o usare Await.
Get request per entries (specificare quale mi serve)
