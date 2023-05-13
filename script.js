data = 
[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]
window.onload = function(){
  for(let i=0;i<data.length;i++){
    let heading = document.querySelector('#r'+(i+1).toString());
    heading.querySelector('.topic').innerHTML=data[i].category;
    heading.querySelector('.marks').innerHTML=data[i].score+' ';
  }
  
}
