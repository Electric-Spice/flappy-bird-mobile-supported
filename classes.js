class Sprite{
    constructor(x, y, image){
        this.x = x
        this.y = y
        this.image = new Image()
        this.image.src = image
    }
    stamp(){
        ctx.fillRect(this.x-(this.image.width/2), this.y-(this.image.height/2), this.image.width, this.image.height)
        // ctx.drawImage(this.image, this.x-(this.image.width/2), this.y-(this.image.height/2))
    }
}