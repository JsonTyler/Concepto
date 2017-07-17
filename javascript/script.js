
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: "test", label: "Please fill out the form to the left to populate this map..."}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {id: "a", from: "headerPreset", to: "locationPreset", hidden: "true"},
    {id: "b", from: "locationPreset", to: "location", label: "at", hidden: "true"},
    {id: "c", from: "headerPreset", to: "caseNumberPreset", hidden: "true"},
    {id: "d", from: "caseNumberPreset", to: "caseNumber", label: "is", hidden: "true"},
    {id: "e", from: "headerPreset", to: "forensicExaminerPreset", hidden: "true"},
    {id: "f", from: "forensicExaminerPreset", to: "forensicExaminer", label: "is", hidden: "true"},
    {id: "g", from: "headerPreset", to: "infoPreset"},
    {id: "h", from: "infoPreset", to: "requestingOfficerPreset", hidden: "true"},
    {id: "i", from: "requestingOfficerPreset", to: "requestingOfficer", label: "is", hidden: "true"},
    {id: "j", from: "infoPreset", to: "backgroundInfoPreset", hidden: "true"},
    {id: "k", from: "backgroundInfoPreset", to: "backgroundInfo", label: "contains", hidden: "true"},
    {id: "l", from: "infoPreset", to: "digitalEvidencePreset"},
    {id: "m", from: "digitalEvidencePreset", to: "forensicImagingPreset", hidden: "true"},
    {id: "n", from: "forensicImagingPreset", to: "forensicImaging", label: "results in", hidden: "true"},
    {id: "o", from: "digitalEvidencePreset", to: "forensicExaminationPreset", hidden: "true"},
    {id: "p", from: "forensicExaminationPreset", to: "forensicExamination", label: "examines", hidden: "true"},
    {id: "q", from: "digitalEvidencePreset", to: "conclusionPreset"},
    {id: "r", from: "conclusionPreset", to: "conclusion", label: "concludes that", hidden: "true"},
    {id: "s", from: "conclusionPreset", to: "contactPreset"},
    {id: "t", from: "contactPreset", to: "officePreset", hidden: "true"},
    {id: "u", from: "officePreset", to: "office", hidden: "true"},
    {id: "v", from: "contactPreset", to: "unitPreset", hidden: "true"},
    {id: "w", from: "unitPreset", to: "unit", hidden: "true"},
    {id: "x", from: "contactPreset", to: "officePhonePreset", hidden: "true"},
    {id: "y", from: "officePhonePreset", to: "officePhone", hidden: "true"},
    {id: "z", from: "contactPreset", to: "cellPhonePreset", hidden: "true"},
    {id: "aa", from: "cellPhonePreset", to: "cellPhone", hidden: "true"},
    {id: "ab", from: "contactPreset", to: "emailPreset", hidden: "true"},
    {id: "ac", from: "emailPreset", to: "email", hidden: "true"},
    {id: "ad", from: "contactPreset", to: "addressPreset"},
    {id: "ae", from: "addressPreset", to: "address", hidden: "true"}
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
      shadow: true,
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
      shadow: true,
      font: {
        color: 'black',
        size: 14
      },
      color: {
        background: 'rgb(47, 90, 201)',
        border: 'grey'
      },
      shape: 'box'
    },
    layout: {
      hierarchical: {
          levelSeparation: 100,
          nodeSpacing: 100,
          treeSpacing: 100,
          direction: "LR",
          sortMethod: "directed"
      }
    },
    interaction: {
      hideEdgesOnDrag: true,
      hideNodesOnDrag: false,
      navigationButtons: true
    }
  };



  var network = new vis.Network(container, data, options);
  var nodesInOpenClusters = {}
  var network = new vis.Network(container, data, options);
  network.on("selectNode", function(params) {
      if (params.nodes.length == 1) {
          if (network.isCluster(params.nodes[0]) == true) {
              var nodesInCluster = network.getNodesInCluster(params.nodes[0])
              nodesInOpenClusters[params.nodes[0]] = nodesInCluster;
              network.openCluster(params.nodes[0]);
          }
      }
  });

  network.on("stabilizationIterationsDone", function () {
    network.setOptions( { physics: false } );
  });

  // create presetNodes
  var presetData = [
    {
      "id": "headerPreset",
      "group": "groupOne",
      "label": "Header: ",
      "color": "red"
    },
    {
      "id": "locationPreset",
      "group": "groupTwo",
      "label": "Location: ",
      "color": "red",
      "hidden": "true"
    },
    {
      "id": "caseNumberPreset",
      "group": "groupTwo",
      "label": "Case Number: ",
      "color": "red",
      "hidden": "true"
    },
    {
      "id": "forensicExaminerPreset",
      "group": "groupTwo",
      "label": "Forensic Examiner: ",
      "color": "red",
      "hidden": "true"
    },
    {
      "id": "infoPreset",
      "group": "groupOne",
      "label": "Info: ",
      "color": "black"
    },
    {
      "id": "requestingOfficerPreset",
      "group": "groupTwo",
      "label": "Requesting Officer: ",
      "color": "black",
      "hidden": "true"
    },
    {
      "id": "backgroundInfoPreset",
      "group": "groupTwo",
      "label": "Background Info: ",
      "color": "black",
      "hidden": "true"
    },
    {
      "id": "digitalEvidencePreset",
      "group": "groupOne",
      "label": "Digital Evidence Summary: ",
      "color": "blue",
      "hidden": "true"
    },
    {
      "id": "forensicImagingPreset",
      "group": "groupTwo",
      "label": "Forensic Imaging: ",
      "color": "blue",
      "hidden": "true"
    },
    {
      "id": "forensicExaminationPreset",
      "group": "groupTwo",
      "label": "Forensic Examination: ",
      "color": "blue",
      "hidden": "true"
    },
    {
      "id": "conclusionPreset",
      "group": "groupOne",
      "label": "Conclusion: ",
      "color": "purple"
    },
    {
      "id": "contactPreset",
      "group": "groupOne",
      "label": "Contact: ",
      "color": "green"
    },
    {
      "id": "officePhonePreset",
      "group": "groupTwo",
      "label": "Office Phone: ",
      "color": "green",
      "hidden": "true"
    },
    {
      "id": "cellPhonePreset",
      "group": "groupTwo",
      "label": "Cell Phone: ",
      "color": "green",
      "hidden": "true"
    },
    {
      "id": "emailPreset",
      "group": "groupTwo",
      "label": "Email: ",
      "color": "green",
      "hidden": "true"
    },
    {
      "id": "addressPreset",
      "group": "groupOne",
      "label": "Address: ",
      "color": "orange"
    }
  ];

  function make_json(form) {

    var formData = [{
        "id": "location",
        "group": "groupThree",
        "label": form.location.value,
        "color": "red",
        "hidden": "true"
      },
      {
        "id": "caseNumber",
        "group": "groupThree",
        "label": form.caseNumber.value,
        "color": "red",
        "hidden": "true"
      },
      {
        "id": "forensicExaminer",
        "group": "groupThree",
        "label": form.forensicExaminer.value,
        "color": "red",
        "hidden": "true"
      },
      {
        "id": "requestingOfficer",
        "group": "groupThree",
        "label": form.requestingOfficer.value,
        "color": "black",
        "hidden": "true"
      },
      {
        "id": "backgroundInfo",
        "group": "groupThree",
        "label": form.backgroundInfo.value,
        "color": "black",
        "hidden": "true"
      },
      {
        "id": "forensicImaging",
        "group": "groupThree",
        "label": form.forensicImaging.value,
        "color": "blue",
        "hidden": "true"
      },
      {
        "id": "forensicExamination",
        "group": "groupThree",
        "label": form.forensicExamination.value,
        "color": "blue",
        "hidden": "true"
      },
      {
        "id": "conclusion",
        "group": "groupThree",
        "label": form.conclusion.value,
        "color": "purple",
        "hidden": "true"
      },
      {
        "id": "officePhone",
        "group": "groupThree",
        "label": form.officePhone.value,
        "color": "green",
        "hidden": "true"
      },
      {
        "id": "cellPhone",
        "group": "groupThree",
        "label": form.cellPhone.value,
        "color": "green",
        "hidden": "true"
      },
      {
        "id": "email",
        "group": "groupThree",
        "label": form.email.value,
        "color": "green",
        "hidden": "true"
      },
      {
        "id": "address",
        "group": "groupThree",
        "label": form.address.value,
        "color": "orange",
        "hidden": "true"
      }
    ];
      nodes.clear();
      nodes.add(formData);
      nodes.add(presetData);
  };
