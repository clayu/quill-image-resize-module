const Parchment = Quill.import('parchment');
const BaseImage = Quill.import('formats/image');

const ATTRIBUTES = [
  'alt',
  'height',
  'width',
  'style',
  'data-full-width',
  'data-full-height',
  'data-crop-top',
  'data-crop-bottom',
  'data-crop-left',
  'data-crop-right',
  'data-pan-top',
  'data-pan-left'
];

const WHITE_STYLE = ['margin', 'display', 'float','object-position','background-image','background-position','background-repeat','background-size'];

class Image2 extends BaseImage {
  static formats(domNode) {
    return ATTRIBUTES.reduce(function(formats, attribute) {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }
  
  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        if (name === 'style') {
			console.log(value);
          value = this.sanitize_style(value);
        }
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

  sanitize_style(style) {
    let style_arr = style.split(";")
    let allow_style = "";
    style_arr.forEach((v, i) => {
      if (WHITE_STYLE.indexOf(v.trim().split(":")[0]) !== -1) {
        allow_style += v + ";"
      }
    })
    return allow_style; 
  } 
}

console.log("[ResizeImage] registering image");
Quill.register({"formats/image":Image2});
export default Image2;