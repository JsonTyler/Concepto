# treefam
- On the left of the browser is the html form with a submit and download button that creates a download file called nodes.json in the Downloads folder of the file explorer

- On the right of the browser is the graph div for the vis.js library that renders the nodes/edges based on these parameters:

```<script>
  var data = {
    //DO NOT ALTER ANYTHING ABOVE HERE
    nodes: [
      ***DATA SHOULD BE HERE from submision and upload of form***

    ] //I want the contents of nodes.json BEFORE THIS COMMENT where the example 'hi' node is!!
    ,
    edges: [
        { id: "one", from: "header", to: "location"},
        { id: "two", from: "header", to:"caseNumber"},
        { id: "three", from: "header", to:"forensicExaminer"},
        { id: "four", from: "header", to:"request"},
        { id: "five", from: "request", to:"requestingOfficer"},
        { id: "six", from: "request", to:"background"},
        { id: "seven", from: "background", to:"backgroundInfo"},
        { id: "eight", from: "background", to:"digitalSummary"},
        { id: "nine", from: "digitalSummary", to:"forensicImaging"},
        { id: "ten", from: "digitalSummary", to:"forensicExamination"},
        { id: "eleven", from: "digitalSummary", to:"theConclusion"},
        { id: "twelve", from: "theConclusion", to:"conclusion"},
        { id: "thirteen", from: "theConclusion", to:"contact"},
        { id: "fourteen", from: "contact", to:"office"},
        { id: "fifteen", from: "contact", to:"unit"},
        { id: "sixteen", from: "contact", to:"forensicExaminerTwo"},
        { id: "seventeen", from: "contact", to:"officePhone"},
        { id: "eighteen", from: "contact", to:"cellPhone"},
        { id: "nineteen", from: "contact", to:"email"},
        { id: "twenty", from: "contact", to:"address"},
        { id: "twentyone", from: "address", to:"streetAddress"},
        { id: "twentytwo", from: "address", to:"cityAddress"},
        { id: "twentythree", from: "address", to:"stateAddress"},
        { id: "twentyfour", from: "address", to:"zipAddress"}

    ],
    options: {...};
  </script>```


  PROBLEMS:
   - Reference my fileUploader repo and see my README on there. It automatically adds upon submission to a /uploads folder in the same directory. I want this way of saving to be integrated on this repo in this program and I need the data to go into the above ```var data = {nodes:[*** I WANT THE SUBMISSION FORM DATA THAT IS IN JSON FORMAT TO BE LOADED HERE ***],
   edges: []}
# concepto
