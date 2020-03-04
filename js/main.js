let video;
let canvas;
let ctx;

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
      width: 300,
      height: 200,
      facingMode: "user" // フロントカメラを利用する
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
  arObj.style.visibility = "visible";
}