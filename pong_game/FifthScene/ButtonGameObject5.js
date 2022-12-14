import Rectangle from "../../engine/Rectangle.js";
import RectangleDraw from "../../engine/RectangleDraw.js";
import FifthSceneButtonUpdate from "./FifthSceneButtonUpdate.js";
import GameObject from "../../engine/GameObject.js";
import Text from "../../engine/Text.js";
import TextDraw from "../../engine/TextDraw.js";

class ButtonGameObject5 extends GameObject{
    constructor(x,y,w,h,a,b,color){
        super(parent);
        this.components.push(new Text( this,a,b, "Next", "45px sans"));
        this.components.push(new RectangleDraw(this,color));
        this.components.push(new TextDraw(this,"black","white"));
        this.components.push(new Rectangle(this,x,y,w,h));
        
        this.components.push(new FifthSceneButtonUpdate(this));
        

    }
}
export default ButtonGameObject5;