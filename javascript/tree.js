var toggle = 'false';

//HEADER
network.on("click",function(e){
if(e.nodes[0] == "headerPreset"){
  if(toggle){
    nodes.update([{id: "locationPreset", hidden: false}]);
    edges.update([{id: "a", hidden: false}]);
    nodes.update([{id: "location", hidden: false}]);
    edges.update([{id: "b", hidden: false}]);
    nodes.update([{id: "caseNumberPreset", hidden: false}]);
    edges.update([{id: "c", hidden: false}]);
    nodes.update([{id: "caseNumber", hidden: false}]);
    edges.update([{id: "d", hidden: false}]);
    nodes.update([{id: "forensicExaminerPreset", hidden: false}]);
    edges.update([{id: "e", hidden: false}]);
    nodes.update([{id: "forensicExaminer", hidden: false}]);
    edges.update([{id: "f", hidden: false}]);
  }else{
    nodes.update([{id: "locationPreset", hidden: true}]);
    edges.update([{id: "a", hidden: true}]);
    nodes.update([{id: "location", hidden: true}]);
    edges.update([{id: "b", hidden: true}]);
    nodes.update([{id: "caseNumberPreset", hidden: true}]);
    edges.update([{id: "c", hidden: true}]);
    nodes.update([{id: "caseNumber", hidden: true}]);
    edges.update([{id: "d", hidden: true}]);
    nodes.update([{id: "forensicExaminerPreset", hidden: true}]);
    edges.update([{id: "e", hidden: true}]);
    nodes.update([{id: "forensicExaminer", hidden: true}]);
    edges.update([{id: "f", hidden: true}]);
  }
  toggle = !toggle;
}
});

/*network.on("click",function(e){
if(e.nodes[0] == "locationPreset"){
  if(toggle){
    nodes.update([{id: "location", hidden: false}]);
    edges.update([{id: "b", hidden: false}]);
  }else{
    nodes.update([{id: "location", hidden: true}]);
    edges.update([{id: "b", hidden: true}]);
  }
  toggle = !toggle;
}
});*/
