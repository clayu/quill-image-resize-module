import { BaseModule } from './BaseModule';

export class Resize extends BaseModule {
    onCreate = () => {
		
		if (this.img.getAttribute("data-full-width")){
			this.img.width= +this.img.getAttribute("data-full-width");
		}
		
		// if (this.img.attributes["data-full-height"]){
			// this.img.height= this.img.attributes["data-full-height"];
		// }else{
		// }
		this.img.removeAttribute("height");
		this.img.style.height= null;
		
		
		
        // track resize handles
        this.boxes = [];
        this.cropboxes = this.cropboxes || [];
        this.crop = {
			top: 	+(this.img.getAttribute("data-crop-top") 	|| 0),
			bottom:	+(this.img.getAttribute("data-crop-bottom") || 0),
			left:	+(this.img.getAttribute("data-crop-left")	|| 0),
			right:	+(this.img.getAttribute("data-crop-right") 	|| 0)
		};
		this.pan = {
			top: +(this.img.getAttribute("data-pan-top") 	|| 0),
			left: +(this.img.getAttribute("data-pan-left") 	|| 0),
		};
		
		
		this.img.style.backgroundPosition= `${(this.pan.left)* this.img.width}px ${(this.pan.top)* this.img.height}px`;
		this.img.style.backgroundRepeat= "no-repeat";
		
		
        // add 4 resize handles
        this.addBox('nwse-resize'); // top left
        this.addBox('nesw-resize'); // top right
        this.addBox('nwse-resize'); // bottom right
        this.addBox('nesw-resize'); // bottom left
		
		this.addCropBox('w-crop'); // left
		this.addCropBox('e-crop'); // right
		this.addCropBox('n-crop'); // top
		this.addCropBox('s-crop'); // bottom
		
        this.img.addEventListener('mousedown', this.handleMousedownPan, false);	

        this.positionBoxes();
		
    };

    onDestroy = () => {
        // reset drag handle cursors
        this.setCursor('');
		this.img.style.backgroundPosition= `${(-this.crop.left+this.pan.left)* this.img.width}px ${(-this.crop.top+this.pan.top)* this.img.height}px`;
		this.img.setAttribute("data-full-height",this.img.height);
		this.img.setAttribute("data-full-width",this.img.width);
		var h = this.img.height* (1- (this.crop.top+this.crop.bottom));
		var w  = this.img.width* (1- (this.crop.left+this.crop.right));
		this.img.style.backgroundSize=this.img.width+"px";
		this.img.height =h;
		this.img.width=w;
		this.img.style.width=null;
		this.img.qqq="hi";
		this.onUpdate();
		
        this.img.removeEventListener('mousedown', this.handleMousedownPan);	
    };

    positionBoxes = () => {
        const handleXOffset = `${-parseFloat(this.options.handleStyles.width) / 2}px`;
        const handleYOffset = `${-parseFloat(this.options.handleStyles.height) / 2}px`;
		
      

        // set the top and left for each drag handle
        [
            { left: handleXOffset, top: handleYOffset },        // top left
            { right: handleXOffset, top: handleYOffset },       // top right
            { right: handleXOffset, bottom: handleYOffset },    // bottom right
            { left: handleXOffset, bottom: handleYOffset },     // bottom left						
        ].forEach((pos, idx) => {
            Object.assign(this.boxes[idx].style, pos);
        });
		
		this.fixCropBoxes();
		
    }; 
	
	fixCropBoxes = () =>{		
        // const handleLeftOffset = `${-1 + this.crop.left}px`;
        // const handleRightOffset = `${-1 + this.crop.right}px`;
        // const handleTopOffset = `${-1 + this.crop.top}px`;
        // const handleBottomOffset = `${-1 + this.crop.bottom}px`;
		
        const handleLeftOffset = `${-1}px`;
        const handleRightOffset = `${-1 }px`;
        const handleTopOffset = `${-1 }px`;
        const handleBottomOffset = `${-1 }px`;
		
        const handleXMid = `${parseFloat(this.img.width*(1- (this.crop.left+this.crop.right)))/2 - parseFloat(this.options.handleStyles.width+3) }px`;
        const handleYMid = `${parseFloat(this.img.height*(1-(this.crop.top + this.crop.bottom)))/2 - parseFloat(this.options.handleStyles.height+3) }px`;
		
		const doubleHeight = `${parseFloat(this.options.handleStyles.height)*2}px`;
		const doubleWidth = `${parseFloat(this.options.handleStyles.width)*2}px`;
		const halfHeight = `${parseFloat(this.options.handleStyles.height)*2/3}px`;
		const halfWidth = `${parseFloat(this.options.handleStyles.width)*2/3}px`;

        // set the top and left for each drag handle
        [			
            { left: handleLeftOffset, top: handleYMid, height:doubleHeight, width:halfWidth },     // left
			{ right: handleRightOffset, top: handleYMid, height:doubleHeight,width:halfWidth },    // right
			{ left: handleXMid, top: handleTopOffset,width:doubleWidth, height:halfHeight },     // top
			{ left: handleXMid, bottom: handleBottomOffset,width:doubleWidth, height:halfHeight },  // bottom
			
        ].forEach((pos, idx) => {
            Object.assign(this.cropboxes[idx].style, pos);
        });
	};

    addBox = (cursor) => {
        // create div element for resize handle
        const box = document.createElement('div');

        // Star with the specified styles
        Object.assign(box.style, this.options.handleStyles);
        box.style.cursor = cursor;

        // Set the width/height to use 'px'
        box.style.width = `${this.options.handleStyles.width}px`;
        box.style.height = `${this.options.handleStyles.height}px`;

        // listen for mousedown on each box
        box.addEventListener('mousedown', this.handleMousedown, false);
        // add drag handle to document
        this.overlay.appendChild(box);
        // keep track of drag handle
        this.boxes.push(box);
    };
    addCropBox = (cursor) => {
        // create div element for resize handle
        const box = document.createElement('div');

        // Star with the specified styles
        Object.assign(box.style, this.options.handleStyles);
        box.style.cursor = cursor;

        // Set the width/height to use 'px'
        box.style.width = `${this.options.handleStyles.width}px`;
        box.style.height = `${this.options.handleStyles.height}px`;

        // listen for mousedown on each box
        box.addEventListener('mousedown', this.handleMousedownCrop);
        // add drag handle to document
        this.cropOverlay.appendChild(box);
        // keep track of drag handle
        this.cropboxes.push(box);
    };


//////RESIZE
    handleMousedown = (evt) => {
		
        // note which box
        this.dragBox = evt.target;
        // note starting mousedown position
        this.dragStartX = evt.clientX;
        // store the width before the drag
        this.preDragWidth = this.img.width || this.img.naturalWidth;
        // set the proper cursor everywhere
        this.setCursor(this.dragBox.style.cursor);
        // listen for movement and mouseup
        document.addEventListener('mousemove', this.handleDrag, false);
        document.addEventListener('mouseup', this.handleMouseup, false);
    };

    handleMouseup = () => {
        // reset cursor everywhere
        this.setCursor('');
        // stop listening for movement and mouseup
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.handleMouseup);
    };

    handleDrag = (evt) => {
        if (!this.img) {
            // image not set yet
            return;
        }
        // update image size
        const deltaX = evt.clientX - this.dragStartX;
        if (this.dragBox === this.boxes[0] || this.dragBox === this.boxes[3]) {
            // left-side resize handler; dragging right shrinks image
            //this.img.width = Math.round(this.preDragWidth - deltaX);
			this.img.style.width = Math.round(this.preDragWidth - deltaX)+"px";			
			this.img.style.backgroundSize=Math.round(this.preDragWidth - deltaX)+"px";
        } else {
            // right-side resize handler; dragging right enlarges image
           // this.img.width = Math.round(this.preDragWidth + deltaX);
            this.img.style.width = Math.round(this.preDragWidth + deltaX)+"px";
			this.img.style.backgroundSize= Math.round(this.preDragWidth + deltaX)+"px";
        }
		this.fixCropBoxes();
        this.requestUpdate(); 
    };
	
//////CROP
    handleMousedownCrop = (evt) => {
		
		this.img.style.pointerEvents="none";
		
		console.log("crop - mousedown");
        // note which box
        this.dragBox = evt.target;
        // note starting mousedown position
        this.dragStartX = evt.clientX;
        this.dragStartY = evt.clientY;
        // store the width before the drag
        this.preDragLeft = (this.crop.left || 0)*this.img.width;
        this.preDragRight = (this.crop.right || 0)*this.img.width;
        this.preDragTop = (this.crop.top || 0)*this.img.height;
        this.preDragBottom = (this.crop.bottom || 0)*this.img.height;
        // set the proper cursor everywhere
        this.setCursor(this.dragBox.style.cursor);
        // listen for movement and mouseup
        document.addEventListener('mousemove', this.handleDragCrop, false);
        document.addEventListener('mouseup', this.handleMouseupCrop, false);
    };
	
	handleMouseupCrop = () => {
		console.log("crop - mouseup");
		this.img.style.pointerEvents=null;
        // reset cursor everywhere
        this.setCursor('');
        // stop listening for movement and mouseup
        document.removeEventListener('mousemove', this.handleDragCrop);
        document.removeEventListener('mouseup', this.handleMouseupCrop);
		
		this.img.style.cursor = "move";
		
		
    };

    handleDragCrop = (evt) => {
        if (!this.img) {
            // image not set yet
            return;
        }
        // update image size
        const deltaX = evt.clientX - this.dragStartX;
        const deltaY = evt.clientY - this.dragStartY;
		
        if (this.dragBox === this.cropboxes[0]){
			//left
			this.crop.left = Math.min(Math.max((this.preDragLeft + deltaX)/this.img.width,0), 1 -this.crop.right );//this.img.width - this.crop.right);
			this.img.setAttribute("data-crop-left",this.crop.left);
			
		}else if(this.dragBox === this.cropboxes[1]) {
			//right
			this.crop.right = Math.min(Math.max((this.preDragRight - deltaX)/this.img.width,0),1 -this.crop.left);
			this.img.setAttribute("data-crop-right",this.crop.right);
		}else if(this.dragBox === this.cropboxes[2]) {
			//top	
			//this.crop.top = Math.max(Math.round( deltaY),0);
			this.crop.top = Math.min(Math.max((this.preDragTop + deltaY)/this.img.height,0), 1 - this.crop.bottom);
			this.img.setAttribute("data-crop-top",this.crop.top);
		}else if(this.dragBox === this.cropboxes[3]) {
			//bottom
			console.info((this.preDragBottom - deltaY)/this.img.height);
			//this.crop.bottom = Math.max(Math.round(-deltaY),0);			
			this.crop.bottom = Math.min(Math.max((this.preDragBottom - deltaY)/this.img.height,0), 1 - this.crop.top);
			this.img.setAttribute("data-crop-bottom",this.crop.bottom);
        } else {
			console.error("unknown crop box");
        }
		this.fixCropBoxes();
        this.requestUpdate();
    };
	
////////////// PAN

  handleMousedownPan = (evt) => {
		evt.preventDefault();
		this.img.setAttribute("draggable",false);
		
        // note which box
        this.dragBox = evt.target;
        // note starting mousedown position
        this.dragStartX = evt.clientX;
        this.dragStartY = evt.clientY;
        // store the width before the drag
        this.preDragX = parseFloat(this.img.style.backgroundPositionX || 0);
        this.preDragY = parseFloat(this.img.style.backgroundPositionY || 0);
        // set the proper cursor everywhere
        this.setCursor(this.dragBox.style.cursor);
        // listen for movement and mouseup
        document.addEventListener('mousemove', this.handleDragPan, false);
        document.addEventListener('mouseup', this.handleMouseupPan, false);
		//this.img.style.pointerEvents="none";
		
		
		
    };

    handleMouseupPan = (e) => {
		e.stopImmediatePropagation();
		//this.img.style.pointerEvents="all";
        // reset cursor everywhere
        this.setCursor('');
        // stop listening for movement and mouseup
        document.removeEventListener('mousemove', this.handleDragPan);
        document.removeEventListener('mouseup', this.handleMouseupPan);  
    };

    handleDragPan = (evt) => {
        if (!this.img) {
            // image not set yet
            return;
        }
        // update image size
        const deltaX = evt.clientX - this.dragStartX;
        const deltaY = evt.clientY - this.dragStartY;
		
		const left = Math.max(Math.min((deltaX + this.preDragX)/this.img.width,this.crop.left),-this.crop.right);
		const top=   Math.max(Math.min((deltaY + this.preDragY)/this.img.height,this.crop.top), -this.crop.bottom );
		
		//left = left, );
		
		this.img.style.backgroundPositionX = (left*this.img.width)+"px";
		this.img.style.backgroundPositionY = (top*this.img.height)+"px";
		
		this.img.setAttribute("data-pan-left",left);
		this.img.setAttribute("data-pan-top",top);
		
		this.pan.left = left;
		this.pan.top = top;
		
        this.requestUpdate(); 
    };
	
////////////////////////

	// initPan = (evt)=>{
		// // this.img.style.webkitUserSelect="none";
		// // this.img.style.khtmlUserSelect="none";
		// // this.img.style.mozUserSelect="none";
		// // this.img.style.oUserSelect="none";
		// // this.img.style.userSelect="none";
		
	// };


	
    setCursor = (value) => {
        [
            document.body,
            this.img,
        ].forEach((el) => {
            el.style.cursor = value;   // eslint-disable-line no-param-reassign
        });
    };
}
