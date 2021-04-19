{
    const STYLES = new Map();
    //可扩展的对象数组，key 缩写前缀，value 对应的样式
    [
        { "a": "align" },
        { "b": "border", "b-c": "border-color", "b-r": "border-radius", "b-w": "border-width" },
        { "bg": "background", "bg-c": "background-color", "bg-i": "background-image" },
        { "c": "color" },
        { "d": "display" },
        { "f": "float" },
        { "font": "font-size" },
        { "m": "margin", "m-t": "margin-top", "m-b": "margin-bottom", "m-l": "margin-left", "m-r": "margin-right" },
        { "pd": "padding", "pd-t": "padding-top", "pd-b": "padding-bottom", "pd-l": "padding-left", "pd-r": "padding-right" },
        { "ps": "position" },
        { "top": "top" },
        { "bottom": "bottom" },
        { "left": "left" },
        { "right": "right" },
        { "tf": "transform" },
        { "w": "width" },
        { "h": "height" },
        { "ta": "text-align" },
        { "vta": "vertical-align" },
        { "lh": "line-height" },
        { "display": "display" },
        { "j-c": "justify-content"},
        { "a-i": "align-items"},
        { "a-c": "align-content"},
    ].forEach((v) => {
        for (let k of Object.keys(v)) {
            STYLES.set(k, v[k]);
        }
    });
    
    function getAllElements() {
        let elements = [];
        let objs = document.all;
        for (let i = 0; i < objs.length; i++) {
            let obj = objs[i].tagName;
            if (obj == "html" || obj == "head" || obj == "meta" || obj == "link" || obj == "style" || obj == "script") {
                continue;
            }
            elements.push(objs[i]);
        }

        return elements;
    }
    function loadQuickStyle() {
        let elementsData = getAllElements();
        elementsData.forEach((value) => {
            var classList = value.classList;
            for (let classes of classList) {
                let tmp = classes.split("_");
                if (STYLES.has(tmp[0])) {
                    value.style[STYLES.get(tmp[0])] = tmp[1].replace("&", " ");
                }
            }
        });
    }
    window.addEventListener("load", loadQuickStyle, false);
    window.reloadQuickStyle = loadQuickStyle;
} (window);