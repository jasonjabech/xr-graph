'use strict';

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
  }

let xParam = findGetParameter("xFunctionText");
let yParam = findGetParameter("yFunctionText");
let zParam = findGetParameter("zFunctionText");

const uMin = findGetParameter("umin");
const uMax = findGetParameter("umax");
const vMin = findGetParameter("vmin");
const vMax = findGetParameter("vmax");

const tMin = findGetParameter("tmin");
const tMax = findGetParameter("tmax");

const aFactor = findGetParameter("afactor");
const bFactor = findGetParameter("bfactor");


let functionParams = []
functionParams.push(xParam);
if (zParam) {
    functionParams.push(zParam);
}
functionParams.push(yParam);

let link = "https://localhost:8080?function=";
if (tMin == null) {
    link += "[" + functionParams.join(', ') + "]"
    if (uMin != null) {
        link += "&uMin=" + uMin
    }
    if (uMax != null) {
        link += "&uMax=" + uMax
    }
    if (vMin != null) {
        link += "&vMin=" + vMin
    }
    if (vMax != null) {
        link += "&vMax=" + vMax
    }
} else {
    link += "[" + functionParams.join(', ') + "]"
    if (tMin != null) {
        link += "&tMin=" + tMin
    }
    if (tMax != null) {
        link += "&tMax=" + tMax
    }
}
link += "&a=" + aFactor;
link += "&b=" + bFactor;


let button = document.createElement("a");
button.innerText = "View in VR"
button.id = "vr-button"
button.href = link;
button.target = "_blank"
document.body.append(button);