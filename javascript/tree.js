//Collapsible Node Function Script

var toggle = 'false';

//CASE NAME node
network.on("click",function(e){
if(e.nodes[0] == "caseName"){
  if(toggle){
    nodes.update([{id: "headerPreset", hidden: false}]);
    edges.update([{id: "00", hidden: false}]);
    nodes.update([{id: "infoPreset", hidden: false}]);
    edges.update([{id: "01", hidden: false}]);
    nodes.update([{id: "digitalEvidencePreset", hidden: false}]);
    edges.update([{id: "02", hidden: false}]);
    nodes.update([{id: "conclusionPreset", hidden: false}]);
    edges.update([{id: "03", hidden: false}]);
    nodes.update([{id: "contactPreset", hidden: false}]);
    edges.update([{id: "04", hidden: false}]);
    nodes.update([{id: "addressPreset", hidden: false}]);
    edges.update([{id: "05", hidden: false}]);
  }else{
    nodes.update([{id: "headerPreset", hidden: true}]);
    edges.update([{id: "00", hidden: true}]);
    nodes.update([{id: "infoPreset", hidden: true}]);
    edges.update([{id: "01", hidden: true}]);
    nodes.update([{id: "digitalEvidencePreset", hidden: true}]);
    edges.update([{id: "02", hidden: true}]);
    nodes.update([{id: "conclusionPreset", hidden: true}]);
    edges.update([{id: "03", hidden: true}]);
    nodes.update([{id: "contactPreset", hidden: true}]);
    edges.update([{id: "04", hidden: true}]);
    nodes.update([{id: "addressPreset", hidden: true}]);
    edges.update([{id: "05", hidden: true}]);
  }
  toggle = !toggle;
}
});


//HEADER node
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


//INFO node
network.on("click",function(e){
if(e.nodes[0] == "infoPreset"){
  if(toggle){
    nodes.update([{id: "requestingOfficerPreset", hidden: false}]);
    edges.update([{id: "h", hidden: false}]);
    nodes.update([{id: "requestingOfficer", hidden: false}]);
    edges.update([{id: "i", hidden: false}]);
    nodes.update([{id: "backgroundInfoPreset", hidden: false}]);
    edges.update([{id: "j", hidden: false}]);
    nodes.update([{id: "backgroundInfo", hidden: false}]);
    edges.update([{id: "k", hidden: false}]);
  }else{
    nodes.update([{id: "requestingOfficerPreset", hidden: true}]);
    edges.update([{id: "h", hidden: true}]);
    nodes.update([{id: "requestingOfficer", hidden: true}]);
    edges.update([{id: "i", hidden: true}]);
    nodes.update([{id: "backgroundInfoPreset", hidden: true}]);
    edges.update([{id: "j", hidden: true}]);
    nodes.update([{id: "backgroundInfo", hidden: true}]);
    edges.update([{id: "k", hidden: true}]);
  }
  toggle = !toggle;
}
});


//DIGITAL EVIDENCE SUMMARY node
network.on("click",function(e){
if(e.nodes[0] == "digitalEvidencePreset"){
  if(toggle){
    nodes.update([{id: "forensicImagingPreset", hidden: false}]);
    edges.update([{id: "m", hidden: false}]);
    nodes.update([{id: "forensicImaging", hidden: false}]);
    edges.update([{id: "n", hidden: false}]);
    nodes.update([{id: "forensicExaminationPreset", hidden: false}]);
    edges.update([{id: "o", hidden: false}]);
    nodes.update([{id: "forensicExamination", hidden: false}]);
    edges.update([{id: "p", hidden: false}]);
  }else{
    nodes.update([{id: "forensicImagingPreset", hidden: true}]);
    edges.update([{id: "m", hidden: true}]);
    nodes.update([{id: "forensicImaging", hidden: true}]);
    edges.update([{id: "n", hidden: true}]);
    nodes.update([{id: "forensicExaminationPreset", hidden: true}]);
    edges.update([{id: "o", hidden: true}]);
    nodes.update([{id: "forensicExamination", hidden: true}]);
    edges.update([{id: "p", hidden: true}]);
  }
  toggle = !toggle;
}
});


//CONCLUSION node
network.on("click",function(e){
if(e.nodes[0] == "conclusionPreset"){
  if(toggle){
    nodes.update([{id: "conclusion", hidden: false}]);
    edges.update([{id: "q", hidden: false}]);
  }else{
    nodes.update([{id: "conclusion", hidden: true}]);
    edges.update([{id: "q", hidden: true}]);
  }
  toggle = !toggle;
}
});


//CONTACT node
network.on("click",function(e){
if(e.nodes[0] == "contactPreset"){
  if(toggle){
    nodes.update([{id: "officePreset", hidden: false}]);
    edges.update([{id: "r", hidden: false}]);
    nodes.update([{id: "office", hidden: false}]);
    edges.update([{id: "s", hidden: false}]);
    nodes.update([{id: "unitPreset", hidden: false}]);
    edges.update([{id: "t", hidden: false}]);
    nodes.update([{id: "unit", hidden: false}]);
    edges.update([{id: "u", hidden: false}]);
    nodes.update([{id: "officePhonePreset", hidden: false}]);
    edges.update([{id: "v", hidden: false}]);
    nodes.update([{id: "officePhone", hidden: false}]);
    edges.update([{id: "w", hidden: false}]);
    nodes.update([{id: "cellPhonePreset", hidden: false}]);
    edges.update([{id: "x", hidden: false}]);
    nodes.update([{id: "cellPhone", hidden: false}]);
    edges.update([{id: "y", hidden: false}]);
    nodes.update([{id: "emailPreset", hidden: false}]);
    edges.update([{id: "z", hidden: false}]);
    nodes.update([{id: "email", hidden: false}]);
    edges.update([{id: "aa", hidden: false}]);
  }else{
    nodes.update([{id: "officePreset", hidden: true}]);
    edges.update([{id: "r", hidden: true}]);
    nodes.update([{id: "office", hidden: true}]);
    edges.update([{id: "s", hidden: true}]);
    nodes.update([{id: "unitPreset", hidden: true}]);
    edges.update([{id: "t", hidden: true}]);
    nodes.update([{id: "unit", hidden: true}]);
    edges.update([{id: "u", hidden: true}]);
    nodes.update([{id: "officePhonePreset", hidden: true}]);
    edges.update([{id: "v", hidden: true}]);
    nodes.update([{id: "officePhone", hidden: true}]);
    edges.update([{id: "w", hidden: true}]);
    nodes.update([{id: "cellPhonePreset", hidden: true}]);
    edges.update([{id: "x", hidden: true}]);
    nodes.update([{id: "cellPhone", hidden: true}]);
    edges.update([{id: "y", hidden: true}]);
    nodes.update([{id: "emailPreset", hidden: true}]);
    edges.update([{id: "z", hidden: true}]);
    nodes.update([{id: "email", hidden: true}]);
    edges.update([{id: "aa", hidden: true}]);
  }
  toggle = !toggle;
}
});



//ADDRESS node
network.on("click",function(e){
if(e.nodes[0] == "addressPreset"){
  if(toggle){
    nodes.update([{id: "address", hidden: false}]);
    edges.update([{id: "ab", hidden: false}]);
  }else{
    nodes.update([{id: "address", hidden: true}]);
    edges.update([{id: "ab", hidden: true}]);
  }
  toggle = !toggle;
}
});
