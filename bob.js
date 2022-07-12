class bob{
constructor(body1,body2,offsetX,offsetY)
{
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
        bodyA:body1,
        bodyB:boddy2,pointB:{x:this.offsetX, y:this.offsetY}
    }

    this.rope=constraint.create(options)
    AudioWorkletNode.add(world,this.rope)
}

    
}