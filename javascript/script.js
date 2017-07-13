
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
    {id: "x", from: "contactPreset", to: "forensicExaminerTwoPreset"},
    {id: "y", from: "forensicExaminerTwoPreset", to: "forensicExaminerTwo"},
    {id: "z", from: "contactPreset", to: "streetAddressPreset"},
    {id: "aa", from: "streetAddressPreset", to: "streetAddress"},
    {id: "ab", from: "contactPreset", to: "cityAddressPreset"},
    {id: "ac", from: "cityAddressPreset", to: "cityAddress"},
    {id: "ad", from: "contactPreset", to: "stateAddressPreset"},
    {id: "ae", from: "stateAddressPreset", to: "stateAddress"},
    {id: "af", from: "contactPreset", to: "zipAddressPreset"},
    {id: "ag", from: "zipAddressPreset", to: "zipAddress"},
    {id: "ah", from: "contactPreset", to: "officePhonePreset"},
    {id: "ai", from: "officePhonePreset", to: "officePhone"},
    {id: "aj", from: "contactPreset", to: "cellPhonePreset"},
    {id: "ak", from: "cellPhonePreset", to: "cellPhone"},
    {id: "al", from: "contactPreset", to: "emailPreset"},
    {id: "am", from: "emailPreset", to: "email"}


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
        shape: 'big box',
        color: {
          background:'rgb(41, 76, 223)'
        }
      },
      groupTwo: {
        shape: 'text',
        color: {
          background:'black',
        },
      },
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
      color: 'red',
      width: 2
    },
    nodes: {
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
      "id": "officePreset",
      "group": "groupTwo",
      "label": "Office: "
    },
    {
      "id": "unitPreset",
      "group": "groupTwo",
      "label": "Unit: "
    },
    {
      "id": "forensicExaminerTwoPreset",
      "group": "groupTwo",
      "label": "Forensic Examiner: "
    },
    {
      "id": "streetAddressPreset",
      "group": "groupTwo",
      "label": "Street: "
    },
    {
      "id": "cityAddressPreset",
      "group": "groupTwo",
      "label": "City: "
    },
    {
      "id": "stateAddressPreset",
      "group": "groupTwo",
      "label": "State: "
    },
    {
      "id": "zipAddressPreset",
      "group": "groupTwo",
      "label": "Zip: "
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
        "id": "office",
        "group": "groupThree",
        "label": form.office.value
      },
      {
        "id": "unit",
        "group": "groupThree",
        "label": form.unit.value
      },
      {
        "id": "forensicExaminerTwo",
        "group": "groupThree",
        "label": form.forensicExaminerTwo.value
      },
      {
        "id": "streetAddress",
        "group": "groupThree",
        "label": form.streetAddress.value
      },
      {
        "id": "cityAddress",
        "group": "groupThree",
        "label": form.cityAddress.value
      },
      {
        "id": "stateAddress",
        "group": "groupThree",
        "label": form.stateAddress.value
      },
      {
        "id": "zipAddress",
        "group": "groupThree",
        "label": form.zipAddress.value
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
      }
    ];
      nodes.clear();
      nodes.add(formData);
      nodes.add(presetData);
  }
