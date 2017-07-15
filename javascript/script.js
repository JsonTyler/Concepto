
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: "test", label: "Please fill out the form to the left to populate this map..."}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {id: "a", from: "headerPreset", to: "locationPreset"},
    {id: "b", from: "locationPreset", to: "location", label: "at"},
    {id: "c", from: "headerPreset", to: "caseNumberPreset"},
    {id: "d", from: "caseNumberPreset", to: "caseNumber", label: "is"},
    {id: "e", from: "headerPreset", to: "forensicExaminerPreset"},
    {id: "f", from: "forensicExaminerPreset", to: "forensicExaminer", label: "is"},
    {id: "g", from: "headerPreset", to: "infoPreset"},
    {id: "h", from: "infoPreset", to: "requestingOfficerPreset"},
    {id: "i", from: "requestingOfficerPreset", to: "requestingOfficer", label: "is"},
    {id: "j", from: "infoPreset", to: "backgroundInfoPreset"},
    {id: "k", from: "backgroundInfoPreset", to: "backgroundInfo", label: "contains"},
    {id: "l", from: "infoPreset", to: "digitalEvidencePreset"},
    {id: "m", from: "digitalEvidencePreset", to: "forensicImagingPreset"},
    {id: "n", from: "forensicImagingPreset", to: "forensicImaging", label: "results in"},
    {id: "o", from: "digitalEvidencePreset", to: "forensicExaminationPreset"},
    {id: "p", from: "forensicExaminationPreset", to: "forensicExamination", label: "examines"},
    {id: "q", from: "digitalEvidencePreset", to: "conclusionPreset"},
    {id: "r", from: "conclusionPreset", to: "conclusion", label: "concludes that"},
    {id: "s", from: "conclusionPreset", to: "contactPreset"},
    {id: "t", from: "contactPreset", to: "officePreset"},
    {id: "u", from: "officePreset", to: "office"},
    {id: "v", from: "contactPreset", to: "unitPreset"},
    {id: "w", from: "unitPreset", to: "unit"},
    {id: "x", from: "contactPreset", to: "officePhonePreset"},
    {id: "y", from: "officePhonePreset", to: "officePhone"},
    {id: "z", from: "contactPreset", to: "cellPhonePreset"},
    {id: "aa", from: "cellPhonePreset", to: "cellPhone"},
    {id: "ab", from: "contactPreset", to: "emailPreset"},
    {id: "ac", from: "emailPreset", to: "email"},
    {id: "ad", from: "contactPreset", to: "addressPreset"},
    {id: "ae", from: "addressPreset", to: "address"}
]);

  // create a network
  var container = document.getElementById('graph');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
    groups: {
      groupOne: {
        shape: 'box',
        color: {
          background:'rgb(10, 30, 113)'
        }
      },
      groupTwo: {
        shape: 'box',
        color: {
          background:'rgb(23, 64, 161)',
        },
      },
      groupThree: {
        shape: 'ellipse',
        color: {
          background: 'rgb(11, 10, 11)'
        }
      }
    },
    manipulation: {
      addNode: function(nodeData,callback) {
        nodeData.label = prompt("Label your node: ", "");
        callback(nodeData);
      },
      editEdge: function(nodeData, callback) {
        nodeData.label = prompt("Label your edge: ", "");
        callback(nodeData);
      }
    },
    edges: {
      arrows: {
      to:     {enabled: true, scaleFactor:1, type:'arrow'},
      middle: {enabled: false, scaleFactor:1, type:'arrow'},
      from:   {enabled: false, scaleFactor:1, type:'arrow'}
    },
      color: 'red',
      width: 2,
      dashes: true
    },
    nodes: {
      font: {
        color: 'white',
        size: 14
      },
      color: {
        background: 'white',
        border: 'grey'
      },
      shape: 'triangle'
    },
    //zoomView: true,
    layout: {
      improvedLayout: true,
      hierarchical: {
          levelSeparation: 100,
          treeSpacing: 100,
          parentCentralization: true,
          edgeMinimization: true,
          direction: "LR",
          sortMethod: "directed"
      }
    },
  };



  var network = new vis.Network(container, data, options);

  // create presetNodes
  var presetData = [
    {
      "id": "headerPreset",
      "group": "groupOne",
      "label": "Header: "
    },
    {
      "id": "locationPreset",
      "group": "groupTwo",
      "label": "Location: "
    },
    {
      "id": "caseNumberPreset",
      "group": "groupTwo",
      "label": "Case Number: "
    },
    {
      "id": "forensicExaminerPreset",
      "group": "groupTwo",
      "label": "Forensic Examiner: "
    },
    {
      "id": "infoPreset",
      "group": "groupOne",
      "label": "Info: "
    },
    {
      "id": "requestingOfficerPreset",
      "group": "groupTwo",
      "label": "Requesting Officer: "
    },
    {
      "id": "backgroundInfoPreset",
      "group": "groupTwo",
      "label": "Background Info: "
    },
    {
      "id": "digitalEvidencePreset",
      "group": "groupOne",
      "label": "Digital Evidence Summary: "
    },
    {
      "id": "forensicImagingPreset",
      "group": "groupTwo",
      "label": "Forensic Imaging: "
    },
    {
      "id": "forensicExaminationPreset",
      "group": "groupTwo",
      "label": "Forensic Examination: "
    },
    {
      "id": "conclusionPreset",
      "group": "groupOne",
      "label": "Conclusion: "
    },
    {
      "id": "contactPreset",
      "group": "groupOne",
      "label": "Contact: "
    },
    {
      "id": "officePhonePreset",
      "group": "groupTwo",
      "label": "Office Phone: "
    },
    {
      "id": "cellPhonePreset",
      "group": "groupTwo",
      "label": "Cell Phone: "
    },
    {
      "id": "emailPreset",
      "group": "groupTwo",
      "label": "Email: "
    },
    {
      "id": "addressPreset",
      "group": "groupOne",
      "label": "Address: "
    }
  ];

  function make_json(form) {

    var formData = [{
        "id": "location",
        "group": "groupThree",
        "label": form.location.value
      },
      {
        "id": "caseNumber",
        "group": "groupThree",
        "label": form.caseNumber.value
      },
      {
        "id": "forensicExaminer",
        "group": "groupThree",
        "label": form.forensicExaminer.value
      },
      {
        "id": "requestingOfficer",
        "group": "groupThree",
        "label": form.requestingOfficer.value
      },
      {
        "id": "backgroundInfo",
        "group": "groupThree",
        "label": form.backgroundInfo.value
      },
      {
        "id": "forensicImaging",
        "group": "groupThree",
        "label": form.forensicImaging.value
      },
      {
        "id": "forensicExamination",
        "group": "groupThree",
        "label": form.forensicExamination.value
      },
      {
        "id": "conclusion",
        "group": "groupThree",
        "label": form.conclusion.value
      },
      {
        "id": "officePhone",
        "group": "groupThree",
        "label": form.officePhone.value
      },
      {
        "id": "cellPhone",
        "group": "groupThree",
        "label": form.cellPhone.value
      },
      {
        "id": "email",
        "group": "groupThree",
        "label": form.email.value
      },
      {
        "id": "address",
        "group": "groupThree",
        "label": form.address.value
      }
    ];
      nodes.clear();
      nodes.add(formData);
      nodes.add(presetData);
  };
