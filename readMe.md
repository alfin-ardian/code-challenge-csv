You challenge consists of 4 parts:

Part 1 - import extra houses from CSV

Context:
There is a CSV file in the repo under /data/other-houses.csv

Open frontend/backend.ts (the naming is a bit confusing, we’ll clear this up soon). In this file you will see a method called importData . When you open http://localhost:4000 in the browser and you click the button “import browser”, this method will run.

Your task:
In this importData method, import the data from ./data/other-houses.csv .

Please use an existing library to parse the contents of the CSV file, then map the data to House shape instances (frontend/src/shapes/House.tsx) To map the data, please implement the convertCSVToShapes method in the same file.

The important part here is to implement this in such a way that it could be reused in other places for other types of CSV's and other types of shapes.

In order to do this, importData will need to send a mapping between the CSV fields and the shape fields to convertCSVToShapes . It is up to you how want to make this mapping.

For now, you can ignore the ‘isNew’ field in CSV, this will come in part 2

Tip:
the first line in the CSV file consists of the CSV field names. And if you open House.tsx you will see ‘set-methods’, this is what you map the CSV field names to.

Result:
When you return a set of Houses from importData, they will automatically be send over back to the frontend and added to the state in Home. (see /frontend/src/pages/Home.tsx → importData)

When you’re done you should see 4 houses loaded after pressing the “import data” button.

Part 2 - Show a tag if a house is new

Context:

In the figma design, you see that 2 houses have a green label “new” on top of their picture.
And in the CSV data you will see that the last field is called ‘new’. However, there is no get/set method yet for this in the House shape.

Your task:

- Add a new get/set method in House.tsx called isNew. See the documentation here or simply copy and change one of the existing methods.
- Use the property houses.isNew . You will have to add this to frontend/src/ontologies/houses.ts see the documentation here if needed
- Use this new isNew method in the CSV import to also store last CSV ‘new’ field.
- Open frontend/src/components/HousePreview.tsx . Use the new house.isNew get-method to render the green label on top of the image of the houses, only for those houses that are new. Also open HousePreview.scss , here you can add new SCSS as you need. And you can use any class names that you create with styles.className in Home.tsx.
- Finally, make the “All” and “New” buttons in the top work. There is already a filter state that changes when these buttons are clicked. Use this state to only show the new houses when “New” is selected.

Part 3 improve the CSS

The app doesn’t fully look like the design yet. Change the vertical list into a grid and style the images so that it looks as much like the design as possible.

Bonus: add some break-points for mobile vs desktop styling.
