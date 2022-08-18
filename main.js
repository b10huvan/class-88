var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

blocks_image_width=30;
blocks_image_height=30;

var player_object="";
var blocks_image_object="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);

});

}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    blocks_image_object=Img;
    blocks_image_object.scaleToWidth( blocks_image_width);
    blocks_image_object.scaleToHeight(blocks_image_height);
    blocks_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add( blocks_image_object);
    
    });
    
    }


    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
    left();
    console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
        }
        if(keyPressed == '39'){
            right();
            console.log("right");
            }
            if(keyPressed == '40'){
                down();
                console.log("down");
                }
    if(e.shiftKey == true && keyPressed =='80'){
    blocks_image_width= blocks_image_width + 10;
    blocks_image_height= blocks_image_height + 10;
    document.getElementById("current_width").innerHTML= blocks_image_width;
    document.getElementById("current_height").innerHTML= blocks_image_height;
    }

    if(e.shiftKey == true && keyPressed =='77'){
        blocks_image_width= blocks_image_width - 10;
        blocks_image_height= blocks_image_height - 10;
        document.getElementById("current_width").innerHTML= blocks_image_width;
        document.getElementById("current_height").innerHTML= blocks_image_height;
        }

        if(keyPressed == '87'){
            new_image('wall.jpg');
            console.log("w");
            }

        
          if(keyPressed == '71'){
            new_image('ground.png');
            console.log("g");
                        }

        
                        if(keyPressed == '76'){
                            new_image('light_green.png');
                            console.log("l");
                            }

                            
        if(keyPressed == '84'){
            new_image('trunk.jpg');
            console.log("t");
            }

            
        if(keyPressed == '82'){
            new_image('roof.jpg');
            console.log("r");
            }

            
        if(keyPressed == '89'){
            new_image('yellow_wall.png');
            console.log("y");
            }

            if(keyPressed == '67'){
                new_image('cloud.jpg');
                console.log("c");
                }

                if(keyPressed == '68'){
                    new_image('dark_green.png');
                    console.log("d");
                    }

                    if(keyPressed == '85'){
                        new_image('unique.png');
                        console.log("u");
                        }
    }


    function left()
    {
    if(player_x > 0)
    {
    player_x = player_x - blocks_image_width;
    console.log("block image width ="+blocks_image_width);
    canvas.remove(player_object);
    player_update();
    }
    }


    function right()
    {
    if(player_x < 850)
    {
    player_x = player_x + blocks_image_width;
    console.log("block image width ="+blocks_image_width);
    canvas.remove(player_object);
    player_update();
    }
    }


    function up()
    {
    if(player_y >= 0)
    {
    player_y = player_y - blocks_image_width;
    console.log("block image width ="+blocks_image_width);
    canvas.remove(player_object);
    player_update();
    }
    }


    function down()
    {
    if(player_y <= 500)
    {
    player_y = player_y + blocks_image_width;
    console.log("block image width ="+blocks_image_width);
    canvas.remove(player_object);
    player_update();
    }
    }