
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: "test", label: "Please fill out the form to the left to populate this map..."}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {id: "00", from: "caseName", to: "headerPreset", hidden: "false"},
    {id: "01", from: "caseName", to: "infoPreset", hidden: "false"},
    {id: "02", from: "caseName", to: "digitalEvidencePreset", hidden: "false"},
    {id: "03", from: "caseName", to: "conclusionPreset", hidden: "false"},
    {id: "04", from: "caseName", to: "contactPreset", hidden: "false"},
    {id: "05", from: "caseName", to: "addressPreset", hidden: "false"},
    {id: "a", from: "headerPreset", to: "locationPreset", hidden: "true"},
    {id: "b", from: "locationPreset", to: "location", label: "at", hidden: "true"},
    {id: "c", from: "headerPreset", to: "caseNumberPreset", hidden: "true"},
    {id: "d", from: "caseNumberPreset", to: "caseNumber", label: "is", hidden: "true"},
    {id: "e", from: "headerPreset", to: "forensicExaminerPreset", hidden: "true"},
    {id: "f", from: "forensicExaminerPreset", to: "forensicExaminer", label: "is", hidden: "true"},
    {id: "h", from: "infoPreset", to: "requestingOfficerPreset", hidden: "true"},
    {id: "i", from: "requestingOfficerPreset", to: "requestingOfficer", label: "is", hidden: "true"},
    {id: "j", from: "infoPreset", to: "backgroundInfoPreset", hidden: "true"},
    {id: "k", from: "backgroundInfoPreset", to: "backgroundInfo", label: "contains", hidden: "true"},
    {id: "m", from: "digitalEvidencePreset", to: "forensicImagingPreset", hidden: "true"},
    {id: "n", from: "forensicImagingPreset", to: "forensicImaging", label: "results in", hidden: "true"},
    {id: "o", from: "digitalEvidencePreset", to: "forensicExaminationPreset", hidden: "true"},
    {id: "p", from: "forensicExaminationPreset", to: "forensicExamination", label: "examines", hidden: "true"},
    {id: "q", from: "conclusionPreset", to: "conclusion", label: "concludes that", hidden: "true"},
    {id: "r", from: "contactPreset", to: "officePreset", hidden: "true"},
    {id: "s", from: "officePreset", to: "office", hidden: "true"},
    {id: "t", from: "contactPreset", to: "unitPreset", hidden: "true"},
    {id: "u", from: "unitPreset", to: "unit", hidden: "true"},
    {id: "v", from: "contactPreset", to: "officePhonePreset", hidden: "true"},
    {id: "w", from: "officePhonePreset", to: "officePhone", hidden: "true"},
    {id: "x", from: "contactPreset", to: "cellPhonePreset", hidden: "true"},
    {id: "y", from: "cellPhonePreset", to: "cellPhone", hidden: "true"},
    {id: "z", from: "contactPreset", to: "emailPreset", hidden: "true"},
    {id: "aa", from: "emailPreset", to: "email", hidden: "true"},
    {id: "ab", from: "addressPreset", to: "address", hidden: "true"}
]);

  // create a network
  var container = document.getElementById('graph');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {
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
      font: {
        face: 'Century Gothic',
        strokeWidth: 5
      },
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
      mass: 1,
      shadow: true,
      font: {
        face: 'Century Gothic',
        color: 'black',
        size: 14
      },
      color: {
        background: 'rgb(91, 152, 227)',
        border: 'grey'
      },
      shape: 'box'
    },
    layout: {
      improvedLayout: true,
      hierarchical: {
        enabled: true,
        levelSeparation: 430,
        nodeSpacing: 42,
        blockShifting: true,
        edgeMinimization: true,
        sortMethod: "directed",
        direction: "LR"
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
      "label": "Header: ",
      "hidden": "true",
      "url": "indextwo.html"
    },
    {
      "id": "locationPreset",
      "label": "Location: ",
      "hidden": "true"
    },
    {
      "id": "caseNumberPreset",
      "label": "Case Number: ",
      "hidden": "true"
    },
    {
      "id": "forensicExaminerPreset",
      "label": "Forensic Examiner: ",
      "hidden": "true"
    },
    {
      "id": "infoPreset",
      "label": "Info: ",
      "hidden": "true"
    },
    {
      "id": "requestingOfficerPreset",
      "label": "Requesting Officer: ",
      "hidden": "true"
    },
    {
      "id": "backgroundInfoPreset",
      "label": "Background Info: ",
      "hidden": "true"
    },
    {
      "id": "digitalEvidencePreset",
      "label": "Digital Evidence: ",
      "hidden": "true"
    },
    {
      "id": "forensicImagingPreset",
      "label": "Imaging: ",
      "hidden": "true"
    },
    {
      "id": "forensicExaminationPreset",
      "label": "Examination: ",
      "hidden": "true"
    },
    {
      "id": "conclusionPreset",
      "label": "Conclusion: ",
      "hidden": "true"
    },
    {
      "id": "contactPreset",
      "label": "Contact: ",
      "hidden": "true"
    },
    {
      "id": "officePreset",
      "label": "Office: ",
      "hidden": "true"
    },
    {
      "id": "unitPreset",
      "label": "Unit: ",
      "hidden": "true"
    },
    {
      "id": "officePhonePreset",
      "label": "Office Phone: ",
      "hidden": "true"
    },
    {
      "id": "cellPhonePreset",
      "label": "Cell Phone: ",
      "hidden": "true"
    },
    {
      "id": "emailPreset",
      "label": "Email: ",
      "hidden": "true"
    },
    {
      "id": "addressPreset",
      "label": "Address: ",
      "hidden": "true"
    }
  ];

  function make_json(form) {

    var formData = [{
        "id": "caseName",
        "label": form.caseName.value
      },
      {
        "id": "location",
        "label": form.location.value,
        "hidden": "true"
      },
      {
        "id": "caseNumber",
        "label": form.caseNumber.value,
        "hidden": "true"
      },
      {
        "id": "forensicExaminer",
        "label": form.forensicExaminer.value,
        "hidden": "true"
      },
      {
        "id": "requestingOfficer",
        "label": form.requestingOfficer.value,
        "hidden": "true"
      },
      {
        "id": "backgroundInfo",
        "label": form.backgroundInfo.value,
        "hidden": "true"
      },
      {
        "id": "forensicImaging",
        "label": form.forensicImaging.value,
        "hidden": "true"
      },
      {
        "id": "forensicExamination",
        "label": form.forensicExamination.value,
        "hidden": "true"
      },
      {
        "id": "conclusion",
        "label": form.conclusion.value,
        "hidden": "true"
      },
      {
        "id": "office",
        "label": form.office.value,
        "hidden": "true"
      },
      {
        "id": "unit",
        "label": form.unit.value,
        "hidden": "true"
      },
      {
        "id": "officePhone",
        "label": form.officePhone.value,
        "hidden": "true"
      },
      {
        "id": "cellPhone",
        "label": form.cellPhone.value,
        "hidden": "true"
      },
      {
        "id": "email",
        "label": form.email.value,
        "hidden": "true"
      },
      {
        "id": "address",
        "label": form.address.value,
        "hidden": "true"
      }
    ];
      nodes.clear();
      nodes.add(formData);
      nodes.add(presetData);
      network.fit();
  };
