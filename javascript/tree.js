var toggle = 'false';

network.on("click",function(e){
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
});

network.on("click",function(e){
if(e.nodes[0] == "caseNumberPreset"){
if(toggle){
  nodes.update([{id: "caseNumber", hidden: false}]);
  edges.update([{id: "d", hidden: false}]);
}else{
  nodes.update([{id: "caseNumber", hidden: true}]);
  edges.update([{id: "d", hidden: true}]);
}
toggle = !toggle;
}
});
