
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

  // create an array with edges
  var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3, to: 3}
  ]);

  // create a network
  var container = document.getElementById('graph');
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  var network = new vis.Network(container, data, options);


  function make_json(form) {

    var storageObj = [{
        "id": 1,
        "label": form.location.value
      },
      {
        "id": 2,
        "label": form.caseNumber.value
      },
      {
        "id": 3,
        "label": form.forensicExaminer.value
      },
      {
        "id": 4,
        "label": form.requestingOfficer.value
      },
      {
        "id": 5,
        "label": form.backgroundInfo.value
      },
      {
        "id": 6,
        "label": form.forensicImaging.value
      },
      {
        "id": 7,
        "label": form.forensicExamination.value
      },
      {
        "id": 8,
        "label": form.conclusion.value
      },
      {
        "id": 9,
        "label": form.office.value
      },
      {
        "id": 10,
        "label": form.unit.value
      },
      {
        "id": 11,
        "label": form.forensicExaminerTwo.value
      },
      {
        "id": 12,
        "label": form.streetAddress.value
      },
      {
        "id": 13,
        "label": form.cityAddress.value
      },
      {
        "id": 14,
        "label": form.stateAddress.value
      },
      {
        "id": 15,
        "label": form.zipAddress.value
      },
      {
        "id": 16,
        "label": form.officePhone.value
      },
      {
        "id": 17,
        "label": form.cellPhone.value
      },
      {
        "id": 18,
        "label": form.email.value
      }
    ];
    console.log(storageObj);
  }
