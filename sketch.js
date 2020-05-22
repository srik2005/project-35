var database,q1,q2,q3,ans1,submitButton,greeting;


function setup() {
  createCanvas(800,400);
 database = firebase.database();
 var title = createElement('h1'); 
 title.html('Student survey'); 
 title.position(width / 2, 20);
  q1 = createElement('h2');
   q1.html('1.Want Electronic Gadgets?') 
   q1.position(50, 100);
   ans1 = createRadio(); 
   ans1.option('yes');
    ans1.option('no'); 
    ans1.position(50, 150);
    q2 = createElement('h2');
   q2.html('2.Want More Work in Home?') 
   q2.position(400, 100);
   ans2 = createRadio(); 
   ans2.option('yes');
    ans2.option('no'); 
    ans2.position(400, 150);
    q3 = createElement('h2');
   q3.html('3.How is your remark about our school?') 
   q3.position(750, 100);
   ans3 = createRadio(); 
   ans3.option('good');
    ans3.option('bad'); 
    ans3.position(750, 150)
    
    submitButton = createButton('submit') ;
    submitButton.position(width - (width / 8),height -( height/ 8));
    submitButton.mousePressed(()=>{ 
      
      database.ref('question1').set({ 'ans' : ans1.value() })
      q1.hide();
       ans1.hide();
        submitButton.hide();
        greeting = createElement("h1")
         greeting.html( "Thank You") 
         greeting.position(displayWidth/2 - 70, displayHeight/4); });
}

function draw() {
  background(255,255,255);  
 
}