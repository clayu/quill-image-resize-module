import defaultsDeep from 'lodash/defaultsDeep';
import DefaultOptions from './DefaultOptions';
import { DisplaySize } from './modules/DisplaySize';
import { Toolbar } from './modules/Toolbar';
import { Resize } from './modules/Resize';
import Image2 from './modules/ResizableImage';

const knownModules = { DisplaySize, Toolbar, Resize };


/**
 * Custom module for quilljs to allow user to resize <img> elements
 * (Works on Chrome, Edge, Safari and replaces Firefox's native resize behavior)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
export default class ImageResize {

    constructor(quill, options = {}) {
        // save the quill reference and options
        this.quill = quill;

        // Apply the options to our defaults, and stash them for later
        // defaultsDeep doesn't do arrays as you'd expect, so we'll need to apply the classes array from options separately
        let moduleClasses = false;
        if (options.modules) {
            moduleClasses = options.modules.slice();
        }

        // Apply options to default options
        this.options = defaultsDeep({}, options, DefaultOptions);

        // (see above about moduleClasses)
        if (moduleClasses !== false) {
            this.options.modules = moduleClasses;
        }

        // disable native image resizing on firefox
        document.execCommand('enableObjectResizing', false, 'false');

        // respond to clicks inside the editor
        this.quill.root.addEventListener('click', this.handleClick, false);

        this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || 'relative';

        // setup modules
        this.moduleClasses = this.options.modules;

        this.modules = [];
		
		this.quill.on('editor-change', function(a,b,c) {
			//debugger;
		});
    }

    initializeModules = () => {
        this.removeModules();

        this.modules = this.moduleClasses.map(
            ModuleClass => new (knownModules[ModuleClass] || ModuleClass)(this),
        );

        this.modules.forEach(
            (module) => {
                module.onCreate();
            },
        );

        this.onUpdate();
    };

    onUpdate = () => {
        this.repositionElements();
        this.modules.forEach(
            (module) => {
                module.onUpdate();
            },
        );
    };

    removeModules = () => {
        this.modules.forEach(
            (module) => {
                module.onDestroy();
            },
        );

        this.modules = [];
    };

    handleClick = (evt) => {
        if (evt.target && evt.target.tagName && evt.target.tagName.toUpperCase() === 'IMG') {
            if (this.img === evt.target) {
                // we are already focused on this image
                return;
            }
            if (this.img) {
                // we were just focused on another image
                this.hide();
            }
            // clicked on an image inside the editor
            this.show(evt.target);
        } else if (this.img) {
            // clicked on a non image
            this.hide();
        }
    };

    show = (img) => {
        // keep track of this img element
        this.img = img;

        this.showOverlay();

        this.initializeModules();
    };

    showOverlay = () => {
        if (this.overlay) {
            this.hideOverlay();
        }

        this.quill.setSelection(null);

        // prevent spurious text selection
        this.setUserSelect('none');

        // listen for the image being deleted or moved
        document.addEventListener('keyup', this.checkImage, true);
        this.quill.root.addEventListener('input', this.checkImage, true);

        // Create and add the overlay
        this.overlay = document.createElement('div');
        Object.assign(this.overlay.style, this.options.overlayStyles);
        this.quill.root.parentNode.appendChild(this.overlay);
				
        // Create and add the overlay
        this.cropOverlay = document.createElement('div');
        Object.assign(this.cropOverlay.style, this.options.cropOverlayStyles);
        this.quill.root.parentNode.appendChild(this.cropOverlay);


        this.repositionElements();
    };

    hideOverlay = () => {
        if (!this.overlay) {
            return;
        }

        // Remove the overlay
        this.quill.root.parentNode.removeChild(this.overlay);
        this.quill.root.parentNode.removeChild(this.cropOverlay);
        this.overlay = undefined;
        this.cropOverlay = undefined;

        // stop listening for image deletion or movement
        document.removeEventListener('keyup', this.checkImage);
        this.quill.root.removeEventListener('input', this.checkImage);

		this.img.style.cursor = "default";
        // reset user-select
        this.setUserSelect('');
    };

    repositionElements = () => {
        if (!this.overlay || !this.img /*|| !this.crop || !this.cropOverlay*/) {
            return;
        }

        // position the overlay over the image
        const parent = this.quill.root.parentNode;
        const imgRect = this.img.getBoundingClientRect();
        const containerRect = parent.getBoundingClientRect();		
        const cropRect = {
			top: 	+(this.img.getAttribute("data-crop-top") 	|| 0),
			bottom:	+(this.img.getAttribute("data-crop-bottom") || 0),
			left:	+(this.img.getAttribute("data-crop-left") 	|| 0),
			right:	+(this.img.getAttribute("data-crop-right") 	|| 0)
		};

        Object.assign(this.overlay.style, {
            left: `${imgRect.left - containerRect.left - 1 + parent.scrollLeft}px`,
            top: `${imgRect.top - containerRect.top + parent.scrollTop}px`,
            width: `${imgRect.width}px`,
            height: `${imgRect.height}px`,
        });
		
        Object.assign(this.cropOverlay.style, {
			borderLeftWidth:`${imgRect.width*cropRect.left}px`,
			borderRightWidth:`${imgRect.width*cropRect.right}px`,
			//borderRightWidth:`${cropRect.right }px`,
			borderTopWidth:`${imgRect.height*cropRect.top }px`,
			borderBottomWidth:`${imgRect.height*cropRect.bottom }px`,
            left: `${imgRect.left - containerRect.left - 1 + parent.scrollLeft }px`,
            top: `${imgRect.top - containerRect.top + parent.scrollTop}px`,
            width: `${imgRect.width  }px`,
            height: `${imgRect.height}px`,
        });
		
		
		
    };

    hide = () => {
        this.hideOverlay();
        this.removeModules();
        this.img = undefined;
    };

    setUserSelect = (value) => {
        [
            'userSelect',
            'mozUserSelect',
            'webkitUserSelect',
            'msUserSelect',
        ].forEach((prop) => {
            // set on contenteditable element and <html>
            this.quill.root.style[prop] = value;
            document.documentElement.style[prop] = value;
        });
    };

    checkImage = (evt) => {
        if (this.img) {
            if (evt.keyCode == 46 || evt.keyCode == 8) {
                window.Quill.find(this.img).deleteAt(0);
            }
            this.hide();
        }
    };
}

if (window.Quill) {
    window.Quill.register('modules/imageResize', ImageResize);
}
