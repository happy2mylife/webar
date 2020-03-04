let video;
let canvas;
let ctx;

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
  video = $("#camera"); // === document.querySelector("#camera");
  canvas = $("#picture"); // === document.querySelector("#picture");
  ctx = canvas.getContext("2d");


  //ユーザーの現在の位置情報を取得
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  /** カメラ設定 */
  const constraints = {
    audio: false,
    video: {
      facingMode: "environment"
    }
  };

  /**
   * カメラを<video>と同期
   */
  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream;
      video.onloadedmetadata = (e) => {
        video.play();
        // QRコードのチェック開始
        checkPicture();
      };
    })
    .catch((err) => {
      console.log(err.name + ": " + err.message);
    });
}

function displayARObj() {
  // TDO QR読み込み用のカメラを止めないと、VR用のカメラが起動しないと思われる
  video.srcObject.getVideoTracks()[0].stop();
  arObj.style.visibility = "visible";
  arObj.click();
}