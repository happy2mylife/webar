let urlInQR;

const arObjPlane = "./assets/toy_biplane.usdz";

/**
 * jQuery style wrapper
 *
 * @param {string} selector
 * @return {Object}
 */
function $(selector) {
  return (document.querySelector(selector));
}

function onLoad() {
  arObj.addEventListener("message", (event) => {}, false);
}

function displayARObj() {
  // TDO QR読み込み用のカメラを止めないと、VR用のカメラが起動しないと思われる
  video.srcObject.getVideoTracks()[0].stop();
  arObj.style.visibility = "visible";
  arObj.click();
}

function setARCustomBanner(data) {

  callToAction = `callToAction=Jump%20to%20site`;
  checkoutTitle = `checkoutTitle=映画ログプラス`;
  checkoutSubtitle = `checkoutSubtitle=映画の魅力再発見`;
  urlInQR = data;
  arObj.href = `${arObjPlane}#custom=${urlInQR}`;
  // TODO callToactionで表示されず・・
  //arObj.href = `${arObjPlane}#${callToAction}&${checkoutTitle}&${checkoutSubtitle}`;
}