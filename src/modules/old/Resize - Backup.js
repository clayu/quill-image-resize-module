/*import { BaseModule } from './BaseModule';

export class Resize extends BaseModule {
    onCreate = () => {
        // track resize handles
        this.boxes = [];
        this.cropboxes = this.cropboxes || [];
        this.crop = {
			top: 	this.img.attributes["data-crop-top"] 	|| 0,
			bottom:	this.img.attributes["data-crop-bottom"] || 0,
			left:	this.img.attributes["data-crop-left"] 	|| 0,
			right:	this.img.attributes["data-crop-right"] 	|| 0
		};
		
        // add 4 resize handles
        this.addBox('nwse-resize'); // top left
        this.addBox('nesw-resize'); // top right
        this.addBox('nwse-resize'); // bottom right
        this.addBox('nesw-resize'); // bottom left
		
		this.addCropBox('w-crop'); // left
		this.addCropBox('e-crop'); // right
		this.addCropBox('n-crop'); // top
		this.addCropBox('s-crop'); // bottom

        this.positionBoxes();
    };

    onDestroy = () => {
        // reset drag handle cursors
        this.setCursor('');
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
        const handleLeftOffset = `${-1 + this.crop.left}px`;
        const handleRightOffset = `${-1 + this.crop.right}px`;
        const handleTopOffset = `${-1 + this.crop.top}px`;
        const handleBottomOffset = `${-1 + this.crop.bottom}px`;
		
        const handleXMid = `${parseFloat(this.img.width)/2 - parseFloat(this.options.handleStyles.width+2) }px`;
        const handleYMid = `${parseFloat(this.img.height)/2 - parseFloat(this.options.handleStyles.height+2) }px`;
		
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
        this.overlay.appendChild(box);
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
        } else {
            // right-side resize handler; dragging right enlarges image
           // this.img.width = Math.round(this.preDragWidth + deltaX);
            this.img.style.width = Math.round(this.preDragWidth + deltaX)+"px";
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
        this.preDragWidth = this.img.width || this.img.naturalWidth;
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
    };

    handleDragCrop = (evt) => {
        if (!this.img) {
            // image not set yet
            return;
        }
        // update image size
        const deltaX = evt.clientX - this.dragStartX;
        const deltaY = evt.clientY - this.dragStartY;
		debugger;
        if (this.dragBox === this.cropboxes[0]){
			//left
			this.crop.left = Math.round(deltaX);
			this.img.attributes["data-crop-left"] =this.crop.left;
			
		}else if(this.dragBox === this.cropboxes[1]) {
			//right
			this.crop.right = Math.round(-deltaX);
			this.img.attributes["data-crop-right"] =this.crop.right;
		}else if(this.dragBox === this.cropboxes[2]) {
			//top	
			this.crop.top = Math.round( deltaY);
			this.img.attributes["data-crop-top"] =this.crop.top;
		}else if(this.dragBox === this.cropboxes[3]) {
			//bottom
			this.crop.bottom = Math.round(-deltaY);
			this.img.attributes["data-crop-bottom"] =this.crop.bottom;
        } else {
			console.error("unknown crop box");
        }
		this.fixCropBoxes();
        this.requestUpdate();
    };
	
//////////////
	
    setCursor = (value) => {
        [
            document.body,
            this.img,
        ].forEach((el) => {
            el.style.cursor = value;   // eslint-disable-line no-param-reassign
        });
    };
}*/
