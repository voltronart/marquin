class Game {
  constructor() {}

  start() {
      form = new Form();
      form.display();
      player = new Player();
      player.getcount()
    
      voltron = createSprite(width/2-50,height-100)
      voltron.addImage('kart1',voltronImg)
      voltron.scale = 0.07

     macquenn= createSprite(width/2+100,height-100)
    
      macquenn.addImage('kart2',macquennImg)
      macquenn.scale = 0.07
 
      cars = [voltron,macquenn]
     

  
    }
    PLAY(){
     form.hide()
     Player.readPlayer()
     if(allPlayers!==undefined){
        image(road,0,-height*5,width,height*6)
        var index = 0
        for(var Plr in allPlayers){
          index +=1
          var x = allPlayers[Plr].positionX
          var y = height - allPlayers[Plr].positionY        
          
          cars[index-1].position.x = x
          cars[index-1].position.y = y


          if(index===player.index){
            fill('black')
            textAlign('center')
            text(player.name,x,y-50)
            camera.position.y = cars[index-1].position.y
            


          }
                   
        }
          

        this.control()
        
        
        
        drawSprites()
     }
     
    
    
    }

  getState(){
    var stateref = database.ref('gameState')
     stateref.on('value',(data)=>{
      gameState = data.val()
    })
   }
   
  update(value){
    database.ref('/').update({
      gameState:value
    })
  }

  control(){
    if(keyIsDown(87)){
      player.positionY+=10
      player.update()    
    
    }
  }



}
