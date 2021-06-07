var quotes=[
  "Quote 1-Today a reader, tomorrow a leader. – Margaret Fuller",
  "Quote 2-A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.” – Charles Baudelaire",
  "Quote 3-I think books are like people, in the sense that they’ll turn up in your life when you most need them. – Emma Thompson",
  "Quote 4-Books are a uniquely portable magic.– Stephen King",
  "Quote 5-Books are mirrors: You only see in them what you already have inside you. – Carlos Ruiz Zafón",
  "Quote 6-If you don’t like to read, you haven’t found the right book. – J.K. Rowling" 
];

var i=0
function quotesslide(){
   if (i==6)
     {
       i=0
     }
  document.getElementById("quotedisplaylabel").innerHTML=quotes[i];
  i++;
}