# Access Job Levels

## Purpose 

I have developed a React proof-of-concept application as an alternative to the Page Tiger slides that are currently used. 

This concept stemmed from the challenges I encountered during the job mapping process. I found discrepancies, gaps in the roles described on the deck. I've dedicated significant time to reading the roles and understanding them so that I can apply it to the organisation I manage.

I have no fears that my feedback would be negatively received, but there is not a clear process for suggesting changes where I see errors or contributing some of the missing roles. I worry I'd be distracting people with other priorities, they would not be able to respond to my feedback in a timely fashion and therefore I'd be wasting effort raising any issues. 

This PoC serves as a response to these challenges. My aim is to streamline the review and publishing process for feedback to the Product and Engineering Individual Contributor job levels. 

At Guestline, we currently store our levels in Word documents available for edit and comment on Sharepoint. This is sufficient when you have a single author receiving feedback, but does not scale very well to multiple contributors. 

Instead of using Word, I (automatically) transcribed the slides to Markdown. Markdown is easy for humans to read and edit. It acts as a backend CMS, and Github (or Azure DevOps) could serve as a frontend. However, this project raises an important consideration: is the app necessary, or could Markdown alone suffice?

Git is key feature of this approach. It allows us to adopt more flexible and controlled workflows. For instance, we can implement restrictions on direct commits to the mainline, ensuring a more robust review and approval process. 

This shift in approach not only enhances the accuracy of job mapping but also aligns with decentralized decision making, fosters a culture of continuous improvement and adaptation.

## Markdown Job Levels
The Product and Engineering Individual Contributor job levels are available [here](/public/roles) to browse as markdown.

Note: parsing of these is not particularly robust and you must match the format exactly. 

## Development
This project was built using Vite.js 

To run the developement server execute:

```
yarn dev
```

You should be able to follow the provided link in the console.
