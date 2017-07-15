
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: "test", label: "Please fill out the form to the left to populate this map..."}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {id: "a", from: "headerPreset", to: "locationPreset", hidden: false},
    {id: "b", from: "locationPreset", to: "location", label: "at", hidden: false},
    {id: "c", from: "headerPreset", to: "caseNumberPreset", hidden: false},
    {id: "d", from: "caseNumberPreset", to: "caseNumber", label: "is", hidden: false},
    {id: "e", from: "headerPreset", to: "forensicExaminerPreset", hidden: false},
    {id: "f", from: "forensicExaminerPreset", to: "forensicExaminer", label: "is", hidden: false},
    {id: "g", from: "headerPreset", to: "infoPreset", hidden: false},
    {id: "h", from: "infoPreset", to: "requestingOfficerPreset", hidden: false},
    {id: "i", from: "requestingOfficerPreset", to: "requestingOfficer", label: "is", hidden: false},
    {id: "j", from: "infoPreset", to: "backgroundInfoPreset", hidden: false},
    {id: "k", from: "backgroundInfoPreset", to: "backgroundInfo", label: "contains", hidden: false},
    {id: "l", from: "infoPreset", to: "digitalEvidencePreset", hidden: false},
    {id: "m", from: "digitalEvidencePreset", to: "forensicImagingPreset", hidden: false},
    {id: "n", from: "forensicImagingPreset", to: "forensicImaging", label: "results in", hidden: false},
    {id: "o", from: "digitalEvidencePreset", to: "forensicExaminationPreset", hidden: false},
    {id: "p", from: "forensicExaminationPreset", to: "forensicExamination", label: "examines", hidden: false},
    {id: "q", from: "digitalEvidencePreset", to: "conclusionPreset", hidden: false},
    {id: "r", from: "conclusionPreset", to: "conclusion", label: "concludes that", hidden: false},
    {id: "s", from: "conclusionPreset", to: "contactPreset", hidden: false},
    {id: "t", from: "contactPreset", to: "officePreset", hidden: false},
    {id: "u", from: "officePreset", to: "office", hidden: false},
    {id: "v", from: "contactPreset", to: "unitPreset", hidden: false},
    {id: "w", from: "unitPreset", to: "unit", hidden: false},
    {id: "x", from: "contactPreset", to: "officePhonePreset", hidden: false},
    {id: "y", from: "officePhonePreset", to: "officePhone", hidden: false},
    {id: "z", from: "contactPreset", to: "cellPhonePreset", hidden: false},
    {id: "aa", from: "cellPhonePreset", to: "cellPhone", hidden: false},
    {id: "ab", from: "contactPreset", to: "emailPreset", hidden: false},
    {id: "ac", from: "emailPreset", to: "email", hidden: false},
    {id: "ad", from: "contactPreset", to: "addressPreset", hidden: false},
    {id: "ae", from: "addressPreset", to: "address", hidden: true}
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
          background:'rgb(23, 64, 160)',
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

  var network = new vis.Network(container, data,{options});

  var toggle = false;
  network.on("click", function(e) {
    tw_id = 'addressPreset';
    if (e.nodes[0] == tw_id) {
      nodes.update([
        {id: 'address', hidden: toggle}
      ]);
      edges.update([
        {id: 'ae', hidden: toggle}
      ]);
      network.fit();
      toggle = !toggle;
    }
  });

  // create presetNodes
  var presetData = [
    {
      "id": "headerPreset",
      "group": "groupOne",
      "label": "Header: ",
      "hidden": "false"
    },
    {
      "id": "locationPreset",
      "group": "groupTwo",
      "label": "Location: ",
      "hidden": "false"
    },
    {
      "id": "caseNumberPreset",
      "group": "groupTwo",
      "label": "Case Number: ",
      "hidden": "false"
    },
    {
      "id": "forensicExaminerPreset",
      "group": "groupTwo",
      "label": "Forensic Examiner: ",
      "hidden": "false"
    },
    {
      "id": "infoPreset",
      "group": "groupOne",
      "label": "Info: ",
      "hidden": "false"
    },
    {
      "id": "requestingOfficerPreset",
      "group": "groupTwo",
      "label": "Requesting Officer: ",
      "hidden": "false"
    },
    {
      "id": "backgroundInfoPreset",
      "group": "groupTwo",
      "label": "Background Info: ",
      "hidden": "false"
    },
    {
      "id": "digitalEvidencePreset",
      "group": "groupOne",
      "label": "Digital Evidence Summary: ",
      "hidden": "false"
    },
    {
      "id": "forensicImagingPreset",
      "group": "groupTwo",
      "label": "Forensic Imaging: ",
      "hidden": "false"
    },
    {
      "id": "forensicExaminationPreset",
      "group": "groupTwo",
      "label": "Forensic Examination: ",
      "hidden": "false"
    },
    {
      "id": "conclusionPreset",
      "group": "groupOne",
      "label": "Conclusion: ",
      "hidden": "false"
    },
    {
      "id": "contactPreset",
      "group": "groupOne",
      "label": "Contact: ",
      "hidden": "false"
    },
    {
      "id": "officePhonePreset",
      "group": "groupTwo",
      "label": "Office Phone: ",
      "hidden": "false"
    },
    {
      "id": "cellPhonePreset",
      "group": "groupTwo",
      "label": "Cell Phone: ",
      "hidden": "false"
    },
    {
      "id": "emailPreset",
      "group": "groupTwo",
      "label": "Email: ",
      "hidden": "false"
    },
    {
      "id": "addressPreset",
      "group": "groupOne",
      "label": "Address: ",
      "hidden": "false"
    }
  ];

  function make_json(form) {

    var formData = [{
        "id": "location",
        "group": "groupThree",
        "label": form.location.value,
        "hidden": "false"
      },
      {
        "id": "caseNumber",
        "group": "groupThree",
        "label": form.caseNumber.value,
        "hidden": "false"
      },
      {
        "id": "forensicExaminer",
        "group": "groupThree",
        "label": form.forensicExaminer.value,
        "hidden": "false"
      },
      {
        "id": "requestingOfficer",
        "group": "groupThree",
        "label": form.requestingOfficer.value,
        "hidden": "false"
      },
      {
        "id": "backgroundInfo",
        "group": "groupThree",
        "label": form.backgroundInfo.value,
        "hidden": "false"
      },
      {
        "id": "forensicImaging",
        "group": "groupThree",
        "label": form.forensicImaging.value,
        "hidden": "false"
      },
      {
        "id": "forensicExamination",
        "group": "groupThree",
        "label": form.forensicExamination.value,
        "hidden": "false"
      },
      {
        "id": "conclusion",
        "group": "groupThree",
        "label": form.conclusion.value,
        "hidden": "false"
      },
      {
        "id": "officePhone",
        "group": "groupThree",
        "label": form.officePhone.value,
        "hidden": "false"
      },
      {
        "id": "cellPhone",
        "group": "groupThree",
        "label": form.cellPhone.value,
        "hidden": "false"
      },
      {
        "id": "email",
        "group": "groupThree",
        "label": form.email.value,
        "hidden": "false"
      },
      {
        "id": "address",
        "group": "groupThree",
        "label": form.address.value,
        "hidden": "true"
      }
    ];
      nodes.clear();
      nodes.add(formData);
      nodes.add(presetData);
  };
