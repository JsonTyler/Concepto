
  // create an array with nodes
  var nodes = new vis.DataSet([

  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {id: "a", from: "headerPreset", to: "locationPreset"},
    {id: "b", from: "locationPreset", to: "location"},
    {id: "c", from: "headerPreset", to: "caseNumberPreset"},
    {id: "d", from: "caseNumberPreset", to: "caseNumber"},
    {id: "e", from: "headerPreset", to: "forensicExaminerPreset"},
    {id: "f", from: "forensicExaminerPreset", to: "forensicExaminer"},
    {id: "g", from: "headerPreset", to: "infoPreset"},
    {id: "h", from: "infoPreset", to: "requestingOfficerPreset"},
    {id: "i", from: "requestingOfficerPreset", to: "requestingOfficer"},
    {id: "j", from: "infoPreset", to: "backgroundInfoPreset"},
    {id: "k", from: "backgroundInfoPreset", to: "backgroundInfo"},
    {id: "l", from: "infoPreset", to: "digitalEvidencePreset"},
    {id: "m", from: "digitalEvidencePreset", to: "forensicImagingPreset"},
    {id: "n", from: "forensicImagingPreset", to: "forensicImaging"},
    {id: "o", from: "digitalEvidencePreset", to: "forensicExaminationPreset"},
    {id: "p", from: "forensicExaminationPreset", to: "forensicExamination"},
    {id: "q", from: "digitalEvidencePreset", to: "conclusionPreset"},
    {id: "r", from: "conclusionPreset", to: "conclusion"},
    {id: "s", from: "conclusionPreset", to: "contactPreset"},
    {id: "t", from: "contactPreset", to: "officePreset"},
    {id: "u", from: "officePreset", to: "office"},
    {id: "v", from: "contactPreset", to: "unitPreset"},
    {id: "w", from: "unitPreset", to: "unit"},
    {id: "x", from: "contactPreset", to: "forensicExaminerTwoPreset"},
    {id: "y", from: "forensicExaminerTwoPreset", to: "forensicExaminerTwo"},
    {id: "z", from: "contactPreset", to: "streetAddressPreset"},
    {id: "aa", from: "streetAddressPreset", to: "streetAddress"},
    {id: "ab", from: "contactPreset", to: "citAddressPreset"},
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
    layout: {
        hierarchical: {
            levelSeparation: 120,
            direction: "LR",
            sortMethod: "directed"
        }
    },
    edges: {
        smooth: {
            type: "cubicBezier",
            forceDirection: 'vertical',
            roundness: 0.25
        },
    },
    physics: {
        hierarchicalRepulsion: {
            springLength: 100,
            nodeDistance: 70
        },
        timestep: 0.40,
        stabilization: {
            enabled: true,
            iterations: 200,
            updateInterval: 30,
            fit: false
        }
    }
};
  var network = new vis.Network(container, data, options);

  // create presetNodes
  var presetData = [
    {
      "id": "headerPreset",
      "label": "Header: "
    },
    {
      "id": "locationPreset",
      "label": "Location: "
    },
    {
      "id": "caseNumberPreset",
      "label": "Case Number: "
    },
    {
      "id": "forensicExaminerPreset",
      "label": "Forensic Examiner: "
    },
    {
      "id": "infoPreset",
      "label": "Info: "
    },
    {
      "id": "requestingOfficerPreset",
      "label": "Requesting Officer: "
    },
    {
      "id": "backgroundInfoPreset",
      "label": "Background Info: "
    },
    {
      "id": "digitalEvidencePreset",
      "label": "Digital Evidence Summary: "
    },
    {
      "id": "forensicImagingPreset",
      "label": "Forensic Imaging: "
    },
    {
      "id": "forensicExaminationPreset",
      "label": "Forensic Examination: "
    },
    {
      "id": "conclusionPreset",
      "label": "Conclusion: "
    },
    {
      "id": "contactPreset",
      "label": "Contact: "
    },
    {
      "id": "officePreset",
      "label": "Office: "
    },
    {
      "id": "unitPreset",
      "label": "Unit: "
    },
    {
      "id": "forensicExaminerTwoPreset",
      "label": "Forensic Examiner: "
    },
    {
      "id": "streetAddressPreset",
      "label": "Street: "
    },
    {
      "id": "cityAddressPreset",
      "label": "City: "
    },
    {
      "id": "stateAddressPreset",
      "label": "State: "
    },
    {
      "id": "zipAddressPreset",
      "label": "Zip: "
    },
    {
      "id": "officePhonePreset",
      "label": "Office Phone: "
    },
    {
      "id": "cellPhonePreset",
      "label": "Cell Phone: "
    },
    {
      "id": "emailPreset",
      "label": "Email: "
    }
  ];

  function make_json(form) {

    var formData = [{
        "id": "location",
        "label": form.location.value
      },
      {
        "id": "caseNumber",
        "label": form.caseNumber.value
      },
      {
        "id": "forensicExaminer",
        "label": form.forensicExaminer.value
      },
      {
        "id": "requestingOfficer",
        "label": form.requestingOfficer.value
      },
      {
        "id": "backgroundInfo",
        "label": form.backgroundInfo.value
      },
      {
        "id": "forensicImaging",
        "label": form.forensicImaging.value
      },
      {
        "id": "forensicExamination",
        "label": form.forensicExamination.value
      },
      {
        "id": "conclusion",
        "label": form.conclusion.value
      },
      {
        "id": "office",
        "label": form.office.value
      },
      {
        "id": "unit",
        "label": form.unit.value
      },
      {
        "id": "forensicExaminerTwo",
        "label": form.forensicExaminerTwo.value
      },
      {
        "id": "streetAddress",
        "label": form.streetAddress.value
      },
      {
        "id": "cityAddress",
        "label": form.cityAddress.value
      },
      {
        "id": "stateAddress",
        "label": form.stateAddress.value
      },
      {
        "id": "zipAddress",
        "label": form.zipAddress.value
      },
      {
        "id": "officePhone",
        "label": form.officePhone.value
      },
      {
        "id": "cellPhone",
        "label": form.cellPhone.value
      },
      {
        "id": "email",
        "label": form.email.value
      }
    ];

      nodes.add(formData);

  }
nodes.add(presetData);
